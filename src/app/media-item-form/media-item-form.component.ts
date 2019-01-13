import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { constants } from 'os';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  form;

  yearValidator(control) {
    if (control.value.trim().length === 0 ) {
      return null; // means that empty field is valid
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2010;
    if ( year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': {
        'min': minYear,
        'max': maxYear
      } };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'medium': new FormControl('Movies'),
      'name': new FormControl('', Validators.compose([
          Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      'category': new FormControl(''),
      'year': new FormControl('', this.yearValidator),
    });
  }

}
