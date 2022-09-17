<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    defineProps({
        title: ''
    })
</script>

<template>
    <RouterView />
</template>

<style lang="scss">
    @import './assets/all';
</style>
