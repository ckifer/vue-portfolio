<template>
  <v-app>
    <the-header :title="title"></the-header>
    
     
  
    <v-content>
      <HelloWorld/>
    </v-content>
     
 
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data () {
    return {
      drawer: true,
      fixed: false,
      miniVariant: false,
      title: 'Coltin Kifer'
    }
  }
}
</script>
