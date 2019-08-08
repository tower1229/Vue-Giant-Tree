<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Vue-Giant-Tree</h1>

    <div class="wrap">
      <div class="c">
        <tree 
          :setting="setting" 
          :nodes="nodes" 
          @onClick="onClick" 
          @onCheck="onCheck" 
          @onCreated="handleCreated" />
      </div>
    </div>

    <div class="toolbar">
      <button class="btn" type="button" @click="update">更新数据</button>
    </div>
  </div>
</template>

<script>
const bigData = require("@/mock/big-tree.json");
const simpleData = [
  { id:1, pid:0, name:"随意勾选 1", open:true},
  { id:11, pid:1, name:"随意勾选 1-1", open:true},
  { id:111, pid:11, name:"随意勾选 1-1-1"},
  { id:112, pid:11, name:"随意勾选 1-1-2"},
  { id:12, pid:1, name:"随意勾选 1-2", open:true},
  { id:121, pid:12, name:"随意勾选 1-2-1"},
  { id:122, pid:12, name:"随意勾选 1-2-2"},
  { id:2, pid:0, name:"随意勾选 2", checked:true, open:true},
  { id:21, pid:2, name:"随意勾选 2-1"},
  { id:22, pid:2, name:"随意勾选 2-2", open:true},
  { id:221, pid:22, name:"随意勾选 2-2-1", checked:true},
  { id:222, pid:22, name:"随意勾选 2-2-2"},
  { id:23, pid:2, name:"随意勾选 2-3"}
];
const dataQueue = [bigData.data, simpleData]

export default {
  name: "app",
  components: {
    tree: resolve => require(["./components/ztree.vue"], resolve)
  },
  data() {
    return {
      showIndex: 0,
      setting: {
        check: {
          enable: true
        },
        data: {
          simpleData: {
            enable: true,
            pIdKey: "pid"
          }
        }
      }
    };
  },
  computed: {
    nodes: function(){
      return dataQueue[this.showIndex]
    }
  },
  methods: {
    onClick: function(evt, treeId, treeNode) {
      // 点击事件
      console.log(evt.type, treeNode);
    },
    onCheck: function(evt, treeId, treeNode) {
      // 选中事件
      console.log(evt.type, treeNode);
    },
    handleCreated: function(ztreeObj){
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], true)
    },
    update: function(){
      // 更新示例数据
      this.showIndex = this.showIndex === 0 ? 1 : 0;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrap {
  text-align: center;
}
.c {
  display: inline-block;
  width: 600px;
  height: 400px;
  overflow: auto;
  margin: 0 10px;
}
.toolbar{
  margin: 20px auto;
}
.toolbar .btn{
  padding: .5em 1em;
  outline: none;
  border-radius: 4px;
}

</style>
