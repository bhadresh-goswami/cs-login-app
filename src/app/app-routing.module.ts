import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { AuthGuard } from './shared/auth.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { TechnologyComponent } from './exam/technology/technology.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'create',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'techs',
    component: TechnologyComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
