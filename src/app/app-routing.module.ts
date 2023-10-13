import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UnderConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
