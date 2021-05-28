import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBugComponent } from '../app/create-bug/create-bug.component';
import { SearchBugComponent } from '../app/search-bug/search-bug.component';
import { LoginComponent } from '../app/login/login.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

const routes: Routes = [
{path:"",redirectTo:"/login",pathMatch:"full"} , 
{path:"search",component:SearchBugComponent} ,
{path:"new",component:CreateBugComponent},
{path:"login",component:LoginComponent },
{path:"**",component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchBugComponent, CreateBugComponent]
