/**
 * 用户登录传输对象
 */
export interface LoginDto {
    userAccount: string;
    password: string;
}

/**
 * 用户注册传输对象
 */
export interface RegisterDto {
    userAccount: string;
    password: string;
    rePassword: string;
}