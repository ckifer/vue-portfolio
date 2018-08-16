<template>
    <div>
        <main-profile subHeader="Computer Science Student" header="Coltin Kifer"/>
         <v-container fluid grid-list-md text-xs-center>
             <h2 class="headline">Projects</h2>
         </v-container>
        <project-card></project-card>
    </div>
</template>

<script>
    import MainProfile from '../components/MainProfile'
    import ProjectCard from '../components/ProjectCard'

    export default {
        name: 'HomePage',
        components: {
            MainProfile,
            ProjectCard
        }
    }
</script>

<style scoped>

</style>