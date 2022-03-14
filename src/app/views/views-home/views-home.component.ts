import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  items = [
    { image: '/assets/couch.jpeg', title: 'Couch', description: 'A comfortable couch!'},
    { image: '/assets/dresser.jpeg', title: 'Dresser', description: 'A spacious dresser!'}
  ];

  stats = [
    { value: 22, label: '# of users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
