import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private spanishData: any;
  private englishData: any;



  constructor(
    private readonly http: HttpClient
  ) { }

  async loadEnglishData() {
    this.englishData = await firstValueFrom(this.http.get('assets/i18n/en.json'));
  }

  get getEnglishData() {
    return this.englishData;
  }

  async loadSpanishData() {
    this.spanishData = await firstValueFrom(this.http.get('assets/i18n/es.json'));
  }

  get getSpanishData() {
    return this.spanishData;
  }
}
