import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

  testButtonStatus = false;
  testInput = 'initialValue'

  constructor() {
      setInterval(() => {
        this.testButtonStatus = !this.testButtonStatus;
        this.testInput = 'value from interval';
      },5000);
  }

  ngOnInit() {
  }


}
