import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-nosotros',
  imports: [NavbarComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements AfterViewInit, OnDestroy {
  @ViewChild('valuesSection') valuesSection!: ElementRef;
  @ViewChild('teamSection') teamSection!: ElementRef; // Asegúrate de tener esta línea
  private observers: IntersectionObserver[] = [];

  ngAfterViewInit() {
    this.setupValueAnimations();
    this.setupTeamAnimations();
  }

  ngOnDestroy() {
    this.cleanupObservers();
  }

  private setupValueAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.valuesSection?.nativeElement) {
            const valueItems = Array.from(
              entry.target.querySelectorAll('.value-item')
            ) as HTMLElement[];
            
            valueItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, index * 300);
            });
          }
        });
      }, 
      { threshold: 0.3 }
    );
    
    if (this.valuesSection?.nativeElement) {
      observer.observe(this.valuesSection.nativeElement);
      this.observers.push(observer);
    }
  }

  private setupTeamAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && this.teamSection?.nativeElement) {
            const title = entry.target.querySelector('h2');
            const text = entry.target.querySelector('p');
            const button = entry.target.querySelector('.contact-button');
            
            [title, text, button].forEach((el, index) => {
              setTimeout(() => el?.classList.add('active'), index * 300);
            });
          }
        });
      }, 
      { threshold: 0.2 }
    );
    
    if (this.teamSection?.nativeElement) {
      observer.observe(this.teamSection.nativeElement);
      this.observers.push(observer);
    }
  }

  private cleanupObservers(): void {
    this.observers.forEach(observer => observer.disconnect());
  }
}
