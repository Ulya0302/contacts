import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsNewComponent} from './contacts-new/contacts-new.component';
import {ContactsEditComponent} from './contacts-new/contacts-edit/contacts-edit.component';
import {ContactResolver} from './contacts-new/contacts.resolver';


const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsNewComponent
  },
  {
    path: 'contacts/:id',
    component: ContactsEditComponent,
    resolve: {item: ContactResolver}
  },
  {
    path: 'contacts/new',
    component: ContactsEditComponent,
    resolve: {item: ContactResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
