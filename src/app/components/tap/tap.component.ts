import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent {

  ngOnInit():void {
    const clicks = fromEvent(document, 'click');  //observable: llamada a clicks
    const positions = clicks.pipe(
      tap(e =>
        console.log('Procesado ', e),
        err => console.log('error: ', err),
        () => console.log('Esta función anónima dispara el complete.'))
    );

    positions
        .subscribe((res) => console.log('Respuesta en la suscripción: ', res))

  }

}
