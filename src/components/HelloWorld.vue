<template>
  <div class="hello">
    <ul id="chat-list" v-for="{key, msg} in messages" :key="key">
      <li>
        {{ msg }}
      </li>
    </ul>
      <input type="text" name="chat" value="" v-model="chat">
      <button type="button" name="button" v-on:click="send">submit</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      chat: "",
      messages:[]
    }
  },
  methods:{
    send: function(){
      this.messages.push({msg: this.chat})
      this.chat = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
