import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ContactsService} from './contacts.service';
import {Contact} from './contacts.model';
import {columnFactory, createDS, PblDataSourceTriggerChangedEvent, PblNgridComponent} from '@pebula/ngrid';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit {

  @ViewChild('table', {static: true}) table: PblNgridComponent<Contact>;

  nameFilter: string = '';

  columns = columnFactory()
    .default({minWidth: 100, maxWidth: 200, resize: true})
    .table(
      {prop: 'id', sort: true, width: '30px', label: 'ID'},
      {prop: 'name', sort: true, id: 'name', label: "Имя"},
      {prop: 'email', label: "Почта"},
      {prop: 'phone', label: "Телефон"}
    )
    .build();

  ds = createDS<Contact>()
    .setCustomTriggers('sort', 'pagination')
    // .onCreated((event) => event.se)
    // .onTrigger((event) => this.updateData(event))
    .create();

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    // this.updateData();
  }

  // async updateData(event: PblDataSourceTriggerChangedEvent<Contact[]>) {
  //   const page = event.pagination.page;
  //   const size = event.pagination.perPage;
  //   const sort = event.sort.curr.sort;
  //   const column = event.sort.curr.column;
  //   const resp = await this.contactsService.getCards(this.nameFilter, page, size, sort, column).toPromise();
  //   event.updateTotalLength(resp.total);
  //   console.log(this.table);
  //   this.table.autoSizeColumnToFit();
  //   return resp.data;
  // }
}
