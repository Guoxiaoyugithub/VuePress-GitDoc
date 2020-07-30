<template>
    <div id="app">
        <div class="list-item">
            <div class="item-name">
                <span class="name">{{name}}</span>
                <span class="option">{{necess}}</span>
            </div>
            <div class="item-type">
                <span>{{type}}</span>
            </div>
            <div class="item-desc">{{desc}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['name','necess','type','desc']
    }
</script>

<style scoped>
    .list-item{
        display: flex;
    }

    .item-name{
        width: 150px;
        padding: 8px;
        margin-bottom: 0;
        
    }

    .item-name .name{
        margin: 0;
        display: block;
        padding: 0;
        border-bottom: 2px solid transparent;
        font-size: 17px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.625;
    }

    .item-name .option{
        color: #74818D;
        margin: 0;
        display: block;
        padding: 0;
        font-size: 10px;
        line-height: 1.2;
        text-transform: uppercase;
    }

    .item-type{
        width: 130px;
        padding: 8px;
        margin-bottom: 0;
        margin: 0;
        text-align: left;
    }

    .item-type span{
        padding: 2px 6px;
        font-size: 85%;
        font-family: "Source Code Pro", Menlo, monospace;
        line-height: 3;
        white-space: nowrap;
        border-radius: 3px;
        background-color: #F5F7F9;

    }

    .item-desc{
        flex: 1;
        padding: 8px;
        font-size: 16px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        line-height: 3;
        color: #74818D;
    }
</style>