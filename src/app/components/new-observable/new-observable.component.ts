import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // creating the new observable
    const newObservable$ = new Observable<number>((observer)=>{
      // passing the data by next method
      for(let i = 0;i <= 5;i++){
        if(i === 4){
          // error
          observer.error('unknown error. i value is 4');
        }
        observer.next(i);
      }
      // after complete the sending of data
      // note:- when error has been throw the complete don't excute
      observer.complete();
      // when complete method was done you can't send the data again
      observer.next(1000);
    });

    let observer = {
      next: (data:number)=> console.log(data),
      error:(error:string)=>console.log(error),
      complete:()=>console.log("complete all done")
    }
    // until and unless the observable subscribe the data the observer will not get the data 
   newObservable$.subscribe(observer);

  }

}
