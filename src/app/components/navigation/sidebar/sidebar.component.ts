import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(public componentService: ComponentService) {}

  ngOnInit(): void {
      this.componentService.showSidebar();
  }

}
