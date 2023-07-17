<template>
  <div
    v-if="$route.meta.breadcrumb || $route.meta.pageTitle"
    class="content-header"
  >
    <div>
      <div class="top-studio-centre">
        <div class="d-flex align-items-center">
          <div class="text1">{{$t('studio control centre')}}</div>

          <div class="d-flex align-items-center studiolist">

            <div role="group" class="b-avatar-group">
              <div class="b-avatar-group-inner" style="padding-left: calc(5.4px); padding-right: calc(5.4px);">
                <span v-b-tooltip.hover class="b-avatar pull-up badge-secondary rounded-circle"
                      style="margin-left: calc(-5.4px); margin-right: calc(-5.4px); width: 36px; height: 36px;"
                      v-for="(item,index) in studioInfo" :key="item.studioId"
                      :title="item.storeName" @click="studioClick(item.studioId,item.storeName)"
                      :class='{current:flag==item.studioId}'>
                  <span class="b-avatar-img">
                    <feather-icon icon="ShoppingBagIcon" size="20"/>
                    <!--<img :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')" alt="avatar">-->
                  </span>
                </span>
              </div>
            </div>

            <!--<b-avatar-group size="36px" v-if="studioList.length >0">-->
              <!--<b-avatar v-b-tooltip.hover class="pull-up" v-for="item in studioList" :key="item.studioId"-->
                      <!--title="4453" @click="studioClick(item.studioId)" :class="activeStudio=='item.studioId'?'active':''"-->
                      <!--:src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"-->
              <!--/>-->

            <!--</b-avatar-group>-->
            <!--<a class="ml-50">Lily Bakes (3) <i class="iconfont icon-arrow-down-icon"></i></a>-->
          </div>

          <!--<div class="icon-list d-flex align-items-center">
            <ul class="d-flex">
              <li class="active"><a href="javaScript:;"><img src="../../../assets/images/dashborad/dash-home01.png" alt="" class="mw-100"></a></li>
              <li><a href="javaScript:;"><img src="../../../assets/images/dashborad/dash-home01.png" alt="" class="mw-100"></a></li>
              <li><a href="javaScript:;"><img src="../../../assets/images/dashborad/dash-home01.png" alt="" class="mw-100"></a></li>
              <li><a href="javaScript:;"><img src="../../../assets/images/dashborad/dash-home01.png" alt="" class="mw-100"></a></li>
            </ul>
            <p>Lily Bakes (3) <i class="iconfont icon-arrow-down-icon"></i></p>
          </div>-->
        </div>
      </div>
    </div>

    <!-- Content Left -->
    <div class="content-header-left mb-1">
      <div class="breadcrumbs-top" style="text-transform: uppercase">
        <div>
          <h2 class="content-header-title float-left pl-1 pr-1 mb-0">{{ $t($route.meta.pageTitle) }}</h2>
          <div class="breadcrumb-wrapper">
            <b-breadcrumb>
              <b-breadcrumb-item to="/">
                <feather-icon icon="HomeIcon" size="16" class="align-text-top"/>
              </b-breadcrumb-item>
              <b-breadcrumb-item v-for="item in $route.meta.breadcrumb" :key="item.text" :active="item.active" :to="item.to">
                {{ $t(item.text) }}
              </b-breadcrumb-item>
            </b-breadcrumb>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Right -->
    <!--<b-col
      class="content-header-right text-md-right d-md-block d-none mb-1"
      md="3"
      cols="12"
    >
      <b-dropdown
        variant="link"
        no-caret
        toggle-class="p-0"
        right
      >

        <template #button-content>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="btn-icon"
          >
            <feather-icon icon="SettingsIcon" />
          </b-button>
        </template>

        <b-dropdown-item :to="{ name: 'apps-todo' }">
          <feather-icon
            icon="CheckSquareIcon"
            size="16"
          />
          <span class="align-middle ml-50">Todo</span>
        </b-dropdown-item>

        <b-dropdown-item :to="{ name: 'apps-chat' }">
          <feather-icon
            icon="MessageSquareIcon"
            size="16"
          />
          <span class="align-middle ml-50">Chat</span>
        </b-dropdown-item>

        <b-dropdown-item :to="{ name: 'apps-email' }">
          <feather-icon
            icon="MailIcon"
            size="16"
          />
          <span class="align-middle ml-50">Email</span>
        </b-dropdown-item>

        <b-dropdown-item :to="{ name: 'apps-calendar' }">
          <feather-icon
            icon="CalendarIcon"
            size="16"
          />
          <span class="align-middle ml-50">Calendar</span>
        </b-dropdown-item>
      </b-dropdown>
    </b-col>-->
  </div>
</template>

<script>
import {
  BBreadcrumb, BBreadcrumbItem, BRow, BCol,BAvatarGroup, BAvatar, VBTooltip
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import $ from 'jquery';
import store from '@/store'

export default {
  directives: {
    Ripple,
    'b-tooltip': VBTooltip,
  },
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
    BRow,
    BCol,
    BAvatarGroup,
    BAvatar
  },
  data(){
    return{
      studioList:[],
      current:'current',
      flag:null,
      origin:'origin',
    }
  },
  watch: {
    /*studioInfo: {
      immediate: true,
      handler() {
        this.getStudioList()
      },
    },*/
  },
  computed:{
    studioInfo(){
      return store.getters['app/getStudioInfo'];
    },
    studioId(){
      return store.getters.getStudioId;
    },
  },
  methods:{
    getStudioList(){
      this.$http({
        method: 'get',
        url: this.GLOBAL.rootPath + '/select/getStudioList',
      }).then(res => {
        store.dispatch('app/updateStudioInfo', res.data);
        if(res.data.length>0){
          localStorage.setItem('studioId',res.data[0].studioId);
          localStorage.setItem('studioName',res.data[0].storeName);
          store.commit('app/updateStudioId', res.data[0].studioId);
          store.commit('app/updateStudioName', res.data[0].studioName);
        }else {
          localStorage.setItem('studioId','');
          localStorage.setItem('studioName','');
          store.commit('app/updateStudioId', '');
          store.commit('app/updateStudioName', '');
        }
        this.flag = res.data[0].studioId;
        store.commit('app/updateStudioInfo', res.data);
      }).catch(error => {})
    },
    studioClick(i,storeName){
      this.flag=i;
      localStorage.setItem('studioId',i);
      localStorage.setItem('studioName',storeName);
      store.commit('app/updateStudioId', i);
      store.commit('app/updateStudioName', i);
    }
  },
  mounted(){
    if (localStorage.getItem('x-auth-token')){
      this.getStudioList()
    }
  }
}
</script>

<style>
  .studiolist .b-avatar{
    opacity: 0.4;
  }
  .studiolist .b-avatar.current{
    opacity: 1;
    z-index: 99;
  }
  /*html .content .content-wrapper .content-header-title{color: #ffffff}*/
  /*.breadcrumb-item.active{color: #ffffff}*/
  /*.breadcrumb:not([class*=breadcrumb-]) .breadcrumb-item + .breadcrumb-item:before{color: #ffffff}*/
</style>
