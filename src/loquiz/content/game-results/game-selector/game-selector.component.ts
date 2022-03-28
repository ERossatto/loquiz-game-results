import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IGame } from 'src/shared/interfaces/game.interface';

@Component({
  selector: 'loquiz-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss']
})
export class GameSelectorComponent implements OnInit {

  @Input() gameList: IGame[];
  @Input() gameIdSelected: string;

  @Output() gameIdChange: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
