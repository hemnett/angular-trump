import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-in-memory-test',
  templateUrl: './in-memory-test.component.html',
  styleUrls: ['./in-memory-test.component.css']
})
export class InMemoryTestComponent implements OnInit {

  private medias: Media[];

  private myUrl = 'api/medias';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMedias().subscribe(
      data => this.medias = data
    );
  }

getMedias(): Observable<Media[]> {
  return this.http.get<Media[]>(this.myUrl);
}

}
