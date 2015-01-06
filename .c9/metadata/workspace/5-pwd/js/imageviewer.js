{"changed":true,"filter":false,"title":"imageviewer.js","tooltip":"/5-pwd/js/imageviewer.js","value":"\"use strict\";\n\nfunction ImageViewer(){\n    // get and render images\n    var xhr = new XMLHttpRequest();\n    \n    xhr.onreadystatechange = function(){\n    \tif(xhr.readyState === 4 && xhr.status === 200){\n    \t    // get picture object array\n            // parse object\n            var obj = JSON.parse(xhr.responseText);\n            \n            //loop trough array\n            for (var i = 0; i < obj.length; i++){\n                // get elements\n                var content = document.querySelector(\".windowContent\")\n                // create img and a elements\n                var imageDiv = document.createElement(\"div\"),\n                link = document.createElement(\"a\"),\n                img = document.createElement(\"img\");\n                \n                // set attributes\n                link.setAttribute('href', '#');\n                imageDiv.setAttribute('class', 'imageDiv');\n                img.setAttribute('src', obj[i].thumbURL);\n                img.setAttribute('class', 'imageThumb');\n                \n                // append elements\n                imageDiv.appendChild(img);\n                link.appendChild(imageDiv);\n                content.appendChild(link);\n            }\n    \t}\n    };\n    \n\txhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/\", true);\n    xhr.send(null);\n}","undoManager":{"mark":98,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":30,"column":42},"end":{"row":31,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":57},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":20},"end":{"row":25,"column":24},"action":"remove","lines":["setA"]},{"start":{"row":25,"column":20},"end":{"row":25,"column":34},"action":"insert","lines":["setAttribute()"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":33},"end":{"row":25,"column":35},"action":"insert","lines":["''"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["w"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":40},"end":{"row":25,"column":41},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":45},"end":{"row":25,"column":47},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":49},"end":{"row":25,"column":50},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":50},"end":{"row":25,"column":51},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":49},"end":{"row":25,"column":52},"action":"remove","lines":["hei"]},{"start":{"row":25,"column":49},"end":{"row":25,"column":55},"action":"insert","lines":["height"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":34},"end":{"row":25,"column":39},"action":"remove","lines":["width"]},{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":59},"end":{"row":24,"column":0},"action":"insert","lines":["",""]},{"start":{"row":24,"column":0},"end":{"row":24,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":21},"end":{"row":24,"column":22},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":22},"end":{"row":24,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":23},"end":{"row":24,"column":24},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":26},"end":{"row":24,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":27},"end":{"row":24,"column":28},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":28},"end":{"row":24,"column":29},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":29},"end":{"row":24,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":30},"end":{"row":24,"column":31},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":31},"end":{"row":24,"column":32},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":32},"end":{"row":24,"column":33},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":37},"end":{"row":24,"column":39},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":25},"end":{"row":24,"column":39},"action":"remove","lines":["style.height()"]},{"start":{"row":24,"column":25},"end":{"row":24,"column":60},"action":"insert","lines":["setAttribute(\"style\",\"width:500px\")"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":53},"end":{"row":24,"column":56},"action":"remove","lines":["500"]},{"start":{"row":24,"column":53},"end":{"row":24,"column":54},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":54},"end":{"row":24,"column":55},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":55},"end":{"row":24,"column":56},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":60},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":16},"end":{"row":25,"column":60},"action":"insert","lines":["imageDiv.setAttribute(\"style\",\"width:200px\")"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":47},"end":{"row":25,"column":52},"action":"remove","lines":["width"]},{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":49},"end":{"row":25,"column":50},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":50},"end":{"row":25,"column":51},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":52},"end":{"row":25,"column":53},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":54},"end":{"row":25,"column":57},"action":"remove","lines":["200"]},{"start":{"row":25,"column":54},"end":{"row":25,"column":55},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":0},"end":{"row":25,"column":62},"action":"remove","lines":["                //imageDiv.setAttribute(\"style\",\"height:80px\")"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":62},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":59},"action":"remove","lines":["                //img.setAttribute('height', obj[i].height)"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":57},"end":{"row":26,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":53},"end":{"row":24,"column":56},"action":"remove","lines":["200"]},{"start":{"row":24,"column":53},"end":{"row":24,"column":54},"action":"insert","lines":["7"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":54},"end":{"row":24,"column":55},"action":"insert","lines":["5"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":59},"end":{"row":24,"column":60},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":60},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":16},"end":{"row":25,"column":59},"action":"insert","lines":["imageDiv.setAttribute(\"style\",\"width:75px\")"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":47},"end":{"row":25,"column":52},"action":"remove","lines":["width"]},{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":49},"end":{"row":25,"column":50},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":50},"end":{"row":25,"column":51},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":52},"end":{"row":25,"column":53},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":54},"end":{"row":25,"column":56},"action":"remove","lines":["75"]},{"start":{"row":25,"column":54},"end":{"row":25,"column":55},"action":"insert","lines":["6"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":53},"end":{"row":24,"column":54},"action":"remove","lines":["7"]},{"start":{"row":24,"column":53},"end":{"row":24,"column":54},"action":"insert","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":60},"end":{"row":25,"column":61},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":25,"column":61},"action":"remove","lines":["                imageDiv.setAttribute(\"style\",\"width:85px\");","                imageDiv.setAttribute(\"style\",\"height:60px\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":59},"end":{"row":24,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":59},"end":{"row":23,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":76,"mode":"ace/mode/javascript"}},"timestamp":1420554784933}