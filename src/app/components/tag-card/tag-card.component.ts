import {Component, Input, OnInit} from '@angular/core';
import {ITag} from '../../models/response-models';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.scss']
})
export class TagCardComponent implements OnInit {
  @Input() tag: ITag;
  @Input() i: number;
imgSrc;
  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `assets/img/mus${this.i + 1}.jpg`;
  }

}
