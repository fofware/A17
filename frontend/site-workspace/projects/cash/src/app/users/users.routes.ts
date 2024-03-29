import { Routes } from '@angular/router'
/*
import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha'
import { environment } from 'src/environments/environment';
*/
import { notLoggedGuard } from './guards/not-logged.guard';
import { NoPageComponent } from '../components/no-page/no-page.component';
//import { userIsLogged, userLogged } from './services/users.service';

export const USERS_ROUTES: Routes = [
  {
    path: 'signup',
    /*
    providers:[
      {
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.siteKey
      },
    ],
    */
    canActivate: [
    //  () => !userIsLogged()
    ],
    loadComponent: () =>
      import('./components/sign-up/sign-up.component')
      .then(mod => mod.SignUpComponent)
  },
  {
    path: 'changepass',
    canActivate: [
    //  () => userIsLogged()
    ],
    loadComponent: () =>
      import('./components/change-password/change-password.component' )
      .then( mod => mod.ChangePasswordComponent)
  },
  {
    path: 'profile',
    canActivate: [
    //  () => userIsLogged()
    ],
    loadComponent: () =>
      import('./components/profile/profile.component' )
      .then( mod => mod.ProfileComponent)
  },
  {
    path: 'forgot',
    canActivate: [
      //() => !userIsLogged()
      //notLoggedGuard
    ],
    loadComponent: () =>
      import('./components/forgot-pass/forgot-pass.component')
      .then(mod => mod.ForgotPassComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./users.component')
      .then(mod => mod.UsersComponent),
    /*
    canMatch: [
      //() => userLogged().emailvalidated,
      //!notLoggedGuard
    ],
    */
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component')
          .then(mod => mod.HomeComponent),

        //canMatch: [
        //  //() => userIsLogged(),
        //  //!notLoggedGuard
        //],

      },
      /*
      {
        path: 'menues',
        loadComponent: () =>
          import('../system/components/menues/menues.component')
          .then( mod => mod.MenuesComponent)
      },
      */
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NoPageComponent,
      },

    ]
  },
  {
    path: '',
    canMatch: [
      //() => !userLogged().emailvalidated,
      //() => userIsLogged(),
      notLoggedGuard
    ],
    loadComponent: () => import('./components/email-validate/email-validate.component')
                        .then(mod => mod.EmailValidateComponent)
  },
]
