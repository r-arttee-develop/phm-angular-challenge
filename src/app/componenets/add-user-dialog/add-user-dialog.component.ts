import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  selectedOptions: string[] = [];

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[], private userService: UserService) { }

  ngOnInit() {
    this.selectedOptions = this.data.filter((user) => user.isSelected === true).map(user => user.email);
  }

  onSelection(e){
    if(e.option.selected){
      this.data.map(user => {
        if(user.email === e.option.value){
          user.isSelected = true;
        }
        return user;});
      }else{
        this.data.map(user => {
          if(user.email === e.option.value){
            user.isSelected = false;
          }
          return user;});
    }
    
   }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveSelectedUsers(){    
    return this.data;
  }

}
