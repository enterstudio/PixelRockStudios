function handleReady(a){console.log("READY: "+a),app.Animation.start()}var app=app||{};app.Banner=function(){function a(){EB.isInitialized()?b():EB.addEventListener(EBG.EventName.EB_INITIALIZED,b)}function b(){document.getElementById("button-exit").addEventListener("click",c,!1)}function c(){EB.clickthrough()}return{initialize:a}}();var app=app||{};app.Animation=function(){function a(){d=document.getElementById("button-exit"),e=TweenMax,e.set([copy1,copy2],{y:"+=25"}),e.set([blueBG,copy1,copy2,can,cta,cta_hover,exclusive,hand1A,hand1B,hand2A,hand2B],{opacity:0}),e.set([paint1A,paint1B],{rotation:-45}),e.set([cta,cta_hover],{opacity:0,display:"none"}),e.set([hand1B,hand2B],{rotation:180}),d.onmouseover=function(){e.to(cta_hover,.26,{opacity:1,ease:Quad.easeOut})},d.onmouseout=function(){e.to(cta_hover,.26,{opacity:0,ease:Quad.easeOut})}}function b(){function a(){e.to(blueBG,.5,{opacity:1,ease:Power1.easeInOut}),e.to(copy1,1.75,{y:"-=25",opacity:1,ease:Power3.easeOut,delay:1}),e.to(hand1A,.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to(hand1B,.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to(paint1A,1.8,{y:"+=305",x:"+=305",ease:Power3.easeOut,delay:3.2}),e.to(hand1A,1.8,{y:"+=305",x:"+=305",ease:Power3.easeOut,delay:3.2}),e.to(hand1B,1.8,{y:"-=305",x:"-=305",ease:Power3.easeOut,delay:3.2}),e.to(paint1B,1.8,{y:"-=305",x:"-=305",ease:Power3.easeOut,delay:3.2}),e.delayedCall(4,b)}function b(){e.to(copy2,1.75,{y:"-=25",opacity:1,ease:Power3.easeOut}),e.to(hand2A,.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to(hand2B,.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to(hand2A,1.8,{x:"-=345",ease:Power3.easeOut,delay:3.2}),e.to(hand2B,1.8,{x:"+=345",ease:Power3.easeOut,delay:3.2}),e.to(paint2A,1.8,{x:"-=345",ease:Power3.easeOut,delay:3.2}),e.to(paint2B,1.8,{x:"+=345",ease:Power3.easeOut,delay:3.2}),e.delayedCall(4.2,c)}function c(){e.to(logo,.5,{opacity:0,ease:Power1.easeOut}),e.to(can,.5,{opacity:1,ease:Power1.easeOut}),e.to(exclusive,1,{opacity:1,ease:Power1.easeInOut,delay:1}),e.to([cta,cta_hover],0,{display:"block",opacity:0,ease:Power1.easeInOut,delay:2}),e.to(cta,1,{opacity:1,ease:Power1.easeInOut,delay:2})}e.set(d,{opacity:0}),a()}function c(){console.log("stopping animation")}var d,e;return{initialize:a,start:b,stop:c}}();var app=app||{};app.Animation.initialize(),app.Banner.initialize(),handleReady();