import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VariantsComponent } from './variants/variants.component';


const routes: Routes = [{path:'',component:HomeComponent},{path:'home',component:HomeComponent},{path:'variants',component:VariantsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
