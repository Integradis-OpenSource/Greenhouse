import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardContentComponent} from "./dashboard/components/dashboard-content/dashboard-content.component";
import {StepperContentComponent} from "./harvestings/components/stepper-content/stepper-content.component";
import {ProfileContentComponent} from "./profiles/users/components/profile-content/profile-content.component";
import { OrganizationContentComponent } from "./profiles/organizations/components/organization-content/organization-content.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContentComponent },
  { path: 'process-log', component: StepperContentComponent },
  { path: 'profile', component: ProfileContentComponent },
  { path: 'organization', component: OrganizationContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
