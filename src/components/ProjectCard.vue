<template>
    <div>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex v-for="project in projects" :key="project.key" xs4>
                    <v-card dark>
                        <v-card-media
                            class="white--text"
                            height="200px"
                            :src="require(`${project.image}`)"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline">{{ project.value }}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {

        },
        data(){
            return {
                projects: [
                    { 
                        key: 'shuShuttleTracker',
                        value: 'Seton Hill Shuttle Tracker - Swift',
                        link: 'https://github.com/ckifer/Seton-Hill-Shuttle-Tracker',
                        desc: 'Changes and bug fixes made to the Seton Hill Shuttle Tracker right before its first release.',
                        image: ''
                    },
                    { 
                        key: 'mySHU',
                        value: 'MySHU - PHP Symfony',
                        link: 'https://my.setonhill.edu',
                        desc: 'Work done on the Seton Hill University intranet site during a summer internship and school year work-study position.',
                        image: '@/assets/TMSMYSHU.jpg'
                    },
                    { 
                        key: 'stackADT',
                        value: 'Stack Implementation - C++',
                        link: 'https://github.com/ckifer/DataStructures---Stack-ADT',
                        desc: 'Implemention of a first-in last-out stack done for Data Structures course.',
                        //image: require('')
                    },
                    { 
                        key: 'bitsyCompiler',
                        value: 'Bitsy Compiler - Swift',
                        link: 'https://github.com/ckifer/myBitsyCompiler',
                        desc: 'Personal project to learn how compilers work.',
                       // image: require('')
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>