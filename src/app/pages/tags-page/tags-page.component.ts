import {Component, OnDestroy, OnInit} from '@angular/core';
import {TagsService} from '../../services/tags.service';
import {Subject} from 'rxjs';
import {ITag} from '../../models/response-models';
import {TagFilterService} from '../../services/tag-filter.service';
import {takeUntil} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit, OnDestroy {
  public tags: ITag[];
  public filter: string;
  public ngUnsubscribe: Subject<void> = new Subject();
  public pageSize = 6;
  public startIndex = 0;
  public endIndex = this.pageSize;
  public length = 0;

  constructor(private tagsService: TagsService,
              private filterService: TagFilterService) {
  }

  ngOnInit(): void {
    this.filterService.filter$
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value => this.filter = value,
        error => console.log(error));

    this.getTags();
  }

  getTags(): void {
    this.tagsService
      .getTags()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(tags => {
          this.tags = tags;
          this.length = this.tags.length;
        },
        error => console.log(error));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }

  changePage($event: PageEvent): void {
    this.startIndex = $event.pageIndex * $event.pageSize;
    this.endIndex = this.startIndex + $event.pageSize;
    if (this.endIndex > this.tags.length) {
      this.endIndex = this.tags.length;
    }
  }
}
