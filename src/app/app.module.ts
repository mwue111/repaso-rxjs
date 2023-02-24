import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SetTimeOutComponent } from './components/set-time-out/set-time-out.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';
import { TapComponent } from './components/tap/tap.component';
import { ShareComponent } from './components/share/share.component';
import { ConcatComponent } from './components/concat/concat.component';
import { NextErrorCompleteComponent } from './components/next-error-complete/next-error-complete.component';
import { BufferTimeComponent } from './components/buffer-time/buffer-time.component';
import { SwitchmapComponent } from './components/switchmap/switchmap.component';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { ConcatmapComponent } from './components/concatmap/concatmap.component';
import { MergemapComponent } from './components/mergemap/mergemap.component';
import { MultiplesObsComponent } from './components/multiples-obs/multiples-obs.component';
import { MultObsParaleloComponent } from './components/mult-obs-paralelo/mult-obs-paralelo.component';
import { MultObsSerieComponent } from './components/mult-obs-serie/mult-obs-serie.component';
import { ScanComponent } from './components/scan/scan.component';
import { SubjectComponent } from './components/subject/subject.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MulticastComponent } from './components/multicast/multicast.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { CreateGenerateComponent } from './components/create-generate/create-generate.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    SetTimeOutComponent,
    IntervalTimerComponent,
    FromEventComponent,
    MapFilterComponent,
    TapComponent,
    ShareComponent,
    ConcatComponent,
    NextErrorCompleteComponent,
    BufferTimeComponent,
    SwitchmapComponent,
    ForkjoinComponent,
    ConcatmapComponent,
    MergemapComponent,
    MultiplesObsComponent,
    MultObsParaleloComponent,
    MultObsSerieComponent,
    ScanComponent,
    SubjectComponent,
    WelcomeComponent,
    MulticastComponent,
    ReplaySubjectComponent,
    BehaviorSubjectComponent,
    DebounceTimeComponent,
    CreateGenerateComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
