import { Component } from '@angular/core';
import { ObsService } from 'src/app/obs.service';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-mult-obs-serie',
  templateUrl: './mult-obs-serie.component.html',
  styleUrls: ['./mult-obs-serie.component.css']
})
export class MultObsSerieComponent {
  title = 'Múltiples observables en serie';

  constructor(
    public obs: ObsService,
  ) {}

  ngOnInit():void {

    this.obs.getGitHub('ctmil').pipe(
      //Podría ser concatMap si interesa mantener el orden
      mergeMap((res:any) => ajax(res.blog))
    )
    .subscribe((resFinal: any) => {
      console.log(resFinal.status); //si el status es 404 no existe, si es 200 existe...
    })

  }


}
