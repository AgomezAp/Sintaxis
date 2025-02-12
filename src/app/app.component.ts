import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';

import {
  PageTransitionComponent,
} from './components/page-transition/page-transition.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PageTransitionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sintaxis';
  overlayState: 'hidden' | 'visible' = 'hidden';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.overlayState = 'visible'; // Activa animación de entrada
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // Espera a que la nueva página esté lista antes de ocultar
        setTimeout(() => {
          this.overlayState = 'hidden'; // Activa animación de salida
        }, 1250);
      }
    });
  }
}
