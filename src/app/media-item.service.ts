import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: String;
  year: number;
  watchedOn: Number;
  isFavorite: boolean;
}

interface MediaItemsResponse {
  medias: MediaItem[];
}

@Injectable()
export class MediaItemService {

  private mediaItemsUrl = 'api/medias';

  constructor(private http: HttpClient) {}


  get() {
    return this.http.get<MediaItemsResponse>(this.mediaItemsUrl);
  }

  // probujemy zwrocic tablice a nie observables przy pomocy funkcji map z RxJS
  get2() {
    return this.http.get<MediaItemsResponse>(this.mediaItemsUrl);
    // .pipe(
    //   map( (response: MediaItemsResponse) => {
    //     return response.medias;
    //   }
    //   )
    // );
  }


  // add(mediaItem)  {
  //   this.mediaItems.push(mediaItem);
  // }

  // delete(mediaItem) {
  //   const index = this.mediaItems.indexOf(mediaItem);
  //   if (index >= 0) {
  //     this.mediaItems.splice(index, 1);
  //   }
}
