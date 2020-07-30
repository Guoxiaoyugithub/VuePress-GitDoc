<template>
    <div id="app">
        <div class="parameter-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'d-rep'
}
</script>

<style scoped>
    #app{
        margin-top: 16px;
    }

    .parameter-content{
        width: 100%;
        border-radius: 3px;
        border: 1px solid #E6ECF1;
        background: #FFFFFF;
    }

    .parameter-content div{
        margin: 24px;
        margin-bottom: 20px;
    }
    .parameter-content div:last-child{
        margin-bottom: 30px;
    }
</style>