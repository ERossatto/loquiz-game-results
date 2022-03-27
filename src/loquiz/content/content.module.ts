// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from 'src/shared/material/material.module';
import { ContentRoutingModule } from './content.routing.module';

// Components
import { GameResultsComponent } from './game-results/game-results.component';
import { AboutProjectComponent } from './about-project/about-project.component';

@NgModule({
  declarations: [
    GameResultsComponent,
    AboutProjectComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MaterialModule,
  ]
})
export class ContentModule { };
