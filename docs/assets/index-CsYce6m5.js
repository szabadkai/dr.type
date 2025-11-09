(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const hi=globalThis,as=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ls=Symbol(),Os=new WeakMap;let bo=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ls)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(as&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Os.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Os.set(e,t))}return t}toString(){return this.cssText}};const Sr=i=>new bo(typeof i=="string"?i:i+"",void 0,ls),ue=(i,...t)=>{const e=i.length===1?i[0]:t.reduce(((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1]),i[0]);return new bo(e,i,ls)},Cr=(i,t)=>{if(as)i.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),n=hi.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},Ls=as?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Sr(e)})(i):i;const{is:Mr,defineProperty:Tr,getOwnPropertyDescriptor:Pr,getOwnPropertyNames:Ar,getOwnPropertySymbols:Dr,getPrototypeOf:Er}=Object,Si=globalThis,$s=Si.trustedTypes,Or=$s?$s.emptyScript:"",Lr=Si.reactiveElementPolyfillSupport,Ae=(i,t)=>i,fi={toAttribute(i,t){switch(t){case Boolean:i=i?Or:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},cs=(i,t)=>!Mr(i,t),Is={attribute:!0,type:String,converter:fi,reflect:!1,useDefault:!1,hasChanged:cs};Symbol.metadata??=Symbol("metadata"),Si.litPropertyMetadata??=new WeakMap;let oe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Is){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Tr(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:o}=Pr(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){const a=n?.call(this);o?.call(this,r),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Is}static _$Ei(){if(this.hasOwnProperty(Ae("elementProperties")))return;const t=Er(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ae("properties"))){const e=this.properties,s=[...Ar(e),...Dr(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(Ls(n))}else t!==void 0&&e.push(Ls(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:fi).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const o=s.getPropertyOptions(n),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:fi;this._$Em=n;const a=r.fromAttribute(e,o.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const n=this.constructor,o=this[t];if(s??=n.getPropertyOptions(t),!((s.hasChanged??cs)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:n,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:r}=o,a=this[n];r!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},oe[Ae("elementProperties")]=new Map,oe[Ae("finalized")]=new Map,Lr?.({ReactiveElement:oe}),(Si.reactiveElementVersions??=[]).push("2.1.1");const hs=globalThis,gi=hs.trustedTypes,Rs=gi?gi.createPolicy("lit-html",{createHTML:i=>i}):void 0,xo="$lit$",Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,yo="?"+Mt,$r=`<${yo}>`,Jt=document,Re=()=>Jt.createComment(""),Be=i=>i===null||typeof i!="object"&&typeof i!="function",ds=Array.isArray,Ir=i=>ds(i)||typeof i?.[Symbol.iterator]=="function",$i=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bs=/-->/g,zs=/>/g,Nt=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fs=/'/g,Ns=/"/g,vo=/^(?:script|style|textarea|title)$/i,Rr=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),M=Rr(1),ae=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Ws=new WeakMap,Xt=Jt.createTreeWalker(Jt,129);function _o(i,t){if(!ds(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rs!==void 0?Rs.createHTML(t):t}const Br=(i,t)=>{const e=i.length-1,s=[];let n,o=t===2?"<svg>":t===3?"<math>":"",r=ye;for(let a=0;a<e;a++){const l=i[a];let c,h,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,h=r.exec(l),h!==null);)u=r.lastIndex,r===ye?h[1]==="!--"?r=Bs:h[1]!==void 0?r=zs:h[2]!==void 0?(vo.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=Nt):h[3]!==void 0&&(r=Nt):r===Nt?h[0]===">"?(r=n??ye,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?Nt:h[3]==='"'?Ns:Fs):r===Ns||r===Fs?r=Nt:r===Bs||r===zs?r=ye:(r=Nt,n=void 0);const f=r===Nt&&i[a+1].startsWith("/>")?" ":"";o+=r===ye?l+$r:d>=0?(s.push(c),l.slice(0,d)+xo+l.slice(d)+Mt+f):l+Mt+(d===-2?a:f)}return[_o(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class ze{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[c,h]=Br(t,e);if(this.el=ze.createElement(c,s),Xt.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=Xt.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(xo)){const u=h[r++],f=n.getAttribute(d).split(Mt),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:g[2],strings:f,ctor:g[1]==="."?Fr:g[1]==="?"?Nr:g[1]==="@"?Wr:Ci}),n.removeAttribute(d)}else d.startsWith(Mt)&&(l.push({type:6,index:o}),n.removeAttribute(d));if(vo.test(n.tagName)){const d=n.textContent.split(Mt),u=d.length-1;if(u>0){n.textContent=gi?gi.emptyScript:"";for(let f=0;f<u;f++)n.append(d[f],Re()),Xt.nextNode(),l.push({type:2,index:++o});n.append(d[u],Re())}}}else if(n.nodeType===8)if(n.data===yo)l.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(Mt,d+1))!==-1;)l.push({type:7,index:o}),d+=Mt.length-1}o++}}static createElement(t,e){const s=Jt.createElement("template");return s.innerHTML=t,s}}function le(i,t,e=i,s){if(t===ae)return t;let n=s!==void 0?e._$Co?.[s]:e._$Cl;const o=Be(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=n:e._$Cl=n),n!==void 0&&(t=le(i,n._$AS(i,t.values),n,s)),t}class zr{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??Jt).importNode(e,!0);Xt.currentNode=n;let o=Xt.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new qe(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new jr(o,this,t)),this._$AV.push(c),l=s[++a]}r!==l?.index&&(o=Xt.nextNode(),r++)}return Xt.currentNode=Jt,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class qe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=le(this,t,e),Be(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==ae&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ir(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==X&&Be(this._$AH)?this._$AA.nextSibling.data=t:this.T(Jt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ze.createElement(_o(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{const o=new zr(n,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Ws.get(t.strings);return e===void 0&&Ws.set(t.strings,e=new ze(t)),e}k(t){ds(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const o of t)n===e.length?e.push(s=new qe(this.O(Re()),this.O(Re()),this,this.options)):s=e[n],s._$AI(o),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ci{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,o){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=X}_$AI(t,e=this,s,n){const o=this.strings;let r=!1;if(o===void 0)t=le(this,t,e,0),r=!Be(t)||t!==this._$AH&&t!==ae,r&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=le(this,a[s+l],e,l),c===ae&&(c=this._$AH[l]),r||=!Be(c)||c!==this._$AH[l],c===X?t=X:t!==X&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!n&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Fr extends Ci{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}class Nr extends Ci{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==X)}}class Wr extends Ci{constructor(t,e,s,n,o){super(t,e,s,n,o),this.type=5}_$AI(t,e=this){if((t=le(this,t,e,0)??X)===ae)return;const s=this._$AH,n=t===X&&s!==X||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==X&&(s===X||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class jr{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){le(this,t)}}const Hr=hs.litHtmlPolyfillSupport;Hr?.(ze,qe),(hs.litHtmlVersions??=[]).push("3.3.1");const Vr=(i,t,e)=>{const s=e?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const o=e?.renderBefore??null;s._$litPart$=n=new qe(t.insertBefore(Re(),o),o,void 0,e??{})}return n._$AI(i),n};const us=globalThis;class pt extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ae}}pt._$litElement$=!0,pt.finalized=!0,us.litElementHydrateSupport?.({LitElement:pt});const Ur=us.litElementPolyfillSupport;Ur?.({LitElement:pt});(us.litElementVersions??=[]).push("4.2.1");const fe=i=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(i,t)})):customElements.define(i,t)};const Yr={attribute:!0,type:String,converter:fi,reflect:!1,hasChanged:cs},qr=(i=Yr,t,e)=>{const{kind:s,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){const{name:r}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,i)},init(a){return a!==void 0&&this.C(r,void 0,i,a),a}}}if(s==="setter"){const{name:r}=e;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,i)}}throw Error("Unsupported decorator location: "+s)};function ge(i){return(t,e)=>typeof e=="object"?qr(i,t,e):((s,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,s),r?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}function I(i){return ge({...i,state:!0,attribute:!1})}const P={Beginner:1,Easy:2,Medium:3,Hard:4,Expert:5},Xr=[{id:"pride-prejudice-1",title:"Pride and Prejudice - Chapter 1",author:"Jane Austen",difficulty:P.Beginner,requiredLevel:1,category:"literature",wordCount:56,nextTextId:"pride-prejudice-2",bookSeries:"Pride and Prejudice",chapterNumber:1,content:"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters."},{id:"pride-prejudice-2",title:"Pride and Prejudice - Chapter 2",author:"Jane Austen",difficulty:P.Beginner,requiredLevel:1,category:"literature",wordCount:68,prevTextId:"pride-prejudice-1",nextTextId:"pride-prejudice-3",bookSeries:"Pride and Prejudice",chapterNumber:2,content:'Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with: "I hope Mr. Bingley will like it, Lizzy."'},{id:"pride-prejudice-3",title:"Pride and Prejudice - Chapter 3",author:"Jane Austen",difficulty:P.Easy,requiredLevel:1,category:"literature",wordCount:82,prevTextId:"pride-prejudice-2",bookSeries:"Pride and Prejudice",chapterNumber:3,content:"Not all that Mrs. Bennet, however, with the assistance of her five daughters, could ask on the subject, was sufficient to draw from her husband any satisfactory description of Mr. Bingley. They attacked him in various ways—with barefaced questions, ingenious suppositions, and distant surmises; but he eluded the skill of them all, and they were at last obliged to accept the second-hand intelligence of their neighbour, Lady Lucas."},{id:"gatsby-1",title:"The Great Gatsby - Chapter 1",author:"F. Scott Fitzgerald",difficulty:P.Beginner,requiredLevel:1,category:"literature",wordCount:62,nextTextId:"gatsby-2",bookSeries:"The Great Gatsby",chapterNumber:1,content:'In my younger and more vulnerable years my father gave me some advice that I have been turning over in my mind ever since. "Whenever you feel like criticizing anyone," he told me, "just remember that all the people in this world have not had the advantages that you have had."'},{id:"gatsby-2",title:"The Great Gatsby - Chapter 2",author:"F. Scott Fitzgerald",difficulty:P.Easy,requiredLevel:1,category:"literature",wordCount:75,prevTextId:"gatsby-1",bookSeries:"The Great Gatsby",chapterNumber:2,content:"I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth. And, after boasting this way of my tolerance, I come to the admission that it has a limit. Conduct may be founded on the hard rock or the wet marshes, but after a certain point I do not care what it is founded on."},{id:"alice-1",title:"Alice in Wonderland - Chapter 1",author:"Lewis Carroll",difficulty:P.Easy,requiredLevel:1,category:"literature",wordCount:78,nextTextId:"alice-2",bookSeries:"Alice in Wonderland",chapterNumber:1,content:'Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book," thought Alice "without pictures or conversations?"'},{id:"alice-2",title:"Alice in Wonderland - Chapter 2",author:"Lewis Carroll",difficulty:P.Easy,requiredLevel:1,category:"literature",wordCount:89,prevTextId:"alice-1",bookSeries:"Alice in Wonderland",chapterNumber:2,content:'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, "Oh dear! Oh dear! I shall be late!"'},{id:"sherlock-1",title:"A Scandal in Bohemia",author:"Arthur Conan Doyle",difficulty:P.Easy,requiredLevel:2,category:"literature",wordCount:85,content:"To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind."},{id:"tale-two-cities-1",title:"A Tale of Two Cities - Opening",author:"Charles Dickens",difficulty:P.Medium,requiredLevel:2,category:"literature",wordCount:58,content:"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness."},{id:"moby-dick-1",title:"Moby Dick - Call Me Ishmael",author:"Herman Melville",difficulty:P.Medium,requiredLevel:3,category:"literature",wordCount:92,content:"Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation."},{id:"frankenstein-1",title:"Frankenstein - Arctic Letters",author:"Mary Shelley",difficulty:P.Medium,requiredLevel:3,category:"literature",wordCount:96,content:"You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking. I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks."},{id:"jekyll-hyde-1",title:"Dr. Jekyll and Mr. Hyde",author:"Robert Louis Stevenson",difficulty:P.Hard,requiredLevel:4,category:"literature",wordCount:103,content:"Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable. At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face."},{id:"wuthering-heights-1",title:"Wuthering Heights - Opening",author:"Emily Brontë",difficulty:P.Hard,requiredLevel:4,category:"literature",wordCount:112,content:"I have just returned from a visit to my landlord - the solitary neighbour that I shall be troubled with. This is certainly a beautiful country! In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society. A perfect misanthropist's heaven: and Mr. Heathcliff and I are such a suitable pair to divide the desolation between us. A capital fellow! He little imagined how my heart warmed towards him when I beheld his black eyes withdraw so suspiciously under their brows."},{id:"dracula-1",title:"Dracula - Jonathan's Journal",author:"Bram Stoker",difficulty:P.Expert,requiredLevel:5,category:"literature",wordCount:128,content:"Left Munich at 8:35 P.M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible. The impression I had was that we were leaving the West and entering the East; the most western of splendid bridges over the Danube, which is here of noble width and depth, took us among the traditions of Turkish rule."},{id:"picture-dorian-gray-1",title:"The Picture of Dorian Gray - Preface",author:"Oscar Wilde",difficulty:P.Expert,requiredLevel:5,category:"literature",wordCount:118,content:"The artist is the creator of beautiful things. To reveal art and conceal the artist is art's aim. The critic is he who can translate into another manner or a new material his impression of beautiful things. The highest as the lowest form of criticism is a mode of autobiography. Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only beauty."},{id:"metamorphosis-1",title:"The Metamorphosis - Opening",author:"Franz Kafka",difficulty:P.Expert,requiredLevel:6,category:"literature",wordCount:95,content:"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes."}],Gr=[{id:"gauntlet-1-home-left",title:"Gauntlet 1 · Left Home Row",author:"dr.type training",difficulty:P.Beginner,requiredLevel:1,category:"training",wordCount:18,content:"Sasha and dad safeguard a small café, sanding old glass frames as soft jazz drifts across faded sofas.",nextTextId:"gauntlet-2-home-right",fingerNote:"Left pinky on A, ring on S, middle on D, index on F/G. Keep your wrist level and tap from the knuckles."},{id:"gauntlet-2-home-right",title:"Gauntlet 2 · Right Home Row",author:"dr.type training",difficulty:P.Beginner,requiredLevel:1,category:"training",wordCount:21,content:"Jill jokes with kind locals while Lila, a loyal clerk, juggles jam jars; later Jake locks the gallery and keeps watch.",prevTextId:"gauntlet-1-home-left",nextTextId:"gauntlet-3-home-rolls",fingerNote:"Right index owns J, middle K, ring L, pinky ;/. Stay light on the keys and return to home row after each reach."},{id:"gauntlet-3-home-rolls",title:"Gauntlet 3 · Home Row Rolls",author:"dr.type training",difficulty:P.Easy,requiredLevel:1,category:"training",wordCount:19,content:"Families share fresh bread as friendly dogs follow kids along shaded fields, reminding everyone to stay relaxed and grounded.",prevTextId:"gauntlet-2-home-right",nextTextId:"gauntlet-4-top-reach",fingerNote:"Focus on smooth rolls from pinky to index on each hand. Let both thumbs rest lightly on the space bar."},{id:"gauntlet-4-top-reach",title:"Gauntlet 4 · Top Row Reach",author:"dr.type training",difficulty:P.Medium,requiredLevel:2,category:"training",wordCount:19,content:"Quick writers often review their work to ensure every quote rings true while young readers trade quiet reviews online.",prevTextId:"gauntlet-3-home-rolls",nextTextId:"gauntlet-5-bottom-reach",fingerNote:"Reach up from the home row: left hand hits QWER, right hand hits YUIOP. Lift only the needed finger."},{id:"gauntlet-5-bottom-reach",title:"Gauntlet 5 · Bottom Row Reach",author:"dr.type training",difficulty:P.Medium,requiredLevel:2,category:"training",wordCount:19,content:"Zany bakers mix cocoa with banana muffins, cozying up by the campfire as brave monks meditate beneath moonlit cabins.",prevTextId:"gauntlet-4-top-reach",nextTextId:"gauntlet-6-precision-words",fingerNote:"Dip from the home row: left hand covers ZXCV, right hand covers BNM and punctuation. Keep movements shallow and precise."},{id:"gauntlet-6-precision-words",title:"Gauntlet 6 · Precision Words",author:"dr.type training",difficulty:P.Medium,requiredLevel:3,category:"training",wordCount:19,content:"Flask makers craft savory soups, joking about grand lakes while nimble monks note hidden sanding tricks and fixing jams.",prevTextId:"gauntlet-5-bottom-reach",nextTextId:"gauntlet-7-alphabet-sweep",fingerNote:"Use the proper finger for each letter and keep your eyes off the keyboard. Say the finger aloud if it helps."},{id:"gauntlet-7-alphabet-sweep",title:"Gauntlet 7 · Alphabet Sweep",author:"dr.type training",difficulty:P.Medium,requiredLevel:3,category:"training",wordCount:22,content:"Pack my box with five dozen liquor jugs, yet keep quirky wizards nearby so bold nymphs can juggle foxes during hazy vows.",prevTextId:"gauntlet-6-precision-words",nextTextId:"gauntlet-8-rare-rolls",fingerNote:"Glide through every letter using pangrams. Keep both hands anchored on home row and reach only with the assigned finger for each column."},{id:"gauntlet-8-rare-rolls",title:"Gauntlet 8 · Rare Letter Rolls",author:"dr.type training",difficulty:P.Hard,requiredLevel:4,category:"training",wordCount:19,content:"Jazzy explorers quiz xenial locals about buzzing bazaars while quirky jockeys flex oxblood jackets to jazz up the plaza.",prevTextId:"gauntlet-7-alphabet-sweep",nextTextId:"gauntlet-9-number-row-flow",fingerNote:"Target the tricky letters (q, x, z, j). Lean on the correct finger and return to home row instantly after each reach."},{id:"gauntlet-9-number-row-flow",title:"Gauntlet 9 · Number Row Flow",author:"dr.type training",difficulty:P.Hard,requiredLevel:4,category:"training",wordCount:22,content:"Flight 47 departs gate 3 at 6:45, while train 192 rolls into platform 8 and bus 23 swings by ten minutes later.",prevTextId:"gauntlet-8-rare-rolls",nextTextId:"gauntlet-10-number-symbol-duo",fingerNote:"Numbers share the same fingers as the keys beneath them. Lift from home row, tap the digit (or colon), and drop straight back."},{id:"gauntlet-10-number-symbol-duo",title:"Gauntlet 10 · Number + Symbol Duo",author:"dr.type training",difficulty:P.Hard,requiredLevel:5,category:"training",wordCount:24,content:"Invoice #204 totals $48.90 after a 15% fee, yet promo code SAVE20-! drops it to $42.00 when paid via @pay portal & signed receipt.",prevTextId:"gauntlet-9-number-row-flow",nextTextId:"gauntlet-11-alphanumeric-fusion",fingerNote:"Pair each digit with its shifted symbol. Use the opposite-hand pinky for Shift so the digit finger can stay precise."},{id:"gauntlet-11-alphanumeric-fusion",title:"Gauntlet 11 · Alphanumeric Fusion",author:"dr.type training",difficulty:P.Expert,requiredLevel:5,category:"training",wordCount:21,content:"Deploy build v3.14 to pod alpha-09, then ping service id api-7g and confirm hash a1b2c3 before logging ticket QX-88 for review.",prevTextId:"gauntlet-10-number-symbol-duo",fingerNote:"Mix letters and digits without breaking rhythm. Read ahead so you know when to reach up for numbers or down for rare letters."}];class Kr{constructor(){this.PROGRESS_KEY="drtype_user_progress",this.CUSTOM_TEXTS_KEY="drtype_custom_texts",this.READING_LIBRARY_KEY="drtype_reading_library"}getUserProgress(){try{const t=localStorage.getItem(this.PROGRESS_KEY);if(!t)return null;const e=JSON.parse(t);return{...e,createdAt:new Date(e.createdAt),lastUpdated:new Date(e.lastUpdated),sessions:e.sessions.map(s=>({...s,completedAt:new Date(s.completedAt)})),stats:{...e.stats,commonErrors:new Map(Object.entries(e.stats.commonErrors||{}))}}}catch(t){return console.error("Error loading user progress:",t),null}}saveUserProgress(t){try{const e={...t,stats:{...t.stats,commonErrors:Object.fromEntries(t.stats.commonErrors)}};localStorage.setItem(this.PROGRESS_KEY,JSON.stringify(e))}catch(e){console.error("Error saving user progress:",e)}}initializeUserProgress(){const t={level:1,unlockedTexts:[],sessions:[],stats:{totalSessions:0,averageWpm:0,averageAccuracy:0,bestWpm:0,totalWordsTyped:0,totalTimeSeconds:0,commonErrors:new Map},createdAt:new Date,lastUpdated:new Date};return this.saveUserProgress(t),t}addSession(t){const e=this.getUserProgress();e&&(e.sessions.push(t),e.lastUpdated=new Date,this.updateStats(e,t),this.saveUserProgress(e))}updateStats(t,e){const s=t.stats;s.totalSessions++,s.totalWordsTyped+=Math.floor(e.wpm*(e.duration/60)),s.totalTimeSeconds+=e.duration;const n=t.sessions.reduce((r,a)=>r+a.wpm,0),o=t.sessions.reduce((r,a)=>r+a.accuracy,0);s.averageWpm=n/s.totalSessions,s.averageAccuracy=o/s.totalSessions,s.bestWpm=Math.max(s.bestWpm,e.wpm),e.errors.forEach(r=>{const a=r.expected;s.commonErrors.set(a,(s.commonErrors.get(a)||0)+1)})}updateLevelProgress(t,e){const s=this.getUserProgress();s&&(s.level=t,s.unlockedTexts=e,s.lastUpdated=new Date,this.saveUserProgress(s))}getCustomTexts(){try{const t=localStorage.getItem(this.CUSTOM_TEXTS_KEY);return t?JSON.parse(t):[]}catch(t){return console.error("Error loading custom texts:",t),[]}}saveCustomText(t){try{const e=this.getCustomTexts();e.push(t),localStorage.setItem(this.CUSTOM_TEXTS_KEY,JSON.stringify(e))}catch(e){console.error("Error saving custom text:",e)}}deleteCustomText(t){try{const e=this.getCustomTexts().filter(s=>s.id!==t);localStorage.setItem(this.CUSTOM_TEXTS_KEY,JSON.stringify(e))}catch(e){console.error("Error deleting custom text:",e)}}clearAllData(){localStorage.removeItem(this.PROGRESS_KEY),localStorage.removeItem(this.CUSTOM_TEXTS_KEY)}exportData(){const t=this.getUserProgress(),e=this.getCustomTexts();return JSON.stringify({progress:t,customTexts:e,exportedAt:new Date().toISOString()},null,2)}importData(t){try{const e=JSON.parse(t);if(e.progress){const s={...e.progress,createdAt:new Date(e.progress.createdAt),lastUpdated:new Date(e.progress.lastUpdated),sessions:e.progress.sessions.map(n=>({...n,completedAt:new Date(n.completedAt)}))};this.saveUserProgress(s)}return e.customTexts&&localStorage.setItem(this.CUSTOM_TEXTS_KEY,JSON.stringify(e.customTexts)),!0}catch(e){return console.error("Error importing data:",e),!1}}getReadingLibrary(){try{const t=localStorage.getItem(this.READING_LIBRARY_KEY);if(!t)return{activeBookId:null,books:{}};const e=JSON.parse(t);return{activeBookId:e.activeBookId??null,books:e.books??{}}}catch(t){return console.error("Error loading reading library:",t),{activeBookId:null,books:{}}}}saveReadingLibrary(t){try{localStorage.setItem(this.READING_LIBRARY_KEY,JSON.stringify(t))}catch(e){console.error("Error saving reading library:",e)}}getReadingBook(t){return this.getReadingLibrary().books[t]??null}saveReadingBook(t){const e=this.getReadingLibrary();return e.books[t.id]=t,e.activeBookId||(e.activeBookId=t.id),this.saveReadingLibrary(e),e}deleteReadingBook(t){const e=this.getReadingLibrary();return delete e.books[t],e.activeBookId===t&&(e.activeBookId=Object.keys(e.books)[0]??null),this.saveReadingLibrary(e),e}setActiveReadingBook(t){const e=this.getReadingLibrary();if(t&&!e.books[t]){console.warn("Attempted to set unknown reading book as active");return}e.activeBookId=t,this.saveReadingLibrary(e)}getActiveReadingBook(){const t=this.getReadingLibrary();return t.activeBookId?t.books[t.activeBookId]??null:null}}const R=new Kr;class Jr{constructor(){this.allTexts=new Map,this.loadTexts()}loadTexts(){Xr.forEach(e=>{this.allTexts.set(e.id,e)}),Gr.forEach(e=>{this.allTexts.set(e.id,e)}),R.getCustomTexts().forEach(e=>{this.allTexts.set(e.id,e)})}getAllTexts(){return Array.from(this.allTexts.values())}getTextById(t){return this.allTexts.get(t)}getTextsByDifficulty(t){return this.getAllTexts().filter(e=>e.difficulty===t)}getTextsByRequiredLevel(t){return this.getAllTexts().filter(e=>e.requiredLevel===t)}getUnlockedTexts(t){return t.map(e=>this.allTexts.get(e)).filter(e=>e!==void 0)}getLockedTexts(t){const e=new Set(t);return this.getAllTexts().filter(s=>!e.has(s.id))}addCustomText(t,e,s,n=P.Medium){const o=`custom-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,r=e.trim().split(/\s+/).length,a={id:o,title:t,author:s,content:e.trim(),difficulty:n,requiredLevel:1,category:"custom",wordCount:r};return R.saveCustomText(a),this.allTexts.set(o,a),a}deleteCustomText(t){const e=this.allTexts.get(t);return!e||e.category!=="custom"?!1:(R.deleteCustomText(t),this.allTexts.delete(t),!0)}getCustomTexts(){return this.getAllTexts().filter(t=>t.category==="custom")}getLiteratureTexts(){return this.getAllTexts().filter(t=>t.category==="literature")}parseTextFile(t){const e=t.trim(),s=e.split(/\s+/).length;return{content:e,wordCount:s}}suggestDifficulty(t){const e=t.split(/\s+/).length,s=t.split(/\s+/).reduce((n,o)=>n+o.length,0)/e;return e<60&&s<5?P.Beginner:e<80&&s<6?P.Easy:e<100&&s<7?P.Medium:e<120?P.Hard:P.Expert}reload(){this.allTexts.clear(),this.loadTexts()}}const De=new Jr;class Zr{constructor(){this.levelConfigs=[{level:1,requiredCompletedTexts:0,unlocksTexts:["pride-prejudice-1","gatsby-1","alice-1"],title:"Novice Typist",description:"Start your typing journey with beginner-friendly classics"},{level:2,requiredCompletedTexts:2,unlocksTexts:["sherlock-1","tale-two-cities-1"],title:"Apprentice Typist",description:"Unlock slightly more challenging texts"},{level:3,requiredCompletedTexts:4,unlocksTexts:["moby-dick-1","frankenstein-1"],title:"Skilled Typist",description:"Progress to medium difficulty literature"},{level:4,requiredCompletedTexts:6,unlocksTexts:["jekyll-hyde-1","wuthering-heights-1"],title:"Expert Typist",description:"Master harder texts with complex vocabulary"},{level:5,requiredCompletedTexts:8,unlocksTexts:["dracula-1","picture-dorian-gray-1"],title:"Master Typist",description:"Challenge yourself with expert-level passages"},{level:6,requiredCompletedTexts:10,unlocksTexts:["metamorphosis-1"],title:"Grandmaster Typist",description:"You've achieved the highest level of typing mastery!"}]}getLevelConfigs(){return this.levelConfigs}getLevelConfig(t){return this.levelConfigs.find(e=>e.level===t)}calculateLevel(t){const e=t.size;for(let s=this.levelConfigs.length-1;s>=0;s--)if(e>=this.levelConfigs[s].requiredCompletedTexts)return this.levelConfigs[s].level;return 1}getUnlockedTextIds(t){const e=[];for(const o of this.levelConfigs)o.level<=t&&e.push(...o.unlocksTexts);const s=De.getCustomTexts();e.push(...s.map(o=>o.id));const n=De.getAllTexts().filter(o=>o.category==="training");return e.push(...n.map(o=>o.id)),Array.from(new Set(e))}isTextUnlocked(t,e){return this.getUnlockedTextIds(e).includes(t)}updateProgress(t){if(t.mode==="reading")return!1;const e=R.getUserProgress();if(!e)return!1;const s=new Set(e.sessions.filter(a=>a.mode!=="reading").map(a=>a.textId));s.add(t.textId);const n=e.level,o=this.calculateLevel(s),r=o>n;if(r){const a=this.getUnlockedTextIds(o);R.updateLevelProgress(o,a)}return r}getProgressToNextLevel(t){const e=t.level,n=new Set(t.sessions.filter(l=>l.mode!=="reading").map(l=>l.textId)).size,o=this.levelConfigs.find(l=>l.level===e+1);if(!o)return{currentLevel:e,nextLevel:null,completedTexts:n,requiredTexts:n,percentage:100};const r=o.requiredCompletedTexts,a=Math.round(n/r*100);return{currentLevel:e,nextLevel:o.level,completedTexts:n,requiredTexts:r,percentage:Math.min(a,100)}}getNextLevelUnlocks(t){const e=this.levelConfigs.find(s=>s.level===t+1);return e?e.unlocksTexts:[]}initializeProgress(){R.initializeUserProgress();const t=this.getUnlockedTextIds(1);return R.updateLevelProgress(1,t),R.getUserProgress()}hasCompletedText(t,e){return e.some(s=>s.textId===t)}getBestSession(t,e){const s=e.filter(n=>n.textId===t);return s.length===0?null:s.reduce((n,o)=>o.wpm>n.wpm?o:n)}}const Ee=new Zr,Gi={serika:{name:"serika",bg:"#323437",mainColor:"#e2b714",subColor:"#646669",textColor:"#d1d0c5",errorColor:"#ca4754",errorExtraColor:"#7e2a33",colorfulErrorColor:"#ca4754",colorfulErrorExtraColor:"#7e2a33"},dark:{name:"dark",bg:"#2c2e31",mainColor:"#e2b714",subColor:"#646669",textColor:"#d1d0c5",errorColor:"#ca4754",errorExtraColor:"#7e2a33",colorfulErrorColor:"#ca4754",colorfulErrorExtraColor:"#7e2a33"},light:{name:"light",bg:"#f5f5f5",mainColor:"#e2b714",subColor:"#8c8c8c",textColor:"#323437",errorColor:"#ca4754",errorExtraColor:"#7e2a33",colorfulErrorColor:"#ca4754",colorfulErrorExtraColor:"#7e2a33"},Nord:{name:"nord",bg:"#2e3440",mainColor:"#88c0d0",subColor:"#4c566a",textColor:"#d8dee9",errorColor:"#bf616a",errorExtraColor:"#a02836",colorfulErrorColor:"#bf616a",colorfulErrorExtraColor:"#a02836"},dracula:{name:"dracula",bg:"#282a36",mainColor:"#bd93f9",subColor:"#6272a4",textColor:"#f8f8f2",errorColor:"#ff5555",errorExtraColor:"#a02836",colorfulErrorColor:"#ff5555",colorfulErrorExtraColor:"#a02836"},gruvbox:{name:"gruvbox",bg:"#282828",mainColor:"#fabd2f",subColor:"#504945",textColor:"#ebdbb2",errorColor:"#fb4934",errorExtraColor:"#cc241d",colorfulErrorColor:"#fb4934",colorfulErrorExtraColor:"#cc241d"},monokai:{name:"monokai",bg:"#272822",mainColor:"#e6db74",subColor:"#75715e",textColor:"#f8f8f2",errorColor:"#f92672",errorExtraColor:"#a02836",colorfulErrorColor:"#f92672",colorfulErrorExtraColor:"#a02836"}},wo="serika";function ko(i){const t=Gi[i]||Gi[wo],e=document.documentElement;e.style.setProperty("--bg-color",t.bg),e.style.setProperty("--main-color",t.mainColor),e.style.setProperty("--sub-color",t.subColor),e.style.setProperty("--text-color",t.textColor),e.style.setProperty("--error-color",t.errorColor),e.style.setProperty("--error-extra-color",t.errorExtraColor),localStorage.setItem("drtype_theme",i)}function So(){const i=localStorage.getItem("drtype_theme")||wo;return ko(i),i}class Wt{static calculateWPM(t,e,s=0){if(e===0)return 0;const n=e/60,o=t/5/n,r=Math.max(0,o-s/n);return Math.round(r)}static calculateRawWPM(t,e){if(e===0)return 0;const s=e/60,n=t/5/s;return Math.round(n)}static calculateAccuracy(t,e){if(t===0)return 100;const s=(t-e)/t*100;return Math.round(s*100)/100}static calculateLiveWPM(t,e,s){const o=(Date.now()-e)/1e3;return this.calculateWPM(t,o,s.length)}static calculateLiveAccuracy(t,e){return t===0?100:this.calculateAccuracy(t,e.length)}static analyzeErrors(t){const e=new Map;return t.forEach(s=>{const n=s.expected;e.set(n,(e.get(n)||0)+1)}),e}static getTopErrors(t,e=5){const s=this.analyzeErrors(t);return Array.from(s.entries()).map(([o,r])=>({char:o,count:r,percentage:Math.round(r/t.length*100)})).sort((o,r)=>r.count-o.count).slice(0,e)}static calculateConsistency(t){if(t.length<2)return 100;const e=[];for(let a=1;a<t.length;a++)e.push(t[a].timestamp-t[a-1].timestamp);const s=e.reduce((a,l)=>a+l,0)/e.length,n=e.reduce((a,l)=>a+Math.pow(l-s,2),0)/e.length,r=Math.sqrt(n)/s*100;return Math.round(100-Math.min(r,100))}static calculateGrade(t,e){return e>=98&&t>=80?{grade:"S",color:"#FFD700"}:e>=96&&t>=60?{grade:"A",color:"#00D084"}:e>=94&&t>=40?{grade:"B",color:"#4A9EFF"}:e>=90&&t>=25?{grade:"C",color:"#FFA500"}:{grade:"D",color:"#FF4444"}}static formatDuration(t){const e=Math.floor(t/60),s=Math.floor(t%60);return`${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}static estimateCompletionTime(t,e,s){if(t===0)return 0;const n=t/s,r=(e-t)/n;return Math.round(r)}}function Xe(i){return i+.5|0}const Tt=(i,t,e)=>Math.max(Math.min(i,e),t);function Ce(i){return Tt(Xe(i*2.55),0,255)}function Et(i){return Tt(Xe(i*255),0,255)}function vt(i){return Tt(Xe(i/2.55)/100,0,1)}function js(i){return Tt(Xe(i*100),0,100)}const ct={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ki=[..."0123456789ABCDEF"],Qr=i=>Ki[i&15],ta=i=>Ki[(i&240)>>4]+Ki[i&15],Je=i=>(i&240)>>4===(i&15),ea=i=>Je(i.r)&&Je(i.g)&&Je(i.b)&&Je(i.a);function ia(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&ct[i[1]]*17,g:255&ct[i[2]]*17,b:255&ct[i[3]]*17,a:t===5?ct[i[4]]*17:255}:(t===7||t===9)&&(e={r:ct[i[1]]<<4|ct[i[2]],g:ct[i[3]]<<4|ct[i[4]],b:ct[i[5]]<<4|ct[i[6]],a:t===9?ct[i[7]]<<4|ct[i[8]]:255})),e}const sa=(i,t)=>i<255?t(i):"";function na(i){var t=ea(i)?Qr:ta;return i?"#"+t(i.r)+t(i.g)+t(i.b)+sa(i.a,t):void 0}const oa=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Co(i,t,e){const s=t*Math.min(e,1-e),n=(o,r=(o+i/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function ra(i,t,e){const s=(n,o=(n+i/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[s(5),s(3),s(1)]}function aa(i,t,e){const s=Co(i,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function la(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function fs(i){const e=i.r/255,s=i.g/255,n=i.b/255,o=Math.max(e,s,n),r=Math.min(e,s,n),a=(o+r)/2;let l,c,h;return o!==r&&(h=o-r,c=a>.5?h/(2-o-r):h/(o+r),l=la(e,s,n,h,o),l=l*60+.5),[l|0,c||0,a]}function gs(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map(Et)}function ps(i,t,e){return gs(Co,i,t,e)}function ca(i,t,e){return gs(aa,i,t,e)}function ha(i,t,e){return gs(ra,i,t,e)}function Mo(i){return(i%360+360)%360}function da(i){const t=oa.exec(i);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Ce(+t[5]):Et(+t[5]));const n=Mo(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=ca(n,o,r):t[1]==="hsv"?s=ha(n,o,r):s=ps(n,o,r),{r:s[0],g:s[1],b:s[2],a:e}}function ua(i,t){var e=fs(i);e[0]=Mo(e[0]+t),e=ps(e),i.r=e[0],i.g=e[1],i.b=e[2]}function fa(i){if(!i)return;const t=fs(i),e=t[0],s=js(t[1]),n=js(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${vt(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}const Hs={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Vs={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function ga(){const i={},t=Object.keys(Vs),e=Object.keys(Hs);let s,n,o,r,a;for(s=0;s<t.length;s++){for(r=a=t[s],n=0;n<e.length;n++)o=e[n],a=a.replace(o,Hs[o]);o=parseInt(Vs[r],16),i[a]=[o>>16&255,o>>8&255,o&255]}return i}let Ze;function pa(i){Ze||(Ze=ga(),Ze.transparent=[0,0,0,0]);const t=Ze[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const ma=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ba(i){const t=ma.exec(i);let e=255,s,n,o;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?Ce(r):Tt(r*255,0,255)}return s=+t[1],n=+t[3],o=+t[5],s=255&(t[2]?Ce(s):Tt(s,0,255)),n=255&(t[4]?Ce(n):Tt(n,0,255)),o=255&(t[6]?Ce(o):Tt(o,0,255)),{r:s,g:n,b:o,a:e}}}function xa(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${vt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Ii=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,se=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function ya(i,t,e){const s=se(vt(i.r)),n=se(vt(i.g)),o=se(vt(i.b));return{r:Et(Ii(s+e*(se(vt(t.r))-s))),g:Et(Ii(n+e*(se(vt(t.g))-n))),b:Et(Ii(o+e*(se(vt(t.b))-o))),a:i.a+e*(t.a-i.a)}}function Qe(i,t,e){if(i){let s=fs(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=ps(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function To(i,t){return i&&Object.assign(t||{},i)}function Us(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=Et(i[3]))):(t=To(i,{r:0,g:0,b:0,a:1}),t.a=Et(t.a)),t}function va(i){return i.charAt(0)==="r"?ba(i):da(i)}class Fe{constructor(t){if(t instanceof Fe)return t;const e=typeof t;let s;e==="object"?s=Us(t):e==="string"&&(s=ia(t)||pa(t)||va(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=To(this._rgb);return t&&(t.a=vt(t.a)),t}set rgb(t){this._rgb=Us(t)}rgbString(){return this._valid?xa(this._rgb):void 0}hexString(){return this._valid?na(this._rgb):void 0}hslString(){return this._valid?fa(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,n=t.rgb;let o;const r=e===o?.5:e,a=2*r-1,l=s.a-n.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,s.r=255&c*s.r+o*n.r+.5,s.g=255&c*s.g+o*n.g+.5,s.b=255&c*s.b+o*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=ya(this._rgb,t._rgb,e)),this}clone(){return new Fe(this.rgb)}alpha(t){return this._rgb.a=Et(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Xe(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Qe(this._rgb,2,t),this}darken(t){return Qe(this._rgb,2,-t),this}saturate(t){return Qe(this._rgb,1,t),this}desaturate(t){return Qe(this._rgb,1,-t),this}rotate(t){return ua(this._rgb,t),this}}function bt(){}const _a=(()=>{let i=0;return()=>i++})();function E(i){return i==null}function j(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function O(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function V(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function lt(i,t){return V(i)?i:t}function T(i,t){return typeof i>"u"?t:i}const wa=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,Po=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function F(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function B(i,t,e,s){let n,o,r;if(j(i))for(o=i.length,n=0;n<o;n++)t.call(e,i[n],n);else if(O(i))for(r=Object.keys(i),o=r.length,n=0;n<o;n++)t.call(e,i[r[n]],r[n])}function pi(i,t){let e,s,n,o;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],o=t[e],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function mi(i){if(j(i))return i.map(mi);if(O(i)){const t=Object.create(null),e=Object.keys(i),s=e.length;let n=0;for(;n<s;++n)t[e[n]]=mi(i[e[n]]);return t}return i}function Ao(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function ka(i,t,e,s){if(!Ao(i))return;const n=t[i],o=e[i];O(n)&&O(o)?Ne(n,o,s):t[i]=mi(o)}function Ne(i,t,e){const s=j(t)?t:[t],n=s.length;if(!O(i))return i;e=e||{};const o=e.merger||ka;let r;for(let a=0;a<n;++a){if(r=s[a],!O(r))continue;const l=Object.keys(r);for(let c=0,h=l.length;c<h;++c)o(l[c],i,r,e)}return i}function Oe(i,t){return Ne(i,t,{merger:Sa})}function Sa(i,t,e){if(!Ao(i))return;const s=t[i],n=e[i];O(s)&&O(n)?Oe(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=mi(n))}const Ys={"":i=>i,x:i=>i.x,y:i=>i.y};function Ca(i){const t=i.split("."),e=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function Ma(i){const t=Ca(i);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Ot(i,t){return(Ys[t]||(Ys[t]=Ma(t)))(i)}function ms(i){return i.charAt(0).toUpperCase()+i.slice(1)}const We=i=>typeof i<"u",Lt=i=>typeof i=="function",qs=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function Ta(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const $=Math.PI,N=2*$,Pa=N+$,bi=Number.POSITIVE_INFINITY,Aa=$/180,Y=$/2,jt=$/4,Xs=$*2/3,Pt=Math.log10,mt=Math.sign;function Le(i,t,e){return Math.abs(i-t)<e}function Gs(i){const t=Math.round(i);i=Le(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(Pt(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Da(i){const t=[],e=Math.sqrt(i);let s;for(s=1;s<e;s++)i%s===0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,o)=>n-o).pop(),t}function Ea(i){return typeof i=="symbol"||typeof i=="object"&&i!==null&&!(Symbol.toPrimitive in i||"toString"in i||"valueOf"in i)}function ce(i){return!Ea(i)&&!isNaN(parseFloat(i))&&isFinite(i)}function Oa(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function Do(i,t,e){let s,n,o;for(s=0,n=i.length;s<n;s++)o=i[s][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function dt(i){return i*($/180)}function bs(i){return i*(180/$)}function Ks(i){if(!V(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function Eo(i,t){const e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);let o=Math.atan2(s,e);return o<-.5*$&&(o+=N),{angle:o,distance:n}}function Ji(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function La(i,t){return(i-t+Pa)%N-$}function tt(i){return(i%N+N)%N}function je(i,t,e,s){const n=tt(i),o=tt(t),r=tt(e),a=tt(o-n),l=tt(r-n),c=tt(n-o),h=tt(n-r);return n===o||n===r||s&&o===r||a>l&&c<h}function G(i,t,e){return Math.max(t,Math.min(e,i))}function $a(i){return G(i,-32768,32767)}function _t(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function xs(i,t,e){e=e||(r=>i[r]<t);let s=i.length-1,n=0,o;for(;s-n>1;)o=n+s>>1,e(o)?n=o:s=o;return{lo:n,hi:s}}const wt=(i,t,e,s)=>xs(i,e,s?n=>{const o=i[n][t];return o<e||o===e&&i[n+1][t]===e}:n=>i[n][t]<e),Ia=(i,t,e)=>xs(i,e,s=>i[s][t]>=e);function Ra(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}const Oo=["push","pop","shift","splice","unshift"];function Ba(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Oo.forEach(e=>{const s="_onData"+ms(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...o){const r=n.apply(this,o);return i._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...o)}),r}})})}function Js(i,t){const e=i._chartjs;if(!e)return;const s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(Oo.forEach(o=>{delete i[o]}),delete i._chartjs)}function Lo(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const $o=(function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame})();function Io(i,t){let e=[],s=!1;return function(...n){e=n,s||(s=!0,$o.call(window,()=>{s=!1,i.apply(t,e)}))}}function za(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}const ys=i=>i==="start"?"left":i==="end"?"right":"center",Q=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Fa=(i,t,e,s)=>i===(s?"left":"right")?e:i==="center"?(t+e)/2:t;function Ro(i,t,e){const s=t.length;let n=0,o=s;if(i._sorted){const{iScale:r,vScale:a,_parsed:l}=i,c=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null,h=r.axis,{min:d,max:u,minDefined:f,maxDefined:g}=r.getUserBounds();if(f){if(n=Math.min(wt(l,h,d).lo,e?s:wt(t,h,r.getPixelForValue(d)).lo),c){const p=l.slice(0,n+1).reverse().findIndex(m=>!E(m[a.axis]));n-=Math.max(0,p)}n=G(n,0,s-1)}if(g){let p=Math.max(wt(l,r.axis,u,!0).hi+1,e?0:wt(t,h,r.getPixelForValue(u),!0).hi+1);if(c){const m=l.slice(p-1).findIndex(b=>!E(b[a.axis]));p+=Math.max(0,m)}o=G(p,n,s)-n}else o=s-n}return{start:n,count:o}}function Bo(i){const{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;const o=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),o}const ti=i=>i===0||i===1,Zs=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*N/e)),Qs=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*N/e)+1,$e={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Y)+1,easeOutSine:i=>Math.sin(i*Y),easeInOutSine:i=>-.5*(Math.cos($*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>ti(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>ti(i)?i:Zs(i,.075,.3),easeOutElastic:i=>ti(i)?i:Qs(i,.075,.3),easeInOutElastic(i){return ti(i)?i:i<.5?.5*Zs(i*2,.1125,.45):.5+.5*Qs(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-$e.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?$e.easeInBounce(i*2)*.5:$e.easeOutBounce(i*2-1)*.5+.5};function vs(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function tn(i){return vs(i)?i:new Fe(i)}function Ri(i){return vs(i)?i:new Fe(i).saturate(.5).darken(.1).hexString()}const Na=["x","y","borderWidth","radius","tension"],Wa=["color","borderColor","backgroundColor"];function ja(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:Wa},numbers:{type:"number",properties:Na}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Ha(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const en=new Map;function Va(i,t){t=t||{};const e=i+JSON.stringify(t);let s=en.get(e);return s||(s=new Intl.NumberFormat(i,t),en.set(e,s)),s}function Ge(i,t,e){return Va(t,e).format(i)}const zo={values(i){return j(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const s=this.chart.options.locale;let n,o=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),o=Ua(i,e)}const r=Pt(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Ge(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";const s=e[t].significand||i/Math.pow(10,Math.floor(Pt(i)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?zo.numeric.call(this,i,t,e):""}};function Ua(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var Mi={formatters:zo};function Ya(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Mi.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Zt=Object.create(null),Zi=Object.create(null);function Ie(i,t){if(!t)return i;const e=t.split(".");for(let s=0,n=e.length;s<n;++s){const o=e[s];i=i[o]||(i[o]=Object.create(null))}return i}function Bi(i,t,e){return typeof t=="string"?Ne(Ie(i,t),e):Ne(Ie(i,""),t)}class qa{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Ri(n.backgroundColor),this.hoverBorderColor=(s,n)=>Ri(n.borderColor),this.hoverColor=(s,n)=>Ri(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Bi(this,t,e)}get(t){return Ie(this,t)}describe(t,e){return Bi(Zi,t,e)}override(t,e){return Bi(Zt,t,e)}route(t,e,s,n){const o=Ie(this,t),r=Ie(this,s),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=r[n];return O(l)?Object.assign({},c,l):T(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var H=new qa({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ja,Ha,Ya]);function Xa(i){return!i||E(i.size)||E(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function xi(i,t,e,s,n){let o=t[n];return o||(o=t[n]=i.measureText(n).width,e.push(n)),o>s&&(s=o),s}function Ga(i,t,e,s){s=s||{};let n=s.data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},o=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let r=0;const a=e.length;let l,c,h,d,u;for(l=0;l<a;l++)if(d=e[l],d!=null&&!j(d))r=xi(i,n,o,r,d);else if(j(d))for(c=0,h=d.length;c<h;c++)u=d[c],u!=null&&!j(u)&&(r=xi(i,n,o,r,u));i.restore();const f=o.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return r}function Ht(i,t,e){const s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function sn(i,t){!t&&!i||(t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore())}function Qi(i,t,e,s){Fo(i,t,e,s,null)}function Fo(i,t,e,s,n){let o,r,a,l,c,h,d,u;const f=t.pointStyle,g=t.rotation,p=t.radius;let m=(g||0)*Aa;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(m),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(p)||p<=0)){switch(i.beginPath(),f){default:n?i.ellipse(e,s,n/2,p,0,0,N):i.arc(e,s,p,0,N),i.closePath();break;case"triangle":h=n?n/2:p,i.moveTo(e+Math.sin(m)*h,s-Math.cos(m)*p),m+=Xs,i.lineTo(e+Math.sin(m)*h,s-Math.cos(m)*p),m+=Xs,i.lineTo(e+Math.sin(m)*h,s-Math.cos(m)*p),i.closePath();break;case"rectRounded":c=p*.516,l=p-c,r=Math.cos(m+jt)*l,d=Math.cos(m+jt)*(n?n/2-c:l),a=Math.sin(m+jt)*l,u=Math.sin(m+jt)*(n?n/2-c:l),i.arc(e-d,s-a,c,m-$,m-Y),i.arc(e+u,s-r,c,m-Y,m),i.arc(e+d,s+a,c,m,m+Y),i.arc(e-u,s+r,c,m+Y,m+$),i.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*p,h=n?n/2:l,i.rect(e-h,s-l,2*h,2*l);break}m+=jt;case"rectRot":d=Math.cos(m)*(n?n/2:p),r=Math.cos(m)*p,a=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),i.moveTo(e-d,s-a),i.lineTo(e+u,s-r),i.lineTo(e+d,s+a),i.lineTo(e-u,s+r),i.closePath();break;case"crossRot":m+=jt;case"cross":d=Math.cos(m)*(n?n/2:p),r=Math.cos(m)*p,a=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"star":d=Math.cos(m)*(n?n/2:p),r=Math.cos(m)*p,a=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r),m+=jt,d=Math.cos(m)*(n?n/2:p),r=Math.cos(m)*p,a=Math.sin(m)*p,u=Math.sin(m)*(n?n/2:p),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"line":r=n?n/2:Math.cos(m)*p,a=Math.sin(m)*p,i.moveTo(e-r,s-a),i.lineTo(e+r,s+a);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(m)*(n?n/2:p),s+Math.sin(m)*p);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function kt(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function Ti(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function Pi(i){i.restore()}function Ka(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){const o=(t.x+e.x)/2;i.lineTo(o,t.y),i.lineTo(o,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function Ja(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function Za(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),E(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function Qa(i,t,e,s,n){if(n.strikethrough||n.underline){const o=i.measureText(s),r=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,c=e+o.actualBoundingBoxDescent,h=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(r,h),i.lineTo(a,h),i.stroke()}}function tl(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function Qt(i,t,e,s,n,o={}){const r=j(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(i.save(),i.font=n.string,Za(i,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&tl(i,o.backdrop),a&&(o.strokeColor&&(i.strokeStyle=o.strokeColor),E(o.strokeWidth)||(i.lineWidth=o.strokeWidth),i.strokeText(c,e,s,o.maxWidth)),i.fillText(c,e,s,o.maxWidth),Qa(i,e,s,c,o),s+=Number(n.lineHeight);i.restore()}function He(i,t){const{x:e,y:s,w:n,h:o,radius:r}=t;i.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*$,$,!0),i.lineTo(e,s+o-r.bottomLeft),i.arc(e+r.bottomLeft,s+o-r.bottomLeft,r.bottomLeft,$,Y,!0),i.lineTo(e+n-r.bottomRight,s+o),i.arc(e+n-r.bottomRight,s+o-r.bottomRight,r.bottomRight,Y,0,!0),i.lineTo(e+n,s+r.topRight),i.arc(e+n-r.topRight,s+r.topRight,r.topRight,0,-Y,!0),i.lineTo(e+r.topLeft,s)}const el=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,il=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function sl(i,t){const e=(""+i).match(el);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const nl=i=>+i||0;function _s(i,t){const e={},s=O(t),n=s?Object.keys(t):t,o=O(i)?s?r=>T(i[r],i[t[r]]):r=>i[r]:()=>i;for(const r of n)e[r]=nl(o(r));return e}function No(i){return _s(i,{top:"y",right:"x",bottom:"y",left:"x"})}function Gt(i){return _s(i,["topLeft","topRight","bottomLeft","bottomRight"])}function it(i){const t=No(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function q(i,t){i=i||{},t=t||H.font;let e=T(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=T(i.style,t.style);s&&!(""+s).match(il)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:T(i.family,t.family),lineHeight:sl(T(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:T(i.weight,t.weight),string:""};return n.string=Xa(n),n}function Me(i,t,e,s){let n,o,r;for(n=0,o=i.length;n<o;++n)if(r=i[n],r!==void 0&&r!==void 0)return r}function ol(i,t,e){const{min:s,max:n}=i,o=Po(t,(n-s)/2),r=(a,l)=>e&&a===0?0:a+l;return{min:r(s,-Math.abs(o)),max:r(n,o)}}function Rt(i,t){return Object.assign(Object.create(i),t)}function ws(i,t=[""],e,s,n=()=>i[0]){const o=e||i;typeof s>"u"&&(s=Vo("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:o,_fallback:s,_getTarget:n,override:a=>ws([a,...i],t,o,s)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return jo(a,l,()=>fl(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return on(a).includes(l)},ownKeys(a){return on(a)},set(a,l,c){const h=a._storage||(a._storage=n());return a[l]=h[l]=c,delete a._keys,!0}})}function he(i,t,e,s){const n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:Wo(i,s),setContext:o=>he(i,o,e,s),override:o=>he(i.override(o),t,e,s)};return new Proxy(n,{deleteProperty(o,r){return delete o[r],delete i[r],!0},get(o,r,a){return jo(o,r,()=>al(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(o,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(o,r,a){return i[r]=a,delete o[r],!0}})}function Wo(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:Lt(e)?e:()=>e,isIndexable:Lt(s)?s:()=>s}}const rl=(i,t)=>i?i+ms(t):t,ks=(i,t)=>O(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function jo(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t)||t==="constructor")return i[t];const s=e();return i[t]=s,s}function al(i,t,e){const{_proxy:s,_context:n,_subProxy:o,_descriptors:r}=i;let a=s[t];return Lt(a)&&r.isScriptable(t)&&(a=ll(t,a,i,e)),j(a)&&a.length&&(a=cl(t,a,i,r.isIndexable)),ks(t,a)&&(a=he(a,n,o&&o[t],r)),a}function ll(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(o,r||s);return a.delete(i),ks(i,l)&&(l=Ss(n._scopes,n,i,l)),l}function cl(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_descriptors:a}=e;if(typeof o.index<"u"&&s(i))return t[o.index%t.length];if(O(t[0])){const l=t,c=n._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Ss(c,n,i,h);t.push(he(d,o,r&&r[i],a))}}return t}function Ho(i,t,e){return Lt(i)?i(t,e):i}const hl=(i,t)=>i===!0?t:typeof i=="string"?Ot(t,i):void 0;function dl(i,t,e,s,n){for(const o of t){const r=hl(e,o);if(r){i.add(r);const a=Ho(r._fallback,e,n);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function Ss(i,t,e,s){const n=t._rootScopes,o=Ho(t._fallback,e,s),r=[...i,...n],a=new Set;a.add(s);let l=nn(a,r,e,o||e,s);return l===null||typeof o<"u"&&o!==e&&(l=nn(a,r,o,l,s),l===null)?!1:ws(Array.from(a),[""],n,o,()=>ul(t,e,s))}function nn(i,t,e,s,n){for(;e;)e=dl(i,t,e,s,n);return e}function ul(i,t,e){const s=i._getTarget();t in s||(s[t]={});const n=s[t];return j(n)&&O(e)?e:n||{}}function fl(i,t,e,s){let n;for(const o of t)if(n=Vo(rl(o,i),e),typeof n<"u")return ks(i,n)?Ss(e,s,i,n):n}function Vo(i,t){for(const e of t){if(!e)continue;const s=e[i];if(typeof s<"u")return s}}function on(i){let t=i._keys;return t||(t=i._keys=gl(i._scopes)),t}function gl(i){const t=new Set;for(const e of i)for(const s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function Uo(i,t,e,s){const{iScale:n}=i,{key:o="r"}=this._parsing,r=new Array(s);let a,l,c,h;for(a=0,l=s;a<l;++a)c=a+e,h=t[c],r[a]={r:n.parse(Ot(h,o),c)};return r}const pl=Number.EPSILON||1e-14,de=(i,t)=>t<i.length&&!i[t].skip&&i[t],Yo=i=>i==="x"?"y":"x";function ml(i,t,e,s){const n=i.skip?t:i,o=t,r=e.skip?t:e,a=Ji(o,n),l=Ji(r,o);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,u=s*h;return{previous:{x:o.x-d*(r.x-n.x),y:o.y-d*(r.y-n.y)},next:{x:o.x+u*(r.x-n.x),y:o.y+u*(r.y-n.y)}}}function bl(i,t,e){const s=i.length;let n,o,r,a,l,c=de(i,0);for(let h=0;h<s-1;++h)if(l=c,c=de(i,h+1),!(!l||!c)){if(Le(t[h],0,pl)){e[h]=e[h+1]=0;continue}n=e[h]/t[h],o=e[h+1]/t[h],a=Math.pow(n,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),e[h]=n*r*t[h],e[h+1]=o*r*t[h])}}function xl(i,t,e="x"){const s=Yo(e),n=i.length;let o,r,a,l=de(i,0);for(let c=0;c<n;++c){if(r=a,a=l,l=de(i,c+1),!a)continue;const h=a[e],d=a[s];r&&(o=(h-r[e])/3,a[`cp1${e}`]=h-o,a[`cp1${s}`]=d-o*t[c]),l&&(o=(l[e]-h)/3,a[`cp2${e}`]=h+o,a[`cp2${s}`]=d+o*t[c])}}function yl(i,t="x"){const e=Yo(t),s=i.length,n=Array(s).fill(0),o=Array(s);let r,a,l,c=de(i,0);for(r=0;r<s;++r)if(a=l,l=c,c=de(i,r+1),!!l){if(c){const h=c[t]-l[t];n[r]=h!==0?(c[e]-l[e])/h:0}o[r]=a?c?mt(n[r-1])!==mt(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}bl(i,n,o),xl(i,o,t)}function ei(i,t,e){return Math.max(Math.min(i,e),t)}function vl(i,t){let e,s,n,o,r,a=kt(i[0],t);for(e=0,s=i.length;e<s;++e)r=o,o=a,a=e<s-1&&kt(i[e+1],t),o&&(n=i[e],r&&(n.cp1x=ei(n.cp1x,t.left,t.right),n.cp1y=ei(n.cp1y,t.top,t.bottom)),a&&(n.cp2x=ei(n.cp2x,t.left,t.right),n.cp2y=ei(n.cp2y,t.top,t.bottom)))}function _l(i,t,e,s,n){let o,r,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")yl(i,n);else{let c=s?i[i.length-1]:i[0];for(o=0,r=i.length;o<r;++o)a=i[o],l=ml(c,a,i[Math.min(o+1,r-(s?0:1))%r],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&vl(i,e)}function Cs(){return typeof window<"u"&&typeof document<"u"}function Ms(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function yi(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}const Ai=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function wl(i,t){return Ai(i).getPropertyValue(t)}const kl=["top","right","bottom","left"];function Kt(i,t,e){const s={};e=e?"-"+e:"";for(let n=0;n<4;n++){const o=kl[n];s[o]=parseFloat(i[t+"-"+o+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Sl=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Cl(i,t){const e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:o}=s;let r=!1,a,l;if(Sl(n,o,i.target))a=n,l=o;else{const c=t.getBoundingClientRect();a=s.clientX-c.left,l=s.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function Yt(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:s}=t,n=Ai(e),o=n.boxSizing==="border-box",r=Kt(n,"padding"),a=Kt(n,"border","width"),{x:l,y:c,box:h}=Cl(i,e),d=r.left+(h&&a.left),u=r.top+(h&&a.top);let{width:f,height:g}=t;return o&&(f-=r.width+a.width,g-=r.height+a.height),{x:Math.round((l-d)/f*e.width/s),y:Math.round((c-u)/g*e.height/s)}}function Ml(i,t,e){let s,n;if(t===void 0||e===void 0){const o=i&&Ms(i);if(!o)t=i.clientWidth,e=i.clientHeight;else{const r=o.getBoundingClientRect(),a=Ai(o),l=Kt(a,"border","width"),c=Kt(a,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,s=yi(a.maxWidth,o,"clientWidth"),n=yi(a.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:s||bi,maxHeight:n||bi}}const At=i=>Math.round(i*10)/10;function Tl(i,t,e,s){const n=Ai(i),o=Kt(n,"margin"),r=yi(n.maxWidth,i,"clientWidth")||bi,a=yi(n.maxHeight,i,"clientHeight")||bi,l=Ml(i,t,e);let{width:c,height:h}=l;if(n.boxSizing==="content-box"){const u=Kt(n,"border","width"),f=Kt(n,"padding");c-=f.width+u.width,h-=f.height+u.height}return c=Math.max(0,c-o.width),h=Math.max(0,s?c/s:h-o.height),c=At(Math.min(c,r,l.maxWidth)),h=At(Math.min(h,a,l.maxHeight)),c&&!h&&(h=At(c/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,c=At(Math.floor(h*s))),{width:c,height:h}}function rn(i,t,e){const s=t||1,n=At(i.height*s),o=At(i.width*s);i.height=At(i.height),i.width=At(i.width);const r=i.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||r.height!==n||r.width!==o?(i.currentDevicePixelRatio=s,r.height=n,r.width=o,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}const Pl=(function(){let i=!1;try{const t={get passive(){return i=!0,!1}};Cs()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i})();function an(i,t){const e=wl(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function qt(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Al(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Dl(i,t,e,s){const n={x:i.cp2x,y:i.cp2y},o={x:t.cp1x,y:t.cp1y},r=qt(i,n,e),a=qt(n,o,e),l=qt(o,t,e),c=qt(r,a,e),h=qt(a,l,e);return qt(c,h,e)}const El=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Ol=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function re(i,t,e){return i?El(t,e):Ol()}function qo(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function Xo(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Go(i){return i==="angle"?{between:je,compare:La,normalize:tt}:{between:_t,compare:(t,e)=>t-e,normalize:t=>t}}function ln({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e===0,style:n}}function Ll(i,t,e){const{property:s,start:n,end:o}=e,{between:r,normalize:a}=Go(s),l=t.length;let{start:c,end:h,loop:d}=i,u,f;if(d){for(c+=l,h+=l,u=0,f=l;u<f&&r(a(t[c%l][s]),n,o);++u)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:i.style}}function Ko(i,t,e){if(!e)return[i];const{property:s,start:n,end:o}=e,r=t.length,{compare:a,between:l,normalize:c}=Go(s),{start:h,end:d,loop:u,style:f}=Ll(i,t,e),g=[];let p=!1,m=null,b,x,_;const v=()=>l(n,_,b)&&a(n,_)!==0,y=()=>a(o,b)===0||l(o,_,b),w=()=>p||v(),k=()=>!p||y();for(let S=h,C=h;S<=d;++S)x=t[S%r],!x.skip&&(b=c(x[s]),b!==_&&(p=l(b,n,o),m===null&&w()&&(m=a(b,n)===0?S:C),m!==null&&k()&&(g.push(ln({start:m,end:S,loop:u,count:r,style:f})),m=null),C=S,_=b));return m!==null&&g.push(ln({start:m,end:d,loop:u,count:r,style:f})),g}function Jo(i,t){const e=[],s=i.segments;for(let n=0;n<s.length;n++){const o=Ko(s[n],i.points,t);o.length&&e.push(...o)}return e}function $l(i,t,e,s){let n=0,o=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(o+=n);o>n&&i[o%t].skip;)o--;return o%=t,{start:n,end:o}}function Il(i,t,e,s){const n=i.length,o=[];let r=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%n];c.skip||c.stop?a.skip||(s=!1,o.push({start:t%n,end:(l-1)%n,loop:s}),t=r=c.stop?l:null):(r=l,a.skip&&(t=l)),a=c}return r!==null&&o.push({start:t%n,end:r%n,loop:s}),o}function Rl(i,t){const e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];const o=!!i._loop,{start:r,end:a}=$l(e,n,o,s);if(s===!0)return cn(i,[{start:r,end:a,loop:o}],e,t);const l=a<r?a+n:a,c=!!i._fullLoop&&r===0&&a===n-1;return cn(i,Il(e,r,l,c),e,t)}function cn(i,t,e,s){return!s||!s.setContext||!e?t:Bl(i,t,e,s)}function Bl(i,t,e,s){const n=i._chart.getContext(),o=hn(i.options),{_datasetIndex:r,options:{spanGaps:a}}=i,l=e.length,c=[];let h=o,d=t[0].start,u=d;function f(g,p,m,b){const x=a?-1:1;if(g!==p){for(g+=l;e[g%l].skip;)g-=x;for(;e[p%l].skip;)p+=x;g%l!==p%l&&(c.push({start:g%l,end:p%l,loop:m,style:b}),h=b,d=p%l)}}for(const g of t){d=a?d:g.start;let p=e[d%l],m;for(u=d+1;u<=g.end;u++){const b=e[u%l];m=hn(s.setContext(Rt(n,{type:"segment",p0:p,p1:b,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:r}))),zl(m,h)&&f(d,u-1,g.loop,h),p=b,h=m}d<u-1&&f(d,u-1,g.loop,h)}return c}function hn(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function zl(i,t){if(!t)return!1;const e=[],s=function(n,o){return vs(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(i,s)!==JSON.stringify(t,s)}function ii(i,t,e){return i.options.clip?i[e]:t[e]}function Fl(i,t){const{xScale:e,yScale:s}=i;return e&&s?{left:ii(e,t,"left"),right:ii(e,t,"right"),top:ii(s,t,"top"),bottom:ii(s,t,"bottom")}:t}function Zo(i,t){const e=t._clip;if(e.disabled)return!1;const s=Fl(t,i.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?i.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?i.height:s.bottom+(e.bottom===!0?0:e.bottom)}}class Nl{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){const o=e.listeners[n],r=e.duration;o.forEach(a=>a({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=$o.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const o=s.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,s,t,"progress")),o.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var xt=new Nl;const dn="transparent",Wl={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const s=tn(i||dn),n=s.valid&&tn(t||dn);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class jl{constructor(t,e,s,n){const o=e[s];n=Me([t.to,n,o,t.from]);const r=Me([t.from,o,n]);this._active=!0,this._fn=t.fn||Wl[t.type||typeof r],this._easing=$e[t.easing]||$e.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const n=this._target[this._prop],o=s-this._start,r=this._duration-o;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Me([t.to,e,n,t.from]),this._from=Me([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,n=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||e<s),!this._active){this._target[n]=a,this._notify(!0);return}if(e<0){this._target[n]=o;return}l=e/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}}class Qo{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!O(t))return;const e=Object.keys(H.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const o=t[n];if(!O(o))return;const r={};for(const a of e)r[a]=o[a];(j(o.properties)&&o.properties||[n]).forEach(a=>{(a===n||!s.has(a))&&s.set(a,r)})})}_animateOptions(t,e){const s=e.options,n=Vl(t,s);if(!n)return[];const o=this._createAnimations(n,s);return s.$shared&&Hl(t.options.$animations,s).then(()=>{t.options=s},()=>{}),o}_createAnimations(t,e){const s=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}const h=e[c];let d=o[c];const u=s.get(c);if(d)if(u&&d.active()){d.update(u,h,a);continue}else d.cancel();if(!u||!u.duration){t[c]=h;continue}o[c]=d=new jl(u,t,c,h),n.push(d)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return xt.add(this._chart,s),!0}}function Hl(i,t){const e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const o=i[s[n]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function Vl(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function un(i,t){const e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:s?o:n,end:s?n:o}}function Ul(i,t,e){if(e===!1)return!1;const s=un(i,e),n=un(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function Yl(i){let t,e,s,n;return O(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function tr(i,t){const e=[],s=i._getSortedDatasetMetas(t);let n,o;for(n=0,o=s.length;n<o;++n)e.push(s[n].index);return e}function fn(i,t,e,s={}){const n=i.keys,o=s.mode==="single";let r,a,l,c;if(t===null)return;let h=!1;for(r=0,a=n.length;r<a;++r){if(l=+n[r],l===e){if(h=!0,s.all)continue;break}c=i.values[l],V(c)&&(o||t===0||mt(t)===mt(c))&&(t+=c)}return!h&&!s.all?0:t}function ql(i,t){const{iScale:e,vScale:s}=t,n=e.axis==="x"?"x":"y",o=s.axis==="x"?"x":"y",r=Object.keys(i),a=new Array(r.length);let l,c,h;for(l=0,c=r.length;l<c;++l)h=r[l],a[l]={[n]:h,[o]:i[h]};return a}function zi(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function Xl(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function Gl(i){const{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function Kl(i,t,e){const s=i[t]||(i[t]={});return s[e]||(s[e]={})}function gn(i,t,e,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const o=i[n.index];if(e&&o>0||!e&&o<0)return n.index}return null}function pn(i,t){const{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:o,vScale:r,index:a}=s,l=o.axis,c=r.axis,h=Xl(o,r,s),d=t.length;let u;for(let f=0;f<d;++f){const g=t[f],{[l]:p,[c]:m}=g,b=g._stacks||(g._stacks={});u=b[c]=Kl(n,h,p),u[a]=m,u._top=gn(u,r,!0,s.type),u._bottom=gn(u,r,!1,s.type);const x=u._visualValues||(u._visualValues={});x[a]=m}}function Fi(i,t){const e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function Jl(i,t){return Rt(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function Zl(i,t,e){return Rt(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ve(i,t){const e=i.controller.index,s=i.vScale&&i.vScale.axis;if(s){t=t||i._parsed;for(const n of t){const o=n._stacks;if(!o||o[s]===void 0||o[s][e]===void 0)return;delete o[s][e],o[s]._visualValues!==void 0&&o[s]._visualValues[e]!==void 0&&delete o[s]._visualValues[e]}}}const Ni=i=>i==="reset"||i==="none",mn=(i,t)=>t?i:Object.assign({},i),Ql=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:tr(e,!0),values:null};class Bt{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=zi(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ve(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(d,u,f,g)=>d==="x"?u:d==="r"?g:f,o=e.xAxisID=T(s.xAxisID,Fi(t,"x")),r=e.yAxisID=T(s.yAxisID,Fi(t,"y")),a=e.rAxisID=T(s.rAxisID,Fi(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,o,r,a),h=e.vAxisID=n(l,r,o,a);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Js(this._data,this),t._stacked&&ve(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(O(e)){const n=this._cachedMeta;this._data=ql(e,n)}else if(s!==e){if(s){Js(s,this);const n=this._cachedMeta;ve(n),n._parsed=[]}e&&Object.isExtensible(e)&&Ba(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=zi(e.vScale,e),e.stack!==s.stack&&(n=!0,ve(e),e.stack=s.stack),this._resyncElements(t),(n||o!==e._stacked)&&(pn(this,e._parsed),e._stacked=zi(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:n}=this,{iScale:o,_stacked:r}=s,a=o.axis;let l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],h,d,u;if(this._parsing===!1)s._parsed=n,s._sorted=!0,u=n;else{j(n[t])?u=this.parseArrayData(s,n,t,e):O(n[t])?u=this.parseObjectData(s,n,t,e):u=this.parsePrimitiveData(s,n,t,e);const f=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<e;++h)s._parsed[h+t]=d=u[h],l&&(f()&&(l=!1),c=d);s._sorted=l}r&&pn(this,u)}parsePrimitiveData(t,e,s,n){const{iScale:o,vScale:r}=t,a=o.axis,l=r.axis,c=o.getLabels(),h=o===r,d=new Array(n);let u,f,g;for(u=0,f=n;u<f;++u)g=u+s,d[u]={[a]:h||o.parse(c[g],g),[l]:r.parse(e[g],g)};return d}parseArrayData(t,e,s,n){const{xScale:o,yScale:r}=t,a=new Array(n);let l,c,h,d;for(l=0,c=n;l<c;++l)h=l+s,d=e[h],a[l]={x:o.parse(d[0],h),y:r.parse(d[1],h)};return a}parseObjectData(t,e,s,n){const{xScale:o,yScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let h,d,u,f;for(h=0,d=n;h<d;++h)u=h+s,f=e[u],c[h]={x:o.parse(Ot(f,a),u),y:r.parse(Ot(f,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const n=this.chart,o=this._cachedMeta,r=e[t.axis],a={keys:tr(n,!0),values:e._stacks[t.axis]._visualValues};return fn(a,r,o.index,{mode:s})}updateRangeFromParsed(t,e,s,n){const o=s[e.axis];let r=o===null?NaN:o;const a=n&&s._stacks[e.axis];n&&a&&(n.values=a,r=fn(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,n=s._parsed,o=s._sorted&&t===s.iScale,r=n.length,a=this._getOtherScale(t),l=Ql(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=Gl(a);let u,f;function g(){f=n[u];const p=f[a.axis];return!V(f[t.axis])||h>p||d<p}for(u=0;u<r&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),o));++u);if(o){for(u=r-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n][t.axis],V(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Yl(T(this.options.clip,Ul(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],o=e.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||n.length-a,c=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,o,a,l),h=a;h<a+l;++h){const d=n[h];d.hidden||(d.active&&c?r.push(d):d.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=Zl(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=Jl(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const n=e==="active",o=this._cachedDataOpts,r=t+"-"+e,a=o[r],l=this.enableOptionSharing&&We(s);if(a)return mn(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),h),f=Object.keys(H.elements[t]),g=()=>this.getContext(s,n,e),p=c.resolveNamedOptions(u,f,g,d);return p.$shared&&(p.$shared=l,o[r]=Object.freeze(mn(p,l))),p}_resolveAnimations(t,e,s){const n=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,a=o[r];if(a)return a;let l;if(n.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),u=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(u,this.getContext(t,s,e))}const c=new Qo(n,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ni(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(e,o)||o!==n;return this.updateSharedOptions(o,e,s),{sharedOptions:o,includeOptions:r}}updateElement(t,e,s,n){Ni(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!Ni(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const n=s.length,o=e.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,s=!0){const n=this._cachedMeta,o=n.data,r=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=r;a--)c[a]=c[a-e]};for(l(o),a=t;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(o,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,e);s._stacked&&ve(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function tc(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let s=[];for(let n=0,o=e.length;n<o;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=Lo(s.sort((n,o)=>n-o))}return i._cache.$bar}function ec(i){const t=i.iScale,e=tc(t,i.type);let s=t._length,n,o,r,a;const l=()=>{r===32767||r===-32768||(We(a)&&(s=Math.min(s,Math.abs(r-a)||s)),a=r)};for(n=0,o=e.length;n<o;++n)r=t.getPixelForValue(e[n]),l();for(a=void 0,n=0,o=t.ticks.length;n<o;++n)r=t.getPixelForTick(n),l();return s}function ic(i,t,e,s){const n=e.barThickness;let o,r;return E(n)?(o=t.min*e.categoryPercentage,r=e.barPercentage):(o=n*s,r=1),{chunk:o/s,ratio:r,start:t.pixels[i]-o/2}}function sc(i,t,e,s){const n=t.pixels,o=n[i];let r=i>0?n[i-1]:null,a=i<n.length-1?n[i+1]:null;const l=e.categoryPercentage;r===null&&(r=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-r);const c=o-(o-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/s,ratio:e.barPercentage,start:c}}function nc(i,t,e,s){const n=e.parse(i[0],s),o=e.parse(i[1],s),r=Math.min(n,o),a=Math.max(n,o);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:o,min:r,max:a}}function er(i,t,e,s){return j(i)?nc(i,t,e,s):t[e.axis]=e.parse(i,s),t}function bn(i,t,e,s){const n=i.iScale,o=i.vScale,r=n.getLabels(),a=n===o,l=[];let c,h,d,u;for(c=e,h=e+s;c<h;++c)u=t[c],d={},d[n.axis]=a||n.parse(r[c],c),l.push(er(u,d,o,c));return l}function Wi(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function oc(i,t,e){return i!==0?mt(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function rc(i){let t,e,s,n,o;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",o="start"):(n="start",o="end"),{start:e,end:s,reverse:t,top:n,bottom:o}}function ac(i,t,e,s){let n=t.borderSkipped;const o={};if(!n){i.borderSkipped=o;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:a,reverse:l,top:c,bottom:h}=rc(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=h:(o[xn(h,r,a,l)]=!0,n=c)),o[xn(n,r,a,l)]=!0,i.borderSkipped=o}function xn(i,t,e,s){return s?(i=lc(i,t,e),i=yn(i,e,t)):i=yn(i,t,e),i}function lc(i,t,e){return i===t?e:i===e?t:i}function yn(i,t,e){return i==="start"?t:i==="end"?e:i}function cc(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class hc extends Bt{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,s,n){return bn(t,e,s,n)}parseArrayData(t,e,s,n){return bn(t,e,s,n)}parseObjectData(t,e,s,n){const{iScale:o,vScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,h=r.axis==="x"?a:l,d=[];let u,f,g,p;for(u=s,f=s+n;u<f;++u)p=e[u],g={},g[o.axis]=o.parse(Ot(p,c),u),d.push(er(Ot(p,h),g,r,u));return d}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);const o=s._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:n}=e,o=this.getParsed(t),r=o._custom,a=Wi(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const o=n==="reset",{index:r,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const g=this.getParsed(f),p=o||E(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),m=this._calculateBarIndexPixels(f,h),b=(g._stacks||{})[a.axis],x={horizontal:c,base:p.base,enableBorderRadius:!b||Wi(g._custom)||r===b._top||r===b._bottom,x:c?p.head:m.center,y:c?m.center:p.head,height:c?m.size:Math.abs(p.size),width:c?Math.abs(p.size):m.size};u&&(x.options=d||this.resolveDataElementOptions(f,t[f].active?"active":n));const _=x.options||t[f].options;ac(x,_,b,r),cc(x,_,h.ratio),this.updateElement(t[f],f,x,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=s.options.stacked,r=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],c=h=>{const d=h._parsed.find(f=>f[s.axis]===l),u=d&&d[h.vScale.axis];if(E(u)||isNaN(u))return!0};for(const h of n)if(!(e!==void 0&&c(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[T(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const n=this._getStacks(t,s),o=e!==void 0?n.indexOf(e):-1;return o===-1?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,n=[];let o,r;for(o=0,r=e.data.length;o<r;++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));const a=t.barThickness;return{min:a||ec(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:n},options:{base:o,minBarLength:r}}=this,a=o||0,l=this.getParsed(t),c=l._custom,h=Wi(c);let d=l[e.axis],u=0,f=s?this.applyStack(e,l,s):d,g,p;f!==d&&(u=f-d,f=d),h&&(d=c.barStart,f=c.barEnd-c.barStart,d!==0&&mt(d)!==mt(c.barEnd)&&(u=0),u+=d);const m=!E(o)&&!h?o:u;let b=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?g=e.getPixelForValue(u+f):g=b,p=g-b,Math.abs(p)<r){p=oc(p,e,a)*r,d===a&&(b-=p/2);const x=e.getPixelForDecimal(0),_=e.getPixelForDecimal(1),v=Math.min(x,_),y=Math.max(x,_);b=Math.max(Math.min(b,y),v),g=b+p,s&&!h&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(g)-e.getValueForPixel(b))}if(b===e.getPixelForValue(a)){const x=mt(p)*e.getLineWidthForValue(a)/2;b+=x,p-=x}return{size:p,base:b,head:g,center:g+p/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,o=n.skipNull,r=T(n.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=o?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?sc(t,e,n,h*c):ic(t,e,n,h*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(T(u,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;a=d.start+d.chunk*g+d.chunk/2,l=Math.min(r,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length;let o=0;for(;o<n;++o)this.getParsed(o)[e.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}class dc extends Bt{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){const o=super.parsePrimitiveData(t,e,s,n);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,e,s,n){const o=super.parseArrayData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=T(a[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,e,s,n){const o=super.parseObjectData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=T(a&&a.r&&+a.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y),c=r._custom;return{label:s[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),h=r.axis,d=a.axis;for(let u=e;u<e+s;u++){const f=t[u],g=!o&&this.getParsed(u),p={},m=p[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(g[h]),b=p[d]=o?a.getBasePixel():a.getPixelForValue(g[d]);p.skip=isNaN(m)||isNaN(b),c&&(p.options=l||this.resolveDataElementOptions(u,f.active?"active":n),o&&(p.options.radius=0)),this.updateElement(f,u,p,n)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return e!=="active"&&(n.radius=0),n.radius+=T(s&&s._custom,o),n}}function uc(i,t,e){let s=1,n=1,o=0,r=0;if(t<N){const a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),d=Math.cos(l),u=Math.sin(l),f=(_,v,y)=>je(_,a,l,!0)?1:Math.max(v,v*e,y,y*e),g=(_,v,y)=>je(_,a,l,!0)?-1:Math.min(v,v*e,y,y*e),p=f(0,c,d),m=f(Y,h,u),b=g($,c,d),x=g($+Y,h,u);s=(p-b)/2,n=(m-x)/2,o=-(p+b)/2,r=-(m+x)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:r}}class Ts extends Bt{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const d=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:d.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(c),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:n,pointStyle:s,borderRadius:r&&(a||d.borderRadius),index:c}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let o=l=>+s[l];if(O(s[t])){const{key:l="value"}=this._parsing;o=c=>+Ot(s[c],l)}let r,a;for(r=t,a=t+e;r<a;++r)n._parsed[r]=o(r)}}_getRotation(){return dt(this.options.rotation-90)}_getCircumference(){return dt(this.options.circumference)}_getRotationExtents(){let t=N,e=-N;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(wa(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:p}=uc(d,h,l),m=(s.width-r)/u,b=(s.height-r)/f,x=Math.max(Math.min(m,b)/2,0),_=Po(this.options.radius,x),v=Math.max(_*l,0),y=(_-v)/this._getVisibleDatasetWeightTotal();this.offsetX=g*_,this.offsetY=p*_,n.total=this.calculateTotal(),this.outerRadius=_-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const s=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/N)}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,a=r.chartArea,c=r.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,u=o&&c.animateScale,f=u?0:this.innerRadius,g=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(e,n);let b=this._getRotation(),x;for(x=0;x<e;++x)b+=this._circumference(x,o);for(x=e;x<e+s;++x){const _=this._circumference(x,o),v=t[x],y={x:h+this.offsetX,y:d+this.offsetY,startAngle:b,endAngle:b+_,circumference:_,outerRadius:g,innerRadius:f};m&&(y.options=p||this.resolveDataElementOptions(x,v.active?"active":n)),b+=_,this.updateElement(v,x,y,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,n;for(n=0;n<e.length;n++){const o=t._parsed[n];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?N*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=Ge(e._parsed[t],s.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const s=this.chart;let n,o,r,a,l;if(!t){for(n=0,o=s.data.datasets.length;n<o;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,a=r.controller;break}}if(!t)return 0;for(n=0,o=t.length;n<o;++n)l=a.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){const o=this.resolveDataElementOptions(s);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(T(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class fc extends Bt{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:n=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:a,count:l}=Ro(e,n,r);this._drawStart=a,this._drawCount=l,Bo(e)&&(a=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t),this.updateElements(n,a,l,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,n),u=r.axis,f=a.axis,{spanGaps:g,segment:p}=this.options,m=ce(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||n==="none",x=e+s,_=t.length;let v=e>0&&this.getParsed(e-1);for(let y=0;y<_;++y){const w=t[y],k=b?w:{};if(y<e||y>=x){k.skip=!0;continue}const S=this.getParsed(y),C=E(S[f]),A=k[u]=r.getPixelForValue(S[u],y),D=k[f]=o||C?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,S,l):S[f],y);k.skip=isNaN(A)||isNaN(D)||C,k.stop=y>0&&Math.abs(S[u]-v[u])>m,p&&(k.parsed=S,k.raw=c.data[y]),d&&(k.options=h||this.resolveDataElementOptions(y,w.active?"active":n)),b||this.updateElement(w,y,k,n),v=S}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}class ir extends Bt{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((o,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=Ge(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,e,s,n){return Uo.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const o=this.getParsed(n).r;!isNaN(o)&&this.chart.getDataVisibility(n)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),a=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,d=c.yCenter,u=c.getIndexAngle(0)-.5*$;let f=u,g;const p=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,n,p);for(g=e;g<e+s;g++){const m=t[g];let b=f,x=f+this._computeAngle(g,n,p),_=r.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=x,o&&(l.animateScale&&(_=0),l.animateRotate&&(b=x=u));const v={x:h,y:d,innerRadius:0,outerRadius:_,startAngle:b,endAngle:x,options:this.resolveDataElementOptions(g,m.active?"active":n)};this.updateElement(m,g,v,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?dt(this.resolveDataElementOptions(t,e).angle||s):0}}class gc extends Ts{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}class pc extends Bt{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return Uo.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta,s=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===n.length,options:r};this.updateElement(s,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){const o=this._cachedMeta.rScale,r=n==="reset";for(let a=e;a<e+s;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":n),h=o.getPointPositionForValue(a,this.getParsed(a).r),d=r?o.xCenter:h.x,u=r?o.yCenter:h.y,f={x:d,y:u,angle:h.angle,skip:isNaN(d)||isNaN(u),options:c};this.updateElement(l,a,f,n)}}}class mc extends Bt{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled;let{start:o,count:r}=Ro(e,s,n);if(this._drawStart=o,this._drawCount=r,Bo(e)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(h),u=this.includeOptions(n,d),f=r.axis,g=a.axis,{spanGaps:p,segment:m}=this.options,b=ce(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||n==="none";let _=e>0&&this.getParsed(e-1);for(let v=e;v<e+s;++v){const y=t[v],w=this.getParsed(v),k=x?y:{},S=E(w[g]),C=k[f]=r.getPixelForValue(w[f],v),A=k[g]=o||S?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,w,l):w[g],v);k.skip=isNaN(C)||isNaN(A)||S,k.stop=v>0&&Math.abs(w[f]-_[f])>b,m&&(k.parsed=w,k.raw=c.data[v]),u&&(k.options=d||this.resolveDataElementOptions(v,y.active?"active":n)),x||this.updateElement(y,v,k,n),_=w}this.updateSharedOptions(d,n,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;const o=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,o,r)/2}}var bc=Object.freeze({__proto__:null,BarController:hc,BubbleController:dc,DoughnutController:Ts,LineController:fc,PieController:gc,PolarAreaController:ir,RadarController:pc,ScatterController:mc});function Vt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ps{static override(t){Object.assign(Ps.prototype,t)}options;constructor(t){this.options=t||{}}init(){}formats(){return Vt()}parse(){return Vt()}format(){return Vt()}add(){return Vt()}diff(){return Vt()}startOf(){return Vt()}endOf(){return Vt()}}var xc={_date:Ps};function yc(i,t,e,s){const{controller:n,data:o,_sorted:r}=i,a=n._cachedMeta.iScale,l=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&r&&o.length){const c=a._reversePixels?Ia:wt;if(s){if(n._sharedOptions){const h=o[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const u=c(o,t,e-d),f=c(o,t,e+d);return{lo:u.lo,hi:f.hi}}}}else{const h=c(o,t,e);if(l){const{vScale:d}=n._cachedMeta,{_parsed:u}=i,f=u.slice(0,h.lo+1).reverse().findIndex(p=>!E(p[d.axis]));h.lo-=Math.max(0,f);const g=u.slice(h.hi).findIndex(p=>!E(p[d.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:o.length-1}}function Di(i,t,e,s,n){const o=i.getSortedVisibleDatasetMetas(),r=e[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:h}=o[a],{lo:d,hi:u}=yc(o[a],t,r,n);for(let f=d;f<=u;++f){const g=h[f];g.skip||s(g,c,f)}}}function vc(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){const o=t?Math.abs(s.x-n.x):0,r=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function ji(i,t,e,s,n){const o=[];return!n&&!i.isPointInArea(t)||Di(i,e,t,function(a,l,c){!n&&!kt(a,i.chartArea,0)||a.inRange(t.x,t.y,s)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function _c(i,t,e,s){let n=[];function o(r,a,l){const{startAngle:c,endAngle:h}=r.getProps(["startAngle","endAngle"],s),{angle:d}=Eo(r,{x:t.x,y:t.y});je(d,c,h)&&n.push({element:r,datasetIndex:a,index:l})}return Di(i,e,t,o),n}function wc(i,t,e,s,n,o){let r=[];const a=vc(e);let l=Number.POSITIVE_INFINITY;function c(h,d,u){const f=h.inRange(t.x,t.y,n);if(s&&!f)return;const g=h.getCenterPoint(n);if(!(!!o||i.isPointInArea(g))&&!f)return;const m=a(t,g);m<l?(r=[{element:h,datasetIndex:d,index:u}],l=m):m===l&&r.push({element:h,datasetIndex:d,index:u})}return Di(i,e,t,c),r}function Hi(i,t,e,s,n,o){return!o&&!i.isPointInArea(t)?[]:e==="r"&&!s?_c(i,t,e,n):wc(i,t,e,s,n,o)}function vn(i,t,e,s,n){const o=[],r=e==="x"?"inXRange":"inYRange";let a=!1;return Di(i,e,t,(l,c,h)=>{l[r]&&l[r](t[e],n)&&(o.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,n))}),s&&!a?[]:o}var kc={modes:{index(i,t,e,s){const n=Yt(t,i),o=e.axis||"x",r=e.includeInvisible||!1,a=e.intersect?ji(i,n,o,s,r):Hi(i,n,o,!1,s,r),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,s){const n=Yt(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;let a=e.intersect?ji(i,n,o,s,r):Hi(i,n,o,!1,s,r);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,s){const n=Yt(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return ji(i,n,o,s,r)},nearest(i,t,e,s){const n=Yt(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return Hi(i,n,o,e.intersect,s,r)},x(i,t,e,s){const n=Yt(t,i);return vn(i,n,"x",e.intersect,s)},y(i,t,e,s){const n=Yt(t,i);return vn(i,n,"y",e.intersect,s)}}};const sr=["left","top","right","bottom"];function _e(i,t){return i.filter(e=>e.pos===t)}function _n(i,t){return i.filter(e=>sr.indexOf(e.pos)===-1&&e.box.axis===t)}function we(i,t){return i.sort((e,s)=>{const n=t?s:e,o=t?e:s;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function Sc(i){const t=[];let e,s,n,o,r,a;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:o,options:{stack:r,stackWeight:a=1}}=n,t.push({index:e,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&o+r,stackWeight:a});return t}function Cc(i){const t={};for(const e of i){const{stack:s,pos:n,stackWeight:o}=e;if(!s||!sr.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function Mc(i,t){const e=Cc(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let o,r,a;for(o=0,r=i.length;o<r;++o){a=i[o];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=n):(a.width=s,a.height=h?h*n:l&&t.availableHeight)}return e}function Tc(i){const t=Sc(i),e=we(t.filter(c=>c.box.fullSize),!0),s=we(_e(t,"left"),!0),n=we(_e(t,"right")),o=we(_e(t,"top"),!0),r=we(_e(t,"bottom")),a=_n(t,"x"),l=_n(t,"y");return{fullSize:e,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(r).concat(a),chartArea:_e(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(r).concat(a)}}function wn(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function nr(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function Pc(i,t,e,s){const{pos:n,box:o}=e,r=i.maxPadding;if(!O(n)){e.size&&(i[n]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?o.height:o.width),e.size=d.size/d.count,i[n]+=e.size}o.getPadding&&nr(r,o.getPadding());const a=Math.max(0,t.outerWidth-wn(r,i,"left","right")),l=Math.max(0,t.outerHeight-wn(r,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function Ac(i){const t=i.maxPadding;function e(s){const n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function Dc(i,t){const e=t.maxPadding;function s(n){const o={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{o[r]=Math.max(t[r],e[r])}),o}return s(i?["left","right"]:["top","bottom"])}function Te(i,t,e,s){const n=[];let o,r,a,l,c,h;for(o=0,r=i.length,c=0;o<r;++o){a=i[o],l=a.box,l.update(a.width||t.w,a.height||t.h,Dc(a.horizontal,t));const{same:d,other:u}=Pc(t,e,a,s);c|=d&&n.length,h=h||u,l.fullSize||n.push(a)}return c&&Te(n,t,e,s)||h}function si(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function kn(i,t,e,s){const n=e.padding;let{x:o,y:r}=t;for(const a of i){const l=a.box,c=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*h,u=c.size||l.height;We(c.start)&&(r=c.start),l.fullSize?si(l,n.left,r,e.outerWidth-n.right-n.left,u):si(l,t.left+c.placed,r,d,u),c.start=r,c.placed+=d,r=l.bottom}else{const d=t.h*h,u=c.size||l.width;We(c.start)&&(o=c.start),l.fullSize?si(l,o,n.top,u,e.outerHeight-n.bottom-n.top):si(l,o,t.top+c.placed,u,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=r}var et={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;const n=it(i.options.layout.padding),o=Math.max(t-n.width,0),r=Math.max(e-n.height,0),a=Tc(i.boxes),l=a.vertical,c=a.horizontal;B(i.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const h=l.reduce((p,m)=>m.box.options&&m.box.options.display===!1?p:p+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/h,hBoxMaxHeight:r/2}),u=Object.assign({},n);nr(u,it(s));const f=Object.assign({maxPadding:u,w:o,h:r,x:n.left,y:n.top},n),g=Mc(l.concat(c),d);Te(a.fullSize,f,d,g),Te(l,f,d,g),Te(c,f,d,g)&&Te(l,f,d,g),Ac(f),kn(a.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,kn(a.rightAndBottom,f,d,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},B(a.chartArea,p=>{const m=p.box;Object.assign(m,i.chartArea),m.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class or{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Ec extends or{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const di="$chartjs",Oc={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Sn=i=>i===null||i==="";function Lc(i,t){const e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[di]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Sn(n)){const o=an(i,"width");o!==void 0&&(i.width=o)}if(Sn(s))if(i.style.height==="")i.height=i.width/(t||2);else{const o=an(i,"height");o!==void 0&&(i.height=o)}return i}const rr=Pl?{passive:!0}:!1;function $c(i,t,e){i&&i.addEventListener(t,e,rr)}function Ic(i,t,e){i&&i.canvas&&i.canvas.removeEventListener(t,e,rr)}function Rc(i,t){const e=Oc[i.type]||i.type,{x:s,y:n}=Yt(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function vi(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function Bc(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||vi(a.addedNodes,s),r=r&&!vi(a.removedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function zc(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||vi(a.removedNodes,s),r=r&&!vi(a.addedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Ve=new Map;let Cn=0;function ar(){const i=window.devicePixelRatio;i!==Cn&&(Cn=i,Ve.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Fc(i,t){Ve.size||window.addEventListener("resize",ar),Ve.set(i,t)}function Nc(i){Ve.delete(i),Ve.size||window.removeEventListener("resize",ar)}function Wc(i,t,e){const s=i.canvas,n=s&&Ms(s);if(!n)return;const o=Io((a,l)=>{const c=n.clientWidth;e(a,l),c<n.clientWidth&&e()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||o(c,h)});return r.observe(n),Fc(i,o),r}function Vi(i,t,e){e&&e.disconnect(),t==="resize"&&Nc(i)}function jc(i,t,e){const s=i.canvas,n=Io(o=>{i.ctx!==null&&e(Rc(o,i))},i);return $c(s,t,n),n}class Hc extends or{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(Lc(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[di])return!1;const s=e[di].initial;["height","width"].forEach(o=>{const r=s[o];E(r)?e.removeAttribute(o):e.setAttribute(o,r)});const n=s.style||{};return Object.keys(n).forEach(o=>{e.style[o]=n[o]}),e.width=e.width,delete e[di],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),r={attach:Bc,detach:zc,resize:Wc}[e]||jc;n[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:Vi,detach:Vi,resize:Vi}[e]||Ic)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return Tl(t,e,s,n)}isAttached(t){const e=t&&Ms(t);return!!(e&&e.isConnected)}}function Vc(i){return!Cs()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Ec:Hc}class St{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return ce(this.x)&&ce(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const n={};return t.forEach(o=>{n[o]=s[o]&&s[o].active()?s[o]._to:this[o]}),n}}function Uc(i,t){const e=i.options.ticks,s=Yc(i),n=Math.min(e.maxTicksLimit||s,s),o=e.major.enabled?Xc(t):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>n)return Gc(t,c,o,r/n),c;const h=qc(o,t,n);if(r>0){let d,u;const f=r>1?Math.round((l-a)/(r-1)):null;for(ni(t,c,h,E(f)?0:a-f,a),d=0,u=r-1;d<u;d++)ni(t,c,h,o[d],o[d+1]);return ni(t,c,h,l,E(f)?t.length:l+f),c}return ni(t,c,h),c}function Yc(i){const t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function qc(i,t,e){const s=Kc(i),n=t.length/e;if(!s)return Math.max(n,1);const o=Da(s);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>n)return l}return Math.max(n,1)}function Xc(i){const t=[];let e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function Gc(i,t,e,s){let n=0,o=e[0],r;for(s=Math.ceil(s),r=0;r<i.length;r++)r===o&&(t.push(i[r]),n++,o=e[n*s])}function ni(i,t,e,s,n){const o=T(s,0),r=Math.min(T(n,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),h=o;h<0;)a++,h=Math.round(o+a*e);for(c=Math.max(o,0);c<r;c++)c===h&&(t.push(i[c]),a++,h=Math.round(o+a*e))}function Kc(i){const t=i.length;let e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}const Jc=i=>i==="left"?"right":i==="right"?"left":i,Mn=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,Tn=(i,t)=>Math.min(t||i,i);function Pn(i,t){const e=[],s=i.length/t,n=i.length;let o=0;for(;o<n;o+=s)e.push(i[Math.floor(o)]);return e}function Zc(i,t,e){const s=i.ticks.length,n=Math.min(t,s-1),o=i._startPixel,r=i._endPixel,a=1e-6;let l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-o,r-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<o-a||l>r+a)))return l}function Qc(i,t){B(i,e=>{const s=e.gc,n=s.length/2;let o;if(n>t){for(o=0;o<n;++o)delete e.data[s[o]];s.splice(0,n)}})}function ke(i){return i.drawTicks?i.tickLength:0}function An(i,t){if(!i.display)return 0;const e=q(i.font,t),s=it(i.padding);return(j(i.text)?i.text.length:1)*e.lineHeight+s.height}function th(i,t){return Rt(i,{scale:t,type:"scale"})}function eh(i,t,e){return Rt(i,{tick:e,index:t,type:"tick"})}function ih(i,t,e){let s=ys(i);return(e&&t!=="right"||!e&&t==="right")&&(s=Jc(s)),s}function sh(i,t,e,s){const{top:n,left:o,bottom:r,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let d=0,u,f,g;const p=r-n,m=a-o;if(i.isHorizontal()){if(f=Q(s,o,a),O(e)){const b=Object.keys(e)[0],x=e[b];g=h[b].getPixelForValue(x)+p-t}else e==="center"?g=(c.bottom+c.top)/2+p-t:g=Mn(i,e,t);u=a-o}else{if(O(e)){const b=Object.keys(e)[0],x=e[b];f=h[b].getPixelForValue(x)-m+t}else e==="center"?f=(c.left+c.right)/2-m+t:f=Mn(i,e,t);g=Q(s,r,n),d=e==="left"?-Y:Y}return{titleX:f,titleY:g,maxWidth:u,rotation:d}}class te extends St{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=lt(t,Number.POSITIVE_INFINITY),e=lt(e,Number.NEGATIVE_INFINITY),s=lt(s,Number.POSITIVE_INFINITY),n=lt(n,Number.NEGATIVE_INFINITY),{min:lt(t,s),max:lt(e,n),minDefined:V(t),maxDefined:V(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:o}=this.getUserBounds(),r;if(n&&o)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,t),n||(e=Math.min(e,r.min)),o||(s=Math.max(s,r.max));return e=o&&e>s?s:e,s=n&&e>s?e:s,{min:lt(e,lt(s,e)),max:lt(s,lt(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){F(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:n,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=ol(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Pn(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Uc(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){F(this.options.afterUpdate,[this])}beforeSetDimensions(){F(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){F(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),F(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){F(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s],o.label=F(e.callback,[o.value,s,t],this)}afterTickToLabelConversion(){F(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){F(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Tn(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,o=e.maxRotation;let r=n,a,l,c;if(!this._isVisible()||!e.display||n>=o||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const h=this._getLabelSizes(),d=h.widest.width,u=h.highest.height,f=G(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:f/(s-1),d+6>a&&(a=f/(s-(t.offset?.5:1)),l=this.maxHeight-ke(t.grid)-e.padding-An(t.title,this.chart.options.font),c=Math.sqrt(d*d+u*u),r=bs(Math.min(Math.asin(G((h.highest.height+6)/a,-1,1)),Math.asin(G(l/c,-1,1))-Math.asin(G(u/c,-1,1)))),r=Math.max(n,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){F(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){F(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=An(n,e.options.font);if(a?(t.width=this.maxWidth,t.height=ke(o)+l):(t.height=this.maxHeight,t.width=ke(o)+l),s.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:u}=this._getLabelSizes(),f=s.padding*2,g=dt(this.labelRotation),p=Math.cos(g),m=Math.sin(g);if(a){const b=s.mirror?0:m*d.width+p*u.height;t.height=Math.min(this.maxHeight,t.height+b+f)}else{const b=s.mirror?0:p*d.width+m*u.height;t.width=Math.min(this.maxWidth,t.width+b+f)}this._calculatePadding(c,h,m,p)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,f=0;l?c?(u=n*t.width,f=s*e.height):(u=s*t.height,f=n*e.width):o==="start"?f=e.width:o==="end"?u=t.width:o!=="inner"&&(u=t.width/2,f=e.width/2),this.paddingLeft=Math.max((u-h+r)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-d+r)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;o==="start"?(h=0,d=t.height):o==="end"&&(h=e.height,d=0),this.paddingTop=h+r,this.paddingBottom=d+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){F(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)E(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Pn(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:n,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(e/Tn(e,s));let c=0,h=0,d,u,f,g,p,m,b,x,_,v,y;for(d=0;d<e;d+=l){if(g=t[d].label,p=this._resolveTickFontOptions(d),n.font=m=p.string,b=o[m]=o[m]||{data:{},gc:[]},x=p.lineHeight,_=v=0,!E(g)&&!j(g))_=xi(n,b.data,b.gc,_,g),v=x;else if(j(g))for(u=0,f=g.length;u<f;++u)y=g[u],!E(y)&&!j(y)&&(_=xi(n,b.data,b.gc,_,y),v+=x);r.push(_),a.push(v),c=Math.max(_,c),h=Math.max(v,h)}Qc(o,e);const w=r.indexOf(c),k=a.indexOf(h),S=C=>({width:r[C]||0,height:a[C]||0});return{first:S(0),last:S(e-1),widest:S(w),highest:S(k),widths:r,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return $a(this._alignToPixels?Ht(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=eh(this.getContext(),t,s))}return this.$context||(this.$context=th(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=dt(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*s>a*n?a/s:l/n:l*n<a*s?l/s:a/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,n=this.options,{grid:o,position:r,border:a}=n,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),u=ke(o),f=[],g=a.setContext(this.getContext()),p=g.display?g.width:0,m=p/2,b=function(W){return Ht(s,W,p)};let x,_,v,y,w,k,S,C,A,D,L,J;if(r==="top")x=b(this.bottom),k=this.bottom-u,C=x-m,D=b(t.top)+m,J=t.bottom;else if(r==="bottom")x=b(this.top),D=t.top,J=b(t.bottom)-m,k=x+m,C=this.top+u;else if(r==="left")x=b(this.right),w=this.right-u,S=x-m,A=b(t.left)+m,L=t.right;else if(r==="right")x=b(this.left),A=t.left,L=b(t.right)-m,w=x+m,S=this.left+u;else if(e==="x"){if(r==="center")x=b((t.top+t.bottom)/2+.5);else if(O(r)){const W=Object.keys(r)[0],U=r[W];x=b(this.chart.scales[W].getPixelForValue(U))}D=t.top,J=t.bottom,k=x+m,C=k+u}else if(e==="y"){if(r==="center")x=b((t.left+t.right)/2);else if(O(r)){const W=Object.keys(r)[0],U=r[W];x=b(this.chart.scales[W].getPixelForValue(U))}w=x-m,S=w-u,A=t.left,L=t.right}const rt=T(n.ticks.maxTicksLimit,d),z=Math.max(1,Math.ceil(d/rt));for(_=0;_<d;_+=z){const W=this.getContext(_),U=o.setContext(W),ht=a.setContext(W),Z=U.lineWidth,ee=U.color,Ke=ht.dash||[],ie=ht.dashOffset,be=U.tickWidth,zt=U.tickColor,xe=U.tickBorderDash||[],Ft=U.tickBorderDashOffset;v=Zc(this,_,l),v!==void 0&&(y=Ht(s,v,Z),c?w=S=A=L=y:k=C=D=J=y,f.push({tx1:w,ty1:k,tx2:S,ty2:C,x1:A,y1:D,x2:L,y2:J,width:Z,color:ee,borderDash:Ke,borderDashOffset:ie,tickWidth:be,tickColor:zt,tickBorderDash:xe,tickBorderDashOffset:Ft}))}return this._ticksLength=d,this._borderValue=x,f}_computeLabelItems(t){const e=this.axis,s=this.options,{position:n,ticks:o}=s,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=o,u=ke(s.grid),f=u+h,g=d?-h:f,p=-dt(this.labelRotation),m=[];let b,x,_,v,y,w,k,S,C,A,D,L,J="middle";if(n==="top")w=this.bottom-g,k=this._getXAxisLabelAlignment();else if(n==="bottom")w=this.top+g,k=this._getXAxisLabelAlignment();else if(n==="left"){const z=this._getYAxisLabelAlignment(u);k=z.textAlign,y=z.x}else if(n==="right"){const z=this._getYAxisLabelAlignment(u);k=z.textAlign,y=z.x}else if(e==="x"){if(n==="center")w=(t.top+t.bottom)/2+f;else if(O(n)){const z=Object.keys(n)[0],W=n[z];w=this.chart.scales[z].getPixelForValue(W)+f}k=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")y=(t.left+t.right)/2-f;else if(O(n)){const z=Object.keys(n)[0],W=n[z];y=this.chart.scales[z].getPixelForValue(W)}k=this._getYAxisLabelAlignment(u).textAlign}e==="y"&&(l==="start"?J="top":l==="end"&&(J="bottom"));const rt=this._getLabelSizes();for(b=0,x=a.length;b<x;++b){_=a[b],v=_.label;const z=o.setContext(this.getContext(b));S=this.getPixelForTick(b)+o.labelOffset,C=this._resolveTickFontOptions(b),A=C.lineHeight,D=j(v)?v.length:1;const W=D/2,U=z.color,ht=z.textStrokeColor,Z=z.textStrokeWidth;let ee=k;r?(y=S,k==="inner"&&(b===x-1?ee=this.options.reverse?"left":"right":b===0?ee=this.options.reverse?"right":"left":ee="center"),n==="top"?c==="near"||p!==0?L=-D*A+A/2:c==="center"?L=-rt.highest.height/2-W*A+A:L=-rt.highest.height+A/2:c==="near"||p!==0?L=A/2:c==="center"?L=rt.highest.height/2-W*A:L=rt.highest.height-D*A,d&&(L*=-1),p!==0&&!z.showLabelBackdrop&&(y+=A/2*Math.sin(p))):(w=S,L=(1-D)*A/2);let Ke;if(z.showLabelBackdrop){const ie=it(z.backdropPadding),be=rt.heights[b],zt=rt.widths[b];let xe=L-ie.top,Ft=0-ie.left;switch(J){case"middle":xe-=be/2;break;case"bottom":xe-=be;break}switch(k){case"center":Ft-=zt/2;break;case"right":Ft-=zt;break;case"inner":b===x-1?Ft-=zt:b>0&&(Ft-=zt/2);break}Ke={left:Ft,top:xe,width:zt+ie.width,height:be+ie.height,color:z.backdropColor}}m.push({label:v,font:C,textOffset:L,options:{rotation:p,color:U,strokeColor:ht,strokeWidth:Z,textAlign:ee,textBaseline:J,translation:[y,w],backdrop:Ke}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-dt(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:n,padding:o}}=this.options,r=this._getLabelSizes(),a=t+o,l=r.widest.width;let c,h;return e==="left"?n?(h=this.right+o,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?n?(h=this.left+o,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:n,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(o=>o.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const a=(l,c,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(o=0,r=n.length;o<r;++o){const l=n[o];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:n}}=this,o=s.setContext(this.getContext()),r=s.display?o.width:0;if(!r)return;const a=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,u;this.isHorizontal()?(c=Ht(t,this.left,r)-r/2,h=Ht(t,this.right,a)+a/2,d=u=l):(d=Ht(t,this.top,r)-r/2,u=Ht(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(c,d),e.lineTo(h,u),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&Ti(s,n);const o=this.getLabelItems(t);for(const r of o){const a=r.options,l=r.font,c=r.label,h=r.textOffset;Qt(s,c,0,h,l,a)}n&&Pi(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;const o=q(s.font),r=it(s.padding),a=s.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||O(e)?(l+=r.bottom,j(s.text)&&(l+=o.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=sh(this,l,e,a);Qt(t,s.text,0,0,o,{color:s.color,maxWidth:d,rotation:u,textAlign:ih(a,e,n),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=T(t.grid&&t.grid.z,-1),n=T(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==te.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:s,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let o,r;for(o=0,r=e.length;o<r;++o){const a=e[o];a[s]===this.id&&(!t||a.type===t)&&n.push(a)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return q(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class oi{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;rh(e)&&(s=this.register(e));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,nh(t,r,s),this.override&&H.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in H[n]&&(delete H[n][s],this.override&&delete Zt[s])}}function nh(i,t,e){const s=Ne(Object.create(null),[e?H.get(e):{},H.get(t),i.defaults]);H.set(t,s),i.defaultRoutes&&oh(t,i.defaultRoutes),i.descriptors&&H.describe(t,i.descriptors)}function oh(i,t){Object.keys(t).forEach(e=>{const s=e.split("."),n=s.pop(),o=[i].concat(s).join("."),r=t[e].split("."),a=r.pop(),l=r.join(".");H.route(o,n,l,a)})}function rh(i){return"id"in i&&"defaults"in i}class ah{constructor(){this.controllers=new oi(Bt,"datasets",!0),this.elements=new oi(St,"elements"),this.plugins=new oi(Object,"plugins"),this.scales=new oi(te,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{const o=s||this._getRegistryForType(n);s||o.isForType(n)||o===this.plugins&&n.id?this._exec(t,o,n):B(n,r=>{const a=s||this._getRegistryForType(r);this._exec(t,a,r)})})}_exec(t,e,s){const n=ms(t);F(s["before"+n],[],s),e[t](s),F(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var gt=new ah;class lh{constructor(){this._init=void 0}notify(t,e,s,n){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,e,s);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,e,s,n){n=n||{};for(const o of t){const r=o.plugin,a=r[s],l=[e,n,o.options];if(F(a,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){E(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,n=T(s.options&&s.options.plugins,{}),o=ch(s);return n===!1&&!e?[]:dh(t,o,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,n=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}}function ch(i){const t={},e=[],s=Object.keys(gt.plugins.items);for(let o=0;o<s.length;o++)e.push(gt.getPlugin(s[o]));const n=i.plugins||[];for(let o=0;o<n.length;o++){const r=n[o];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function hh(i,t){return!t&&i===!1?null:i===!0?{}:i}function dh(i,{plugins:t,localIds:e},s,n){const o=[],r=i.getContext();for(const a of t){const l=a.id,c=hh(s[l],n);c!==null&&o.push({plugin:a,options:uh(i.config,{plugin:a,local:e[l]},c,r)})}return o}function uh(i,{plugin:t,local:e},s,n){const o=i.pluginScopeKeys(t),r=i.getOptionScopes(s,o);return e&&t.defaults&&r.push(t.defaults),i.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ts(i,t){const e=H.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function fh(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function gh(i,t){return i===t?"_index_":"_value_"}function Dn(i){if(i==="x"||i==="y"||i==="r")return i}function ph(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function es(i,...t){if(Dn(i))return i;for(const e of t){const s=e.axis||ph(e.position)||i.length>1&&Dn(i[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function En(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function mh(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===i||s.yAxisID===i);if(e.length)return En(i,"x",e[0])||En(i,"y",e[0])}return{}}function bh(i,t){const e=Zt[i.type]||{scales:{}},s=t.scales||{},n=ts(i.type,t),o=Object.create(null);return Object.keys(s).forEach(r=>{const a=s[r];if(!O(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=es(r,a,mh(r,i),H.scales[a.type]),c=gh(l,n),h=e.scales||{};o[r]=Oe(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(r=>{const a=r.type||i.type,l=r.indexAxis||ts(a,t),h=(Zt[a]||{}).scales||{};Object.keys(h).forEach(d=>{const u=fh(d,l),f=r[u+"AxisID"]||u;o[f]=o[f]||Object.create(null),Oe(o[f],[{axis:u},s[f],h[d]])})}),Object.keys(o).forEach(r=>{const a=o[r];Oe(a,[H.scales[a.type],H.scale])}),o}function lr(i){const t=i.options||(i.options={});t.plugins=T(t.plugins,{}),t.scales=bh(i,t)}function cr(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function xh(i){return i=i||{},i.data=cr(i.data),lr(i),i}const On=new Map,hr=new Set;function ri(i,t){let e=On.get(i);return e||(e=t(),On.set(i,e),hr.add(e)),e}const Se=(i,t,e)=>{const s=Ot(t,e);s!==void 0&&i.add(s)};class yh{constructor(t){this._config=xh(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=cr(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),lr(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ri(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ri(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ri(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return ri(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){const{options:n,type:o}=this,r=this._cachedScopes(t,s),a=r.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Se(l,t,d))),h.forEach(d=>Se(l,n,d)),h.forEach(d=>Se(l,Zt[o]||{},d)),h.forEach(d=>Se(l,H,d)),h.forEach(d=>Se(l,Zi,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),hr.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Zt[e]||{},H.datasets[e]||{},{type:e},H,Zi]}resolveNamedOptions(t,e,s,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=Ln(this._resolverCache,t,n);let l=r;if(_h(r,e)){o.$shared=!1,s=Lt(s)?s():s;const c=this.createResolver(t,s,a);l=he(r,s,c)}for(const c of e)o[c]=l[c];return o}createResolver(t,e,s=[""],n){const{resolver:o}=Ln(this._resolverCache,t,s);return O(e)?he(o,e,void 0,n):o}}function Ln(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));const n=e.join();let o=s.get(n);return o||(o={resolver:ws(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(n,o)),o}const vh=i=>O(i)&&Object.getOwnPropertyNames(i).some(t=>Lt(i[t]));function _h(i,t){const{isScriptable:e,isIndexable:s}=Wo(i);for(const n of t){const o=e(n),r=s(n),a=(r||o)&&i[n];if(o&&(Lt(a)||vh(a))||r&&j(a))return!0}return!1}var wh="4.5.1";const kh=["top","bottom","left","right","chartArea"];function $n(i,t){return i==="top"||i==="bottom"||kh.indexOf(i)===-1&&t==="x"}function In(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function Rn(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),F(e&&e.onComplete,[i],t)}function Sh(i){const t=i.chart,e=t.options.animation;F(e&&e.onProgress,[i],t)}function dr(i){return Cs()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const ui={},Bn=i=>{const t=dr(i);return Object.values(ui).filter(e=>e.canvas===t).pop()};function Ch(i,t,e){const s=Object.keys(i);for(const n of s){const o=+n;if(o>=t){const r=i[n];delete i[n],(e>0||o>t)&&(i[o+e]=r)}}}function Mh(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}class As{static defaults=H;static instances=ui;static overrides=Zt;static registry=gt;static version=wh;static getChart=Bn;static register(...t){gt.add(...t),zn()}static unregister(...t){gt.remove(...t),zn()}constructor(t,e){const s=this.config=new yh(e),n=dr(t),o=Bn(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Vc(n)),this.platform.updateConfig(s);const a=this.platform.acquireContext(n,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=_a(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lh,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=za(d=>this.update(d),r.resizeDelay||0),this._dataChanges=[],ui[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}xt.listen(this,"complete",Rn),xt.listen(this,"progress",Sh),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:o}=this;return E(t)?e&&o?o:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return gt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():rn(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sn(this.canvas,this.ctx),this}stop(){return xt.stop(this),this}resize(t,e){xt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,n=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,o),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,rn(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),F(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};B(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((r,a)=>(r[a]=!1,r),{});let o=[];e&&(o=o.concat(Object.keys(e).map(r=>{const a=e[r],l=es(r,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),B(o,r=>{const a=r.options,l=a.id,c=es(l,a),h=T(a.type,r.dtype);(a.position===void 0||$n(a.position,c)!==$n(r.dposition))&&(a.position=r.dposition),n[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const u=gt.getScale(h);d=new u({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),B(n,(r,a)=>{r||delete s[a]}),B(s,r=>{et.configure(this,r,r.options),et.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,o)=>n.index-o.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(In("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){const o=e[s];let r=this.getDatasetMeta(s);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=a,r.indexAxis=o.indexAxis||ts(a,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=gt.getController(a),{datasetElementType:c,dataElementType:h}=H.datasets[a];Object.assign(l,{dataElementType:gt.getElement(h),datasetElementType:c&&gt.getElement(c)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){B(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:d}=this.getDatasetMeta(c),u=!n&&o.indexOf(d)===-1;d.buildOrUpdateElements(u),r=Math.max(+d.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||B(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(In("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){B(this.scales,t=>{et.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!qs(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:o}of e){const r=s==="_removeElements"?-o:o;Ch(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),n=s(0);for(let o=1;o<e;o++)if(!qs(n,s(o)))return;return Array.from(n).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;et.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],B(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,o)=>{n._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Lt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(xt.has(this)?this.attached&&!xt.running(this)&&xt.start(this):(this.draw(),Rn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let n,o;for(n=0,o=e.length;n<o;++n){const r=e[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},n=Zo(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(n&&Ti(e,n),t.controller.draw(),n&&Pi(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return kt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){const o=kc.modes[e];return typeof o=="function"?o(this,t,s,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let n=s.filter(o=>o&&o._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Rt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const n=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);We(e)?(o.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(a=>a.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),xt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sn(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete ui[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(o,r)=>{e.addEventListener(this,o,r),t[o]=r},n=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};B(this.options.events,o=>s(o,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{n("attach",a),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():r()}unbindEvents(){B(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},B(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const n=s?"set":"remove";let o,r,a,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){r=t[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!pi(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const n=this.options.hover,o=(l,c)=>l.filter(h=>!c.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),r=o(e,t),a=s?t:o(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const o=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(o||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:n=[],options:o}=this,r=e,a=this._getActiveElements(t,n,s,r),l=Ta(t),c=Mh(t,this._lastEvent,s,l);s&&(this._lastEvent=null,F(o.onHover,[t,a,this],this),l&&F(o.onClick,[t,a,this],this));const h=!pi(a,n);return(h||e)&&(this._active=a,this._updateHoverStyles(a,n,e)),this._lastEvent=c,h}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}function zn(){return B(As.instances,i=>i._plugins.invalidate())}function Th(i,t,e){const{startAngle:s,x:n,y:o,outerRadius:r,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,d=Math.min(c/r,tt(s-e));if(i.beginPath(),i.arc(n,o,r-c/2,s+d/2,e-d/2),a>0){const u=Math.min(c/a,tt(s-e));i.arc(n,o,a+c/2,e-u/2,s+u/2,!0)}else{const u=Math.min(c/2,r*tt(s-e));if(h==="round")i.arc(n,o,u,e-$/2,s+$/2,!0);else if(h==="bevel"){const f=2*u*u,g=-f*Math.cos(e+$/2)+n,p=-f*Math.sin(e+$/2)+o,m=f*Math.cos(s+$/2)+n,b=f*Math.sin(s+$/2)+o;i.lineTo(g,p),i.lineTo(m,b)}}i.closePath(),i.moveTo(0,0),i.rect(0,0,i.canvas.width,i.canvas.height),i.clip("evenodd")}function Ph(i,t,e){const{startAngle:s,pixelMargin:n,x:o,y:r,outerRadius:a,innerRadius:l}=t;let c=n/a;i.beginPath(),i.arc(o,r,a,s-c,e+c),l>n?(c=n/l,i.arc(o,r,l,e+c,s-c,!0)):i.arc(o,r,n,e+Y,s-Y),i.closePath(),i.clip()}function Ah(i){return _s(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Dh(i,t,e,s){const n=Ah(i.options.borderRadius),o=(e-t)/2,r=Math.min(o,s*t/2),a=l=>{const c=(e-Math.min(o,l))*s/2;return G(l,0,Math.min(o,c))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:G(n.innerStart,0,r),innerEnd:G(n.innerEnd,0,r)}}function ne(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function _i(i,t,e,s,n,o){const{x:r,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-c,0),u=h>0?h+s+e+c:0;let f=0;const g=n-l;if(s){const z=h>0?h-s:0,W=d>0?d-s:0,U=(z+W)/2,ht=U!==0?g*U/(U+s):g;f=(g-ht)/2}const p=Math.max(.001,g*d-e/$)/d,m=(g-p)/2,b=l+m+f,x=n-m-f,{outerStart:_,outerEnd:v,innerStart:y,innerEnd:w}=Dh(t,u,d,x-b),k=d-_,S=d-v,C=b+_/k,A=x-v/S,D=u+y,L=u+w,J=b+y/D,rt=x-w/L;if(i.beginPath(),o){const z=(C+A)/2;if(i.arc(r,a,d,C,z),i.arc(r,a,d,z,A),v>0){const Z=ne(S,A,r,a);i.arc(Z.x,Z.y,v,A,x+Y)}const W=ne(L,x,r,a);if(i.lineTo(W.x,W.y),w>0){const Z=ne(L,rt,r,a);i.arc(Z.x,Z.y,w,x+Y,rt+Math.PI)}const U=(x-w/u+(b+y/u))/2;if(i.arc(r,a,u,x-w/u,U,!0),i.arc(r,a,u,U,b+y/u,!0),y>0){const Z=ne(D,J,r,a);i.arc(Z.x,Z.y,y,J+Math.PI,b-Y)}const ht=ne(k,b,r,a);if(i.lineTo(ht.x,ht.y),_>0){const Z=ne(k,C,r,a);i.arc(Z.x,Z.y,_,b-Y,C)}}else{i.moveTo(r,a);const z=Math.cos(C)*d+r,W=Math.sin(C)*d+a;i.lineTo(z,W);const U=Math.cos(A)*d+r,ht=Math.sin(A)*d+a;i.lineTo(U,ht)}i.closePath()}function Eh(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a}=t;let l=t.endAngle;if(o){_i(i,t,e,s,l,n);for(let c=0;c<o;++c)i.fill();isNaN(a)||(l=r+(a%N||N))}return _i(i,t,e,s,l,n),i.fill(),l}function Oh(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:d,borderDashOffset:u,borderRadius:f}=l,g=l.borderAlign==="inner";if(!c)return;i.setLineDash(d||[]),i.lineDashOffset=u,g?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let p=t.endAngle;if(o){_i(i,t,e,s,p,n);for(let m=0;m<o;++m)i.stroke();isNaN(a)||(p=r+(a%N||N))}g&&Ph(i,t,p),l.selfJoin&&p-r>=$&&f===0&&h!=="miter"&&Th(i,t,p),o||(_i(i,t,e,s,p,n),i.stroke())}class Lh extends St{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,s){const n=this.getProps(["x","y"],s),{angle:o,distance:r}=Eo(n,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),u=(this.options.spacing+this.options.borderWidth)/2,f=T(d,l-a),g=je(o,a,l)&&a!==l,p=f>=N||g,m=_t(r,c+u,h+u);return p&&m}getCenterPoint(t){const{x:e,y:s,startAngle:n,endAngle:o,innerRadius:r,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,h=(n+o)/2,d=(r+a+c+l)/2;return{x:e+Math.cos(h)*d,y:s+Math.sin(h)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:s}=this,n=(e.offset||0)/4,o=(e.spacing||0)/2,r=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=s>N?Math.floor(s/N):0,s===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*n,Math.sin(a)*n);const l=1-Math.sin(Math.min($,s||0)),c=n*l;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,Eh(t,this,c,o,r),Oh(t,this,c,o,r),t.restore()}}function ur(i,t,e=t){i.lineCap=T(e.borderCapStyle,t.borderCapStyle),i.setLineDash(T(e.borderDash,t.borderDash)),i.lineDashOffset=T(e.borderDashOffset,t.borderDashOffset),i.lineJoin=T(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=T(e.borderWidth,t.borderWidth),i.strokeStyle=T(e.borderColor,t.borderColor)}function $h(i,t,e){i.lineTo(e.x,e.y)}function Ih(i){return i.stepped?Ka:i.tension||i.cubicInterpolationMode==="monotone"?Ja:$h}function fr(i,t,e={}){const s=i.length,{start:n=0,end:o=s-1}=e,{start:r,end:a}=t,l=Math.max(n,r),c=Math.min(o,a),h=n<r&&o<r||n>a&&o>a;return{count:s,start:l,loop:t.loop,ilen:c<l&&!h?s+c-l:c-l}}function Rh(i,t,e,s){const{points:n,options:o}=t,{count:r,start:a,loop:l,ilen:c}=fr(n,e,s),h=Ih(o);let{move:d=!0,reverse:u}=s||{},f,g,p;for(f=0;f<=c;++f)g=n[(a+(u?c-f:f))%r],!g.skip&&(d?(i.moveTo(g.x,g.y),d=!1):h(i,p,g,u,o.stepped),p=g);return l&&(g=n[(a+(u?c:0))%r],h(i,p,g,u,o.stepped)),!!l}function Bh(i,t,e,s){const n=t.points,{count:o,start:r,ilen:a}=fr(n,e,s),{move:l=!0,reverse:c}=s||{};let h=0,d=0,u,f,g,p,m,b;const x=v=>(r+(c?a-v:v))%o,_=()=>{p!==m&&(i.lineTo(h,m),i.lineTo(h,p),i.lineTo(h,b))};for(l&&(f=n[x(0)],i.moveTo(f.x,f.y)),u=0;u<=a;++u){if(f=n[x(u)],f.skip)continue;const v=f.x,y=f.y,w=v|0;w===g?(y<p?p=y:y>m&&(m=y),h=(d*h+v)/++d):(_(),i.lineTo(v,y),g=w,d=0,p=m=y),b=y}_()}function is(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Bh:Rh}function zh(i){return i.stepped?Al:i.tension||i.cubicInterpolationMode==="monotone"?Dl:qt}function Fh(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),ur(i,t.options),i.stroke(n)}function Nh(i,t,e,s){const{segments:n,options:o}=t,r=is(t);for(const a of n)ur(i,o,a.style),i.beginPath(),r(i,t,a,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}const Wh=typeof Path2D=="function";function jh(i,t,e,s){Wh&&!t.options.segment?Fh(i,t,e,s):Nh(i,t,e,s)}class Ei extends St{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;_l(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Rl(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,n=t[e],o=this.points,r=Jo(this,{property:e,start:n,end:n});if(!r.length)return;const a=[],l=zh(s);let c,h;for(c=0,h=r.length;c<h;++c){const{start:d,end:u}=r[c],f=o[d],g=o[u];if(f===g){a.push(f);continue}const p=Math.abs((n-f[e])/(g[e]-f[e])),m=l(f,g,p,s.stepped);m[e]=t[e],a.push(m)}return a.length===1?a[0]:a}pathSegment(t,e,s){return is(this)(t,this,e,s)}path(t,e,s){const n=this.segments,o=is(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const a of n)r&=o(t,this,a,{start:e,end:e+s-1});return!!r}draw(t,e,s,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),jh(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Fn(i,t,e,s){const n=i.options,{[e]:o}=i.getProps([e],s);return Math.abs(t-o)<n.radius+n.hitRadius}class Hh extends St{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,s){const n=this.options,{x:o,y:r}=this.getProps(["x","y"],s);return Math.pow(t-o,2)+Math.pow(e-r,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return Fn(this,t,"x",e)}inYRange(t,e){return Fn(this,t,"y",e)}getCenterPoint(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const s=e&&t.borderWidth||0;return(e+s)*2}draw(t,e){const s=this.options;this.skip||s.radius<.1||!kt(this,e,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Qi(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function gr(i,t){const{x:e,y:s,base:n,width:o,height:r}=i.getProps(["x","y","base","width","height"],t);let a,l,c,h,d;return i.horizontal?(d=r/2,a=Math.min(e,n),l=Math.max(e,n),c=s-d,h=s+d):(d=o/2,a=e-d,l=e+d,c=Math.min(s,n),h=Math.max(s,n)),{left:a,top:c,right:l,bottom:h}}function Dt(i,t,e,s){return i?0:G(t,e,s)}function Vh(i,t,e){const s=i.options.borderWidth,n=i.borderSkipped,o=No(s);return{t:Dt(n.top,o.top,0,e),r:Dt(n.right,o.right,0,t),b:Dt(n.bottom,o.bottom,0,e),l:Dt(n.left,o.left,0,t)}}function Uh(i,t,e){const{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,o=Gt(n),r=Math.min(t,e),a=i.borderSkipped,l=s||O(n);return{topLeft:Dt(!l||a.top||a.left,o.topLeft,0,r),topRight:Dt(!l||a.top||a.right,o.topRight,0,r),bottomLeft:Dt(!l||a.bottom||a.left,o.bottomLeft,0,r),bottomRight:Dt(!l||a.bottom||a.right,o.bottomRight,0,r)}}function Yh(i){const t=gr(i),e=t.right-t.left,s=t.bottom-t.top,n=Vh(i,e/2,s/2),o=Uh(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:o},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function Ui(i,t,e,s){const n=t===null,o=e===null,a=i&&!(n&&o)&&gr(i,s);return a&&(n||_t(t,a.left,a.right))&&(o||_t(e,a.top,a.bottom))}function qh(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function Xh(i,t){i.rect(t.x,t.y,t.w,t.h)}function Yi(i,t,e={}){const s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,o=(i.x+i.w!==e.x+e.w?t:0)-s,r=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+o,h:i.h+r,radius:i.radius}}class Gh extends St{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:o,outer:r}=Yh(this),a=qh(r.radius)?He:Xh;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),a(t,Yi(r,e,o)),t.clip(),a(t,Yi(o,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Yi(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return Ui(this,t,e,s)}inXRange(t,e){return Ui(this,t,null,e)}inYRange(t,e){return Ui(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}var Kh=Object.freeze({__proto__:null,ArcElement:Lh,BarElement:Gh,LineElement:Ei,PointElement:Hh});const ss=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Nn=ss.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function pr(i){return ss[i%ss.length]}function mr(i){return Nn[i%Nn.length]}function Jh(i,t){return i.borderColor=pr(t),i.backgroundColor=mr(t),++t}function Zh(i,t){return i.backgroundColor=i.data.map(()=>pr(t++)),t}function Qh(i,t){return i.backgroundColor=i.data.map(()=>mr(t++)),t}function td(i){let t=0;return(e,s)=>{const n=i.getDatasetMeta(s).controller;n instanceof Ts?t=Zh(e,t):n instanceof ir?t=Qh(e,t):n&&(t=Jh(e,t))}}function Wn(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function ed(i){return i&&(i.borderColor||i.backgroundColor)}function id(){return H.borderColor!=="rgba(0,0,0,0.1)"||H.backgroundColor!=="rgba(0,0,0,0.1)"}var sd={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:s},options:n}=i.config,{elements:o}=n,r=Wn(s)||ed(n)||o&&Wn(o)||id();if(!e.forceOverride&&r)return;const a=td(i);s.forEach(a)}};function nd(i,t,e,s,n){const o=n.samples||s;if(o>=e)return i.slice(t,t+e);const r=[],a=(e-2)/(o-2);let l=0;const c=t+e-1;let h=t,d,u,f,g,p;for(r[l++]=i[h],d=0;d<o-2;d++){let m=0,b=0,x;const _=Math.floor((d+1)*a)+1+t,v=Math.min(Math.floor((d+2)*a)+1,e)+t,y=v-_;for(x=_;x<v;x++)m+=i[x].x,b+=i[x].y;m/=y,b/=y;const w=Math.floor(d*a)+1+t,k=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:S,y:C}=i[h];for(f=g=-1,x=w;x<k;x++)g=.5*Math.abs((S-m)*(i[x].y-C)-(S-i[x].x)*(b-C)),g>f&&(f=g,u=i[x],p=x);r[l++]=u,h=p}return r[l++]=i[c],r}function od(i,t,e,s){let n=0,o=0,r,a,l,c,h,d,u,f,g,p;const m=[],b=t+e-1,x=i[t].x,v=i[b].x-x;for(r=t;r<t+e;++r){a=i[r],l=(a.x-x)/v*s,c=a.y;const y=l|0;if(y===h)c<g?(g=c,d=r):c>p&&(p=c,u=r),n=(o*n+a.x)/++o;else{const w=r-1;if(!E(d)&&!E(u)){const k=Math.min(d,u),S=Math.max(d,u);k!==f&&k!==w&&m.push({...i[k],x:n}),S!==f&&S!==w&&m.push({...i[S],x:n})}r>0&&w!==f&&m.push(i[w]),m.push(a),h=y,o=0,g=p=c,d=u=f=r}}return m}function br(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function jn(i){i.data.datasets.forEach(t=>{br(t)})}function rd(i,t){const e=t.length;let s=0,n;const{iScale:o}=i,{min:r,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(s=G(wt(t,o.axis,r).lo,0,e-1)),c?n=G(wt(t,o.axis,a).hi+1,s,e)-s:n=e-s,{start:s,count:n}}var ad={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){jn(i);return}const s=i.width;i.data.datasets.forEach((n,o)=>{const{_data:r,indexAxis:a}=n,l=i.getDatasetMeta(o),c=r||n.data;if(Me([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:d,count:u}=rd(l,c);const f=e.threshold||4*s;if(u<=f){br(n);return}E(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let g;switch(e.algorithm){case"lttb":g=nd(c,d,u,s,e);break;case"min-max":g=od(c,d,u,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=g})},destroy(i){jn(i)}};function ld(i,t,e){const s=i.segments,n=i.points,o=t.points,r=[];for(const a of s){let{start:l,end:c}=a;c=Oi(l,c,n);const h=ns(e,n[l],n[c],a.loop);if(!t.segments){r.push({source:a,target:h,start:n[l],end:n[c]});continue}const d=Jo(t,h);for(const u of d){const f=ns(e,o[u.start],o[u.end],u.loop),g=Ko(a,n,f);for(const p of g)r.push({source:p,target:u,start:{[e]:Hn(h,f,"start",Math.max)},end:{[e]:Hn(h,f,"end",Math.min)}})}}return r}function ns(i,t,e,s){if(s)return;let n=t[i],o=e[i];return i==="angle"&&(n=tt(n),o=tt(o)),{property:i,start:n,end:o}}function cd(i,t){const{x:e=null,y:s=null}=i||{},n=t.points,o=[];return t.segments.forEach(({start:r,end:a})=>{a=Oi(r,a,n);const l=n[r],c=n[a];s!==null?(o.push({x:l.x,y:s}),o.push({x:c.x,y:s})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:c.y}))}),o}function Oi(i,t,e){for(;t>i;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Hn(i,t,e,s){return i&&t?s(i[e],t[e]):i?i[e]:t?t[e]:0}function xr(i,t){let e=[],s=!1;return j(i)?(s=!0,e=i):e=cd(i,t),e.length?new Ei({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Vn(i){return i&&i.fill!==!1}function hd(i,t,e){let n=i[t].fill;const o=[t];let r;if(!e)return n;for(;n!==!1&&o.indexOf(n)===-1;){if(!V(n))return n;if(r=i[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function dd(i,t,e){const s=pd(i);if(O(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return V(n)&&Math.floor(n)===n?ud(s[0],t,n,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function ud(i,t,e,s){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function fd(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:O(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function gd(i,t,e){let s;return i==="start"?s=e:i==="end"?s=t.options.reverse?t.min:t.max:O(i)?s=i.value:s=t.getBaseValue(),s}function pd(i){const t=i.options,e=t.fill;let s=T(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function md(i){const{scale:t,index:e,line:s}=i,n=[],o=s.segments,r=s.points,a=bd(t,e);a.push(xr({x:null,y:t.bottom},s));for(let l=0;l<o.length;l++){const c=o[l];for(let h=c.start;h<=c.end;h++)xd(n,r[h],a)}return new Ei({points:n,options:{}})}function bd(i,t){const e=[],s=i.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const o=s[n];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function xd(i,t,e){const s=[];for(let n=0;n<e.length;n++){const o=e[n],{first:r,last:a,point:l}=yd(o,t,"x");if(!(!l||r&&a)){if(r)s.unshift(l);else if(i.push(l),!a)break}}i.push(...s)}function yd(i,t,e){const s=i.interpolate(t,e);if(!s)return{};const n=s[e],o=i.segments,r=i.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const h=o[c],d=r[h.start][e],u=r[h.end][e];if(_t(n,d,u)){a=n===d,l=n===u;break}}return{first:a,last:l,point:s}}class yr{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:n,y:o,radius:r}=this;return e=e||{start:0,end:N},t.arc(n,o,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:s+Math.sin(o)*n,angle:o}}}function vd(i){const{chart:t,fill:e,line:s}=i;if(V(e))return _d(t,e);if(e==="stack")return md(i);if(e==="shape")return!0;const n=wd(i);return n instanceof yr?n:xr(n,s)}function _d(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function wd(i){return(i.scale||{}).getPointPositionForValue?Sd(i):kd(i)}function kd(i){const{scale:t={},fill:e}=i,s=fd(e,t);if(V(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function Sd(i){const{scale:t,fill:e}=i,s=t.options,n=t.getLabels().length,o=s.reverse?t.max:t.min,r=gd(e,t,o),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,o);return new yr({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)a.push(t.getPointPositionForValue(l,r));return a}function qi(i,t,e){const s=vd(t),{chart:n,index:o,line:r,scale:a,axis:l}=t,c=r.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:f=d}=h||{},g=n.getDatasetMeta(o),p=Zo(n,g);s&&r.points.length&&(Ti(i,e),Cd(i,{line:r,target:s,above:u,below:f,area:e,scale:a,axis:l,clip:p}),Pi(i))}function Cd(i,t){const{line:e,target:s,above:n,below:o,area:r,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;i.save();let h=o;o!==n&&(c==="x"?(Un(i,s,r.top),Xi(i,{line:e,target:s,color:n,scale:a,property:c,clip:l}),i.restore(),i.save(),Un(i,s,r.bottom)):c==="y"&&(Yn(i,s,r.left),Xi(i,{line:e,target:s,color:o,scale:a,property:c,clip:l}),i.restore(),i.save(),Yn(i,s,r.right),h=n)),Xi(i,{line:e,target:s,color:h,scale:a,property:c,clip:l}),i.restore()}function Un(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[Oi(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(d.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Yn(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[Oi(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(e,h.y),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(e,d.y)}i.lineTo(e,t.first().y),i.closePath(),i.clip()}function Xi(i,t){const{line:e,target:s,property:n,color:o,scale:r,clip:a}=t,l=ld(e,s,n);for(const{source:c,target:h,start:d,end:u}of l){const{style:{backgroundColor:f=o}={}}=c,g=s!==!0;i.save(),i.fillStyle=f,Md(i,r,a,g&&ns(n,d,u)),i.beginPath();const p=!!e.pathSegment(i,c);let m;if(g){p?i.closePath():qn(i,s,u,n);const b=!!s.pathSegment(i,h,{move:p,reverse:!0});m=p&&b,m||qn(i,s,d,n)}i.closePath(),i.fill(m?"evenodd":"nonzero"),i.restore()}}function Md(i,t,e,s){const n=t.chart.chartArea,{property:o,start:r,end:a}=s||{};if(o==="x"||o==="y"){let l,c,h,d;o==="x"?(l=r,c=n.top,h=a,d=n.bottom):(l=n.left,c=r,h=n.right,d=a),i.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),d=Math.min(d,e.bottom)),i.rect(l,c,h-l,d-c),i.clip()}}function qn(i,t,e,s){const n=t.interpolate(e,s);n&&i.lineTo(n.x,n.y)}var Td={id:"filler",afterDatasetsUpdate(i,t,e){const s=(i.data.datasets||[]).length,n=[];let o,r,a,l;for(r=0;r<s;++r)o=i.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof Ei&&(l={visible:i.isDatasetVisible(r),index:r,fill:dd(a,r,s),chart:i,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=hd(n,r,e.propagate))},beforeDraw(i,t,e){const s=e.drawTime==="beforeDraw",n=i.getSortedVisibleDatasetMetas(),o=i.chartArea;for(let r=n.length-1;r>=0;--r){const a=n[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),s&&a.fill&&qi(i.ctx,a,o))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=i.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const o=s[n].$filler;Vn(o)&&qi(i.ctx,o,i.chartArea)}},beforeDatasetDraw(i,t,e){const s=t.meta.$filler;!Vn(s)||e.drawTime!=="beforeDatasetDraw"||qi(i.ctx,s,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Xn=(i,t)=>{let{boxHeight:e=t,boxWidth:s=t}=i;return i.usePointStyle&&(e=Math.min(e,t),s=i.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},Pd=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class Gn extends St{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=F(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=q(s.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Xn(s,o);let c,h;e.font=n.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(r,o,a,l)+10):(h=this.maxHeight,c=this._fitCols(r,n,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,n){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=n+a;let d=t;o.textAlign="left",o.textBaseline="middle";let u=-1,f=-h;return this.legendItems.forEach((g,p)=>{const m=s+e/2+o.measureText(g.text).width;(p===0||c[c.length-1]+m+2*a>r)&&(d+=h,c[c.length-(p>0?0:1)]=0,f+=h,u++),l[p]={left:0,top:f,row:u,width:m,height:n},c[c.length-1]+=m+a}),d}_fitCols(t,e,s,n){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=r-t;let d=a,u=0,f=0,g=0,p=0;return this.legendItems.forEach((m,b)=>{const{itemWidth:x,itemHeight:_}=Ad(s,e,o,m,n);b>0&&f+_+2*a>h&&(d+=u+a,c.push({width:u,height:f}),g+=u+a,p++,u=f=0),l[b]={left:g,top:f,col:p,width:x,height:_},u=Math.max(u,x),f+=_+a}),d+=u,c.push({width:u,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:n},rtl:o}}=this,r=re(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=Q(s,this.left+n,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=Q(s,this.left+n,this.right-this.lineWidths[a])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let a=0,l=Q(s,this.top+t+n,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=Q(s,this.top+t+n,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Ti(t,this),this._draw(),Pi(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:n}=this,{align:o,labels:r}=t,a=H.color,l=re(t.rtl,this.left,this.width),c=q(r.font),{padding:h}=r,d=c.size,u=d/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:g,boxHeight:p,itemHeight:m}=Xn(r,d),b=function(w,k,S){if(isNaN(g)||g<=0||isNaN(p)||p<0)return;n.save();const C=T(S.lineWidth,1);if(n.fillStyle=T(S.fillStyle,a),n.lineCap=T(S.lineCap,"butt"),n.lineDashOffset=T(S.lineDashOffset,0),n.lineJoin=T(S.lineJoin,"miter"),n.lineWidth=C,n.strokeStyle=T(S.strokeStyle,a),n.setLineDash(T(S.lineDash,[])),r.usePointStyle){const A={radius:p*Math.SQRT2/2,pointStyle:S.pointStyle,rotation:S.rotation,borderWidth:C},D=l.xPlus(w,g/2),L=k+u;Fo(n,A,D,L,r.pointStyleWidth&&g)}else{const A=k+Math.max((d-p)/2,0),D=l.leftForLtr(w,g),L=Gt(S.borderRadius);n.beginPath(),Object.values(L).some(J=>J!==0)?He(n,{x:D,y:A,w:g,h:p,radius:L}):n.rect(D,A,g,p),n.fill(),C!==0&&n.stroke()}n.restore()},x=function(w,k,S){Qt(n,S.text,w,k+m/2,c,{strikethrough:S.hidden,textAlign:l.textAlign(S.textAlign)})},_=this.isHorizontal(),v=this._computeTitleHeight();_?f={x:Q(o,this.left+h,this.right-s[0]),y:this.top+h+v,line:0}:f={x:this.left+h,y:Q(o,this.top+v+h,this.bottom-e[0].height),line:0},qo(this.ctx,t.textDirection);const y=m+h;this.legendItems.forEach((w,k)=>{n.strokeStyle=w.fontColor,n.fillStyle=w.fontColor;const S=n.measureText(w.text).width,C=l.textAlign(w.textAlign||(w.textAlign=r.textAlign)),A=g+u+S;let D=f.x,L=f.y;l.setWidth(this.width),_?k>0&&D+A+h>this.right&&(L=f.y+=y,f.line++,D=f.x=Q(o,this.left+h,this.right-s[f.line])):k>0&&L+y>this.bottom&&(D=f.x=D+e[f.line].width+h,f.line++,L=f.y=Q(o,this.top+v+h,this.bottom-e[f.line].height));const J=l.x(D);if(b(J,L,w),D=Fa(C,D+g+u,_?D+A:this.right,t.rtl),x(l.x(D),L,w),_)f.x+=A+h;else if(typeof w.text!="string"){const rt=c.lineHeight;f.y+=vr(w,rt)+h}else f.y+=y}),Xo(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=q(e.font),n=it(e.padding);if(!e.display)return;const o=re(t.rtl,this.left,this.width),r=this.ctx,a=e.position,l=s.size/2,c=n.top+l;let h,d=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),h=this.top+c,d=Q(t.align,d,this.right-u);else{const g=this.columnSizes.reduce((p,m)=>Math.max(p,m.height),0);h=c+Q(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const f=Q(a,d,d+u);r.textAlign=o.textAlign(ys(a)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,Qt(r,e.text,f,h,s)}_computeTitleHeight(){const t=this.options.title,e=q(t.font),s=it(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,n,o;if(_t(t,this.left,this.right)&&_t(e,this.top,this.bottom)){for(o=this.legendHitBoxes,s=0;s<o.length;++s)if(n=o[s],_t(t,n.left,n.left+n.width)&&_t(e,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!Od(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,o=Pd(n,s);n&&!o&&F(e.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!o&&F(e.onHover,[t,s,this],this)}else s&&F(e.onClick,[t,s,this],this)}}function Ad(i,t,e,s,n){const o=Dd(s,i,t,e),r=Ed(n,s,t.lineHeight);return{itemWidth:o,itemHeight:r}}function Dd(i,t,e,s){let n=i.text;return n&&typeof n!="string"&&(n=n.reduce((o,r)=>o.length>r.length?o:r)),t+e.size/2+s.measureText(n).width}function Ed(i,t,e){let s=i;return typeof t.text!="string"&&(s=vr(t,e)),s}function vr(i,t){const e=i.text?i.text.length:0;return t*e}function Od(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var Ld={id:"legend",_element:Gn,start(i,t,e){const s=i.legend=new Gn({ctx:i.ctx,options:e,chart:i});et.configure(i,s,e),et.addBox(i,s)},stop(i){et.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const s=i.legend;et.configure(i,s,e),s.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const s=t.datasetIndex,n=e.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=it(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Ds extends St{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=j(s.text)?s.text.length:1;this._padding=it(s.padding);const o=n*q(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:n,right:o,options:r}=this,a=r.align;let l=0,c,h,d;return this.isHorizontal()?(h=Q(a,s,o),d=e+t,c=o-s):(r.position==="left"?(h=s+t,d=Q(a,n,e),l=$*-.5):(h=o-t,d=Q(a,e,n),l=$*.5),c=n-e),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=q(e.font),o=s.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);Qt(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:c,textAlign:ys(e.align),textBaseline:"middle",translation:[r,a]})}}function $d(i,t){const e=new Ds({ctx:i.ctx,options:t,chart:i});et.configure(i,e,t),et.addBox(i,e),i.titleBlock=e}var Id={id:"title",_element:Ds,start(i,t,e){$d(i,e)},stop(i){const t=i.titleBlock;et.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const s=i.titleBlock;et.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ai=new WeakMap;var Rd={id:"subtitle",start(i,t,e){const s=new Ds({ctx:i.ctx,options:e,chart:i});et.configure(i,s,e),et.addBox(i,s),ai.set(i,s)},stop(i){et.removeBox(i,ai.get(i)),ai.delete(i)},beforeUpdate(i,t,e){const s=ai.get(i);et.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Pe={average(i){if(!i.length)return!1;let t,e,s=new Set,n=0,o=0;for(t=0,e=i.length;t<e;++t){const a=i[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),n+=l.y,++o}}return o===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:n/o}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=i.length;o<r;++o){const l=i[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Ji(t,c);h<n&&(n=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function ft(i,t){return t&&(j(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function yt(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Bd(i,t){const{element:e,datasetIndex:s,index:n}=t,o=i.getDatasetMeta(s).controller,{label:r,value:a}=o.getLabelAndValue(n);return{chart:i,label:r,parsed:o.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:a,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function Kn(i,t){const e=i.chart.ctx,{body:s,footer:n,title:o}=i,{boxWidth:r,boxHeight:a}=t,l=q(t.bodyFont),c=q(t.titleFont),h=q(t.footerFont),d=o.length,u=n.length,f=s.length,g=it(t.padding);let p=g.height,m=0,b=s.reduce((v,y)=>v+y.before.length+y.lines.length+y.after.length,0);if(b+=i.beforeBody.length+i.afterBody.length,d&&(p+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),b){const v=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;p+=f*v+(b-f)*l.lineHeight+(b-1)*t.bodySpacing}u&&(p+=t.footerMarginTop+u*h.lineHeight+(u-1)*t.footerSpacing);let x=0;const _=function(v){m=Math.max(m,e.measureText(v).width+x)};return e.save(),e.font=c.string,B(i.title,_),e.font=l.string,B(i.beforeBody.concat(i.afterBody),_),x=t.displayColors?r+2+t.boxPadding:0,B(s,v=>{B(v.before,_),B(v.lines,_),B(v.after,_)}),x=0,e.font=h.string,B(i.footer,_),e.restore(),m+=g.width,{width:m,height:p}}function zd(i,t){const{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function Fd(i,t,e,s){const{x:n,width:o}=s,r=e.caretSize+e.caretPadding;if(i==="left"&&n+o+r>t.width||i==="right"&&n-o-r<0)return!0}function Nd(i,t,e,s){const{x:n,width:o}=e,{width:r,chartArea:{left:a,right:l}}=i;let c="center";return s==="center"?c=n<=(a+l)/2?"left":"right":n<=o/2?c="left":n>=r-o/2&&(c="right"),Fd(c,i,t,e)&&(c="center"),c}function Jn(i,t,e){const s=e.yAlign||t.yAlign||zd(i,e);return{xAlign:e.xAlign||t.xAlign||Nd(i,t,e,s),yAlign:s}}function Wd(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function jd(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function Zn(i,t,e,s){const{caretSize:n,caretPadding:o,cornerRadius:r}=i,{xAlign:a,yAlign:l}=e,c=n+o,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:f}=Gt(r);let g=Wd(t,a);const p=jd(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,u)+n:a==="right"&&(g+=Math.max(d,f)+n),{x:G(g,0,s.width-t.width),y:G(p,0,s.height-t.height)}}function li(i,t,e){const s=it(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function Qn(i){return ft([],yt(i))}function Hd(i,t,e){return Rt(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function to(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const _r={beforeTitle:bt,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:bt,beforeBody:bt,beforeLabel:bt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return E(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:bt,afterBody:bt,beforeFooter:bt,footer:bt,afterFooter:bt};function nt(i,t,e,s){const n=i[t].call(e,s);return typeof n>"u"?_r[t].call(e,s):n}class eo extends St{static positioners=Pe;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,o=new Qo(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=Hd(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,n=nt(s,"beforeTitle",this,t),o=nt(s,"title",this,t),r=nt(s,"afterTitle",this,t);let a=[];return a=ft(a,yt(n)),a=ft(a,yt(o)),a=ft(a,yt(r)),a}getBeforeBody(t,e){return Qn(nt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,n=[];return B(t,o=>{const r={before:[],lines:[],after:[]},a=to(s,o);ft(r.before,yt(nt(a,"beforeLabel",this,o))),ft(r.lines,nt(a,"label",this,o)),ft(r.after,yt(nt(a,"afterLabel",this,o))),n.push(r)}),n}getAfterBody(t,e){return Qn(nt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,n=nt(s,"beforeFooter",this,t),o=nt(s,"footer",this,t),r=nt(s,"afterFooter",this,t);let a=[];return a=ft(a,yt(n)),a=ft(a,yt(o)),a=ft(a,yt(r)),a}_createItems(t){const e=this._active,s=this.chart.data,n=[],o=[],r=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(Bd(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,u)=>t.filter(h,d,u,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),B(a,h=>{const d=to(t.callbacks,h);n.push(nt(d,"labelColor",this,h)),o.push(nt(d,"labelPointStyle",this,h)),r.push(nt(d,"labelTextColor",this,h))}),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(!n.length)this.opacity!==0&&(o={opacity:0});else{const a=Pe[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=Kn(this,s),c=Object.assign({},a,l),h=Jn(this.chart,s,c),d=Zn(s,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){const o=this.getCaretPosition(t,s,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,s){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:a}=s,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:d}=Gt(a),{x:u,y:f}=t,{width:g,height:p}=e;let m,b,x,_,v,y;return o==="center"?(v=f+p/2,n==="left"?(m=u,b=m-r,_=v+r,y=v-r):(m=u+g,b=m+r,_=v-r,y=v+r),x=m):(n==="left"?b=u+Math.max(l,h)+r:n==="right"?b=u+g-Math.max(c,d)-r:b=this.caretX,o==="top"?(_=f,v=_-r,m=b-r,x=b+r):(_=f+p,v=_+r,m=b+r,x=b-r),y=_),{x1:m,x2:b,x3:x,y1:_,y2:v,y3:y}}drawTitle(t,e,s){const n=this.title,o=n.length;let r,a,l;if(o){const c=re(s.rtl,this.x,this.width);for(t.x=li(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",r=q(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,l=0;l<o;++l)e.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+a,l+1===o&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,n,o){const r=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=o,h=q(o.bodyFont),d=li(this,"left",o),u=n.x(d),f=l<h.lineHeight?(h.lineHeight-l)/2:0,g=e.y+f;if(o.usePointStyle){const p={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},m=n.leftForLtr(u,c)+c/2,b=g+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Qi(t,p,m,b),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Qi(t,p,m,b)}else{t.lineWidth=O(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const p=n.leftForLtr(u,c),m=n.leftForLtr(n.xPlus(u,1),c-2),b=Gt(r.borderRadius);Object.values(b).some(x=>x!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,He(t,{x:p,y:g,w:c,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),He(t,{x:m,y:g+1,w:c-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(p,g,c,l),t.strokeRect(p,g,c,l),t.fillStyle=r.backgroundColor,t.fillRect(m,g+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=s,d=q(s.bodyFont);let u=d.lineHeight,f=0;const g=re(s.rtl,this.x,this.width),p=function(S){e.fillText(S,g.x(t.x+f),t.y+u/2),t.y+=u+o},m=g.textAlign(r);let b,x,_,v,y,w,k;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=li(this,m,s),e.fillStyle=s.bodyColor,B(this.beforeBody,p),f=a&&m!=="right"?r==="center"?c/2+h:c+2+h:0,v=0,w=n.length;v<w;++v){for(b=n[v],x=this.labelTextColors[v],e.fillStyle=x,B(b.before,p),_=b.lines,a&&_.length&&(this._drawColorBox(e,t,v,g,s),u=Math.max(d.lineHeight,l)),y=0,k=_.length;y<k;++y)p(_[y]),u=d.lineHeight;B(b.after,p)}f=0,u=d.lineHeight,B(this.afterBody,p),t.y-=o}drawFooter(t,e,s){const n=this.footer,o=n.length;let r,a;if(o){const l=re(s.rtl,this.x,this.width);for(t.x=li(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",r=q(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,a=0;a<o;++a)e.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=t,{width:c,height:h}=s,{topLeft:d,topRight:u,bottomLeft:f,bottomRight:g}=Gt(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+d,l),r==="top"&&this.drawCaret(t,e,s,n),e.lineTo(a+c-u,l),e.quadraticCurveTo(a+c,l,a+c,l+u),r==="center"&&o==="right"&&this.drawCaret(t,e,s,n),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),r==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),r==="center"&&o==="left"&&this.drawCaret(t,e,s,n),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,n=s&&s.x,o=s&&s.y;if(n||o){const r=Pe[t.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=Kn(this,t),l=Object.assign({},r,this._size),c=Jn(e,t,l),h=Zn(t,l,c,e);(n._to!==h.x||o._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=it(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,n,e),qo(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),Xo(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,n=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!pi(s,n),r=this._positionChanged(n,e);(o||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,s),a=this._positionChanged(r,t),l=e||!pi(r,o)||a;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){const o=this.options;if(t.type==="mouseout")return[];if(!n)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:n,options:o}=this,r=Pe[o.position].call(this,t,e);return r!==!1&&(s!==r.x||n!==r.y)}}var Vd={id:"tooltip",_element:eo,positioners:Pe,afterInit(i,t,e){e&&(i.tooltip=new eo({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_r},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Ud=Object.freeze({__proto__:null,Colors:sd,Decimation:ad,Filler:Td,Legend:Ld,SubTitle:Rd,Title:Id,Tooltip:Vd});const Yd=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function qd(i,t,e,s){const n=i.indexOf(t);if(n===-1)return Yd(i,t,e,s);const o=i.lastIndexOf(t);return n!==o?e:n}const Xd=(i,t)=>i===null?null:G(Math.round(i),0,t);function io(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class Gd extends te{static id="category";static defaults={ticks:{callback:io}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:n,label:o}of e)s[n]===o&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(E(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:qd(s,t,T(e,t),this._addedLabels),Xd(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,n=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)n.push({value:r});return n}getLabelForValue(t){return io.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Kd(i,t){const e=[],{bounds:n,step:o,min:r,max:a,precision:l,count:c,maxTicks:h,maxDigits:d,includeBounds:u}=i,f=o||1,g=h-1,{min:p,max:m}=t,b=!E(r),x=!E(a),_=!E(c),v=(m-p)/(d+1);let y=Gs((m-p)/g/f)*f,w,k,S,C;if(y<1e-14&&!b&&!x)return[{value:p},{value:m}];C=Math.ceil(m/y)-Math.floor(p/y),C>g&&(y=Gs(C*y/g/f)*f),E(l)||(w=Math.pow(10,l),y=Math.ceil(y*w)/w),n==="ticks"?(k=Math.floor(p/y)*y,S=Math.ceil(m/y)*y):(k=p,S=m),b&&x&&o&&Oa((a-r)/o,y/1e3)?(C=Math.round(Math.min((a-r)/y,h)),y=(a-r)/C,k=r,S=a):_?(k=b?r:k,S=x?a:S,C=c-1,y=(S-k)/C):(C=(S-k)/y,Le(C,Math.round(C),y/1e3)?C=Math.round(C):C=Math.ceil(C));const A=Math.max(Ks(y),Ks(k));w=Math.pow(10,E(l)?A:l),k=Math.round(k*w)/w,S=Math.round(S*w)/w;let D=0;for(b&&(u&&k!==r?(e.push({value:r}),k<r&&D++,Le(Math.round((k+D*y)*w)/w,r,so(r,v,i))&&D++):k<r&&D++);D<C;++D){const L=Math.round((k+D*y)*w)/w;if(x&&L>a)break;e.push({value:L})}return x&&u&&S!==a?e.length&&Le(e[e.length-1].value,a,so(a,v,i))?e[e.length-1].value=a:e.push({value:a}):(!x||S===a)&&e.push({value:S}),e}function so(i,t,{horizontal:e,minRotation:s}){const n=dt(s),o=(e?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+i).length;return Math.min(t/o,r)}class wi extends te{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return E(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:n,max:o}=this;const r=l=>n=e?n:l,a=l=>o=s?o:l;if(t){const l=mt(n),c=mt(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(n===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||r(n-l)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,r=Kd(n,o);return t.bounds==="ticks"&&Do(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return Ge(t,this.chart.options.locale,this.options.ticks.format)}}class Jd extends wi{static id="linear";static defaults={ticks:{callback:Mi.formatters.numeric}};determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=V(t)?t:0,this.max=V(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=dt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const Ue=i=>Math.floor(Pt(i)),Ut=(i,t)=>Math.pow(10,Ue(i)+t);function no(i){return i/Math.pow(10,Ue(i))===1}function oo(i,t,e){const s=Math.pow(10,e),n=Math.floor(i/s);return Math.ceil(t/s)-n}function Zd(i,t){const e=t-i;let s=Ue(e);for(;oo(i,t,s)>10;)s++;for(;oo(i,t,s)<10;)s--;return Math.min(s,Ue(i))}function Qd(i,{min:t,max:e}){t=lt(i.min,t);const s=[],n=Ue(t);let o=Zd(t,e),r=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=n>o?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-h)/Math.pow(10,o)),u=lt(i.min,Math.round((l+h+d*Math.pow(10,o))*r)/r);for(;u<e;)s.push({value:u,major:no(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,r=o>=0?1:r),u=Math.round((l+h+d*Math.pow(10,o))*r)/r;const f=lt(i.max,u);return s.push({value:f,major:no(f),significand:d}),s}class tu extends te{static id="logarithmic";static defaults={ticks:{callback:Mi.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=wi.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return V(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=V(t)?Math.max(0,t):null,this.max=V(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!V(this._userMin)&&(this.min=t===Ut(this.min,0)?Ut(this.min,-1):Ut(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,n=this.max;const o=a=>s=t?s:a,r=a=>n=e?n:a;s===n&&(s<=0?(o(1),r(10)):(o(Ut(s,-1)),r(Ut(n,1)))),s<=0&&o(Ut(n,-1)),n<=0&&r(Ut(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=Qd(e,this);return t.bounds==="ticks"&&Do(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":Ge(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Pt(t),this._valueRange=Pt(this.max)-Pt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Pt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function os(i){const t=i.ticks;if(t.display&&i.display){const e=it(t.backdropPadding);return T(t.font&&t.font.size,H.font.size)+e.height}return 0}function eu(i,t,e){return e=j(e)?e:[e],{w:Ga(i,t.string,e),h:e.length*t.lineHeight}}function ro(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function iu(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],o=i._pointLabels.length,r=i.options.pointLabels,a=r.centerPointLabels?$/o:0;for(let l=0;l<o;l++){const c=r.setContext(i.getPointLabelContext(l));n[l]=c.padding;const h=i.getPointPosition(l,i.drawingArea+n[l],a),d=q(c.font),u=eu(i.ctx,d,i._pointLabels[l]);s[l]=u;const f=tt(i.getIndexAngle(l)+a),g=Math.round(bs(f)),p=ro(g,h.x,u.w,0,180),m=ro(g,h.y,u.h,90,270);su(e,t,f,p,m)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=ru(i,s,n)}function su(i,t,e,s,n){const o=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/o,i.l=Math.min(i.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/o,i.r=Math.max(i.r,t.r+a)),n.start<t.t?(l=(t.t-n.start)/r,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,i.b=Math.max(i.b,t.b+l))}function nu(i,t,e){const s=i.drawingArea,{extra:n,additionalAngle:o,padding:r,size:a}=e,l=i.getPointPosition(t,s+n+r,o),c=Math.round(bs(tt(l.angle+Y))),h=cu(l.y,a.h,c),d=au(c),u=lu(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:u,top:h,right:u+a.w,bottom:h+a.h}}function ou(i,t){if(!t)return!0;const{left:e,top:s,right:n,bottom:o}=i;return!(kt({x:e,y:s},t)||kt({x:e,y:o},t)||kt({x:n,y:s},t)||kt({x:n,y:o},t))}function ru(i,t,e){const s=[],n=i._pointLabels.length,o=i.options,{centerPointLabels:r,display:a}=o.pointLabels,l={extra:os(o)/2,additionalAngle:r?$/n:0};let c;for(let h=0;h<n;h++){l.padding=e[h],l.size=t[h];const d=nu(i,h,l);s.push(d),a==="auto"&&(d.visible=ou(d,c),d.visible&&(c=d))}return s}function au(i){return i===0||i===180?"center":i<180?"left":"right"}function lu(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function cu(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function hu(i,t,e){const{left:s,top:n,right:o,bottom:r}=e,{backdropColor:a}=t;if(!E(a)){const l=Gt(t.borderRadius),c=it(t.backdropPadding);i.fillStyle=a;const h=s-c.left,d=n-c.top,u=o-s+c.width,f=r-n+c.height;Object.values(l).some(g=>g!==0)?(i.beginPath(),He(i,{x:h,y:d,w:u,h:f,radius:l}),i.fill()):i.fillRect(h,d,u,f)}}function du(i,t){const{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){const o=i._pointLabelItems[n];if(!o.visible)continue;const r=s.setContext(i.getPointLabelContext(n));hu(e,r,o);const a=q(r.font),{x:l,y:c,textAlign:h}=o;Qt(e,i._pointLabels[n],l,c+a.lineHeight/2,a,{color:r.color,textAlign:h,textBaseline:"middle"})}}function wr(i,t,e,s){const{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,N);else{let o=i.getPointPosition(0,t);n.moveTo(o.x,o.y);for(let r=1;r<s;r++)o=i.getPointPosition(r,t),n.lineTo(o.x,o.y)}}function uu(i,t,e,s,n){const o=i.ctx,r=t.circular,{color:a,lineWidth:l}=t;!r&&!s||!a||!l||e<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),wr(i,e,r,s),o.closePath(),o.stroke(),o.restore())}function fu(i,t,e){return Rt(i,{label:e,index:t,type:"pointLabel"})}class gu extends wi{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Mi.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=it(os(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=V(t)&&!isNaN(t)?t:0,this.max=V(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/os(this.options))}generateTickLabels(t){wi.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const n=F(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?iu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){const e=N/(this._pointLabels.length||1),s=this.options.startAngle||0;return tt(t*e+dt(s))}getDistanceFromCenterForValue(t){if(E(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(E(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return fu(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const n=this.getIndexAngle(t)-Y+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),wr(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n,border:o}=e,r=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&du(this,r),n.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const u=this.getContext(d),f=n.setContext(u),g=o.setContext(u);uu(this,f,l,r,g)}}),s.display){for(t.save(),a=r-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:u}=h;!u||!d||(t.lineWidth=u,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=s.setContext(this.getContext(l)),h=q(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,r=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=it(c.backdropPadding);t.fillRect(-r/2-d.left,-o-h.size/2-d.top,r+d.width,h.size+d.height)}Qt(t,a.label,0,-o,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}const Li={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ot=Object.keys(Li);function ao(i,t){return i-t}function lo(i,t){if(E(t))return null;const e=i._adapter,{parser:s,round:n,isoWeekday:o}=i._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),V(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(n&&(r=n==="week"&&(ce(o)||o===!0)?e.startOf(r,"isoWeek",o):e.startOf(r,n)),+r)}function co(i,t,e,s){const n=ot.length;for(let o=ot.indexOf(i);o<n-1;++o){const r=Li[ot[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(a*r.size))<=s)return ot[o]}return ot[n-1]}function pu(i,t,e,s,n){for(let o=ot.length-1;o>=ot.indexOf(e);o--){const r=ot[o];if(Li[r].common&&i._adapter.diff(n,s,r)>=t-1)return r}return ot[e?ot.indexOf(e):0]}function mu(i){for(let t=ot.indexOf(i)+1,e=ot.length;t<e;++t)if(Li[ot[t]].common)return ot[t]}function ho(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:s,hi:n}=xs(e,t),o=e[s]>=t?e[s]:e[n];i[o]=!0}}function bu(i,t,e,s){const n=i._adapter,o=+n.startOf(t[0].value,s),r=t[t.length-1].value;let a,l;for(a=o;a<=r;a=+n.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function uo(i,t,e){const s=[],n={},o=t.length;let r,a;for(r=0;r<o;++r)a=t[r],n[a]=r,s.push({value:a,major:!1});return o===0||!e?s:bu(i,s,n,e)}class rs extends te{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),n=this._adapter=new xc._date(t.adapters.date);n.init(e),Oe(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:lo(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=V(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),o=V(o)&&!isNaN(o)?o:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=this.max,a=Ra(n,o,r);return this._unit=e.unit||(s.autoSkip?co(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):pu(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:mu(this._unit),this.initOffsets(n),t.reverse&&a.reverse(),uo(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,n,o;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=G(e,0,r),s=G(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,n=this.options,o=n.time,r=o.unit||co(o.minUnit,e,s,this._getLabelCapacity(e)),a=T(n.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=ce(l)||l===!0,h={};let d=e,u,f;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":r),t.diff(s,e,r)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+r);const g=n.ticks.source==="data"&&this.getDataTimestamps();for(u=d,f=0;u<s;u=+t.add(u,a,r),f++)ho(h,u,g);return(u===s||n.bounds==="ticks"||f===1)&&ho(h,u,g),Object.keys(h).sort(ao).map(p=>+p)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,o=this._unit,r=e||n[o];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,n){const o=this.options,r=o.ticks.callback;if(r)return F(r,[t,e,s],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],u=s[e],f=c&&d&&u&&u.major;return this._adapter.format(t,n||(f?d:h))}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,n=dt(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),r=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:s*o+a*r,h:s*r+a*o}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,o=this._tickFormatFunction(t,0,uo(this,[t],this._majorUnit),n),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(lo(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Lo(t.sort(ao))}}function ci(i,t,e){let s=0,n=i.length-1,o,r,a,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=wt(i,"pos",t)),{pos:o,time:a}=i[s],{pos:r,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=wt(i,"time",t)),{time:o,pos:a}=i[s],{time:r,pos:l}=i[n]);const c=r-o;return c?a+(l-a)*(t-o)/c:a}class xu extends rs{static id="timeseries";static defaults=rs.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ci(e,this.min),this._tableRange=ci(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,n=[],o=[];let r,a,l,c,h;for(r=0,a=t.length;r<a;++r)c=t[r],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,a=n.length;r<a;++r)h=n[r+1],l=n[r-1],c=n[r],Math.round((h+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((n,o)=>n-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ci(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return ci(this._table,s*this._tableRange+this._minPos,!0)}}var yu=Object.freeze({__proto__:null,CategoryScale:Gd,LinearScale:Jd,LogarithmicScale:tu,RadialLinearScale:gu,TimeScale:rs,TimeSeriesScale:xu});const vu=[bc,Kh,Ud,yu];var _u=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,pe=(i,t,e,s)=>{for(var n=s>1?void 0:s?wu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&_u(t,e,n),n};As.register(...vu);let $t=class extends pt{constructor(){super(...arguments),this.typingState={currentIndex:0,startTime:null,endTime:null,errors:[],isComplete:!1,wpm:0,accuracy:100},this.userInput="",this.liveWpm=0,this.liveAccuracy=100,this.wpmHistory=[],this.progressEventSent=!1,this.handleKeyDown=i=>{if(!this.textData||this.typingState.isComplete)return;this.typingState.startTime===null&&(this.typingState={...this.typingState,startTime:Date.now()},this.startLiveUpdates());const t=i.key;t.length>1&&t!=="Backspace"||(i.preventDefault(),t==="Backspace"?this.handleBackspace():this.handleCharacter(t))}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),this.updateInterval&&clearInterval(this.updateInterval),this.chart&&this.chart.destroy()}updated(i){if(i.has("textData")){const t=i.get("textData");(!t||t.id!==this.textData?.id)&&this.reset()}}handleCharacter(i){if(!this.textData)return;const t=this.textData.content[this.typingState.currentIndex];if(!(i===t)){const s={charIndex:this.typingState.currentIndex,expected:t,typed:i,timestamp:Date.now()};this.typingState.errors.push(s)}this.userInput+=i,this.typingState.currentIndex++,this.emitProgressEvent(),this.typingState.currentIndex>=this.textData.content.length&&this.completeTyping(),this.requestUpdate()}handleBackspace(){if(this.typingState.currentIndex===0)return;this.typingState.currentIndex--,this.userInput=this.userInput.slice(0,-1);const i=this.typingState.errors[this.typingState.errors.length-1];i&&i.charIndex===this.typingState.currentIndex&&this.typingState.errors.pop(),this.requestUpdate()}startLiveUpdates(){this.updateInterval=window.setInterval(()=>{if(this.typingState.startTime&&!this.typingState.isComplete){const i=(Date.now()-this.typingState.startTime)/1e3;if(this.liveWpm=Wt.calculateLiveWPM(this.typingState.currentIndex,this.typingState.startTime,this.typingState.errors),this.liveAccuracy=Wt.calculateLiveAccuracy(this.typingState.currentIndex,this.typingState.errors),i>=1&&(this.wpmHistory.length===0||i-this.wpmHistory[this.wpmHistory.length-1].time>=1)){const t=Wt.calculateRawWPM(this.typingState.currentIndex,i);this.wpmHistory.push({time:Math.floor(i),wpm:this.liveWpm,raw:t})}this.requestUpdate()}},100)}completeTyping(){if(!this.textData||!this.typingState.startTime)return;const i=Date.now(),t=(i-this.typingState.startTime)/1e3,e=Wt.calculateWPM(this.textData.content.length,t,this.typingState.errors.length),s=Wt.calculateRawWPM(this.textData.content.length,t),n=Wt.calculateAccuracy(this.textData.content.length,this.typingState.errors.length);this.typingState={...this.typingState,endTime:i,isComplete:!0,wpm:e,accuracy:n},this.updateInterval&&clearInterval(this.updateInterval);const o={id:`session-${Date.now()}`,textId:this.textData.id,wpm:e,rawWpm:s,accuracy:n,errors:this.typingState.errors,completedAt:new Date,duration:t};this.dispatchEvent(new CustomEvent("session-complete",{detail:o,bubbles:!0,composed:!0})),this.requestUpdate()}emitProgressEvent(){if(!this.textData||this.progressEventSent)return;const i=this.typingState.currentIndex/this.textData.content.length;i<.8||(this.progressEventSent=!0,this.dispatchEvent(new CustomEvent("typing-progress",{detail:{progress:i,currentIndex:this.typingState.currentIndex,total:this.textData.content.length,textId:this.textData.id},bubbles:!0,composed:!0})))}reset(){this.typingState={currentIndex:0,startTime:null,endTime:null,errors:[],isComplete:!1,wpm:0,accuracy:100},this.userInput="",this.liveWpm=0,this.liveAccuracy=100,this.wpmHistory=[],this.progressEventSent=!1,this.updateInterval&&clearInterval(this.updateInterval),this.chart&&(this.chart.destroy(),this.chart=void 0),this.requestUpdate()}handleContinue(){this.textData?.nextTextId&&this.dispatchEvent(new CustomEvent("continue-to-next",{detail:this.textData.nextTextId,bubbles:!0,composed:!0}))}renderChar(i,t){const{currentIndex:e}=this.typingState;let s="";return t<e?s=this.userInput[t]===i?"correct":"incorrect":t===e&&(s="current"),M`<span class="char ${s}">${i===" "?" ":i}</span>`}renderCompletion(){const i=this.typingState.endTime&&this.typingState.startTime?(this.typingState.endTime-this.typingState.startTime)/1e3:0;return setTimeout(()=>this.createChart(),0),M`
      ${this.renderBackControl()}
      <div class="completion">
        <div class="graph-container">
          <canvas id="wpm-chart"></canvas>
        </div>
        <div class="completion-stats">
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.wpm}</div>
            <div class="completion-stat-label">wpm</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.accuracy}%</div>
            <div class="completion-stat-label">acc</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${Wt.formatDuration(i)}</div>
            <div class="completion-stat-label">time</div>
          </div>
          <div class="completion-stat">
            <div class="completion-stat-value">${this.typingState.errors.length}</div>
            <div class="completion-stat-label">errors</div>
          </div>
        </div>
        <div class="actions">
          ${this.textData?.nextTextId?M`
            <button class="primary" @click=${this.handleContinue}>
              continue to chapter ${(this.textData?.chapterNumber||0)+1}
            </button>
          `:M`
            <button class="primary" @click=${this.reset}>try again</button>
          `}
          <button @click=${this.goBackToMenu}>
            change text
          </button>
        </div>
      </div>
    `}renderBackControl(){return M`
      <div class="top-bar">
        <button class="back-btn" @click=${this.goBackToMenu}>
          &larr; back to menu
        </button>
      </div>
    `}goBackToMenu(){this.dispatchEvent(new CustomEvent("back-to-menu",{bubbles:!0,composed:!0}))}createChart(){this.chart&&this.chart.destroy();const i=this.shadowRoot?.querySelector("#wpm-chart");if(!i)return;const t=i.getContext("2d");if(!t)return;const e=getComputedStyle(document.documentElement),s=e.getPropertyValue("--main-color").trim()||"#e2b714",n=e.getPropertyValue("--sub-color").trim()||"#646669",o=e.getPropertyValue("--text-color").trim()||"#d1d0c5",r=this.wpmHistory.map(c=>c.time),a=this.wpmHistory.map(c=>c.wpm),l=this.wpmHistory.map(c=>c.raw);this.chart=new As(t,{type:"line",data:{labels:r,datasets:[{label:"wpm",data:a,borderColor:s,backgroundColor:s+"20",borderWidth:2,tension:.4,pointRadius:0,pointHoverRadius:4,pointBackgroundColor:s,fill:!0},{label:"raw",data:l,borderColor:n,backgroundColor:"transparent",borderWidth:2,tension:.4,pointRadius:0,pointHoverRadius:4,pointBackgroundColor:n,borderDash:[5,5]}]},options:{responsive:!0,maintainAspectRatio:!0,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!0,position:"top",labels:{color:o,font:{family:"Roboto Mono",size:12},boxWidth:20,padding:15}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:o,bodyColor:o,borderColor:n,borderWidth:1,padding:10,displayColors:!0,callbacks:{title:c=>`${c[0].label}s`,label:c=>` ${c.dataset.label}: ${c.parsed.y}`}}},scales:{x:{grid:{color:n+"20"},ticks:{color:n,font:{family:"Roboto Mono",size:11}},title:{display:!0,text:"seconds",color:n,font:{family:"Roboto Mono",size:11}}},y:{beginAtZero:!0,grid:{color:n+"20"},ticks:{color:n,font:{family:"Roboto Mono",size:11}},title:{display:!0,text:"wpm",color:n,font:{family:"Roboto Mono",size:11}}}}}})}render(){if(!this.textData)return M`
        ${this.renderBackControl()}
        <div>no text selected</div>
      `;if(this.typingState.isComplete)return this.renderCompletion();const i=this.textData.content.split(" ");let t=0;return M`
      ${this.renderBackControl()}
      <div class="text-info">
        <h2>${this.textData.title}</h2>
        ${this.textData.author?M`<div class="author">${this.textData.author}</div>`:""}
        ${this.textData.fingerNote?M`<div class="finger-note">${this.textData.fingerNote}</div>`:""}
      </div>

      <div class="stats-bar">
        <div class="stat">
          <span class="stat-value">${this.liveWpm}</span>
          <span class="stat-label">wpm</span>
        </div>
        <div class="stat">
          <span class="stat-value">${this.liveAccuracy}</span>
          <span class="stat-label">acc</span>
        </div>
        <div class="stat">
          <span class="stat-value">${this.typingState.errors.length}</span>
          <span class="stat-label">errors</span>
        </div>
      </div>

      <div class="text-display">
        ${i.map((e,s)=>{const n=e.split("").map(o=>{const r=t++;return this.renderChar(o,r)});if(s<i.length-1){const o=t++;n.push(this.renderChar(" ",o))}return M`<span class="word">${n}</span>`})}
      </div>

      ${this.typingState.startTime===null?M`
        <div class="instructions">
          start typing to begin
        </div>
      `:""}
    `}};$t.styles=ue`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .text-info {
      text-align: center;
      margin-bottom: 3rem;
      color: var(--sub-color);
    }

    .text-info h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
    }

    .text-info .author {
      font-size: 0.875rem;
      opacity: 0.7;
    }

    .finger-note {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: var(--main-color);
      line-height: 1.4;
    }

    .stats-bar {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 3rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .stat-value {
      font-size: 1.5rem;
      color: var(--main-color);
      font-weight: 500;
      margin-right: 0.25rem;
    }

    .stat-label {
      opacity: 0.7;
    }

    .text-display {
      font-family: 'Roboto Mono', monospace;
      font-size: 1.5rem;
      line-height: 2.5rem;
      margin: 0 auto 2rem;
      max-width: 900px;
      user-select: none;
      color: var(--sub-color);
    }

    .word {
      display: inline-block;
      margin-right: 0.5rem;
    }

    .char {
      display: inline-block;
    }

    .char.correct {
      color: var(--text-color);
    }

    .char.incorrect {
      color: var(--error-color);
    }

    .char.current {
      position: relative;
    }

    .char.current::before {
      content: '';
      position: absolute;
      left: -2px;
      top: 0;
      width: 2px;
      height: 100%;
      background: var(--main-color);
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .completion {
      text-align: center;
      padding: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .completion h3 {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--main-color);
      margin-bottom: 2rem;
    }

    .graph-container {
      margin-bottom: 2rem;
      background: rgba(255, 255, 255, 0.02);
      padding: 1.5rem;
      border-radius: 8px;
    }

    canvas {
      max-height: 250px;
    }

    .completion-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .completion-stat {
      text-align: center;
    }

    .completion-stat-value {
      font-size: 2rem;
      color: var(--main-color);
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .completion-stat-label {
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .top-bar {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1.5rem;
    }

    .back-btn {
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      border-radius: 4px;
      padding: 0.4rem 0.9rem;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .back-btn:hover {
      border-color: var(--text-color);
      color: var(--text-color);
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    button:hover {
      color: var(--text-color);
      background: rgba(255, 255, 255, 0.05);
    }

    .primary {
      color: var(--main-color);
    }

    .primary:hover {
      background: rgba(226, 183, 20, 0.1);
    }

    .instructions {
      text-align: center;
      color: var(--sub-color);
      font-size: 0.875rem;
      margin-top: 2rem;
      opacity: 0.7;
    }
  `;pe([ge({type:Object})],$t.prototype,"textData",2);pe([I()],$t.prototype,"typingState",2);pe([I()],$t.prototype,"userInput",2);pe([I()],$t.prototype,"liveWpm",2);pe([I()],$t.prototype,"liveAccuracy",2);$t=pe([fe("typing-area")],$t);const fo=["the","be","to","of","and","a","in","that","have","I","it","for","not","on","with","he","as","you","do","at","this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there","their","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time","no","just","him","know","take","people","into","year","your","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us"],go=["world","school","still","try","last","ask","need","too","feel","three","state","never","become","between","high","something","both","country","under","problem","eye","hand","place","case","week","company","system","each","right","program","hear","question","during","play","government","run","small","number","off","always","move","night","live","point","believe","hold","today","bring","happen","next","without","before","large","million","must","home","big","give","water","room","mother","area","money","story","fact","month","different","right","study","book","word","though","business","issue","side","kind","head","house","service","friend","power","hour","game","line","end","member","law","car","city","community","name","president","team","minute","idea","kid","body","information","nothing","ago"],po=["necessary","particular","environment","professional","significant","understand","individual","important","development","opportunity","experience","education","themselves","available","difficult","together","following","possible","interest","everything","remember","something","attention","beautiful","difference","morning","evening","language","although","according","question","research","traditional","technology","political","operation","situation","financial","especially","production","scientific","structure","authority","knowledge","economic","physical","executive","relationship","performance","investment","discussion","continue","recognize","response","commercial","cultural","democratic","international","organization","generation","population","determine","represent","establish","successful","treatment","throughout","statement","contribute","background","increase","therefore","strategy","evidence","decision","activity","magazine","standard","agreement","indicate","approach","position","behavior","maintain","probably","necessary","security","influence","character","responsibility","analysis","discover","thousand","director","resource","appropriate","corporation","yesterday","tomorrow","department"],mo=["hello,","world!","yes?","no.","it's","don't","can't","won't","I'm","you're","said:","asked;","(maybe)","[note]","really?!",'"yes"',"'no'","however,","therefore;","but,"];function ku(i,t="mixed",e=!1){let s;switch(t){case"easy":s=fo;break;case"medium":s=go;break;case"hard":s=po;break;case"mixed":default:s=[...fo,...go,...po];break}const n=[];for(let o=0;o<i;o++)if(e&&Math.random()<.15){const r=mo[Math.floor(Math.random()*mo.length)];n.push(r)}else{const r=s[Math.floor(Math.random()*s.length)];n.push(r)}return n.join(" ")}var Su=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,Ct=(i,t,e,s)=>{for(var n=s>1?void 0:s?Cu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Su(t,e,n),n};let ut=class extends pt{constructor(){super(...arguments),this.texts=[],this.unlockedTextIds=[],this.userLevel=1,this.filter="all",this.wordCount=50,this.randomDifficulty="mixed",this.includePunctuation=!1,this.randomPreviewContent=""}connectedCallback(){super.connectedCallback(),this.applyDefaultRandomDifficulty(),this.generateRandomPreview()}updated(i){super.updated(i);const t=i;(t.has("wordCount")||t.has("randomDifficulty")||t.has("includePunctuation"))&&this.generateRandomPreview()}generateRandomPreview(){this.randomPreviewContent=ku(this.wordCount,this.randomDifficulty,this.includePunctuation)}getRandomDifficultyValue(){return this.randomDifficulty==="easy"?P.Easy:this.randomDifficulty==="hard"?P.Hard:P.Medium}applyDefaultRandomDifficulty(){this.hasExistingUserData()||(this.randomDifficulty="easy")}hasExistingUserData(){if(typeof window>"u"||!window.localStorage)return!1;try{const i=R.getUserProgress();return!!(i&&i.sessions&&i.sessions.length>0)}catch(i){return console.warn("Unable to read stored progress for random difficulty default.",i),!1}}getDifficultyLabel(i){return{1:"beginner",2:"easy",3:"medium",4:"hard",5:"expert"}[i]||"unknown"}isTextUnlocked(i){return this.texts.find(e=>e.id===i)?.category==="training"?!0:this.unlockedTextIds.includes(i)}get filteredTexts(){let i=[...this.texts];switch(this.filter){case"unlocked":i=i.filter(t=>this.isTextUnlocked(t.id));break;case"locked":i=i.filter(t=>!this.isTextUnlocked(t.id));break;case"custom":i=i.filter(t=>t.category==="custom");break;case"training":i=i.filter(t=>t.category==="training");break}return i.sort((t,e)=>{const s=this.isTextUnlocked(t.id),n=this.isTextUnlocked(e.id);return s!==n?n?1:-1:t.requiredLevel!==e.requiredLevel?t.requiredLevel-e.requiredLevel:t.title.localeCompare(e.title)})}handleTextClick(i){this.isTextUnlocked(i.id)&&this.dispatchEvent(new CustomEvent("text-selected",{detail:i,bubbles:!0,composed:!0}))}handleUploadClick(){this.dispatchEvent(new CustomEvent("upload-text",{bubbles:!0,composed:!0}))}handleReadingMode(){this.dispatchEvent(new CustomEvent("start-reading-mode",{bubbles:!0,composed:!0}))}handleOpenGauntlet(){this.filter="training",this.scrollToTextList()}scrollToTextList(){const i=this.shadowRoot?.querySelector(".text-list");i&&i.scrollIntoView({behavior:"smooth"})}handleShuffleRandom(){this.generateRandomPreview()}handleStartRandom(){this.randomPreviewContent||this.generateRandomPreview();const i={id:`random-${Date.now()}`,title:`random text (${this.wordCount} words)`,content:this.randomPreviewContent,difficulty:this.getRandomDifficultyValue(),requiredLevel:1,category:"custom",wordCount:this.wordCount};this.dispatchEvent(new CustomEvent("text-selected",{detail:i,bubbles:!0,composed:!0})),this.generateRandomPreview()}renderTextItem(i){const t=!this.isTextUnlocked(i.id),e=i.category==="custom",s=i.category==="training",n=t?"🔒":s?"🎯":e?"📝":"📖";return M`
      <div
        class="text-item ${t?"locked":""}"
        @click=${()=>this.handleTextClick(i)}
        title=${t?`Requires level ${i.requiredLevel} (you are level ${this.userLevel})`:""}
      >
        <div class="text-item-left">
          <div class="text-icon">${n}</div>
          <div class="text-details">
            <div class="text-title">${i.title}</div>
            <div class="text-meta">
              ${i.author?`${i.author} · `:""}${i.wordCount} words
              ${t?M` · <span style="color: var(--error-color)">requires level ${i.requiredLevel}</span>`:""}
            </div>
            ${i.fingerNote?M`<div class="text-note">${i.fingerNote}</div>`:""}
          </div>
        </div>
        <div class="text-badges">
          <div class="badge difficulty-badge">
            ${this.getDifficultyLabel(i.difficulty)}
          </div>
          ${s?M`<div class="badge">training</div>`:""}
          ${!e&&!s&&!t?M`
            <div class="badge">level ${i.requiredLevel}</div>
          `:""}
        </div>
      </div>
    `}render(){const i=this.filteredTexts;return M`
      <div class="header">
        <h1>dr.type</h1>
        <p>complete texts to level up and unlock more content</p>
      </div>

      <div class="random-section">
        <div class="random-header">
          <div class="random-title-group">
            <div class="random-title">random text</div>
            <p class="random-subtitle">fresh sample is ready - tweak settings to regenerate</p>
          </div>
          <div class="random-options">
            <div class="option-group">
              <span class="option-label">words:</span>
              <button
                class="option-btn ${this.wordCount===25?"active":""}"
                @click=${()=>this.wordCount=25}
              >
                25
              </button>
              <button
                class="option-btn ${this.wordCount===50?"active":""}"
                @click=${()=>this.wordCount=50}
              >
                50
              </button>
              <button
                class="option-btn ${this.wordCount===100?"active":""}"
                @click=${()=>this.wordCount=100}
              >
                100
              </button>
            </div>

            <div class="option-group">
              <span class="option-label">difficulty:</span>
              <button
                class="option-btn ${this.randomDifficulty==="easy"?"active":""}"
                @click=${()=>this.randomDifficulty="easy"}
              >
                easy
              </button>
              <button
                class="option-btn ${this.randomDifficulty==="mixed"?"active":""}"
                @click=${()=>this.randomDifficulty="mixed"}
              >
                mixed
              </button>
              <button
                class="option-btn ${this.randomDifficulty==="hard"?"active":""}"
                @click=${()=>this.randomDifficulty="hard"}
              >
                hard
              </button>
            </div>

            <div class="option-group">
              <button
                class="option-btn ${this.includePunctuation?"active":""}"
                @click=${()=>this.includePunctuation=!this.includePunctuation}
              >
                punctuation
              </button>
            </div>
          </div>
        </div>

        <div class="random-preview ${this.randomPreviewContent?"":"empty"}">
          ${this.randomPreviewContent||"generating sample..."}
        </div>

        <div class="random-actions">
          <button class="secondary-btn" @click=${this.handleShuffleRandom}>
            shuffle text
          </button>
          <button class="start-random-btn" @click=${this.handleStartRandom}>
            start typing
          </button>
        </div>
      </div>

      <div class="training-callout">
        <div>
          <div class="callout-title">touchtyping gauntlet</div>
          <p>structured drills that layer difficulty and call out the correct finger for every key.</p>
        </div>
        <button class="training-btn" @click=${this.handleOpenGauntlet}>view drills</button>
      </div>

      <div class="reading-callout">
        <div>
          <div class="callout-title">reading mode</div>
          <p>download any project gutenberg book via proxy and type it chunk by chunk.</p>
        </div>
        <button class="reading-btn" @click=${this.handleReadingMode}>open</button>
      </div>

      <div class="divider"></div>

      <div class="controls">
        <div class="filters">
          <button
            class="filter-btn ${this.filter==="all"?"active":""}"
            @click=${()=>this.filter="all"}
          >
            all
          </button>
          <button
            class="filter-btn ${this.filter==="unlocked"?"active":""}"
            @click=${()=>this.filter="unlocked"}
          >
            unlocked
          </button>
          <button
            class="filter-btn ${this.filter==="locked"?"active":""}"
            @click=${()=>this.filter="locked"}
          >
            locked
          </button>
          <button
            class="filter-btn ${this.filter==="custom"?"active":""}"
            @click=${()=>this.filter="custom"}
          >
            custom
          </button>
          <button
            class="filter-btn ${this.filter==="training"?"active":""}"
            @click=${()=>this.filter="training"}
          >
            training
          </button>
        </div>

        <button class="upload-btn" @click=${this.handleUploadClick}>
          + upload text
        </button>
      </div>

      ${i.length>0?M`
            <div class="text-list">
              ${i.map(t=>this.renderTextItem(t))}
            </div>
          `:M`<div class="empty">no texts found</div>`}
    `}};ut.styles=ue`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .header h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 500;
      color: var(--main-color);
    }

    .header p {
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filters {
      display: flex;
      gap: 0.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .filter-btn:hover {
      color: var(--text-color);
      background: rgba(255, 255, 255, 0.05);
    }

    .filter-btn.active {
      color: var(--main-color);
      background: rgba(226, 183, 20, 0.1);
    }

    .upload-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: 1px solid var(--sub-color);
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .upload-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    .text-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .text-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.02);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid transparent;
    }

    .text-item:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--sub-color);
    }

    .text-item.locked {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .text-item.locked:hover {
      background: rgba(255, 255, 255, 0.02);
      border-color: transparent;
    }

    .text-item-left {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex: 1;
    }

    .text-icon {
      font-size: 1.25rem;
      width: 2rem;
      text-align: center;
    }

    .text-details {
      flex: 1;
    }

    .text-title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 0.25rem;
    }

    .text-meta {
      font-size: 0.75rem;
      color: var(--sub-color);
    }

    .text-note {
      font-size: 0.75rem;
      color: var(--main-color);
      margin-top: 0.35rem;
      line-height: 1.4;
    }

    .text-badges {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .badge {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      color: var(--sub-color);
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.05);
    }

    .difficulty-badge {
      color: var(--main-color);
    }

    .empty {
      text-align: center;
      padding: 4rem 2rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .random-section {
      background: rgba(255, 255, 255, 0.03);
      padding: 2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .random-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 1rem;
      flex-wrap: wrap;
    }

    .random-title-group {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .random-title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-color);
      text-transform: lowercase;
    }

    .random-subtitle {
      margin: 0;
      color: var(--sub-color);
      font-size: 0.8rem;
    }

    .random-options {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
    }

    .option-group {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .option-label {
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .option-btn {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: 1px solid var(--sub-color);
      background: none;
      color: var(--sub-color);
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .option-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    .option-btn.active {
      color: var(--bg-color);
      background: var(--main-color);
      border-color: var(--main-color);
    }

    .random-preview {
      font-family: 'Roboto Mono', monospace;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 1.25rem;
      color: var(--text-color);
      line-height: 1.6;
      min-height: 4.5rem;
      margin-bottom: 1.25rem;
    }

    .random-preview.empty {
      color: var(--sub-color);
      font-style: italic;
    }

    .random-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .secondary-btn {
      padding: 0.65rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: 1px solid var(--sub-color);
      background: none;
      color: var(--sub-color);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .secondary-btn:hover {
      color: var(--text-color);
      border-color: var(--text-color);
    }

    .start-random-btn {
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-family: inherit;
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;
      font-weight: 500;
    }

    .start-random-btn:hover {
      opacity: 0.9;
    }

    .divider {
      height: 1px;
      background: var(--sub-color);
      opacity: 0.2;
      margin: 2rem 0;
    }

    .training-callout,
    .reading-callout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      margin-bottom: 2rem;
    }

    .training-callout {
      border-color: rgba(226, 183, 20, 0.3);
      background: rgba(226, 183, 20, 0.05);
    }

    .reading-callout p {
      margin: 0.35rem 0 0;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .callout-title {
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--sub-color);
    }

    .training-btn,
    .reading-btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: 1px solid var(--main-color);
      color: var(--main-color);
      background: none;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .training-btn:hover,
    .reading-btn:hover {
      background: rgba(226, 183, 20, 0.1);
    }
  `;Ct([ge({type:Array})],ut.prototype,"texts",2);Ct([ge({type:Array})],ut.prototype,"unlockedTextIds",2);Ct([ge({type:Number})],ut.prototype,"userLevel",2);Ct([I()],ut.prototype,"filter",2);Ct([I()],ut.prototype,"wordCount",2);Ct([I()],ut.prototype,"randomDifficulty",2);Ct([I()],ut.prototype,"includePunctuation",2);Ct([I()],ut.prototype,"randomPreviewContent",2);ut=Ct([fe("text-selector")],ut);var Mu=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,kr=(i,t,e,s)=>{for(var n=s>1?void 0:s?Tu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Mu(t,e,n),n};let ki=class extends pt{render(){if(!this.progress)return M``;const i=Ee.getLevelConfig(this.progress.level),t=Ee.getProgressToNextLevel(this.progress);return M`
      <div class="progress-container">
        <div class="level-info">
          <span class="level-badge">level ${this.progress.level}</span>
          <span>${i?.title||""}</span>
        </div>

        ${t.nextLevel!==null?M`
          <div class="progress-bar">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${t.percentage}%"></div>
            </div>
            <div class="progress-label">
              complete ${t.requiredTexts-t.completedTexts} more texts to unlock level ${t.nextLevel}
            </div>
          </div>
        `:M`
          <div class="help-text">max level reached - all texts unlocked!</div>
        `}

        <div class="stats">
          <div class="stat">
            <span class="stat-value">${this.progress.stats.averageWpm.toFixed(0)}</span>
            <span>avg wpm</span>
          </div>
          <div class="stat">
            <span class="stat-value">${this.progress.stats.bestWpm}</span>
            <span>best</span>
          </div>
          <div class="stat">
            <span class="stat-value">${this.progress.stats.totalSessions}</span>
            <span>tests</span>
          </div>
        </div>
      </div>
    `}};ki.styles=ue`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto 2rem;
      padding: 1rem;
      border-bottom: 1px solid var(--sub-color);
      opacity: 0.5;
    }

    .progress-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .level-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .level-badge {
      color: var(--main-color);
      font-weight: 500;
    }

    .stats {
      display: flex;
      gap: 2rem;
      font-size: 0.875rem;
      color: var(--sub-color);
    }

    .stat-value {
      color: var(--text-color);
      font-weight: 500;
      margin-right: 0.25rem;
    }

    .progress-bar {
      flex: 1;
      min-width: 200px;
      max-width: 400px;
    }

    .progress-bar-track {
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-bar-fill {
      height: 100%;
      background: var(--main-color);
      transition: width 0.3s ease;
    }

    .progress-label {
      font-size: 0.75rem;
      color: var(--sub-color);
      margin-top: 0.25rem;
    }

    .help-text {
      font-size: 0.75rem;
      color: var(--sub-color);
      font-style: italic;
      opacity: 0.8;
    }
  `;kr([ge({type:Object})],ki.prototype,"progress",2);ki=kr([fe("user-progress")],ki);var Pu=Object.defineProperty,Au=Object.getOwnPropertyDescriptor,Es=(i,t,e,s)=>{for(var n=s>1?void 0:s?Au(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Pu(t,e,n),n};let Ye=class extends pt{constructor(){super(...arguments),this.currentTheme="serika",this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.currentTheme=So()}toggleMenu(){this.isOpen=!this.isOpen}selectTheme(i){this.currentTheme=i,ko(i),this.isOpen=!1}render(){return M`
      <button class="theme-button" @click=${this.toggleMenu} title="Change theme">
        🎨
      </button>

      ${this.isOpen?M`
        <div class="theme-menu">
          ${Object.keys(Gi).map(i=>M`
            <button
              class="theme-option ${this.currentTheme===i?"active":""}"
              @click=${()=>this.selectTheme(i)}
            >
              ${i}
            </button>
          `)}
        </div>
      `:""}
    `}};Ye.styles=ue`
    :host {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }

    .theme-button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: none;
      background: var(--main-color);
      color: var(--bg-color);
      font-size: 1.25rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .theme-button:hover {
      transform: scale(1.1);
    }

    .theme-menu {
      position: absolute;
      bottom: 4rem;
      right: 0;
      background: var(--bg-color);
      border: 1px solid var(--sub-color);
      border-radius: 8px;
      padding: 0.5rem;
      min-width: 150px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .theme-option {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      background: none;
      color: var(--sub-color);
      text-align: left;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.875rem;
      border-radius: 4px;
      transition: all 0.2s;
    }

    .theme-option:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-color);
    }

    .theme-option.active {
      color: var(--main-color);
      background: rgba(226, 183, 20, 0.1);
    }
  `;Es([I()],Ye.prototype,"currentTheme",2);Es([I()],Ye.prototype,"isOpen",2);Ye=Es([fe("theme-selector")],Ye);const Du="https://r.jina.ai/https://www.gutenberg.org/cache/epub";class Eu{constructor(){this.defaultChunkSize=500,this.gutendexEndpoint="https://gutendex.com/books"}getLibrary(){return R.getReadingLibrary()}getActiveBook(){return R.getActiveReadingBook()}getBook(t){return R.getReadingBook(t)}setActiveBook(t){return R.setActiveReadingBook(t),this.getBook(t)}removeBook(t){return R.deleteReadingBook(t)}setCurrentChunk(t,e){const s=this.getBook(t);if(!s)return null;const n=Math.min(Math.max(e,0),s.totalChunks-1);return s.currentChunkIndex=n,s.lastUpdated=new Date().toISOString(),R.saveReadingBook(s),s}getChunkAsTextContent(t,e){const s=this.getBook(t);if(!s)return;const n=e??s.currentChunkIndex,o=s.chunks[n];if(o)return this.toTextContent(s,o)}getNextChunkPreview(t,e){const s=this.getBook(t);if(s)return s.chunks[e+1]}async downloadBook(t){const e=this.extractBookId(t.idOrUrl);if(!e)throw new Error("Unable to determine Gutenberg book id");const s=this.getBook(e);if(s)return R.setActiveReadingBook(e),s;const{text:n,source:o}=await this.downloadBookText(e),r=this.extractMetadata(n,"title"),a=this.extractMetadata(n,"author"),l=!t.title||!t.author?await this.fetchGutenbergMetadata(e).catch(()=>null):null,c=t.title?.trim()||l?.title||r||`Gutenberg #${e}`,h=t.author?.trim()||l?.author||a||void 0,d=this.stripGutenbergText(n),u=this.skipToFirstChapter(d),f=t.chunkSize??this.defaultChunkSize,g=this.createBookFromContent({id:e,title:c,author:h,source:o,chunkSize:f,content:u});return R.saveReadingBook(g),R.setActiveReadingBook(e),g}importLocalBook(t){const e=`local-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,s=t.title?.trim()||"Uploaded Manuscript",n=this.createBookFromContent({id:e,title:s,author:t.author?.trim()||void 0,source:"local-upload",chunkSize:t.chunkSize??this.defaultChunkSize,content:t.content});return R.saveReadingBook(n),R.setActiveReadingBook(n.id),n}async searchGutenberg(t){if(!t.trim())return[];const e=`${this.gutendexEndpoint}?search=${encodeURIComponent(t.trim())}`,s=await fetch(e);if(!s.ok)throw new Error("Search failed");const n=await s.json();return(Array.isArray(n.results)?n.results:[]).slice(0,10).map(r=>({id:r.id,title:r.title,authors:(r.authors||[]).map(a=>a.name).filter(Boolean),languages:r.languages||[],downloadCount:r.download_count||0,coverImage:r.formats?.["image/jpeg"]||r.formats?.["image/png"]||void 0}))}completeChunk(t,e,s){const n=this.getBook(t);if(!n)return null;const o=n.chunks[e];if(!o)return n;n.completedChunkIds.includes(o.id)||n.completedChunkIds.push(o.id);const r=Math.min(e+1,n.totalChunks-1);return n.currentChunkIndex=r,n.lastUpdated=new Date().toISOString(),this.updateChunkStats(n,o,s),R.saveReadingBook(n),n}updateChunkStats(t,e,s){const n=t.stats;n.totalSessions+=1,n.totalWordsTyped+=e.wordCount,n.totalErrors+=s.errors.length,n.bestWpm=Math.max(n.bestWpm,s.wpm);const o=n.averageWpm*(n.totalSessions-1)+s.wpm,r=n.averageAccuracy*(n.totalSessions-1)+s.accuracy;n.averageWpm=Math.round(o/n.totalSessions*10)/10,n.averageAccuracy=Math.round(r/n.totalSessions*10)/10}toTextContent(t,e){return{id:`${t.id}-chunk-${e.index}`,title:`${t.title} — part ${e.index+1}/${t.totalChunks}`,author:t.author,content:e.content,difficulty:P.Medium,requiredLevel:1,category:"custom",wordCount:e.wordCount,nextTextId:e.index<t.totalChunks-1?`${t.id}-chunk-${e.index+1}`:void 0,bookSeries:t.title,chapterNumber:e.index+1}}extractBookId(t){const e=t.match(/(\d{1,6})/);return e?e[1]:null}async downloadBookText(t){const e=Du.replace(/\/$/,""),s=[`${e}/${t}/pg${t}.txt`,`${e}/${t}/pg${t}-0.txt`,`${e}/${t}/${t}.txt`];let n;for(const o of s)try{const r=await fetch(o);if(!r.ok){n=new Error(r.statusText);continue}const a=await r.text();if(a&&a.length>500)return{text:a,source:o}}catch(r){n=r}throw console.error("Failed to download book",n),new Error("Unable to download book from Project Gutenberg")}async fetchGutenbergMetadata(t){try{const e=await fetch(`${this.gutendexEndpoint}/${t}`);if(!e.ok)return null;const s=await e.json(),n=Array.isArray(s.authors)&&s.authors.length>0?s.authors[0].name:void 0;return{title:s.title,author:n}}catch(e){return console.warn("Failed to fetch Gutenberg metadata",e),null}}stripGutenbergText(t){const e=t.match(/\*\*\* START OF THE PROJECT GUTENBERG EBOOK .* \*\*\*/i),s=t.match(/\*\*\* END OF THE PROJECT GUTENBERG EBOOK .* \*\*\*/i);let n=t;return e&&(n=n.substring(n.indexOf(e[0])+e[0].length)),s&&(n=n.substring(0,n.indexOf(s[0]))),n.replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}skipToFirstChapter(t){const e=/(^|\n)\s*(chapter\s+(ivxlcdm+|\d+|one))\b/gi,s=[];let n;for(;(n=e.exec(t))!==null;){if(n.index===void 0)continue;const l=n[1]?n[1].length:0,c=(n[3]||"").toLowerCase();s.push({index:n.index,prefix:l,label:c})}if(s.length===0)return t;const o=new Set(["i","1","one"]),r=s.filter(l=>o.has(l.label)),a=this.pickChapterCandidate(r,s,t)||this.pickChapterCandidate(s,s,t)||this.pickFirstNonContents(s,t)||s[0];return t.slice(a.index+a.prefix).trimStart()}pickChapterCandidate(t,e,s){for(const n of t){if(this.isNearContents(s,n.index))continue;const o=e.find(l=>l.index>n.index);if((o?o.index:s.length)-n.index>400)return n}return null}pickFirstNonContents(t,e){for(const s of t)if(!this.isNearContents(e,s.index))return s;return null}isNearContents(t,e){const s=Math.max(0,e-800),n=t.slice(s,e).toLowerCase();return/(contents|table of contents|index)/.test(n)}extractMetadata(t,e){const s=new RegExp(`^${e==="title"?"Title":"Author"}:(.*)$`,"im"),n=t.match(s);return n?n[1].trim():null}createChunks(t,e,s){const n=[];for(let o=0;o<t.length;o+=e){const r=t.slice(o,o+e);if(r.length===0)continue;const a={id:`${s}-chunk-${n.length}`,index:n.length,startWord:o,endWord:Math.min(o+r.length,t.length),wordCount:r.length,content:r.join(" ")};n.push(a)}return n}createBookFromContent(t){const s=t.content.trim().split(/\s+/).filter(Boolean),n=Math.max(t.chunkSize,200),o=this.createChunks(s,n,t.id);if(o.length===0)throw new Error("Book content is empty after parsing");return{id:t.id,title:t.title,author:t.author,source:t.source,chunkSize:n,totalWords:s.length,totalChunks:o.length,chunks:o,currentChunkIndex:0,completedChunkIds:[],stats:{totalSessions:0,totalWordsTyped:0,totalErrors:0,averageWpm:0,averageAccuracy:0,bestWpm:0},lastUpdated:new Date().toISOString()}}}const at=new Eu;var Ou=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,st=(i,t,e,s)=>{for(var n=s>1?void 0:s?Lu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Ou(t,e,n),n};let K=class extends pt{constructor(){super(...arguments),this.library=at.getLibrary(),this.activeBook=null,this.currentChunk=null,this.currentChunkIndex=null,this.downloading=!1,this.uploading=!1,this.dropActive=!1,this.toastMessage="",this.downloadStatus="",this.downloadError="",this.searchResults=[],this.searchLoading=!1,this.searchError="",this.searchQuery=""}connectedCallback(){super.connectedCallback(),this.syncState()}disconnectedCallback(){super.disconnectedCallback(),this.toastTimeout&&clearTimeout(this.toastTimeout)}syncState(){this.library=at.getLibrary(),this.activeBook=at.getActiveBook(),this.activeBook?this.activeBook.completedChunkIds.length>=this.activeBook.totalChunks?(this.currentChunk=null,this.currentChunkIndex=null):(this.currentChunkIndex=this.activeBook.currentChunkIndex,this.currentChunk=at.getChunkAsTextContent(this.activeBook.id,this.activeBook.currentChunkIndex)||null):(this.currentChunk=null,this.currentChunkIndex=null),this.preloadedPreview=void 0}showToast(i){this.toastMessage=i,this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=window.setTimeout(()=>{this.toastMessage="",this.toastTimeout=void 0},4e3)}handleExit(){this.dispatchEvent(new CustomEvent("exit-reading-mode",{bubbles:!0,composed:!0}))}async handleDownload(i){i.preventDefault();const t=i.target,s=new FormData(t).get("book")?.trim();if(!s){this.downloadError="please enter a gutenberg id or url";return}this.downloading=!0,this.downloadError="",this.downloadStatus="downloading book...";try{await at.downloadBook({idOrUrl:s}),this.downloadStatus="book saved locally — ready to type",t.reset(),this.showToast("book added to your library"),this.syncState()}catch(n){console.error(n),this.downloadError=n.message||"failed to download book",this.downloadStatus=""}finally{this.downloading=!1}}async handleDownloadFromSearch(i){this.downloading=!0,this.downloadError="",this.downloadStatus=`fetching “${i.title}”...`;try{await at.downloadBook({idOrUrl:String(i.id),title:i.title,author:i.authors?.[0]}),this.downloadStatus=`added “${i.title}” to your library`,this.showToast(`loaded ${i.title}`),this.syncState()}catch(t){console.error(t),this.downloadError=t.message||"failed to download book",this.downloadStatus=""}finally{this.downloading=!1}}async handleSearchSubmit(i){i.preventDefault();const t=i.target,s=new FormData(t).get("search")?.trim()||"";if(this.searchQuery=s,!s){this.searchResults=[],this.searchError="enter a keyword to search";return}this.searchLoading=!0,this.searchError="";try{this.searchResults=await at.searchGutenberg(s),this.searchResults.length===0&&(this.searchError="no matches found — try a different keyword")}catch(n){console.error(n),this.searchError=n.message||"search failed",this.searchResults=[]}finally{this.searchLoading=!1}}handleSelectBook(i){at.setActiveBook(i),this.syncState()}handleDragOver(i){i.preventDefault(),this.uploading||(this.dropActive=!0)}handleDragLeave(i){i.preventDefault(),this.dropActive=!1}async handleDropUpload(i){if(i.preventDefault(),this.dropActive=!1,this.uploading)return;const t=i.dataTransfer?.files?.[0];await this.processUploadFile(t)}handleOpenFilePicker(){if(this.uploading)return;this.shadowRoot?.getElementById("upload-input")?.click()}async handleFilePickerChange(i){const t=i.target,e=t.files?.[0];await this.processUploadFile(e),t.value=""}async processUploadFile(i){if(!i){this.showToast("no file detected");return}if(!i.type.includes("text")&&!i.name.endsWith(".txt")&&!i.name.endsWith(".md")){this.showToast("please drop a .txt or .md file");return}this.uploading=!0;try{const t=await i.text(),e=at.importLocalBook({title:i.name.replace(/\.[^.]+$/,""),content:t});this.showToast(`uploaded ${e.title}`),this.syncState()}catch(t){console.error(t),this.showToast("unable to process file")}finally{this.uploading=!1}}handleDeleteBook(i){at.removeBook(i),this.syncState()}handleTypingProgress(i){i.stopPropagation(),!(!this.activeBook||this.currentChunkIndex===null||!this.currentChunk)&&(this.preloadedPreview||i.detail.progress<.8||(this.preloadedPreview=at.getNextChunkPreview(this.activeBook.id,this.currentChunkIndex)))}handleChunkComplete(i){if(i.stopPropagation(),!this.activeBook||this.currentChunkIndex===null)return;const t=i.detail;t.mode="reading",t.meta={bookId:this.activeBook.id,chunkIndex:this.currentChunkIndex,chunkId:this.currentChunk?.id,chunkRange:this.activeBook.chunks[this.currentChunkIndex]?{startWord:this.activeBook.chunks[this.currentChunkIndex].startWord,endWord:this.activeBook.chunks[this.currentChunkIndex].endWord}:void 0},R.addSession(t),at.completeChunk(this.activeBook.id,this.currentChunkIndex,t),this.showToast("chunk saved — loading next section"),this.syncState()}handleContinueChunk(i){if(i.stopPropagation(),!this.activeBook)return;const t=i.detail,e=this.activeBook.chunks.findIndex(s=>s.id===t);e!==-1&&(at.setCurrentChunk(this.activeBook.id,e),this.syncState())}renderActiveBook(){if(!this.activeBook)return M`<div class="card">no active book — download or upload one below.</div>`;const i=this.activeBook.completedChunkIds.length,t=Math.round(i/this.activeBook.totalChunks*100),e=!!this.currentChunk&&this.currentChunkIndex!==null;return M`
      <div class="card">
        <h3>active book</h3>
        <div>
          <strong>${this.activeBook.title}</strong>
          ${this.activeBook.author?M`<span>by ${this.activeBook.author}</span>`:""}
        </div>
        <div class="progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${t}%"></div>
          </div>
          <small>${i}/${this.activeBook.totalChunks} chunks (${t}%)</small>
        </div>
        <div class="stats-grid">
          <div class="stat">
            <div class="stat-title">avg wpm</div>
            <div class="stat-value">${this.activeBook.stats.averageWpm||0}</div>
          </div>
          <div class="stat">
            <div class="stat-title">avg accuracy</div>
            <div class="stat-value">${this.activeBook.stats.averageAccuracy||0}%</div>
          </div>
          <div class="stat">
            <div class="stat-title">best chunk wpm</div>
            <div class="stat-value">${this.activeBook.stats.bestWpm||0}</div>
          </div>
        </div>
        ${this.preloadedPreview?M`<p class="preview-hint">next chunk preloaded — ${this.preloadedPreview.wordCount} words ready</p>`:""}
      </div>
      ${e?M`
            <typing-area
              .textData=${this.currentChunk}
              @session-complete=${this.handleChunkComplete}
              @typing-progress=${this.handleTypingProgress}
              @back-to-menu=${s=>s.stopPropagation()}
              @continue-to-next=${this.handleContinueChunk}
            ></typing-area>
          `:M`<div class="card">book complete — great work!</div>`}
    `}renderSearchCard(){return M`
      <div class="card">
        <h3>search project gutenberg</h3>
        <form @submit=${this.handleSearchSubmit}>
          <div>
            <label for="search">keyword</label>
            <div class="search-row">
              <input
                id="search"
                name="search"
                .value=${this.searchQuery}
                placeholder="e.g. sherlock holmes"
              />
              <button type="submit" class="primary" ?disabled=${this.searchLoading}>
                ${this.searchLoading?"searching...":"search"}
              </button>
            </div>
          </div>
        </form>
        ${this.searchError?M`<div class="message error">${this.searchError}</div>`:""}
        ${this.searchResults.length>0?M`
              <div class="search-results">
                ${this.searchResults.map(i=>M`
                    <div class="search-result">
                      <div>
                        <div><strong>${i.title}</strong></div>
                        <div class="result-meta">
                          ${i.authors&&i.authors.length>0?i.authors.join(", "):"unknown author"}
                          · ${i.languages?.join(", ")||"language n/a"}
                          · ${i.downloadCount} downloads
                        </div>
                      </div>
                      <button
                        class="secondary"
                        @click=${()=>this.handleDownloadFromSearch(i)}
                        ?disabled=${this.downloading}
                      >
                        add
                      </button>
                    </div>
                  `)}
              </div>
            `:""}
      </div>
    `}renderDirectDownloadCard(){return M`
      <div class="card">
        <h3>download by gutenberg id</h3>
        <form @submit=${this.handleDownload}>
          <div>
            <label for="book">book id or url</label>
            <input id="book" name="book" placeholder="1342 or https://www.gutenberg.org/ebooks/1342" />
          </div>
          <div class="actions">
            <button type="submit" class="primary" ?disabled=${this.downloading}>
              ${this.downloading?"downloading...":"save book"}
            </button>
          </div>
        </form>
        ${this.downloadError?M`<div class="message error">${this.downloadError}</div>`:""}
        ${this.downloadStatus?M`<div class="message success">${this.downloadStatus}</div>`:""}
      </div>
    `}renderLibrary(){const i=Object.values(this.library.books);return M`
      <div
        class="upload-drop"
        data-active=${this.dropActive}
        @dragover=${this.handleDragOver}
        @dragleave=${this.handleDragLeave}
        @drop=${this.handleDropUpload}
        @click=${this.handleOpenFilePicker}
      >
        <strong>${this.uploading?"processing…":"upload book"}</strong>
        <p>${this.uploading?"splitting text into chunks":"drag a .txt/.md file here or click to browse"}</p>
        <input
          id="upload-input"
          type="file"
          accept=".txt,.text,.md"
          hidden
          @change=${this.handleFilePickerChange}
        />
      </div>

      ${i.length===0?M`<div class="empty-state">no saved books yet</div>`:M`
      <div class="library-list">
        ${i.map(t=>{const e=this.activeBook?.id===t.id,s=Math.round(t.completedChunkIds.length/t.totalChunks*100);return M`
            <div class="library-item">
              <div>
                <div><strong>${t.title}</strong></div>
                <div class="tag">${s}% complete</div>
              </div>
              <div class="library-actions">
                <button class="secondary" @click=${()=>this.handleSelectBook(t.id)}>
                  ${e?"resume":"load"}
                </button>
                <button class="ghost-btn" @click=${()=>this.handleDeleteBook(t.id)}>
                  remove
                </button>
              </div>
            </div>
          `})}
      </div>
      `}
    `}render(){return M`
      <div class="header">
        <h2>reading mode</h2>
        <button class="ghost-btn" @click=${this.handleExit}>back to menu</button>
      </div>

      ${this.toastMessage?M`<div class="toast">${this.toastMessage}</div>`:""}

      ${this.renderActiveBook()}
      ${this.renderSearchCard()}
      ${this.renderDirectDownloadCard()}

      <div class="card">
        <h3>saved books</h3>
        ${this.renderLibrary()}
      </div>
    `}};K.styles=ue`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem 4rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
      flex-wrap: wrap;
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-color);
    }

    .ghost-btn {
      background: none;
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .ghost-btn:hover {
      border-color: var(--text-color);
      color: var(--text-color);
    }

    .toast {
      margin-bottom: 1.5rem;
      padding: 0.85rem 1rem;
      border-radius: 6px;
      background: rgba(62, 159, 94, 0.15);
      border: 1px solid rgba(62, 159, 94, 0.4);
      color: #8fe3a3;
      font-size: 0.875rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .card h3 {
      margin-top: 0;
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--sub-color);
      letter-spacing: 0.08em;
    }

    form {
      display: grid;
      gap: 1rem;
    }

    label {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: var(--sub-color);
      letter-spacing: 0.08em;
      display: block;
      margin-bottom: 0.35rem;
    }

    input, select {
      width: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
      color: var(--text-color);
      font-size: 0.875rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    button.primary {
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
    }

    button.secondary {
      background: none;
      border: 1px solid var(--sub-color);
      color: var(--sub-color);
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .stat {
      padding: 1rem;
      border-radius: 6px;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .stat-title {
      font-size: 0.75rem;
      color: var(--sub-color);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.35rem;
    }

    .stat-value {
      font-size: 1.5rem;
      color: var(--main-color);
      font-weight: 500;
    }

    .progress {
      margin: 1rem 0;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: var(--main-color);
    }

    .library-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .upload-drop {
      border: 1px dashed rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      padding: 1rem;
      text-align: center;
      color: var(--sub-color);
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s;
    }

    .upload-drop[data-active='true'] {
      border-color: var(--main-color);
      background: rgba(226, 183, 20, 0.08);
      color: var(--text-color);
    }

    .library-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(0, 0, 0, 0.2);
    }

    .library-actions {
      display: flex;
      gap: 0.5rem;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--sub-color);
    }

    .message {
      font-size: 0.8125rem;
      margin-top: 0.75rem;
    }

    .message.error {
      color: var(--error-color);
    }

    .message.success {
      color: var(--main-color);
    }

    .empty-state {
      text-align: center;
      padding: 2rem 1rem;
      color: var(--sub-color);
    }

    typing-area {
      margin-top: 2rem;
      display: block;
    }

    .search-row {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .search-row input {
      flex: 1;
    }

    .search-results {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .search-result {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      background: rgba(0, 0, 0, 0.2);
      gap: 1rem;
    }

    .result-meta {
      font-size: 0.75rem;
      color: var(--sub-color);
    }

    .preview-hint {
      font-size: 0.8125rem;
      color: var(--sub-color);
      margin-top: 0.75rem;
    }
  `;st([I()],K.prototype,"library",2);st([I()],K.prototype,"activeBook",2);st([I()],K.prototype,"currentChunk",2);st([I()],K.prototype,"currentChunkIndex",2);st([I()],K.prototype,"downloading",2);st([I()],K.prototype,"uploading",2);st([I()],K.prototype,"dropActive",2);st([I()],K.prototype,"toastMessage",2);st([I()],K.prototype,"downloadStatus",2);st([I()],K.prototype,"downloadError",2);st([I()],K.prototype,"searchResults",2);st([I()],K.prototype,"searchLoading",2);st([I()],K.prototype,"searchError",2);st([I()],K.prototype,"searchQuery",2);st([I()],K.prototype,"preloadedPreview",2);K=st([fe("reading-mode")],K);var $u=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,me=(i,t,e,s)=>{for(var n=s>1?void 0:s?Iu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&$u(t,e,n),n};let It=class extends pt{constructor(){super(...arguments),this.currentView="menu",this.showLevelUpModal=!1,this.newLevel=1}connectedCallback(){super.connectedCallback(),So(),this.loadUserProgress()}loadUserProgress(){let i=R.getUserProgress();i||(i=Ee.initializeProgress()),this.userProgress=i}handleTextSelected(i){this.selectedText=i.detail,this.currentView="typing"}handleSessionComplete(i){const t=i.detail;if(R.addSession(t),Ee.updateProgress(t)){const s=R.getUserProgress();s&&(this.newLevel=s.level,this.showLevelUpModal=!0,this.userProgress=s)}else this.userProgress=R.getUserProgress()||this.userProgress}handleBackToMenu(){this.currentView="menu",this.selectedText=void 0,this.userProgress=R.getUserProgress()||this.userProgress}closeLevelUpModal(){this.showLevelUpModal=!1}handleUploadText(){this.currentView="upload"}handleStartReadingMode(){this.currentView="reading"}handleCancelUpload(){this.currentView="menu"}handleExitReadingMode(){this.currentView="menu",this.loadUserProgress()}handleFileSelect(i){const e=i.target.files?.[0];if(e&&e.type==="text/plain"){const s=new FileReader;s.onload=n=>{const o=n.target?.result,r=this.shadowRoot?.querySelector("#text-content");if(r){r.value=o;const a=this.shadowRoot?.querySelector("#text-title");a&&!a.value&&(a.value=e.name.replace(".txt",""))}},s.readAsText(e)}}handleUploadSubmit(i){i.preventDefault();const t=i.target,e=new FormData(t),s=e.get("title"),n=e.get("author"),o=e.get("content"),r=parseInt(e.get("difficulty"));if(!s||!o){alert("please provide at least a title and content");return}const a=De.addCustomText(s,o,n||void 0,r);if(this.userProgress){const l=[...this.userProgress.unlockedTexts,a.id];R.updateLevelProgress(this.userProgress.level,l),this.userProgress=R.getUserProgress()||this.userProgress}this.currentView="menu"}renderMenu(){if(!this.userProgress)return M`<div>loading...</div>`;const i=De.getAllTexts();return M`
      <user-progress .progress=${this.userProgress}></user-progress>

      <text-selector
        .texts=${i}
        .unlockedTextIds=${this.userProgress.unlockedTexts}
        .userLevel=${this.userProgress.level}
        @text-selected=${this.handleTextSelected}
        @upload-text=${this.handleUploadText}
        @start-reading-mode=${this.handleStartReadingMode}
      ></text-selector>
    `}renderTyping(){return M`
      <typing-area
        .textData=${this.selectedText}
        @session-complete=${this.handleSessionComplete}
        @back-to-menu=${this.handleBackToMenu}
        @continue-to-next=${this.handleContinueToNext}
      ></typing-area>
    `}handleContinueToNext(i){const t=i.detail,e=De.getTextById(t);e&&(this.selectedText=e,this.requestUpdate())}renderUpload(){return M`
      <div class="upload-modal" @click=${this.handleCancelUpload}>
        <div class="upload-content" @click=${i=>i.stopPropagation()}>
          <h2>upload custom text</h2>

          <form @submit=${this.handleUploadSubmit}>
            <div class="form-group">
              <label>upload .txt file (optional)</label>
              <div class="file-upload" @click=${()=>this.shadowRoot?.querySelector("#file-input")?.click()}>
                <input
                  id="file-input"
                  type="file"
                  accept=".txt"
                  @change=${this.handleFileSelect}
                />
                <p>click to select a .txt file</p>
              </div>
            </div>

            <div class="form-group">
              <label for="text-title">title *</label>
              <input
                id="text-title"
                name="title"
                type="text"
                placeholder="my custom text"
                required
              />
            </div>

            <div class="form-group">
              <label for="text-author">author (optional)</label>
              <input
                id="text-author"
                name="author"
                type="text"
                placeholder="author name"
              />
            </div>

            <div class="form-group">
              <label for="text-difficulty">difficulty</label>
              <select id="text-difficulty" name="difficulty">
                <option value="${P.Beginner}">beginner</option>
                <option value="${P.Easy}">easy</option>
                <option value="${P.Medium}" selected>medium</option>
                <option value="${P.Hard}">hard</option>
                <option value="${P.Expert}">expert</option>
              </select>
            </div>

            <div class="form-group">
              <label for="text-content">content *</label>
              <textarea
                id="text-content"
                name="content"
                placeholder="paste or type your text here..."
                required
              ></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="secondary" @click=${this.handleCancelUpload}>
                cancel
              </button>
              <button type="submit" class="primary">add text</button>
            </div>
          </form>
        </div>
      </div>
    `}renderReadingMode(){return M`
      <reading-mode @exit-reading-mode=${this.handleExitReadingMode}></reading-mode>
    `}renderLevelUpModal(){const i=Ee.getLevelConfig(this.newLevel);return M`
      <div class="level-up-modal" @click=${this.closeLevelUpModal}>
        <div class="modal-content" @click=${t=>t.stopPropagation()}>
          <h2>level up!</h2>
          <p>you've reached level ${this.newLevel}</p>
          <p>${i?.title}</p>
          <button @click=${this.closeLevelUpModal}>continue</button>
        </div>
      </div>
    `}render(){return M`
      <div class="app-container">
        ${this.currentView==="menu"?this.renderMenu():""}
        ${this.currentView==="typing"?this.renderTyping():""}
        ${this.currentView==="upload"?this.renderUpload():""}
        ${this.currentView==="reading"?this.renderReadingMode():""}
        ${this.showLevelUpModal?this.renderLevelUpModal():""}
      </div>
      <theme-selector></theme-selector>
    `}};It.styles=ue`
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .level-up-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.2s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: var(--bg-color);
      padding: 3rem;
      border-radius: 8px;
      text-align: center;
      max-width: 400px;
      border: 1px solid var(--sub-color);
      animation: slideUp 0.3s;
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .modal-content h2 {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--main-color);
      margin-bottom: 1rem;
    }

    .modal-content p {
      font-size: 1rem;
      color: var(--sub-color);
      margin-bottom: 2rem;
    }

    .modal-content button {
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-family: inherit;
      background: var(--main-color);
      color: var(--bg-color);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .modal-content button:hover {
      opacity: 0.9;
    }

    .upload-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
      overflow-y: auto;
    }

    .upload-content {
      background: var(--bg-color);
      padding: 2rem;
      border-radius: 8px;
      max-width: 600px;
      width: 100%;
      border: 1px solid var(--sub-color);
    }

    .upload-content h2 {
      margin: 0 0 1.5rem 0;
      color: var(--text-color);
      font-size: 1.25rem;
      font-weight: 500;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--sub-color);
      font-size: 0.875rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--sub-color);
      border-radius: 4px;
      font-size: 0.875rem;
      font-family: inherit;
      color: var(--text-color);
      transition: border-color 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--main-color);
    }

    .form-group textarea {
      min-height: 200px;
      font-family: 'Roboto Mono', monospace;
      resize: vertical;
    }

    .file-upload {
      border: 2px dashed var(--sub-color);
      padding: 2rem;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
      color: var(--sub-color);
    }

    .file-upload:hover {
      border-color: var(--main-color);
      color: var(--main-color);
    }

    .file-upload input {
      display: none;
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 0.875rem;
      font-family: inherit;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    button.primary {
      background: var(--main-color);
      color: var(--bg-color);
    }

    button.secondary {
      background: rgba(255, 255, 255, 0.05);
      color: var(--sub-color);
      border: 1px solid var(--sub-color);
    }

    button:hover {
      opacity: 0.9;
    }
  `;me([I()],It.prototype,"currentView",2);me([I()],It.prototype,"selectedText",2);me([I()],It.prototype,"userProgress",2);me([I()],It.prototype,"showLevelUpModal",2);me([I()],It.prototype,"newLevel",2);It=me([fe("dr-type-app")],It);
