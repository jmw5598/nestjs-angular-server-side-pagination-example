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

  public static from(page: number, size: number, sortColumn: string, sortDirection: string): PageRequest {
    const sort: Sort = Sort.from(sortColumn, sortDirection);
    return new PageRequest(page, size, sort);
  }
}