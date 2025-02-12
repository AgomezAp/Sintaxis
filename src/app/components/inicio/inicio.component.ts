import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChildren,
} from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s ease-in', style({ opacity: 1 }))]),
    ]),
  ],
})
export class InicioComponent implements AfterViewInit {
  @ViewChildren('section') sections!: any;

  ngAfterViewInit(): void {
    this.initAnimations();
  }
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  private initAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.45,
      rootMargin: '0px 0px -50px 0px'
    });

    this.sections.forEach((section: ElementRef) => {
      observer.observe(section.nativeElement);
    });
  }
}
