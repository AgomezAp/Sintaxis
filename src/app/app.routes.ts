import { Routes } from '@angular/router';

import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {
  PoliticaprivacidadComponent,
} from './components/politicaprivacidad/politicaprivacidad.component';
import {
  PortafolioComponent,
} from './components/portafolio/portafolio.component';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
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
    },
    {
        path:'contacto', component:ContactoComponent
    },
    {
        path:'nosotros', component:NosotrosComponent
    },
    {
        path:'privacidad', component:PoliticaprivacidadComponent
    },
    {
        path:'seguridad', component:SeguridadComponent
    }

];
