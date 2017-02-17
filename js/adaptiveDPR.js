/**
 * Created by gavin joe(http://at4321.com,http://github.com/gavinjzx) on 2017/2/17.my english is poor, but this is free.
 */
//创建一个自动执行函数(IIFE)
(function adaptiveDRP() {
    //1、取得设备像素率
    var devicePixelRate = window.devicePixelRatio;
    console.log("device pixel rate is:" + devicePixelRate);
    //2、设置文档ViewPort
    var metaViewport = {
        name: "viewport",
        width: "device-width",
        initialScale: 1 / devicePixelRate,
        maximumScale: 1 / devicePixelRate,
        userScalable: "no"
    };
    //如果设置支持设备像素率，则执行
    if (devicePixelRate) {
        setMeta(metaViewport);
        setRemFontSize();
    }
    //设置文档的meta信息
    function setMeta(option) {
        //查看文档是否有设置viewport
        var meta = document.getElementsByTagName('meta')['viewport'];
        if (meta) {//已设置viewport
            meta.name = option.name;
            meta.content = "width=" + option.width + ",initial-scale=" + option.initialScale + ",maximum-scale=" + option.initialScale + ",user-scalable=" + option.userScalable;

        } else {//未设置viewport
            var oMeta = document.createElement('meta');
            oMeta.name = option.name;
            oMeta.content = "width=" + option.width + ",initial-scale=" + option.initialScale + ",maximum-scale=" + option.initialScale + ",user-scalable=" + option.userScalable;
            document.getElementsByTagName('head')[0].appendChild(oMeta);
        }
        ;
    }

    //设置文档根字体
    function setRemFontSize() {
        var htmlObj = document.getElementsByTagName("html")[0];
        var originalFontSize = htmlObj.style.fontSize;
        console.log(originalFontSize + " is original font size.");
        var newFontSize = 10 * devicePixelRate + "px";
        if (originalFontSize) {
            originalFontSize = parseInt(originalFontSize.substring(0, originalFontSize.length - 2));
            console.log("original font size" + originalFontSize);
            newFontSize = originalFontSize * devicePixelRate + "px";
        }
        htmlObj.style.fontSize = newFontSize;
    }
})();
