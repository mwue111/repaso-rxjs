import { Component } from '@angular/core';
import { interval, from, Subject, ConnectableObservable } from 'rxjs';
import { tap, multicast } from 'rxjs/operators';

@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.css']
})
export class MulticastComponent {

  ngOnInit():void {
    //ejemplo 1
    const source = from([1, 2, 3, 4]);  //observable que manda valores del 1 al 4

    const multiCast = source.pipe(      //a ese observable se le va a anidar una subject mediante multicast
      multicast(() => new Subject())
    ) as ConnectableObservable<any>;    //esta línea se añade para poder usar .connect()

    multiCast.subscribe({
      next: (valor) => console.log(`Observer A: ${valor}`)
    });

    multiCast.subscribe({
      next: (valor) => console.log(`Observer B (A x 2): ${valor * 2}`)
    });

    multiCast.connect();

    //ejemplo 2
    const src = interval(3000).pipe(          //emulación de datos que vienen de un servidor
      tap((num) => console.log(`id: ${num}`))
    );

    const multi = src.pipe(                   //llamamos a multicas como new Subject para suscribirnos varias veces
      multicast(() => new Subject())
    ) as ConnectableObservable<any>;

    multi.subscribe(valor => console.log(`localhost:4200/${valor}`));     //url con el valor que viene de servidor
    multi.subscribe(valor => console.log(`localhost:4200/${valor - 1}`)); //url con el valor anterior al que hemos recibido

    multi.connect();

  }

}
