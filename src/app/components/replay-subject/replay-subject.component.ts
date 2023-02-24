import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {

  ngOnInit():void {
    const observable = new ReplaySubject(1); //el número es el buffer
    const v = null;

    observable.next(1);
    observable.next(2);
    observable.next(3);
    //observable.subscribe(console.log);  //1, 2, 3
    observable.next(4);
    observable.next(5);
    observable.subscribe(console.log);  //2, 3, 4, 5: se pierde el primer valor.
  }

}
