import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
const routes: Routes = [
  {path:'',redirectTo:'firstpage',pathMatch:'full'},
  {path:'firstpage',component:FirstpageComponent},
  {path:'secondpage',component:SecondpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
