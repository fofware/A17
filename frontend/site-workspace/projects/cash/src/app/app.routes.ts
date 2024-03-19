import { Routes } from '@angular/router';
import { NoPageComponent } from './components/no-page/no-page.component';
import { inject } from '@angular/core';
import { UsersService } from './users/services/users.service';
export const routes: Routes = [
  /*
  {
    path: '',
    canMatch: [() => inject(UsersService).isLogged()],
    loadComponent: () => import('./users/components/home/home.component')
                        .then(mod => mod.HomeComponent)
  },
  */
  {
    path: '',
    //canMatch: [() => !(inject(UsersService).isLogged())],
    loadComponent: () =>
      import('./components/home/home.component')
      .then((mod) => mod.HomeComponent)
  },
  {
    path: 'articulos',
    loadChildren: () =>
      import('./components/articulos/articulos.routes')
      .then(mod => mod.ARTICULOS_ROUTES)
  },
  {
    path: 'user',
    /*
    canActivate: [() => {
      const ret = inject(UsersService).isLogged();
      return ret;
    }],
    */
    loadChildren: () =>
      import('./users/users.routes')
      .then(mod => mod.USERS_ROUTES)
  },
/*
  {
    path:'whatsapp',
    loadChildren: () => import('./wapp/wapp.routes').then( mod => mod.WAPP_ROUTES)
  },
*/
/*
  {
    path: 'system',
    //canMatch: [() => inject(AuthService).isLogged],
    loadChildren: () => import('./system/system.routes')
                      .then(mod => mod.SYSTEM_ROUTES)
  },
*/
{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
},
{
    path: '**',
    component: NoPageComponent,
  },
];
