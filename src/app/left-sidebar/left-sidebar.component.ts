import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  newGroupStatus = 'No new group has been added';

  constructor() { }

  ngOnInit() {
  }

  addNewGroup(){
    this.newGroupStatus = 'New group has been added';
  }

}
