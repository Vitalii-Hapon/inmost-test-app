import { Pipe, PipeTransform } from '@angular/core';
import {IAlbum} from '../../../models/response-models';

@Pipe({
  name: 'albumFilter'
})
export class AlbumFilterPipe implements PipeTransform {

  transform(tags: IAlbum[], filter: string = ''): IAlbum[] {
    if (!filter.toLowerCase().trim()) {
      return tags;
    } else {
      return tags.filter(tag => {
        return tag.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  }

}
