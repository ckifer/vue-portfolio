<template>
  <v-app dark>
    <the-header :title="title" :clipped="true" :backBtn="backBtn()"></the-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <the-footer :fixed="true"></the-footer>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return {
      title: 'Coltin Kifer',
      backBtn: function(){
        if(this.$route.name == 'About'){
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
</script>
