var h=(n,o,i)=>{if(!o.has(n))throw TypeError("Cannot "+i)},d=(n,o,i)=>(h(n,o,"read from private field"),i?i.call(n):o.get(n)),f=(n,o,i)=>{if(o.has(n))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(n):o.set(n,i)},m=(n,o,i,l)=>(h(n,o,"write to private field"),l?l.call(n,i):o.set(n,i),i);(function(){var n;async function o(){return new Promise(c=>{document.readyState=="loading"?document.addEventListener("DOMContentLoaded",()=>c(),{once:!0}):c()})}function i(c,e,t){const r=new MutationObserver((s,a)=>{for(const w of s)e(w,a)});return r.observe(c,{childList:!0,subtree:!0,...t}),r}function l(c,e=document.documentElement){return new Promise(t=>{function r(){const s=e.querySelector(c);s&&t(s)}i(e,(s,a)=>{r(),a.disconnect()})})}class u{constructor(){f(this,n,{})}on(e,t){const r=d(this,n)[e];return r?r.push(t):d(this,n)[e]=[t],this}addListener(e,t){return this.on(e,t)}once(e,t){const r=(...s)=>{this.off(e,r),t(...s)};return this.on(e,r),this}emit(e,...t){const r=d(this,n)[e]||[];for(let s=0;s<r.length;s++)r[s](...t);return Boolean(r.length)}off(e,t){return d(this,n)[e]&&(d(this,n)[e]=d(this,n)[e].filter(r=>r!==t)),this}removeListener(e,t){return this.off(e,t)}removeAllListeners(e){return e?delete d(this,n)[e]:m(this,n,{}),this}eventNames(){return Reflect.ownKeys(d(this,n))}listeners(e){return d(this,n)[e]}listenerCount(e){var t,r;return(r=(t=d(this,n)[e])==null?void 0:t.length)!=null?r:0}}n=new WeakMap;class p extends u{constructor(){super();const{history:e,location:t}=window,{pushState:r,replaceState:s}=e;e.pushState=(...a)=>{r.apply(e,a),this.emit("pushState",t,a[0])},e.replaceState=(...a)=>{s.apply(e,a),this.emit("replaceState",t,a[0])},window.addEventListener("popstate",({state:a})=>{this.emit("popState",t,a)})}}new p,o().then(v);async function v(){i(document.body,(c,e)=>{var t;for(const r of c.addedNodes){const s=(t=r.querySelector('div[data-test-selector="community-points-summary"]'))==null?void 0:t.querySelector("button");s&&(s.addEventListener("click",()=>{y()}),e.disconnect())}})}async function y(c){var e,t;const r=await l("div.rewards-list");if(r){(e=r.querySelectorAll("div.reward-list-item > div > button")[0])==null||e.click();const s=(t=document.querySelector("div#channel-points-reward-center-body"))==null?void 0:t.querySelector("button");s?.click()}}})();
