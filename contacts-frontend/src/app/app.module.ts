import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PblNgridModule} from '@pebula/ngrid';
import {PblNgridBlockUiModule} from '@pebula/ngrid/block-ui';
import {HttpClientModule} from '@angular/common/http';
import {PblNgridMaterialModule} from '@pebula/ngrid-material';
import {PblNgridDragModule} from '@pebula/ngrid/drag';
import {PblNgridMatSortModule} from '@pebula/ngrid-material/sort';
import {PblNgridPaginatorModule} from '@pebula/ngrid-material/paginator';
import {PblNgridStickyModule} from '@pebula/ngrid/sticky';
import {PblNgridCheckboxModule} from '@pebula/ngrid-material/selection-column';
import {PblNgridCellTooltipModule} from '@pebula/ngrid-material/cell-tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PblNgridStatePluginModule} from '@pebula/ngrid/state';
import {PblNgridDetailRowModule} from '@pebula/ngrid/detail-row';
import {PblNgridTransposeModule} from '@pebula/ngrid/transpose';
import {PblNgridTargetEventsModule} from '@pebula/ngrid/target-events';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {ContactsNewComponent} from './contacts-new/contacts-new.component';
import {ContactsCardComponent} from './contacts-new/contacts-card/contacts-card.component';
import {ContactsEditComponent} from './contacts-new/contacts-edit/contacts-edit.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsNewComponent,
    ContactsCardComponent,
    ContactsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PblNgridModule,
    PblNgridBlockUiModule,
    HttpClientModule,
    PblNgridDragModule,
    PblNgridMaterialModule,
    PblNgridMatSortModule,
    PblNgridPaginatorModule,
    PblNgridStickyModule,
    PblNgridCheckboxModule,
    PblNgridCellTooltipModule,
    BrowserAnimationsModule,
    PblNgridStatePluginModule,
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatChipsModule,
    MatSliderModule,
    MatCardModule,
    MatPaginatorModule,
    MatDividerModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
