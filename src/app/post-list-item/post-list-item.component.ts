import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListTitre: String;
  @Input() postListDate: Date;
  @Input() postListContenu: String;
  @Input() postLove: number;

  constructor() { }

  ngOnInit() {
  }

  LoveAdd() {
    this.postLove = ++this.postLove;
  }

  LoveHate() {
    this.postLove = --this.postLove;
  }


}
