// Angular
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';

// Interfaces
import { IGame } from 'src/shared/interfaces/game.interface';

// Utils
import { texts } from '@texts';

@Component({
  selector: 'loquiz-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss']
})
export class GameSelectorComponent implements OnInit {

  @Input() gameList: IGame[];
  @Input() gameIdSelected: string;

  @Output() gameIdChange: EventEmitter<string> = new EventEmitter<string>();

  public texts = texts.gameResults.gameSelector;

  constructor(
    public ls: LanguageService,
  ) { }

  ngOnInit(): void {
  }

}
