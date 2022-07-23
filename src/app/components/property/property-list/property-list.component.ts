import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any>=[{
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":2,
    "Name":"Erose Villa",
    "Type":"Villa",
    "Price":14000
  },
  {
    "Id":3,
    "Name":"Mark Hill",
    "Type":"Flat",
    "Price":12500
  },
  {
    "Id":4,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":5,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":6,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":7,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":8,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
  {
    "Id":9,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
