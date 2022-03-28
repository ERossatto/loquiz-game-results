import * as dayjs from 'dayjs'

export default class LoquizDate {

  constructor() {

  }

  public parseUnixTimestamp( timestamp: number ) {
    const multiplier = 1000;
    return dayjs(timestamp * multiplier);
  }
}
