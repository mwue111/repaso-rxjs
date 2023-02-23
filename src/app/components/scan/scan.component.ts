import { Component } from '@angular/core';
import { of } from 'rxjs';
import { scan, delay } from 'rxjs';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {

  ngOnInit():void {
    //ejemplo 1
    const src = of(1, 2, 3, 4, 5);
    const scanObs = src.pipe(scan((acum, valorActual) => acum + valorActual, 0)); //devuelve la suma de todos los elementos de src
    scanObs.subscribe(val => console.log('Ejemplo 1: ', val));

    //ejemplo 2
    const source = of(10, 20, 30, 40, 50).pipe(delay(1000));                      //.pipe(delay) para simular asincronía
    const scanner = source.pipe(scan((acc:any, curr:any) => [...acc, curr], [])); //devuelve un array con los datos de source

    scanner.subscribe(res => console.log('Ejemplo 2: ', res));
  }
}
