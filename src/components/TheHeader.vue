<template>
    <div>
        <v-toolbar
            dark
            app
            :clipped-left="clipped"
        >
            <v-btn v-if="backBtn" icon>
                <router-link id="backBtn" to="/">
                    <v-icon>arrow_back</v-icon>
                </router-link>
            </v-btn>
            <v-spacer></v-spacer>
            <router-link to="/" id="link">
                <v-toolbar-title v-text="title" class="headline"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
           
        </v-toolbar>

    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            clipped: Boolean,
            backBtn: Boolean
        }
    }
</script>

<style scoped>
    #link{
        text-decoration: none;
        color: white;
    }

    #backBtn{
        text-decoration: none;
        color: white;
    }
</style>