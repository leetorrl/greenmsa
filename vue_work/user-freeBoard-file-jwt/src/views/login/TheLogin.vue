<template>
  <div class="my-5 bg-gray-100 flex items-center justify-center min-height-100{">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">로그인</h2>

      <form @submit.prevent="submitdoLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">이메일</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">비밀번호</label>
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            required
            class="mt-1 p-2 border border-gray-300 rounded w-full"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          로그인
        </button>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        계정이 없으신가요?
        <a href="#" @click="gojoin" class="text-blue-600 hover:underline">회원가입</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { doLogin, doLogincheck } from '../api/loginApi'
import { useRouter } from 'vue-router'
import { useLoginStore } from '@/store/loginPinia';

const loginPinia = useLoginStore();


const router = useRouter()

const email = ref('aaa@naver.com')
const password = ref('1234')

const gojoin = () => {
  router.push({ name: 'join' })
}

const submitdoLogin = async () => {
  const data = {
    email: email.value,
    password: password.value
  }

  const res = await doLogin(data)
  localStorage.setItem('token', res.data)
  if (res.status === 200) {
    console.log(res)

    const data = await doLogincheck();

    loginPinia.login(data)
    router.push({name:'freeboardlist'})

    alert('로그인됨')



 watchEffect(async()=> {

  const result = await doLogincheck();

  console.log(localStorage)
  loginPinia.login(result.data)
  router.push({ name: 'freeboardlist' })

    })
  }
  else{
    loginPinia.logout();
  }
}
</script>

<style lang="scss" scoped></style>
