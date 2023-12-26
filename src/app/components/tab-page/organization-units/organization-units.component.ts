import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationUnits } from '@ministry/interfaces';
import { OrganizationUnitsService } from '@ministry/services';

import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, IDetailCellRendererParams } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-organization-units',
  standalone: true,
  imports: [ CommonModule, AgGridModule ],
  templateUrl: './organization-units.component.html',
  styleUrl: './organization-units.component.css'
})
export class OrganizationUnitsComponent {
  
  public themeClass: string = "ag-theme-quartz"; 

  private gridApi!: GridApi<OrganizationUnits>;

  public colDefs: ColDef[] = [
    { headerName:'Κωδικός', field:'code', cellRenderer: 'agGroupCellRenderer' },
    { headerName:'Φορέας', field:'preferredLabel' },
    { headerName:'Εποπτεύοντας φορέας', field:'subOrganizationOf.preferredLabel' },
    { headerName:'Τύπος φορέα', field:'organizationType.description' },
    { headerName:'Λειτουργία', field:'purpose',  
      valueGetter: params => {
        if (params.data.purpose) {
          const data = params.data.purpose; 
          const purpose: string[] = [];
          data.forEach(function(x: { description: string; }){
            purpose.push(x.description);
          });
            return purpose.join(',');
        } else {
          return undefined;
        } 
      } 
    }
  ];
  
  public defaultColDef: ColDef = {
    sortable:true, 
    filter:'agTextColumnFilter', 
    suppressSizeToFit:true, 
    resizable:true,
    floatingFilter: true,
    
  };

  public detailCellRendererParams: any = {
    detailGridOptions: {
      columnDefs: [
        { headerName:'Κωδικός', field: 'code' },
        { headerName:'Μονάδα', field: 'preferredLabel' },
        { headerName:'Λειτουργία', field: 'purpose',  
            valueGetter: params => {
              if (params.data.purpose) {
                const data = params.data.purpose; 
                const purpose: string[] = [];
                data.forEach(function(x: { description: string; }){
                  purpose.push(x.description);
                });
                return purpose.join(',');
              } else {
                return undefined;
              } 
            }  
        },
        { headerName:'Τύπος μονάδος', field: 'unitType.description', minWidth: 150 },
      ],
      defaultColDef: {
        flex: 1,
      },
    },
    getDetailRowData: (params) => {
      params.successCallback(params.data.units);
    },
  } as IDetailCellRendererParams<OrganizationUnits>;
  
  public rowData$!: Observable<OrganizationUnits[]>;
  organizationUnitsService =  inject(OrganizationUnitsService);

  public overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>';
  
  public overlayNoRowsTemplate =
    '<span style="padding: 10px;">Loading data...</span>'

    onGridReady(params: GridReadyEvent<OrganizationUnits>) {
      this.gridApi = params.api;
      
      this.rowData$ = this.organizationUnitsService.organizations_units$;
  
      if (!this.rowData$) {
        this.gridApi.hideOverlay();
      } 
    }  
}
