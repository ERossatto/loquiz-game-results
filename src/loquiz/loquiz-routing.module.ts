// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutProjectComponent } from './content/about-project/about-project.component';
import { GameResultsComponent } from './content/game-results/game-results.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'game-results'},
  {
    path: 'game-results',
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  { path: 'game-results', component: GameResultsComponent },
  { path: 'about-project', component: AboutProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class LoquizRoutingModule { };
