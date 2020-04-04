import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {ContactsService} from '../contacts/contacts.service';
import {Contact} from '../contacts/contacts.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  // styleUrls: ['./contacts-new.component.scss']
})
export class ContactsNewComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  totalLength: number;
  pageSizeOptions = [10, 20, 50];
  data: Contact[];
  nameFilter: string = '';
  sortCol = 'id';
  sorDir = 'DESC';

  constructor(private contactsService: ContactsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = this.pageSizeOptions[0];
    this.paginator.page.subscribe(() => this.updateData());
    this.updateData();
  }


  async updateData() {
    const page = this.paginator.pageIndex;
    const size = this.paginator.pageSize;
    const resp = await this.contactsService.getCards(this.nameFilter, page, size, this.sorDir, this.sortCol).toPromise();
    console.log(resp);
    this.totalLength = resp.total;
    this.data = resp.data;
  }

  sortChange() {
    this.paginator.pageIndex = 0;
    this.updateData();
  }

  create() {
    this.router.navigate(['contacts', 'new']);
  }
}
