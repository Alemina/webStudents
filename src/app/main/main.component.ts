import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentTab = 'advertisment';

  onNavigate(selectedTab: string) {
    this.currentTab = selectedTab;
  }

  constructor() { }

  ngOnInit() {
  }

}
