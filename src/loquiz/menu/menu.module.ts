// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { MenuDashComponent } from './menu-dash/menu-dash.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuToggleComponent,
    MenuDashComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class MenuModule { };
