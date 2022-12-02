import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  number$: Observable<number>;
  constructor(private store: Store<any>) { 
    this.number$ = this.store.select("number");
  }

  ngOnInit(): void {
  }

}
