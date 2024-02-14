(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(13),c(2)),n=c(1),r=(c(14),c(15),c(16),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},d=c(8),j=(c(18),c(6)),m=c.n(j);var b=function(e){var t=e.movies,c=e.setMovies,i=Object(n.useState)(""),s=Object(a.a)(i,2),o=s[0],j=s[1],b=Object(n.useState)(null),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(n.useState)(!1),x=Object(a.a)(O,2),f=x[0],p=x[1],N=Object(n.useState)(!1),g=Object(a.a)(N,2),y=g[0],w=g[1],F=Object(n.useState)("Find a movie"),I=Object(a.a)(F,2),S=I[0],C=I[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":f}),value:o,onChange:function(e){return function(e){var t=e.target.value;f&&p(!1),j(t)}(e)},onFocus:function(){return p(!1)}})}),f&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()({"button is-light":!y,"button is-loading":y}),onClick:function(e){var t;e.preventDefault(),w(!0),f&&p(!1),(t=o,fetch("".concat("https://www.omdbapi.com/?apikey=28f3145a","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if("Title"in e){var t=e.Poster,c=e.Title,i=e.Plot,s=e.imdbID;h({title:c,description:i,imgUrl:"N/A"===t?"https://via.placeholder.com/360x270.png?text=no%20preview":t,imdbId:s,imdbUrl:"https://www.imdb.com/title/".concat(s)})}else p(!0)})).catch((function(){return p(!0)})).finally((function(){w(!1),C("Search again")}))},disabled:!o,children:S})}),v&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){v&&t.some((function(e){return e.imdbId===v.imdbId}))?(h(null),j(""),C("Find a movie")):v&&(c((function(e){return[].concat(Object(d.a)(e),[v])})),h(null),j(""),C("Find a movie"))},children:"Add to the list"})})]})]}),v&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:v})]})]})},u=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{movies:c,setMovies:function(e){return i(e)}})})]})};s.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.60655367.chunk.js.map