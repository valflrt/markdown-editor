"use strict";(self.webpackChunktypescript_react_template=self.webpackChunktypescript_react_template||[]).push([[263],{978:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(294),n=r(830),s=r(637),l=r(195),o=r(266),c=r(192),u=r(528);r(954);const p={editorWrapper:"editorWrapper-RyKfZ2uyDFUK",textZoneWrapper:"textZoneWrapper-Jks3usqZLqSy",mdZoneWrapper:"mdZoneWrapper-ymZGhVlTlBTN",textZoneTextArea:"textZoneTextArea-sIv5T1vsiBsu",mdZone:"mdZone-qV4f0Eukn7mC"},m=()=>{let[e,t]=(0,a.useState)(""),r=(e=>{let[t,r]=(0,a.useState)();return(0,a.useEffect)((()=>{(0,n.l)().use(l.Z).use(s.Z).use(o.Z).use(c.Z).use(u.Z,{createElement:a.createElement,Fragment:a.Fragment}).process(e).then((e=>{r(e.result)}),(e=>console.log(`Error while parsing markdown: ${e}`)))}),[e]),t})(e);return(0,a.useEffect)((()=>{console.log(e)}),[e]),a.createElement("div",{className:p.editorWrapper},a.createElement("div",{className:p.textZoneWrapper},a.createElement("h3",null,"Write your raw Markdown here:"),a.createElement("textarea",{className:p.textZoneTextArea,value:e,onChange:e=>{t(e.target.value)},onKeyDown:r=>{if(!r.shiftKey&&"Tab"===r.key){r.preventDefault();let[a,n]=[r.currentTarget.selectionStart,r.currentTarget.selectionEnd];t(e.substring(0,a).concat("  ").concat(e.substring(n,e.length))),r.currentTarget.setRangeText("  ",a,n,"end")}}})),a.createElement("div",{className:p.mdZoneWrapper},a.createElement("h3",null,"The parsed and colored output is here:"),a.createElement("div",{className:p.mdZone.concat(" markdown-body")},r)))}}}]);