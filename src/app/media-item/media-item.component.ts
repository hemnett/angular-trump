import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { delegateToClassInput } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem;

  @Output() delete = new EventEmitter;

  onDelete() {
    console.log('DELETED');
    this.delete.emit(this.mediaItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
