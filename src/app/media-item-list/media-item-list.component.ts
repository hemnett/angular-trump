import { Component, OnInit } from '@angular/core';
import { CategoryListPipe } from '../category-list.pipe';
import { MediaItemService } from '../media-item.service';

import { HttpClient } from '@angular/common/http';
import { Observable, VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

mediaItems;
test;

constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.mediaItemService.get().subscribe(
      (value) => { console.log('Received value: ', value); this.mediaItems = value; },
      (error) => { console.log('Error!!', error); },
      () => { console.log('End of values'); }
    );
  }

  // onMediaItemDelete(mediaItem) {
  //   this.mediaItemService.delete(mediaItem);
  //  }
}
