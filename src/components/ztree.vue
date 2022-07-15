<template>
  <div class="ztree vue-giant-tree" :id="ztreeId"></div>
</template>

<script>
import * as jquery from "jquery";
let $ = jquery;
if (window.jQuery) {
  $ = window.jQuery;
} else {
  window.jQuery = $;
}

require("@ztree/ztree_v3/js/jquery.ztree.all");

export default {
  props: {
    setting: {
      type: Object,
      require: false,
      default: function () {
        return {};
      },
    },
    nodes: {
      type: Array,
      require: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      ztreeId: "ztree_" + parseInt(Math.random() * 1e10),
      ztreeObj: null,
      list: [],
      ztreeSetting: {
        view: {
          showIcon: false, // default to hide icon
        },
        callback: {
          onAsyncError: (...arg) => {
            this.$emit("onAsyncError", ...arg);
          },
          onAsyncSuccess: (...arg) => {
            this.$emit("onAsyncSuccess", ...arg);
          },
          onCheck: (...arg) => {
            this.$emit("onCheck", ...arg);
          },
          onClick: (...arg) => {
            this.$emit("onClick", ...arg);
          },
          onCollapse: (...arg) => {
            this.$emit("onCollapse", ...arg);
          },
          onDblClick: (...arg) => {
            this.$emit("onDblClick", ...arg);
          },
          onDrag: (...arg) => {
            this.$emit("onDrag", ...arg);
          },
          onDragMove: (...arg) => {
            this.$emit("onDragMove", ...arg);
          },
          onDrop: (...arg) => {
            this.$emit("onDrop", ...arg);
          },
          onExpand: (...arg) => {
            this.$emit("onExpand", ...arg);
          },
          onMouseDown: (...arg) => {
            this.$emit("onMouseDown", ...arg);
          },
          onMouseUp: (...arg) => {
            this.$emit("onMouseUp", ...arg);
          },
          onRemove: (...arg) => {
            this.$emit("onRemove", ...arg);
          },
          onRename: (...arg) => {
            this.$emit("onRename", ...arg);
          },
          onRightClick: (...arg) => {
            this.$emit("onRightClick", ...arg);
          },
        },
      },
    };
  },
  watch: {
    nodes: {
      handler: function (nodes) {
        this.list = nodes;

        // update tree
        if (this.ztreeObj) {
          this.ztreeObj.destroy();
        }
        this.$nextTick(() => {
          this.ztreeObj = $.fn.zTree.init(
            $("#" + this.ztreeId),
            Object.assign({}, this.ztreeSetting, this.setting),
            this.list
          );
          this.$emit("onCreated", this.ztreeObj);
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
/* beauty ztree! */
.ztree {
  text-align: left;
  font-size: 14px;
}
.vue-giant-tree li {
  list-style-type: none;
  white-space: nowrap;
  outline: none;
}
.vue-giant-tree li ul {
  position: relative;
  padding: 0 0 0 20px;
  margin: 0;
}
.vue-giant-tree .line:before {
  position: absolute;
  top: 0;
  left: 10px;
  height: 100%;
  content: "";
  border-right: 1px dotted #dbdbdb;
}
.vue-giant-tree .roots_docu:before,
.vue-giant-tree .roots_docu:after,
.vue-giant-tree .center_docu:before,
.vue-giant-tree .bottom_docu:before,
.vue-giant-tree .center_docu:after,
.vue-giant-tree .bottom_docu:after {
  position: absolute;
  content: "";
  border: 0 dotted #dbdbdb;
}
.vue-giant-tree .roots_docu:before {
  left: 10px;
  height: 50%;
  top: 50%;
  border-left-width: 1px;
}
.vue-giant-tree .roots_docu:after {
  top: 50%;
  left: 11px;
  width: 50%;
  border-top-width: 1px;
}
.vue-giant-tree .center_docu:before {
  left: 10px;
  height: 100%;
  border-left-width: 1px;
}
.vue-giant-tree .center_docu:after {
  top: 50%;
  left: 11px;
  width: 50%;
  border-top-width: 1px;
}
.vue-giant-tree .bottom_docu:before {
  left: 10px;
  height: 50%;
  border-left-width: 1px;
}
.vue-giant-tree .bottom_docu:after {
  top: 50%;
  left: 11px;
  width: 50%;
  border-top-width: 1px;
}
.vue-giant-tree li a {
  display: inline-block;
  line-height: 22px;
  height: 22px;
  margin: 0;
  cursor: pointer;
  transition: none;
  vertical-align: middle;
  color: #555555;
}
.vue-giant-tree .node_name {
  display: inline-block;
  padding: 0 3px;
  border-radius: 4px;
}
.vue-giant-tree .curSelectedNode .node_name {
  color: #000;
  background-color: #c9e9f7;
}
.vue-giant-tree .curSelectedNode_Edit {
  height: 20px;
  opacity: 0.8;
  color: #000;
  border: 1px #6cc2e8 solid;
  background-color: #9dd6f0;
}
.vue-giant-tree .tmpTargetNode_inner {
  opacity: 0.8;
  color: #fff;
  background-color: #4fcbf0;
  filter: alpha(opacity=80);
}
.vue-giant-tree .rename {
  font-size: 12px;
  line-height: 22px;
  width: 80px;
  height: 22px;
  margin: 0;
  padding: 0;
  vertical-align: top;
  border: 0;
  background: none;
}
.vue-giant-tree .button {
  position: relative;
  display: inline-block;
  line-height: 22px;
  height: 22px;
  width: 22px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
}

.vue-giant-tree .button.edit {
  color: #25ae88;
}
.vue-giant-tree .button.remove {
  color: #cb4042;
}
.vue-giant-tree .button.chk {
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0 4px 0 0;
  border: 1px solid #d7dde4;
  border-radius: 2px;
  background: #fff;
}
.vue-giant-tree .chk.radio_true_full,
.vue-giant-tree .chk.radio_false_full,
.vue-giant-tree .chk.radio_true_full_focus,
.vue-giant-tree .chk.radio_false_full_focus,
.vue-giant-tree .chk.radio_false_disable,
.vue-giant-tree .chk.radio_true_disable,
.vue-giant-tree .chk.radio_true_part,
.vue-giant-tree .chk.radio_false_part,
.vue-giant-tree .chk.radio_true_part_focus,
.vue-giant-tree .chk.radio_false_part_focus {
  border-radius: 8px;
}
.vue-giant-tree .button.chk:after {
  position: absolute;
  top: 1px;
  left: 4px;
  width: 4px;
  height: 8px;
  content: "";
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  -webkit-transform: rotate(0deg) scale(0);
  transform: rotate(0deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
.vue-giant-tree .button.checkbox_false_full_focus {
  border-color: #ccc;
}
.vue-giant-tree .button.checkbox_true_full,
.vue-giant-tree .button.checkbox_true_full_focus,
.vue-giant-tree .button.checkbox_true_part,
.vue-giant-tree .button.checkbox_true_part_focus,
.vue-giant-tree .button.checkbox_true_disable {
  border-color: #39f;
  background-color: #39f;
}
.vue-giant-tree .button.checkbox_true_full:after,
.vue-giant-tree .button.checkbox_true_full_focus:after,
.vue-giant-tree .button.checkbox_true_disable:after {
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}
.vue-giant-tree .button.checkbox_true_part:after,
.vue-giant-tree .button.checkbox_true_part_focus:after {
  top: 5px;
  left: 2px;
  width: 10px;
  height: 1px;
  -webkit-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  border-right: 0;
}
.vue-giant-tree .button.radio_true_full,
.vue-giant-tree .chk.radio_true_full_focus,
.vue-giant-tree .chk.radio_true_part,
.vue-giant-tree .chk.radio_true_part_focus {
  border-color: #39f;
}
.vue-giant-tree .button.radio_true_full:after,
.vue-giant-tree .chk.radio_true_full_focus:after,
.vue-giant-tree .chk.radio_true_part:after,
.vue-giant-tree .chk.radio_true_part_focus:after {
  top: 3px;
  left: 3px;
  width: 8px;
  -webkit-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);
  border: 0;
  border-radius: 4px;
  background: #39f;
}
.vue-giant-tree .button.checkbox_true_disable,
.vue-giant-tree .button.checkbox_false_disable,
.vue-giant-tree .chk.radio_false_disable,
.vue-giant-tree .chk.radio_true_disable {
  cursor: not-allowed;
}
.vue-giant-tree .button.checkbox_false_disable {
  background-color: #f3f3f3;
}
.vue-giant-tree .button.noline_close:before,
.vue-giant-tree .button.noline_open:before,
.vue-giant-tree .button.root_open:before,
.vue-giant-tree .button.root_close:before,
.vue-giant-tree .button.roots_open:before,
.vue-giant-tree .button.roots_close:before,
.vue-giant-tree .button.bottom_open:before,
.vue-giant-tree .button.bottom_close:before,
.vue-giant-tree .button.center_open:before,
.vue-giant-tree .button.center_close:before {
  position: absolute;
  top: 5px;
  left: 5px;
  content: "";
  transition: -webkit-transform ease 0.3s;
  transition: transform ease 0.3s;
  transition: transform ease 0.3s, -webkit-transform ease 0.3s;
  -webkit-transform: rotateZ(0deg);
  transform: rotateZ(0deg);
  -webkit-transform-origin: 25% 50%;
  transform-origin: 25% 50%;
  border: 6px solid;
  border-color: transparent transparent transparent #666;
}
.vue-giant-tree .button.noline_open:before,
.vue-giant-tree .button.root_open:before,
.vue-giant-tree .button.roots_open:before,
.vue-giant-tree .button.bottom_open:before,
.vue-giant-tree .button.center_open:before {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.vue-giant-tree .button.ico_loading {
  margin-right: 2px;
  background: url("data:image/gif;base64,R0lGODlhEAAQAKIGAMLY8YSx5HOm4Mjc88/g9Ofw+v///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAGACwAAAAAEAAQAAADMGi6RbUwGjKIXCAA016PgRBElAVlG/RdLOO0X9nK61W39qvqiwz5Ls/rRqrggsdkAgAh+QQFCgAGACwCAAAABwAFAAADD2hqELAmiFBIYY4MAutdCQAh+QQFCgAGACwGAAAABwAFAAADD1hU1kaDOKMYCGAGEeYFCQAh+QQFCgAGACwKAAIABQAHAAADEFhUZjSkKdZqBQG0IELDQAIAIfkEBQoABgAsCgAGAAUABwAAAxBoVlRKgyjmlAIBqCDCzUoCACH5BAUKAAYALAYACgAHAAUAAAMPaGpFtYYMAgJgLogA610JACH5BAUKAAYALAIACgAHAAUAAAMPCAHWFiI4o1ghZZJB5i0JACH5BAUKAAYALAAABgAFAAcAAAMQCAFmIaEp1motpDQySMNFAgA7")
    0 center no-repeat;
}
.vue-giant-tree .tmpTargetzTree {
  opacity: 0.8;
  background-color: #2ea9df;
  filter: alpha(opacity=80);
}
.vue-giant-tree .tmpzTreeMove_arrow {
  position: absolute;
  width: 18px;
  height: 18px;
  color: #4fcbf0;
}
</style>
<style>
ul.ztree.zTreeDragUL {
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
  background-color: #dedede;
  border: 1px #4fcbf0 dotted;
  border-radius: 4px;
  opacity: 0.7;
}

.zTreeMask {
  position: absolute;
  z-index: 10000;
  opacity: 0;
  background-color: #cfcfcf;
}
</style>
