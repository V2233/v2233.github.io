# 自定义代码插件

如果你写过云崽v3版本的example目录的js，那么你不会对此感到陌生，相比其它具体消息段的简便添加方式，此功能提供了强大且灵活的方式，你可以在代码编辑器内编写插件的执行逻辑，面板提供了yunzai的常用接口，比如事件变量e，消息段制作函数segment，截图渲染函数pupeteer，插件加载函数loader，日志打印函数logger等，你可以直接在编辑器使用而无需引入。如果你需要使用模块，那么你可以用动态导入方式引入依赖。

以下是个简单的例子：

![develop](/docs/images/develop/18.png)

保存后测试效果如下：

![develop](/docs/images/develop/19.png)
