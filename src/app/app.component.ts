import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postLists = [
    new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.',
      0
    ),
    new Post(
      'Mon deuxieme post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.',
      -1
    ),
    new Post(
      'Mon troisieme post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.',
      2
    )
  ];


  constructor() { }
}
