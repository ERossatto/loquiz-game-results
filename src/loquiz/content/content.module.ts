// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from 'src/shared/material/material.module';
import { ContentRoutingModule } from './content.routing.module';

// Components
import { TestScreenComponent } from './test-screen/test-screen.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { AboutProjectComponent } from './about-project/about-project.component';

@NgModule({
  declarations: [
    TestScreenComponent,
    GameResultsComponent,
    AboutProjectComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MaterialModule,
  ]
})
export class ContentModule { }
