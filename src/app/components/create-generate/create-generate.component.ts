import { Component } from '@angular/core';
import { Observable, generate } from 'rxjs';

@Component({
  selector: 'app-create-generate',
  templateUrl: './create-generate.component.html',
  styleUrls: ['./create-generate.component.css']
})
export class CreateGenerateComponent {

  ngOnInit():void {
    //con create (que como está en desuso se sustituye por new Observable()):
    const datos = [1, 2, 3, 4, 5];
    const obs = new Observable((observer) => {  //Para hacer que la observable cuente del 1 al 5
      datos.forEach(dato => {
        observer.next(dato);
      })
      observer.complete();
    });

    const sub = obs.subscribe(valor => console.log('con create: ', valor));

    //con generate:
    generate(
      1,
      i => i <= 5,
      i => i + 1
    ).subscribe(res => console.log('con generate: ', res));
  }
}
