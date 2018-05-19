import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-d-pagination',
  templateUrl: './d-pagination.component.html',
  styleUrls: ['./d-pagination.component.scss']
})
export class DPaginationComponent implements OnInit {

  @Input() pages: number;
  @Output() clickCallback: EventEmitter<number> = new EventEmitter();

  viewPages: number[];

  constructor() { }

  ngOnInit() {
    this.setPages();
  }

  setPages(): any {
    this.viewPages = Array(this.pages);
  }

  callback(index): void {
    this.clickCallback.emit(index);
  }

}
