import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
