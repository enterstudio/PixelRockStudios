function handleReady(a){console.log("READY: "+a),app.Animation.start()}var app=app||{};app.Banner=function(){function a(){EB.isInitialized()?b():EB.addEventListener(EBG.EventName.EB_INITIALIZED,b)}function b(){document.getElementById("button-exit").addEventListener("click",c,!1)}function c(){EB.clickthrough()}return{initialize:a}}();var app=app||{};app.Animation=function(){function a(){d=document.getElementById("button-exit"),e=TweenMax,e.set([copy1,copy2],{y:"+=25"}),e.set([blueBG,copy1,copy2,can,cta,cta_hover,exclusive,hand1,hand2],{opacity:0}),e.set([cta,cta_hover],{opacity:0,display:"none"}),d.onmouseover=function(){e.to(cta_hover,.26,{opacity:1,ease:Quad.easeOut})},d.onmouseout=function(){e.to(cta_hover,.26,{opacity:0,ease:Quad.easeOut})}}function b(){function a(){e.to(blueBG,.5,{opacity:1,ease:Power1.easeInOut}),e.to(copy1,1.75,{y:"-=25",opacity:1,ease:Power3.easeOut,delay:1}),e.to([paint1,hand1],.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to(paint1,2.5,{y:"+=600",ease:Power3.easeOut,delay:3.2}),e.to(hand1,2.5,{y:"+=600",ease:Power3.easeOut,delay:3.2}),e.to(hand1,.5,{opacity:0,delay:5.5}),e.to(hand1,0,{y:0,delay:6}),e.delayedCall(5,b)}function b(){e.to(logo2,1.75,{opacity:1,ease:Power3.easeOut}),e.to(copy2,1.75,{y:"-=25",opacity:1,ease:Power3.easeOut}),e.to([hand1,hand2,paint2],.2,{opacity:1,ease:Power3.easeOut,delay:3}),e.to([hand1,hand2],2.5,{y:"+=600",ease:Power3.easeOut,delay:3.2}),e.to(paint2,2.5,{y:"+=600",ease:Power3.easeOut,delay:3.2}),e.delayedCall(5.2,c)}function c(){e.to(can,.5,{opacity:1,ease:Power1.easeOut}),e.to(exclusive,1,{opacity:1,ease:Power1.easeInOut,delay:1}),e.to([cta,cta_hover],0,{display:"block",opacity:0,ease:Power1.easeInOut,delay:2}),e.to(cta,1,{opacity:1,ease:Power1.easeInOut,delay:2})}e.set(d,{opacity:0}),a()}function c(){console.log("stopping animation")}var d,e;return{initialize:a,start:b,stop:c}}();var app=app||{};app.Animation.initialize(),app.Banner.initialize(),handleReady();