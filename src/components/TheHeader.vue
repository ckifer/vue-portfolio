<template>
    <div>
        <v-toolbar
            dark
            app
            :clipped-left="clipped"
        >
            <v-spacer></v-spacer>
            <a href="/" style="text-decoration: none; color: #fff">
                <v-toolbar-title v-text="title"></v-toolbar-title>
            </a>
            <v-spacer></v-spacer>
        </v-toolbar>

    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            clipped: Boolean
        }
    }
</script>

<style scoped>

</style>