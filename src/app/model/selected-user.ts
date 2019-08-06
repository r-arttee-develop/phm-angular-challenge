import { User } from './user';

export class SelectedUser extends User {
    isSelected: boolean;   

    constructor(user:User){
        super();
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.userName = user.userName;
        this.isSelected = false;
    }
}