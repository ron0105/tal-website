/** Shared animation constants — mirrors CSS tokens in globals.css */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  quick: 0.2,
  base: 0.65,
  slow: 0.9,
} as const;

/** Rebuild spec section 7, in seconds, for the few motions that need Framer (M10, M13). */
export const MOTION = {
  base: 0.5,
  stagger: 0.07,
  maxStagger: 6,
  exit: 0.15,
  layout: 0.3,
  page: 0.2,
} as const;

/**
 * M1 timing: when the sub-headline (step 1) and buttons (step 2) start after an H1 of `words` words.
 * Sub 150ms after the last word starts, buttons 100ms after that, but the whole hero must finish
 * inside 900ms (spec section 7), so long headlines pull the followers in to start by 350 / 450ms.
 */
export function heroDelay(words: number, step: 1 | 2) {
  const sub = Math.min(Math.max(0, words - 1) * 40 + 150, 350);
  return step === 1 ? sub : Math.min(sub + 100, 450);
}

/** Phones run every motion ~30% shorter (spec section 7). Matches --m in globals.css. */
export function motionScale() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? 0.7 : 1;
}

// Runs as a plain inline script at the end of <body>. Content is visible by default (Rohan,
// Nov 1 2026): nothing is hidden until the page has loaded. At load, every [data-reveal] block
// already on screen is marked shown with no animation (data-in="static"); only then does the
// html get .js, which lets blocks further down wait off-screen and animate in once, at 20% in
// view (or the top 20% of a block taller than the screen). Blocks added later by client-side
// navigation get the same treatment. It also pauses [data-marquee] strips while off-screen.
export const REVEAL_SCRIPT = `(function(){
var w=window,d=document;
if(!("IntersectionObserver" in w))return;
function show(t){t.setAttribute("data-in","");}
function onScreen(el){var r=el.getBoundingClientRect();return r.top<w.innerHeight&&r.bottom>0;}
var small=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);small.unobserve(e.target);}});},{threshold:0.2});
var tall=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);tall.unobserve(e.target);}});},{rootMargin:"0px 0px -20% 0px"});
var mq=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.removeAttribute("data-paused");else e.target.setAttribute("data-paused","");});});
var seen=new WeakSet();
function scan(){
d.querySelectorAll("[data-reveal]:not([data-in])").forEach(function(el){if(seen.has(el))return;seen.add(el);if(onScreen(el)){el.setAttribute("data-in","static");return;}(el.offsetHeight>w.innerHeight?tall:small).observe(el);});
d.querySelectorAll("[data-marquee]").forEach(function(el){if(seen.has(el))return;seen.add(el);mq.observe(el);});
}
function start(){
scan();
d.documentElement.classList.add("js");
new MutationObserver(scan).observe(d.body,{childList:true,subtree:true});
}
if(d.readyState==="complete")start();else w.addEventListener("load",start);
})();`;
