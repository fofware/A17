import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './interceptors/api.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      BrowserModule,
      NgbModule,
      BrowserAnimationsModule,
       //SocketIoModule.forRoot(config)
    ),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(
      withInterceptors([apiInterceptor,tokenInterceptor]),
      withFetch()
    )
  ]
};
