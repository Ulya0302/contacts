import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../contacts/contacts.model';
import {ContactsService} from '../../contacts/contacts.service';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {

  item: Contact;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.item = this.activatedRoute.snapshot.data['item'];
  }

  async save() {
    if (this.item.id) {
      await this.contactsService.update(this.item).toPromise();
    } else {
      await this.contactsService.create(this.item).toPromise();
    }
    this.router.navigate(['contacts']);
  }

  cancel() {
    this.router.navigate(['contacts']);
  }
}
