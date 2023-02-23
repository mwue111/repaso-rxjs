import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent {
  title:string = "fromEvent";

  @ViewChild("element") element: any;

  ngOnInit(): void {
    const el = document.getElementById('elemento')!;
    //const el = this.element;
    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove
      .subscribe((e: any) => {
        console.log(`Eje X: ${e.clientX}, eje Y: ${e.clientY}`);
      })
  }
}
