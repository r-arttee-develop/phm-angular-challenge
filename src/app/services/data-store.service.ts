import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { USER_IN_USERGROUPS } from '../data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  userinUserGroups : User[] = USER_IN_USERGROUPS;
  
  saveUserToGroups(users:User[]) {
    this.userinUserGroups = users;
  }

  getUsersInUserGroups():User[] {
    return this.userinUserGroups;
  }
    
}
