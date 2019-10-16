<template>
  <div id="app" class="flex-col">
    <h1 class="T">
      Vue-Giant-Tree
      <a
        href="https://github.com/tower1229/Vue-Giant-Tree"
        target="_blank"
        titie="Vue-Giant-Tree"
      >
        <svg
          class="octicon octicon-mark-github v-align-middle"
          height="32"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
    </h1>

    <div class="wrap flex-1">
      <div class="c">
        <tree
          :setting="setting"
          :nodes="nodes"
          @onClick="onClick"
          @onCheck="onCheck"
          @onCreated="handleCreated"
        />
      </div>
    </div>

    <div class="toolbar">
      <button class="btn" type="button" @click="update">更新数据</button>
    </div>

    <footer class="foot">
      <p>
        © 2019 - 3019 Author
        <a href="https://refined-x.com/" target="_blank">前端路上</a>
      </p>
    </footer>
  </div>
</template>

<script>
const bigData = require("@/mock/big-tree.json");
const simpleData = [
  { id: 1, pid: 0, name: "随意勾选 1", open: true },
  { id: 11, pid: 1, name: "随意勾选 1-1", open: true },
  { id: 111, pid: 11, name: "随意勾选 1-1-1" },
  { id: 112, pid: 11, name: "随意勾选 1-1-2" },
  { id: 12, pid: 1, name: "随意勾选 1-2", open: true },
  { id: 121, pid: 12, name: "随意勾选 1-2-1" },
  { id: 122, pid: 12, name: "随意勾选 1-2-2" },
  { id: 2, pid: 0, name: "随意勾选 2", checked: true, open: true },
  { id: 21, pid: 2, name: "随意勾选 2-1" },
  { id: 22, pid: 2, name: "随意勾选 2-2", open: true },
  { id: 221, pid: 22, name: "随意勾选 2-2-1", checked: true },
  { id: 222, pid: 22, name: "随意勾选 2-2-2" },
  { id: 23, pid: 2, name: "随意勾选 2-3" }
];
const dataQueue = [bigData.data, simpleData];

export default {
  name: "app",
  components: {
    tree: resolve => require(["./components/ztree.vue"], resolve)
  },
  data() {
    return {
      showIndex: 0,
      ztreeObj: null,
      setting: {
        check: {
          enable: true
        },
        data: {
          simpleData: {
            enable: true,
            pIdKey: "pid"
          }
        },
        view: {
          showIcon: false,
          addHoverDom: this.addHoverDom,
          removeHoverDom: this.removeHoverDom,
        }
      }
    };
  },
  computed: {
    nodes: function() {
      return dataQueue[this.showIndex];
    }
  },
  methods: {
    addHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if(item && !item.querySelector('.tree_extra_btn')){
        const btn = document.createElement('sapn');
        btn.id = `${treeid}_${treeNode.id}_btn`;
        btn.classList.add('tree_extra_btn');
        btn.innerText = '删除';
        btn.addEventListener('click', (e) => {
          e.stopPropagation()
          this.clickRemove(treeNode)
        })
        item.appendChild(btn);
      }

    },
    removeHoverDom(treeid, treeNode) {
      const item = document.getElementById(`${treeNode.tId}_a`);
      if(item){
        const btn = item.querySelector('.tree_extra_btn');
        if(btn){
          item.removeChild(btn)
        }
      }
    },
    clickRemove(treeNode) {
      console.log('remove', treeNode)
      this.ztreeObj && this.ztreeObj.removeNode(treeNode)
    },
    onClick: function(evt, treeId, treeNode) {
      // 点击事件
      console.log(evt.type, treeNode);
    },
    onCheck: function(evt, treeId, treeNode) {
      // 选中事件
      console.log(evt.type, treeNode);
    },
    handleCreated: function(ztreeObj) {
      this.ztreeObj = ztreeObj;
      // onCreated 中操作ztreeObj对象展开第一个节点
      ztreeObj.expandNode(ztreeObj.getNodes()[0], true);
    },
    update: function() {
      // 更新示例数据
      this.showIndex = this.showIndex === 0 ? 1 : 0;
    }
  }
};
</script>

<style>
html,body{height: 100%;}
body {
  margin: 0;
}
/* 自定义按钮样式 */
.tree_extra_btn{
  display: inline-block;
  padding: 0 3px;
  color: red;
}

/* flex栅格 */
.flex-col {
  overflow: hidden;
  display: -ms-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
}

.flex-row {
  overflow: hidden;
  display: -ms-box;
  display: -ms-flexbox;
  display: flex;
}

.flex-1 {
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
}

.flex-2 {
  -ms-flex: 2;
  flex: 2;
  min-width: 0;
}

.flex-3 {
  -ms-flex: 3;
  flex: 3;
  min-width: 0;
}

.flex-4 {
  -ms-flex: 4;
  flex: 4;
  min-width: 0;
}

.align-stretch {
  -ms-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.align-center {
  -ms-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.justify-center {
  -ms-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrap{
  overflow: hidden;
}
.c {
  width: 600px;
  height: 100%;
  overflow: auto;
  margin: auto;
}
.T {
  font-size: 34px;
  margin: 0 0 30px;
  height: 170px;
  line-height: 260px;
  overflow: hidden;
  background:url(./assets/logo.png) center no-repeat;
}
.toolbar {
  margin: 20px auto;
}
.toolbar .btn {
  padding: 0.5em 1em;
  outline: none;
  border-radius: 4px;
}

.foot {
  margin-top: 30px;
  background: #333;
  padding: 24px;
  overflow: hidden;
  color: #999;
  font-size: 14px;
  text-align: center;
}

.foot a {
  color: #fff;
  margin: 0 0.5em;
}
</style>
