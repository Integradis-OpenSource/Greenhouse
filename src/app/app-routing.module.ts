import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./greenhouse/pages/dashboard/dashboard.component";
import {StepperContentComponent} from "./greenhouse/components/stepper-content/stepper-content.component";
import { OrganizationContentComponent } from "./greenhouse/pages/organization-content/organization-content.component";
import {HarvestingInProgressComponent} from "./greenhouse/pages/harvesting-in-progress/harvesting-in-progress.component";
import {ProfileContentComponent} from "./greenhouse/pages/profile-content/profile-content.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {SignupComponent} from "./public/pages/signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'harvesting-in-progress', component: HarvestingInProgressComponent },
  { path: 'harvest', component: StepperContentComponent },
  { path: 'profile', component: ProfileContentComponent },
  { path: 'organization', component: OrganizationContentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
