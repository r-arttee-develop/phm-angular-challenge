import { Component } from '@angular/core';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component'
import { MatDialog} from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { UserGroup } from '../../model/user-group';
import {SelectedUser} from '../../model/selected-user';

@Component({
  selector: 'app-user-group-manager',
  templateUrl: './user-group-manager.component.html',
  styleUrls: ['./user-group-manager.component.scss']
})
export class UserGroupManagerComponent {
  
  userGroups: UserGroup[];
  userList: SelectedUser[];

  constructor(public dialog: MatDialog, private userService: UserService) {
    this.userService.getUserGroups().subscribe(userGroups => this.userGroups = userGroups);
    this.userService.getUsersList().subscribe(userList => this.userList = userList);
  }

  editUserRole(userRole) {
    window.alert('Edit User Role Clicked'+userRole);
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '40%',
      data: this.userList.map(user => Object.assign({}, user))
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userList = result ? result : this.userList;
    });
  }

  addRole() {
    window.alert('Coming Soon...Add User Group:Fab Icon Click');
  }  

}
