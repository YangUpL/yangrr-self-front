import axios from "axios";
import {LoginDto, RegisterDto} from "../model/pojo.ts";
import router from "../routers/router.ts";
import {error, success} from "../message/message.ts";

/**
 * 登录请求
 * @param loginUser 用户信息
 */
export const login = async (loginUser: LoginDto) => {

    if (loginUser.userAccount === '' || loginUser.userPassword === '') {

        error('用户名或密码不能为空')
        return
    }

    const promise = await axios.post("/api/user/login", loginUser)

    if (promise.data.code === 20000) {
        // alert("登录成功")
        current()
        router.push('/')
        success('登录成功')
    } else {
        error(promise.data.description)
        return
    }
}

/**
 * 注册请求
 * @param registerUser 用户信息
 */
export const register = async (registerUser: RegisterDto) => {

    if (registerUser.userAccount === '' || registerUser.userPassword === ''
        || registerUser.checkPassword === '') {
        error('请将信息填写完整')
        return
    }

    if (registerUser.userPassword !== registerUser.checkPassword) {

        error('两次密码不一致')
        return
    }


    const promise = await axios.post("/api/user/register", registerUser)


    if (promise.data.code === 20000) {
        success('注册成功,快去登录吧')
        router.push('/login')
        return promise.data.data
    } else {
        error(promise.data.description)
        return
    }
}

export const current = async () => {
    const promise = await axios.get("/api/user/current");

    if (promise.data.code === 20000 && sessionStorage.getItem("userInfo") === null) {
        sessionStorage.setItem("userInfo", JSON.stringify(promise.data.data));
        return
    }
}

export const logout = async () => {
    await axios.post("/api/user/logout");
    sessionStorage.removeItem('userInfo');
    window.location.reload();
};