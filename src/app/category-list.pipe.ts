import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems: any, args?: any): any {
    const categories = [];
    if (mediaItems) {
      mediaItems.forEach(mediaItem => {
        if (categories.indexOf(mediaItem.category) <= -1) {
          categories.push(mediaItem.category);
        }
      });
      return categories.join(', ');
    } else {
      return 1;
          }
  }

}
