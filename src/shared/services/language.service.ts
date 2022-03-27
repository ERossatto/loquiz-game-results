// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public language: string;

  constructor() {
    this.setLanguageEN();
  };

  public setLanguagePT(): void {
    this.language = 'pt';
  }

  public setLanguageEN(): void {
    this.language = 'en';
  }
}
