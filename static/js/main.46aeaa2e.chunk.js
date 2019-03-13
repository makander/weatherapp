(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),s=a(3),i=a.n(s),o=a(6),m=a(7),u=a(8),d=a(10),f=a(9),h=a(11),p=a(2),w=a(1),E=a.n(w),v=function(e){var t=new Date(1e3*e).toLocaleTimeString("en-GB");return t.slice(0,t.lastIndexOf(":"))},g=function(e){var t=e.weather,a=t.name,n=(t.dt,Object(p.a)(t.weather,1)[0].id),c=t.sys,l=c.sunrise,s=c.sunset,i=t.main,o=i.temp,m=i.humidity,u=t.wind.speed;e.forecast;return r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card",id:"dailycard"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a),r.a.createElement(E.a,{name:"owm",iconId:n.toString(),flip:"horizontal",rotate:"90",id:"dailyCardIcon"}),r.a.createElement("p",null," Temperature: ",o," \u2103 "),r.a.createElement("p",null," Humidity: ",m," %"),r.a.createElement("p",null," Wind: ",u," m/s"),r.a.createElement("p",null," Sunset: ",v([s])),r.a.createElement("p",null," Sunrise: ",v([l])))))},b=function(e){return new Date(1e3*e).toLocaleDateString("en-GB",{weekday:"long"})},N=function(e){var t=e.data,a=t.dt,n=t.main.temp,c=Object(p.a)(t.weather,1)[0].id;return r.a.createElement("div",{className:"col s6 l2"},r.a.createElement("div",{className:"card-panel"},r.a.createElement("p",null,b(a)),r.a.createElement(E.a,{className:"icon",name:"owm",iconId:c.toString(),flip:"horizontal",rotate:"90"}),r.a.createElement("p",null,n," \u2103")))},y=function(e){var t=e.forecast.list.filter(function(e){return e.dt_txt.includes("12:00")}).map(function(e){return r.a.createElement(N,{data:e})});return r.a.createElement("div",{className:"row center-align"},t)},O=function(e){return new Date(1e3*e).toISOString().substring(0,10)},j=function(e){var t=e.data,a=t.dt,n=t.main.temp,c=Object(p.a)(t.weather,1)[0].id;return r.a.createElement("div",{className:"daily-ov-content"},r.a.createElement(E.a,{className:"icon",name:"owm",iconId:c.toString(),flip:"horizontal",rotate:"90"}),r.a.createElement("p",null,v(a)),r.a.createElement("p",null,n," \u2103"))},S=function(e){var t=O(e.weather.dt),a=e.forecast.list.filter(function(e){return e.dt_txt.includes("".concat(t))}).map(function(e){return r.a.createElement(j,{data:e})});return r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Daily Overview"),a)))},x=function(e){return r.a.createElement("nav",{class:"navbar s12"},r.a.createElement("div",{class:"nav-wrapper"},r.a.createElement("a",{href:"#",class:"brand-logo"}),r.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("form",{action:"#"},r.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(t){t.preventDefault(),e.getWeather("imperial")}},"Imperial"),r.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(t){t.preventDefault(),e.getWeather("metric")}},"Metric"))))))},k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={lat:null,long:null,weather:null,forecast:null},a.getPosition=function(){navigator.geolocation.getCurrentPosition(function(e){return a.setState({lat:e.coords.latitude,long:e.coords.longitude},function(){return a.getWeather()})})},a.getWeather=Object(o.a)(i.a.mark(function e(){var t,n,r,c,l,s=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"metric",e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a.state.lat,"&lon=").concat(a.state.long,"&appid=3b7e14abfb7372f6c8870898d5c70aa5&units=").concat(t));case 3:return n=e.sent,e.next=6,fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(a.state.lat,"&lon=").concat(a.state.long,"&appid=3b7e14abfb7372f6c8870898d5c70aa5&units=").concat(t));case 6:return r=e.sent,e.next=9,n.json();case 9:return c=e.sent,e.next=12,r.json();case 12:l=e.sent,a.setState({weather:c,forecast:l});case 14:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getPosition()}},{key:"render",value:function(){return null!==this.state.weather?r.a.createElement("div",{className:"container "},r.a.createElement(x,{forecast:this.state.forecast,weather:this.state.weather,getWeather:this.getWeather,test:"test"}),r.a.createElement("div",{className:"row"},r.a.createElement(g,{weather:this.state.weather}),r.a.createElement(S,{forecast:this.state.forecast,weather:this.state.weather})),r.a.createElement(y,{forecast:this.state.forecast}),console.log(this.state)):r.a.createElement("div",null,"Loading data")}}]),t}(r.a.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.46aeaa2e.chunk.js.map