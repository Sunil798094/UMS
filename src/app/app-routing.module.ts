import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {component:LoginComponent, path:''},
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent,path:'register'},
  {component:UserComponent,path:'user',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
