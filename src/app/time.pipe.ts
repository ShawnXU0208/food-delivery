import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    if(value < 0 || value > 24){
      return "";
    }

    let hour = Math.floor(value);
    let minute = (value - hour) * 60;

    let hourString = hour.toString();
    if(hourString.length == 1){
      hourString = '0' + hourString;
    }

    let minuteString = minute.toString();
    if(minuteString.length == 1){
      minuteString = '0' + minuteString;
    }

    if(hour < 12){
      return `${hourString}:${minuteString}am`;
    }

    if(hour >= 12){
      return `${hourString}:${minuteString}pm`;
    }
  }

}
