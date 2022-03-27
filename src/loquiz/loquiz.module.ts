import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoquizRoutingModule } from './loquiz-routing.module';
import { LoquizComponent } from './loquiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoquizComponent
  ],
  imports: [
    BrowserModule,
    LoquizRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [LoquizComponent]
})
export class LoquizModule { }
