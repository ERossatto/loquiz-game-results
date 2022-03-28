import { ITeam } from "../interfaces/team.interface";

export class Team implements ITeam {

  public id: string;
  public name: string;
  public odometer: number;
  public startTime: number;
  public finishTime: number;
  public isFinished: boolean;
  public totalScore: number;

  constructor(data: ITeam) {
    this.id = data.id;
    this.name = data.name;
    this.odometer = data.odometer;
    this.startTime = data.startTime;
    this.finishTime = data.finishTime;
    this.isFinished = data.isFinished;
    this.totalScore = data.totalScore;
  }

  public getPlayTime(): number {
    return 0;
  }
}
