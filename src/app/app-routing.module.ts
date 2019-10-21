import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent} from './page-one/page-one.component';
import { PageTwoComponent} from './page-two/page-two.component';
import { PageSummaryComponent} from './page-summary/page-summary.component';


const routes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: 'page-two',
    component: PageTwoComponent
  },
  {
    path: 'page-summary',
    component: PageSummaryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
