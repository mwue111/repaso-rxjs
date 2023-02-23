import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-set-time-out',
  templateUrl: './set-time-out.component.html',
  styleUrls: ['./set-time-out.component.css']
})
export class SetTimeOutComponent {
  obs: any;

  ngOnInit() {
    this.obs = new Observable(function (observer:any) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
  }

  rxjsFun() {
    console.log('Ha iniciado la suscripción.');
    this.obs.subscribe({
        next: (x:number) => console.log('El valor obtenido es ' + x),
        error: (err:any) => console.log('Ha ocurrido un error: ' + err),
        complete: () => console.log('Terminado'),
      });
      console.log('Ha acabado la suscripción.');
  }

}
