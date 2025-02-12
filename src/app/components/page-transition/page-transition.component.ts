import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-page-transition',
  imports: [],
  templateUrl: './page-transition.component.html',
  styleUrl: './page-transition.component.css',
  animations: [
    trigger('slideOverlay', [
      state('hidden', style({
        transform: 'translateY(-100%)' // Comienza arriba
      })),
      state('visible', style({
        transform: 'translateY(0)' // Cubre toda la pantalla
      })),
      transition('hidden => visible', [
        animate('0.35s cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('visible => hidden', [
        animate('0.35s 0.6s cubic-bezier(0.4, 0, 0.2, 1)') // 0.3s de retraso antes de subir
      ])
    ])
  ]
})
export class PageTransitionComponent {
  @Input() animationState: 'hidden' | 'visible' = 'hidden'; 
  onAnimationDone(event: any) {
    console.log('Animación terminada:', event);
  }
}
