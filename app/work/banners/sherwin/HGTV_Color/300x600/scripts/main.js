function handleReady(a){console.log("READY: "+a),app.Animation.start()}var app=app||{};app.Banner=function(){function a(){EB.isInitialized()?b():EB.addEventListener(EBG.EventName.EB_INITIALIZED,b)}function b(){document.getElementById("button-exit").addEventListener("click",c,!1)}function c(){EB.clickthrough()}return{initialize:a}}();var app=app||{};app.Animation=function(){function a(){d=document.getElementById("button-exit"),e=TweenMax,e.set(color1,{y:600}),e.set(color2,{y:-600}),e.set(color3,{y:600}),e.set(color4,{y:-600}),e.set(color5,{y:600}),e.set(color6,{y:-600}),e.set(color7,{y:600}),e.set(color8,{y:-600}),e.set(color9,{opacity:0}),e.set([copy1,copy3,copy4,can1,can2,can3],{opacity:0}),e.set(can2,{x:70}),e.set(can3,{x:-70}),e.set([cta1,cta2],{opacity:0,display:"none"}),e.set(copy5,{opacity:0}),d.onmouseover=function(){e.to(cta1,.26,{opacity:0,ease:Quad.easeOut}),e.to(cta2,.26,{opacity:1,ease:Quad.easeOut})},d.onmouseout=function(){e.to(cta2,.26,{opacity:0,ease:Quad.easeOut}),e.to(cta1,.26,{opacity:1,ease:Quad.easeOut})}}function b(){function a(){e.to(color1,1,{y:0,ease:Power3.easeInOut}),e.to(color2,1,{y:0,ease:Power3.easeInOut}),e.to(copy1,1,{opacity:1,ease:Power1.easeInOut,delay:.8}),e.to(logo1,.8,{opacity:1,ease:Power1.easeInOut,delay:1}),e.delayedCall(3,b)}function b(){e.to(color1,1,{y:-600,ease:Power3.easeInOut}),e.to(color2,1,{y:600,ease:Power3.easeInOut}),e.to(color3,1,{y:0,ease:Power3.easeInOut}),e.to(color4,1,{y:0,ease:Power3.easeInOut}),e.delayedCall(3,c)}function c(){e.to(color3,1,{y:-600,ease:Power3.easeInOut}),e.to(color4,1,{y:600,ease:Power3.easeInOut}),e.to(color5,1,{y:0,ease:Power3.easeInOut}),e.to(color6,1,{y:0,ease:Power3.easeInOut}),e.to(copy3,1,{opacity:1,ease:Power1.easeInOut,delay:.8}),e.delayedCall(3,f)}function f(){e.to(color5,1,{y:-600,ease:Power3.easeInOut}),e.to(color6,1,{y:600,ease:Power3.easeInOut}),e.to(color7,1,{y:0,ease:Power3.easeInOut}),e.to(color8,1,{y:0,ease:Power3.easeInOut}),e.to(copy4,1,{opacity:1,ease:Power1.easeInOut,delay:.8}),e.delayedCall(5,g)}function g(){e.to(color7,1,{y:-600,ease:Power3.easeInOut}),e.to(color8,1,{y:600,ease:Power3.easeInOut}),e.to(copy4,.5,{opacity:0,ease:Power1.easeInOut}),e.to(logo1,.5,{opacity:0,ease:Power1.easeInOut}),e.to(color9,0,{opacity:1}),e.to(can1,0,{opacity:1}),e.to(can2,0,{opacity:1}),e.to(can3,0,{opacity:1}),e.to(can2,2,{x:0,ease:Power3.easeInOut}),e.to(can3,2,{x:0,ease:Power3.easeInOut}),e.to(copy5,1,{opacity:1,ease:Power1.easeInOut,delay:1}),e.to([cta1,cta2],0,{display:"block",opacity:0,ease:Power1.easeInOut}),e.to([cta1],1,{opacity:1,ease:Power1.easeInOut,delay:1})}e.set(d,{opacity:0}),a()}function c(){console.log("stopping animation")}var d,e;return{initialize:a,start:b,stop:c}}();var app=app||{};app.Animation.initialize(),app.Banner.initialize(),handleReady();