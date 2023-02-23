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
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
