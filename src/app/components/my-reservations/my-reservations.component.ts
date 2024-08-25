import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ComponentService } from '../../services/component.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { name: 'Helium', weight: 4.0026, symbol: 'He' },
  { name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { name: 'Boron', weight: 10.811, symbol: 'B' },
  { name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [MatTableModule, MatCard, MatCardContent, MatButtonModule],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss',
})
export class MyReservationsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideDate();
    this.componentService.hideDepartment();
    this.componentService.showMyReservationsTitle();
    this.componentService.hideFaqTitle();
    this.componentService.hideDashboardTitle();
  }
}
