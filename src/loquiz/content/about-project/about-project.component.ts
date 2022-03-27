// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

// Utils
import { texts } from '@texts';

@Component({
  selector: 'loquiz-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.scss']
})
export class AboutProjectComponent implements OnInit {

  public texts = texts.gameResults;

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

}
