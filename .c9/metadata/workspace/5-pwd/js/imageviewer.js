{"changed":true,"filter":false,"title":"imageviewer.js","tooltip":"/5-pwd/js/imageviewer.js","value":"\"use strict\";\n\nfunction ImageViewer(win, desktop){\n    // get and render images\n    var xhr = new XMLHttpRequest();\n    \n    xhr.onreadystatechange = function(){\n    \tif(xhr.readyState === 4 && xhr.status === 200){\n    \t    // remove loading icon at response\n    \t   var content = document.querySelector(\".windowContent\"),\n    \t   loadIcon = document.querySelector(\".loadingIcon\");\n    \t   content.removeChild(loadIcon);\n    \t   //win.removeChild(win.loadingIcon);\n    \t    \n    \t    // variables\n    \t    var imageDiv,\n    \t    link,\n    \t    img,\n    \t    images = [],\n    \t    urls = [];\n    \t    \n            // parse object\n            var obj = JSON.parse(xhr.responseText);\n            \n            //loop trough array\n            for (var i = 0; i < obj.length; i++){\n                // get elements\n                //var content = document.querySelector(\".windowContent\");\n                // create img and a elements\n                imageDiv = document.createElement(\"div\");\n                link = document.createElement(\"a\");\n                img = document.createElement(\"img\");\n                \n                // set attributes\n                link.setAttribute('href', '#');\n                imageDiv.setAttribute('class', 'imageDiv');\n                imageDiv.setAttribute('id', 'imageDiv'+i);\n                img.setAttribute('src', obj[i].thumbURL);\n                img.setAttribute('class', 'imageThumb');\n                \n                // put url in array\n                images.push(img);\n                urls.push(obj[i].URL);\n                \n                // append elements\n                imageDiv.appendChild(img);\n                link.appendChild(imageDiv);\n                content.appendChild(link);\n                \n                // change background image on click\n                img.onclick = (function(url){\n                    return function() {\n                        document.getElementById(\"desktop\").style.backgroundImage = \"url('\" + url + \"')\";\n                    };\n                })(obj[i].URL);\n            }\n    \t}\n    };\n    \n\txhr.open(\"GET\", \"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/\", true);\n    xhr.send(null);\n}","undoManager":{"mark":98,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":51,"column":23},"end":{"row":51,"column":24},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":24},"end":{"row":51,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":25},"end":{"row":51,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":26},"end":{"row":51,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":27},"end":{"row":51,"column":28},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":28},"end":{"row":51,"column":29},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":29},"end":{"row":51,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":30},"end":{"row":51,"column":31},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":31},"end":{"row":51,"column":32},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":32},"end":{"row":51,"column":33},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":33},"end":{"row":51,"column":34},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":34},"end":{"row":51,"column":35},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":35},"end":{"row":51,"column":37},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":37},"end":{"row":51,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":38},"end":{"row":51,"column":39},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":39},"end":{"row":53,"column":21},"action":"insert","lines":["","                        ","                    }"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":20},"end":{"row":55,"column":103},"action":"remove","lines":["document.getElementById(\"desktop\").style.backgroundImage = \"url('\" + string + \"')\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":24},"end":{"row":52,"column":107},"action":"insert","lines":["document.getElementById(\"desktop\").style.backgroundImage = \"url('\" + string + \"')\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":93},"end":{"row":52,"column":99},"action":"remove","lines":["string"]},{"start":{"row":52,"column":93},"end":{"row":52,"column":94},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":94},"end":{"row":52,"column":95},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":95},"end":{"row":52,"column":96},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":0},"end":{"row":54,"column":109},"action":"remove","lines":["                    var string = \"http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/pics/1050509.jpg\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":21},"end":{"row":54,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":16},"end":{"row":54,"column":20},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":12},"end":{"row":54,"column":16},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":8},"end":{"row":54,"column":12},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":4},"end":{"row":54,"column":8},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":21},"end":{"row":54,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":30},"end":{"row":49,"column":31},"action":"insert","lines":["("]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":17},"end":{"row":54,"column":18},"action":"insert","lines":[")"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":18},"end":{"row":54,"column":20},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":19},"end":{"row":54,"column":20},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":21},"end":{"row":54,"column":22},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":22},"end":{"row":54,"column":24},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":23},"end":{"row":54,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":25},"end":{"row":54,"column":26},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":26},"end":{"row":54,"column":27},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":27},"end":{"row":54,"column":28},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":28},"end":{"row":54,"column":29},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":21},"end":{"row":53,"column":22},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":19},"end":{"row":56,"column":26},"action":"remove","lines":["btnShow"]},{"start":{"row":56,"column":19},"end":{"row":56,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":20},"end":{"row":56,"column":21},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":21},"end":{"row":56,"column":22},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":43},"end":{"row":56,"column":46},"action":"remove","lines":["opt"]},{"start":{"row":56,"column":43},"end":{"row":56,"column":44},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":44},"end":{"row":56,"column":45},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":45},"end":{"row":56,"column":46},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":25},"end":{"row":58,"column":40},"action":"remove","lines":["showParam(opt);"]},{"start":{"row":58,"column":25},"end":{"row":58,"column":105},"action":"insert","lines":["document.getElementById(\"desktop\").style.backgroundImage = \"url('\" + url + \"')\";"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":22},"end":{"row":60,"column":32},"action":"remove","lines":["arrOptions"]},{"start":{"row":60,"column":22},"end":{"row":60,"column":23},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":23},"end":{"row":60,"column":24},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":24},"end":{"row":60,"column":25},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":28},"end":{"row":60,"column":29},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":29},"end":{"row":60,"column":30},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":30},"end":{"row":60,"column":31},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":60,"column":31},"end":{"row":60,"column":32},"action":"insert","lines":["L"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":0},"end":{"row":60,"column":34},"action":"remove","lines":["                // img.onclick = (function(url) {","                //     return function() {","                //       document.getElementById(\"desktop\").style.backgroundImage = \"url('\" + url + \"')\";","                //     };","                // })(obj[i].URL);"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":16},"end":{"row":56,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":55,"column":16},"action":"remove","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":54,"column":31},"end":{"row":55,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":0},"end":{"row":50,"column":47},"action":"remove","lines":["                    //change desktop background"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":45},"end":{"row":50,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":16},"end":{"row":49,"column":0},"action":"insert","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":49,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":16},"end":{"row":50,"column":0},"action":"insert","lines":["",""]},{"start":{"row":50,"column":0},"end":{"row":50,"column":16},"action":"insert","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":16},"end":{"row":50,"column":17},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":17},"end":{"row":50,"column":18},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":18},"end":{"row":50,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":24},"end":{"row":50,"column":25},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":25},"end":{"row":50,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":26},"end":{"row":50,"column":27},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":27},"end":{"row":50,"column":28},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":28},"end":{"row":50,"column":29},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":29},"end":{"row":50,"column":30},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":30},"end":{"row":50,"column":31},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":31},"end":{"row":50,"column":32},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":32},"end":{"row":50,"column":33},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":33},"end":{"row":50,"column":34},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":34},"end":{"row":50,"column":35},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":35},"end":{"row":50,"column":36},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":36},"end":{"row":50,"column":37},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":37},"end":{"row":50,"column":38},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":38},"end":{"row":50,"column":39},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":39},"end":{"row":50,"column":40},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":40},"end":{"row":50,"column":41},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":41},"end":{"row":50,"column":42},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":42},"end":{"row":50,"column":43},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":43},"end":{"row":50,"column":44},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":44},"end":{"row":50,"column":45},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":45},"end":{"row":50,"column":46},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":46},"end":{"row":50,"column":47},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":47},"end":{"row":50,"column":48},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":48},"end":{"row":50,"column":49},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":49},"end":{"row":50,"column":50},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":50},"end":{"row":50,"column":51},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":48,"column":16},"action":"remove","lines":["                "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":42},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":47,"column":42},"end":{"row":47,"column":42},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":22,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1420630939571}