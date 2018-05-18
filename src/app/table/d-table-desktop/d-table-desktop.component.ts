import { Component, OnInit, Input } from '@angular/core';
import { DColumn } from '../dcolumn';

@Component({
  selector: 'app-d-table-desktop',
  templateUrl: './d-table-desktop.component.html',
  styleUrls: ['./d-table-desktop.component.scss']
})
export class DTableDesktopComponent implements OnInit {

  @Input() columns: DColumn[];
  @Input() rows: any[];

  constructor() { }

  ngOnInit() {
  }

}
