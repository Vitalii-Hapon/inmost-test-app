import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {TagFilterService} from '../../services/tag-filter.service';
import {FavoritesService} from '../../services/favorites.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  private debounceTime = 1000;
  public filterValue: FormControl = this.fb.control('', Validators.required);
  public ngUnsubscribe: Subject<void> = new Subject();
  public favoritesCount$: Observable<number>;

  constructor(private fb: FormBuilder,
              private filterService: TagFilterService,
              private favoritesService: FavoritesService) {
  }

  ngOnInit(): void {
    this.onFilter();

    this.favoritesCount$ = this.favoritesService.favoritesCount$;
  }

  onFilter(): void {
    this.filterValue.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(this.debounceTime)
      ).subscribe(value => this.filterService.filter$.next(value),
      error => console.log(error));
  }

  clearFilter(): void {
    this.filterValue.patchValue('');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.unsubscribe();
  }
}
