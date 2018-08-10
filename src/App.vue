<template>
  <v-app dark>
    <the-header :title="title" :clipped="true"></the-header>
    <v-content>
      <home-page/>
    </v-content>
    <the-footer :fixed="true"></the-footer>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import HomePage from './views/HomePage'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    HomePage
  },
  data () {
    return {
      title: 'Coltin Kifer'
    }
  }
}
</script>
