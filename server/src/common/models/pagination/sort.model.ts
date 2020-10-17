import { SortDirection } from './sort-direction.enum';

export class Sort {
  public direction: SortDirection;
  public column: string;

  constructor(column: string = 'id', direction: SortDirection = SortDirection.ASCENDING) {
    this.direction = direction; 
    this.column = column;
  }

  public getSortDirection(): SortDirection {
    return this.direction;
  }

  public getSortColumn(): string {
    return this.column;
  }

  public asKeyValue(): { [key: string]: string } {
    return {
      [this.getSortColumn()]: this.getSortDirection()
    };
  }

  public static from(column: string, direction: string): Sort {
    switch (direction.toUpperCase()) {
      case 'ASC': return new Sort(column, SortDirection.ASCENDING);
      case 'DESC': return new Sort(column, SortDirection.DESCENDING);
      default: return new Sort(column, SortDirection.ASCENDING);
    }
  }
}