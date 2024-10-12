import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { GifLayoutComponent } from './layouts/gif-layout/gif-layout.component';

const routes: Routes = [
  {
    path:'',
    component:GifLayoutComponent,
    children:[
      {path:'gif', component:GifPageComponent},
      {path:'**', redirectTo:'gif'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
