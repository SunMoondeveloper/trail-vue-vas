<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo" to="/">
        <!--<vuexy-logo />-->
        <img src="../assets/images/logo/logo.png" alt="" style="width: 200px">
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Welcome to Vastoz
          </b-card-title>
          <!--<b-card-text class="mb-2">
            Please sign-in to your account and start the adventure
          </b-card-text>-->

          <!-- form -->
          <b-overlay variant="white"  spinner-variant="primary" opacity=".75" rounded="sm">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent
            >
              <!-- email -->
              <b-form-group
                label="Account"
                label-for="login-email"
              >
                  <b-form-input
                    id="login-email"
                    name="account"
                    placeholder="Enter" autocomplete="off"
                  />
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  
                </div>
                
                  <b-input-group
                    class="input-group-merge"
                  >
                    <b-form-input
                      id="login-password"
                      class="form-control-merge"
                      name="login-password"
                      placeholder="············" autocomplete="off"
                    />
                    <b-input-group-append is-text>
                      
                    </b-input-group-append>
                  </b-input-group>
              </b-form-group>

              <b-button
                type="submit"
                variant="primary"
                block
              >Login</b-button>
            </b-form>
          </b-overlay>


          <b-card-text class="text-center mt-2">
            <b-link >
              <b-button type="submit" variant="outline-primary" block>Sign up</b-button>
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
}
</script>

<script setup lang="ts">
//import { ValidationProvider, ValidationObserver } from 'vee-validate'

// https://github.com/vuejs/eslint-plugin-vue/issues/1577
// eslint-disable-next-line import/first
//import HelloWorld from '@/components/HelloWorld.vue'
</script>
