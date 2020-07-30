<template>
    <div id='app' :title="title" :http_methods="http_methods" :url="url">
        <div class="title">
            <d-req-method :http_methods="http_methods" class="http_methods"></d-req-method>
            <span class="title_content">{{title}}</span>
        </div>
        <div class="url">
            {{url}}
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','http_methods','url']
    }
</script>

<style scoped>
    #app{
        width: 100%;
    }

    .title{
        height: 32px;
    }

    .http_methods {
        line-height: 32px;
        float: left;
    }

    .title_content{
        display: block;
        font-size: 20px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 700;
        float: left;
        line-height: 32px;
        margin-left: 8px;
    }

    .url{
        color: rgb(36, 42, 49);
        font-size: 14px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: bold;
        line-height: 1.625;
        background-color: rgb(245, 247, 249);
        padding: 8px 8px 8px 0px;
        border-radius: 0px 3px 3px 0px;
        margin-top: 15px;
        padding-left: 8px;
    }

</style>