import { Component } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.css']
})
export class ConcatmapComponent {

  ngOnInit():void {
    const source = of(2000, 1000, 3000);

    const obsConcatMap = source.pipe(       //concatMap recibe source
      concatMap(val => of(`Valor: ${val}`)
        .pipe(delay(val))                   //El delay será primero 2000, luego 1000 y luego 3000
        //concatMap respeta el orden aunque podría parecer que primero traerá el valor con un delay de 1000, luego el de 2000 y por último el de 3000 -> fuerza el orden
      )
    );

    obsConcatMap.subscribe(v => console.log(v));
  }

}
