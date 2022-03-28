import { IGame } from "../interfaces/game.interface";

export class Game implements IGame {

  public id: string;
  public title: string;
  public type: string;
  public creatorName: string;
  public isPlayable: boolean;
  public timesPlayed: number;

  constructor(data: IGame) {
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.creatorName = data.creatorName;
    this.isPlayable = data.isPlayable;
    this.timesPlayed = data.timesPlayed;
  }
}
