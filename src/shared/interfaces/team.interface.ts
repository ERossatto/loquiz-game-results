export interface ITeam {
  id: string;
  name: string;
  odometer: number;
  startTime: number;
  finishTime: number;
  isFinished: boolean;
  totalScore: number;
  getPlayTime?: () => number;
}
