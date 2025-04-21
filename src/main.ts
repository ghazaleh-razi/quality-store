import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { LoginPageComponent } from './app/features/login/pages/login-page/login-page.component';
import { environment } from './environment/environment.prod';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(LoginPageComponent, {
  providers: [provideRouter(appRoutes), provideHttpClient()],
}).catch((err) => console.error(err));