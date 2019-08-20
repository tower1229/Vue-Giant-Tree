# vue-giant-tree

[![npm](https://img.shields.io/npm/v/vue-giant-tree.svg)](https://www.npmjs.com/package/vue-giant-tree/)  [![license](https://img.shields.io/github/license/tower1229/vue-giant-tree.svg)]()

> :deciduous_tree: 巨树：基于[ztree](https://github.com/zTree/zTree_v3)封装的Vue树形组件，轻松实现海量数据的高性能渲染。

![logo](https://refined-x.com/asset/vgt-preview.png)

## 为什么需要vue-giant-tree

Vue的数据监听机制决定了在大数据量场景下的渲染性能非常低下，基于Vue实现的常规树组件几乎无法胜任上万条数据的高性能渲染，在IE浏览器（即便是IE11）中很容易导致页面卡死甚至浏览器崩溃。

> 不服气可以试试这份数据 [big-tree.json](http://refined-x.com/Vue-Giant-Tree/mock/big-tree.json)

为了摆脱数据监听，只能放弃通过Vue渲染，采用常规DOM操作的方式。在这个领域[ztree](https://github.com/zTree/zTree_v3)是当之无愧最成熟的方案，因此vue-giant-tree直接基于ztree做上层封装，以组件的形式将ztree的配置和事件暴露出来，使其可以方便的在Vue项目中安装使用。

vue-giant-tree仅仅是给ztree套了一层Vue组件的壳，顺便提供了一套更现代化的皮肤，因为主打大数据量场景，所以取名**巨树**。

ztree在性能优化方面已经做到了近乎极致，感谢ztree作者的工作，向您致敬！

## 安装

```
npm i vue-giant-tree --save
```

## 使用

in script:

```
import tree from "vue-giant-tree";

export default {
	components: {
          tree
	},
	data() {
		return {
			nodes: [
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
                ]
		}
	}
	...
```

in template: 

```
<tree :nodes="nodes" />
```

## 属性

|  参数  | 说明  | 类型  |  默认值  |
|  ----  | ----  | ---  | ---  |
| setting  | ztree 配置 | Object |  `{view: {showIcon: false}}`  |
| nodes  | ztree 数据 | Array |  `[]`  |

## 事件

完全移植[zTree API](http://www.treejs.cn/v3/api.php)中`callback`支持的事件，除了：

- 不支持所有 `before` 开头的事件。这类事件的主要作用是根据返回值决定是否阻止后续的`on`事件，这种判断可以在`on`事件中实现；当然，你也可以通过`setting.callback.beforeXXX`自行配置
- 不支持 `onNodeCreated` 事件。因为在大数据量下很耗性能，如果需要可以通过 `setting.callback.onNodeCreated` 自行传入
- 增加 `onCreated` 事件。每此实例初始化完成时触发，回调参数接收ztree实例，通过ztree实例可以使用所有实例方法

|  参数  | 说明  | 
|  ----  | ----  |
| onAsyncError  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onAsyncSuccess  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onCheck  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onClick  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onCollapse  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onDblClick  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onDrag  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onDragMove  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onDrop  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onExpand  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onMouseDown  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onMouseUp  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onRemove  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onRename  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onRightClick  | 参考 [zTree API](http://www.treejs.cn/v3/api.php) | 
| onCreated  | 初始化渲染完成后触发，回调参数接收ztree实例 | 

## 扩展

zTree没有提供给整个实例更新数据的方法，vue-giant-tree基于Vue的组件通信机制扩展实现了响应式数据，只要`nodes`属性的值发生变化，ztree实例就会随之更新。

[项目DEMO](https://github.com/tower1229/Vue-Giant-Tree/blob/master/src/App.vue)里演示了vue-giant-tree的响应式数据特性。

## 演示

- 线上演示：

> http://refined-x.com/Vue-Giant-Tree/

- 本地演示：

```
npm i 
npm run serve 
```

## License

MIT

Copyright (c) 2019-present, [前端路上](http://refined-x.com)
