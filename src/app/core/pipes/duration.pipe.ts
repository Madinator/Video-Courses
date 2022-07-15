import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if( minutes < 60 ) {
      return minutes + ' min';
    }
    
    return `${Math.floor(minutes/60)} h ${minutes%60} min`;
  }

}
