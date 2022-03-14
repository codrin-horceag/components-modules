import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  items = [
    { title: 'Why is the sky blue?', content: 'Because of air' },
    { title: 'What does an orange taste like?', content: 'Like an orange citrus fruit.'}
  ];

  modalOpen = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
