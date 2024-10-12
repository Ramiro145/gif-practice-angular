import { Component } from '@angular/core';
import { Gif, GifObject, GifValues } from '../../interfaces/search-response.interface';

@Component({
  selector: 'app-gif-page',
  templateUrl: './gif-page.component.html',
  styleUrl: './gif-page.component.css'
})
export class GifPageComponent {

  public gifListValue:GifValues[] = [];


  searchValues(gifValue:GifValues):void{
    this.gifListValue.push(gifValue);
  }


}
