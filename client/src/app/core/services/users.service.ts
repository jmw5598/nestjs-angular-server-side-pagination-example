import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractCrudService } from './abstract-crud.service';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends AbstractCrudService<User, number> {
  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/users`)
  }
}
