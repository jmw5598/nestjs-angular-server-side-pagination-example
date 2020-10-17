import { SortDirection } from './sort-direction.enum';

export class Sort {
  public direction: SortDirection;
  public column: string;

  constructor(column: string = 'id', direction: SortDirection = SortDirection.ASCENDING) {
    this.direction = direction; 
    this.column = column;
  }

  public static from(column: string, direction: string): Sort {
    switch (direction.toUpperCase()) {
      case 'ASC': return new Sort(column, SortDirection.ASCENDING);
      case 'DESC': return new Sort(column, SortDirection.DESCENDING);
      default: return new Sort(column, SortDirection.ASCENDING);
    }
  }
}