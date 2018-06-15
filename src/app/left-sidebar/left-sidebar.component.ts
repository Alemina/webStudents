import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  groups = ['Test grupa 1', 'Test grupa 2'];
  modalVisibleStatus = false;

  constructor() { }

  ngOnInit() {
  }

  handleNewGroup() {
    this.modalVisibleStatus = true;
  }

  onModalClose() {
    this.modalVisibleStatus = false;
  }

}
