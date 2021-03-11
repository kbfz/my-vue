<template>
    <div class="container">
        {{title}}
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            title: 'home'
        }
    },
    created() {
        console.log(this.title)
    }
}
</script>