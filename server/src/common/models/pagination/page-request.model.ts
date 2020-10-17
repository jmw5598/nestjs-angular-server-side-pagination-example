import { Sort } from './sort.model';

export class PageRequest {
  public page: number;
  public size: number;
  public sort: Sort;

  constructor(page: number = 1, size: number = 10, sort: Sort = new Sort()) {
    this.page = page;
    this.size = size;
    this.sort = sort;
  }

  public next(totalElements:number): PageRequest {
    const totalPages: number = Math.ceil(totalElements / this.size) || 1;
    const nextPage: number = +this.page === totalPages ? 1 : +this.page + 1;
    return new PageRequest(nextPage, this.size, this.sort);
  }

  public previous(totalElements: number): PageRequest {
    const totalPages: number = Math.ceil(totalElements / this.size || 1);
    const previousPage: number = +this.page=== 1 ? totalPages : +this.page- 1;
    return new PageRequest(previousPage, this.size, this.sort);
  }

  public static from(page: number, size: number, sortColumn: string, sortDirection: string): PageRequest {
    const sort: Sort = Sort.from(sortColumn, sortDirection);
    return new PageRequest(page, size, sort);
  }
}