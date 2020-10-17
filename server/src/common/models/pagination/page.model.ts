import { PageRequest } from './page-request.model';

export class Page<T> {
  public elements: T[];
  public totalElements: number;
  public totalPages: number;
  public current: PageRequest;
  public next: PageRequest;
  public previous: PageRequest;

  constructor(obj: any) {
    Object.assign(this, obj);
  }

  public static from<T>(elements: T[], totalElements: number, pageRequest: PageRequest): Page<T> {
    return new Page<T>({
      elements: elements, 
      totalElements: totalElements, 
      totalPages: Math.ceil(totalElements / pageRequest.size),
      current: pageRequest,
      next: pageRequest.next(totalElements),
      previous: pageRequest.previous(totalElements)
    });
  }
}
