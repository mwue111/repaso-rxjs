import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit{

  ngOnInit(): void {

    this.funcionTimer();

    const contador = interval(1000);

    contador.subscribe((num) => {
      console.log(`Han pasado ${num + 1} segundos.`);
    })

  }

  funcionTimer() {
    const contador = timer(3000);

    contador.subscribe(() =>
      console.log('Lanzado a los tres segundos.')
    )
  }

}
