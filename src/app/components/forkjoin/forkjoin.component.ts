import { Component } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent {

  ngOnInit():void {
    const fork = forkJoin(            //forkJoin devuelve el último valor de los observables
      of('Prueba', 'Hola'),
      of(' mundo').pipe(delay(500)),  //' mundo' se enviará con retardo.
      interval(1000).pipe(take(2))    //interval toma un valor cada segundo y con take los lanza cada dos intervalos
    );
    fork.subscribe(val => console.log(val));

    //Otro ejemplo:
    const src = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        ctmil: ajax.getJSON('https://api.github.com/users/ctmil')
      }
    );

    src.subscribe(console.log);
  }
}
