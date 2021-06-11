(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),r=n(9),i=n.n(r),c=(n(14),n(2)),o=n(3),u=n(5),l=n(4),h=(n(15),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).onSearchInputChange=function(t){s.setState({text:t.target.value})},s.onButtonClick=function(t){s.props.onInputChange(s.state.text)},s.state={text:"What movie are you thinking of?"},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"inline-display",children:[Object(h.jsx)("input",{id:"search-bar",value:this.state.text,onChange:this.onSearchInputChange,type:"text"}),Object(h.jsx)("button",{className:"search-button",onClick:this.onButtonClick,children:"Search"})]})}}]),n}(s.Component),b=n(6),d=n.n(b),j=n(7),f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).canvas=void 0,s.state={movie:{Title:"Default",Released:"Default",Runtime:"Default",Genre:"Default",Director:"Default",Plot:"Default"},poster:null},s.canvas=a.a.createRef(),s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getTitleInformation()}},{key:"componentDidUpdate",value:function(t,e){this.props.title!==t.title&&this.getTitleInformation(),this.state.poster!==e.poster&&this.draw()}},{key:"getTitleInformation",value:function(){var t=Object(j.a)(d.a.mark((function t(){var e,n,s,a=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.omdbapi.com/?t="+encodeURI(this.props.title)+"&plot=full&apikey=fa79688c");case 3:if((e=t.sent).ok){t.next=7;break}return alert("Bad status: "+e.status),t.abrupt("return");case 7:return t.next=9,e.json();case 9:if("False"!==(n=t.sent).Response){t.next=20;break}return t.next=13,fetch("https://www.omdbapi.com/?i="+encodeURI(this.props.id)+"&plot=full&apikey=fa79688c");case 13:if(s=t.sent,e.ok){t.next=17;break}return alert("Bad status: "+e.status),t.abrupt("return");case 17:return t.next=19,s.json();case 19:n=t.sent;case 20:this.setState({movie:n},(function(){a.fetchAndSaveImage()})),t.next=27;break;case 23:t.prev=23,t.t0=t.catch(0),alert("There was a problem connecting to the server."),console.log(t.t0);case 27:case"end":return t.stop()}}),t,this,[[0,23]])})));return function(){return t.apply(this,arguments)}}()},{key:"fetchAndSaveImage",value:function(){var t=this;if("N/A"!==this.state.movie.Poster){var e=new Image;e.onload=function(){t.setState({poster:e})},e.src=this.state.movie.Poster}else this.setState({poster:null})}},{key:"draw",value:function(){var t=this.canvas.current;if(null===t)throw Error("No canvas reference.");var e=t.getContext("2d");if(null===e)throw Error("Can't draw, no graphics context.");e.clearRect(0,0,t.width,t.height),null!==this.state.poster&&(t.width=this.state.poster.width,t.height=this.state.poster.height,e.drawImage(this.state.poster,0,0))}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"selection",children:[Object(h.jsx)("h1",{children:this.state.movie.Title}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Release date: "}),this.state.movie.Released]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Runtime: "}),this.state.movie.Runtime]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Genre: "}),this.state.movie.Genre]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Director: "}),this.state.movie.Director]}),Object(h.jsx)("p",{children:this.state.movie.Plot}),Object(h.jsx)("canvas",{ref:this.canvas})]})}}]),n}(s.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).onNextButtonClick=function(){if(Math.ceil(s.state.numResults/10)>s.state.pageNumber){var t=s.state.pageNumber+1;s.setState({pageNumber:t})}},s.onPrevButtonClick=function(){if(s.state.pageNumber>1){var t=s.state.pageNumber-1;s.setState({pageNumber:t})}},s.onTitleButtonClick=function(t){s.setState({selectedTitle:t.currentTarget.innerText,selectedID:t.currentTarget.value})},s.state={results:[],numResults:0,pageNumber:1,selectedTitle:"Iron Man",selectedID:"tt0371746"},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getMovieData(1)}},{key:"componentDidUpdate",value:function(t,e){var n=this;this.props.title!==t.title?this.setState({pageNumber:1},(function(){n.getMovieData(n.state.pageNumber)})):this.state.pageNumber!==e.pageNumber&&this.getMovieData(this.state.pageNumber)}},{key:"getMovieData",value:function(){var t=Object(j.a)(d.a.mark((function t(e){var n,s,a,r,i=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.omdbapi.com/?s="+encodeURI(this.props.title)+"&page="+this.state.pageNumber+"&apikey=fa79688c");case 3:if((n=t.sent).ok){t.next=7;break}return alert("Bad status: "+n.status),t.abrupt("return");case 7:return t.next=9,n.json();case 9:"True"===(s=t.sent).Response?(a=s.Search,r=a.map((function(t){return Object(h.jsx)("li",{className:"title-button",children:Object(h.jsx)("button",{onClick:i.onTitleButtonClick,value:t.imdbID,children:Object(h.jsx)("b",{children:t.Title})},t.imdbID)})})),this.setState({results:r,numResults:s.totalResults})):this.setState({results:Object(h.jsx)("li",{children:"I'm sorry, I couldn't find anything for that search."}),numResults:0}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),alert("There was a problem connecting with the server."),console.log(t.t0);case 17:case"end":return t.stop()}}),t,this,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"inline-display",children:[Object(h.jsxs)("div",{id:"titles-list",children:[Object(h.jsx)("ul",{className:"titles",children:this.state.results}),Object(h.jsxs)("div",{id:"pagination",children:[Object(h.jsx)("button",{className:"search-button",onClick:this.onPrevButtonClick,children:"Previous ten results"}),Object(h.jsx)("button",{className:"search-button",onClick:this.onNextButtonClick,children:"Next ten results"}),Object(h.jsxs)("p",{children:["Currently displaying results ",10*this.state.pageNumber-9," through ",Math.min(10*this.state.pageNumber,this.state.numResults)," of ",this.state.numResults]})]})]}),Object(h.jsx)(f,{title:this.state.selectedTitle,id:this.state.selectedID})]})}}]),n}(s.Component),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).updateQuery=function(t){s.setState({query:t})},s.state={query:"Iron Man"},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{id:"heading",children:"Movie Metadata"}),Object(h.jsx)(p,{onInputChange:this.updateQuery}),Object(h.jsx)(v,{title:this.state.query})]})}}]),n}(s.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),s(t),a(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.e54dcfc3.chunk.js.map