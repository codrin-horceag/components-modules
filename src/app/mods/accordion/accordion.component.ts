import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  openItemIndex = 0;

  @Input() accordionItems = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(i: number) {
    if (i === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = i;
    }
  }

}
