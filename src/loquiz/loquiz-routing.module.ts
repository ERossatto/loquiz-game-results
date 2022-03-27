import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestScreenComponent } from 'src/content/test-screen/test-screen.component';

const routes: Routes = [
  { path: '', component: TestScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoquizRoutingModule { }
