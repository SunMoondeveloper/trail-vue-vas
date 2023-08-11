<template>
  <div class="auth-wrapper auth-v2 ">
    <b-row class="auth-inner m-0 p-5">
      <!-- Brand logo-->
      <b-link class="brand-logo" to="/">
        <!--<vuexy-logo />-->
        <img src="../../assets/images/logo/logo.png" alt="" style="width: 200px" />
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <img src="../../assets/images/pages/login-v2-dark.svg" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5 ">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1"> Welcome to Vastoz </b-card-title>
          <!-- form -->
          <b-overlay variant="white" spinner-variant="primary" opacity=".75" rounded="sm">
            <b-form class="auth-login-form mt-2" @submit="submitForm" >
              <!-- email -->
              <b-form-group label="Account" label-for="login-email">
                <b-form-input id="login-email" v-model="username" name="username" placeholder="Enter Username" autocomplete="off"  required/>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                </div>

                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="login-password"
                    class="form-control-merge"
                    v-model="password"
                    name="login-password"
                    :type="passwordFieldType"
                    placeholder="············"
                    autocomplete="off"
                    required

                  />
                  <b-input-group-append is-text> 
                    
                    <vue-feather
                        class="cursor-pointer"
                        :type="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-card-text class="text-center mt-2">
            <b-link>
              <b-button type="submit" variant="primary" class="w-100">Login</b-button>
            </b-link>
          </b-card-text>
            </b-form>
          </b-overlay>

          <b-card-text class="text-center mt-2">
            <b-link>
              <b-button type="submit" variant="outline-primary" class="w-100" block>Sign up</b-button>
            </b-link>
          </b-card-text>
        </b-col>
        
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue-3'

import { useField } from 'vee-validate';
const { errorMessage, meta, value } = useField('username');

import axios from 'axios'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
export default {
  name: 'Login',
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
      return this.passwordFieldType === 'password' ? 'eye' : 'eye-off'
    },
    
  },
  methods: {
    submitForm() {
 
axios.post('https://dev.vastoz.com/cms/user/login', {
  //userName:"GreenG",
  //password:"Vast0z1!"
  userName:this.username, 
  password:this.password,
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
              this.$router.push({path: '/home'});
            }else {
              this.$router.push({path: '/login'});
            }
            this.showLoading = false;
          }).catch(error => {
            this.showLoading = false;
          })

    },
  },
}

</script>

