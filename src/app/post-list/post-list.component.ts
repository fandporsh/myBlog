import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  postLists = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.",
      loveIts: -1,
      created_at:  new Date
    },
    {
      title: "Mon deuxieme post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.",
      loveIts: 0,
      created_at: new Date
    },
    {
      title: "Mon troisieme post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan nisl id turpis ornare, sit amet ullamcorper purus condimentum.",
      loveIts: 2,
      created_at:  new Date
    }
  ];

  constructor() { }

  ngOnInit() {
  }




}
