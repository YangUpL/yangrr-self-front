<template>
    <el-steps
        :active="active"
        finish-status="success"
        class="step"
        >
        <el-step title="第一步" />
        <el-step title="第二步" />
        <el-step title="第三步" />
    </el-steps>

    <el-input 
        v-model="email" 
        style="width: 240px" 
        placeholder="请输入账号绑定的邮箱"
        class="emailInput"
        v-if="active === 0"
     />


     <el-input 
        v-model="code" 
        style="width: 240px" 
        placeholder="请输入收到的验证码"
        class="emailInput"
        v-if="active === 1"
     />

   
     <el-input 
        v-model="pwd" 
        style="width: 240px" 
        placeholder="请输入新密码"
        class="emailInput"
        v-if="active === 2"
     />

     <el-input 
        v-model="rePwd" 
        style="width: 240px" 
        placeholder="请再次输入新密码"
        class="comfirmInput"
        v-if="active === 2"
     />



    <el-button 
        style="margin-top: 12px" 
        @click="next" 
        class="btn"
        type="primary"
    >{{ context }}</el-button>
</template>
  
<script lang="ts" setup>
    import { ref } from 'vue'
    import { error, success } from '../../message/message';
    import axios from 'axios';
import { ChangePwdDto, CodeDto, EmailDto } from '../../model/pojo';
import router from '../../routers/router';



    const active = ref(0)
    const context = ref('下一步')
    const email = ref('')
    const code = ref('')
    const pwd = ref('')
    const rePwd = ref('')

    const emaildto:EmailDto = {
        email:'',
    }

    const codedto:CodeDto = {
        email:'',
        code:''
    }

    const changePwdDto:ChangePwdDto = {
        email:'',
        pwd: '',
        rePwd:''
    }



    const next = async () => {
        
        if(active.value === 0){
            emaildto.email = email.value
            const promise = await axios.post("/api/user/sendMail",emaildto)
            if(promise.data.code === 20000){
                success("验证码发送成功")
                 active.value++;
            }else{
                error("验证码发送失败")
            }
        }else if(active.value === 1){     
            
            codedto.email = email.value;
            codedto.code = code.value;
            const promise = await axios.post("/api/user/checkCode",codedto)
            if(promise.data.code === 20000){
                success("验证成功")
                active.value++;
                context.value = '完成'
            }else{
                error(promise.data.description)
            }
            
        } else if(active.value === 2){     
            if(pwd.value !== rePwd.value){
                error("两次密码不一致");
            }


            changePwdDto.email = email.value;
            changePwdDto.pwd = pwd.value;
            changePwdDto.rePwd = rePwd.value;
            const promise = await axios.post("/api/user/changePwd",changePwdDto)
            if(promise.data.code === 20000){
                success("修改成功")
                active.value = 0;
                router.push("/");
            }else{
                error(promise.data.description)
            }


        }
    }
</script>

<style scoped>
    .step{
        width: 600px;
        margin: 100px auto;
    }


    .btn{
        position: absolute;
        bottom: 200px;
        right: 300px;
    }

    .emailInput{
        position: absolute;
        left: 41vw;
    }

    .comfirmInput{
        position: absolute;
        bottom: 34vh;
        left: 41vw;
    }
</style>