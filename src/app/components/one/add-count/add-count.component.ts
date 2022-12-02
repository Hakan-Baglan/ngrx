import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countIncrement } from 'src/app/state/counter-action';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.scss']
})
export class AddCountComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  AddCount() {
    this.store.dispatch(countIncrement())
  }
}
