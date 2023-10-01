
import React from 'react';
import ReactDOM from 'react-dom';

import IdyllDocument from 'idyll-document';

var mountNode = document.getElementById('idyll-mount');

var ast = {"type":"component","name":"div","children":[{"type":"var","properties":{"name":{"type":"value","value":"x"},"value":{"type":"value","value":0}}},{"type":"var","properties":{"name":{"type":"value","value":"state"},"value":{"type":"value","value":0}}},{"type":"var","properties":{"name":{"type":"value","value":"exampleVar"},"value":{"type":"value","value":5}}},{"type":"component","name":"TextContainer","children":[{"type":"meta","properties":{"title":{"type":"value","value":"Idyll_test1"},"description":{"type":"value","value":"testing out Idyll"}}}]},{"type":"component","name":"Header","properties":{"title":{"type":"value","value":"Idyll_test1"},"subtitle":{"type":"value","value":"Welcome to Idyll. testing out idyll. Open index.idyll to start writing"},"author":{"type":"value","value":"Susan Chen"},"authorLink":{"type":"value","value":"https://idyll-lang.org"},"date":{"type":"value","value":"Oct 1, 2023"},"background":{"type":"value","value":"#222222"},"color":{"type":"value","value":"#ffffff"}},"children":[]},{"type":"component","name":"TextContainer","children":[{"type":"component","name":"h2","children":[{"type":"textnode","value":"Introduction"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"This is an Idyll post. It is generated via\nthe file "},{"type":"component","name":"code","children":[{"type":"textnode","value":"index.idyll"}]},{"type":"textnode","value":". To compile this post using\nidyll, run the command "},{"type":"component","name":"code","children":[{"type":"textnode","value":"idyll"}]},{"type":"textnode","value":" inside of this directory."}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Idyll posts are designed to support interaction and\ndata-driven graphics."}]},{"type":"component","name":"CustomD3Component","properties":{"className":{"type":"value","value":"d3-component"},"state":{"type":"variable","value":"state"}},"children":[]},{"type":"component","name":"button","properties":{"onClick":{"type":"expression","value":"state++"}},"children":[{"type":"textnode","value":"\n  Click Me."}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Configuration can be done via the "},{"type":"component","name":"code","children":[{"type":"textnode","value":"idyll"}]},{"type":"textnode","value":" field in "},{"type":"component","name":"code","children":[{"type":"textnode","value":"package.json"}]},{"type":"textnode","value":"."}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Markup"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Idyll is based on Markdown."}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"You can use familiar syntax\nto create "},{"type":"component","name":"strong","children":[{"type":"textnode","value":"bold"}]},{"type":"textnode","value":" ("},{"type":"component","name":"code","children":[{"type":"textnode","value":"**bold**"}]},{"type":"textnode","value":" ) and "},{"type":"component","name":"em","children":[{"type":"textnode","value":"italic"}]},{"type":"textnode","value":" ("},{"type":"component","name":"code","children":[{"type":"textnode","value":"*italic*"}]},{"type":"textnode","value":" ) styles,"}]},{"type":"component","name":"ul","children":[{"type":"component","name":"li","children":[{"type":"textnode","value":"lists"}]},{"type":"component","name":"li","children":[{"type":"textnode","value":"of"}]},{"type":"component","name":"li","children":[{"type":"textnode","value":"items,"}]}]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"* lists\n* of\n* items,"}]}]},{"type":"component","name":"ol","children":[{"type":"component","name":"li","children":[{"type":"textnode","value":"and numbered"}]},{"type":"component","name":"li","children":[{"type":"textnode","value":"lists"}]},{"type":"component","name":"li","children":[{"type":"textnode","value":"of items,"}]}]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"1. and numbered\n2. lists\n3. of items,"}]}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"in addition to "},{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://idyll-lang.org"}},"children":[{"type":"textnode","value":"hyperlinks"}]},{"type":"textnode","value":" and images:"}]},{"type":"component","name":"img","properties":{"src":{"type":"value","value":"static/images/quill.svg"},"alt":{"type":"value","value":"quill"}},"children":[]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"![quill](static/images/quill.svg)"}]}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Components"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Components can be embedded using a bracket syntax:"}]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"[Range /]"}]}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"and can contain nested content:"}]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"[Equation]e = mc^{2}[/Equation]"}]}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Components accept properties:"}]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"[Range value:x min:0 max:1 /]"}]}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"that can be bound to variables to achieve interactivity (more in next section)."}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"A variety of components are included by default. See "},{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://idyll-lang.org/docs/components/"}},"children":[{"type":"textnode","value":"all the available components"}]},{"type":"textnode","value":". You can also use any html tag, for example: "},{"type":"component","name":"code","children":[{"type":"textnode","value":"[div] A div! [/div]"}]},{"type":"textnode","value":"."}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"To create your own, add it to the "},{"type":"component","name":"code","children":[{"type":"textnode","value":"components/"}]},{"type":"textnode","value":" folder. There are examples of how to use Idyll with React and D3 based components already included."}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Interactivity"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Here is how you can instantiate a variable and bind it to a component:"}]},{"type":"component","name":"Range","properties":{"min":{"type":"value","value":0},"max":{"type":"value","value":10},"value":{"type":"variable","value":"exampleVar"}},"children":[]},{"type":"component","name":"Display","properties":{"value":{"type":"variable","value":"exampleVar"}},"children":[]},{"type":"component","name":"pre","children":[{"type":"component","name":"code","children":[{"type":"textnode","value":"[var name:\"exampleVar\" value:5 /]\n\n[Range min:0 max:10 value:exampleVar /]\n[Display value:exampleVar /]"}]}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Learn More"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"To learn more see the documentation at "},{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://idyll-lang.org/docs/"}},"children":[{"type":"component","name":"span","children":[{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://idyll-lang.org/docs/"}},"children":[{"type":"textnode","value":"https://idyll-lang.org/docs/"}]}]}]},{"type":"textnode","value":",\njoin our "},{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://gitter.im/idyll-lang/Lobby"}},"children":[{"type":"textnode","value":"chatroom"}]},{"type":"textnode","value":", or see the project on "},{"type":"component","name":"a","properties":{"href":{"type":"value","value":"https://github.com/idyll-lang/idyll"}},"children":[{"type":"textnode","value":"GitHub"}]},{"type":"textnode","value":"."}]},{"type":"component","name":"hr","children":[]},{"type":"component","name":"h1","children":[{"type":"textnode","value":"Technical Details"}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Installation"}]},{"type":"component","name":"ul","children":[{"type":"component","name":"li","children":[{"type":"textnode","value":"Make sure you have "},{"type":"component","name":"code","children":[{"type":"textnode","value":"idyll"}]},{"type":"textnode","value":" installed ("},{"type":"component","name":"code","children":[{"type":"textnode","value":"npm i -g idyll"}]},{"type":"textnode","value":")."}]},{"type":"component","name":"li","children":[{"type":"textnode","value":"Clone this repo and run "},{"type":"component","name":"code","children":[{"type":"textnode","value":"npm install"}]},{"type":"textnode","value":"."}]}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Developing a post locally"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Run "},{"type":"component","name":"code","children":[{"type":"textnode","value":"idyll"}]},{"type":"textnode","value":"."}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Building a post for production"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Run "},{"type":"component","name":"code","children":[{"type":"textnode","value":"idyll build"}]},{"type":"textnode","value":". The output will appear in the top-level "},{"type":"component","name":"code","children":[{"type":"textnode","value":"build"}]},{"type":"textnode","value":" folder. To change the output location, change the "},{"type":"component","name":"code","children":[{"type":"textnode","value":"output"}]},{"type":"textnode","value":" option in "},{"type":"component","name":"code","children":[{"type":"textnode","value":"package.json"}]},{"type":"textnode","value":"."}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Deploying"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"Make sure your post has been built, then deploy the docs folder via any static hosting service."}]},{"type":"component","name":"h2","children":[{"type":"textnode","value":"Dependencies"}]},{"type":"component","name":"p","children":[{"type":"textnode","value":"You can install custom dependencies by running "},{"type":"component","name":"code","children":[{"type":"textnode","value":"npm install <package-name> --save"}]},{"type":"textnode","value":". Note that any collaborators will also need download the package locally by running "},{"type":"component","name":"code","children":[{"type":"textnode","value":"npm install"}]},{"type":"textnode","value":" after pulling the changes."}]}]}]};


import _component_0 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/text-container.js'
import _component_1 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/header.js'
import _component_2 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/h2.js'
import _component_3 from '/Users/susanchen/Documents/sc6354.github.io/components/custom-d3-component.js'
import _component_4 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/button.js'
import _component_5 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/range.js'
import _component_6 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/display.js'
import _component_7 from '/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll-components/dist/cjs/h1.js'

var components = {};
components["text-container"] = _component_0
components["header"] = _component_1
components["h2"] = _component_2
components["custom-d3-component"] = _component_3
components["button"] = _component_4
components["range"] = _component_5
components["display"] = _component_6
components["h1"] = _component_7


var datasets = {};

 

var opts = {"ssr":true,"theme":"idyll","layout":"centered","authorView":false};
var layout = opts.layout;
var theme = opts.theme;
var authorView = opts.authorView;

var context = require("/Users/susanchen/Documents/sc6354.github.io/node_modules/idyll/src/client/context");

var mountMethod = opts.ssr ? 'hydrate' : 'render';
ReactDOM[mountMethod](
  React.createElement(IdyllDocument, {
    ast: ast,
    components: components,
    context: context,
    datasets: datasets,
    layout: layout,
    theme: theme,
    authorView: authorView
  }),
  mountNode
);
  