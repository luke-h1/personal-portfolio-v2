(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),l=r(a("8OQS")),s=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,w=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+l+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(O,(0,s.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,w=e.Tag,v=e.itemProp,x=e.loading,C=e.draggable,L=g||h;if(!L)return null;var P=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,s.default)({opacity:P?1:0,transition:z?"opacity "+y+"ms":"none"},l),N="boolean"==typeof b?"lightgray":b,B={transitionDelay:y+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&B,l,f),H={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:v},T=this.state.isHydrated?p(L):L[0];if(g)return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),N&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&B)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:I}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(O,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:a,title:t,loading:x},T,{imageVariants:L}))}}));if(h){var j=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},N&&d.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:N,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},z&&B)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:L,generateSources:I}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:L,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(L),d.default.createElement(O,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,s.default)({alt:a,title:t,loading:x},T,{imageVariants:L}))}}))}return null},t}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}P.propTypes={resolutions:z,sizes:k,fixed:N(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:N(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var B=P;t.default=B},gLgB:function(e,t,a){"use strict";var r=a("vOnD"),i=a("Wbzz"),n=Object(r.c)(i.a).withConfig({displayName:"ReadLink",componentId:"l9t29u-0"})(["display:inline-block;font-size:0.875rem;border-bottom:2px solid #000;margin-bottom:1rem;width:100%;"]);t.a=n},"xGn/":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),o=a("dmsj"),l=a("vOnD"),s=a("Wbzz"),d=a("9eSz"),c=a.n(d),u=l.c.div.withConfig({displayName:"BlogElements__BlogSection",componentId:"sc-1h5m139-0"})(["min-width:100vw;max-width:100vw;margin:0px auto;padding-left:16px;padding-right:16px;min-height:100vh;background-color:",";"],(function(e){return e.theme.primaryBackgroundColor})),f=l.c.h1.withConfig({displayName:"BlogElements__Title",componentId:"sc-1h5m139-1"})(["text-align:center;color:",";"],(function(e){return e.theme.primaryTitleColor})),m=l.c.p.withConfig({displayName:"BlogElements__Intro",componentId:"sc-1h5m139-2"})(["color:",";font-size:18px;text-align:center;display:block;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px;"],(function(e){return e.theme.primaryColor})),p=(l.c.div.withConfig({displayName:"BlogElements__PostedAt",componentId:"sc-1h5m139-3"})(["margin-top:1.4rem;p{font-weight:bold;color:#000;}"]),l.c.div.withConfig({displayName:"BlogElements__BlogWrapper",componentId:"sc-1h5m139-4"})(["color:",";display:flex;text-align:center;grid-gap:15px;flex-direction:column;width:50%;margin:0 auto;"],(function(e){return e.theme.primaryColor}))),g=l.c.div.withConfig({displayName:"BlogElements__BlogIntro",componentId:"sc-1h5m139-5"})(["margin-bottom:32px;width:100%;display:flex;flex-direction:column;-webkit-box-pack:center;justify-content:center;align-items:center;"]),h=(Object(l.c)(s.a).withConfig({displayName:"BlogElements__BlogPost",componentId:"sc-1h5m139-6"})(["margin-top:32px;padding-bottom:32px;color:rgb(56,103,214);display:block;text-decoration:none;color:inherit;display:block;border-bottom:2px solid ",";"],(function(e){return e.theme.primaryColor})),l.c.h1.withConfig({displayName:"BlogElements__BlogTitle",componentId:"sc-1h5m139-7"})(["color:",";text-decoration:none;margin:0px 0px 8px;font-size:24px;display:block;align-self:flex-start;font-weight:700;line-height:1.25;&:hover{cursor:pointer;color:",";text-decoration:underline;}"],(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryHoverColor})),l.c.p.withConfig({displayName:"BlogElements__BlogDate",componentId:"sc-1h5m139-8"})(["color:",";margin:0px;padding:0px;border:0px;vertical-align:baseline;font-size:15px;"],(function(e){return e.theme.primaryColor})),l.c.p.withConfig({displayName:"BlogElements__BlogExcerpt",componentId:"sc-1h5m139-9"})(["text-align:center;margin-top:1.2rem;font-weight:500;color:",";"],(function(e){return e.theme.primaryColor})),Object(l.c)(c.a).withConfig({displayName:"BlogElements__BlogImage",componentId:"sc-1h5m139-10"})(["width:200px;margin:0 auto;"]),function(){return Object(s.c)("1955125245").allMdx.nodes.map((function(e){return{title:e.frontmatter.title,author:e.frontmatter.author,slug:e.frontmatter.slug,excerpt:e.excerpt,image:e.frontmatter.image}}))}),b=l.c.article.withConfig({displayName:"PostPreviewElements__PostArticle",componentId:"sc-1a9lft8-0"})(["margin-top:0;padding-bottom:1rem;:first-of-type{margin-top:1rem;}"]),y=l.c.div.withConfig({displayName:"PostPreviewElements__PostWrap",componentId:"sc-1a9lft8-1"})(["color:",";"],(function(e){return e.theme.primaryTextColor})),w=Object(l.c)(c.a).withConfig({displayName:"PostPreviewElements__PostImage",componentId:"sc-1a9lft8-2"})(["max-height:200px;border-radius:10px;margin-top:0;*{margin-top:0;}"]),v=l.c.p.withConfig({displayName:"PostPreviewElements__PostParagraph",componentId:"sc-1a9lft8-3"})(["color:",";"],(function(e){return e.theme.primaryTextColor})),E=Object(l.c)(s.a).withConfig({displayName:"PostPreviewElements__PostLink",componentId:"sc-1a9lft8-4"})(["margin:1rem 1rem 0 0;width:100px;"]),x=a("gLgB"),S=function(e){var t=e.post;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null,i.a.createElement(y,null,i.a.createElement(E,{to:t.slug},i.a.createElement(w,{fluid:t.image.sharp.fluid,alt:t.title})),i.a.createElement("h3",null,i.a.createElement(s.a,{to:t.slug},t.title)),i.a.createElement(v,null,t.excerpt),i.a.createElement(x.a,{to:t.slug},"Read this post "))))},I=function(){var e=h();return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null,i.a.createElement(g,null,i.a.createElement(f,null,"Blog"),i.a.createElement(m,null,"Candid thoughts about Javascript, React, Automation & other interesting things")),i.a.createElement(p,null,e.map((function(e){return i.a.createElement(S,{key:e.slug,post:e})})))))};t.default=function(e){var t=e.data,a=e.location,r=e.theme,l=t.site.siteMetadata.title||"Luke H";return i.a.createElement(n.a,{location:a,title:l},i.a.createElement(o.a,{title:"Home"}),i.a.createElement(I,{theme:r}))}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-9efb5ca8fefd0c0991d4.js.map