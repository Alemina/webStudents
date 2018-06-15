import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() hyperlinkClicked = new EventEmitter<string>();

  onHyperlinkClicked(clickedTab: string) {
    this.hyperlinkClicked.emit(clickedTab);
  }

  constructor() { }

  ngOnInit() {
  }

}
