<template>
    <div id="app">
        <div class="list-content">

        </div>
        <li class="list-text">
            <slot></slot> 
        </li>
         
    </div>
</template>

<script>
export default {
    name:"d-log-item-li"
}
</script>

<style scoped>
    .list-content{
        font-size: 16px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.625;
    }
    .list-text{
        margin-left: 13px;
    }
</style>