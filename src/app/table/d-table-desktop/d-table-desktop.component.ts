import { Component, OnInit, Input } from '@angular/core';
import { DColumn } from '../dcolumn';
import { markDirtyIfOnPush } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-d-table-desktop',
  templateUrl: './d-table-desktop.component.html',
  styleUrls: ['./d-table-desktop.component.scss']
})
export class DTableDesktopComponent implements OnInit {

  @Input() columns: DColumn[];
  @Input() rows: any[];

  constructor() { }

  viewRows: Array<any>;
  pages: number = 0;
  page: number = 0;
  from: number;
  to: number;

  ngOnInit() {
    this.setDataRows();
  }

  setDataRows(): void {
    if (this.rows.length < 10) {
      this.viewRows = this.rows;
    } else {
      this.setPagination();
      this.setViewRows(0);
    }
  }

  setPagination(): void {
    let pages = Math.trunc(this.rows.length / 10);
    let remainder = this.rows.length % 10;
    if (remainder > 0) { pages += 1; }

    this.pages = pages;
  }

  setViewRows(page): void {
    this.page = page;
    this.from = page * 10;
    this.to = this.getLastIndex(page);

    this.viewRows = this.rows.slice(this.from, this.to);
  }

  private getLastIndex(page): number {
    if (page < this.pages - 1) {
      return (page * 10) + 10
    } else {
      return this.rows.length;
    }
  }

}
