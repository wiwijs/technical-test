import {Component, OnInit} from '@angular/core';
import {initFlowbite} from 'flowbite';
import {Store} from "@ngxs/store";
import {GetNomenclatures} from "./feature/components/states/nomenclatures";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-hotel';
  
  constructor(
    private store: Store
  ) {
  }

  ngOnInit() {
    initFlowbite();
    this.store.dispatch(new GetNomenclatures());
  }
}
