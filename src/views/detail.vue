<template>
    <div class="detail">
        <div class="head"></div>
        <div class="codeContent">
            {{detailData.content}}
        </div>
        <div class="comment">
            <h4>留言板</h4> 
            <textarea class="text" v-model="inputContent"></textarea>
            <input type="email" class="email" v-model="emailContent" placeholder="Email">
            <div class="clearfix btnWrap">
                <button type="button" class="btn btn-primary pull-right" @click="submit">提交</button>
            </div>
            <div class="commentList">
                <ul>
                    <li v-for="(item, index) in detailData.commentsData" :key="index">
                        <div class="commentItemHead clearfix">
                            <h5 class="pull-left">{{item.name}}</h5>
                            <span class="pull-right">{{item.time}}</span>
                        </div>
                        <p>{{item.content}}</p>
                        <p>{{item.email}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:["detailData"],
    data(){
        return{
           inputContent:'',
           emailContent:''
        }
    },
    methods:{
        submit(){
            let obj = {
                name: "游客"+ new Date().getTime().toString().substring(0,5),
                content:this.inputContent,
                time: this.changeTime(new Date()),
                email: this.emailContent
            }
            this.inputContent = '';
            this.emailContent = '';
            this.$emit('getDetailData',obj);
        },
        changeTime(d){
            let date =  d.getFullYear() + "年" + 
                        (d.getMonth() + 1) + "月" +
                        d.getDate() + "日" 
            return date
        }
    }
}
</script>
<style lang="less" scope>
    .detail{
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #f3f3f3;
    }
    .codeContent{
        width: 100%;
        padding: 2% 15%;
        box-sizing: border-box;

    }
    .comment{
        width:100%;
        padding: 0 15%;
        box-sizing: border-box;
        text-align: left;
        .text,.email{
            width: 60%;
            height: 10rem;
            background: #fff;
            border-radius: 5px;
            outline:none;
            resize: none;
            padding: 3px 5px; 
            color: #333;
        }
        .email{
            height: 3rem;
            margin-bottom: 5px;
        }
        .text:focus{
           outline: none;
        }
        .btnWrap{
            width: 60%;
        }
        .commentList{
            ul{
                padding: 0;
                margin: 0;
                .commentItemHead{
                    width:100%;
                    line-height: 40px;
                }
            }
        }
    }
    @media screen and(max-width:1440px){
        .text,.email{
            width: 100%!important;
        }
         .btnWrap{
            width: 100%!important;
        }
    }
</style>