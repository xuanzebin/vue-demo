let view=new Vue({
    el:'#app',
    data:{
        open:true
    },
    template:`
    <div className="wrapper">
    <button v-on:click="switchFloat">点我</button>
    <span v-if="open">我是浮层</span>
    </div>
    `,
    methods:{
        switchFloat(){
            this.open=!this.open
        }
    }
})