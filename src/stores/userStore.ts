// stores/userStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<any>(null);
  const isLogin = ref(false);

  function setUser(user: any) {
    userInfo.value = user;
    isLogin.value = !!user;
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

  function clearUser() {
    userInfo.value = null;
    isLogin.value = false;
    sessionStorage.removeItem('userInfo');
  }

  return { userInfo, isLogin, setUser, clearUser };
});
