import * as dayjs from 'dayjs'

export default class LoquizDate {

  constructor() { }

  public parseUnixTimestamp( timestamp: number ) {
    const multiplier = 1000;
    return dayjs(timestamp * multiplier);
  }

  public getMinutesDiff( start: number, end: number ): number {
    const startDate = this.parseUnixTimestamp(start);
    const endDate = this.parseUnixTimestamp(end);

    return endDate.diff(startDate, 'minute');
  }
}
