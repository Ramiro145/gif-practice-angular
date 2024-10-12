import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { GifListComponent } from './components/gif-list/gif-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { GifLayoutComponent } from './layouts/gif-layout/gif-layout.component';


@NgModule({
  declarations: [
    GifPageComponent,
    GifListComponent,
    GifCardComponent,
    GifLayoutComponent
  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    SharedModule
  ]
})
export class GifsModule { }
