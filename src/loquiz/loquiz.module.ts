import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/shared/material/material.module';
import { LoquizRoutingModule } from './loquiz-routing.module';
import { HeaderModule } from './header/header.module';
import { MenuModule } from './menu/menu.module';

import { LoquizComponent } from './loquiz.component';

@NgModule({
  declarations: [
    LoquizComponent,
  ],
  imports: [
    BrowserModule,
    LoquizRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [LoquizComponent]
})
export class LoquizModule { }
