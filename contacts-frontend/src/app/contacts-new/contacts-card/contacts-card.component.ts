import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../contacts/contacts.model';
import {Router} from '@angular/router';
import {ContactsService} from '../../contacts/contacts.service';

@Component({
  selector: 'app-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {

  @Input() selectedCard: Contact;
  @Output() cardChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router,
              private contactsService: ContactsService) {
  }

  ngOnInit(): void {
  }

  getLink(email: string) {
    return `mailto:${email}`;
  }

  async delete() {
    await this.contactsService.delete(this.selectedCard.id).toPromise();
    this.cardChange.next();
  }

  edit() {
    this.router.navigate(['contacts', this.selectedCard.id]);
  }
}
