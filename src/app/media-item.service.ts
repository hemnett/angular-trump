import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: String;
  year: number;
  watchedOn: Number;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MediaItemService implements OnInit {

  private medias: MediaItem[];

  private mediaItemsUrl = 'api/medias';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMediaItems().subscribe(
      data => this.medias = data);
  }

  getMediaItems(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(this.mediaItemsUrl);
  }

  get() {
    return this.medias;
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
