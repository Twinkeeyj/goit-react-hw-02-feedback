(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(3),s=n.n(r),o=(n(14),n(4)),j=n(5),d=n(6),l=n(8),b=n(7),h=function(e){var t=e.good,n=e.neutral,a=e.bad,i=(e.set,e.total),r=e.positivePercentage;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Statistics"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Good:",t]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Neutral:",n]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Bad:",a]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Total:",i]})}),Object(c.jsx)("li",{children:Object(c.jsxs)("p",{children:["Positive fedback:",r,"%"]})})]})]})},u=function(e){var t=e.onLeaveFeedback;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{type:"button",name:"good",onClick:t,children:"Good"}),Object(c.jsx)("button",{type:"button",name:"neutral",onClick:t,children:"Neutral"}),Object(c.jsx)("button",{type:"button",name:"bad",onClick:t,children:"Bad"})]})},O=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:t}),n]})},x=function(e){var t=e.message;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h2",{children:t})})},g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.toSetState=function(t){e.setState((function(e){return Object(o.a)({},t.target.name,e[t.target.name]+1)}))},e.countTotalFeedback=function(){return this.state.good+this.state.neutral+this.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.floor(100*this.state.good/this.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{title:"Please leave feedback",children:Object(c.jsx)(u,{onLeaveFeedback:this.toSetState})}),0===e?Object(c.jsx)(x,{message:"No feedback given"}):Object(c.jsx)(O,{children:Object(c.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7a195f96.chunk.js.map