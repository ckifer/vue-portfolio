<template>
    <div>
        <v-footer
            height="auto"
            :fixed="fixed" 
            app
        >
            <v-layout
                justify-center
                row
                wrap
            >
                <span>
                    &copy; {{ new Date().getFullYear() }} Coltin Kifer - Created with Vue.js
                </span>
            </v-layout>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: 'TheFooter',
        props: {
            fixed: Boolean
        }
    }
</script>

<style scoped>

</style>