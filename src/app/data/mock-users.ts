import { User } from '../model/user';
import { UserGroup } from '../model/user-group';

export const USERGROUPS: UserGroup[] = [
    {
        "name": "Users",
        "id": "8fc6fbc0-e1a7-48a1-bd06-3a8ceb50de1c"        
    },
    {
        "name": "Managers",
        "id": "aef46bd8-6800-4355-890b-c83197ccf140"
       
    }
];

export const USER_IN_USERGROUPS: User[] = [
    {
        "userName": "LilyBall",
        "email": "Lily.Hank@ford.co.uk",
        "firstName": "Lily",
        "lastName": "Hank"
    },
    {
        "userName": "JoeKnox",
        "email": "Joe.Knox@ford.co.uk",
        "firstName": "Joe",
        "lastName": "Knox"
    },
    {
        "userName": "FrankParr",
        "email": "Frank.Parr@ford.co.uk",
        "firstName": "Frank",
        "lastName": "Parr\t"
    },
    {
        "userName": "SarahMackenzie",
        "email": "Sarah.Mackenzie@ford.co.uk",
        "firstName": "Sarah",
        "lastName": "Mackenzie"
    },
    {
        "userName": "CarlClark",
        "email": "Carl.Clark@ford.co.uk",
        "firstName": "Carl",
        "lastName": "Clark"
    },
    {
        "userName": "WarrenRoss",
        "email": "Warren.Ross@ford.co.uk",
        "firstName": "Warren",
        "lastName": "Ross"
    },
    {
        "userName": "EdwardTerry",
        "email": "Edward.Terry@ford.co.uk",
        "firstName": "Edward",
        "lastName": "Terry"
    }
];

export const USER_NOT_IN_USERGROUPS: User[] = [
    {
        "userName": "JoeSmith",
        "email": "Joe.Smith@ford.co.uk",
        "firstName": "Joe",
        "lastName": "Smith"
    },
    {
        "userName": "AnthonyMay",
        "email": "Anthony.May@ford.co.uk",
        "firstName": "Anthony",
        "lastName": "May"
    },
    {
        "userName": "JoshuaWatson",
        "email": "Joshua.Watson@ford.co.uk",
        "firstName": "Joshua",
        "lastName": "Watson"
    }
];