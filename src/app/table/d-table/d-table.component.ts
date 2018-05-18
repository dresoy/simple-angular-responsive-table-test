import { Component, OnInit, Input } from '@angular/core';
import { DConfig } from '../dconfig';

@Component({
  selector: 'app-d-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss']
})
export class DTableComponent implements OnInit {

  @Input() config: DConfig;

  constructor() { }

  ngOnInit() {
  }

}
