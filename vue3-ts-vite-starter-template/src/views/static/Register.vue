<template>
  <div class="auth-wrapper auth-v2 register-page">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo" to="/">
        <img src="../../assets/images/logo/logo.png" alt="" style="width: 200px">
      </b-link>
      <!-- /Brand logo-->

      <!-- Register-->
      <b-col lg="12" class="p-lg-5 pt-5 mt-1">
        <b-col sm="12" lg="10" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1 text-center">Create an account</b-card-title>

          <b-form v-show="showNext" autocomplete="off" class="auth-register-form mt-2 row" @submit.prevent="register1">

            <div class="col-12"><h4>Personal Details</h4></div>

            <b-form-group class="col-md-6" label="First Name*">
              <b-form-input name="firstName" v-model="formData.firstName" autocomplete="off"/>
            </b-form-group>

            <b-form-group class="col-md-6" label="Last Name*">
              <b-form-input name="lastName" v-model="formData.lastName" autocomplete="off"/>
            </b-form-group>

            <b-form-group class="col-md-6" label="Nick Name*">
              <b-form-input name="nickName" v-model="formData.nickName" autocomplete="off"/>
            </b-form-group>

            <b-form-group class="col-md-6" label="Username*" >
              <b-form-input name="userName" v-model="formData.userName" autocomplete="off"/>
            </b-form-group>

            <b-form-group class="col-md-6" label="Password*">
              <b-input-group class="input-group-merge">
                  <b-form-input name="password" v-model="formData.password" class="form-control-merge" autocomplete="off"
                                :type="passwordFieldType"/>
                  <b-input-group-append is-text>
                    <vue-feather
                        class="cursor-pointer"
                        :type="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                  </b-input-group-append>
                </b-input-group>
            </b-form-group>

            <b-form-group class="col-md-6" label="Confirm Password*">
              <b-input-group class="input-group-merge">
                  <b-form-input name="password2" id="register-password2" v-model="formData.password2" class="form-control-merge" autocomplete="off"
                                :type="passwordFieldType"/>
                  <b-input-group-append is-text>
                    <vue-feather
                        class="cursor-pointer"
                        :type="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                  </b-input-group-append>
                </b-input-group>
            </b-form-group>

            <b-form-group class="col-md-6" label="Email*" >
              <b-form-input name="email" v-model="formData.email" autocomplete="off" placeholder=""/>
            </b-form-group>

            <b-form-group class="col-md-6" label="Birth Date*">
              <VueDatePicker id="birthday" class="form-control-merge pl-25" :max="max" v-model="date" placeholder="DD/MM/YYYY" :format="format" locale="en" autocomplete="off" auto-apply keep-action-row required></VueDatePicker>
            </b-form-group>

            <b-form-group class="col-md-6" label="Country*">
              <!--v-select class="form-control" id="country"  v-model="formData.countryId" label="countryName" :reduce="countryName => countryName.countryId"  :options="optionsCountry" @open="openSelect('country')"/-->
              <v-select class="form-control" id="country"  v-model="formData.countryId" label="countryName" :reduce="countryName => countryName.countryId"  :options="optionsCountry" @open="openSelect('country')"/>
            </b-form-group>

            <div class="col-12 mt-1"><h4>Social Media</h4></div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-instagram"></span> Instagram</label>
                <input v-model="formData.instagram" type="text" placeholder="@lilyantwerp" class="form-control" >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-twitter"></span> Twitter</label>
                <input v-model="formData.twitter" type="text" placeholder="" class="form-control" >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-in"></span> Linkedin</label>
                <input v-model="formData.linkedin" type="text" placeholder="" class="form-control" >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-facebook"></span> Facebook</label>
                <input v-model="formData.facebook" type="text" placeholder="" class="form-control" >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-pinterest"></span> Pinterest</label>
                <input v-model="formData.printerest" type="text" placeholder="" class="form-control" >
              </div>
            </div>
            <div class="form-group col-md-6">
              <div class="group">
                <label class="mb-0"><span class="iconfont icon-youtube"></span> Youtube</label>
                <input v-model="formData.youtube" type="text" placeholder="" class="form-control" >
              </div>
            </div>

            <b-form-group class="col-md-12">
              <b-form-checkbox id="register-privacy-policy" v-model="formData.status" name="checkbox-1">By signing up, you agree with our Privacy Policy
                <!--b-link :to="{name:'privacy'}">Privacy Policy</!--b-link> and <b-link-- :to="{name:'terms'}">Terms & Conditions</b-link--> </b-form-checkbox>
            </b-form-group>


            <b-form-group class="col-md-12 text-center">
              <b-overlay variant="white" :show="loadNext"  opacity=".5" rounded="sm" class="d-inline-block">
                <b-button variant="primary" block type="submit">Next</b-button>
              </b-overlay>
            </b-form-group>

          </b-form>


          <form v-show="!showNext" autocomplete="off" class="auth-register-form auth-register-form2 mt-2 row" >
            <div class="col-12"><h4>Shop Prefferences</h4></div>
            <b-form-group label="Studio Name*" class="mb-1 col-lg-6">
              <b-form-input name="studioName" v-model="studioData.studioName" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Category" class="mb-1 col-lg-6">
              <v-select v-model="studioData.category" label="listName" :loading="isLoadingL" class="form-control"
                        :options="optionsLang" @open="openSelect('category')"/>
            </b-form-group>
            <b-form-group label="Language" class="mb-1 col-lg-6">
              <v-select v-model="studioData.languages" label="listName" :loading="isLoadingL" class="form-control"
                        :options="optionsLang" @open="openSelect('language')"/>
            </b-form-group>
            <b-form-group label="Currency" class="mb-1 col-lg-6">
              <v-select v-model="studioData.currency" label="listName" :loading="isLoadingL" class="form-control"
                        :options="optionsLang" @open="openSelect('currency')"/>
            </b-form-group>
            <b-form-group label="SEO Title" class="mb-1 col-12">
              <textarea rows="2" v-model="studioData.seoTitle" placeholder="" class="form-control"></textarea>
            </b-form-group>
            <div class="form-group mb-1 col-lg-6">
              <b-form-checkbox v-model="studioData.adultOnly" :checked="studioData.adultOnly" value="1" class="d-inline-block"/>
              <label for="vastmed" class="d-inline-block">Adult Only</label>
            </div>

            <div class="form-group mb-1 col-lg-6" v-show="vastmed==6">
              <div class="form-group " >
                <b-form-checkbox v-model="studioData.isVastmed" :checked="studioData.isVastmed" value="1" class="d-inline-block"  id="vastmed"/>
                <label for="vastmed" class="d-inline-block">Vastmed</label>
              </div>
            </div>

            <div class="col-12 mt-2">
              <h4>Where are you shipping from?</h4>
            </div>
            <b-form-group label="Address*" class="mb-1 col-12">
              <textarea rows="3" name="address" v-model="studioData.address" placeholder="Address" class="form-control"></textarea>
            </b-form-group>
            <b-form-group label="First Name*" class="mb-1 col-lg-6">
              <b-form-input name="firstName" v-model="studioData.firstName" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Last Name*" class="mb-1 col-lg-6">
              <b-form-input name="lastName" v-model="studioData.lastName" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Country*" class="mb-1 col-lg-6">
              <v-select id="country2" v-model="studioData.country" label="countryName" :loading="isLoadingL" class="form-control"
                        :options="optionsLang" @open="openSelect('country')"/>
            </b-form-group>
            <b-form-group label="Email" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.email" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Telephone" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.telephone" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Company Name" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.companyName" placeholder="Enter" type="text"/>
            </b-form-group>

            <b-form-group label="Post Code" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.postCode" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="City" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.city" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Town / District" class="mb-1 col-lg-6">
              <b-form-input v-model="studioData.townDistrict" placeholder="Enter" type="text"/>
            </b-form-group>
            <b-form-group label="Select multiple Countries" class="mb-1 col-lg-6">
              <v-select v-model="studioData.countries" label="countryName" :loading="isLoadingL"
                        :options="optionsLang" @open="openSelect('country')" multiple
                        class="multiple-select form-control"/>
            </b-form-group>

            <div class="col-12 mt-1">
              <h4>Shipping Costs</h4>
            </div>
            <b-form-group class="mb-1 col-lg-6">
              <b-form-radio v-model="studioData.shippingCosts" plain name="some-radios3" checked="checked"
                            value=0>
                Connect to carrier for auto-shipping costs
              </b-form-radio>
              <b-form-radio v-model="studioData.shippingCosts" plain name="some-radios3" value=1>
                Set your own shipping costs
              </b-form-radio>
            </b-form-group>

            <div class="col-12 mt-2">
              <h4>Shop Interface</h4>
            </div>
            <b-form-group label="Page Bio" class="mb-1 col-12">
              <textarea rows="3" v-model="studioData.pageBio" placeholder="Enter" class="form-control"></textarea>
            </b-form-group>
            <b-form-group label="Studio About" class="mb-1 col-12">
              <textarea rows="3" v-model="studioData.studioAbout" placeholder="Enter" class="form-control"></textarea>
            </b-form-group>

            <div class="col-lg-6 ">
              <h4 class="mt-2">Profile Banner</h4>
              <b-form-group class="mb-1">
                <div class="file-box">
                  <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg"
                         accept="image/*">
                  <img :src="profileBanner" alt="" class="empty-img mw-100" style="min-width:200px;width: 100%;height: 160px;object-fit: cover" @click="$refs.uploadImgInput.click()">
                  <label class="iconfont icon-upload"
                         @click="$refs.uploadImgInput.click()"></label>
                  <!--<span @click="removeImg('profileBanner')" class="remove-img"><feather-icon icon="DeleteIcon" size="14"/></span>-->
                </div>
                <div class="notes">File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)
                </div>
              </b-form-group>
            </div>

            <div class="col-lg-6 ">
              <h4 class="mt-2">Profile Picture</h4>
              <b-form-group class="mb-1">
                <div class="file-box">
                  <input type="file" class="hidden" ref="uploadImgInput2" @change="updateCurrImg2"
                         accept="image/*">
                  <img :src="profilePicture" alt="" class="empty-img mw-100"
                       style="width: 160px;height: 160px;border-radius: 100%;object-fit: cover" @click="$refs.uploadImgInput2.click()">
                  <label class="iconfont icon-upload"
                         @click="$refs.uploadImgInput2.click()"></label>
                  <!--<span @click="removeImg('profilePicture')" class="remove-img"><feather-icon icon="DeleteIcon" size="14"/></span>-->
                </div>
                <div class="notes">File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)
                </div>
              </b-form-group>
            </div>

            <div class="col-12">
              <h4 class="mt-2">Preview</h4>
              <div class="imgBox mb-3">
                <div class="img-box mb-2" style="background-color: #FFFFFF">
                  <img :src="profileBanner" alt="" class="banenr-img mw-100 w-100" style="object-fit: cover;height: 200px">
                </div>
                <div class="profile-text">
                  <div class="row">
                    <div class="col-3 person-header">
                      <img :src="profilePicture" alt="" class="rounded-circle img-thumbnail mw-100 w-100" style="min-height: 60px;object-fit: contain">
                    </div>
                    <div class="col-lg-6 pl-0 col-9 person-liuyan mb-2">
                      <h3>{{studioData.studioName}}</h3>
                      <b>{{studioData.categoryName}}</b>
                      <p>{{studioData.pageBio}}</p>
                      <!--<i>Last active 3 minute ago</i>-->
                    </div>
                    <div class="col-lg-3 pl-lg-0 col-12 right-btn pt-md-0 pt-1">
                      <a class="btn btn-light" ><feather-icon icon="HeartIcon" size="15"/> Like</a>
                      <!--<a  class="btn" >Subscribe</a>-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-primary" @click="goBack01">Go Back</button>

                <b-overlay variant="white" :show="loadSignup"  opacity=".5" rounded="sm" class="d-inline-block">
                  <button type="button" class="btn btn-success" @click="saveStudio">Sign Up</button>
                </b-overlay>
              </div>
            </div>
          </form>
          <p class="text-center mt-2" >
            <span>Already have an account?</span>
            <!--b-link :to="{name:'login'}"><span>&nbsp;Log in</span></!--b-link-->
          </p>

        </b-col>
      </b-col>
    <!-- /Register-->
    </b-row>
  </div>
</template>


<script>
import {
  BRow, BCol, BLink, BButton, BForm, BFormCheckbox, BFormGroup, BFormInput, BInputGroup, BInputGroupAppend, BImg, BCardTitle, BCardText,
} from 'bootstrap-vue-3'
import axios from 'axios'


import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import "vue-select/dist/vue-select.css";

import { togglePasswordVisibility } from '@core/mixins/ui/forms'
//import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
//import { useToast } from 'vue-toastification';
import { useToast } from "vue-toastification";
//import $ from 'jquery';
export default {
  name: 'Register',
  components: {
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    VueDatePicker,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      max:new Date(),
      date:new Date(),
      formData:{},
      optionsCountry: [],
      showNext:true,
      studioData:{},
      isLoadingL:false,
      optionsLang:[],
      vastmed:localStorage.getItem('roleId'),
      //profileBanner: src('@/assets/images/dashborad/upload-img01.jpg'),
      //profilePicture: src('@/assets/images/dashborad/upload-img01.jpg'),
      bannerImage: null,
      pictureImage: null,
      loadNext:false,
      loadSignup:false,
      userIdNew:null,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'eye' : 'eye-off'
      //return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
     format(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
},
    openSelect(item) {
      let url = null;
      if (item === 'language') {
        url = rootPath + '/select/getOptionBySelectId/3'
      }else if (item === 'currency') {
        url = rootPath + '/select/getOptionBySelectId/2'
      }else if (item === 'country') {
        url = rootPath+'/select/getCountryList'
      }else if (item === 'category') {
        url = this.GLOBAL.rootPath + '/select/getCategoryList'
      }
      axios({
        method: 'post',
        url: url,
      }).then(res => {
        if (res.data) {
          this.optionsCountry = res.data
          this.optionsLang = res.data
        }
      }).catch(error => {})
    },
    register1() {
      const toast = useToast();
      // Use it!
     // toast("I'm a toast testing!");

      if(this.formData.firstName == undefined || this.formData.firstName == null || this.formData.firstName == ''){
        toast.error('First name can not be empty');
        $(".auth-register-form input[name='firstName']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='firstName']").removeClass("border-red")}

      if(this.formData.lastName == undefined || this.formData.lastName == null || this.formData.lastName == ''){
        toast.error('Last name can not be empty');
        $(".auth-register-form input[name='lastName']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='lastName']").removeClass("border-red")}

      if(this.formData.nickName == undefined || this.formData.nickName == null || this.formData.nickName == ''){
        toast.error('Nick name can not be empty');
        $(".auth-register-form input[name='nickName']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='nickName']").removeClass("border-red")}

      if(this.formData.userName == undefined || this.formData.userName == null || this.formData.userName == ''){
        toast.error('User name can not be empty');
        $(".auth-register-form input[name='userName']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='userName']").removeClass("border-red")}

      if(this.formData.userName.length > 25 ){
        toast.error('Username should be 25 characters at most');
        $(".auth-register-form input[name='userName']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='userName']").removeClass("border-red")}

      var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if(this.formData.email == undefined || this.formData.email == null || !regEmail.test(this.formData.email)){
        toast.error('Please fill in the correct email format in the email');
        $(".auth-register-form input[name='email']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='email']").removeClass("border-red")}

      if(this.formData.password == undefined || this.formData.password == null || this.formData.password == ''){
        toast.error('Password can not be empty');
        $(".auth-register-form input[name='password']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='password']").removeClass("border-red")}

      if(this.formData.password.length > 100 ){
        toast.error('Password should be 100 characters at most');
        $(".auth-register-form input[name='password']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='password']").removeClass("border-red")}

      var testPassword =/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.])[a-zA-Z\d!#@*&.]*$/;
      if(!testPassword.test(this.formData.password)){
        toast.error('The password shall be at least 8 characters, including uppercase letters, lowercase letters, numbers and special characters.');

        
        $(".auth-register-form input[name='password']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='password']").removeClass("border-red")}

      if(this.formData.password2 == undefined || this.formData.password2 == null || this.formData.password2 == ''){
        toast.error('Confirm Password can not be empty');
        $(".auth-register-form input[name='password2']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='password2']").removeClass("border-red")}

      if(this.formData.password != this.formData.password2  ){
        toast.error('Confirmation password is not identical.');
        $(".auth-register-form input[name='password2']").addClass("border-red")
        return;
      }else{$(".auth-register-form input[name='password2']").removeClass("border-red")}

      if(this.formData.birthDate == undefined || this.formData.birthDate == null || this.formData.birthDate == '' ){
        toast.error('Birthday Date can not be empty');
        $(".auth-register-form #birthday").addClass("border-red")
        return;
      }else if(getAge(this.formData.birthDate) <18){
        toast.error('You must be at least 18 years old');
        $(".auth-register-form #birthday").addClass("border-red")
        return;
      }else{$(".auth-register-form #birthday").removeClass("border-red")}

      if(this.formData.countryId == undefined || this.formData.countryId == null || this.formData.countryId == ''){
        toast.error('Country can not be empty');
        $(".auth-register-form #country").addClass("border-red")
        return;
      }else{$(".auth-register-form #country").removeClass("border-red")}

      if(this.formData.status == undefined || this.formData.status == null || this.formData.status == ''){
        toast.error('You must agree to our Privacy Policy and Terms & Conditions.');
        return;
      }
      // Form validation completed
      this.loadNext=true
      const formData = new FormData();
      formData.append('formData', JSON.stringify(this.formData));

      this.$http({
        method: 'post',
        url: this.GLOBAL.rootPath+"/seller/register",
        data:formData,
        headers:{
          'Content-Type':'application/json;charsetset=UTF-8'
        },
      }).then(res => {
        this.loadNext=false
        if (res.data.result) {
          this.showNext=false
          this.userIdNew=res.data.userId

          localStorage.setItem('x-auth-token',res.data.data[2]);
          localStorage.setItem('userEmail',res.data.data[3]);
          localStorage.setItem('nickName',res.data.data[6]);
          localStorage.setItem('userAvatar',res.data.data[5]);
          localStorage.setItem('roleId',res.data.data[7]);
        }
      }).catch(error => {this.loadNext=false})



    },
    goBack01() {this.showNext=true},
    saveStudio() {
      if (this.studioData.address && this.studioData.firstName && this.studioData.lastName && this.studioData.country && this.studioData.studioName ){
        let url =null;
        url=this.GLOBAL.rootPath + '/studio/addStudio'
        let formData1 =this.studioData;
        if (this.studioData.currency){
          formData1.currencyId = this.studioData.currency.listId;
        } else formData1.currencyId = null
        if (this.studioData.category){
          formData1.categoryId = this.studioData.category.listId;
        } else formData1.categoryId = null
        if (this.studioData.country){
          formData1.countryId = this.studioData.country.countryId;
          formData1.country = this.studioData.country.countryId;
        } else formData1.countryId = null
        if (this.studioData.languages){
          formData1.language = this.studioData.languages.listId;
        } else formData1.language = null;
        let countries = null;
        if (this.studioData.countries !=null && this.studioData.countries!=''){
          let relatePro = "";
          this.studioData.countries.forEach(function (item) {
            relatePro += item.countryId + ',';
          });
          countries = relatePro.substring(0, relatePro.length - 1);
        } else {
          countries =null
        }
        formData1.countriesId = countries;
        const json = JSON.stringify(formData1);
        const formData = new FormData();
        formData.append('formData', json);
        formData.append('bannerImage', this.bannerImage);
        formData.append('proFileImage', this.pictureImage);
        this.loadSignup = true;
        this.$http({
          method: 'post',
          url: url,
          data: formData,
          processData: false,
          contentType : false,
        }).then(res => {
          this.loadSignup = false;
          if (res.data.result) {
            this.studioData={};
            this.profileBanner=require('@/assets/images/dashborad/upload-img01.jpg');
            this.profilePicture=require('@/assets/images/dashborad/upload-img01.jpg');
            this.bannerImage=null;
            this.pictureImage=null;
            this.$router.push({path: '/login'});
          }else {
            this.$toast({
              component: ToastificationContent,
              props: {
                title:res.data.msg ,
                icon: 'CheckIcon',
                variant: 'warn',
              },
            });
          }
        }).catch(error => {
          this.loadSignup = false
          this.$toast({
            component: ToastificationContent,
            props: {
              title:"Fail" ,
              icon: 'CheckIcon',
              variant: 'warn',
            },
          });
        })
      } else {
        this.$toast({
          component: ToastificationContent,
          props: {
            title:"Required fields cannot be empty" ,
            icon: 'CheckIcon',
            variant: 'warn',
          },
        });
      }
    },
    removeImg(item) {
      if (item === 'profileBanner') {
        this.profileBanner = require('@/assets/images/dashborad/upload-img01.jpg');
        this.bannerImage = null
      }
      if (item === 'profileBanner') {
        this.profilePicture = require('@/assets/images/dashborad/upload-img01.jpg');
        this.pictureImage = null
      }
    },
    //上传图片 到服务器
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
        };
        reader.readAsDataURL(input.target.files[0]);
      }
      let file = input.target.files[0];
      if(file.size > 1024 * 1024 * 100) {alert('Upload file cannot exceed 10MB');return false;}
      this.bannerImage = file;
      let URL = window.URL || window.webkitURL;
      let imgURL = URL.createObjectURL(file);
      this.profileBanner = imgURL;
    },
    updateCurrImg2(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
        };
        reader.readAsDataURL(input.target.files[0]);
      }
      let file = input.target.files[0];
      if(file.size > 1024 * 1024 * 100) {alert('Upload file cannot exceed 10MB');return false;}
      this.pictureImage = file;
      let URL = window.URL || window.webkitURL;
      let imgURL = URL.createObjectURL(file);
      this.profilePicture = imgURL;
    },
  },
}

function getAge(birthday) {
  //出生时间 毫秒
  var birthDayTime = new Date(birthday).getTime();
  //当前时间 毫秒
  var nowTime = new Date().getTime();
  //一年毫秒数(365 * 86400000 = 31536000000)
  return Math.ceil((nowTime-birthDayTime)/31536000000);
}



/* eslint-disable global-require */


</script>

