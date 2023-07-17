<template>
  <div>
    <!--footer-->
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mb-2">
            <ul class="row ">
              <li class="col-md col">
                <a href="javaScript:;"><span>{{$t('about')}}</span></a>
                <a href="javaScript:;"><span>{{$t('about us')}}</span></a>
                <a href="javaScript:;"><span>{{$t('careers')}}</span></a>
                <a href="javaScript:;"> <span>{{$t('contact us')}}</span></a>
              </li>
              <li class="col-md col">
                <a href="javaScript:;"><span>{{$t('account')}}</span></a>
                <a href="javaScript:;"><span>{{$t('buyer')}}</span></a>
                <a href="javaScript:;"><span>{{$t('seller')}}</span></a>
                <a href="javaScript:;"><span>{{$t('become seller')}}</span></a>
              </li>
              <li class="col-md col ">
                <a ><span>{{$t('privacy terms')}}</span></a>
                <b-link :to="{name:'privacy'}"><span>{{$t('privacy')}}</span></b-link>
                <a href="javaScript:;"><span>{{$t('terms')}}</span></a>
              </li>
              <li class="col-md col"><a href="javaScript:;"><span>{{$t('studios')}}</span></a></li>
              <li class="col-md col "><a href="javaScript:;"><span>{{$t('shop')}}</span></a></li>
              <li class="col-md col "><a href="javaScript:;"><span>{{$t('help')}}</span></a></li>
            </ul>
          </div>
          <div class="col-lg-5 col-12">
            <span class="sub">{{$t('subscribe')}}</span>
            <p class="sup">{{$t('send subscribe on vastoz')}}</p>
            <div class="supBtn">
              <input type="email" :placeholder="$t('email address')" />
              <button><span class="fas fa-angle-right"></span></button>
            </div>
          </div>
        </div>
        <div class="row footer-bottom align-items-center">
          <div class="col-lg-8 col-5">
            <p class="clearfix mb-0">
              <span class="float-md-left d-block d-md-inline-block mt-25">© {{ new Date().getFullYear() }} Y LIFT</span>
            </p>
          </div>
          <div class="col-lg-4 col-7">
            <div class="follow-text mb-1">{{$t('follow us')}}</div>
            <ul class="d-flex footer-social justify-content-between">
              <li><a href="javaScript:;"><span class="fab fa-pinterest-p"></span></a></li>
              <li><a href="javaScript:;"><span class="fab fa-facebook-f"></span></a></li>
              <li><a href="javaScript:;"><span class="fab fa-instagram"></span></a></li>
              <li><a href="javaScript:;"><span class="fab fa-youtube"></span></a></li>
              <li><a href="javaScript:;"><span class="fab fa-twitter"></span></a></li>
            </ul>
          </div>
        </div>
      </div>

    <!--footer end-->
  </div>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
