import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  @Input() modalOpen = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
