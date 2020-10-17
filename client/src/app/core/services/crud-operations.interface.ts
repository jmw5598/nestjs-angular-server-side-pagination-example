import { Observable } from 'rxjs';
import { Page } from '../models/page.model';
import { PageRequest } from '../models/page-request.model';

export interface CrudOperations<T, ID> {
  save(t: T): Observable<T>;
  update(id: ID, t: T): Observable<T>;
  findOne(id: ID): Observable<T>;
  findAll(pageRequest?: PageRequest): Observable<Page<T>>;
  delete(id: ID): Observable<any>;
}
