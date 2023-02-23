import { Component } from '@angular/core';
import { pipe, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent {

  ngOnInit(): void {
    const nums = of(1, 2, 3, 4, 5); //of crea una lista de elementos

    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0), //si devuelve true: filtra
      map(n => n * n)                     //saca el cuadrado de los pares
    );

    const cuadrado = alCuadrado(nums);    //crea una variable donde llama a pipe (que aúna funciones de rxjs) y le pasa nums

    cuadrado
      .subscribe((res) => console.log('Resultado: ', res))
  }

}
