<template>
  <v-container>
     <v-layout row wrap grid-list-md text-xs-center mt-5>
      <v-flex xs12>
        <v-avatar size="150px">
          <img src="./../assets/profile.jpg" alt="avatar" class="img-circle elevation-7">
        </v-avatar>
        <div class="subheading mt-2">{{ subHeader }}</div>
      </v-flex>
      <v-flex xs12 mt-3 justify-space-between>
        <v-btn v-for="action in actions" :key="action.key" :id="action.key" flat small color="warning" :href="action.value">{{ action.key }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MainProfile',
  props: {
    msg: String,
    header: String,
    subHeader: String
  },
  data(){
    return {
      actions: [
        { 
          key: 'Home',
          value: '#'
        },
        { 
          key: 'About',
          value: '#/about'
        },
        { 
          key: 'Projects',
          value: '#Projects'
        },
        { 
          key: 'GitHub',
          value: 'https://github.com/ckifer'
        },
        { 
          key: 'Stack Overflow',
          value: 'https://stackoverflow.com/users/8050147/ckifer'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
