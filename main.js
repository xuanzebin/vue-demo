let view=new Vue({
    el:'#app',
    data:{
        tabs:[
            {name:"a",content:"aaa"},
            {name:"b",content:"bbb"},
            {name:"c",content:"ccc"}
        ],
        selected:"a"
    },
    template:`
    <div class="wrapper">
        <ol>
        <li v-for="tab in tabs" 
        v-on:click="selected=tab.name"
        v-bind:class="{active:selected===tab.name}">{{tab.name}}</li>
        </ol>
        <ol>
        <li v-for="tab in tabs" v-show="selected===tab.name">{{tab.content}}</li>
        </ol>
    </div>
    `,
    methods:{
    }
})