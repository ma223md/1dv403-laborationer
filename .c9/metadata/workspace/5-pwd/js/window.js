{"changed":true,"filter":false,"title":"window.js","tooltip":"/5-pwd/js/window.js","value":"\"use strict\";\n\nfunction Window(desktop, icon, name){\n    // check name\n    this.checkName(name);\n\n    \n    // get window elements\n    var temp = document.querySelector(\".template\"),\n    windowTemp = temp.content.querySelector(\".window\"),\n    win = windowTemp.cloneNode(true);\n    \n    // assign elements for windowtop\n    var windowTop = win.querySelector(\".windowTop\"),\n    closeButton = win.querySelector(\"#closeIMG\"),\n    windowName = win.querySelector(\".name\"),\n    content = win.querySelector(\".windowContent\");\n    \n    // define variables\n    this.desktop = desktop;\n    this.win = win;\n    \n    //append name\n    windowName.innerHTML = name;\n    \n    //append new window\n    desktop.element.appendChild(win);\n    \n    // loading image\n    this.loadingIcon = document.createElement('img');\n    this.loadingIcon.setAttribute('src', 'pics/loading_icon.GIF');\n    this.loadingIcon.setAttribute('class', 'loadingIcon');\n    content.appendChild(this.loadingIcon);\n    \n    // close window when button is clicked\n    closeButton.onclick = function(e){\n        desktop.element.removeChild(win);\n    };\n    \n    \n    // make dragable and movable\n    var offset = { x: 0, y: 0 };\n    windowTop.addEventListener('mousedown', mouseDown, false);\n    window.addEventListener('mouseup', mouseUp, false);\n    \n    function mouseUp() {\n        win.removeEventListener('mousemove', popupMove, true);\n    }\n    \n    function mouseDown(e) {\n        offset.x = e.clientX - win.offsetLeft;\n        offset.y = e.clientY - win.offsetTop;\n        win.addEventListener('mousemove', popupMove, true)\n    }\n    \n    function popupMove(e) {\n        win.style.position = 'absolute';\n        var top = e.clientY - offset.y;\n        var left = e.clientX - offset.x;\n        win.style.top = top + 'px';\n        win.style.top = left + 'px';\n    }\n}\n\nWindow.prototype.checkName = function(name) {\n    if (name === \"Image Viewer\"){\n        new ImageViewer();\n    }\n}\n","undoManager":{"mark":77,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":12},"end":{"row":32,"column":17},"action":"remove","lines":["appen"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":23},"action":"insert","lines":["appendChild"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":23},"end":{"row":32,"column":25},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":24},"end":{"row":32,"column":27},"action":"remove","lines":["loa"]},{"start":{"row":32,"column":24},"end":{"row":32,"column":35},"action":"insert","lines":["loadingIcon"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":37},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":37},"end":{"row":16,"column":38},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":38},"end":{"row":16,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":39},"end":{"row":16,"column":40},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":40},"end":{"row":16,"column":41},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":54},"end":{"row":32,"column":0},"action":"insert","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":4},"end":{"row":32,"column":8},"action":"remove","lines":["load"]},{"start":{"row":32,"column":4},"end":{"row":32,"column":15},"action":"insert","lines":["loadingIcon"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":28},"end":{"row":32,"column":30},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":29},"end":{"row":32,"column":31},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":39},"end":{"row":32,"column":41},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":40},"end":{"row":32,"column":41},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":41},"end":{"row":32,"column":42},"action":"insert","lines":["5"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":42},"end":{"row":32,"column":43},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":43},"end":{"row":32,"column":44},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":46},"end":{"row":32,"column":47},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":32,"column":47},"action":"remove","lines":["    loadingIcon.setAttribute('height', '15px');"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":54},"end":{"row":32,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":4},"end":{"row":29,"column":8},"action":"remove","lines":["var "]},{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":28},"end":{"row":32,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":31,"column":51},"end":{"row":31,"column":52},"action":"insert","lines":["I"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":25},"end":{"row":66,"column":26},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":30},"end":{"row":66,"column":31},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":31},"end":{"row":66,"column":32},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":32},"end":{"row":66,"column":33},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":33},"end":{"row":66,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":34},"end":{"row":66,"column":35},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":35},"end":{"row":66,"column":36},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":36},"end":{"row":66,"column":37},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":37},"end":{"row":66,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":38},"end":{"row":66,"column":39},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":39},"end":{"row":66,"column":40},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":40},"end":{"row":66,"column":41},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":41},"end":{"row":66,"column":42},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":42},"end":{"row":66,"column":43},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":43},"end":{"row":66,"column":44},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":44},"end":{"row":66,"column":45},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":45},"end":{"row":66,"column":46},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":24},"end":{"row":66,"column":46},"action":"remove","lines":["that.desktop, that.win"]}]}]]},"ace":{"folds":[],"scrolltop":480,"scrollleft":0,"selection":{"start":{"row":66,"column":26},"end":{"row":66,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1420556937132}