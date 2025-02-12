import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import {
  PortafolioComponent,
} from './components/portafolio/portafolio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
    },
    {
        path: 'inicio', component: InicioComponent
    },
    {
        path:'servicios',component:ServiciosComponent
    },
    {
        path:'portafolio',component:PortafolioComponent
    }

];
