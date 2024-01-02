import { Component, ViewChild, ElementRef, effect } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationUnitsComponent } from './organization-units/organization-units.component';
import { SearchComponent } from './search/search.component';

import { OrganizationService } from '@ministry/services';
import { inject } from '@angular/core';

@Component({
  selector: 'app-tab-page',
  standalone: true,
  imports: [RouterLink, OrganizationsComponent, OrganizationUnitsComponent, SearchComponent ],
  templateUrl: './tab-page.component.html',
  styleUrl: './tab-page.component.css'
})
export class TabPageComponent {

  @ViewChild('tabForeis') tabForeis!: ElementRef;
  @ViewChild('tabMonades') tabMonades!: ElementRef;
  @ViewChild('tabAnazitisi') tabAnazitisi!: ElementRef;

  @ViewChild('txtForeis') txtForeis!: ElementRef;
  @ViewChild('txtMonades') txtMonades!: ElementRef;
  @ViewChild('txtAnazitisi') txtAnazitisi!: ElementRef;

  organizationService = inject(OrganizationService);

  public codes: string[] | undefined

  constructor() {
    effect(() => {
      this.codes = this.organizationService.ouCodes$();
    });
  }

  toggleTab(elementId: any) {

    switch(elementId) { 
      case "tabForeis": { 
        this.tabForeis.nativeElement.parentElement.classList.add('govgr-tabs__list-item-selected');
        this.tabMonades.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');
        this.tabAnazitisi.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');

        this.txtForeis.nativeElement.classList.add('govgr-tabs__panel-visible');
        this.txtMonades.nativeElement.classList.remove('govgr-tabs__panel-visible');
        this.txtAnazitisi.nativeElement.classList.remove('govgr-tabs__panel-visible');
        break; 
      } 
      case "tabMonades": { 
        this.tabForeis.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');
        this.tabMonades.nativeElement.parentElement.classList.add('govgr-tabs__list-item-selected');
        this.tabAnazitisi.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');

        this.txtForeis.nativeElement.classList.remove('govgr-tabs__panel-visible');
        this.txtMonades.nativeElement.classList.add('govgr-tabs__panel-visible');
        this.txtAnazitisi.nativeElement.classList.remove('govgr-tabs__panel-visible');
        break; 
      }
      default: { 
        this.tabForeis.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');
        this.tabMonades.nativeElement.parentElement.classList.remove('govgr-tabs__list-item-selected');
        this.tabAnazitisi.nativeElement.parentElement.classList.add('govgr-tabs__list-item-selected');
        
        this.txtForeis.nativeElement.classList.remove('govgr-tabs__panel-visible');
        this.txtMonades.nativeElement.classList.remove('govgr-tabs__panel-visible');
        this.txtAnazitisi.nativeElement.classList.add('govgr-tabs__panel-visible');
        break; 
      } 
    } 

    // this.tab_foreis.nativeElement.classList.remove()
  }
}
