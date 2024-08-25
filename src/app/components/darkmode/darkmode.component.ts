import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { DarkmodeService } from '../../services/darkmode.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [MatSlideToggleModule, NgClass],
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.scss',
})
export class DarkmodeComponent implements AfterViewInit {
  @Input() isDarkMode = false;

  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  @ViewChild('darkModeIcon') darkModeIcon: ElementRef | undefined;

  constructor(private darkmodeService: DarkmodeService) {}

  ngAfterViewInit(): void {
    this.updateIcon();
  }

  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
    this.updateIcon();
  }

  updateIcon() {
    if (this.darkModeIcon) {
      const iconElement = this.darkModeIcon.nativeElement;
      if (this.darkmodeService.isDarkMode) {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
      } else {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
      }
    }
  }
}
