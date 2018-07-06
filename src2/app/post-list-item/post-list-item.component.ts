import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postName: string;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: string;

  constructor() { }
  ngOnInit() {
  }
  onLike() {
    this.postLikes++;
  }
  onUnlike() {
    this.postLikes--;
  }

}