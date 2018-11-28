import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'IBM', weight: 'VA', symbol: '11-28-2018'},
  {position: 2, name: 'ManTech', weight: 'TX', symbol: '11-28-2018'},
  {position: 3, name: 'Amazon', weight: 'FL', symbol: '11-28-2018'},
  {position: 4, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
  {position: 5, name: 'Booz Allen', weight: 'VA', symbol: '11-28-2018'},
  {position: 6, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
  {position: 7, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
  {position: 8, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
  {position: 9, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
  {position: 10, name: 'Leidos', weight: 'VA', symbol: '11-28-2018'},
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

