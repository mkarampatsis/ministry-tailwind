import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, loadOrganizations, getOrganizations } from '@ministry/state';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ministry-tailwind';

  store = inject(Store<AppState>);

  // constructor() {}

  ngOnInit(){
    this.store.dispatch(loadOrganizations());
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
