import { AfterViewInit, Component } from "@angular/core";
import { from, fromEvent } from "rxjs";
import { resolve } from "url";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent  {
  title = "rxjs-basics";
  
}
