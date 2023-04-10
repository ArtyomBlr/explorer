import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {
  transform(value: number): string {
    let newValue: number = value;
    let suffixes = ["", "k", "mln", "b","t"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    return `${newValue.toFixed(1)} ${suffixes[suffixNum]}`;
  }
}
