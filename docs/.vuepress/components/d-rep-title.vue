<template>
    <div id="app">
        <slot></slot>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    name:"d-rep-title",
    props:['title']
}
</script>

<style scoped>
    .title{
        color: rgb(116, 129, 141);
        margin-top:5px;
        margin-left: 2px;
        margin-bottom: -5px;
    }
</style>