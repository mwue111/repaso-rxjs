import { Component } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent {

  ngOnInit():void {
    //ejemplo para ver en consola:
    fromEvent(document, 'click')
    .pipe(switchMap(() => interval(1000)))
    .subscribe(e => console.log(e));

    //ejemplo de uso:
    const remainingLabel = document.getElementById("remaining")!;
    const pauseButton = document.getElementById("pause")!;
    const resumeButton = document.getElementById("resume")!;

    const obsInterval = interval(1000).pipe(mapTo(-1));   //observable que cada segundo manda un número restando uno
    const pause = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume)  //merge mezcla observables
      .pipe(
        startWith(true),
        switchMap(val => (val ? obsInterval : empty())),    //val será true o false (pause/resume)
        scan((acc, curr) => (curr ? curr + acc : acc), 10), //curr es true o false. Scan empieza en 10 y va restando (+ acc = -1 de mapTo)
        takeWhile(valor => valor >= 0)                      //cuando el valor es 0, la cuenta para.
      )

      .subscribe((val: any) => (remainingLabel.innerHTML = val));
  }

}
