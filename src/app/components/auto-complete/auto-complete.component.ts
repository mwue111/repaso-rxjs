import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { CountriesService } from 'src/app/countries.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
  providers: [CountriesService],
})
export class AutoCompleteComponent {
  //mejora: hacer un servicio
  //Sin servicio: declarar el array countries aquí.

  control = new FormControl();
  filteredCountries!: Observable<string[]>;

  constructor(
    public countries:CountriesService,
  ) {}

  ngOnInit():void {
    this.filteredCountries = this.control.valueChanges.pipe(
      debounceTime(200),
      startWith(''),
      map(entrada => this._filter(entrada))
    );
  }

  private _filter(val:string):string[] {
    const formatVal = val.toLocaleLowerCase();

    //Sin servicio:
    // return this.countries.filter(country => country
    //   .toLocaleLowerCase()
    //   .indexOf(formatVal) === 0
    //   );

    return this.countries.countries.filter(country => country.toLocaleLowerCase().indexOf(formatVal) === 0);
  }

}
