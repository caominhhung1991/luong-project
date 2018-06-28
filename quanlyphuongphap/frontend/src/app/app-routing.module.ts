import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: MainComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }