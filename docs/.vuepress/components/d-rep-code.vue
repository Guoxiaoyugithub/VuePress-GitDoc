<template>
    <div id="app">
        <div ref="code">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"d-rep-code",
    props:['show_linenum'],
    methods:{

    },
    mounted (){
        //如何设置了去掉行号则通过修改class去掉行号，默认是有行号
        if(!this.$refs.code.childNodes[0]){
            return
        }
        if(!this.islinenum){
            this.$refs.code.childNodes[0].className = this.$refs.code.childNodes[0].className.replace(/line-numbers-mode/,"")
        }
    }
}
</script>

<style scoped>

</style>