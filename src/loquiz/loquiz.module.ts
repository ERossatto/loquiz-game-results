import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/shared/material/material.module';
import { HeaderModule } from './header/header.module';
import { LoquizRoutingModule } from './loquiz-routing.module';

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
  ],
  providers: [],
  bootstrap: [LoquizComponent]
})
export class LoquizModule { }
