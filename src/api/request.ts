import axios from "axios";
import {LoginDto, RegisterDto} from "../model/pojo.ts";
import router from "../routers/router.ts";

/**
 * 登录请求
 * @param loginUser 用户信息
 */
export const login = async (loginUser: LoginDto) => {

    if(loginUser.userAccount === '' || loginUser.password === '') {
        alert("用户名或密码不能为空")
        return
    }

    const promise = await axios.post("http://localhost:8080/user/login", loginUser)


    if (promise.data.code === 20000) {
        alert("登录成功")
        router.push('/')
    }else {
        alert("登录失败")
        return
    }
}

/**
 * 注册请求
 * @param registerUser 用户信息
 */
export const register = async (registerUser: RegisterDto) => {

    if(registerUser.userAccount === '' || registerUser.password === ''
                        || registerUser.rePassword === '') {
        alert("请填写完整")
        return
    }

    if(registerUser.password !== registerUser.rePassword) {
        alert("两次密码不一致")
        return
    }


    const promise = await axios.post("http://localhost:8080/user/register", registerUser)


    if (promise.data.code === 20000) {
        alert("注册成功,快去登录吧")
        router.push('/login')
    }else {
        alert("注册失败")
        return
    }
}