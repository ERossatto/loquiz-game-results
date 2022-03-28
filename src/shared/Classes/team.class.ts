import { ITeam } from "../interfaces/team.interface";
import LoquizDate from "../utils/loquiz-date";

export class Team implements ITeam {

  public id: string;
  public name: string;
  public odometer: number;
  public startTime: number;
  public finishTime: number;
  public isFinished: boolean;
  public totalScore: number;
  public playTime: number;

  constructor(data: ITeam) {
    this.id = data.id;
    this.name = data.name;
    this.odometer = data.odometer;
    this.startTime = data.startTime;
    this.finishTime = data.finishTime;
    this.isFinished = data.isFinished;
    this.totalScore = data.totalScore;
    this.playTime = this.getPlayTime();
  }

  public getPlayTime(): number {
    const date = new LoquizDate();

    return date.getMinutesDiff(this.startTime, this.finishTime);
  }
}
