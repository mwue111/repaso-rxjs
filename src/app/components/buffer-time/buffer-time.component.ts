import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators'

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent {

  ngOnInit():void {
    const timer = interval(500);

    const buffer = timer.pipe(
      bufferTime(2000, 1000)  //con el segundo parámetro obtenemos valores anteriores
    );

    //const sub= buffer.subscribe(val => console.log('buffer: ', val));
  }
}
