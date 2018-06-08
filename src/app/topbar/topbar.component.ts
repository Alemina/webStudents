import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  searchedName = '';

  constructor() { }

  ngOnInit() {
  }

  searchPeople(event: Event){
    this.searchedName = (<HTMLInputElement>event.target).value;
  }

}
