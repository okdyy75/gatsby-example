(self.webpackChunkgatsby_img_example=self.webpackChunkgatsby_img_example||[]).push([[691],{4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],o[s[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",c),d}}},9230:function(e,t,n){"use strict";n.d(t,{G:function(){return P},L:function(){return h},M:function(){return C},P:function(){return T},S:function(){return D},_:function(){return c},a:function(){return o},b:function(){return d},c:function(){return s},d:function(){return u},g:function(){return p},h:function(){return l}});var r=n(7294),a=(n(4811),n(5697)),i=n.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var s=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=function(e){var t,n,r;return null==(t=s(e))||null==(n=t.images)||null==(r=n.fallback)?void 0:r.src};function d(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function p(e,t,n,r,a,i,c,l){var s={};i&&(s.backgroundColor=i,"fixed"===n?(s.width=r,s.height=a,s.backgroundColor=i,s.position="relative"):("constrained"===n||"fullWidth"===n)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),c&&(s.objectFit=c),l&&(s.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return u}var f,m=["children"],g=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,n=c(e,m);return r.createElement(r.Fragment,null,r.createElement(g,o({},n)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,l=void 0===i?"":i,s=e.shouldLoad,u=c(e,y);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:l}))},w=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,l=void 0===i||i,s=c(e,b),u=s.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},s,t,{sizes:u,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},w.displayName="Picture",w.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var E=["fallback"],T=function(e){var t=e.fallback,n=c(e,E);return t?r.createElement(w,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};T.displayName="Placeholder",T.propTypes={fallback:a.string,sources:null==(f=w.propTypes)?void 0:f.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var C=function(e){return r.createElement(r.Fragment,null,r.createElement(w,o({},e)),r.createElement("noscript",null,r.createElement(w,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;var S,O,x=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},A={image:i().object.isRequired,alt:x},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],L=new Set,j=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,s=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,g=e.onError,h=c(e,I),y=i.width,b=i.height,v=i.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(y,b,v),E=w.style,T=w.className,C=c(w,k),x=(0,r.useRef)(),A=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var j=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((function(){S||(S=Promise.all([n.e(774),n.e(36)]).then(n.bind(n,9036)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=x.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(A)):O&&L.has(A)?void 0:(S.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;x.current.innerHTML=r(o({isLoading:!0,isLoaded:L.has(A),image:i},h)),L.has(A)||(e=requestAnimationFrame((function(){x.current&&(t=a(x.current,A,L,s,f,m,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){L.has(A)&&O&&(x.current.innerHTML=O(o({isLoading:L.has(A),isLoaded:L.has(A),image:i},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},C,{style:o({},E,s,{backgroundColor:u}),className:T+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));P.propTypes=A,P.displayName="GatsbyImage";var _,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],M=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:x,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},D=(_=P,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=c(e,N);return a&&console.warn(a),n?r.createElement(_,o({image:n},i)):(console.warn("Image not loaded",t),null)});D.displayName="StaticImage",D.propTypes=q},3399:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r,a,i,o,c=n(7294),l=n(1597),s=n(9230),u=n(5697),d=n.n(u),p=n(4839),f=n.n(p),m=n(2993),g=n.n(m),h=n(6494),y=n.n(h),b="bodyAttributes",v="htmlAttributes",w="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),C="cssText",S="href",O="http-equiv",x="innerHTML",A="itemprop",I="name",k="property",L="rel",j="src",P="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",D="titleTemplate",z=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),F=[E.NOSCRIPT,E.SCRIPT,E.STYLE],U="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=ee(e,E.TITLE),n=ee(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,N);return t||r||void 0},$=function(e){return ee(e,q)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ie("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==x&&c!==C&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,ie=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ce=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;ue(E.BODY,r),ue(E.HTML,a),se(d,p);var f={baseTag:de(E.BASE,n),linkTags:de(E.LINK,i),metaTags:de(E.META,o),noscriptTags:de(E.NOSCRIPT,c),scriptTags:de(E.SCRIPT,s),styleTags:de(E.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),l(e,m,g)},le=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ue(E.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},de=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,a=fe(n,r),[c.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=pe(n),i=le(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===x||n===C){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===C)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:me(E.BASE,t,r),bodyAttributes:me(b,n,r),htmlAttributes:me(v,a,r),link:me(E.LINK,i,r),meta:me(E.META,o,r),noscript:me(E.NOSCRIPT,c,r),script:me(E.SCRIPT,l,r),style:me(E.STYLE,s,r),title:me(E.TITLE,{title:d,titleAttributes:p},r)}},he=f()((function(e){return{baseTag:Z([S,P],e),bodyAttributes:X(b,e),defer:ee(e,M),encode:ee(e,R),htmlAttributes:X(v,e),linkTags:Q(E.LINK,[L,S],e),metaTags:Q(E.META,[I,T,O,k,A],e),noscriptTags:Q(E.NOSCRIPT,[x],e),onChangeClientState:$(e),scriptTags:Q(E.SCRIPT,[j,x],e),styleTags:Q(E.STYLE,[C],e),title:V(e),titleAttributes:X(w,e)}}),(function(e){oe&&ae(oe),e.defer?oe=re((function(){ce(e,(function(){oe=null}))})):(ce(e),oe=null)}),ge)((function(){return null})),ye=(a=he,o=i=function(e){function t(){return B(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},i)});case E.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(G(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind;var be=n(9499),ve=function(e){var t=e.children,n=e.title,r=void 0===n?"":n,a=e.description,i=void 0===a?"":a,o=e.ogImageUrl,u=void 0===o?"":o,d=(0,l.K2)("3258741199"),p=(0,be.useLocation)().href,f=d.site.siteMetadata,m=f.siteUrl,g=f.siteTitle,h=f.siteDescription,y=d.siteIcon,b=d.siteOgImage;console.log("siteUrl",m),console.log("test1",(0,l.dq)("test1")),console.log("test2",(0,l.mc)("test2")),console.log("test3",(0,s.d)(y)),console.log("test4",b.childImageSharp.resize.src),console.log("location",location);var v=m+(0,l.dq)((0,s.d)(y)),w=m+(0,l.dq)(b.childImageSharp.resize.src),E=p;return r=r||g,i=i||h,u=u||w,c.createElement(c.Fragment,null,c.createElement(ye,null,c.createElement("meta",{charSet:"UTF-8"}),c.createElement("title",null,r),c.createElement("meta",{name:"description",content:i}),c.createElement("meta",{name:"thumbnail",content:u}),c.createElement("link",{rel:"icon",href:"/favicon.ico"}),c.createElement("meta",{property:"og:locale",content:"ja_JP"}),c.createElement("meta",{property:"og:title",content:r}),c.createElement("meta",{property:"og:description",content:i}),c.createElement("meta",{property:"og:image",content:u}),c.createElement("meta",{property:"og:image:width",content:"1200"}),c.createElement("meta",{property:"og:image:height",content:"630"}),c.createElement("meta",{property:"og:url",content:E}),c.createElement("meta",{property:"og:site_name",content:g}),c.createElement("meta",{name:"twitter:title",content:r}),c.createElement("meta",{name:"twitter:description",content:i}),c.createElement("meta",{name:"twitter:image",content:u}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("link",{rel:"apple-touch-icon",href:v}),c.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:v}),c.createElement("meta",{name:"msapplication-TileImage",content:v}),c.createElement("meta",{name:"robots",content:"index,follow"}),c.createElement("meta",{name:"googlebot",content:"index,follow"}),c.createElement("link",{rel:"canonical",href:E})),c.createElement("main",null,t))},we=n.p+"static/dog-0929f9df73162aeb5e52dfe25d1467c6.gif",Ee=function(e){var t=e.data,r=t.dogImage,a=t.dogImageConstrained100,i=t.dogImageFixed100,o=t.dogImageFullWidth100,u=t.allWriterJson.nodes;return c.createElement(ve,null,c.createElement("h1",null,"そのまま表示編"),c.createElement("h2",null,"static フォルダに配置"),c.createElement("img",{src:""+(0,l.dq)("logo.png")}),c.createElement("hr",null),c.createElement("h2",null,"import して表示"),c.createElement("img",{src:we}),c.createElement("hr",null),c.createElement("h1",null,"gatsby-plugin-image 編"),c.createElement("h2",null,"StaticImage で表示"),c.createElement(s.S,{src:"../images/dog.svg",alt:"dog.svg",__imageData:n(2022)}),c.createElement(s.S,{src:"https://placehold.jp/38/ccc/999/250x250.jpg?text=No%20Image",alt:"No Image",__imageData:n(8167)}),c.createElement("hr",null),c.createElement("h2",null,"GatsbyImage で表示"),c.createElement("h3",null,"file を使った表示"),c.createElement(s.G,{image:(0,s.c)(r),alt:"dog.jpg"}),c.createElement("hr",null),c.createElement("h3",null,"childImageSharp で非対応フォーマット（gif,svg 等）の場合"),c.createElement("img",{src:r.publicURL}),c.createElement("hr",null),c.createElement("h3",null,"gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)の場合"),c.createElement(s.G,{image:(0,s.c)(a),alt:"dog.jpg"}),c.createElement("hr",null),c.createElement("h3",null,"gatsbyImageData(layout: FIXED, width: 100, height: 100)の場合"),c.createElement(s.G,{image:(0,s.c)(i),alt:"dog.jpg"}),c.createElement("hr",null),c.createElement("h3",null,"gatsbyImageData(layout: FIXED, width: 100, height: 100)の場合"),c.createElement(s.G,{image:(0,s.c)(o),alt:"dog.jpg"}),c.createElement("hr",null),c.createElement("h1",null,"Json から画像データを扱う編"),c.createElement("h2",null,"Json からローカル画像を表示"),u.map((function(e){return c.createElement("div",{key:e.id},e.name,c.createElement(s.G,{image:(0,s.c)(e.image),alt:e.name}))})),c.createElement("h2",null,"Json から外部画像を表示（placehold.jpを使用）"),u.map((function(e){return c.createElement("div",{key:e.id},e.name,c.createElement(s.G,{image:(0,s.c)(e.localImage),alt:e.name}),c.createElement("hr",null))})))}},8167:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/gatsby-example/static/400b43833b6ea533bb30774258583129/f505e/250x250.jpg","srcSet":"/gatsby-example/static/400b43833b6ea533bb30774258583129/df74b/250x250.jpg 63w,\\n/gatsby-example/static/400b43833b6ea533bb30774258583129/8bb35/250x250.jpg 125w,\\n/gatsby-example/static/400b43833b6ea533bb30774258583129/f505e/250x250.jpg 250w","sizes":"(min-width: 250px) 250px, 100vw"},"sources":[{"srcSet":"/gatsby-example/static/400b43833b6ea533bb30774258583129/74c72/250x250.webp 63w,\\n/gatsby-example/static/400b43833b6ea533bb30774258583129/d66e1/250x250.webp 125w,\\n/gatsby-example/static/400b43833b6ea533bb30774258583129/e7160/250x250.webp 250w","type":"image/webp","sizes":"(min-width: 250px) 250px, 100vw"}]},"width":250,"height":250}')},2022:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#98d8a8","images":{"fallback":{"src":"/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/f9ce8/dog.svg","srcSet":"/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/b4c06/dog.svg 128w,\\n/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/ade80/dog.svg 256w,\\n/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/f9ce8/dog.svg 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/6766a/dog.webp 128w,\\n/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/22bfc/dog.webp 256w,\\n/gatsby-example/static/38e6664cc9ddfcbbc2523e88e3fe4975/d689f/dog.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ca445e625e1d9f32217e.js.map