<template>
  <div class="auth-wrapper auth-v2">
    <p> This is a dummy Home page</p>
</div>
</template>

<script>
import axios from 'axios'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
export default {
  name: 'Home',
  data() {
    return {
      status: '',
      password: '',
      username: '',
      // validation rulesimport store from '@/store/index'
      //required,
      //email,
      showLoading:false,
    }
  },
  mixins: [togglePasswordVisibility],
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'eye-off' : 'eye'
    },
    
  },
  methods: {
    submitForm() {
 
axios.post('https://dev.vastoz.com/cms/user/login', {
  userName:"GreenG",
  password:"Vast0z1!"
  }, {
    headers: {
      'Content-Type':'application/json;charsetset=UTF-8'
    }
}).then(res => {
            if (res.data[1]=='Login successful'){
              localStorage.setItem('x-auth-token',res.data[2]);
              localStorage.setItem('userEmail',res.data[3]);
              localStorage.setItem('nickName',res.data[6]);
              localStorage.setItem('userAvatar',res.data[5]);
              localStorage.setItem('roleId',res.data[7]);
              this.$router.push({path: '/about'});
            }
            this.showLoading = false;
          }).catch(error => {
            this.showLoading = false;
          })

    },
  },
}

</script>

