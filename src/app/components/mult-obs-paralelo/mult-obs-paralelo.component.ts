import { Component } from '@angular/core';
import { ObsService } from 'src/app/obs.service';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-mult-obs-paralelo',
  templateUrl: './mult-obs-paralelo.component.html',
  styleUrls: ['./mult-obs-paralelo.component.css']
})
export class MultObsParaleloComponent {

  title = 'Múltiples observables en paralelo';

  constructor(
    public obs: ObsService,
  ) {}
  ngOnInit():void {

    forkJoin(
      this.obs.getGitHub('mwue111'),
      this.obs.getGitHub('twitter'),
      this.obs.getGitHub('angular'),
      )
      .subscribe(res => {
        console.log(res);
      })

  }


}
