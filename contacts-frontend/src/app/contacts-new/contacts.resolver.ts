import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Contact} from '../contacts/contacts.model';
import {Observable} from 'rxjs';
import {ContactsService} from '../contacts/contacts.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactsService: ContactsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> | Promise<Contact> | Contact {
    const id = route.params['id'];
    if (id == 'new') {
      return ContactResolver.emptyContact();
    }
    return this.contactsService.getCard(id)
      .pipe(map(resp => resp.data));
  }

  private static emptyContact(): Contact {
    return {
      email: '',
      id: null,
      name: '',
      phone: ''
    };
  }
}
