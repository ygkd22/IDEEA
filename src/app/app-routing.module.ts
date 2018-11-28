import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AdminComponent } from './admin/admin.component';
import { VendorDetailComponent } from './admin/vendor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scorecard', component: ScorecardComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'vendor-detail', component: VendorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
