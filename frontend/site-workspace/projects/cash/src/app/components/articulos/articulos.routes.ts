import { Routes } from '@angular/router'
import { NoPageComponent } from '../no-page/no-page.component'
/*
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha'
import { environment } from 'src/environments/environment';
*/
//import { userIsLogged, userLogged } from './services/users.service';

export const ARTICULOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./articulos.component')
      .then(mod => mod.ArticulosComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./list/list.component')
          .then(mod => mod.ListComponent),

        //canMatch: [
        //  //() => userIsLogged(),
        //  //!notLoggedGuard
        //],

      },
      {
        path: ':detail',
        loadComponent: () =>
          import('./detail/detail.component')
          .then(mod => mod.DetailComponent)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NoPageComponent,
      },

    ]
  }
]
