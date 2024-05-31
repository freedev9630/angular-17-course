import { APP_INITIALIZER, ApplicationConfig, InjectionToken, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from './services/i18n.service';
import { authInterceptor } from './interceptors/auth.interceptor';

export const API_TOKEN = new InjectionToken('API_TOKEN');


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    importProvidersFrom([
      TranslateModule.forRoot(
        {
          defaultLanguage: 'es'
        }
      )
    ]),
    {
      useFactory: loadEnglishDataFactory,
      provide: APP_INITIALIZER,
      deps: [I18nService],
      multi: true
    },
    {
      useFactory: loadSpanishFactory,
      provide: APP_INITIALIZER,
      deps: [I18nService],
      multi: true
    }
  ]
};


function loadEnglishDataFactory(i18nService: I18nService) {
  return () => i18nService.loadEnglishData();
}

function loadSpanishFactory(i18nService: I18nService) {
  return () => i18nService.loadSpanishData();
}