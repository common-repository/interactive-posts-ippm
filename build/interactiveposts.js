!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var n;const l=window,d=l.trustedTypes,c=d?d.emptyScript:"",p=l.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},u=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u},f="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var o;const i=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,i)=>{e?o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var i;const s=this.constructor._$Ep(t,o);if(void 0!==s&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:h).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:h;this._$El=s,this[s]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var v;g[f]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(n=l.reactiveElementVersions)&&void 0!==n?n:l.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,k=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,w="?"+_,x=`<${w}>`,E=document,A=()=>E.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,D=/>/g,L=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,B=/"/g,O=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),T=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),H=new WeakMap,j=E.createTreeWalker(E,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const I=(t,e)=>{const o=t.length-1,i=[];let s,r=2===e?"<svg>":"",a=P;for(let e=0;e<o;e++){const o=t[e];let n,l,d=-1,c=0;for(;c<o.length&&(a.lastIndex=c,l=a.exec(o),null!==l);)c=a.lastIndex,a===P?"!--"===l[1]?a=M:void 0!==l[1]?a=D:void 0!==l[2]?(O.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=null!=s?s:P,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?L:'"'===l[3]?B:U):a===B||a===U?a=L:a===M||a===D?a=P:(a=L,s=void 0);const p=a===L&&t[e+1].startsWith("/>")?" ":"";r+=a===P?o+x:d>=0?(i.push(n),o.slice(0,d)+$+o.slice(d)+_+p):o+_+(-2===d?(i.push(void 0),e):p)}return[F(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class q{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const a=t.length-1,n=this.parts,[l,d]=I(t,e);if(this.el=q.createElement(l,o),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=j.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith($)||e.startsWith(_)){const o=d[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+$).split(_),e=/([.?@])?(.*)/.exec(o);n.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?G:Z})}else n.push({type:6,index:s})}for(const e of t)i.removeAttribute(e)}if(O.test(i.tagName)){const t=i.textContent.split(_),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],A()),j.nextNode(),n.push({type:2,index:++s});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===w)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(_,t+1));)n.push({type:7,index:s}),t+=_.length-1}s++}}static createElement(t,e){const o=E.createElement("template");return o.innerHTML=t,o}}function V(t,e,o=t,i){var s,r,a,n;if(e===T)return e;let l=void 0!==i?null===(s=o._$Co)||void 0===s?void 0:s[i]:o._$Cl;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(n=o)._$Co)&&void 0!==a?a:n._$Co=[])[i]=l:o._$Cl=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(o,!0);j.currentNode=s;let r=j.nextNode(),a=0,n=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Y(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Q(r,this,t)),this._$AV.push(e),l=i[++n]}a!==(null==l?void 0:l.index)&&(r=j.nextNode(),a++)}return j.currentNode=E,s}v(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{constructor(t,e,o,i){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),S(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==N&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(F(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(o);else{const t=new X(s,this),e=t.u(this.options);t.v(o),this.$(e),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new q(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new Y(this.k(A()),this.k(A()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,o,i,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(void 0===s)t=V(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const i=t;let a,n;for(t=s[0],a=0;a<s.length-1;a++)n=V(this,i[o+a],e,a),n===T&&(n=this._$AH[a]),r||(r=!S(n)||n!==this._$AH[a]),n===N?t=N:t!==N&&(t+=(null!=n?n:"")+s[a+1]),this._$AH[a]=n}r&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const W=y?y.emptyScript:"";class J extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class G extends Z{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=V(this,t,e,0))&&void 0!==o?o:N)===T)return;const i=this._$AH,s=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==N&&(i===N||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const tt=b.litHtmlPolyfillSupport;null==tt||tt(q,Y),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.8.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var et,ot;class it extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,s;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(s=null==o?void 0:o.renderBefore)&&void 0!==s?s:null;r._$litPart$=a=new Y(e.insertBefore(A(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}it.finalized=!0,it._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:it}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");customElements.get("ippm-package")||customElements.define("ippm-package",class extends it{static get styles(){return[r`
        :host {
          display: flex;
          flex-direction: column;
          font-size: 1rem;
          padding: 1rem 1.25rem;
          background: #ffffff;
          border: 1px dashed var(--ippm-blue);
        }

        h3 {
          font-size: 1rem;
          margin: 0;
          font-weight: normal;
        }

        ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 1rem;
          gap: 1rem;
          height: 100%;
          margin: 0.5rem 0;
          padding: 0.5rem 0;
          list-style: none;
          border-top: 1px dashed gray;
          border-bottom: 1px dashed gray;
        }

        a {
          font-size: 90%;
          text-decoration: none;
          color: var(--ippm-blue);
        }

        kemet-button {
          --kemet-button-padding: 0.75rem;
          font-size: 90%;
          align-self: flex-start;
        }

        kemet-modal > div {
          padding: 1.5rem 2rem;
          background: white;
        }
      `]}static get properties(){return{url:{type:String},package:{type:String},assets:{type:Array},ippmData:{type:Object,reflect:!0}}}constructor(){super(),this.packages="",this.assets=[]}firstUpdated(){this.domain=window.location.origin,this.modal=this.shadowRoot.querySelector("kemet-modal")}updated(t){t.has("package")&&this.getAssets()}render(){return R`
      <h3>${this.package}</h3>
      ${this.makeAssetsList()}
      <kemet-button @click=${()=>this.confirmDelete()}>
        <kemet-icon icon="trash"></kemet-icon> Delete Package
      </kemet-button>
      <kemet-modal>
        <div>
          <p>Are you sure you want to delete <strong>${this.package}</strong>?</p>
          <kemet-button @click=${()=>this.requestDelete()}>Yes, delete it.</kemet-button>
          &nbsp;
          <kemet-button @click=${()=>this.closeModal()}>No, keep package.</kemet-button>
        </div>
      </kemet-modal>
    `}async getAssets(){const t=await fetch(`${this.domain}/wp-json/ippm/v1/package/${this.package}`).then((t=>t.json()));this.assets=t}makeAssetsList(){if(this.assets.length>0){const t=this.assets.map((t=>R`<li><a href="${this.url}${this.package}/${t}" target="_blank">${t}</a></li>`));return R`<ul>${t}</ul>`}return R`<p>There are no assets in this package.</p>`}confirmDelete(){this.modal.opened=!0}requestDelete(){this.modal.opened=!1;const t=this.ippmData.ajaxURL,e=new FormData;e.append("action","ippm_package_delete"),e.append("security",this.ippmData.security),e.append("package",this.package);fetch(t,{body:e,method:"POST"}).then((t=>t.json())).then((t=>{const e=document.querySelector("ippm-alert");if(1===t.code){document.querySelector("ippm-packages").getPackages(),e.opened=!0,e.status="success",e.message="Package deleted!",setTimeout((()=>{e.opened=!1}),3e3)}else e.opened=!0,e.status=t.status,e.message=t.message,setTimeout((()=>{e.opened=!1}),3e3)}))}closeModal(){this.modal.opened=!1}});customElements.get("ippm-packages")||customElements.define("ippm-packages",class extends it{static get styles(){return[r`
        :host {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1rem;
        }
      `]}static get properties(){return{url:{type:String},packages:{type:Array},ippmData:{type:Object}}}constructor(){super(),this.packages=[]}firstUpdated(){this.domain=window.location.origin,this.getPackages()}render(){return R`${this.makePackageList()}`}async getPackages(){const t=await fetch(`${this.domain}/wp-json/ippm/v1/packages`).then((t=>t.json()));this.packages=t}makePackageList(){if(this.packages.length>0){const t=this.packages.map((t=>R`<ippm-package url=${encodeURIComponent(this.url)} package=${t} .ippmData=${this.ippmData}></ippm-package>`));return R`${t}`}return R`<p><strong>There are currently no packages available.</strong></p>`}});window.customElements.get("ippm-alert")||window.customElements.define("ippm-alert",class extends it{static get styles(){return[r`
        :host {
          display: none;
          padding: 1rem;
          margin: 1rem 1rem 1rem 0rem;
          position: fixed;
          top: 2rem;
          z-index: 9;
          background-color: #ffffff;
        }

        :host([opened]) {
          display: block;
        }

        :host([status='success']) {
          border-left: 3px solid var(--ippm-blue);
        }

        :host([status='error']) {
          border-left: 3px solid var(--ippm-red);
        }

        :host([status='warning']) {
          border-left: 3px solid var(--ippm-orange);
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0},status:{type:String,reflect:!0},message:{type:String}}}render(){return R`
      ${this.message}
    `}});const rt=document.querySelector("kemet-upload"),at=document.querySelector("ippm-packages");if(rt&&at){at.ippmData=ippmData;const t=(t,e=2)=>{if(0===t)return"0 Bytes";const o=e<0?0:e,i=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,i)).toFixed(o))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]},e=(e,o)=>{const i=new XMLHttpRequest,s=new FormData;i.open("POST",ippmData.ajaxURL,!0),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.upload.addEventListener("progress",(e=>{o.loaded<rt.maxSize?(o.loaded=e.loaded,o.status="uploading"):(i.abort(),o.status="error",o.message=`File exceeded max upload size of ${t(rt.maxSize)}`)})),i.addEventListener("readystatechange",(e=>{let s;try{s=JSON.parse(i.response)}catch{s={}}4==i.readyState&&200==i.status?(o.status="complete",at.getPackages()):4==i.readyState&&200!=i.status&&(o.status="error",s.message&&(o.message=s.message),o.size>rt.maxSize&&(o.message=`File exceeded max upload size of ${t(rt.maxSize)}`))})),s.append("file",e),s.append("action","ippm_package_upload"),s.append("security",ippmData.security),i.send(s)};rt.addEventListener("kemet-upload-change",(t=>{Array.from(t.detail.files).forEach((t=>{const o=document.createElement("kemet-upload-file");o.name=t.name,o.size=t.size,o.type=t.type,rt.append(o),e(t,o)}))}))}
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function nt(t,e,o,i){var s,r=arguments.length,a=r<3?e:i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(a=(r<3?s(a):r>3?s(e,o,a):s(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}},ct=(t,e,o)=>{e.constructor.createProperty(o,t)};function pt(t){return(e,o)=>void 0!==o?ct(t,e,o):dt(t,e)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function ht(t){return pt({...t,state:!0})}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const mt=(t,e,o,i=!0,s=!0)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:i,composed:s,detail:o}))},ft=r`
  :host {
    --kemet-upload-color: rgb(var(--kemet-color-white));
    --kemet-upload-height: 364px;
    --kemet-upload-border: 1rem solid rgb(var(--kemet-color-gray-50-to-transparent));
    --kemet-upload-background-color: rgb(var(--kemet-color-primary-to-transparent));


    color: var(--kemet-upload-color);
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: var(--kemet-upload-height);
    border: var(--kemet-upload-border);
    background-color: var(--kemet-upload-background-color);
  }

  :host([mobile]) {
    display: block;
    height: auto;
  }

  input {
    display: none;
  }

  .button {
    cursor: pointer;
    font-size: 1rem;
    display: block;
    color: rgb(var(--kemet-color-white));
    padding: 0.5rem 1rem;
    border: 1px solid rgb(var(--kemet-color-white));
    background-color: transparent;
  }

  .upload {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--kemet-upload-margin);
    flex-direction: column;
    border: 2px dashed rgb(var(--kemet-color-white));
  }

  :host([over]) .upload {
    background-color: rgb(var(--kemet-color-green-600));
  }

  :host([mobile]) .upload {
    height: 280px;
  }

  .files {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    padding: 0 1rem;
    overflow: auto;
    background-color: rgb(var(--kemet-color-gray-50-to-transparent));
  }

  :host([mobile]) .files {
    padding: 0;
    max-height: 280px;
  }

  .heading {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
  }

  :host([no-drag-drop]) .heading {
    display: none;
  }
`,gt=r`
  :host {
    --kemet-upload-file-ripple-color: rgb(var(--kemet-color-primary));
    --kemet-upload-file-color: rgb(var(--kemet-color-text));
    --kemet-upload-file-padding: 0.5rem 1rem;
    --kemet-upload-file-border: 1px solid rgb(var(--kemet-color-primary));

    color: var(--kemet-upload-file-color);
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    height: 100%;
    max-height: 50%;
    padding: var(--kemet-upload-file-padding);
    border: var(--kemet-upload-file-border);
  }

  :host([status='error']) {
    border: 1px solid rgb(var(--kemet-color-error));
  }

  :host([status='complete']) {
    border: 1px solid rgb(var(--kemet-color-success));
  }

  h3 {
    margin: 0;
  }

  .percentage {
    font-size: clamp(2rem, 3vw, 2.5rem);
    align-self: center;
    justify-self: center;
  }

  .indicator {
    transform: scale(0.8);
  }

  :host([status='complete']) .message,
  :host([status='complete']) .indicator {
    color: rgb(var(--kemet-color-success));
  }

  :host([status='error']) .message,
  :host([status='error']) .indicator {
    color: rgb(var(--kemet-color-error));
  }
`,vt=r`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid var(--kemet-upload-file-ripple-color);
    opacity: 1;
    border-radius: var(--kemet-border-radius-circle);
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;let bt=class extends it{constructor(){super(...arguments),this.slug="upload",this.heading="Drag & Drop Files",this.breakpoint="600px",this.buttonLabel="Browse Files"}firstUpdated(){this.fileInputElement=this.shadowRoot.querySelector('[type="file"]'),this.upload=this.shadowRoot.querySelector(".upload"),["dragenter","dragover","dragleave","drop"].forEach((t=>{this.upload.addEventListener(t,(t=>(t=>{t.preventDefault(),t.stopPropagation()})(t)),!1)})),["dragenter","dragover"].forEach((t=>{this.upload.addEventListener(t,(()=>{this.over=!0}),!1)})),["dragleave","drop"].forEach((t=>{this.upload.addEventListener(t,(()=>{this.over=!1}),!1)})),this.isMobile(),this.hasDragDrop(),window.addEventListener("resize",(()=>{this.isMobile()})),this.upload.addEventListener("drop",(t=>this.handleDrop(t)),!1)}render(){return R`
      <div class="upload" part="upload">
        <kemet-icon icon="cloud-arrow-up" size="128"></kemet-icon>
        <input
          type="file"
          id=${this.slug}
          ?multiple=${this.multiple}
          accept=${(t=>null!=t?t:N)(this.accept)?this.accept:null}
          @change=${t=>this.handleChange(t)}
        />
        <h3 class="heading" part="heading">${this.heading}</h3>
        <label class="button" part="button" for=${this.slug}>${this.buttonLabel}</label>
      </div>
      <div class="files" part="files">
        <slot></slot>
      </div>
    `}handleChange(t){mt(this,"kemet-upload-change",{event:t,files:this.fileInputElement.files,fileElement:this.fileInputElement})}handleDrop(t){mt(this,"kemet-upload-change",{event:t,files:(null==t?void 0:t.dataTransfer.files)||[],fileElement:this.fileInputElement})}isMobile(){const t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.mobile=t.matches}hasDragDrop(){this.noDragDrop=!("draggable"in document.createElement("span"))}};bt.styles=[ft],nt([pt({type:String})],bt.prototype,"slug",void 0),nt([pt({type:String})],bt.prototype,"accept",void 0),nt([pt({type:Boolean})],bt.prototype,"multiple",void 0),nt([pt({type:Boolean,reflect:!0})],bt.prototype,"over",void 0),nt([pt({type:String})],bt.prototype,"heading",void 0),nt([pt({type:Boolean,reflect:!0})],bt.prototype,"mobile",void 0),nt([pt({type:String,reflect:!0})],bt.prototype,"breakpoint",void 0),nt([pt({type:Boolean,reflect:!0,attribute:"no-drag-drop"})],bt.prototype,"noDragDrop",void 0),nt([pt({type:Number,attribute:"max-size"})],bt.prototype,"maxSize",void 0),nt([pt({type:String,attribute:"button-label"})],bt.prototype,"buttonLabel",void 0),nt([ht()],bt.prototype,"fileInputElement",void 0),nt([ht()],bt.prototype,"upload",void 0),bt=nt([lt("kemet-upload")],bt);const yt=(t,e=2)=>{if(0===t)return"0 Bytes";const o=e<0?0:e,i=Math.floor(Math.log(t)/Math.log(1024));return`${parseFloat((t/1024**i).toFixed(o))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}`};let kt=class extends it{constructor(){super(...arguments),this.loaded=0,this.size=0,this.percent=0}updated(){this.percent=this.calculatePercent()}render(){return R`
      <div class="percentage" part="percentage">
        <span>${this.percent}%</span>
      </div>
      <div>
        <h3 part="filename">${this.name}</h3>
        <span part="loaded">${yt(this.loaded)} / ${yt(this.size)}</span>
        ${this.message?R`<div class="message" part="message">${this.message}</div>`:null}
      </div>
      <div class="indicator" part="indicator">
        ${this.getStatusIcon()}
      </div>
    `}calculatePercent(){const t=Math.round(100*this.loaded/this.size);return t>100?100:t}getStatusIcon(){return"uploading"===this.status?R`<div class="lds-ripple"><div></div><div></div></div>`:"complete"===this.status?R`<kemet-icon icon="check-circle" size="48"></kemet-icon>`:"error"===this.status?R`<kemet-icon icon="exclamation-circle" size="48"></kemet-icon>`:null}};kt.styles=[gt,vt],nt([pt({type:String})],kt.prototype,"name",void 0),nt([pt({type:Number})],kt.prototype,"loaded",void 0),nt([pt({type:Number})],kt.prototype,"size",void 0),nt([pt({type:String})],kt.prototype,"type",void 0),nt([pt({type:String,reflect:!0})],kt.prototype,"status",void 0),nt([pt({type:Number})],kt.prototype,"percent",void 0),nt([pt({type:String})],kt.prototype,"message",void 0),kt=nt([lt("kemet-upload-file")],kt);const $t=r`
  :host {
    --kemet-button-font-size: inherit;
    --kemet-button-color: rgb(var(--kemet-color-background));
    --kemet-button-width: auto;
    --kemet-button-height: auto;
    --kemet-button-border: 0;
    --kemet-button-border-radius: 0;
    --kemet-button-transition-speed: 300ms;
    --kemet-button-background-color: rgb(var(--kemet-color-foreground));
    --kemet-button-hover-brightness: 1.25;
    --kemet-button-disabled-opacity: 0.5;
    --kemet-button-gap: 0.5rem;
    --kemet-button-padding: 1rem 1.25rem;
    --kemet-button-hover-decoration: underline;
    --kemet-button-circle-size: 50px;
    --kemet-button-rounded-amount: 6px;
    --kemet-button-border-width: 1.5px;
    --kemet-button-border-style: solid;
    --kemet-button-border-color: rgb(var(--kemet-color-foreground));

    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--kemet-button-font-size);
    color: var(--kemet-button-color);
    width: var(--kemet-button-width);
    height: var(--kemet-button-height);
    border: var(--kemet-button-border);
    border-radius: var(--kemet-button-border-radius);
    transition: filter var(--kemet-button-transition-speed) ease;
    background-color: var(--kemet-button-background-color);
  }

  :host(:hover:not([disabled])) {
    filter: brightness(var(--kemet-button-hover-brightness));
  }

  :host([disabled]) {
    opacity: var(--kemet-button-disabled-opacity);
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    gap: var(--kemet-button-gap);
    align-items: center;
    justify-content: center;
    color: inherit;
    font-size: inherit;
    width: 100%;
    padding: var(--kemet-button-padding);
    border: 0;
    background: none;
  }

  :host([disabled]) .button {
    cursor: not-allowed;
  }

  :host([variant='text']) {
    --kemet-button-color: rgb(var(--kemet-color-text));
    --kemet-button-background-color: none;
  }

  :host([variant='text']:hover) {
    text-decoration: var(--kemet-button-hover-decoration);
  }

  :host([variant='circle']) {
    --kemet-button-border-radius: var(--kemet-border-radius-circle);
    --kemet-button-width: var(--kemet-button-circle-size);
    --kemet-button-height: var(--kemet-button-circle-size);
  }

  :host([variant='rounded']) {
    --kemet-button-border-radius: var(--kemet-button-rounded-amount);
  }

  :host([variant='pill']) {
    --kemet-button-border-radius: var(--kemet-border-radius-pill);
  }

  :host([outlined]) {
    --kemet-button-color: rgb(var(--kemet-color-foreground));
    --kemet-button-background-color: transparent;
    --kemet-button-border: var(--kemet-button-border-width) var(--kemet-button-border-style) var(--kemet-button-border-color);
  }
`;class _t{constructor(t,e=void 0){(this.host=t).addController(this),this.options={form:t=>t.closest("form"),name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled,checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),...e},this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form=void 0)}handleFormData(t){var e;const o=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host);o||"string"!=typeof i||void 0===s||(Array.isArray(s)?s.forEach((e=>{var o;null===(o=t.formData)||void 0===o||o.append(i,e.toString())})):null===(e=t.formData)||void 0===e||e.append(i,s.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.checkValidity;if(this.form=this.options.form(this.host),this.form&&!this.form.noValidate&&!e&&!o(this.host)){t.preventDefault(),t.stopImmediatePropagation();this.form.querySelectorAll("kemet-input, kemet-textarea, kemet-select, kemet-checkbox, kemet-radios").forEach((t=>{t.checkValidity(),t.checkValidity()||(t.status="error",t.invalid=!0,t.dispatchEvent(new CustomEvent("kemet-input-status",{bubbles:!0,composed:!0,detail:{status:"error",validity:t.validity?t.validity:{},element:t}}))),t.checkLimitValidity&&!t.checkLimitValidity()&&(t.status="error",t.invalid=!0,t.dispatchEvent(new CustomEvent("kemet-input-status",{bubbles:!0,composed:!0,detail:{status:"error",validity:{passedLimit:!0},element:t}})))}))}}submit(){const t=document.createElement("button");this.form&&(t.type="submit",t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clip="rect(0 0 0 0)",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",this.form.append(t),t.click(),t.remove())}}const wt=r`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;let xt=class extends it{constructor(){super(...arguments),this.icon="alarm",this.set="bootstrap",this.size=16}updated(){this.getIcon(),this.style.width=`${this.size}px`,this.style.height=`${this.size}px`}render(){return R``}async getIcon(){var t,e,o;const i=new DOMParser;let s;try{if(s=await fetch(`${this.getUrl()}/${this.icon}.svg`).then((t=>t.text())),s.indexOf("</svg>")<0)throw new Error("Not a valid svg.")}catch(t){s="",console.error(t)}const r=i.parseFromString(s,"image/svg+xml").documentElement,a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("svg");if("svg"===r.tagName)r.setAttribute("id",this.icon),r.setAttribute("width",`${this.size}px`),r.setAttribute("height",`${this.size}px`),r.setAttribute("fill","currentColor"),a&&a.remove(),null===(e=this.shadowRoot)||void 0===e||e.appendChild(r);else{console.error(`Could not find icon "${this.icon}" in set "${this.set}"`);const t=`\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="kemet-error" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" width="${this.size}" height="${this.size}">\n          <style type="text/css">\n            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#EC1C24;}\n          </style>\n          <g>\n            <path class="st0" d="M256,0c70.7,0,134.7,28.7,181,75c46.3,46.3,75,110.3,75,181c0,70.7-28.7,134.7-75,181   c-46.3,46.3-110.3,75-181,75c-70.7,0-134.7-28.7-181-75C28.7,390.7,0,326.7,0,256c0-70.7,28.7-134.7,75-181S185.3,0,256,0z"/>\n            <path class="st1" d="M512,256c0-70.7-28.7-134.7-75-181C390.7,28.7,326.7,0,256,0C193,0,135.5,22.8,90.9,60.6l-0.1-0.1   C85.3,65.1,80,69.9,75,75c-5,5.1-9.9,10.3-14.5,15.8l0.1,0.1C22.8,135.5,0,193,0,256c0,70.7,28.7,134.7,75,181   c46.3,46.3,110.3,75,181,75c63,0,120.5-22.8,165.1-60.6l0.1,0.1c5.4-4.6,10.7-9.5,15.8-14.5c5-5,9.9-10.3,14.5-15.8l-0.1-0.1   C489.2,376.6,512,319,512,256z M256,42.9c58.9,0,112.1,23.9,150.7,62.4c38.6,38.6,62.4,91.9,62.4,150.7c0,51.1-18.1,98-48.1,134.8   L121.2,90.9C158,60.9,204.9,42.9,256,42.9z M256,469.1c-58.8,0-112.1-23.9-150.7-62.4C66.7,368.1,42.9,314.9,42.9,256   c0-51.1,18.1-98,48.1-134.8l299.8,299.8C354,451.1,307.1,469.1,256,469.1z"/>\n          </g>\n        </svg>\n      `,e=i.parseFromString(t,"image/svg+xml").documentElement;a&&a.remove(),null===(o=this.shadowRoot)||void 0===o||o.appendChild(e)}}getUrl(){let t;switch(this.set){case"bootstrap":default:t="https://unpkg.com/bootstrap-icons@latest/icons";break;case"font-awesome-brands":t="https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/brands";break;case"font-awesome-regular":t="https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/regular";break;case"font-awesome-solid":t="https://unpkg.com/@fortawesome/fontawesome-free@latest/svgs/solid"}return t}};xt.styles=[wt],nt([pt({type:String})],xt.prototype,"icon",void 0),nt([pt({type:String})],xt.prototype,"set",void 0),nt([pt({type:Number})],xt.prototype,"size",void 0),xt=nt([lt("kemet-icon")],xt);let Et=class extends it{constructor(){super(),this.outlined=!1,this.disabled=!1,this.variant="standard",this.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("mouseover",this.handleMouseOver.bind(this)),this.addEventListener("mouseout",this.handleMouseOut.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this)),this.addEventListener("keyup",(t=>this.handleKeyUp(t))),this.formSubmitController=new _t(this)}render(){return this.link&&!this.disabled?R`
        <a href=${this.link} class="button" role="button" part="button">
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </a>
      `:R`
      <button class="button" part="button" ?disabled=${this.disabled} aria-disabled=${this.disabled?"true":"false"}>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </button>
    `}handleMouseOver(){this.hover=!0}handleMouseOut(){this.hover=!1}handleClick(){this.hover=!1,this.active=!0,setTimeout((()=>{this.active=!1}),300),this.shadowRoot.querySelector("button")&&this.formSubmitController.submit()}handleBlur(){this.focused=!1,this.active=!1,this.hover=!1}handleKeyUp(t){"Tab"===t.key&&(this.focused=!0)}};Et.styles=[$t],nt([pt({type:Boolean,reflect:!0})],Et.prototype,"active",void 0),nt([pt({type:Boolean,reflect:!0})],Et.prototype,"hover",void 0),nt([pt({type:Boolean,reflect:!0})],Et.prototype,"focused",void 0),nt([pt({type:String})],Et.prototype,"link",void 0),nt([pt({type:Boolean,reflect:!0})],Et.prototype,"outlined",void 0),nt([pt({type:Boolean,reflect:!0})],Et.prototype,"disabled",void 0),nt([pt({reflect:!0})],Et.prototype,"variant",void 0),Et=nt([lt("kemet-button")],Et);const At=r`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    --kemet-modal-radius: var(--kemet-border-radius-xl);
    --kemet-modal-transition-speed: 0.3s;
    --kemet-modal-dialog-min-width: 0;
    --kemet-modal-dialog-max-width: none;
    --kemet-modal-dialog-mobile-width: calc(100% - 2rem);
    --kemet-modal-dialog-mobile-margin: 0 auto;
    --kemet-modal-dialog-mobile-padding: 1rem;
    --kemet-modal-dialog-background-color: rgb(var(--kemet-color-white));
    --kemet-modal-overlay-background-color: rgb(var(--kemet-color-black) / 20%);

    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    backface-visibility: hidden;
  }

  :host([opened]) {
    visibility: visible;
  }

  dialog {
    display: block;
    position: relative;
    z-index: 3;
    margin: auto;
    min-width: var(--kemet-modal-dialog-min-width);
    max-width: var(--kemet-modal-dialog-max-width);
    border: 0;
    background: var(--kemet-modal-dialog-background-color);
  }

  dialog::backdrop {
    background: none;
  }

  :host([mobile]) dialog {
    margin: var(--kemet-modal-dialog-mobile-margin);
    width: var(--kemet-modal-dialog-mobile-width);
    padding: var(--kemet-modal-dialog-mobile-padding);
    inset-block-start: auto;
  }

  :host([rounded]) dialog {
    border-radius: var(--kemet-modal-radius);
  }

  :host([rounded][mobile]) dialog {
    border-top-left-radius: var(--kemet-modal-radius);
    border-top-right-radius: var(--kemet-modal-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }


  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    visibility: hidden;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    background: var(--kemet-modal-overlay-background-color);
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([opened]) .overlay {
    opacity: 1;
    visibility: visible;
  }
`,St=r`
  /* fadein-scaleup */
  :host([effect="fadein-scaleup"]) dialog {
    transform: scale(0.7);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="fadein-scaleup"][opened]) dialog {
    transform: scale(1);
    opacity: 1;
  }

  /* slide-right */
  :host([effect="slide-right"]) dialog {
    transform: translateX(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed) cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  :host([effect="slide-right"][opened]) dialog {
    transform: translateX(0);
    opacity: 1;
  }

  /* slide-bottom */
  :host([effect="slide-bottom"]) dialog {
    transform: translateY(20%);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="slide-bottom"][opened]) dialog {
    transform: translateY(0);
    opacity: 1;
  }

  /* newspaper */
  :host([effect="newspaper"]) dialog {
    transform: scale(0) rotate(720deg);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="newspaper"][opened]) dialog {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  /* fall */
  :host([effect="fall"]) {
    perspective: 1300px;
  }

  :host([effect="fall"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(600px) rotateX(20deg);
    opacity: 0;
  }

  :host([effect="fall"][opened]) dialog {
    transition: all var(--kemet-modal-transition-speed) ease-in;
    transform: translateZ(0px) rotateX(0deg);
    opacity: 1;
  }

  /* side-fall */
  :host([effect="side-fall"]) {
    perspective: 1300px;
  }

  :host([effect="side-fall"]) dialog {
    transform-style: preserve-3d;
    transform: translate(30%) translateZ(600px) rotate(10deg);
    opacity: 0;
  }

  :host([effect="side-fall"][opened]) dialog {
    transition: all var(--kemet-modal-transition-speed) ease-in;
    transform: translate(0%) translateZ(0) rotate(0deg);
    opacity: 1;
  }

  /* flip-horizontal */
  :host([effect="flip-horizontal"]) {
    perspective: 1300px;
  }

  :host([effect="flip-horizontal"]) dialog {
    transform-style: preserve-3d;
    transform: rotateY(-70deg);
    transition: all var(--kemet-modal-transition-speed);
    opacity: 0;
  }

  :host([effect="flip-horizontal"][opened]) dialog {
    transform: rotateY(0deg);
    opacity: 1;
  }

  /* flip-vertical */
  :host([effect="flip-vertical"]) {
    perspective: 1300px;
  }

  :host([effect="flip-vertical"]) dialog {
    transform-style: preserve-3d;
    transform: rotateX(-70deg);
    transition: all var(--kemet-modal-transition-speed);
    opacity: 0;
  }

  :host([effect="flip-vertical"][opened]) dialog {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* sign-3d */
  :host([effect="sign-3d"]) {
    perspective: 1300px;
  }

  :host([effect="sign-3d"]) dialog {
    transform-style: preserve-3d;
    transform: rotateX(-60deg);
    transform-origin: 50% 0;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="sign-3d"][opened]) dialog {
    transform: rotateX(0deg);
    opacity: 1;
  }

  /* super-scaled */
  :host([effect="super-scaled"]) dialog {
    transform: scale(2);
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="super-scaled"][opened]) dialog {
    transform: scale(1);
    opacity: 1;
  }

  /* slit */
  :host([effect="slit"]) {
    perspective: 1300px;
  }

  :host([effect="slit"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(-3000px) rotateY(90deg);
    opacity: 0;
  }

  :host([effect="slit"][opened]) dialog {
    animation: slit .7s forwards ease-out;
  }

  @keyframes slit {
    50% {
      transform: translateZ(-250px) rotateY(89deg);
      opacity: 1;
      animation-timing-function: ease-in;}
    100% {
      transform: translateZ(0) rotateY(0deg);
      opacity: 1;
    }
  }

  /* rotate-bottom */
  :host([effect="rotate-bottom"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-bottom"]) dialog {
    transform-style: preserve-3d;
    transform: translateY(100%) rotateX(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed) ease-out;
  }

  :host([effect="rotate-bottom"][opened]) dialog {
    transform: translateY(0%) rotateX(0deg);
    opacity: 1;
  }

  /* rotate-left */
  :host([effect="rotate-left"]) {
    perspective: 1300px;
  }

  :host([effect="rotate-left"]) dialog {
    transform-style: preserve-3d;
    transform: translateZ(100px) translateX(-30%) rotateY(90deg);
    transform-origin: 0 100%;
    opacity: 0;
    transition: all var(--kemet-modal-transition-speed);
  }

  :host([effect="rotate-left"][opened]) dialog {
    transform: translateZ(0px) translateX(0%) rotateY(0deg);
    opacity: 1;
  }
`;let Ct=class extends it{constructor(){super(),this.opened=!1,this.closeOnClick=!1,this.breakpoint="600px",this.addEventListener("kemet-modal-close-pressed",(()=>{this.handleClose()}))}firstUpdated(){this.focusableSelector="body, a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",this.focusableElements=this.querySelectorAll(this.focusableSelector),this.addEventListener("keyup",(t=>{"Escape"===t.key&&this.handleClose()})),this.addEventListener("click",(t=>{const e=t.target;this.opened&&this.closeOnClick&&"kemet-modal"===e.tagName.toLowerCase()&&this.handleClose()})),window.addEventListener("resize",(()=>{this.isMobile()})),this.focusableElements.forEach((t=>{t.addEventListener("keydown",(t=>this.handleFocusableDown(t)))}))}updated(t){t.get("opened")||!0!==this.opened||this.handleOpen(),t.get("opened")&&!1===this.opened&&this.handleClose(),this.isMobile()}render(){return R`
      <dialog part="dialog" @close=${()=>this.handleClose()}>
        <slot></slot>
      </dialog>
      <div class="overlay" part="overlay"></div>
    `}isMobile(){const t=window.matchMedia(`(max-width: ${this.breakpoint})`);this.mobile=t.matches}handleOpen(){var t;this.opened=!0,(null===(t=this.dialogElement)||void 0===t?void 0:t.showModal)&&this.dialogElement.showModal(),mt(this,"kemet-modal-opened",this)}handleClose(){var t;this.opened=!1,(null===(t=this.dialogElement)||void 0===t?void 0:t.close)&&this.dialogElement.close(),mt(this,"kemet-modal-closed",this)}handleFocusableDown(t){const e=this.focusableElements[0],o=this.focusableElements[this.focusableElements.length-1];"Tab"===t.key&&(t.shiftKey&&document.activeElement===e?(t.preventDefault(),o.focus()):t.shiftKey||document.activeElement!==o||(t.preventDefault(),e.focus()))}};Ct.styles=[At,St],nt([pt({type:Boolean,reflect:!0})],Ct.prototype,"opened",void 0),nt([pt({type:String,reflect:!0})],Ct.prototype,"effect",void 0),nt([pt({type:Boolean,attribute:"close-on-click"})],Ct.prototype,"closeOnClick",void 0),nt([pt({type:String})],Ct.prototype,"breakpoint",void 0),nt([pt({type:Boolean,reflect:!0})],Ct.prototype,"mobile",void 0),nt([pt({type:Boolean,reflect:!0})],Ct.prototype,"rounded",void 0),nt([
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
function(t){return(({finisher:t,descriptor:e})=>(o,i)=>{var s;if(void 0===i){const i=null!==(s=o.originalKey)&&void 0!==s?s:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const s=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(s,i)}})({descriptor:e=>{const o={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};return o}})}("dialog")],Ct.prototype,"dialogElement",void 0),nt([ht()],Ct.prototype,"focusableSelector",void 0),nt([ht()],Ct.prototype,"focusableElements",void 0),Ct=nt([lt("kemet-modal")],Ct)}));
//# sourceMappingURL=interactiveposts.js.map
