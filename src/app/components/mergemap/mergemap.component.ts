import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent {

  ngOnInit():void {

    //ejemplo teórico:
    const source = of(2000, 1000, 3000);

    const obsMergeMap = source.pipe(
      mergeMap(val => of(`Valor: ${val}`)
        .pipe(delay(val))                   //El delay será primero 2000, luego 1000 y luego 3000
        //mergeMap NO respeta el orden, primero traerá el dato con menor delay
      )
    );

    obsMergeMap.subscribe(v => console.log(v));

    //ejemplo real: útil para guardar elementos en una base de datos (es más rápido que concatMap)
    const src = of( //llamadas a archivos JSON
      ajax.getJSON('https://api.github.com/users/ctmil'),
      ajax.getJSON('https://api.github.com/users/mwue111')
    )

    const observable = src.pipe(
      mergeMap(user => user)
    )

    const suscripcion = observable.subscribe(res => console.log(res));
    //mergeMap trae los datos desde la api en cualquier orden y rápido.

  }

}
