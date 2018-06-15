import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  @Input() modalHeader = '';
  @Input() modalBody = '';

  constructor() { }

  ngOnInit() {
  }



}
