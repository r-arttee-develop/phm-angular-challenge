import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { USERGROUPS, USER_NOT_IN_USERGROUPS } from '../data/mock-users';
import { UserGroup } from '../model/user-group';
import { User } from '../model/user';
import {SelectedUser} from '../model/selected-user';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataStore: DataStoreService) { }

  getUserGroups(): Observable<UserGroup[]> {
    return of(USERGROUPS);
  }

  getUsersList(): Observable<SelectedUser[]>{
    var usersInUserGroups:SelectedUser[] = this.dataStore.getUsersInUserGroups().map((user) => {
       var selUser: SelectedUser= new SelectedUser(user);
       selUser.isSelected = true;       
      return selUser;
    });
    var usersNotInUserGroups:SelectedUser[] = USER_NOT_IN_USERGROUPS.map((user) => {
      var selUser: SelectedUser= new SelectedUser(user);
     return selUser;
   });
    var userList:SelectedUser[] = [ ...usersInUserGroups, ...usersNotInUserGroups];
    
    return of(userList.filter((item,index) => userList.indexOf(item) === index));
  }

  getUserInUserGroups(): Observable<User[]> {
    return of(this.dataStore.getUsersInUserGroups());
  }

  saveUserGroups(users:User[]){
    this.dataStore.saveUserToGroups(users);
  }

  getUserNotInUserGroups(): Observable<User[]> {
    return of(USER_NOT_IN_USERGROUPS);
  }
}
