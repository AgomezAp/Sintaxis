import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-servicios',
  imports: [NavbarComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class ServiciosComponent implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;

  ngAfterViewInit() {
    // Agrega la clase después de un pequeño retraso para activar la animación
    setTimeout(() => {
      const blocks = this.section.nativeElement.querySelectorAll('.bloque');
      blocks.forEach((block: HTMLElement) => block.classList.add('animate-block'));
    }, 100);

    this.initIntersectionObserver();
  }

  initIntersectionObserver() {
    const sectionMedio = document.querySelector('.medio');

    // Opciones del Observer
    const observerOptions = {
      threshold: 0.3, // Activa cuando el 30% de la sección es visible
      rootMargin: '0px',
    };

    // Callback al intersectar
    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // Agrega la clase "active" a los bloques con retraso
          const bloques = entry.target.querySelectorAll('.bloque2');
          const iconos = entry.target.querySelectorAll('.side-icon');

          iconos.forEach((icon: any) => icon.classList.add('active'));

          bloques.forEach((bloque: any, index: any) => {
            setTimeout(() => {
              bloque.classList.add('active');
            }, index * 500); // Retraso de 300ms entre cada bloque
          });
        }
      });
    };

    // Crea el observer y observa la sección
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (sectionMedio) {
      observer.observe(sectionMedio);
    }
  }
}
