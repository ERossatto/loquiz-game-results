// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public lang: string;

  constructor() {
    this.setLangEN();
  };

  public setLangPT(): void {
    this.lang = 'pt';
  }

  public setLangEN(): void {
    this.lang = 'en';
  }
}
