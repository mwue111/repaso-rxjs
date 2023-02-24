import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path:'welcome', component: WelcomeComponent },
  { path:'time-out', component: SetTimeOutComponent },
  { path:'interval', component: IntervalTimerComponent },
  { path:'from-event', component: FromEventComponent },
  { path:'map-filter', component: MapFilterComponent },
  { path:'tap', component: TapComponent },
  { path:'share', component: ShareComponent },
  { path:'concat', component: ConcatComponent },
  { path:'next', component: NextErrorCompleteComponent },
  { path:'buffer', component: BufferTimeComponent },
  { path:'switch', component: SwitchmapComponent },
  { path:'fork', component: ForkjoinComponent },
  { path:'concat-map', component: ConcatmapComponent },
  { path:'merge-map', component: MergemapComponent },
  { path:'mult-obs', component: MultiplesObsComponent },
  { path:'mult-obs-paralelo', component: MultObsParaleloComponent },
  { path:'mult-obs-serie', component: MultObsSerieComponent },
  { path:'scan', component: ScanComponent },
  { path:'subject', component: SubjectComponent },
  { path:'multicast', component: MulticastComponent },
  { path:'replay-subject', component: ReplaySubjectComponent },
  { path:'behav-subject', component: BehaviorSubjectComponent },
  { path:'debounce', component: DebounceTimeComponent },
  { path:'create-generate', component: CreateGenerateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
