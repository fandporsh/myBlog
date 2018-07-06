import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createdAt = new Date();
  public posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit ipsum iure laborum!',
      loveIts: '0',
      created_at: this.createdAt
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit ipsum iure laborum!',
      loveIts: '0',
      created_at: this.createdAt
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit ipsum iure laborum!',
      loveIts: '0',
      created_at: this.createdAt
    }
  ];

}

