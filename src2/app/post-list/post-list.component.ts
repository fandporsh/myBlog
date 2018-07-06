import { Component, Input, OnInit } from '@angular/core';
import {post} from 'selenium-webdriver/http';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
