// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

@Component({
  selector: 'loquiz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

}
