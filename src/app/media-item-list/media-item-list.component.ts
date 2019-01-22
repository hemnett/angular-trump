import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';



@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

mediaItems;
medium = 'Movies';
test;

constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.getMediaItems(this.medium);
    // this.mediaItemService.get2().subscribe(
    //   (value) => { console.log('Received value TEST: ', value); this.test = value; },
    //   (error) => { console.log('Error!! TEST', error); },
    //   () => { console.log('End of values TEST'); }
    // );
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get2(this.medium).subscribe(
      (value) => { console.log('Received value: ', value); this.mediaItems = value; },
      (error) => { console.log('Error!!', error); },
      () => { console.log('End of values'); }
    );
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem).subscribe( () => {
      this.getMediaItems(this.medium);
    });
   }
}
