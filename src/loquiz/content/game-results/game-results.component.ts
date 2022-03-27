// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

// Utils
import { texts } from '@texts';

@Component({
  selector: 'loquiz-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {

  public texts = texts.gameResults;

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

}
