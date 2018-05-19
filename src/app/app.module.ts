import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DTableComponent } from './table/d-table/d-table.component';
import { DTableDesktopComponent } from './table/d-table-desktop/d-table-desktop.component';
import { DTableMobileComponent } from './table/d-table-mobile/d-table-mobile.component';
import { DPaginationComponent } from './table/d-pagination/d-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    DTableComponent,
    DTableDesktopComponent,
    DTableMobileComponent,
    DPaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
