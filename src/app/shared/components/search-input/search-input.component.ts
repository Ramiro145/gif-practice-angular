import { Component, EventEmitter, inject, Output } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';
import { Gif, GifValues } from '../../../gifs/interfaces/search-response.interface';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {

  private gifService = inject(GifService);

  @Output()
  public searchEvent:EventEmitter<GifValues> = new EventEmitter();

  public gifList:Gif[] = [];

  public gifTag:string = '';

  public gifsInPage:string[] = [];


  searchValue(value:string){

    if(value.trim().length <=0 ) return;
    if(this.gifsInPage.includes(value.trim().toLowerCase()))return;

    this.gifService.searchGifs(value.trim().toLowerCase())
    .subscribe({
      next: (resp)=>{

        const gifValue:GifValues = {
            gifTag: value,
            gifsList: resp.data
        }


        this.gifsInPage.push(value);

        this.searchEvent.emit(gifValue);
        ;
      },
      error: (err) => {
        console.error('Error al buscar gifs: ', err);
      }
    })

  }




}
