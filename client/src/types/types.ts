export interface StudentsState{
    studentCard: boolean;
   
}

export interface evaluationState{
    addEvalForm: boolean;
}

export interface userState{
    user:user
}

export interface user{
        acc_status: string;
        created_at: string;
        email: string;
        fathers_name: string; 
        first_name: string;
        gender: string;
        phone: string;
        picture:string;
        profession: string;
        role: string; 
        status: string;
        user_id: number;
        user_name: string;
}

export interface RootState{
    student: {
        studentCard: boolean;
    }
    user: {
        user: user;
        signup: Signup | null;
        login: login  | null;
        userForm: boolean;
        form: string;
       profileForm: boolean;
            }
    admin: {
            adminPage: string;
            students: user[];
            staffs: user[];
            newUsers: user[];
            secreteries: user[];
            admins: user[];
    }
    exaluation: {
        addEvalForm: boolean;
    }
    blogs:{
     blogForm: boolean;
    }
}

export interface UserState{
    signup: Signup | null;
    login: login | null;
    userForm: boolean;
    form: string;
    user: user;
    profileForm: boolean;
    
}

export interface Signup{
    name: string;
    fatherName: string;
    email: string | null;
    phone: string;
    password: string;
};

export interface login{
    user: string;
    password: string;
}

export interface AdminState{
    adminPage: string;
    students: user[];
    staffs: user[];
    newUsers: user[];
    secreteries: user[];
    admins: user[];

}

export interface roles{
    staff: user[];
    students: user[];
    admin: user[];
    newUsers: user[];
    secretery: user[];
}

export interface signUp{
        user_name: string;
        phone: string;
        email: string;
        user_password: string;
        gender: string;
}

export interface BlogState{
    blogForm: boolean;
    
}