let view=new Vue({
    el:'#app',
    data:{
        transformValue:``,
    },
    template:`
    <div class="wrapper">
        <div class="slideWindow">
            <div class="pictures" v-bind:style="{transform:transformValue}"></div>
        </div>
        <button v-on:click="go(0)">1</button>
        <button v-on:click="go(1)">2</button>
        <button v-on:click="go(2)">3</button>
    </div>
    `,
    methods:{
        go(index){
            this.transformValue=`translateX(${-200*index}px)`
        }
    }
})