// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from 'src/shared/material/material.module';
import { ContentRoutingModule } from './content.routing.module';

// Components
import { GameResultsComponent } from './game-results/game-results.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { GameSelectorComponent } from './game-results/game-selector/game-selector.component';
import { TeamsInfoComponent } from './game-results/teams-info/teams-info.component';

@NgModule({
  declarations: [
    GameResultsComponent,
    AboutProjectComponent,
    GameSelectorComponent,
    TeamsInfoComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MaterialModule,
  ]
})
export class ContentModule { };
