import { Component, OnInit } from '@angular/core';
import { CategoryListPipe } from '../category-list.pipe';
import { MediaItemService } from '../media-item.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Media {
  id: number;
  name: string;
  medium: string;
  category: String;
  year: number;
  watchedOn: Number;
  isFavorite: boolean;
}

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems: Media[];

  private myUrl = 'api/medias';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMedias().subscribe(
      data => this.mediaItems = data
    );
  }

getMedias(): Observable<Media[]> {
  return this.http.get<Media[]>(this.myUrl);
}


//   constructor(private mediaItemService: MediaItemService) { }

//   ngOnInit() {
//    this.mediaItemService.get().subscribe(mediaItems => {
//       this.mediaItems = mediaItems;
//     });
// }

  // onMediaItemDelete(mediaItem) {
  //   this.mediaItemService.delete(mediaItem);
  //  }
}
