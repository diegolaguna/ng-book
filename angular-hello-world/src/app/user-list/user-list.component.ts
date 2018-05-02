import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  names: string[];
  
  constructor() {
    this.names = ['Name 1', 'Name 2', 'Name 3', 'Name 4'];
  }

  ngOnInit() {
  }

}
