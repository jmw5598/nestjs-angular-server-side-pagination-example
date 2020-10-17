import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from './core/models/user.model';
import { Page } from './core/models/page.model';
import { UsersService } from './core/services/users.service';
import { PageRequest } from './core/models/page-request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentPage: Page<User>;

  constructor(
    private _usersService: UsersService
  ) {}
  
  ngOnInit(): void {
    this._fetchPageOfUsers();
  }

  public nextPage(): void {
    this._fetchPageOfUsers(this.currentPage.next);
  }

  public prevPage(): void {
    this._fetchPageOfUsers(this.currentPage.previous);
  }

  private _fetchPageOfUsers(pageRequest?: PageRequest): void {
    this._usersService.findAll(pageRequest)
      .pipe(take(1))
      .subscribe(page => this.currentPage = page);
  }
}
