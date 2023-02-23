import { Component } from '@angular/core';
import { Subject } from 'rxjs'; //es un objeto

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  //Subject es un observable que puede tener muchas suscripciones

  ngOnInit():void {
    //ejemplo 1
    const subject = new Subject<number>();

    subject.subscribe({
      next: (valor) => console.log(`Ejemplo 1 - Observable A: ${valor}`)
    });

    subject.subscribe({
      next: (valor) => console.log(`Ejemplo 1 - Observable B: ${valor + 1}`)  //en cada suscripción se puede transformar el valor
    })

    subject.next(1);
    subject.next(2);

    //ejemplo 2
    const subject2 = new Subject<string>();

    subject2.subscribe({
      next: (valor) => console.log(`Ejemplo 2 - Observable 1: ${valor}`)
    });

    subject2.subscribe({
      next: (valor) => console.log(`Ejemplo 2 - Observable 2: ${valor + 1}`)
    });

    subject2.next('Hola, mundo');
    subject2.next('2');

    //ejemplo 3
    const subject3 = new Subject<any>();

    subject3.subscribe({
      next: (valor) => console.log(`Ejemplo 3 - Observable 1: ${valor[0]}`)
    });

    subject3.subscribe({
      next: (valor) => console.log(`Ejemplo 3 - Observable 2: ${valor[0] + valor[1]}`)
    });

    subject3.next([2, 8]);
    subject3.next([9, 4]);
  }

}
