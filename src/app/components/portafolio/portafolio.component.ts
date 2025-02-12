import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-portafolio',
  imports: [NavbarComponent],
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger('100ms', [
            animate('800ms 1250ms cubic-bezier(0.4, 0, 0.2, 1)'), 
              style({ opacity: 1, transform: 'translateY(0)' })
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PortafolioComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = parseInt(element.getAttribute('data-delay') || '0');
          
          setTimeout(() => {
            element.classList.add('animate-in');
          }, 0 + delay);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('[data-animation]').forEach(el => {
      observer.observe(el);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elements = this.el.nativeElement.querySelectorAll('[data-animation]');
    elements.forEach((element: HTMLElement) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        const delay = parseInt(element.dataset['delay'] || '0');
        setTimeout(() => {
          element.classList.add('animate-in');
        }, 1250 + delay);
      }
    });
  }
}