<template>
    <div id="app">
        <div class="log-content">
            <div class="title">{{title}}</div>
            <div class="item">
                <slot></slot>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'d-log',
    props:['title']
}

</script>

<style scoped>
    .log-content{
        width: 100%;
        margin: 20px 0;
        border-top: 2px solid rgb(230, 236, 241);;
        border-bottom:2px solid rgb(230, 236, 241);
    }

    .title{
        font-size: 24px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 700;
        line-height: 1.5;
        margin: 20px 0;
    }

    .item div:last-child{
        margin-bottom: 20px;
    }
</style>