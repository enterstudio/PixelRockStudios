function handleReady(a){console.log("READY: "+a),app.Animation.start()}var app=app||{};app.Banner=function(){function a(){EB.isInitialized()?b():EB.addEventListener(EBG.EventName.EB_INITIALIZED,b)}function b(){document.getElementById("button-exit").addEventListener("click",c,!1)}function c(){EB.clickthrough()}return{initialize:a}}();var app=app||{};app.Animation=function(){function a(){d=document.getElementById("button-exit"),e=TweenMax,e.set([copy1,copy2,copy3,copy5],{y:"+=25"}),e.set([color1,copy1,copy2,copy3,copy5,can1,cta1,cta2,hand1,hand2],{opacity:0}),e.set([stain1,stain2,stain3],{scale:0}),e.set([cta1,cta2],{opacity:0,display:"none"}),e.set(hand1,{x:-160,y:-30,rotation:0}),e.set(hand1a,{x:-475,y:-124}),e.set(hand2,{x:125,rotation:45}),e.set(hand2a,{x:350,y:125}),e.set(hand2b,{x:-560,y:125,width:400,opacity:0}),e.set(hand3b,{x:340,y:-124,width:600,opacity:0}),e.set(hand1c,{opacity:1,rotation:-45,y:250,x:-350}),e.set(hand2c,{opacity:1,rotation:45,y:230,x:270}),e.set(hand3c,{opacity:1,y:-250}),d.onmouseover=function(){e.to(cta2,.26,{opacity:1,ease:Quad.easeOut})},d.onmouseout=function(){e.to(cta2,.26,{opacity:0,ease:Quad.easeOut})}}function b(){function a(){e.to(color1,.2,{opacity:1,ease:Power1.easeInOut}),e.to(copy1,1,{y:"-=25",opacity:1,ease:Power3.easeOut,delay:.2}),e.to(hand1,.5,{opacity:1,ease:Power3.easeOut}),e.to(hand2,.5,{opacity:1,ease:Power3.easeOut}),e.to(stain1,.5,{scale:1,ease:Back.easeInOut,delay:1.2}),e.to([hand1,hand1a],2,{x:"+=600",delay:2}),e.to([hand2,hand2a],2,{x:"-=500",delay:2}),e.to([copy1,stain1],0,{opacity:0,delay:3}),e.to(hand1a,0,{x:300,delay:3}),e.to(hand2a,0,{x:-400,delay:3}),e.delayedCall(3.5,b)}function b(){e.to(color1,.2,{opacity:0,ease:Power1.easeInOut}),e.to(copy2,1,{y:"-=25",opacity:1,ease:Power3.easeOut}),e.to(hand2,0,{rotation:70,y:-30}),e.to(hand1,0,{rotation:20,y:-30,x:230}),e.to([hand2b,hand3b,hand1],0,{opacity:1}),e.to([hand2,hand2b],3,{x:"+=600",ease:Power3.easeOut,delay:7}),e.to([hand1,hand3b],2.5,{opacity:1,x:"-=550",ease:Power3.easeOut,delay:7}),e.to(stain2,.5,{scale:1,x:158,y:-30,ease:Back.easeInOut,delay:1}),e.to([copy2,stain2],0,{opacity:0,delay:8}),e.to(hand2b,0,{x:300,delay:8}),e.to(hand3b,0,{x:-400,delay:8}),e.delayedCall(8,c)}function c(){e.to(color1,.2,{opacity:1,ease:Power1.easeInOut}),e.to([logo1],.4,{opacity:0}),e.to(can1,.5,{opacity:1,ease:Power1.easeOut}),e.to(copy5,1,{y:"-=25",opacity:1,ease:Power3.easeOut,delay:.5}),e.to([cta1,cta2],0,{display:"block",opacity:0,delay:1}),e.to(cta1,1,{opacity:1,display:"block",ease:Power1.easeInOut,delay:1.5})}e.set(d,{opacity:0}),a()}function c(){console.log("stopping animation")}var d,e;return{initialize:a,start:b,stop:c}}();var app=app||{};app.Animation.initialize(),app.Banner.initialize(),handleReady();