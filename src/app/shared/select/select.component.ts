import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  constructor(
    private translate: TranslateService,
    private i18nService: I18nService
  ){}

  getLanguage(evt: Event) {
    const lang = (evt.target as HTMLSelectElement).value;
    sessionStorage.setItem('lang', lang);
    
    if (lang === 'en') {
      this.translate.setTranslation('en', this.i18nService.getEnglishData);
      this.translate.use('en');
    } else if (lang === 'es') {
      this.translate.setTranslation('es', this.i18nService.getSpanishData);
      this.translate.use('es');
    } else {
      console.log('fr');
      
      this.translate.use('fr');
    }
    
  }
}
