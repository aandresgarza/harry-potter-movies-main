import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat',
  standalone: true
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: string): string {
    const hours = Math.floor(parseInt(value)/60);
    const mins = parseInt(value) % 60;

    return `${hours}h ${mins}min`
  }

}
