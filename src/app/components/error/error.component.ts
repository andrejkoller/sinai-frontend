import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  constructor(private componentService: ComponentService) {}

  ngOnInit(): void {
    this.componentService.hideHeader();
    this.componentService.hideSidebar();
    this.componentService.hideFooter();
  }
}
