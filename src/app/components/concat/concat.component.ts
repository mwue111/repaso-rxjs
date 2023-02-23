import { Component } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent {

  ngOnInit():void {
    const obs1 = interval(1000).pipe( //observable que se dispara cuatro veces y cada segundo
      take(4)
    );

    const obs2 = range(1, 10);        //observable que cuenta de 1 a 10

    const concatObs = concat(obs1, obs2);
    //contat concatena observables

    concatObs
      .subscribe(e =>
        console.log('Resultado: ', e)
      );
  }
}
