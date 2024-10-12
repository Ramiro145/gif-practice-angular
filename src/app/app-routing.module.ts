import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'gifs',
    loadChildren: () => import('./gifs/gifs.module').then(m=>m.GifsModule)
  },
  {
    path:'**',
    redirectTo:'gifs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
