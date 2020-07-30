<template>
    <div id="app">
        <div class="item-content">
            <div class="item-title">{{type}}</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'d-log-item',
    props:['type']
}
</script>

<style scoped>
    .item-content{
        width: 100%;
    }

    .item-title{
        font-size: 20px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 700;
        line-height: 1.5;
        margin: 16px 0;
    }
</style>