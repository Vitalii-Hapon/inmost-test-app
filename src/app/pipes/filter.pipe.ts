import { Pipe, PipeTransform } from '@angular/core';
import {ITag} from '../models/response-models';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(tags: ITag[], filter: string = ''): ITag[] {
    if (!filter.toLowerCase().trim()) {
      return tags;
    } else {
      return tags.filter(tag => {
        return tag.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  }

}
