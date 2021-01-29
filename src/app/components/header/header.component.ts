import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FilterService} from '../../services/filter.service';
import {TagsService} from '../../services/tags.service';
import {FavoritesService} from '../../services/favorites.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public filterValue: FormControl = this.fb.control('', Validators.required);
  public ngUnsubscribe: Subject<void> = new Subject();

  constructor(private fb: FormBuilder,
              private filterService: FilterService,
              private tagsService: TagsService,
              private favoritesService: FavoritesService) {
  }

  ngOnInit(): void {
  }

  clearFilter(): void {
    this.filterValue.patchValue('');
  }
}
