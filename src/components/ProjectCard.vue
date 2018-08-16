<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout align-center justify-center row fill-height>
                <v-flex xs8>
                    <v-carousel interval="8000">
                        <v-carousel-item
                            v-for="(project, i) in projects"
                            :key="i"
                        >
                            <v-layout align-center justify-center row fill-height>
                            <v-flex xs9>
                                <v-card dark>
                                    <v-card-media
                                        class="warning--text"
                                        height="200px"
                                        :src="require(`@/assets/${project.image}`)"
                                    >
                                    </v-card-media>
                                    <v-card-title primary-title class="pb-0">
                                        <div>
                                            <h3 class="headline">{{ project.value }}</h3>
                                        </div>
                                    </v-card-title>
                                    <v-card-text class="pb-1">
                                        <div class="">{{ project.desc }}</div>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn flat color="warning" :href="project.link" target="blank">Check it out</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-flex>
                            </v-layout>
                        </v-carousel-item>
                    </v-carousel>
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
                        image: 'ShuttleTracker.png'
                    },
                    { 
                        key: 'mySHU',
                        value: 'MySHU - PHP Symfony',
                        link: 'https://my.setonhill.edu/tms/public/pay',
                        desc: 'Work done on the Seton Hill University intranet site during a summer internship and school year work-study position.',
                        image: 'TMSMYSHU.jpg'
                    },
                    { 
                        key: 'stackADT',
                        value: 'Stack Implementation - C++',
                        link: 'https://github.com/ckifer/DataStructures---Stack-ADT',
                        desc: 'Implemention of a first-in last-out stack done for Data Structures course.',
                        image: 'stackADT.png'
                    },
                    { 
                        key: 'bitsyCompiler',
                        value: 'Bitsy Compiler - Swift',
                        link: 'https://github.com/ckifer/myBitsyCompiler',
                        desc: 'Personal project to learn how compilers work.',
                        image: 'bitsy.png'
                    },
                    { 
                        key: 'tbc',
                        value: 'More Projects to come...',
                        link: 'https://github.com/ckifer',
                        desc: 'I am always working on new personal projects! Currently in progress is an iOS app for a friend.',
                        image: 'code.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>