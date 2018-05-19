import { Component, OnInit, Input } from '@angular/core';
import { DColumn } from '../dcolumn';
import { element } from 'protractor';

@Component({
  selector: 'app-d-table-mobile',
  templateUrl: './d-table-mobile.component.html',
  styleUrls: ['./d-table-mobile.component.scss']
})
export class DTableMobileComponent implements OnInit {

  @Input() columns: DColumn[];
  @Input() rows: any[];
  data: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
    this.setData();
  }

  setData(): void {

    this.rows.forEach(curretRow => {
      let dataRow: row[] = new Array<row>();

      this.columns.forEach((col: DColumn, index: number) => {

        try {
          const data = curretRow[index];
          dataRow.push({ label: col.headerText, value: data });
        } catch (error) {
          dataRow.push({ label: col.headerText, value: null });
        }

      });

      this.data.push(dataRow);
    });

  }

}

class row {
  public label: string;
  public value: any;
}
