(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(244)},244:function(e,t,a){"use strict";a.r(t);a(160),a(210);var n=a(0),c=a.n(n),r=a(28),i=a.n(r),o=a(23),s=a.n(o),l=a(44),d=a(45),m=a(47),u=a(46),h=a(48),f=a(7),v=(a(240),a(38)),E=(a(241),a(243),a(89)),b=a.n(E),y=a(90),g=a.n(y),S=a(91),p=a.n(S),C=a(92),j=a.n(C),O=a(93),k=a.n(O),P=(Object(f.g)(),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"more"},a.onStoryChange=a.onStoryChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"render",value:function(){return c.a.createElement(f.a,{activeStory:this.state.activeStory,tabbar:c.a.createElement(f.d,null,c.a.createElement(f.e,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},c.a.createElement(p.a,null)),c.a.createElement(f.e,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041f\u043e\u0438\u0441\u043a"},c.a.createElement(g.a,null)),c.a.createElement(f.e,{onClick:this.onStoryChange,selected:"messages"===this.state.activeStory,"data-story":"messages",label:"1",text:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"},c.a.createElement(b.a,null)),c.a.createElement(f.e,{onClick:this.onStoryChange,selected:"notifications"===this.state.activeStory,"data-story":"notifications",text:"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d."},c.a.createElement(j.a,null)),c.a.createElement(f.e,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more",text:"\u0415\u0449\u0451"},c.a.createElement(k.a,null)))},c.a.createElement(f.f,{id:"feed",activePanel:"feed"},c.a.createElement(f.b,{id:"feed"},c.a.createElement(f.c,null,"Feed"))),c.a.createElement(f.f,{id:"discover",activePanel:"discover"},c.a.createElement(f.b,{id:"discover"},c.a.createElement(f.c,null,"Discover"))),c.a.createElement(f.f,{id:"messages",activePanel:"messages"},c.a.createElement(f.b,{id:"messages"},c.a.createElement(f.c,null,"\u041a\u0435\u043a"))),c.a.createElement(f.f,{id:"notifications",activePanel:"notifications"},c.a.createElement(f.b,{id:"notifications"},c.a.createElement(f.c,null,"Notifications"))),c.a.createElement(f.f,{id:"more",activePanel:"more"},c.a.createElement(f.b,{id:"more"},c.a.createElement(f.c,null,"More"))))}}]),t}(c.a.Component)),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(f.f,{activePanel:this.state.activePanel},c.a.createElement(P,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}))}}]),t}(c.a.Component);s.a.send("VKWebAppInit",{}),i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.0d292f92.chunk.js.map