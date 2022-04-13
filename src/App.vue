<template>
<div class="container">
  <h1>notifications</h1>
  <a @click="authenticate">Authenticate</a>
</div>
</template>

<script>

import {getAuth, signInAnonymously} from 'firebase/auth'
import {getMessaging, onMessage, getToken} from 'firebase/messaging'
import {messaging} from '@/firebaseInit'

export default {
  name: 'App',
  mounted(){
    const messaging = getMessaging();

    onMessage(messaging, (payload) =>{
      console.log("message on client : ", payload);
    });
  },

  methods:{
      async authenticate(){
        await signInAnonymously(getAuth());
        this.activate();
      },
      async activate(){
        const token = await getToken(messaging, {
          vapidKey : 'BKj9Bbj6M58x3RIF5ikHppZ9VKtaKQSlZ4wIoSYA224wrRsUVL4iaGihXmTwkHAePKaniNLZ13rCDfpHMgg0LZo',
        });

        if(token){
          console.log(token)
        }else{
           //request permission
        }

      }
  }   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
