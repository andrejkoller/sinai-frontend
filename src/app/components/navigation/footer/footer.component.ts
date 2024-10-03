import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../../../services/component.service';
import { DarkmodeComponent } from '../../darkmode/darkmode.component';
import { DarkmodeService } from '../../../services/darkmode.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DarkmodeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  constructor(
    protected componentService: ComponentService,
    protected darkmodeService: DarkmodeService
  ) {}

  ngOnInit(): void {
    this.componentService.showFooter();
  }

  callSwitchMode(isDarkMode: boolean) {
    this.darkmodeService.switchMode(isDarkMode);
  }
}
