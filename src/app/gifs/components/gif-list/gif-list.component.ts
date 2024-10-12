import { Component, Input } from '@angular/core';
import { Gif, GifValues } from '../../interfaces/search-response.interface';

@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {

  @Input()
  public gifListValues!:GifValues[];


}
