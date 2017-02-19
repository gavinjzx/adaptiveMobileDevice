#H5端使用viewport缩放设置解决图片发虚问题#
使用本插件演示网址：<a href="http://at4321.com/case/web/adaptiveMobileDevice">http://at4321.com/case/web/adaptiveMobileDevice</a><br>
未使用本插件演示网址：<a href="http://at4321.com/case/web/adaptiveMobileDevice/noAdaptive.html">http://at4321.com/case/web/adaptiveMobileDevice/noAdaptive.html</a><br>
请使用手机打开查看效果
##解决问题##
1.图片发虚问题解决<br>
2.1px问题解决
##兼容性问题##
兼容移动端浏览器，（暂时发现所有移动端都支持devicePixelRatio，如果亲们发现有问题，请告诉我，谢谢。）
##注意事项##
1.使用REM为大小的单位。<br>
2.HTML根字体大小默认为10，如果更改，请修改HTML代码里(这里以20px为例)&lt;html&gt;为&lt;html style="font-size:20px"&gt;<br>
3.图片不用设置大小，如担心图片撑出滚动条，CSS里设置图片的max-width:100%<br>
4.使用方法：页面中直接嵌入以下代码&lt;script src="js/adaptiveDPR.min.js"&gt;&lt;/script&gt;