import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment-jalaali';

@Pipe({
  name: 'shamsiDate',
  standalone: true,
})
export class ShamsiDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';
    return moment(value).format('jYYYY/jMM/jDD');
  }
}
