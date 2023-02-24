import { Component } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent {

  ngOnInit():void {
    //ejemplo 1
    const behaviorSub = new BehaviorSubject(1);

    behaviorSub.subscribe(console.log); //1

    behaviorSub.next(2);                //Como ya estaba suscrito, consola mostrará este 2

    behaviorSub.subscribe(console.log); //2

    //ejemplo 2: para armar un mapa de calor
    const subject = new BehaviorSubject(0);

    const click$ = fromEvent(document, 'click').pipe( //Une el click al map que construye un objeto con eje x e y
      map((e:any) => ({
        x: e.clientX,
        y: e.clientY
      }))
    );

    const interval$ = interval(1000).pipe(  //lanza números cada segundo y asocia ese valor al BehaviorSubject, creando un contador
      tap(valor => subject.next(valor))
    );

    merge(click$, interval$).subscribe(console.log);  //Une ambos observables y se suscribe a ellos mostrando por consola tanto los valores de interval como el objeto de click
    //Este código muestra dónde hace click el usuario y cada cuánto tiempo.
  }
}
