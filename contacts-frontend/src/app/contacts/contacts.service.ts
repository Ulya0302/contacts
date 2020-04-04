import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedListResponse, Response} from '../shared/response.model';
import {Contact} from './contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) {
  }

  apiUrl() {
    return '/api/contacts';
  }

  getCards(name: string, page: number, size: number, sort: string, column: string): Observable<PagedListResponse<Contact>> {
    const params = new HttpParams()
      .append('filter', name)
      .append('pageNumber', page.toString())
      .append('pageSize', size.toString())
      .append('sortDirection', sort)
      .append('sortColumn', column);
    return this.httpClient.get<PagedListResponse<Contact>>(this.apiUrl(), {params: params});
  }

  getCard(id: string): Observable<Response<Contact>> {
    return this.httpClient.get<Response<Contact>>(`${this.apiUrl()}/${id}`);
  }

  update(item: Contact) {
    return this.httpClient.put<Response<Contact>>(`${this.apiUrl()}/${item.id}`, item);
  }

  create(item: Contact) {
    return this.httpClient.post<Response<Contact>>(`${this.apiUrl()}`, item);
  }

  delete(id: number) {
    return this.httpClient.delete<Response<Contact>>(`${this.apiUrl()}/${id}`);
  }
}
