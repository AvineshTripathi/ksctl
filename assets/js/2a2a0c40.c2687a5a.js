"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>I,default:()=>M,frontMatter:()=>O,metadata:()=>S,toc:()=>C});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2466),s=a(6550),u=a(1980),c=a(7392),m=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:n}),[c,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??c;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var h=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}const T={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(T.tabItem,n),hidden:a},t)}const O={sidebar_position:1},I="Getting Started",S={unversionedId:"getting-started/install",id:"getting-started/install",title:"Getting Started",description:"Lets begin with installation of the tools",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/ksctl/docs/getting-started/install",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/ksctl/docs/category/getting-started"},next:{title:"Maintainers",permalink:"/ksctl/docs/maintainers"}},E={},C=[{value:"Single command method",id:"single-command-method",level:2},{value:"From Source Code",id:"from-source-code",level:2}],P={toc:C},L="wrapper";function M(e){let{components:t,...a}=e;return(0,l.kt)(L,(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Lets begin with installation of the tools\ntheir are various method"),(0,l.kt)("h2",{id:"single-command-method"},"Single command method"),(0,l.kt)("admonition",{title:"Install",type:"info"},(0,l.kt)(w,{groupId:"platform",queryString:!0,mdxType:"Tabs"},(0,l.kt)(x,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -s https://raw.githubusercontent.com/kubesimplify/ksctl/main/install.sh)\n")),"  "),(0,l.kt)(x,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zsh <(curl -s https://raw.githubusercontent.com/kubesimplify/ksctl/main/install.sh)\n")),"  "),(0,l.kt)(x,{value:"Windows",label:"Windows (Powershell)",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ps1"},"iwr -useb https://raw.githubusercontent.com/kubesimplify/ksctl/main/install.ps1 | iex\n")),"  "))),(0,l.kt)("admonition",{title:"uninstall",type:"info"},(0,l.kt)(w,{groupId:"platform",queryString:!0,mdxType:"Tabs"},(0,l.kt)(x,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -s https://raw.githubusercontent.com/kubesimplify/ksctl/main/uninstall.sh)\n")),"  "),(0,l.kt)(x,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"zsh <(curl -s https://raw.githubusercontent.com/kubesimplify/ksctl/main/uninstall.sh)\n")),"  "),(0,l.kt)(x,{value:"Windows",label:"Windows (Powershell)",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ps1"},"iwr -useb https://raw.githubusercontent.com/kubesimplify/ksctl/main/uninstall.ps1 | iex\n")),"  "))),(0,l.kt)("h2",{id:"from-source-code"},"From Source Code"),(0,l.kt)("admonition",{title:"install",type:"info"},(0,l.kt)(w,{groupId:"platform-src",queryString:!0,mdxType:"Tabs"},(0,l.kt)(x,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make install_linux\n")),"  "),(0,l.kt)(x,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# macOS on M1\nmake install_macos\n\n# macOS on INTEL\nmake install_macos_intel\n")),"  "),(0,l.kt)(x,{value:"Windows",label:"Windows (Powershell)",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ps"},"./builder.ps1\n")),"  "))),(0,l.kt)("admonition",{title:"uninstall",type:"info"},(0,l.kt)(w,{groupId:"platform-src",queryString:!0,mdxType:"Tabs"},(0,l.kt)(x,{value:"Linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make uninstall\n")),"  "),(0,l.kt)(x,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make uninstall\n")),"  "),(0,l.kt)(x,{value:"Windows",label:"Windows (Powershell)",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ps"},"./uninstall.ps1\n")),"  "))),(0,l.kt)("admonition",{title:"INSTALLATION DEMO",type:"success"},(0,l.kt)("video",{width:"360",height:"202",controls:!0},(0,l.kt)("source",{src:"../../videos/ksctl-install.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")),(0,l.kt)("admonition",{title:"Demo for Supported Providers",type:"success"},(0,l.kt)("h4",{parentName:"admonition",id:"-azure-high-availability-cluster"},"+ ",(0,l.kt)("a",{parentName:"h4",href:"/ksctl/docs/providers/azure#azureHA"},"Azure High-Availability Cluster")),(0,l.kt)("h4",{parentName:"admonition",id:"-azure-managed-cluster"},"+ ",(0,l.kt)("a",{parentName:"h4",href:"/ksctl/docs/providers/azure#azureManaged"},"Azure Managed Cluster")),(0,l.kt)("h4",{parentName:"admonition",id:"-civo-high-availability-cluster"},"+ ",(0,l.kt)("a",{parentName:"h4",href:"/ksctl/docs/providers/civo#civoHA"},"Civo High-Availability Cluster")),(0,l.kt)("h4",{parentName:"admonition",id:"-civo-managed-cluster"},"+ ",(0,l.kt)("a",{parentName:"h4",href:"/ksctl/docs/providers/civo#civoManaged"},"Civo Managed Cluster"))))}M.isMDXComponent=!0}}]);