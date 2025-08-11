import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AppConfigService } from './core/app-config.service';

export function loadAppConfig(configService: AppConfigService) {
  return () => configService.loadConfig(); // Must return a function that returns a Promise
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [AppConfigService],
      multi: true
    }]
};
