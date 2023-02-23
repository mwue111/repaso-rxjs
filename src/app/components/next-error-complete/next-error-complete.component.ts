import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-error-complete',
  templateUrl: './next-error-complete.component.html',
  styleUrls: ['./next-error-complete.component.css']
})
export class NextErrorCompleteComponent {

  ngOnInit():void {
    const myObservable = Observable.create(function(observer:any) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    const subs = myObservable.subscribe({
      next: (x:number) => console.log('El siguiente valor es: ' , x),
      error: (err:any) => console.log('Ha ocurrido un error: ', err),
      complete: () => console.log('Suscripción completa.'),
    });

    //subs.unsuscribe();
  }

  ngOnDestroy():void {

  }

}
