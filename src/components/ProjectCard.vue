<template>
    <div>
        <v-container fluid grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex v-for="i in 3" :key="`4${i}`" xs4>
                    <v-card dark>
                    <v-card-text class="px-0">4</v-card-text>
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

            }
        }
    }
</script>

<style scoped>

</style>