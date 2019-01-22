import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface Media {
  id: number;
  name: string;
  medium: string;
  category: String;
  year: number;
  watchedOn: Number;
  isFavorite: boolean;
}

interface MediaResponse {
  medias: Media[];
}

@Injectable()
export class MediaItemService {

  private mediaItemsUrl = 'api/medias';

  constructor(private http: HttpClient) { }

  // getMediaItems(): Observable<Media[]> {
  //   return this.http.get<Media[]>(this.mediaItemsUrl);
  // }

  get() {
    return this.http.get<MediaResponse>(this.mediaItemsUrl).pipe(
      map( (response: MediaResponse) => {
        return response.medias;
      })
    );
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
