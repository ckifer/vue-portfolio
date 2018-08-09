<template>
    <div>
        <v-footer :fixed="fixed" app>
        <span>&copy; @{{ new Date().getFullYear() }}</span>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style scoped>

</style>