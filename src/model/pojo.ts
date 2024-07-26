/**
 * 用户登录传输对象
 */
export interface LoginDto {
    userAccount: string;
    userPassword: string;
}

/**
 * 用户注册传输对象
 */
export interface RegisterDto {
    userAccount: string;
    userPassword: string;
    checkPassword: string;
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