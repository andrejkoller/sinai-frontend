import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DarkmodeComponent } from '../../darkmode/darkmode.component';
import { DarkmodeService } from '../../../services/darkmode.service';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatMenuModule,
    MatButtonModule,
    DarkmodeComponent,
    NgClass,
    MatTooltip,
    MatCard,
    MatCardContent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  constructor(
    public componentService: ComponentService,
    public darkmodeService: DarkmodeService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  callSwitchMode(isDarkMode: boolean) {
    this.darkmodeService.switchMode(isDarkMode);
  }

  logout() {
    this.router.navigate(['/login']).then(() => {
      this.toastr.success('Logout successful');
    });
  }
}
