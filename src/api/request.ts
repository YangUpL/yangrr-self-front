import axios from "axios";
import {LoginDto, questionPageDto, RegisterDto, updateDto} from "../model/pojo.ts";
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

        return promise;
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
    if (registerUser.email == null || registerUser.email === '') {

        error('邮箱是必填项')
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

    if (promise.data.code === 20000) {
        sessionStorage.setItem("userInfo", JSON.stringify(promise.data.data));
        return
    }
}

export const update = async (updateUser: updateDto) => {
    const promise = await axios.post("/api/user/update", updateUser);

    if (promise.data.code === 20000) {
        success('修改成功')
        current()
        return
    } else {
        error(promise.data.description)
        return
    }
}


export const obtainJavaQuestion = async (pageInfo:questionPageDto) => {
    const promise = await axios.post("/api/question/java",pageInfo);
    if (promise.data.code === 20000) {
        return promise.data.data;
    }
};

export const logout = async () => {
    await axios.post("/api/user/logout");
    const userInfo = sessionStorage.getItem('userInfo')
    sessionStorage.removeItem('userInfo');
    let user;
    if(userInfo){
        user = JSON.parse(userInfo)
        console.log(user.uniqueId)
    }
    localStorage.removeItem(`hasSeenNote_${user.uniqueId}`);
    localStorage.removeItem(`countdownTime_${user.uniqueId}`);
};
