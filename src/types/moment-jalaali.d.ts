declare module 'moment-jalaali' {
  import { Moment } from 'moment';
  interface MomentJalaali extends Moment {
    format(format: string): string;
  }
  function moment(input?: string | Date): MomentJalaali;
  export = moment;
} 