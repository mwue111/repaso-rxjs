import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent {

  ngOnInit():void {
    //sin debounceTime:
    const search0 = document.getElementById('search0')!; //podría ser ViewChild

    const keyup0 = fromEvent(search0, 'keyup');

    keyup0.pipe(
      map((e: any) => e.currentTarget.value),
    ).subscribe(console.log);

    //con debounceTime:
    const search = document.getElementById('search')!; //podría ser ViewChild

    const keyup = fromEvent(search, 'keyup');

    keyup.pipe(
      map((e: any) => e.currentTarget.value),
      debounceTime(1000)    //permite controlar cuándo se recogen los datos para evitar conflictos
    ).subscribe(console.log);
  }
}
