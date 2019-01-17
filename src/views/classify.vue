<template>
    <ul id="menu" class="menu-click list-unstyled">
        <li v-for="(item, index) in allKinds" :key="index">
            <a data-scroll href="javascript:;" class="smooth-scroll" @click.prevent="kindsHandleClick(item,index)">{{item}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props:["allKinds"],
    data(){
        return{

        }
    },
    methods:{
        kindsHandleClick(item,index) {
            this.$router.push({path: '/articleList'})
        }
    }

}
</script>

<style lang="less" scope>
    #menu{
        overflow: auto;
    }
</style>
