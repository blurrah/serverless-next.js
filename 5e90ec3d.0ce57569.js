(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(9),r=(a(0),a(177)),l={id:"inputs",title:"Inputs",sidebar_label:"Inputs"},i={id:"inputs",isDocsHomePage:!1,title:"Inputs",description:"| Name                     | Type              | Default Value                                                      | Description                                                                                                                                                                                                                                                          |",source:"@site/docs/inputs.md",permalink:"/docs/inputs",editUrl:"https://github.com/serverless-nextjs/serverless-next.js/documentation/docs/docs/inputs.md",sidebar_label:"Inputs",sidebar:"someSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},c=[],d={rightToc:c};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"domain"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Array")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For example ",Object(r.b)("inlineCode",{parentName:"td"},"['admin', 'portal.com']"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucketName"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom bucket name where static assets are stored. By default is autogenerated.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bucketRegion"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"us-east-1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Region where you want to host your s3 bucket. Make sure this is geographically closer to the majority of your end users to reduce latency when CloudFront proxies a request to S3.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nextConfigDir"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"./")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory where your application ",Object(r.b)("inlineCode",{parentName:"td"},"next.config.js")," file is. This input is useful when the ",Object(r.b)("inlineCode",{parentName:"td"},"serverless.yml")," is not in the same directory as the next app. ",Object(r.b)("strong",{parentName:"td"},"Note:")," ",Object(r.b)("inlineCode",{parentName:"td"},"nextConfigDir")," should be set if ",Object(r.b)("inlineCode",{parentName:"td"},"next.config.js")," ",Object(r.b)("inlineCode",{parentName:"td"},"distDir")," is used")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nextStaticDir"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"./")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If your ",Object(r.b)("inlineCode",{parentName:"td"},"static")," or ",Object(r.b)("inlineCode",{parentName:"td"},"public")," directory is not a direct child of ",Object(r.b)("inlineCode",{parentName:"td"},"nextConfigDir")," this is needed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"*lambda-type*@Edge for Next CloudFront distribution")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The description that will be used for both lambdas. Note that "(API)" will be appended to the API lambda description.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"policy"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The arn policy that will be assigned to both lambdas.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"runtime"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"nodejs12.x")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When assigned a value, both the default and api lambdas will be assigned the runtime defined in the value. When assigned to an object, values for the default and api lambdas can be separately defined")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"memory"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"512")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When assigned a number, both the default and api lambdas will be assigned memory of that value. When assigned to an object, values for the default and api lambdas can be separately defined")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"timeout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"number\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"10")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Same as above")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When assigned a string, both the default and api lambdas will assigned name of that value. When assigned to an object, values for the default and api lambdas can be separately defined")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When true builds and deploys app, when false assume the app has been built and uses the ",Object(r.b)("inlineCode",{parentName:"td"},".next")," ",Object(r.b)("inlineCode",{parentName:"td"},".serverless_nextjs")," directories in ",Object(r.b)("inlineCode",{parentName:"td"},"nextConfigDir")," to deploy. If an object is passed ",Object(r.b)("inlineCode",{parentName:"td"},"build")," allows for overriding what script gets called and with what arguments.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build.cmd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"node_modules/.bin/next")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build command")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build.args"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"Array\\|string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"['build']")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments to pass to the build")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build.cwd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"./")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override the current working directory")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build.enabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Same as passing ",Object(r.b)("inlineCode",{parentName:"td"},"build:false")," but from within the config")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"build.env"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add additional environment variables to the script")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloudfront"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inputs to be passed to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/serverless-components/aws-cloudfront"}),"aws-cloudfront"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"domainType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"both"')),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Can be one of: ",Object(r.b)("inlineCode",{parentName:"td"},'"apex"')," - apex domain only, don't create a www subdomain. ",Object(r.b)("inlineCode",{parentName:"td"},'"www"')," - www domain only, don't create an apex subdomain.",Object(r.b)("inlineCode",{parentName:"td"},'"both"')," - create both www and apex domains when either one is provided.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"publicDirectoryCache"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean\\|object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customize the ",Object(r.b)("inlineCode",{parentName:"td"},"public"),"/",Object(r.b)("inlineCode",{parentName:"td"},"static")," folder asset caching policy. Assigning an object with ",Object(r.b)("inlineCode",{parentName:"td"},"value")," and/or ",Object(r.b)("inlineCode",{parentName:"td"},"test")," lets you customize the caching policy and the types of files being cached. Assigning false disables caching")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useServerlessTraceTarget"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use the experimental-serverless-trace target to build your next app. This is the same build target that Vercel Now uses. See this ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/vercel/next.js/pull/8246"}),"RFC")," for details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"verbose"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print verbose output to the console.")))),Object(r.b)("p",null,"Custom inputs can be configured like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"myNextApp:\n  component: serverless-next.js\n  inputs:\n    bucketName: my-bucket\n")))}o.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var d=b.a.createContext({}),o=function(e){var t=b.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(a),O=n,m=p["".concat(l,".").concat(O)]||p[O]||j[O]||r;return a?b.a.createElement(m,i(i({ref:t},d),{},{components:a})):b.a.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);