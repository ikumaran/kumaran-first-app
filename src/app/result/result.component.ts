import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  countries = [];
  constructor() { }

  ngOnInit() {
    this.countries = [{
      code: 'IND',
      name: 'India'
    }, {
      code: 'USA',
      name: 'United States of America'
    }, {
      code: 'PAK',
      name: 'Pakistan'
    }, {
      code: 'CHN',
      name: 'China'
    },
    {
      code: 'GBR',
      name: 'United Kingdom'
    }
    ];

  }

}
