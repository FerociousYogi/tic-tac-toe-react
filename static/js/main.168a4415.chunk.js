(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),n=r(0),a=r(3),i=r(4),c=r(6),u=r(5),o=r(1),l=r.n(o),h=r(7),d=r.n(h);r(15);function j(e){return Object(n.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(n.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(n.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),x=function(e){Object(c.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(i.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],a=v(s.squares),i=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O"),Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)("div",{className:"game-board",children:Object(n.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(n.jsxs)("div",{className:"game-info",children:[Object(n.jsx)("div",{children:e}),Object(n.jsx)("ol",{children:i})]})]})}}]),r}(l.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],i=n[1],c=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return e[a]}return null}d.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.168a4415.chunk.js.map