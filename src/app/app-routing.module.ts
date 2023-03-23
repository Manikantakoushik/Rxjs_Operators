import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArrayMethodComponent } from "./arraymethods/array-method/array-method.component";
import { ConversionObservablesComponent } from "./components/conversion-observables/conversion-observables.component";
import { NewObservableComponent } from "./components/new-observable/new-observable.component";
import { OperatorsBasicsComponent } from "./components/operators-basics/operators-basics.component";
import { AjaxOperatorComponent } from "./pages/ajax-operator/ajax-operator.component";
import { BufferCountOperatorComponent } from "./pages/buffer-count-operator/buffer-count-operator.component";
import { BufferOperatorComponent } from "./pages/buffer-operator/buffer-operator.component";
import { BufferTimeOperatorComponent } from "./pages/buffer-time-operator/buffer-time-operator.component";
import { BufferToggleOperatorComponent } from "./pages/buffer-toggle-operator/buffer-toggle-operator.component";
import { BufferWhenOperatorComponent } from "./pages/buffer-when-operator/buffer-when-operator.component";
import { FilterOperatorComponent } from "./pages/filter-operator/filter-operator.component";
import { MapOperatorComponent } from "./pages/map-operator/map-operator.component";
import { OperatorComponent } from "./pages/operator/operator.component";
import { TakeOperatorComponent } from "./pages/take-operator/take-operator.component";
import { TakelastOperatorComponent } from "./pages/takelast-operator/takelast-operator.component";
import { TakeuntilOperatorComponent } from "./pages/takeuntil-operator/takeuntil-operator.component";
import { AsyncsubjectComponent } from "./subject/asyncsubject/asyncsubject.component";
import { BehaviorsubjectComponent } from "./subject/behaviorsubject/behaviorsubject.component";
import { ReplaysubjectComponent } from "./subject/replaysubject/replaysubject.component";
import { SimplesubjectComponent } from "./subject/simplesubject/simplesubject.component";
import { SubjectComponent } from "./subject/subject/subject.component";
import { VoidsubjectComponent } from "./subject/voidsubject/voidsubject.component";

const routes: Routes = [
  {
    path: "operators",
    component: OperatorComponent,
    children: [
      { path: "buffer", component: BufferOperatorComponent },
      { path: "buffercount", component: BufferCountOperatorComponent },
      { path: "buffertime", component: BufferTimeOperatorComponent },
      { path: "buffertoggle", component: BufferToggleOperatorComponent },
      { path: "bufferwhen", component: BufferWhenOperatorComponent },
    ],
  },
  {
    path: "subject",
    component: SubjectComponent,
    children: [
      {
        path: "simplesubject",
        component: SimplesubjectComponent,
      },
      {
        path: "behaviorsubject",
        component: BehaviorsubjectComponent,
      },
      {
        path: "replaysubject",
        component: ReplaysubjectComponent,
      },
      {
        path: "asyncsubject",
        component: AsyncsubjectComponent,
      },
      {
        path: "voidsubject",
        component: VoidsubjectComponent,
      },
    ],
  },

  {
    path: "filter",
    component: FilterOperatorComponent,
    children: [
      { path: "take", component: TakeOperatorComponent },
      { path: "takelast", component: TakelastOperatorComponent },
      { path: "takeuntil", component: TakeuntilOperatorComponent },
    ],
  },
  {
    path: "customobservables",
    component: NewObservableComponent,
  },
  {
    path: "conversion",
    component: ConversionObservablesComponent,
  },
  {
    path: "ajax",
    component: AjaxOperatorComponent,
  },
  {
    path: "map",
    component: MapOperatorComponent,
  },
  {
    path: "basics",
    component: OperatorsBasicsComponent,
  },
  {
    path: "arraymethods",
    component: ArrayMethodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
