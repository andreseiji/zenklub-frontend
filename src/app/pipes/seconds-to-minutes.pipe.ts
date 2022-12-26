import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes',
})
export class SecondsToMinutesPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
  }
}
