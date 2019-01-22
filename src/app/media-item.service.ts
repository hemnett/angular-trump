import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

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

  get2(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>(this.mediaItemsUrl, getOptions);
  }

  add(mediaItem)  {
    console.log('Wywołuję POST mediaItemService', mediaItem);
    return this.http.post(this.mediaItemsUrl, mediaItem, cudOptions ).pipe(
      catchError(this.handleError)
      );
  }

  delete(mediaItem) {
    return this.http.delete(`${this.mediaItemsUrl}/${mediaItem.id}`, cudOptions ).pipe(
      catchError(this.handleError)
    );
    }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }

  }





