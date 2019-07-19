import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master',
      status: 'active'
    },
    {
      name: 'Test',
      status: 'inactive'
    },
    {
      name: 'Hidden',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

  constructor() { }
}
