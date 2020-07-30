<template>
    <div id='app' :status_code="status_code" :status_des="status_des">
        <div class="respons_code">
            <span :class="'point '+ 'codestart_' + status_code[0]"></span>
            <span class="des">{{status_code}}: {{status_des}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"d-rep-status",
        props:['status_code','status_des']
    }
</script>

<style scoped>
    #app{
        display: inline-block;
    }
    .respons_code{
        height: 20px;
    }

    .point{
        width: 10px;
        height: 10px;
        display: block;
        font-size: 16px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        margin-right: 6px;
        background-color: rgb(255, 157, 61);
        border-radius: 50%;
        float: left;
        margin-top:7px;
    }

    .codestart_1{
        background-color:rgb(255, 157, 61);
    }

    .codestart_2{
        background-color:rgb(38, 203, 124);
    }

    .codestart_3{
        background-color:rgb(255, 157, 61);
    }

    .codestart_4{
        background-color:rgb(255, 70, 66);
    }

    .codestart_5{
        background-color:rgb(255, 70, 66);
    }

    .des{
        font-size: 16px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 400;
        line-height: 20px;
    }
</style>