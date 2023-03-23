import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-voidsubject',
  templateUrl: './voidsubject.component.html',
  styleUrls: ['./voidsubject.component.css']
})
export class VoidsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let subject$ = new Subject<number>();

    subject$.subscribe((data)=>{
      console.log(" subject 1 "+data);
    });

    subject$.next(1);
    subject$.next(2);
    


    
    let subject2$ = new Subject<number | string>();

    subject2$.subscribe((data)=>{
      console.log("subject 2 "+data);
    });

    subject2$.next("Hai mani");
    subject2$.next(2);
    


    // void subject
    
    let subject3$ = new Subject<void>();

    subject$.subscribe((data)=>{
      console.log(" subject 3 "+data);
    });

    subject$.next();



  }

}
