<template>
  <v-app dark>
    <the-header :title="title" :clipped="true"></the-header>
    <v-content>
      <main-profile subHeader="Computer Science Student" header="Coltin Kifer"/>
    </v-content>
    <the-footer :fixed="true"></the-footer>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import MainProfile from './components/MainProfile'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    MainProfile
  },
  data () {
    return {
      title: 'Coltin Kifer'
    }
  }
}
</script>
