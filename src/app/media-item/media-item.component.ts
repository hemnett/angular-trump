import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  name = 'The Redemption';

  wasWatched() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
