import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjaxOperatorComponent } from './pages/ajax-operator/ajax-operator.component';
import { OperatorComponent } from './pages/operator/operator.component';
import { MapOperatorComponent } from './pages/map-operator/map-operator.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { ConversionObservablesComponent } from './components/conversion-observables/conversion-observables.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './pages/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakelastOperatorComponent } from './pages/takelast-operator/takelast-operator.component';
import { TakeuntilOperatorComponent } from './pages/takeuntil-operator/takeuntil-operator.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { SimplesubjectComponent } from './subject/simplesubject/simplesubject.component';
import { BehaviorsubjectComponent } from './subject/behaviorsubject/behaviorsubject.component';
import { ReplaysubjectComponent } from './subject/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './subject/asyncsubject/asyncsubject.component';
import { VoidsubjectComponent } from './subject/voidsubject/voidsubject.component';
import { ArrayMethodComponent } from './arraymethods/array-method/array-method.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxOperatorComponent,
    OperatorComponent,
    MapOperatorComponent,
    OperatorsBasicsComponent,
    NewObservableComponent,
    ConversionObservablesComponent,
    BufferOperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    FilterOperatorComponent,
    TakeOperatorComponent,
    TakelastOperatorComponent,
    TakeuntilOperatorComponent,
    SubjectComponent,
    SimplesubjectComponent,
    BehaviorsubjectComponent,
    ReplaysubjectComponent,
    AsyncsubjectComponent,
    VoidsubjectComponent,
    ArrayMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
