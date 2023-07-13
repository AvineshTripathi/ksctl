"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},l="ksctl Intro",o={unversionedId:"intro",id:"intro",title:"ksctl Intro",description:"Purpose",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ksctl/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/ksctl/docs/category/getting-started"}},s={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Current Status on Supported Providers",id:"current-status-on-supported-providers",level:2},{value:"Current Features",id:"current-features",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Issues and current work",id:"issues-and-current-work",level:2},{value:"Current Releases",id:"current-releases",level:2}],p=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:u,Highlight:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ksctl-intro"},"ksctl Intro"),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("admonition",{title:"what is it?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ksctl project by kubesimplify is a command-line tool that helps developers manage Kubernetes clusters running on different enviroment"),(0,a.kt)("p",{parentName:"admonition"},"It provides a simple and intuitive interface for performing common tasks such as creating, deleting, and managing Kubernetes resources. ksctl is designed to be easy to use, even for developers who are new to Kubernetes.")),(0,a.kt)("admonition",{title:"Fact!",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"ksctl takes ",(0,a.kt)("strong",{parentName:"p"},"< 15 minutes")," to create a cluster")),(0,a.kt)("admonition",{title:"Benefits of using",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Simple and intuitive interface"),": ksctl provides a simple and intuitive interface for managing Kubernetes clusters. This makes it easy for developers to get started with Kubernetes, even if they are new to the platform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Efficient"),": ksctl is designed to be efficient. It uses the SDKs to perform operations, which means that it can perform tasks quickly and without the need for additional tools."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Powerful"),": ksctl is a powerful tool that can be used to perform a wide range of tasks. It can be used to create, delete, and manage Kubernetes resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lightweight"),": ksctl binary is ",(0,a.kt)("strong",{parentName:"li"},"< 10Mb")," in size")),(0,a.kt)("p",{parentName:"admonition"},"Overall, ksctl is a valuable tool for developers who want to manage Kubernetes clusters. It is easy to use, efficient, and powerful.")),(0,a.kt)("admonition",{title:"Purposes of the ksctl project",type:"success"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"To provide a simple and intuitive interface for managing Kubernetes clusters."),(0,a.kt)("li",{parentName:"ol"},"To make it easy for developers to get started with Kubernetes, even if they are new to the platform."),(0,a.kt)("li",{parentName:"ol"},"To improve the efficiency of Kubernetes cluster management."),(0,a.kt)("li",{parentName:"ol"},"More features and support for Kubernetes cluster management comming soon!"))),(0,a.kt)("h2",{id:"current-status-on-supported-providers"},"Current Status on Supported Providers"),(0,a.kt)(p,{color:"green",mdxType:"Highlight"},"Done")," ",(0,a.kt)(p,{color:"red",mdxType:"Highlight"},"Not Started")," ",(0,a.kt)(p,{color:"black",mdxType:"Highlight"},"No Plans")," ",(0,a.kt)(p,{color:"blue",mdxType:"Highlight"},"Backlog"),(0,a.kt)("mermaid",{value:"flowchart LR;\n  classDef green color:#022e1f,fill:#00f500;\n  classDef red color:#022e1f,fill:#f11111;\n  classDef white color:#022e1f,fill:#fff;\n  classDef black color:#fff,fill:#000;\n  classDef blue color:#fff,fill:#00f;\n\n  XX[CLI]:::white--providers--\x3eweb{API};\n  web:::white--CIVO--\x3ecivo{Types};\n  civo:::green--managed--\x3ecivom[Create & Delete]:::green;\n  civo--HA--\x3ecivoha[Create & Delete]:::green;\n\n  web--LOCAL--\x3elocal{Types};\n  local:::green--managed--\x3elocalm[Create & Delete]:::green;\n  local--HA--\x3elocalha[Create & Delete]:::black;\n\n  web--AWS--\x3eaws{Types};\n  aws:::blue--managed--\x3eawsm[Create & Delete]:::red;\n  aws--HA--\x3eawsha[Create & Delete]:::red;\n\n  web--AZURE--\x3eaz{Types};\n  az:::green--managed--\x3eazsm[Create & Delete]:::green;\n  az--HA--\x3eazha[Create & Delete]:::green;\n"}),(0,a.kt)("h2",{id:"current-features"},"Current Features"),(0,a.kt)("p",null,"Having core features of ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"add nodes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),", under specific providers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"kind cluster with specific version"))),(0,a.kt)("li",{parentName:"ul"},"Civo",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"have support for the managed and Highly Available Cluster(",(0,a.kt)("em",{parentName:"li"},"Custom"),")"))),(0,a.kt)("li",{parentName:"ul"},"Azure",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"have support for the managed and Highly Available Cluster(",(0,a.kt)("em",{parentName:"li"},"Custom"),")")))),(0,a.kt)("h2",{id:"future-plans"},"Future Plans"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add Web client"),(0,a.kt)("li",{parentName:"ul"},"GCP"),(0,a.kt)("li",{parentName:"ul"},"AWS"),(0,a.kt)("li",{parentName:"ul"},"additional kubernetes application support"),(0,a.kt)("li",{parentName:"ul"},"all other cloud providers"),(0,a.kt)("li",{parentName:"ul"},"improve the High avilability cluster architecture"),(0,a.kt)("li",{parentName:"ul"},"improve logging in local")),(0,a.kt)("h2",{id:"issues-and-current-work"},"Issues and current work"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"work on improving the testing"),(0,a.kt)("li",{parentName:"ul"},"look for labels ",(0,a.kt)("inlineCode",{parentName:"li"},"#priority/essential"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"#priority/should_have")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"#kind/bug"))),(0,a.kt)("h2",{id:"current-releases"},"Current Releases"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","1.0"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0-rc2"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0-rc1"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","...")))}m.isMDXComponent=!0}}]);