import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  ngOnInit():void {
    const time = timer(1000);

    const obs = time.pipe(
      tap(() => console.log('tap on')),   //tap es lo observable de esta función
      mapTo('fin de obs')
    );

    const subs01 = obs.subscribe((val) => console.log('val 1: ', val));
    const subs02 = obs.subscribe((val) => console.log('val 2: ', val));

    const shareObs = obs.pipe(
      share()
    );

    const subs03 = shareObs.subscribe((val) => console.log('val 3 compartido: ', val));
    const subs04 = shareObs.subscribe((val) => console.log('val 4 compartido: ', val));

  }

}
