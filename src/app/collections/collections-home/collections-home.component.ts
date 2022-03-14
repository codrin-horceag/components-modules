import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'hi';

  data = [
    {name: 'James', age: 30, job: 'Designer', employed: true},
    {name: 'Jill', age: 28, job: 'Engineer', employed: false},
    {name: 'Elise', age: 21, job: 'Engineer', employed: true}
  ];

  headers = [
    {key: 'name', label: 'Name' },
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
    {key: 'employed', label: 'Employed'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
