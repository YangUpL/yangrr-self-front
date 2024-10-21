/**
 * 用户登录传输对象
 */
export interface LoginDto {
    userAccount: string;
    userPassword: string;
}


export interface EmailDto {
    email: string;
}

export interface CodeDto {
    email: string;
    code: string;
}

export interface ChangePwdDto {
    email: string;
    pwd: string;
    rePwd: string;
}

/**
 * 用户注册传输对象
 */
export interface RegisterDto {
    userAccount: string;
    email:string;
    userPassword: string;
    checkPassword: string;
}

export interface obtainJavaQuestionDto {
    id:number;
    question:string;
    classification:number;
}


export interface obtainTitleDto {
    id: number;
    title: string;
    content: string;
    author: string;
    avatar: string;
    time: string;
    image: string;
    likes: number;
    liked: boolean;
    favorites: number;
    favorited: boolean;
    comments: object[];
}

export interface questionPageDto{
    total?:number;
    size:number;
    current:number;
    queName:string
    classification:number
}

export interface updateDto{
    username: string;
    phone: string;
    email: string;
    gender:string;
    planetCode:number;
    userRole:number;
    userStatus:number;
}