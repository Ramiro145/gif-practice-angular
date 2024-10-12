import { Component, Input } from '@angular/core';
import { Gif, GifValues } from '../../interfaces/search-response.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent {

  @Input()
  public gifList!:Gif[];

}
