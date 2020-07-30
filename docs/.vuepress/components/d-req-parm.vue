<template>
    <div id='app'>
        <div class="title">
            <span>{{title}}</span>
        </div>

        <div class="parameter-list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title']
    }
</script>

<style scoped>
    .title{
        width: 100%;
        height: 30px;
        /* background:blue; */
        color: #74818D;
        margin: 0;
        display: block;
        padding: 0;
        position: relative;
        font-size: 15px;
        margin-bottom: 4px;
    }

    .title span{
        font-size: 16px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.625;
    }
    
    .parameter-list{
        width: 100%;
        display: block;
        padding: 0;
    }

    .parameter-list div:nth-child(1){
        border-top: 1px solid #E6ECF1;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }

    .parameter-list div{
        border-left: 1px solid #E6ECF1;
        border-right: 1px solid #E6ECF1;
        
    }

    .parameter-list div:last-child{
        border-bottom: 1px solid #E6ECF1;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    
</style>