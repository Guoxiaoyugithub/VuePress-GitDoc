<template>
    <div id='btn-method' :http_methods="http_methods" style="display:inline">
        <div :class="'method '+ http_methods">
            <span>{{http_methods}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['http_methods'],
        data(){
            return {
                
            }
        }
    }
</script>


<style scoped>
    .method{
        color: rgb(255, 255, 255);
        height: 19px;
        display: inline-flex;
        align-items: center;
        -webkit-box-align: center;
        margin: 0px;
        padding: 2px 0px;
        background: rgb(56, 132, 255);
        border-radius: 9999px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        
    }

    .method span{
        font-size: 12px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 0px 8px;
    }

    .POST{
        background-color: rgb(38, 203, 124);
    }

    .GET{
        background-color: rgb(56, 132, 255);
    }

    .PUT{
        background-color: rgb(247, 125, 5);
    }

    .DELETE{
        background-color: rgb(255, 70, 66)
    }

    .PATCH{
        background-color: rgb(3, 209, 235)
    }

    .HEAD{
        background-color: rgb(164, 78, 237)
    }

    .OPTIONS{
        background-color: rgb(255, 209, 57)
    }
</style>