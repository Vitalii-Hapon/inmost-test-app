import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  album$: Observable<unknown>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.album$ = this.route.params.subscribe((param: Params) => console.log(param));
  }

}
