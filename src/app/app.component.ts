import { Component, OnInit } from '@angular/core';
import { DConfig } from './table/dconfig';
import { DColumn } from './table/dcolumn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableConfig: DConfig;

  ngOnInit() {
    this.setConfig();
  }

  setConfig(): void {

    const columns: DColumn[] = [
      { name: 'firstName', headerText: 'First Name' },
      { name: 'lastName', headerText: 'Last Name' },
      { name: 'phone', headerText: 'Phone' }
    ]

    const configData: DConfig = { columns: columns, rows: this.getRows() }

    this.tableConfig = configData;
  }

  private getRows(): any[] {
    return [
      ['Bruce', 'Smith', '010101010'],
      ['Tony', 'Rogers', '010123101'],
      ['Peter', 'Stone', '010101010'],
      ['Barry', 'Wayne', ''],
      ['Hal', 'Parker', ''],
      ['Diana', 'Cena', ''],
      ['Carol', 'Candurin', ''],
      ['Gregory', 'Waller', ''],
      ['Jhon', 'Lesner', ''],
      ['Roman', 'Ravelo', ''],
      ['Emily', 'Logan', ''],
      ['Will', 'Owens', ''],
      ['Emma', 'Danvers', ''],
      ['Maria', 'Shuri', ''],
      ['Beatriz', 'Barnes', ''],
      ['Jeniree', 'Jones', ''],
      ['Harmer', 'Monroe', ''],
      ['Jose', 'Carter', ''],
      ['Oscar', 'Wilson', ''],
      ['Brad', 'Perkins', ''],
      ['Ruby', 'Harwood', ''],
      ['Jennifer', 'Hussey', ''],
      ['Alison', 'Miller', ''],
      ['Mike', 'Good', ''],
      ['Dresoy', 'Scherr', ''],
      ['Bobby', 'Rotunda', ''],
      ['Chad', 'Betts', ''],
      ['Jeft', 'Lee', ''],
      ['Asuka', 'Kirby', ''],
      ['Andrade', 'Angle', ''],
      ['Paul', 'Curtin', ''],
      ['Victoria', 'Rehwoldt', ''],
      ['Pamela', 'Morrissey', ''],
      ['Ashley', 'Ewen', ''],
      ['Natalie', 'Hardy', ''],
      ['Dori', 'Urai', ''],
      ['Mercedes', 'Quin', ''],
      ['Drew', 'McKay', ''],
      ['Becky', 'Lynch', '']
    ];
  };
}