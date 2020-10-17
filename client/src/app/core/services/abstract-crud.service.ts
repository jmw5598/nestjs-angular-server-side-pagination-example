import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudOperations } from './crud-operations.interface';
import { Page } from '../models/page.model';
import { PageRequest } from '../models/page-request.model';

export abstract class AbstractCrudService<T, ID> implements CrudOperations<T, ID> {
  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update(id: ID, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id);
  }

  findAll(pageRequest?: PageRequest): Observable<Page<T>> {
    const params: {[key: string]: any} = !pageRequest ? {} : { 
      pageNumber: pageRequest.page,
      pageSize: pageRequest.size,
      sortCol: pageRequest.sort.column,
      sortDir: pageRequest.sort.direction
    };
    return this._http.get<Page<T>>(this._base, { params: params });
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
  }
}
