import { Component } from '@angular/core';
import { ObsService } from 'src/app/obs.service';

@Component({
  selector: 'app-multiples-obs',
  templateUrl: './multiples-obs.component.html',
  styleUrls: ['./multiples-obs.component.css']
})
export class MultiplesObsComponent {

  constructor(
    public obs:ObsService,
  ) {}

  ngOnInit():void {
    this.obs.getGitHub('mwue111')
      .subscribe((res: any) => console.log(res));
  }

}
