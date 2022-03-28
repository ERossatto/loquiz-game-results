// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'src/shared/services/language.service';
import { GameService } from 'src/shared/services/game.service';

// Interfaces
import { IGame } from 'src/shared/interfaces/game.interface';
import { ITeam } from 'src/shared/interfaces/team.interface';

// Classes
import { Game } from 'src/shared/Classes/game.class';
import { Team } from 'src/shared/Classes/team.class';
import { SubscriptionManager } from 'src/shared/Classes/subscriptionManager.class';

// Utils
import { texts } from '@texts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'loquiz-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit, OnDestroy {

  public texts = texts.gameResults;

  private _sub$ = new SubscriptionManager();

  constructor(
    public ls: LanguageService,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.startComponent();
  }

  ngOnDestroy() {
    this._sub$.destroy();
  }

  public startComponent(): void {
    this.game.fillList();
    this.team.fillList();
  }

  public game: {
    list: IGame[],
    selected: IGame,
    fillList: () => void,
  } = {
    list: [],
    selected: undefined,

    fillList: (): void => {
      this._sub$.add(
        this.gameService.getList()
        .subscribe({
          next: (list) => {
            this.game.list = list['items'].map( (item) => new Game({
              id: item.id,
              title: item.title,
              type: item.gameType,
              creatorName: item.created.by.name,
              isPlayable: item.playable,
              timesPlayed: item.timesPlayed,
            }));
            console.log('game list: ', this.game.list);
          },
          error: (err) => {
            console.error('err: ', err);
          }
        }),
        'game_getList'
      );
    }, // fillList
  }; // game

  public team: {
    list: ITeam[],
    selected: ITeam,
    fillList: () => void,
  } = {
    list: [],
    selected: undefined,

    fillList: (): void => {
      this._sub$.add(
        this.gameService.getTeamListById(environment.loquizApi.GAME_ID_DEFAULT)
        .subscribe({
          next: (list) => {
            this.team.list = list['items'].map( (item) => new Team({
              id: item.id,
              name: item.name,
              odometer: item.odometer,
              startTime: item.startTime,
              finishTime: item.finishTime,
              isFinished: item.isFinished,
              totalScore: item.totalScore,
            }));
            console.log('team list: ', this.team.list);
          },
          error: (err) => {
            console.error('err: ', err);
          }
        }),
        'team_getTeamListById'
      );
    }, // fillList
  }; // team

}
