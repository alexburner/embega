/*! For license information please see chunk.484.836064796a0eb7f2ab13.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[484],{183:e=>{var t=function(){"use strict"
function e(e,t){return null!=t&&e instanceof t}var t,n,r
try{t=Map}catch(e){t=function(){}}try{n=Set}catch(e){n=function(){}}try{r=Promise}catch(e){r=function(){}}function i(o,s,l,u,c){"object"==typeof s&&(l=s.depth,u=s.prototype,c=s.includeNonEnumerable,s=s.circular)
var f=[],d=[],h="undefined"!=typeof Buffer
return void 0===s&&(s=!0),void 0===l&&(l=1/0),function o(l,p){if(null===l)return null
if(0===p)return l
var g,m
if("object"!=typeof l)return l
if(e(l,t))g=new t
else if(e(l,n))g=new n
else if(e(l,r))g=new r((function(e,t){l.then((function(t){e(o(t,p-1))}),(function(e){t(o(e,p-1))}))}))
else if(i.__isArray(l))g=[]
else if(i.__isRegExp(l))g=new RegExp(l.source,a(l)),l.lastIndex&&(g.lastIndex=l.lastIndex)
else if(i.__isDate(l))g=new Date(l.getTime())
else{if(h&&Buffer.isBuffer(l))return g=Buffer.allocUnsafe?Buffer.allocUnsafe(l.length):new Buffer(l.length),l.copy(g),g
e(l,Error)?g=Object.create(l):void 0===u?(m=Object.getPrototypeOf(l),g=Object.create(m)):(g=Object.create(u),m=u)}if(s){var y=f.indexOf(l)
if(-1!=y)return d[y]
f.push(l),d.push(g)}for(var v in e(l,t)&&l.forEach((function(e,t){var n=o(t,p-1),r=o(e,p-1)
g.set(n,r)})),e(l,n)&&l.forEach((function(e){var t=o(e,p-1)
g.add(t)})),l){var b
m&&(b=Object.getOwnPropertyDescriptor(m,v)),b&&null==b.set||(g[v]=o(l[v],p-1))}if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l)
for(v=0;v<x.length;v++){var _=x[v];(!(O=Object.getOwnPropertyDescriptor(l,_))||O.enumerable||c)&&(g[_]=o(l[_],p-1),O.enumerable||Object.defineProperty(g,_,{enumerable:!1}))}}if(c){var w=Object.getOwnPropertyNames(l)
for(v=0;v<w.length;v++){var O,k=w[v];(O=Object.getOwnPropertyDescriptor(l,k))&&O.enumerable||(g[k]=o(l[k],p-1),Object.defineProperty(g,k,{enumerable:!1}))}}return g}(o,l)}function o(e){return Object.prototype.toString.call(e)}function a(e){var t=""
return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return i.clonePrototype=function(e){if(null===e)return null
var t=function(){}
return t.prototype=e,new t},i.__objToStr=o,i.__isDate=function(e){return"object"==typeof e&&"[object Date]"===o(e)},i.__isArray=function(e){return"object"==typeof e&&"[object Array]"===o(e)},i.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===o(e)},i.__getRegExpFlags=a,i}()
e.exports&&(e.exports=t)},94:e=>{"use strict"
e.exports=function e(t,n){if(t===n)return!0
if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1
var r,i,o
if(Array.isArray(t)){if((r=t.length)!=n.length)return!1
for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1
return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags
if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf()
if(t.toString!==Object.prototype.toString)return t.toString()===n.toString()
if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1
for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1
for(i=r;0!=i--;){var a=o[i]
if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},277:e=>{"use strict"
e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t})
var n,r="boolean"==typeof t.cycles&&t.cycles,i=t.cmp&&(n=t.cmp,function(e){return function(t,r){var i={key:t,value:e[t]},o={key:r,value:e[r]}
return n(i,o)}}),o=[]
return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null"
if("object"!=typeof t)return JSON.stringify(t)
var n,a
if(Array.isArray(t)){for(a="[",n=0;n<t.length;n++)n&&(a+=","),a+=e(t[n])||"null"
return a+"]"}if(null===t)return"null"
if(-1!==o.indexOf(t)){if(r)return JSON.stringify("__cycle__")
throw new TypeError("Converting circular structure to JSON")}var s=o.push(t)-1,l=Object.keys(t).sort(i&&i(t))
for(a="",n=0;n<l.length;n++){var u=l[n],c=e(t[u])
c&&(a&&(a+=","),a+=JSON.stringify(u)+":"+c)}return o.splice(s,1),"{"+a+"}"}}(e)}},627:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{DEFAULT_ACTIONS:()=>Y1,default:()=>s2,guessMode:()=>i2,vega:()=>V1,vegaLite:()=>H1,version:()=>W1})
var r={}
n.r(r),n.d(r,{JsonPatchError:()=>F,_areEquals:()=>U,applyOperation:()=>z,applyPatch:()=>I,applyReducer:()=>R,deepClone:()=>T,getValueByPointer:()=>P,validate:()=>B,validator:()=>L})
var i={}
n.r(i),n.d(i,{compare:()=>X,generate:()=>G,observe:()=>H,unobserve:()=>V})
var o={}
n.r(o),n.d(o,{aggregate:()=>Ul,bin:()=>ql,collect:()=>Wl,compare:()=>Vl,countpattern:()=>Gl,cross:()=>Yl,density:()=>Kl,dotbin:()=>ru,expression:()=>iu,extent:()=>au,facet:()=>lu,field:()=>uu,filter:()=>fu,flatten:()=>du,fold:()=>hu,formula:()=>pu,generate:()=>gu,impute:()=>vu,joinaggregate:()=>bu,kde:()=>xu,key:()=>_u,load:()=>Ou,lookup:()=>Eu,multiextent:()=>Au,multivalues:()=>Du,params:()=>Mu,pivot:()=>ju,prefacet:()=>Fu,project:()=>Tu,proxy:()=>Nu,quantile:()=>$u,relay:()=>Pu,sample:()=>zu,sequence:()=>Iu,sieve:()=>Ru,subflow:()=>su,timeunit:()=>Lu,tupleindex:()=>Uu,values:()=>qu,window:()=>Gu})
var a={}
n.r(a),n.d(a,{interpolate:()=>_d,interpolateArray:()=>hd,interpolateBasis:()=>td,interpolateBasisClosed:()=>nd,interpolateCubehelix:()=>gp,interpolateCubehelixLong:()=>mp,interpolateDate:()=>gd,interpolateDiscrete:()=>_h,interpolateHcl:()=>tp,interpolateHclLong:()=>np,interpolateHsl:()=>Th,interpolateHslLong:()=>Nh,interpolateHue:()=>wh,interpolateLab:()=>Qh,interpolateNumber:()=>md,interpolateNumberArray:()=>fd,interpolateObject:()=>yd,interpolateRgb:()=>sd,interpolateRgbBasis:()=>ud,interpolateRgbBasisClosed:()=>cd,interpolateRound:()=>wd,interpolateString:()=>xd,interpolateTransformCss:()=>Dh,interpolateTransformSvg:()=>Ch,interpolateZoom:()=>jh,piecewise:()=>ch,quantize:()=>yp})
var s={}
n.r(s),n.d(s,{bound:()=>zx,identifier:()=>Lx,mark:()=>Bx,overlap:()=>Ux,render:()=>Yx,viewlayout:()=>m_})
var l={}
n.r(l),n.d(l,{axisticks:()=>v_,datajoin:()=>b_,encode:()=>__,legendentries:()=>w_,linkpath:()=>S_,pie:()=>F_,scale:()=>$_,sortitems:()=>R_,stack:()=>Z_})
var u={}
n.r(u),n.d(u,{contour:()=>wE,geojson:()=>EE,geopath:()=>AE,geopoint:()=>SE,geoshape:()=>DE,graticule:()=>CE,heatmap:()=>ME,isocontour:()=>dE,kde2d:()=>bE,projection:()=>FE})
var c={}
n.r(c),n.d(c,{force:()=>SA})
var f={}
n.r(f),n.d(f,{nest:()=>MS,pack:()=>PS,partition:()=>IS,stratify:()=>RS,tree:()=>US,treelinks:()=>qS,treemap:()=>VS})
var d={}
n.r(d),n.d(d,{label:()=>fD})
var h={}
n.r(h),n.d(h,{loess:()=>hD,regression:()=>gD})
var p={}
n.r(p),n.d(p,{voronoi:()=>WD})
var g={}
n.r(g),n.d(g,{wordcloud:()=>oC})
var m={}
n.r(m),n.d(m,{crossfilter:()=>dC,resolvefilter:()=>hC})
var y={}
n.r(y),n.d(y,{Bounds:()=>Fm,CanvasHandler:()=>ub,CanvasRenderer:()=>pb,DATE:()=>xr,DAY:()=>_r,DAYOFYEAR:()=>wr,Dataflow:()=>ms,Debug:()=>be,Error:()=>me,EventStream:()=>ns,Gradient:()=>Pg,GroupItem:()=>Nm,HOURS:()=>Or,Handler:()=>Wv,Info:()=>ve,Item:()=>Tm,MILLISECONDS:()=>Ar,MINUTES:()=>kr,MONTH:()=>vr,Marks:()=>Cv,MultiPulse:()=>ds,None:()=>ge,Operator:()=>Qa,Parameters:()=>Xa,Pulse:()=>ls,QUARTER:()=>yr,RenderType:()=>nx,Renderer:()=>Hv,ResourceLoader:()=>$m,SECONDS:()=>Er,SVGHandler:()=>mb,SVGRenderer:()=>Bb,SVGStringRenderer:()=>tx,Scenegraph:()=>zv,TIME_UNITS:()=>Sr,Transform:()=>vs,View:()=>xT,WEEK:()=>br,Warn:()=>ye,YEAR:()=>mr,accessor:()=>Q,accessorFields:()=>te,accessorName:()=>ee,array:()=>Ve,ascending:()=>Xe,bandwidthNRD:()=>$s,bin:()=>Ps,bootstrapCI:()=>Rs,boundClip:()=>cx,boundContext:()=>ny,boundItem:()=>Mv,boundMark:()=>Fv,boundStroke:()=>Im,changeset:()=>Ga,clampRange:()=>He,codegenExpression:()=>bM,compare:()=>Ye,constant:()=>et,cumulativeLogNormal:()=>el,cumulativeNormal:()=>Gs,cumulativeUniform:()=>al,dayofyear:()=>Nr,debounce:()=>tt,defaultLocale:()=>sa,definition:()=>xs,densityLogNormal:()=>Qs,densityNormal:()=>Hs,densityUniform:()=>ol,domChild:()=>Bv,domClear:()=>Uv,domCreate:()=>Rv,domFind:()=>Lv,dotbin:()=>Ls,error:()=>oe,expressionFunction:()=>wF,extend:()=>nt,extent:()=>rt,extentIndex:()=>it,falsy:()=>he,fastmap:()=>lt,field:()=>se,flush:()=>ut,font:()=>_v,fontFamily:()=>xv,fontSize:()=>gv,format:()=>Ma,formatLocale:()=>Qo,formats:()=>ja,hasOwnProperty:()=>at,id:()=>le,identity:()=>ue,inferType:()=>Oa,inferTypes:()=>ka,ingest:()=>Ua,inherits:()=>ct,inrange:()=>ft,interpolate:()=>sg,interpolateColors:()=>ig,interpolateRange:()=>rg,intersect:()=>ox,intersectBoxLine:()=>hy,intersectPath:()=>uy,intersectPoint:()=>cy,intersectRule:()=>dy,isArray:()=>_e,isBoolean:()=>dt,isDate:()=>ht,isFunction:()=>Ge,isIterable:()=>pt,isNumber:()=>gt,isObject:()=>we,isRegExp:()=>mt,isString:()=>yt,isTuple:()=>Ra,key:()=>vt,lerp:()=>bt,lineHeight:()=>mv,loader:()=>Na,locale:()=>aa,logger:()=>xe,lruCache:()=>xt,markup:()=>Tb,merge:()=>_t,mergeConfig:()=>ke,multiLineOffset:()=>vv,one:()=>fe,pad:()=>Ot,panLinear:()=>$e,panLog:()=>Pe,panPow:()=>ze,panSymlog:()=>Ie,parse:()=>az,parseExpression:()=>mM,parseSelector:()=>CT,path:()=>Jc,pathCurves:()=>Ig,pathEqual:()=>dx,pathParse:()=>Zg,pathRectangle:()=>pm,pathRender:()=>tm,pathSymbols:()=>om,pathTrail:()=>gm,peek:()=>Se,point:()=>Zv,projection:()=>eE,quantileLogNormal:()=>tl,quantileNormal:()=>Ys,quantileUniform:()=>sl,quantiles:()=>Ts,quantizeInterpolator:()=>og,quarter:()=>Ze,quartiles:()=>Ns,random:()=>zs,randomInteger:()=>Us,randomKDE:()=>Js,randomLCG:()=>Bs,randomLogNormal:()=>nl,randomMixture:()=>rl,randomNormal:()=>Xs,randomUniform:()=>ll,read:()=>Ta,regressionExp:()=>gl,regressionLinear:()=>hl,regressionLoess:()=>xl,regressionLog:()=>pl,regressionPoly:()=>vl,regressionPow:()=>ml,regressionQuad:()=>yl,renderModule:()=>ix,repeat:()=>wt,resetDefaultLocale:()=>la,resetSVGClipId:()=>Mm,resetSVGDefIds:()=>hx,responseType:()=>Fa,runtimeContext:()=>FF,sampleCurve:()=>kl,sampleLogNormal:()=>Ks,sampleNormal:()=>Vs,sampleUniform:()=>il,scale:()=>Hp,sceneEqual:()=>fx,sceneFromJSON:()=>$v,scenePickVisit:()=>ky,sceneToJSON:()=>Nv,sceneVisit:()=>Oy,sceneZOrder:()=>wy,scheme:()=>fg,serializeXML:()=>Nb,setRandom:()=>Is,span:()=>kt,splitAccessPath:()=>ae,stringValue:()=>Et,textMetrics:()=>uv,timeBin:()=>bi,timeFloor:()=>Xr,timeFormatLocale:()=>ia,timeInterval:()=>ni,timeOffset:()=>oi,timeSequence:()=>li,timeUnitSpecifier:()=>jr,timeUnits:()=>Cr,toBoolean:()=>At,toDate:()=>Dt,toNumber:()=>De,toSet:()=>Mt,toString:()=>Ct,transform:()=>_s,transforms:()=>bs,truncate:()=>jt,truthy:()=>de,tupleid:()=>La,typeParsers:()=>xa,utcFloor:()=>Qr,utcInterval:()=>ri,utcOffset:()=>ai,utcSequence:()=>ui,utcdayofyear:()=>Lr,utcquarter:()=>We,utcweek:()=>Br,version:()=>sz,visitArray:()=>Ft,week:()=>$r,writeConfig:()=>Ee,zero:()=>ce,zoomLinear:()=>Le,zoomLog:()=>Be,zoomPow:()=>Ue,zoomSymlog:()=>qe})
var v={}
n.r(v),n.d(v,{accessPathDepth:()=>uI,accessPathWithDatum:()=>rI,compile:()=>QK,contains:()=>zz,deepEqual:()=>Cz,deleteNestedProperty:()=>tI,duplicate:()=>Mz,entries:()=>Jz,every:()=>Rz,fieldIntersection:()=>Hz,flatAccessWithDatum:()=>iI,getFirstDefined:()=>cI,hasIntersection:()=>Wz,hash:()=>$z,internalField:()=>pI,isBoolean:()=>Kz,isEmpty:()=>Gz,isEqual:()=>qz,isInternalField:()=>gI,isNullOrFalse:()=>Pz,isNumeric:()=>yI,keys:()=>Yz,logicalExpr:()=>eI,mergeDeep:()=>Lz,never:()=>jz,normalize:()=>FH,normalizeAngle:()=>mI,omit:()=>Tz,pick:()=>Fz,prefixGenerator:()=>Vz,removePathFromField:()=>lI,replaceAll:()=>sI,replacePathInField:()=>aI,resetIdCounter:()=>hI,setEqual:()=>Zz,some:()=>Iz,stringify:()=>Nz,titleCase:()=>nI,unique:()=>Uz,uniqueId:()=>dI,vals:()=>Xz,varName:()=>Qz,version:()=>nQ})
var b={}
n.r(b),n.d(b,{dark:()=>oQ,excel:()=>sQ,fivethirtyeight:()=>dQ,ggplot2:()=>pQ,googlecharts:()=>$Q,latimes:()=>xQ,powerbi:()=>GQ,quartz:()=>OQ,urbaninstitute:()=>jQ,version:()=>YQ,vox:()=>EQ})
var x,_=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},x(e,t)},function(e,t){function n(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=Object.prototype.hasOwnProperty
function O(e,t){return w.call(e,t)}function k(e){if(Array.isArray(e)){for(var t=new Array(e.length),n=0;n<t.length;n++)t[n]=""+n
return t}if(Object.keys)return Object.keys(e)
var r=[]
for(var i in e)O(e,i)&&r.push(i)
return r}function E(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e))
case"undefined":return null
default:return e}}function A(e){for(var t,n=0,r=e.length;n<r;){if(!((t=e.charCodeAt(n))>=48&&t<=57))return!1
n++}return!0}function S(e){return-1===e.indexOf("/")&&-1===e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function D(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function C(e){if(void 0===e)return!0
if(e)if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)if(C(e[t]))return!0}else if("object"==typeof e)for(var r=k(e),i=r.length,o=0;o<i;o++)if(C(e[r[o]]))return!0
return!1}function M(e,t){var n=[e]
for(var r in t){var i="object"==typeof t[r]?JSON.stringify(t[r],null,2):t[r]
void 0!==i&&n.push(r+": "+i)}return n.join("\n")}var j=function(e){function t(t,n,r,i,o){var a=this.constructor,s=e.call(this,M(t,{name:n,index:r,operation:i,tree:o}))||this
return s.name=n,s.index=r,s.operation=i,s.tree=o,Object.setPrototypeOf(s,a.prototype),s.message=M(t,{name:n,index:r,operation:i,tree:o}),s}return _(t,e),t}(Error),F=j,T=E,N={add:function(e,t,n){return e[t]=this.value,{newDocument:n}},remove:function(e,t,n){var r=e[t]
return delete e[t],{newDocument:n,removed:r}},replace:function(e,t,n){var r=e[t]
return e[t]=this.value,{newDocument:n,removed:r}},move:function(e,t,n){var r=P(n,this.path)
r&&(r=E(r))
var i=z(n,{op:"remove",path:this.from}).removed
return z(n,{op:"add",path:this.path,value:i}),{newDocument:n,removed:r}},copy:function(e,t,n){var r=P(n,this.from)
return z(n,{op:"add",path:this.path,value:E(r)}),{newDocument:n}},test:function(e,t,n){return{newDocument:n,test:U(e[t],this.value)}},_get:function(e,t,n){return this.value=e[t],{newDocument:n}}},$={add:function(e,t,n){return A(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:n,index:t}},remove:function(e,t,n){return{newDocument:n,removed:e.splice(t,1)[0]}},replace:function(e,t,n){var r=e[t]
return e[t]=this.value,{newDocument:n,removed:r}},move:N.move,copy:N.copy,test:N.test,_get:N._get}
function P(e,t){if(""==t)return e
var n={op:"_get",path:t}
return z(e,n),n.value}function z(e,t,n,r,i,o){if(void 0===n&&(n=!1),void 0===r&&(r=!0),void 0===i&&(i=!0),void 0===o&&(o=0),n&&("function"==typeof n?n(t,0,e,t.path):L(t,0)),""===t.path){var a={newDocument:e}
if("add"===t.op)return a.newDocument=t.value,a
if("replace"===t.op)return a.newDocument=t.value,a.removed=e,a
if("move"===t.op||"copy"===t.op)return a.newDocument=P(e,t.from),"move"===t.op&&(a.removed=e),a
if("test"===t.op){if(a.test=U(e,t.value),!1===a.test)throw new F("Test operation failed","TEST_OPERATION_FAILED",o,t,e)
return a.newDocument=e,a}if("remove"===t.op)return a.removed=e,a.newDocument=null,a
if("_get"===t.op)return t.value=e,a
if(n)throw new F("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",o,t,e)
return a}r||(e=E(e))
var s=(t.path||"").split("/"),l=e,u=1,c=s.length,f=void 0,d=void 0,h=void 0
for(h="function"==typeof n?n:L;;){if((d=s[u])&&-1!=d.indexOf("~")&&(d=D(d)),i&&("__proto__"==d||"prototype"==d&&u>0&&"constructor"==s[u-1]))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README")
if(n&&void 0===f&&(void 0===l[d]?f=s.slice(0,u).join("/"):u==c-1&&(f=t.path),void 0!==f&&h(t,0,e,f)),u++,Array.isArray(l)){if("-"===d)d=l.length
else{if(n&&!A(d))throw new F("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",o,t,e)
A(d)&&(d=~~d)}if(u>=c){if(n&&"add"===t.op&&d>l.length)throw new F("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",o,t,e)
if(!1===(a=$[t.op].call(t,l,d,e)).test)throw new F("Test operation failed","TEST_OPERATION_FAILED",o,t,e)
return a}}else if(u>=c){if(!1===(a=N[t.op].call(t,l,d,e)).test)throw new F("Test operation failed","TEST_OPERATION_FAILED",o,t,e)
return a}if(l=l[d],n&&u<c&&(!l||"object"!=typeof l))throw new F("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",o,t,e)}}function I(e,t,n,r,i){if(void 0===r&&(r=!0),void 0===i&&(i=!0),n&&!Array.isArray(t))throw new F("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY")
r||(e=E(e))
for(var o=new Array(t.length),a=0,s=t.length;a<s;a++)o[a]=z(e,t[a],n,!0,i,a),e=o[a].newDocument
return o.newDocument=e,o}function R(e,t,n){var r=z(e,t)
if(!1===r.test)throw new F("Test operation failed","TEST_OPERATION_FAILED",n,t,e)
return r.newDocument}function L(e,t,n,r){if("object"!=typeof e||null===e||Array.isArray(e))throw new F("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,n)
if(!N[e.op])throw new F("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,n)
if("string"!=typeof e.path)throw new F("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,n)
if(0!==e.path.indexOf("/")&&e.path.length>0)throw new F('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,n)
if(("move"===e.op||"copy"===e.op)&&"string"!=typeof e.from)throw new F("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,n)
if(("add"===e.op||"replace"===e.op||"test"===e.op)&&void 0===e.value)throw new F("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,n)
if(("add"===e.op||"replace"===e.op||"test"===e.op)&&C(e.value))throw new F("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,n)
if(n)if("add"==e.op){var i=e.path.split("/").length,o=r.split("/").length
if(i!==o+1&&i!==o)throw new F("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,n)}else if("replace"===e.op||"remove"===e.op||"_get"===e.op){if(e.path!==r)throw new F("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,n)}else if("move"===e.op||"copy"===e.op){var a=B([{op:"_get",path:e.from,value:void 0}],n)
if(a&&"OPERATION_PATH_UNRESOLVABLE"===a.name)throw new F("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,n)}}function B(e,t,n){try{if(!Array.isArray(e))throw new F("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY")
if(t)I(E(t),E(e),n||!0)
else{n=n||L
for(var r=0;r<e.length;r++)n(e[r],r,t,void 0)}}catch(e){if(e instanceof F)return e
throw e}}function U(e,t){if(e===t)return!0
if(e&&t&&"object"==typeof e&&"object"==typeof t){var n,r,i,o=Array.isArray(e),a=Array.isArray(t)
if(o&&a){if((r=e.length)!=t.length)return!1
for(n=r;0!=n--;)if(!U(e[n],t[n]))return!1
return!0}if(o!=a)return!1
var s=Object.keys(e)
if((r=s.length)!==Object.keys(t).length)return!1
for(n=r;0!=n--;)if(!t.hasOwnProperty(s[n]))return!1
for(n=r;0!=n--;)if(!U(e[i=s[n]],t[i]))return!1
return!0}return e!=e&&t!=t}var q=new WeakMap,Z=function(e){this.observers=new Map,this.obj=e},W=function(e,t){this.callback=e,this.observer=t}
function V(e,t){t.unobserve()}function H(e,t){var n,r=function(e){return q.get(e)}(e)
if(r){var i=function(e,t){return e.observers.get(t)}(r,t)
n=i&&i.observer}else r=new Z(e),q.set(e,r)
if(n)return n
if(n={},r.value=E(e),t){n.callback=t,n.next=null
var o=function(){G(n)},a=function(){clearTimeout(n.next),n.next=setTimeout(o)}
"undefined"!=typeof window&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return n.patches=[],n.object=e,n.unobserve=function(){G(n),clearTimeout(n.next),function(e,t){e.observers.delete(t.callback)}(r,n),"undefined"!=typeof window&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},r.observers.set(t,new W(t,n)),n}function G(e,t){void 0===t&&(t=!1)
var n=q.get(e.object)
Y(n.value,e.object,e.patches,"",t),e.patches.length&&I(n.value,e.patches)
var r=e.patches
return r.length>0&&(e.patches=[],e.callback&&e.callback(r)),r}function Y(e,t,n,r,i){if(t!==e){"function"==typeof t.toJSON&&(t=t.toJSON())
for(var o=k(t),a=k(e),s=!1,l=a.length-1;l>=0;l--){var u=e[f=a[l]]
if(!O(t,f)||void 0===t[f]&&void 0!==u&&!1===Array.isArray(t))Array.isArray(e)===Array.isArray(t)?(i&&n.push({op:"test",path:r+"/"+S(f),value:E(u)}),n.push({op:"remove",path:r+"/"+S(f)}),s=!0):(i&&n.push({op:"test",path:r,value:e}),n.push({op:"replace",path:r,value:t}))
else{var c=t[f]
"object"==typeof u&&null!=u&&"object"==typeof c&&null!=c&&Array.isArray(u)===Array.isArray(c)?Y(u,c,n,r+"/"+S(f),i):u!==c&&(i&&n.push({op:"test",path:r+"/"+S(f),value:E(u)}),n.push({op:"replace",path:r+"/"+S(f),value:E(c)}))}}if(s||o.length!=a.length)for(l=0;l<o.length;l++){var f
O(e,f=o[l])||void 0===t[f]||n.push({op:"add",path:r+"/"+S(f),value:E(t[f])})}}}function X(e,t,n){void 0===n&&(n=!1)
var r=[]
return Y(e,t,r,"",n),r}Object.assign({},r,i,{JsonPatchError:j,deepClone:E,escapePathComponent:S,unescapePathComponent:D})
var J=n(215),K=n.n(J)
function Q(e,t,n){return e.fields=t||[],e.fname=n,e}function ee(e){return null==e?null:e.fname}function te(e){return null==e?null:e.fields}function ne(e){return 1===e.length?re(e[0]):ie(e)}const re=e=>function(t){return t[e]},ie=e=>{const t=e.length
return function(n){for(let r=0;r<t;++r)n=n[e[r]]
return n}}
function oe(e){throw Error(e)}function ae(e){const t=[],n=e.length
let r,i,o,a=null,s=0,l=""
function u(){t.push(l+e.substring(r,i)),l="",r=i+1}for(e+="",r=i=0;i<n;++i)if(o=e[i],"\\"===o)l+=e.substring(r,i),l+=e.substring(++i,++i),r=i
else if(o===a)u(),a=null,s=-1
else{if(a)continue
r===s&&'"'===o||r===s&&"'"===o?(r=i+1,a=o):"."!==o||s?"["===o?(i>r&&u(),s=r=i+1):"]"===o&&(s||oe("Access path missing open bracket: "+e),s>0&&u(),s=0,r=i+1):i>r?u():r=i+1}return s&&oe("Access path missing closing bracket: "+e),a&&oe("Access path missing closing quote: "+e),i>r&&(i++,u()),t}function se(e,t,n){const r=ae(e)
return e=1===r.length?r[0]:e,Q((n&&n.get||ne)(r),[e],t||e)}const le=se("id"),ue=Q((e=>e),[],"identity"),ce=Q((()=>0),[],"zero"),fe=Q((()=>1),[],"one"),de=Q((()=>!0),[],"true"),he=Q((()=>!1),[],"false")
function pe(e,t,n){const r=[t].concat([].slice.call(n))
console[e].apply(console,r)}const ge=0,me=1,ye=2,ve=3,be=4
function xe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pe,r=e||ge
return{level(e){return arguments.length?(r=+e,this):r},error(){return r>=me&&n(t||"error","ERROR",arguments),this},warn(){return r>=ye&&n(t||"warn","WARN",arguments),this},info(){return r>=ve&&n(t||"log","INFO",arguments),this},debug(){return r>=be&&n(t||"log","DEBUG",arguments),this}}}var _e=Array.isArray
function we(e){return e===Object(e)}const Oe=e=>"__proto__"!==e
function ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.reduce(((e,t)=>{for(const n in t)if("signals"===n)e.signals=Ae(e.signals,t.signals)
else{const r="legend"===n?{layout:1}:"style"===n||null
Ee(e,n,t[n],r)}return e}),{})}function Ee(e,t,n,r){if(!Oe(t))return
let i,o
if(we(n)&&!_e(n))for(i in o=we(e[t])?e[t]:e[t]={},n)r&&(!0===r||r[i])?Ee(o,i,n[i]):Oe(i)&&(o[i]=n[i])
else e[t]=n}function Ae(e,t){if(null==e)return t
const n={},r=[]
function i(e){n[e.name]||(n[e.name]=1,r.push(e))}return t.forEach(i),e.forEach(i),r}function Se(e){return e[e.length-1]}function De(e){return null==e||""===e?null:+e}const Ce=e=>t=>e*Math.exp(t),Me=e=>t=>Math.log(e*t),je=e=>t=>Math.sign(t)*Math.log1p(Math.abs(t/e)),Fe=e=>t=>Math.sign(t)*Math.expm1(Math.abs(t))*e,Te=e=>t=>t<0?-Math.pow(-t,e):Math.pow(t,e)
function Ne(e,t,n,r){const i=n(e[0]),o=n(Se(e)),a=(o-i)*t
return[r(i-a),r(o-a)]}function $e(e,t){return Ne(e,t,De,ue)}function Pe(e,t){var n=Math.sign(e[0])
return Ne(e,t,Me(n),Ce(n))}function ze(e,t,n){return Ne(e,t,Te(n),Te(1/n))}function Ie(e,t,n){return Ne(e,t,je(n),Fe(n))}function Re(e,t,n,r,i){const o=r(e[0]),a=r(Se(e)),s=null!=t?r(t):(o+a)/2
return[i(s+(o-s)*n),i(s+(a-s)*n)]}function Le(e,t,n){return Re(e,t,n,De,ue)}function Be(e,t,n){const r=Math.sign(e[0])
return Re(e,t,n,Me(r),Ce(r))}function Ue(e,t,n,r){return Re(e,t,n,Te(r),Te(1/r))}function qe(e,t,n,r){return Re(e,t,n,je(r),Fe(r))}function Ze(e){return 1+~~(new Date(e).getMonth()/3)}function We(e){return 1+~~(new Date(e).getUTCMonth()/3)}function Ve(e){return null!=e?_e(e)?e:[e]:[]}function He(e,t,n){let r,i=e[0],o=e[1]
return o<i&&(r=o,o=i,i=r),r=o-i,r>=n-t?[t,n]:[i=Math.min(Math.max(i,t),n-r),i+r]}function Ge(e){return"function"==typeof e}function Ye(e,t,n){n=n||{},t=Ve(t)||[]
const r=[],i=[],o={},a=n.comparator||Je
return Ve(e).forEach(((e,a)=>{null!=e&&(r.push("descending"===t[a]?-1:1),i.push(e=Ge(e)?e:se(e,null,n)),(te(e)||[]).forEach((e=>o[e]=1)))})),0===i.length?null:Q(a(i,r),Object.keys(o))}const Xe=(e,t)=>(e<t||null==e)&&null!=t?-1:(e>t||null==t)&&null!=e?1:(t=t instanceof Date?+t:t,(e=e instanceof Date?+e:e)!==e&&t==t?-1:t!=t&&e==e?1:0),Je=(e,t)=>1===e.length?Ke(e[0],t[0]):Qe(e,t,e.length),Ke=(e,t)=>function(n,r){return Xe(e(n),e(r))*t},Qe=(e,t,n)=>(t.push(0),function(r,i){let o,a=0,s=-1
for(;0===a&&++s<n;)o=e[s],a=Xe(o(r),o(i))
return a*t[s]})
function et(e){return Ge(e)?e:()=>e}function tt(e,t){let n
return r=>{n&&clearTimeout(n),n=setTimeout((()=>(t(r),n=null)),e)}}function nt(e){for(let t,n,r=1,i=arguments.length;r<i;++r)for(n in t=arguments[r],t)e[n]=t[n]
return e}function rt(e,t){let n,r,i,o,a=0
if(e&&(n=e.length))if(null==t){for(r=e[a];a<n&&(null==r||r!=r);r=e[++a]);for(i=o=r;a<n;++a)r=e[a],null!=r&&(r<i&&(i=r),r>o&&(o=r))}else{for(r=t(e[a]);a<n&&(null==r||r!=r);r=t(e[++a]));for(i=o=r;a<n;++a)r=t(e[a]),null!=r&&(r<i&&(i=r),r>o&&(o=r))}return[i,o]}function it(e,t){const n=e.length
let r,i,o,a,s,l=-1
if(null==t){for(;++l<n;)if(i=e[l],null!=i&&i>=i){r=o=i
break}if(l===n)return[-1,-1]
for(a=s=l;++l<n;)i=e[l],null!=i&&(r>i&&(r=i,a=l),o<i&&(o=i,s=l))}else{for(;++l<n;)if(i=t(e[l],l,e),null!=i&&i>=i){r=o=i
break}if(l===n)return[-1,-1]
for(a=s=l;++l<n;)i=t(e[l],l,e),null!=i&&(r>i&&(r=i,a=l),o<i&&(o=i,s=l))}return[a,s]}const ot=Object.prototype.hasOwnProperty
function at(e,t){return ot.call(e,t)}const st={}
function lt(e){let t,n={}
function r(e){return at(n,e)&&n[e]!==st}const i={size:0,empty:0,object:n,has:r,get:e=>r(e)?n[e]:void 0,set(e,t){return r(e)||(++i.size,n[e]===st&&--i.empty),n[e]=t,this},delete(e){return r(e)&&(--i.size,++i.empty,n[e]=st),this},clear(){i.size=i.empty=0,i.object=n={}},test(e){return arguments.length?(t=e,i):t},clean(){const e={}
let r=0
for(const i in n){const o=n[i]
o===st||t&&t(o)||(e[i]=o,++r)}i.size=r,i.empty=0,i.object=n=e}}
return e&&Object.keys(e).forEach((t=>{i.set(t,e[t])})),i}function ut(e,t,n,r,i,o){if(!n&&0!==n)return o
const a=+n
let s,l=e[0],u=Se(e)
u<l&&(s=l,l=u,u=s),s=Math.abs(t-l)
const c=Math.abs(u-t)
return s<c&&s<=a?r:c<=a?i:o}function ct(e,t,n){const r=e.prototype=Object.create(t.prototype)
return Object.defineProperty(r,"constructor",{value:e,writable:!0,enumerable:!0,configurable:!0}),nt(r,n)}function ft(e,t,n,r){let i,o=t[0],a=t[t.length-1]
return o>a&&(i=o,o=a,a=i),r=void 0===r||r,((n=void 0===n||n)?o<=e:o<e)&&(r?e<=a:e<a)}function dt(e){return"boolean"==typeof e}function ht(e){return"[object Date]"===Object.prototype.toString.call(e)}function pt(e){return e&&Ge(e[Symbol.iterator])}function gt(e){return"number"==typeof e}function mt(e){return"[object RegExp]"===Object.prototype.toString.call(e)}function yt(e){return"string"==typeof e}function vt(e,t,n){e&&(e=t?Ve(e).map((e=>e.replace(/\\(.)/g,"$1"))):Ve(e))
const r=e&&e.length,i=n&&n.get||ne,o=e=>i(t?[e]:ae(e))
let a
if(r)if(1===r){const t=o(e[0])
a=function(e){return""+t(e)}}else{const t=e.map(o)
a=function(e){let n=""+t[0](e),i=0
for(;++i<r;)n+="|"+t[i](e)
return n}}else a=function(){return""}
return Q(a,e,"key")}function bt(e,t){const n=e[0],r=Se(e),i=+t
return i?1===i?r:n+i*(r-n):n}function xt(e){let t,n,r
e=+e||1e4
const i=()=>{t={},n={},r=0},o=(i,o)=>(++r>e&&(n=t,t={},r=1),t[i]=o)
return i(),{clear:i,has:e=>at(t,e)||at(n,e),get:e=>at(t,e)?t[e]:at(n,e)?o(e,n[e]):void 0,set:(e,n)=>at(t,e)?t[e]=n:o(e,n)}}function _t(e,t,n,r){const i=t.length,o=n.length
if(!o)return t
if(!i)return n
const a=r||new t.constructor(i+o)
let s=0,l=0,u=0
for(;s<i&&l<o;++u)a[u]=e(t[s],n[l])>0?n[l++]:t[s++]
for(;s<i;++s,++u)a[u]=t[s]
for(;l<o;++l,++u)a[u]=n[l]
return a}function wt(e,t){let n=""
for(;--t>=0;)n+=e
return n}function Ot(e,t,n,r){const i=n||" ",o=e+"",a=t-o.length
return a<=0?o:"left"===r?wt(i,a)+o:"center"===r?wt(i,~~(a/2))+o+wt(i,Math.ceil(a/2)):o+wt(i,a)}function kt(e){return e&&Se(e)-e[0]||0}function Et(e){return _e(e)?"["+e.map(Et)+"]":we(e)||yt(e)?JSON.stringify(e).replace("\u2028","\\u2028").replace("\u2029","\\u2029"):e}function At(e){return null==e||""===e?null:!(!e||"false"===e||"0"===e||!e)}const St=e=>gt(e)||ht(e)?e:Date.parse(e)
function Dt(e,t){return t=t||St,null==e||""===e?null:t(e)}function Ct(e){return null==e||""===e?null:e+""}function Mt(e){const t={},n=e.length
for(let r=0;r<n;++r)t[e[r]]=!0
return t}function jt(e,t,n,r){const i=null!=r?r:"…",o=e+"",a=o.length,s=Math.max(0,t-i.length)
return a<=t?o:"left"===n?i+o.slice(a-s):"center"===n?o.slice(0,Math.ceil(s/2))+i+o.slice(a-~~(s/2)):o.slice(0,s)+i}function Ft(e,t,n){if(e)if(t){const r=e.length
for(let i=0;i<r;++i){const r=t(e[i])
r&&n(r,i,e)}}else e.forEach(n)}var Tt={},Nt={}
function $t(e){return new Function("d","return {"+e.map((function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'})).join(",")+"}")}function Pt(e){var t=Object.create(null),n=[]
return e.forEach((function(e){for(var r in e)r in t||n.push(t[r]=r)})),n}function zt(e,t){var n=e+"",r=n.length
return r<t?new Array(t-r+1).join(0)+n:n}function It(e){return e}function Rt(e,t){return"string"==typeof t&&(t=e.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return Lt(e,t)}))}:Lt(e,t)}function Lt(e,t){var n=t.id,r=t.bbox,i=null==t.properties?{}:t.properties,o=Bt(e,t)
return null==n&&null==r?{type:"Feature",properties:i,geometry:o}:null==r?{type:"Feature",id:n,properties:i,geometry:o}:{type:"Feature",id:n,bbox:r,properties:i,geometry:o}}function Bt(e,t){var n=function(e){if(null==e)return It
var t,n,r=e.scale[0],i=e.scale[1],o=e.translate[0],a=e.translate[1]
return function(e,s){s||(t=n=0)
var l=2,u=e.length,c=new Array(u)
for(c[0]=(t+=e[0])*r+o,c[1]=(n+=e[1])*i+a;l<u;)c[l]=e[l],++l
return c}}(e.transform),r=e.arcs
function i(e,t){t.length&&t.pop()
for(var i=r[e<0?~e:e],o=0,a=i.length;o<a;++o)t.push(n(i[o],o))
e<0&&function(e,t){for(var n,r=e.length,i=r-t;i<--r;)n=e[i],e[i++]=e[r],e[r]=n}(t,a)}function o(e){return n(e)}function a(e){for(var t=[],n=0,r=e.length;n<r;++n)i(e[n],t)
return t.length<2&&t.push(t[0]),t}function s(e){for(var t=a(e);t.length<4;)t.push(t[0])
return t}function l(e){return e.map(s)}return function e(t){var n,r=t.type
switch(r){case"GeometryCollection":return{type:r,geometries:t.geometries.map(e)}
case"Point":n=o(t.coordinates)
break
case"MultiPoint":n=t.coordinates.map(o)
break
case"LineString":n=a(t.arcs)
break
case"MultiLineString":n=t.arcs.map(a)
break
case"Polygon":n=l(t.arcs)
break
case"MultiPolygon":n=t.arcs.map(l)
break
default:return null}return{type:r,coordinates:n}}(t)}function Ut(e,t){var n={},r={},i={},o=[],a=-1
function s(e,t){for(var r in e){var i=e[r]
delete t[i.start],delete i.start,delete i.end,i.forEach((function(e){n[e<0?~e:e]=1})),o.push(i)}}return t.forEach((function(n,r){var i,o=e.arcs[n<0?~n:n]
o.length<3&&!o[1][0]&&!o[1][1]&&(i=t[++a],t[a]=n,t[r]=i)})),t.forEach((function(t){var n,o,a=function(t){var n,r=e.arcs[t<0?~t:t],i=r[0]
return e.transform?(n=[0,0],r.forEach((function(e){n[0]+=e[0],n[1]+=e[1]}))):n=r[r.length-1],t<0?[n,i]:[i,n]}(t),s=a[0],l=a[1]
if(n=i[s])if(delete i[n.end],n.push(t),n.end=l,o=r[l]){delete r[o.start]
var u=o===n?n:n.concat(o)
r[u.start=n.start]=i[u.end=o.end]=u}else r[n.start]=i[n.end]=n
else if(n=r[l])if(delete r[n.start],n.unshift(t),n.start=s,o=i[s]){delete i[o.end]
var c=o===n?n:o.concat(n)
r[c.start=o.start]=i[c.end=n.end]=c}else r[n.start]=i[n.end]=n
else r[(n=[t]).start=s]=i[n.end=l]=n})),s(i,r),s(r,i),t.forEach((function(e){n[e<0?~e:e]||o.push([e])})),o}function qt(e){return Bt(e,Zt.apply(this,arguments))}function Zt(e,t,n){var r,i,o
if(arguments.length>1)r=Wt(0,t,n)
else for(i=0,r=new Array(o=e.arcs.length);i<o;++i)r[i]=i
return{type:"MultiLineString",arcs:Ut(e,r)}}function Wt(e,t,n){var r,i=[],o=[]
function a(e){var t=e<0?~e:e;(o[t]||(o[t]=[])).push({i:e,g:r})}function s(e){e.forEach(a)}function l(e){e.forEach(s)}return function e(t){switch(r=t,t.type){case"GeometryCollection":t.geometries.forEach(e)
break
case"LineString":s(t.arcs)
break
case"MultiLineString":case"Polygon":l(t.arcs)
break
case"MultiPolygon":!function(e){e.forEach(l)}(t.arcs)}}(t),o.forEach(null==n?function(e){i.push(e[0].i)}:function(e){n(e[0].g,e[e.length-1].g)&&i.push(e[0].i)}),i}var Vt=Math.sqrt(50),Ht=Math.sqrt(10),Gt=Math.sqrt(2)
function Yt(e,t,n){var r,i,o,a,s=-1
if(n=+n,(e=+e)==(t=+t)&&n>0)return[e]
if((r=t<e)&&(i=e,e=t,t=i),0===(a=Xt(e,t,n))||!isFinite(a))return[]
if(a>0){let n=Math.round(e/a),r=Math.round(t/a)
for(n*a<e&&++n,r*a>t&&--r,o=new Array(i=r-n+1);++s<i;)o[s]=(n+s)*a}else{a=-a
let n=Math.round(e*a),r=Math.round(t*a)
for(n/a<e&&++n,r/a>t&&--r,o=new Array(i=r-n+1);++s<i;)o[s]=(n+s)/a}return r&&o.reverse(),o}function Xt(e,t,n){var r=(t-e)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i)
return i>=0?(o>=Vt?10:o>=Ht?5:o>=Gt?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=Vt?10:o>=Ht?5:o>=Gt?2:1)}function Jt(e,t,n){var r=Math.abs(t-e)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i
return o>=Vt?i*=10:o>=Ht?i*=5:o>=Gt&&(i*=2),t<e?-i:i}var Kt,Qt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function en(e){if(!(t=Qt.exec(e)))throw new Error("invalid format: "+e)
var t
return new tn({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}function tn(e){this.fill=void 0===e.fill?" ":e.fill+"",this.align=void 0===e.align?">":e.align+"",this.sign=void 0===e.sign?"-":e.sign+"",this.symbol=void 0===e.symbol?"":e.symbol+"",this.zero=!!e.zero,this.width=void 0===e.width?void 0:+e.width,this.comma=!!e.comma,this.precision=void 0===e.precision?void 0:+e.precision,this.trim=!!e.trim,this.type=void 0===e.type?"":e.type+""}function nn(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null
var n,r=e.slice(0,n)
return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function rn(e){return(e=nn(Math.abs(e)))?e[1]:NaN}function on(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(rn(t)/3)))-rn(Math.abs(e)))}function an(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,rn(t)-rn(e))+1}function sn(e){return Math.max(0,-rn(Math.abs(e)))}function ln(e,t){var n=nn(e,t)
if(!n)return e+""
var r=n[0],i=n[1]
return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}en.prototype=tn.prototype,tn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}
const un={"%":(e,t)=>(100*e).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:function(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)},e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>ln(100*e,t),r:ln,s:function(e,t){var n=nn(e,t)
if(!n)return e+""
var r=n[0],i=n[1],o=i-(Kt=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length
return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+nn(e,Math.max(0,t+o-1))[0]},X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)}
function cn(e){return e}var fn,dn,hn,pn=Array.prototype.map,gn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"]
function mn(e){var t,n,r=void 0===e.grouping||void 0===e.thousands?cn:(t=pn.call(e.grouping,Number),n=e.thousands+"",function(e,r){for(var i=e.length,o=[],a=0,s=t[0],l=0;i>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),o.push(e.substring(i-=s,i+s)),!((l+=s+1)>r));)s=t[a=(a+1)%t.length]
return o.reverse().join(n)}),i=void 0===e.currency?"":e.currency[0]+"",o=void 0===e.currency?"":e.currency[1]+"",a=void 0===e.decimal?".":e.decimal+"",s=void 0===e.numerals?cn:function(e){return function(t){return t.replace(/[0-9]/g,(function(t){return e[+t]}))}}(pn.call(e.numerals,String)),l=void 0===e.percent?"%":e.percent+"",u=void 0===e.minus?"−":e.minus+"",c=void 0===e.nan?"NaN":e.nan+""
function f(e){var t=(e=en(e)).fill,n=e.align,f=e.sign,d=e.symbol,h=e.zero,p=e.width,g=e.comma,m=e.precision,y=e.trim,v=e.type
"n"===v?(g=!0,v="g"):un[v]||(void 0===m&&(m=12),y=!0,v="g"),(h||"0"===t&&"="===n)&&(h=!0,t="0",n="=")
var b="$"===d?i:"#"===d&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",x="$"===d?o:/[%p]/.test(v)?l:"",_=un[v],w=/[defgprs%]/.test(v)
function O(e){var i,o,l,d=b,O=x
if("c"===v)O=_(e)+O,e=""
else{var k=(e=+e)<0||1/e<0
if(e=isNaN(e)?c:_(Math.abs(e),m),y&&(e=function(e){e:for(var t,n=e.length,r=1,i=-1;r<n;++r)switch(e[r]){case".":i=t=r
break
case"0":0===i&&(i=r),t=r
break
default:if(!+e[r])break e
i>0&&(i=0)}return i>0?e.slice(0,i)+e.slice(t+1):e}(e)),k&&0==+e&&"+"!==f&&(k=!1),d=(k?"("===f?f:u:"-"===f||"("===f?"":f)+d,O=("s"===v?gn[8+Kt/3]:"")+O+(k&&"("===f?")":""),w)for(i=-1,o=e.length;++i<o;)if(48>(l=e.charCodeAt(i))||l>57){O=(46===l?a+e.slice(i+1):e.slice(i))+O,e=e.slice(0,i)
break}}g&&!h&&(e=r(e,1/0))
var E=d.length+e.length+O.length,A=E<p?new Array(p-E+1).join(t):""
switch(g&&h&&(e=r(A+e,A.length?p-O.length:1/0),A=""),n){case"<":e=d+e+O+A
break
case"=":e=d+A+e+O
break
case"^":e=A.slice(0,E=A.length>>1)+d+e+O+A.slice(E)
break
default:e=A+d+e+O}return s(e)}return m=void 0===m?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),O.toString=function(){return e+""},O}return{format:f,formatPrefix:function(e,t){var n=f(((e=en(e)).type="f",e)),r=3*Math.max(-8,Math.min(8,Math.floor(rn(t)/3))),i=Math.pow(10,-r),o=gn[8+r/3]
return function(e){return n(i*e)+o}}}}fn=mn({thousands:",",grouping:[3],currency:["$",""]}),dn=fn.format,hn=fn.formatPrefix
var yn=new Date,vn=new Date
function bn(e,t,n,r){function i(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return i.floor=function(t){return e(t=new Date(+t)),t},i.ceil=function(n){return e(n=new Date(n-1)),t(n,1),e(n),n},i.round=function(e){var t=i(e),n=i.ceil(e)
return e-t<n-e?t:n},i.offset=function(e,n){return t(e=new Date(+e),null==n?1:Math.floor(n)),e},i.range=function(n,r,o){var a,s=[]
if(n=i.ceil(n),o=null==o?1:Math.floor(o),!(n<r&&o>0))return s
do{s.push(a=new Date(+n)),t(n,o),e(n)}while(a<n&&n<r)
return s},i.filter=function(n){return bn((function(t){if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),(function(e,r){if(e>=e)if(r<0)for(;++r<=0;)for(;t(e,-1),!n(e););else for(;--r>=0;)for(;t(e,1),!n(e););}))},n&&(i.count=function(t,r){return yn.setTime(+t),vn.setTime(+r),e(yn),e(vn),Math.floor(n(yn,vn))},i.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?i.filter(r?function(t){return r(t)%e==0}:function(t){return i.count(0,t)%e==0}):i:null}),i}const xn=1e3,_n=6e4,wn=36e5,On=864e5,kn=6048e5,En=31536e6
var An=bn((e=>e.setHours(0,0,0,0)),((e,t)=>e.setDate(e.getDate()+t)),((e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*_n)/On),(e=>e.getDate()-1))
const Sn=An
function Dn(e){return bn((function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+7*t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*_n)/kn}))}An.range
var Cn=Dn(0),Mn=Dn(1),jn=Dn(2),Fn=Dn(3),Tn=Dn(4),Nn=Dn(5),$n=Dn(6),Pn=(Cn.range,Mn.range,jn.range,Fn.range,Tn.range,Nn.range,$n.range,bn((function(e){e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+t)}),(function(e,t){return(t-e)/On}),(function(e){return e.getUTCDate()-1})))
const zn=Pn
function In(e){return bn((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCDate(e.getUTCDate()+7*t)}),(function(e,t){return(t-e)/kn}))}Pn.range
var Rn=In(0),Ln=In(1),Bn=In(2),Un=In(3),qn=In(4),Zn=In(5),Wn=In(6),Vn=(Rn.range,Ln.range,Bn.range,Un.range,qn.range,Zn.range,Wn.range,bn((function(e){e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t)}),(function(e,t){return t.getFullYear()-e.getFullYear()}),(function(e){return e.getFullYear()})))
Vn.every=function(e){return isFinite(e=Math.floor(e))&&e>0?bn((function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n*e)})):null}
const Hn=Vn
Vn.range
var Gn=bn((function(e){e.setDate(1),e.setHours(0,0,0,0)}),(function(e,t){e.setMonth(e.getMonth()+t)}),(function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}),(function(e){return e.getMonth()}))
const Yn=Gn
Gn.range
var Xn=bn((function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*xn-e.getMinutes()*_n)}),(function(e,t){e.setTime(+e+t*wn)}),(function(e,t){return(t-e)/wn}),(function(e){return e.getHours()}))
const Jn=Xn
Xn.range
var Kn=bn((function(e){e.setTime(e-e.getMilliseconds()-e.getSeconds()*xn)}),(function(e,t){e.setTime(+e+t*_n)}),(function(e,t){return(t-e)/_n}),(function(e){return e.getMinutes()}))
const Qn=Kn
Kn.range
var er=bn((function(e){e.setTime(e-e.getMilliseconds())}),(function(e,t){e.setTime(+e+t*xn)}),(function(e,t){return(t-e)/xn}),(function(e){return e.getUTCSeconds()}))
const tr=er
er.range
var nr=bn((function(){}),(function(e,t){e.setTime(+e+t)}),(function(e,t){return t-e}))
nr.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?bn((function(t){t.setTime(Math.floor(t/e)*e)}),(function(t,n){t.setTime(+t+n*e)}),(function(t,n){return(n-t)/e})):nr:null}
const rr=nr
nr.range
var ir=bn((function(e){e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t)}),(function(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}),(function(e){return e.getUTCFullYear()}))
ir.every=function(e){return isFinite(e=Math.floor(e))&&e>0?bn((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n*e)})):null}
const or=ir
ir.range
var ar=bn((function(e){e.setUTCDate(1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCMonth(e.getUTCMonth()+t)}),(function(e,t){return t.getUTCMonth()-e.getUTCMonth()+12*(t.getUTCFullYear()-e.getUTCFullYear())}),(function(e){return e.getUTCMonth()}))
const sr=ar
ar.range
var lr=bn((function(e){e.setUTCMinutes(0,0,0)}),(function(e,t){e.setTime(+e+t*wn)}),(function(e,t){return(t-e)/wn}),(function(e){return e.getUTCHours()}))
const ur=lr
lr.range
var cr=bn((function(e){e.setUTCSeconds(0,0)}),(function(e,t){e.setTime(+e+t*_n)}),(function(e,t){return(t-e)/_n}),(function(e){return e.getUTCMinutes()}))
const fr=cr
function dr(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function hr(e,t){return null==e||null==t?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function pr(e){let t,n,r
function i(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
if(i<o){if(0!==t(r,r))return o
do{const t=i+o>>>1
n(e[t],r)<0?i=t+1:o=t}while(i<o)}return i}return 2!==e.length?(t=dr,n=(t,n)=>dr(e(t),n),r=(t,n)=>e(t)-n):(t=e===dr||e===hr?e:gr,n=e,r=e),{left:i,center:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
const a=i(e,t,n,o-1)
return a>n&&r(e[a-1],t)>-r(e[a],t)?a-1:a},right:function(e,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
if(i<o){if(0!==t(r,r))return o
do{const t=i+o>>>1
n(e[t],r)<=0?i=t+1:o=t}while(i<o)}return i}}}function gr(){return 0}cr.range
const mr="year",yr="quarter",vr="month",br="week",xr="date",_r="day",wr="dayofyear",Or="hours",kr="minutes",Er="seconds",Ar="milliseconds",Sr=[mr,yr,vr,br,xr,_r,wr,Or,kr,Er,Ar],Dr=Sr.reduce(((e,t,n)=>(e[t]=1+n,e)),{})
function Cr(e){const t=Ve(e).slice(),n={}
return t.length||oe("Missing time unit."),t.forEach((e=>{at(Dr,e)?n[e]=1:oe("Invalid time unit: ".concat(e,"."))})),(n[br]||n[_r]?1:0)+(n[yr]||n[vr]||n[xr]?1:0)+(n[wr]?1:0)>1&&oe("Incompatible time units: ".concat(e)),t.sort(((e,t)=>Dr[e]-Dr[t])),t}const Mr={[mr]:"%Y ",[yr]:"Q%q ",[vr]:"%b ",[xr]:"%d ",[br]:"W%U ",[_r]:"%a ",[wr]:"%j ",[Or]:"%H:00",[kr]:"00:%M",[Er]:":%S",[Ar]:".%L",["".concat(mr,"-").concat(vr)]:"%Y-%m ",["".concat(mr,"-").concat(vr,"-").concat(xr)]:"%Y-%m-%d ",["".concat(Or,"-").concat(kr)]:"%H:%M"}
function jr(e,t){const n=nt({},Mr,t),r=Cr(e),i=r.length
let o,a,s="",l=0
for(l=0;l<i;)for(o=r.length;o>l;--o)if(a=r.slice(l,o).join("-"),null!=n[a]){s+=n[a],l=o
break}return s.trim()}const Fr=new Date
function Tr(e){return Fr.setFullYear(e),Fr.setMonth(0),Fr.setDate(1),Fr.setHours(0,0,0,0),Fr}function Nr(e){return Pr(new Date(e))}function $r(e){return zr(new Date(e))}function Pr(e){return Sn.count(Tr(e.getFullYear())-1,e)}function zr(e){return Cn.count(Tr(e.getFullYear())-1,e)}function Ir(e){return Tr(e).getDay()}function Rr(e,t,n,r,i,o,a){if(0<=e&&e<100){const s=new Date(-1,t,n,r,i,o,a)
return s.setFullYear(e),s}return new Date(e,t,n,r,i,o,a)}function Lr(e){return Ur(new Date(e))}function Br(e){return qr(new Date(e))}function Ur(e){const t=Date.UTC(e.getUTCFullYear(),0,1)
return zn.count(t-1,e)}function qr(e){const t=Date.UTC(e.getUTCFullYear(),0,1)
return Rn.count(t-1,e)}function Zr(e){return Fr.setTime(Date.UTC(e,0,1)),Fr.getUTCDay()}function Wr(e,t,n,r,i,o,a){if(0<=e&&e<100){const e=new Date(Date.UTC(-1,t,n,r,i,o,a))
return e.setUTCFullYear(n.y),e}return new Date(Date.UTC(e,t,n,r,i,o,a))}function Vr(e,t,n,r,i){const o=t||1,a=Se(e),s=(e,t,i)=>function(e,t,n,r){const i=n<=1?e:r?(t,i)=>r+n*Math.floor((e(t,i)-r)/n):(t,r)=>n*Math.floor(e(t,r)/n)
return t?(e,n)=>t(i(e,n),n):i}(n[i=i||e],r[i],e===a&&o,t),l=new Date,u=Mt(e),c=u[mr]?s(mr):et(2012),f=u[vr]?s(vr):u[yr]?s(yr):ce,d=u[br]&&u[_r]?s(_r,1,br+_r):u[br]?s(br,1):u[_r]?s(_r,1):u[xr]?s(xr,1):u[wr]?s(wr,1):fe,h=u[Or]?s(Or):ce,p=u[kr]?s(kr):ce,g=u[Er]?s(Er):ce,m=u[Ar]?s(Ar):ce
return function(e){l.setTime(+e)
const t=c(l)
return i(t,f(l),d(l,t),h(l),p(l),g(l),m(l))}}function Hr(e,t,n){return t+7*e-(n+6)%7}const Gr={[mr]:e=>e.getFullYear(),[yr]:e=>Math.floor(e.getMonth()/3),[vr]:e=>e.getMonth(),[xr]:e=>e.getDate(),[Or]:e=>e.getHours(),[kr]:e=>e.getMinutes(),[Er]:e=>e.getSeconds(),[Ar]:e=>e.getMilliseconds(),[wr]:e=>Pr(e),[br]:e=>zr(e),[br+_r]:(e,t)=>Hr(zr(e),e.getDay(),Ir(t)),[_r]:(e,t)=>Hr(1,e.getDay(),Ir(t))},Yr={[yr]:e=>3*e,[br]:(e,t)=>Hr(e,0,Ir(t))}
function Xr(e,t){return Vr(e,t||1,Gr,Yr,Rr)}const Jr={[mr]:e=>e.getUTCFullYear(),[yr]:e=>Math.floor(e.getUTCMonth()/3),[vr]:e=>e.getUTCMonth(),[xr]:e=>e.getUTCDate(),[Or]:e=>e.getUTCHours(),[kr]:e=>e.getUTCMinutes(),[Er]:e=>e.getUTCSeconds(),[Ar]:e=>e.getUTCMilliseconds(),[wr]:e=>Ur(e),[br]:e=>qr(e),[_r]:(e,t)=>Hr(1,e.getUTCDay(),Zr(t)),[br+_r]:(e,t)=>Hr(qr(e),e.getUTCDay(),Zr(t))},Kr={[yr]:e=>3*e,[br]:(e,t)=>Hr(e,0,Zr(t))}
function Qr(e,t){return Vr(e,t||1,Jr,Kr,Wr)}const ei={[mr]:Hn,[yr]:Yn.every(3),[vr]:Yn,[br]:Cn,[xr]:Sn,[_r]:Sn,[wr]:Sn,[Or]:Jn,[kr]:Qn,[Er]:tr,[Ar]:rr},ti={[mr]:or,[yr]:sr.every(3),[vr]:sr,[br]:Rn,[xr]:zn,[_r]:zn,[wr]:zn,[Or]:ur,[kr]:fr,[Er]:tr,[Ar]:rr}
function ni(e){return ei[e]}function ri(e){return ti[e]}function ii(e,t,n){return e?e.offset(t,n):void 0}function oi(e,t,n){return ii(ni(e),t,n)}function ai(e,t,n){return ii(ri(e),t,n)}function si(e,t,n,r){return e?e.range(t,n,r):void 0}function li(e,t,n,r){return si(ni(e),t,n,r)}function ui(e,t,n,r){return si(ri(e),t,n,r)}const ci=31536e6,fi=[mr,vr,xr,Or,kr,Er,Ar],di=fi.slice(0,-1),hi=di.slice(0,-1),pi=hi.slice(0,-1),gi=pi.slice(0,-1),mi=[mr,vr],yi=[mr],vi=[[di,1,1e3],[di,5,5e3],[di,15,15e3],[di,30,3e4],[hi,1,6e4],[hi,5,3e5],[hi,15,9e5],[hi,30,18e5],[pi,1,36e5],[pi,3,108e5],[pi,6,216e5],[pi,12,432e5],[gi,1,864e5],[[mr,br],1,6048e5],[mi,1,2592e6],[mi,3,7776e6],[yi,1,ci]]
function bi(e){const t=e.extent,n=e.maxbins||40,r=Math.abs(kt(t))/n
let i,o,a=pr((e=>e[2])).right(vi,r)
return a===vi.length?(i=yi,o=Jt(t[0]/ci,t[1]/ci,n)):a?(a=vi[r/vi[a-1][2]<vi[a][2]/r?a-1:a],i=a[0],o=a[1]):(i=fi,o=Math.max(Jt(t[0],t[1],n),1)),{units:i,step:o}}function xi(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L)
return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function _i(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L))
return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function wi(e,t,n){return{y:e,m:t,d:n,H:0,M:0,S:0,L:0}}function Oi(e){var t=e.dateTime,n=e.date,r=e.time,i=e.periods,o=e.days,a=e.shortDays,s=e.months,l=e.shortMonths,u=$i(i),c=Pi(i),f=$i(o),d=Pi(o),h=$i(a),p=Pi(a),g=$i(s),m=Pi(s),y=$i(l),v=Pi(l),b={a:function(e){return a[e.getDay()]},A:function(e){return o[e.getDay()]},b:function(e){return l[e.getMonth()]},B:function(e){return s[e.getMonth()]},c:null,d:ro,e:ro,f:lo,g:xo,G:wo,H:io,I:oo,j:ao,L:so,m:uo,M:co,p:function(e){return i[+(e.getHours()>=12)]},q:function(e){return 1+~~(e.getMonth()/3)},Q:Wo,s:Vo,S:fo,u:ho,U:po,V:mo,w:yo,W:vo,x:null,X:null,y:bo,Y:_o,Z:Oo,"%":Zo},x={a:function(e){return a[e.getUTCDay()]},A:function(e){return o[e.getUTCDay()]},b:function(e){return l[e.getUTCMonth()]},B:function(e){return s[e.getUTCMonth()]},c:null,d:ko,e:ko,f:Co,g:Lo,G:Uo,H:Eo,I:Ao,j:So,L:Do,m:Mo,M:jo,p:function(e){return i[+(e.getUTCHours()>=12)]},q:function(e){return 1+~~(e.getUTCMonth()/3)},Q:Wo,s:Vo,S:Fo,u:To,U:No,V:Po,w:zo,W:Io,x:null,X:null,y:Ro,Y:Bo,Z:qo,"%":Zo},_={a:function(e,t,n){var r=h.exec(t.slice(n))
return r?(e.w=p.get(r[0].toLowerCase()),n+r[0].length):-1},A:function(e,t,n){var r=f.exec(t.slice(n))
return r?(e.w=d.get(r[0].toLowerCase()),n+r[0].length):-1},b:function(e,t,n){var r=y.exec(t.slice(n))
return r?(e.m=v.get(r[0].toLowerCase()),n+r[0].length):-1},B:function(e,t,n){var r=g.exec(t.slice(n))
return r?(e.m=m.get(r[0].toLowerCase()),n+r[0].length):-1},c:function(e,n,r){return k(e,t,n,r)},d:Hi,e:Hi,f:Qi,g:qi,G:Ui,H:Yi,I:Yi,j:Gi,L:Ki,m:Vi,M:Xi,p:function(e,t,n){var r=u.exec(t.slice(n))
return r?(e.p=c.get(r[0].toLowerCase()),n+r[0].length):-1},q:Wi,Q:to,s:no,S:Ji,u:Ii,U:Ri,V:Li,w:zi,W:Bi,x:function(e,t,r){return k(e,n,t,r)},X:function(e,t,n){return k(e,r,t,n)},y:qi,Y:Ui,Z:Zi,"%":eo}
function w(e,t){return function(n){var r,i,o,a=[],s=-1,l=0,u=e.length
for(n instanceof Date||(n=new Date(+n));++s<u;)37===e.charCodeAt(s)&&(a.push(e.slice(l,s)),null!=(i=Ci[r=e.charAt(++s)])?r=e.charAt(++s):i="e"===r?" ":"0",(o=t[r])&&(r=o(n,i)),a.push(r),l=s+1)
return a.push(e.slice(l,s)),a.join("")}}function O(e,t){return function(n){var r,i,o=wi(1900,void 0,1)
if(k(o,e,n+="",0)!=n.length)return null
if("Q"in o)return new Date(o.Q)
if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0))
if(t&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(i=(r=_i(wi(o.y,0,1))).getUTCDay(),r=i>4||0===i?Ln.ceil(r):Ln(r),r=zn.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=xi(wi(o.y,0,1))).getDay(),r=i>4||0===i?Mn.ceil(r):Mn(r),r=Sn.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?_i(wi(o.y,0,1)).getUTCDay():xi(wi(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,_i(o)):xi(o)}}function k(e,t,n,r){for(var i,o,a=0,s=t.length,l=n.length;a<s;){if(r>=l)return-1
if(37===(i=t.charCodeAt(a++))){if(i=t.charAt(a++),!(o=_[i in Ci?t.charAt(a++):i])||(r=o(e,n,r))<0)return-1}else if(i!=n.charCodeAt(r++))return-1}return r}return b.x=w(n,b),b.X=w(r,b),b.c=w(t,b),x.x=w(n,x),x.X=w(r,x),x.c=w(t,x),{format:function(e){var t=w(e+="",b)
return t.toString=function(){return e},t},parse:function(e){var t=O(e+="",!1)
return t.toString=function(){return e},t},utcFormat:function(e){var t=w(e+="",x)
return t.toString=function(){return e},t},utcParse:function(e){var t=O(e+="",!0)
return t.toString=function(){return e},t}}}var ki,Ei,Ai,Si,Di,Ci={"-":"",_:" ",0:"0"},Mi=/^\s*\d+/,ji=/^%/,Fi=/[\\^$*+?|[\]().{}]/g
function Ti(e,t,n){var r=e<0?"-":"",i=(r?-e:e)+"",o=i.length
return r+(o<n?new Array(n-o+1).join(t)+i:i)}function Ni(e){return e.replace(Fi,"\\$&")}function $i(e){return new RegExp("^(?:"+e.map(Ni).join("|")+")","i")}function Pi(e){return new Map(e.map(((e,t)=>[e.toLowerCase(),t])))}function zi(e,t,n){var r=Mi.exec(t.slice(n,n+1))
return r?(e.w=+r[0],n+r[0].length):-1}function Ii(e,t,n){var r=Mi.exec(t.slice(n,n+1))
return r?(e.u=+r[0],n+r[0].length):-1}function Ri(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.U=+r[0],n+r[0].length):-1}function Li(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.V=+r[0],n+r[0].length):-1}function Bi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.W=+r[0],n+r[0].length):-1}function Ui(e,t,n){var r=Mi.exec(t.slice(n,n+4))
return r?(e.y=+r[0],n+r[0].length):-1}function qi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function Zi(e,t,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n,n+6))
return r?(e.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function Wi(e,t,n){var r=Mi.exec(t.slice(n,n+1))
return r?(e.q=3*r[0]-3,n+r[0].length):-1}function Vi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.m=r[0]-1,n+r[0].length):-1}function Hi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.d=+r[0],n+r[0].length):-1}function Gi(e,t,n){var r=Mi.exec(t.slice(n,n+3))
return r?(e.m=0,e.d=+r[0],n+r[0].length):-1}function Yi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.H=+r[0],n+r[0].length):-1}function Xi(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.M=+r[0],n+r[0].length):-1}function Ji(e,t,n){var r=Mi.exec(t.slice(n,n+2))
return r?(e.S=+r[0],n+r[0].length):-1}function Ki(e,t,n){var r=Mi.exec(t.slice(n,n+3))
return r?(e.L=+r[0],n+r[0].length):-1}function Qi(e,t,n){var r=Mi.exec(t.slice(n,n+6))
return r?(e.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function eo(e,t,n){var r=ji.exec(t.slice(n,n+1))
return r?n+r[0].length:-1}function to(e,t,n){var r=Mi.exec(t.slice(n))
return r?(e.Q=+r[0],n+r[0].length):-1}function no(e,t,n){var r=Mi.exec(t.slice(n))
return r?(e.s=+r[0],n+r[0].length):-1}function ro(e,t){return Ti(e.getDate(),t,2)}function io(e,t){return Ti(e.getHours(),t,2)}function oo(e,t){return Ti(e.getHours()%12||12,t,2)}function ao(e,t){return Ti(1+Sn.count(Hn(e),e),t,3)}function so(e,t){return Ti(e.getMilliseconds(),t,3)}function lo(e,t){return so(e,t)+"000"}function uo(e,t){return Ti(e.getMonth()+1,t,2)}function co(e,t){return Ti(e.getMinutes(),t,2)}function fo(e,t){return Ti(e.getSeconds(),t,2)}function ho(e){var t=e.getDay()
return 0===t?7:t}function po(e,t){return Ti(Cn.count(Hn(e)-1,e),t,2)}function go(e){var t=e.getDay()
return t>=4||0===t?Tn(e):Tn.ceil(e)}function mo(e,t){return e=go(e),Ti(Tn.count(Hn(e),e)+(4===Hn(e).getDay()),t,2)}function yo(e){return e.getDay()}function vo(e,t){return Ti(Mn.count(Hn(e)-1,e),t,2)}function bo(e,t){return Ti(e.getFullYear()%100,t,2)}function xo(e,t){return Ti((e=go(e)).getFullYear()%100,t,2)}function _o(e,t){return Ti(e.getFullYear()%1e4,t,4)}function wo(e,t){var n=e.getDay()
return Ti((e=n>=4||0===n?Tn(e):Tn.ceil(e)).getFullYear()%1e4,t,4)}function Oo(e){var t=e.getTimezoneOffset()
return(t>0?"-":(t*=-1,"+"))+Ti(t/60|0,"0",2)+Ti(t%60,"0",2)}function ko(e,t){return Ti(e.getUTCDate(),t,2)}function Eo(e,t){return Ti(e.getUTCHours(),t,2)}function Ao(e,t){return Ti(e.getUTCHours()%12||12,t,2)}function So(e,t){return Ti(1+zn.count(or(e),e),t,3)}function Do(e,t){return Ti(e.getUTCMilliseconds(),t,3)}function Co(e,t){return Do(e,t)+"000"}function Mo(e,t){return Ti(e.getUTCMonth()+1,t,2)}function jo(e,t){return Ti(e.getUTCMinutes(),t,2)}function Fo(e,t){return Ti(e.getUTCSeconds(),t,2)}function To(e){var t=e.getUTCDay()
return 0===t?7:t}function No(e,t){return Ti(Rn.count(or(e)-1,e),t,2)}function $o(e){var t=e.getUTCDay()
return t>=4||0===t?qn(e):qn.ceil(e)}function Po(e,t){return e=$o(e),Ti(qn.count(or(e),e)+(4===or(e).getUTCDay()),t,2)}function zo(e){return e.getUTCDay()}function Io(e,t){return Ti(Ln.count(or(e)-1,e),t,2)}function Ro(e,t){return Ti(e.getUTCFullYear()%100,t,2)}function Lo(e,t){return Ti((e=$o(e)).getUTCFullYear()%100,t,2)}function Bo(e,t){return Ti(e.getUTCFullYear()%1e4,t,4)}function Uo(e,t){var n=e.getUTCDay()
return Ti((e=n>=4||0===n?qn(e):qn.ceil(e)).getUTCFullYear()%1e4,t,4)}function qo(){return"+0000"}function Zo(){return"%"}function Wo(e){return+e}function Vo(e){return Math.floor(+e/1e3)}function Ho(e){const t={}
return n=>t[n]||(t[n]=e(n))}function Go(e){const t=Ho(e.format),n=e.formatPrefix
return{format:t,formatPrefix:n,formatFloat(e){const n=en(e||",")
if(null==n.precision){switch(n.precision=12,n.type){case"%":n.precision-=2
break
case"e":n.precision-=1}return function(e,t){return n=>{const r=e(n),i=r.indexOf(t)
if(i<0)return r
let o=function(e,t){let n,r=e.lastIndexOf("e")
if(r>0)return r
for(r=e.length;--r>t;)if(n=e.charCodeAt(r),n>=48&&n<=57)return r+1}(r,i)
const a=o<r.length?r.slice(o):""
for(;--o>i;)if("0"!==r[o]){++o
break}return r.slice(0,o)+a}}(t(n),t(".1f")(1)[1])}return t(n)},formatSpan(e,r,i,o){o=en(null==o?",f":o)
const a=Jt(e,r,i),s=Math.max(Math.abs(e),Math.abs(r))
let l
if(null==o.precision)switch(o.type){case"s":return isNaN(l=on(a,s))||(o.precision=l),n(o,s)
case"":case"e":case"g":case"p":case"r":isNaN(l=an(a,s))||(o.precision=l-("e"===o.type))
break
case"f":case"%":isNaN(l=sn(a))||(o.precision=l-2*("%"===o.type))}return t(o)}}}let Yo,Xo
function Jo(){return Yo=Go({format:dn,formatPrefix:hn})}function Ko(e){return Go(mn(e))}function Qo(e){return arguments.length?Yo=Ko(e):Yo}function ea(e,t,n){we(n=n||{})||oe("Invalid time multi-format specifier: ".concat(n))
const r=t(Er),i=t(kr),o=t(Or),a=t(xr),s=t(br),l=t(vr),u=t(yr),c=t(mr),f=e(n[Ar]||".%L"),d=e(n[Er]||":%S"),h=e(n[kr]||"%I:%M"),p=e(n[Or]||"%I %p"),g=e(n[xr]||n[_r]||"%a %d"),m=e(n[br]||"%b %d"),y=e(n[vr]||"%B"),v=e(n[yr]||"%B"),b=e(n[mr]||"%Y")
return e=>(r(e)<e?f:i(e)<e?d:o(e)<e?h:a(e)<e?p:l(e)<e?s(e)<e?g:m:c(e)<e?u(e)<e?y:v:b)(e)}function ta(e){const t=Ho(e.format),n=Ho(e.utcFormat)
return{timeFormat:e=>yt(e)?t(e):ea(t,ni,e),utcFormat:e=>yt(e)?n(e):ea(n,ri,e),timeParse:Ho(e.parse),utcParse:Ho(e.utcParse)}}function na(){return Xo=ta({format:Ei,parse:Ai,utcFormat:Si,utcParse:Di})}function ra(e){return ta(Oi(e))}function ia(e){return arguments.length?Xo=ra(e):Xo}ki=Oi({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Ei=ki.format,Ai=ki.parse,Si=ki.utcFormat,Di=ki.utcParse,Jo(),na()
const oa=(e,t)=>nt({},e,t)
function aa(e,t){const n=e?Ko(e):Qo(),r=t?ra(t):ia()
return oa(n,r)}function sa(e,t){const n=arguments.length
return n&&2!==n&&oe("defaultLocale expects either zero or two arguments."),n?oa(Qo(e),ia(t)):oa(Qo(),ia())}function la(){return Jo(),na(),sa()}const ua=/^(data:|([A-Za-z]+:)?\/\/)/,ca=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,fa=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,da="file://"
async function ha(e,t){const n=await this.sanitize(e,t),r=n.href
return n.localFile?this.file(r):this.http(r,t)}async function pa(e,t){t=nt({},this.options,t)
const n=this.fileAccess,r={href:null}
let i,o,a
const s=ca.test(e.replace(fa,""))
null!=e&&"string"==typeof e&&s||oe("Sanitize failure, invalid URI: "+Et(e))
const l=ua.test(e)
return(a=t.baseURL)&&!l&&(e.startsWith("/")||a.endsWith("/")||(e="/"+e),e=a+e),o=(i=e.startsWith(da))||"file"===t.mode||"http"!==t.mode&&!l&&n,i?e=e.slice(da.length):e.startsWith("//")&&("file"===t.defaultProtocol?(e=e.slice(2),o=!0):e=(t.defaultProtocol||"http")+":"+e),Object.defineProperty(r,"localFile",{value:!!o}),r.href=e,t.target&&(r.target=t.target+""),t.rel&&(r.rel=t.rel+""),"image"===t.context&&t.crossOrigin&&(r.crossOrigin=t.crossOrigin+""),r}function ga(e){return e?t=>new Promise(((n,r)=>{e.readFile(t,((e,t)=>{e?r(e):n(t)}))})):ma}async function ma(){oe("No file system access.")}function ya(e){return e?async function(t,n){const r=nt({},this.options.http,n),i=n&&n.response,o=await e(t,r)
return o.ok?Ge(o[i])?o[i]():o.text():oe(o.status+""+o.statusText)}:va}async function va(){oe("No HTTP fetch method available.")}const ba=e=>!(Number.isNaN(+e)||e instanceof Date),xa={boolean:At,integer:De,number:De,date:Dt,string:Ct,unknown:ue},_a=[e=>"true"===e||"false"===e||!0===e||!1===e,e=>ba(e)&&Number.isInteger(+e),ba,e=>!Number.isNaN(Date.parse(e))],wa=["boolean","integer","number","date"]
function Oa(e,t){if(!e||!e.length)return"unknown"
const n=e.length,r=_a.length,i=_a.map(((e,t)=>t+1))
for(let a,s,l=0,u=0;l<n;++l)for(s=t?e[l][t]:e[l],a=0;a<r;++a)if(i[a]&&null!=(o=s)&&o==o&&!_a[a](s)&&(i[a]=0,++u,u===_a.length))return"string"
var o
return wa[i.reduce(((e,t)=>0===e?t:e),0)-1]}function ka(e,t){return t.reduce(((t,n)=>(t[n]=Oa(e,n),t)),{})}function Ea(e){const t=function(t,n){const r={delimiter:e}
return Aa(t,n?nt(n,r):r)}
return t.responseType="text",t}function Aa(e,t){return t.header&&(e=t.header.map(Et).join(t.delimiter)+"\n"+e),function(e){var t=new RegExp('["'+e+"\n\r]"),n=e.charCodeAt(0)
function r(e,t){var r,i=[],o=e.length,a=0,s=0,l=o<=0,u=!1
function c(){if(l)return Nt
if(u)return u=!1,Tt
var t,r,i=a
if(34===e.charCodeAt(i)){for(;a++<o&&34!==e.charCodeAt(a)||34===e.charCodeAt(++a););return(t=a)>=o?l=!0:10===(r=e.charCodeAt(a++))?u=!0:13===r&&(u=!0,10===e.charCodeAt(a)&&++a),e.slice(i+1,t-1).replace(/""/g,'"')}for(;a<o;){if(10===(r=e.charCodeAt(t=a++)))u=!0
else if(13===r)u=!0,10===e.charCodeAt(a)&&++a
else if(r!==n)continue
return e.slice(i,t)}return l=!0,e.slice(i,o)}for(10===e.charCodeAt(o-1)&&--o,13===e.charCodeAt(o-1)&&--o;(r=c())!==Nt;){for(var f=[];r!==Tt&&r!==Nt;)f.push(r),r=c()
t&&null==(f=t(f,s++))||i.push(f)}return i}function i(t,n){return t.map((function(t){return n.map((function(e){return a(t[e])})).join(e)}))}function o(t){return t.map(a).join(e)}function a(e){return null==e?"":e instanceof Date?function(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),i=e.getUTCMilliseconds()
return isNaN(e)?"Invalid Date":function(e){return e<0?"-"+zt(-e,6):e>9999?"+"+zt(e,6):zt(e,4)}(e.getUTCFullYear())+"-"+zt(e.getUTCMonth()+1,2)+"-"+zt(e.getUTCDate(),2)+(i?"T"+zt(t,2)+":"+zt(n,2)+":"+zt(r,2)+"."+zt(i,3)+"Z":r?"T"+zt(t,2)+":"+zt(n,2)+":"+zt(r,2)+"Z":n||t?"T"+zt(t,2)+":"+zt(n,2)+"Z":"")}(e):t.test(e+="")?'"'+e.replace(/"/g,'""')+'"':e}return{parse:function(e,t){var n,i,o=r(e,(function(e,r){if(n)return n(e,r-1)
i=e,n=t?function(e,t){var n=$t(e)
return function(r,i){return t(n(r),i,e)}}(e,t):$t(e)}))
return o.columns=i||[],o},parseRows:r,format:function(t,n){return null==n&&(n=Pt(t)),[n.map(a).join(e)].concat(i(t,n)).join("\n")},formatBody:function(e,t){return null==t&&(t=Pt(e)),i(e,t).join("\n")},formatRows:function(e){return e.map(o).join("\n")},formatRow:o,formatValue:a}}(t.delimiter).parse(e+"")}function Sa(e,t){const n=t&&t.property?se(t.property):ue
return!we(e)||(r=e,"function"==typeof Buffer&&Ge(Buffer.isBuffer)&&Buffer.isBuffer(r))?n(JSON.parse(e)):function(e,t){return!_e(e)&&pt(e)&&(e=[...e]),t&&t.copy?JSON.parse(JSON.stringify(e)):e}(n(e),t)
var r}Aa.responseType="text",Sa.responseType="json"
const Da={interior:(e,t)=>e!==t,exterior:(e,t)=>e===t}
function Ca(e,t){let n,r,i,o
return e=Sa(e,t),t&&t.feature?(n=Rt,i=t.feature):t&&t.mesh?(n=qt,i=t.mesh,o=Da[t.filter]):oe("Missing TopoJSON feature or mesh parameter."),r=(r=e.objects[i])?n(e,r,o):oe("Invalid TopoJSON object: "+i),r&&r.features||[r]}Ca.responseType="json"
const Ma={dsv:Aa,csv:Ea(","),tsv:Ea("\t"),json:Sa,topojson:Ca}
function ja(e,t){return arguments.length>1?(Ma[e]=t,this):at(Ma,e)?Ma[e]:null}function Fa(e){const t=ja(e)
return t&&t.responseType||"text"}function Ta(e,t,n,r){const i=ja((t=t||{}).type||"json")
return i||oe("Unknown data format type: "+t.type),e=i(e,t),t.parse&&function(e,t,n,r){if(!e.length)return
const i=ia()
n=n||i.timeParse,r=r||i.utcParse
let o,a,s,l,u,c,f=e.columns||Object.keys(e[0])
"auto"===t&&(t=ka(e,f)),f=Object.keys(t)
const d=f.map((e=>{const i=t[e]
let o,a
if(i&&(i.startsWith("date:")||i.startsWith("utc:")))return o=i.split(/:(.+)?/,2),a=o[1],("'"===a[0]&&"'"===a[a.length-1]||'"'===a[0]&&'"'===a[a.length-1])&&(a=a.slice(1,-1)),("utc"===o[0]?r:n)(a)
if(!xa[i])throw Error("Illegal format pattern: "+e+":"+i)
return xa[i]}))
for(s=0,u=e.length,c=f.length;s<u;++s)for(o=e[s],l=0;l<c;++l)a=f[l],o[a]=d[l](o[a])}(e,t.parse,n,r),at(e,"columns")&&delete e.columns,e}const Na=function(e,t){return t=>({options:t||{},sanitize:pa,load:ha,fileAccess:!1,file:ga(null),http:ya(e)})}("undefined"!=typeof fetch&&fetch)
function $a(e){const t=e||ue,n=[],r={}
return n.add=e=>{const i=t(e)
return r[i]||(r[i]=1,n.push(e)),n},n.remove=e=>{const i=t(e)
if(r[i]){r[i]=0
const t=n.indexOf(e)
t>=0&&n.splice(t,1)}return n},n}async function Pa(e,t){try{await t(e)}catch(t){e.error(t)}}const za=Symbol("vega_id")
let Ia=1
function Ra(e){return!(!e||!La(e))}function La(e){return e[za]}function Ba(e,t){return e[za]=t,e}function Ua(e){const t=e===Object(e)?e:{data:e}
return La(t)?t:Ba(t,Ia++)}function qa(e){return Za(e,Ua({}))}function Za(e,t){for(const n in e)t[n]=e[n]
return t}function Wa(e,t){return Ba(t,La(e))}function Va(e,t){return e?t?(n,r)=>e(n,r)||La(t(n))-La(t(r)):(t,n)=>e(t,n)||La(t)-La(n):null}function Ha(e){return e&&e.constructor===Ga}function Ga(){const e=[],t=[],n=[],r=[],i=[]
let o=null,a=!1
return{constructor:Ga,insert(t){const n=Ve(t),r=n.length
for(let i=0;i<r;++i)e.push(n[i])
return this},remove(e){const n=Ge(e)?r:t,i=Ve(e),o=i.length
for(let t=0;t<o;++t)n.push(i[t])
return this},modify(e,t,r){const o={field:t,value:et(r)}
return Ge(e)?(o.filter=e,i.push(o)):(o.tuple=e,n.push(o)),this},encode(e,t){return Ge(e)?i.push({filter:e,field:t}):n.push({tuple:e,field:t}),this},clean(e){return o=e,this},reflow(){return a=!0,this},pulse(s,l){const u={},c={}
let f,d,h,p,g,m
for(f=0,d=l.length;f<d;++f)u[La(l[f])]=1
for(f=0,d=t.length;f<d;++f)g=t[f],u[La(g)]=-1
for(f=0,d=r.length;f<d;++f)p=r[f],l.forEach((e=>{p(e)&&(u[La(e)]=-1)}))
for(f=0,d=e.length;f<d;++f)g=e[f],m=La(g),u[m]?u[m]=1:s.add.push(Ua(e[f]))
for(f=0,d=l.length;f<d;++f)g=l[f],u[La(g)]<0&&s.rem.push(g)
function y(e,t,n){n?e[t]=n(e):s.encode=t,a||(c[La(e)]=e)}for(f=0,d=n.length;f<d;++f)h=n[f],g=h.tuple,p=h.field,m=u[La(g)],m>0&&(y(g,p,h.value),s.modifies(p))
for(f=0,d=i.length;f<d;++f)h=i[f],p=h.filter,l.forEach((e=>{p(e)&&u[La(e)]>0&&y(e,h.field,h.value)})),s.modifies(h.field)
if(a)s.mod=t.length||r.length?l.filter((e=>u[La(e)]>0)):l.slice()
else for(m in c)s.mod.push(c[m])
return(o||null==o&&(t.length||r.length))&&s.clean(!0),s}}}const Ya="_:mod:_"
function Xa(){Object.defineProperty(this,Ya,{writable:!0,value:{}})}Xa.prototype={set(e,t,n,r){const i=this,o=i[e],a=i[Ya]
return null!=t&&t>=0?(o[t]!==n||r)&&(o[t]=n,a[t+":"+e]=-1,a[e]=-1):(o!==n||r)&&(i[e]=n,a[e]=_e(n)?1+n.length:-1),i},modified(e,t){const n=this[Ya]
if(!arguments.length){for(const e in n)if(n[e])return!0
return!1}if(_e(e)){for(let t=0;t<e.length;++t)if(n[e[t]])return!0
return!1}return null!=t&&t>=0?t+1<n[e]||!!n[t+":"+e]:!!n[e]},clear(){return this[Ya]={},this}}
let Ja=0
const Ka=new Xa
function Qa(e,t,n,r){this.id=++Ja,this.value=e,this.stamp=-1,this.rank=-1,this.qrank=-1,this.flags=0,t&&(this._update=t),n&&this.parameters(n,r)}function es(e){return function(t){const n=this.flags
return 0===arguments.length?!!(n&e):(this.flags=t?n|e:n&~e,this)}}Qa.prototype={targets(){return this._targets||(this._targets=$a(le))},set(e){return this.value!==e?(this.value=e,1):0},skip:es(1),modified:es(2),parameters(e,t,n){t=!1!==t
const r=this._argval=this._argval||new Xa,i=this._argops=this._argops||[],o=[]
let a,s,l,u
const c=(e,n,a)=>{a instanceof Qa?(a!==this&&(t&&a.targets().add(this),o.push(a)),i.push({op:a,name:e,index:n})):r.set(e,n,a)}
for(a in e)if(s=e[a],"pulse"===a)Ve(s).forEach((e=>{e instanceof Qa?e!==this&&(e.targets().add(this),o.push(e)):oe("Pulse parameters must be operator instances.")})),this.source=s
else if(_e(s))for(r.set(a,-1,Array(l=s.length)),u=0;u<l;++u)c(a,u,s[u])
else c(a,-1,s)
return this.marshall().clear(),n&&(i.initonly=!0),o},marshall(e){const t=this._argval||Ka,n=this._argops
let r,i,o,a
if(n){const s=n.length
for(i=0;i<s;++i)r=n[i],o=r.op,a=o.modified()&&o.stamp===e,t.set(r.name,r.index,o.value,a)
if(n.initonly){for(i=0;i<s;++i)r=n[i],r.op.targets().remove(this)
this._argops=null,this._update=null}}return t},detach(){const e=this._argops
let t,n,r,i
if(e)for(t=0,n=e.length;t<n;++t)r=e[t],i=r.op,i._targets&&i._targets.remove(this)
this.pulse=null,this.source=null},evaluate(e){const t=this._update
if(t){const n=this.marshall(e.stamp),r=t.call(this,n,e)
if(n.clear(),r!==this.value)this.value=r
else if(!this.modified())return e.StopPropagation}},run(e){if(e.stamp<this.stamp)return e.StopPropagation
let t
return this.skip()?(this.skip(!1),t=0):t=this.evaluate(e),this.pulse=t||e}}
let ts=0
function ns(e,t,n){this.id=++ts,this.value=null,n&&(this.receive=n),e&&(this._filter=e),t&&(this._apply=t)}function rs(e,t,n){return new ns(e,t,n)}ns.prototype={_filter:de,_apply:ue,targets(){return this._targets||(this._targets=$a(le))},consume(e){return arguments.length?(this._consume=!!e,this):!!this._consume},receive(e){if(this._filter(e)){const t=this.value=this._apply(e),n=this._targets,r=n?n.length:0
for(let e=0;e<r;++e)n[e].receive(t)
this._consume&&(e.preventDefault(),e.stopPropagation())}},filter(e){const t=rs(e)
return this.targets().add(t),t},apply(e){const t=rs(null,e)
return this.targets().add(t),t},merge(){const e=rs()
this.targets().add(e)
for(let t=0,n=arguments.length;t<n;++t)arguments[t].targets().add(e)
return e},throttle(e){let t=-1
return this.filter((()=>{const n=Date.now()
return n-t>e?(t=n,1):0}))},debounce(e){const t=rs()
return this.targets().add(rs(null,null,tt(e,(e=>{const n=e.dataflow
t.receive(e),n&&n.run&&n.run()})))),t},between(e,t){let n=!1
return e.targets().add(rs(null,null,(()=>n=!0))),t.targets().add(rs(null,null,(()=>n=!1))),this.filter((()=>n))},detach(){this._filter=de,this._targets=null}}
const is={skip:!0}
function os(e,t,n,r,i,o){const a=nt({},o,is)
let s,l
Ge(n)||(n=et(n)),void 0===r?s=t=>e.touch(n(t)):Ge(r)?(l=new Qa(null,r,i,!1),s=t=>{l.evaluate(t)
const r=n(t),i=l.value
Ha(i)?e.pulse(r,i,o):e.update(r,i,a)}):s=t=>e.update(n(t),r,a),t.apply(s)}function as(e,t,n,r,i,o){if(void 0===r)t.targets().add(n)
else{const a=o||{},s=new Qa(null,function(e,t){return t=Ge(t)?t:et(t),e?function(n,r){const i=t(n,r)
return e.skip()||(e.skip(i!==this.value).value=i),i}:t}(n,r),i,!1)
s.modified(a.force),s.rank=t.rank,t.targets().add(s),n&&(s.skip(!0),s.value=n.value,s.targets().add(n),e.connect(n,[s]))}}const ss={}
function ls(e,t,n){this.dataflow=e,this.stamp=null==t?-1:t,this.add=[],this.rem=[],this.mod=[],this.fields=null,this.encode=n||null}function us(e,t){const n=[]
return Ft(e,t,(e=>n.push(e))),n}function cs(e,t){const n={}
return e.visit(t,(e=>{n[La(e)]=1})),e=>n[La(e)]?null:e}function fs(e,t){return e?(n,r)=>e(n,r)&&t(n,r):t}function ds(e,t,n,r){const i=this,o=n.length
let a=0
this.dataflow=e,this.stamp=t,this.fields=null,this.encode=r||null,this.pulses=n
for(let s=0;s<o;++s){const e=n[s]
if(e.stamp===t){if(e.fields){const t=i.fields||(i.fields={})
for(const n in e.fields)t[n]=1}e.changed(i.ADD)&&(a|=i.ADD),e.changed(i.REM)&&(a|=i.REM),e.changed(i.MOD)&&(a|=i.MOD)}}this.changes=a}function hs(e){return e.error("Dataflow already running. Use runAsync() to chain invocations."),e}ls.prototype={StopPropagation:ss,ADD:1,REM:2,MOD:4,ADD_REM:3,ADD_MOD:5,ALL:7,REFLOW:8,SOURCE:16,NO_SOURCE:32,NO_FIELDS:64,fork(e){return new ls(this.dataflow).init(this,e)},clone(){const e=this.fork(7)
return e.add=e.add.slice(),e.rem=e.rem.slice(),e.mod=e.mod.slice(),e.source&&(e.source=e.source.slice()),e.materialize(23)},addAll(){let e=this
return!e.source||e.add===e.rem||!e.rem.length&&e.source.length===e.add.length||(e=new ls(this.dataflow).init(this),e.add=e.source,e.rem=[]),e},init(e,t){const n=this
return n.stamp=e.stamp,n.encode=e.encode,!e.fields||64&t||(n.fields=e.fields),1&t?(n.addF=e.addF,n.add=e.add):(n.addF=null,n.add=[]),2&t?(n.remF=e.remF,n.rem=e.rem):(n.remF=null,n.rem=[]),4&t?(n.modF=e.modF,n.mod=e.mod):(n.modF=null,n.mod=[]),32&t?(n.srcF=null,n.source=null):(n.srcF=e.srcF,n.source=e.source,e.cleans&&(n.cleans=e.cleans)),n},runAfter(e){this.dataflow.runAfter(e)},changed(e){const t=e||7
return 1&t&&this.add.length||2&t&&this.rem.length||4&t&&this.mod.length},reflow(e){if(e)return this.fork(7).reflow()
const t=this.add.length,n=this.source&&this.source.length
return n&&n!==t&&(this.mod=this.source,t&&this.filter(4,cs(this,1))),this},clean(e){return arguments.length?(this.cleans=!!e,this):this.cleans},modifies(e){const t=this.fields||(this.fields={})
return _e(e)?e.forEach((e=>t[e]=!0)):t[e]=!0,this},modified(e,t){const n=this.fields
return!(!t&&!this.mod.length||!n)&&(arguments.length?_e(e)?e.some((e=>n[e])):n[e]:!!n)},filter(e,t){const n=this
return 1&e&&(n.addF=fs(n.addF,t)),2&e&&(n.remF=fs(n.remF,t)),4&e&&(n.modF=fs(n.modF,t)),16&e&&(n.srcF=fs(n.srcF,t)),n},materialize(e){const t=this
return 1&(e=e||7)&&t.addF&&(t.add=us(t.add,t.addF),t.addF=null),2&e&&t.remF&&(t.rem=us(t.rem,t.remF),t.remF=null),4&e&&t.modF&&(t.mod=us(t.mod,t.modF),t.modF=null),16&e&&t.srcF&&(t.source=t.source.filter(t.srcF),t.srcF=null),t},visit(e,t){const n=this,r=t
if(16&e)return Ft(n.source,n.srcF,r),n
1&e&&Ft(n.add,n.addF,r),2&e&&Ft(n.rem,n.remF,r),4&e&&Ft(n.mod,n.modF,r)
const i=n.source
if(8&e&&i){const e=n.add.length+n.mod.length
e===i.length||Ft(i,e?cs(n,5):n.srcF,r)}return n}},ct(ds,ls,{fork(e){const t=new ls(this.dataflow).init(this,e&this.NO_FIELDS)
return void 0!==e&&(e&t.ADD&&this.visit(t.ADD,(e=>t.add.push(e))),e&t.REM&&this.visit(t.REM,(e=>t.rem.push(e))),e&t.MOD&&this.visit(t.MOD,(e=>t.mod.push(e)))),t},changed(e){return this.changes&e},modified(e){const t=this,n=t.fields
return n&&t.changes&t.MOD?_e(e)?e.some((e=>n[e])):n[e]:0},filter(){oe("MultiPulse does not support filtering.")},materialize(){oe("MultiPulse does not support materialization.")},visit(e,t){const n=this,r=n.pulses,i=r.length
let o=0
if(e&n.SOURCE)for(;o<i;++o)r[o].visit(e,t)
else for(;o<i;++o)r[o].stamp===n.stamp&&r[o].visit(e,t)
return n}})
const ps={skip:!1,force:!1}
function gs(e,t,n,r){let i,o
const a=e[n]
for(;n>t&&(o=n-1>>1,i=e[o],r(a,i)<0);)e[n]=i,n=o
return e[n]=a}function ms(){this.logger(xe()),this.logLevel(me),this._clock=0,this._rank=0,this._locale=sa()
try{this._loader=Na()}catch(e){}this._touched=$a(le),this._input={},this._pulse=null,this._heap=function(e){let t=[]
return{clear:()=>t=[],size:()=>t.length,peek:()=>t[0],push:n=>(t.push(n),gs(t,0,t.length-1,e)),pop:()=>{const n=t.pop()
let r
return t.length?(r=t[0],t[0]=n,function(e,t,n){const r=t,i=e.length,o=e[t]
let a,s=1+(t<<1)
for(;s<i;)a=s+1,a<i&&n(e[s],e[a])>=0&&(s=a),e[t]=e[s],s=1+((t=s)<<1)
e[t]=o,gs(e,r,t,n)}(t,0,e)):r=n,r}}}(((e,t)=>e.qrank-t.qrank)),this._postrun=[]}function ys(e){return function(){return this._log[e].apply(this,arguments)}}function vs(e,t){Qa.call(this,e,null,t)}ms.prototype={stamp(){return this._clock},loader(e){return arguments.length?(this._loader=e,this):this._loader},locale(e){return arguments.length?(this._locale=e,this):this._locale},logger(e){return arguments.length?(this._log=e,this):this._log},error:ys("error"),warn:ys("warn"),info:ys("info"),debug:ys("debug"),logLevel:ys("level"),cleanThreshold:1e4,add:function(e,t,n,r){let i,o=1
return e instanceof Qa?i=e:e&&e.prototype instanceof Qa?i=new e:Ge(e)?i=new Qa(null,e):(o=0,i=new Qa(e,t)),this.rank(i),o&&(r=n,n=t),n&&this.connect(i,i.parameters(n,r)),this.touch(i),i},connect:function(e,t){const n=e.rank,r=t.length
for(let i=0;i<r;++i)if(n<t[i].rank)return void this.rerank(e)},rank:function(e){e.rank=++this._rank},rerank:function(e){const t=[e]
let n,r,i
for(;t.length;)if(this.rank(n=t.pop()),r=n._targets)for(i=r.length;--i>=0;)t.push(n=r[i]),n===e&&oe("Cycle detected in dataflow graph.")},pulse:function(e,t,n){this.touch(e,n||ps)
const r=new ls(this,this._clock+(this._pulse?0:1)),i=e.pulse&&e.pulse.source||[]
return r.target=e,this._input[e.id]=t.pulse(r,i),this},touch:function(e,t){const n=t||ps
return this._pulse?this._enqueue(e):this._touched.add(e),n.skip&&e.skip(!0),this},update:function(e,t,n){const r=n||ps
return(e.set(t)||r.force)&&this.touch(e,r),this},changeset:Ga,ingest:function(e,t,n){return t=this.parse(t,n),this.pulse(e,this.changeset().insert(t))},parse:function(e,t){const n=this.locale()
return Ta(e,t,n.timeParse,n.utcParse)},preload:async function(e,t,n){const r=this,i=r._pending||function(e){let t
const n=new Promise((e=>t=e))
return n.requests=0,n.done=()=>{0==--n.requests&&(e._pending=null,t(e))},e._pending=n}(r)
i.requests+=1
const o=await r.request(t,n)
return r.pulse(e,r.changeset().remove(de).insert(o.data||[])),i.done(),o},request:async function(e,t){const n=this
let r,i=0
try{r=await n.loader().load(e,{context:"dataflow",response:Fa(t&&t.type)})
try{r=n.parse(r,t)}catch(t){i=-2,n.warn("Data ingestion failed",e,t)}}catch(t){i=-1,n.warn("Loading failed",e,t)}return{data:r,status:i}},events:function(e,t,n,r){const i=this,o=rs(n,r),a=function(e){e.dataflow=i
try{o.receive(e)}catch(e){i.error(e)}finally{i.run()}}
let s
s="string"==typeof e&&"undefined"!=typeof document?document.querySelectorAll(e):Ve(e)
const l=s.length
for(let u=0;u<l;++u)s[u].addEventListener(t,a)
return o},on:function(e,t,n,r,i){return(e instanceof Qa?as:os)(this,e,t,n,r,i),this},evaluate:async function(e,t,n){const r=this,i=[]
if(r._pulse)return hs(r)
if(r._pending&&await r._pending,t&&await Pa(r,t),!r._touched.length)return r.debug("Dataflow invoked, but nothing to do."),r
const o=++r._clock
r._pulse=new ls(r,o,e),r._touched.forEach((e=>r._enqueue(e,!0))),r._touched=$a(le)
let a,s,l,u=0
try{for(;r._heap.size()>0;)a=r._heap.pop(),a.rank===a.qrank?(s=a.run(r._getPulse(a,e)),s.then?s=await s:s.async&&(i.push(s.async),s=ss),s!==ss&&a._targets&&a._targets.forEach((e=>r._enqueue(e))),++u):r._enqueue(a,!0)}catch(e){r._heap.clear(),l=e}if(r._input={},r._pulse=null,r.debug(`Pulse ${o}: ${u} operators`),l&&(r._postrun=[],r.error(l)),r._postrun.length){const e=r._postrun.sort(((e,t)=>t.priority-e.priority))
r._postrun=[]
for(let t=0;t<e.length;++t)await Pa(r,e[t].callback)}return n&&await Pa(r,n),i.length&&Promise.all(i).then((e=>r.runAsync(null,(()=>{e.forEach((e=>{try{e(r)}catch(e){r.error(e)}}))})))),r},run:function(e,t,n){return this._pulse?hs(this):(this.evaluate(e,t,n),this)},runAsync:async function(e,t,n){for(;this._running;)await this._running
const r=()=>this._running=null
return(this._running=this.evaluate(e,t,n)).then(r,r),this._running},runAfter:function(e,t,n){if(this._pulse||t)this._postrun.push({priority:n||0,callback:e})
else try{e(this)}catch(e){this.error(e)}},_enqueue:function(e,t){const n=e.stamp<this._clock
n&&(e.stamp=this._clock),(n||t)&&(e.qrank=e.rank,this._heap.push(e))},_getPulse:function(e,t){const n=e.source,r=this._clock
return n&&_e(n)?new ds(this,r,n.map((e=>e.pulse)),t):this._input[e.id]||function(e,t){return t&&t.stamp===e.stamp?t:(e=e.fork(),t&&t!==ss&&(e.source=t.source),e)}(this._pulse,n&&n.pulse)}},ct(vs,Qa,{run(e){if(e.stamp<this.stamp)return e.StopPropagation
let t
return this.skip()?this.skip(!1):t=this.evaluate(e),t=t||e,t.then?t=t.then((e=>this.pulse=e)):t!==e.StopPropagation&&(this.pulse=t),t},evaluate(e){const t=this.marshall(e.stamp),n=this.transform(t,e)
return t.clear(),n},transform(){}})
const bs={}
function xs(e){const t=_s(e)
return t&&t.Definition||null}function _s(e){return e=e&&e.toLowerCase(),at(bs,e)?bs[e]:null}function ws(e,t){let n
if(void 0===t)for(const r of e)null!=r&&(n<r||void 0===n&&r>=r)&&(n=r)
else{let r=-1
for(let i of e)null!=(i=t(i,++r,e))&&(n<i||void 0===n&&i>=i)&&(n=i)}return n}function Os(e,t){let n
if(void 0===t)for(const r of e)null!=r&&(n>r||void 0===n&&r>=r)&&(n=r)
else{let r=-1
for(let i of e)null!=(i=t(i,++r,e))&&(n>i||void 0===n&&i>=i)&&(n=i)}return n}function ks(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dr
if(e===dr)return Es
if("function"!=typeof e)throw new TypeError("compare is not a function")
return(t,n)=>{const r=e(t,n)
return r||0===r?r:(0===e(n,n))-(0===e(t,t))}}function Es(e,t){return(null==e||!(e>=e))-(null==t||!(t>=t))||(e<t?-1:e>t?1:0)}function As(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length-1,i=arguments.length>4?arguments[4]:void 0
for(i=void 0===i?Es:ks(i);r>n;){if(r-n>600){const o=r-n+1,a=t-n+1,s=Math.log(o),l=.5*Math.exp(2*s/3),u=.5*Math.sqrt(s*l*(o-l)/o)*(a-o/2<0?-1:1)
As(e,t,Math.max(n,Math.floor(t-a*l/o+u)),Math.min(r,Math.floor(t+(o-a)*l/o+u)),i)}const o=e[t]
let a=n,s=r
for(Ss(e,n,t),i(e[r],o)>0&&Ss(e,n,r);a<s;){for(Ss(e,a,s),++a,--s;i(e[a],o)<0;)++a
for(;i(e[s],o)>0;)--s}0===i(e[n],o)?Ss(e,n,s):(++s,Ss(e,s,r)),s<=t&&(n=s+1),t<=s&&(r=s-1)}return e}function Ss(e,t,n){const r=e[t]
e[t]=e[n],e[n]=r}function Ds(e){return null===e?NaN:+e}function Cs(e,t,n){if(e=Float64Array.from(function*(e,t){if(void 0===t)for(let n of e)null!=n&&(n=+n)>=n&&(yield n)
else{let n=-1
for(let r of e)null!=(r=t(r,++n,e))&&(r=+r)>=r&&(yield r)}}(e,n)),r=e.length){if((t=+t)<=0||r<2)return Os(e)
if(t>=1)return ws(e)
var r,i=(r-1)*t,o=Math.floor(i),a=ws(As(e,o).subarray(0,o+1))
return a+(Os(e.subarray(o+1))-a)*(i-o)}}function Ms(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ds
if(r=e.length){if((t=+t)<=0||r<2)return+n(e[0],0,e)
if(t>=1)return+n(e[r-1],r-1,e)
var r,i=(r-1)*t,o=Math.floor(i),a=+n(e[o],o,e),s=+n(e[o+1],o+1,e)
return a+(s-a)*(i-o)}}function js(e,t){return Cs(e,.5,t)}function*Fs(e,t){if(null==t)for(let n of e)null!=n&&""!==n&&(n=+n)>=n&&(yield n)
else{let n=-1
for(let r of e)r=t(r,++n,e),null!=r&&""!==r&&(r=+r)>=r&&(yield r)}}function Ts(e,t,n){const r=Float64Array.from(Fs(e,n))
return r.sort(dr),t.map((e=>Ms(r,e)))}function Ns(e,t){return Ts(e,[.25,.5,.75],t)}function $s(e,t){const n=e.length,r=function(e,t){const n=function(e,t){let n,r=0,i=0,o=0
if(void 0===t)for(let a of e)null!=a&&(a=+a)>=a&&(n=a-i,i+=n/++r,o+=n*(a-i))
else{let a=-1
for(let s of e)null!=(s=t(s,++a,e))&&(s=+s)>=s&&(n=s-i,i+=n/++r,o+=n*(s-i))}if(r>1)return o/(r-1)}(e,t)
return n?Math.sqrt(n):n}(e,t),i=Ns(e,t),o=(i[2]-i[0])/1.34
return 1.06*(Math.min(r,o)||r||Math.abs(i[0])||1)*Math.pow(n,-.2)}function Ps(e){const t=e.maxbins||20,n=e.base||10,r=Math.log(n),i=e.divide||[5,2]
let o,a,s,l,u,c,f=e.extent[0],d=e.extent[1]
const h=e.span||d-f||Math.abs(f)||1
if(e.step)o=e.step
else if(e.steps){for(l=h/t,u=0,c=e.steps.length;u<c&&e.steps[u]<l;++u);o=e.steps[Math.max(0,u-1)]}else{for(a=Math.ceil(Math.log(t)/r),s=e.minstep||0,o=Math.max(s,Math.pow(n,Math.round(Math.log(h)/r)-a));Math.ceil(h/o)>t;)o*=n
for(u=0,c=i.length;u<c;++u)l=o/i[u],l>=s&&h/l<=t&&(o=l)}l=Math.log(o)
const p=l>=0?0:1+~~(-l/r),g=Math.pow(n,-p-1)
return(e.nice||void 0===e.nice)&&(l=Math.floor(f/o+g)*o,f=f<l?l-o:l,d=Math.ceil(d/o)*o),{start:f,stop:d===f?f+o:d,step:o}}var zs=Math.random
function Is(e){zs=e}function Rs(e,t,n,r){if(!e.length)return[void 0,void 0]
const i=Float64Array.from(Fs(e,r)),o=i.length,a=t
let s,l,u,c
for(u=0,c=Array(a);u<a;++u){for(s=0,l=0;l<o;++l)s+=i[~~(zs()*o)]
c[u]=s/o}return c.sort(dr),[Cs(c,n/2),Cs(c,1-n/2)]}function Ls(e,t,n,r){r=r||(e=>e)
const i=e.length,o=new Float64Array(i)
let a,s=0,l=1,u=r(e[0]),c=u,f=u+t
for(;l<i;++l){if(a=r(e[l]),a>=f){for(c=(u+c)/2;s<l;++s)o[s]=c
f=a+t,u=a}c=a}for(c=(u+c)/2;s<l;++s)o[s]=c
return n?function(e,t){const n=e.length
let r,i,o=0,a=1
for(;e[o]===e[a];)++a
for(;a<n;){for(r=a+1;e[a]===e[r];)++r
if(e[a]-e[a-1]<t){for(i=a+(o+r-a-a>>1);i<a;)e[i++]=e[a]
for(;i>a;)e[i--]=e[o]}o=a,a=r}return e}(o,t+t/4):o}function Bs(e){return function(){return(e=(1103515245*e+12345)%2147483647)/2147483647}}function Us(e,t){let n,r,i
null==t&&(t=e,e=0)
const o={min(e){return arguments.length?(n=e||0,i=r-n,o):n},max(e){return arguments.length?(r=e||0,i=r-n,o):r},sample:()=>n+Math.floor(i*zs()),pdf:e=>e===Math.floor(e)&&e>=n&&e<r?1/i:0,cdf(e){const t=Math.floor(e)
return t<n?0:t>=r?1:(t-n+1)/i},icdf:e=>e>=0&&e<=1?n-1+Math.floor(e*i):NaN}
return o.min(e).max(t)}const qs=Math.sqrt(2*Math.PI),Zs=Math.SQRT2
let Ws=NaN
function Vs(e,t){e=e||0,t=null==t?1:t
let n,r,i=0,o=0
if(Ws==Ws)i=Ws,Ws=NaN
else{do{i=2*zs()-1,o=2*zs()-1,n=i*i+o*o}while(0===n||n>1)
r=Math.sqrt(-2*Math.log(n)/n),i*=r,Ws=o*r}return e+i*t}function Hs(e,t,n){const r=(e-(t||0))/(n=null==n?1:n)
return Math.exp(-.5*r*r)/(n*qs)}function Gs(e,t,n){const r=(e-(t=t||0))/(n=null==n?1:n),i=Math.abs(r)
let o
if(i>37)o=0
else{const e=Math.exp(-i*i/2)
let t
i<7.07106781186547?(t=.0352624965998911*i+.700383064443688,t=t*i+6.37396220353165,t=t*i+33.912866078383,t=t*i+112.079291497871,t=t*i+221.213596169931,t=t*i+220.206867912376,o=e*t,t=.0883883476483184*i+1.75566716318264,t=t*i+16.064177579207,t=t*i+86.7807322029461,t=t*i+296.564248779674,t=t*i+637.333633378831,t=t*i+793.826512519948,t=t*i+440.413735824752,o/=t):(t=i+.65,t=i+4/t,t=i+3/t,t=i+2/t,t=i+1/t,o=e/t/2.506628274631)}return r>0?1-o:o}function Ys(e,t,n){return e<0||e>1?NaN:(t||0)+(null==n?1:n)*Zs*function(e){let t,n=-Math.log((1-e)*(1+e))
return n<6.25?(n-=3.125,t=-364441206401782e-35,t=t*n-16850591381820166e-35,t=128584807152564e-32+t*n,t=11157877678025181e-33+t*n,t=t*n-1333171662854621e-31,t=20972767875968562e-33+t*n,t=6637638134358324e-30+t*n,t=t*n-4054566272975207e-29,t=t*n-8151934197605472e-29,t=26335093153082323e-28+t*n,t=t*n-12975133253453532e-27,t=t*n-5415412054294628e-26,t=1.0512122733215323e-9+t*n,t=t*n-4.112633980346984e-9,t=t*n-2.9070369957882005e-8,t=4.2347877827932404e-7+t*n,t=t*n-13654692000834679e-22,t=t*n-13882523362786469e-21,t=.00018673420803405714+t*n,t=t*n-.000740702534166267,t=t*n-.006033670871430149,t=.24015818242558962+t*n,t=1.6536545626831027+t*n):n<16?(n=Math.sqrt(n)-3.25,t=2.2137376921775787e-9,t=9.075656193888539e-8+t*n,t=t*n-2.7517406297064545e-7,t=1.8239629214389228e-8+t*n,t=15027403968909828e-22+t*n,t=t*n-4013867526981546e-21,t=29234449089955446e-22+t*n,t=12475304481671779e-21+t*n,t=t*n-47318229009055734e-21,t=6828485145957318e-20+t*n,t=24031110387097894e-21+t*n,t=t*n-.0003550375203628475,t=.0009532893797373805+t*n,t=t*n-.0016882755560235047,t=.002491442096107851+t*n,t=t*n-.003751208507569241,t=.005370914553590064+t*n,t=1.0052589676941592+t*n,t=3.0838856104922208+t*n):Number.isFinite(n)?(n=Math.sqrt(n)-5,t=-27109920616438573e-27,t=t*n-2.555641816996525e-10,t=1.5076572693500548e-9+t*n,t=t*n-3.789465440126737e-9,t=7.61570120807834e-9+t*n,t=t*n-1.496002662714924e-8,t=2.914795345090108e-8+t*n,t=t*n-6.771199775845234e-8,t=2.2900482228026655e-7+t*n,t=t*n-9.9298272942317e-7,t=4526062597223154e-21+t*n,t=t*n-1968177810553167e-20,t=7599527703001776e-20+t*n,t=t*n-.00021503011930044477,t=t*n-.00013871931833623122,t=1.0103004648645344+t*n,t=4.849906401408584+t*n):t=1/0,t*e}(2*e-1)}function Xs(e,t){let n,r
const i={mean(e){return arguments.length?(n=e||0,i):n},stdev(e){return arguments.length?(r=null==e?1:e,i):r},sample:()=>Vs(n,r),pdf:e=>Hs(e,n,r),cdf:e=>Gs(e,n,r),icdf:e=>Ys(e,n,r)}
return i.mean(e).stdev(t)}function Js(e,t){const n=Xs()
let r=0
const i={data(n){return arguments.length?(e=n,r=n?n.length:0,i.bandwidth(t)):e},bandwidth(n){return arguments.length?(!(t=n)&&e&&(t=$s(e)),i):t},sample:()=>e[~~(zs()*r)]+t*n.sample(),pdf(i){let o=0,a=0
for(;a<r;++a)o+=n.pdf((i-e[a])/t)
return o/t/r},cdf(i){let o=0,a=0
for(;a<r;++a)o+=n.cdf((i-e[a])/t)
return o/r},icdf(){throw Error("KDE icdf not supported.")}}
return i.data(e)}function Ks(e,t){return e=e||0,t=null==t?1:t,Math.exp(e+Vs()*t)}function Qs(e,t,n){if(e<=0)return 0
t=t||0,n=null==n?1:n
const r=(Math.log(e)-t)/n
return Math.exp(-.5*r*r)/(n*qs*e)}function el(e,t,n){return Gs(Math.log(e),t,n)}function tl(e,t,n){return Math.exp(Ys(e,t,n))}function nl(e,t){let n,r
const i={mean(e){return arguments.length?(n=e||0,i):n},stdev(e){return arguments.length?(r=null==e?1:e,i):r},sample:()=>Ks(n,r),pdf:e=>Qs(e,n,r),cdf:e=>el(e,n,r),icdf:e=>tl(e,n,r)}
return i.mean(e).stdev(t)}function rl(e,t){let n,r=0
const i={weights(e){return arguments.length?(n=function(e){const t=[]
let n,i=0
for(n=0;n<r;++n)i+=t[n]=null==e[n]?1:+e[n]
for(n=0;n<r;++n)t[n]/=i
return t}(t=e||[]),i):t},distributions(n){return arguments.length?(n?(r=n.length,e=n):(r=0,e=[]),i.weights(t)):e},sample(){const t=zs()
let i=e[r-1],o=n[0],a=0
for(;a<r-1;o+=n[++a])if(t<o){i=e[a]
break}return i.sample()},pdf(t){let i=0,o=0
for(;o<r;++o)i+=n[o]*e[o].pdf(t)
return i},cdf(t){let i=0,o=0
for(;o<r;++o)i+=n[o]*e[o].cdf(t)
return i},icdf(){throw Error("Mixture icdf not supported.")}}
return i.distributions(e).weights(t)}function il(e,t){return null==t&&(t=null==e?1:e,e=0),e+(t-e)*zs()}function ol(e,t,n){return null==n&&(n=null==t?1:t,t=0),e>=t&&e<=n?1/(n-t):0}function al(e,t,n){return null==n&&(n=null==t?1:t,t=0),e<t?0:e>n?1:(e-t)/(n-t)}function sl(e,t,n){return null==n&&(n=null==t?1:t,t=0),e>=0&&e<=1?t+e*(n-t):NaN}function ll(e,t){let n,r
const i={min(e){return arguments.length?(n=e||0,i):n},max(e){return arguments.length?(r=null==e?1:e,i):r},sample:()=>il(n,r),pdf:e=>ol(e,n,r),cdf:e=>al(e,n,r),icdf:e=>sl(e,n,r)}
return null==t&&(t=null==e?1:e,e=0),i.min(e).max(t)}function ul(e,t,n,r){const i=r-e*e,o=Math.abs(i)<1e-24?0:(n-e*t)/i
return[t-o*e,o]}function cl(e,t,n,r){e=e.filter((e=>{let r=t(e),i=n(e)
return null!=r&&(r=+r)>=r&&null!=i&&(i=+i)>=i})),r&&e.sort(((e,n)=>t(e)-t(n)))
const i=e.length,o=new Float64Array(i),a=new Float64Array(i)
let s,l,u,c=0,f=0,d=0
for(u of e)o[c]=s=+t(u),a[c]=l=+n(u),++c,f+=(s-f)/c,d+=(l-d)/c
for(c=0;c<i;++c)o[c]-=f,a[c]-=d
return[o,a,f,d]}function fl(e,t,n,r){let i,o,a=-1
for(const s of e)i=t(s),o=n(s),null!=i&&(i=+i)>=i&&null!=o&&(o=+o)>=o&&r(i,o,++a)}function dl(e,t,n,r,i){let o=0,a=0
return fl(e,t,n,((e,t)=>{const n=t-i(e),s=t-r
o+=n*n,a+=s*s})),1-o/a}function hl(e,t,n){let r=0,i=0,o=0,a=0,s=0
fl(e,t,n,((e,t)=>{++s,r+=(e-r)/s,i+=(t-i)/s,o+=(e*t-o)/s,a+=(e*e-a)/s}))
const l=ul(r,i,o,a),u=e=>l[0]+l[1]*e
return{coef:l,predict:u,rSquared:dl(e,t,n,i,u)}}function pl(e,t,n){let r=0,i=0,o=0,a=0,s=0
fl(e,t,n,((e,t)=>{++s,e=Math.log(e),r+=(e-r)/s,i+=(t-i)/s,o+=(e*t-o)/s,a+=(e*e-a)/s}))
const l=ul(r,i,o,a),u=e=>l[0]+l[1]*Math.log(e)
return{coef:l,predict:u,rSquared:dl(e,t,n,i,u)}}function gl(e,t,n){const[r,i,o,a]=cl(e,t,n)
let s,l,u,c=0,f=0,d=0,h=0,p=0
fl(e,t,n,((e,t)=>{s=r[p++],l=Math.log(t),u=s*t,c+=(t*l-c)/p,f+=(u-f)/p,d+=(u*l-d)/p,h+=(s*u-h)/p}))
const[g,m]=ul(f/a,c/a,d/a,h/a),y=e=>Math.exp(g+m*(e-o))
return{coef:[Math.exp(g-m*o),m],predict:y,rSquared:dl(e,t,n,a,y)}}function ml(e,t,n){let r=0,i=0,o=0,a=0,s=0,l=0
fl(e,t,n,((e,t)=>{const n=Math.log(e),u=Math.log(t);++l,r+=(n-r)/l,i+=(u-i)/l,o+=(n*u-o)/l,a+=(n*n-a)/l,s+=(t-s)/l}))
const u=ul(r,i,o,a),c=e=>u[0]*Math.pow(e,u[1])
return u[0]=Math.exp(u[0]),{coef:u,predict:c,rSquared:dl(e,t,n,s,c)}}function yl(e,t,n){const[r,i,o,a]=cl(e,t,n),s=r.length
let l,u,c,f,d=0,h=0,p=0,g=0,m=0
for(l=0;l<s;)u=r[l],c=i[l++],f=u*u,d+=(f-d)/l,h+=(f*u-h)/l,p+=(f*f-p)/l,g+=(u*c-g)/l,m+=(f*c-m)/l
const y=p-d*d,v=d*y-h*h,b=(m*d-g*h)/v,x=(g*y-m*h)/v,_=-b*d,w=e=>b*(e-=o)*e+x*e+_+a
return{coef:[_-x*o+b*o*o+a,x-2*b*o,b],predict:w,rSquared:dl(e,t,n,a,w)}}function vl(e,t,n,r){if(1===r)return hl(e,t,n)
if(2===r)return yl(e,t,n)
const[i,o,a,s]=cl(e,t,n),l=i.length,u=[],c=[],f=r+1
let d,h,p,g,m
for(d=0;d<f;++d){for(p=0,g=0;p<l;++p)g+=Math.pow(i[p],d)*o[p]
for(u.push(g),m=new Float64Array(f),h=0;h<f;++h){for(p=0,g=0;p<l;++p)g+=Math.pow(i[p],d+h)
m[h]=g}c.push(m)}c.push(u)
const y=function(e){const t=e.length-1,n=[]
let r,i,o,a,s
for(r=0;r<t;++r){for(a=r,i=r+1;i<t;++i)Math.abs(e[r][i])>Math.abs(e[r][a])&&(a=i)
for(o=r;o<t+1;++o)s=e[o][r],e[o][r]=e[o][a],e[o][a]=s
for(i=r+1;i<t;++i)for(o=t;o>=r;o--)e[o][i]-=e[o][r]*e[r][i]/e[r][r]}for(i=t-1;i>=0;--i){for(s=0,o=i+1;o<t;++o)s+=e[o][i]*n[o]
n[i]=(e[t][i]-s)/e[i][i]}return n}(c),v=e=>{e-=a
let t=s+y[0]+y[1]*e+y[2]*e*e
for(d=3;d<f;++d)t+=y[d]*Math.pow(e,d)
return t}
return{coef:bl(f,y,-a,s),predict:v,rSquared:dl(e,t,n,s,v)}}function bl(e,t,n,r){const i=Array(e)
let o,a,s,l
for(o=0;o<e;++o)i[o]=0
for(o=e-1;o>=0;--o)for(s=t[o],l=1,i[o]+=s,a=1;a<=o;++a)l*=(o+1-a)/a,i[o-a]+=s*Math.pow(n,a)*l
return i[0]+=r,i}function xl(e,t,n,r){const[i,o,a,s]=cl(e,t,n,!0),l=i.length,u=Math.max(2,~~(r*l)),c=new Float64Array(l),f=new Float64Array(l),d=new Float64Array(l).fill(1)
for(let h=-1;++h<=2;){const e=[0,u-1]
for(let n=0;n<l;++n){const t=i[n],r=e[0],a=e[1],s=t-i[r]>i[a]-t?r:a
let l=0,u=0,h=0,p=0,g=0
const m=1/Math.abs(i[s]-t||1)
for(let e=r;e<=a;++e){const n=i[e],r=o[e],a=_l(Math.abs(t-n)*m)*d[e],s=n*a
l+=a,u+=s,h+=r*a,p+=r*s,g+=n*s}const[y,v]=ul(u/l,h/l,p/l,g/l)
c[n]=y+v*t,f[n]=Math.abs(o[n]-c[n]),wl(i,n+1,e)}if(2===h)break
const t=js(f)
if(Math.abs(t)<1e-12)break
for(let n,r,i=0;i<l;++i)n=f[i]/(6*t),d[i]=n>=1?1e-12:(r=1-n*n)*r}return function(e,t,n,r){const i=e.length,o=[]
let a,s=0,l=0,u=[]
for(;s<i;++s)a=e[s]+n,u[0]===a?u[1]+=(t[s]-u[1])/++l:(l=0,u[1]+=r,u=[a,t[s]],o.push(u))
return u[1]+=r,o}(i,c,a,s)}function _l(e){return(e=1-e*e*e)*e*e}function wl(e,t,n){const r=e[t]
let i=n[0],o=n[1]+1
if(!(o>=e.length))for(;t>i&&e[o]-r<=r-e[i];)n[0]=++i,n[1]=o,++o}const Ol=.5*Math.PI/180
function kl(e,t,n,r){n=n||25,r=Math.max(n,r||200)
const i=t=>[t,e(t)],o=t[0],a=t[1],s=a-o,l=s/r,u=[i(o)],c=[]
if(n===r){for(let e=1;e<r;++e)u.push(i(o+e/n*s))
return u.push(i(a)),u}c.push(i(a))
for(let g=n;--g>0;)c.push(i(o+g/n*s))
let f=u[0],d=c[c.length-1]
const h=1/s,p=function(e,t){let n=e,r=e
const i=t.length
for(let o=0;o<i;++o){const e=t[o][1]
e<n&&(n=e),e>r&&(r=e)}return 1/(r-n)}(f[1],c)
for(;d;){const e=i((f[0]+d[0])/2)
e[0]-f[0]>=l&&El(f,e,d,h,p)>Ol?c.push(e):(f=d,u.push(d),c.pop()),d=c[c.length-1]}return u}function El(e,t,n,r,i){const o=Math.atan2(i*(n[1]-e[1]),r*(n[0]-e[0])),a=Math.atan2(i*(t[1]-e[1]),r*(t[0]-e[0]))
return Math.abs(o-a)}function Al(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n
for(var r=-1,i=0|Math.max(0,Math.ceil((t-e)/n)),o=new Array(i);++r<i;)o[r]=e+r*n
return o}function Sl(e){return e&&e.length?1===e.length?e[0]:(t=e,e=>{const n=t.length
let r=1,i=String(t[0](e))
for(;r<n;++r)i+="|"+t[r](e)
return i}):function(){return""}
var t}function Dl(e,t,n){return n||e+(t?"_"+t:"")}const Cl=()=>{},Ml={init:Cl,add:Cl,rem:Cl,idx:0},jl={values:{init:e=>e.cell.store=!0,value:e=>e.cell.data.values(),idx:-1},count:{value:e=>e.cell.num},__count__:{value:e=>e.missing+e.valid},missing:{value:e=>e.missing},valid:{value:e=>e.valid},sum:{init:e=>e.sum=0,value:e=>e.sum,add:(e,t)=>e.sum+=+t,rem:(e,t)=>e.sum-=t},product:{init:e=>e.product=1,value:e=>e.valid?e.product:void 0,add:(e,t)=>e.product*=t,rem:(e,t)=>e.product/=t},mean:{init:e=>e.mean=0,value:e=>e.valid?e.mean:void 0,add:(e,t)=>(e.mean_d=t-e.mean,e.mean+=e.mean_d/e.valid),rem:(e,t)=>(e.mean_d=t-e.mean,e.mean-=e.valid?e.mean_d/e.valid:e.mean)},average:{value:e=>e.valid?e.mean:void 0,req:["mean"],idx:1},variance:{init:e=>e.dev=0,value:e=>e.valid>1?e.dev/(e.valid-1):void 0,add:(e,t)=>e.dev+=e.mean_d*(t-e.mean),rem:(e,t)=>e.dev-=e.mean_d*(t-e.mean),req:["mean"],idx:1},variancep:{value:e=>e.valid>1?e.dev/e.valid:void 0,req:["variance"],idx:2},stdev:{value:e=>e.valid>1?Math.sqrt(e.dev/(e.valid-1)):void 0,req:["variance"],idx:2},stdevp:{value:e=>e.valid>1?Math.sqrt(e.dev/e.valid):void 0,req:["variance"],idx:2},stderr:{value:e=>e.valid>1?Math.sqrt(e.dev/(e.valid*(e.valid-1))):void 0,req:["variance"],idx:2},distinct:{value:e=>e.cell.data.distinct(e.get),req:["values"],idx:3},ci0:{value:e=>e.cell.data.ci0(e.get),req:["values"],idx:3},ci1:{value:e=>e.cell.data.ci1(e.get),req:["values"],idx:3},median:{value:e=>e.cell.data.q2(e.get),req:["values"],idx:3},q1:{value:e=>e.cell.data.q1(e.get),req:["values"],idx:3},q3:{value:e=>e.cell.data.q3(e.get),req:["values"],idx:3},min:{init:e=>e.min=void 0,value:e=>e.min=Number.isNaN(e.min)?e.cell.data.min(e.get):e.min,add:(e,t)=>{(t<e.min||void 0===e.min)&&(e.min=t)},rem:(e,t)=>{t<=e.min&&(e.min=NaN)},req:["values"],idx:4},max:{init:e=>e.max=void 0,value:e=>e.max=Number.isNaN(e.max)?e.cell.data.max(e.get):e.max,add:(e,t)=>{(t>e.max||void 0===e.max)&&(e.max=t)},rem:(e,t)=>{t>=e.max&&(e.max=NaN)},req:["values"],idx:4},argmin:{init:e=>e.argmin=void 0,value:e=>e.argmin||e.cell.data.argmin(e.get),add:(e,t,n)=>{t<e.min&&(e.argmin=n)},rem:(e,t)=>{t<=e.min&&(e.argmin=void 0)},req:["min","values"],idx:3},argmax:{init:e=>e.argmax=void 0,value:e=>e.argmax||e.cell.data.argmax(e.get),add:(e,t,n)=>{t>e.max&&(e.argmax=n)},rem:(e,t)=>{t>=e.max&&(e.argmax=void 0)},req:["max","values"],idx:3}},Fl=Object.keys(jl)
function Tl(e,t){return jl[e](t)}function Nl(e,t){return e.idx-t.idx}function $l(){this.valid=0,this.missing=0,this._ops.forEach((e=>e.init(this)))}function Pl(e,t){null!=e&&""!==e?e==e&&(++this.valid,this._ops.forEach((n=>n.add(this,e,t)))):++this.missing}function zl(e,t){null!=e&&""!==e?e==e&&(--this.valid,this._ops.forEach((n=>n.rem(this,e,t)))):--this.missing}function Il(e){return this._out.forEach((t=>e[t.out]=t.value(this))),e}function Rl(e,t){const n=t||ue,r=function(e){const t={}
e.forEach((e=>t[e.name]=e))
const n=e=>{e.req&&e.req.forEach((e=>{t[e]||n(t[e]=jl[e]())}))}
return e.forEach(n),Object.values(t).sort(Nl)}(e),i=e.slice().sort(Nl)
function o(e){this._ops=r,this._out=i,this.cell=e,this.init()}return o.prototype.init=$l,o.prototype.add=Pl,o.prototype.rem=zl,o.prototype.set=Il,o.prototype.get=n,o.fields=e.map((e=>e.out)),o}function Ll(e){this._key=e?se(e):La,this.reset()}Fl.forEach((e=>{jl[e]=function(e,t){return n=>nt({name:e,out:n||e},Ml,t)}(e,jl[e])}))
const Bl=Ll.prototype
function Ul(e){vs.call(this,null,e),this._adds=[],this._mods=[],this._alen=0,this._mlen=0,this._drop=!0,this._cross=!1,this._dims=[],this._dnames=[],this._measures=[],this._countOnly=!1,this._counts=null,this._prev=null,this._inputs=null,this._outputs=null}function ql(e){vs.call(this,null,e)}function Zl(e,t,n){const r=e
let i=t||[],o=n||[],a={},s=0
return{add:e=>o.push(e),remove:e=>a[r(e)]=++s,size:()=>i.length,data:(e,t)=>(s&&(i=i.filter((e=>!a[r(e)])),a={},s=0),t&&e&&i.sort(e),o.length&&(i=e?_t(e,i,o.sort(e)):i.concat(o),o=[]),i)}}function Wl(e){vs.call(this,[],e)}function Vl(e){Qa.call(this,null,Hl,e)}function Hl(e){return this.value&&!e.modified()?this.value:Ye(e.fields,e.orders)}function Gl(e){vs.call(this,null,e)}function Yl(e){vs.call(this,null,e)}Bl.reset=function(){this._add=[],this._rem=[],this._ext=null,this._get=null,this._q=null},Bl.add=function(e){this._add.push(e)},Bl.rem=function(e){this._rem.push(e)},Bl.values=function(){if(this._get=null,0===this._rem.length)return this._add
const e=this._add,t=this._rem,n=this._key,r=e.length,i=t.length,o=Array(r-i),a={}
let s,l,u
for(s=0;s<i;++s)a[n(t[s])]=1
for(s=0,l=0;s<r;++s)a[n(u=e[s])]?a[n(u)]=0:o[l++]=u
return this._rem=[],this._add=o},Bl.distinct=function(e){const t=this.values(),n={}
let r,i=t.length,o=0
for(;--i>=0;)r=e(t[i])+"",at(n,r)||(n[r]=1,++o)
return o},Bl.extent=function(e){if(this._get!==e||!this._ext){const t=this.values(),n=it(t,e)
this._ext=[t[n[0]],t[n[1]]],this._get=e}return this._ext},Bl.argmin=function(e){return this.extent(e)[0]||{}},Bl.argmax=function(e){return this.extent(e)[1]||{}},Bl.min=function(e){const t=this.extent(e)[0]
return null!=t?e(t):void 0},Bl.max=function(e){const t=this.extent(e)[1]
return null!=t?e(t):void 0},Bl.quartile=function(e){return this._get===e&&this._q||(this._q=Ns(this.values(),e),this._get=e),this._q},Bl.q1=function(e){return this.quartile(e)[0]},Bl.q2=function(e){return this.quartile(e)[1]},Bl.q3=function(e){return this.quartile(e)[2]},Bl.ci=function(e){return this._get===e&&this._ci||(this._ci=Rs(this.values(),1e3,.05,e),this._get=e),this._ci},Bl.ci0=function(e){return this.ci(e)[0]},Bl.ci1=function(e){return this.ci(e)[1]},Ul.Definition={type:"Aggregate",metadata:{generates:!0,changes:!0},params:[{name:"groupby",type:"field",array:!0},{name:"ops",type:"enum",array:!0,values:Fl},{name:"fields",type:"field",null:!0,array:!0},{name:"as",type:"string",null:!0,array:!0},{name:"drop",type:"boolean",default:!0},{name:"cross",type:"boolean",default:!1},{name:"key",type:"field"}]},ct(Ul,vs,{transform(e,t){const n=this,r=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=e.modified()
return n.stamp=r.stamp,n.value&&(i||t.modified(n._inputs,!0))?(n._prev=n.value,n.value=i?n.init(e):{},t.visit(t.SOURCE,(e=>n.add(e)))):(n.value=n.value||n.init(e),t.visit(t.REM,(e=>n.rem(e))),t.visit(t.ADD,(e=>n.add(e)))),r.modifies(n._outputs),n._drop=!1!==e.drop,e.cross&&n._dims.length>1&&(n._drop=!1,n.cross()),t.clean()&&n._drop&&r.clean(!0).runAfter((()=>this.clean())),n.changes(r)},cross(){const e=this,t=e.value,n=e._dnames,r=n.map((()=>({}))),i=n.length
function o(e){let t,o,a,s
for(t in e)for(a=e[t].tuple,o=0;o<i;++o)r[o][s=a[n[o]]]=s}o(e._prev),o(t),function o(a,s,l){const u=n[l],c=r[l++]
for(const n in c){const r=a?a+"|"+n:n
s[u]=c[n],l<i?o(r,s,l):t[r]||e.cell(r,s)}}("",{},0)},init(e){const t=this._inputs=[],n=this._outputs=[],r={}
function i(e){const n=Ve(te(e)),i=n.length
let o,a=0
for(;a<i;++a)r[o=n[a]]||(r[o]=1,t.push(o))}this._dims=Ve(e.groupby),this._dnames=this._dims.map((e=>{const t=ee(e)
return i(e),n.push(t),t})),this.cellkey=e.key?e.key:Sl(this._dims),this._countOnly=!0,this._counts=[],this._measures=[]
const o=e.fields||[null],a=e.ops||["count"],s=e.as||[],l=o.length,u={}
let c,f,d,h,p,g
for(l!==a.length&&oe("Unmatched number of fields and aggregate ops."),g=0;g<l;++g)c=o[g],f=a[g],null==c&&"count"!==f&&oe("Null aggregate field specified."),h=ee(c),p=Dl(f,h,s[g]),n.push(p),"count"!==f?(d=u[h],d||(i(c),d=u[h]=[],d.field=c,this._measures.push(d)),"count"!==f&&(this._countOnly=!1),d.push(Tl(f,p))):this._counts.push(p)
return this._measures=this._measures.map((e=>Rl(e,e.field))),{}},cellkey:Sl(),cell(e,t){let n=this.value[e]
return n?0===n.num&&this._drop&&n.stamp<this.stamp?(n.stamp=this.stamp,this._adds[this._alen++]=n):n.stamp<this.stamp&&(n.stamp=this.stamp,this._mods[this._mlen++]=n):(n=this.value[e]=this.newcell(e,t),this._adds[this._alen++]=n),n},newcell(e,t){const n={key:e,num:0,agg:null,tuple:this.newtuple(t,this._prev&&this._prev[e]),stamp:this.stamp,store:!1}
if(!this._countOnly){const e=this._measures,t=e.length
n.agg=Array(t)
for(let r=0;r<t;++r)n.agg[r]=new e[r](n)}return n.store&&(n.data=new Ll),n},newtuple(e,t){const n=this._dnames,r=this._dims,i=r.length,o={}
for(let a=0;a<i;++a)o[n[a]]=r[a](e)
return t?Wa(t.tuple,o):Ua(o)},clean(){const e=this.value
for(const t in e)0===e[t].num&&delete e[t]},add(e){const t=this.cellkey(e),n=this.cell(t,e)
if(n.num+=1,this._countOnly)return
n.store&&n.data.add(e)
const r=n.agg
for(let i=0,o=r.length;i<o;++i)r[i].add(r[i].get(e),e)},rem(e){const t=this.cellkey(e),n=this.cell(t,e)
if(n.num-=1,this._countOnly)return
n.store&&n.data.rem(e)
const r=n.agg
for(let i=0,o=r.length;i<o;++i)r[i].rem(r[i].get(e),e)},celltuple(e){const t=e.tuple,n=this._counts
e.store&&e.data.values()
for(let r=0,i=n.length;r<i;++r)t[n[r]]=e.num
if(!this._countOnly){const n=e.agg
for(let e=0,r=n.length;e<r;++e)n[e].set(t)}return t},changes(e){const t=this._adds,n=this._mods,r=this._prev,i=this._drop,o=e.add,a=e.rem,s=e.mod
let l,u,c,f
if(r)for(u in r)l=r[u],i&&!l.num||a.push(l.tuple)
for(c=0,f=this._alen;c<f;++c)o.push(this.celltuple(t[c])),t[c]=null
for(c=0,f=this._mlen;c<f;++c)l=n[c],(0===l.num&&i?a:s).push(this.celltuple(l)),n[c]=null
return this._alen=this._mlen=0,this._prev=null,e}}),ql.Definition={type:"Bin",metadata:{modifies:!0},params:[{name:"field",type:"field",required:!0},{name:"interval",type:"boolean",default:!0},{name:"anchor",type:"number"},{name:"maxbins",type:"number",default:20},{name:"base",type:"number",default:10},{name:"divide",type:"number",array:!0,default:[5,2]},{name:"extent",type:"number",array:!0,length:2,required:!0},{name:"span",type:"number"},{name:"step",type:"number"},{name:"steps",type:"number",array:!0},{name:"minstep",type:"number",default:0},{name:"nice",type:"boolean",default:!0},{name:"name",type:"string"},{name:"as",type:"string",array:!0,length:2,default:["bin0","bin1"]}]},ct(ql,vs,{transform(e,t){const n=!1!==e.interval,r=this._bins(e),i=r.start,o=r.step,a=e.as||["bin0","bin1"],s=a[0],l=a[1]
let u
return u=e.modified()?(t=t.reflow(!0)).SOURCE:t.modified(te(e.field))?t.ADD_MOD:t.ADD,t.visit(u,n?e=>{const t=r(e)
e[s]=t,e[l]=null==t?null:i+o*(1+(t-i)/o)}:e=>e[s]=r(e)),t.modifies(n?a:s)},_bins(e){if(this.value&&!e.modified())return this.value
const t=e.field,n=Ps(e),r=n.step
let i,o,a=n.start,s=a+Math.ceil((n.stop-a)/r)*r
null!=(i=e.anchor)&&(o=i-(a+r*Math.floor((i-a)/r)),a+=o,s+=o)
const l=function(e){let n=De(t(e))
return null==n?null:n<a?-1/0:n>s?1/0:(n=Math.max(a,Math.min(n,s-r)),a+r*Math.floor(1e-14+(n-a)/r))}
return l.start=a,l.stop=n.stop,l.step=r,this.value=Q(l,te(t),e.name||"bin_"+ee(t))}}),Wl.Definition={type:"Collect",metadata:{source:!0},params:[{name:"sort",type:"compare"}]},ct(Wl,vs,{transform(e,t){const n=t.fork(t.ALL),r=Zl(La,this.value,n.materialize(n.ADD).add),i=e.sort,o=t.changed()||i&&(e.modified("sort")||t.modified(i.fields))
return n.visit(n.REM,r.remove),this.modified(o),this.value=n.source=r.data(Va(i),o),t.source&&t.source.root&&(this.value.root=t.source.root),n}}),ct(Vl,Qa),Gl.Definition={type:"CountPattern",metadata:{generates:!0,changes:!0},params:[{name:"field",type:"field",required:!0},{name:"case",type:"enum",values:["upper","lower","mixed"],default:"mixed"},{name:"pattern",type:"string",default:'[\\w"]+'},{name:"stopwords",type:"string",default:""},{name:"as",type:"string",array:!0,length:2,default:["text","count"]}]},ct(Gl,vs,{transform(e,t){const n=t=>n=>{for(var r,i=function(e,t,n){switch(t){case"upper":e=e.toUpperCase()
break
case"lower":e=e.toLowerCase()}return e.match(n)}(s(n),e.case,o)||[],l=0,u=i.length;l<u;++l)a.test(r=i[l])||t(r)},r=this._parameterCheck(e,t),i=this._counts,o=this._match,a=this._stop,s=e.field,l=e.as||["text","count"],u=n((e=>i[e]=1+(i[e]||0))),c=n((e=>i[e]-=1))
return r?t.visit(t.SOURCE,u):(t.visit(t.ADD,u),t.visit(t.REM,c)),this._finish(t,l)},_parameterCheck(e,t){let n=!1
return!e.modified("stopwords")&&this._stop||(this._stop=new RegExp("^"+(e.stopwords||"")+"$","i"),n=!0),!e.modified("pattern")&&this._match||(this._match=new RegExp(e.pattern||"[\\w']+","g"),n=!0),(e.modified("field")||t.modified(e.field.fields))&&(n=!0),n&&(this._counts={}),n},_finish(e,t){const n=this._counts,r=this._tuples||(this._tuples={}),i=t[0],o=t[1],a=e.fork(e.NO_SOURCE|e.NO_FIELDS)
let s,l,u
for(s in n)l=r[s],u=n[s]||0,!l&&u?(r[s]=l=Ua({}),l[i]=s,l[o]=u,a.add.push(l)):0===u?(l&&a.rem.push(l),n[s]=null,r[s]=null):l[o]!==u&&(l[o]=u,a.mod.push(l))
return a.modifies(t)}}),Yl.Definition={type:"Cross",metadata:{generates:!0},params:[{name:"filter",type:"expr"},{name:"as",type:"string",array:!0,length:2,default:["a","b"]}]},ct(Yl,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE),r=e.as||["a","b"],i=r[0],o=r[1],a=!this.value||t.changed(t.ADD_REM)||e.modified("as")||e.modified("filter")
let s=this.value
return a?(s&&(n.rem=s),s=t.materialize(t.SOURCE).source,n.add=this.value=function(e,t,n,r){for(var i,o,a=[],s={},l=e.length,u=0;u<l;++u)for(s[t]=o=e[u],i=0;i<l;++i)s[n]=e[i],r(s)&&(a.push(Ua(s)),(s={})[t]=o)
return a}(s,i,o,e.filter||de)):n.mod=s,n.source=this.value,n.modifies(r)}})
const Xl={kde:Js,mixture:rl,normal:Xs,lognormal:nl,uniform:ll}
function Jl(e,t){const n=e.function
at(Xl,n)||oe("Unknown distribution function: "+n)
const r=Xl[n]()
for(const i in e)"field"===i?r.data((e.from||t()).map(e[i])):"distributions"===i?r[i](e[i].map((e=>Jl(e,t)))):"function"==typeof r[i]&&r[i](e[i])
return r}function Kl(e){vs.call(this,null,e)}const Ql=[{key:{function:"normal"},params:[{name:"mean",type:"number",default:0},{name:"stdev",type:"number",default:1}]},{key:{function:"lognormal"},params:[{name:"mean",type:"number",default:0},{name:"stdev",type:"number",default:1}]},{key:{function:"uniform"},params:[{name:"min",type:"number",default:0},{name:"max",type:"number",default:1}]},{key:{function:"kde"},params:[{name:"field",type:"field",required:!0},{name:"from",type:"data"},{name:"bandwidth",type:"number",default:0}]}],eu={key:{function:"mixture"},params:[{name:"distributions",type:"param",array:!0,params:Ql},{name:"weights",type:"number",array:!0}]}
function tu(e,t){return e?e.map(((e,n)=>t[n]||ee(e))):null}function nu(e,t,n){const r=[],i=e=>e(l)
let o,a,s,l,u,c
if(null==t)r.push(e.map(n))
else for(o={},a=0,s=e.length;a<s;++a)l=e[a],u=t.map(i),c=o[u],c||(o[u]=c=[],c.dims=u,r.push(c)),c.push(n(l))
return r}function ru(e){vs.call(this,null,e)}function iu(e){Qa.call(this,null,ou,e),this.modified(!0)}function ou(e){const t=e.expr
return this.value&&!e.modified("expr")?this.value:Q((n=>t(n,e)),te(t),ee(t))}function au(e){vs.call(this,[void 0,void 0],e)}function su(e,t){Qa.call(this,e),this.parent=t,this.count=0}function lu(e){vs.call(this,{},e),this._keys=lt()
const t=this._targets=[]
t.active=0,t.forEach=e=>{for(let n=0,r=t.active;n<r;++n)e(t[n],n,t)}}function uu(e){Qa.call(this,null,cu,e)}function cu(e){return this.value&&!e.modified()?this.value:_e(e.name)?Ve(e.name).map((e=>se(e))):se(e.name,e.as)}function fu(e){vs.call(this,lt(),e)}function du(e){vs.call(this,[],e)}function hu(e){vs.call(this,[],e)}function pu(e){vs.call(this,null,e)}function gu(e){vs.call(this,[],e)}Kl.Definition={type:"Density",metadata:{generates:!0},params:[{name:"extent",type:"number",array:!0,length:2},{name:"steps",type:"number"},{name:"minsteps",type:"number",default:25},{name:"maxsteps",type:"number",default:200},{name:"method",type:"string",default:"pdf",values:["pdf","cdf"]},{name:"distribution",type:"param",params:Ql.concat(eu)},{name:"as",type:"string",array:!0,default:["value","density"]}]},ct(Kl,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE|t.NO_FIELDS)
if(!this.value||t.changed()||e.modified()){const r=Jl(e.distribution,function(e){return()=>e.materialize(e.SOURCE).source}(t)),i=e.steps||e.minsteps||25,o=e.steps||e.maxsteps||200
let a=e.method||"pdf"
"pdf"!==a&&"cdf"!==a&&oe("Invalid density method: "+a),e.extent||r.data||oe("Missing density extent parameter."),a=r[a]
const s=e.as||["value","density"],l=kl(a,e.extent||rt(r.data()),i,o).map((e=>{const t={}
return t[s[0]]=e[0],t[s[1]]=e[1],Ua(t)}))
this.value&&(n.rem=this.value),this.value=n.add=n.source=l}return n}}),ru.Definition={type:"DotBin",metadata:{modifies:!0},params:[{name:"field",type:"field",required:!0},{name:"groupby",type:"field",array:!0},{name:"step",type:"number"},{name:"smooth",type:"boolean",default:!1},{name:"as",type:"string",default:"bin"}]},ct(ru,vs,{transform(e,t){if(this.value&&!e.modified()&&!t.changed())return t
const n=t.materialize(t.SOURCE).source,r=nu(t.source,e.groupby,ue),i=e.smooth||!1,o=e.field,a=e.step||((e,t)=>kt(rt(e,t))/30)(n,o),s=Va(((e,t)=>o(e)-o(t))),l=e.as||"bin",u=r.length
let c,f=1/0,d=-1/0,h=0
for(;h<u;++h){const e=r[h].sort(s)
c=-1
for(const t of Ls(e,a,i,o))t<f&&(f=t),t>d&&(d=t),e[++c][l]=t}return this.value={start:f,stop:d,step:a},t.reflow(!0).modifies(l)}}),ct(iu,Qa),au.Definition={type:"Extent",metadata:{},params:[{name:"field",type:"field",required:!0}]},ct(au,vs,{transform(e,t){const n=this.value,r=e.field,i=t.changed()||t.modified(r.fields)||e.modified("field")
let o=n[0],a=n[1]
if((i||null==o)&&(o=1/0,a=-1/0),t.visit(i?t.SOURCE:t.ADD,(e=>{const t=De(r(e))
null!=t&&(t<o&&(o=t),t>a&&(a=t))})),!Number.isFinite(o)||!Number.isFinite(a)){let e=ee(r)
e&&(e=' for field "'.concat(e,'"')),t.dataflow.warn("Infinite extent".concat(e,": [").concat(o,", ").concat(a,"]")),o=a=void 0}this.value=[o,a]}}),ct(su,Qa,{connect(e){return this.detachSubflow=e.detachSubflow,this.targets().add(e),e.source=this},add(e){this.count+=1,this.value.add.push(e)},rem(e){this.count-=1,this.value.rem.push(e)},mod(e){this.value.mod.push(e)},init(e){this.value.init(e,e.NO_SOURCE)},evaluate(){return this.value}}),ct(lu,vs,{activate(e){this._targets[this._targets.active++]=e},subflow(e,t,n,r){const i=this.value
let o,a,s=at(i,e)&&i[e]
return s?s.value.stamp<n.stamp&&(s.init(n),this.activate(s)):(a=r||(a=this._group[e])&&a.tuple,o=n.dataflow,s=new su(n.fork(n.NO_SOURCE),this),o.add(s).connect(t(o,e,a)),i[e]=s,this.activate(s)),s},clean(){const e=this.value
let t=0
for(const n in e)if(0===e[n].count){const r=e[n].detachSubflow
r&&r(),delete e[n],++t}if(t){const e=this._targets.filter((e=>e&&e.count>0))
this.initTargets(e)}},initTargets(e){const t=this._targets,n=t.length,r=e?e.length:0
let i=0
for(;i<r;++i)t[i]=e[i]
for(;i<n&&null!=t[i];++i)t[i]=null
t.active=r},transform(e,t){const n=t.dataflow,r=e.key,i=e.subflow,o=this._keys,a=e.modified("key"),s=e=>this.subflow(e,i,t)
return this._group=e.group||{},this.initTargets(),t.visit(t.REM,(e=>{const t=La(e),n=o.get(t)
void 0!==n&&(o.delete(t),s(n).rem(e))})),t.visit(t.ADD,(e=>{const t=r(e)
o.set(La(e),t),s(t).add(e)})),a||t.modified(r.fields)?t.visit(t.MOD,(e=>{const t=La(e),n=o.get(t),i=r(e)
n===i?s(i).mod(e):(o.set(t,i),s(n).rem(e),s(i).add(e))})):t.changed(t.MOD)&&t.visit(t.MOD,(e=>{s(o.get(La(e))).mod(e)})),a&&t.visit(t.REFLOW,(e=>{const t=La(e),n=o.get(t),i=r(e)
n!==i&&(o.set(t,i),s(n).rem(e),s(i).add(e))})),t.clean()?n.runAfter((()=>{this.clean(),o.clean()})):o.empty>n.cleanThreshold&&n.runAfter(o.clean),t}}),ct(uu,Qa),fu.Definition={type:"Filter",metadata:{changes:!0},params:[{name:"expr",type:"expr",required:!0}]},ct(fu,vs,{transform(e,t){const n=t.dataflow,r=this.value,i=t.fork(),o=i.add,a=i.rem,s=i.mod,l=e.expr
let u=!0
function c(t){const n=La(t),i=l(t,e),c=r.get(n)
i&&c?(r.delete(n),o.push(t)):i||c?u&&i&&!c&&s.push(t):(r.set(n,1),a.push(t))}return t.visit(t.REM,(e=>{const t=La(e)
r.has(t)?r.delete(t):a.push(e)})),t.visit(t.ADD,(t=>{l(t,e)?o.push(t):r.set(La(t),1)})),t.visit(t.MOD,c),e.modified()&&(u=!1,t.visit(t.REFLOW,c)),r.empty>n.cleanThreshold&&n.runAfter(r.clean),i}}),du.Definition={type:"Flatten",metadata:{generates:!0},params:[{name:"fields",type:"field",array:!0,required:!0},{name:"index",type:"string"},{name:"as",type:"string",array:!0}]},ct(du,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE),r=e.fields,i=tu(r,e.as||[]),o=e.index||null,a=i.length
return n.rem=this.value,t.visit(t.SOURCE,(e=>{const t=r.map((t=>t(e))),s=t.reduce(((e,t)=>Math.max(e,t.length)),0)
let l,u,c,f=0
for(;f<s;++f){for(u=qa(e),l=0;l<a;++l)u[i[l]]=null==(c=t[l][f])?null:c
o&&(u[o]=f),n.add.push(u)}})),this.value=n.source=n.add,o&&n.modifies(o),n.modifies(i)}}),hu.Definition={type:"Fold",metadata:{generates:!0},params:[{name:"fields",type:"field",array:!0,required:!0},{name:"as",type:"string",array:!0,length:2,default:["key","value"]}]},ct(hu,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE),r=e.fields,i=r.map(ee),o=e.as||["key","value"],a=o[0],s=o[1],l=r.length
return n.rem=this.value,t.visit(t.SOURCE,(e=>{for(let t,o=0;o<l;++o)t=qa(e),t[a]=i[o],t[s]=r[o](e),n.add.push(t)})),this.value=n.source=n.add,n.modifies(o)}}),pu.Definition={type:"Formula",metadata:{modifies:!0},params:[{name:"expr",type:"expr",required:!0},{name:"as",type:"string",required:!0},{name:"initonly",type:"boolean"}]},ct(pu,vs,{transform(e,t){const n=e.expr,r=e.as,i=e.modified(),o=e.initonly?t.ADD:i?t.SOURCE:t.modified(n.fields)||t.modified(r)?t.ADD_MOD:t.ADD
return i&&(t=t.materialize().reflow(!0)),e.initonly||t.modifies(r),t.visit(o,(t=>t[r]=n(t,e)))}}),ct(gu,vs,{transform(e,t){const n=t.fork(t.ALL),r=e.generator
let i,o,a,s=this.value,l=e.size-s.length
if(l>0){for(i=[];--l>=0;)i.push(a=Ua(r(e))),s.push(a)
n.add=n.add.length?n.materialize(n.ADD).add.concat(i):i}else o=s.slice(0,-l),n.rem=n.rem.length?n.materialize(n.REM).rem.concat(o):o,s=s.slice(-l)
return n.source=this.value=s,n}})
const mu={value:"value",median:js,mean:function(e,t){let n=0,r=0
if(void 0===t)for(let i of e)null!=i&&(i=+i)>=i&&(++n,r+=i)
else{let i=-1
for(let o of e)null!=(o=t(o,++i,e))&&(o=+o)>=o&&(++n,r+=o)}if(n)return r/n},min:Os,max:ws},yu=[]
function vu(e){vs.call(this,[],e)}function bu(e){Ul.call(this,e)}function xu(e){vs.call(this,null,e)}function _u(e){Qa.call(this,null,wu,e)}function wu(e){return this.value&&!e.modified()?this.value:vt(e.fields,e.flat)}function Ou(e){vs.call(this,[],e),this._pending=null}function ku(e,t,n){n.forEach(Ua)
const r=t.fork(t.NO_FIELDS&t.NO_SOURCE)
return r.rem=e.value,e.value=r.source=r.add=n,e._pending=null,r.rem.length&&r.clean(!0),r}function Eu(e){vs.call(this,{},e)}function Au(e){Qa.call(this,null,Su,e)}function Su(e){if(this.value&&!e.modified())return this.value
const t=e.extents,n=t.length
let r,i,o=1/0,a=-1/0
for(r=0;r<n;++r)i=t[r],i[0]<o&&(o=i[0]),i[1]>a&&(a=i[1])
return[o,a]}function Du(e){Qa.call(this,null,Cu,e)}function Cu(e){return this.value&&!e.modified()?this.value:e.values.reduce(((e,t)=>e.concat(t)),[])}function Mu(e){vs.call(this,null,e)}function ju(e){Ul.call(this,e)}function Fu(e){lu.call(this,e)}function Tu(e){vs.call(this,null,e)}function Nu(e){vs.call(this,null,e)}function $u(e){vs.call(this,null,e)}function Pu(e){vs.call(this,null,e)}function zu(e){vs.call(this,[],e),this.count=0}function Iu(e){vs.call(this,null,e)}function Ru(e){vs.call(this,null,e),this.modified(!0)}function Lu(e){vs.call(this,null,e)}vu.Definition={type:"Impute",metadata:{changes:!0},params:[{name:"field",type:"field",required:!0},{name:"key",type:"field",required:!0},{name:"keyvals",array:!0},{name:"groupby",type:"field",array:!0},{name:"method",type:"enum",default:"value",values:["value","mean","median","max","min"]},{name:"value",default:0}]},ct(vu,vs,{transform(e,t){var n,r,i,o,a,s,l,u,c,f,d=t.fork(t.ALL),h=function(e){var t,n=e.method||mu.value
if(null!=mu[n])return n===mu.value?(t=void 0!==e.value?e.value:0,()=>t):mu[n]
oe("Unrecognized imputation method: "+n)}(e),p=function(e){const t=e.field
return e=>e?t(e):NaN}(e),g=ee(e.field),m=ee(e.key),y=(e.groupby||[]).map(ee),v=function(e,t,n,r){var i,o,a,s,l,u,c,f,d=e=>e(f),h=[],p=r?r.slice():[],g={},m={}
for(p.forEach(((e,t)=>g[e]=t+1)),s=0,c=e.length;s<c;++s)u=n(f=e[s]),l=g[u]||(g[u]=p.push(u)),(a=m[o=(i=t?t.map(d):yu)+""])||(a=m[o]=[],h.push(a),a.values=i),a[l-1]=f
return h.domain=p,h}(t.source,e.groupby,e.key,e.keyvals),b=[],x=this.value,_=v.domain.length
for(a=0,u=v.length;a<u;++a)for(i=(n=v[a]).values,r=NaN,l=0;l<_;++l)if(null==n[l]){for(o=v.domain[l],f={_impute:!0},s=0,c=i.length;s<c;++s)f[y[s]]=i[s]
f[m]=o,f[g]=Number.isNaN(r)?r=h(n,p):r,b.push(Ua(f))}return b.length&&(d.add=d.materialize(d.ADD).add.concat(b)),x.length&&(d.rem=d.materialize(d.REM).rem.concat(x)),this.value=b,d}}),bu.Definition={type:"JoinAggregate",metadata:{modifies:!0},params:[{name:"groupby",type:"field",array:!0},{name:"fields",type:"field",null:!0,array:!0},{name:"ops",type:"enum",array:!0,values:Fl},{name:"as",type:"string",null:!0,array:!0},{name:"key",type:"field"}]},ct(bu,Ul,{transform(e,t){const n=this,r=e.modified()
let i
return n.value&&(r||t.modified(n._inputs,!0))?(i=n.value=r?n.init(e):{},t.visit(t.SOURCE,(e=>n.add(e)))):(i=n.value=n.value||this.init(e),t.visit(t.REM,(e=>n.rem(e))),t.visit(t.ADD,(e=>n.add(e)))),n.changes(),t.visit(t.SOURCE,(e=>{nt(e,i[n.cellkey(e)].tuple)})),t.reflow(r).modifies(this._outputs)},changes(){const e=this._adds,t=this._mods
let n,r
for(n=0,r=this._alen;n<r;++n)this.celltuple(e[n]),e[n]=null
for(n=0,r=this._mlen;n<r;++n)this.celltuple(t[n]),t[n]=null
this._alen=this._mlen=0}}),xu.Definition={type:"KDE",metadata:{generates:!0},params:[{name:"groupby",type:"field",array:!0},{name:"field",type:"field",required:!0},{name:"cumulative",type:"boolean",default:!1},{name:"counts",type:"boolean",default:!1},{name:"bandwidth",type:"number",default:0},{name:"extent",type:"number",array:!0,length:2},{name:"resolve",type:"enum",values:["shared","independent"],default:"independent"},{name:"steps",type:"number"},{name:"minsteps",type:"number",default:25},{name:"maxsteps",type:"number",default:200},{name:"as",type:"string",array:!0,default:["value","density"]}]},ct(xu,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE|t.NO_FIELDS)
if(!this.value||t.changed()||e.modified()){const r=t.materialize(t.SOURCE).source,i=nu(r,e.groupby,e.field),o=(e.groupby||[]).map(ee),a=e.bandwidth,s=e.cumulative?"cdf":"pdf",l=e.as||["value","density"],u=[]
let c=e.extent,f=e.steps||e.minsteps||25,d=e.steps||e.maxsteps||200
"pdf"!==s&&"cdf"!==s&&oe("Invalid density method: "+s),"shared"===e.resolve&&(c||(c=rt(r,e.field)),f=d=e.steps||d),i.forEach((t=>{const n=Js(t,a)[s],r=e.counts?t.length:1
kl(n,c||rt(t),f,d).forEach((e=>{const n={}
for(let r=0;r<o.length;++r)n[o[r]]=t.dims[r]
n[l[0]]=e[0],n[l[1]]=e[1]*r,u.push(Ua(n))}))})),this.value&&(n.rem=this.value),this.value=n.add=n.source=u}return n}}),ct(_u,Qa),ct(Ou,vs,{transform(e,t){const n=t.dataflow
if(this._pending)return ku(this,t,this._pending)
if(function(e){return e.modified("async")&&!(e.modified("values")||e.modified("url")||e.modified("format"))}(e))return t.StopPropagation
if(e.values)return ku(this,t,n.parse(e.values,e.format))
if(e.async){const t=n.request(e.url,e.format).then((e=>(this._pending=Ve(e.data),e=>e.touch(this))))
return{async:t}}return n.request(e.url,e.format).then((e=>ku(this,t,Ve(e.data))))}}),Eu.Definition={type:"Lookup",metadata:{modifies:!0},params:[{name:"index",type:"index",params:[{name:"from",type:"data",required:!0},{name:"key",type:"field",required:!0}]},{name:"values",type:"field",array:!0},{name:"fields",type:"field",array:!0,required:!0},{name:"as",type:"string",array:!0},{name:"default",default:null}]},ct(Eu,vs,{transform(e,t){const n=e.fields,r=e.index,i=e.values,o=null==e.default?null:e.default,a=e.modified(),s=n.length
let l,u,c,f=a?t.SOURCE:t.ADD,d=t,h=e.as
return i?(u=i.length,s>1&&!h&&oe('Multi-field lookup requires explicit "as" parameter.'),h&&h.length!==s*u&&oe('The "as" parameter has too few output field names.'),h=h||i.map(ee),l=function(e){for(var t,a,l=0,c=0;l<s;++l)if(null==(a=r.get(n[l](e))))for(t=0;t<u;++t,++c)e[h[c]]=o
else for(t=0;t<u;++t,++c)e[h[c]]=i[t](a)}):(h||oe("Missing output field names."),l=function(e){for(var t,i=0;i<s;++i)t=r.get(n[i](e)),e[h[i]]=null==t?o:t}),a?d=t.reflow(!0):(c=n.some((e=>t.modified(e.fields))),f|=c?t.MOD:0),t.visit(f,l),d.modifies(h)}}),ct(Au,Qa),ct(Du,Qa),ct(Mu,vs,{transform(e,t){return this.modified(e.modified()),this.value=e,t.fork(t.NO_SOURCE|t.NO_FIELDS)}}),ju.Definition={type:"Pivot",metadata:{generates:!0,changes:!0},params:[{name:"groupby",type:"field",array:!0},{name:"field",type:"field",required:!0},{name:"value",type:"field",required:!0},{name:"op",type:"enum",values:Fl,default:"sum"},{name:"limit",type:"number",default:0},{name:"key",type:"field"}]},ct(ju,Ul,{_transform:Ul.prototype.transform,transform(e,t){return this._transform(function(e,t){const n=e.field,r=e.value,i=("count"===e.op?"__count__":e.op)||"sum",o=te(n).concat(te(r)),a=function(e,t,n){const r={},i=[]
return n.visit(n.SOURCE,(t=>{const n=e(t)
r[n]||(r[n]=1,i.push(n))})),i.sort(Xe),t?i.slice(0,t):i}(n,e.limit||0,t)
return t.changed()&&e.set("__pivot__",null,null,!0),{key:e.key,groupby:e.groupby,ops:a.map((()=>i)),fields:a.map((e=>function(e,t,n,r){return Q((r=>t(r)===e?n(r):NaN),r,e+"")}(e,n,r,o))),as:a.map((e=>e+"")),modified:e.modified.bind(e)}}(e,t),t)}}),ct(Fu,lu,{transform(e,t){const n=e.subflow,r=e.field,i=e=>this.subflow(La(e),n,t,e)
return(e.modified("field")||r&&t.modified(te(r)))&&oe("PreFacet does not support field modification."),this.initTargets(),r?(t.visit(t.MOD,(e=>{const t=i(e)
r(e).forEach((e=>t.mod(e)))})),t.visit(t.ADD,(e=>{const t=i(e)
r(e).forEach((e=>t.add(Ua(e))))})),t.visit(t.REM,(e=>{const t=i(e)
r(e).forEach((e=>t.rem(e)))}))):(t.visit(t.MOD,(e=>i(e).mod(e))),t.visit(t.ADD,(e=>i(e).add(e))),t.visit(t.REM,(e=>i(e).rem(e)))),t.clean()&&t.runAfter((()=>this.clean())),t}}),Tu.Definition={type:"Project",metadata:{generates:!0,changes:!0},params:[{name:"fields",type:"field",array:!0},{name:"as",type:"string",null:!0,array:!0}]},ct(Tu,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE),r=e.fields,i=tu(e.fields,e.as||[]),o=r?(e,t)=>function(e,t,n,r){for(let i=0,o=n.length;i<o;++i)t[r[i]]=n[i](e)
return t}(e,t,r,i):Za
let a
return this.value?a=this.value:(t=t.addAll(),a=this.value={}),t.visit(t.REM,(e=>{const t=La(e)
n.rem.push(a[t]),a[t]=null})),t.visit(t.ADD,(e=>{const t=o(e,Ua({}))
a[La(e)]=t,n.add.push(t)})),t.visit(t.MOD,(e=>{n.mod.push(o(e,a[La(e)]))})),n}}),ct(Nu,vs,{transform(e,t){return this.value=e.value,e.modified("value")?t.fork(t.NO_SOURCE|t.NO_FIELDS):t.StopPropagation}}),$u.Definition={type:"Quantile",metadata:{generates:!0,changes:!0},params:[{name:"groupby",type:"field",array:!0},{name:"field",type:"field",required:!0},{name:"probs",type:"number",array:!0},{name:"step",type:"number",default:.01},{name:"as",type:"string",array:!0,default:["prob","value"]}]},ct($u,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE|t.NO_FIELDS),r=e.as||["prob","value"]
if(this.value&&!e.modified()&&!t.changed())return n.source=this.value,n
const i=nu(t.materialize(t.SOURCE).source,e.groupby,e.field),o=(e.groupby||[]).map(ee),a=[],s=e.step||.01,l=e.probs||Al(s/2,1-1e-14,s),u=l.length
return i.forEach((e=>{const t=Ts(e,l)
for(let n=0;n<u;++n){const i={}
for(let t=0;t<o.length;++t)i[o[t]]=e.dims[t]
i[r[0]]=l[n],i[r[1]]=t[n],a.push(Ua(i))}})),this.value&&(n.rem=this.value),this.value=n.add=n.source=a,n}}),ct(Pu,vs,{transform(e,t){let n,r
return this.value?r=this.value:(n=t=t.addAll(),r=this.value={}),e.derive&&(n=t.fork(t.NO_SOURCE),t.visit(t.REM,(e=>{const t=La(e)
n.rem.push(r[t]),r[t]=null})),t.visit(t.ADD,(e=>{const t=qa(e)
r[La(e)]=t,n.add.push(t)})),t.visit(t.MOD,(e=>{const t=r[La(e)]
for(const r in e)t[r]=e[r],n.modifies(r)
n.mod.push(t)}))),n}}),zu.Definition={type:"Sample",metadata:{},params:[{name:"size",type:"number",default:1e3}]},ct(zu,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE),r=e.modified("size"),i=e.size,o=this.value.reduce(((e,t)=>(e[La(t)]=1,e)),{})
let a=this.value,s=this.count,l=0
function u(e){let t,r
a.length<i?a.push(e):(r=~~((s+1)*zs()),r<a.length&&r>=l&&(t=a[r],o[La(t)]&&n.rem.push(t),a[r]=e)),++s}if(t.rem.length&&(t.visit(t.REM,(e=>{const t=La(e)
o[t]&&(o[t]=-1,n.rem.push(e)),--s})),a=a.filter((e=>-1!==o[La(e)]))),(t.rem.length||r)&&a.length<i&&t.source&&(l=s=a.length,t.visit(t.SOURCE,(e=>{o[La(e)]||u(e)})),l=-1),r&&a.length>i){const e=a.length-i
for(let t=0;t<e;++t)o[La(a[t])]=-1,n.rem.push(a[t])
a=a.slice(e)}return t.mod.length&&t.visit(t.MOD,(e=>{o[La(e)]&&n.mod.push(e)})),t.add.length&&t.visit(t.ADD,u),(t.add.length||l<0)&&(n.add=a.filter((e=>!o[La(e)]))),this.count=s,this.value=n.source=a,n}}),Iu.Definition={type:"Sequence",metadata:{generates:!0,changes:!0},params:[{name:"start",type:"number",required:!0},{name:"stop",type:"number",required:!0},{name:"step",type:"number",default:1},{name:"as",type:"string",default:"data"}]},ct(Iu,vs,{transform(e,t){if(this.value&&!e.modified())return
const n=t.materialize().fork(t.MOD),r=e.as||"data"
return n.rem=this.value?t.rem.concat(this.value):t.rem,this.value=Al(e.start,e.stop,e.step||1).map((e=>{const t={}
return t[r]=e,Ua(t)})),n.add=t.add.concat(this.value),n}}),ct(Ru,vs,{transform(e,t){return this.value=t.source,t.changed()?t.fork(t.NO_SOURCE|t.NO_FIELDS):t.StopPropagation}})
const Bu=["unit0","unit1"]
function Uu(e){vs.call(this,lt(),e)}function qu(e){vs.call(this,null,e)}Lu.Definition={type:"TimeUnit",metadata:{modifies:!0},params:[{name:"field",type:"field",required:!0},{name:"interval",type:"boolean",default:!0},{name:"units",type:"enum",values:Sr,array:!0},{name:"step",type:"number",default:1},{name:"maxbins",type:"number",default:40},{name:"extent",type:"date",array:!0},{name:"timezone",type:"enum",default:"local",values:["local","utc"]},{name:"as",type:"string",array:!0,length:2,default:Bu}]},ct(Lu,vs,{transform(e,t){const n=e.field,r=!1!==e.interval,i="utc"===e.timezone,o=this._floor(e,t),a=(i?ri:ni)(o.unit).offset,s=e.as||Bu,l=s[0],u=s[1],c=o.step
let f=o.start||1/0,d=o.stop||-1/0,h=t.ADD
return(e.modified()||t.changed(t.REM)||t.modified(te(n)))&&(h=(t=t.reflow(!0)).SOURCE,f=1/0,d=-1/0),t.visit(h,(e=>{const t=n(e)
let i,s
null==t?(e[l]=null,r&&(e[u]=null)):(e[l]=i=s=o(t),r&&(e[u]=s=a(i,c)),i<f&&(f=i),s>d&&(d=s))})),o.start=f,o.stop=d,t.modifies(r?s:l)},_floor(e,t){const n="utc"===e.timezone,{units:r,step:i}=e.units?{units:e.units,step:e.step||1}:bi({extent:e.extent||rt(t.materialize(t.SOURCE).source,e.field),maxbins:e.maxbins}),o=Cr(r),a=this.value||{},s=(n?Qr:Xr)(o,i)
return s.unit=Se(o),s.units=o,s.step=i,s.start=a.start,s.stop=a.stop,this.value=s}}),ct(Uu,vs,{transform(e,t){const n=t.dataflow,r=e.field,i=this.value,o=e=>i.set(r(e),e)
let a=!0
return e.modified("field")||t.modified(r.fields)?(i.clear(),t.visit(t.SOURCE,o)):t.changed()?(t.visit(t.REM,(e=>i.delete(r(e)))),t.visit(t.ADD,o)):a=!1,this.modified(a),i.empty>n.cleanThreshold&&n.runAfter(i.clean),t.fork()}}),ct(qu,vs,{transform(e,t){(!this.value||e.modified("field")||e.modified("sort")||t.changed()||e.sort&&t.modified(e.sort.fields))&&(this.value=(e.sort?t.source.slice().sort(Va(e.sort)):t.source).map(e.field))}})
const Zu={row_number:function(){return{next:e=>e.index+1}},rank:function(){let e
return{init:()=>e=1,next:t=>{const n=t.index,r=t.data
return n&&t.compare(r[n-1],r[n])?e=n+1:e}}},dense_rank:function(){let e
return{init:()=>e=1,next:t=>{const n=t.index,r=t.data
return n&&t.compare(r[n-1],r[n])?++e:e}}},percent_rank:function(){const e=Zu.rank(),t=e.next
return{init:e.init,next:e=>(t(e)-1)/(e.data.length-1)}},cume_dist:function(){let e
return{init:()=>e=0,next:t=>{const n=t.data,r=t.compare
let i=t.index
if(e<i){for(;i+1<n.length&&!r(n[i],n[i+1]);)++i
e=i}return(1+e)/n.length}}},ntile:function(e,t){(t=+t)>0||oe("ntile num must be greater than zero.")
const n=Zu.cume_dist(),r=n.next
return{init:n.init,next:e=>Math.ceil(t*r(e))}},lag:function(e,t){return t=+t||1,{next:n=>{const r=n.index-t
return r>=0?e(n.data[r]):null}}},lead:function(e,t){return t=+t||1,{next:n=>{const r=n.index+t,i=n.data
return r<i.length?e(i[r]):null}}},first_value:function(e){return{next:t=>e(t.data[t.i0])}},last_value:function(e){return{next:t=>e(t.data[t.i1-1])}},nth_value:function(e,t){return(t=+t)>0||oe("nth_value nth must be greater than zero."),{next:n=>{const r=n.i0+(t-1)
return r<n.i1?e(n.data[r]):null}}},prev_value:function(e){let t
return{init:()=>t=null,next:n=>{const r=e(n.data[n.index])
return null!=r?t=r:t}}},next_value:function(e){let t,n
return{init:()=>(t=null,n=-1),next:r=>{const i=r.data
return r.index<=n?t:(n=function(e,t,n){for(let r=t.length;n<r;++n)if(null!=e(t[n]))return n
return-1}(e,i,r.index))<0?(n=i.length,t=null):t=e(i[n])}}}},Wu=Object.keys(Zu)
function Vu(e){const t=Ve(e.ops),n=Ve(e.fields),r=Ve(e.params),i=Ve(e.as),o=this.outputs=[],a=this.windows=[],s={},l={},u=[],c=[]
let f=!0
function d(e){Ve(te(e)).forEach((e=>s[e]=1))}d(e.sort),t.forEach(((e,t)=>{const s=n[t],h=ee(s),p=Dl(e,h,i[t])
if(d(s),o.push(p),at(Zu,e))a.push(function(e,t,n,r){const i=Zu[e](t,n)
return{init:i.init||ce,update:function(e,t){t[r]=i.next(e)}}}(e,n[t],r[t],p))
else{if(null==s&&"count"!==e&&oe("Null aggregate field specified."),"count"===e)return void u.push(p)
f=!1
let t=l[h]
t||(t=l[h]=[],t.field=s,c.push(t)),t.push(Tl(e,p))}})),(u.length||c.length)&&(this.cell=function(e,t,n){e=e.map((e=>Rl(e,e.field)))
const r={num:0,agg:null,store:!1,count:t}
if(!n)for(var i=e.length,o=r.agg=Array(i),a=0;a<i;++a)o[a]=new e[a](r)
if(r.store)var s=r.data=new Ll
return r.add=function(e){if(r.num+=1,!n){s&&s.add(e)
for(let t=0;t<i;++t)o[t].add(o[t].get(e),e)}},r.rem=function(e){if(r.num-=1,!n){s&&s.rem(e)
for(let t=0;t<i;++t)o[t].rem(o[t].get(e),e)}},r.set=function(e){let i,a
for(s&&s.values(),i=0,a=t.length;i<a;++i)e[t[i]]=r.num
if(!n)for(i=0,a=o.length;i<a;++i)o[i].set(e)},r.init=function(){r.num=0,s&&s.reset()
for(let e=0;e<i;++e)o[e].init()},r}(c,u,f)),this.inputs=Object.keys(s)}const Hu=Vu.prototype
function Gu(e){vs.call(this,{},e),this._mlen=0,this._mods=[]}function Yu(e,t,n,r){const i=r.sort,o=i&&!r.ignorePeers,a=r.frame||[null,0],s=e.data(n),l=s.length,u=o?pr(i):null,c={i0:0,i1:0,p0:0,p1:0,index:0,data:s,compare:i||et(-1)}
t.init()
for(let f=0;f<l;++f)Xu(c,a,f,l),o&&Ju(c,u),t.update(c,s[f])}function Xu(e,t,n,r){e.p0=e.i0,e.p1=e.i1,e.i0=null==t[0]?0:Math.max(0,n-Math.abs(t[0])),e.i1=null==t[1]?r:Math.min(r,n+Math.abs(t[1])+1),e.index=n}function Ju(e,t){const n=e.i0,r=e.i1-1,i=e.compare,o=e.data,a=o.length-1
n>0&&!i(o[n],o[n-1])&&(e.i0=t.left(o,o[n])),r<a&&!i(o[r],o[r+1])&&(e.i1=t.right(o,o[r]))}function Ku(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Qu(e){this._context=e}function ec(){}function tc(e){this._context=e}function nc(e){this._context=e}function rc(e,t){this._basis=new Qu(e),this._beta=t}Hu.init=function(){this.windows.forEach((e=>e.init())),this.cell&&this.cell.init()},Hu.update=function(e,t){const n=this.cell,r=this.windows,i=e.data,o=r&&r.length
let a
if(n){for(a=e.p0;a<e.i0;++a)n.rem(i[a])
for(a=e.p1;a<e.i1;++a)n.add(i[a])
n.set(t)}for(a=0;a<o;++a)r[a].update(e,t)},Gu.Definition={type:"Window",metadata:{modifies:!0},params:[{name:"sort",type:"compare"},{name:"groupby",type:"field",array:!0},{name:"ops",type:"enum",array:!0,values:Wu.concat(Fl)},{name:"params",type:"number",null:!0,array:!0},{name:"fields",type:"field",null:!0,array:!0},{name:"as",type:"string",null:!0,array:!0},{name:"frame",type:"number",null:!0,array:!0,length:2,default:[null,0]},{name:"ignorePeers",type:"boolean",default:!1}]},ct(Gu,vs,{transform(e,t){this.stamp=t.stamp
const n=e.modified(),r=Va(e.sort),i=Sl(e.groupby),o=e=>this.group(i(e))
let a=this.state
a&&!n||(a=this.state=new Vu(e)),n||t.modified(a.inputs)?(this.value={},t.visit(t.SOURCE,(e=>o(e).add(e)))):(t.visit(t.REM,(e=>o(e).remove(e))),t.visit(t.ADD,(e=>o(e).add(e))))
for(let s=0,l=this._mlen;s<l;++s)Yu(this._mods[s],a,r,e)
return this._mlen=0,this._mods=[],t.reflow(n).modifies(a.outputs)},group(e){let t=this.value[e]
return t||(t=this.value[e]=Zl(La),t.stamp=-1),t.stamp<this.stamp&&(t.stamp=this.stamp,this._mods[this._mlen++]=t),t}}),Qu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ku(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:Ku(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},tc.prototype={areaStart:ec,areaEnd:ec,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath()
break
case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath()
break
case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t
break
case 1:this._point=2,this._x3=e,this._y3=t
break
case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6)
break
default:Ku(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},nc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3
var n=(this._x0+4*this._x1+e)/6,r=(this._y0+4*this._y1+t)/6
this._line?this._context.lineTo(n,r):this._context.moveTo(n,r)
break
case 3:this._point=4
default:Ku(this,e,t)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}},rc.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var e=this._x,t=this._y,n=e.length-1
if(n>0)for(var r,i=e[0],o=t[0],a=e[n]-i,s=t[n]-o,l=-1;++l<=n;)r=l/n,this._basis.point(this._beta*e[l]+(1-this._beta)*(i+r*a),this._beta*t[l]+(1-this._beta)*(o+r*s))
this._x=this._y=null,this._basis.lineEnd()},point:function(e,t){this._x.push(+e),this._y.push(+t)}}
const ic=function e(t){function n(e){return 1===t?new Qu(e):new rc(e,t)}return n.beta=function(t){return e(+t)},n}(.85)
function oc(e,t,n){e._context.bezierCurveTo(e._x1+e._k*(e._x2-e._x0),e._y1+e._k*(e._y2-e._y0),e._x2+e._k*(e._x1-t),e._y2+e._k*(e._y1-n),e._x2,e._y2)}function ac(e,t){this._context=e,this._k=(1-t)/6}ac.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:oc(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2,this._x1=e,this._y1=t
break
case 2:this._point=3
default:oc(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const sc=function e(t){function n(e){return new ac(e,t)}return n.tension=function(t){return e(+t)},n}(0)
function lc(e,t){this._context=e,this._k=(1-t)/6}lc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:oc(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const uc=function e(t){function n(e){return new lc(e,t)}return n.tension=function(t){return e(+t)},n}(0)
function cc(e,t){this._context=e,this._k=(1-t)/6}cc.prototype={areaStart:ec,areaEnd:ec,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x3=e,this._y3=t
break
case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t)
break
case 2:this._point=3,this._x5=e,this._y5=t
break
default:oc(this,e,t)}this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const fc=function e(t){function n(e){return new cc(e,t)}return n.tension=function(t){return e(+t)},n}(0),dc=Math.abs,hc=Math.atan2,pc=Math.cos,gc=Math.max,mc=Math.min,yc=Math.sin,vc=Math.sqrt,bc=1e-12,xc=Math.PI,_c=xc/2,wc=2*xc
function Oc(e){return e>1?0:e<-1?xc:Math.acos(e)}function kc(e){return e>=1?_c:e<=-1?-_c:Math.asin(e)}function Ec(e,t,n){var r=e._x1,i=e._y1,o=e._x2,a=e._y2
if(e._l01_a>bc){var s=2*e._l01_2a+3*e._l01_a*e._l12_a+e._l12_2a,l=3*e._l01_a*(e._l01_a+e._l12_a)
r=(r*s-e._x0*e._l12_2a+e._x2*e._l01_2a)/l,i=(i*s-e._y0*e._l12_2a+e._y2*e._l01_2a)/l}if(e._l23_a>bc){var u=2*e._l23_2a+3*e._l23_a*e._l12_a+e._l12_2a,c=3*e._l23_a*(e._l23_a+e._l12_a)
o=(o*u+e._x1*e._l23_2a-t*e._l12_2a)/c,a=(a*u+e._y1*e._l23_2a-n*e._l12_2a)/c}e._context.bezierCurveTo(r,i,o,a,e._x2,e._y2)}function Ac(e,t){this._context=e,this._alpha=t}Ac.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2
break
case 2:this._point=3
default:Ec(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const Sc=function e(t){function n(e){return t?new Ac(e,t):new ac(e,0)}return n.alpha=function(t){return e(+t)},n}(.5)
function Dc(e,t){this._context=e,this._alpha=t}Dc.prototype={areaStart:ec,areaEnd:ec,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=e,this._y3=t
break
case 1:this._point=2,this._context.moveTo(this._x4=e,this._y4=t)
break
case 2:this._point=3,this._x5=e,this._y5=t
break
default:Ec(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const Cc=function e(t){function n(e){return t?new Dc(e,t):new cc(e,0)}return n.alpha=function(t){return e(+t)},n}(.5)
function Mc(e,t){this._context=e,this._alpha=t}Mc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){if(e=+e,t=+t,this._point){var n=this._x2-e,r=this._y2-t
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Ec(this,e,t)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=e,this._y0=this._y1,this._y1=this._y2,this._y2=t}}
const jc=function e(t){function n(e){return t?new Mc(e,t):new lc(e,0)}return n.alpha=function(t){return e(+t)},n}(.5)
function Fc(e){this._context=e}function Tc(e){return new Fc(e)}function Nc(e){this._context=e}function $c(e){return e<0?-1:1}function Pc(e,t,n){var r=e._x1-e._x0,i=t-e._x1,o=(e._y1-e._y0)/(r||i<0&&-0),a=(n-e._y1)/(i||r<0&&-0),s=(o*i+a*r)/(r+i)
return($c(o)+$c(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(s))||0}function zc(e,t){var n=e._x1-e._x0
return n?(3*(e._y1-e._y0)/n-t)/2:t}function Ic(e,t,n){var r=e._x0,i=e._y0,o=e._x1,a=e._y1,s=(o-r)/3
e._context.bezierCurveTo(r+s,i+s*t,o-s,a-s*n,o,a)}function Rc(e){this._context=e}function Lc(e){this._context=new Bc(e)}function Bc(e){this._context=e}function Uc(e){this._context=e}function qc(e){var t,n,r=e.length-1,i=new Array(r),o=new Array(r),a=new Array(r)
for(i[0]=0,o[0]=2,a[0]=e[0]+2*e[1],t=1;t<r-1;++t)i[t]=1,o[t]=4,a[t]=4*e[t]+2*e[t+1]
for(i[r-1]=2,o[r-1]=7,a[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=i[t]/o[t-1],o[t]-=n,a[t]-=n*a[t-1]
for(i[r-1]=a[r-1]/o[r-1],t=r-2;t>=0;--t)i[t]=(a[t]-i[t+1])/o[t]
for(o[r-1]=(e[r]+i[r-1])/2,t=0;t<r-1;++t)o[t]=2*e[t+1]-i[t+1]
return[i,o]}function Zc(e,t){this._context=e,this._t=t}Fc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2
default:this._context.lineTo(e,t)}}},Nc.prototype={areaStart:ec,areaEnd:ec,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}},Rc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:Ic(this,this._t0,zc(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var n=NaN
if(t=+t,(e=+e)!==this._x1||t!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2
break
case 2:this._point=3,Ic(this,zc(this,n=Pc(this,e,t)),n)
break
default:Ic(this,this._t0,n=Pc(this,e,t))}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=n}}},(Lc.prototype=Object.create(Rc.prototype)).point=function(e,t){Rc.prototype.point.call(this,t,e)},Bc.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,n,r,i,o){this._context.bezierCurveTo(t,e,r,n,o,i)}},Uc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,n=e.length
if(n)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),2===n)this._context.lineTo(e[1],t[1])
else for(var r=qc(e),i=qc(t),o=0,a=1;a<n;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],e[a],t[a]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}},Zc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t)
else{var n=this._x*(1-this._t)+e*this._t
this._context.lineTo(n,this._y),this._context.lineTo(n,t)}}this._x=e,this._y=t}}
const Wc=Math.PI,Vc=2*Wc,Hc=1e-6,Gc=Vc-Hc
function Yc(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Xc(){return new Yc}Yc.prototype=Xc.prototype={constructor:Yc,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,r){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(e,t,n,r,i,o){this._+="C"+ +e+","+ +t+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(e,t,n,r,i){e=+e,t=+t,n=+n,r=+r,i=+i
var o=this._x1,a=this._y1,s=n-e,l=r-t,u=o-e,c=a-t,f=u*u+c*c
if(i<0)throw new Error("negative radius: "+i)
if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t)
else if(f>Hc)if(Math.abs(c*s-l*u)>Hc&&i){var d=n-o,h=r-a,p=s*s+l*l,g=d*d+h*h,m=Math.sqrt(p),y=Math.sqrt(f),v=i*Math.tan((Wc-Math.acos((p+f-g)/(2*m*y)))/2),b=v/y,x=v/m
Math.abs(b-1)>Hc&&(this._+="L"+(e+b*u)+","+(t+b*c)),this._+="A"+i+","+i+",0,0,"+ +(c*d>u*h)+","+(this._x1=e+x*s)+","+(this._y1=t+x*l)}else this._+="L"+(this._x1=e)+","+(this._y1=t)},arc:function(e,t,n,r,i,o){e=+e,t=+t,o=!!o
var a=(n=+n)*Math.cos(r),s=n*Math.sin(r),l=e+a,u=t+s,c=1^o,f=o?r-i:i-r
if(n<0)throw new Error("negative radius: "+n)
null===this._x1?this._+="M"+l+","+u:(Math.abs(this._x1-l)>Hc||Math.abs(this._y1-u)>Hc)&&(this._+="L"+l+","+u),n&&(f<0&&(f=f%Vc+Vc),f>Gc?this._+="A"+n+","+n+",0,1,"+c+","+(e-a)+","+(t-s)+"A"+n+","+n+",0,1,"+c+","+(this._x1=l)+","+(this._y1=u):f>Hc&&(this._+="A"+n+","+n+",0,"+ +(f>=Wc)+","+c+","+(this._x1=e+n*Math.cos(i))+","+(this._y1=t+n*Math.sin(i))))},rect:function(e,t,n,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}}
const Jc=Xc
function Kc(e){return function(){return e}}function Qc(e){return e.innerRadius}function ef(e){return e.outerRadius}function tf(e){return e.startAngle}function nf(e){return e.endAngle}function rf(e){return e&&e.padAngle}function of(e,t,n,r,i,o,a,s){var l=n-e,u=r-t,c=a-i,f=s-o,d=f*l-c*u
if(!(d*d<bc))return[e+(d=(c*(t-o)-f*(e-i))/d)*l,t+d*u]}function af(e,t,n,r,i,o,a){var s=e-n,l=t-r,u=(a?o:-o)/vc(s*s+l*l),c=u*l,f=-u*s,d=e+c,h=t+f,p=n+c,g=r+f,m=(d+p)/2,y=(h+g)/2,v=p-d,b=g-h,x=v*v+b*b,_=i-o,w=d*g-p*h,O=(b<0?-1:1)*vc(gc(0,_*_*x-w*w)),k=(w*b-v*O)/x,E=(-w*v-b*O)/x,A=(w*b+v*O)/x,S=(-w*v+b*O)/x,D=k-m,C=E-y,M=A-m,j=S-y
return D*D+C*C>M*M+j*j&&(k=A,E=S),{cx:k,cy:E,x01:-c,y01:-f,x11:k*(i/_-1),y11:E*(i/_-1)}}function sf(e){return"object"==typeof e&&"length"in e?e:Array.from(e)}function lf(e){return e[0]}function uf(e){return e[1]}function cf(e,t){var n=Kc(!0),r=null,i=Tc,o=null
function a(a){var s,l,u,c=(a=sf(a)).length,f=!1
for(null==r&&(o=i(u=Jc())),s=0;s<=c;++s)!(s<c&&n(l=a[s],s,a))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+e(l,s,a),+t(l,s,a))
if(u)return o=null,u+""||null}return e="function"==typeof e?e:void 0===e?lf:Kc(e),t="function"==typeof t?t:void 0===t?uf:Kc(t),a.x=function(t){return arguments.length?(e="function"==typeof t?t:Kc(+t),a):e},a.y=function(e){return arguments.length?(t="function"==typeof e?e:Kc(+e),a):t},a.defined=function(e){return arguments.length?(n="function"==typeof e?e:Kc(!!e),a):n},a.curve=function(e){return arguments.length?(i=e,null!=r&&(o=i(r)),a):i},a.context=function(e){return arguments.length?(null==e?r=o=null:o=i(r=e),a):r},a}function ff(e,t,n){var r=null,i=Kc(!0),o=null,a=Tc,s=null
function l(l){var u,c,f,d,h,p=(l=sf(l)).length,g=!1,m=new Array(p),y=new Array(p)
for(null==o&&(s=a(h=Jc())),u=0;u<=p;++u){if(!(u<p&&i(d=l[u],u,l))===g)if(g=!g)c=u,s.areaStart(),s.lineStart()
else{for(s.lineEnd(),s.lineStart(),f=u-1;f>=c;--f)s.point(m[f],y[f])
s.lineEnd(),s.areaEnd()}g&&(m[u]=+e(d,u,l),y[u]=+t(d,u,l),s.point(r?+r(d,u,l):m[u],n?+n(d,u,l):y[u]))}if(h)return s=null,h+""||null}function u(){return cf().defined(i).curve(a).context(o)}return e="function"==typeof e?e:void 0===e?lf:Kc(+e),t="function"==typeof t?t:Kc(void 0===t?0:+t),n="function"==typeof n?n:void 0===n?uf:Kc(+n),l.x=function(t){return arguments.length?(e="function"==typeof t?t:Kc(+t),r=null,l):e},l.x0=function(t){return arguments.length?(e="function"==typeof t?t:Kc(+t),l):e},l.x1=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:Kc(+e),l):r},l.y=function(e){return arguments.length?(t="function"==typeof e?e:Kc(+e),n=null,l):t},l.y0=function(e){return arguments.length?(t="function"==typeof e?e:Kc(+e),l):t},l.y1=function(e){return arguments.length?(n=null==e?null:"function"==typeof e?e:Kc(+e),l):n},l.lineX0=l.lineY0=function(){return u().x(e).y(t)},l.lineY1=function(){return u().x(e).y(n)},l.lineX1=function(){return u().x(r).y(t)},l.defined=function(e){return arguments.length?(i="function"==typeof e?e:Kc(!!e),l):i},l.curve=function(e){return arguments.length?(a=e,null!=o&&(s=a(o)),l):a},l.context=function(e){return arguments.length?(null==e?o=s=null:s=a(o=e),l):o},l}Array.prototype.slice,vc(3)
const df={draw(e,t){const n=vc(t/xc)
e.moveTo(n,0),e.arc(0,0,n,0,wc)}}
function hf(e,t){if("undefined"!=typeof document&&document.createElement){const n=document.createElement("canvas")
if(n&&n.getContext)return n.width=e,n.height=t,n}return null}vc(1/3),yc(xc/10),yc(7*xc/10),yc(wc/10),pc(wc/10),vc(3),vc(3),vc(3),vc(12)
const pf=pr(dr),gf=pf.right,mf=pf.left,yf=(pr(Ds).center,gf)
function vf(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function bf(e,t){var n=Object.create(e.prototype)
for(var r in t)n[r]=t[r]
return n}function xf(){}var _f=.7,wf=1/_f,Of="\\s*([+-]?\\d+)\\s*",kf="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ef="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Af=/^#([0-9a-f]{3,8})$/,Sf=new RegExp(`^rgb\\(${Of},${Of},${Of}\\)$`),Df=new RegExp(`^rgb\\(${Ef},${Ef},${Ef}\\)$`),Cf=new RegExp(`^rgba\\(${Of},${Of},${Of},${kf}\\)$`),Mf=new RegExp(`^rgba\\(${Ef},${Ef},${Ef},${kf}\\)$`),jf=new RegExp(`^hsl\\(${kf},${Ef},${Ef}\\)$`),Ff=new RegExp(`^hsla\\(${kf},${Ef},${Ef},${kf}\\)$`),Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
function Nf(){return this.rgb().formatHex()}function $f(){return this.rgb().formatRgb()}function Pf(e){var t,n
return e=(e+"").trim().toLowerCase(),(t=Af.exec(e))?(n=t[1].length,t=parseInt(t[1],16),6===n?zf(t):3===n?new Bf(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===n?If(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===n?If(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=Sf.exec(e))?new Bf(t[1],t[2],t[3],1):(t=Df.exec(e))?new Bf(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=Cf.exec(e))?If(t[1],t[2],t[3],t[4]):(t=Mf.exec(e))?If(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=jf.exec(e))?Hf(t[1],t[2]/100,t[3]/100,1):(t=Ff.exec(e))?Hf(t[1],t[2]/100,t[3]/100,t[4]):Tf.hasOwnProperty(e)?zf(Tf[e]):"transparent"===e?new Bf(NaN,NaN,NaN,0):null}function zf(e){return new Bf(e>>16&255,e>>8&255,255&e,1)}function If(e,t,n,r){return r<=0&&(e=t=n=NaN),new Bf(e,t,n,r)}function Rf(e){return e instanceof xf||(e=Pf(e)),e?new Bf((e=e.rgb()).r,e.g,e.b,e.opacity):new Bf}function Lf(e,t,n,r){return 1===arguments.length?Rf(e):new Bf(e,t,n,null==r?1:r)}function Bf(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}function Uf(){return`#${Vf(this.r)}${Vf(this.g)}${Vf(this.b)}`}function qf(){const e=Zf(this.opacity)
return`${1===e?"rgb(":"rgba("}${Wf(this.r)}, ${Wf(this.g)}, ${Wf(this.b)}${1===e?")":`, ${e})`}`}function Zf(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Wf(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Vf(e){return((e=Wf(e))<16?"0":"")+e.toString(16)}function Hf(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Xf(e,t,n,r)}function Gf(e){if(e instanceof Xf)return new Xf(e.h,e.s,e.l,e.opacity)
if(e instanceof xf||(e=Pf(e)),!e)return new Xf
if(e instanceof Xf)return e
var t=(e=e.rgb()).r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),o=Math.max(t,n,r),a=NaN,s=o-i,l=(o+i)/2
return s?(a=t===o?(n-r)/s+6*(n<r):n===o?(r-t)/s+2:(t-n)/s+4,s/=l<.5?o+i:2-o-i,a*=60):s=l>0&&l<1?0:a,new Xf(a,s,l,e.opacity)}function Yf(e,t,n,r){return 1===arguments.length?Gf(e):new Xf(e,t,n,null==r?1:r)}function Xf(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function Jf(e){return(e=(e||0)%360)<0?e+360:e}function Kf(e){return Math.max(0,Math.min(1,e||0))}function Qf(e,t,n){return 255*(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)}function ed(e,t,n,r,i){var o=e*e,a=o*e
return((1-3*e+3*o-a)*t+(4-6*o+3*a)*n+(1+3*e+3*o-3*a)*r+a*i)/6}function td(e){var t=e.length-1
return function(n){var r=n<=0?n=0:n>=1?(n=1,t-1):Math.floor(n*t),i=e[r],o=e[r+1],a=r>0?e[r-1]:2*i-o,s=r<t-1?e[r+2]:2*o-i
return ed((n-r/t)*t,a,i,o,s)}}function nd(e){var t=e.length
return function(n){var r=Math.floor(((n%=1)<0?++n:n)*t),i=e[(r+t-1)%t],o=e[r%t],a=e[(r+1)%t],s=e[(r+2)%t]
return ed((n-r/t)*t,i,o,a,s)}}vf(xf,Pf,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Nf,formatHex:Nf,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Gf(this).formatHsl()},formatRgb:$f,toString:$f}),vf(Bf,Lf,bf(xf,{brighter(e){return e=null==e?wf:Math.pow(wf,e),new Bf(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?_f:Math.pow(_f,e),new Bf(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Bf(Wf(this.r),Wf(this.g),Wf(this.b),Zf(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Uf,formatHex:Uf,formatHex8:function(){return`#${Vf(this.r)}${Vf(this.g)}${Vf(this.b)}${Vf(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:qf,toString:qf})),vf(Xf,Yf,bf(xf,{brighter(e){return e=null==e?wf:Math.pow(wf,e),new Xf(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?_f:Math.pow(_f,e),new Xf(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r
return new Bf(Qf(e>=240?e-240:e+120,i,r),Qf(e,i,r),Qf(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Xf(Jf(this.h),Kf(this.s),Kf(this.l),Zf(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Zf(this.opacity)
return`${1===e?"hsl(":"hsla("}${Jf(this.h)}, ${100*Kf(this.s)}%, ${100*Kf(this.l)}%${1===e?")":`, ${e})`}`}}))
const rd=e=>()=>e
function id(e,t){return function(n){return e+n*t}}function od(e,t){var n=t-e
return n?id(e,n>180||n<-180?n-360*Math.round(n/360):n):rd(isNaN(e)?t:e)}function ad(e,t){var n=t-e
return n?id(e,n):rd(isNaN(e)?t:e)}const sd=function e(t){var n=function(e){return 1==(e=+e)?ad:function(t,n){return n-t?function(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}(t,n,e):rd(isNaN(t)?n:t)}}(t)
function r(e,t){var r=n((e=Lf(e)).r,(t=Lf(t)).r),i=n(e.g,t.g),o=n(e.b,t.b),a=ad(e.opacity,t.opacity)
return function(t){return e.r=r(t),e.g=i(t),e.b=o(t),e.opacity=a(t),e+""}}return r.gamma=e,r}(1)
function ld(e){return function(t){var n,r,i=t.length,o=new Array(i),a=new Array(i),s=new Array(i)
for(n=0;n<i;++n)r=Lf(t[n]),o[n]=r.r||0,a[n]=r.g||0,s[n]=r.b||0
return o=e(o),a=e(a),s=e(s),r.opacity=1,function(e){return r.r=o(e),r.g=a(e),r.b=s(e),r+""}}}var ud=ld(td),cd=ld(nd)
function fd(e,t){t||(t=[])
var n,r=e?Math.min(t.length,e.length):0,i=t.slice()
return function(o){for(n=0;n<r;++n)i[n]=e[n]*(1-o)+t[n]*o
return i}}function dd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function hd(e,t){return(dd(t)?fd:pd)(e,t)}function pd(e,t){var n,r=t?t.length:0,i=e?Math.min(r,e.length):0,o=new Array(i),a=new Array(r)
for(n=0;n<i;++n)o[n]=_d(e[n],t[n])
for(;n<r;++n)a[n]=t[n]
return function(e){for(n=0;n<i;++n)a[n]=o[n](e)
return a}}function gd(e,t){var n=new Date
return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function md(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function yd(e,t){var n,r={},i={}
for(n in null!==e&&"object"==typeof e||(e={}),null!==t&&"object"==typeof t||(t={}),t)n in e?r[n]=_d(e[n],t[n]):i[n]=t[n]
return function(e){for(n in r)i[n]=r[n](e)
return i}}var vd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,bd=new RegExp(vd.source,"g")
function xd(e,t){var n,r,i,o=vd.lastIndex=bd.lastIndex=0,a=-1,s=[],l=[]
for(e+="",t+="";(n=vd.exec(e))&&(r=bd.exec(t));)(i=r.index)>o&&(i=t.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(n=n[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,l.push({i:a,x:md(n,r)})),o=bd.lastIndex
return o<t.length&&(i=t.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?l[0]?function(e){return function(t){return e(t)+""}}(l[0].x):function(e){return function(){return e}}(t):(t=l.length,function(e){for(var n,r=0;r<t;++r)s[(n=l[r]).i]=n.x(e)
return s.join("")})}function _d(e,t){var n,r=typeof t
return null==t||"boolean"===r?rd(t):("number"===r?md:"string"===r?(n=Pf(t))?(t=n,sd):xd:t instanceof Pf?sd:t instanceof Date?gd:dd(t)?fd:Array.isArray(t)?pd:"function"!=typeof t.valueOf&&"function"!=typeof t.toString||isNaN(t)?yd:md)(e,t)}function wd(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}function Od(e){return+e}var kd=[0,1]
function Ed(e){return e}function Ad(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:(n=isNaN(t)?NaN:.5,function(){return n})
var n}function Sd(e,t,n){var r=e[0],i=e[1],o=t[0],a=t[1]
return i<r?(r=Ad(i,r),o=n(a,o)):(r=Ad(r,i),o=n(o,a)),function(e){return o(r(e))}}function Dd(e,t,n){var r=Math.min(e.length,t.length)-1,i=new Array(r),o=new Array(r),a=-1
for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=Ad(e[a],e[a+1]),o[a]=n(t[a],t[a+1])
return function(t){var n=yf(e,t,1,r)-1
return o[n](i[n](t))}}function Cd(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Md(){var e,t,n,r,i,o,a=kd,s=kd,l=_d,u=Ed
function c(){var e=Math.min(a.length,s.length)
return u!==Ed&&(u=function(e,t){var n
return e>t&&(n=e,e=t,t=n),function(n){return Math.max(e,Math.min(t,n))}}(a[0],a[e-1])),r=e>2?Dd:Sd,i=o=null,f}function f(t){return null==t||isNaN(t=+t)?n:(i||(i=r(a.map(e),s,l)))(e(u(t)))}return f.invert=function(n){return u(t((o||(o=r(s,a.map(e),md)))(n)))},f.domain=function(e){return arguments.length?(a=Array.from(e,Od),c()):a.slice()},f.range=function(e){return arguments.length?(s=Array.from(e),c()):s.slice()},f.rangeRound=function(e){return s=Array.from(e),l=wd,c()},f.clamp=function(e){return arguments.length?(u=!!e||Ed,c()):u!==Ed},f.interpolate=function(e){return arguments.length?(l=e,c()):l},f.unknown=function(e){return arguments.length?(n=e,f):n},function(n,r){return e=n,t=r,c()}}function jd(){return Md()(Ed,Ed)}function Fd(e,t){switch(arguments.length){case 0:break
case 1:this.range(e)
break
default:this.range(t).domain(e)}return this}function Td(e,t){switch(arguments.length){case 0:break
case 1:"function"==typeof e?this.interpolator(e):this.range(e)
break
default:this.domain(e),"function"==typeof t?this.interpolator(t):this.range(t)}return this}function Nd(e,t,n,r){var i,o=Jt(e,t,n)
switch((r=en(null==r?",f":r)).type){case"s":var a=Math.max(Math.abs(e),Math.abs(t))
return null!=r.precision||isNaN(i=on(o,a))||(r.precision=i),hn(r,a)
case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=an(o,Math.max(Math.abs(e),Math.abs(t))))||(r.precision=i-("e"===r.type))
break
case"f":case"%":null!=r.precision||isNaN(i=sn(o))||(r.precision=i-2*("%"===r.type))}return dn(r)}function $d(e){var t=e.domain
return e.ticks=function(e){var n=t()
return Yt(n[0],n[n.length-1],null==e?10:e)},e.tickFormat=function(e,n){var r=t()
return Nd(r[0],r[r.length-1],null==e?10:e,n)},e.nice=function(n){null==n&&(n=10)
var r,i,o=t(),a=0,s=o.length-1,l=o[a],u=o[s],c=10
for(u<l&&(i=l,l=u,u=i,i=a,a=s,s=i);c-- >0;){if((i=Xt(l,u,n))===r)return o[a]=l,o[s]=u,t(o)
if(i>0)l=Math.floor(l/i)*i,u=Math.ceil(u/i)*i
else{if(!(i<0))break
l=Math.ceil(l*i)/i,u=Math.floor(u*i)/i}r=i}return e},e}function Pd(e,t){var n,r=0,i=(e=e.slice()).length-1,o=e[r],a=e[i]
return a<o&&(n=r,r=i,i=n,n=o,o=a,a=n),e[r]=t.floor(o),e[i]=t.ceil(a),e}function zd(e){return Math.log(e)}function Id(e){return Math.exp(e)}function Rd(e){return-Math.log(-e)}function Ld(e){return-Math.exp(-e)}function Bd(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Ud(e){return(t,n)=>-e(-t,n)}function qd(e){const t=e(zd,Id),n=t.domain
let r,i,o=10
function a(){return r=function(e){return e===Math.E?Math.log:10===e&&Math.log10||2===e&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}(o),i=function(e){return 10===e?Bd:e===Math.E?Math.exp:t=>Math.pow(e,t)}(o),n()[0]<0?(r=Ud(r),i=Ud(i),e(Rd,Ld)):e(zd,Id),t}return t.base=function(e){return arguments.length?(o=+e,a()):o},t.domain=function(e){return arguments.length?(n(e),a()):n()},t.ticks=e=>{const t=n()
let a=t[0],s=t[t.length-1]
const l=s<a
l&&([a,s]=[s,a])
let u,c,f=r(a),d=r(s)
const h=null==e?10:+e
let p=[]
if(!(o%1)&&d-f<h){if(f=Math.floor(f),d=Math.ceil(d),a>0){for(;f<=d;++f)for(u=1;u<o;++u)if(c=f<0?u/i(-f):u*i(f),!(c<a)){if(c>s)break
p.push(c)}}else for(;f<=d;++f)for(u=o-1;u>=1;--u)if(c=f>0?u/i(-f):u*i(f),!(c<a)){if(c>s)break
p.push(c)}2*p.length<h&&(p=Yt(a,s,h))}else p=Yt(f,d,Math.min(d-f,h)).map(i)
return l?p.reverse():p},t.tickFormat=(e,n)=>{if(null==e&&(e=10),null==n&&(n=10===o?"s":","),"function"!=typeof n&&(o%1||null!=(n=en(n)).precision||(n.trim=!0),n=dn(n)),e===1/0)return n
const a=Math.max(1,o*e/t.ticks().length)
return e=>{let t=e/i(Math.round(r(e)))
return t*o<o-.5&&(t*=o),t<=a?n(e):""}},t.nice=()=>n(Pd(n(),{floor:e=>i(Math.floor(r(e))),ceil:e=>i(Math.ceil(r(e)))})),t}function Zd(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Wd(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Vd(e){return e<0?-e*e:e*e}function Hd(e){var t=e(Ed,Ed),n=1
function r(){return 1===n?e(Ed,Ed):.5===n?e(Wd,Vd):e(Zd(n),Zd(1/n))}return t.exponent=function(e){return arguments.length?(n=+e,r()):n},$d(t)}function Gd(){var e=Hd(Md())
return e.copy=function(){return Cd(e,Gd()).exponent(e.exponent())},Fd.apply(e,arguments),e}function Yd(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function Xd(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function Jd(e){var t=1,n=e(Yd(t),Xd(t))
return n.constant=function(n){return arguments.length?e(Yd(t=+n),Xd(t)):t},$d(n)}function Kd(e,t,n,r,i,o){const a=[[tr,1,xn],[tr,5,5e3],[tr,15,15e3],[tr,30,3e4],[o,1,_n],[o,5,3e5],[o,15,9e5],[o,30,18e5],[i,1,wn],[i,3,108e5],[i,6,216e5],[i,12,432e5],[r,1,On],[r,2,1728e5],[n,1,kn],[t,1,2592e6],[t,3,7776e6],[e,1,En]]
function s(t,n,r){const i=Math.abs(n-t)/r,o=pr((e=>{let[,,t]=e
return t})).right(a,i)
if(o===a.length)return e.every(Jt(t/En,n/En,r))
if(0===o)return rr.every(Math.max(Jt(t,n,r),1))
const[s,l]=a[i/a[o-1][2]<a[o][2]/i?o-1:o]
return s.every(l)}return[function(e,t,n){const r=t<e
r&&([e,t]=[t,e])
const i=n&&"function"==typeof n.range?n:s(e,t,n),o=i?i.range(e,+t+1):[]
return r?o.reverse():o},s]}const[Qd,eh]=Kd(or,sr,Rn,zn,ur,fr),[th,nh]=Kd(Hn,Yn,Cn,Sn,Jn,Qn)
function rh(e){return new Date(e)}function ih(e){return e instanceof Date?+e:+new Date(+e)}function oh(e,t,n,r,i,o,a,s,l,u){var c=jd(),f=c.invert,d=c.domain,h=u(".%L"),p=u(":%S"),g=u("%I:%M"),m=u("%I %p"),y=u("%a %d"),v=u("%b %d"),b=u("%B"),x=u("%Y")
function _(e){return(l(e)<e?h:s(e)<e?p:a(e)<e?g:o(e)<e?m:r(e)<e?i(e)<e?y:v:n(e)<e?b:x)(e)}return c.invert=function(e){return new Date(f(e))},c.domain=function(e){return arguments.length?d(Array.from(e,ih)):d().map(rh)},c.ticks=function(t){var n=d()
return e(n[0],n[n.length-1],null==t?10:t)},c.tickFormat=function(e,t){return null==t?_:u(t)},c.nice=function(e){var n=d()
return e&&"function"==typeof e.range||(e=t(n[0],n[n.length-1],null==e?10:e)),e?d(Pd(n,e)):c},c.copy=function(){return Cd(c,oh(e,t,n,r,i,o,a,s,l,u))},c}function ah(){var e,t,n,r,i,o=0,a=1,s=Ed,l=!1
function u(t){return null==t||isNaN(t=+t)?i:s(0===n?.5:(t=(r(t)-e)*n,l?Math.max(0,Math.min(1,t)):t))}function c(e){return function(t){var n,r
return arguments.length?([n,r]=t,s=e(n,r),u):[s(0),s(1)]}}return u.domain=function(i){return arguments.length?([o,a]=i,e=r(o=+o),t=r(a=+a),n=e===t?0:1/(t-e),u):[o,a]},u.clamp=function(e){return arguments.length?(l=!!e,u):l},u.interpolator=function(e){return arguments.length?(s=e,u):s},u.range=c(_d),u.rangeRound=c(wd),u.unknown=function(e){return arguments.length?(i=e,u):i},function(i){return r=i,e=i(o),t=i(a),n=e===t?0:1/(t-e),u}}function sh(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function lh(){var e=$d(ah()(Ed))
return e.copy=function(){return sh(e,lh())},Td.apply(e,arguments)}function uh(){var e=Hd(ah())
return e.copy=function(){return sh(e,uh()).exponent(e.exponent())},Td.apply(e,arguments)}function ch(e,t){void 0===t&&(t=e,e=_d)
for(var n=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);n<r;)o[n]=e(i,i=t[++n])
return function(e){var t=Math.max(0,Math.min(r-1,Math.floor(e*=r)))
return o[t](e-t)}}function fh(){var e,t,n,r,i,o,a,s=0,l=.5,u=1,c=1,f=Ed,d=!1
function h(e){return isNaN(e=+e)?a:(e=.5+((e=+o(e))-t)*(c*e<c*t?r:i),f(d?Math.max(0,Math.min(1,e)):e))}function p(e){return function(t){var n,r,i
return arguments.length?([n,r,i]=t,f=ch(e,[n,r,i]),h):[f(0),f(.5),f(1)]}}return h.domain=function(a){return arguments.length?([s,l,u]=a,e=o(s=+s),t=o(l=+l),n=o(u=+u),r=e===t?0:.5/(t-e),i=t===n?0:.5/(n-t),c=t<e?-1:1,h):[s,l,u]},h.clamp=function(e){return arguments.length?(d=!!e,h):d},h.interpolator=function(e){return arguments.length?(f=e,h):f},h.range=p(_d),h.rangeRound=p(wd),h.unknown=function(e){return arguments.length?(a=e,h):a},function(a){return o=a,e=a(s),t=a(l),n=a(u),r=e===t?0:.5/(t-e),i=t===n?0:.5/(n-t),c=t<e?-1:1,h}}function dh(){var e=Hd(fh())
return e.copy=function(){return sh(e,dh()).exponent(e.exponent())},Td.apply(e,arguments)}class hh extends Map{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:vh
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const[n,r]of e)this.set(n,r)}get(e){return super.get(gh(this,e))}has(e){return super.has(gh(this,e))}set(e,t){return super.set(mh(this,e),t)}delete(e){return super.delete(yh(this,e))}}class ph extends Set{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:vh
if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const n of e)this.add(n)}has(e){return super.has(gh(this,e))}add(e){return super.add(mh(this,e))}delete(e){return super.delete(yh(this,e))}}function gh(e,t){let{_intern:n,_key:r}=e
const i=r(t)
return n.has(i)?n.get(i):t}function mh(e,t){let{_intern:n,_key:r}=e
const i=r(t)
return n.has(i)?n.get(i):(n.set(i,t),t)}function yh(e,t){let{_intern:n,_key:r}=e
const i=r(t)
return n.has(i)&&(t=n.get(i),n.delete(i)),t}function vh(e){return null!==e&&"object"==typeof e?e.valueOf():e}const bh=Symbol("implicit")
function xh(){var e=new hh,t=[],n=[],r=bh
function i(i){let o=e.get(i)
if(void 0===o){if(r!==bh)return r
e.set(i,o=t.push(i)-1)}return n[o%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice()
t=[],e=new hh
for(const r of n)e.has(r)||e.set(r,t.push(r)-1)
return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return xh(t,n).unknown(r)},Fd.apply(i,arguments),i}function _h(e){var t=e.length
return function(n){return e[Math.max(0,Math.min(t-1,Math.floor(n*t)))]}}function wh(e,t){var n=od(+e,+t)
return function(e){var t=n(e)
return t-360*Math.floor(t/360)}}var Oh,kh=180/Math.PI,Eh={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1}
function Ah(e,t,n,r,i,o){var a,s,l
return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,l/=s),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,e)*kh,skewX:Math.atan(l)*kh,scaleX:a,scaleY:s}}function Sh(e,t,n,r){function i(e){return e.length?e.pop()+" ":""}return function(o,a){var s=[],l=[]
return o=e(o),a=e(a),function(e,r,i,o,a,s){if(e!==i||r!==o){var l=a.push("translate(",null,t,null,n)
s.push({i:l-4,x:md(e,i)},{i:l-2,x:md(r,o)})}else(i||o)&&a.push("translate("+i+t+o+n)}(o.translateX,o.translateY,a.translateX,a.translateY,s,l),function(e,t,n,o){e!==t?(e-t>180?t+=360:t-e>180&&(e+=360),o.push({i:n.push(i(n)+"rotate(",null,r)-2,x:md(e,t)})):t&&n.push(i(n)+"rotate("+t+r)}(o.rotate,a.rotate,s,l),function(e,t,n,o){e!==t?o.push({i:n.push(i(n)+"skewX(",null,r)-2,x:md(e,t)}):t&&n.push(i(n)+"skewX("+t+r)}(o.skewX,a.skewX,s,l),function(e,t,n,r,o,a){if(e!==n||t!==r){var s=o.push(i(o)+"scale(",null,",",null,")")
a.push({i:s-4,x:md(e,n)},{i:s-2,x:md(t,r)})}else 1===n&&1===r||o.push(i(o)+"scale("+n+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,s,l),o=a=null,function(e){for(var t,n=-1,r=l.length;++n<r;)s[(t=l[n]).i]=t.x(e)
return s.join("")}}}var Dh=Sh((function(e){const t=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(e+"")
return t.isIdentity?Eh:Ah(t.a,t.b,t.c,t.d,t.e,t.f)}),"px, ","px)","deg)"),Ch=Sh((function(e){return null==e?Eh:(Oh||(Oh=document.createElementNS("http://www.w3.org/2000/svg","g")),Oh.setAttribute("transform",e),(e=Oh.transform.baseVal.consolidate())?Ah((e=e.matrix).a,e.b,e.c,e.d,e.e,e.f):Eh)}),", ",")",")")
function Mh(e){return((e=Math.exp(e))+1/e)/2}const jh=function e(t,n,r){function i(e,i){var o,a,s=e[0],l=e[1],u=e[2],c=i[0],f=i[1],d=i[2],h=c-s,p=f-l,g=h*h+p*p
if(g<1e-12)a=Math.log(d/u)/t,o=function(e){return[s+e*h,l+e*p,u*Math.exp(t*e*a)]}
else{var m=Math.sqrt(g),y=(d*d-u*u+r*g)/(2*u*n*m),v=(d*d-u*u-r*g)/(2*d*n*m),b=Math.log(Math.sqrt(y*y+1)-y),x=Math.log(Math.sqrt(v*v+1)-v)
a=(x-b)/t,o=function(e){var r,i=e*a,o=Mh(b),c=u/(n*m)*(o*(r=t*i+b,((r=Math.exp(2*r))-1)/(r+1))-function(e){return((e=Math.exp(e))-1/e)/2}(b))
return[s+c*h,l+c*p,u*o/Mh(t*i+b)]}}return o.duration=1e3*a*t/Math.SQRT2,o}return i.rho=function(t){var n=Math.max(.001,+t),r=n*n
return e(n,r,r*r)},i}(Math.SQRT2,2,4)
function Fh(e){return function(t,n){var r=e((t=Yf(t)).h,(n=Yf(n)).h),i=ad(t.s,n.s),o=ad(t.l,n.l),a=ad(t.opacity,n.opacity)
return function(e){return t.h=r(e),t.s=i(e),t.l=o(e),t.opacity=a(e),t+""}}}const Th=Fh(od)
var Nh=Fh(ad)
const $h=Math.PI/180,Ph=180/Math.PI,zh=.96422,Ih=.82521,Rh=4/29,Lh=6/29,Bh=3*Lh*Lh
function Uh(e){if(e instanceof Zh)return new Zh(e.l,e.a,e.b,e.opacity)
if(e instanceof Jh)return Kh(e)
e instanceof Bf||(e=Rf(e))
var t,n,r=Gh(e.r),i=Gh(e.g),o=Gh(e.b),a=Wh((.2225045*r+.7168786*i+.0606169*o)/1)
return r===i&&i===o?t=n=a:(t=Wh((.4360747*r+.3850649*i+.1430804*o)/zh),n=Wh((.0139322*r+.0971045*i+.7141733*o)/Ih)),new Zh(116*a-16,500*(t-a),200*(a-n),e.opacity)}function qh(e,t,n,r){return 1===arguments.length?Uh(e):new Zh(e,t,n,null==r?1:r)}function Zh(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}function Wh(e){return e>.008856451679035631?Math.pow(e,1/3):e/Bh+Rh}function Vh(e){return e>Lh?e*e*e:Bh*(e-Rh)}function Hh(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function Gh(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function Yh(e){if(e instanceof Jh)return new Jh(e.h,e.c,e.l,e.opacity)
if(e instanceof Zh||(e=Uh(e)),0===e.a&&0===e.b)return new Jh(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity)
var t=Math.atan2(e.b,e.a)*Ph
return new Jh(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Xh(e,t,n,r){return 1===arguments.length?Yh(e):new Jh(e,t,n,null==r?1:r)}function Jh(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function Kh(e){if(isNaN(e.h))return new Zh(e.l,0,0,e.opacity)
var t=e.h*$h
return new Zh(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}function Qh(e,t){var n=ad((e=qh(e)).l,(t=qh(t)).l),r=ad(e.a,t.a),i=ad(e.b,t.b),o=ad(e.opacity,t.opacity)
return function(t){return e.l=n(t),e.a=r(t),e.b=i(t),e.opacity=o(t),e+""}}function ep(e){return function(t,n){var r=e((t=Xh(t)).h,(n=Xh(n)).h),i=ad(t.c,n.c),o=ad(t.l,n.l),a=ad(t.opacity,n.opacity)
return function(e){return t.h=r(e),t.c=i(e),t.l=o(e),t.opacity=a(e),t+""}}}vf(Zh,qh,bf(xf,{brighter(e){return new Zh(this.l+18*(null==e?1:e),this.a,this.b,this.opacity)},darker(e){return new Zh(this.l-18*(null==e?1:e),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200
return new Bf(Hh(3.1338561*(t=zh*Vh(t))-1.6168667*(e=1*Vh(e))-.4906146*(n=Ih*Vh(n))),Hh(-.9787684*t+1.9161415*e+.033454*n),Hh(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}})),vf(Jh,Xh,bf(xf,{brighter(e){return new Jh(this.h,this.c,this.l+18*(null==e?1:e),this.opacity)},darker(e){return new Jh(this.h,this.c,this.l-18*(null==e?1:e),this.opacity)},rgb(){return Kh(this).rgb()}}))
const tp=ep(od)
var np=ep(ad),rp=-.14861,ip=1.78277,op=-.29227,ap=-.90649,sp=1.97294,lp=sp*ap,up=sp*ip,cp=ip*op-ap*rp
function fp(e){if(e instanceof hp)return new hp(e.h,e.s,e.l,e.opacity)
e instanceof Bf||(e=Rf(e))
var t=e.r/255,n=e.g/255,r=e.b/255,i=(cp*r+lp*t-up*n)/(cp+lp-up),o=r-i,a=(sp*(n-i)-op*o)/ap,s=Math.sqrt(a*a+o*o)/(sp*i*(1-i)),l=s?Math.atan2(a,o)*Ph-120:NaN
return new hp(l<0?l+360:l,s,i,e.opacity)}function dp(e,t,n,r){return 1===arguments.length?fp(e):new hp(e,t,n,null==r?1:r)}function hp(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}function pp(e){return function t(n){function r(t,r){var i=e((t=dp(t)).h,(r=dp(r)).h),o=ad(t.s,r.s),a=ad(t.l,r.l),s=ad(t.opacity,r.opacity)
return function(e){return t.h=i(e),t.s=o(e),t.l=a(Math.pow(e,n)),t.opacity=s(e),t+""}}return n=+n,r.gamma=t,r}(1)}vf(hp,dp,bf(xf,{brighter(e){return e=null==e?wf:Math.pow(wf,e),new hp(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?_f:Math.pow(_f,e),new hp(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=isNaN(this.h)?0:(this.h+120)*$h,t=+this.l,n=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(e),i=Math.sin(e)
return new Bf(255*(t+n*(rp*r+ip*i)),255*(t+n*(op*r+ap*i)),255*(t+n*(sp*r)),this.opacity)}}))
const gp=pp(od)
var mp=pp(ad)
function yp(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e(r/(t-1))
return n}function vp(e,t,n){const r=e-t+2*n
return e?r>0?r:1:0}const bp="linear",xp="log",_p="pow",wp="sqrt",Op="symlog",kp="time",Ep="utc",Ap="sequential",Sp="diverging",Dp="quantile",Cp="quantize",Mp="threshold",jp="ordinal",Fp="point",Tp="band",Np="bin-ordinal",$p="continuous",Pp="discrete",zp="discretizing",Ip="interpolating",Rp="temporal"
function Lp(){const e=xh().unknown(void 0),t=e.domain,n=e.range
let r,i,o=[0,1],a=!1,s=0,l=0,u=.5
function c(){const e=t().length,c=o[1]<o[0],f=o[1-c],d=vp(e,s,l)
let h=o[c-0]
r=(f-h)/(d||1),a&&(r=Math.floor(r)),h+=(f-h-r*(e-s))*u,i=r*(1-s),a&&(h=Math.round(h),i=Math.round(i))
const p=Al(e).map((e=>h+r*e))
return n(c?p.reverse():p)}return delete e.unknown,e.domain=function(e){return arguments.length?(t(e),c()):t()},e.range=function(e){return arguments.length?(o=[+e[0],+e[1]],c()):o.slice()},e.rangeRound=function(e){return o=[+e[0],+e[1]],a=!0,c()},e.bandwidth=function(){return i},e.step=function(){return r},e.round=function(e){return arguments.length?(a=!!e,c()):a},e.padding=function(e){return arguments.length?(l=Math.max(0,Math.min(1,e)),s=l,c()):s},e.paddingInner=function(e){return arguments.length?(s=Math.max(0,Math.min(1,e)),c()):s},e.paddingOuter=function(e){return arguments.length?(l=Math.max(0,Math.min(1,e)),c()):l},e.align=function(e){return arguments.length?(u=Math.max(0,Math.min(1,e)),c()):u},e.invertRange=function(e){if(null==e[0]||null==e[1])return
const r=o[1]<o[0],a=r?n().reverse():n(),s=a.length-1
let l,u,c,f=+e[0],d=+e[1]
return f!=f||d!=d||(d<f&&(c=f,f=d,d=c),d<a[0]||f>o[1-r])?void 0:(l=Math.max(0,gf(a,f)-1),u=f===d?l:gf(a,d)-1,f-a[l]>i+1e-10&&++l,r&&(c=l,l=s-u,u=s-c),l>u?void 0:t().slice(l,u+1))},e.invert=function(t){const n=e.invertRange([t,t])
return n?n[0]:n},e.copy=function(){return Lp().domain(t()).range(o).round(a).paddingInner(s).paddingOuter(l).align(u)},c()}function Bp(e){const t=e.copy
return e.padding=e.paddingOuter,delete e.paddingInner,e.copy=function(){return Bp(t())},e}var Up=Array.prototype.map
function qp(e){return Up.call(e,De)}const Zp=Array.prototype.slice,Wp={}
function Vp(e,t,n){const r=function(){const n=t()
return n.invertRange||(n.invertRange=n.invert?(r=n,function(e){let t,n=e[0],i=e[1]
return i<n&&(t=n,n=i,i=t),[r.invert(n),r.invert(i)]}):n.invertExtent?function(e){return function(t){const n=e.range()
let r,i,o,a,s=t[0],l=t[1],u=-1
for(l<s&&(i=s,s=l,l=i),o=0,a=n.length;o<a;++o)n[o]>=s&&n[o]<=l&&(u<0&&(u=o),r=o)
if(!(u<0))return s=e.invertExtent(n[u]),l=e.invertExtent(n[r]),[void 0===s[0]?s[1]:s[0],void 0===l[1]?l[0]:l[1]]}}(n):void 0),n.type=e,n
var r}
return r.metadata=Mt(Ve(n)),r}function Hp(e,t,n){return arguments.length>1?(Wp[e]=Vp(e,t,n),this):Gp(e)?Wp[e]:void 0}function Gp(e){return at(Wp,e)}function Yp(e,t){const n=Wp[e]
return n&&n.metadata[t]}function Xp(e){return Yp(e,$p)}function Jp(e){return Yp(e,Pp)}function Kp(e){return Yp(e,zp)}function Qp(e){return Yp(e,xp)}function eg(e){return Yp(e,Ip)}function tg(e){return Yp(e,Dp)}Hp("identity",(function e(t){var n
function r(e){return null==e||isNaN(e=+e)?n:e}return r.invert=r,r.domain=r.range=function(e){return arguments.length?(t=Array.from(e,Od),r):t.slice()},r.unknown=function(e){return arguments.length?(n=e,r):n},r.copy=function(){return e(t).unknown(n)},t=arguments.length?Array.from(t,Od):[0,1],$d(r)})),Hp(bp,(function e(){var t=jd()
return t.copy=function(){return Cd(t,e())},Fd.apply(t,arguments),$d(t)}),$p),Hp(xp,(function e(){const t=qd(Md()).domain([1,10])
return t.copy=()=>Cd(t,e()).base(t.base()),Fd.apply(t,arguments),t}),[$p,xp]),Hp(_p,Gd,$p),Hp(wp,(function(){return Gd.apply(null,arguments).exponent(.5)}),$p),Hp(Op,(function e(){var t=Jd(Md())
return t.copy=function(){return Cd(t,e()).constant(t.constant())},Fd.apply(t,arguments)}),$p),Hp(kp,(function(){return Fd.apply(oh(th,nh,Hn,Yn,Cn,Sn,Jn,Qn,tr,Ei).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}),[$p,Rp]),Hp(Ep,(function(){return Fd.apply(oh(Qd,eh,or,sr,Rn,zn,ur,fr,tr,Si).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}),[$p,Rp]),Hp(Ap,lh,[$p,Ip]),Hp("".concat(Ap,"-").concat(bp),lh,[$p,Ip]),Hp("".concat(Ap,"-").concat(xp),(function e(){var t=qd(ah()).domain([1,10])
return t.copy=function(){return sh(t,e()).base(t.base())},Td.apply(t,arguments)}),[$p,Ip,xp]),Hp("".concat(Ap,"-").concat(_p),uh,[$p,Ip]),Hp("".concat(Ap,"-").concat(wp),(function(){return uh.apply(null,arguments).exponent(.5)}),[$p,Ip]),Hp("".concat(Ap,"-").concat(Op),(function e(){var t=Jd(ah())
return t.copy=function(){return sh(t,e()).constant(t.constant())},Td.apply(t,arguments)}),[$p,Ip]),Hp("".concat(Sp,"-").concat(bp),(function e(){var t=$d(fh()(Ed))
return t.copy=function(){return sh(t,e())},Td.apply(t,arguments)}),[$p,Ip]),Hp("".concat(Sp,"-").concat(xp),(function e(){var t=qd(fh()).domain([.1,1,10])
return t.copy=function(){return sh(t,e()).base(t.base())},Td.apply(t,arguments)}),[$p,Ip,xp]),Hp("".concat(Sp,"-").concat(_p),dh,[$p,Ip]),Hp("".concat(Sp,"-").concat(wp),(function(){return dh.apply(null,arguments).exponent(.5)}),[$p,Ip]),Hp("".concat(Sp,"-").concat(Op),(function e(){var t=Jd(fh())
return t.copy=function(){return sh(t,e()).constant(t.constant())},Td.apply(t,arguments)}),[$p,Ip]),Hp(Dp,(function e(){var t,n=[],r=[],i=[]
function o(){var e=0,t=Math.max(1,r.length)
for(i=new Array(t-1);++e<t;)i[e-1]=Ms(n,e/t)
return a}function a(e){return null==e||isNaN(e=+e)?t:r[yf(i,e)]}return a.invertExtent=function(e){var t=r.indexOf(e)
return t<0?[NaN,NaN]:[t>0?i[t-1]:n[0],t<i.length?i[t]:n[n.length-1]]},a.domain=function(e){if(!arguments.length)return n.slice()
n=[]
for(let t of e)null==t||isNaN(t=+t)||n.push(t)
return n.sort(dr),o()},a.range=function(e){return arguments.length?(r=Array.from(e),o()):r.slice()},a.unknown=function(e){return arguments.length?(t=e,a):t},a.quantiles=function(){return i.slice()},a.copy=function(){return e().domain(n).range(r).unknown(t)},Fd.apply(a,arguments)}),[zp,Dp]),Hp(Cp,(function e(){var t,n=0,r=1,i=1,o=[.5],a=[0,1]
function s(e){return null!=e&&e<=e?a[yf(o,e,0,i)]:t}function l(){var e=-1
for(o=new Array(i);++e<i;)o[e]=((e+1)*r-(e-i)*n)/(i+1)
return s}return s.domain=function(e){return arguments.length?([n,r]=e,n=+n,r=+r,l()):[n,r]},s.range=function(e){return arguments.length?(i=(a=Array.from(e)).length-1,l()):a.slice()},s.invertExtent=function(e){var t=a.indexOf(e)
return t<0?[NaN,NaN]:t<1?[n,o[0]]:t>=i?[o[i-1],r]:[o[t-1],o[t]]},s.unknown=function(e){return arguments.length?(t=e,s):s},s.thresholds=function(){return o.slice()},s.copy=function(){return e().domain([n,r]).range(a).unknown(t)},Fd.apply($d(s),arguments)}),zp),Hp(Mp,(function e(){var t,n=[.5],r=[0,1],i=1
function o(e){return null!=e&&e<=e?r[yf(n,e,0,i)]:t}return o.domain=function(e){return arguments.length?(n=Array.from(e),i=Math.min(n.length,r.length-1),o):n.slice()},o.range=function(e){return arguments.length?(r=Array.from(e),i=Math.min(n.length,r.length-1),o):r.slice()},o.invertExtent=function(e){var t=r.indexOf(e)
return[n[t-1],n[t]]},o.unknown=function(e){return arguments.length?(t=e,o):t},o.copy=function(){return e().domain(n).range(r).unknown(t)},Fd.apply(o,arguments)}),zp),Hp(Np,(function e(){let t=[],n=[]
function r(e){return null==e||e!=e?void 0:n[(yf(t,e)-1)%n.length]}return r.domain=function(e){return arguments.length?(t=qp(e),r):t.slice()},r.range=function(e){return arguments.length?(n=Zp.call(e),r):n.slice()},r.tickFormat=function(e,n){return Nd(t[0],Se(t),null==e?10:e,n)},r.copy=function(){return e().domain(r.domain()).range(r.range())},r}),[Pp,zp]),Hp(jp,xh,Pp),Hp(Tp,Lp,Pp),Hp(Fp,(function(){return Bp(Lp().paddingInner(1))}),Pp)
const ng=["clamp","base","constant","exponent"]
function rg(e,t){const n=t[0],r=Se(t)-n
return function(t){return e(n+t*r)}}function ig(e,t,n){return ch(sg(t||"rgb",n),e)}function og(e,t){const n=new Array(t),r=t+1
for(let i=0;i<t;)n[i]=e(++i/r)
return n}function ag(e,t,n){const r=n-t
let i,o,a
return r&&Number.isFinite(r)?(i=(o=e.type).indexOf("-"),o=i<0?o:o.slice(i+1),a=Hp(o)().domain([t,n]).range([0,1]),ng.forEach((t=>e[t]?a[t](e[t]()):0)),a):et(.5)}function sg(e,t){const n=a[function(e){return"interpolate"+e.toLowerCase().split("-").map((e=>e[0].toUpperCase()+e.slice(1))).join("")}(e)]
return null!=t&&n&&n.gamma?n.gamma(t):n}function lg(e){const t=e.length/6|0,n=new Array(t)
for(let r=0;r<t;)n[r]="#"+e.slice(6*r,6*++r)
return n}function ug(e,t){for(const n in e)fg(n,t(e[n]))}const cg={}
function fg(e,t){return e=e&&e.toLowerCase(),arguments.length>1?(cg[e]=t,this):cg[e]}ug({category10:"1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf",category20:"1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",category20b:"393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",category20c:"3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",tableau10:"4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",tableau20:"4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5",accent:"7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666",dark2:"1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666",paired:"a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928",pastel1:"fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2",pastel2:"b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc",set1:"e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999",set2:"66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3",set3:"8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"},lg),ug({blues:"cfe1f2bed8eca8cee58fc1de74b2d75ba3cf4592c63181bd206fb2125ca40a4a90",greens:"d3eecdc0e6baabdda594d3917bc77d60ba6c46ab5e329a512089430e7735036429",greys:"e2e2e2d4d4d4c4c4c4b1b1b19d9d9d8888887575756262624d4d4d3535351e1e1e",oranges:"fdd8b3fdc998fdb87bfda55efc9244f87f2cf06b18e4580bd14904b93d029f3303",purples:"e2e1efd4d4e8c4c5e0b4b3d6a3a0cc928ec3827cb97566ae684ea25c3696501f8c",reds:"fdc9b4fcb49afc9e80fc8767fa7051f6573fec3f2fdc2a25c81b1db21218970b13",blueGreen:"d5efedc1e8e0a7ddd18bd2be70c6a958ba9144ad77319c5d2089460e7736036429",bluePurple:"ccddecbad0e4a8c2dd9ab0d4919cc98d85be8b6db28a55a6873c99822287730f71",greenBlue:"d3eecec5e8c3b1e1bb9bd8bb82cec269c2ca51b2cd3c9fc7288abd1675b10b60a1",orangeRed:"fddcaffdcf9bfdc18afdad77fb9562f67d53ee6545e24932d32d1ebf130da70403",purpleBlue:"dbdaebc8cee4b1c3de97b7d87bacd15b9fc93a90c01e7fb70b70ab056199045281",purpleBlueGreen:"dbd8eac8cee4b0c3de93b7d872acd1549fc83892bb1c88a3097f8702736b016353",purpleRed:"dcc9e2d3b3d7ce9eccd186c0da6bb2e14da0e23189d91e6fc61159ab07498f023a",redPurple:"fccfccfcbec0faa9b8f98faff571a5ec539ddb3695c41b8aa908808d0179700174",yellowGreen:"e4f4acd1eca0b9e2949ed68880c97c62bb6e47aa5e3297502083440e723b036034",yellowOrangeBrown:"feeaa1fedd84fecc63feb746fca031f68921eb7215db5e0bc54c05ab3d038f3204",yellowOrangeRed:"fee087fed16ffebd59fea849fd903efc7335f9522bee3423de1b20ca0b22af0225",blueOrange:"134b852f78b35da2cb9dcae1d2e5eff2f0ebfce0bafbbf74e8932fc5690d994a07",brownBlueGreen:"704108a0651ac79548e3c78af3e6c6eef1eac9e9e48ed1c74da79e187a72025147",purpleGreen:"5b1667834792a67fb6c9aed3e6d6e8eff0efd9efd5aedda971bb75368e490e5e29",purpleOrange:"4114696647968f83b7b9b4d6dadbebf3eeeafce0bafbbf74e8932fc5690d994a07",redBlue:"8c0d25bf363adf745ef4ae91fbdbc9f2efeed2e5ef9dcae15da2cb2f78b3134b85",redGrey:"8c0d25bf363adf745ef4ae91fcdccbfaf4f1e2e2e2c0c0c0969696646464343434",yellowGreenBlue:"eff9bddbf1b4bde5b594d5b969c5be45b4c22c9ec02182b82163aa23479c1c3185",redYellowBlue:"a50026d4322cf16e43fcac64fedd90faf8c1dcf1ecabd6e875abd04a74b4313695",redYellowGreen:"a50026d4322cf16e43fcac63fedd8df9f7aed7ee8ea4d86e64bc6122964f006837",pinkYellowGreen:"8e0152c0267edd72adf0b3d6faddedf5f3efe1f2cab6de8780bb474f9125276419",spectral:"9e0142d13c4bf0704afcac63fedd8dfbf8b0e0f3a1a9dda269bda94288b55e4fa2",viridis:"440154470e61481a6c482575472f7d443a834144873d4e8a39568c35608d31688e2d708e2a788e27818e23888e21918d1f988b1fa08822a8842ab07f35b77943bf7154c56866cc5d7ad1518fd744a5db36bcdf27d2e21be9e51afde725",magma:"0000040404130b0924150e3720114b2c11603b0f704a107957157e651a80721f817f24828c29819a2e80a8327db6377ac43c75d1426fde4968e95462f1605df76f5cfa7f5efc8f65fe9f6dfeaf78febf84fece91fddea0fcedaffcfdbf",inferno:"0000040403130c0826170c3b240c4f330a5f420a68500d6c5d126e6b176e781c6d86216b932667a12b62ae305cbb3755c73e4cd24644dd513ae65c30ed6925f3771af8850ffb9506fca50afcb519fac62df6d645f2e661f3f484fcffa4",plasma:"0d088723069033059742039d5002a25d01a66a00a87801a88405a7900da49c179ea72198b12a90ba3488c33d80cb4779d35171da5a69e16462e76e5bed7953f2834cf68f44fa9a3dfca636fdb32ffec029fcce25f9dc24f5ea27f0f921",cividis:"00205100235800265d002961012b65042e670831690d346b11366c16396d1c3c6e213f6e26426e2c456e31476e374a6e3c4d6e42506e47536d4c566d51586e555b6e5a5e6e5e616e62646f66676f6a6a706e6d717270717573727976737c79747f7c75827f758682768985778c8877908b78938e789691789a94789e9778a19b78a59e77a9a177aea575b2a874b6ab73bbaf71c0b26fc5b66dc9b96acebd68d3c065d8c462ddc85fe2cb5ce7cf58ebd355f0d652f3da4ff7de4cfae249fce647",rainbow:"6e40aa883eb1a43db3bf3cafd83fa4ee4395fe4b83ff576eff6659ff7847ff8c38f3a130e2b72fcfcc36bee044aff05b8ff4576ff65b52f6673af27828ea8d1ddfa319d0b81cbecb23abd82f96e03d82e14c6edb5a5dd0664dbf6e40aa",sinebow:"ff4040fc582af47218e78d0bd5a703bfbf00a7d5038de70b72f41858fc2a40ff402afc5818f4720be78d03d5a700bfbf03a7d50b8de71872f42a58fc4040ff582afc7218f48d0be7a703d5bf00bfd503a7e70b8df41872fc2a58ff4040",turbo:"23171b32204a3e2a71453493493eae4b49c54a53d7485ee44569ee4074f53c7ff8378af93295f72e9ff42ba9ef28b3e926bce125c5d925cdcf27d5c629dcbc2de3b232e9a738ee9d3ff39347f68950f9805afc7765fd6e70fe667cfd5e88fc5795fb51a1f84badf545b9f140c5ec3cd0e637dae034e4d931ecd12ef4c92bfac029ffb626ffad24ffa223ff9821ff8d1fff821dff771cfd6c1af76118f05616e84b14df4111d5380fcb2f0dc0260ab61f07ac1805a313029b0f00950c00910b00",browns:"eedbbdecca96e9b97ae4a865dc9856d18954c7784cc0673fb85536ad44339f3632",tealBlues:"bce4d89dd3d181c3cb65b3c245a2b9368fae347da0306a932c5985",teals:"bbdfdfa2d4d58ac9c975bcbb61b0af4da5a43799982b8b8c1e7f7f127273006667",warmGreys:"dcd4d0cec5c1c0b8b4b3aaa7a59c9998908c8b827f7e7673726866665c5a59504e",goldGreen:"f4d166d5ca60b6c35c98bb597cb25760a6564b9c533f8f4f33834a257740146c36",goldOrange:"f4d166f8be5cf8aa4cf5983bf3852aef701be2621fd65322c54923b142239e3a26",goldRed:"f4d166f6be59f9aa51fc964ef6834bee734ae56249db5247cf4244c43141b71d3e",lightGreyRed:"efe9e6e1dad7d5cbc8c8bdb9bbaea9cd967ddc7b43e15f19df4011dc000b",lightGreyTeal:"e4eaead6dcddc8ced2b7c2c7a6b4bc64b0bf22a6c32295c11f85be1876bc",lightMulti:"e0f1f2c4e9d0b0de9fd0e181f6e072f6c053f3993ef77440ef4a3c",lightOrange:"f2e7daf7d5baf9c499fab184fa9c73f68967ef7860e8645bde515bd43d5b",lightTealBlue:"e3e9e0c0dccf9aceca7abfc859afc0389fb9328dad2f7ca0276b95255988",darkBlue:"3232322d46681a5c930074af008cbf05a7ce25c0dd38daed50f3faffffff",darkGold:"3c3c3c584b37725e348c7631ae8b2bcfa424ecc31ef9de30fff184ffffff",darkGreen:"3a3a3a215748006f4d048942489e4276b340a6c63dd2d836ffeb2cffffaa",darkMulti:"3737371f5287197d8c29a86995ce3fffe800ffffff",darkRed:"3434347036339e3c38cc4037e75d1eec8620eeab29f0ce32ffeb2c"},(e=>ig(lg(e))))
const dg="symbol",hg=e=>_e(e)?e.map((e=>String(e))):String(e),pg=(e,t)=>e[1]-t[1],gg=(e,t)=>t[1]-e[1]
function mg(e,t,n){let r
return gt(t)&&(e.bins&&(t=Math.max(t,e.bins.length)),null!=n&&(t=Math.min(t,Math.floor(kt(e.domain())/n||1)))),we(t)&&(r=t.step,t=t.interval),yt(t)&&(t=e.type===kp?ni(t):e.type==Ep?ri(t):oe("Only time and utc scales accept interval strings."),r&&(t=t.every(r))),t}function yg(e,t,n){let r=e.range(),i=r[0],o=Se(r),a=pg
if(i>o&&(r=o,o=i,i=r,a=gg),i=Math.floor(i),o=Math.ceil(o),t=t.map((t=>[t,e(t)])).filter((e=>i<=e[1]&&e[1]<=o)).sort(a).map((e=>e[0])),n>0&&t.length>1){const e=[t[0],Se(t)]
for(;t.length>n&&t.length>=3;)t=t.filter(((e,t)=>!(t%2)))
t.length<3&&(t=e)}return t}function vg(e,t){return e.bins?yg(e,e.bins):e.ticks?e.ticks(t):e.domain()}function bg(e,t,n,r,i,o){const a=t.type
let s=hg
if(a===kp||i===kp)s=e.timeFormat(r)
else if(a===Ep||i===Ep)s=e.utcFormat(r)
else if(Qp(a)){const i=e.formatFloat(r)
if(o||t.bins)s=i
else{const e=xg(t,n,!1)
s=t=>e(t)?i(t):""}}else if(t.tickFormat){const i=t.domain()
s=e.formatSpan(i[0],i[i.length-1],n,r)}else r&&(s=e.format(r))
return s}function xg(e,t,n){const r=vg(e,t),i=e.base(),o=Math.log(i),a=Math.max(1,i*t/r.length),s=e=>{let t=e/Math.pow(i,Math.round(Math.log(e)/o))
return t*i<i-.5&&(t*=i),t<=a}
return n?r.filter(s):s}const _g={[Dp]:"quantiles",[Cp]:"thresholds",[Mp]:"domain"},wg={[Dp]:"quantiles",[Cp]:"domain"}
function Og(e,t){return e.bins?function(e){const t=e.slice(0,-1)
return t.max=Se(e),t}(e.bins):e.type===xp?xg(e,t,!0):_g[e.type]?function(e){const t=[-1/0].concat(e)
return t.max=1/0,t}(e[_g[e.type]]()):vg(e,t)}function kg(e,t,n,r,i,o,a){const s=wg[t.type]&&o!==kp&&o!==Ep?function(e,t,n){const r=t[wg[t.type]](),i=r.length
let o,a=i>1?r[1]-r[0]:r[0]
for(o=1;o<i;++o)a=Math.min(a,r[o]-r[o-1])
return e.formatSpan(0,a,30,n)}(e,t,i):bg(e,t,n,i,o,a)
return r===dg&&(e=>_g[e.type]||e.bins)(t)?Eg(s):"discrete"===r?Sg(s):Dg(s)}const Eg=e=>(t,n,r)=>{const i=Ag(r[n+1],Ag(r.max,1/0)),o=Cg(t,e),a=Cg(i,e)
return o&&a?o+" – "+a:a?"< "+a:"≥ "+o},Ag=(e,t)=>null!=e?e:t,Sg=e=>(t,n)=>n?e(t):null,Dg=e=>t=>e(t),Cg=(e,t)=>Number.isFinite(e)?t(e):null
function Mg(e,t,n){n=n||{}
const r=Math.max(3,n.maxlen||7),i=function(e,t,n,r){const i=r||t.type
return yt(n)&&function(e){return Yp(e,Rp)}(i)&&(n=n.replace(/%a/g,"%A").replace(/%b/g,"%B")),n||i!==kp?n||i!==Ep?kg(e,t,5,null,n,r,!0):e.utcFormat("%A, %d %B %Y, %X UTC"):e.timeFormat("%A, %d %B %Y, %X")}(e,t,n.format,n.formatType)
if(Kp(t.type)){const e=Og(t).slice(1).map(i),n=e.length
return"".concat(n," boundar").concat(1===n?"y":"ies",": ").concat(e.join(", "))}if(Jp(t.type)){const e=t.domain(),n=e.length,o=n>r?e.slice(0,r-2).map(i).join(", ")+", ending with "+e.slice(-1).map(i):e.map(i).join(", ")
return"".concat(n," value").concat(1===n?"":"s",": ").concat(o)}{const e=t.domain()
return"values from ".concat(i(e[0])," to ").concat(i(Se(e)))}}let jg=0
const Fg="p_"
function Tg(e){return e&&e.gradient}function Ng(e,t,n){const r=e.gradient
let i=e.id,o="radial"===r?Fg:""
return i||(i=e.id="gradient_"+jg++,"radial"===r?(e.x1=$g(e.x1,.5),e.y1=$g(e.y1,.5),e.r1=$g(e.r1,0),e.x2=$g(e.x2,.5),e.y2=$g(e.y2,.5),e.r2=$g(e.r2,.5),o=Fg):(e.x1=$g(e.x1,0),e.y1=$g(e.y1,0),e.x2=$g(e.x2,1),e.y2=$g(e.y2,0))),t[i]=e,"url("+(n||"")+"#"+o+i+")"}function $g(e,t){return null!=e?e:t}function Pg(e,t){var n,r=[]
return n={gradient:"linear",x1:e?e[0]:0,y1:e?e[1]:0,x2:t?t[0]:1,y2:t?t[1]:0,stops:r,stop:function(e,t){return r.push({offset:e,color:t}),n}}}const zg={basis:{curve:function(e){return new Qu(e)}},"basis-closed":{curve:function(e){return new tc(e)}},"basis-open":{curve:function(e){return new nc(e)}},bundle:{curve:ic,tension:"beta",value:.85},cardinal:{curve:sc,tension:"tension",value:0},"cardinal-open":{curve:uc,tension:"tension",value:0},"cardinal-closed":{curve:fc,tension:"tension",value:0},"catmull-rom":{curve:Sc,tension:"alpha",value:.5},"catmull-rom-closed":{curve:Cc,tension:"alpha",value:.5},"catmull-rom-open":{curve:jc,tension:"alpha",value:.5},linear:{curve:Tc},"linear-closed":{curve:function(e){return new Nc(e)}},monotone:{horizontal:function(e){return new Lc(e)},vertical:function(e){return new Rc(e)}},natural:{curve:function(e){return new Uc(e)}},step:{curve:function(e){return new Zc(e,.5)}},"step-after":{curve:function(e){return new Zc(e,1)}},"step-before":{curve:function(e){return new Zc(e,0)}}}
function Ig(e,t,n){var r=at(zg,e)&&zg[e],i=null
return r&&(i=r.curve||r[t||"vertical"],r.tension&&null!=n&&(i=i[r.tension](n))),i}const Rg={m:2,l:2,h:1,v:1,z:0,c:6,s:4,q:4,t:2,a:7},Lg=/[mlhvzcsqta]([^mlhvzcsqta]+|$)/gi,Bg=/^[+-]?(([0-9]*\.[0-9]+)|([0-9]+\.)|([0-9]+))([eE][+-]?[0-9]+)?/,Ug=/^((\s+,?\s*)|(,\s*))/,qg=/^[01]/
function Zg(e){const t=[]
return(e.match(Lg)||[]).forEach((e=>{let n=e[0]
const r=n.toLowerCase(),i=Rg[r],o=function(e,t,n){const r=[]
for(let i=0;t&&i<n.length;)for(let o=0;o<t;++o){const t="a"!==e||3!==o&&4!==o?Bg:qg,a=n.slice(i).match(t)
if(null===a)throw Error("Invalid SVG path, incorrect parameter type")
i+=a[0].length,r.push(+a[0])
const s=n.slice(i).match(Ug)
null!==s&&(i+=s[0].length)}return r}(r,i,e.slice(1).trim()),a=o.length
if(a<i||a&&a%i!=0)throw Error("Invalid SVG path, incorrect parameter count")
if(t.push([n,...o.slice(0,i)]),a!==i){"m"===r&&(n="M"===n?"L":"l")
for(let e=i;e<a;e+=i)t.push([n,...o.slice(e,e+i)])}})),t}const Wg=Math.PI/180,Vg=Math.PI/2,Hg=2*Math.PI,Gg=Math.sqrt(3)/2
var Yg={},Xg={},Jg=[].join
function Kg(e){const t=Jg.call(e)
if(Xg[t])return Xg[t]
var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7]
const c=u*a,f=-l*s,d=l*a,h=u*s,p=Math.cos(i),g=Math.sin(i),m=Math.cos(o),y=Math.sin(o),v=.5*(o-i),b=Math.sin(.5*v),x=8/3*b*b/Math.sin(v),_=n+p-x*g,w=r+g+x*p,O=n+m,k=r+y,E=O+x*y,A=k-x*m
return Xg[t]=[c*_+f*w,d*_+h*w,c*E+f*A,d*E+h*A,c*O+f*k,d*O+h*k]}const Qg=["l",0,0,0,0,0,0,0]
function em(e,t,n){const r=Qg[0]=e[0]
if("a"===r||"A"===r)Qg[1]=t*e[1],Qg[2]=n*e[2],Qg[3]=e[3],Qg[4]=e[4],Qg[5]=e[5],Qg[6]=t*e[6],Qg[7]=n*e[7]
else if("h"===r||"H"===r)Qg[1]=t*e[1]
else if("v"===r||"V"===r)Qg[1]=n*e[1]
else for(var i=1,o=e.length;i<o;++i)Qg[i]=(i%2==1?t:n)*e[i]
return Qg}function tm(e,t,n,r,i,o){var a,s,l,u,c,f=null,d=0,h=0,p=0,g=0,m=0,y=0
null==n&&(n=0),null==r&&(r=0),null==i&&(i=1),null==o&&(o=i),e.beginPath&&e.beginPath()
for(var v=0,b=t.length;v<b;++v){switch(a=t[v],1===i&&1===o||(a=em(a,i,o)),a[0]){case"l":d+=a[1],h+=a[2],e.lineTo(d+n,h+r)
break
case"L":d=a[1],h=a[2],e.lineTo(d+n,h+r)
break
case"h":d+=a[1],e.lineTo(d+n,h+r)
break
case"H":d=a[1],e.lineTo(d+n,h+r)
break
case"v":h+=a[1],e.lineTo(d+n,h+r)
break
case"V":h=a[1],e.lineTo(d+n,h+r)
break
case"m":m=d+=a[1],y=h+=a[2],e.moveTo(d+n,h+r)
break
case"M":m=d=a[1],y=h=a[2],e.moveTo(d+n,h+r)
break
case"c":s=d+a[5],l=h+a[6],p=d+a[3],g=h+a[4],e.bezierCurveTo(d+a[1]+n,h+a[2]+r,p+n,g+r,s+n,l+r),d=s,h=l
break
case"C":d=a[5],h=a[6],p=a[3],g=a[4],e.bezierCurveTo(a[1]+n,a[2]+r,p+n,g+r,d+n,h+r)
break
case"s":s=d+a[3],l=h+a[4],p=2*d-p,g=2*h-g,e.bezierCurveTo(p+n,g+r,d+a[1]+n,h+a[2]+r,s+n,l+r),p=d+a[1],g=h+a[2],d=s,h=l
break
case"S":s=a[3],l=a[4],p=2*d-p,g=2*h-g,e.bezierCurveTo(p+n,g+r,a[1]+n,a[2]+r,s+n,l+r),d=s,h=l,p=a[1],g=a[2]
break
case"q":s=d+a[3],l=h+a[4],p=d+a[1],g=h+a[2],e.quadraticCurveTo(p+n,g+r,s+n,l+r),d=s,h=l
break
case"Q":s=a[3],l=a[4],e.quadraticCurveTo(a[1]+n,a[2]+r,s+n,l+r),d=s,h=l,p=a[1],g=a[2]
break
case"t":s=d+a[1],l=h+a[2],null===f[0].match(/[QqTt]/)?(p=d,g=h):"t"===f[0]?(p=2*d-u,g=2*h-c):"q"===f[0]&&(p=2*d-p,g=2*h-g),u=p,c=g,e.quadraticCurveTo(p+n,g+r,s+n,l+r),h=l,p=(d=s)+a[1],g=h+a[2]
break
case"T":s=a[1],l=a[2],p=2*d-p,g=2*h-g,e.quadraticCurveTo(p+n,g+r,s+n,l+r),d=s,h=l
break
case"a":nm(e,d+n,h+r,[a[1],a[2],a[3],a[4],a[5],a[6]+d+n,a[7]+h+r]),d+=a[6],h+=a[7]
break
case"A":nm(e,d+n,h+r,[a[1],a[2],a[3],a[4],a[5],a[6]+n,a[7]+r]),d=a[6],h=a[7]
break
case"z":case"Z":d=m,h=y,e.closePath()}f=a}}function nm(e,t,n,r){const i=function(e,t,n,r,i,o,a,s,l){const u=Jg.call(arguments)
if(Yg[u])return Yg[u]
const c=a*Wg,f=Math.sin(c),d=Math.cos(c),h=d*(s-e)*.5+f*(l-t)*.5,p=d*(l-t)*.5-f*(s-e)*.5
let g=h*h/((n=Math.abs(n))*n)+p*p/((r=Math.abs(r))*r)
g>1&&(g=Math.sqrt(g),n*=g,r*=g)
const m=d/n,y=f/n,v=-f/r,b=d/r,x=m*s+y*l,_=v*s+b*l,w=m*e+y*t,O=v*e+b*t
let k=1/((w-x)*(w-x)+(O-_)*(O-_))-.25
k<0&&(k=0)
let E=Math.sqrt(k)
o==i&&(E=-E)
const A=.5*(x+w)-E*(O-_),S=.5*(_+O)+E*(w-x),D=Math.atan2(_-S,x-A)
let C=Math.atan2(O-S,w-A)-D
C<0&&1===o?C+=Hg:C>0&&0===o&&(C-=Hg)
const M=Math.ceil(Math.abs(C/(Vg+.001))),j=[]
for(let F=0;F<M;++F){const e=D+F*C/M,t=D+(F+1)*C/M
j[F]=[A,S,e,t,n,r,f,d]}return Yg[u]=j}(r[5],r[6],r[0],r[1],r[3],r[4],r[2],t,n)
for(let o=0;o<i.length;++o){const t=Kg(i[o])
e.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5])}}const rm=.5773502691896257,im={circle:{draw:function(e,t){const n=Math.sqrt(t)/2
e.moveTo(n,0),e.arc(0,0,n,0,Hg)}},cross:{draw:function(e,t){var n=Math.sqrt(t)/2,r=n/2.5
e.moveTo(-n,-r),e.lineTo(-n,r),e.lineTo(-r,r),e.lineTo(-r,n),e.lineTo(r,n),e.lineTo(r,r),e.lineTo(n,r),e.lineTo(n,-r),e.lineTo(r,-r),e.lineTo(r,-n),e.lineTo(-r,-n),e.lineTo(-r,-r),e.closePath()}},diamond:{draw:function(e,t){const n=Math.sqrt(t)/2
e.moveTo(-n,0),e.lineTo(0,-n),e.lineTo(n,0),e.lineTo(0,n),e.closePath()}},square:{draw:function(e,t){var n=Math.sqrt(t),r=-n/2
e.rect(r,r,n,n)}},arrow:{draw:function(e,t){var n=Math.sqrt(t)/2,r=n/7,i=n/2.5,o=n/8
e.moveTo(-r,n),e.lineTo(r,n),e.lineTo(r,-o),e.lineTo(i,-o),e.lineTo(0,-n),e.lineTo(-i,-o),e.lineTo(-r,-o),e.closePath()}},wedge:{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n,i=r-n*rm,o=n/4
e.moveTo(0,-r-i),e.lineTo(-o,r-i),e.lineTo(o,r-i),e.closePath()}},triangle:{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n,i=r-n*rm
e.moveTo(0,-r-i),e.lineTo(-n,r-i),e.lineTo(n,r-i),e.closePath()}},"triangle-up":{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n
e.moveTo(0,-r),e.lineTo(-n,r),e.lineTo(n,r),e.closePath()}},"triangle-down":{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n
e.moveTo(0,r),e.lineTo(-n,-r),e.lineTo(n,-r),e.closePath()}},"triangle-right":{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n
e.moveTo(r,0),e.lineTo(-r,-n),e.lineTo(-r,n),e.closePath()}},"triangle-left":{draw:function(e,t){var n=Math.sqrt(t)/2,r=Gg*n
e.moveTo(-r,0),e.lineTo(r,-n),e.lineTo(r,n),e.closePath()}},stroke:{draw:function(e,t){const n=Math.sqrt(t)/2
e.moveTo(-n,0),e.lineTo(n,0)}}}
function om(e){return at(im,e)?im[e]:function(e){if(!at(am,e)){const t=Zg(e)
am[e]={draw:function(e,n){tm(e,t,0,0,Math.sqrt(n)/2)}}}return am[e]}(e)}var am={}
const sm=.448084975506
function lm(e){return e.x}function um(e){return e.y}function cm(e){return e.width}function fm(e){return e.height}function dm(e){return"function"==typeof e?e:()=>+e}function hm(e,t,n){return Math.max(t,Math.min(e,n))}function pm(){var e=lm,t=um,n=cm,r=fm,i=dm(0),o=i,a=i,s=i,l=null
function u(u,c,f){var d,h=null!=c?c:+e.call(this,u),p=null!=f?f:+t.call(this,u),g=+n.call(this,u),m=+r.call(this,u),y=Math.min(g,m)/2,v=hm(+i.call(this,u),0,y),b=hm(+o.call(this,u),0,y),x=hm(+a.call(this,u),0,y),_=hm(+s.call(this,u),0,y)
if(l||(l=d=Jc()),v<=0&&b<=0&&x<=0&&_<=0)l.rect(h,p,g,m)
else{var w=h+g,O=p+m
l.moveTo(h+v,p),l.lineTo(w-b,p),l.bezierCurveTo(w-sm*b,p,w,p+sm*b,w,p+b),l.lineTo(w,O-_),l.bezierCurveTo(w,O-sm*_,w-sm*_,O,w-_,O),l.lineTo(h+x,O),l.bezierCurveTo(h+sm*x,O,h,O-sm*x,h,O-x),l.lineTo(h,p+v),l.bezierCurveTo(h,p+sm*v,h+sm*v,p,h+v,p),l.closePath()}if(d)return l=null,d+""||null}return u.x=function(t){return arguments.length?(e=dm(t),u):e},u.y=function(e){return arguments.length?(t=dm(e),u):t},u.width=function(e){return arguments.length?(n=dm(e),u):n},u.height=function(e){return arguments.length?(r=dm(e),u):r},u.cornerRadius=function(e,t,n,r){return arguments.length?(i=dm(e),o=null!=t?dm(t):i,s=null!=n?dm(n):i,a=null!=r?dm(r):o,u):i},u.context=function(e){return arguments.length?(l=null==e?null:e,u):l},u}function gm(){var e,t,n,r,i,o,a,s,l=null
function u(e,t,n){const r=n/2
if(i){var u=a-t,c=e-o
if(u||c){var f=Math.sqrt(u*u+c*c),d=(u/=f)*s,h=(c/=f)*s,p=Math.atan2(c,u)
l.moveTo(o-d,a-h),l.lineTo(e-u*r,t-c*r),l.arc(e,t,r,p-Math.PI,p),l.lineTo(o+d,a+h),l.arc(o,a,s,p,p+Math.PI)}else l.arc(e,t,r,0,Hg)
l.closePath()}else i=1
o=e,a=t,s=r}function c(o){var a,s,c,f=o.length,d=!1
for(null==l&&(l=c=Jc()),a=0;a<=f;++a)!(a<f&&r(s=o[a],a,o))===d&&(d=!d)&&(i=0),d&&u(+e(s,a,o),+t(s,a,o),+n(s,a,o))
if(c)return l=null,c+""||null}return c.x=function(t){return arguments.length?(e=t,c):e},c.y=function(e){return arguments.length?(t=e,c):t},c.size=function(e){return arguments.length?(n=e,c):n},c.defined=function(e){return arguments.length?(r=e,c):r},c.context=function(e){return arguments.length?(l=null==e?null:e,c):l},c}function mm(e,t){return null!=e?e:t}const ym=e=>e.x||0,vm=e=>e.y||0,bm=e=>!(!1===e.defined),xm=function(){var e=Qc,t=ef,n=Kc(0),r=null,i=tf,o=nf,a=rf,s=null
function l(){var l,u,c=+e.apply(this,arguments),f=+t.apply(this,arguments),d=i.apply(this,arguments)-_c,h=o.apply(this,arguments)-_c,p=dc(h-d),g=h>d
if(s||(s=l=Jc()),f<c&&(u=f,f=c,c=u),f>bc)if(p>wc-bc)s.moveTo(f*pc(d),f*yc(d)),s.arc(0,0,f,d,h,!g),c>bc&&(s.moveTo(c*pc(h),c*yc(h)),s.arc(0,0,c,h,d,g))
else{var m,y,v=d,b=h,x=d,_=h,w=p,O=p,k=a.apply(this,arguments)/2,E=k>bc&&(r?+r.apply(this,arguments):vc(c*c+f*f)),A=mc(dc(f-c)/2,+n.apply(this,arguments)),S=A,D=A
if(E>bc){var C=kc(E/c*yc(k)),M=kc(E/f*yc(k));(w-=2*C)>bc?(x+=C*=g?1:-1,_-=C):(w=0,x=_=(d+h)/2),(O-=2*M)>bc?(v+=M*=g?1:-1,b-=M):(O=0,v=b=(d+h)/2)}var j=f*pc(v),F=f*yc(v),T=c*pc(_),N=c*yc(_)
if(A>bc){var $,P=f*pc(b),z=f*yc(b),I=c*pc(x),R=c*yc(x)
if(p<xc&&($=of(j,F,I,R,P,z,T,N))){var L=j-$[0],B=F-$[1],U=P-$[0],q=z-$[1],Z=1/yc(Oc((L*U+B*q)/(vc(L*L+B*B)*vc(U*U+q*q)))/2),W=vc($[0]*$[0]+$[1]*$[1])
S=mc(A,(c-W)/(Z-1)),D=mc(A,(f-W)/(Z+1))}}O>bc?D>bc?(m=af(I,R,j,F,f,D,g),y=af(P,z,T,N,f,D,g),s.moveTo(m.cx+m.x01,m.cy+m.y01),D<A?s.arc(m.cx,m.cy,D,hc(m.y01,m.x01),hc(y.y01,y.x01),!g):(s.arc(m.cx,m.cy,D,hc(m.y01,m.x01),hc(m.y11,m.x11),!g),s.arc(0,0,f,hc(m.cy+m.y11,m.cx+m.x11),hc(y.cy+y.y11,y.cx+y.x11),!g),s.arc(y.cx,y.cy,D,hc(y.y11,y.x11),hc(y.y01,y.x01),!g))):(s.moveTo(j,F),s.arc(0,0,f,v,b,!g)):s.moveTo(j,F),c>bc&&w>bc?S>bc?(m=af(T,N,P,z,c,-S,g),y=af(j,F,I,R,c,-S,g),s.lineTo(m.cx+m.x01,m.cy+m.y01),S<A?s.arc(m.cx,m.cy,S,hc(m.y01,m.x01),hc(y.y01,y.x01),!g):(s.arc(m.cx,m.cy,S,hc(m.y01,m.x01),hc(m.y11,m.x11),!g),s.arc(0,0,c,hc(m.cy+m.y11,m.cx+m.x11),hc(y.cy+y.y11,y.cx+y.x11),g),s.arc(y.cx,y.cy,S,hc(y.y11,y.x11),hc(y.y01,y.x01),!g))):s.arc(0,0,c,_,x,g):s.lineTo(T,N)}else s.moveTo(0,0)
if(s.closePath(),l)return s=null,l+""||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-xc/2
return[pc(r)*n,yc(r)*n]},l.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:Kc(+t),l):e},l.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:Kc(+e),l):t},l.cornerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Kc(+e),l):n},l.padRadius=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:Kc(+e),l):r},l.startAngle=function(e){return arguments.length?(i="function"==typeof e?e:Kc(+e),l):i},l.endAngle=function(e){return arguments.length?(o="function"==typeof e?e:Kc(+e),l):o},l.padAngle=function(e){return arguments.length?(a="function"==typeof e?e:Kc(+e),l):a},l.context=function(e){return arguments.length?(s=null==e?null:e,l):s},l}().startAngle((e=>e.startAngle||0)).endAngle((e=>e.endAngle||0)).padAngle((e=>e.padAngle||0)).innerRadius((e=>e.innerRadius||0)).outerRadius((e=>e.outerRadius||0)).cornerRadius((e=>e.cornerRadius||0)),_m=ff().x(ym).y1(vm).y0((e=>(e.y||0)+(e.height||0))).defined(bm),wm=ff().y(vm).x1(ym).x0((e=>(e.x||0)+(e.width||0))).defined(bm),Om=cf().x(ym).y(vm).defined(bm),km=pm().x(ym).y(vm).width((e=>e.width||0)).height((e=>e.height||0)).cornerRadius((e=>mm(e.cornerRadiusTopLeft,e.cornerRadius)||0),(e=>mm(e.cornerRadiusTopRight,e.cornerRadius)||0),(e=>mm(e.cornerRadiusBottomRight,e.cornerRadius)||0),(e=>mm(e.cornerRadiusBottomLeft,e.cornerRadius)||0)),Em=function(e,t){let n=null
function r(){let r
if(n||(n=r=Jc()),e.apply(this,arguments).draw(n,+t.apply(this,arguments)),r)return n=null,r+""||null}return e="function"==typeof e?e:Kc(e||df),t="function"==typeof t?t:Kc(void 0===t?64:+t),r.type=function(t){return arguments.length?(e="function"==typeof t?t:Kc(t),r):e},r.size=function(e){return arguments.length?(t="function"==typeof e?e:Kc(+e),r):t},r.context=function(e){return arguments.length?(n=null==e?null:e,r):n},r}().type((e=>om(e.shape||"circle"))).size((e=>mm(e.size,64))),Am=gm().x(ym).y(vm).defined(bm).size((e=>e.size||1))
function Sm(e){return e.cornerRadius||e.cornerRadiusTopLeft||e.cornerRadiusTopRight||e.cornerRadiusBottomRight||e.cornerRadiusBottomLeft}function Dm(e,t,n,r){return km.context(e)(t,n,r)}var Cm=1
function Mm(){Cm=1}function jm(e,t,n){var r=t.clip,i=e._defs,o=t.clip_id||(t.clip_id="clip"+Cm++),a=i.clipping[o]||(i.clipping[o]={id:o})
return Ge(r)?a.path=r(null):Sm(n)?a.path=Dm(null,n,0,0):(a.width=n.width||0,a.height=n.height||0),"url(#"+o+")"}function Fm(e){this.clear(),e&&this.union(e)}function Tm(e){this.mark=e,this.bounds=this.bounds||new Fm}function Nm(e){Tm.call(this,e),this.items=this.items||[]}function $m(e){this._pending=0,this._loader=e||Na()}function Pm(e){e._pending+=1}function zm(e){e._pending-=1}function Im(e,t,n){if(t.stroke&&0!==t.opacity&&0!==t.strokeOpacity){const r=null!=t.strokeWidth?+t.strokeWidth:1
e.expand(r+(n?function(e,t){return e.strokeJoin&&"miter"!==e.strokeJoin?0:t}(t,r):0))}return e}Fm.prototype={clone(){return new Fm(this)},clear(){return this.x1=+Number.MAX_VALUE,this.y1=+Number.MAX_VALUE,this.x2=-Number.MAX_VALUE,this.y2=-Number.MAX_VALUE,this},empty(){return this.x1===+Number.MAX_VALUE&&this.y1===+Number.MAX_VALUE&&this.x2===-Number.MAX_VALUE&&this.y2===-Number.MAX_VALUE},equals(e){return this.x1===e.x1&&this.y1===e.y1&&this.x2===e.x2&&this.y2===e.y2},set(e,t,n,r){return n<e?(this.x2=e,this.x1=n):(this.x1=e,this.x2=n),r<t?(this.y2=t,this.y1=r):(this.y1=t,this.y2=r),this},add(e,t){return e<this.x1&&(this.x1=e),t<this.y1&&(this.y1=t),e>this.x2&&(this.x2=e),t>this.y2&&(this.y2=t),this},expand(e){return this.x1-=e,this.y1-=e,this.x2+=e,this.y2+=e,this},round(){return this.x1=Math.floor(this.x1),this.y1=Math.floor(this.y1),this.x2=Math.ceil(this.x2),this.y2=Math.ceil(this.y2),this},scale(e){return this.x1*=e,this.y1*=e,this.x2*=e,this.y2*=e,this},translate(e,t){return this.x1+=e,this.x2+=e,this.y1+=t,this.y2+=t,this},rotate(e,t,n){const r=this.rotatedPoints(e,t,n)
return this.clear().add(r[0],r[1]).add(r[2],r[3]).add(r[4],r[5]).add(r[6],r[7])},rotatedPoints(e,t,n){var{x1:r,y1:i,x2:o,y2:a}=this,s=Math.cos(e),l=Math.sin(e),u=t-t*s+n*l,c=n-t*l-n*s
return[s*r-l*i+u,l*r+s*i+c,s*r-l*a+u,l*r+s*a+c,s*o-l*i+u,l*o+s*i+c,s*o-l*a+u,l*o+s*a+c]},union(e){return e.x1<this.x1&&(this.x1=e.x1),e.y1<this.y1&&(this.y1=e.y1),e.x2>this.x2&&(this.x2=e.x2),e.y2>this.y2&&(this.y2=e.y2),this},intersect(e){return e.x1>this.x1&&(this.x1=e.x1),e.y1>this.y1&&(this.y1=e.y1),e.x2<this.x2&&(this.x2=e.x2),e.y2<this.y2&&(this.y2=e.y2),this},encloses(e){return e&&this.x1<=e.x1&&this.x2>=e.x2&&this.y1<=e.y1&&this.y2>=e.y2},alignsWith(e){return e&&(this.x1==e.x1||this.x2==e.x2||this.y1==e.y1||this.y2==e.y2)},intersects(e){return e&&!(this.x2<e.x1||this.x1>e.x2||this.y2<e.y1||this.y1>e.y2)},contains(e,t){return!(e<this.x1||e>this.x2||t<this.y1||t>this.y2)},width(){return this.x2-this.x1},height(){return this.y2-this.y1}},ct(Nm,Tm),$m.prototype={pending(){return this._pending},sanitizeURL(e){const t=this
return Pm(t),t._loader.sanitize(e,{context:"href"}).then((e=>(zm(t),e))).catch((()=>(zm(t),null)))},loadImage(e){const t=this,n="undefined"!=typeof Image?Image:null
return Pm(t),t._loader.sanitize(e,{context:"image"}).then((e=>{const r=e.href
if(!r||!n)throw{url:r}
const i=new n,o=at(e,"crossOrigin")?e.crossOrigin:"anonymous"
return null!=o&&(i.crossOrigin=o),i.onload=()=>zm(t),i.onerror=()=>zm(t),i.src=r,i})).catch((e=>(zm(t),{complete:!1,width:0,height:0,src:e&&e.url||""})))},ready(){const e=this
return new Promise((t=>{!function n(r){e.pending()?setTimeout((()=>{n(!0)}),10):t(r)}(!1)}))}}
const Rm=Hg-1e-8
let Lm,Bm,Um,qm,Zm,Wm,Vm,Hm
const Gm=(e,t)=>Lm.add(e,t),Ym=(e,t)=>Gm(Bm=e,Um=t),Xm=e=>Gm(e,Lm.y1),Jm=e=>Gm(Lm.x1,e),Km=(e,t)=>Zm*e+Vm*t,Qm=(e,t)=>Wm*e+Hm*t,ey=(e,t)=>Gm(Km(e,t),Qm(e,t)),ty=(e,t)=>Ym(Km(e,t),Qm(e,t))
function ny(e,t){return Lm=e,t?(qm=t*Wg,Zm=Hm=Math.cos(qm),Wm=Math.sin(qm),Vm=-Wm):(Zm=Hm=1,qm=Wm=Vm=0),ry}const ry={beginPath(){},closePath(){},moveTo:ty,lineTo:ty,rect(e,t,n,r){qm?(ey(e+n,t),ey(e+n,t+r),ey(e,t+r),ty(e,t)):(Gm(e+n,t+r),Ym(e,t))},quadraticCurveTo(e,t,n,r){const i=Km(e,t),o=Qm(e,t),a=Km(n,r),s=Qm(n,r)
iy(Bm,i,a,Xm),iy(Um,o,s,Jm),Ym(a,s)},bezierCurveTo(e,t,n,r,i,o){const a=Km(e,t),s=Qm(e,t),l=Km(n,r),u=Qm(n,r),c=Km(i,o),f=Qm(i,o)
oy(Bm,a,l,c,Xm),oy(Um,s,u,f,Jm),Ym(c,f)},arc(e,t,n,r,i,o){if(r+=qm,i+=qm,Bm=n*Math.cos(i)+e,Um=n*Math.sin(i)+t,Math.abs(i-r)>Rm)Gm(e-n,t-n),Gm(e+n,t+n)
else{const a=r=>Gm(n*Math.cos(r)+e,n*Math.sin(r)+t)
let s,l
if(a(r),a(i),i!==r)if((r%=Hg)<0&&(r+=Hg),(i%=Hg)<0&&(i+=Hg),i<r&&(o=!o,s=r,r=i,i=s),o)for(i-=Hg,s=r-r%Vg,l=0;l<4&&s>i;++l,s-=Vg)a(s)
else for(s=r-r%Vg+Vg,l=0;l<4&&s<i;++l,s+=Vg)a(s)}}}
function iy(e,t,n,r){const i=(e-t)/(e+n-2*t)
0<i&&i<1&&r(e+(t-e)*i)}function oy(e,t,n,r,i){const o=r-e+3*t-3*n,a=e+n-2*t,s=e-t
let l,u=0,c=0
Math.abs(o)>1e-14?(l=a*a+s*o,l>=0&&(l=Math.sqrt(l),u=(-a+l)/o,c=(-a-l)/o)):u=.5*s/a,0<u&&u<1&&i(ay(u,e,t,n,r)),0<c&&c<1&&i(ay(c,e,t,n,r))}function ay(e,t,n,r,i){const o=1-e,a=o*o,s=e*e
return a*o*t+3*a*e*n+3*o*s*r+s*e*i}var sy=(sy=hf(1,1))?sy.getContext("2d"):null
const ly=new Fm
function uy(e){return function(t,n){if(!sy)return!0
e(sy,t),ly.clear().union(t.bounds).intersect(n).round()
const{x1:r,y1:i,x2:o,y2:a}=ly
for(let e=i;e<=a;++e)for(let t=r;t<=o;++t)if(sy.isPointInPath(t,e))return!0
return!1}}function cy(e,t){return t.contains(e.x||0,e.y||0)}function fy(e,t){const n=e.x||0,r=e.y||0,i=e.width||0,o=e.height||0
return t.intersects(ly.set(n,r,n+i,r+o))}function dy(e,t){const n=e.x||0,r=e.y||0
return hy(t,n,r,null!=e.x2?e.x2:n,null!=e.y2?e.y2:r)}function hy(e,t,n,r,i){const{x1:o,y1:a,x2:s,y2:l}=e,u=r-t,c=i-n
let f,d,h,p,g=0,m=1
for(p=0;p<4;++p){if(0===p&&(f=-u,d=-(o-t)),1===p&&(f=u,d=s-t),2===p&&(f=-c,d=-(a-n)),3===p&&(f=c,d=l-n),Math.abs(f)<1e-10&&d<0)return!1
if(h=d/f,f<0){if(h>m)return!1
h>g&&(g=h)}else if(f>0){if(h<g)return!1
h<m&&(m=h)}}return!0}function py(e,t){e.globalCompositeOperation=t.blend||"source-over"}function gy(e,t){return null==e?t:e}function my(e,t){const n=t.length
for(let r=0;r<n;++r)e.addColorStop(t[r].offset,t[r].color)
return e}function yy(e,t,n){return Tg(n)?function(e,t,n){const r=n.width(),i=n.height()
let o
if("radial"===t.gradient)o=e.createRadialGradient(n.x1+gy(t.x1,.5)*r,n.y1+gy(t.y1,.5)*i,Math.max(r,i)*gy(t.r1,0),n.x1+gy(t.x2,.5)*r,n.y1+gy(t.y2,.5)*i,Math.max(r,i)*gy(t.r2,.5))
else{const a=gy(t.x1,0),s=gy(t.y1,0),l=gy(t.x2,1),u=gy(t.y2,0)
if(a!==l&&s!==u&&r!==i){const n=hf(Math.ceil(r),Math.ceil(i)),o=n.getContext("2d")
return o.scale(r,i),o.fillStyle=my(o.createLinearGradient(a,s,l,u),t.stops),o.fillRect(0,0,r,i),e.createPattern(n,"no-repeat")}o=e.createLinearGradient(n.x1+a*r,n.y1+s*i,n.x1+l*r,n.y1+u*i)}return my(o,t.stops)}(e,n,t.bounds):n}function vy(e,t,n){return(n*=null==t.fillOpacity?1:t.fillOpacity)>0&&(e.globalAlpha=n,e.fillStyle=yy(e,t,t.fill),!0)}var by=[]
function xy(e,t,n){var r=null!=(r=t.strokeWidth)?r:1
return!(r<=0)&&(n*=null==t.strokeOpacity?1:t.strokeOpacity)>0&&(e.globalAlpha=n,e.strokeStyle=yy(e,t,t.stroke),e.lineWidth=r,e.lineCap=t.strokeCap||"butt",e.lineJoin=t.strokeJoin||"miter",e.miterLimit=t.strokeMiterLimit||10,e.setLineDash&&(e.setLineDash(t.strokeDash||by),e.lineDashOffset=t.strokeDashOffset||0),!0)}function _y(e,t){return e.zindex-t.zindex||e.index-t.index}function wy(e){if(!e.zdirty)return e.zitems
var t,n,r,i=e.items,o=[]
for(n=0,r=i.length;n<r;++n)(t=i[n]).index=n,t.zindex&&o.push(t)
return e.zdirty=!1,e.zitems=o.sort(_y)}function Oy(e,t){var n,r,i=e.items
if(!i||!i.length)return
const o=wy(e)
if(o&&o.length){for(n=0,r=i.length;n<r;++n)i[n].zindex||t(i[n])
i=o}for(n=0,r=i.length;n<r;++n)t(i[n])}function ky(e,t){var n,r,i=e.items
if(!i||!i.length)return null
const o=wy(e)
for(o&&o.length&&(i=o),r=i.length;--r>=0;)if(n=t(i[r]))return n
if(i===o)for(r=(i=e.items).length;--r>=0;)if(!i[r].zindex&&(n=t(i[r])))return n
return null}function Ey(e){return function(t,n,r){Oy(n,(n=>{r&&!r.intersects(n.bounds)||Sy(e,t,n,n)}))}}function Ay(e){return function(t,n,r){!n.items.length||r&&!r.intersects(n.bounds)||Sy(e,t,n.items[0],n.items)}}function Sy(e,t,n,r){var i=null==n.opacity?1:n.opacity
0!==i&&(e(t,r)||(py(t,n),n.fill&&vy(t,n,i)&&t.fill(),n.stroke&&xy(t,n,i)&&t.stroke()))}function Dy(e){return e=e||de,function(t,n,r,i,o,a){return r*=t.pixelRatio,i*=t.pixelRatio,ky(n,(n=>{const s=n.bounds
if((!s||s.contains(o,a))&&s)return e(t,n,r,i,o,a)?n:void 0}))}}function Cy(e,t){return function(n,r,i,o){var a,s,l=Array.isArray(r)?r[0]:r,u=null==t?l.fill:t,c=l.stroke&&n.isPointInStroke
return c&&(a=l.strokeWidth,s=l.strokeCap,n.lineWidth=null!=a?a:1,n.lineCap=null!=s?s:"butt"),!e(n,r)&&(u&&n.isPointInPath(i,o)||c&&n.isPointInStroke(i,o))}}function My(e){return Dy(Cy(e))}function jy(e,t){return"translate("+e+","+t+")"}function Fy(e){return"rotate("+e+")"}function Ty(e){return jy(e.x||0,e.y||0)}function Ny(e,t,n){function r(e,n){var r=n.x||0,i=n.y||0,o=n.angle||0
e.translate(r,i),o&&e.rotate(o*=Wg),e.beginPath(),t(e,n),o&&e.rotate(-o),e.translate(-r,-i)}return{type:e,tag:"path",nested:!1,attr:function(e,n){e("transform",function(e){return jy(e.x||0,e.y||0)+(e.angle?" "+Fy(e.angle):"")}(n)),e("d",t(null,n))},bound:function(e,n){return t(ny(e,n.angle),n),Im(e,n).translate(n.x||0,n.y||0)},draw:Ey(r),pick:My(r),isect:n||uy(r)}}var $y=Ny("arc",(function(e,t){return xm.context(e)(t)}))
function Py(e,t,n){function r(e,n){e.beginPath(),t(e,n)}const i=Cy(r)
return{type:e,tag:"path",nested:!0,attr:function(e,n){var r=n.mark.items
r.length&&e("d",t(null,r))},bound:function(e,n){var r=n.items
return 0===r.length?e:(t(ny(e),r),Im(e,r[0]))},draw:Ay(r),pick:function(e,t,n,r,o,a){var s=t.items,l=t.bounds
return!s||!s.length||l&&!l.contains(o,a)?null:(n*=e.pixelRatio,r*=e.pixelRatio,i(e,s,n,r)?s[0]:null)},isect:cy,tip:n}}var zy=Py("area",(function(e,t){const n=t[0],r=n.interpolate||"linear"
return("horizontal"===n.orient?wm:_m).curve(Ig(r,n.orient,n.tension)).context(e)(t)}),(function(e,t){for(var n,r,i="horizontal"===e[0].orient?t[1]:t[0],o="horizontal"===e[0].orient?"y":"x",a=e.length,s=1/0;--a>=0;)!1!==e[a].defined&&(r=Math.abs(e[a][o]-i))<s&&(s=r,n=e[a])
return n}))
function Iy(e,t){e.beginPath(),Sm(t)?Dm(e,t,0,0):e.rect(0,0,t.width||0,t.height||0),e.clip()}function Ry(e){const t=gy(e.strokeWidth,1)
return null!=e.strokeOffset?e.strokeOffset:e.stroke&&t>.5&&t<1.5?.5-Math.abs(t-1):0}function Ly(e,t){const n=Ry(t)
e("d",Dm(null,t,n,n))}function By(e,t,n,r){const i=Ry(t)
e.beginPath(),Dm(e,t,(n||0)+i,(r||0)+i)}const Uy=Cy(By),qy=Cy(By,!1),Zy=Cy(By,!0)
var Wy={type:"group",tag:"g",nested:!1,attr:function(e,t){e("transform",Ty(t))},bound:function(e,t){if(!t.clip&&t.items){const n=t.items,r=n.length
for(let t=0;t<r;++t)e.union(n[t].bounds)}return(t.clip||t.width||t.height)&&!t.noBound&&e.add(0,0).add(t.width||0,t.height||0),Im(e,t),e.translate(t.x||0,t.y||0)},draw:function(e,t,n){Oy(t,(t=>{const r=t.x||0,i=t.y||0,o=t.strokeForeground,a=null==t.opacity?1:t.opacity;(t.stroke||t.fill)&&a&&(By(e,t,r,i),py(e,t),t.fill&&vy(e,t,a)&&e.fill(),t.stroke&&!o&&xy(e,t,a)&&e.stroke()),e.save(),e.translate(r,i),t.clip&&Iy(e,t),n&&n.translate(-r,-i),Oy(t,(t=>{this.draw(e,t,n)})),n&&n.translate(r,i),e.restore(),o&&t.stroke&&a&&(By(e,t,r,i),py(e,t),xy(e,t,a)&&e.stroke())}))},pick:function(e,t,n,r,i,o){if(t.bounds&&!t.bounds.contains(i,o)||!t.items)return null
const a=n*e.pixelRatio,s=r*e.pixelRatio
return ky(t,(l=>{let u,c,f
const d=l.bounds
if(d&&!d.contains(i,o))return
c=l.x||0,f=l.y||0
const h=c+(l.width||0),p=f+(l.height||0),g=l.clip
if(g&&(i<c||i>h||o<f||o>p))return
if(e.save(),e.translate(c,f),c=i-c,f=o-f,g&&Sm(l)&&!Zy(e,l,a,s))return e.restore(),null
const m=l.strokeForeground,y=!1!==t.interactive
return y&&m&&l.stroke&&qy(e,l,a,s)?(e.restore(),l):(u=ky(l,(e=>function(e,t,n){return(!1!==e.interactive||"group"===e.marktype)&&e.bounds&&e.bounds.contains(t,n)}(e,c,f)?this.pick(e,n,r,c,f):null)),!u&&y&&(l.fill||!m&&l.stroke)&&Uy(e,l,a,s)&&(u=l),e.restore(),u||null)}))},isect:fy,content:function(e,t,n){e("clip-path",t.clip?jm(n,t,t):null)},background:function(e,t){e("class","background"),e("aria-hidden",!0),Ly(e,t)},foreground:function(e,t){e("class","foreground"),e("aria-hidden",!0),t.strokeForeground?Ly(e,t):e("d","")}},Vy={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"}
function Hy(e,t){var n=e.image
return(!n||e.url&&e.url!==n.url)&&(n={complete:!1,width:0,height:0},t.loadImage(e.url).then((t=>{e.image=t,e.image.url=e.url}))),n}function Gy(e,t){return null!=e.width?e.width:t&&t.width?!1!==e.aspect&&e.height?e.height*t.width/t.height:t.width:0}function Yy(e,t){return null!=e.height?e.height:t&&t.height?!1!==e.aspect&&e.width?e.width*t.height/t.width:t.height:0}function Xy(e,t){return"center"===e?t/2:"right"===e?t:0}function Jy(e,t){return"middle"===e?t/2:"bottom"===e?t:0}var Ky={type:"image",tag:"image",nested:!1,attr:function(e,t,n){const r=Hy(t,n),i=Gy(t,r),o=Yy(t,r),a=(t.x||0)-Xy(t.align,i),s=(t.y||0)-Jy(t.baseline,o)
e("href",!r.src&&r.toDataURL?r.toDataURL():r.src||"",Vy["xmlns:xlink"],"xlink:href"),e("transform",jy(a,s)),e("width",i),e("height",o),e("preserveAspectRatio",!1===t.aspect?"none":"xMidYMid")},bound:function(e,t){const n=t.image,r=Gy(t,n),i=Yy(t,n),o=(t.x||0)-Xy(t.align,r),a=(t.y||0)-Jy(t.baseline,i)
return e.set(o,a,o+r,a+i)},draw:function(e,t,n){Oy(t,(t=>{if(n&&!n.intersects(t.bounds))return
const r=Hy(t,this)
let i=Gy(t,r),o=Yy(t,r)
if(0===i||0===o)return
let a,s,l,u,c=(t.x||0)-Xy(t.align,i),f=(t.y||0)-Jy(t.baseline,o)
!1!==t.aspect&&(s=r.width/r.height,l=t.width/t.height,s==s&&l==l&&s!==l&&(l<s?(u=i/s,f+=(o-u)/2,o=u):(u=o*s,c+=(i-u)/2,i=u))),(r.complete||r.toDataURL)&&(py(e,t),e.globalAlpha=null!=(a=t.opacity)?a:1,e.imageSmoothingEnabled=!1!==t.smooth,e.drawImage(r,c,f,i,o))}))},pick:Dy(),isect:de,get:Hy,xOffset:Xy,yOffset:Jy},Qy=Py("line",(function(e,t){const n=t[0],r=n.interpolate||"linear"
return Om.curve(Ig(r,n.orient,n.tension)).context(e)(t)}),(function(e,t){for(var n,r,i=Math.pow(e[0].strokeWidth||1,2),o=e.length;--o>=0;)if(!1!==e[o].defined&&(n=e[o].x-t[0])*n+(r=e[o].y-t[1])*r<i)return e[o]
return null}))
function ev(e,t){var n=t.path
if(null==n)return!0
var r=t.x||0,i=t.y||0,o=t.scaleX||1,a=t.scaleY||1,s=(t.angle||0)*Wg,l=t.pathCache
l&&l.path===n||((t.pathCache=l=Zg(n)).path=n),s&&e.rotate&&e.translate?(e.translate(r,i),e.rotate(s),tm(e,l,0,0,o,a),e.rotate(-s),e.translate(-r,-i)):tm(e,l,r,i,o,a)}var tv={type:"path",tag:"path",nested:!1,attr:function(e,t){var n=t.scaleX||1,r=t.scaleY||1
1===n&&1===r||e("vector-effect","non-scaling-stroke"),e("transform",function(e){return jy(e.x||0,e.y||0)+(e.angle?" "+Fy(e.angle):"")+(e.scaleX||e.scaleY?" "+("scale("+(e.scaleX||1)+","+(e.scaleY||1)+")"):"")}(t)),e("d",t.path)},bound:function(e,t){return ev(ny(e,t.angle),t)?e.set(0,0,0,0):Im(e,t,!0)},draw:Ey(ev),pick:My(ev),isect:uy(ev)}
function nv(e,t){e.beginPath(),Dm(e,t)}var rv={type:"rect",tag:"path",nested:!1,attr:function(e,t){e("d",Dm(null,t))},bound:function(e,t){var n,r
return Im(e.set(n=t.x||0,r=t.y||0,n+t.width||0,r+t.height||0),t)},draw:Ey(nv),pick:My(nv),isect:fy}
function iv(e,t,n){var r,i,o,a
return!(!t.stroke||!xy(e,t,n)||(r=t.x||0,i=t.y||0,o=null!=t.x2?t.x2:r,a=null!=t.y2?t.y2:i,e.beginPath(),e.moveTo(r,i),e.lineTo(o,a),0))}var ov={type:"rule",tag:"line",nested:!1,attr:function(e,t){e("transform",Ty(t)),e("x2",null!=t.x2?t.x2-(t.x||0):0),e("y2",null!=t.y2?t.y2-(t.y||0):0)},bound:function(e,t){var n,r
return Im(e.set(n=t.x||0,r=t.y||0,null!=t.x2?t.x2:n,null!=t.y2?t.y2:r),t)},draw:function(e,t,n){Oy(t,(t=>{if(!n||n.intersects(t.bounds)){var r=null==t.opacity?1:t.opacity
r&&iv(e,t,r)&&(py(e,t),e.stroke())}}))},pick:Dy((function(e,t,n,r){return!!e.isPointInStroke&&iv(e,t,1)&&e.isPointInStroke(n,r)})),isect:dy},av=Ny("shape",(function(e,t){return(t.mark.shape||t.shape).context(e)(t)})),sv=Ny("symbol",(function(e,t){return Em.context(e)(t)}),cy)
const lv=xt()
var uv={height:gv,measureWidth:hv,estimateWidth:fv,width:fv,canvas:cv}
function cv(e){uv.width=e&&sy?hv:fv}function fv(e,t){return dv(bv(e,t),gv(e))}function dv(e,t){return~~(.8*e.length*t)}function hv(e,t){return gv(e)<=0||!(t=bv(e,t))?0:pv(t,_v(e))}function pv(e,t){const n="(".concat(t,") ").concat(e)
let r=lv.get(n)
return void 0===r&&(sy.font=t,r=sy.measureText(e).width,lv.set(n,r)),r}function gv(e){return null!=e.fontSize?+e.fontSize||0:11}function mv(e){return null!=e.lineHeight?e.lineHeight:gv(e)+2}function yv(e){return t=e.lineBreak&&e.text&&!_e(e.text)?e.text.split(e.lineBreak):e.text,_e(t)?t.length>1?t:t[0]:t
var t}function vv(e){const t=yv(e)
return(_e(t)?t.length-1:0)*mv(e)}function bv(e,t){const n=null==t?"":(t+"").trim()
return e.limit>0&&n.length?function(e,t){var n=+e.limit,r=function(e){if(uv.width===hv){const t=_v(e)
return e=>pv(e,t)}{const t=gv(e)
return e=>dv(e,t)}}(e)
if(r(t)<n)return t
var i,o=e.ellipsis||"…",a="rtl"===e.dir,s=0,l=t.length
if(n-=r(o),a){for(;s<l;)i=s+l>>>1,r(t.slice(i))>n?s=i+1:l=i
return o+t.slice(s)}for(;s<l;)i=1+(s+l>>>1),r(t.slice(0,i))<n?s=i:l=i-1
return t.slice(0,s)+o}(e,n):n}function xv(e,t){var n=e.font
return(t&&n?String(n).replace(/"/g,"'"):n)||"sans-serif"}function _v(e,t){return(e.fontStyle?e.fontStyle+" ":"")+(e.fontVariant?e.fontVariant+" ":"")+(e.fontWeight?e.fontWeight+" ":"")+gv(e)+"px "+xv(e,t)}function wv(e){var t=e.baseline,n=gv(e)
return Math.round("top"===t?.79*n:"middle"===t?.3*n:"bottom"===t?-.21*n:"line-top"===t?.29*n+.5*mv(e):"line-bottom"===t?.29*n-.5*mv(e):0)}cv(!0)
const Ov={left:"start",center:"middle",right:"end"},kv=new Fm
function Ev(e){var t,n=e.x||0,r=e.y||0,i=e.radius||0
return i&&(t=(e.theta||0)-Vg,n+=i*Math.cos(t),r+=i*Math.sin(t)),kv.x1=n,kv.y1=r,kv}function Av(e,t,n){var r,i=uv.height(t),o=t.align,a=Ev(t),s=a.x1,l=a.y1,u=t.dx||0,c=(t.dy||0)+wv(t)-Math.round(.8*i),f=yv(t)
if(_e(f)?(i+=mv(t)*(f.length-1),r=f.reduce(((e,n)=>Math.max(e,uv.width(t,n))),0)):r=uv.width(t,f),"center"===o?u-=r/2:"right"===o&&(u-=r),e.set(u+=s,c+=l,u+r,c+i),t.angle&&!n)e.rotate(t.angle*Wg,s,l)
else if(2===n)return e.rotatedPoints(t.angle*Wg,s,l)
return e}var Sv={type:"text",tag:"text",nested:!1,attr:function(e,t){var n,r=t.dx||0,i=(t.dy||0)+wv(t),o=Ev(t),a=o.x1,s=o.y1,l=t.angle||0
e("text-anchor",Ov[t.align]||"start"),l?(n=jy(a,s)+" "+Fy(l),(r||i)&&(n+=" "+jy(r,i))):n=jy(a+r,s+i),e("transform",n)},bound:Av,draw:function(e,t,n){Oy(t,(t=>{var r,i,o,a,s,l,u,c=null==t.opacity?1:t.opacity
if(!(n&&!n.intersects(t.bounds)||0===c||t.fontSize<=0||null==t.text||0===t.text.length)){if(e.font=_v(t),e.textAlign=t.align||"left",i=(r=Ev(t)).x1,o=r.y1,t.angle&&(e.save(),e.translate(i,o),e.rotate(t.angle*Wg),i=o=0),i+=t.dx||0,o+=(t.dy||0)+wv(t),l=yv(t),py(e,t),_e(l))for(s=mv(t),a=0;a<l.length;++a)u=bv(t,l[a]),t.fill&&vy(e,t,c)&&e.fillText(u,i,o),t.stroke&&xy(e,t,c)&&e.strokeText(u,i,o),o+=s
else u=bv(t,l),t.fill&&vy(e,t,c)&&e.fillText(u,i,o),t.stroke&&xy(e,t,c)&&e.strokeText(u,i,o)
t.angle&&e.restore()}}))},pick:Dy((function(e,t,n,r,i,o){if(t.fontSize<=0)return!1
if(!t.angle)return!0
var a=Ev(t),s=a.x1,l=a.y1,u=Av(kv,t,1),c=-t.angle*Wg,f=Math.cos(c),d=Math.sin(c),h=f*i-d*o+(s-f*s+d*l),p=d*i+f*o+(l-d*s-f*l)
return u.contains(h,p)})),isect:function(e,t){const n=Av(kv,e,2)
return hy(t,n[0],n[1],n[2],n[3])||hy(t,n[0],n[1],n[4],n[5])||hy(t,n[4],n[5],n[6],n[7])||hy(t,n[2],n[3],n[6],n[7])}},Dv=Py("trail",(function(e,t){return Am.context(e)(t)}),(function(e,t){for(var n,r,i=e.length;--i>=0;)if(!1!==e[i].defined&&(n=e[i].x-t[0])*n+(r=e[i].y-t[1])*r<(n=e[i].size||1)*n)return e[i]
return null})),Cv={arc:$y,area:zy,group:Wy,image:Ky,line:Qy,path:tv,rect:rv,rule:ov,shape:av,symbol:sv,text:Sv,trail:Dv}
function Mv(e,t,n){var r=Cv[e.mark.marktype],i=t||r.bound
return r.nested&&(e=e.mark),i(e.bounds||(e.bounds=new Fm),e,n)}var jv={mark:null}
function Fv(e,t,n){var r,i,o,a,s=Cv[e.marktype],l=s.bound,u=e.items,c=u&&u.length
if(s.nested)return c?o=u[0]:(jv.mark=e,o=jv),a=Mv(o,l,n),t&&t.union(a)||a
if(t=t||e.bounds&&e.bounds.clear()||new Fm,c)for(r=0,i=u.length;r<i;++r)t.union(Mv(u[r],l,n))
return e.bounds=t}const Tv=["marktype","name","role","interactive","clip","items","zindex","x","y","width","height","align","baseline","fill","fillOpacity","opacity","blend","stroke","strokeOpacity","strokeWidth","strokeCap","strokeDash","strokeDashOffset","strokeForeground","strokeOffset","startAngle","endAngle","innerRadius","outerRadius","cornerRadius","padAngle","cornerRadiusTopLeft","cornerRadiusTopRight","cornerRadiusBottomLeft","cornerRadiusBottomRight","interpolate","tension","orient","defined","url","aspect","smooth","path","scaleX","scaleY","x2","y2","size","shape","text","angle","theta","radius","dir","dx","dy","ellipsis","limit","lineBreak","lineHeight","font","fontSize","fontWeight","fontStyle","fontVariant","description","aria","ariaRole","ariaRoleDescription"]
function Nv(e,t){return JSON.stringify(e,Tv,t)}function $v(e){return Pv("string"==typeof e?JSON.parse(e):e)}function Pv(e){var t,n,r,i=e.marktype,o=e.items
if(o)for(n=0,r=o.length;n<r;++n)t=i?"mark":"group",o[n][t]=e,o[n].zindex&&(o[n][t].zdirty=!0),"group"===(i||t)&&Pv(o[n])
return i&&Fv(e),e}function zv(e){arguments.length?this.root=$v(e):(this.root=Iv({marktype:"group",name:"root",role:"frame"}),this.root.items=[new Nm(this.root)])}function Iv(e,t){const n={bounds:new Fm,clip:!!e.clip,group:t,interactive:!1!==e.interactive,items:[],marktype:e.marktype,name:e.name||void 0,role:e.role||void 0,zindex:e.zindex||0}
return null!=e.aria&&(n.aria=e.aria),e.description&&(n.description=e.description),n}function Rv(e,t,n){return!e&&"undefined"!=typeof document&&document.createElement&&(e=document),e?n?e.createElementNS(n,t):e.createElement(t):null}function Lv(e,t){t=t.toLowerCase()
for(var n=e.childNodes,r=0,i=n.length;r<i;++r)if(n[r].tagName.toLowerCase()===t)return n[r]}function Bv(e,t,n,r){var i,o=e.childNodes[t]
return o&&o.tagName.toLowerCase()===n.toLowerCase()||(i=o||null,o=Rv(e.ownerDocument,n,r),e.insertBefore(o,i)),o}function Uv(e,t){for(var n=e.childNodes,r=n.length;r>t;)e.removeChild(n[--r])
return e}function qv(e){return"mark-"+e.marktype+(e.role?" role-"+e.role:"")+(e.name?" "+e.name:"")}function Zv(e,t){const n=t.getBoundingClientRect()
return[e.clientX-n.left-(t.clientLeft||0),e.clientY-n.top-(t.clientTop||0)]}function Wv(e,t){this._active=null,this._handlers={},this._loader=e||Na(),this._tooltip=t||Vv}function Vv(e,t,n,r){e.element().setAttribute("title",r||"")}function Hv(e){this._el=null,this._bgcolor=null,this._loader=new $m(e)}zv.prototype={toJSON(e){return Nv(this.root,e||0)},mark(e,t,n){const r=Iv(e,t=t||this.root.items[0])
return t.items[n]=r,r.zindex&&(r.group.zdirty=!0),r}},Wv.prototype={initialize(e,t,n){return this._el=e,this._obj=n||null,this.origin(t)},element(){return this._el},canvas(){return this._el&&this._el.firstChild},origin(e){return arguments.length?(this._origin=e||[0,0],this):this._origin.slice()},scene(e){return arguments.length?(this._scene=e,this):this._scene},on(){},off(){},_handlerIndex(e,t,n){for(let r=e?e.length:0;--r>=0;)if(e[r].type===t&&(!n||e[r].handler===n))return r
return-1},handlers(e){const t=this._handlers,n=[]
if(e)n.push(...t[this.eventName(e)])
else for(const r in t)n.push(...t[r])
return n},eventName(e){const t=e.indexOf(".")
return t<0?e:e.slice(0,t)},handleHref(e,t,n){this._loader.sanitize(n,{context:"href"}).then((t=>{const n=new MouseEvent(e.type,e),r=Rv(null,"a")
for(const e in t)r.setAttribute(e,t[e])
r.dispatchEvent(n)})).catch((()=>{}))},handleTooltip(e,t,n){if(t&&null!=t.tooltip){t=function(e,t,n,r){var i,o,a=e&&e.mark
if(a&&(i=Cv[a.marktype]).tip){for((o=Zv(t,n))[0]-=r[0],o[1]-=r[1];e=e.mark.group;)o[0]-=e.x||0,o[1]-=e.y||0
e=i.tip(a.items,o)}return e}(t,e,this.canvas(),this._origin)
const r=n&&t&&t.tooltip||null
this._tooltip.call(this._obj,this,e,t,r)}},getItemBoundingClientRect(e){const t=this.canvas()
if(!t)return
const n=t.getBoundingClientRect(),r=this._origin,i=e.bounds,o=i.width(),a=i.height()
let s=i.x1+r[0]+n.left,l=i.y1+r[1]+n.top
for(;e.mark&&(e=e.mark.group);)s+=e.x||0,l+=e.y||0
return{x:s,y:l,width:o,height:a,left:s,top:l,right:s+o,bottom:l+a}}},Hv.prototype={initialize(e,t,n,r,i){return this._el=e,this.resize(t,n,r,i)},element(){return this._el},canvas(){return this._el&&this._el.firstChild},background(e){return 0===arguments.length?this._bgcolor:(this._bgcolor=e,this)},resize(e,t,n,r){return this._width=e,this._height=t,this._origin=n||[0,0],this._scale=r||1,this},dirty(){},render(e){const t=this
return t._call=function(){t._render(e)},t._call(),t._call=null,t},_render(){},renderAsync(e){const t=this.render(e)
return this._ready?this._ready.then((()=>t)):Promise.resolve(t)},_load(e,t){var n=this,r=n._loader[e](t)
if(!n._ready){const e=n._call
n._ready=n._loader.ready().then((t=>{t&&e(),n._ready=null}))}return r},sanitizeURL(e){return this._load("sanitizeURL",e)},loadImage(e){return this._load("loadImage",e)}}
const Gv="dragenter",Yv="dragleave",Xv="dragover",Jv="mousedown",Kv="mousemove",Qv="mouseout",eb="mouseover",tb="click",nb="mousewheel",rb="touchstart",ib="touchmove",ob="touchend",ab=Kv,sb=Qv,lb=tb
function ub(e,t){Wv.call(this,e,t),this._down=null,this._touch=null,this._first=!0,this._events={}}function cb(e,t){(e=>e===rb||e===ib||e===ob?[rb,ib,ob]:[e])(t).forEach((t=>function(e,t){const n=e.canvas()
n&&!e._events[t]&&(e._events[t]=1,n.addEventListener(t,e[t]?n=>e[t](n):n=>e.fire(t,n)))}(e,t)))}function fb(e,t,n){return function(r){const i=this._active,o=this.pickEvent(r)
o===i||(i&&i.exit||this.fire(n,r),this._active=o,this.fire(t,r)),this.fire(e,r)}}function db(e){return function(t){this.fire(e,t),this._active=null}}ct(ub,Wv,{initialize(e,t,n){return this._canvas=e&&Lv(e,"canvas"),[tb,Jv,Kv,Qv,Yv].forEach((e=>cb(this,e))),Wv.prototype.initialize.call(this,e,t,n)},canvas(){return this._canvas},context(){return this._canvas.getContext("2d")},events:["keydown","keypress","keyup",Gv,Yv,Xv,Jv,"mouseup",Kv,Qv,eb,tb,"dblclick","wheel",nb,rb,ib,ob],DOMMouseScroll(e){this.fire(nb,e)},mousemove:fb(Kv,eb,Qv),dragover:fb(Xv,Gv,Yv),mouseout:db(Qv),dragleave:db(Yv),mousedown(e){this._down=this._active,this.fire(Jv,e)},click(e){this._down===this._active&&(this.fire(tb,e),this._down=null)},touchstart(e){this._touch=this.pickEvent(e.changedTouches[0]),this._first&&(this._active=this._touch,this._first=!1),this.fire(rb,e,!0)},touchmove(e){this.fire(ib,e,!0)},touchend(e){this.fire(ob,e,!0),this._touch=null},fire(e,t,n){const r=n?this._touch:this._active,i=this._handlers[e]
if(t.vegaType=e,e===lb&&r&&r.href?this.handleHref(t,r,r.href):e!==ab&&e!==sb||this.handleTooltip(t,r,e!==sb),i)for(let o=0,a=i.length;o<a;++o)i[o].handler.call(this._obj,t,r)},on(e,t){const n=this.eventName(e),r=this._handlers
return this._handlerIndex(r[n],e,t)<0&&(cb(this,e),(r[n]||(r[n]=[])).push({type:e,handler:t})),this},off(e,t){const n=this.eventName(e),r=this._handlers[n],i=this._handlerIndex(r,e,t)
return i>=0&&r.splice(i,1),this},pickEvent(e){const t=Zv(e,this._canvas),n=this._origin
return this.pick(this._scene,t[0],t[1],t[0]-n[0],t[1]-n[1])},pick(e,t,n,r,i){const o=this.context()
return Cv[e.marktype].pick.call(this,o,e,t,n,r,i)}})
var hb="undefined"!=typeof window&&window.devicePixelRatio||1
function pb(e){Hv.call(this,e),this._options={},this._redraw=!1,this._dirty=new Fm,this._tempb=new Fm}const gb=Hv.prototype
function mb(e,t){Wv.call(this,e,t)
const n=this
n._hrefHandler=yb(n,((e,t)=>{t&&t.href&&n.handleHref(e,t,t.href)})),n._tooltipHandler=yb(n,((e,t)=>{n.handleTooltip(e,t,e.type!==sb)}))}ct(pb,Hv,{initialize(e,t,n,r,i,o){return this._options=o||{},this._canvas=this._options.externalContext?null:hf(1,1,this._options.type),e&&this._canvas&&(Uv(e,0).appendChild(this._canvas),this._canvas.setAttribute("class","marks")),gb.initialize.call(this,e,t,n,r,i)},resize(e,t,n,r){if(gb.resize.call(this,e,t,n,r),this._canvas)!function(e,t,n,r,i,o){const a="undefined"!=typeof HTMLElement&&e instanceof HTMLElement&&null!=e.parentNode,s=e.getContext("2d"),l=a?hb:i
e.width=t*l,e.height=n*l
for(const u in o)s[u]=o[u]
a&&1!==l&&(e.style.width=t+"px",e.style.height=n+"px"),s.pixelRatio=l,s.setTransform(l,0,0,l,l*r[0],l*r[1])}(this._canvas,this._width,this._height,this._origin,this._scale,this._options.context)
else{const e=this._options.externalContext
e||oe("CanvasRenderer is missing a valid canvas or context"),e.scale(this._scale,this._scale),e.translate(this._origin[0],this._origin[1])}return this._redraw=!0,this},canvas(){return this._canvas},context(){return this._options.externalContext||(this._canvas?this._canvas.getContext("2d"):null)},dirty(e){const t=this._tempb.clear().union(e.bounds)
let n=e.mark.group
for(;n;)t.translate(n.x||0,n.y||0),n=n.mark.group
this._dirty.union(t)},_render(e){const t=this.context(),n=this._origin,r=this._width,i=this._height,o=this._dirty,a=((e,t,n)=>(new Fm).set(0,0,t,n).translate(-e[0],-e[1]))(n,r,i)
t.save()
const s=this._redraw||o.empty()?(this._redraw=!1,a.expand(1)):function(e,t,n){return t.expand(1).round(),e.pixelRatio%1&&t.scale(e.pixelRatio).round().scale(1/e.pixelRatio),t.translate(-n[0]%1,-n[1]%1),e.beginPath(),e.rect(t.x1,t.y1,t.width(),t.height()),e.clip(),t}(t,a.intersect(o),n)
return this.clear(-n[0],-n[1],r,i),this.draw(t,e,s),t.restore(),o.clear(),this},draw(e,t,n){const r=Cv[t.marktype]
t.clip&&function(e,t){var n=t.clip
e.save(),Ge(n)?(e.beginPath(),n(e),e.clip()):Iy(e,t.group)}(e,t),r.draw.call(this,e,t,n),t.clip&&e.restore()},clear(e,t,n,r){const i=this._options,o=this.context()
"pdf"===i.type||i.externalContext||o.clearRect(e,t,n,r),null!=this._bgcolor&&(o.fillStyle=this._bgcolor,o.fillRect(e,t,n,r))}})
const yb=(e,t)=>n=>{let r=n.target.__data__
r=Array.isArray(r)?r[0]:r,n.vegaType=n.type,t.call(e._obj,n,r)}
ct(mb,Wv,{initialize(e,t,n){let r=this._svg
return r&&(r.removeEventListener(lb,this._hrefHandler),r.removeEventListener(ab,this._tooltipHandler),r.removeEventListener(sb,this._tooltipHandler)),this._svg=r=e&&Lv(e,"svg"),r&&(r.addEventListener(lb,this._hrefHandler),r.addEventListener(ab,this._tooltipHandler),r.addEventListener(sb,this._tooltipHandler)),Wv.prototype.initialize.call(this,e,t,n)},canvas(){return this._svg},on(e,t){const n=this.eventName(e),r=this._handlers
if(this._handlerIndex(r[n],e,t)<0){const i={type:e,handler:t,listener:yb(this,t)};(r[n]||(r[n]=[])).push(i),this._svg&&this._svg.addEventListener(n,i.listener)}return this},off(e,t){const n=this.eventName(e),r=this._handlers[n],i=this._handlerIndex(r,e,t)
return i>=0&&(this._svg&&this._svg.removeEventListener(n,r[i].listener),r.splice(i,1)),this}})
const vb="aria-hidden",bb="aria-label",xb="role",_b="aria-roledescription",wb="graphics-object",Ob="graphics-symbol",kb=(e,t,n)=>({[xb]:e,[_b]:t,[bb]:n||void 0}),Eb=Mt(["axis-domain","axis-grid","axis-label","axis-tick","axis-title","legend-band","legend-entry","legend-gradient","legend-label","legend-title","legend-symbol","title"]),Ab={axis:{desc:"axis",caption:function(e){const t=e.datum,n=e.orient,r=t.title?jb(e):null,i=e.context,o=i.scales[t.scale].value,a=i.dataflow.locale(),s=o.type
return"".concat("left"===n||"right"===n?"Y":"X","-axis")+(r?" titled '".concat(r,"'"):"")+" for a ".concat(Jp(s)?"discrete":s," scale")+" with ".concat(Mg(a,o,e))}},legend:{desc:"legend",caption:function(e){const t=e.datum,n=t.title?jb(e):null,r="".concat(t.type||""," legend").trim(),i=t.scales,o=Object.keys(i),a=e.context,s=a.scales[i[o[0]]].value,l=a.dataflow.locale()
return((u=r).length?u[0].toUpperCase()+u.slice(1):u)+(n?" titled '".concat(n,"'"):"")+" for ".concat(function(e){return(e=e.map((e=>e+("fill"===e||"stroke"===e?" color":"")))).length<2?e[0]:e.slice(0,-1).join(", ")+" and "+Se(e)}(o))+" with ".concat(Mg(l,s,e))
var u}},"title-text":{desc:"title",caption:e=>"Title text '".concat(Mb(e),"'")},"title-subtitle":{desc:"subtitle",caption:e=>"Subtitle text '".concat(Mb(e),"'")}},Sb={ariaRole:xb,ariaRoleDescription:_b,description:bb}
function Db(e,t){const n=!1===t.aria
if(e(vb,n||void 0),n||null==t.description)for(const r in Sb)e(Sb[r],void 0)
else{const n=t.mark.marktype
e(bb,t.description),e(xb,t.ariaRole||("group"===n?wb:Ob)),e(_b,t.ariaRoleDescription||"".concat(n," mark"))}}function Cb(e){return!1===e.aria?{[vb]:!0}:Eb[e.role]?null:Ab[e.role]?function(e,t){try{const n=e.items[0],r=t.caption||(()=>"")
return kb(t.role||Ob,t.desc,n.description||r(n))}catch(e){return null}}(e,Ab[e.role]):function(e){const t=e.marktype,n="group"===t||"text"===t||e.items.some((e=>null!=e.description&&!1!==e.aria))
return kb(n?wb:Ob,"".concat(t," mark container"),e.description)}(e)}function Mb(e){return Ve(e.text).join(" ")}function jb(e){try{return Ve(Se(e.items).items[0].text).join(" ")}catch(e){return null}}const Fb=e=>(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
function Tb(){let e="",t="",n=""
const r=[],i=()=>t=n="",o=(e,n)=>(null!=n&&(t+=" ".concat(e,'="').concat(Fb(n).replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"),'"')),a),a={open(s){(o=>{t&&(e+="".concat(t,">").concat(n),i()),r.push(o)})(s),t="<"+s
for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c]
for(const e of u)for(const t in e)o(t,e[t])
return a},close(){const o=r.pop()
return e+=t?t+(n?">".concat(n,"</").concat(o,">"):"/>"):"</".concat(o,">"),i(),a},attr:o,text:e=>(n+=Fb(e),a),toString:()=>e}
return a}const Nb=e=>$b(Tb(),e)+""
function $b(e,t){if(e.open(t.tagName),t.hasAttributes()){const n=t.attributes,r=n.length
for(let t=0;t<r;++t)e.attr(n[t].name,n[t].value)}if(t.hasChildNodes()){const n=t.childNodes
for(const t of n)3===t.nodeType?e.text(t.nodeValue):$b(e,t)}return e.close()}const Pb={fill:"fill",fillOpacity:"fill-opacity",stroke:"stroke",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",strokeCap:"stroke-linecap",strokeJoin:"stroke-linejoin",strokeDash:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeMiterLimit:"stroke-miterlimit",opacity:"opacity"},zb={blend:"mix-blend-mode"},Ib={fill:"none","stroke-miterlimit":10},Rb="http://www.w3.org/2000/xmlns/",Lb=Vy.xmlns
function Bb(e){Hv.call(this,e),this._dirtyID=0,this._dirty=[],this._svg=null,this._root=null,this._defs=null}const Ub=Hv.prototype
function qb(e,t){for(;e&&e.dirty!==t;e=e.mark.group){if(e.dirty=t,!e.mark||e.mark.dirty===t)return
e.mark.dirty=t}}function Zb(e,t,n){let r,i,o
if("radial"===t.gradient){let r=Bv(e,n++,"pattern",Lb)
Kb(r,{id:Fg+t.id,viewBox:"0,0,1,1",width:"100%",height:"100%",preserveAspectRatio:"xMidYMid slice"}),r=Bv(r,0,"rect",Lb),Kb(r,{width:1,height:1,fill:"url(".concat(ex(),"#").concat(t.id,")")}),Kb(e=Bv(e,n++,"radialGradient",Lb),{id:t.id,fx:t.x1,fy:t.y1,fr:t.r1,cx:t.x2,cy:t.y2,r:t.r2})}else Kb(e=Bv(e,n++,"linearGradient",Lb),{id:t.id,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2})
for(r=0,i=t.stops.length;r<i;++r)o=Bv(e,r,"stop",Lb),o.setAttribute("offset",t.stops[r].offset),o.setAttribute("stop-color",t.stops[r].color)
return Uv(e,r),n}function Wb(e,t,n){let r
return(e=Bv(e,n,"clipPath",Lb)).setAttribute("id",t.id),t.path?(r=Bv(e,0,"path",Lb),r.setAttribute("d",t.path)):(r=Bv(e,0,"rect",Lb),Kb(r,{x:0,y:0,width:t.width,height:t.height})),Uv(e,1),n+1}function Vb(e,t,n,r,i){let o,a=e._svg
if(!a&&(o=t.ownerDocument,a=Rv(o,r,Lb),e._svg=a,e.mark&&(a.__data__=e,a.__values__={fill:"default"},"g"===r))){const t=Rv(o,"path",Lb)
a.appendChild(t),t.__data__=e
const n=Rv(o,"g",Lb)
a.appendChild(n),n.__data__=e
const r=Rv(o,"path",Lb)
a.appendChild(r),r.__data__=e,r.__values__={fill:"default"}}return(a.ownerSVGElement!==i||function(e,t){return e.parentNode&&e.parentNode.childNodes.length>1&&e.previousSibling!=t}(a,n))&&t.insertBefore(a,n?n.nextSibling:t.firstChild),a}ct(Bb,Hv,{initialize(e,t,n,r,i){return this._defs={},this._clearDefs(),e&&(this._svg=Bv(e,0,"svg",Lb),this._svg.setAttributeNS(Rb,"xmlns",Lb),this._svg.setAttributeNS(Rb,"xmlns:xlink",Vy["xmlns:xlink"]),this._svg.setAttribute("version",Vy.version),this._svg.setAttribute("class","marks"),Uv(e,1),this._root=Bv(this._svg,0,"g",Lb),Kb(this._root,Ib),Uv(this._svg,1)),this.background(this._bgcolor),Ub.initialize.call(this,e,t,n,r,i)},background(e){return arguments.length&&this._svg&&this._svg.style.setProperty("background-color",e),Ub.background.apply(this,arguments)},resize(e,t,n,r){return Ub.resize.call(this,e,t,n,r),this._svg&&(Kb(this._svg,{width:this._width*this._scale,height:this._height*this._scale,viewBox:"0 0 ".concat(this._width," ").concat(this._height)}),this._root.setAttribute("transform","translate(".concat(this._origin,")"))),this._dirty=[],this},canvas(){return this._svg},svg(){const e=this._svg,t=this._bgcolor
if(!e)return null
let n
t&&(e.removeAttribute("style"),n=Bv(e,0,"rect",Lb),Kb(n,{width:this._width,height:this._height,fill:t}))
const r=Nb(e)
return t&&(e.removeChild(n),this._svg.style.setProperty("background-color",t)),r},_render(e){return this._dirtyCheck()&&(this._dirtyAll&&this._clearDefs(),this.mark(this._root,e),Uv(this._root,1)),this.defs(),this._dirty=[],++this._dirtyID,this},dirty(e){e.dirty!==this._dirtyID&&(e.dirty=this._dirtyID,this._dirty.push(e))},isDirty(e){return this._dirtyAll||!e._svg||!e._svg.ownerSVGElement||e.dirty===this._dirtyID},_dirtyCheck(){this._dirtyAll=!0
const e=this._dirty
if(!e.length||!this._dirtyID)return!0
const t=++this._dirtyID
let n,r,i,o,a,s,l
for(a=0,s=e.length;a<s;++a)n=e[a],r=n.mark,r.marktype!==i&&(i=r.marktype,o=Cv[i]),r.zdirty&&r.dirty!==t&&(this._dirtyAll=!1,qb(n,t),r.items.forEach((e=>{e.dirty=t}))),r.zdirty||(n.exit?(o.nested&&r.items.length?(l=r.items[0],l._svg&&this._update(o,l._svg,l)):n._svg&&(l=n._svg.parentNode,l&&l.removeChild(n._svg)),n._svg=null):(n=o.nested?r.items[0]:n,n._update!==t&&(n._svg&&n._svg.ownerSVGElement?this._update(o,n._svg,n):(this._dirtyAll=!1,qb(n,t)),n._update=t)))
return!this._dirtyAll},mark(e,t,n){if(!this.isDirty(t))return t._svg
const r=this._svg,i=Cv[t.marktype],o=!1===t.interactive?"none":null,a="g"===i.tag,s=Vb(t,e,n,"g",r)
s.setAttribute("class",qv(t))
const l=Cb(t)
for(const d in l)Qb(s,d,l[d])
a||Qb(s,"pointer-events",o),Qb(s,"clip-path",t.clip?jm(this,t,t.group):null)
let u=null,c=0
const f=e=>{const t=this.isDirty(e),n=Vb(e,s,u,i.tag,r)
t&&(this._update(i,n,e),a&&function(e,t,n){t=t.lastChild.previousSibling
let r,i=0
Oy(n,(n=>{r=e.mark(t,n,r),++i})),Uv(t,1+i)}(this,n,e)),u=n,++c}
return i.nested?t.items.length&&f(t.items[0]):Oy(t,f),Uv(s,c),s},_update(e,t,n){Hb=t,Gb=t.__values__,Db(Xb,n),e.attr(Xb,n,this)
const r=Yb[e.type]
r&&r.call(this,e,t,n),Hb&&this.style(Hb,n)},style(e,t){if(null!=t){for(const n in Pb){let r="font"===n?xv(t):t[n]
if(r===Gb[n])continue
const i=Pb[n]
null==r?e.removeAttribute(i):(Tg(r)&&(r=Ng(r,this._defs.gradient,ex())),e.setAttribute(i,r+"")),Gb[n]=r}for(const n in zb)Jb(e,zb[n],t[n])}},defs(){const e=this._svg,t=this._defs
let n=t.el,r=0
for(const i in t.gradient)n||(t.el=n=Bv(e,1,"defs",Lb)),r=Zb(n,t.gradient[i],r)
for(const i in t.clipping)n||(t.el=n=Bv(e,1,"defs",Lb)),r=Wb(n,t.clipping[i],r)
n&&(0===r?(e.removeChild(n),t.el=null):Uv(n,r))},_clearDefs(){const e=this._defs
e.gradient={},e.clipping={}}})
let Hb=null,Gb=null
const Yb={group(e,t,n){const r=Hb=t.childNodes[2]
Gb=r.__values__,e.foreground(Xb,n,this),Gb=t.__values__,Hb=t.childNodes[1],e.content(Xb,n,this)
const i=Hb=t.childNodes[0]
e.background(Xb,n,this)
const o=!1===n.mark.interactive?"none":null
if(o!==Gb.events&&(Qb(r,"pointer-events",o),Qb(i,"pointer-events",o),Gb.events=o),n.strokeForeground&&n.stroke){const e=n.fill
Qb(r,"display",null),this.style(i,n),Qb(i,"stroke",null),e&&(n.fill=null),Gb=r.__values__,this.style(r,n),e&&(n.fill=e),Hb=null}else Qb(r,"display","none")},image(e,t,n){!1===n.smooth?(Jb(t,"image-rendering","optimizeSpeed"),Jb(t,"image-rendering","pixelated")):Jb(t,"image-rendering",null)},text(e,t,n){const r=yv(n)
let i,o,a,s
_e(r)?(o=r.map((e=>bv(n,e))),i=o.join("\n"),i!==Gb.text&&(Uv(t,0),a=t.ownerDocument,s=mv(n),o.forEach(((e,r)=>{const i=Rv(a,"tspan",Lb)
i.__data__=n,i.textContent=e,r&&(i.setAttribute("x",0),i.setAttribute("dy",s)),t.appendChild(i)})),Gb.text=i)):(o=bv(n,r),o!==Gb.text&&(t.textContent=o,Gb.text=o)),Qb(t,"font-family",xv(n)),Qb(t,"font-size",gv(n)+"px"),Qb(t,"font-style",n.fontStyle),Qb(t,"font-variant",n.fontVariant),Qb(t,"font-weight",n.fontWeight)}}
function Xb(e,t,n){t!==Gb[e]&&(n?function(e,t,n,r){null!=n?e.setAttributeNS(r,t,n):e.removeAttributeNS(r,t)}(Hb,e,t,n):Qb(Hb,e,t),Gb[e]=t)}function Jb(e,t,n){n!==Gb[t]&&(null==n?e.style.removeProperty(t):e.style.setProperty(t,n+""),Gb[t]=n)}function Kb(e,t){for(const n in t)Qb(e,n,t[n])}function Qb(e,t,n){null!=n?e.setAttribute(t,n):e.removeAttribute(t)}function ex(){let e
return"undefined"==typeof window?"":(e=window.location).hash?e.href.slice(0,-e.hash.length):e.href}function tx(e){Hv.call(this,e),this._text=null,this._defs={gradient:{},clipping:{}}}ct(tx,Hv,{svg(){return this._text},_render(e){const t=Tb()
t.open("svg",nt({},Vy,{class:"marks",width:this._width*this._scale,height:this._height*this._scale,viewBox:"0 0 ".concat(this._width," ").concat(this._height)}))
const n=this._bgcolor
return n&&"transparent"!==n&&"none"!==n&&t.open("rect",{width:this._width,height:this._height,fill:n}).close(),t.open("g",Ib,{transform:"translate("+this._origin+")"}),this.mark(t,e),t.close(),this.defs(t),this._text=t.close()+"",this},mark(e,t){const n=Cv[t.marktype],r=n.tag,i=[Db,n.attr]
e.open("g",{class:qv(t),"clip-path":t.clip?jm(this,t,t.group):null},Cb(t),{"pointer-events":"g"!==r&&!1===t.interactive?"none":null})
const o=o=>{const a=this.href(o)
if(a&&e.open("a",a),e.open(r,this.attr(t,o,i,"g"!==r?r:null)),"text"===r){const t=yv(o)
if(_e(t)){const n={x:0,dy:mv(o)}
for(let r=0;r<t.length;++r)e.open("tspan",r?n:null).text(bv(o,t[r])).close()}else e.text(bv(o,t))}else if("g"===r){const r=o.strokeForeground,i=o.fill,a=o.stroke
r&&a&&(o.stroke=null),e.open("path",this.attr(t,o,n.background,"bgrect")).close(),e.open("g",this.attr(t,o,n.content)),Oy(o,(t=>this.mark(e,t))),e.close(),r&&a?(i&&(o.fill=null),o.stroke=a,e.open("path",this.attr(t,o,n.foreground,"bgrect")).close(),i&&(o.fill=i)):e.open("path",this.attr(t,o,n.foreground,"bgfore")).close()}e.close(),a&&e.close()}
return n.nested?t.items&&t.items.length&&o(t.items[0]):Oy(t,o),e.close()},href(e){const t=e.href
let n
if(t){if(n=this._hrefs&&this._hrefs[t])return n
this.sanitizeURL(t).then((e=>{e["xlink:href"]=e.href,e.href=null,(this._hrefs||(this._hrefs={}))[t]=e}))}return null},attr(e,t,n,r){const i={},o=(e,t,n,r)=>{i[r||e]=t}
return Array.isArray(n)?n.forEach((e=>e(o,t,this))):n(o,t,this),r&&function(e,t,n,r,i){let o
if(null==t)return e
if("bgrect"===r&&!1===n.interactive&&(e["pointer-events"]="none"),"bgfore"===r&&(!1===n.interactive&&(e["pointer-events"]="none"),e.display="none",null!==t.fill))return e
"image"===r&&!1===t.smooth&&(o=["image-rendering: optimizeSpeed;","image-rendering: pixelated;"]),"text"===r&&(e["font-family"]=xv(t),e["font-size"]=gv(t)+"px",e["font-style"]=t.fontStyle,e["font-variant"]=t.fontVariant,e["font-weight"]=t.fontWeight)
for(const a in Pb){let n=t[a]
const r=Pb[a];("transparent"!==n||"fill"!==r&&"stroke"!==r)&&null!=n&&(Tg(n)&&(n=Ng(n,i.gradient,"")),e[r]=n)}for(const a in zb){const e=t[a]
null!=e&&(o=o||[],o.push("".concat(zb[a],": ").concat(e,";")))}o&&(e.style=o.join(" "))}(i,t,e,r,this._defs),i},defs(e){const t=this._defs.gradient,n=this._defs.clipping
if(0!==Object.keys(t).length+Object.keys(n).length){e.open("defs")
for(const n in t){const r=t[n],i=r.stops
"radial"===r.gradient?(e.open("pattern",{id:Fg+n,viewBox:"0,0,1,1",width:"100%",height:"100%",preserveAspectRatio:"xMidYMid slice"}),e.open("rect",{width:"1",height:"1",fill:"url(#"+n+")"}).close(),e.close(),e.open("radialGradient",{id:n,fx:r.x1,fy:r.y1,fr:r.r1,cx:r.x2,cy:r.y2,r:r.r2})):e.open("linearGradient",{id:n,x1:r.x1,x2:r.x2,y1:r.y1,y2:r.y2})
for(let t=0;t<i.length;++t)e.open("stop",{offset:i[t].offset,"stop-color":i[t].color}).close()
e.close()}for(const t in n){const r=n[t]
e.open("clipPath",{id:t}),r.path?e.open("path",{d:r.path}).close():e.open("rect",{x:0,y:0,width:r.width,height:r.height}).close(),e.close()}e.close()}}})
const nx={Canvas:"canvas",PNG:"png",SVG:"svg",None:"none"},rx={}
function ix(e,t){return e=String(e||"").toLowerCase(),arguments.length>1?(rx[e]=t,this):rx[e]}function ox(e,t,n){const r=[],i=(new Fm).union(t),o=e.marktype
return o?ax(e,i,n,r):"group"===o?sx(e,i,n,r):oe("Intersect scene must be mark node or group item.")}function ax(e,t,n,r){if(function(e,t,n){return e.bounds&&t.intersects(e.bounds)&&("group"===e.marktype||!1!==e.interactive&&(!n||n(e)))}(e,t,n)){const i=e.items,o=e.marktype,a=i.length
let s=0
if("group"===o)for(;s<a;++s)sx(i[s],t,n,r)
else for(const e=Cv[o].isect;s<a;++s){const n=i[s]
lx(n,t,e)&&r.push(n)}}return r}function sx(e,t,n,r){n&&n(e.mark)&&lx(e,t,Cv.group.isect)&&r.push(e)
const i=e.items,o=i&&i.length
if(o){const a=e.x||0,s=e.y||0
t.translate(-a,-s)
for(let e=0;e<o;++e)ax(i[e],t,n,r)
t.translate(a,s)}return r}function lx(e,t,n){const r=e.bounds
return t.encloses(r)||t.intersects(r)&&n(e,t)}rx.canvas=rx.png={renderer:pb,headless:pb,handler:ub},rx.svg={renderer:Bb,headless:tx,handler:mb},rx.none={}
const ux=new Fm
function cx(e){const t=e.clip
if(Ge(t))t(ny(ux.clear()))
else{if(!t)return
ux.set(0,0,e.group.width,e.group.height)}e.bounds.intersect(ux)}function fx(e,t,n){return e===t||("path"===n?dx(e,t):e instanceof Date&&t instanceof Date?+e==+t:gt(e)&&gt(t)?Math.abs(e-t)<=1e-9:e&&t&&(we(e)||we(t))?function(e,t){var n,r,i=Object.keys(e),o=Object.keys(t)
if(i.length!==o.length)return!1
for(i.sort(),o.sort(),r=i.length-1;r>=0;r--)if(i[r]!=o[r])return!1
for(r=i.length-1;r>=0;r--)if(!fx(e[n=i[r]],t[n],n))return!1
return typeof e==typeof t}(e,t):e==t)}function dx(e,t){return fx(Zg(e),Zg(t))}function hx(){Mm(),jg=0}const px="top",gx="left",mx="right",yx="bottom",vx="start",bx="middle",xx="end",_x="group",wx="axis",Ox="title",kx="legend",Ex="row-header",Ax="row-footer",Sx="row-title",Dx="column-header",Cx="column-footer",Mx="column-title",jx="none",Fx="all",Tx="each",Nx="flush",$x="column",Px="row"
function zx(e){vs.call(this,null,e)}function Ix(e,t,n){return t(e.bounds.clear(),e,n)}ct(zx,vs,{transform(e,t){const n=t.dataflow,r=e.mark,i=r.marktype,o=Cv[i],a=o.bound
let s,l=r.bounds
if(o.nested)r.items.length&&n.dirty(r.items[0]),l=Ix(r,a),r.items.forEach((e=>{e.bounds.clear().union(l)}))
else if(i===_x||e.modified())switch(t.visit(t.MOD,(e=>n.dirty(e))),l.clear(),r.items.forEach((e=>l.union(Ix(e,a)))),r.role){case wx:case kx:case Ox:t.reflow()}else s=t.changed(t.REM),t.visit(t.ADD,(e=>{l.union(Ix(e,a))})),t.visit(t.MOD,(e=>{s=s||l.alignsWith(e.bounds),n.dirty(e),l.union(Ix(e,a))})),s&&(l.clear(),r.items.forEach((e=>l.union(e.bounds))))
return cx(r),t.modifies("bounds")}})
const Rx=":vega_identifier:"
function Lx(e){vs.call(this,0,e)}function Bx(e){vs.call(this,null,e)}function Ux(e){vs.call(this,null,e)}Lx.Definition={type:"Identifier",metadata:{modifies:!0},params:[{name:"as",type:"string",required:!0}]},ct(Lx,vs,{transform(e,t){const n=(i=t.dataflow)._signals[Rx]||(i._signals[Rx]=i.add(0)),r=e.as
var i
let o=n.value
return t.visit(t.ADD,(e=>e[r]=e[r]||++o)),n.set(this.value=o),t}}),ct(Bx,vs,{transform(e,t){let n=this.value
n||(n=t.dataflow.scenegraph().mark(e.markdef,function(e){const t=e.groups,n=e.parent
return t&&1===t.size?t.get(Object.keys(t.object)[0]):t&&n?t.lookup(n):null}(e),e.index),n.group.context=e.context,e.context.group||(e.context.group=n.group),n.source=this.source,n.clip=e.clip,n.interactive=e.interactive,this.value=n)
const r=n.marktype===_x?Nm:Tm
return t.visit(t.ADD,(e=>r.call(e,n))),(e.modified("clip")||e.modified("interactive"))&&(n.clip=e.clip,n.interactive=!!e.interactive,n.zdirty=!0,t.reflow()),n.items=t.source,t}})
const qx={parity:e=>e.filter(((e,t)=>t%2?e.opacity=0:1)),greedy:(e,t)=>{let n
return e.filter(((e,r)=>r&&Zx(n.bounds,e.bounds,t)?e.opacity=0:(n=e,1)))}},Zx=(e,t,n)=>n>Math.max(t.x1-e.x2,e.x1-t.x2,t.y1-e.y2,e.y1-t.y2),Wx=(e,t)=>{for(var n,r=1,i=e.length,o=e[0].bounds;r<i;o=n,++r)if(Zx(o,n=e[r].bounds,t))return!0},Vx=e=>{const t=e.bounds
return t.width()>1&&t.height()>1},Hx=e=>(e.forEach((e=>e.opacity=1)),e),Gx=(e,t)=>e.reflow(t.modified()).modifies("opacity")
function Yx(e){vs.call(this,null,e)}ct(Ux,vs,{transform(e,t){const n=qx[e.method]||qx.parity,r=e.separation||0
let i,o,a=t.materialize(t.SOURCE).source
if(!a||!a.length)return
if(!e.method)return e.modified("method")&&(Hx(a),t=Gx(t,e)),t
if(a=a.filter(Vx),!a.length)return
if(e.sort&&(a=a.slice().sort(e.sort)),i=Hx(a),t=Gx(t,e),i.length>=3&&Wx(i,r)){do{i=n(i,r)}while(i.length>=3&&Wx(i,r))
i.length<3&&!Se(a).opacity&&(i.length>1&&(Se(i).opacity=0),Se(a).opacity=1)}e.boundScale&&e.boundTolerance>=0&&(o=((e,t,n)=>{var r=e.range(),i=new Fm
return t===px||t===yx?i.set(r[0],-1/0,r[1],1/0):i.set(-1/0,r[0],1/0,r[1]),i.expand(n||1),e=>i.encloses(e.bounds)})(e.boundScale,e.boundOrient,+e.boundTolerance),a.forEach((e=>{o(e)||(e.opacity=0)})))
const s=i[0].mark.bounds.clear()
return a.forEach((e=>{e.opacity&&s.union(e.bounds)})),t}}),ct(Yx,vs,{transform(e,t){const n=t.dataflow
if(t.visit(t.ALL,(e=>n.dirty(e))),t.fields&&t.fields.zindex){const e=t.source&&t.source[0]
e&&(e.mark.zdirty=!0)}}})
const Xx=new Fm
function Jx(e,t,n){return e[t]===n?0:(e[t]=n,1)}function Kx(e){var t=e.items[0].orient
return t===gx||t===mx}function Qx(e,t,n,r){var i,o,a=t.items[0],s=a.datum,l=null!=a.translate?a.translate:.5,u=a.orient,c=function(e){let t=+e.grid
return[e.ticks?t++:-1,e.labels?t++:-1,t+ +e.domain]}(s),f=a.range,d=a.offset,h=a.position,p=a.minExtent,g=a.maxExtent,m=s.title&&a.items[c[2]].items[0],y=a.titlePadding,v=a.bounds,b=m&&vv(m),x=0,_=0
switch(Xx.clear().union(v),v.clear(),(i=c[0])>-1&&v.union(a.items[i].bounds),(i=c[1])>-1&&v.union(a.items[i].bounds),u){case px:x=h||0,_=-d,o=Math.max(p,Math.min(g,-v.y1)),v.add(0,-o).add(f,0),m&&e_(e,m,o,y,b,0,-1,v)
break
case gx:x=-d,_=h||0,o=Math.max(p,Math.min(g,-v.x1)),v.add(-o,0).add(0,f),m&&e_(e,m,o,y,b,1,-1,v)
break
case mx:x=n+d,_=h||0,o=Math.max(p,Math.min(g,v.x2)),v.add(0,0).add(o,f),m&&e_(e,m,o,y,b,1,1,v)
break
case yx:x=h||0,_=r+d,o=Math.max(p,Math.min(g,v.y2)),v.add(0,0).add(f,o),m&&e_(e,m,o,y,0,0,1,v)
break
default:x=a.x,_=a.y}return Im(v.translate(x,_),a),Jx(a,"x",x+l)|Jx(a,"y",_+l)&&(a.bounds=Xx,e.dirty(a),a.bounds=v,e.dirty(a)),a.mark.bounds.clear().union(v)}function e_(e,t,n,r,i,o,a,s){const l=t.bounds
if(t.auto){const s=a*(n+i+r)
let u=0,c=0
e.dirty(t),o?u=(t.x||0)-(t.x=s):c=(t.y||0)-(t.y=s),t.mark.bounds.clear().union(l.translate(-u,-c)),e.dirty(t)}s.union(l)}const t_=(e,t)=>Math.floor(Math.min(e,t)),n_=(e,t)=>Math.ceil(Math.max(e,t))
function r_(e){return(new Fm).set(0,0,e.width||0,e.height||0)}function i_(e){const t=e.bounds.clone()
return t.empty()?t.set(0,0,0,0):t.translate(-(e.x||0),-(e.y||0))}function o_(e,t,n){const r=we(e)?e[t]:e
return null!=r?r:void 0!==n?n:0}function a_(e){return e<0?Math.ceil(-e):0}function s_(e,t,n){var r,i,o,a,s,l,u,c,f,d,h,p=!n.nodirty,g=n.bounds===Nx?r_:i_,m=Xx.set(0,0,0,0),y=o_(n.align,$x),v=o_(n.align,Px),b=o_(n.padding,$x),x=o_(n.padding,Px),_=n.columns||t.length,w=_<=0?1:Math.ceil(t.length/_),O=t.length,k=Array(O),E=Array(_),A=0,S=Array(O),D=Array(w),C=0,M=Array(O),j=Array(O),F=Array(O)
for(i=0;i<_;++i)E[i]=0
for(i=0;i<w;++i)D[i]=0
for(i=0;i<O;++i)l=t[i],s=F[i]=g(l),l.x=l.x||0,M[i]=0,l.y=l.y||0,j[i]=0,o=i%_,a=~~(i/_),A=Math.max(A,u=Math.ceil(s.x2)),C=Math.max(C,c=Math.ceil(s.y2)),E[o]=Math.max(E[o],u),D[a]=Math.max(D[a],c),k[i]=b+a_(s.x1),S[i]=x+a_(s.y1),p&&e.dirty(t[i])
for(i=0;i<O;++i)i%_==0&&(k[i]=0),i<_&&(S[i]=0)
if(y===Tx)for(o=1;o<_;++o){for(h=0,i=o;i<O;i+=_)h<k[i]&&(h=k[i])
for(i=o;i<O;i+=_)k[i]=h+E[o-1]}else if(y===Fx){for(h=0,i=0;i<O;++i)i%_&&h<k[i]&&(h=k[i])
for(i=0;i<O;++i)i%_&&(k[i]=h+A)}else for(y=!1,o=1;o<_;++o)for(i=o;i<O;i+=_)k[i]+=E[o-1]
if(v===Tx)for(a=1;a<w;++a){for(h=0,r=(i=a*_)+_;i<r;++i)h<S[i]&&(h=S[i])
for(i=a*_;i<r;++i)S[i]=h+D[a-1]}else if(v===Fx){for(h=0,i=_;i<O;++i)h<S[i]&&(h=S[i])
for(i=_;i<O;++i)S[i]=h+C}else for(v=!1,a=1;a<w;++a)for(r=(i=a*_)+_;i<r;++i)S[i]+=D[a-1]
for(f=0,i=0;i<O;++i)f=k[i]+(i%_?f:0),M[i]+=f-t[i].x
for(o=0;o<_;++o)for(d=0,i=o;i<O;i+=_)d+=S[i],j[i]+=d-t[i].y
if(y&&o_(n.center,$x)&&w>1)for(i=0;i<O;++i)(f=(s=y===Fx?A:E[i%_])-F[i].x2-t[i].x-M[i])>0&&(M[i]+=f/2)
if(v&&o_(n.center,Px)&&1!==_)for(i=0;i<O;++i)(d=(s=v===Fx?C:D[~~(i/_)])-F[i].y2-t[i].y-j[i])>0&&(j[i]+=d/2)
for(i=0;i<O;++i)m.union(F[i].translate(M[i],j[i]))
switch(f=o_(n.anchor,"x"),d=o_(n.anchor,"y"),o_(n.anchor,$x)){case xx:f-=m.width()
break
case bx:f-=m.width()/2}switch(o_(n.anchor,Px)){case xx:d-=m.height()
break
case bx:d-=m.height()/2}for(f=Math.round(f),d=Math.round(d),m.clear(),i=0;i<O;++i)t[i].mark.bounds.clear()
for(i=0;i<O;++i)(l=t[i]).x+=M[i]+=f,l.y+=j[i]+=d,m.union(l.mark.bounds.union(l.bounds.translate(M[i],j[i]))),p&&e.dirty(l)
return m}function l_(e,t){return"x1"===t?e.x||0:"y1"===t?e.y||0:"x2"===t?(e.x||0)+(e.width||0):"y2"===t?(e.y||0)+(e.height||0):void 0}function u_(e,t){return e.bounds[t]}function c_(e,t,n,r,i,o,a,s,l,u,c,f,d,h){var p,g,m,y,v,b,x,_,w,O=n.length,k=0,E=0
if(!O)return k
for(p=c;p<O;p+=f)n[p]&&(k=a(k,l(n[p],u)))
if(!t.length)return k
for(t.length>i&&(e.warn("Grid headers exceed limit: "+i),t=t.slice(0,i)),k+=o,g=0,y=t.length;g<y;++g)e.dirty(t[g]),t[g].mark.bounds.clear()
for(p=c,g=0,y=t.length;g<y;++g,p+=f){for(v=(b=t[g]).mark.bounds,m=p;m>=0&&null==(x=n[m]);m-=d);s?(_=null==h?x.x:Math.round(x.bounds.x1+h*x.bounds.width()),w=k):(_=k,w=null==h?x.y:Math.round(x.bounds.y1+h*x.bounds.height())),v.union(b.bounds.translate(_-(b.x||0),w-(b.y||0))),b.x=_,b.y=w,e.dirty(b),E=a(E,v[u])}return E}function f_(e,t,n,r,i,o){if(t){e.dirty(t)
var a=n,s=n
r?a=Math.round(i.x1+o*i.width()):s=Math.round(i.y1+o*i.height()),t.bounds.translate(a-(t.x||0),s-(t.y||0)),t.mark.bounds.clear().union(t.bounds),t.x=a,t.y=s,e.dirty(t)}}function d_(e,t,n,r,i,o,a){const s=function(e,t){const n=e[t]||{}
return(t,r)=>null!=n[t]?n[t]:null!=e[t]?e[t]:r}(n,t),l=function(e,t){let n=-1/0
return e.forEach((e=>{null!=e.offset&&(n=Math.max(n,e.offset))})),n>-1/0?n:t}(e,s("offset",0)),u=s("anchor",vx),c=u===xx?1:u===bx?.5:0,f={align:Tx,bounds:s("bounds",Nx),columns:"vertical"===s("direction")?1:e.length,padding:s("margin",8),center:s("center"),nodirty:!0}
switch(t){case gx:f.anchor={x:Math.floor(r.x1)-l,column:xx,y:c*(a||r.height()+2*r.y1),row:u}
break
case mx:f.anchor={x:Math.ceil(r.x2)+l,y:c*(a||r.height()+2*r.y1),row:u}
break
case px:f.anchor={y:Math.floor(i.y1)-l,row:xx,x:c*(o||i.width()+2*i.x1),column:u}
break
case yx:f.anchor={y:Math.ceil(i.y2)+l,x:c*(o||i.width()+2*i.x1),column:u}
break
case"top-left":f.anchor={x:l,y:l}
break
case"top-right":f.anchor={x:o-l,y:l,column:xx}
break
case"bottom-left":f.anchor={x:l,y:a-l,row:xx}
break
case"bottom-right":f.anchor={x:o-l,y:a-l,column:xx,row:xx}}return f}function h_(e,t){var n,r,i=t.items[0],o=i.datum,a=i.orient,s=i.bounds,l=i.x,u=i.y
return i._bounds?i._bounds.clear().union(s):i._bounds=s.clone(),s.clear(),function(e,t,n){var r=t.padding,i=r-n.x,o=r-n.y
if(t.datum.title){var a=t.items[1].items[0],s=a.anchor,l=t.titlePadding||0,u=r-a.x,c=r-a.y
switch(a.orient){case gx:i+=Math.ceil(a.bounds.width())+l
break
case mx:case yx:break
default:o+=a.bounds.height()+l}switch((i||o)&&g_(e,n,i,o),a.orient){case gx:c+=p_(t,n,a,s,1,1)
break
case mx:u+=p_(t,n,a,xx,0,0)+l,c+=p_(t,n,a,s,1,1)
break
case yx:u+=p_(t,n,a,s,0,0),c+=p_(t,n,a,xx,-1,0,1)+l
break
default:u+=p_(t,n,a,s,0,0)}(u||c)&&g_(e,a,u,c),(u=Math.round(a.bounds.x1-r))<0&&(g_(e,n,-u,0),g_(e,a,-u,0))}else(i||o)&&g_(e,n,i,o)}(e,i,i.items[0].items[0]),s=function(e,t){return e.items.forEach((e=>t.union(e.bounds))),t.x1=e.padding,t.y1=e.padding,t}(i,s),n=2*i.padding,r=2*i.padding,s.empty()||(n=Math.ceil(s.width()+n),r=Math.ceil(s.height()+r)),"symbol"===o.type&&function(e){const t=e.reduce(((e,t)=>(e[t.column]=Math.max(t.bounds.x2-t.x,e[t.column]||0),e)),{})
e.forEach((e=>{e.width=t[e.column],e.height=e.bounds.y2-e.y}))}(i.items[0].items[0].items[0].items),a!==jx&&(i.x=l=0,i.y=u=0),i.width=n,i.height=r,Im(s.set(l,u,l+n,u+r),i),i.mark.bounds.clear().union(s),i}function p_(e,t,n,r,i,o,a){const s="symbol"!==e.datum.type,l=n.datum.vgrad,u=(!s||!o&&l||a?t:t.items[0]).bounds[i?"y2":"x2"]-e.padding,c=l&&o?u:0,f=l&&o?0:u,d=i<=0?0:vv(n)
return Math.round(r===vx?c:r===xx?f-d:.5*(u-d))}function g_(e,t,n,r){t.x+=n,t.y+=r,t.bounds.translate(n,r),t.mark.bounds.translate(n,r),e.dirty(t)}function m_(e){vs.call(this,null,e)}function y_(e,t){let n=0
if(void 0===t)for(let r of e)(r=+r)&&(n+=r)
else{let r=-1
for(let i of e)(i=+t(i,++r,e))&&(n+=i)}return n}function v_(e){vs.call(this,null,e)}function b_(e){vs.call(this,null,e)}function x_(){return Ua({})}function __(e){vs.call(this,null,e)}function w_(e){vs.call(this,[],e)}ct(m_,vs,{transform(e,t){const n=t.dataflow
return e.mark.items.forEach((t=>{e.layout&&function(e,t,n){var r,i,o,a,s,l,u,c=function(e){var t,n,r=e.items,i=r.length,o=0
const a={marks:[],rowheaders:[],rowfooters:[],colheaders:[],colfooters:[],rowtitle:null,coltitle:null}
for(;o<i;++o)if(n=(t=r[o]).items,t.marktype===_x)switch(t.role){case wx:case kx:case Ox:break
case Ex:a.rowheaders.push(...n)
break
case Ax:a.rowfooters.push(...n)
break
case Dx:a.colheaders.push(...n)
break
case Cx:a.colfooters.push(...n)
break
case Sx:a.rowtitle=n[0]
break
case Mx:a.coltitle=n[0]
break
default:a.marks.push(...n)}return a}(t),f=c.marks,d=n.bounds===Nx?l_:u_,h=n.offset,p=n.columns||f.length,g=p<=0?1:Math.ceil(f.length/p),m=g*p
const y=s_(e,f,n)
y.empty()&&y.set(0,0,0,0),c.rowheaders&&(l=o_(n.headerBand,Px,null),r=c_(e,c.rowheaders,f,0,g,-o_(h,"rowHeader"),t_,0,d,"x1",0,p,1,l)),c.colheaders&&(l=o_(n.headerBand,$x,null),i=c_(e,c.colheaders,f,0,p,-o_(h,"columnHeader"),t_,1,d,"y1",0,1,p,l)),c.rowfooters&&(l=o_(n.footerBand,Px,null),o=c_(e,c.rowfooters,f,0,g,o_(h,"rowFooter"),n_,0,d,"x2",p-1,p,1,l)),c.colfooters&&(l=o_(n.footerBand,$x,null),a=c_(e,c.colfooters,f,0,p,o_(h,"columnFooter"),n_,1,d,"y2",m-p,1,p,l)),c.rowtitle&&(s=o_(n.titleAnchor,Px),u=o_(h,"rowTitle"),u=s===xx?o+u:r-u,l=o_(n.titleBand,Px,.5),f_(e,c.rowtitle,u,0,y,l)),c.coltitle&&(s=o_(n.titleAnchor,$x),u=o_(h,"columnTitle"),u=s===xx?a+u:i-u,l=o_(n.titleBand,$x,.5),f_(e,c.coltitle,u,1,y,l))}(n,t,e.layout),function(e,t,n){var r,i,o,a,s,l=t.items,u=Math.max(0,t.width||0),c=Math.max(0,t.height||0),f=(new Fm).set(0,0,u,c),d=f.clone(),h=f.clone(),p=[]
for(a=0,s=l.length;a<s;++a)switch((i=l[a]).role){case wx:(Kx(i)?d:h).union(Qx(e,i,u,c))
break
case Ox:r=i
break
case kx:p.push(h_(e,i))
break
case"frame":case"scope":case Ex:case Ax:case Sx:case Dx:case Cx:case Mx:d.union(i.bounds),h.union(i.bounds)
break
default:f.union(i.bounds)}if(p.length){const t={}
p.forEach((e=>{(o=e.orient||mx)!==jx&&(t[o]||(t[o]=[])).push(e)}))
for(const r in t){const i=t[r]
s_(e,i,d_(i,r,n.legends,d,h,u,c))}p.forEach((t=>{const r=t.bounds
if(r.equals(t._bounds)||(t.bounds=t._bounds,e.dirty(t),t.bounds=r,e.dirty(t)),n.autosize&&"fit"===n.autosize.type)switch(t.orient){case gx:case mx:f.add(r.x1,0).add(r.x2,0)
break
case px:case yx:f.add(0,r.y1).add(0,r.y2)}else f.union(r)}))}f.union(d).union(h),r&&f.union(function(e,t,n,r,i){var o,a=t.items[0],s=a.frame,l=a.orient,u=a.anchor,c=a.offset,f=a.padding,d=a.items[0].items[0],h=a.items[1]&&a.items[1].items[0],p=l===gx||l===mx?r:n,g=0,m=0,y=0,v=0,b=0
if(s!==_x?l===gx?(g=i.y2,p=i.y1):l===mx?(g=i.y1,p=i.y2):(g=i.x1,p=i.x2):l===gx&&(g=r,p=0),o=u===vx?g:u===xx?p:(g+p)/2,h&&h.text){switch(l){case px:case yx:b=d.bounds.height()+f
break
case gx:v=d.bounds.width()+f
break
case mx:v=-d.bounds.width()-f}Xx.clear().union(h.bounds),Xx.translate(v-(h.x||0),b-(h.y||0)),Jx(h,"x",v)|Jx(h,"y",b)&&(e.dirty(h),h.bounds.clear().union(Xx),h.mark.bounds.clear().union(Xx),e.dirty(h)),Xx.clear().union(h.bounds)}else Xx.clear()
switch(Xx.union(d.bounds),l){case px:m=o,y=i.y1-Xx.height()-c
break
case gx:m=i.x1-Xx.width()-c,y=o
break
case mx:m=i.x2+Xx.width()+c,y=o
break
case yx:m=o,y=i.y2+c
break
default:m=a.x,y=a.y}return Jx(a,"x",m)|Jx(a,"y",y)&&(Xx.translate(m,y),e.dirty(a),a.bounds.clear().union(Xx),t.bounds.clear().union(Xx),e.dirty(a)),a.bounds}(e,r,u,c,f)),t.clip&&f.set(0,0,t.width||0,t.height||0),function(e,t,n,r){const i=r.autosize||{},o=i.type
if(e._autosize<1||!o)return
let a=e._width,s=e._height,l=Math.max(0,t.width||0),u=Math.max(0,Math.ceil(-n.x1)),c=Math.max(0,t.height||0),f=Math.max(0,Math.ceil(-n.y1))
const d=Math.max(0,Math.ceil(n.x2-l)),h=Math.max(0,Math.ceil(n.y2-c))
if("padding"===i.contains){const t=e.padding()
a-=t.left+t.right,s-=t.top+t.bottom}o===jx?(u=0,f=0,l=a,c=s):"fit"===o?(l=Math.max(0,a-u-d),c=Math.max(0,s-f-h)):"fit-x"===o?(l=Math.max(0,a-u-d),s=c+f+h):"fit-y"===o?(a=l+u+d,c=Math.max(0,s-f-h)):"pad"===o&&(a=l+u+d,s=c+f+h),e._resizeView(a,s,l,c,[u,f],i.resize)}(e,t,f,n)}(n,t,e)})),function(e){return e&&"legend-entry"!==e.mark.role}(e.mark.group)?t.reflow():t}}),ct(v_,vs,{transform(e,t){if(this.value&&!e.modified())return t.StopPropagation
var n=t.dataflow.locale(),r=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=this.value,o=e.scale,a=mg(o,null==e.count?e.values?e.values.length:10:e.count,e.minstep),s=e.format||bg(n,o,a,e.formatSpecifier,e.formatType,!!e.values),l=e.values?yg(o,e.values,a):vg(o,a)
return i&&(r.rem=i),i=l.map(((e,t)=>Ua({index:t/(l.length-1||1),value:e,label:s(e)}))),e.extra&&i.length&&i.push(Ua({index:-1,extra:{value:i[0].value},label:""})),r.source=i,r.add=i,this.value=i,r}}),ct(b_,vs,{transform(e,t){var n=t.dataflow,r=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=e.item||x_,o=e.key||La,a=this.value
return _e(r.encode)&&(r.encode=null),a&&(e.modified("key")||t.modified(o))&&oe("DataJoin does not support modified key function or fields."),a||(t=t.addAll(),this.value=a=function(e){const t=lt().test((e=>e.exit))
return t.lookup=n=>t.get(e(n)),t}(o)),t.visit(t.ADD,(e=>{const t=o(e)
let n=a.get(t)
n?n.exit?(a.empty--,r.add.push(n)):r.mod.push(n):(n=i(e),a.set(t,n),r.add.push(n)),n.datum=e,n.exit=!1})),t.visit(t.MOD,(e=>{const t=o(e),n=a.get(t)
n&&(n.datum=e,r.mod.push(n))})),t.visit(t.REM,(e=>{const t=o(e),n=a.get(t)
e!==n.datum||n.exit||(r.rem.push(n),n.exit=!0,++a.empty)})),t.changed(t.ADD_MOD)&&r.modifies("datum"),(t.clean()||e.clean&&a.empty>n.cleanThreshold)&&n.runAfter(a.clean),r}}),ct(__,vs,{transform(e,t){var n=t.fork(t.ADD_REM),r=e.mod||!1,i=e.encoders,o=t.encode
if(_e(o)){if(!n.changed()&&!o.every((e=>i[e])))return t.StopPropagation
o=o[0],n.encode=null}var a="enter"===o,s=i.update||he,l=i.enter||he,u=i.exit||he,c=(o&&!a?i[o]:s)||he
if(t.changed(t.ADD)&&(t.visit(t.ADD,(t=>{l(t,e),s(t,e)})),n.modifies(l.output),n.modifies(s.output),c!==he&&c!==s&&(t.visit(t.ADD,(t=>{c(t,e)})),n.modifies(c.output))),t.changed(t.REM)&&u!==he&&(t.visit(t.REM,(t=>{u(t,e)})),n.modifies(u.output)),a||c!==he){const i=t.MOD|(e.modified()?t.REFLOW:0)
a?(t.visit(i,(t=>{const i=l(t,e)||r;(c(t,e)||i)&&n.mod.push(t)})),n.mod.length&&n.modifies(l.output)):t.visit(i,(t=>{(c(t,e)||r)&&n.mod.push(t)})),n.mod.length&&n.modifies(c.output)}return n.changed()?n:t.StopPropagation}}),ct(w_,vs,{transform(e,t){if(null!=this.value&&!e.modified())return t.StopPropagation
var n,r,i,o,a,s=t.dataflow.locale(),l=t.fork(t.NO_SOURCE|t.NO_FIELDS),u=this.value,c=e.type||dg,f=e.scale,d=+e.limit,h=mg(f,null==e.count?5:e.count,e.minstep),p=!!e.values||c===dg,g=e.format||kg(s,f,h,c,e.formatSpecifier,e.formatType,p),m=e.values||Og(f,h)
return u&&(l.rem=u),c===dg?(d&&m.length>d?(t.dataflow.warn("Symbol legend count exceeds limit, filtering items."),u=m.slice(0,d-1),a=!0):u=m,Ge(i=e.size)?(e.values||0!==f(u[0])||(u=u.slice(1)),o=u.reduce(((t,n)=>Math.max(t,i(n,e))),0)):i=et(o=i||8),u=u.map(((t,n)=>Ua({index:n,label:g(t,n,u),value:t,offset:o,size:i(t,e)}))),a&&(a=m[u.length],u.push(Ua({index:u.length,label:"…".concat(m.length-u.length," entries"),value:a,offset:o,size:i(a,e)})))):"gradient"===c?(n=f.domain(),r=ag(f,n[0],Se(n)),m.length<3&&!e.values&&n[0]!==Se(n)&&(m=[n[0],Se(n)]),u=m.map(((e,t)=>Ua({index:t,label:g(e,t,m),value:e,perc:r(e)})))):(i=m.length-1,r=function(e){const t=e.domain(),n=t.length-1
let r=+t[0],i=+Se(t),o=i-r
if(e.type===Mp){const e=n?o/n:.1
r-=e,i+=e,o=i-r}return e=>(e-r)/o}(f),u=m.map(((e,t)=>Ua({index:t,label:g(e,t,m),value:e,perc:t?r(e):0,perc2:t===i?1:r(m[t+1])})))),l.source=u,l.add=u,this.value=u,l}})
const O_=e=>e.source.x,k_=e=>e.source.y,E_=e=>e.target.x,A_=e=>e.target.y
function S_(e){vs.call(this,{},e)}S_.Definition={type:"LinkPath",metadata:{modifies:!0},params:[{name:"sourceX",type:"field",default:"source.x"},{name:"sourceY",type:"field",default:"source.y"},{name:"targetX",type:"field",default:"target.x"},{name:"targetY",type:"field",default:"target.y"},{name:"orient",type:"enum",default:"vertical",values:["horizontal","vertical","radial"]},{name:"shape",type:"enum",default:"line",values:["line","arc","curve","diagonal","orthogonal"]},{name:"require",type:"signal"},{name:"as",type:"string",default:"path"}]},ct(S_,vs,{transform(e,t){var n=e.sourceX||O_,r=e.sourceY||k_,i=e.targetX||E_,o=e.targetY||A_,a=e.as||"path",s=e.orient||"vertical",l=e.shape||"line",u=j_.get(l+"-"+s)||j_.get(l)
return u||oe("LinkPath unsupported type: "+e.shape+(e.orient?"-"+e.orient:"")),t.visit(t.SOURCE,(e=>{e[a]=u(n(e),r(e),i(e),o(e))})),t.reflow(e.modified()).modifies(a)}})
const D_=(e,t,n,r)=>"M"+e+","+t+"L"+n+","+r,C_=(e,t,n,r)=>{var i=n-e,o=r-t,a=Math.sqrt(i*i+o*o)/2
return"M"+e+","+t+"A"+a+","+a+" "+180*Math.atan2(o,i)/Math.PI+" 0 1 "+n+","+r},M_=(e,t,n,r)=>{const i=n-e,o=r-t,a=.2*(i+o),s=.2*(o-i)
return"M"+e+","+t+"C"+(e+a)+","+(t+s)+" "+(n+s)+","+(r-a)+" "+n+","+r},j_=lt({line:D_,"line-radial":(e,t,n,r)=>D_(t*Math.cos(e),t*Math.sin(e),r*Math.cos(n),r*Math.sin(n)),arc:C_,"arc-radial":(e,t,n,r)=>C_(t*Math.cos(e),t*Math.sin(e),r*Math.cos(n),r*Math.sin(n)),curve:M_,"curve-radial":(e,t,n,r)=>M_(t*Math.cos(e),t*Math.sin(e),r*Math.cos(n),r*Math.sin(n)),"orthogonal-horizontal":(e,t,n,r)=>"M"+e+","+t+"V"+r+"H"+n,"orthogonal-vertical":(e,t,n,r)=>"M"+e+","+t+"H"+n+"V"+r,"orthogonal-radial":(e,t,n,r)=>{const i=Math.cos(e),o=Math.sin(e),a=Math.cos(n),s=Math.sin(n)
return"M"+t*i+","+t*o+"A"+t+","+t+" 0 0,"+((Math.abs(n-e)>Math.PI?n<=e:n>e)?1:0)+" "+t*a+","+t*s+"L"+r*a+","+r*s},"diagonal-horizontal":(e,t,n,r)=>{const i=(e+n)/2
return"M"+e+","+t+"C"+i+","+t+" "+i+","+r+" "+n+","+r},"diagonal-vertical":(e,t,n,r)=>{const i=(t+r)/2
return"M"+e+","+t+"C"+e+","+i+" "+n+","+i+" "+n+","+r},"diagonal-radial":(e,t,n,r)=>{const i=Math.cos(e),o=Math.sin(e),a=Math.cos(n),s=Math.sin(n),l=(t+r)/2
return"M"+t*i+","+t*o+"C"+l*i+","+l*o+" "+l*a+","+l*s+" "+r*a+","+r*s}})
function F_(e){vs.call(this,null,e)}function T_(e){return Xp(e)&&e!==Ap}F_.Definition={type:"Pie",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"startAngle",type:"number",default:0},{name:"endAngle",type:"number",default:6.283185307179586},{name:"sort",type:"boolean",default:!1},{name:"as",type:"string",array:!0,length:2,default:["startAngle","endAngle"]}]},ct(F_,vs,{transform(e,t){var n,r,i,o=e.as||["startAngle","endAngle"],a=o[0],s=o[1],l=e.field||fe,u=e.startAngle||0,c=null!=e.endAngle?e.endAngle:2*Math.PI,f=t.source,d=f.map(l),h=d.length,p=u,g=(c-u)/y_(d),m=Al(h)
for(e.sort&&m.sort(((e,t)=>d[e]-d[t])),n=0;n<h;++n)i=d[m[n]],(r=f[m[n]])[a]=p,r[s]=p+=i*g
return this.value=d,t.reflow(e.modified()).modifies(o)}})
const N_=Mt(["set","modified","clear","type","scheme","schemeExtent","schemeCount","domain","domainMin","domainMid","domainMax","domainRaw","domainImplicit","nice","zero","bins","range","rangeStep","round","reverse","interpolate","interpolateGamma"])
function $_(e){vs.call(this,null,e),this.modified(!0)}function P_(e,t,n){return Qp(e)&&Math.abs(t.reduce(((e,t)=>e+(t<0?-1:t>0?1:0)),0))!==t.length&&n.warn("Log scale domain includes zero: "+Et(t)),t}function z_(e,t,n){return Ge(e)&&(t||n)?rg(e,I_(t||[0,1],n)):e}function I_(e,t){return t?e.slice().reverse():e}function R_(e){vs.call(this,null,e)}ct($_,vs,{transform(e,t){var n=t.dataflow,r=this.value,i=function(e){var t,n=e.type,r=""
return n===Ap?"sequential-linear":(function(e){const t=e.type
return Xp(t)&&t!==kp&&t!==Ep&&(e.scheme||e.range&&e.range.length&&e.range.every(yt))}(e)&&(r=2===(t=e.rawDomain?e.rawDomain.length:e.domain?e.domain.length+ +(null!=e.domainMid):0)?"sequential-":3===t?"diverging-":""),(r+n||bp).toLowerCase())}(e)
for(i in r&&i===r.type||(this.value=r=Hp(i)()),e)if(!N_[i]){if("padding"===i&&T_(r.type))continue
Ge(r[i])?r[i](e[i]):n.warn("Unsupported scale property: "+i)}return function(e,t,n){var r=e.type,i=t.round||!1,o=t.range
if(null!=t.rangeStep)o=function(e,t,n){e!==Tp&&e!==Fp&&oe("Only band and point scales support rangeStep.")
var r=(null!=t.paddingOuter?t.paddingOuter:t.padding)||0,i=e===Fp?1:(null!=t.paddingInner?t.paddingInner:t.padding)||0
return[0,t.rangeStep*vp(n,i,r)]}(r,t,n)
else if(t.scheme&&(o=function(e,t,n){var r,i=t.schemeExtent
return _e(t.scheme)?r=ig(t.scheme,t.interpolate,t.interpolateGamma):(r=fg(t.scheme.toLowerCase()))||oe("Unrecognized scheme name: ".concat(t.scheme)),n=e===Mp?n+1:e===Np?n-1:e===Dp||e===Cp?+t.schemeCount||5:n,eg(e)?z_(r,i,t.reverse):Ge(r)?og(z_(r,i),n):e===jp?r:r.slice(0,n)}(r,t,n),Ge(o))){if(e.interpolator)return e.interpolator(o)
oe("Scale type ".concat(r," does not support interpolating color schemes."))}if(o&&eg(r))return e.interpolator(ig(I_(o,t.reverse),t.interpolate,t.interpolateGamma))
o&&t.interpolate&&e.interpolate?e.interpolate(sg(t.interpolate,t.interpolateGamma)):Ge(e.round)?e.round(i):Ge(e.rangeRound)&&e.interpolate(i?wd:_d),o&&e.range(I_(o,t.reverse))}(r,e,function(e,t,n){let r=t.bins
if(r&&!_e(r)){const t=e.domain(),n=t[0],i=Se(t),o=r.step
let a=null==r.start?n:r.start,s=null==r.stop?i:r.stop
o||oe("Scale bins parameter missing step property."),a<n&&(a=o*Math.ceil(n/o)),s>i&&(s=o*Math.floor(i/o)),r=Al(a,s+o/2,o)}return r?e.bins=r:e.bins&&delete e.bins,e.type===Np&&(r?t.domain||t.domainRaw||(e.domain(r),n=r.length):e.bins=e.domain()),n}(r,e,function(e,t,n){const r=function(e,t,n){return t?(e.domain(P_(e.type,t,n)),t.length):-1}(e,t.domainRaw,n)
if(r>-1)return r
var i,o,a=t.domain,s=e.type,l=t.zero||void 0===t.zero&&function(e){const t=e.type
return!e.bins&&(t===bp||t===_p||t===wp)}(e)
if(!a)return 0
if(T_(s)&&t.padding&&a[0]!==Se(a)&&(a=function(e,t,n,r,i,o){var a=Math.abs(Se(n)-n[0]),s=a/(a-2*r),l=e===xp?Be(t,null,s):e===wp?Ue(t,null,s,.5):e===_p?Ue(t,null,s,i||1):e===Op?qe(t,null,s,o||1):Le(t,null,s)
return(t=t.slice())[0]=l[0],t[t.length-1]=l[1],t}(s,a,t.range,t.padding,t.exponent,t.constant)),(l||null!=t.domainMin||null!=t.domainMax||null!=t.domainMid)&&(i=(a=a.slice()).length-1||1,l&&(a[0]>0&&(a[0]=0),a[i]<0&&(a[i]=0)),null!=t.domainMin&&(a[0]=t.domainMin),null!=t.domainMax&&(a[i]=t.domainMax),null!=t.domainMid)){const e=(o=t.domainMid)>a[i]?i+1:o<a[0]?0:i
e!==i&&n.warn("Scale domainMid exceeds domain min or max.",o),a.splice(e,0,o)}return e.domain(P_(s,a,n)),s===jp&&e.unknown(t.domainImplicit?bh:void 0),t.nice&&e.nice&&e.nice(!0!==t.nice&&mg(e,t.nice)||null),a.length}(r,e,n))),t.fork(t.NO_SOURCE|t.NO_FIELDS)}}),ct(R_,vs,{transform(e,t){const n=e.modified("sort")||t.changed(t.ADD)||t.modified(e.sort.fields)||t.modified("datum")
return n&&t.source.sort(Va(e.sort)),this.modified(n),t}})
const L_="zero",B_="center",U_="normalize",q_=["y0","y1"]
function Z_(e){vs.call(this,null,e)}function W_(e,t,n,r,i){for(var o,a=(t-e.sum)/2,s=e.length,l=0;l<s;++l)(o=e[l])[r]=a,o[i]=a+=Math.abs(n(o))}function V_(e,t,n,r,i){for(var o,a=1/e.sum,s=0,l=e.length,u=0,c=0;u<l;++u)(o=e[u])[r]=s,o[i]=s=a*(c+=Math.abs(n(o)))}function H_(e,t,n,r,i){for(var o,a,s=0,l=0,u=e.length,c=0;c<u;++c)(o=+n(a=e[c]))<0?(a[r]=l,a[i]=l+=o):(a[r]=s,a[i]=s+=o)}Z_.Definition={type:"Stack",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"groupby",type:"field",array:!0},{name:"sort",type:"compare"},{name:"offset",type:"enum",default:L_,values:[L_,B_,U_]},{name:"as",type:"string",array:!0,length:2,default:q_}]},ct(Z_,vs,{transform(e,t){var n,r,i,o,a=e.as||q_,s=a[0],l=a[1],u=Va(e.sort),c=e.field||fe,f=e.offset===B_?W_:e.offset===U_?V_:H_
for(n=function(e,t,n,r){var i,o,a,s,l,u,c,f,d,h=[],p=e=>e(l)
if(null==t)h.push(e.slice())
else for(i={},o=0,a=e.length;o<a;++o)l=e[o],(c=i[u=t.map(p)])||(i[u]=c=[],h.push(c)),c.push(l)
for(u=0,d=0,s=h.length;u<s;++u){for(o=0,f=0,a=(c=h[u]).length;o<a;++o)f+=Math.abs(r(c[o]))
c.sum=f,f>d&&(d=f),n&&c.sort(n)}return h.max=d,h}(t.source,e.groupby,u,c),r=0,i=n.length,o=n.max;r<i;++r)f(n[r],o,c,s,l)
return t.reflow(e.modified()).modifies(a)}})
const G_=e=>e
function Y_(e,t){e&&J_.hasOwnProperty(e.type)&&J_[e.type](e,t)}var X_={Feature:function(e,t){Y_(e.geometry,t)},FeatureCollection:function(e,t){for(var n=e.features,r=-1,i=n.length;++r<i;)Y_(n[r].geometry,t)}},J_={Sphere:function(e,t){t.sphere()},Point:function(e,t){e=e.coordinates,t.point(e[0],e[1],e[2])},MultiPoint:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)e=n[r],t.point(e[0],e[1],e[2])},LineString:function(e,t){K_(e.coordinates,t,0)},MultiLineString:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)K_(n[r],t,0)},Polygon:function(e,t){Q_(e.coordinates,t)},MultiPolygon:function(e,t){for(var n=e.coordinates,r=-1,i=n.length;++r<i;)Q_(n[r],t)},GeometryCollection:function(e,t){for(var n=e.geometries,r=-1,i=n.length;++r<i;)Y_(n[r],t)}}
function K_(e,t,n){var r,i=-1,o=e.length-n
for(t.lineStart();++i<o;)r=e[i],t.point(r[0],r[1],r[2])
t.lineEnd()}function Q_(e,t){var n=-1,r=e.length
for(t.polygonStart();++n<r;)K_(e[n],t,1)
t.polygonEnd()}function ew(e,t){e&&X_.hasOwnProperty(e.type)?X_[e.type](e,t):Y_(e,t)}class tw{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials
let n=0
for(let r=0;r<this._n&&r<32;r++){const i=t[r],o=e+i,a=Math.abs(e)<Math.abs(i)?e-(o-i):i-(o-e)
a&&(t[n++]=a),e=o}return t[n]=e,this._n=n+1,this}valueOf(){const e=this._partials
let t,n,r,i=this._n,o=0
if(i>0){for(o=e[--i];i>0&&(t=o,n=e[--i],o=t+n,r=n-(o-t),!r););i>0&&(r<0&&e[i-1]<0||r>0&&e[i-1]>0)&&(n=2*r,t=o+n,n==t-o&&(o=t))}return o}}var nw=1e-6,rw=1e-12,iw=Math.PI,ow=iw/2,aw=iw/4,sw=2*iw,lw=180/iw,uw=iw/180,cw=Math.abs,fw=Math.atan,dw=Math.atan2,hw=Math.cos,pw=Math.ceil,gw=Math.exp,mw=(Math.floor,Math.hypot),yw=Math.log,vw=Math.pow,bw=Math.sin,xw=Math.sign||function(e){return e>0?1:e<0?-1:0},_w=Math.sqrt,ww=Math.tan
function Ow(e){return e>1?0:e<-1?iw:Math.acos(e)}function kw(e){return e>1?ow:e<-1?-ow:Math.asin(e)}function Ew(){}var Aw,Sw,Dw,Cw,Mw=new tw,jw=new tw,Fw={point:Ew,lineStart:Ew,lineEnd:Ew,polygonStart:function(){Fw.lineStart=Tw,Fw.lineEnd=Pw},polygonEnd:function(){Fw.lineStart=Fw.lineEnd=Fw.point=Ew,Mw.add(cw(jw)),jw=new tw},result:function(){var e=Mw/2
return Mw=new tw,e}}
function Tw(){Fw.point=Nw}function Nw(e,t){Fw.point=$w,Aw=Dw=e,Sw=Cw=t}function $w(e,t){jw.add(Cw*e-Dw*t),Dw=e,Cw=t}function Pw(){$w(Aw,Sw)}const zw=Fw
var Iw=1/0,Rw=Iw,Lw=-Iw,Bw=Lw,Uw={point:function(e,t){e<Iw&&(Iw=e),e>Lw&&(Lw=e),t<Rw&&(Rw=t),t>Bw&&(Bw=t)},lineStart:Ew,lineEnd:Ew,polygonStart:Ew,polygonEnd:Ew,result:function(){var e=[[Iw,Rw],[Lw,Bw]]
return Lw=Bw=-(Rw=Iw=1/0),e}}
const qw=Uw
var Zw,Ww,Vw,Hw,Gw=0,Yw=0,Xw=0,Jw=0,Kw=0,Qw=0,eO=0,tO=0,nO=0,rO={point:iO,lineStart:oO,lineEnd:lO,polygonStart:function(){rO.lineStart=uO,rO.lineEnd=cO},polygonEnd:function(){rO.point=iO,rO.lineStart=oO,rO.lineEnd=lO},result:function(){var e=nO?[eO/nO,tO/nO]:Qw?[Jw/Qw,Kw/Qw]:Xw?[Gw/Xw,Yw/Xw]:[NaN,NaN]
return Gw=Yw=Xw=Jw=Kw=Qw=eO=tO=nO=0,e}}
function iO(e,t){Gw+=e,Yw+=t,++Xw}function oO(){rO.point=aO}function aO(e,t){rO.point=sO,iO(Vw=e,Hw=t)}function sO(e,t){var n=e-Vw,r=t-Hw,i=_w(n*n+r*r)
Jw+=i*(Vw+e)/2,Kw+=i*(Hw+t)/2,Qw+=i,iO(Vw=e,Hw=t)}function lO(){rO.point=iO}function uO(){rO.point=fO}function cO(){dO(Zw,Ww)}function fO(e,t){rO.point=dO,iO(Zw=Vw=e,Ww=Hw=t)}function dO(e,t){var n=e-Vw,r=t-Hw,i=_w(n*n+r*r)
Jw+=i*(Vw+e)/2,Kw+=i*(Hw+t)/2,Qw+=i,eO+=(i=Hw*e-Vw*t)*(Vw+e),tO+=i*(Hw+t),nO+=3*i,iO(Vw=e,Hw=t)}const hO=rO
function pO(e){this._context=e}pO.prototype={_radius:4.5,pointRadius:function(e){return this._radius=e,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(e,t){switch(this._point){case 0:this._context.moveTo(e,t),this._point=1
break
case 1:this._context.lineTo(e,t)
break
default:this._context.moveTo(e+this._radius,t),this._context.arc(e,t,this._radius,0,sw)}},result:Ew}
var gO,mO,yO,vO,bO,xO=new tw,_O={point:Ew,lineStart:function(){_O.point=wO},lineEnd:function(){gO&&OO(mO,yO),_O.point=Ew},polygonStart:function(){gO=!0},polygonEnd:function(){gO=null},result:function(){var e=+xO
return xO=new tw,e}}
function wO(e,t){_O.point=OO,mO=vO=e,yO=bO=t}function OO(e,t){vO-=e,bO-=t,xO.add(_w(vO*vO+bO*bO)),vO=e,bO=t}const kO=_O
function EO(){this._string=[]}function AO(e){return"m0,"+e+"a"+e+","+e+" 0 1,1 0,"+-2*e+"a"+e+","+e+" 0 1,1 0,"+2*e+"z"}function SO(e,t){var n,r,i=4.5
function o(e){return e&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),ew(e,n(r))),r.result()}return o.area=function(e){return ew(e,n(zw)),zw.result()},o.measure=function(e){return ew(e,n(kO)),kO.result()},o.bounds=function(e){return ew(e,n(qw)),qw.result()},o.centroid=function(e){return ew(e,n(hO)),hO.result()},o.projection=function(t){return arguments.length?(n=null==t?(e=null,G_):(e=t).stream,o):e},o.context=function(e){return arguments.length?(r=null==e?(t=null,new EO):new pO(t=e),"function"!=typeof i&&r.pointRadius(i),o):t},o.pointRadius=function(e){return arguments.length?(i="function"==typeof e?e:(r.pointRadius(+e),+e),o):i},o.projection(e).context(t)}function DO(){var e,t=[]
return{point:function(t,n,r){e.push([t,n,r])},lineStart:function(){t.push(e=[])},lineEnd:Ew,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t
return t=[],e=null,n}}}function CO(e,t){return cw(e[0]-t[0])<nw&&cw(e[1]-t[1])<nw}function MO(e,t,n,r){this.x=e,this.z=t,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function jO(e,t,n,r,i){var o,a,s=[],l=[]
if(e.forEach((function(e){if(!((t=e.length-1)<=0)){var t,n,r=e[0],a=e[t]
if(CO(r,a)){if(!r[2]&&!a[2]){for(i.lineStart(),o=0;o<t;++o)i.point((r=e[o])[0],r[1])
return void i.lineEnd()}a[0]+=2e-6}s.push(n=new MO(r,e,null,!0)),l.push(n.o=new MO(r,null,n,!1)),s.push(n=new MO(a,e,null,!1)),l.push(n.o=new MO(a,null,n,!0))}})),s.length){for(l.sort(t),FO(s),FO(l),o=0,a=l.length;o<a;++o)l[o].e=n=!n
for(var u,c,f=s[0];;){for(var d=f,h=!0;d.v;)if((d=d.n)===f)return
u=d.z,i.lineStart()
do{if(d.v=d.o.v=!0,d.e){if(h)for(o=0,a=u.length;o<a;++o)i.point((c=u[o])[0],c[1])
else r(d.x,d.n.x,1,i)
d=d.n}else{if(h)for(u=d.p.z,o=u.length-1;o>=0;--o)i.point((c=u[o])[0],c[1])
else r(d.x,d.p.x,-1,i)
d=d.p}u=(d=d.o).z,h=!h}while(!d.v)
i.lineEnd()}}}function FO(e){if(t=e.length){for(var t,n,r=0,i=e[0];++r<t;)i.n=n=e[r],n.p=i,i=n
i.n=n=e[0],n.p=i}}function TO(e){return[dw(e[1],e[0]),kw(e[2])]}function NO(e){var t=e[0],n=e[1],r=hw(n)
return[r*hw(t),r*bw(t),bw(n)]}function $O(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function PO(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function zO(e,t){e[0]+=t[0],e[1]+=t[1],e[2]+=t[2]}function IO(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function RO(e){var t=_w(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])
e[0]/=t,e[1]/=t,e[2]/=t}function LO(e){return cw(e[0])<=iw?e[0]:xw(e[0])*((cw(e[0])+iw)%sw-iw)}function BO(e){return Array.from(function*(e){for(const t of e)yield*t}(e))}function UO(e,t,n,r){return function(i){var o,a,s,l=t(i),u=DO(),c=t(u),f=!1,d={point:h,lineStart:g,lineEnd:m,polygonStart:function(){d.point=y,d.lineStart=v,d.lineEnd=b,a=[],o=[]},polygonEnd:function(){d.point=h,d.lineStart=g,d.lineEnd=m,a=BO(a)
var e=function(e,t){var n=LO(t),r=t[1],i=bw(r),o=[bw(n),-hw(n),0],a=0,s=0,l=new tw
1===i?r=ow+nw:-1===i&&(r=-ow-nw)
for(var u=0,c=e.length;u<c;++u)if(d=(f=e[u]).length)for(var f,d,h=f[d-1],p=LO(h),g=h[1]/2+aw,m=bw(g),y=hw(g),v=0;v<d;++v,p=x,m=w,y=O,h=b){var b=f[v],x=LO(b),_=b[1]/2+aw,w=bw(_),O=hw(_),k=x-p,E=k>=0?1:-1,A=E*k,S=A>iw,D=m*w
if(l.add(dw(D*E*bw(A),y*O+D*hw(A))),a+=S?k+E*sw:k,S^p>=n^x>=n){var C=PO(NO(h),NO(b))
RO(C)
var M=PO(o,C)
RO(M)
var j=(S^k>=0?-1:1)*kw(M[2]);(r>j||r===j&&(C[0]||C[1]))&&(s+=S^k>=0?1:-1)}}return(a<-1e-6||a<nw&&l<-1e-12)^1&s}(o,r)
a.length?(f||(i.polygonStart(),f=!0),jO(a,ZO,e,n,i)):e&&(f||(i.polygonStart(),f=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),f&&(i.polygonEnd(),f=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}}
function h(t,n){e(t,n)&&i.point(t,n)}function p(e,t){l.point(e,t)}function g(){d.point=p,l.lineStart()}function m(){d.point=h,l.lineEnd()}function y(e,t){s.push([e,t]),c.point(e,t)}function v(){c.lineStart(),s=[]}function b(){y(s[0][0],s[0][1]),c.lineEnd()
var e,t,n,r,l=c.clean(),d=u.result(),h=d.length
if(s.pop(),o.push(s),s=null,h)if(1&l){if((t=(n=d[0]).length-1)>0){for(f||(i.polygonStart(),f=!0),i.lineStart(),e=0;e<t;++e)i.point((r=n[e])[0],r[1])
i.lineEnd()}}else h>1&&2&l&&d.push(d.pop().concat(d.shift())),a.push(d.filter(qO))}return d}}function qO(e){return e.length>1}function ZO(e,t){return((e=e.x)[0]<0?e[1]-ow-nw:ow-e[1])-((t=t.x)[0]<0?t[1]-ow-nw:ow-t[1])}EO.prototype={_radius:4.5,_circle:AO(4.5),pointRadius:function(e){return(e=+e)!==this._radius&&(this._radius=e,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(e,t){switch(this._point){case 0:this._string.push("M",e,",",t),this._point=1
break
case 1:this._string.push("L",e,",",t)
break
default:null==this._circle&&(this._circle=AO(this._radius)),this._string.push("M",e,",",t,this._circle)}},result:function(){if(this._string.length){var e=this._string.join("")
return this._string=[],e}return null}}
const WO=UO((function(){return!0}),(function(e){var t,n=NaN,r=NaN,i=NaN
return{lineStart:function(){e.lineStart(),t=1},point:function(o,a){var s=o>0?iw:-iw,l=cw(o-n)
cw(l-iw)<nw?(e.point(n,r=(r+a)/2>0?ow:-ow),e.point(i,r),e.lineEnd(),e.lineStart(),e.point(s,r),e.point(o,r),t=0):i!==s&&l>=iw&&(cw(n-i)<nw&&(n-=i*nw),cw(o-s)<nw&&(o-=s*nw),r=function(e,t,n,r){var i,o,a=bw(e-n)
return cw(a)>nw?fw((bw(t)*(o=hw(r))*bw(n)-bw(r)*(i=hw(t))*bw(e))/(i*o*a)):(t+r)/2}(n,r,o,a),e.point(i,r),e.lineEnd(),e.lineStart(),e.point(s,r),t=0),e.point(n=o,r=a),i=s},lineEnd:function(){e.lineEnd(),n=r=NaN},clean:function(){return 2-t}}}),(function(e,t,n,r){var i
if(null==e)i=n*ow,r.point(-iw,i),r.point(0,i),r.point(iw,i),r.point(iw,0),r.point(iw,-i),r.point(0,-i),r.point(-iw,-i),r.point(-iw,0),r.point(-iw,i)
else if(cw(e[0]-t[0])>nw){var o=e[0]<t[0]?iw:-iw
i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(t[0],t[1])}),[-iw,-ow])
function VO(e,t){(t=NO(t))[0]-=e,RO(t)
var n=Ow(-t[1])
return((-t[2]<0?-n:n)+sw-nw)%sw}function HO(e){var t=hw(e),n=6*uw,r=t>0,i=cw(t)>nw
function o(e,n){return hw(e)*hw(n)>t}function a(e,n,r){var i=[1,0,0],o=PO(NO(e),NO(n)),a=$O(o,o),s=o[0],l=a-s*s
if(!l)return!r&&e
var u=t*a/l,c=-t*s/l,f=PO(i,o),d=IO(i,u)
zO(d,IO(o,c))
var h=f,p=$O(d,h),g=$O(h,h),m=p*p-g*($O(d,d)-1)
if(!(m<0)){var y=_w(m),v=IO(h,(-p-y)/g)
if(zO(v,d),v=TO(v),!r)return v
var b,x=e[0],_=n[0],w=e[1],O=n[1]
_<x&&(b=x,x=_,_=b)
var k=_-x,E=cw(k-iw)<nw
if(!E&&O<w&&(b=w,w=O,O=b),E||k<nw?E?w+O>0^v[1]<(cw(v[0]-x)<nw?w:O):w<=v[1]&&v[1]<=O:k>iw^(x<=v[0]&&v[0]<=_)){var A=IO(h,(-p+y)/g)
return zO(A,d),[v,TO(A)]}}}function s(t,n){var i=r?e:iw-e,o=0
return t<-i?o|=1:t>i&&(o|=2),n<-i?o|=4:n>i&&(o|=8),o}return UO(o,(function(e){var t,n,l,u,c
return{lineStart:function(){u=l=!1,c=1},point:function(f,d){var h,p=[f,d],g=o(f,d),m=r?g?0:s(f,d):g?s(f+(f<0?iw:-iw),d):0
if(!t&&(u=l=g)&&e.lineStart(),g!==l&&(!(h=a(t,p))||CO(t,h)||CO(p,h))&&(p[2]=1),g!==l)c=0,g?(e.lineStart(),h=a(p,t),e.point(h[0],h[1])):(h=a(t,p),e.point(h[0],h[1],2),e.lineEnd()),t=h
else if(i&&t&&r^g){var y
m&n||!(y=a(p,t,!0))||(c=0,r?(e.lineStart(),e.point(y[0][0],y[0][1]),e.point(y[1][0],y[1][1]),e.lineEnd()):(e.point(y[1][0],y[1][1]),e.lineEnd(),e.lineStart(),e.point(y[0][0],y[0][1],3)))}!g||t&&CO(t,p)||e.point(p[0],p[1]),t=p,l=g,n=m},lineEnd:function(){l&&e.lineEnd(),t=null},clean:function(){return c|(u&&l)<<1}}}),(function(t,r,i,o){!function(e,t,n,r,i,o){if(n){var a=hw(t),s=bw(t),l=r*n
null==i?(i=t+r*sw,o=t-l/2):(i=VO(a,i),o=VO(a,o),(r>0?i<o:i>o)&&(i+=r*sw))
for(var u,c=i;r>0?c>o:c<o;c-=l)u=TO([a,-s*hw(c),-s*bw(c)]),e.point(u[0],u[1])}}(o,e,n,i,t,r)}),r?[0,-e]:[-iw,e-iw])}var GO=1e9,YO=-GO
function XO(e,t,n,r){function i(i,o){return e<=i&&i<=n&&t<=o&&o<=r}function o(i,o,s,u){var c=0,f=0
if(null==i||(c=a(i,s))!==(f=a(o,s))||l(i,o)<0^s>0)do{u.point(0===c||3===c?e:n,c>1?r:t)}while((c=(c+s+4)%4)!==f)
else u.point(o[0],o[1])}function a(r,i){return cw(r[0]-e)<nw?i>0?0:3:cw(r[0]-n)<nw?i>0?2:1:cw(r[1]-t)<nw?i>0?1:0:i>0?3:2}function s(e,t){return l(e.x,t.x)}function l(e,t){var n=a(e,1),r=a(t,1)
return n!==r?n-r:0===n?t[1]-e[1]:1===n?e[0]-t[0]:2===n?e[1]-t[1]:t[0]-e[0]}return function(a){var l,u,c,f,d,h,p,g,m,y,v,b=a,x=DO(),_={point:w,lineStart:function(){_.point=O,u&&u.push(c=[]),y=!0,m=!1,p=g=NaN},lineEnd:function(){l&&(O(f,d),h&&m&&x.rejoin(),l.push(x.result())),_.point=w,m&&b.lineEnd()},polygonStart:function(){b=x,l=[],u=[],v=!0},polygonEnd:function(){var t=function(){for(var t=0,n=0,i=u.length;n<i;++n)for(var o,a,s=u[n],l=1,c=s.length,f=s[0],d=f[0],h=f[1];l<c;++l)o=d,a=h,d=(f=s[l])[0],h=f[1],a<=r?h>r&&(d-o)*(r-a)>(h-a)*(e-o)&&++t:h<=r&&(d-o)*(r-a)<(h-a)*(e-o)&&--t
return t}(),n=v&&t,i=(l=BO(l)).length;(n||i)&&(a.polygonStart(),n&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&jO(l,s,t,o,a),a.polygonEnd()),b=a,l=u=c=null}}
function w(e,t){i(e,t)&&b.point(e,t)}function O(o,a){var s=i(o,a)
if(u&&c.push([o,a]),y)f=o,d=a,h=s,y=!1,s&&(b.lineStart(),b.point(o,a))
else if(s&&m)b.point(o,a)
else{var l=[p=Math.max(YO,Math.min(GO,p)),g=Math.max(YO,Math.min(GO,g))],x=[o=Math.max(YO,Math.min(GO,o)),a=Math.max(YO,Math.min(GO,a))]
!function(e,t,n,r,i,o){var a,s=e[0],l=e[1],u=0,c=1,f=t[0]-s,d=t[1]-l
if(a=n-s,f||!(a>0)){if(a/=f,f<0){if(a<u)return
a<c&&(c=a)}else if(f>0){if(a>c)return
a>u&&(u=a)}if(a=i-s,f||!(a<0)){if(a/=f,f<0){if(a>c)return
a>u&&(u=a)}else if(f>0){if(a<u)return
a<c&&(c=a)}if(a=r-l,d||!(a>0)){if(a/=d,d<0){if(a<u)return
a<c&&(c=a)}else if(d>0){if(a>c)return
a>u&&(u=a)}if(a=o-l,d||!(a<0)){if(a/=d,d<0){if(a>c)return
a>u&&(u=a)}else if(d>0){if(a<u)return
a<c&&(c=a)}return u>0&&(e[0]=s+u*f,e[1]=l+u*d),c<1&&(t[0]=s+c*f,t[1]=l+c*d),!0}}}}}(l,x,e,t,n,r)?s&&(b.lineStart(),b.point(o,a),v=!1):(m||(b.lineStart(),b.point(l[0],l[1])),b.point(x[0],x[1]),s||b.lineEnd(),v=!1)}p=o,g=a,m=s}return _}}function JO(e,t){function n(n,r){return n=e(n,r),t(n[0],n[1])}return e.invert&&t.invert&&(n.invert=function(n,r){return(n=t.invert(n,r))&&e.invert(n[0],n[1])}),n}function KO(e,t){return[cw(e)>iw?e+Math.round(-e/sw)*sw:e,t]}function QO(e,t,n){return(e%=sw)?t||n?JO(tk(e),nk(t,n)):tk(e):t||n?nk(t,n):KO}function ek(e){return function(t,n){return[(t+=e)>iw?t-sw:t<-iw?t+sw:t,n]}}function tk(e){var t=ek(e)
return t.invert=ek(-e),t}function nk(e,t){var n=hw(e),r=bw(e),i=hw(t),o=bw(t)
function a(e,t){var a=hw(t),s=hw(e)*a,l=bw(e)*a,u=bw(t),c=u*n+s*r
return[dw(l*i-c*o,s*n-u*r),kw(c*i+l*o)]}return a.invert=function(e,t){var a=hw(t),s=hw(e)*a,l=bw(e)*a,u=bw(t),c=u*i-l*o
return[dw(l*i+u*o,s*n+c*r),kw(c*n-s*r)]},a}function rk(e){return function(t){var n=new ik
for(var r in e)n[r]=e[r]
return n.stream=t,n}}function ik(){}function ok(e,t,n){var r=e.clipExtent&&e.clipExtent()
return e.scale(150).translate([0,0]),null!=r&&e.clipExtent(null),ew(n,e.stream(qw)),t(qw.result()),null!=r&&e.clipExtent(r),e}function ak(e,t,n){return ok(e,(function(n){var r=t[1][0]-t[0][0],i=t[1][1]-t[0][1],o=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),a=+t[0][0]+(r-o*(n[1][0]+n[0][0]))/2,s=+t[0][1]+(i-o*(n[1][1]+n[0][1]))/2
e.scale(150*o).translate([a,s])}),n)}function sk(e,t,n){return ak(e,[[0,0],t],n)}function lk(e,t,n){return ok(e,(function(n){var r=+t,i=r/(n[1][0]-n[0][0]),o=(r-i*(n[1][0]+n[0][0]))/2,a=-i*n[0][1]
e.scale(150*i).translate([o,a])}),n)}function uk(e,t,n){return ok(e,(function(n){var r=+t,i=r/(n[1][1]-n[0][1]),o=-i*n[0][0],a=(r-i*(n[1][1]+n[0][1]))/2
e.scale(150*i).translate([o,a])}),n)}KO.invert=KO,ik.prototype={constructor:ik,point:function(e,t){this.stream.point(e,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}
var ck=hw(30*uw)
function fk(e,t){return+t?function(e,t){function n(r,i,o,a,s,l,u,c,f,d,h,p,g,m){var y=u-r,v=c-i,b=y*y+v*v
if(b>4*t&&g--){var x=a+d,_=s+h,w=l+p,O=_w(x*x+_*_+w*w),k=kw(w/=O),E=cw(cw(w)-1)<nw||cw(o-f)<nw?(o+f)/2:dw(_,x),A=e(E,k),S=A[0],D=A[1],C=S-r,M=D-i,j=v*C-y*M;(j*j/b>t||cw((y*C+v*M)/b-.5)>.3||a*d+s*h+l*p<ck)&&(n(r,i,o,a,s,l,S,D,E,x/=O,_/=O,w,g,m),m.point(S,D),n(S,D,E,x,_,w,u,c,f,d,h,p,g,m))}}return function(t){var r,i,o,a,s,l,u,c,f,d,h,p,g={point:m,lineStart:y,lineEnd:b,polygonStart:function(){t.polygonStart(),g.lineStart=x},polygonEnd:function(){t.polygonEnd(),g.lineStart=y}}
function m(n,r){n=e(n,r),t.point(n[0],n[1])}function y(){c=NaN,g.point=v,t.lineStart()}function v(r,i){var o=NO([r,i]),a=e(r,i)
n(c,f,u,d,h,p,c=a[0],f=a[1],u=r,d=o[0],h=o[1],p=o[2],16,t),t.point(c,f)}function b(){g.point=m,t.lineEnd()}function x(){y(),g.point=_,g.lineEnd=w}function _(e,t){v(r=e,t),i=c,o=f,a=d,s=h,l=p,g.point=v}function w(){n(c,f,u,d,h,p,i,o,r,a,s,l,16,t),g.lineEnd=b,b()}return g}}(e,t):function(e){return rk({point:function(t,n){t=e(t,n),this.stream.point(t[0],t[1])}})}(e)}var dk=rk({point:function(e,t){this.stream.point(e*uw,t*uw)}})
function hk(e,t,n,r,i,o){if(!o)return function(e,t,n,r,i){function o(o,a){return[t+e*(o*=r),n-e*(a*=i)]}return o.invert=function(o,a){return[(o-t)/e*r,(n-a)/e*i]},o}(e,t,n,r,i)
var a=hw(o),s=bw(o),l=a*e,u=s*e,c=a/e,f=s/e,d=(s*n-a*t)/e,h=(s*t+a*n)/e
function p(e,o){return[l*(e*=r)-u*(o*=i)+t,n-u*e-l*o]}return p.invert=function(e,t){return[r*(c*e-f*t+d),i*(h-f*e-c*t)]},p}function pk(e){return gk((function(){return e}))()}function gk(e){var t,n,r,i,o,a,s,l,u,c,f=150,d=480,h=250,p=0,g=0,m=0,y=0,v=0,b=0,x=1,_=1,w=null,O=WO,k=null,E=G_,A=.5
function S(e){return l(e[0]*uw,e[1]*uw)}function D(e){return(e=l.invert(e[0],e[1]))&&[e[0]*lw,e[1]*lw]}function C(){var e=hk(f,0,0,x,_,b).apply(null,t(p,g)),r=hk(f,d-e[0],h-e[1],x,_,b)
return n=QO(m,y,v),s=JO(t,r),l=JO(n,s),a=fk(s,A),M()}function M(){return u=c=null,S}return S.stream=function(e){return u&&c===e?u:u=dk(function(e){return rk({point:function(t,n){var r=e(t,n)
return this.stream.point(r[0],r[1])}})}(n)(O(a(E(c=e)))))},S.preclip=function(e){return arguments.length?(O=e,w=void 0,M()):O},S.postclip=function(e){return arguments.length?(E=e,k=r=i=o=null,M()):E},S.clipAngle=function(e){return arguments.length?(O=+e?HO(w=e*uw):(w=null,WO),M()):w*lw},S.clipExtent=function(e){return arguments.length?(E=null==e?(k=r=i=o=null,G_):XO(k=+e[0][0],r=+e[0][1],i=+e[1][0],o=+e[1][1]),M()):null==k?null:[[k,r],[i,o]]},S.scale=function(e){return arguments.length?(f=+e,C()):f},S.translate=function(e){return arguments.length?(d=+e[0],h=+e[1],C()):[d,h]},S.center=function(e){return arguments.length?(p=e[0]%360*uw,g=e[1]%360*uw,C()):[p*lw,g*lw]},S.rotate=function(e){return arguments.length?(m=e[0]%360*uw,y=e[1]%360*uw,v=e.length>2?e[2]%360*uw:0,C()):[m*lw,y*lw,v*lw]},S.angle=function(e){return arguments.length?(b=e%360*uw,C()):b*lw},S.reflectX=function(e){return arguments.length?(x=e?-1:1,C()):x<0},S.reflectY=function(e){return arguments.length?(_=e?-1:1,C()):_<0},S.precision=function(e){return arguments.length?(a=fk(s,A=e*e),M()):_w(A)},S.fitExtent=function(e,t){return ak(S,e,t)},S.fitSize=function(e,t){return sk(S,e,t)},S.fitWidth=function(e,t){return lk(S,e,t)},S.fitHeight=function(e,t){return uk(S,e,t)},function(){return t=e.apply(this,arguments),S.invert=t.invert&&D,C()}}function mk(e){var t=0,n=iw/3,r=gk(e),i=r(t,n)
return i.parallels=function(e){return arguments.length?r(t=e[0]*uw,n=e[1]*uw):[t*lw,n*lw]},i}function yk(e,t){var n=bw(e),r=(n+bw(t))/2
if(cw(r)<nw)return function(e){var t=hw(e)
function n(e,n){return[e*t,bw(n)/t]}return n.invert=function(e,n){return[e/t,kw(n*t)]},n}(e)
var i=1+n*(2*r-n),o=_w(i)/r
function a(e,t){var n=_w(i-2*r*bw(t))/r
return[n*bw(e*=r),o-n*hw(e)]}return a.invert=function(e,t){var n=o-t,a=dw(e,cw(n))*xw(n)
return n*r<0&&(a-=iw*xw(e)*xw(n)),[a/r,kw((i-(e*e+n*n)*r*r)/(2*r))]},a}function vk(){return mk(yk).scale(155.424).center([0,33.6442])}function bk(){return vk().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function xk(e){return function(t,n){var r=hw(t),i=hw(n),o=e(r*i)
return o===1/0?[2,0]:[o*i*bw(t),o*bw(n)]}}function _k(e){return function(t,n){var r=_w(t*t+n*n),i=e(r),o=bw(i),a=hw(i)
return[dw(t*o,r*a),kw(r&&n*o/r)]}}var wk=xk((function(e){return _w(2/(1+e))}))
wk.invert=_k((function(e){return 2*kw(e/2)}))
var Ok=xk((function(e){return(e=Ow(e))&&e/bw(e)}))
function kk(e,t){return[e,yw(ww((ow+t)/2))]}function Ek(e){var t,n,r,i=pk(e),o=i.center,a=i.scale,s=i.translate,l=i.clipExtent,u=null
function c(){var o=iw*a(),s=i(function(e){function t(t){return(t=e(t[0]*uw,t[1]*uw))[0]*=lw,t[1]*=lw,t}return e=QO(e[0]*uw,e[1]*uw,e.length>2?e[2]*uw:0),t.invert=function(t){return(t=e.invert(t[0]*uw,t[1]*uw))[0]*=lw,t[1]*=lw,t},t}(i.rotate()).invert([0,0]))
return l(null==u?[[s[0]-o,s[1]-o],[s[0]+o,s[1]+o]]:e===kk?[[Math.max(s[0]-o,u),t],[Math.min(s[0]+o,n),r]]:[[u,Math.max(s[1]-o,t)],[n,Math.min(s[1]+o,r)]])}return i.scale=function(e){return arguments.length?(a(e),c()):a()},i.translate=function(e){return arguments.length?(s(e),c()):s()},i.center=function(e){return arguments.length?(o(e),c()):o()},i.clipExtent=function(e){return arguments.length?(null==e?u=t=n=r=null:(u=+e[0][0],t=+e[0][1],n=+e[1][0],r=+e[1][1]),c()):null==u?null:[[u,t],[n,r]]},c()}function Ak(e){return ww((ow+e)/2)}function Sk(e,t){var n=hw(e),r=e===t?bw(e):yw(n/hw(t))/yw(Ak(t)/Ak(e)),i=n*vw(Ak(e),r)/r
if(!r)return kk
function o(e,t){i>0?t<-ow+nw&&(t=-ow+nw):t>ow-nw&&(t=ow-nw)
var n=i/vw(Ak(t),r)
return[n*bw(r*e),i-n*hw(r*e)]}return o.invert=function(e,t){var n=i-t,o=xw(r)*_w(e*e+n*n),a=dw(e,cw(n))*xw(n)
return n*r<0&&(a-=iw*xw(e)*xw(n)),[a/r,2*fw(vw(i/o,1/r))-ow]},o}function Dk(e,t){return[e,t]}function Ck(e,t){var n=hw(e),r=e===t?bw(e):(n-hw(t))/(t-e),i=n/r+e
if(cw(r)<nw)return Dk
function o(e,t){var n=i-t,o=r*e
return[n*bw(o),i-n*hw(o)]}return o.invert=function(e,t){var n=i-t,o=dw(e,cw(n))*xw(n)
return n*r<0&&(o-=iw*xw(e)*xw(n)),[o/r,i-xw(r)*_w(e*e+n*n)]},o}Ok.invert=_k((function(e){return e})),kk.invert=function(e,t){return[e,2*fw(gw(t))-ow]},Dk.invert=Dk
var Mk=1.340264,jk=-.081106,Fk=893e-6,Tk=.003796,Nk=_w(3)/2
function $k(e,t){var n=kw(Nk*bw(t)),r=n*n,i=r*r*r
return[e*hw(n)/(Nk*(Mk+3*jk*r+i*(7*Fk+9*Tk*r))),n*(Mk+jk*r+i*(Fk+Tk*r))]}function Pk(e,t){var n=hw(t),r=hw(e)*n
return[n*bw(e)/r,bw(t)/r]}function zk(e,t){var n=t*t,r=n*n
return[e*(.8707-.131979*n+r*(r*(.003971*n-.001529*r)-.013791)),t*(1.007226+n*(.015085+r*(.028874*n-.044475-.005916*r)))]}function Ik(e,t){return[hw(t)*bw(e),bw(t)]}function Rk(e,t){var n=hw(t),r=1+hw(e)*n
return[n*bw(e)/r,bw(t)/r]}function Lk(e,t){return[yw(ww((ow+t)/2)),-e]}$k.invert=function(e,t){for(var n,r=t,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=n=(r*(Mk+jk*i+o*(Fk+Tk*i))-t)/(Mk+3*jk*i+o*(7*Fk+9*Tk*i)))*r)*i*i,!(cw(n)<rw));++a);return[Nk*e*(Mk+3*jk*i+o*(7*Fk+9*Tk*i))/hw(r),kw(bw(r)/Nk)]},Pk.invert=_k(fw),zk.invert=function(e,t){var n,r=t,i=25
do{var o=r*r,a=o*o
r-=n=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-t)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(cw(n)>nw&&--i>0)
return[e/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},Ik.invert=_k(kw),Rk.invert=_k((function(e){return 2*fw(e)})),Lk.invert=function(e,t){return[-t,2*fw(gw(e))-ow]}
var Bk=Math.abs,Uk=(Math.atan,Math.atan2,Math.ceil,Math.cos),qk=(Math.exp,Math.floor,Math.log,Math.max,Math.min,Math.pow,Math.round,Math.sign,Math.sin),Zk=(Math.tan,Math.PI),Wk=Zk/2,Vk=(Math.SQRT1_2,Gk(2))
function Hk(e){return e>1?Wk:e<-1?-Wk:Math.asin(e)}function Gk(e){return e>0?Math.sqrt(e):0}function Yk(e,t){var n,r=e*qk(t),i=30
do{t-=n=(t+qk(t)-r)/(1+Uk(t))}while(Bk(n)>1e-6&&--i>0)
return t/2}Gk(Zk)
var Xk=function(e,t,n){function r(r,i){return[e*r*Uk(i=Yk(n,i)),t*qk(i)]}return r.invert=function(r,i){return i=Hk(i/t),[r/(e*Uk(i)),Hk((2*i+qk(2*i))/n)]},r}(Vk/Wk,Vk,Zk)
const Jk=SO(),Kk=["clipAngle","clipExtent","scale","translate","center","rotate","parallels","precision","reflectX","reflectY","coefficient","distance","fraction","lobes","parallel","radius","ratio","spacing","tilt"]
function Qk(e,t){return function n(){const r=t()
return r.type=e,r.path=SO().projection(r),r.copy=r.copy||function(){const e=n()
return Kk.forEach((t=>{r[t]&&e[t](r[t]())})),e.path.pointRadius(r.path.pointRadius()),e},r}}function eE(e,t){if(!e||"string"!=typeof e)throw new Error("Projection type must be a name string.")
return e=e.toLowerCase(),arguments.length>1?(nE[e]=Qk(e,t),this):nE[e]||null}function tE(e){return e&&e.path||Jk}const nE={albers:bk,albersusa:function(){var e,t,n,r,i,o,a=bk(),s=vk().rotate([154,0]).center([-2,58.5]).parallels([55,65]),l=vk().rotate([157,0]).center([-3,19.9]).parallels([8,18]),u={point:function(e,t){o=[e,t]}}
function c(e){var t=e[0],a=e[1]
return o=null,n.point(t,a),o||(r.point(t,a),o)||(i.point(t,a),o)}function f(){return e=t=null,c}return c.invert=function(e){var t=a.scale(),n=a.translate(),r=(e[0]-n[0])/t,i=(e[1]-n[1])/t
return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?l:a).invert(e)},c.stream=function(n){return e&&t===n?e:(r=[a.stream(t=n),s.stream(n),l.stream(n)],i=r.length,e={point:function(e,t){for(var n=-1;++n<i;)r[n].point(e,t)},sphere:function(){for(var e=-1;++e<i;)r[e].sphere()},lineStart:function(){for(var e=-1;++e<i;)r[e].lineStart()},lineEnd:function(){for(var e=-1;++e<i;)r[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<i;)r[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<i;)r[e].polygonEnd()}})
var r,i},c.precision=function(e){return arguments.length?(a.precision(e),s.precision(e),l.precision(e),f()):a.precision()},c.scale=function(e){return arguments.length?(a.scale(e),s.scale(.35*e),l.scale(e),c.translate(a.translate())):a.scale()},c.translate=function(e){if(!arguments.length)return a.translate()
var t=a.scale(),o=+e[0],c=+e[1]
return n=a.translate(e).clipExtent([[o-.455*t,c-.238*t],[o+.455*t,c+.238*t]]).stream(u),r=s.translate([o-.307*t,c+.201*t]).clipExtent([[o-.425*t+nw,c+.12*t+nw],[o-.214*t-nw,c+.234*t-nw]]).stream(u),i=l.translate([o-.205*t,c+.212*t]).clipExtent([[o-.214*t+nw,c+.166*t+nw],[o-.115*t-nw,c+.234*t-nw]]).stream(u),f()},c.fitExtent=function(e,t){return ak(c,e,t)},c.fitSize=function(e,t){return sk(c,e,t)},c.fitWidth=function(e,t){return lk(c,e,t)},c.fitHeight=function(e,t){return uk(c,e,t)},c.scale(1070)},azimuthalequalarea:function(){return pk(wk).scale(124.75).clipAngle(179.999)},azimuthalequidistant:function(){return pk(Ok).scale(79.4188).clipAngle(179.999)},conicconformal:function(){return mk(Sk).scale(109.5).parallels([30,30])},conicequalarea:vk,conicequidistant:function(){return mk(Ck).scale(131.154).center([0,13.9389])},equalEarth:function(){return pk($k).scale(177.158)},equirectangular:function(){return pk(Dk).scale(152.63)},gnomonic:function(){return pk(Pk).scale(144.049).clipAngle(60)},identity:function(){var e,t,n,r,i,o,a,s=1,l=0,u=0,c=1,f=1,d=0,h=null,p=1,g=1,m=rk({point:function(e,t){var n=b([e,t])
this.stream.point(n[0],n[1])}}),y=G_
function v(){return p=s*c,g=s*f,o=a=null,b}function b(n){var r=n[0]*p,i=n[1]*g
if(d){var o=i*e-r*t
r=r*e+i*t,i=o}return[r+l,i+u]}return b.invert=function(n){var r=n[0]-l,i=n[1]-u
if(d){var o=i*e+r*t
r=r*e-i*t,i=o}return[r/p,i/g]},b.stream=function(e){return o&&a===e?o:o=m(y(a=e))},b.postclip=function(e){return arguments.length?(y=e,h=n=r=i=null,v()):y},b.clipExtent=function(e){return arguments.length?(y=null==e?(h=n=r=i=null,G_):XO(h=+e[0][0],n=+e[0][1],r=+e[1][0],i=+e[1][1]),v()):null==h?null:[[h,n],[r,i]]},b.scale=function(e){return arguments.length?(s=+e,v()):s},b.translate=function(e){return arguments.length?(l=+e[0],u=+e[1],v()):[l,u]},b.angle=function(n){return arguments.length?(t=bw(d=n%360*uw),e=hw(d),v()):d*lw},b.reflectX=function(e){return arguments.length?(c=e?-1:1,v()):c<0},b.reflectY=function(e){return arguments.length?(f=e?-1:1,v()):f<0},b.fitExtent=function(e,t){return ak(b,e,t)},b.fitSize=function(e,t){return sk(b,e,t)},b.fitWidth=function(e,t){return lk(b,e,t)},b.fitHeight=function(e,t){return uk(b,e,t)},b},mercator:function(){return Ek(kk).scale(961/sw)},mollweide:function(){return pk(Xk).scale(169.529)},naturalEarth1:function(){return pk(zk).scale(175.295)},orthographic:function(){return pk(Ik).scale(249.5).clipAngle(90.000001)},stereographic:function(){return pk(Rk).scale(250).clipAngle(142)},transversemercator:function(){var e=Ek(Lk),t=e.center,n=e.rotate
return e.center=function(e){return arguments.length?t([-e[1],e[0]]):[(e=t())[1],-e[0]]},e.rotate=function(e){return arguments.length?n([e[0],e[1],e.length>2?e[2]+90:90]):[(e=n())[0],e[1],e[2]-90]},n([0,0,90]).scale(159.155)}}
for(const p2 in nE)eE(p2,nE[p2])
function rE(e,t,n){var r=Al(e,t-nw,n).concat(t)
return function(e){return r.map((function(t){return[e,t]}))}}function iE(e,t,n){var r=Al(e,t-nw,n).concat(t)
return function(e){return r.map((function(t){return[t,e]}))}}function oE(){}const aE=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]]
function sE(){var e=1,t=1,n=a
function r(e,t){return t.map((t=>i(e,t)))}function i(r,i){var a=[],s=[]
return function(n,r,i){var a,s,l,u,c,f,d=new Array,h=new Array
for(a=s=-1,u=n[0]>=r,aE[u<<1].forEach(p);++a<e-1;)l=u,u=n[a+1]>=r,aE[l|u<<1].forEach(p)
for(aE[u<<0].forEach(p);++s<t-1;){for(a=-1,u=n[s*e+e]>=r,c=n[s*e]>=r,aE[u<<1|c<<2].forEach(p);++a<e-1;)l=u,u=n[s*e+e+a+1]>=r,f=c,c=n[s*e+a+1]>=r,aE[l|u<<1|c<<2|f<<3].forEach(p)
aE[u|c<<3].forEach(p)}for(a=-1,c=n[s*e]>=r,aE[c<<2].forEach(p);++a<e-1;)f=c,c=n[s*e+a+1]>=r,aE[c<<2|f<<3].forEach(p)
function p(e){var t,n,r=[e[0][0]+a,e[0][1]+s],l=[e[1][0]+a,e[1][1]+s],u=o(r),c=o(l);(t=h[u])?(n=d[c])?(delete h[t.end],delete d[n.start],t===n?(t.ring.push(l),i(t.ring)):d[t.start]=h[n.end]={start:t.start,end:n.end,ring:t.ring.concat(n.ring)}):(delete h[t.end],t.ring.push(l),h[t.end=c]=t):(t=d[c])?(n=h[u])?(delete d[t.start],delete h[n.end],t===n?(t.ring.push(l),i(t.ring)):d[n.start]=h[t.end]={start:n.start,end:t.end,ring:n.ring.concat(t.ring)}):(delete d[t.start],t.ring.unshift(r),d[t.start=u]=t):d[u]=h[c]={start:u,end:c,ring:[r,l]}}aE[c<<3].forEach(p)}(r,i,(e=>{n(e,r,i),function(e){for(var t=0,n=e.length,r=e[n-1][1]*e[0][0]-e[n-1][0]*e[0][1];++t<n;)r+=e[t-1][1]*e[t][0]-e[t-1][0]*e[t][1]
return r}(e)>0?a.push([e]):s.push(e)})),s.forEach((e=>{for(var t,n=0,r=a.length;n<r;++n)if(-1!==lE((t=a[n])[0],e))return void t.push(e)})),{type:"MultiPolygon",value:i,coordinates:a}}function o(t){return 2*t[0]+t[1]*(e+1)*4}function a(n,r,i){n.forEach((n=>{var o,a=n[0],s=n[1],l=0|a,u=0|s,c=r[u*e+l]
a>0&&a<e&&l===a&&(o=r[u*e+l-1],n[0]=a+(i-o)/(c-o)-.5),s>0&&s<t&&u===s&&(o=r[(u-1)*e+l],n[1]=s+(i-o)/(c-o)-.5)}))}return r.contour=i,r.size=function(n){if(!arguments.length)return[e,t]
var i=Math.floor(n[0]),o=Math.floor(n[1])
return i>=0&&o>=0||oe("invalid size"),e=i,t=o,r},r.smooth=function(e){return arguments.length?(n=e?a:oE,r):n===a},r}function lE(e,t){for(var n,r=-1,i=t.length;++r<i;)if(n=uE(e,t[r]))return n
return 0}function uE(e,t){for(var n=t[0],r=t[1],i=-1,o=0,a=e.length,s=a-1;o<a;s=o++){var l=e[o],u=l[0],c=l[1],f=e[s],d=f[0],h=f[1]
if(cE(l,f,t))return 0
c>r!=h>r&&n<(d-u)*(r-c)/(h-c)+u&&(i=-i)}return i}function cE(e,t,n){var r,i,o,a
return function(e,t,n){return(t[0]-e[0])*(n[1]-e[1])==(n[0]-e[0])*(t[1]-e[1])}(e,t,n)&&(i=e[r=+(e[0]===t[0])],o=n[r],a=t[r],i<=o&&o<=a||a<=o&&o<=i)}function fE(e,t,n){return function(r){var i=rt(r),o=n?Math.min(i[0],0):i[0],a=i[1],s=a-o,l=t?Jt(o,a,e):s/(e+1)
return Al(o+l,a,l)}}function dE(e){vs.call(this,null,e)}function hE(e,t,n,r,i){const o=e.x1||0,a=e.y1||0,s=t*n<0
function l(e){e.forEach(u)}function u(e){s&&e.reverse(),e.forEach(c)}function c(e){e[0]=(e[0]-o)*t+r,e[1]=(e[1]-a)*n+i}return function(e){return e.coordinates.forEach(l),e}}function pE(e,t,n){const r=e>=0?e:$s(t,n)
return Math.round((Math.sqrt(4*r*r+1)-1)/2)}function gE(e){return Ge(e)?e:et(+e)}function mE(){var e=e=>e[0],t=e=>e[1],n=fe,r=[-1,-1],i=960,o=500,a=2
function s(s,l){const u=pE(r[0],s,e)>>a,c=pE(r[1],s,t)>>a,f=u?u+2:0,d=c?c+2:0,h=2*f+(i>>a),p=2*d+(o>>a),g=new Float32Array(h*p),m=new Float32Array(h*p)
let y=g
s.forEach((r=>{const i=f+(+e(r)>>a),o=d+(+t(r)>>a)
i>=0&&i<h&&o>=0&&o<p&&(g[i+o*h]+=+n(r))})),u>0&&c>0?(yE(h,p,g,m,u),vE(h,p,m,g,c),yE(h,p,g,m,u),vE(h,p,m,g,c),yE(h,p,g,m,u),vE(h,p,m,g,c)):u>0?(yE(h,p,g,m,u),yE(h,p,m,g,u),yE(h,p,g,m,u),y=m):c>0&&(vE(h,p,g,m,c),vE(h,p,m,g,c),vE(h,p,g,m,c),y=m)
const v=l?Math.pow(2,-2*a):1/y_(y)
for(let e=0,t=h*p;e<t;++e)y[e]*=v
return{values:y,scale:1<<a,width:h,height:p,x1:f,y1:d,x2:f+(i>>a),y2:d+(o>>a)}}return s.x=function(t){return arguments.length?(e=gE(t),s):e},s.y=function(e){return arguments.length?(t=gE(e),s):t},s.weight=function(e){return arguments.length?(n=gE(e),s):n},s.size=function(e){if(!arguments.length)return[i,o]
var t=+e[0],n=+e[1]
return t>=0&&n>=0||oe("invalid size"),i=t,o=n,s},s.cellSize=function(e){return arguments.length?((e=+e)>=1||oe("invalid cell size"),a=Math.floor(Math.log(e)/Math.LN2),s):1<<a},s.bandwidth=function(e){return arguments.length?(1===(e=Ve(e)).length&&(e=[+e[0],+e[0]]),2!==e.length&&oe("invalid bandwidth"),r=e,s):r},s}function yE(e,t,n,r,i){const o=1+(i<<1)
for(let a=0;a<t;++a)for(let t=0,s=0;t<e+i;++t)t<e&&(s+=n[t+a*e]),t>=i&&(t>=o&&(s-=n[t-o+a*e]),r[t-i+a*e]=s/Math.min(t+1,e-1+o-t,o))}function vE(e,t,n,r,i){const o=1+(i<<1)
for(let a=0;a<e;++a)for(let s=0,l=0;s<t+i;++s)s<t&&(l+=n[a+s*e]),s>=i&&(s>=o&&(l-=n[a+(s-o)*e]),r[a+(s-i)*e]=l/Math.min(s+1,t-1+o-s,o))}function bE(e){vs.call(this,null,e)}dE.Definition={type:"Isocontour",metadata:{generates:!0},params:[{name:"field",type:"field"},{name:"thresholds",type:"number",array:!0},{name:"levels",type:"number"},{name:"nice",type:"boolean",default:!1},{name:"resolve",type:"enum",values:["shared","independent"],default:"independent"},{name:"zero",type:"boolean",default:!0},{name:"smooth",type:"boolean",default:!0},{name:"scale",type:"number",expr:!0},{name:"translate",type:"number",array:!0,expr:!0},{name:"as",type:"string",null:!0,default:"contour"}]},ct(dE,vs,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation
var n=t.fork(t.NO_SOURCE|t.NO_FIELDS),r=t.materialize(t.SOURCE).source,i=e.field||ue,o=sE().smooth(!1!==e.smooth),a=e.thresholds||function(e,t,n){const r=fE(n.levels||10,n.nice,!1!==n.zero)
return"shared"!==n.resolve?r:r(e.map((e=>ws(t(e).values))))}(r,i,e),s=null===e.as?null:e.as||"contour",l=[]
return r.forEach((t=>{const n=i(t),r=o.size([n.width,n.height])(n.values,_e(a)?a:a(n.values))
!function(e,t,n,r){let i=r.scale||t.scale,o=r.translate||t.translate
if(Ge(i)&&(i=i(n,r)),Ge(o)&&(o=o(n,r)),(1===i||null==i)&&!o)return
const a=(gt(i)?i:i[0])||1,s=(gt(i)?i:i[1])||1,l=o&&o[0]||0,u=o&&o[1]||0
e.forEach(hE(t,a,s,l,u))}(r,n,t,e),r.forEach((e=>{l.push(Za(t,Ua(null!=s?{[s]:e}:e)))}))})),this.value&&(n.rem=this.value),this.value=n.source=n.add=l,n}}),bE.Definition={type:"KDE2D",metadata:{generates:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"weight",type:"field"},{name:"groupby",type:"field",array:!0},{name:"cellSize",type:"number"},{name:"bandwidth",type:"number",array:!0,length:2},{name:"counts",type:"boolean",default:!1},{name:"as",type:"string",default:"grid"}]}
const xE=["x","y","weight","size","cellSize","bandwidth"]
function _E(e,t){return xE.forEach((n=>null!=t[n]?e[n](t[n]):0)),e}function wE(e){vs.call(this,null,e)}ct(bE,vs,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation
var n,r=t.fork(t.NO_SOURCE|t.NO_FIELDS),i=function(e,t){var n,r,i,o,a,s,l=[],u=e=>e(o)
if(null==t)l.push(e)
else for(n={},r=0,i=e.length;r<i;++r)o=e[r],(s=n[a=t.map(u)])||(n[a]=s=[],s.dims=a,l.push(s)),s.push(o)
return l}(t.materialize(t.SOURCE).source,e.groupby),o=(e.groupby||[]).map(ee),a=_E(mE(),e),s=e.as||"grid"
return n=i.map((t=>Ua(function(e,t){for(let n=0;n<o.length;++n)e[o[n]]=t[n]
return e}({[s]:a(t,e.counts)},t.dims)))),this.value&&(r.rem=this.value),this.value=r.source=r.add=n,r}}),wE.Definition={type:"Contour",metadata:{generates:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"values",type:"number",array:!0},{name:"x",type:"field"},{name:"y",type:"field"},{name:"weight",type:"field"},{name:"cellSize",type:"number"},{name:"bandwidth",type:"number"},{name:"count",type:"number"},{name:"nice",type:"boolean",default:!1},{name:"thresholds",type:"number",array:!0},{name:"smooth",type:"boolean",default:!0}]},ct(wE,vs,{transform(e,t){if(this.value&&!t.changed()&&!e.modified())return t.StopPropagation
var n,r,i=t.fork(t.NO_SOURCE|t.NO_FIELDS),o=sE().smooth(!1!==e.smooth),a=e.values,s=e.thresholds||fE(e.count||10,e.nice,!!a),l=e.size
return a||(a=t.materialize(t.SOURCE).source,r=hE(n=_E(mE(),e)(a,!0),n.scale||1,n.scale||1,0,0),l=[n.width,n.height],a=n.values),s=_e(s)?s:s(a),a=o.size(l)(a,s),r&&a.forEach(r),this.value&&(i.rem=this.value),this.value=i.source=i.add=(a||[]).map(Ua),i}})
const OE="Feature",kE="FeatureCollection"
function EE(e){vs.call(this,null,e)}function AE(e){vs.call(this,null,e)}function SE(e){vs.call(this,null,e)}function DE(e){vs.call(this,null,e)}function CE(e){vs.call(this,[],e),this.generator=function(){var e,t,n,r,i,o,a,s,l,u,c,f,d=10,h=d,p=90,g=360,m=2.5
function y(){return{type:"MultiLineString",coordinates:v()}}function v(){return Al(pw(r/p)*p,n,p).map(c).concat(Al(pw(s/g)*g,a,g).map(f)).concat(Al(pw(t/d)*d,e,d).filter((function(e){return cw(e%p)>nw})).map(l)).concat(Al(pw(o/h)*h,i,h).filter((function(e){return cw(e%g)>nw})).map(u))}return y.lines=function(){return v().map((function(e){return{type:"LineString",coordinates:e}}))},y.outline=function(){return{type:"Polygon",coordinates:[c(r).concat(f(a).slice(1),c(n).reverse().slice(1),f(s).reverse().slice(1))]}},y.extent=function(e){return arguments.length?y.extentMajor(e).extentMinor(e):y.extentMinor()},y.extentMajor=function(e){return arguments.length?(r=+e[0][0],n=+e[1][0],s=+e[0][1],a=+e[1][1],r>n&&(e=r,r=n,n=e),s>a&&(e=s,s=a,a=e),y.precision(m)):[[r,s],[n,a]]},y.extentMinor=function(n){return arguments.length?(t=+n[0][0],e=+n[1][0],o=+n[0][1],i=+n[1][1],t>e&&(n=t,t=e,e=n),o>i&&(n=o,o=i,i=n),y.precision(m)):[[t,o],[e,i]]},y.step=function(e){return arguments.length?y.stepMajor(e).stepMinor(e):y.stepMinor()},y.stepMajor=function(e){return arguments.length?(p=+e[0],g=+e[1],y):[p,g]},y.stepMinor=function(e){return arguments.length?(d=+e[0],h=+e[1],y):[d,h]},y.precision=function(d){return arguments.length?(m=+d,l=rE(o,i,90),u=iE(t,e,m),c=rE(s,a,90),f=iE(r,n,m),y):m},y.extentMajor([[-180,-89.999999],[180,89.999999]]).extentMinor([[-180,-80.000001],[180,80.000001]])}()}function ME(e){vs.call(this,null,e)}function jE(e){if(!Ge(e))return!1
const t=Mt(te(e))
return t.$x||t.$y||t.$value||t.$max}function FE(e){vs.call(this,null,e),this.modified(!0)}function TE(e,t,n){Ge(e[t])&&e[t](n)}function NE(e,t,n,r){if(isNaN(t)||isNaN(n))return e
var i,o,a,s,l,u,c,f,d,h=e._root,p={data:r},g=e._x0,m=e._y0,y=e._x1,v=e._y1
if(!h)return e._root=p,e
for(;h.length;)if((u=t>=(o=(g+y)/2))?g=o:y=o,(c=n>=(a=(m+v)/2))?m=a:v=a,i=h,!(h=h[f=c<<1|u]))return i[f]=p,e
if(s=+e._x.call(null,h.data),l=+e._y.call(null,h.data),t===s&&n===l)return p.next=h,i?i[f]=p:e._root=p,e
do{i=i?i[f]=new Array(4):e._root=new Array(4),(u=t>=(o=(g+y)/2))?g=o:y=o,(c=n>=(a=(m+v)/2))?m=a:v=a}while((f=c<<1|u)==(d=(l>=a)<<1|s>=o))
return i[d]=h,i[f]=p,e}function $E(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function PE(e){return e[0]}function zE(e){return e[1]}function IE(e,t,n){var r=new RE(null==t?PE:t,null==n?zE:n,NaN,NaN,NaN,NaN)
return null==e?r:r.addAll(e)}function RE(e,t,n,r,i,o){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function LE(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data}
return t}EE.Definition={type:"GeoJSON",metadata:{},params:[{name:"fields",type:"field",array:!0,length:2},{name:"geojson",type:"field"}]},ct(EE,vs,{transform(e,t){var n,r=this._features,i=this._points,o=e.fields,a=o&&o[0],s=o&&o[1],l=e.geojson||!o&&ue,u=t.ADD
n=e.modified()||t.changed(t.REM)||t.modified(te(l))||a&&t.modified(te(a))||s&&t.modified(te(s)),this.value&&!n||(u=t.SOURCE,this._features=r=[],this._points=i=[]),l&&t.visit(u,(e=>r.push(l(e)))),a&&s&&(t.visit(u,(e=>{var t=a(e),n=s(e)
null!=t&&null!=n&&(t=+t)===t&&(n=+n)===n&&i.push([t,n])})),r=r.concat({type:OE,geometry:{type:"MultiPoint",coordinates:i}})),this.value={type:kE,features:r}}}),AE.Definition={type:"GeoPath",metadata:{modifies:!0},params:[{name:"projection",type:"projection"},{name:"field",type:"field"},{name:"pointRadius",type:"number",expr:!0},{name:"as",type:"string",default:"path"}]},ct(AE,vs,{transform(e,t){var n=t.fork(t.ALL),r=this.value,i=e.field||ue,o=e.as||"path",a=n.SOURCE
!r||e.modified()?(this.value=r=tE(e.projection),n.materialize().reflow()):a=i===ue||t.modified(i.fields)?n.ADD_MOD:n.ADD
const s=function(e,t){const n=e.pointRadius()
return e.context(null),null!=t&&e.pointRadius(t),n}(r,e.pointRadius)
return n.visit(a,(e=>e[o]=r(i(e)))),r.pointRadius(s),n.modifies(o)}}),SE.Definition={type:"GeoPoint",metadata:{modifies:!0},params:[{name:"projection",type:"projection",required:!0},{name:"fields",type:"field",array:!0,required:!0,length:2},{name:"as",type:"string",array:!0,length:2,default:["x","y"]}]},ct(SE,vs,{transform(e,t){var n,r=e.projection,i=e.fields[0],o=e.fields[1],a=e.as||["x","y"],s=a[0],l=a[1]
function u(e){const t=r([i(e),o(e)])
t?(e[s]=t[0],e[l]=t[1]):(e[s]=void 0,e[l]=void 0)}return e.modified()?t=t.materialize().reflow(!0).visit(t.SOURCE,u):(n=t.modified(i.fields)||t.modified(o.fields),t.visit(n?t.ADD_MOD:t.ADD,u)),t.modifies(a)}}),DE.Definition={type:"GeoShape",metadata:{modifies:!0,nomod:!0},params:[{name:"projection",type:"projection"},{name:"field",type:"field",default:"datum"},{name:"pointRadius",type:"number",expr:!0},{name:"as",type:"string",default:"shape"}]},ct(DE,vs,{transform(e,t){var n=t.fork(t.ALL),r=this.value,i=e.as||"shape",o=n.ADD
return r&&!e.modified()||(this.value=r=function(e,t,n){const r=null==n?n=>e(t(n)):r=>{var i=e.pointRadius(),o=e.pointRadius(n)(t(r))
return e.pointRadius(i),o}
return r.context=t=>(e.context(t),r),r}(tE(e.projection),e.field||se("datum"),e.pointRadius),n.materialize().reflow(),o=n.SOURCE),n.visit(o,(e=>e[i]=r)),n.modifies(i)}}),CE.Definition={type:"Graticule",metadata:{changes:!0,generates:!0},params:[{name:"extent",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"extentMajor",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"extentMinor",type:"array",array:!0,length:2,content:{type:"number",array:!0,length:2}},{name:"step",type:"number",array:!0,length:2},{name:"stepMajor",type:"number",array:!0,length:2,default:[90,360]},{name:"stepMinor",type:"number",array:!0,length:2,default:[10,10]},{name:"precision",type:"number",default:2.5}]},ct(CE,vs,{transform(e,t){var n,r=this.value,i=this.generator
if(!r.length||e.modified())for(const o in e)Ge(i[o])&&i[o](e[o])
return n=i(),r.length?t.mod.push(Wa(r[0],n)):t.add.push(Ua(n)),r[0]=n,t}}),ME.Definition={type:"heatmap",metadata:{modifies:!0},params:[{name:"field",type:"field"},{name:"color",type:"string",expr:!0},{name:"opacity",type:"number",expr:!0},{name:"resolve",type:"enum",values:["shared","independent"],default:"independent"},{name:"as",type:"string",default:"image"}]},ct(ME,vs,{transform(e,t){if(!t.changed()&&!e.modified())return t.StopPropagation
var n=t.materialize(t.SOURCE).source,r="shared"===e.resolve,i=e.field||ue,o=function(e,t){let n
return Ge(e)?(n=n=>e(n,t),n.dep=jE(e)):e?n=et(e):(n=e=>e.$value/e.$max||0,n.dep=!0),n}(e.opacity,e),a=function(e,t){let n
return Ge(e)?(n=n=>Lf(e(n,t)),n.dep=jE(e)):n=et(Lf(e||"#888")),n}(e.color,e),s=e.as||"image",l={$x:0,$y:0,$value:0,$max:r?ws(n.map((e=>ws(i(e).values)))):0}
return n.forEach((e=>{const t=i(e),n=nt({},e,l)
r||(n.$max=ws(t.values||[])),e[s]=function(e,t,n,r){const i=e.width,o=e.height,a=e.x1||0,s=e.y1||0,l=e.x2||i,u=e.y2||o,c=e.values,f=c?e=>c[e]:ce,d=hf(l-a,u-s),h=d.getContext("2d"),p=h.getImageData(0,0,l-a,u-s),g=p.data
for(let m=s,y=0;m<u;++m){t.$y=m-s
for(let e=a,o=m*i;e<l;++e,y+=4){t.$x=e-a,t.$value=f(e+o)
const i=n(t)
g[y+0]=i.r,g[y+1]=i.g,g[y+2]=i.b,g[y+3]=~~(255*r(t))}}return h.putImageData(p,0,0),d}(t,n,a.dep?a:et(a(n)),o.dep?o:et(o(n)))})),t.reflow(!0).modifies(s)}}),ct(FE,vs,{transform(e,t){let n=this.value
return!n||e.modified("type")?(this.value=n=function(e){const t=eE((e||"mercator").toLowerCase())
return t||oe("Unrecognized projection type: "+e),t()}(e.type),Kk.forEach((t=>{null!=e[t]&&TE(n,t,e[t])}))):Kk.forEach((t=>{e.modified(t)&&TE(n,t,e[t])})),null!=e.pointRadius&&n.path.pointRadius(e.pointRadius),e.fit&&function(e,t){const n=function(e){return 1===(e=Ve(e)).length?e[0]:{type:kE,features:e.reduce(((e,t)=>e.concat(function(e){return e.type===kE?e.features:Ve(e).filter((e=>null!=e)).map((e=>e.type===OE?e:{type:OE,geometry:e}))}(t))),[])}}(t.fit)
t.extent?e.fitExtent(t.extent,n):t.size&&e.fitSize(t.size,n)}(n,e),t.fork(t.NO_SOURCE|t.NO_FIELDS)}})
var BE=IE.prototype=RE.prototype
function UE(e){return function(){return e}}function qE(e){return 1e-6*(e()-.5)}function ZE(e){return e.x+e.vx}function WE(e){return e.y+e.vy}BE.copy=function(){var e,t,n=new RE(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root
if(!r)return n
if(!r.length)return n._root=LE(r),n
for(e=[{source:r,target:n._root=new Array(4)}];r=e.pop();)for(var i=0;i<4;++i)(t=r.source[i])&&(t.length?e.push({source:t,target:r.target[i]=new Array(4)}):r.target[i]=LE(t))
return n},BE.add=function(e){const t=+this._x.call(null,e),n=+this._y.call(null,e)
return NE(this.cover(t,n),t,n,e)},BE.addAll=function(e){var t,n,r,i,o=e.length,a=new Array(o),s=new Array(o),l=1/0,u=1/0,c=-1/0,f=-1/0
for(n=0;n<o;++n)isNaN(r=+this._x.call(null,t=e[n]))||isNaN(i=+this._y.call(null,t))||(a[n]=r,s[n]=i,r<l&&(l=r),r>c&&(c=r),i<u&&(u=i),i>f&&(f=i))
if(l>c||u>f)return this
for(this.cover(l,u).cover(c,f),n=0;n<o;++n)NE(this,a[n],s[n],e[n])
return this},BE.cover=function(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this
var n=this._x0,r=this._y0,i=this._x1,o=this._y1
if(isNaN(n))i=(n=Math.floor(e))+1,o=(r=Math.floor(t))+1
else{for(var a,s,l=i-n||1,u=this._root;n>e||e>=i||r>t||t>=o;)switch(s=(t<r)<<1|e<n,(a=new Array(4))[s]=u,u=a,l*=2,s){case 0:i=n+l,o=r+l
break
case 1:n=i-l,o=r+l
break
case 2:i=n+l,r=o-l
break
case 3:n=i-l,r=o-l}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this},BE.data=function(){var e=[]
return this.visit((function(t){if(!t.length)do{e.push(t.data)}while(t=t.next)})),e},BE.extent=function(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},BE.find=function(e,t,n){var r,i,o,a,s,l,u,c=this._x0,f=this._y0,d=this._x1,h=this._y1,p=[],g=this._root
for(g&&p.push(new $E(g,c,f,d,h)),null==n?n=1/0:(c=e-n,f=t-n,d=e+n,h=t+n,n*=n);l=p.pop();)if(!(!(g=l.node)||(i=l.x0)>d||(o=l.y0)>h||(a=l.x1)<c||(s=l.y1)<f))if(g.length){var m=(i+a)/2,y=(o+s)/2
p.push(new $E(g[3],m,y,a,s),new $E(g[2],i,y,m,s),new $E(g[1],m,o,a,y),new $E(g[0],i,o,m,y)),(u=(t>=y)<<1|e>=m)&&(l=p[p.length-1],p[p.length-1]=p[p.length-1-u],p[p.length-1-u]=l)}else{var v=e-+this._x.call(null,g.data),b=t-+this._y.call(null,g.data),x=v*v+b*b
if(x<n){var _=Math.sqrt(n=x)
c=e-_,f=t-_,d=e+_,h=t+_,r=g.data}}return r},BE.remove=function(e){if(isNaN(o=+this._x.call(null,e))||isNaN(a=+this._y.call(null,e)))return this
var t,n,r,i,o,a,s,l,u,c,f,d,h=this._root,p=this._x0,g=this._y0,m=this._x1,y=this._y1
if(!h)return this
if(h.length)for(;;){if((u=o>=(s=(p+m)/2))?p=s:m=s,(c=a>=(l=(g+y)/2))?g=l:y=l,t=h,!(h=h[f=c<<1|u]))return this
if(!h.length)break;(t[f+1&3]||t[f+2&3]||t[f+3&3])&&(n=t,d=f)}for(;h.data!==e;)if(r=h,!(h=h.next))return this
return(i=h.next)&&delete h.next,r?(i?r.next=i:delete r.next,this):t?(i?t[f]=i:delete t[f],(h=t[0]||t[1]||t[2]||t[3])&&h===(t[3]||t[2]||t[1]||t[0])&&!h.length&&(n?n[d]=h:this._root=h),this):(this._root=i,this)},BE.removeAll=function(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t])
return this},BE.root=function(){return this._root},BE.size=function(){var e=0
return this.visit((function(t){if(!t.length)do{++e}while(t=t.next)})),e},BE.visit=function(e){var t,n,r,i,o,a,s=[],l=this._root
for(l&&s.push(new $E(l,this._x0,this._y0,this._x1,this._y1));t=s.pop();)if(!e(l=t.node,r=t.x0,i=t.y0,o=t.x1,a=t.y1)&&l.length){var u=(r+o)/2,c=(i+a)/2;(n=l[3])&&s.push(new $E(n,u,c,o,a)),(n=l[2])&&s.push(new $E(n,r,c,u,a)),(n=l[1])&&s.push(new $E(n,u,i,o,c)),(n=l[0])&&s.push(new $E(n,r,i,u,c))}return this},BE.visitAfter=function(e){var t,n=[],r=[]
for(this._root&&n.push(new $E(this._root,this._x0,this._y0,this._x1,this._y1));t=n.pop();){var i=t.node
if(i.length){var o,a=t.x0,s=t.y0,l=t.x1,u=t.y1,c=(a+l)/2,f=(s+u)/2;(o=i[0])&&n.push(new $E(o,a,s,c,f)),(o=i[1])&&n.push(new $E(o,c,s,l,f)),(o=i[2])&&n.push(new $E(o,a,f,c,u)),(o=i[3])&&n.push(new $E(o,c,f,l,u))}r.push(t)}for(;t=r.pop();)e(t.node,t.x0,t.y0,t.x1,t.y1)
return this},BE.x=function(e){return arguments.length?(this._x=e,this):this._x},BE.y=function(e){return arguments.length?(this._y=e,this):this._y}
var VE={value:()=>{}}
function HE(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r||/[\s.]/.test(e))throw new Error("illegal type: "+e)
r[e]=[]}return new GE(r)}function GE(e){this._=e}function YE(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",r=e.indexOf(".")
if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e)
return{type:e,name:n}}))}function XE(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function JE(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=VE,e=e.slice(0,r).concat(e.slice(r+1))
break}return null!=n&&e.push({name:t,value:n}),e}GE.prototype=HE.prototype={constructor:GE,on:function(e,t){var n,r=this._,i=YE(e+"",r),o=-1,a=i.length
if(!(arguments.length<2)){if(null!=t&&"function"!=typeof t)throw new Error("invalid callback: "+t)
for(;++o<a;)if(n=(e=i[o]).type)r[n]=JE(r[n],e.name,t)
else if(null==t)for(n in r)r[n]=JE(r[n],e.name,null)
return this}for(;++o<a;)if((n=(e=i[o]).type)&&(n=XE(r[n],e.name)))return n},copy:function(){var e={},t=this._
for(var n in t)e[n]=t[n].slice()
return new GE(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2]
if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e)
for(o=0,n=(r=this._[e]).length;o<n;++o)r[o].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e)
for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}}
const KE=HE
var QE,eA,tA=0,nA=0,rA=0,iA=0,oA=0,aA=0,sA="object"==typeof performance&&performance.now?performance:Date,lA="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)}
function uA(){return oA||(lA(cA),oA=sA.now()+aA)}function cA(){oA=0}function fA(){this._call=this._time=this._next=null}function dA(e,t,n){var r=new fA
return r.restart(e,t,n),r}function hA(){oA=(iA=sA.now())+aA,tA=nA=0
try{!function(){uA(),++tA
for(var e,t=QE;t;)(e=oA-t._time)>=0&&t._call.call(void 0,e),t=t._next;--tA}()}finally{tA=0,function(){for(var e,t,n=QE,r=1/0;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:QE=t)
eA=e,gA(r)}(),oA=0}}function pA(){var e=sA.now(),t=e-iA
t>1e3&&(aA-=t,iA=e)}function gA(e){tA||(nA&&(nA=clearTimeout(nA)),e-oA>24?(e<1/0&&(nA=setTimeout(hA,e-sA.now()-aA)),rA&&(rA=clearInterval(rA))):(rA||(iA=sA.now(),rA=setInterval(pA,1e3)),tA=1,lA(hA)))}fA.prototype=dA.prototype={constructor:fA,restart:function(e,t,n){if("function"!=typeof e)throw new TypeError("callback is not a function")
n=(null==n?uA():+n)+(null==t?0:+t),this._next||eA===this||(eA?eA._next=this:QE=this,eA=this),this._call=e,this._time=n,gA()},stop:function(){this._call&&(this._call=null,this._time=1/0,gA())}}
const mA=4294967296
function yA(e){return e.x}function vA(e){return e.y}var bA=Math.PI*(3-Math.sqrt(5))
function xA(e){return e.index}function _A(e,t){var n=e.get(t)
if(!n)throw new Error("node not found: "+t)
return n}const wA={center:function(e,t){var n,r=1
function i(){var i,o,a=n.length,s=0,l=0
for(i=0;i<a;++i)s+=(o=n[i]).x,l+=o.y
for(s=(s/a-e)*r,l=(l/a-t)*r,i=0;i<a;++i)(o=n[i]).x-=s,o.y-=l}return null==e&&(e=0),null==t&&(t=0),i.initialize=function(e){n=e},i.x=function(t){return arguments.length?(e=+t,i):e},i.y=function(e){return arguments.length?(t=+e,i):t},i.strength=function(e){return arguments.length?(r=+e,i):r},i},collide:function(e){var t,n,r,i=1,o=1
function a(){for(var e,a,l,u,c,f,d,h=t.length,p=0;p<o;++p)for(a=IE(t,ZE,WE).visitAfter(s),e=0;e<h;++e)l=t[e],f=n[l.index],d=f*f,u=l.x+l.vx,c=l.y+l.vy,a.visit(g)
function g(e,t,n,o,a){var s=e.data,h=e.r,p=f+h
if(!s)return t>u+p||o<u-p||n>c+p||a<c-p
if(s.index>l.index){var g=u-s.x-s.vx,m=c-s.y-s.vy,y=g*g+m*m
y<p*p&&(0===g&&(y+=(g=qE(r))*g),0===m&&(y+=(m=qE(r))*m),y=(p-(y=Math.sqrt(y)))/y*i,l.vx+=(g*=y)*(p=(h*=h)/(d+h)),l.vy+=(m*=y)*p,s.vx-=g*(p=1-p),s.vy-=m*p)}}}function s(e){if(e.data)return e.r=n[e.data.index]
for(var t=e.r=0;t<4;++t)e[t]&&e[t].r>e.r&&(e.r=e[t].r)}function l(){if(t){var r,i,o=t.length
for(n=new Array(o),r=0;r<o;++r)i=t[r],n[i.index]=+e(i,r,t)}}return"function"!=typeof e&&(e=UE(null==e?1:+e)),a.initialize=function(e,n){t=e,r=n,l()},a.iterations=function(e){return arguments.length?(o=+e,a):o},a.strength=function(e){return arguments.length?(i=+e,a):i},a.radius=function(t){return arguments.length?(e="function"==typeof t?t:UE(+t),l(),a):e},a},nbody:function(){var e,t,n,r,i,o=UE(-30),a=1,s=1/0,l=.81
function u(n){var i,o=e.length,a=IE(e,yA,vA).visitAfter(f)
for(r=n,i=0;i<o;++i)t=e[i],a.visit(d)}function c(){if(e){var t,n,r=e.length
for(i=new Array(r),t=0;t<r;++t)n=e[t],i[n.index]=+o(n,t,e)}}function f(e){var t,n,r,o,a,s=0,l=0
if(e.length){for(r=o=a=0;a<4;++a)(t=e[a])&&(n=Math.abs(t.value))&&(s+=t.value,l+=n,r+=n*t.x,o+=n*t.y)
e.x=r/l,e.y=o/l}else{(t=e).x=t.data.x,t.y=t.data.y
do{s+=i[t.data.index]}while(t=t.next)}e.value=s}function d(e,o,u,c){if(!e.value)return!0
var f=e.x-t.x,d=e.y-t.y,h=c-o,p=f*f+d*d
if(h*h/l<p)return p<s&&(0===f&&(p+=(f=qE(n))*f),0===d&&(p+=(d=qE(n))*d),p<a&&(p=Math.sqrt(a*p)),t.vx+=f*e.value*r/p,t.vy+=d*e.value*r/p),!0
if(!(e.length||p>=s)){(e.data!==t||e.next)&&(0===f&&(p+=(f=qE(n))*f),0===d&&(p+=(d=qE(n))*d),p<a&&(p=Math.sqrt(a*p)))
do{e.data!==t&&(h=i[e.data.index]*r/p,t.vx+=f*h,t.vy+=d*h)}while(e=e.next)}}return u.initialize=function(t,r){e=t,n=r,c()},u.strength=function(e){return arguments.length?(o="function"==typeof e?e:UE(+e),c(),u):o},u.distanceMin=function(e){return arguments.length?(a=e*e,u):Math.sqrt(a)},u.distanceMax=function(e){return arguments.length?(s=e*e,u):Math.sqrt(s)},u.theta=function(e){return arguments.length?(l=e*e,u):Math.sqrt(l)},u},link:function(e){var t,n,r,i,o,a,s=xA,l=function(e){return 1/Math.min(i[e.source.index],i[e.target.index])},u=UE(30),c=1
function f(r){for(var i=0,s=e.length;i<c;++i)for(var l,u,f,d,h,p,g,m=0;m<s;++m)u=(l=e[m]).source,d=(f=l.target).x+f.vx-u.x-u.vx||qE(a),h=f.y+f.vy-u.y-u.vy||qE(a),d*=p=((p=Math.sqrt(d*d+h*h))-n[m])/p*r*t[m],h*=p,f.vx-=d*(g=o[m]),f.vy-=h*g,u.vx+=d*(g=1-g),u.vy+=h*g}function d(){if(r){var a,l,u=r.length,c=e.length,f=new Map(r.map(((e,t)=>[s(e,t,r),e])))
for(a=0,i=new Array(u);a<c;++a)(l=e[a]).index=a,"object"!=typeof l.source&&(l.source=_A(f,l.source)),"object"!=typeof l.target&&(l.target=_A(f,l.target)),i[l.source.index]=(i[l.source.index]||0)+1,i[l.target.index]=(i[l.target.index]||0)+1
for(a=0,o=new Array(c);a<c;++a)l=e[a],o[a]=i[l.source.index]/(i[l.source.index]+i[l.target.index])
t=new Array(c),h(),n=new Array(c),p()}}function h(){if(r)for(var n=0,i=e.length;n<i;++n)t[n]=+l(e[n],n,e)}function p(){if(r)for(var t=0,i=e.length;t<i;++t)n[t]=+u(e[t],t,e)}return null==e&&(e=[]),f.initialize=function(e,t){r=e,a=t,d()},f.links=function(t){return arguments.length?(e=t,d(),f):e},f.id=function(e){return arguments.length?(s=e,f):s},f.iterations=function(e){return arguments.length?(c=+e,f):c},f.strength=function(e){return arguments.length?(l="function"==typeof e?e:UE(+e),h(),f):l},f.distance=function(e){return arguments.length?(u="function"==typeof e?e:UE(+e),p(),f):u},f},x:function(e){var t,n,r,i=UE(.1)
function o(e){for(var i,o=0,a=t.length;o<a;++o)(i=t[o]).vx+=(r[o]-i.x)*n[o]*e}function a(){if(t){var o,a=t.length
for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+e(t[o],o,t))?0:+i(t[o],o,t)}}return"function"!=typeof e&&(e=UE(null==e?0:+e)),o.initialize=function(e){t=e,a()},o.strength=function(e){return arguments.length?(i="function"==typeof e?e:UE(+e),a(),o):i},o.x=function(t){return arguments.length?(e="function"==typeof t?t:UE(+t),a(),o):e},o},y:function(e){var t,n,r,i=UE(.1)
function o(e){for(var i,o=0,a=t.length;o<a;++o)(i=t[o]).vy+=(r[o]-i.y)*n[o]*e}function a(){if(t){var o,a=t.length
for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+e(t[o],o,t))?0:+i(t[o],o,t)}}return"function"!=typeof e&&(e=UE(null==e?0:+e)),o.initialize=function(e){t=e,a()},o.strength=function(e){return arguments.length?(i="function"==typeof e?e:UE(+e),a(),o):i},o.y=function(t){return arguments.length?(e="function"==typeof t?t:UE(+t),a(),o):e},o}},OA="forces",kA=["alpha","alphaMin","alphaTarget","velocityDecay","forces"],EA=["static","iterations"],AA=["x","y","vx","vy"]
function SA(e){vs.call(this,null,e)}function DA(e,t,n,r){var i,o,a,s,l=Ve(t.forces)
for(i=0,o=kA.length;i<o;++i)(a=kA[i])!==OA&&t.modified(a)&&e[a](t[a])
for(i=0,o=l.length;i<o;++i)s=OA+i,(a=n||t.modified(OA,i)?MA(l[i]):r&&CA(l[i],r)?e.force(s):null)&&e.force(s,a)
for(o=e.numForces||0;i<o;++i)e.force(OA+i,null)
return e.numForces=l.length,e}function CA(e,t){var n,r
for(n in e)if(Ge(r=e[n])&&t.modified(te(r)))return 1
return 0}function MA(e){var t,n
for(n in at(wA,e.force)||oe("Unrecognized force: "+e.force),t=wA[e.force](),e)Ge(t[n])&&jA(t[n],e[n],e)
return t}function jA(e,t,n){e(Ge(t)?e=>t(e,n):t)}function FA(e){var t=0,n=e.children,r=n&&n.length
if(r)for(;--r>=0;)t+=n[r].value
else t=1
e.value=t}function TA(e,t){e instanceof Map?(e=[void 0,e],void 0===t&&(t=$A)):void 0===t&&(t=NA)
for(var n,r,i,o,a,s=new IA(e),l=[s];n=l.pop();)if((i=t(n.data))&&(a=(i=Array.from(i)).length))for(n.children=i,o=a-1;o>=0;--o)l.push(r=i[o]=new IA(i[o])),r.parent=n,r.depth=n.depth+1
return s.eachBefore(zA)}function NA(e){return e.children}function $A(e){return Array.isArray(e)?e[1]:null}function PA(e){void 0!==e.data.value&&(e.value=e.data.value),e.data=e.data.data}function zA(e){var t=0
do{e.height=t}while((e=e.parent)&&e.height<++t)}function IA(e){this.data=e,this.depth=this.height=0,this.parent=null}function RA(e){return null==e?null:LA(e)}function LA(e){if("function"!=typeof e)throw new Error
return e}function BA(){return 0}function UA(e){return function(){return e}}SA.Definition={type:"Force",metadata:{modifies:!0},params:[{name:"static",type:"boolean",default:!1},{name:"restart",type:"boolean",default:!1},{name:"iterations",type:"number",default:300},{name:"alpha",type:"number",default:1},{name:"alphaMin",type:"number",default:.001},{name:"alphaTarget",type:"number",default:0},{name:"velocityDecay",type:"number",default:.4},{name:"forces",type:"param",array:!0,params:[{key:{force:"center"},params:[{name:"x",type:"number",default:0},{name:"y",type:"number",default:0}]},{key:{force:"collide"},params:[{name:"radius",type:"number",expr:!0},{name:"strength",type:"number",default:.7},{name:"iterations",type:"number",default:1}]},{key:{force:"nbody"},params:[{name:"strength",type:"number",default:-30},{name:"theta",type:"number",default:.9},{name:"distanceMin",type:"number",default:1},{name:"distanceMax",type:"number"}]},{key:{force:"link"},params:[{name:"links",type:"data"},{name:"id",type:"field"},{name:"distance",type:"number",default:30,expr:!0},{name:"strength",type:"number",expr:!0},{name:"iterations",type:"number",default:1}]},{key:{force:"x"},params:[{name:"strength",type:"number",default:.1},{name:"x",type:"field"}]},{key:{force:"y"},params:[{name:"strength",type:"number",default:.1},{name:"y",type:"field"}]}]},{name:"as",type:"string",array:!0,modify:!1,default:AA}]},ct(SA,vs,{transform(e,t){var n,r,i=this.value,o=t.changed(t.ADD_REM),a=e.modified(kA),s=e.iterations||300
if(i?(o&&(t.modifies("index"),i.nodes(t.source)),(a||t.changed(t.MOD))&&DA(i,e,0,t)):(this.value=i=function(e,t){const n=function(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,s=new Map,l=dA(f),u=KE("tick","end"),c=function(){let e=1
return()=>(e=(1664525*e+1013904223)%mA)/mA}()
function f(){d(),u.call("tick",t),n<r&&(l.stop(),u.call("end",t))}function d(r){var l,u,c=e.length
void 0===r&&(r=1)
for(var f=0;f<r;++f)for(n+=(o-n)*i,s.forEach((function(e){e(n)})),l=0;l<c;++l)null==(u=e[l]).fx?u.x+=u.vx*=a:(u.x=u.fx,u.vx=0),null==u.fy?u.y+=u.vy*=a:(u.y=u.fy,u.vy=0)
return t}function h(){for(var t,n=0,r=e.length;n<r;++n){if((t=e[n]).index=n,null!=t.fx&&(t.x=t.fx),null!=t.fy&&(t.y=t.fy),isNaN(t.x)||isNaN(t.y)){var i=10*Math.sqrt(.5+n),o=n*bA
t.x=i*Math.cos(o),t.y=i*Math.sin(o)}(isNaN(t.vx)||isNaN(t.vy))&&(t.vx=t.vy=0)}}function p(t){return t.initialize&&t.initialize(e,c),t}return null==e&&(e=[]),h(),t={tick:d,restart:function(){return l.restart(f),t},stop:function(){return l.stop(),t},nodes:function(n){return arguments.length?(e=n,h(),s.forEach(p),t):e},alpha:function(e){return arguments.length?(n=+e,t):n},alphaMin:function(e){return arguments.length?(r=+e,t):r},alphaDecay:function(e){return arguments.length?(i=+e,t):+i},alphaTarget:function(e){return arguments.length?(o=+e,t):o},velocityDecay:function(e){return arguments.length?(a=1-e,t):1-a},randomSource:function(e){return arguments.length?(c=e,s.forEach(p),t):c},force:function(e,n){return arguments.length>1?(null==n?s.delete(e):s.set(e,p(n)),t):s.get(e)},find:function(t,n,r){var i,o,a,s,l,u=0,c=e.length
for(null==r?r=1/0:r*=r,u=0;u<c;++u)(a=(i=t-(s=e[u]).x)*i+(o=n-s.y)*o)<r&&(l=s,r=a)
return l},on:function(e,n){return arguments.length>1?(u.on(e,n),t):u.on(e)}}}(e),r=n.stop,i=n.restart
let o=!1
return n.stopped=()=>o,n.restart=()=>(o=!1,i()),n.stop=()=>(o=!0,r()),DA(n,t,!0).on("end",(()=>o=!0))}(t.source,e),i.on("tick",(n=t.dataflow,r=this,()=>n.touch(r).run())),e.static||(o=!0,i.tick()),t.modifies("index")),a||o||e.modified(EA)||t.changed()&&e.restart)if(i.alpha(Math.max(i.alpha(),e.alpha||1)).alphaDecay(1-Math.pow(i.alphaMin(),1/s)),e.static)for(i.stop();--s>=0;)i.tick()
else if(i.stopped()&&i.restart(),!o)return t.StopPropagation
return this.finish(e,t)},finish(e,t){const n=t.dataflow
for(let s,l=this._argops,u=0,c=l.length;u<c;++u)if(s=l[u],s.name===OA&&"link"===s.op._argval.force)for(var r,i=s.op._argops,o=0,a=i.length;o<a;++o)if("links"===i[o].name&&(r=i[o].op.source)){n.pulse(r,n.changeset().reflow())
break}return t.reflow(e.modified()).modifies(AA)}}),IA.prototype=TA.prototype={constructor:IA,count:function(){return this.eachAfter(FA)},each:function(e,t){let n=-1
for(const r of this)e.call(t,r,++n,this)
return this},eachAfter:function(e,t){for(var n,r,i,o=this,a=[o],s=[],l=-1;o=a.pop();)if(s.push(o),n=o.children)for(r=0,i=n.length;r<i;++r)a.push(n[r])
for(;o=s.pop();)e.call(t,o,++l,this)
return this},eachBefore:function(e,t){for(var n,r,i=this,o=[i],a=-1;i=o.pop();)if(e.call(t,i,++a,this),n=i.children)for(r=n.length-1;r>=0;--r)o.push(n[r])
return this},find:function(e,t){let n=-1
for(const r of this)if(e.call(t,r,++n,this))return r},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)n+=r[i].value
t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(e,t){if(e===t)return e
var n=e.ancestors(),r=t.ancestors(),i=null
for(e=n.pop(),t=r.pop();e===t;)i=e,e=n.pop(),t=r.pop()
return i}(t,e),r=[t];t!==n;)t=t.parent,r.push(t)
for(var i=r.length;e!==n;)r.splice(i,0,e),e=e.parent
return r},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e)
return t},descendants:function(){return Array.from(this)},leaves:function(){var e=[]
return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[]
return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return TA(this).eachBefore(PA)},[Symbol.iterator]:function*(){var e,t,n,r,i=this,o=[i]
do{for(e=o.reverse(),o=[];i=e.pop();)if(yield i,t=i.children)for(n=0,r=t.length;n<r;++n)o.push(t[n])}while(o.length)}}
const qA=4294967296
function ZA(e,t){var n,r
if(HA(t,e))return[t]
for(n=0;n<e.length;++n)if(WA(t,e[n])&&HA(YA(e[n],t),e))return[e[n],t]
for(n=0;n<e.length-1;++n)for(r=n+1;r<e.length;++r)if(WA(YA(e[n],e[r]),t)&&WA(YA(e[n],t),e[r])&&WA(YA(e[r],t),e[n])&&HA(XA(e[n],e[r],t),e))return[e[n],e[r],t]
throw new Error}function WA(e,t){var n=e.r-t.r,r=t.x-e.x,i=t.y-e.y
return n<0||n*n<r*r+i*i}function VA(e,t){var n=e.r-t.r+1e-9*Math.max(e.r,t.r,1),r=t.x-e.x,i=t.y-e.y
return n>0&&n*n>r*r+i*i}function HA(e,t){for(var n=0;n<t.length;++n)if(!VA(e,t[n]))return!1
return!0}function GA(e){switch(e.length){case 1:return{x:(t=e[0]).x,y:t.y,r:t.r}
case 2:return YA(e[0],e[1])
case 3:return XA(e[0],e[1],e[2])}var t}function YA(e,t){var n=e.x,r=e.y,i=e.r,o=t.x,a=t.y,s=t.r,l=o-n,u=a-r,c=s-i,f=Math.sqrt(l*l+u*u)
return{x:(n+o+l/f*c)/2,y:(r+a+u/f*c)/2,r:(f+i+s)/2}}function XA(e,t,n){var r=e.x,i=e.y,o=e.r,a=t.x,s=t.y,l=t.r,u=n.x,c=n.y,f=n.r,d=r-a,h=r-u,p=i-s,g=i-c,m=l-o,y=f-o,v=r*r+i*i-o*o,b=v-a*a-s*s+l*l,x=v-u*u-c*c+f*f,_=h*p-d*g,w=(p*x-g*b)/(2*_)-r,O=(g*m-p*y)/_,k=(h*b-d*x)/(2*_)-i,E=(d*y-h*m)/_,A=O*O+E*E-1,S=2*(o+w*O+k*E),D=w*w+k*k-o*o,C=-(Math.abs(A)>1e-6?(S+Math.sqrt(S*S-4*A*D))/(2*A):D/S)
return{x:r+w+O*C,y:i+k+E*C,r:C}}function JA(e,t,n){var r,i,o,a,s=e.x-t.x,l=e.y-t.y,u=s*s+l*l
u?(i=t.r+n.r,i*=i,a=e.r+n.r,i>(a*=a)?(r=(u+a-i)/(2*u),o=Math.sqrt(Math.max(0,a/u-r*r)),n.x=e.x-r*s-o*l,n.y=e.y-r*l+o*s):(r=(u+i-a)/(2*u),o=Math.sqrt(Math.max(0,i/u-r*r)),n.x=t.x+r*s-o*l,n.y=t.y+r*l+o*s)):(n.x=t.x+n.r,n.y=t.y)}function KA(e,t){var n=e.r+t.r-1e-6,r=t.x-e.x,i=t.y-e.y
return n>0&&n*n>r*r+i*i}function QA(e){var t=e._,n=e.next._,r=t.r+n.r,i=(t.x*n.r+n.x*t.r)/r,o=(t.y*n.r+n.y*t.r)/r
return i*i+o*o}function eS(e){this._=e,this.next=null,this.previous=null}function tS(e){return Math.sqrt(e.value)}function nS(e){return function(t){t.children||(t.r=Math.max(0,+e(t)||0))}}function rS(e,t,n){return function(r){if(i=r.children){var i,o,a,s=i.length,l=e(r)*t||0
if(l)for(o=0;o<s;++o)i[o].r+=l
if(a=function(e,t){if(!(a=(n=e,e="object"==typeof n&&"length"in n?n:Array.from(n)).length))return 0
var n,r,i,o,a,s,l,u,c,f,d,h
if((r=e[0]).x=0,r.y=0,!(a>1))return r.r
if(i=e[1],r.x=-i.r,i.x=r.r,i.y=0,!(a>2))return r.r+i.r
JA(i,r,o=e[2]),r=new eS(r),i=new eS(i),o=new eS(o),r.next=o.previous=i,i.next=r.previous=o,o.next=i.previous=r
e:for(u=3;u<a;++u){JA(r._,i._,o=e[u]),o=new eS(o),c=i.next,f=r.previous,d=i._.r,h=r._.r
do{if(d<=h){if(KA(c._,o._)){i=c,r.next=i,i.previous=r,--u
continue e}d+=c._.r,c=c.next}else{if(KA(f._,o._)){(r=f).next=i,i.previous=r,--u
continue e}h+=f._.r,f=f.previous}}while(c!==f.next)
for(o.previous=r,o.next=i,r.next=i.previous=i=o,s=QA(r);(o=o.next)!==i;)(l=QA(o))<s&&(r=o,s=l)
i=r.next}for(r=[i._],o=i;(o=o.next)!==i;)r.push(o._)
for(o=function(e,t){for(var n,r,i=0,o=(e=function(e,t){let n,r,i=e.length
for(;i;)r=t()*i--|0,n=e[i],e[i]=e[r],e[r]=n
return e}(Array.from(e),t)).length,a=[];i<o;)n=e[i],r&&VA(r,n)?++i:(r=GA(a=ZA(a,n)),i=0)
return r}(r,t),u=0;u<a;++u)(r=e[u]).x-=o.x,r.y-=o.y
return o.r}(i,n),l)for(o=0;o<s;++o)i[o].r-=l
r.r=a+l}}}function iS(e){return function(t){var n=t.parent
t.r*=e,n&&(t.x=n.x+e*t.x,t.y=n.y+e*t.y)}}function oS(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}function aS(e,t,n,r,i){for(var o,a=e.children,s=-1,l=a.length,u=e.value&&(r-t)/e.value;++s<l;)(o=a[s]).y0=n,o.y1=i,o.x0=t,o.x1=t+=o.value*u}var sS={depth:-1},lS={},uS={}
function cS(e){return e.id}function fS(e){return e.parentId}function dS(){var e,t=cS,n=fS
function r(r){var i,o,a,s,l,u,c,f,d=Array.from(r),h=t,p=n,g=new Map
if(null!=e){const t=d.map(((t,n)=>function(e){let t=(e=`${e}`).length
return pS(e,t-1)&&!pS(e,t-2)&&(e=e.slice(0,-1)),"/"===e[0]?e:`/${e}`}(e(t,n,r)))),n=t.map(hS),i=new Set(t).add("")
for(const e of n)i.has(e)||(i.add(e),t.push(e),n.push(hS(e)),d.push(uS))
h=(e,n)=>t[n],p=(e,t)=>n[t]}for(a=0,i=d.length;a<i;++a)o=d[a],u=d[a]=new IA(o),null!=(c=h(o,a,r))&&(c+="")&&(f=u.id=c,g.set(f,g.has(f)?lS:u)),null!=(c=p(o,a,r))&&(c+="")&&(u.parent=c)
for(a=0;a<i;++a)if(c=(u=d[a]).parent){if(!(l=g.get(c)))throw new Error("missing: "+c)
if(l===lS)throw new Error("ambiguous: "+c)
l.children?l.children.push(u):l.children=[u],u.parent=l}else{if(s)throw new Error("multiple roots")
s=u}if(!s)throw new Error("no root")
if(null!=e){for(;s.data===uS&&1===s.children.length;)s=s.children[0],--i
for(let e=d.length-1;e>=0&&(u=d[e],u.data===uS);--e)u.data=null}if(s.parent=sS,s.eachBefore((function(e){e.depth=e.parent.depth+1,--i})).eachBefore(zA),s.parent=null,i>0)throw new Error("cycle")
return s}return r.id=function(e){return arguments.length?(t=RA(e),r):t},r.parentId=function(e){return arguments.length?(n=RA(e),r):n},r.path=function(t){return arguments.length?(e=RA(t),r):e},r}function hS(e){let t=e.length
if(t<2)return""
for(;--t>1&&!pS(e,t););return e.slice(0,t)}function pS(e,t){if("/"===e[t]){let n=0
for(;t>0&&"\\"===e[--t];)++n
if(0==(1&n))return!0}return!1}function gS(e,t){return e.parent===t.parent?1:2}function mS(e){var t=e.children
return t?t[0]:e.t}function yS(e){var t=e.children
return t?t[t.length-1]:e.t}function vS(e,t,n){var r=n/(t.i-e.i)
t.c-=r,t.s+=n,e.c+=r,t.z+=n,t.m+=n}function bS(e,t,n){return e.a.parent===t.parent?e.a:n}function xS(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}function _S(e,t){return e.parent===t.parent?1:2}function wS(e,t){return e+t.x}function OS(e,t){return Math.max(e,t.y)}function kS(e,t,n,r,i){for(var o,a=e.children,s=-1,l=a.length,u=e.value&&(i-n)/e.value;++s<l;)(o=a[s]).x0=t,o.x1=r,o.y0=n,o.y1=n+=o.value*u}xS.prototype=Object.create(IA.prototype)
var ES=(1+Math.sqrt(5))/2
function AS(e,t,n,r,i,o){for(var a,s,l,u,c,f,d,h,p,g,m,y=[],v=t.children,b=0,x=0,_=v.length,w=t.value;b<_;){l=i-n,u=o-r
do{c=v[x++].value}while(!c&&x<_)
for(f=d=c,m=c*c*(g=Math.max(u/l,l/u)/(w*e)),p=Math.max(d/m,m/f);x<_;++x){if(c+=s=v[x].value,s<f&&(f=s),s>d&&(d=s),m=c*c*g,(h=Math.max(d/m,m/f))>p){c-=s
break}p=h}y.push(a={value:c,dice:l<u,children:v.slice(b,x)}),a.dice?aS(a,n,r,i,w?r+=u*c/w:o):kS(a,n,r,w?n+=l*c/w:i,o),w-=c,b=x}return y}const SS=function e(t){function n(e,n,r,i,o){AS(t,e,n,r,i,o)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n}(ES),DS=function e(t){function n(e,n,r,i,o){if((a=e._squarify)&&a.ratio===t)for(var a,s,l,u,c,f=-1,d=a.length,h=e.value;++f<d;){for(l=(s=a[f]).children,u=s.value=0,c=l.length;u<c;++u)s.value+=l[u].value
s.dice?aS(s,n,r,i,h?r+=(o-r)*s.value/h:o):kS(s,n,r,h?n+=(i-n)*s.value/h:i,o),h-=s.value}else e._squarify=a=AS(t,e,n,r,i,o),a.ratio=t}return n.ratio=function(t){return e((t=+t)>1?t:1)},n}(ES)
function CS(e,t,n){const r={}
return e.each((e=>{const i=e.data
n(i)&&(r[t(i)]=e)})),e.lookup=r,e}function MS(e){vs.call(this,null,e)}MS.Definition={type:"Nest",metadata:{treesource:!0,changes:!0},params:[{name:"keys",type:"field",array:!0},{name:"generate",type:"boolean"}]}
const jS=e=>e.values
function FS(){const e=[],t={entries:e=>r(n(e,0),0),key:n=>(e.push(n),t)}
function n(t,r){if(r>=e.length)return t
const i=t.length,o=e[r++],a={},s={}
let l,u,c,f=-1
for(;++f<i;)l=o(u=t[f])+"",(c=a[l])?c.push(u):a[l]=[u]
for(l in a)s[l]=n(a[l],r)
return s}function r(t,n){if(++n>e.length)return t
const i=[]
for(const e in t)i.push({key:e,values:r(t[e],n)})
return i}return t}function TS(e){vs.call(this,null,e)}ct(MS,vs,{transform(e,t){t.source||oe("Nest transform requires an upstream data source.")
var n=e.generate,r=e.modified(),i=t.clone(),o=this.value
return(!o||r||t.changed())&&(o&&o.each((e=>{e.children&&Ra(e.data)&&i.rem.push(e.data)})),this.value=o=TA({values:Ve(e.keys).reduce(((e,t)=>(e.key(t),e)),FS()).entries(i.source)},jS),n&&o.each((e=>{e.children&&(e=Ua(e.data),i.add.push(e),i.source.push(e))})),CS(o,La,La)),i.source.root=o,i}})
const NS=(e,t)=>e.parent===t.parent?1:2
ct(TS,vs,{transform(e,t){t.source&&t.source.root||oe(this.constructor.name+" transform requires a backing tree data source.")
const n=this.layout(e.method),r=this.fields,i=t.source.root,o=e.as||r
e.field?i.sum(e.field):i.count(),e.sort&&i.sort(Va(e.sort,(e=>e.data))),function(e,t,n){for(let r,i=0,o=t.length;i<o;++i)r=t[i],r in n&&e[r](n[r])}(n,this.params,e),n.separation&&n.separation(!1!==e.separation?NS:fe)
try{this.value=n(i)}catch(e){oe(e)}return i.each((e=>function(e,t,n){const r=e.data,i=t.length-1
for(let o=0;o<i;++o)r[n[o]]=e[t[o]]
r[n[i]]=e.children?e.children.length:0}(e,r,o))),t.reflow(e.modified()).modifies(o).modifies("leaf")}})
const $S=["x","y","r","depth","children"]
function PS(e){TS.call(this,e)}PS.Definition={type:"Pack",metadata:{tree:!0,modifies:!0},params:[{name:"field",type:"field"},{name:"sort",type:"compare"},{name:"padding",type:"number",default:0},{name:"radius",type:"field",default:null},{name:"size",type:"number",array:!0,length:2},{name:"as",type:"string",array:!0,length:$S.length,default:$S}]},ct(PS,TS,{layout:function(){var e=null,t=1,n=1,r=BA
function i(i){const o=function(){let e=1
return()=>(e=(1664525*e+1013904223)%qA)/qA}()
return i.x=t/2,i.y=n/2,e?i.eachBefore(nS(e)).eachAfter(rS(r,.5,o)).eachBefore(iS(1)):i.eachBefore(nS(tS)).eachAfter(rS(BA,1,o)).eachAfter(rS(r,i.r/Math.min(t,n),o)).eachBefore(iS(Math.min(t,n)/(2*i.r))),i}return i.radius=function(t){return arguments.length?(e=RA(t),i):e},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(e){return arguments.length?(r="function"==typeof e?e:UA(+e),i):r},i},params:["radius","size","padding"],fields:$S})
const zS=["x0","y0","x1","y1","depth","children"]
function IS(e){TS.call(this,e)}function RS(e){vs.call(this,null,e)}IS.Definition={type:"Partition",metadata:{tree:!0,modifies:!0},params:[{name:"field",type:"field"},{name:"sort",type:"compare"},{name:"padding",type:"number",default:0},{name:"round",type:"boolean",default:!1},{name:"size",type:"number",array:!0,length:2},{name:"as",type:"string",array:!0,length:zS.length,default:zS}]},ct(IS,TS,{layout:function(){var e=1,t=1,n=0,r=!1
function i(i){var o=i.height+1
return i.x0=i.y0=n,i.x1=e,i.y1=t/o,i.eachBefore(function(e,t){return function(r){r.children&&aS(r,r.x0,e*(r.depth+1)/t,r.x1,e*(r.depth+2)/t)
var i=r.x0,o=r.y0,a=r.x1-n,s=r.y1-n
a<i&&(i=a=(i+a)/2),s<o&&(o=s=(o+s)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=s}}(t,o)),r&&i.eachBefore(oS),i}return i.round=function(e){return arguments.length?(r=!!e,i):r},i.size=function(n){return arguments.length?(e=+n[0],t=+n[1],i):[e,t]},i.padding=function(e){return arguments.length?(n=+e,i):n},i},params:["size","round","padding"],fields:zS}),RS.Definition={type:"Stratify",metadata:{treesource:!0},params:[{name:"key",type:"field",required:!0},{name:"parentKey",type:"field",required:!0}]},ct(RS,vs,{transform(e,t){t.source||oe("Stratify transform requires an upstream data source.")
let n=this.value
const r=e.modified(),i=t.fork(t.ALL).materialize(t.SOURCE),o=!n||r||t.changed(t.ADD_REM)||t.modified(e.key.fields)||t.modified(e.parentKey.fields)
return i.source=i.source.slice(),o&&(n=i.source.length?CS(dS().id(e.key).parentId(e.parentKey)(i.source),e.key,de):CS(dS()([{}]),e.key,e.key)),i.source.root=this.value=n,i}})
const LS={tidy:function(){var e=gS,t=1,n=1,r=null
function i(i){var l=function(e){for(var t,n,r,i,o,a=new xS(e,0),s=[a];t=s.pop();)if(r=t._.children)for(t.children=new Array(o=r.length),i=o-1;i>=0;--i)s.push(n=t.children[i]=new xS(r[i],i)),n.parent=t
return(a.parent=new xS(null,0)).children=[a],a}(i)
if(l.eachAfter(o),l.parent.m=-l.z,l.eachBefore(a),r)i.eachBefore(s)
else{var u=i,c=i,f=i
i.eachBefore((function(e){e.x<u.x&&(u=e),e.x>c.x&&(c=e),e.depth>f.depth&&(f=e)}))
var d=u===c?1:e(u,c)/2,h=d-u.x,p=t/(c.x+d+h),g=n/(f.depth||1)
i.eachBefore((function(e){e.x=(e.x+h)*p,e.y=e.depth*g}))}return i}function o(t){var n=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null
if(n){!function(e){for(var t,n=0,r=0,i=e.children,o=i.length;--o>=0;)(t=i[o]).z+=n,t.m+=n,n+=t.s+(r+=t.c)}(t)
var o=(n[0].z+n[n.length-1].z)/2
i?(t.z=i.z+e(t._,i._),t.m=t.z-o):t.z=o}else i&&(t.z=i.z+e(t._,i._))
t.parent.A=function(t,n,r){if(n){for(var i,o=t,a=t,s=n,l=o.parent.children[0],u=o.m,c=a.m,f=s.m,d=l.m;s=yS(s),o=mS(o),s&&o;)l=mS(l),(a=yS(a)).a=t,(i=s.z+f-o.z-u+e(s._,o._))>0&&(vS(bS(s,t,r),t,i),u+=i,c+=i),f+=s.m,u+=o.m,d+=l.m,c+=a.m
s&&!yS(a)&&(a.t=s,a.m+=f-c),o&&!mS(l)&&(l.t=o,l.m+=u-d,r=t)}return r}(t,i,t.parent.A||r[0])}function a(e){e._.x=e.z+e.parent.m,e.m+=e.parent.m}function s(e){e.x*=t,e.y=e.depth*n}return i.separation=function(t){return arguments.length?(e=t,i):e},i.size=function(e){return arguments.length?(r=!1,t=+e[0],n=+e[1],i):r?null:[t,n]},i.nodeSize=function(e){return arguments.length?(r=!0,t=+e[0],n=+e[1],i):r?[t,n]:null},i},cluster:function(){var e=_S,t=1,n=1,r=!1
function i(i){var o,a=0
i.eachAfter((function(t){var n=t.children
n?(t.x=function(e){return e.reduce(wS,0)/e.length}(n),t.y=function(e){return 1+e.reduce(OS,0)}(n)):(t.x=o?a+=e(t,o):0,t.y=0,o=t)}))
var s=function(e){for(var t;t=e.children;)e=t[0]
return e}(i),l=function(e){for(var t;t=e.children;)e=t[t.length-1]
return e}(i),u=s.x-e(s,l)/2,c=l.x+e(l,s)/2
return i.eachAfter(r?function(e){e.x=(e.x-i.x)*t,e.y=(i.y-e.y)*n}:function(e){e.x=(e.x-u)/(c-u)*t,e.y=(1-(i.y?e.y/i.y:1))*n})}return i.separation=function(t){return arguments.length?(e=t,i):e},i.size=function(e){return arguments.length?(r=!1,t=+e[0],n=+e[1],i):r?null:[t,n]},i.nodeSize=function(e){return arguments.length?(r=!0,t=+e[0],n=+e[1],i):r?[t,n]:null},i}},BS=["x","y","depth","children"]
function US(e){TS.call(this,e)}function qS(e){vs.call(this,[],e)}US.Definition={type:"Tree",metadata:{tree:!0,modifies:!0},params:[{name:"field",type:"field"},{name:"sort",type:"compare"},{name:"method",type:"enum",default:"tidy",values:["tidy","cluster"]},{name:"size",type:"number",array:!0,length:2},{name:"nodeSize",type:"number",array:!0,length:2},{name:"separation",type:"boolean",default:!0},{name:"as",type:"string",array:!0,length:BS.length,default:BS}]},ct(US,TS,{layout(e){const t=e||"tidy"
if(at(LS,t))return LS[t]()
oe("Unrecognized Tree layout method: "+t)},params:["size","nodeSize"],fields:BS}),qS.Definition={type:"TreeLinks",metadata:{tree:!0,generates:!0,changes:!0},params:[]},ct(qS,vs,{transform(e,t){const n=this.value,r=t.source&&t.source.root,i=t.fork(t.NO_SOURCE),o={}
return r||oe("TreeLinks transform requires a tree data source."),t.changed(t.ADD_REM)?(i.rem=n,t.visit(t.SOURCE,(e=>o[La(e)]=1)),r.each((e=>{const t=e.data,n=e.parent&&e.parent.data
n&&o[La(t)]&&o[La(n)]&&i.add.push(Ua({source:n,target:t}))})),this.value=i.add):t.changed(t.MOD)&&(t.visit(t.MOD,(e=>o[La(e)]=1)),n.forEach((e=>{(o[La(e.source)]||o[La(e.target)])&&i.mod.push(e)}))),i}})
const ZS={binary:function(e,t,n,r,i){var o,a,s=e.children,l=s.length,u=new Array(l+1)
for(u[0]=a=o=0;o<l;++o)u[o+1]=a+=s[o].value
!function e(t,n,r,i,o,a,l){if(t>=n-1){var c=s[t]
return c.x0=i,c.y0=o,c.x1=a,void(c.y1=l)}for(var f=u[t],d=r/2+f,h=t+1,p=n-1;h<p;){var g=h+p>>>1
u[g]<d?h=g+1:p=g}d-u[h-1]<u[h]-d&&t+1<h&&--h
var m=u[h]-f,y=r-m
if(a-i>l-o){var v=r?(i*y+a*m)/r:a
e(t,h,m,i,o,v,l),e(h,n,y,v,o,a,l)}else{var b=r?(o*y+l*m)/r:l
e(t,h,m,i,o,a,b),e(h,n,y,i,b,a,l)}}(0,l,e.value,t,n,r,i)},dice:aS,slice:kS,slicedice:function(e,t,n,r,i){(1&e.depth?kS:aS)(e,t,n,r,i)},squarify:SS,resquarify:DS},WS=["x0","y0","x1","y1","depth","children"]
function VS(e){TS.call(this,e)}VS.Definition={type:"Treemap",metadata:{tree:!0,modifies:!0},params:[{name:"field",type:"field"},{name:"sort",type:"compare"},{name:"method",type:"enum",default:"squarify",values:["squarify","resquarify","binary","dice","slice","slicedice"]},{name:"padding",type:"number",default:0},{name:"paddingInner",type:"number",default:0},{name:"paddingOuter",type:"number",default:0},{name:"paddingTop",type:"number",default:0},{name:"paddingRight",type:"number",default:0},{name:"paddingBottom",type:"number",default:0},{name:"paddingLeft",type:"number",default:0},{name:"ratio",type:"number",default:1.618033988749895},{name:"round",type:"boolean",default:!1},{name:"size",type:"number",array:!0,length:2},{name:"as",type:"string",array:!0,length:WS.length,default:WS}]},ct(VS,TS,{layout(){const e=function(){var e=SS,t=!1,n=1,r=1,i=[0],o=BA,a=BA,s=BA,l=BA,u=BA
function c(e){return e.x0=e.y0=0,e.x1=n,e.y1=r,e.eachBefore(f),i=[0],t&&e.eachBefore(oS),e}function f(t){var n=i[t.depth],r=t.x0+n,c=t.y0+n,f=t.x1-n,d=t.y1-n
f<r&&(r=f=(r+f)/2),d<c&&(c=d=(c+d)/2),t.x0=r,t.y0=c,t.x1=f,t.y1=d,t.children&&(n=i[t.depth+1]=o(t)/2,r+=u(t)-n,c+=a(t)-n,(f-=s(t)-n)<r&&(r=f=(r+f)/2),(d-=l(t)-n)<c&&(c=d=(c+d)/2),e(t,r,c,f,d))}return c.round=function(e){return arguments.length?(t=!!e,c):t},c.size=function(e){return arguments.length?(n=+e[0],r=+e[1],c):[n,r]},c.tile=function(t){return arguments.length?(e=LA(t),c):e},c.padding=function(e){return arguments.length?c.paddingInner(e).paddingOuter(e):c.paddingInner()},c.paddingInner=function(e){return arguments.length?(o="function"==typeof e?e:UA(+e),c):o},c.paddingOuter=function(e){return arguments.length?c.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):c.paddingTop()},c.paddingTop=function(e){return arguments.length?(a="function"==typeof e?e:UA(+e),c):a},c.paddingRight=function(e){return arguments.length?(s="function"==typeof e?e:UA(+e),c):s},c.paddingBottom=function(e){return arguments.length?(l="function"==typeof e?e:UA(+e),c):l},c.paddingLeft=function(e){return arguments.length?(u="function"==typeof e?e:UA(+e),c):u},c}()
return e.ratio=t=>{const n=e.tile()
n.ratio&&e.tile(n.ratio(t))},e.method=t=>{at(ZS,t)?e.tile(ZS[t]):oe("Unrecognized Treemap layout method: "+t)},e},params:["method","ratio","size","round","padding","paddingInner","paddingOuter","paddingTop","paddingRight","paddingBottom","paddingLeft"],fields:WS})
const HS=4278190080
function GS(e,t,n){return new Uint32Array(e.getImageData(0,0,t,n).data.buffer)}function YS(e,t,n){if(!t.length)return
const r=t[0].mark.marktype
"group"===r?t.forEach((t=>{t.items.forEach((t=>YS(e,t.items,n)))})):Cv[r].draw(e,{items:n?t.map(XS):t})}function XS(e){const t=Za(e,{})
return t.stroke&&0!==t.strokeOpacity||t.fill&&0!==t.fillOpacity?{...t,strokeOpacity:1,stroke:"#000",fillOpacity:0}:t}const JS=31,KS=new Uint32Array(33),QS=new Uint32Array(33)
QS[0]=0,KS[0]=~QS[0]
for(let p2=1;p2<=32;++p2)QS[p2]=QS[p2-1]<<1|1,KS[p2]=~QS[p2]
function eD(e,t,n,r,i,o){let a=n/2
return e-a<0||e+a>i||t-(a=r/2)<0||t+a>o}function tD(e,t,n,r,i,o,a,s){const l=i*o/(2*r),u=e(t-l),c=e(t+l),f=e(n-(o/=2)),d=e(n+o)
return a.outOfBounds(u,f,c,d)||a.getRange(u,f,c,d)||s&&s.getRange(u,f,c,d)}const nD=[-1,-1,1,1],rD=[-1,1,-1,1],iD=["right","center","left"],oD=["bottom","middle","top"]
function aD(e,t,n,r,i,o,a,s,l,u,c,f){return!(i.outOfBounds(e,n,t,r)||(f&&o||i).getRange(e,n,t,r))}const sD={"top-left":0,top:1,"top-right":2,left:4,middle:5,right:6,"bottom-left":8,bottom:9,"bottom-right":10},lD={naive:function(e,t,n,r){const i=e.width,o=e.height
return function(e){const t=e.datum.datum.items[r].items,n=t.length,a=e.datum.fontSize,s=uv.width(e.datum,e.datum.text)
let l,u,c,f,d,h,p,g=0
for(let r=0;r<n;++r)l=t[r].x,c=t[r].y,u=void 0===t[r].x2?l:t[r].x2,f=void 0===t[r].y2?c:t[r].y2,d=(l+u)/2,h=(c+f)/2,p=Math.abs(u-l+f-c),p>=g&&(g=p,e.x=d,e.y=h)
return d=s/2,h=a/2,l=e.x-d,u=e.x+d,c=e.y-h,f=e.y+h,e.align="center",l<0&&u<=i?e.align="left":0<=l&&i<u&&(e.align="right"),e.baseline="middle",c<0&&f<=o?e.baseline="top":0<=c&&o<f&&(e.baseline="bottom"),!0}},"reduced-search":function(e,t,n,r){const i=e.width,o=e.height,a=t[0],s=t[1]
function l(t,n,r,l,u){const c=e.invert(t),f=e.invert(n)
let d,h=r,p=o
if(!eD(c,f,l,u,i,o)&&!tD(e,c,f,u,l,h,a,s)&&!tD(e,c,f,u,l,u,a,null)){for(;p-h>=1;)d=(h+p)/2,tD(e,c,f,u,l,d,a,s)?p=d:h=d
if(h>r)return[c,f,h,!0]}}return function(t){const s=t.datum.datum.items[r].items,u=s.length,c=t.datum.fontSize,f=uv.width(t.datum,t.datum.text)
let d,h,p,g,m,y,v,b,x,_,w,O,k,E,A,S,D,C=n?c:0,M=!1,j=!1,F=0
for(let r=0;r<u;++r){for(d=s[r].x,p=s[r].y,h=void 0===s[r].x2?d:s[r].x2,g=void 0===s[r].y2?p:s[r].y2,d>h&&(D=d,d=h,h=D),p>g&&(D=p,p=g,g=D),x=e(d),w=e(h),_=~~((x+w)/2),O=e(p),E=e(g),k=~~((O+E)/2),v=_;v>=x;--v)for(b=k;b>=O;--b)S=l(v,b,C,f,c),S&&([t.x,t.y,C,M]=S)
for(v=_;v<=w;++v)for(b=k;b<=E;++b)S=l(v,b,C,f,c),S&&([t.x,t.y,C,M]=S)
M||n||(A=Math.abs(h-d+g-p),m=(d+h)/2,y=(p+g)/2,A>=F&&!eD(m,y,f,c,i,o)&&!tD(e,m,y,c,f,c,a,null)&&(F=A,t.x=m,t.y=y,j=!0))}return!(!M&&!j||(m=f/2,y=c/2,a.setRange(e(t.x-m),e(t.y-y),e(t.x+m),e(t.y+y)),t.align="center",t.baseline="middle",0))}},floodfill:function(e,t,n,r){const i=e.width,o=e.height,a=t[0],s=t[1],l=e.bitmap()
return function(t){const u=t.datum.datum.items[r].items,c=u.length,f=t.datum.fontSize,d=uv.width(t.datum,t.datum.text),h=[]
let p,g,m,y,v,b,x,_,w,O,k,E,A=n?f:0,S=!1,D=!1,C=0
for(let r=0;r<c;++r){for(p=u[r].x,m=u[r].y,g=void 0===u[r].x2?p:u[r].x2,y=void 0===u[r].y2?m:u[r].y2,h.push([e((p+g)/2),e((m+y)/2)]);h.length;)if([x,_]=h.pop(),!(a.get(x,_)||s.get(x,_)||l.get(x,_))){l.set(x,_)
for(let e=0;e<4;++e)v=x+nD[e],b=_+rD[e],l.outOfBounds(v,b,v,b)||h.push([v,b])
if(v=e.invert(x),b=e.invert(_),w=A,O=o,!eD(v,b,d,f,i,o)&&!tD(e,v,b,f,d,w,a,s)&&!tD(e,v,b,f,d,f,a,null)){for(;O-w>=1;)k=(w+O)/2,tD(e,v,b,f,d,k,a,s)?O=k:w=k
w>A&&(t.x=v,t.y=b,A=w,S=!0)}}S||n||(E=Math.abs(g-p+y-m),v=(p+g)/2,b=(m+y)/2,E>=C&&!eD(v,b,d,f,i,o)&&!tD(e,v,b,f,d,f,a,null)&&(C=E,t.x=v,t.y=b,D=!0))}return!(!S&&!D||(v=d/2,b=f/2,a.setRange(e(t.x-v),e(t.y-b),e(t.x+v),e(t.y+b)),t.align="center",t.baseline="middle",0))}}}
const uD=["x","y","opacity","align","baseline"],cD=["top-left","left","bottom-left","top","bottom","top-right","right","bottom-right"]
function fD(e){vs.call(this,null,e)}function dD(e,t){var n,r,i,o,a,s,l=[],u=function(e){return e(o)}
if(null==t)l.push(e)
else for(n={},r=0,i=e.length;r<i;++r)o=e[r],(s=n[a=t.map(u)])||(n[a]=s=[],s.dims=a,l.push(s)),s.push(o)
return l}function hD(e){vs.call(this,null,e)}fD.Definition={type:"Label",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2,required:!0},{name:"sort",type:"compare"},{name:"anchor",type:"string",array:!0,default:cD},{name:"offset",type:"number",array:!0,default:[1]},{name:"padding",type:"number",default:0,null:!0},{name:"lineAnchor",type:"string",values:["start","end"],default:"end"},{name:"markIndex",type:"number",default:0},{name:"avoidBaseMark",type:"boolean",default:!0},{name:"avoidMarks",type:"data",array:!0},{name:"method",type:"string",default:"naive"},{name:"as",type:"string",array:!0,length:uD.length,default:uD}]},ct(fD,vs,{transform(e,t){const n=e.modified()
if(!(n||t.changed(t.ADD_REM)||function(n){const r=e.sort
return Ge(r)&&t.modified(r.fields)}()))return
e.size&&2===e.size.length||oe("Size parameter should be specified as a [width, height] array.")
const r=e.as||uD
return function(e,t,n,r,i,o,a,s,l,u,c){if(!e.length)return e
const f=Math.max(r.length,i.length),d=function(e,t){const n=new Float64Array(t),r=e.length
for(let i=0;i<r;++i)n[i]=e[i]||0
for(let i=r;i<t;++i)n[i]=n[r-1]
return n}(r,f),h=function(e,t){const n=new Int8Array(t),r=e.length
for(let i=0;i<r;++i)n[i]|=sD[e[i]]
for(let i=r;i<t;++i)n[i]=n[r-1]
return n}(i,f),p=(x=e[0].datum)&&x.mark&&x.mark.marktype,g="group"===p&&e[0].datum.items[l].marktype,m="area"===g,y=function(e,t,n,r){const i=e=>[e.x,e.x,e.x,e.y,e.y,e.y]
return e?"line"===e||"area"===e?e=>i(e.datum):"line"===t?e=>{const t=e.datum.items[r].items
return i(t.length?t["start"===n?0:t.length-1]:{x:NaN,y:NaN})}:e=>{const t=e.datum.bounds
return[t.x1,(t.x1+t.x2)/2,t.x2,t.y1,(t.y1+t.y2)/2,t.y2]}:i}(p,g,s,l),v=null===u||u===1/0,b=m&&"naive"===c
var x
let _=-1,w=-1
const O=e.map((e=>{const t=v?uv.width(e,e.text):void 0
return _=Math.max(_,t),w=Math.max(w,e.fontSize),{datum:e,opacity:0,x:void 0,y:void 0,align:void 0,baseline:void 0,boundary:y(e),textWidth:t}}))
u=null===u||u===1/0?Math.max(_,w)+Math.max(...r):u
const k=function(e,t,n){const r=Math.max(1,Math.sqrt(e*t/1e6)),i=~~((e+2*n+r)/r),o=~~((t+2*n+r)/r),a=e=>~~((e+n)/r)
return a.invert=e=>e*r-n,a.bitmap=()=>function(e,t){const n=new Uint32Array(~~((e*t+32)/32))
function r(e,t){n[e]|=t}function i(e,t){n[e]&=t}return{array:n,get:(t,r)=>{const i=r*e+t
return n[i>>>5]&1<<(i&JS)},set:(t,n)=>{const i=n*e+t
r(i>>>5,1<<(i&JS))},clear:(t,n)=>{const r=n*e+t
i(r>>>5,~(1<<(r&JS)))},getRange:(t,r,i,o)=>{let a,s,l,u,c=o
for(;c>=r;--c)if(a=c*e+t,s=c*e+i,l=a>>>5,u=s>>>5,l===u){if(n[l]&KS[a&JS]&QS[1+(s&JS)])return!0}else{if(n[l]&KS[a&JS])return!0
if(n[u]&QS[1+(s&JS)])return!0
for(let e=l+1;e<u;++e)if(n[e])return!0}return!1},setRange:(t,n,i,o)=>{let a,s,l,u,c
for(;n<=o;++n)if(a=n*e+t,s=n*e+i,l=a>>>5,u=s>>>5,l===u)r(l,KS[a&JS]&QS[1+(s&JS)])
else for(r(l,KS[a&JS]),r(u,QS[1+(s&JS)]),c=l+1;c<u;++c)r(c,4294967295)},clearRange:(t,n,r,o)=>{let a,s,l,u,c
for(;n<=o;++n)if(a=n*e+t,s=n*e+r,l=a>>>5,u=s>>>5,l===u)i(l,QS[a&JS]|KS[1+(s&JS)])
else for(i(l,QS[a&JS]),i(u,KS[1+(s&JS)]),c=l+1;c<u;++c)i(c,0)},outOfBounds:(n,r,i,o)=>n<0||r<0||o>=t||i>=e}}(i,o),a.ratio=r,a.padding=n,a.width=e,a.height=t,a}(t[0],t[1],u)
let E
if(!b){n&&O.sort(((e,t)=>n(e.datum,t.datum)))
let t=!1
for(let e=0;e<h.length&&!t;++e)t=5===h[e]||d[e]<0
const r=(p&&a||m)&&e.map((e=>e.datum))
E=o.length||r?function(e,t,n,r,i){const o=e.width,a=e.height,s=r||i,l=hf(o,a).getContext("2d"),u=hf(o,a).getContext("2d"),c=s&&hf(o,a).getContext("2d")
n.forEach((e=>YS(l,e,!1))),YS(u,t,!1),s&&YS(c,t,!0)
const f=GS(l,o,a),d=GS(u,o,a),h=s&&GS(c,o,a),p=e.bitmap(),g=s&&e.bitmap()
let m,y,v,b,x,_,w,O
for(y=0;y<a;++y)for(m=0;m<o;++m)x=y*o+m,_=f[x]&HS,O=d[x]&HS,w=s&&h[x]&HS,(_||w||O)&&(v=e(m),b=e(y),i||!_&&!O||p.set(v,b),s&&(_||w)&&g.set(v,b))
return[p,g]}(k,r||[],o,t,m):function(e,t){const n=e.bitmap()
return(t||[]).forEach((t=>n.set(e(t.boundary[0]),e(t.boundary[3])))),[n,void 0]}(k,a&&O)}const A=m?lD[c](k,E,a,l):function(e,t,n,r){const i=e.width,o=e.height,a=t[0],s=t[1],l=r.length
return function(t){var u
const c=t.boundary,f=t.datum.fontSize
if(c[2]<0||c[5]<0||c[0]>i||c[3]>o)return!1
let d,h,p,g,m,y,v,b,x,_,w,O,k,E,A,S=null!==(u=t.textWidth)&&void 0!==u?u:0
for(let i=0;i<l;++i){if(d=(3&n[i])-1,h=(n[i]>>>2&3)-1,p=0===d&&0===h||r[i]<0,g=d&&h?Math.SQRT1_2:1,m=r[i]<0?-1:1,y=c[1+d]+r[i]*d*g,w=c[4+h]+m*f*h/2+r[i]*h*g,b=w-f/2,x=w+f/2,O=e(y),E=e(b),A=e(x),!S){if(!aD(O,O,E,A,a,s,0,0,0,0,0,p))continue
S=uv.width(t.datum,t.datum.text)}if(_=y+m*S*d/2,y=_-S/2,v=_+S/2,O=e(y),k=e(v),aD(O,k,E,A,a,s,0,0,0,0,0,p))return t.x=d?d*m<0?v:y:_,t.y=h?h*m<0?x:b:w,t.align=iD[d*m+1],t.baseline=oD[h*m+1],a.setRange(O,E,k,A),!0}return!1}}(k,E,h,d)
return O.forEach((e=>e.opacity=+A(e))),O}(t.materialize(t.SOURCE).source||[],e.size,e.sort,Ve(null==e.offset?1:e.offset),Ve(e.anchor||cD),e.avoidMarks||[],!1!==e.avoidBaseMark,e.lineAnchor||"end",e.markIndex||0,void 0===e.padding?0:e.padding,e.method||"naive").forEach((e=>{const t=e.datum
t[r[0]]=e.x,t[r[1]]=e.y,t[r[2]]=e.opacity,t[r[3]]=e.align,t[r[4]]=e.baseline})),t.reflow(n).modifies(r)}}),hD.Definition={type:"Loess",metadata:{generates:!0},params:[{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"groupby",type:"field",array:!0},{name:"bandwidth",type:"number",default:.3},{name:"as",type:"string",array:!0}]},ct(hD,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE|t.NO_FIELDS)
if(!this.value||t.changed()||e.modified()){const r=dD(t.materialize(t.SOURCE).source,e.groupby),i=(e.groupby||[]).map(ee),o=i.length,a=e.as||[ee(e.x),ee(e.y)],s=[]
r.forEach((t=>{xl(t,e.x,e.y,e.bandwidth||.3).forEach((e=>{const n={}
for(let r=0;r<o;++r)n[i[r]]=t.dims[r]
n[a[0]]=e[0],n[a[1]]=e[1],s.push(Ua(n))}))})),this.value&&(n.rem=this.value),this.value=n.add=n.source=s}return n}})
const pD={linear:hl,log:pl,exp:gl,pow:ml,quad:yl,poly:vl}
function gD(e){vs.call(this,null,e)}gD.Definition={type:"Regression",metadata:{generates:!0},params:[{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"groupby",type:"field",array:!0},{name:"method",type:"string",default:"linear",values:Object.keys(pD)},{name:"order",type:"number",default:3},{name:"extent",type:"number",array:!0,length:2},{name:"params",type:"boolean",default:!1},{name:"as",type:"string",array:!0}]},ct(gD,vs,{transform(e,t){const n=t.fork(t.NO_SOURCE|t.NO_FIELDS)
if(!this.value||t.changed()||e.modified()){const r=dD(t.materialize(t.SOURCE).source,e.groupby),i=(e.groupby||[]).map(ee),o=e.method||"linear",a=e.order||3,s=((e,t)=>"poly"===e?t:"quad"===e?2:1)(o,a),l=e.as||[ee(e.x),ee(e.y)],u=pD[o],c=[]
let f=e.extent
at(pD,o)||oe("Invalid regression method: "+o),null!=f&&"log"===o&&f[0]<=0&&(t.dataflow.warn("Ignoring extent with values <= 0 for log regression."),f=null),r.forEach((n=>{if(n.length<=s)return void t.dataflow.warn("Skipping regression with more parameters than data points.")
const r=u(n,e.x,e.y,a)
if(e.params)return void c.push(Ua({keys:n.dims,coef:r.coef,rSquared:r.rSquared}))
const d=f||rt(n,e.x),h=e=>{const t={}
for(let r=0;r<i.length;++r)t[i[r]]=n.dims[r]
t[l[0]]=e[0],t[l[1]]=e[1],c.push(Ua(t))}
"linear"===o?d.forEach((e=>h([e,r.predict(e)]))):kl(r.predict,d,25,200).forEach(h)})),this.value&&(n.rem=this.value),this.value=n.add=n.source=c}return n}})
const mD=134217729
function yD(e,t,n,r,i){let o,a,s,l,u=t[0],c=r[0],f=0,d=0
c>u==c>-u?(o=u,u=t[++f]):(o=c,c=r[++d])
let h=0
if(f<e&&d<n)for(c>u==c>-u?(a=u+o,s=o-(a-u),u=t[++f]):(a=c+o,s=o-(a-c),c=r[++d]),o=a,0!==s&&(i[h++]=s);f<e&&d<n;)c>u==c>-u?(a=o+u,l=a-o,s=o-(a-l)+(u-l),u=t[++f]):(a=o+c,l=a-o,s=o-(a-l)+(c-l),c=r[++d]),o=a,0!==s&&(i[h++]=s)
for(;f<e;)a=o+u,l=a-o,s=o-(a-l)+(u-l),u=t[++f],o=a,0!==s&&(i[h++]=s)
for(;d<n;)a=o+c,l=a-o,s=o-(a-l)+(c-l),c=r[++d],o=a,0!==s&&(i[h++]=s)
return 0===o&&0!==h||(i[h++]=o),h}function vD(e){return new Float64Array(e)}const bD=vD(4),xD=vD(8),_D=vD(12),wD=vD(16),OD=vD(4)
function kD(e,t,n,r,i,o){const a=(t-o)*(n-i),s=(e-i)*(r-o),l=a-s
if(0===a||0===s||a>0!=s>0)return l
const u=Math.abs(a+s)
return Math.abs(l)>=33306690738754716e-32*u?l:-function(e,t,n,r,i,o,a){let s,l,u,c,f,d,h,p,g,m,y,v,b,x,_,w,O,k
const E=e-i,A=n-i,S=t-o,D=r-o
x=E*D,d=mD*E,h=d-(d-E),p=E-h,d=mD*D,g=d-(d-D),m=D-g,_=p*m-(x-h*g-p*g-h*m),w=S*A,d=mD*S,h=d-(d-S),p=S-h,d=mD*A,g=d-(d-A),m=A-g,O=p*m-(w-h*g-p*g-h*m),y=_-O,f=_-y,bD[0]=_-(y+f)+(f-O),v=x+y,f=v-x,b=x-(v-f)+(y-f),y=b-w,f=b-y,bD[1]=b-(y+f)+(f-w),k=v+y,f=k-v,bD[2]=v-(k-f)+(y-f),bD[3]=k
let C=function(e,t){let n=t[0]
for(let r=1;r<4;r++)n+=t[r]
return n}(0,bD),M=22204460492503146e-32*a
if(C>=M||-C>=M)return C
if(f=e-E,s=e-(E+f)+(f-i),f=n-A,u=n-(A+f)+(f-i),f=t-S,l=t-(S+f)+(f-o),f=r-D,c=r-(D+f)+(f-o),0===s&&0===l&&0===u&&0===c)return C
if(M=11093356479670487e-47*a+33306690738754706e-32*Math.abs(C),C+=E*c+D*s-(S*u+A*l),C>=M||-C>=M)return C
x=s*D,d=mD*s,h=d-(d-s),p=s-h,d=mD*D,g=d-(d-D),m=D-g,_=p*m-(x-h*g-p*g-h*m),w=l*A,d=mD*l,h=d-(d-l),p=l-h,d=mD*A,g=d-(d-A),m=A-g,O=p*m-(w-h*g-p*g-h*m),y=_-O,f=_-y,OD[0]=_-(y+f)+(f-O),v=x+y,f=v-x,b=x-(v-f)+(y-f),y=b-w,f=b-y,OD[1]=b-(y+f)+(f-w),k=v+y,f=k-v,OD[2]=v-(k-f)+(y-f),OD[3]=k
const j=yD(4,bD,4,OD,xD)
x=E*c,d=mD*E,h=d-(d-E),p=E-h,d=mD*c,g=d-(d-c),m=c-g,_=p*m-(x-h*g-p*g-h*m),w=S*u,d=mD*S,h=d-(d-S),p=S-h,d=mD*u,g=d-(d-u),m=u-g,O=p*m-(w-h*g-p*g-h*m),y=_-O,f=_-y,OD[0]=_-(y+f)+(f-O),v=x+y,f=v-x,b=x-(v-f)+(y-f),y=b-w,f=b-y,OD[1]=b-(y+f)+(f-w),k=v+y,f=k-v,OD[2]=v-(k-f)+(y-f),OD[3]=k
const F=yD(j,xD,4,OD,_D)
x=s*c,d=mD*s,h=d-(d-s),p=s-h,d=mD*c,g=d-(d-c),m=c-g,_=p*m-(x-h*g-p*g-h*m),w=l*u,d=mD*l,h=d-(d-l),p=l-h,d=mD*u,g=d-(d-u),m=u-g,O=p*m-(w-h*g-p*g-h*m),y=_-O,f=_-y,OD[0]=_-(y+f)+(f-O),v=x+y,f=v-x,b=x-(v-f)+(y-f),y=b-w,f=b-y,OD[1]=b-(y+f)+(f-w),k=v+y,f=k-v,OD[2]=v-(k-f)+(y-f),OD[3]=k
const T=yD(F,_D,4,OD,wD)
return wD[T-1]}(e,t,n,r,i,o,u)}vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(8),vD(8),vD(8),vD(4),vD(8),vD(8),vD(8),vD(12),vD(192),vD(192),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(8),vD(8),vD(8),vD(8),vD(8),vD(8),vD(8),vD(8),vD(8),vD(4),vD(4),vD(4),vD(8),vD(16),vD(16),vD(16),vD(32),vD(32),vD(48),vD(64),vD(1152),vD(1152),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(4),vD(24),vD(24),vD(24),vD(24),vD(24),vD(24),vD(24),vD(24),vD(24),vD(24),vD(1152),vD(1152),vD(1152),vD(1152),vD(1152),vD(2304),vD(2304),vD(3456),vD(5760),vD(8),vD(8),vD(8),vD(16),vD(24),vD(48),vD(48),vD(96),vD(192),vD(384),vD(384),vD(384),vD(768),vD(96),vD(96),vD(96),vD(1152)
const ED=Math.pow(2,-52),AD=new Uint32Array(512)
class SD{static from(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:TD,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ND
const r=e.length,i=new Float64Array(2*r)
for(let o=0;o<r;o++){const r=e[o]
i[2*o]=t(r),i[2*o+1]=n(r)}return new SD(i)}constructor(e){const t=e.length>>1
if(t>0&&"number"!=typeof e[0])throw new Error("Expected coords to contain numbers.")
this.coords=e
const n=Math.max(2*t-5,0)
this._triangles=new Uint32Array(3*n),this._halfedges=new Int32Array(3*n),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:n,_hullTri:r,_hullHash:i}=this,o=e.length>>1
let a=1/0,s=1/0,l=-1/0,u=-1/0
for(let E=0;E<o;E++){const t=e[2*E],n=e[2*E+1]
t<a&&(a=t),n<s&&(s=n),t>l&&(l=t),n>u&&(u=n),this._ids[E]=E}const c=(a+l)/2,f=(s+u)/2
let d,h,p,g=1/0
for(let E=0;E<o;E++){const t=DD(c,f,e[2*E],e[2*E+1])
t<g&&(d=E,g=t)}const m=e[2*d],y=e[2*d+1]
g=1/0
for(let E=0;E<o;E++){if(E===d)continue
const t=DD(m,y,e[2*E],e[2*E+1])
t<g&&t>0&&(h=E,g=t)}let v=e[2*h],b=e[2*h+1],x=1/0
for(let E=0;E<o;E++){if(E===d||E===h)continue
const t=MD(m,y,v,b,e[2*E],e[2*E+1])
t<x&&(p=E,x=t)}let _=e[2*p],w=e[2*p+1]
if(x===1/0){for(let r=0;r<o;r++)this._dists[r]=e[2*r]-e[0]||e[2*r+1]-e[1]
jD(this._ids,this._dists,0,o-1)
const t=new Uint32Array(o)
let n=0
for(let e=0,r=-1/0;e<o;e++){const i=this._ids[e]
this._dists[i]>r&&(t[n++]=i,r=this._dists[i])}return this.hull=t.subarray(0,n),this.triangles=new Uint32Array(0),void(this.halfedges=new Uint32Array(0))}if(kD(m,y,v,b,_,w)<0){const e=h,t=v,n=b
h=p,v=_,b=w,p=e,_=t,w=n}const O=function(e,t,n,r,i,o){const a=n-e,s=r-t,l=i-e,u=o-t,c=a*a+s*s,f=l*l+u*u,d=.5/(a*u-s*l)
return{x:e+(u*c-s*f)*d,y:t+(a*f-l*c)*d}}(m,y,v,b,_,w)
this._cx=O.x,this._cy=O.y
for(let E=0;E<o;E++)this._dists[E]=DD(e[2*E],e[2*E+1],O.x,O.y)
jD(this._ids,this._dists,0,o-1),this._hullStart=d
let k=3
n[d]=t[p]=h,n[h]=t[d]=p,n[p]=t[h]=d,r[d]=0,r[h]=1,r[p]=2,i.fill(-1),i[this._hashKey(m,y)]=d,i[this._hashKey(v,b)]=h,i[this._hashKey(_,w)]=p,this.trianglesLen=0,this._addTriangle(d,h,p,-1,-1,-1)
for(let E,A,S=0;S<this._ids.length;S++){const o=this._ids[S],a=e[2*o],s=e[2*o+1]
if(S>0&&Math.abs(a-E)<=ED&&Math.abs(s-A)<=ED)continue
if(E=a,A=s,o===d||o===h||o===p)continue
let l=0
for(let e=0,t=this._hashKey(a,s);e<this._hashSize&&(l=i[(t+e)%this._hashSize],-1===l||l===n[l]);e++);l=t[l]
let u,c=l
for(;u=n[c],kD(a,s,e[2*c],e[2*c+1],e[2*u],e[2*u+1])>=0;)if(c=u,c===l){c=-1
break}if(-1===c)continue
let f=this._addTriangle(c,o,n[c],-1,-1,r[c])
r[o]=this._legalize(f+2),r[c]=f,k++
let g=n[c]
for(;u=n[g],kD(a,s,e[2*g],e[2*g+1],e[2*u],e[2*u+1])<0;)f=this._addTriangle(g,o,u,r[o],-1,r[g]),r[o]=this._legalize(f+2),n[g]=g,k--,g=u
if(c===l)for(;u=t[c],kD(a,s,e[2*u],e[2*u+1],e[2*c],e[2*c+1])<0;)f=this._addTriangle(u,o,c,-1,r[c],r[u]),this._legalize(f+2),r[u]=f,n[c]=c,k--,c=u
this._hullStart=t[o]=c,n[c]=t[g]=o,n[o]=g,i[this._hashKey(a,s)]=o,i[this._hashKey(e[2*c],e[2*c+1])]=c}this.hull=new Uint32Array(k)
for(let E=0,A=this._hullStart;E<k;E++)this.hull[E]=A,A=n[A]
this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(function(e,t){const n=e/(Math.abs(e)+Math.abs(t))
return(t>0?3-n:1+n)/4}(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:n,coords:r}=this
let i=0,o=0
for(;;){const a=n[e],s=e-e%3
if(o=s+(e+2)%3,-1===a){if(0===i)break
e=AD[--i]
continue}const l=a-a%3,u=s+(e+1)%3,c=l+(a+2)%3,f=t[o],d=t[e],h=t[u],p=t[c]
if(CD(r[2*f],r[2*f+1],r[2*d],r[2*d+1],r[2*h],r[2*h+1],r[2*p],r[2*p+1])){t[e]=p,t[a]=f
const r=n[c]
if(-1===r){let t=this._hullStart
do{if(this._hullTri[t]===c){this._hullTri[t]=e
break}t=this._hullPrev[t]}while(t!==this._hullStart)}this._link(e,r),this._link(a,n[o]),this._link(o,c)
const s=l+(a+1)%3
i<AD.length&&(AD[i++]=s)}else{if(0===i)break
e=AD[--i]}}return o}_link(e,t){this._halfedges[e]=t,-1!==t&&(this._halfedges[t]=e)}_addTriangle(e,t,n,r,i,o){const a=this.trianglesLen
return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=n,this._link(a,r),this._link(a+1,i),this._link(a+2,o),this.trianglesLen+=3,a}}function DD(e,t,n,r){const i=e-n,o=t-r
return i*i+o*o}function CD(e,t,n,r,i,o,a,s){const l=e-a,u=t-s,c=n-a,f=r-s,d=i-a,h=o-s,p=c*c+f*f,g=d*d+h*h
return l*(f*g-p*h)-u*(c*g-p*d)+(l*l+u*u)*(c*h-f*d)<0}function MD(e,t,n,r,i,o){const a=n-e,s=r-t,l=i-e,u=o-t,c=a*a+s*s,f=l*l+u*u,d=.5/(a*u-s*l),h=(u*c-s*f)*d,p=(a*f-l*c)*d
return h*h+p*p}function jD(e,t,n,r){if(r-n<=20)for(let i=n+1;i<=r;i++){const r=e[i],o=t[r]
let a=i-1
for(;a>=n&&t[e[a]]>o;)e[a+1]=e[a--]
e[a+1]=r}else{let i=n+1,o=r
FD(e,n+r>>1,i),t[e[n]]>t[e[r]]&&FD(e,n,r),t[e[i]]>t[e[r]]&&FD(e,i,r),t[e[n]]>t[e[i]]&&FD(e,n,i)
const a=e[i],s=t[a]
for(;;){do{i++}while(t[e[i]]<s)
do{o--}while(t[e[o]]>s)
if(o<i)break
FD(e,i,o)}e[n+1]=e[o],e[o]=a,r-i+1>=o-n?(jD(e,t,i,r),jD(e,t,n,o-1)):(jD(e,t,n,o-1),jD(e,t,i,r))}}function FD(e,t,n){const r=e[t]
e[t]=e[n],e[n]=r}function TD(e){return e[0]}function ND(e){return e[1]}const $D=1e-6
class PD{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,n){const r=(e=+e)+(n=+n),i=t=+t
if(n<0)throw new Error("negative radius")
null===this._x1?this._+=`M${r},${i}`:(Math.abs(this._x1-r)>$D||Math.abs(this._y1-i)>$D)&&(this._+="L"+r+","+i),n&&(this._+=`A${n},${n},0,1,1,${e-n},${t}A${n},${n},0,1,1,${this._x1=r},${this._y1=i}`)}rect(e,t,n,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+n}v${+r}h${-n}Z`}value(){return this._||null}}class zD{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class ID{constructor(e){let[t,n,r,i]=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,0,960,500]
if(!((r=+r)>=(t=+t)&&(i=+i)>=(n=+n)))throw new Error("invalid bounds")
this.delaunay=e,this._circumcenters=new Float64Array(2*e.points.length),this.vectors=new Float64Array(2*e.points.length),this.xmax=r,this.xmin=t,this.ymax=i,this.ymin=n,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:n},vectors:r}=this,i=this.circumcenters=this._circumcenters.subarray(0,n.length/3*2)
for(let d,h,p=0,g=0,m=n.length;p<m;p+=3,g+=2){const t=2*n[p],r=2*n[p+1],o=2*n[p+2],a=e[t],s=e[t+1],l=e[r],u=e[r+1],c=e[o],f=e[o+1],m=l-a,y=u-s,v=c-a,b=f-s,x=2*(m*b-y*v)
if(Math.abs(x)<1e-9){let t=1e9
const r=2*n[0]
t*=Math.sign((e[r]-a)*b-(e[r+1]-s)*v),d=(a+c)/2-t*b,h=(s+f)/2+t*v}else{const e=1/x,t=m*m+y*y,n=v*v+b*b
d=a+(b*t-y*n)*e,h=s+(m*n-v*t)*e}i[g]=d,i[g+1]=h}let o,a,s,l=t[t.length-1],u=4*l,c=e[2*l],f=e[2*l+1]
r.fill(0)
for(let d=0;d<t.length;++d)l=t[d],o=u,a=c,s=f,u=4*l,c=e[2*l],f=e[2*l+1],r[o+2]=r[u]=s-f,r[o+3]=r[u+1]=c-a}render(e){const t=null==e?e=new PD:void 0,{delaunay:{halfedges:n,inedges:r,hull:i},circumcenters:o,vectors:a}=this
if(i.length<=1)return null
for(let u=0,c=n.length;u<c;++u){const t=n[u]
if(t<u)continue
const r=2*Math.floor(u/3),i=2*Math.floor(t/3),a=o[r],s=o[r+1],l=o[i],c=o[i+1]
this._renderSegment(a,s,l,c,e)}let s,l=i[i.length-1]
for(let u=0;u<i.length;++u){s=l,l=i[u]
const t=2*Math.floor(r[l]/3),n=o[t],c=o[t+1],f=4*s,d=this._project(n,c,a[f+2],a[f+3])
d&&this._renderSegment(n,c,d[0],d[1],e)}return t&&t.value()}renderBounds(e){const t=null==e?e=new PD:void 0
return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const n=null==t?t=new PD:void 0,r=this._clip(e)
if(null===r||!r.length)return
t.moveTo(r[0],r[1])
let i=r.length
for(;r[0]===r[i-2]&&r[1]===r[i-1]&&i>1;)i-=2
for(let o=2;o<i;o+=2)r[o]===r[o-2]&&r[o+1]===r[o-1]||t.lineTo(r[o],r[o+1])
return t.closePath(),n&&n.value()}*cellPolygons(){const{delaunay:{points:e}}=this
for(let t=0,n=e.length/2;t<n;++t){const e=this.cellPolygon(t)
e&&(e.index=t,yield e)}}cellPolygon(e){const t=new zD
return this.renderCell(e,t),t.value()}_renderSegment(e,t,n,r,i){let o
const a=this._regioncode(e,t),s=this._regioncode(n,r)
0===a&&0===s?(i.moveTo(e,t),i.lineTo(n,r)):(o=this._clipSegment(e,t,n,r,a,s))&&(i.moveTo(o[0],o[1]),i.lineTo(o[2],o[3]))}contains(e,t,n){return(t=+t)==t&&(n=+n)==n&&this.delaunay._step(e,t,n)===e}*neighbors(e){const t=this._clip(e)
if(t)for(const n of this.delaunay.neighbors(e)){const e=this._clip(n)
if(e)e:for(let r=0,i=t.length;r<i;r+=2)for(let o=0,a=e.length;o<a;o+=2)if(t[r]==e[o]&&t[r+1]==e[o+1]&&t[(r+2)%i]==e[(o+a-2)%a]&&t[(r+3)%i]==e[(o+a-1)%a]){yield n
break e}}}_cell(e){const{circumcenters:t,delaunay:{inedges:n,halfedges:r,triangles:i}}=this,o=n[e]
if(-1===o)return null
const a=[]
let s=o
do{const n=Math.floor(s/3)
if(a.push(t[2*n],t[2*n+1]),s=s%3==2?s-2:s+1,i[s]!==e)break
s=r[s]}while(s!==o&&-1!==s)
return a}_clip(e){if(0===e&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin]
const t=this._cell(e)
if(null===t)return null
const{vectors:n}=this,r=4*e
return n[r]||n[r+1]?this._clipInfinite(e,t,n[r],n[r+1],n[r+2],n[r+3]):this._clipFinite(e,t)}_clipFinite(e,t){const n=t.length
let r,i,o,a,s=null,l=t[n-2],u=t[n-1],c=this._regioncode(l,u),f=0
for(let d=0;d<n;d+=2)if(r=l,i=u,l=t[d],u=t[d+1],o=c,c=this._regioncode(l,u),0===o&&0===c)a=f,f=0,s?s.push(l,u):s=[l,u]
else{let t,n,d,h,p
if(0===o){if(null===(t=this._clipSegment(r,i,l,u,o,c)))continue;[n,d,h,p]=t}else{if(null===(t=this._clipSegment(l,u,r,i,c,o)))continue;[h,p,n,d]=t,a=f,f=this._edgecode(n,d),a&&f&&this._edge(e,a,f,s,s.length),s?s.push(n,d):s=[n,d]}a=f,f=this._edgecode(h,p),a&&f&&this._edge(e,a,f,s,s.length),s?s.push(h,p):s=[h,p]}if(s)a=f,f=this._edgecode(s[0],s[1]),a&&f&&this._edge(e,a,f,s,s.length)
else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin]
return s}_clipSegment(e,t,n,r,i,o){for(;;){if(0===i&&0===o)return[e,t,n,r]
if(i&o)return null
let a,s,l=i||o
8&l?(a=e+(n-e)*(this.ymax-t)/(r-t),s=this.ymax):4&l?(a=e+(n-e)*(this.ymin-t)/(r-t),s=this.ymin):2&l?(s=t+(r-t)*(this.xmax-e)/(n-e),a=this.xmax):(s=t+(r-t)*(this.xmin-e)/(n-e),a=this.xmin),i?(e=a,t=s,i=this._regioncode(e,t)):(n=a,r=s,o=this._regioncode(n,r))}}_clipInfinite(e,t,n,r,i,o){let a,s=Array.from(t)
if((a=this._project(s[0],s[1],n,r))&&s.unshift(a[0],a[1]),(a=this._project(s[s.length-2],s[s.length-1],i,o))&&s.push(a[0],a[1]),s=this._clipFinite(e,s))for(let l,u=0,c=s.length,f=this._edgecode(s[c-2],s[c-1]);u<c;u+=2)l=f,f=this._edgecode(s[u],s[u+1]),l&&f&&(u=this._edge(e,l,f,s,u),c=s.length)
else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(s=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax])
return s}_edge(e,t,n,r,i){for(;t!==n;){let n,o
switch(t){case 5:t=4
continue
case 4:t=6,n=this.xmax,o=this.ymin
break
case 6:t=2
continue
case 2:t=10,n=this.xmax,o=this.ymax
break
case 10:t=8
continue
case 8:t=9,n=this.xmin,o=this.ymax
break
case 9:t=1
continue
case 1:t=5,n=this.xmin,o=this.ymin}r[i]===n&&r[i+1]===o||!this.contains(e,n,o)||(r.splice(i,0,n,o),i+=2)}if(r.length>4)for(let o=0;o<r.length;o+=2){const e=(o+2)%r.length,t=(o+4)%r.length;(r[o]===r[e]&&r[e]===r[t]||r[o+1]===r[e+1]&&r[e+1]===r[t+1])&&(r.splice(e,2),o-=2)}return i}_project(e,t,n,r){let i,o,a,s=1/0
if(r<0){if(t<=this.ymin)return null;(i=(this.ymin-t)/r)<s&&(a=this.ymin,o=e+(s=i)*n)}else if(r>0){if(t>=this.ymax)return null;(i=(this.ymax-t)/r)<s&&(a=this.ymax,o=e+(s=i)*n)}if(n>0){if(e>=this.xmax)return null;(i=(this.xmax-e)/n)<s&&(o=this.xmax,a=t+(s=i)*r)}else if(n<0){if(e<=this.xmin)return null;(i=(this.xmin-e)/n)<s&&(o=this.xmin,a=t+(s=i)*r)}return[o,a]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}}const RD=2*Math.PI,LD=Math.pow
function BD(e){return e[0]}function UD(e){return e[1]}function qD(e,t,n){return[e+Math.sin(e+t)*n,t+Math.cos(e-t)*n]}class ZD{static from(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:BD,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:UD,r=arguments.length>3?arguments[3]:void 0
return new ZD("length"in e?function(e,t,n,r){const i=e.length,o=new Float64Array(2*i)
for(let a=0;a<i;++a){const i=e[a]
o[2*a]=t.call(r,i,a,e),o[2*a+1]=n.call(r,i,a,e)}return o}(e,t,n,r):Float64Array.from(function*(e,t,n,r){let i=0
for(const o of e)yield t.call(r,o,i,e),yield n.call(r,o,i,e),++i}(e,t,n,r)))}constructor(e){this._delaunator=new SD(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points
if(e.hull&&e.hull.length>2&&function(e){const{triangles:t,coords:n}=e
for(let r=0;r<t.length;r+=3){const e=2*t[r],i=2*t[r+1],o=2*t[r+2]
if((n[o]-n[e])*(n[i+1]-n[e+1])-(n[i]-n[e])*(n[o+1]-n[e+1])>1e-10)return!1}return!0}(e)){this.collinear=Int32Array.from({length:t.length/2},((e,t)=>t)).sort(((e,n)=>t[2*e]-t[2*n]||t[2*e+1]-t[2*n+1]))
const e=this.collinear[0],n=this.collinear[this.collinear.length-1],r=[t[2*e],t[2*e+1],t[2*n],t[2*n+1]],i=1e-8*Math.hypot(r[3]-r[1],r[2]-r[0])
for(let o=0,a=t.length/2;o<a;++o){const e=qD(t[2*o],t[2*o+1],i)
t[2*o]=e[0],t[2*o+1]=e[1]}this._delaunator=new SD(t)}else delete this.collinear
const n=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,i=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1)
for(let s=0,l=n.length;s<l;++s){const e=i[s%3==2?s-2:s+1];-1!==n[s]&&-1!==o[e]||(o[e]=s)}for(let s=0,l=r.length;s<l;++s)a[r[s]]=s
r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,2===r.length&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new ID(this,e)}*neighbors(e){const{inedges:t,hull:n,_hullIndex:r,halfedges:i,triangles:o,collinear:a}=this
if(a){const t=a.indexOf(e)
return t>0&&(yield a[t-1]),void(t<a.length-1&&(yield a[t+1]))}const s=t[e]
if(-1===s)return
let l=s,u=-1
do{if(yield u=o[l],l=l%3==2?l-2:l+1,o[l]!==e)return
if(l=i[l],-1===l){const t=n[(r[e]+1)%n.length]
return void(t!==u&&(yield t))}}while(l!==s)}find(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if((e=+e)!=e||(t=+t)!=t)return-1
const r=n
let i
for(;(i=this._step(n,e,t))>=0&&i!==n&&i!==r;)n=i
return i}_step(e,t,n){const{inedges:r,hull:i,_hullIndex:o,halfedges:a,triangles:s,points:l}=this
if(-1===r[e]||!l.length)return(e+1)%(l.length>>1)
let u=e,c=LD(t-l[2*e],2)+LD(n-l[2*e+1],2)
const f=r[e]
let d=f
do{let r=s[d]
const f=LD(t-l[2*r],2)+LD(n-l[2*r+1],2)
if(f<c&&(c=f,u=r),d=d%3==2?d-2:d+1,s[d]!==e)break
if(d=a[d],-1===d){if(d=i[(o[e]+1)%i.length],d!==r&&LD(t-l[2*d],2)+LD(n-l[2*d+1],2)<c)return d
break}}while(d!==f)
return u}render(e){const t=null==e?e=new PD:void 0,{points:n,halfedges:r,triangles:i}=this
for(let o=0,a=r.length;o<a;++o){const t=r[o]
if(t<o)continue
const a=2*i[o],s=2*i[t]
e.moveTo(n[a],n[a+1]),e.lineTo(n[s],n[s+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){void 0!==t||e&&"function"==typeof e.moveTo||(t=e,e=null),t=null==t?2:+t
const n=null==e?e=new PD:void 0,{points:r}=this
for(let i=0,o=r.length;i<o;i+=2){const n=r[i],o=r[i+1]
e.moveTo(n+t,o),e.arc(n,o,t,0,RD)}return n&&n.value()}renderHull(e){const t=null==e?e=new PD:void 0,{hull:n,points:r}=this,i=2*n[0],o=n.length
e.moveTo(r[i],r[i+1])
for(let a=1;a<o;++a){const t=2*n[a]
e.lineTo(r[t],r[t+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new zD
return this.renderHull(e),e.value()}renderTriangle(e,t){const n=null==t?t=new PD:void 0,{points:r,triangles:i}=this,o=2*i[e*=3],a=2*i[e+1],s=2*i[e+2]
return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[s],r[s+1]),t.closePath(),n&&n.value()}*trianglePolygons(){const{triangles:e}=this
for(let t=0,n=e.length/3;t<n;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new zD
return this.renderTriangle(e,t),t.value()}}function WD(e){vs.call(this,null,e)}WD.Definition={type:"Voronoi",metadata:{modifies:!0},params:[{name:"x",type:"field",required:!0},{name:"y",type:"field",required:!0},{name:"size",type:"number",array:!0,length:2},{name:"extent",type:"array",array:!0,length:2,default:[[-1e5,-1e5],[1e5,1e5]],content:{type:"number",array:!0,length:2}},{name:"as",type:"string",default:"path"}]}
const VD=[-1e5,-1e5,1e5,1e5]
function HD(e){const t=e[0][0],n=e[0][1]
let r=e.length-1
for(;e[r][0]===t&&e[r][1]===n;--r);return"M"+e.slice(0,r+1).join("L")+"Z"}ct(WD,vs,{transform(e,t){const n=e.as||"path",r=t.source
if(!r||!r.length)return t
let i=e.size
i=i?[0,0,i[0],i[1]]:(i=e.extent)?[i[0][0],i[0][1],i[1][0],i[1][1]]:VD
const o=this.value=ZD.from(r,e.x,e.y).voronoi(i)
for(let a=0,s=r.length;a<s;++a){const e=o.cellPolygon(a)
r[a][n]=e?HD(e):null}return t.reflow(e.modified()).modifies(n)}})
var GD=Math.PI/180,YD=2048
function XD(e,t,n,r){if(!t.sprite){var i=e.context,o=e.ratio
i.clearRect(0,0,2048/o,YD/o)
var a,s,l,u,c,f=0,d=0,h=0,p=n.length
for(--r;++r<p;){if(t=n[r],i.save(),i.font=t.style+" "+t.weight+" "+~~((t.size+1)/o)+"px "+t.font,a=i.measureText(t.text+"m").width*o,l=t.size<<1,t.rotate){var g=Math.sin(t.rotate*GD),m=Math.cos(t.rotate*GD),y=a*m,v=a*g,b=l*m,x=l*g
a=Math.max(Math.abs(y+x),Math.abs(y-x))+31>>5<<5,l=~~Math.max(Math.abs(v+b),Math.abs(v-b))}else a=a+31>>5<<5
if(l>h&&(h=l),f+a>=2048&&(f=0,d+=h,h=0),d+l>=YD)break
i.translate((f+(a>>1))/o,(d+(l>>1))/o),t.rotate&&i.rotate(t.rotate*GD),i.fillText(t.text,0,0),t.padding&&(i.lineWidth=2*t.padding,i.strokeText(t.text,0,0)),i.restore(),t.width=a,t.height=l,t.xoff=f,t.yoff=d,t.x1=a>>1,t.y1=l>>1,t.x0=-t.x1,t.y0=-t.y1,t.hasText=!0,f+=a}for(var _=i.getImageData(0,0,2048/o,YD/o).data,w=[];--r>=0;)if((t=n[r]).hasText){for(s=(a=t.width)>>5,l=t.y1-t.y0,u=0;u<l*s;u++)w[u]=0
if(null==(f=t.xoff))return
d=t.yoff
var O=0,k=-1
for(c=0;c<l;c++){for(u=0;u<a;u++){var E=s*c+(u>>5),A=_[2048*(d+c)+(f+u)<<2]?1<<31-u%32:0
w[E]|=A,O|=A}O?k=c:(t.y0++,l--,c--,d++)}t.y1=t.y0+k,t.sprite=w.slice(0,(t.y1-t.y0)*s)}}}function JD(e,t,n){n>>=5
for(var r,i=e.sprite,o=e.width>>5,a=e.x-(o<<4),s=127&a,l=32-s,u=e.y1-e.y0,c=(e.y+e.y0)*n+(a>>5),f=0;f<u;f++){r=0
for(var d=0;d<=o;d++)if((r<<l|(d<o?(r=i[f*o+d])>>>s:0))&t[c+d])return!0
c+=n}return!1}function KD(e,t){var n=e[0],r=e[1]
t.x+t.x0<n.x&&(n.x=t.x+t.x0),t.y+t.y0<n.y&&(n.y=t.y+t.y0),t.x+t.x1>r.x&&(r.x=t.x+t.x1),t.y+t.y1>r.y&&(r.y=t.y+t.y1)}function QD(e,t){return e.x+e.x1>t[0].x&&e.x+e.x0<t[1].x&&e.y+e.y1>t[0].y&&e.y+e.y0<t[1].y}function eC(e){var t=e[0]/e[1]
return function(e){return[t*(e*=.1)*Math.cos(e),e*Math.sin(e)]}}function tC(e){return"function"==typeof e?e:function(){return e}}var nC={archimedean:eC,rectangular:function(e){var t=4*e[0]/e[1],n=0,r=0
return function(e){var i=e<0?-1:1
switch(Math.sqrt(1+4*i*e)-i&3){case 0:n+=t
break
case 1:r+=4
break
case 2:n-=t
break
default:r-=4}return[n,r]}}}
const rC=["x","y","font","fontSize","fontStyle","fontWeight","angle"],iC=["text","font","rotate","fontSize","fontStyle","fontWeight"]
function oC(e){vs.call(this,function(){var e,t,n,r,i,o,a,s=[256,256],l=eC,u=[],c=Math.random,f={}
function d(e,t,n){for(var r,i,o,a=t.x,u=t.y,f=Math.sqrt(s[0]*s[0]+s[1]*s[1]),d=l(s),h=c()<.5?1:-1,p=-h;(r=d(p+=h))&&(i=~~r[0],o=~~r[1],!(Math.min(Math.abs(i),Math.abs(o))>=f));)if(t.x=a+i,t.y=u+o,!(t.x+t.x0<0||t.y+t.y0<0||t.x+t.x1>s[0]||t.y+t.y1>s[1])&&(!n||!JD(t,e,s[0]))&&(!n||QD(t,n))){for(var g,m=t.sprite,y=t.width>>5,v=s[0]>>5,b=t.x-(y<<4),x=127&b,_=32-x,w=t.y1-t.y0,O=(t.y+t.y0)*v+(b>>5),k=0;k<w;k++){g=0
for(var E=0;E<=y;E++)e[O+E]|=g<<_|(E<y?(g=m[k*y+E])>>>x:0)
O+=v}return t.sprite=null,!0}return!1}return f.layout=function(){for(var l=function(e){e.width=e.height=1
var t=Math.sqrt(e.getContext("2d").getImageData(0,0,1,1).data.length>>2)
e.width=2048/t,e.height=YD/t
var n=e.getContext("2d")
return n.fillStyle=n.strokeStyle="red",n.textAlign="center",{context:n,ratio:t}}(hf()),f=function(e){for(var t=[],n=-1;++n<e;)t[n]=0
return t}((s[0]>>5)*s[1]),h=null,p=u.length,g=-1,m=[],y=u.map((s=>({text:e(s),font:t(s),style:r(s),weight:i(s),rotate:o(s),size:~~(n(s)+1e-14),padding:a(s),xoff:0,yoff:0,x1:0,y1:0,x0:0,y0:0,hasText:!1,sprite:null,datum:s}))).sort(((e,t)=>t.size-e.size));++g<p;){var v=y[g]
v.x=s[0]*(c()+.5)>>1,v.y=s[1]*(c()+.5)>>1,XD(l,v,y,g),v.hasText&&d(f,v,h)&&(m.push(v),h?KD(h,v):h=[{x:v.x+v.x0,y:v.y+v.y0},{x:v.x+v.x1,y:v.y+v.y1}],v.x-=s[0]>>1,v.y-=s[1]>>1)}return m},f.words=function(e){return arguments.length?(u=e,f):u},f.size=function(e){return arguments.length?(s=[+e[0],+e[1]],f):s},f.font=function(e){return arguments.length?(t=tC(e),f):t},f.fontStyle=function(e){return arguments.length?(r=tC(e),f):r},f.fontWeight=function(e){return arguments.length?(i=tC(e),f):i},f.rotate=function(e){return arguments.length?(o=tC(e),f):o},f.text=function(t){return arguments.length?(e=tC(t),f):e},f.spiral=function(e){return arguments.length?(l=nC[e]||e,f):l},f.fontSize=function(e){return arguments.length?(n=tC(e),f):n},f.padding=function(e){return arguments.length?(a=tC(e),f):a},f.random=function(e){return arguments.length?(c=e,f):c},f}(),e)}oC.Definition={type:"Wordcloud",metadata:{modifies:!0},params:[{name:"size",type:"number",array:!0,length:2},{name:"font",type:"string",expr:!0,default:"sans-serif"},{name:"fontStyle",type:"string",expr:!0,default:"normal"},{name:"fontWeight",type:"string",expr:!0,default:"normal"},{name:"fontSize",type:"number",expr:!0,default:14},{name:"fontSizeRange",type:"number",array:"nullable",default:[10,50]},{name:"rotate",type:"number",expr:!0,default:0},{name:"text",type:"field"},{name:"spiral",type:"string",values:["archimedean","rectangular"]},{name:"padding",type:"number",expr:!0},{name:"as",type:"string",array:!0,length:7,default:rC}]},ct(oC,vs,{transform(e,t){!e.size||e.size[0]&&e.size[1]||oe("Wordcloud size dimensions must be non-zero.")
const n=e.modified()
if(!(n||t.changed(t.ADD_REM)||iC.some((function(n){const r=e[n]
return Ge(r)&&t.modified(r.fields)}))))return
const r=t.materialize(t.SOURCE).source,i=this.value,o=e.as||rC
let a,s=e.fontSize||14
if(Ge(s)?a=e.fontSizeRange:s=et(s),a){const e=s,t=Hp("sqrt")().domain(rt(r,e)).range(a)
s=n=>t(e(n))}r.forEach((e=>{e[o[0]]=NaN,e[o[1]]=NaN,e[o[3]]=0}))
const l=i.words(r).text(e.text).size(e.size||[500,500]).padding(e.padding||1).spiral(e.spiral||"archimedean").rotate(e.rotate||0).font(e.font||"sans-serif").fontStyle(e.fontStyle||"normal").fontWeight(e.fontWeight||"normal").fontSize(s).random(zs).layout(),u=i.size(),c=u[0]>>1,f=u[1]>>1,d=l.length
for(let h,p,g=0;g<d;++g)h=l[g],p=h.datum,p[o[0]]=h.x+c,p[o[1]]=h.y+f,p[o[2]]=h.font,p[o[3]]=h.size,p[o[4]]=h.style,p[o[5]]=h.weight,p[o[6]]=h.rotate
return t.reflow(n).modifies(o)}})
const aC=e=>new Uint8Array(e),sC=e=>new Uint16Array(e),lC=e=>new Uint32Array(e)
function uC(e,t,n){const r=(t<257?aC:t<65537?sC:lC)(e)
return n&&r.set(n),r}function cC(e,t,n){const r=1<<t
return{one:r,zero:~r,range:n.slice(),bisect:e.bisect,index:e.index,size:e.size,onAdd(e,t){const n=this,i=n.bisect(n.range,e.value),o=e.index,a=i[0],s=i[1],l=o.length
let u
for(u=0;u<a;++u)t[o[u]]|=r
for(u=s;u<l;++u)t[o[u]]|=r
return n}}}function fC(){let e=lC(0),t=[],n=0
return{insert:function(r,i,o){if(!i.length)return[]
const a=n,s=i.length,l=lC(s)
let u,c,f,d=Array(s)
for(f=0;f<s;++f)d[f]=r(i[f]),l[f]=f
if(d=function(e,t){return e.sort.call(t,((t,n)=>{const r=e[t],i=e[n]
return r<i?-1:r>i?1:0})),function(e,t){return Array.from(t,(t=>e[t]))}(e,t)}(d,l),a)u=t,c=e,t=Array(a+s),e=lC(a+s),function(e,t,n,r,i,o,a,s,l){let u,c=0,f=0
for(u=0;c<r&&f<a;++u)t[c]<i[f]?(s[u]=t[c],l[u]=n[c++]):(s[u]=i[f],l[u]=o[f++]+e)
for(;c<r;++c,++u)s[u]=t[c],l[u]=n[c]
for(;f<a;++f,++u)s[u]=i[f],l[u]=o[f]+e}(o,u,c,a,d,l,s,t,e)
else{if(o>0)for(f=0;f<s;++f)l[f]+=o
t=d,e=l}return n=a+s,{index:l,value:d}},remove:function(r,i){const o=n
let a,s,l
for(s=0;!i[e[s]]&&s<o;++s);for(l=s;s<o;++s)i[a=e[s]]||(e[l]=a,t[l]=t[s],++l)
n=o-r},bisect:function(e,r){let i
return r?i=r.length:(r=t,i=n),[mf(r,e[0],0,i),gf(r,e[1],0,i)]},reindex:function(t){for(let r=0,i=n;r<i;++r)e[r]=t[e[r]]},index:()=>e,size:()=>n}}function dC(e){vs.call(this,function(){let e=8,t=[],n=lC(0),r=uC(0,e),i=uC(0,e)
return{data:()=>t,seen:()=>n=function(e,t,n){return e.length>=t?e:((n=n||new e.constructor(t)).set(e),n)}(n,t.length),add(e){for(let n,r=0,i=t.length,o=e.length;r<o;++r)n=e[r],n._index=i++,t.push(n)},remove(e,n){const o=t.length,a=Array(o-e),s=t
let l,u,c
for(u=0;!n[u]&&u<o;++u)a[u]=t[u],s[u]=u
for(c=u;u<o;++u)l=t[u],n[u]?s[u]=-1:(s[u]=c,r[c]=r[u],i[c]=i[u],a[c]=l,l._index=c++),r[u]=0
return t=a,s},size:()=>t.length,curr:()=>r,prev:()=>i,reset:e=>i[e]=r[e],all:()=>e<257?255:e<65537?65535:4294967295,set(e,t){r[e]|=t},clear(e,t){r[e]&=~t},resize(t,n){(t>r.length||n>e)&&(e=Math.max(n,e),r=uC(t,e,r),i=uC(t,e))}}}(),e),this._indices=null,this._dims=null}function hC(e){vs.call(this,null,e)}dC.Definition={type:"CrossFilter",metadata:{},params:[{name:"fields",type:"field",array:!0,required:!0},{name:"query",type:"array",array:!0,required:!0,content:{type:"number",array:!0,length:2}}]},ct(dC,vs,{transform(e,t){return this._dims?e.modified("fields")||e.fields.some((e=>t.modified(e.fields)))?this.reinit(e,t):this.eval(e,t):this.init(e,t)},init(e,t){const n=e.fields,r=e.query,i=this._indices={},o=this._dims=[],a=r.length
let s,l,u=0
for(;u<a;++u)s=n[u].fname,l=i[s]||(i[s]=fC()),o.push(cC(l,u,r[u]))
return this.eval(e,t)},reinit(e,t){const n=t.materialize().fork(),r=e.fields,i=e.query,o=this._indices,a=this._dims,s=this.value,l=s.curr(),u=s.prev(),c=s.all(),f=n.rem=n.add,d=n.mod,h=i.length,p={}
let g,m,y,v,b,x,_,w,O
if(u.set(l),t.rem.length&&(b=this.remove(e,t,n)),t.add.length&&s.add(t.add),t.mod.length)for(x={},v=t.mod,_=0,w=v.length;_<w;++_)x[v[_]._index]=1
for(_=0;_<h;++_)O=r[_],(!a[_]||e.modified("fields",_)||t.modified(O.fields))&&(y=O.fname,(g=p[y])||(o[y]=m=fC(),p[y]=g=m.insert(O,t.source,0)),a[_]=cC(m,_,i[_]).onAdd(g,l))
for(_=0,w=s.data().length;_<w;++_)b[_]||(u[_]!==l[_]?f.push(_):x[_]&&l[_]!==c&&d.push(_))
return s.mask=(1<<h)-1,n},eval(e,t){const n=t.materialize().fork(),r=this._dims.length
let i=0
return t.rem.length&&(this.remove(e,t,n),i|=(1<<r)-1),e.modified("query")&&!e.modified("fields")&&(i|=this.update(e,t,n)),t.add.length&&(this.insert(e,t,n),i|=(1<<r)-1),t.mod.length&&(this.modify(t,n),i|=(1<<r)-1),this.value.mask=i,n},insert(e,t,n){const r=t.add,i=this.value,o=this._dims,a=this._indices,s=e.fields,l={},u=n.add,c=i.size()+r.length,f=o.length
let d,h,p,g=i.size()
i.resize(c,f),i.add(r)
const m=i.curr(),y=i.prev(),v=i.all()
for(d=0;d<f;++d)h=s[d].fname,p=l[h]||(l[h]=a[h].insert(s[d],r,g)),o[d].onAdd(p,m)
for(;g<c;++g)y[g]=v,m[g]!==v&&u.push(g)},modify(e,t){const n=t.mod,r=this.value,i=r.curr(),o=r.all(),a=e.mod
let s,l,u
for(s=0,l=a.length;s<l;++s)u=a[s]._index,i[u]!==o&&n.push(u)},remove(e,t,n){const r=this._indices,i=this.value,o=i.curr(),a=i.prev(),s=i.all(),l={},u=n.rem,c=t.rem
let f,d,h,p
for(f=0,d=c.length;f<d;++f)h=c[f]._index,l[h]=1,a[h]=p=o[h],o[h]=s,p!==s&&u.push(h)
for(h in r)r[h].remove(d,l)
return this.reindex(t,d,l),l},reindex(e,t,n){const r=this._indices,i=this.value
e.runAfter((()=>{const e=i.remove(t,n)
for(const t in r)r[t].reindex(e)}))},update(e,t,n){const r=this._dims,i=e.query,o=t.stamp,a=r.length
let s,l,u=0
for(n.filters=0,l=0;l<a;++l)e.modified("query",l)&&(s=l,++u)
if(1===u)u=r[s].one,this.incrementOne(r[s],i[s],n.add,n.rem)
else for(l=0,u=0;l<a;++l)e.modified("query",l)&&(u|=r[l].one,this.incrementAll(r[l],i[l],o,n.add),n.rem=n.add)
return u},incrementAll(e,t,n,r){const i=this.value,o=i.seen(),a=i.curr(),s=i.prev(),l=e.index(),u=e.bisect(e.range),c=e.bisect(t),f=c[0],d=c[1],h=u[0],p=u[1],g=e.one
let m,y,v
if(f<h)for(m=f,y=Math.min(h,d);m<y;++m)v=l[m],o[v]!==n&&(s[v]=a[v],o[v]=n,r.push(v)),a[v]^=g
else if(f>h)for(m=h,y=Math.min(f,p);m<y;++m)v=l[m],o[v]!==n&&(s[v]=a[v],o[v]=n,r.push(v)),a[v]^=g
if(d>p)for(m=Math.max(f,p),y=d;m<y;++m)v=l[m],o[v]!==n&&(s[v]=a[v],o[v]=n,r.push(v)),a[v]^=g
else if(d<p)for(m=Math.max(h,d),y=p;m<y;++m)v=l[m],o[v]!==n&&(s[v]=a[v],o[v]=n,r.push(v)),a[v]^=g
e.range=t.slice()},incrementOne(e,t,n,r){const i=this.value.curr(),o=e.index(),a=e.bisect(e.range),s=e.bisect(t),l=s[0],u=s[1],c=a[0],f=a[1],d=e.one
let h,p,g
if(l<c)for(h=l,p=Math.min(c,u);h<p;++h)g=o[h],i[g]^=d,n.push(g)
else if(l>c)for(h=c,p=Math.min(l,f);h<p;++h)g=o[h],i[g]^=d,r.push(g)
if(u>f)for(h=Math.max(l,f),p=u;h<p;++h)g=o[h],i[g]^=d,n.push(g)
else if(u<f)for(h=Math.max(c,u),p=f;h<p;++h)g=o[h],i[g]^=d,r.push(g)
e.range=t.slice()}}),hC.Definition={type:"ResolveFilter",metadata:{},params:[{name:"ignore",type:"number",required:!0,description:"A bit mask indicating which filters to ignore."},{name:"filter",type:"object",required:!0,description:"Per-tuple filter bitmaps from a CrossFilter transform."}]},ct(hC,vs,{transform(e,t){const n=~(e.ignore||0),r=e.filter,i=r.mask
if(0==(i&n))return t.StopPropagation
const o=t.fork(t.ALL),a=r.data(),s=r.curr(),l=r.prev(),u=e=>s[e]&n?null:a[e]
return o.filter(o.MOD,u),i&i-1?(o.filter(o.ADD,(e=>{const t=s[e]&n
return!t&&t^l[e]&n?a[e]:null})),o.filter(o.REM,(e=>{const t=s[e]&n
return!t||t^t^l[e]&n?null:a[e]}))):(o.filter(o.ADD,u),o.filter(o.REM,(e=>(s[e]&n)===i?a[e]:null))),o.filter(o.SOURCE,(e=>u(e._index)))}})
const pC="Literal",gC="CallExpression"
function mC(e){this.type=e}var yC,vC,bC,xC,_C
mC.prototype.visit=function(e){let t,n,r
if(e(this))return 1
for(t=function(e){switch(e.type){case"ArrayExpression":return e.elements
case"BinaryExpression":case"LogicalExpression":return[e.left,e.right]
case gC:return[e.callee].concat(e.arguments)
case"ConditionalExpression":return[e.test,e.consequent,e.alternate]
case"MemberExpression":return[e.object,e.property]
case"ObjectExpression":return e.properties
case"Property":return[e.key,e.value]
case"UnaryExpression":return[e.argument]
default:return[]}}(this),n=0,r=t.length;n<r;++n)if(t[n].visit(e))return 1},(yC={})[1]="Boolean",yC[2]="<end>",yC[3]="Identifier",yC[4]="Keyword",yC[5]="Null",yC[6]="Numeric",yC[7]="Punctuator",yC[8]="String",yC[9]="RegularExpression"
var wC="Identifier",OC="Unexpected token %0",kC="Invalid regular expression",EC="Invalid regular expression: missing /",AC="Octal literals are not allowed in strict mode.",SC="ILLEGAL",DC="Disabled.",CC=new RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),MC=new RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]")
function jC(e,t){if(!e)throw new Error("ASSERT: "+t)}function FC(e){return e>=48&&e<=57}function TC(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function NC(e){return"01234567".indexOf(e)>=0}function $C(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0}function PC(e){return 10===e||13===e||8232===e||8233===e}function zC(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||92===e||e>=128&&CC.test(String.fromCharCode(e))}function IC(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||92===e||e>=128&&MC.test(String.fromCharCode(e))}const RC={if:1,in:1,do:1,var:1,for:1,new:1,try:1,let:1,this:1,else:1,case:1,void:1,with:1,enum:1,while:1,break:1,catch:1,throw:1,const:1,yield:1,class:1,super:1,return:1,typeof:1,delete:1,switch:1,export:1,import:1,public:1,static:1,default:1,finally:1,extends:1,package:1,private:1,function:1,continue:1,debugger:1,interface:1,protected:1,instanceof:1,implements:1}
function LC(){for(;bC<xC;){const e=vC.charCodeAt(bC)
if(!$C(e)&&!PC(e))break;++bC}}function BC(e){var t,n,r,i=0
for(n="u"===e?4:2,t=0;t<n;++t)bC<xC&&TC(vC[bC])?(r=vC[bC++],i=16*i+"0123456789abcdef".indexOf(r.toLowerCase())):tM({},OC,SC)
return String.fromCharCode(i)}function UC(){var e,t,n,r
for(t=0,"}"===(e=vC[bC])&&tM({},OC,SC);bC<xC&&TC(e=vC[bC++]);)t=16*t+"0123456789abcdef".indexOf(e.toLowerCase())
return(t>1114111||"}"!==e)&&tM({},OC,SC),t<=65535?String.fromCharCode(t):(n=55296+(t-65536>>10),r=56320+(t-65536&1023),String.fromCharCode(n,r))}function qC(){var e,t
for(e=vC.charCodeAt(bC++),t=String.fromCharCode(e),92===e&&(117!==vC.charCodeAt(bC)&&tM({},OC,SC),++bC,(e=BC("u"))&&"\\"!==e&&zC(e.charCodeAt(0))||tM({},OC,SC),t=e);bC<xC&&IC(e=vC.charCodeAt(bC));)++bC,t+=String.fromCharCode(e),92===e&&(t=t.substr(0,t.length-1),117!==vC.charCodeAt(bC)&&tM({},OC,SC),++bC,(e=BC("u"))&&"\\"!==e&&IC(e.charCodeAt(0))||tM({},OC,SC),t+=e)
return t}function ZC(){var e,t,n,r,i=bC,o=vC.charCodeAt(bC),a=vC[bC]
switch(o){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:return++bC,{type:7,value:String.fromCharCode(o),start:i,end:bC}
default:if(61===(e=vC.charCodeAt(bC+1)))switch(o){case 43:case 45:case 47:case 60:case 62:case 94:case 124:case 37:case 38:case 42:return bC+=2,{type:7,value:String.fromCharCode(o)+String.fromCharCode(e),start:i,end:bC}
case 33:case 61:return bC+=2,61===vC.charCodeAt(bC)&&++bC,{type:7,value:vC.slice(i,bC),start:i,end:bC}}}return">>>="===(r=vC.substr(bC,4))?{type:7,value:r,start:i,end:bC+=4}:">>>"===(n=r.substr(0,3))||"<<="===n||">>="===n?{type:7,value:n,start:i,end:bC+=3}:a===(t=n.substr(0,2))[1]&&"+-<>&|".indexOf(a)>=0||"=>"===t?{type:7,value:t,start:i,end:bC+=2}:("//"===t&&tM({},OC,SC),"<>=!+-*%&|^/".indexOf(a)>=0?{type:7,value:a,start:i,end:++bC}:void tM({},OC,SC))}function WC(){var e,t,n
if(jC(FC((n=vC[bC]).charCodeAt(0))||"."===n,"Numeric literal must start with a decimal digit or a decimal point"),t=bC,e="","."!==n){if(e=vC[bC++],n=vC[bC],"0"===e){if("x"===n||"X"===n)return++bC,function(e){let t=""
for(;bC<xC&&TC(vC[bC]);)t+=vC[bC++]
return 0===t.length&&tM({},OC,SC),zC(vC.charCodeAt(bC))&&tM({},OC,SC),{type:6,value:parseInt("0x"+t,16),start:e,end:bC}}(t)
if(NC(n))return function(e){let t="0"+vC[bC++]
for(;bC<xC&&NC(vC[bC]);)t+=vC[bC++]
return(zC(vC.charCodeAt(bC))||FC(vC.charCodeAt(bC)))&&tM({},OC,SC),{type:6,value:parseInt(t,8),octal:!0,start:e,end:bC}}(t)
n&&FC(n.charCodeAt(0))&&tM({},OC,SC)}for(;FC(vC.charCodeAt(bC));)e+=vC[bC++]
n=vC[bC]}if("."===n){for(e+=vC[bC++];FC(vC.charCodeAt(bC));)e+=vC[bC++]
n=vC[bC]}if("e"===n||"E"===n)if(e+=vC[bC++],"+"!==(n=vC[bC])&&"-"!==n||(e+=vC[bC++]),FC(vC.charCodeAt(bC)))for(;FC(vC.charCodeAt(bC));)e+=vC[bC++]
else tM({},OC,SC)
return zC(vC.charCodeAt(bC))&&tM({},OC,SC),{type:6,value:parseFloat(e),start:t,end:bC}}function VC(){if(LC(),bC>=xC)return{type:2,start:bC,end:bC}
const e=vC.charCodeAt(bC)
return zC(e)?function(){var e,t
return e=bC,t=92===vC.charCodeAt(bC)?qC():function(){var e,t
for(e=bC++;bC<xC;){if(92===(t=vC.charCodeAt(bC)))return bC=e,qC()
if(!IC(t))break;++bC}return vC.slice(e,bC)}(),{type:1===t.length?3:RC.hasOwnProperty(t)?4:"null"===t?5:"true"===t||"false"===t?1:3,value:t,start:e,end:bC}}():40===e||41===e||59===e?ZC():39===e||34===e?function(){var e,t,n,r,i="",o=!1
for(jC("'"===(e=vC[bC])||'"'===e,"String literal must starts with a quote"),t=bC,++bC;bC<xC;){if((n=vC[bC++])===e){e=""
break}if("\\"===n)if((n=vC[bC++])&&PC(n.charCodeAt(0)))"\r"===n&&"\n"===vC[bC]&&++bC
else switch(n){case"u":case"x":"{"===vC[bC]?(++bC,i+=UC()):i+=BC(n)
break
case"n":i+="\n"
break
case"r":i+="\r"
break
case"t":i+="\t"
break
case"b":i+="\b"
break
case"f":i+="\f"
break
case"v":i+="\v"
break
default:NC(n)?(0!==(r="01234567".indexOf(n))&&(o=!0),bC<xC&&NC(vC[bC])&&(o=!0,r=8*r+"01234567".indexOf(vC[bC++]),"0123".indexOf(n)>=0&&bC<xC&&NC(vC[bC])&&(r=8*r+"01234567".indexOf(vC[bC++]))),i+=String.fromCharCode(r)):i+=n}else{if(PC(n.charCodeAt(0)))break
i+=n}}return""!==e&&tM({},OC,SC),{type:8,value:i,octal:o,start:t,end:bC}}():46===e?FC(vC.charCodeAt(bC+1))?WC():ZC():FC(e)?WC():ZC()}function HC(){const e=_C
return bC=e.end,_C=VC(),bC=e.end,e}function GC(){const e=bC
_C=VC(),bC=e}function YC(e,t,n){const r=new mC("||"===e||"&&"===e?"LogicalExpression":"BinaryExpression")
return r.operator=e,r.left=t,r.right=n,r}function XC(e,t){const n=new mC("CallExpression")
return n.callee=e,n.arguments=t,n}function JC(e){const t=new mC(wC)
return t.name=e,t}function KC(e){const t=new mC("Literal")
return t.value=e.value,t.raw=vC.slice(e.start,e.end),e.regex&&("//"===t.raw&&(t.raw="/(?:)/"),t.regex=e.regex),t}function QC(e,t,n){const r=new mC("MemberExpression")
return r.computed="["===e,r.object=t,r.property=n,r.computed||(n.member=!0),r}function eM(e,t,n){const r=new mC("Property")
return r.key=t,r.value=n,r.kind=e,r}function tM(e,t){var n,r=Array.prototype.slice.call(arguments,2),i=t.replace(/%(\d)/g,((e,t)=>(jC(t<r.length,"Message reference must be in range"),r[t])))
throw(n=new Error(i)).index=bC,n.description=i,n}function nM(e){2===e.type&&tM(e,"Unexpected end of input"),6===e.type&&tM(e,"Unexpected number"),8===e.type&&tM(e,"Unexpected string"),3===e.type&&tM(e,"Unexpected identifier"),4===e.type&&tM(e,"Unexpected reserved word"),tM(e,OC,e.value)}function rM(e){const t=HC()
7===t.type&&t.value===e||nM(t)}function iM(e){return 7===_C.type&&_C.value===e}function oM(e){return 4===_C.type&&_C.value===e}function aM(){bC=_C.start
const e=HC()
return 8===e.type||6===e.type?(e.octal&&tM(e,AC),KC(e)):JC(e.value)}function sM(){var e,t,n
return bC=_C.start,3===(e=_C).type?(n=aM(),rM(":"),eM("init",n,pM())):2!==e.type&&7!==e.type?(t=aM(),rM(":"),eM("init",t,pM())):void nM(e)}const lM={if:1}
function uM(){const e=[]
if(rM("("),!iM(")"))for(;bC<xC&&(e.push(pM()),!iM(")"));)rM(",")
return rM(")"),e}function cM(){rM("[")
const e=gM()
return rM("]"),e}function fM(){const e=function(){var e
for(e=function(){var e,t,n
if(iM("("))return function(){rM("(")
const e=gM()
return rM(")"),e}()
if(iM("["))return function(){const e=[]
for(bC=_C.start,rM("[");!iM("]");)iM(",")?(HC(),e.push(null)):(e.push(pM()),iM("]")||rM(","))
return HC(),function(e){const t=new mC("ArrayExpression")
return t.elements=e,t}(e)}()
if(iM("{"))return function(){var e,t,n=[],r={},i=String
for(bC=_C.start,rM("{");!iM("}");)t="$"+((e=sM()).key.type===wC?e.key.name:i(e.key.value)),Object.prototype.hasOwnProperty.call(r,t)?tM({},"Duplicate data property in object literal not allowed in strict mode"):r[t]=!0,n.push(e),iM("}")||rM(",")
return rM("}"),function(e){const t=new mC("ObjectExpression")
return t.properties=e,t}(n)}()
if(e=_C.type,bC=_C.start,3===e||lM[_C.value])n=JC(HC().value)
else if(8===e||6===e)_C.octal&&tM(_C,AC),n=KC(HC())
else{if(4===e)throw new Error(DC)
1===e?((t=HC()).value="true"===t.value,n=KC(t)):5===e?((t=HC()).value=null,n=KC(t)):iM("/")||iM("/=")?(n=KC(function(){var e,t,n,r
return _C=null,LC(),e=bC,t=function(){var e,t,n,r
for(jC("/"===(e=vC[bC]),"Regular expression literal must start with a slash"),t=vC[bC++],n=!1,r=!1;bC<xC;)if(t+=e=vC[bC++],"\\"===e)PC((e=vC[bC++]).charCodeAt(0))&&tM({},EC),t+=e
else if(PC(e.charCodeAt(0)))tM({},EC)
else if(n)"]"===e&&(n=!1)
else{if("/"===e){r=!0
break}"["===e&&(n=!0)}return r||tM({},EC),{value:t.substr(1,t.length-2),literal:t}}(),n=function(){var e,t,n
for(t="",n="";bC<xC&&IC((e=vC[bC]).charCodeAt(0));)++bC,"\\"===e&&bC<xC?tM({},OC,SC):(n+=e,t+=e)
return n.search(/[^gimuy]/g)>=0&&tM({},kC,n),{value:n,literal:t}}(),r=function(e,t){let n=e
t.indexOf("u")>=0&&(n=n.replace(/\\u\{([0-9a-fA-F]+)\}/g,((e,t)=>{if(parseInt(t,16)<=1114111)return"x"
tM({},kC)})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"x"))
try{new RegExp(n)}catch(e){tM({},kC)}try{return new RegExp(e,t)}catch(e){return null}}(t.value,n.value),{literal:t.literal+n.literal,value:r,regex:{pattern:t.value,flags:n.value},start:e,end:bC}}()),GC()):nM(HC())}return n}();;)if(iM("."))e=QC(".",e,(rM("."),function(){bC=_C.start
const e=HC()
return function(e){return 3===e.type||4===e.type||1===e.type||5===e.type}(e)||nM(e),JC(e.value)}()))
else if(iM("("))e=XC(e,uM())
else{if(!iM("["))break
e=QC("[",e,cM())}return e}()
if(7===_C.type&&(iM("++")||iM("--")))throw new Error(DC)
return e}function dM(){var e,t
if(7!==_C.type&&4!==_C.type)t=fM()
else{if(iM("++")||iM("--"))throw new Error(DC)
if(iM("+")||iM("-")||iM("~")||iM("!"))e=HC(),t=dM(),t=function(e,t){const n=new mC("UnaryExpression")
return n.operator=e,n.argument=t,n.prefix=!0,n}(e.value,t)
else{if(oM("delete")||oM("void")||oM("typeof"))throw new Error(DC)
t=fM()}}return t}function hM(e){let t=0
if(7!==e.type&&4!==e.type)return 0
switch(e.value){case"||":t=1
break
case"&&":t=2
break
case"|":t=3
break
case"^":t=4
break
case"&":t=5
break
case"==":case"!=":case"===":case"!==":t=6
break
case"<":case">":case"<=":case">=":case"instanceof":case"in":t=7
break
case"<<":case">>":case">>>":t=8
break
case"+":case"-":t=9
break
case"*":case"/":case"%":t=11}return t}function pM(){var e,t
return e=function(){var e,t,n,r,i,o,a,s,l,u
if(e=_C,l=dM(),0===(i=hM(r=_C)))return l
for(r.prec=i,HC(),t=[e,_C],o=[l,r,a=dM()];(i=hM(_C))>0;){for(;o.length>2&&i<=o[o.length-2].prec;)a=o.pop(),s=o.pop().value,l=o.pop(),t.pop(),n=YC(s,l,a),o.push(n);(r=HC()).prec=i,o.push(r),t.push(_C),n=dM(),o.push(n)}for(n=o[u=o.length-1],t.pop();u>1;)t.pop(),n=YC(o[u-1].value,o[u-2],n),u-=2
return n}(),iM("?")&&(HC(),t=pM(),rM(":"),e=function(e,t,n){const r=new mC("ConditionalExpression")
return r.test=e,r.consequent=t,r.alternate=n,r}(e,t,pM())),e}function gM(){const e=pM()
if(iM(","))throw new Error(DC)
return e}function mM(e){bC=0,xC=(vC=e).length,_C=null,GC()
const t=gM()
if(2!==_C.type)throw new Error("Unexpect token after expression.")
return t}var yM={NaN:"NaN",E:"Math.E",LN2:"Math.LN2",LN10:"Math.LN10",LOG2E:"Math.LOG2E",LOG10E:"Math.LOG10E",PI:"Math.PI",SQRT1_2:"Math.SQRT1_2",SQRT2:"Math.SQRT2",MIN_VALUE:"Number.MIN_VALUE",MAX_VALUE:"Number.MAX_VALUE"}
function vM(e){function t(t,n,r){return i=>function(t,n,r,i){let o=e(n[0])
return r&&(o=r+"("+o+")",0===r.lastIndexOf("new ",0)&&(o="("+o+")")),o+"."+t+(i<0?"":0===i?"()":"("+n.slice(1).map(e).join(",")+")")}(t,i,n,r)}const n="new Date",r="String",i="RegExp"
return{isNaN:"Number.isNaN",isFinite:"Number.isFinite",abs:"Math.abs",acos:"Math.acos",asin:"Math.asin",atan:"Math.atan",atan2:"Math.atan2",ceil:"Math.ceil",cos:"Math.cos",exp:"Math.exp",floor:"Math.floor",log:"Math.log",max:"Math.max",min:"Math.min",pow:"Math.pow",random:"Math.random",round:"Math.round",sin:"Math.sin",sqrt:"Math.sqrt",tan:"Math.tan",clamp:function(t){t.length<3&&oe("Missing arguments to clamp function."),t.length>3&&oe("Too many arguments to clamp function.")
const n=t.map(e)
return"Math.max("+n[1]+", Math.min("+n[2]+","+n[0]+"))"},now:"Date.now",utc:"Date.UTC",datetime:n,date:t("getDate",n,0),day:t("getDay",n,0),year:t("getFullYear",n,0),month:t("getMonth",n,0),hours:t("getHours",n,0),minutes:t("getMinutes",n,0),seconds:t("getSeconds",n,0),milliseconds:t("getMilliseconds",n,0),time:t("getTime",n,0),timezoneoffset:t("getTimezoneOffset",n,0),utcdate:t("getUTCDate",n,0),utcday:t("getUTCDay",n,0),utcyear:t("getUTCFullYear",n,0),utcmonth:t("getUTCMonth",n,0),utchours:t("getUTCHours",n,0),utcminutes:t("getUTCMinutes",n,0),utcseconds:t("getUTCSeconds",n,0),utcmilliseconds:t("getUTCMilliseconds",n,0),length:t("length",null,-1),parseFloat:"parseFloat",parseInt:"parseInt",upper:t("toUpperCase",r,0),lower:t("toLowerCase",r,0),substring:t("substring",r),split:t("split",r),trim:t("trim",r,0),regexp:i,test:t("test",i),if:function(t){t.length<3&&oe("Missing arguments to if function."),t.length>3&&oe("Too many arguments to if function.")
const n=t.map(e)
return"("+n[0]+"?"+n[1]+":"+n[2]+")"}}}function bM(e){const t=(e=e||{}).allowed?Mt(e.allowed):{},n=e.forbidden?Mt(e.forbidden):{},r=e.constants||yM,i=(e.functions||vM)(f),o=e.globalvar,a=e.fieldvar,s=Ge(o)?o:e=>`${o}["${e}"]`
let l={},u={},c=0
function f(e){if(yt(e))return e
const t=d[e.type]
return null==t&&oe("Unsupported type: "+e.type),t(e)}const d={Literal:e=>e.raw,Identifier:e=>{const i=e.name
return c>0?i:at(n,i)?oe("Illegal identifier: "+i):at(r,i)?r[i]:at(t,i)?i:(l[i]=1,s(i))},MemberExpression:e=>{const t=!e.computed,n=f(e.object)
t&&(c+=1)
const r=f(e.property)
return n===a&&(u[function(e){const t=e&&e.length-1
return t&&('"'===e[0]&&'"'===e[t]||"'"===e[0]&&"'"===e[t])?e.slice(1,-1):e}(r)]=1),t&&(c-=1),n+(t?"."+r:"["+r+"]")},CallExpression:e=>{"Identifier"!==e.callee.type&&oe("Illegal callee type: "+e.callee.type)
const t=e.callee.name,n=e.arguments,r=at(i,t)&&i[t]
return r||oe("Unrecognized function: "+t),Ge(r)?r(n):r+"("+n.map(f).join(",")+")"},ArrayExpression:e=>"["+e.elements.map(f).join(",")+"]",BinaryExpression:e=>"("+f(e.left)+" "+e.operator+" "+f(e.right)+")",UnaryExpression:e=>"("+e.operator+f(e.argument)+")",ConditionalExpression:e=>"("+f(e.test)+"?"+f(e.consequent)+":"+f(e.alternate)+")",LogicalExpression:e=>"("+f(e.left)+e.operator+f(e.right)+")",ObjectExpression:e=>"{"+e.properties.map(f).join(",")+"}",Property:e=>{c+=1
const t=f(e.key)
return c-=1,t+":"+f(e.value)}}
function h(e){const t={code:f(e),globals:Object.keys(l),fields:Object.keys(u)}
return l={},u={},t}return h.functions=i,h.constants=r,h}var xM,_M,wM,OM,kM,EM,AM,SM,DM,CM,MM,jM,FM,TM,NM,$M,PM=new tw,zM=new tw,IM={point:Ew,lineStart:Ew,lineEnd:Ew,polygonStart:function(){PM=new tw,IM.lineStart=RM,IM.lineEnd=LM},polygonEnd:function(){var e=+PM
zM.add(e<0?sw+e:e),this.lineStart=this.lineEnd=this.point=Ew},sphere:function(){zM.add(sw)}}
function RM(){IM.point=BM}function LM(){UM(xM,_M)}function BM(e,t){IM.point=UM,xM=e,_M=t,wM=e*=uw,OM=hw(t=(t*=uw)/2+aw),kM=bw(t)}function UM(e,t){var n=(e*=uw)-wM,r=n>=0?1:-1,i=r*n,o=hw(t=(t*=uw)/2+aw),a=bw(t),s=kM*a,l=OM*o+s*hw(i),u=s*r*bw(i)
PM.add(dw(u,l)),wM=e,OM=o,kM=a}var qM,ZM,WM,VM,HM,GM,YM,XM,JM,KM,QM,ej,tj,nj,rj,ij,oj={point:aj,lineStart:lj,lineEnd:uj,polygonStart:function(){oj.point=cj,oj.lineStart=fj,oj.lineEnd=dj,TM=new tw,IM.polygonStart()},polygonEnd:function(){IM.polygonEnd(),oj.point=aj,oj.lineStart=lj,oj.lineEnd=uj,PM<0?(EM=-(SM=180),AM=-(DM=90)):TM>nw?DM=90:TM<-1e-6&&(AM=-90),$M[0]=EM,$M[1]=SM},sphere:function(){EM=-(SM=180),AM=-(DM=90)}}
function aj(e,t){NM.push($M=[EM=e,SM=e]),t<AM&&(AM=t),t>DM&&(DM=t)}function sj(e,t){var n=NO([e*uw,t*uw])
if(FM){var r=PO(FM,n),i=PO([r[1],-r[0],0],r)
RO(i),i=TO(i)
var o,a=e-CM,s=a>0?1:-1,l=i[0]*lw*s,u=cw(a)>180
u^(s*CM<l&&l<s*e)?(o=i[1]*lw)>DM&&(DM=o):u^(s*CM<(l=(l+360)%360-180)&&l<s*e)?(o=-i[1]*lw)<AM&&(AM=o):(t<AM&&(AM=t),t>DM&&(DM=t)),u?e<CM?hj(EM,e)>hj(EM,SM)&&(SM=e):hj(e,SM)>hj(EM,SM)&&(EM=e):SM>=EM?(e<EM&&(EM=e),e>SM&&(SM=e)):e>CM?hj(EM,e)>hj(EM,SM)&&(SM=e):hj(e,SM)>hj(EM,SM)&&(EM=e)}else NM.push($M=[EM=e,SM=e])
t<AM&&(AM=t),t>DM&&(DM=t),FM=n,CM=e}function lj(){oj.point=sj}function uj(){$M[0]=EM,$M[1]=SM,oj.point=aj,FM=null}function cj(e,t){if(FM){var n=e-CM
TM.add(cw(n)>180?n+(n>0?360:-360):n)}else MM=e,jM=t
IM.point(e,t),sj(e,t)}function fj(){IM.lineStart()}function dj(){cj(MM,jM),IM.lineEnd(),cw(TM)>nw&&(EM=-(SM=180)),$M[0]=EM,$M[1]=SM,FM=null}function hj(e,t){return(t-=e)<0?t+360:t}function pj(e,t){return e[0]-t[0]}function gj(e,t){return e[0]<=e[1]?e[0]<=t&&t<=e[1]:t<e[0]||e[1]<t}var mj={sphere:Ew,point:yj,lineStart:bj,lineEnd:wj,polygonStart:function(){mj.lineStart=Oj,mj.lineEnd=kj},polygonEnd:function(){mj.lineStart=bj,mj.lineEnd=wj}}
function yj(e,t){e*=uw
var n=hw(t*=uw)
vj(n*hw(e),n*bw(e),bw(t))}function vj(e,t,n){++qM,WM+=(e-WM)/qM,VM+=(t-VM)/qM,HM+=(n-HM)/qM}function bj(){mj.point=xj}function xj(e,t){e*=uw
var n=hw(t*=uw)
nj=n*hw(e),rj=n*bw(e),ij=bw(t),mj.point=_j,vj(nj,rj,ij)}function _j(e,t){e*=uw
var n=hw(t*=uw),r=n*hw(e),i=n*bw(e),o=bw(t),a=dw(_w((a=rj*o-ij*i)*a+(a=ij*r-nj*o)*a+(a=nj*i-rj*r)*a),nj*r+rj*i+ij*o)
ZM+=a,GM+=a*(nj+(nj=r)),YM+=a*(rj+(rj=i)),XM+=a*(ij+(ij=o)),vj(nj,rj,ij)}function wj(){mj.point=yj}function Oj(){mj.point=Ej}function kj(){Aj(ej,tj),mj.point=yj}function Ej(e,t){ej=e,tj=t,e*=uw,t*=uw,mj.point=Aj
var n=hw(t)
nj=n*hw(e),rj=n*bw(e),ij=bw(t),vj(nj,rj,ij)}function Aj(e,t){e*=uw
var n=hw(t*=uw),r=n*hw(e),i=n*bw(e),o=bw(t),a=rj*o-ij*i,s=ij*r-nj*o,l=nj*i-rj*r,u=mw(a,s,l),c=kw(u),f=u&&-c/u
JM.add(f*a),KM.add(f*s),QM.add(f*l),ZM+=c,GM+=c*(nj+(nj=r)),YM+=c*(rj+(rj=i)),XM+=c*(ij+(ij=o)),vj(nj,rj,ij)}function Sj(e,t){return null==e||null==t?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Dj(e){return e instanceof ph?e:new ph(e)}const Cj="intersect",Mj="union",jj="_vgsid_",Fj=se(jj),Tj="index:unit"
function Nj(e,t){for(var n,r,i=t.fields,o=t.values,a=i.length,s=0;s<a;++s)if((r=i[s]).getter=se.getter||se(r.field),ht(n=r.getter(e))&&(n=De(n)),ht(o[s])&&(o[s]=De(o[s])),ht(o[s][0])&&(o[s]=o[s].map(De)),"E"===r.type){if(_e(o[s])?o[s].indexOf(n)<0:n!==o[s])return!1}else if("R"===r.type){if(!ft(n,o[s]))return!1}else if("R-RE"===r.type){if(!ft(n,o[s],!0,!1))return!1}else if("R-E"===r.type){if(!ft(n,o[s],!1,!1))return!1}else if("R-LE"===r.type&&!ft(n,o[s],!1,!0))return!1
return!0}const $j=function(e){let t=e,n=e,r=e
function i(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
if(i<o){if(0!==n(t,t))return o
do{const n=i+o>>>1
r(e[n],t)<0?i=n+1:o=n}while(i<o)}return i}return 2!==e.length&&(t=(t,n)=>e(t)-n,n=Sj,r=(t,n)=>Sj(e(t),n)),{left:i,center:function(e,n){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
const a=i(e,n,r,o-1)
return a>r&&t(e[a-1],n)>-t(e[a],n)?a-1:a},right:function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.length
if(i<o){if(0!==n(t,t))return o
do{const n=i+o>>>1
r(e[n],t)<=0?i=n+1:o=n}while(i<o)}return i}}}(Fj),Pj=$j.left,zj=$j.right
var Ij={["".concat(jj,"_union")]:function(){const e=new ph
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
for(const i of n)for(const t of i)e.add(t)
return e},["".concat(jj,"_intersect")]:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
e=new ph(e),n=n.map(Dj)
e:for(const i of e)for(const t of n)if(!t.has(i)){e.delete(i)
continue e}return e},E_union:function(e,t){if(!e.length)return t
for(var n=0,r=t.length;n<r;++n)e.indexOf(t[n])<0&&e.push(t[n])
return e},E_intersect:function(e,t){return e.length?e.filter((e=>t.indexOf(e)>=0)):t},R_union:function(e,t){var n=De(t[0]),r=De(t[1])
return n>r&&(n=t[1],r=t[0]),e.length?(e[0]>n&&(e[0]=n),e[1]<r&&(e[1]=r),e):[n,r]},R_intersect:function(e,t){var n=De(t[0]),r=De(t[1])
return n>r&&(n=t[1],r=t[0]),e.length?r<e[0]||e[1]<n?[]:(e[0]<n&&(e[0]=n),e[1]>r&&(e[1]=r),e):[n,r]}}
function Rj(e,t,n,r){t[0].type!==pC&&oe("First argument to selection functions must be a string literal.")
const i=t[0].value,o=":"+i;(t.length>=2&&Se(t).value)!==Cj||at(r,"@unit")||(r["@unit"]=n.getData(i).indataRef(n,"unit")),at(r,o)||(r[o]=n.getData(i).tuplesRef())}function Lj(e){const t=this.context.data[e]
return t?t.values.value:[]}const Bj=e=>function(t,n){return this.context.dataflow.locale()[e](n)(t)},Uj=Bj("format"),qj=Bj("timeFormat"),Zj=Bj("utcFormat"),Wj=Bj("timeParse"),Vj=Bj("utcParse"),Hj=new Date(2e3,0,1)
function Gj(e,t,n){return Number.isInteger(e)&&Number.isInteger(t)?(Hj.setYear(2e3),Hj.setMonth(e),Hj.setDate(t),qj.call(this,Hj,n)):""}function Yj(e,t,n,r){t[0].type!==pC&&oe("First argument to data functions must be a string literal.")
const i=t[0].value,o=":"+i
if(!at(o,r))try{r[o]=n.getData(i).tuplesRef()}catch(e){}}function Xj(e,t,n,r){if(t[0].type===pC)Jj(n,r,t[0].value)
else for(e in n.scales)Jj(n,r,e)}function Jj(e,t,n){const r="%"+n
if(!at(t,r))try{t[r]=e.scaleRef(n)}catch(e){}}function Kj(e,t){let n
return Ge(e)?e:yt(e)?(n=t.scales[e])&&n.value:void 0}function Qj(e,t){return function(n,r,i){if(n){const t=Kj(n,(i||this).context)
return t&&t.path[e](r)}return t(r)}}const eF=Qj("area",(function(e){return zM=new tw,ew(e,IM),2*zM})),tF=Qj("bounds",(function(e){var t,n,r,i,o,a,s
if(DM=SM=-(EM=AM=1/0),NM=[],ew(e,oj),n=NM.length){for(NM.sort(pj),t=1,o=[r=NM[0]];t<n;++t)gj(r,(i=NM[t])[0])||gj(r,i[1])?(hj(r[0],i[1])>hj(r[0],r[1])&&(r[1]=i[1]),hj(i[0],r[1])>hj(r[0],r[1])&&(r[0]=i[0])):o.push(r=i)
for(a=-1/0,t=0,r=o[n=o.length-1];t<=n;r=i,++t)i=o[t],(s=hj(r[1],i[0]))>a&&(a=s,EM=i[0],SM=r[1])}return NM=$M=null,EM===1/0||AM===1/0?[[NaN,NaN],[NaN,NaN]]:[[EM,AM],[SM,DM]]})),nF=Qj("centroid",(function(e){qM=ZM=WM=VM=HM=GM=YM=XM=0,JM=new tw,KM=new tw,QM=new tw,ew(e,mj)
var t=+JM,n=+KM,r=+QM,i=mw(t,n,r)
return i<rw&&(t=GM,n=YM,r=XM,ZM<nw&&(t=WM,n=VM,r=HM),(i=mw(t,n,r))<rw)?[NaN,NaN]:[dw(n,t)*lw,kw(r/i)*lw]}))
function rF(e,t,n){try{e[t].apply(e,["EXPRESSION"].concat([].slice.call(n)))}catch(t){e.warn(t)}return n[n.length-1]}function iF(e){const t=e/255
return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function oF(e){const t=Lf(e)
return.2126*iF(t.r)+.7152*iF(t.g)+.0722*iF(t.b)}function aF(e,t){return e===t||e!=e&&t!=t||(_e(e)?!(!_e(t)||e.length!==t.length)&&function(e,t){for(let n=0,r=e.length;n<r;++n)if(!aF(e[n],t[n]))return!1
return!0}(e,t):!(!we(e)||!we(t))&&sF(e,t))}function sF(e,t){for(const n in e)if(!aF(e[n],t[n]))return!1
return!0}function lF(e){return t=>sF(e,t)}const uF={}
function cF(e){return _e(e)||ArrayBuffer.isView(e)?e:null}function fF(e){return cF(e)||(yt(e)?e:null)}const dF=e=>e.data
function hF(e,t){const n=Lj.call(t,e)
return n.root&&n.root.lookup||{}}const pF=()=>"undefined"!=typeof window&&window||null
function gF(e,t,n){if(!e)return[]
const[r,i]=e,o=(new Fm).set(r[0],r[1],i[0],i[1])
return ox(n||this.context.dataflow.scenegraph().root,o,function(e){let t=null
if(e){const n=Ve(e.marktype),r=Ve(e.markname)
t=e=>(!n.length||n.some((t=>e.marktype===t)))&&(!r.length||r.some((t=>e.name===t)))}return t}(t))}const mF={random:()=>zs(),cumulativeNormal:Gs,cumulativeLogNormal:el,cumulativeUniform:al,densityNormal:Hs,densityLogNormal:Qs,densityUniform:ol,quantileNormal:Ys,quantileLogNormal:tl,quantileUniform:sl,sampleNormal:Vs,sampleLogNormal:Ks,sampleUniform:il,isArray:_e,isBoolean:dt,isDate:ht,isDefined:e=>void 0!==e,isNumber:gt,isObject:we,isRegExp:mt,isString:yt,isTuple:Ra,isValid:e=>null!=e&&e==e,toBoolean:At,toDate:e=>Dt(e),toNumber:De,toString:Ct,indexof:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return fF(e).indexOf(...n)},join:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return cF(e).join(...n)},lastindexof:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return fF(e).lastIndexOf(...n)},replace:function(e,t,n){return Ge(n)&&oe("Function argument passed to replace."),String(e).replace(t,n)},reverse:function(e){return cF(e).slice().reverse()},slice:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return fF(e).slice(...n)},flush:ut,lerp:bt,merge:function(){const e=[].slice.call(arguments)
return e.unshift({}),nt(...e)},pad:Ot,peek:Se,pluck:function(e,t){const n=uF[t]||(uF[t]=se(t))
return _e(e)?e.map(n):n(e)},span:kt,inrange:ft,truncate:jt,rgb:Lf,lab:qh,hcl:Xh,hsl:Yf,luminance:oF,contrast:function(e,t){const n=oF(e),r=oF(t)
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)},sequence:Al,format:Uj,utcFormat:Zj,utcParse:Vj,utcOffset:ai,utcSequence:ui,timeFormat:qj,timeParse:Wj,timeOffset:oi,timeSequence:li,timeUnitSpecifier:jr,monthFormat:function(e){return Gj.call(this,e,1,"%B")},monthAbbrevFormat:function(e){return Gj.call(this,e,1,"%b")},dayFormat:function(e){return Gj.call(this,0,2+e,"%A")},dayAbbrevFormat:function(e){return Gj.call(this,0,2+e,"%a")},quarter:Ze,utcquarter:We,week:$r,utcweek:Br,dayofyear:Nr,utcdayofyear:Lr,warn:function(){return rF(this.context.dataflow,"warn",arguments)},info:function(){return rF(this.context.dataflow,"info",arguments)},debug:function(){return rF(this.context.dataflow,"debug",arguments)},extent:e=>rt(e),inScope:function(e){const t=this.context.group
let n=!1
if(t)for(;e;){if(e===t){n=!0
break}e=e.mark.group}return n},intersect:gF,clampRange:He,pinchDistance:function(e){const t=e.touches,n=t[0].clientX-t[1].clientX,r=t[0].clientY-t[1].clientY
return Math.sqrt(n*n+r*r)},pinchAngle:function(e){const t=e.touches
return Math.atan2(t[0].clientY-t[1].clientY,t[0].clientX-t[1].clientX)},screen:function(){const e=pF()
return e?e.screen:{}},containerSize:function(){const e=this.context.dataflow,t=e.container&&e.container()
return t?[t.clientWidth,t.clientHeight]:[void 0,void 0]},windowSize:function(){const e=pF()
return e?[e.innerWidth,e.innerHeight]:[void 0,void 0]},bandspace:function(e,t,n){return vp(e||0,t||0,n||0)},setdata:function(e,t){const n=this.context.dataflow,r=this.context.data[e].input
return n.pulse(r,n.changeset().remove(de).insert(t)),1},pathShape:function(e){let t=null
return function(n){return n?tm(n,t=t||Zg(e)):e}},panLinear:$e,panLog:Pe,panPow:ze,panSymlog:Ie,zoomLinear:Le,zoomLog:Be,zoomPow:Ue,zoomSymlog:qe,encode:function(e,t,n){if(e){const n=this.context.dataflow,r=e.mark.source
n.pulse(r,n.changeset().encode(e,t))}return void 0!==n?n:e},modify:function(e,t,n,r,i,o){const a=this.context.dataflow,s=this.context.data[e],l=s.input,u=a.stamp()
let c,f,d=s.changes
if(!1===a._trigger||!(l.value.length||t||r))return 0
if((!d||d.stamp<u)&&(s.changes=d=a.changeset(),d.stamp=u,a.runAfter((()=>{s.modified=!0,a.pulse(l,d).run()}),!0,1)),n&&(c=!0===n?de:_e(n)||Ra(n)?n:lF(n),d.remove(c)),t&&d.insert(t),r&&(c=lF(r),l.value.some(c)?d.remove(c):d.insert(r)),i)for(f in o)d.modify(i,f,o[f])
return 1},lassoAppend:function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5
const i=e[e.length-1]
return void 0===i||Math.sqrt((i[0]-t)**2+(i[1]-n)**2)>r?(e.push([t,n]),[...e]):e},lassoPath:function(e){return(null!=e?e:[]).reduce(((t,n,r)=>{let[i,o]=n
return t+(0==r?"M ".concat(i,",").concat(o," "):r===e.length-1?" Z":"L ".concat(i,",").concat(o," "))}),"")},intersectLasso:function(e,t,n){const{x:r,y:i,mark:o}=n,a=(new Fm).set(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)
for(const[s,l]of t)s<a.x1&&(a.x1=s),s>a.x2&&(a.x2=s),l<a.y1&&(a.y1=l),l>a.y2&&(a.y2=l)
return a.translate(r,i),gF([[a.x1,a.y1],[a.x2,a.y2]],e,o).filter((e=>function(e,t,n){let r=0
for(let i=0,o=n.length-1;i<n.length;o=i++){const[a,s]=n[o],[l,u]=n[i]
u>t!=s>t&&e<(a-l)*(t-u)/(s-u)+l&&r++}return 1&r}(e.x,e.y,t)))}},yF=["view","item","group","xy","x","y"],vF="this.",bF={},xF={forbidden:["_"],allowed:["datum","event","item"],fieldvar:"datum",globalvar:e=>"_[".concat(Et("$"+e),"]"),functions:function(e){const t=vM(e)
yF.forEach((e=>t[e]="event.vega."+e))
for(const n in mF)t[n]=vF+n
return nt(t,function(e,t,n){t.__bandwidth=e=>e&&e.bandwidth?e.bandwidth():0,n._bandwidth=Xj,n._range=Xj,n._scale=Xj
const r=t=>"_["+(t.type===pC?Et("%"+t.value):Et("%")+"+"+e(t))+"]"
return{_bandwidth:e=>"this.__bandwidth(".concat(r(e[0]),")"),_range:e=>"".concat(r(e[0]),".range()"),_scale:t=>"".concat(r(t[0]),"(").concat(e(t[1]),")")}}(e,mF,bF)),t},constants:yM,visitors:bF},_F=bM(xF)
function wF(e,t,n){return 1===arguments.length?mF[e]:(mF[e]=t,n&&(bF[e]=n),_F&&(_F.functions[e]=vF+e),this)}function OF(e,t){const n={}
let r
try{r=mM(e=yt(e)?e:Et(e)+"")}catch(t){oe("Expression parse error: "+e)}r.visit((e=>{if(e.type!==gC)return
const r=e.callee.name,i=xF.visitors[r]
i&&i(r,e.arguments,t,n)}))
const i=_F(r)
return i.globals.forEach((e=>{const r="$"+e
!at(n,r)&&t.getSignal(e)&&(n[r]=t.signalRef(e))})),{$expr:nt({code:i.code},t.options.ast?{ast:r}:null),$fields:i.fields,$params:n}}wF("bandwidth",(function(e,t){const n=Kj(e,(t||this).context)
return n&&n.bandwidth?n.bandwidth():0}),Xj),wF("copy",(function(e,t){const n=Kj(e,(t||this).context)
return n?n.copy():void 0}),Xj),wF("domain",(function(e,t){const n=Kj(e,(t||this).context)
return n?n.domain():[]}),Xj),wF("range",(function(e,t){const n=Kj(e,(t||this).context)
return n&&n.range?n.range():[]}),Xj),wF("invert",(function(e,t,n){const r=Kj(e,(n||this).context)
return r?_e(t)?(r.invertRange||r.invert)(t):(r.invert||r.invertExtent)(t):void 0}),Xj),wF("scale",(function(e,t,n){const r=Kj(e,(n||this).context)
return r?r(t):void 0}),Xj),wF("gradient",(function(e,t,n,r,i){e=Kj(e,(i||this).context)
const o=Pg(t,n)
let a=e.domain(),s=a[0],l=Se(a),u=ue
return l-s?u=ag(e,s,l):e=(e.interpolator?Hp("sequential")().interpolator(e.interpolator()):Hp("linear")().interpolate(e.interpolate()).range(e.range())).domain([s=0,l=1]),e.ticks&&(a=e.ticks(+r||15),s!==a[0]&&a.unshift(s),l!==Se(a)&&a.push(l)),a.forEach((t=>o.stop(u(t),e(t)))),o}),Xj),wF("geoArea",eF,Xj),wF("geoBounds",tF,Xj),wF("geoCentroid",nF,Xj),wF("geoShape",(function(e,t,n){const r=Kj(e,(n||this).context)
return function(e){return r?r.path.context(e)(t):""}}),Xj),wF("indata",(function(e,t,n){const r=this.context.data[e]["index:"+t],i=r?r.value.get(n):void 0
return i?i.count:i}),(function(e,t,n,r){t[0].type!==pC&&oe("First argument to indata must be a string literal."),t[1].type!==pC&&oe("Second argument to indata must be a string literal.")
const i=t[0].value,o=t[1].value,a="@"+o
at(a,r)||(r[a]=n.getData(i).indataRef(n,o))})),wF("data",Lj,Yj),wF("treePath",(function(e,t,n){const r=hF(e,this),i=r[t],o=r[n]
return i&&o?i.path(o).map(dF):void 0}),Yj),wF("treeAncestors",(function(e,t){const n=hF(e,this)[t]
return n?n.ancestors().map(dF):void 0}),Yj),wF("vlSelectionTest",(function(e,t,n){for(var r,i,o,a,s,l=this.context.data[e],u=l?l.values.value:[],c=l?l[Tj]&&l[Tj].value:void 0,f=n===Cj,d=u.length,h=0;h<d;++h)if(r=u[h],c&&f){if(-1===(o=(i=i||{})[a=r.unit]||0))continue
if(s=Nj(t,r),i[a]=s?-1:++o,s&&1===c.size)return!0
if(!s&&o===c.get(a).count)return!1}else if(f^(s=Nj(t,r)))return s
return d&&f}),Rj),wF("vlSelectionIdTest",(function(e,t,n){const r=this.context.data[e],i=r?r.values.value:[],o=r?r[Tj]&&r[Tj].value:void 0,a=n===Cj,s=Fj(t),l=Pj(i,s)
if(l===i.length)return!1
if(Fj(i[l])!==s)return!1
if(o&&a){if(1===o.size)return!0
if(zj(i,s)-l<o.size)return!1}return!0}),Rj),wF("vlSelectionResolve",(function(e,t,n,r){for(var i,o,a,s,l,u,c,f,d,h,p,g,m=this.context.data[e],y=m?m.values.value:[],v={},b={},x={},_=y.length,w=0;w<_;++w)if(s=(i=y[w]).unit,o=i.fields,a=i.values,o&&a){for(p=0,g=o.length;p<g;++p)l=o[p],f=(c=v[l.field]||(v[l.field]={}))[s]||(c[s]=[]),x[l.field]=d=l.type.charAt(0),h=Ij["".concat(d,"_union")],c[s]=h(f,Ve(a[p]))
n&&(f=b[s]||(b[s]=[])).push(Ve(a).reduce(((e,t,n)=>(e[o[n].field]=t,e)),{}))}else l=jj,u=Fj(i),(f=(c=v[l]||(v[l]={}))[s]||(c[s]=[])).push(u),n&&(f=b[s]||(b[s]=[])).push({[jj]:u})
return t=t||Mj,v._vgsid_?v._vgsid_=Ij["".concat(jj,"_").concat(t)](...Object.values(v._vgsid_)):Object.keys(v).forEach((e=>{v[e]=Object.keys(v[e]).map((t=>v[e][t])).reduce(((n,r)=>void 0===n?r:Ij["".concat(x[e],"_").concat(t)](n,r)))})),y=Object.keys(b),n&&y.length&&(v[r?"vlPoint":"vlMulti"]=t===Mj?{or:y.reduce(((e,t)=>(e.push(...b[t]),e)),[])}:{and:y.map((e=>({or:b[e]})))}),v}),Rj),wF("vlSelectionTuples",(function(e,t){return e.map((e=>nt(t.fields?{values:t.fields.map((t=>(t.getter||(t.getter=se(t.field)))(e.datum)))}:{[jj]:Fj(e.datum)},t)))}))
const kF=Mt(["rule"]),EF=Mt(["group","image","rect"])
function AF(e){return(e+"").toLowerCase()}function SF(e,t,n){";"!==n[n.length-1]&&(n="return("+n+");")
const r=Function(...t.concat(n))
return e&&e.functions?r.bind(e.functions):r}var DF={operator:(e,t)=>SF(e,["_"],t.code),parameter:(e,t)=>SF(e,["datum","_"],t.code),event:(e,t)=>SF(e,["event"],t.code),handler:(e,t)=>SF(e,["_","event"],"var datum=event.item&&event.item.datum;return ".concat(t.code,";")),encode:(e,t)=>{const{marktype:n,channels:r}=t
let i="var o=item,datum=o.datum,m=0,$;"
for(const o in r){const e="o["+Et(o)+"]"
i+="$=".concat(r[o].code,";if(").concat(e,"!==$)").concat(e,"=$,m=1;")}return i+=function(e,t){let n=""
return kF[t]||(e.x2&&(e.x?(EF[t]&&(n+="if(o.x>o.x2)$=o.x,o.x=o.x2,o.x2=$;"),n+="o.width=o.x2-o.x;"):n+="o.x=o.x2-(o.width||0);"),e.xc&&(n+="o.x=o.xc-(o.width||0)/2;"),e.y2&&(e.y?(EF[t]&&(n+="if(o.y>o.y2)$=o.y,o.y=o.y2,o.y2=$;"),n+="o.height=o.y2-o.y;"):n+="o.y=o.y2-(o.height||0);"),e.yc&&(n+="o.y=o.yc-(o.height||0)/2;")),n}(r,n),i+="return m;",SF(e,["item","_"],i)},codegen:{get(e){const t="[".concat(e.map(Et).join("]["),"]"),n=Function("_","return _".concat(t,";"))
return n.path=t,n},comparator(e,t){let n
const r=Function("a","b","var u, v; return "+e.map(((e,r)=>{const i=t[r]
let o,a
return e.path?(o="a".concat(e.path),a="b".concat(e.path)):((n=n||{})["f"+r]=e,o="this.f".concat(r,"(a)"),a="this.f".concat(r,"(b)")),function(e,t,n,r){return"((u = ".concat(e,") < (v = ").concat(t,") || u == null) && v != null ? ").concat(n,"\n  : (u > v || v == null) && u != null ? ").concat(r,"\n  : ((v = v instanceof Date ? +v : v), (u = u instanceof Date ? +u : u)) !== u && v === v ? ").concat(n,"\n  : v !== v && u === u ? ").concat(r," : ")}(o,a,-i,i)})).join("")+"0;")
return n?r.bind(n):r}}}
function CF(e,t,n){if(!e||!we(e))return e
for(let r,i=0,o=MF.length;i<o;++i)if(r=MF[i],at(e,r.key))return r.parse(e,t,n)
return e}var MF=[{key:"$ref",parse:function(e,t){return t.get(e.$ref)||oe("Operator not defined: "+e.$ref)}},{key:"$key",parse:function(e,t){const n="k:"+e.$key+"_"+!!e.$flat
return t.fn[n]||(t.fn[n]=vt(e.$key,e.$flat,t.expr.codegen))}},{key:"$expr",parse:function(e,t,n){e.$params&&t.parseParameters(e.$params,n)
const r="e:"+e.$expr.code+"_"+e.$name
return t.fn[r]||(t.fn[r]=Q(t.parameterExpression(e.$expr),e.$fields,e.$name))}},{key:"$field",parse:function(e,t){if(!e.$field)return null
const n="f:"+e.$field+"_"+e.$name
return t.fn[n]||(t.fn[n]=se(e.$field,e.$name,t.expr.codegen))}},{key:"$encode",parse:function(e,t){const n=e.$encode,r={}
for(const i in n){const e=n[i]
r[i]=Q(t.encodeExpression(e.$expr),e.$fields),r[i].output=e.$output}return r}},{key:"$compare",parse:function(e,t){const n="c:"+e.$compare+"_"+e.$order,r=Ve(e.$compare).map((e=>e&&e.$tupleid?La:e))
return t.fn[n]||(t.fn[n]=Ye(r,e.$order,t.expr.codegen))}},{key:"$context",parse:function(e,t){return t}},{key:"$subflow",parse:function(e,t){const n=e.$subflow
return function(e,r,i){const o=t.fork().parse(n),a=o.get(n.operators[0].id),s=o.signals.parent
return s&&s.set(i),a.detachSubflow=()=>t.detach(o),a}}},{key:"$tupleid",parse:function(){return La}}]
const jF={skip:!0}
function FF(e,t,n,r){return new TF(e,t,n,r)}function TF(e,t,n,r){this.dataflow=e,this.transforms=t,this.events=e.events.bind(e),this.expr=r||DF,this.signals={},this.scales={},this.nodes={},this.data={},this.fn={},n&&(this.functions=Object.create(n),this.functions.context=this)}function NF(e){this.dataflow=e.dataflow,this.transforms=e.transforms,this.events=e.events,this.expr=e.expr,this.signals=Object.create(e.signals),this.scales=Object.create(e.scales),this.nodes=Object.create(e.nodes),this.data=Object.create(e.data),this.fn=Object.create(e.fn),e.functions&&(this.functions=Object.create(e.functions),this.functions.context=this)}function $F(e,t){e&&(null==t?e.removeAttribute("aria-label"):e.setAttribute("aria-label",t))}TF.prototype=NF.prototype={fork(){const e=new NF(this)
return(this.subcontext||(this.subcontext=[])).push(e),e},detach(e){this.subcontext=this.subcontext.filter((t=>t!==e))
const t=Object.keys(e.nodes)
for(const n of t)e.nodes[n]._targets=null
for(const n of t)e.nodes[n].detach()
e.nodes=null},get(e){return this.nodes[e]},set(e,t){return this.nodes[e]=t},add(e,t){const n=this,r=n.dataflow,i=e.value
if(n.set(e.id,t),"collect"===AF(e.type)&&i&&(i.$ingest?r.ingest(t,i.$ingest,i.$format):i.$request?r.preload(t,i.$request,i.$format):r.pulse(t,r.changeset().insert(i))),e.root&&(n.root=t),e.parent){let i=n.get(e.parent.$ref)
i?(r.connect(i,[t]),t.targets().add(i)):(n.unresolved=n.unresolved||[]).push((()=>{i=n.get(e.parent.$ref),r.connect(i,[t]),t.targets().add(i)}))}if(e.signal&&(n.signals[e.signal]=t),e.scale&&(n.scales[e.scale]=t),e.data)for(const o in e.data){const r=n.data[o]||(n.data[o]={})
e.data[o].forEach((e=>r[e]=t))}},resolve(){return(this.unresolved||[]).forEach((e=>e())),delete this.unresolved,this},operator(e,t){this.add(e,this.dataflow.add(e.value,t))},transform(e,t){this.add(e,this.dataflow.add(this.transforms[AF(t)]))},stream(e,t){this.set(e.id,t)},update(e,t,n,r,i){this.dataflow.on(t,n,r,i,e.options)},operatorExpression(e){return this.expr.operator(this,e)},parameterExpression(e){return this.expr.parameter(this,e)},eventExpression(e){return this.expr.event(this,e)},handlerExpression(e){return this.expr.handler(this,e)},encodeExpression(e){return this.expr.encode(this,e)},parse:function(e){const t=this,n=e.operators||[]
return e.background&&(t.background=e.background),e.eventConfig&&(t.eventConfig=e.eventConfig),e.locale&&(t.locale=e.locale),n.forEach((e=>t.parseOperator(e))),n.forEach((e=>t.parseOperatorParameters(e))),(e.streams||[]).forEach((e=>t.parseStream(e))),(e.updates||[]).forEach((e=>t.parseUpdate(e))),t.resolve()},parseOperator:function(e){const t=this
"operator"!==AF(e.type)&&e.type?t.transform(e,e.type):t.operator(e,e.update?t.operatorExpression(e.update):null)},parseOperatorParameters:function(e){const t=this
if(e.params){const n=t.get(e.id)
n||oe("Invalid operator id: "+e.id),t.dataflow.connect(n,n.parameters(t.parseParameters(e.params),e.react,e.initonly))}},parseParameters:function(e,t){t=t||{}
const n=this
for(const r in e){const i=e[r]
t[r]=_e(i)?i.map((e=>CF(e,n,t))):CF(i,n,t)}return t},parseStream:function(e){var t,n=this,r=null!=e.filter?n.eventExpression(e.filter):void 0,i=null!=e.stream?n.get(e.stream):void 0
e.source?i=n.events(e.source,e.type,r):e.merge&&(i=(t=e.merge.map((e=>n.get(e))))[0].merge.apply(t[0],t.slice(1))),e.between&&(t=e.between.map((e=>n.get(e))),i=i.between(t[0],t[1])),e.filter&&(i=i.filter(r)),null!=e.throttle&&(i=i.throttle(+e.throttle)),null!=e.debounce&&(i=i.debounce(+e.debounce)),null==i&&oe("Invalid stream definition: "+JSON.stringify(e)),e.consume&&i.consume(!0),n.stream(e,i)},parseUpdate:function(e){var t,n=this,r=we(r=e.source)?r.$ref:r,i=n.get(r),o=e.update,a=void 0
i||oe("Source not defined: "+e.source),t=e.target&&e.target.$expr?n.eventExpression(e.target.$expr):n.get(e.target),o&&o.$expr&&(o.$params&&(a=n.parseParameters(o.$params)),o=n.handlerExpression(o.$expr)),n.update(e,i,t,o,a)},getState:function(e){var t=this,n={}
if(e.signals){var r=n.signals={}
Object.keys(t.signals).forEach((n=>{const i=t.signals[n]
e.signals(n,i)&&(r[n]=i.value)}))}if(e.data){var i=n.data={}
Object.keys(t.data).forEach((n=>{const r=t.data[n]
e.data(n,r)&&(i[n]=r.input.value)}))}return t.subcontext&&!1!==e.recurse&&(n.subcontext=t.subcontext.map((t=>t.getState(e)))),n},setState:function(e){var t=this,n=t.dataflow,r=e.data,i=e.signals
Object.keys(i||{}).forEach((e=>{n.update(t.signals[e],i[e],jF)})),Object.keys(r||{}).forEach((e=>{n.pulse(t.data[e].input,n.changeset().remove(de).insert(r[e]))})),(e.subcontext||[]).forEach(((e,n)=>{const r=t.subcontext[n]
r&&r.setState(e)}))}}
const PF="default"
function zF(e,t){const n=e.globalCursor()?"undefined"!=typeof document&&document.body:e.container()
if(n)return null==t?n.style.removeProperty("cursor"):n.style.cursor=t}function IF(e,t){var n=e._runtime.data
return at(n,t)||oe("Unrecognized data set: "+t),n[t]}function RF(e,t){Ha(t)||oe("Second argument to changes must be a changeset.")
const n=IF(this,e)
return n.modified=!0,this.pulse(n.input,t)}function LF(e){var t=e.padding()
return Math.max(0,e._viewWidth+t.left+t.right)}function BF(e){var t=e.padding()
return Math.max(0,e._viewHeight+t.top+t.bottom)}function UF(e){var t=e.padding(),n=e._origin
return[t.left+n[0],t.top+n[1]]}const qF="view",ZF={trap:!1}
function WF(e,t,n,r){e._eventListeners.push({type:n,sources:Ve(t),handler:r})}function VF(e,t,n){const r=e._eventConfig&&e._eventConfig[t]
return!(!1===r||we(r)&&!r[n])||(e.warn("Blocked ".concat(t," ").concat(n," event listener.")),!1)}function HF(e){return e.item}function GF(e){return e.item.mark.source}function YF(e){return function(t,n){return n.vega.view().changeset().encode(n.item,e)}}function XF(e,t,n){const r=document.createElement(e)
for(const i in t)r.setAttribute(i,t[i])
return null!=n&&(r.textContent=n),r}function JF(e,t,n,r){const i=n.event||"input",o=()=>e.update(t.value)
r.signal(n.signal,t.value),t.addEventListener(i,o),WF(r,t,i,o),e.set=e=>{t.value=e,t.dispatchEvent(function(e){return"undefined"!=typeof Event?new Event(e):{type:e}}(i))}}function KF(e,t,n,r){const i=r.signal(n.signal),o=XF("div",{class:"vega-bind"}),a="radio"===n.input?o:o.appendChild(XF("label"))
a.appendChild(XF("span",{class:"vega-bind-name"},n.name||n.signal)),t.appendChild(o)
let s=QF
switch(n.input){case"checkbox":s=eT
break
case"select":s=tT
break
case"radio":s=nT
break
case"range":s=rT}s(e,a,n,i)}function QF(e,t,n,r){const i=XF("input")
for(const o in n)"signal"!==o&&"element"!==o&&i.setAttribute("input"===o?"type":o,n[o])
i.setAttribute("name",n.signal),i.value=r,t.appendChild(i),i.addEventListener("input",(()=>e.update(i.value))),e.elements=[i],e.set=e=>i.value=e}function eT(e,t,n,r){const i={type:"checkbox",name:n.signal}
r&&(i.checked=!0)
const o=XF("input",i)
t.appendChild(o),o.addEventListener("change",(()=>e.update(o.checked))),e.elements=[o],e.set=e=>o.checked=!!e||null}function tT(e,t,n,r){const i=XF("select",{name:n.signal}),o=n.labels||[]
n.options.forEach(((e,t)=>{const n={value:e}
iT(e,r)&&(n.selected=!0),i.appendChild(XF("option",n,(o[t]||e)+""))})),t.appendChild(i),i.addEventListener("change",(()=>{e.update(n.options[i.selectedIndex])})),e.elements=[i],e.set=e=>{for(let t=0,r=n.options.length;t<r;++t)if(iT(n.options[t],e))return void(i.selectedIndex=t)}}function nT(e,t,n,r){const i=XF("span",{class:"vega-bind-radio"}),o=n.labels||[]
t.appendChild(i),e.elements=n.options.map(((t,a)=>{const s={type:"radio",name:n.signal,value:t}
iT(t,r)&&(s.checked=!0)
const l=XF("input",s)
l.addEventListener("change",(()=>e.update(t)))
const u=XF("label",{},(o[a]||t)+"")
return u.prepend(l),i.appendChild(u),l})),e.set=t=>{const n=e.elements,r=n.length
for(let e=0;e<r;++e)iT(n[e].value,t)&&(n[e].checked=!0)}}function rT(e,t,n,r){r=void 0!==r?r:(+n.max+ +n.min)/2
const i=null!=n.max?n.max:Math.max(100,+r)||100,o=n.min||Math.min(0,i,+r)||0,a=n.step||Jt(o,i,100),s=XF("input",{type:"range",name:n.signal,min:o,max:i,step:a})
s.value=r
const l=XF("span",{},+r)
t.appendChild(s),t.appendChild(l)
const u=()=>{l.textContent=s.value,e.update(+s.value)}
s.addEventListener("input",u),s.addEventListener("change",u),e.elements=[s],e.set=e=>{s.value=e,l.textContent=e}}function iT(e,t){return e===t||e+""==t+""}function oT(e,t,n,r,i,o){return(t=t||new r(e.loader())).initialize(n,LF(e),BF(e),UF(e),i,o).background(e.background())}function aT(e,t){return t?function(){try{t.apply(this,arguments)}catch(t){e.error(t)}}:null}function sT(e,t,n){if("string"==typeof t){if("undefined"==typeof document)return e.error("DOM document instance not found."),null
if(!(t=document.querySelector(t)))return e.error("Signal bind element not found: "+t),null}if(t&&n)try{t.textContent=""}catch(n){t=null,e.error(n)}return t}const lT=e=>+e||0
function uT(e){return we(e)?{top:lT(e.top),bottom:lT(e.bottom),left:lT(e.left),right:lT(e.right)}:(e=>({top:e,bottom:e,left:e,right:e}))(lT(e))}async function cT(e,t,n,r){const i=ix(t),o=i&&i.headless
return o||oe("Unrecognized renderer type: "+t),await e.runAsync(),oT(e,null,null,o,n,r).renderAsync(e._scenegraph.root)}var fT="padding",dT={skip:!0}
function hT(e,t){var n=e.autosize(),r=e.padding()
return t-(n&&n.contains===fT?r.left+r.right:0)}function pT(e,t){var n=e.autosize(),r=e.padding()
return t-(n&&n.contains===fT?r.top+r.bottom:0)}function gT(e,t){return t.modified&&_e(t.input.value)&&e.indexOf("_:vega:_")}function mT(e,t){return!("parent"===e||t instanceof bs.proxy)}function yT(e,t,n,r){const i=e.element()
i&&i.setAttribute("title",function(e){return null==e?"":_e(e)?vT(e):we(e)&&!ht(e)?(t=e,Object.keys(t).map((e=>{const n=t[e]
return e+": "+(_e(n)?vT(n):bT(n))})).join("\n")):e+""
var t}(r))}function vT(e){return"["+e.map(bT).join(", ")+"]"}function bT(e){return _e(e)?"[…]":we(e)&&!ht(e)?"{…}":e}function xT(e,t){const n=this
if(t=t||{},ms.call(n),t.loader&&n.loader(t.loader),t.logger&&n.logger(t.logger),null!=t.logLevel&&n.logLevel(t.logLevel),t.locale||e.locale){const r=nt({},e.locale,t.locale)
n.locale(aa(r.number,r.time))}n._el=null,n._elBind=null,n._renderType=t.renderer||nx.Canvas,n._scenegraph=new zv
const r=n._scenegraph.root
n._renderer=null,n._tooltip=t.tooltip||yT,n._redraw=!0,n._handler=(new ub).scene(r),n._globalCursor=!1,n._preventDefault=!1,n._timers=[],n._eventListeners=[],n._resizeListeners=[],n._eventConfig=function(e){const t=nt({defaults:{}},e),n=(e,t)=>{t.forEach((t=>{_e(e[t])&&(e[t]=Mt(e[t]))}))}
return n(t.defaults,["prevent","allow"]),n(t,["view","window","selector"]),t}(e.eventConfig),n.globalCursor(n._eventConfig.globalCursor)
const i=function(e,t,n){return FF(e,bs,mF,n).parse(t)}(n,e,t.expr)
n._runtime=i,n._signals=i.signals,n._bind=(e.bindings||[]).map((e=>({state:null,param:nt({},e)}))),i.root&&i.root.set(r),r.source=i.data.root.input,n.pulse(i.data.root.input,n.changeset().insert(r.items)),n._width=n.width(),n._height=n.height(),n._viewWidth=hT(n,n._width),n._viewHeight=pT(n,n._height),n._origin=[0,0],n._resize=0,n._autosize=1,function(e){var t=e._signals,n=t.width,r=t.height,i=t.padding
function o(){e._autosize=e._resize=1}e._resizeWidth=e.add(null,(t=>{e._width=t.size,e._viewWidth=hT(e,t.size),o()}),{size:n}),e._resizeHeight=e.add(null,(t=>{e._height=t.size,e._viewHeight=pT(e,t.size),o()}),{size:r})
const a=e.add(null,o,{pad:i})
e._resizeWidth.rank=n.rank+1,e._resizeHeight.rank=r.rank+1,a.rank=i.rank+1}(n),function(e){e.add(null,(t=>(e._background=t.bg,e._resize=1,t.bg)),{bg:e._signals.background})}(n),function(e){const t=e._signals.cursor||(e._signals.cursor=e.add({user:PF,item:null}))
e.on(e.events("view","mousemove"),t,((e,n)=>{const r=t.value,i=r?yt(r)?r:r.user:PF,o=n.item&&n.item.cursor||null
return r&&i===r.user&&o==r.item?r:{user:i,item:o}})),e.add(null,(function(t){let n=t.cursor,r=this.value
return yt(n)||(r=n.item,n=n.user),zF(e,n&&n!==PF?n:r||n),r}),{cursor:t})}(n),n.description(e.description),t.hover&&n.hover(),t.container&&n.initialize(t.container,t.bind)}function _T(e,t){return at(e._signals,t)?e._signals[t]:oe("Unrecognized signal name: "+Et(t))}function wT(e,t){const n=(e._targets||[]).filter((e=>e._update&&e._update.handler===t))
return n.length?n[0]:null}function OT(e,t,n,r){let i=wT(n,r)
return i||(i=aT(e,(()=>r(t,n.value))),i.handler=r,e.on(n,null,i)),e}function kT(e,t,n){const r=wT(t,n)
return r&&t._targets.remove(r),e}ct(xT,ms,{async evaluate(e,t,n){if(await ms.prototype.evaluate.call(this,e,t),this._redraw||this._resize)try{this._renderer&&(this._resize&&(this._resize=0,i=UF(r=this),o=LF(r),a=BF(r),r._renderer.background(r.background()),r._renderer.resize(o,a,i),r._handler.origin(i),r._resizeListeners.forEach((e=>{try{e(o,a)}catch(e){r.error(e)}}))),await this._renderer.renderAsync(this._scenegraph.root)),this._redraw=!1}catch(e){this.error(e)}var r,i,o,a
return n&&Pa(this,n),this},dirty(e){this._redraw=!0,this._renderer&&this._renderer.dirty(e)},description(e){if(arguments.length){const t=null!=e?e+"":null
return t!==this._desc&&$F(this._el,this._desc=t),this}return this._desc},container(){return this._el},scenegraph(){return this._scenegraph},origin(){return this._origin.slice()},signal(e,t,n){const r=_T(this,e)
return 1===arguments.length?r.value:this.update(r,t,n)},width(e){return arguments.length?this.signal("width",e):this.signal("width")},height(e){return arguments.length?this.signal("height",e):this.signal("height")},padding(e){return arguments.length?this.signal("padding",uT(e)):uT(this.signal("padding"))},autosize(e){return arguments.length?this.signal("autosize",e):this.signal("autosize")},background(e){return arguments.length?this.signal("background",e):this.signal("background")},renderer(e){return arguments.length?(ix(e)||oe("Unrecognized renderer type: "+e),e!==this._renderType&&(this._renderType=e,this._resetRenderer()),this):this._renderType},tooltip(e){return arguments.length?(e!==this._tooltip&&(this._tooltip=e,this._resetRenderer()),this):this._tooltip},loader(e){return arguments.length?(e!==this._loader&&(ms.prototype.loader.call(this,e),this._resetRenderer()),this):this._loader},resize(){return this._autosize=1,this.touch(_T(this,"autosize"))},_resetRenderer(){this._renderer&&(this._renderer=null,this.initialize(this._el,this._elBind))},_resizeView:function(e,t,n,r,i,o){this.runAfter((a=>{let s=0
a._autosize=0,a.width()!==n&&(s=1,a.signal("width",n,dT),a._resizeWidth.skip(!0)),a.height()!==r&&(s=1,a.signal("height",r,dT),a._resizeHeight.skip(!0)),a._viewWidth!==e&&(a._resize=1,a._viewWidth=e),a._viewHeight!==t&&(a._resize=1,a._viewHeight=t),a._origin[0]===i[0]&&a._origin[1]===i[1]||(a._resize=1,a._origin=i),s&&a.run("enter"),o&&a.runAfter((e=>e.resize()))}),!1,1)},addEventListener(e,t,n){let r=t
return n&&!1===n.trap||(r=aT(this,t),r.raw=t),this._handler.on(e,r),this},removeEventListener(e,t){for(var n,r,i=this._handler.handlers(e),o=i.length;--o>=0;)if(r=i[o].type,n=i[o].handler,e===r&&(t===n||t===n.raw)){this._handler.off(r,n)
break}return this},addResizeListener(e){const t=this._resizeListeners
return t.indexOf(e)<0&&t.push(e),this},removeResizeListener(e){var t=this._resizeListeners,n=t.indexOf(e)
return n>=0&&t.splice(n,1),this},addSignalListener(e,t){return OT(this,e,_T(this,e),t)},removeSignalListener(e,t){return kT(this,_T(this,e),t)},addDataListener(e,t){return OT(this,e,IF(this,e).values,t)},removeDataListener(e,t){return kT(this,IF(this,e).values,t)},globalCursor(e){if(arguments.length){if(this._globalCursor!==!!e){const t=zF(this,null)
this._globalCursor=!!e,t&&zF(this,t)}return this}return this._globalCursor},preventDefault(e){return arguments.length?(this._preventDefault=e,this):this._preventDefault},timer:function(e,t){this._timers.push(function(e,t,n){var r=new fA,i=t
return null==t?(r.restart(e,t,n),r):(r._restart=r.restart,r.restart=function(e,t,n){t=+t,n=null==n?uA():+n,r._restart((function o(a){a+=i,r._restart(o,i+=t,n),e(a)}),t,n)},r.restart(e,t,n),r)}((function(t){e({timestamp:Date.now(),elapsed:t})}),t))},events:function(e,t,n){var r,i=this,o=new ns(n),a=function(n,r){i.runAsync(null,(()=>{e===qF&&function(e,t){var n=e._eventConfig.defaults,r=n.prevent,i=n.allow
return!1!==r&&!0!==i&&(!0===r||!1===i||(r?r[t]:i?!i[t]:e.preventDefault()))}(i,t)&&n.preventDefault(),o.receive(function(e,t,n){var r,i,o=e._renderer,a=o&&o.canvas()
return a&&(i=UF(e),(r=Zv(t.changedTouches?t.changedTouches[0]:t,a))[0]-=i[0],r[1]-=i[1]),t.dataflow=e,t.item=n,t.vega=function(e,t,n){const r=t?"group"===t.mark.marktype?t:t.mark.group:null
function i(e){var n,i=r
if(e)for(n=t;n;n=n.mark.group)if(n.mark.name===e){i=n
break}return i&&i.mark&&i.mark.interactive?i:{}}function o(e){if(!e)return n
yt(e)&&(e=i(e))
const t=n.slice()
for(;e;)t[0]-=e.x||0,t[1]-=e.y||0,e=e.mark&&e.mark.group
return t}return{view:et(e),item:et(t||{}),group:i,xy:o,x:e=>o(e)[0],y:e=>o(e)[1]}}(e,n,r),t}(i,n,r))}))}
if("timer"===e)VF(i,"timer",t)&&i.timer(a,t)
else if(e===qF)VF(i,"view",t)&&i.addEventListener(t,a,ZF)
else if("window"===e?VF(i,"window",t)&&"undefined"!=typeof window&&(r=[window]):"undefined"!=typeof document&&VF(i,"selector",t)&&(r=document.querySelectorAll(e)),r){for(var s=0,l=r.length;s<l;++s)r[s].addEventListener(t,a)
WF(i,r,t,a)}else i.warn("Can not resolve event source: "+e)
return o},finalize:function(){var e,t,n,r=this._tooltip,i=this._timers,o=this._eventListeners
for(e=i.length;--e>=0;)i[e].stop()
for(e=o.length;--e>=0;)for(t=(n=o[e]).sources.length;--t>=0;)n.sources[t].removeEventListener(n.type,n.handler)
return r&&r.call(this,this._handler,null,null,null),this},hover:function(e,t){return t=[t||"update",(e=[e||"hover"])[0]],this.on(this.events("view","mouseover",HF),GF,YF(e)),this.on(this.events("view","mouseout",HF),GF,YF(t)),this},data:function(e,t){return arguments.length<2?IF(this,e).values.value:RF.call(this,e,Ga().remove(de).insert(t))},change:RF,insert:function(e,t){return RF.call(this,e,Ga().insert(t))},remove:function(e,t){return RF.call(this,e,Ga().remove(t))},scale:function(e){var t=this._runtime.scales
return at(t,e)||oe("Unrecognized scale or projection: "+e),t[e].value},initialize:function(e,t){const n=this,r=n._renderType,i=n._eventConfig.bind,o=ix(r)
e=n._el=e?sT(n,e,!0):null,function(e){const t=e.container()
t&&(t.setAttribute("role","graphics-document"),t.setAttribute("aria-roleDescription","visualization"),$F(t,e.description()))}(n),o||n.error("Unrecognized renderer type: "+r)
const a=o.handler||ub,s=e?o.renderer:o.headless
return n._renderer=s?oT(n,n._renderer,e,s):null,n._handler=function(e,t,n,r){const i=new r(e.loader(),aT(e,e.tooltip())).scene(e.scenegraph().root).initialize(n,UF(e),e)
return t&&t.handlers().forEach((e=>{i.on(e.type,e.handler)})),i}(n,n._handler,e,a),n._redraw=!0,e&&"none"!==i&&(t=t?n._elBind=sT(n,t,!0):e.appendChild(XF("form",{class:"vega-bindings"})),n._bind.forEach((e=>{e.param.element&&"container"!==i&&(e.element=sT(n,e.param.element,!!e.param.input))})),n._bind.forEach((e=>{!function(e,t,n){if(!t)return
const r=n.param
let i=n.state
i||(i=n.state={elements:null,active:!1,set:null,update:t=>{t!=e.signal(r.signal)&&e.runAsync(null,(()=>{i.source=!0,e.signal(r.signal,t)}))}},r.debounce&&(i.update=tt(r.debounce,i.update))),(null==r.input&&r.element?JF:KF)(i,t,r,e),i.active||(e.on(e._signals[r.signal],null,(()=>{i.source?i.source=!1:i.set(e.signal(r.signal))})),i.active=!0)}(n,e.element||t,e)}))),n},toImageURL:async function(e,t){e!==nx.Canvas&&e!==nx.SVG&&e!==nx.PNG&&oe("Unrecognized image type: "+e)
const n=await cT(this,e,t)
return e===nx.SVG?function(e,t){const n=new Blob([e],{type:"image/svg+xml"})
return window.URL.createObjectURL(n)}(n.svg()):n.canvas().toDataURL("image/png")},toCanvas:async function(e,t){return(await cT(this,nx.Canvas,e,t)).canvas()},toSVG:async function(e){return(await cT(this,nx.SVG,e)).svg()},getState:function(e){return this._runtime.getState(e||{data:gT,signals:mT,recurse:!0})},setState:function(e){return this.runAsync(null,(t=>{t._trigger=!1,t._runtime.setState(e)}),(e=>{e._trigger=!0})),this}})
const ET=/[[\]{}]/,AT={"*":1,arc:1,area:1,group:1,image:1,line:1,path:1,rect:1,rule:1,shape:1,symbol:1,text:1,trail:1}
let ST,DT
function CT(e,t,n){return ST=t||"view",DT=n||AT,jT(e.trim()).map(FT)}function MT(e,t,n,r,i){const o=e.length
let a,s=0
for(;t<o;++t){if(a=e[t],!s&&a===n)return t
i&&i.indexOf(a)>=0?--s:r&&r.indexOf(a)>=0&&++s}return t}function jT(e){const t=[],n=e.length
let r=0,i=0
for(;i<n;)i=MT(e,i,",","[{","]}"),t.push(e.substring(r,i).trim()),r=++i
if(0===t.length)throw"Empty event selector: "+e
return t}function FT(e){return"["===e[0]?function(e){const t=e.length
let n,r=1
if(r=MT(e,r,"]","[","]"),r===t)throw"Empty between selector: "+e
if(n=jT(e.substring(1,r)),2!==n.length)throw"Between selector must have two elements: "+e
if(">"!==(e=e.slice(r+1).trim())[0])throw"Expected '>' after between selector: "+e
n=n.map(FT)
const i=FT(e.slice(1).trim())
return i.between?{between:n,stream:i}:(i.between=n,i)}(e):function(e){const t={source:ST},n=[]
let r,i,o=[0,0],a=0,s=0,l=e.length,u=0
if("}"===e[l-1]){if(u=e.lastIndexOf("{"),!(u>=0))throw"Unmatched right brace: "+e
try{o=function(e){const t=e.split(",")
if(!e.length||t.length>2)throw e
return t.map((t=>{const n=+t
if(n!=n)throw e
return n}))}(e.substring(u+1,l-1))}catch(t){throw"Invalid throttle specification: "+e}l=(e=e.slice(0,u).trim()).length,u=0}if(!l)throw e
if("@"===e[0]&&(a=++u),r=MT(e,u,":"),r<l&&(n.push(e.substring(s,r).trim()),s=u=++r),u=MT(e,u,"["),u===l)n.push(e.substring(s,l).trim())
else if(n.push(e.substring(s,u).trim()),i=[],s=++u,s===l)throw"Unmatched left bracket: "+e
for(;u<l;){if(u=MT(e,u,"]"),u===l)throw"Unmatched left bracket: "+e
if(i.push(e.substring(s,u).trim()),u<l-1&&"["!==e[++u])throw"Expected left bracket: "+e
s=++u}if(!(l=n.length)||ET.test(n[l-1]))throw"Invalid event selector: "+e
var c
return l>1?(t.type=n[1],a?t.markname=n[0].slice(1):(c=n[0],DT[c]?t.marktype=n[0]:t.source=n[0])):t.type=n[0],"!"===t.type.slice(-1)&&(t.consume=!0,t.type=t.type.slice(0,-1)),null!=i&&(t.filter=i),o[0]&&(t.throttle=o[0]),o[1]&&(t.debounce=o[1]),t}(e)}function TT(e){return we(e)?e:{type:e||"pad"}}const NT=e=>+e||0
function $T(e){return we(e)?e.signal?e:{top:NT(e.top),bottom:NT(e.bottom),left:NT(e.left),right:NT(e.right)}:{top:t=NT(e),bottom:t,left:t,right:t}
var t}const PT=e=>we(e)&&!_e(e)?nt({},e):{value:e}
function zT(e,t,n,r){return null!=n?(we(n)&&!_e(n)||_e(n)&&n.length&&we(n[0])?e.update[t]=n:e[r||"enter"][t]={value:n},1):0}function IT(e,t,n){for(const r in t)zT(e,r,t[r])
for(const r in n)zT(e,r,n[r],"update")}function RT(e,t,n){for(const r in t)n&&at(n,r)||(e[r]=nt(e[r]||{},t[r]))
return e}function LT(e,t){return t&&(t.enter&&t.enter[e]||t.update&&t.update[e])}const BT="mark",UT="frame",qT="scope",ZT="legend-label"
function WT(e,t,n){e[t]=n&&n.signal?{signal:n.signal}:{value:n}}const VT=e=>yt(e)?Et(e):e.signal?`(${e.signal})`:XT(e)
function HT(e){if(null!=e.gradient)return function(e){const t=[e.start,e.stop,e.count].map((e=>null==e?null:Et(e)))
for(;t.length&&null==Se(t);)t.pop()
return t.unshift(VT(e.gradient)),`gradient(${t.join(",")})`}(e)
let t=e.signal?`(${e.signal})`:e.color?function(e){return e.c?GT("hcl",e.h,e.c,e.l):e.h||e.s?GT("hsl",e.h,e.s,e.l):e.l||e.a?GT("lab",e.l,e.a,e.b):e.r||e.g||e.b?GT("rgb",e.r,e.g,e.b):null}(e.color):null!=e.field?XT(e.field):void 0!==e.value?Et(e.value):void 0
return null!=e.scale&&(t=function(e,t){const n=VT(e.scale)
return null!=e.range?t=`lerp(_range(${n}), ${+e.range})`:(void 0!==t&&(t=`_scale(${n}, ${t})`),e.band&&(t=(t?t+"+":"")+`_bandwidth(${n})`+(1==+e.band?"":"*"+YT(e.band)),e.extra&&(t=`(datum.extra ? _scale(${n}, datum.extra.value) : ${t})`)),null==t&&(t="0")),t}(e,t)),void 0===t&&(t=null),null!=e.exponent&&(t=`pow(${t},${YT(e.exponent)})`),null!=e.mult&&(t+=`*${YT(e.mult)}`),null!=e.offset&&(t+=`+${YT(e.offset)}`),e.round&&(t=`round(${t})`),t}const GT=(e,t,n,r)=>`(${e}(${[t,n,r].map(HT).join(",")})+'')`
function YT(e){return we(e)?"("+HT(e)+")":e}function XT(e){return JT(we(e)?e:{datum:e})}function JT(e){let t,n,r
if(e.signal)t="datum",r=e.signal
else if(e.group||e.parent){for(n=Math.max(1,e.level||1),t="item";n-- >0;)t+=".mark.group"
e.parent?(r=e.parent,t+=".datum"):r=e.group}else e.datum?(t="datum",r=e.datum):oe("Invalid field reference: "+Et(e))
return e.signal||(r=yt(r)?ae(r).map(Et).join("]["):JT(r)),t+"["+r+"]"}function KT(e,t,n,r,i,o){const a={};(o=o||{}).encoders={$encode:a},e=function(e,t,n,r,i){const o={},a={}
let s,l,u,c
for(l in l="lineBreak","text"!==t||null==i[l]||LT(l,e)||WT(o,l,i[l]),("legend"==n||String(n).startsWith("axis"))&&(n=null),c=n===UT?i.group:n===BT?nt({},i.mark,i[t]):null,c)u=LT(l,e)||("fill"===l||"stroke"===l)&&(LT("fill",e)||LT("stroke",e)),u||WT(o,l,c[l])
for(l in Ve(r).forEach((t=>{const n=i.style&&i.style[t]
for(const r in n)LT(r,e)||WT(o,r,n[r])})),e=nt({},e),o)c=o[l],c.signal?(s=s||{})[l]=c:a[l]=c
return e.enter=nt(a,e.enter),s&&(e.update=nt(s,e.update)),e}(e,t,n,r,i.config)
for(const s in e)a[s]=QT(e[s],t,o,i)
return o}function QT(e,t,n,r){const i={},o={}
for(const s in e)null!=e[s]&&(i[s]=eN((a=e[s],_e(a)?function(e){let t=""
return e.forEach((e=>{const n=HT(e)
t+=e.test?`(${e.test})?${n}:`:n})),":"===Se(t)&&(t+="null"),t}(a):HT(a)),r,n,o))
var a
return{$expr:{marktype:t,channels:i},$fields:Object.keys(o),$output:Object.keys(e)}}function eN(e,t,n,r){const i=OF(e,t)
return i.$fields.forEach((e=>r[e]=1)),nt(n,i.$params),i.$expr}const tN=["value","update","init","react","bind"]
function nN(e,t){oe(e+' for "outer" push: '+Et(t))}function rN(e,t){const n=e.name
if("outer"===e.push)t.signals[n]||nN("No prior signal definition",n),tN.forEach((t=>{void 0!==e[t]&&nN("Invalid property ",t)}))
else{const r=t.addSignal(n,e.value)
!1===e.react&&(r.react=!1),e.bind&&t.addBinding(n,e.bind)}}function iN(e,t,n,r){this.id=-1,this.type=e,this.value=t,this.params=n,r&&(this.parent=r)}function oN(e,t,n,r){return new iN(e,t,n,r)}function aN(e,t){return oN("operator",e,t)}function sN(e){const t={$ref:e.id}
return e.id<0&&(e.refs=e.refs||[]).push(t),t}function lN(e,t){return t?{$field:e,$name:t}:{$field:e}}const uN=lN("key")
function cN(e,t){return{$compare:e,$order:t}}function fN(e,t){return(e&&e.signal?"$"+e.signal:e||"")+(e&&t?"_":"")+(t&&t.signal?"$"+t.signal:t||"")}const dN="scope",hN="view"
function pN(e){return e&&e.signal}function gN(e){if(pN(e))return!0
if(we(e))for(const t in e)if(gN(e[t]))return!0
return!1}function mN(e,t){return null!=e?e:t}function yN(e){return e&&e.signal||e}const vN="timer"
function bN(e,t){return(e.merge?xN:e.stream?_N:e.type?wN:oe("Invalid stream specification: "+Et(e)))(e,t)}function xN(e,t){const n=ON({merge:e.merge.map((e=>bN(e,t)))},e,t)
return t.addStream(n).id}function _N(e,t){const n=ON({stream:bN(e.stream,t)},e,t)
return t.addStream(n).id}function wN(e,t){let n
var r
e.type===vN?(n=t.event(vN,e.throttle),e={between:e.between,filter:e.filter}):n=t.event((r=e.source)===dN?hN:r||hN,e.type)
const i=ON({stream:n},e,t)
return 1===Object.keys(i).length?n:t.addStream(i).id}function ON(e,t,n){let r=t.between
return r&&(2!==r.length&&oe('Stream "between" parameter must have 2 entries: '+Et(t)),e.between=[bN(r[0],n),bN(r[1],n)]),r=t.filter?[].concat(t.filter):[],(t.marktype||t.markname||t.markrole)&&r.push(function(e,t,n){const r="event.item"
return r+(e&&"*"!==e?"&&"+r+".mark.marktype==='"+e+"'":"")+(n?"&&"+r+".mark.role==='"+n+"'":"")+(t?"&&"+r+".mark.name==='"+t+"'":"")}(t.marktype,t.markname,t.markrole)),t.source===dN&&r.push("inScope(event.item)"),r.length&&(e.filter=OF("("+r.join(")&&(")+")",n).$expr),null!=(r=t.throttle)&&(e.throttle=+r),null!=(r=t.debounce)&&(e.debounce=+r),t.consume&&(e.consume=!0),e}const kN={code:"_.$value",ast:{type:"Identifier",value:"value"}}
function EN(e){return{signal:"["+e.map((e=>e.scale?'scale("'+e.scale+'")':e.signal))+"]"}}const AN=e=>(t,n,r)=>oN(e,n,t||void 0,r),SN=AN("aggregate"),DN=AN("axisticks"),CN=AN("bound"),MN=AN("collect"),jN=AN("compare"),FN=AN("datajoin"),TN=AN("encode"),NN=AN("expression"),$N=AN("facet"),PN=AN("field"),zN=AN("key"),IN=AN("legendentries"),RN=AN("load"),LN=AN("mark"),BN=AN("multiextent"),UN=AN("multivalues"),qN=AN("overlap"),ZN=AN("params"),WN=AN("prefacet"),VN=AN("projection"),HN=AN("proxy"),GN=AN("relay"),YN=AN("render"),XN=AN("scale"),JN=AN("sieve"),KN=AN("sortitems"),QN=AN("viewlayout"),e$=AN("values")
let t$=0
const n$={min:"min",max:"max",count:"sum"}
function r$(e,t){const n=t.getScale(e.name).params
let r
for(r in n.domain=s$(e.domain,e,t),null!=e.range&&(n.range=g$(e,t,n)),null!=e.interpolate&&function(e,t){t.interpolate=i$(e.type||e),null!=e.gamma&&(t.interpolateGamma=i$(e.gamma))}(e.interpolate,n),null!=e.nice&&(n.nice=function(e){return we(e)?{interval:i$(e.interval),step:i$(e.step)}:i$(e)}(e.nice)),null!=e.bins&&(n.bins=function(e,t){return e.signal||_e(e)?o$(e,t):t.objectProperty(e)}(e.bins,t)),e)at(n,r)||"name"===r||(n[r]=i$(e[r],t))}function i$(e,t){return we(e)?e.signal?t.signalRef(e.signal):oe("Unsupported object: "+Et(e)):e}function o$(e,t){return e.signal?t.signalRef(e.signal):e.map((e=>i$(e,t)))}function a$(e){oe("Can not find data set: "+Et(e))}function s$(e,t,n){if(e)return e.signal?n.signalRef(e.signal):(_e(e)?l$:e.fields?c$:u$)(e,t,n)
null==t.domainMin&&null==t.domainMax||oe("No scale domain defined for domainMin/domainMax to override.")}function l$(e,t,n){return e.map((e=>i$(e,n)))}function u$(e,t,n){const r=n.getData(e.data)
return r||a$(e.data),Jp(t.type)?r.valuesRef(n,e.field,d$(e.sort,!1)):tg(t.type)?r.domainRef(n,e.field):r.extentRef(n,e.field)}function c$(e,t,n){const r=e.data,i=e.fields.reduce(((e,t)=>(t=yt(t)?{data:r,field:t}:_e(t)||t.signal?function(e,t){const n="_:vega:_"+t$++,r=MN({})
if(_e(e))r.value={$ingest:e}
else if(e.signal){const i="setdata("+Et(n)+","+e.signal+")"
r.params.input=t.signalRef(i)}return t.addDataPipeline(n,[r,JN({})]),{data:n,field:"data"}}(t,n):t,e.push(t),e)),[])
return(Jp(t.type)?f$:tg(t.type)?h$:p$)(e,n,i)}function f$(e,t,n){const r=d$(e.sort,!0)
let i,o
const a=n.map((e=>{const n=t.getData(e.data)
return n||a$(e.data),n.countsRef(t,e.field,r)})),s={groupby:uN,pulse:a}
r&&(i=r.op||"count",o=r.field?fN(i,r.field):"count",s.ops=[n$[i]],s.fields=[t.fieldRef(o)],s.as=[o]),i=t.add(SN(s))
const l=t.add(MN({pulse:sN(i)}))
return o=t.add(e$({field:uN,sort:t.sortRef(r),pulse:sN(l)})),sN(o)}function d$(e,t){return e&&(e.field||e.op?e.field||"count"===e.op?t&&e.field&&e.op&&!n$[e.op]&&oe("Multiple domain scales can not be sorted using "+e.op):oe("No field provided for sort aggregate op: "+e.op):we(e)?e.field="key":e={field:"key"}),e}function h$(e,t,n){const r=n.map((e=>{const n=t.getData(e.data)
return n||a$(e.data),n.domainRef(t,e.field)}))
return sN(t.add(UN({values:r})))}function p$(e,t,n){const r=n.map((e=>{const n=t.getData(e.data)
return n||a$(e.data),n.extentRef(t,e.field)}))
return sN(t.add(BN({extents:r})))}function g$(e,t,n){const r=t.config.range
let i=e.range
if(i.signal)return t.signalRef(i.signal)
if(yt(i)){if(r&&at(r,i))return g$(e=nt({},e,{range:r[i]}),t,n)
"width"===i?i=[0,{signal:"width"}]:"height"===i?i=Jp(e.type)?[0,{signal:"height"}]:[{signal:"height"},0]:oe("Unrecognized scale range value: "+Et(i))}else{if(i.scheme)return n.scheme=_e(i.scheme)?o$(i.scheme,t):i$(i.scheme,t),i.extent&&(n.schemeExtent=o$(i.extent,t)),void(i.count&&(n.schemeCount=i$(i.count,t)))
if(i.step)return void(n.rangeStep=i$(i.step,t))
if(Jp(e.type)&&!_e(i))return s$(i,e,t)
_e(i)||oe("Unsupported range type: "+Et(i))}return i.map((e=>(_e(e)?o$:i$)(e,t)))}function m$(e,t,n){return _e(e)?e.map((e=>m$(e,t,n))):we(e)?e.signal?n.signalRef(e.signal):"fit"===t?e:oe("Unsupported parameter object: "+Et(e)):e}const y$="top",v$="left",b$="right",x$="bottom",_$="label",w$="perc",O$="value",k$="guide-label",E$="guide-title",A$="symbol",S$="gradient",D$="discrete",C$="size",M$=[C$,"shape","fill","stroke","strokeWidth","strokeDash","opacity"],j$={name:1,style:1,interactive:1},F$={value:0},T$={value:1},N$="group",$$="rect",P$="rule",z$="text"
function I$(e){return e.type=N$,e.interactive=e.interactive||!1,e}function R$(e,t){const n=(n,r)=>mN(e[n],mN(t[n],r))
return n.isVertical=n=>"vertical"===mN(e.direction,t.direction||(n?t.symbolDirection:t.gradientDirection)),n.gradientLength=()=>mN(e.gradientLength,t.gradientLength||t.gradientWidth),n.gradientThickness=()=>mN(e.gradientThickness,t.gradientThickness||t.gradientHeight),n.entryColumns=()=>mN(e.columns,mN(t.columns,+n.isVertical(!0))),n}function L$(e,t){const n=t&&(t.update&&t.update[e]||t.enter&&t.enter[e])
return n&&n.signal?n:n?n.value:null}function B$(e,t,n){return`item.anchor === 'start' ? ${e} : item.anchor === 'end' ? ${t} : ${n}`}const U$=B$(Et(v$),Et(b$),Et("center"))
function q$(e,t){return t?e?we(e)?Object.assign({},e,{offset:q$(e.offset,t)}):{value:e,offset:t}:t:e}function Z$(e,t){return t?(e.name=t.name,e.style=t.style||e.style,e.interactive=!!t.interactive,e.encode=RT(e.encode,t,j$)):e.interactive=!1,e}function W$(e,t,n,r){const i=R$(e,n),o=i.isVertical(),a=i.gradientThickness(),s=i.gradientLength()
let l,u,c,f,d
o?(u=[0,1],c=[0,0],f=a,d=s):(u=[0,0],c=[1,0],f=s,d=a)
const h={enter:l={opacity:F$,x:F$,y:F$,width:PT(f),height:PT(d)},update:nt({},l,{opacity:T$,fill:{gradient:t,start:u,stop:c}}),exit:{opacity:F$}}
return IT(h,{stroke:i("gradientStrokeColor"),strokeWidth:i("gradientStrokeWidth")},{opacity:i("gradientOpacity")}),Z$({type:$$,role:"legend-gradient",encode:h},r)}function V$(e,t,n,r,i){const o=R$(e,n),a=o.isVertical(),s=o.gradientThickness(),l=o.gradientLength()
let u,c,f,d,h=""
a?(u="y",f="y2",c="x",d="width",h="1-"):(u="x",f="x2",c="y",d="height")
const p={opacity:F$,fill:{scale:t,field:O$}}
p[u]={signal:h+"datum."+w$,mult:l},p[c]=F$,p[f]={signal:h+"datum.perc2",mult:l},p[d]=PT(s)
const g={enter:p,update:nt({},p,{opacity:T$}),exit:{opacity:F$}}
return IT(g,{stroke:o("gradientStrokeColor"),strokeWidth:o("gradientStrokeWidth")},{opacity:o("gradientOpacity")}),Z$({type:$$,role:"legend-band",key:O$,from:i,encode:g},r)}function H$(e,t,n,r){const i=R$(e,t),o=i.isVertical(),a=PT(i.gradientThickness()),s=i.gradientLength()
let l,u,c,f,d=i("labelOverlap"),h=""
const p={enter:l={opacity:F$},update:u={opacity:T$,text:{field:_$}},exit:{opacity:F$}}
return IT(p,{fill:i("labelColor"),fillOpacity:i("labelOpacity"),font:i("labelFont"),fontSize:i("labelFontSize"),fontStyle:i("labelFontStyle"),fontWeight:i("labelFontWeight"),limit:mN(e.labelLimit,t.gradientLabelLimit)}),o?(l.align={value:"left"},l.baseline=u.baseline={signal:'datum.perc<=0?"bottom":datum.perc>=1?"top":"middle"'},c="y",f="x",h="1-"):(l.align=u.align={signal:'datum.perc<=0?"left":datum.perc>=1?"right":"center"'},l.baseline={value:"top"},c="x",f="y"),l[c]=u[c]={signal:h+"datum."+w$,mult:s},l[f]=u[f]=a,a.offset=mN(e.labelOffset,t.gradientLabelOffset)||0,d=d?{separation:i("labelSeparation"),method:d,order:"datum.index"}:void 0,Z$({type:z$,role:ZT,style:k$,key:O$,from:r,encode:p,overlap:d},n)}function G$(e,t,n,r,i){const o=R$(e,t),a=n.entries,s=!(!a||!a.interactive),l=a?a.name:void 0,u=o("clipHeight"),c=o("symbolOffset"),f={data:"value"},d=`(${i}) ? datum.offset : datum.size`,h=u?PT(u):{field:C$},p="datum.index",g=`max(1, ${i})`
let m,y,v,b,x
h.mult=.5,m={enter:y={opacity:F$,x:{signal:d,mult:.5,offset:c},y:h},update:v={opacity:T$,x:y.x,y:y.y},exit:{opacity:F$}}
let _=null,w=null
e.fill||(_=t.symbolBaseFillColor,w=t.symbolBaseStrokeColor),IT(m,{fill:o("symbolFillColor",_),shape:o("symbolType"),size:o("symbolSize"),stroke:o("symbolStrokeColor",w),strokeDash:o("symbolDash"),strokeDashOffset:o("symbolDashOffset"),strokeWidth:o("symbolStrokeWidth")},{opacity:o("symbolOpacity")}),M$.forEach((t=>{e[t]&&(v[t]=y[t]={scale:e[t],field:O$})}))
const O=Z$({type:"symbol",role:"legend-symbol",key:O$,from:f,clip:!!u||void 0,encode:m},n.symbols),k=PT(c)
k.offset=o("labelOffset"),m={enter:y={opacity:F$,x:{signal:d,offset:k},y:h},update:v={opacity:T$,text:{field:_$},x:y.x,y:y.y},exit:{opacity:F$}},IT(m,{align:o("labelAlign"),baseline:o("labelBaseline"),fill:o("labelColor"),fillOpacity:o("labelOpacity"),font:o("labelFont"),fontSize:o("labelFontSize"),fontStyle:o("labelFontStyle"),fontWeight:o("labelFontWeight"),limit:o("labelLimit")})
const E=Z$({type:z$,role:ZT,style:k$,key:O$,from:f,encode:m},n.labels)
return m={enter:{noBound:{value:!u},width:F$,height:u?PT(u):F$,opacity:F$},exit:{opacity:F$},update:v={opacity:T$,row:{signal:null},column:{signal:null}}},o.isVertical(!0)?(b=`ceil(item.mark.items.length / ${g})`,v.row.signal=`${p}%${b}`,v.column.signal=`floor(${p} / ${b})`,x={field:["row",p]}):(v.row.signal=`floor(${p} / ${g})`,v.column.signal=`${p} % ${g}`,x={field:p}),v.column.signal=`(${i})?${v.column.signal}:${p}`,I$({role:qT,from:r={facet:{data:r,name:"value",groupby:"index"}},encode:RT(m,a,j$),marks:[O,E],name:l,interactive:s,sort:x})}const Y$='item.orient === "left"',X$='item.orient === "right"',J$=`(${Y$} || ${X$})`,K$=`datum.vgrad && ${J$}`,Q$=B$('"top"','"bottom"','"middle"'),eP=`datum.vgrad && ${X$} ? (${B$('"right"','"left"','"center"')}) : (${J$} && !(datum.vgrad && ${Y$})) ? "left" : ${U$}`,tP=`item._anchor || (${J$} ? "middle" : "start")`,nP=`${K$} ? (${Y$} ? -90 : 90) : 0`,rP=`${J$} ? (datum.vgrad ? (${X$} ? "bottom" : "top") : ${Q$}) : "top"`
function iP(e,t){let n
return we(e)&&(e.signal?n=e.signal:e.path?n="pathShape("+oP(e.path)+")":e.sphere&&(n="geoShape("+oP(e.sphere)+', {type: "Sphere"})')),n?t.signalRef(n):!!e}function oP(e){return we(e)&&e.signal?e.signal:Et(e)}function aP(e){const t=e.role||""
return t.indexOf("axis")&&t.indexOf("legend")&&t.indexOf("title")?e.type===N$?qT:t||BT:t}function sP(e){return{marktype:e.type,name:e.name||void 0,role:e.role||aP(e),zindex:+e.zindex||void 0,aria:e.aria,description:e.description}}function lP(e,t){return e&&e.signal?t.signalRef(e.signal):!1!==e}function uP(e,t){const n=xs(e.type)
n||oe("Unrecognized transform type: "+Et(e.type))
const r=oN(n.type.toLowerCase(),null,cP(n,e,t))
return e.signal&&t.addSignal(e.signal,t.proxy(r)),r.metadata=n.metadata||{},r}function cP(e,t,n){const r={},i=e.params.length
for(let o=0;o<i;++o){const i=e.params[o]
r[i.name]=fP(i,t,n)}return r}function fP(e,t,n){const r=e.type,i=t[e.name]
return"index"===r?function(e,t,n){return yt(t.from)||oe('Lookup "from" parameter must be a string literal.'),n.getData(t.from).lookupRef(n,t.key)}(0,t,n):void 0!==i?"param"===r?function(e,t,n){const r=t[e.name]
return e.array?(_e(r)||oe("Expected an array of sub-parameters. Instead: "+Et(r)),r.map((t=>hP(e,t,n)))):hP(e,r,n)}(e,t,n):"projection"===r?n.projectionRef(t[e.name]):e.array&&!pN(i)?i.map((t=>dP(e,t,n))):dP(e,i,n):void(e.required&&oe("Missing required "+Et(t.type)+" parameter: "+Et(e.name)))}function dP(e,t,n){const r=e.type
if(pN(t))return yP(r)?oe("Expression references can not be signals."):vP(r)?n.fieldRef(t):bP(r)?n.compareRef(t):n.signalRef(t.signal)
{const i=e.expr||vP(r)
return i&&pP(t)?n.exprRef(t.expr,t.as):i&&gP(t)?lN(t.field,t.as):yP(r)?OF(t,n):mP(r)?sN(n.getData(t).values):vP(r)?lN(t):bP(r)?n.compareRef(t):t}}function hP(e,t,n){const r=e.params.length
let i
for(let a=0;a<r;++a){i=e.params[a]
for(const e in i.key)if(i.key[e]!==t[e]){i=null
break}if(i)break}i||oe("Unsupported parameter: "+Et(t))
const o=nt(cP(i,t,n),i.key)
return sN(n.add(ZN(o)))}const pP=e=>e&&e.expr,gP=e=>e&&e.field,mP=e=>"data"===e,yP=e=>"expr"===e,vP=e=>"field"===e,bP=e=>"compare"===e
function xP(e,t){return e.$ref?e:e.data&&e.data.$ref?e.data:sN(t.getData(e.data).output)}function _P(e,t,n,r,i){this.scope=e,this.input=t,this.output=n,this.values=r,this.aggregate=i,this.index={}}function wP(e){return yt(e)?e:null}function OP(e,t,n){const r=fN(n.op,n.field)
let i
if(t.ops){for(let o=0,a=t.as.length;o<a;++o)if(t.as[o]===r)return}else t.ops=["count"],t.fields=[null],t.as=["count"]
n.op&&(t.ops.push((i=n.op.signal)?e.signalRef(i):n.op),t.fields.push(e.fieldRef(n.field)),t.as.push(r))}function kP(e,t,n,r,i,o,a){const s=t[n]||(t[n]={}),l=function(e){return we(e)?("descending"===e.order?"-":"+")+fN(e.op,e.field):""}(o)
let u,c,f=wP(i)
if(null!=f&&(e=t.scope,f+=l?"|"+l:"",u=s[f]),!u){const n=o?{field:uN,pulse:t.countsRef(e,i,o)}:{field:e.fieldRef(i),pulse:sN(t.output)}
l&&(n.sort=e.sortRef(o)),c=e.add(oN(r,void 0,n)),a&&(t.index[i]=c),u=sN(c),null!=f&&(s[f]=u)}return u}function EP(e,t,n){const r=e.remove,i=e.insert,o=e.toggle,a=e.modify,s=e.values,l=t.add(aN()),u=OF("if("+e.trigger+',modify("'+n+'",'+[i,r,o,a,s].map((e=>null==e?"null":e)).join(",")+"),0)",t)
l.update=u.$expr,l.params=u.$params}function AP(e,t){const n=aP(e),r=e.type===N$,i=e.from&&e.from.facet,o=e.overlap
let a,s,l,u,c,f,d,h=e.layout||n===qT||n===UT
const p=n===BT||h||i,g=function(e,t,n){let r,i,o,a,s
return e?(r=e.facet)&&(t||oe("Only group marks can be faceted."),null!=r.field?a=s=xP(r,n):(e.data?s=sN(n.getData(e.data).aggregate):(o=uP(nt({type:"aggregate",groupby:Ve(r.groupby)},r.aggregate),n),o.params.key=n.keyRef(r.groupby),o.params.pulse=xP(r,n),a=s=sN(n.add(o))),i=n.keyRef(r.groupby,!0))):a=sN(n.add(MN(null,[{}]))),a||(a=xP(e,n)),{key:i,pulse:a,parent:s}}(e.from,r,t)
s=t.add(FN({key:g.key||(e.key?lN(e.key):void 0),pulse:g.pulse,clean:!r}))
const m=sN(s)
s=l=t.add(MN({pulse:m})),s=t.add(LN({markdef:sP(e),interactive:lP(e.interactive,t),clip:iP(e.clip,t),context:{$context:!0},groups:t.lookup(),parent:t.signals.parent?t.signalRef("parent"):null,index:t.markpath(),pulse:sN(s)}))
const y=sN(s)
s=u=t.add(TN(KT(e.encode,e.type,n,e.style,t,{mod:!1,pulse:y}))),s.params.parent=t.encode(),e.transform&&e.transform.forEach((e=>{const n=uP(e,t),r=n.metadata;(r.generates||r.changes)&&oe("Mark transforms should not generate new data."),r.nomod||(u.params.mod=!0),n.params.pulse=sN(s),t.add(s=n)})),e.sort&&(s=t.add(KN({sort:t.compareRef(e.sort),pulse:sN(s)})))
const v=sN(s);(i||h)&&(h=t.add(QN({layout:t.objectProperty(e.layout),legends:t.legends,mark:y,pulse:v})),f=sN(h))
const b=t.add(CN({mark:y,pulse:f||v}))
d=sN(b),r&&(p&&(a=t.operators,a.pop(),h&&a.pop()),t.pushState(v,f||d,m),i?function(e,t,n){const r=e.from.facet,i=r.name,o=xP(r,t)
let a
r.name||oe("Facet must have a name: "+Et(r)),r.data||oe("Facet must reference a data set: "+Et(r)),r.field?a=t.add(WN({field:t.fieldRef(r.field),pulse:o})):r.groupby?a=t.add($N({key:t.keyRef(r.groupby),group:sN(t.proxy(n.parent)),pulse:o})):oe("Facet must specify groupby or field: "+Et(r))
const s=t.fork(),l=s.add(MN()),u=s.add(JN({pulse:sN(l)}))
s.addData(i,new _P(s,l,l,u)),s.addSignal("parent",null),a.params.subflow={$subflow:s.parse(e).toRuntime()}}(e,t,g):p?function(e,t,n){const r=t.add(WN({pulse:n.pulse})),i=t.fork()
i.add(JN()),i.addSignal("parent",null),r.params.subflow={$subflow:i.parse(e).toRuntime()}}(e,t,g):t.parse(e),t.popState(),p&&(h&&a.push(h),a.push(b))),o&&(d=function(e,t,n){const r=e.method,i=e.bound,o=e.separation,a={separation:pN(o)?n.signalRef(o.signal):o,method:pN(r)?n.signalRef(r.signal):r,pulse:t}
if(e.order&&(a.sort=n.compareRef({field:e.order})),i){const e=i.tolerance
a.boundTolerance=pN(e)?n.signalRef(e.signal):+e,a.boundScale=n.scaleRef(i.scale),a.boundOrient=i.orient}return sN(n.add(qN(a)))}(o,d,t))
const x=t.add(YN({pulse:d})),_=t.add(JN({pulse:sN(x)},void 0,t.parent()))
null!=e.name&&(c=e.name,t.addData(c,new _P(t,l,x,_)),e.on&&e.on.forEach((e=>{(e.insert||e.remove||e.toggle)&&oe("Marks only support modify triggers."),EP(e,t,c)})))}function SP(e,t,n){const r={enter:{},update:{}}
return IT(r,{orient:e("orient"),offset:e("offset"),padding:e("padding"),titlePadding:e("titlePadding"),cornerRadius:e("cornerRadius"),fill:e("fillColor"),stroke:e("strokeColor"),strokeWidth:n.strokeWidth,strokeDash:n.strokeDash,x:e("legendX"),y:e("legendY"),format:t.format,formatType:t.formatType}),r}function DP(e,t,n){return t[e]?`scale("${t[e]}",datum)`:L$(e,n[0].encode)}function CP(e,t){const n={enter:{},update:{}}
return IT(n,{orient:e("orient"),anchor:e("anchor"),align:{signal:U$},angle:{signal:'item.orient==="left"?-90:item.orient==="right"?90:0'},limit:e("limit"),frame:e("frame"),offset:e("offset")||0,padding:e("subtitlePadding")}),RT(n,t,j$)}function MP(e){const t=MN({},e)
return t.metadata={source:!0},t}function jP(e,t){return RN({url:t.url?e.property(t.url):void 0,async:t.async?e.property(t.async):void 0,values:t.values?e.property(t.values):void 0,format:e.objectProperty(t.format)})}_P.fromEntries=function(e,t){const n=t.length,r=t[n-1],i=t[n-2]
let o=t[0],a=null,s=1
for(o&&"load"===o.type&&(o=t[1]),e.add(t[0]);s<n;++s)t[s].params.pulse=sN(t[s-1]),e.add(t[s]),"aggregate"===t[s].type&&(a=t[s])
return new _P(e,o,i,r,a)},_P.prototype={countsRef(e,t,n){const r=this,i=r.counts||(r.counts={}),o=wP(t)
let a,s,l
return null!=o&&(e=r.scope,a=i[o]),a?n&&n.field&&OP(e,a.agg.params,n):(l={groupby:e.fieldRef(t,"key"),pulse:sN(r.output)},n&&n.field&&OP(e,l,n),s=e.add(SN(l)),a=e.add(MN({pulse:sN(s)})),a={agg:s,ref:sN(a)},null!=o&&(i[o]=a)),a.ref},tuplesRef(){return sN(this.values)},extentRef(e,t){return kP(e,this,"extent","extent",t,!1)},domainRef(e,t){return kP(e,this,"domain","values",t,!1)},valuesRef(e,t,n){return kP(e,this,"vals","values",t,n||!0)},lookupRef(e,t){return kP(e,this,"lookup","tupleindex",t,!1)},indataRef(e,t){return kP(e,this,"indata","tupleindex",t,!0,!0)}}
const FP=e=>e===x$||e===y$,TP=(e,t,n)=>pN(e)?RP(e.signal,t,n):e===v$||e===y$?t:n,NP=(e,t,n)=>pN(e)?zP(e.signal,t,n):FP(e)?t:n,$P=(e,t,n)=>pN(e)?IP(e.signal,t,n):FP(e)?n:t,PP=(e,t,n)=>pN(e)?LP(e.signal,t,n):e===y$?{value:t}:{value:n},zP=(e,t,n)=>BP(`${e} === 'top' || ${e} === 'bottom'`,t,n),IP=(e,t,n)=>BP(`${e} !== 'top' && ${e} !== 'bottom'`,t,n),RP=(e,t,n)=>qP(`${e} === 'left' || ${e} === 'top'`,t,n),LP=(e,t,n)=>qP(`${e} === 'top'`,t,n),BP=(e,t,n)=>(t=null!=t?PT(t):t,n=null!=n?PT(n):n,UP(t)&&UP(n)?{signal:`${e} ? (${t=t?t.signal||Et(t.value):null}) : (${n=n?n.signal||Et(n.value):null})`}:[nt({test:e},t)].concat(n||[])),UP=e=>null==e||1===Object.keys(e).length,qP=(e,t,n)=>({signal:`${e} ? (${WP(t)}) : (${WP(n)})`}),ZP=(e,t,n,r,i)=>({signal:(null!=r?`${e} === 'left' ? (${WP(r)}) : `:"")+(null!=n?`${e} === 'bottom' ? (${WP(n)}) : `:"")+(null!=i?`${e} === 'right' ? (${WP(i)}) : `:"")+(null!=t?`${e} === 'top' ? (${WP(t)}) : `:"")+"(null)"}),WP=e=>pN(e)?e.signal:null==e?null:Et(e),VP=(e,t)=>{const n=e.signal
return n&&n.endsWith("(null)")?{signal:n.slice(0,-6)+t.signal}:e}
function HP(e,t,n,r){let i
if(t&&at(t,e))return t[e]
if(at(n,e))return n[e]
if(e.startsWith("title")){switch(e){case"titleColor":i="fill"
break
case"titleFont":case"titleFontSize":case"titleFontWeight":i=e[5].toLowerCase()+e.slice(6)}return r["guide-title"][i]}if(e.startsWith("label")){switch(e){case"labelColor":i="fill"
break
case"labelFont":case"labelFontSize":i=e[5].toLowerCase()+e.slice(6)}return r["guide-label"][i]}return null}function GP(e){const t={}
for(const n of e)if(n)for(const e in n)t[e]=1
return Object.keys(t)}function YP(e,t){return{scale:e.scale,range:t}}function XP(e,t,n,r,i){return{signal:'flush(range("'+e+'"), scale("'+e+'", datum.value), '+t+","+n+","+r+","+i+")"}}function JP(e,t){const n=function(e,t){var n,r,i,o=t.config,a=o.style,s=o.axis,l="band"===t.scaleType(e.scale)&&o.axisBand,u=e.orient
if(pN(u)){const e=GP([o.axisX,o.axisY]),t=GP([o.axisTop,o.axisBottom,o.axisLeft,o.axisRight])
for(i of(n={},e))n[i]=NP(u,HP(i,o.axisX,s,a),HP(i,o.axisY,s,a))
for(i of(r={},t))r[i]=ZP(u.signal,HP(i,o.axisTop,s,a),HP(i,o.axisBottom,s,a),HP(i,o.axisLeft,s,a),HP(i,o.axisRight,s,a))}else n=u===y$||u===x$?o.axisX:o.axisY,r=o["axis"+u[0].toUpperCase()+u.slice(1)]
return n||r||l?nt({},s,n,r,l):s}(e,t),r=e.encode||{},i=r.axis||{},o=i.name||void 0,a=i.interactive,s=i.style,l=R$(e,n),u=function(e){const t=e("tickBand")
let n,r,i=e("tickOffset")
return t?t.signal?(n={signal:`(${t.signal}) === 'extent' ? 1 : 0.5`},r={signal:`(${t.signal}) === 'extent'`},we(i)||(i={signal:`(${t.signal}) === 'extent' ? 0 : ${i}`})):"extent"===t?(n=1,r=!0,i=0):(n=.5,r=!1):(n=e("bandPosition"),r=e("tickExtra")),{extra:r,band:n,offset:i}}(l),c={scale:e.scale,ticks:!!l("ticks"),labels:!!l("labels"),grid:!!l("grid"),domain:!!l("domain"),title:null!=e.title},f=sN(t.add(MN({},[c]))),d=sN(t.add(DN({scale:t.scaleRef(e.scale),extra:t.property(u.extra),count:t.objectProperty(e.tickCount),values:t.objectProperty(e.values),minstep:t.property(e.tickMinStep),formatType:t.property(e.formatType),formatSpecifier:t.property(e.format)}))),h=[]
let p
return c.grid&&h.push(function(e,t,n,r,i){const o=R$(e,t),a=e.orient,s=e.gridScale,l=TP(a,1,-1),u=function(e,t){if(1===t);else if(we(e)){let n=e=nt({},e)
for(;null!=n.mult;){if(!we(n.mult))return n.mult=pN(t)?{signal:`(${n.mult}) * (${t.signal})`}:n.mult*t,e
n=n.mult=nt({},n.mult)}n.mult=t}else e=pN(t)?{signal:`(${t.signal}) * (${e||0})`}:t*(e||0)
return e}(e.offset,l)
let c,f,d
const h={enter:c={opacity:F$},update:d={opacity:T$},exit:f={opacity:F$}}
IT(h,{stroke:o("gridColor"),strokeCap:o("gridCap"),strokeDash:o("gridDash"),strokeDashOffset:o("gridDashOffset"),strokeOpacity:o("gridOpacity"),strokeWidth:o("gridWidth")})
const p={scale:e.scale,field:O$,band:i.band,extra:i.extra,offset:i.offset,round:o("tickRound")},g=NP(a,{signal:"height"},{signal:"width"}),m=s?{scale:s,range:0,mult:l,offset:u}:{value:0,offset:u},y=s?{scale:s,range:1,mult:l,offset:u}:nt(g,{mult:l,offset:u})
return c.x=d.x=NP(a,p,m),c.y=d.y=$P(a,p,m),c.x2=d.x2=$P(a,y),c.y2=d.y2=NP(a,y),f.x=NP(a,p),f.y=$P(a,p),Z$({type:P$,role:"axis-grid",key:O$,from:r,encode:h},n)}(e,n,r.grid,d,u)),c.ticks&&(p=l("tickSize"),h.push(function(e,t,n,r,i,o){const a=R$(e,t),s=e.orient,l=TP(s,-1,1)
let u,c,f
const d={enter:u={opacity:F$},update:f={opacity:T$},exit:c={opacity:F$}}
IT(d,{stroke:a("tickColor"),strokeCap:a("tickCap"),strokeDash:a("tickDash"),strokeDashOffset:a("tickDashOffset"),strokeOpacity:a("tickOpacity"),strokeWidth:a("tickWidth")})
const h=PT(i)
h.mult=l
const p={scale:e.scale,field:O$,band:o.band,extra:o.extra,offset:o.offset,round:a("tickRound")}
return f.y=u.y=NP(s,F$,p),f.y2=u.y2=NP(s,h),c.x=NP(s,p),f.x=u.x=$P(s,F$,p),f.x2=u.x2=$P(s,h),c.y=$P(s,p),Z$({type:P$,role:"axis-tick",key:O$,from:r,encode:d},n)}(e,n,r.ticks,d,p,u))),c.labels&&(p=c.ticks?p:0,h.push(function(e,t,n,r,i,o){const a=R$(e,t),s=e.orient,l=e.scale,u=TP(s,-1,1),c=yN(a("labelFlush")),f=yN(a("labelFlushOffset")),d=a("labelAlign"),h=a("labelBaseline")
let p,g=0===c||!!c
const m=PT(i)
m.mult=u,m.offset=PT(a("labelPadding")||0),m.offset.mult=u
const y={scale:l,field:O$,band:.5,offset:q$(o.offset,a("labelOffset"))},v=NP(s,g?XP(l,c,'"left"','"right"','"center"'):{value:"center"},((e,t,n)=>pN(e)?((e,t,n)=>qP(`${e} === 'right'`,"left","right"))(e.signal):e===b$?{value:t}:{value:n})(s,"left","right")),b=NP(s,PP(s,"bottom","top"),g?XP(l,c,'"top"','"bottom"','"middle"'):{value:"middle"}),x=XP(l,c,`-(${f})`,f,0)
g=g&&f
const _={opacity:F$,x:NP(s,y,m),y:$P(s,y,m)},w={enter:_,update:p={opacity:T$,text:{field:_$},x:_.x,y:_.y,align:v,baseline:b},exit:{opacity:F$,x:_.x,y:_.y}}
IT(w,{dx:!d&&g?NP(s,x):null,dy:!h&&g?$P(s,x):null}),IT(w,{angle:a("labelAngle"),fill:a("labelColor"),fillOpacity:a("labelOpacity"),font:a("labelFont"),fontSize:a("labelFontSize"),fontWeight:a("labelFontWeight"),fontStyle:a("labelFontStyle"),limit:a("labelLimit"),lineHeight:a("labelLineHeight")},{align:d,baseline:h})
const O=a("labelBound")
let k=a("labelOverlap")
return k=k||O?{separation:a("labelSeparation"),method:k,order:"datum.index",bound:O?{scale:l,orient:s,tolerance:O}:null}:void 0,p.align!==v&&(p.align=VP(p.align,v)),p.baseline!==b&&(p.baseline=VP(p.baseline,b)),Z$({type:z$,role:"axis-label",style:k$,key:O$,from:r,encode:w,overlap:k},n)}(e,n,r.labels,d,p,u))),c.domain&&h.push(function(e,t,n,r){const i=R$(e,t),o=e.orient
let a,s
const l={enter:a={opacity:F$},update:s={opacity:T$},exit:{opacity:F$}}
IT(l,{stroke:i("domainColor"),strokeCap:i("domainCap"),strokeDash:i("domainDash"),strokeDashOffset:i("domainDashOffset"),strokeWidth:i("domainWidth"),strokeOpacity:i("domainOpacity")})
const u=YP(e,0),c=YP(e,1)
return a.x=s.x=NP(o,u,F$),a.x2=s.x2=NP(o,c),a.y=s.y=$P(o,u,F$),a.y2=s.y2=$P(o,c),Z$({type:P$,role:"axis-domain",from:r,encode:l},n)}(e,n,r.domain,f)),c.title&&h.push(function(e,t,n,r){const i=R$(e,t),o=e.orient,a=TP(o,-1,1)
let s,l
const u={enter:s={opacity:F$,anchor:PT(i("titleAnchor",null)),align:{signal:U$}},update:l=nt({},s,{opacity:T$,text:PT(e.title)}),exit:{opacity:F$}},c={signal:`lerp(range("${e.scale}"), ${B$(0,1,.5)})`}
return l.x=NP(o,c),l.y=$P(o,c),s.angle=NP(o,F$,((e,t)=>pN(e)?{signal:`(${e.signal}) * 90`}:{value:90*e})(a)),s.baseline=NP(o,PP(o,x$,y$),{value:x$}),l.angle=s.angle,l.baseline=s.baseline,IT(u,{fill:i("titleColor"),fillOpacity:i("titleOpacity"),font:i("titleFont"),fontSize:i("titleFontSize"),fontStyle:i("titleFontStyle"),fontWeight:i("titleFontWeight"),limit:i("titleLimit"),lineHeight:i("titleLineHeight")},{align:i("titleAlign"),angle:i("titleAngle"),baseline:i("titleBaseline")}),function(e,t,n,r){const i=(e,t)=>null!=e?(n.update[t]=VP(PT(e),n.update[t]),!1):!LT(t,r),o=i(e("titleX"),"x"),a=i(e("titleY"),"y")
n.enter.auto=a===o?PT(a):NP(t,PT(a),PT(o))}(i,o,u,n),u.update.align=VP(u.update.align,s.align),u.update.angle=VP(u.update.angle,s.angle),u.update.baseline=VP(u.update.baseline,s.baseline),Z$({type:z$,role:"axis-title",style:E$,from:r,encode:u},n)}(e,n,r.title,f)),AP(I$({role:"axis",from:f,encode:RT(KP(l,e),i,j$),marks:h,aria:l("aria"),description:l("description"),zindex:l("zindex"),name:o,interactive:a,style:s}),t)}function KP(e,t){const n={enter:{},update:{}}
return IT(n,{orient:e("orient"),offset:e("offset")||0,position:mN(t.position,0),titlePadding:e("titlePadding"),minExtent:e("minExtent"),maxExtent:e("maxExtent"),range:{signal:`abs(span(range("${t.scale}")))`},translate:e("translate"),format:t.format,formatType:t.formatType}),n}function QP(e,t,n){const r=Ve(e.signals),i=Ve(e.scales)
return n||r.forEach((e=>rN(e,t))),Ve(e.projections).forEach((e=>function(e,t){const n=t.config.projection||{},r={}
for(const i in e)"name"!==i&&(r[i]=m$(e[i],i,t))
for(const i in n)null==r[i]&&(r[i]=m$(n[i],i,t))
t.addProjection(e.name,r)}(e,t))),i.forEach((e=>function(e,t){const n=e.type||"linear"
Gp(n)||oe("Unrecognized scale type: "+Et(n)),t.addScale(e.name,{type:n,domain:void 0})}(e,t))),Ve(e.data).forEach((e=>function(e,t){const n=[]
e.transform&&e.transform.forEach((e=>{n.push(uP(e,t))})),e.on&&e.on.forEach((n=>{EP(n,t,e.name)})),t.addDataPipeline(e.name,function(e,t,n){const r=[]
let i,o,a,s,l,u=null,c=!1,f=!1
for(e.values?pN(e.values)||gN(e.format)?(r.push(jP(t,e)),r.push(u=MP())):r.push(u=MP({$ingest:e.values,$format:e.format})):e.url?gN(e.url)||gN(e.format)?(r.push(jP(t,e)),r.push(u=MP())):r.push(u=MP({$request:e.url,$format:e.format})):e.source&&(u=i=Ve(e.source).map((e=>sN(t.getData(e).output))),r.push(null)),o=0,a=n.length;o<a;++o)s=n[o],l=s.metadata,u||l.source||r.push(u=MP()),r.push(s),l.generates&&(f=!0),l.modifies&&!f&&(c=!0),l.source?u=s:l.changes&&(u=null)
return i&&(a=i.length-1,r[0]=GN({derive:c,pulse:a?i:i[0]}),(c||a)&&r.splice(1,0,MP())),u||r.push(MP()),r.push(JN({})),r}(e,t,n))}(e,t))),i.forEach((e=>r$(e,t))),(n||r).forEach((e=>function(e,t){const n=t.getSignal(e.name)
let r=e.update
e.init&&(r?oe("Signals can not include both init and update expressions."):(r=e.init,n.initonly=!0)),r&&(r=OF(r,t),n.update=r.$expr,n.params=r.$params),e.on&&e.on.forEach((e=>function(e,t,n){const r=e.encode,i={target:n}
let o=e.events,a=e.update,s=[]
o||oe("Signal update missing events specification."),yt(o)&&(o=CT(o,t.isSubscope()?dN:hN)),o=Ve(o).filter((e=>e.signal||e.scale?(s.push(e),0):1)),s.length>1&&(s=[EN(s)]),o.length&&s.push(o.length>1?{merge:o}:o[0]),null!=r&&(a&&oe("Signal encode and update are mutually exclusive."),a="encode(item(),"+Et(r)+")"),i.update=yt(a)?OF(a,t):null!=a.expr?OF(a.expr,t):null!=a.value?a.value:null!=a.signal?{$expr:kN,$params:{$value:t.signalRef(a.signal)}}:oe("Invalid signal update specification."),e.force&&(i.options={force:!0}),s.forEach((e=>t.addUpdate(nt(function(e,t){return{source:e.signal?t.signalRef(e.signal):e.scale?t.scaleRef(e.scale):bN(e,t)}}(e,t),i))))}(e,t,n.id)))}(e,t))),Ve(e.axes).forEach((e=>JP(e,t))),Ve(e.marks).forEach((e=>AP(e,t))),Ve(e.legends).forEach((e=>function(e,t){const n=t.config.legend,r=e.encode||{},i=R$(e,n),o=r.legend||{},a=o.name||void 0,s=o.interactive,l=o.style,u={}
let c,f,d,h=0
M$.forEach((t=>e[t]?(u[t]=e[t],h=h||e[t]):0)),h||oe("Missing valid scale for legend.")
const p=function(e,t){let n=e.type||A$
return e.type||1!==function(e){return M$.reduce(((t,n)=>t+(e[n]?1:0)),0)}(e)||!e.fill&&!e.stroke||(n=Xp(t)?S$:Kp(t)?D$:A$),n!==S$?n:Kp(t)?D$:S$}(e,t.scaleType(h)),g={title:null!=e.title,scales:u,type:p,vgrad:"symbol"!==p&&i.isVertical()},m=sN(t.add(MN(null,[g]))),y=sN(t.add(IN(f={type:p,scale:t.scaleRef(h),count:t.objectProperty(i("tickCount")),limit:t.property(i("symbolLimit")),values:t.objectProperty(e.values),minstep:t.property(e.tickMinStep),formatType:t.property(e.formatType),formatSpecifier:t.property(e.format)})))
return p===S$?(d=[W$(e,h,n,r.gradient),H$(e,n,r.labels,y)],f.count=f.count||t.signalRef(`max(2,2*floor((${yN(i.gradientLength())})/100))`)):p===D$?d=[V$(e,h,n,r.gradient,y),H$(e,n,r.labels,y)]:(c=function(e,t){const n=R$(e,t)
return{align:n("gridAlign"),columns:n.entryColumns(),center:{row:!0,column:!1},padding:{row:n("rowPadding"),column:n("columnPadding")}}}(e,n),d=[G$(e,n,r,y,yN(c.columns))],f.size=function(e,t,n){const r=yN(DP("size",e,n)),i=yN(DP("strokeWidth",e,n)),o=yN(function(e,t,n){return L$("fontSize",e)||function(e,t,n){const r=t.config.style["guide-label"]
return r&&r.fontSize}(0,t)}(n[1].encode,t))
return OF(`max(ceil(sqrt(${r})+${i}),${o})`,t)}(e,t,d[0].marks)),d=[I$({role:"legend-entry",from:m,encode:{enter:{x:{value:0},y:{value:0}}},marks:d,layout:c,interactive:s})],g.title&&d.push(function(e,t,n,r){const i=R$(e,t),o={enter:{opacity:F$},update:{opacity:T$,x:{field:{group:"padding"}},y:{field:{group:"padding"}}},exit:{opacity:F$}}
return IT(o,{orient:i("titleOrient"),_anchor:i("titleAnchor"),anchor:{signal:tP},angle:{signal:nP},align:{signal:eP},baseline:{signal:rP},text:e.title,fill:i("titleColor"),fillOpacity:i("titleOpacity"),font:i("titleFont"),fontSize:i("titleFontSize"),fontStyle:i("titleFontStyle"),fontWeight:i("titleFontWeight"),limit:i("titleLimit"),lineHeight:i("titleLineHeight")},{align:i("titleAlign"),baseline:i("titleBaseline")}),Z$({type:z$,role:"legend-title",style:E$,from:r,encode:o},n)}(e,n,r.title,m)),AP(I$({role:"legend",from:m,encode:RT(SP(i,e,n),o,j$),marks:d,aria:i("aria"),description:i("description"),zindex:i("zindex"),name:a,interactive:s,style:l}),t)}(e,t))),e.title&&function(e,t){const n=R$(e=yt(e)?{text:e}:e,t.config.title),r=e.encode||{},i=r.group||{},o=i.name||void 0,a=i.interactive,s=i.style,l=[],u=sN(t.add(MN(null,[{}])))
l.push(function(e,t,n,r){const i={value:0},o={enter:{opacity:i},update:{opacity:{value:1}},exit:{opacity:i}}
return IT(o,{text:e.text,align:{signal:"item.mark.group.align"},angle:{signal:"item.mark.group.angle"},limit:{signal:"item.mark.group.limit"},baseline:"top",dx:t("dx"),dy:t("dy"),fill:t("color"),font:t("font"),fontSize:t("fontSize"),fontStyle:t("fontStyle"),fontWeight:t("fontWeight"),lineHeight:t("lineHeight")},{align:t("align"),angle:t("angle"),baseline:t("baseline")}),Z$({type:z$,role:"title-text",style:"group-title",from:r,encode:o},n)}(e,n,function(e){const t=e.encode
return t&&t.title||nt({name:e.name,interactive:e.interactive,style:e.style},t)}(e),u)),e.subtitle&&l.push(function(e,t,n,r){const i={value:0},o={enter:{opacity:i},update:{opacity:{value:1}},exit:{opacity:i}}
return IT(o,{text:e.subtitle,align:{signal:"item.mark.group.align"},angle:{signal:"item.mark.group.angle"},limit:{signal:"item.mark.group.limit"},baseline:"top",dx:t("dx"),dy:t("dy"),fill:t("subtitleColor"),font:t("subtitleFont"),fontSize:t("subtitleFontSize"),fontStyle:t("subtitleFontStyle"),fontWeight:t("subtitleFontWeight"),lineHeight:t("subtitleLineHeight")},{align:t("align"),angle:t("angle"),baseline:t("baseline")}),Z$({type:z$,role:"title-subtitle",style:"group-subtitle",from:r,encode:o},n)}(e,n,r.subtitle,u)),AP(I$({role:"title",from:u,encode:CP(n,i),marks:l,aria:n("aria"),description:n("description"),zindex:n("zindex"),name:o,interactive:a,style:s}),t)}(e.title,t),t.parseLambdas(),t}function ez(e,t){return t&&t.signal?{name:e,update:t.signal}:{name:e,value:t}}function tz(e,t){this.config=e||{},this.options=t||{},this.bindings=[],this.field={},this.signals={},this.lambdas={},this.scales={},this.events={},this.data={},this.streams=[],this.updates=[],this.operators=[],this.eventConfig=null,this.locale=null,this._id=0,this._subid=0,this._nextsub=[0],this._parent=[],this._encode=[],this._lookup=[],this._markpath=[]}function nz(e){this.config=e.config,this.options=e.options,this.legends=e.legends,this.field=Object.create(e.field),this.signals=Object.create(e.signals),this.lambdas=Object.create(e.lambdas),this.scales=Object.create(e.scales),this.events=Object.create(e.events),this.data=Object.create(e.data),this.streams=[],this.updates=[],this.operators=[],this._id=0,this._subid=++e._nextsub[0],this._nextsub=e._nextsub,this._parent=e._parent.slice(),this._encode=e._encode.slice(),this._lookup=e._lookup.slice(),this._markpath=e._markpath}function rz(e){return(_e(e)?iz:oz)(e)}function iz(e){const t=e.length
let n="["
for(let r=0;r<t;++r){const t=e[r]
n+=(r>0?",":"")+(we(t)?t.signal||rz(t):Et(t))}return n+"]"}function oz(e){let t,n,r="{",i=0
for(t in e)n=e[t],r+=(++i>1?",":"")+Et(t)+":"+(we(n)?n.signal||rz(n):Et(n))
return r+"}"}function az(e,t,n){return we(e)||oe("Input Vega specification must be an object."),t=ke(function(){const e="sans-serif",t="#4c78a8",n="#000",r="#888",i="#ddd"
return{description:"Vega visualization",padding:0,autosize:"pad",background:null,events:{defaults:{allow:["wheel"]}},group:null,mark:null,arc:{fill:t},area:{fill:t},image:null,line:{stroke:t,strokeWidth:2},path:{stroke:t},rect:{fill:t},rule:{stroke:n},shape:{stroke:t},symbol:{fill:t,size:64},text:{fill:n,font:e,fontSize:11},trail:{fill:t,size:2},style:{"guide-label":{fill:n,font:e,fontSize:10},"guide-title":{fill:n,font:e,fontSize:11,fontWeight:"bold"},"group-title":{fill:n,font:e,fontSize:13,fontWeight:"bold"},"group-subtitle":{fill:n,font:e,fontSize:12},point:{size:30,strokeWidth:2,shape:"circle"},circle:{size:30,strokeWidth:2},square:{size:30,strokeWidth:2,shape:"square"},cell:{fill:"transparent",stroke:i}},title:{orient:"top",anchor:"middle",offset:4,subtitlePadding:3},axis:{minExtent:0,maxExtent:200,bandPosition:.5,domain:!0,domainWidth:1,domainColor:r,grid:!1,gridWidth:1,gridColor:i,labels:!0,labelAngle:0,labelLimit:180,labelOffset:0,labelPadding:2,ticks:!0,tickColor:r,tickOffset:0,tickRound:!0,tickSize:5,tickWidth:1,titlePadding:4},axisBand:{tickOffset:-.5},projection:{type:"mercator"},legend:{orient:"right",padding:0,gridAlign:"each",columnPadding:10,rowPadding:2,symbolDirection:"vertical",gradientDirection:"vertical",gradientLength:200,gradientThickness:16,gradientStrokeColor:i,gradientStrokeWidth:0,gradientLabelOffset:2,labelAlign:"left",labelBaseline:"middle",labelLimit:160,labelOffset:4,labelOverlap:!0,symbolLimit:30,symbolType:"circle",symbolSize:100,symbolOffset:0,symbolStrokeWidth:1.5,symbolBaseFillColor:"transparent",symbolBaseStrokeColor:r,titleLimit:180,titleOrient:"top",titlePadding:5,layout:{offset:18,direction:"horizontal",left:{direction:"vertical"},right:{direction:"vertical"}}},range:{category:{scheme:"tableau10"},ordinal:{scheme:"blues"},heatmap:{scheme:"yellowgreenblue"},ramp:{scheme:"blues"},diverging:{scheme:"blueorange",extent:[1,0]},symbol:["circle","square","triangle-up","cross","diamond","triangle-right","triangle-down","triangle-left"]}}}(),t,e.config),function(e,t){const n=t.config,r=sN(t.root=t.add(aN())),i=function(e,t){const n=n=>mN(e[n],t[n]),r=[ez("background",n("background")),ez("autosize",TT(n("autosize"))),ez("padding",$T(n("padding"))),ez("width",n("width")||0),ez("height",n("height")||0)],i=r.reduce(((e,t)=>(e[t.name]=t,e)),{}),o={}
return Ve(e.signals).forEach((e=>{at(i,e.name)?e=nt(i[e.name],e):r.push(e),o[e.name]=e})),Ve(t.signals).forEach((e=>{at(o,e.name)||at(i,e.name)||r.push(e)})),r}(e,n)
i.forEach((e=>rN(e,t))),t.description=e.description||n.description,t.eventConfig=n.events,t.legends=t.objectProperty(n.legend&&n.legend.layout),t.locale=n.locale
const o=t.add(MN()),a=t.add(TN(KT((e=>RT({enter:{x:{value:0},y:{value:0}},update:{width:{signal:"width"},height:{signal:"height"}}},e))(e.encode),N$,UT,e.style,t,{pulse:sN(o)}))),s=t.add(QN({layout:t.objectProperty(e.layout),legends:t.legends,autosize:t.signalRef("autosize"),mark:r,pulse:sN(a)}))
t.operators.pop(),t.pushState(sN(a),sN(s),null),QP(e,t,i),t.operators.push(s)
let l=t.add(CN({mark:r,pulse:sN(s)}))
return l=t.add(YN({pulse:sN(l)})),l=t.add(JN({pulse:sN(l)})),t.addData("root",new _P(t,o,o,l)),t}(e,new tz(t,n)).toRuntime()}tz.prototype=nz.prototype={parse(e){return QP(e,this)},fork(){return new nz(this)},isSubscope(){return this._subid>0},toRuntime(){return this.finish(),{description:this.description,operators:this.operators,streams:this.streams,updates:this.updates,bindings:this.bindings,eventConfig:this.eventConfig,locale:this.locale}},id(){return(this._subid?this._subid+":":0)+this._id++},add(e){return this.operators.push(e),e.id=this.id(),e.refs&&(e.refs.forEach((t=>{t.$ref=e.id})),e.refs=null),e},proxy(e){const t=e instanceof iN?sN(e):e
return this.add(HN({value:t}))},addStream(e){return this.streams.push(e),e.id=this.id(),e},addUpdate(e){return this.updates.push(e),e},finish(){let e,t
for(e in this.root&&(this.root.root=!0),this.signals)this.signals[e].signal=e
for(e in this.scales)this.scales[e].scale=e
function n(e,t,n){let r,i
e&&(r=e.data||(e.data={}),i=r[t]||(r[t]=[]),i.push(n))}for(e in this.data){t=this.data[e],n(t.input,e,"input"),n(t.output,e,"output"),n(t.values,e,"values")
for(const r in t.index)n(t.index[r],e,"index:"+r)}return this},pushState(e,t,n){this._encode.push(sN(this.add(JN({pulse:e})))),this._parent.push(t),this._lookup.push(n?sN(this.proxy(n)):null),this._markpath.push(-1)},popState(){this._encode.pop(),this._parent.pop(),this._lookup.pop(),this._markpath.pop()},parent(){return Se(this._parent)},encode(){return Se(this._encode)},lookup(){return Se(this._lookup)},markpath(){const e=this._markpath
return++e[e.length-1]},fieldRef(e,t){if(yt(e))return lN(e,t)
e.signal||oe("Unsupported field reference: "+Et(e))
const n=e.signal
let r=this.field[n]
if(!r){const e={name:this.signalRef(n)}
t&&(e.as=t),this.field[n]=r=sN(this.add(PN(e)))}return r},compareRef(e){let t=!1
const n=e=>pN(e)?(t=!0,this.signalRef(e.signal)):function(e){return e&&e.expr}(e)?(t=!0,this.exprRef(e.expr)):e,r=Ve(e.field).map(n),i=Ve(e.order).map(n)
return t?sN(this.add(jN({fields:r,orders:i}))):cN(r,i)},keyRef(e,t){let n=!1
const r=this.signals
return e=Ve(e).map((e=>pN(e)?(n=!0,sN(r[e.signal])):e)),n?sN(this.add(zN({fields:e,flat:t}))):function(e,t){const n={$key:e}
return t&&(n.$flat=!0),n}(e,t)},sortRef(e){if(!e)return e
const t=fN(e.op,e.field),n=e.order||"ascending"
return n.signal?sN(this.add(jN({fields:t,orders:this.signalRef(n.signal)}))):cN(t,n)},event(e,t){const n=e+":"+t
if(!this.events[n]){const r=this.id()
this.streams.push({id:r,source:e,type:t}),this.events[n]=r}return this.events[n]},hasOwnSignal(e){return at(this.signals,e)},addSignal(e,t){this.hasOwnSignal(e)&&oe("Duplicate signal name: "+Et(e))
const n=t instanceof iN?t:this.add(aN(t))
return this.signals[e]=n},getSignal(e){return this.signals[e]||oe("Unrecognized signal name: "+Et(e)),this.signals[e]},signalRef(e){return this.signals[e]?sN(this.signals[e]):(at(this.lambdas,e)||(this.lambdas[e]=this.add(aN(null))),sN(this.lambdas[e]))},parseLambdas(){const e=Object.keys(this.lambdas)
for(let t=0,n=e.length;t<n;++t){const n=e[t],r=OF(n,this),i=this.lambdas[n]
i.params=r.$params,i.update=r.$expr}},property(e){return e&&e.signal?this.signalRef(e.signal):e},objectProperty(e){return e&&we(e)?this.signalRef(e.signal||rz(e)):e},exprRef(e,t){const n={expr:OF(e,this)}
return t&&(n.expr.$name=t),sN(this.add(NN(n)))},addBinding(e,t){this.bindings||oe("Nested signals do not support binding: "+Et(e)),this.bindings.push(nt({signal:e},t))},addScaleProj(e,t){at(this.scales,e)&&oe("Duplicate scale or projection name: "+Et(e)),this.scales[e]=this.add(t)},addScale(e,t){this.addScaleProj(e,XN(t))},addProjection(e,t){this.addScaleProj(e,VN(t))},getScale(e){return this.scales[e]||oe("Unrecognized scale name: "+Et(e)),this.scales[e]},scaleRef(e){return sN(this.getScale(e))},scaleType(e){return this.getScale(e).params.type},projectionRef(e){return this.scaleRef(e)},projectionType(e){return this.scaleType(e)},addData(e,t){return at(this.data,e)&&oe("Duplicate data set name: "+Et(e)),this.data[e]=t},getData(e){return this.data[e]||oe("Undefined data set name: "+Et(e)),this.data[e]},addDataPipeline(e,t){return at(this.data,e)&&oe("Duplicate data set name: "+Et(e)),this.addData(e,_P.fromEntries(this,t))}}
var sz="5.22.1"
nt(bs,o,s,l,u,c,d,f,h,p,g,m)
var lz={NaN:NaN,E:Math.E,LN2:Math.LN2,LN10:Math.LN10,LOG2E:Math.LOG2E,LOG10E:Math.LOG10E,PI:Math.PI,SQRT1_2:Math.SQRT1_2,SQRT2:Math.SQRT2,MIN_VALUE:Number.MIN_VALUE,MAX_VALUE:Number.MAX_VALUE},uz={"*":(e,t)=>e*t,"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"%":(e,t)=>e%t,">":(e,t)=>e>t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,">=":(e,t)=>e>=t,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,"===":(e,t)=>e===t,"!==":(e,t)=>e!==t,"&":(e,t)=>e&t,"|":(e,t)=>e|t,"^":(e,t)=>e^t,"<<":(e,t)=>e<<t,">>":(e,t)=>e>>t,">>>":(e,t)=>e>>>t},cz={"+":e=>+e,"-":e=>-e,"~":e=>~e,"!":e=>!e}
const fz=Array.prototype.slice,dz=(e,t,n)=>{const r=n?n(t[0]):t[0]
return r[e].apply(r,fz.call(t,1))}
var hz={isNaN:Number.isNaN,isFinite:Number.isFinite,abs:Math.abs,acos:Math.acos,asin:Math.asin,atan:Math.atan,atan2:Math.atan2,ceil:Math.ceil,cos:Math.cos,exp:Math.exp,floor:Math.floor,log:Math.log,max:Math.max,min:Math.min,pow:Math.pow,random:Math.random,round:Math.round,sin:Math.sin,sqrt:Math.sqrt,tan:Math.tan,clamp:(e,t,n)=>Math.max(t,Math.min(n,e)),now:Date.now,utc:Date.UTC,datetime:(e,t,n,r,i,o,a)=>new Date(e,t||0,null!=n?n:1,r||0,i||0,o||0,a||0),date:e=>new Date(e).getDate(),day:e=>new Date(e).getDay(),year:e=>new Date(e).getFullYear(),month:e=>new Date(e).getMonth(),hours:e=>new Date(e).getHours(),minutes:e=>new Date(e).getMinutes(),seconds:e=>new Date(e).getSeconds(),milliseconds:e=>new Date(e).getMilliseconds(),time:e=>new Date(e).getTime(),timezoneoffset:e=>new Date(e).getTimezoneOffset(),utcdate:e=>new Date(e).getUTCDate(),utcday:e=>new Date(e).getUTCDay(),utcyear:e=>new Date(e).getUTCFullYear(),utcmonth:e=>new Date(e).getUTCMonth(),utchours:e=>new Date(e).getUTCHours(),utcminutes:e=>new Date(e).getUTCMinutes(),utcseconds:e=>new Date(e).getUTCSeconds(),utcmilliseconds:e=>new Date(e).getUTCMilliseconds(),length:e=>e.length,join:function(){return dz("join",arguments)},indexof:function(){return dz("indexOf",arguments)},lastindexof:function(){return dz("lastIndexOf",arguments)},slice:function(){return dz("slice",arguments)},reverse:e=>e.slice().reverse(),parseFloat:parseFloat,parseInt:parseInt,upper:e=>String(e).toUpperCase(),lower:e=>String(e).toLowerCase(),substring:function(){return dz("substring",arguments,String)},split:function(){return dz("split",arguments,String)},replace:function(){return dz("replace",arguments,String)},trim:e=>String(e).trim(),regexp:RegExp,test:(e,t)=>RegExp(e).test(t)}
const pz=["view","item","group","xy","x","y"],gz={Literal:(e,t)=>t.value,Identifier:(e,t)=>{const n=t.name
return e.memberDepth>0?n:"datum"===n?e.datum:"event"===n?e.event:"item"===n?e.item:lz[n]||e.params["$"+n]},MemberExpression:(e,t)=>{const n=!t.computed,r=e(t.object)
n&&(e.memberDepth+=1)
const i=e(t.property)
return n&&(e.memberDepth-=1),r[i]},CallExpression:(e,t)=>{const n=t.arguments
let r=t.callee.name
return r.startsWith("_")&&(r=r.slice(1)),"if"===r?e(n[0])?e(n[1]):e(n[2]):(e.fn[r]||hz[r]).apply(e.fn,n.map(e))},ArrayExpression:(e,t)=>t.elements.map(e),BinaryExpression:(e,t)=>uz[t.operator](e(t.left),e(t.right)),UnaryExpression:(e,t)=>cz[t.operator](e(t.argument)),ConditionalExpression:(e,t)=>e(t.test)?e(t.consequent):e(t.alternate),LogicalExpression:(e,t)=>"&&"===t.operator?e(t.left)&&e(t.right):e(t.left)||e(t.right),ObjectExpression:(e,t)=>t.properties.reduce(((t,n)=>{e.memberDepth+=1
const r=e(n.key)
return e.memberDepth-=1,t[r]=e(n.value),t}),{})}
function mz(e,t,n,r,i,o){const a=e=>gz[e.type](a,e)
return a.memberDepth=0,a.fn=Object.create(t),a.params=n,a.datum=r,a.event=i,a.item=o,pz.forEach((e=>a.fn[e]=function(){return i.vega[e](...arguments)})),a(e)}var yz={operator(e,t){const n=t.ast,r=e.functions
return e=>mz(n,r,e)},parameter(e,t){const n=t.ast,r=e.functions
return(e,t)=>mz(n,r,t,e)},event(e,t){const n=t.ast,r=e.functions
return e=>mz(n,r,void 0,void 0,e)},handler(e,t){const n=t.ast,r=e.functions
return(e,t)=>{const i=t.item&&t.item.datum
return mz(n,r,e,i,t)}},encode(e,t){const{marktype:n,channels:r}=t,i=e.functions,o="group"===n||"image"===n||"rect"===n
return(e,t)=>{const a=e.datum
let s,l=0
for(const n in r)s=mz(r[n].ast,i,t,a,void 0,e),e[n]!==s&&(e[n]=s,l=1)
return"rule"!==n&&function(e,t,n){let r
t.x2&&(t.x?(n&&e.x>e.x2&&(r=e.x,e.x=e.x2,e.x2=r),e.width=e.x2-e.x):e.x=e.x2-(e.width||0)),t.xc&&(e.x=e.xc-(e.width||0)/2),t.y2&&(t.y?(n&&e.y>e.y2&&(r=e.y,e.y=e.y2,e.y2=r),e.height=e.y2-e.y):e.y=e.y2-(e.height||0)),t.yc&&(e.y=e.yc-(e.height||0)/2)}(e,r,o),l}}}
Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0}),Array.prototype.flatMap||Object.defineProperty(Array.prototype,"flatMap",{configurable:!0,value:function(e){return Array.prototype.map.apply(this,arguments).flat()},writable:!0})
var vz=n(183),bz=n.n(vz),xz=n(94),_z=n.n(xz),wz=n(277),Oz=n.n(wz)
function kz(e){return!!e.or}function Ez(e){return!!e.and}function Az(e){return!!e.not}function Sz(e,t){if(Az(e))Sz(e.not,t)
else if(Ez(e))for(const n of e.and)Sz(n,t)
else if(kz(e))for(const n of e.or)Sz(n,t)
else t(e)}function Dz(e,t){return Az(e)?{not:Dz(e.not,t)}:Ez(e)?{and:e.and.map((e=>Dz(e,t)))}:kz(e)?{or:e.or.map((e=>Dz(e,t)))}:t(e)}const Cz=_z(),Mz=bz()
function jz(e){throw new Error(e)}function Fz(e,t){const n={}
for(const r of t)at(e,r)&&(n[r]=e[r])
return n}function Tz(e,t){const n=Object.assign({},e)
for(const r of t)delete n[r]
return n}Set.prototype.toJSON=function(){return`Set(${[...this].map((e=>Oz()(e))).join(",")})`}
const Nz=Oz()
function $z(e){if(gt(e))return e
const t=yt(e)?e:Oz()(e)
if(t.length<250)return t
let n=0
for(let r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r),n&=n
return n}function Pz(e){return!1===e||null===e}function zz(e,t){return e.includes(t)}function Iz(e,t){let n=0
for(const[r,i]of e.entries())if(t(i,r,n++))return!0
return!1}function Rz(e,t){let n=0
for(const[r,i]of e.entries())if(!t(i,r,n++))return!1
return!0}function Lz(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
for(const i of n)Bz(e,null!=i?i:{})
return e}function Bz(e,t){for(const n of Yz(t))Ee(e,n,t[n],!0)}function Uz(e,t){const n=[],r={}
let i
for(const o of e)i=t(o),i in r||(r[i]=1,n.push(o))
return n}function qz(e,t){const n=Yz(e),r=Yz(t)
if(n.length!==r.length)return!1
for(const i of n)if(e[i]!==t[i])return!1
return!0}function Zz(e,t){if(e.size!==t.size)return!1
for(const n of e)if(!t.has(n))return!1
return!0}function Wz(e,t){for(const n of e)if(t.has(n))return!0
return!1}function Vz(e){const t=new Set
for(const n of e){const e=ae(n).map(((e,t)=>0===t?e:`[${e}]`)),r=e.map(((t,n)=>e.slice(0,n+1).join("")))
for(const n of r)t.add(n)}return t}function Hz(e,t){return void 0===e||void 0===t||Wz(Vz(e),Vz(t))}function Gz(e){return 0===Yz(e).length}const Yz=Object.keys,Xz=Object.values,Jz=Object.entries
function Kz(e){return!0===e||!1===e}function Qz(e){const t=e.replace(/\W/g,"_")
return(e.match(/^\d+/)?"_":"")+t}function eI(e,t){return Az(e)?`!(${eI(e.not,t)})`:Ez(e)?`(${e.and.map((e=>eI(e,t))).join(") && (")})`:kz(e)?`(${e.or.map((e=>eI(e,t))).join(") || (")})`:t(e)}function tI(e,t){if(0===t.length)return!0
const n=t.shift()
return n in e&&tI(e[n],t)&&delete e[n],Gz(e)}function nI(e){return e.charAt(0).toUpperCase()+e.substr(1)}function rI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"datum"
const n=ae(e),r=[]
for(let i=1;i<=n.length;i++){const e=`[${n.slice(0,i).map(Et).join("][")}]`
r.push(`${t}${e}`)}return r.join(" && ")}function iI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"datum"
return`${t}[${Et(ae(e).join("."))}]`}function oI(e){return e.replace(/(\[|\]|\.|'|")/g,"\\$1")}function aI(e){return`${ae(e).map(oI).join("\\.")}`}function sI(e,t,n){return e.replace(new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"g"),n)}function lI(e){return`${ae(e).join(".")}`}function uI(e){return e?ae(e).length:0}function cI(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
for(const r of t)if(void 0!==r)return r}let fI=42
function dI(e){const t=++fI
return e?String(e)+t:t}function hI(){fI=42}function pI(e){return gI(e)?e:`__${e}`}function gI(e){return e.startsWith("__")}function mI(e){if(void 0!==e)return(e%360+360)%360}function yI(e){return!!gt(e)||!isNaN(e)&&!isNaN(parseFloat(e))}var vI=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
const bI="row",xI="column",_I="facet",wI="x",OI="y",kI="x2",EI="y2",AI="xOffset",SI="yOffset",DI="radius",CI="radius2",MI="theta",jI="theta2",FI="latitude",TI="longitude",NI="latitude2",$I="longitude2",PI="color",zI="fill",II="stroke",RI="shape",LI="size",BI="angle",UI="opacity",qI="fillOpacity",ZI="strokeOpacity",WI="strokeWidth",VI="strokeDash",HI="text",GI="order",YI="detail",XI="key",JI="tooltip",KI="href",QI="url",eR="description",tR={theta:1,theta2:1,radius:1,radius2:1}
function nR(e){return e in tR}const rR={longitude:1,longitude2:1,latitude:1,latitude2:1},iR=Yz(rR),oR=Object.assign(Object.assign(Object.assign(Object.assign({},{x:1,y:1,x2:1,y2:1}),tR),rR),{xOffset:1,yOffset:1,color:1,fill:1,stroke:1,opacity:1,fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeDash:1,size:1,angle:1,shape:1,order:1,text:1,detail:1,key:1,tooltip:1,href:1,url:1,description:1})
function aR(e){return e===PI||e===zI||e===II}const sR={row:1,column:1,facet:1},lR=Yz(sR),uR=Object.assign(Object.assign({},oR),sR),cR=Yz(uR),{order:fR,detail:dR,tooltip:hR}=uR,pR=vI(uR,["order","detail","tooltip"]),{row:gR,column:mR,facet:yR}=pR,vR=vI(pR,["row","column","facet"])
function bR(e){return!!uR[e]}Yz(pR),Yz(vR)
const xR=[kI,EI,NI,$I,jI,CI]
function _R(e){return wR(e)!==e}function wR(e){switch(e){case kI:return wI
case EI:return OI
case NI:return FI
case $I:return TI
case jI:return MI
case CI:return DI}return e}function OR(e){if(nR(e))switch(e){case MI:return"startAngle"
case jI:return"endAngle"
case DI:return"outerRadius"
case CI:return"innerRadius"}return e}function kR(e){switch(e){case wI:return kI
case OI:return EI
case FI:return NI
case TI:return $I
case MI:return jI
case DI:return CI}}function ER(e){switch(e){case wI:case kI:return"width"
case OI:case EI:return"height"}}function AR(e){switch(e){case wI:return"xOffset"
case OI:return"yOffset"}}function SR(e){switch(e){case"xOffset":return"x"
case"yOffset":return"y"}}const DR=Yz(oR),{x:CR,y:MR,x2:jR,y2:FR,xOffset:TR,yOffset:NR,latitude:$R,longitude:PR,latitude2:zR,longitude2:IR,theta:RR,theta2:LR,radius:BR,radius2:UR}=oR,qR=vI(oR,["x","y","x2","y2","xOffset","yOffset","latitude","longitude","latitude2","longitude2","theta","theta2","radius","radius2"]),ZR=Yz(qR),WR={x:1,y:1},VR=Yz(WR)
function HR(e){return e in WR}const GR={theta:1,radius:1},YR=Yz(GR)
function XR(e){return"width"===e?wI:OI}const JR={xOffset:1,yOffset:1}
function KR(e){return e in JR}Yz(JR)
const{text:QR,tooltip:eL,href:tL,url:nL,description:rL,detail:iL,key:oL,order:aL}=qR,sL=vI(qR,["text","tooltip","href","url","description","detail","key","order"]),lL=Yz(sL),uL=Object.assign(Object.assign(Object.assign(Object.assign({},WR),GR),JR),sL),cL=Yz(uL)
function fL(e){return!!uL[e]}const dL={arc:"always",area:"always",bar:"always",circle:"always",geoshape:"always",image:"always",line:"always",rule:"always",point:"always",rect:"always",square:"always",trail:"always",text:"always",tick:"always"},{geoshape:hL}=dL,pL=vI(dL,["geoshape"])
function gL(e){switch(e){case wI:case OI:case MI:case DI:case AI:case SI:case LI:case BI:case WI:case UI:case qI:case ZI:case kI:case EI:case jI:case CI:return
case _I:case bI:case xI:case RI:case VI:case HI:case JI:case KI:case QI:case eR:return"discrete"
case PI:case zI:case II:return"flexible"
case FI:case TI:case NI:case $I:case YI:case XI:case GI:return}}const mL={argmax:1,argmin:1,average:1,count:1,distinct:1,product:1,max:1,mean:1,median:1,min:1,missing:1,q1:1,q3:1,ci0:1,ci1:1,stderr:1,stdev:1,stdevp:1,sum:1,valid:1,values:1,variance:1,variancep:1},yL={count:1,min:1,max:1}
function vL(e){return!!e&&!!e.argmin}function bL(e){return!!e&&!!e.argmax}function xL(e){return yt(e)&&!!mL[e]}const _L=new Set(["count","valid","missing","distinct"])
function wL(e){return yt(e)&&_L.has(e)}const OL=new Set(["count","sum","distinct","valid","missing"]),kL=new Set(["mean","average","median","q1","q3","min","max"])
function EL(e){return dt(e)&&(e=GZ(e,void 0)),"bin"+Yz(e).map((t=>CL(e[t])?Qz(`_${t}_${Jz(e[t])}`):Qz(`_${t}_${e[t]}`))).join("")}function AL(e){return!0===e||DL(e)&&!e.binned}function SL(e){return"binned"===e||DL(e)&&!0===e.binned}function DL(e){return we(e)}function CL(e){return null==e?void 0:e.param}function ML(e){switch(e){case bI:case xI:case LI:case PI:case zI:case II:case WI:case UI:case qI:case ZI:case RI:return 6
case VI:return 4
default:return 10}}function jL(e){return!!(null==e?void 0:e.expr)}function FL(e){const t=Yz(e||{}),n={}
for(const r of t)n[r]=qL(e[r])
return n}function TL(e){const{anchor:t,frame:n,offset:r,orient:i,angle:o,limit:a,color:s,subtitleColor:l,subtitleFont:u,subtitleFontSize:c,subtitleFontStyle:f,subtitleFontWeight:d,subtitleLineHeight:h,subtitlePadding:p}=e,g=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["anchor","frame","offset","orient","angle","limit","color","subtitleColor","subtitleFont","subtitleFontSize","subtitleFontStyle","subtitleFontWeight","subtitleLineHeight","subtitlePadding"]),m=Object.assign(Object.assign({},g),s?{fill:s}:{}),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t?{anchor:t}:{}),n?{frame:n}:{}),r?{offset:r}:{}),i?{orient:i}:{}),void 0!==o?{angle:o}:{}),void 0!==a?{limit:a}:{}),v=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l?{subtitleColor:l}:{}),u?{subtitleFont:u}:{}),c?{subtitleFontSize:c}:{}),f?{subtitleFontStyle:f}:{}),d?{subtitleFontWeight:d}:{}),h?{subtitleLineHeight:h}:{}),p?{subtitlePadding:p}:{})
return{titleMarkConfig:m,subtitleMarkConfig:Fz(e,["align","baseline","dx","dy","limit"]),nonMarkTitleProperties:y,subtitle:v}}function NL(e){return yt(e)||_e(e)&&yt(e[0])}function $L(e){return!!(null==e?void 0:e.signal)}function PL(e){return!!e.step}function zL(e){return!_e(e)&&"field"in e&&"data"in e}const IL=Yz({aria:1,description:1,ariaRole:1,ariaRoleDescription:1,blend:1,opacity:1,fill:1,fillOpacity:1,stroke:1,strokeCap:1,strokeWidth:1,strokeOpacity:1,strokeDash:1,strokeDashOffset:1,strokeJoin:1,strokeOffset:1,strokeMiterLimit:1,startAngle:1,endAngle:1,padAngle:1,innerRadius:1,outerRadius:1,size:1,shape:1,interpolate:1,tension:1,orient:1,align:1,baseline:1,text:1,dir:1,dx:1,dy:1,ellipsis:1,limit:1,radius:1,theta:1,angle:1,font:1,fontSize:1,fontWeight:1,fontStyle:1,lineBreak:1,lineHeight:1,cursor:1,href:1,tooltip:1,cornerRadius:1,cornerRadiusTopLeft:1,cornerRadiusTopRight:1,cornerRadiusBottomLeft:1,cornerRadiusBottomRight:1,aspect:1,width:1,height:1,url:1,smooth:1}),RL={arc:1,area:1,group:1,image:1,line:1,path:1,rect:1,rule:1,shape:1,symbol:1,text:1,trail:1},LL=["cornerRadius","cornerRadiusTopLeft","cornerRadiusTopRight","cornerRadiusBottomLeft","cornerRadiusBottomRight"]
var BL=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function UL(e){const t=_e(e.condition)?e.condition.map(ZL):ZL(e.condition)
return Object.assign(Object.assign({},qL(e)),{condition:t})}function qL(e){if(jL(e)){const{expr:t}=e,n=BL(e,["expr"])
return Object.assign({signal:t},n)}return e}function ZL(e){if(jL(e)){const{expr:t}=e,n=BL(e,["expr"])
return Object.assign({signal:t},n)}return e}function WL(e){if(jL(e)){const{expr:t}=e,n=BL(e,["expr"])
return Object.assign({signal:t},n)}return $L(e)?e:void 0!==e?{value:e}:void 0}function VL(e){return $L(e)?e.signal:Et(e)}function HL(e){return $L(e)?e.signal:Et(e.value)}function GL(e){return $L(e)?e.signal:null==e?null:Et(e)}function YL(e){var t
return[].concat(e.type,null!==(t=e.style)&&void 0!==t?t:[])}function XL(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const{vgChannel:i,ignoreVgConfig:o}=r
return i&&void 0!==t[i]?t[i]:void 0!==t[e]?t[e]:!o||i&&i!==e?JL(e,t,n,r):void 0}function JL(e,t,n){let{vgChannel:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return cI(r?KL(e,t,n.style):void 0,KL(e,t,n.style),r?n[t.type][r]:void 0,n[t.type][e],r?n.mark[r]:n.mark[e])}function KL(e,t,n){return QL(e,YL(t),n)}function QL(e,t,n){let r
t=Ve(t)
for(const i of t){const t=n[i]
t&&void 0!==t[e]&&(r=t[e])}return r}function eB(e,t){return Ve(e).reduce(((e,n)=>{var r
return e.field.push(jZ(n,t)),e.order.push(null!==(r=n.sort)&&void 0!==r?r:"ascending"),e}),{field:[],order:[]})}function tB(e,t){const n=[...e]
return t.forEach((e=>{for(const t of n)if(Cz(t,e))return
n.push(e)})),n}function nB(e,t){return Cz(e,t)||!t?e:e?[...Ve(e),...Ve(t)].join(", "):t}function rB(e,t){const n=e.value,r=t.value
if(null==n||null===r)return{explicit:e.explicit,value:null}
if((NL(n)||$L(n))&&(NL(r)||$L(r)))return{explicit:e.explicit,value:nB(n,r)}
if(NL(n)||$L(n))return{explicit:e.explicit,value:n}
if(NL(r)||$L(r))return{explicit:e.explicit,value:r}
if(!(NL(n)||$L(n)||NL(r)||$L(r)))return{explicit:e.explicit,value:tB(n,r)}
throw new Error("It should never reach here")}function iB(e){return`Invalid specification ${Nz(e)}. Make sure the specification includes at least one of the following properties: "mark", "layer", "facet", "hconcat", "vconcat", "concat", or "repeat".`}function oB(e){return("width"==e?"Width":"Height")+' "container" only works for single views and layered views.'}function aB(e){return`${"width"==e?"Width":"Height"} "container" only works well with autosize "fit" or "fit-${"width"==e?"x":"y"}".`}function sB(e){return e?`Dropping "fit-${e}" because spec has discrete ${ER(e)}.`:'Dropping "fit" because spec has discrete size.'}function lB(e){return`Unknown field for ${e}. Cannot calculate view size.`}function uB(e){return`Cannot project a selection on encoding channel "${e}", which has no field.`}function cB(e,t){return`Cannot project a selection on encoding channel "${e}" as it uses an aggregate function ("${t}").`}function fB(e){return`Selection not supported for ${e} yet.`}function dB(e){return`The "columns" property cannot be used when "${e}" has nested row/column.`}function hB(e,t,n){return`An ancestor parsed field "${e}" as ${n} but a child wants to parse the field as ${t}.`}function pB(e){return`Config.customFormatTypes is not true, thus custom format type and format for channel ${e} are dropped.`}function gB(e){return`${e}Offset dropped because ${e} is continuous`}function mB(e){return`There is no ${e} encoding. Replacing ${e}Offset encoding as ${e}.`}function yB(e,t,n){return`Channel ${e} is a ${t}. Converted to {value: ${Nz(n)}}.`}function vB(e){return`Invalid field type "${e}".`}function bB(e,t){return`Invalid field type "${e}" for aggregate: "${t}", using "quantitative" instead.`}function xB(e){return`Invalid aggregation operator "${e}".`}function _B(e,t){const{fill:n,stroke:r}=t
return`Dropping color ${e} as the plot also has ${n&&r?"fill and stroke":n?"fill":"stroke"}.`}function wB(e,t){return`Dropping ${Nz(e)} from channel "${t}" since it does not contain any data field, datum, value, or signal.`}function OB(e,t,n){return`${e} dropped as it is incompatible with "${t}"${n?` when ${n}`:""}.`}function kB(e){return`${e} encoding has no scale, so specified scale is ignored.`}function EB(e){return`${e} encoding should be discrete (ordinal / nominal / binned).`}function AB(e){return`${e} encoding should be discrete (ordinal / nominal / binned) or use a discretizing scale (e.g. threshold).`}function SB(e,t){return`Using discrete channel "${e}" to encode "${t}" field can be misleading as it does not encode ${"ordinal"===t?"order":"magnitude"}.`}function DB(e){return`The ${e} for range marks cannot be an expression`}function CB(e){return`Using unaggregated domain with raw field has no effect (${Nz(e)}).`}function MB(e){return`Unaggregated domain not applicable for "${e}" since it produces values outside the origin domain of the source data.`}function jB(e){return`Unaggregated domain is currently unsupported for log scale (${Nz(e)}).`}function FB(e,t,n){return`Channel "${e}" does not work with "${t}" scale. We are using "${n}" scale instead.`}function TB(e,t){return`FieldDef does not work with "${e}" scale. We are using "${t}" scale instead.`}function NB(e,t,n){return`${n}-scale's "${t}" is dropped as it does not work with ${e} scale.`}function $B(e){return`The step for "${e}" is dropped because the ${"width"===e?"x":"y"} is continuous.`}const PB="Domains that should be unioned has conflicting sort properties. Sort will be set to true."
function zB(e,t){return`Invalid ${e}: ${Nz(t)}.`}function IB(e){return`1D error band does not support ${e}.`}function RB(e){return`Channel ${e} is required for "binned" bin.`}function LB(e){return`Channel ${e} should not be used with "binned" bin.`}const BB=xe(ye)
let UB=BB
function qB(e){return UB=e,UB}function ZB(){return UB=BB,UB}function WB(){UB.warn(...arguments)}function VB(e){if(e&&we(e))for(const t of nU)if(t in e)return!0
return!1}new WeakMap
const HB=["january","february","march","april","may","june","july","august","september","october","november","december"],GB=HB.map((e=>e.substr(0,3))),YB=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],XB=YB.map((e=>e.substr(0,3)))
function JB(e,t){const n=[]
if(t&&void 0!==e.day&&Yz(e).length>1&&(WB(function(e){return`Dropping day from datetime ${Nz(e)} as day cannot be combined with other units.`}(e)),delete(e=Mz(e)).day),void 0!==e.year?n.push(e.year):n.push(2012),void 0!==e.month){const r=t?function(e){if(yI(e)&&(e=+e),gt(e))return e-1
{const t=e.toLowerCase(),n=HB.indexOf(t)
if(-1!==n)return n
const r=t.substr(0,3),i=GB.indexOf(r)
if(-1!==i)return i
throw new Error(zB("month",e))}}(e.month):e.month
n.push(r)}else if(void 0!==e.quarter){const r=t?function(e){if(yI(e)&&(e=+e),gt(e))return e>4&&WB(zB("quarter",e)),e-1
throw new Error(zB("quarter",e))}(e.quarter):e.quarter
n.push(gt(r)?3*r:`${r}*3`)}else n.push(0)
if(void 0!==e.date)n.push(e.date)
else if(void 0!==e.day){const r=t?function(e){if(yI(e)&&(e=+e),gt(e))return e%7
{const t=e.toLowerCase(),n=YB.indexOf(t)
if(-1!==n)return n
const r=t.substr(0,3),i=XB.indexOf(r)
if(-1!==i)return i
throw new Error(zB("day",e))}}(e.day):e.day
n.push(gt(r)?r+1:`${r}+1`)}else n.push(1)
for(const r of["hours","minutes","seconds","milliseconds"]){const t=e[r]
n.push(void 0===t?0:t)}return n}function KB(e){const t=JB(e,!0).join(", ")
return e.utc?`utc(${t})`:`datetime(${t})`}function QB(e){const t=JB(e,!1).join(", ")
return e.utc?`utc(${t})`:`datetime(${t})`}function eU(e){const t=JB(e,!0)
return e.utc?+new Date(Date.UTC(...t)):+new Date(...t)}const tU={year:1,quarter:1,month:1,week:1,day:1,dayofyear:1,date:1,hours:1,minutes:1,seconds:1,milliseconds:1},nU=Yz(tU)
function rU(e){return e.startsWith("utc")}const iU={"year-month":"%b %Y ","year-month-date":"%b %d, %Y "}
function oU(e){return nU.filter((t=>aU(e,t)))}function aU(e,t){const n=e.indexOf(t)
return!(n<0||n>0&&"seconds"===t&&"i"===e.charAt(n-1)||e.length>n+3&&"day"===t&&"o"===e.charAt(n+3)||n>0&&"year"===t&&"f"===e.charAt(n-1))}function sU(e,t){let{end:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{end:!1}
const r=rI(t),i=rU(e)?"utc":""
function o(e){return"quarter"===e?`(${i}quarter(${r})-1)`:`${i}${e}(${r})`}let a
const s={}
for(const l of nU)aU(e,l)&&(s[l]=o(l),a=l)
return n&&(s[a]+="+1"),QB(s)}function lU(e){if(!e)return
const t=oU(e)
return`timeUnitSpecifier(${Nz(t)}, ${Nz(iU)})`}function uU(e){if(!e)return
let t
return yt(e)?t={unit:e}:we(e)&&(t=Object.assign(Object.assign({},e),e.unit?{unit:e.unit}:{})),rU(t.unit)&&(t.utc=!0,t.unit=function(e){return e.substr(3)}(t.unit)),t}function cU(e){const t=uU(e),{utc:n}=t,r=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(t,["utc"])
return r.unit?(n?"utc":"")+Yz(r).map((e=>Qz(`${"unit"===e?"":`_${e}_`}${r[e]}`))).join(""):(n?"utc":"")+"timeunit"+Yz(r).map((e=>Qz(`_${e}_${r[e]}`))).join("")}function fU(e){return!!(null==e?void 0:e.field)&&void 0!==e.equal}function dU(e){return!!(null==e?void 0:e.field)&&void 0!==e.lt}function hU(e){return!!(null==e?void 0:e.field)&&void 0!==e.lte}function pU(e){return!!(null==e?void 0:e.field)&&void 0!==e.gt}function gU(e){return!!(null==e?void 0:e.field)&&void 0!==e.gte}function mU(e){if(null==e?void 0:e.field){if(_e(e.range)&&2===e.range.length)return!0
if($L(e.range))return!0}return!1}function yU(e){return!!(null==e?void 0:e.field)&&(_e(e.oneOf)||_e(e.in))}function vU(e){return!!(null==e?void 0:e.field)&&void 0!==e.valid}function bU(e){return yU(e)||fU(e)||mU(e)||dU(e)||pU(e)||hU(e)||gU(e)}function xU(e,t){return KZ(e,{timeUnit:t,wrapTime:!0})}function _U(e,t){return e.map((e=>xU(e,t)))}function wU(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
var n
const{field:r}=e,i=null===(n=uU(e.timeUnit))||void 0===n?void 0:n.unit,o=i?`time(${sU(i,r)})`:jZ(e,{expr:"datum"})
if(fU(e))return`${o}===${xU(e.equal,i)}`
if(dU(e))return`${o}<${xU(e.lt,i)}`
if(pU(e))return`${o}>${xU(e.gt,i)}`
if(hU(e))return`${o}<=${xU(e.lte,i)}`
if(gU(e))return`${o}>=${xU(e.gte,i)}`
if(yU(e))return`indexof([${_U(e.oneOf,i).join(",")}], ${o}) !== -1`
if(vU(e))return OU(o,e.valid)
if(mU(e)){const{range:n}=e,r=$L(n)?{signal:`${n.signal}[0]`}:n[0],a=$L(n)?{signal:`${n.signal}[1]`}:n[1]
if(null!==r&&null!==a&&t)return"inrange("+o+", ["+xU(r,i)+", "+xU(a,i)+"])"
const s=[]
return null!==r&&s.push(`${o} >= ${xU(r,i)}`),null!==a&&s.push(`${o} <= ${xU(a,i)}`),s.length>0?s.join(" && "):"true"}throw new Error(`Invalid field predicate: ${Nz(e)}`)}function OU(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return t?`isValid(${e}) && isFinite(+${e})`:`!isValid(${e}) || !isFinite(+${e})`}function kU(e){var t
return bU(e)&&e.timeUnit?Object.assign(Object.assign({},e),{timeUnit:null===(t=uU(e.timeUnit))||void 0===t?void 0:t.unit}):e}const EU={quantitative:"quantitative",ordinal:"ordinal",temporal:"temporal",nominal:"nominal",geojson:"geojson"}
function AU(e){return"ordinal"===e||"nominal"===e}const SU=EU.quantitative,DU=EU.ordinal,CU=EU.temporal,MU=EU.nominal,jU=EU.geojson
function FU(e){if(e)switch(e=e.toLowerCase()){case"q":case SU:return"quantitative"
case"t":case CU:return"temporal"
case"o":case DU:return"ordinal"
case"n":case MU:return"nominal"
case jU:return"geojson"}}Yz(EU)
const TU="time",NU="utc",$U="point",PU="band",zU={linear:"numeric",log:"numeric",pow:"numeric",sqrt:"numeric",symlog:"numeric",identity:"numeric",sequential:"numeric",time:"time",utc:"time",ordinal:"ordinal","bin-ordinal":"bin-ordinal",point:"ordinal-position",band:"ordinal-position",quantile:"discretizing",quantize:"discretizing",threshold:"discretizing"}
function IU(e,t){const n=zU[e],r=zU[t]
return n===r||"ordinal-position"===n&&"time"===r||"ordinal-position"===r&&"time"===n}Yz(zU)
const RU={linear:0,log:1,pow:1,sqrt:1,symlog:1,identity:1,sequential:1,time:0,utc:0,point:10,band:11,ordinal:0,"bin-ordinal":0,quantile:0,quantize:0,threshold:0}
function LU(e){return RU[e]}const BU=new Set(["linear","log","pow","sqrt","symlog"]),UU=new Set([...BU,"time","utc"])
function qU(e){return BU.has(e)}const ZU=new Set(["quantile","quantize","threshold"]),WU=new Set([...UU,...ZU,"sequential","identity"]),VU=new Set(["ordinal","bin-ordinal","point","band"])
function HU(e){return VU.has(e)}function GU(e){return WU.has(e)}function YU(e){return UU.has(e)}function XU(e){return ZU.has(e)}function JU(e){return null==e?void 0:e.param}new Set(["time","utc"])
const KU={type:1,domain:1,domainMax:1,domainMin:1,domainMid:1,align:1,range:1,rangeMax:1,rangeMin:1,scheme:1,bins:1,reverse:1,round:1,clamp:1,nice:1,base:1,exponent:1,constant:1,interpolate:1,zero:1,padding:1,paddingInner:1,paddingOuter:1},{type:QU,domain:eq,range:tq,rangeMax:nq,rangeMin:rq,scheme:iq}=(Yz(KU),KU),oq=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(KU,["type","domain","range","rangeMax","rangeMin","scheme"]),aq=Yz(oq)
function sq(e,t){switch(t){case"type":case"domain":case"reverse":case"range":return!0
case"scheme":case"interpolate":return!["point","band","identity"].includes(e)
case"bins":return!["point","band","identity","ordinal"].includes(e)
case"round":return YU(e)||"band"===e||"point"===e
case"padding":case"rangeMin":case"rangeMax":return YU(e)||["point","band"].includes(e)
case"paddingOuter":case"align":return["point","band"].includes(e)
case"paddingInner":return"band"===e
case"domainMax":case"domainMid":case"domainMin":case"clamp":return YU(e)
case"nice":return YU(e)||"quantize"===e||"threshold"===e
case"exponent":return"pow"===e
case"base":return"log"===e
case"constant":return"symlog"===e
case"zero":return GU(e)&&!zz(["log","time","utc","threshold","quantile"],e)}}function lq(e,t){switch(t){case"interpolate":case"scheme":case"domainMid":return aR(e)?void 0:`Cannot use the scale property "${t}" with non-color channel.`
case"align":case"type":case"bins":case"domain":case"domainMax":case"domainMin":case"range":case"base":case"exponent":case"constant":case"nice":case"padding":case"paddingInner":case"paddingOuter":case"rangeMax":case"rangeMin":case"reverse":case"round":case"clamp":case"zero":return}}function uq(e,t){return zz([DU,MU],t)?void 0===e||HU(e):t===CU?zz([TU,NU,void 0],e):t!==SU||qU(e)||XU(e)||void 0===e}function cq(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!fL(e))return!1
switch(e){case wI:case OI:case AI:case SI:case MI:case DI:return!!YU(t)||"band"===t||"point"===t&&!n
case LI:case WI:case UI:case qI:case ZI:case BI:return YU(t)||XU(t)||zz(["band","point","ordinal"],t)
case PI:case zI:case II:return"band"!==t
case VI:case RI:return"ordinal"===t||XU(t)}}const fq={arc:"arc",area:"area",bar:"bar",image:"image",line:"line",point:"point",rect:"rect",rule:"rule",text:"text",tick:"tick",trail:"trail",circle:"circle",square:"square",geoshape:"geoshape"},dq=fq.arc,hq=fq.area,pq=fq.bar,gq=fq.image,mq=fq.line,yq=fq.point,vq=fq.rect,bq=fq.rule,xq=fq.text,_q=fq.tick,wq=fq.trail,Oq=fq.circle,kq=fq.square,Eq=fq.geoshape
function Aq(e){return["line","area","trail"].includes(e)}function Sq(e){return["rect","bar","image","arc"].includes(e)}const Dq=new Set(Yz(fq))
function Cq(e){return e.type}const Mq=["stroke","strokeWidth","strokeDash","strokeDashOffset","strokeOpacity","strokeJoin","strokeMiterLimit","fill","fillOpacity"],jq=Yz({color:1,filled:1,invalid:1,order:1,radius2:1,theta2:1,timeUnitBandSize:1,timeUnitBandPosition:1}),Fq=Yz({mark:1,arc:1,area:1,bar:1,circle:1,image:1,line:1,point:1,rect:1,rule:1,square:1,text:1,tick:1,trail:1,geoshape:1})
function Tq(e){return e&&null!=e.band}const Nq={horizontal:["cornerRadiusTopRight","cornerRadiusBottomRight"],vertical:["cornerRadiusTopLeft","cornerRadiusTopRight"]}
function $q(e){const{channel:t,channelDef:n,markDef:r,scale:i,config:o}=e,a=Lq(e)
return yZ(n)&&!wL(n.aggregate)&&i&&YU(i.get("type"))?function(e){let{fieldDef:t,channel:n,markDef:r,ref:i,config:o}=e
return Aq(r.type)?i:null===XL("invalid",r,o)?[Pq(t,n),i]:i}({fieldDef:n,channel:t,markDef:r,ref:a,config:o}):a}function Pq(e,t){const n=zq(e,!0),r="y"===wR(t)?{field:{group:"height"}}:{value:0}
return Object.assign({test:n},r)}function zq(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
return OU(yt(e)?e:jZ(e,{expr:"datum"}),!t)}function Iq(e,t,n,r){const i={}
if(t&&(i.scale=t),bZ(e)){const{datum:t}=e
VB(t)?i.signal=KB(t):$L(t)?i.signal=t.signal:jL(t)?i.signal=t.expr:i.value=t}else i.field=jZ(e,n)
if(r){const{offset:e,band:t}=r
e&&(i.offset=e),t&&(i.band=t)}return i}function Rq(e){let{scaleName:t,fieldOrDatumDef:n,fieldOrDatumDef2:r,offset:i,startSuffix:o,bandPosition:a=.5}=e
const s=0<a&&a<1?"datum":void 0,l=jZ(n,{expr:s,suffix:o}),u=void 0!==r?jZ(r,{expr:s}):jZ(n,{suffix:"end",expr:s}),c={}
if(0===a||1===a){c.scale=t
const e=0===a?l:u
c.field=e}else{const e=$L(a)?`${a.signal} * ${l} + (1-${a.signal}) * ${u}`:`${a} * ${l} + ${1-a} * ${u}`
c.signal=`scale("${t}", ${e})`}return i&&(c.offset=i),c}function Lq(e){let{channel:t,channelDef:n,channel2Def:r,markDef:i,config:o,scaleName:a,scale:s,stack:l,offset:u,defaultRef:c,bandPosition:f}=e
var d
if(n){if(wZ(n)){const e=null==s?void 0:s.get("type")
if(OZ(n)){null!=f||(f=fZ({fieldDef:n,fieldDef2:r,markDef:i,config:o}))
const{bin:s,timeUnit:c,type:d}=n
if(AL(s)||f&&c&&d===CU)return(null==l?void 0:l.impute)?Iq(n,a,{binSuffix:"mid"},{offset:u}):f&&!HU(e)?Rq({scaleName:a,fieldOrDatumDef:n,bandPosition:f,offset:u}):Iq(n,a,eW(n,t)?{binSuffix:"range"}:{},{offset:u})
if(SL(s)){if(yZ(r))return Rq({scaleName:a,fieldOrDatumDef:n,fieldOrDatumDef2:r,bandPosition:f,offset:u})
WB(RB(t===wI?kI:EI))}}return Iq(n,a,HU(e)?{binSuffix:"range"}:{},{offset:u,band:"band"===e?null!==(d=null!=f?f:n.bandPosition)&&void 0!==d?d:.5:void 0})}if(kZ(n)){const e=n.value,r=u?{offset:u}:{}
return Object.assign(Object.assign({},Bq(t,e)),r)}}return Ge(c)&&(c=c()),c?Object.assign(Object.assign({},c),u?{offset:u}:{}):c}function Bq(e,t){return zz(["x","x2"],e)&&"width"===t?{field:{group:"width"}}:zz(["y","y2"],e)&&"height"===t?{field:{group:"height"}}:WL(t)}function Uq(e){return e&&"number"!==e&&"time"!==e}function qq(e,t,n){return`${e}(${t}${n?`, ${Nz(n)}`:""})`}function Zq(e){let{fieldOrDatumDef:t,format:n,formatType:r,expr:i,normalizeStack:o,config:a}=e
var s,l
if(Uq(r))return Vq({fieldOrDatumDef:t,format:n,formatType:r,expr:i,config:a})
const u=Wq(t,i,o),c=vZ(t)
if(void 0===n&&void 0===r&&a.customFormatTypes){if("quantitative"===c){if(o&&a.normalizedNumberFormatType)return Vq({fieldOrDatumDef:t,format:a.normalizedNumberFormat,formatType:a.normalizedNumberFormatType,expr:i,config:a})
if(a.numberFormatType)return Vq({fieldOrDatumDef:t,format:a.numberFormat,formatType:a.numberFormatType,expr:i,config:a})}if("temporal"===c&&a.timeFormatType&&yZ(t)&&void 0===t.timeUnit)return Vq({fieldOrDatumDef:t,format:a.timeFormat,formatType:a.timeFormatType,expr:i,config:a})}if(JZ(t)){const e=function(e){let{field:t,timeUnit:n,format:r,formatType:i,rawTimeFormat:o,isUTCScale:a}=e
return!n||r?!n&&i?`${i}(${t}, '${r}')`:(r=yt(r)?r:o,`${a?"utc":"time"}Format(${t}, '${r}')`):function(e,t,n){if(!e)return
const r=lU(e)
return`${n||rU(e)?"utc":"time"}Format(${t}, ${r})`}(n,t,a)}({field:u,timeUnit:yZ(t)?null===(s=uU(t.timeUnit))||void 0===s?void 0:s.unit:void 0,format:n,formatType:a.timeFormatType,rawTimeFormat:a.timeFormat,isUTCScale:EZ(t)&&(null===(l=t.scale)||void 0===l?void 0:l.type)===NU})
return e?{signal:e}:void 0}return n=Yq({type:c,specifiedFormat:n,config:a,normalizeStack:o}),yZ(t)&&AL(t.bin)?{signal:Kq(u,jZ(t,{expr:i,binSuffix:"end"}),n,r,a)}:n||"quantitative"===vZ(t)?{signal:`${Xq(u,n)}`}:{signal:`isValid(${u}) ? ${u} : ""+${u}`}}function Wq(e,t,n){return yZ(e)?n?`${jZ(e,{expr:t,suffix:"end"})}-${jZ(e,{expr:t,suffix:"start"})}`:jZ(e,{expr:t}):function(e){const{datum:t}=e
return VB(t)?KB(t):`${Nz(t)}`}(e)}function Vq(e){let{fieldOrDatumDef:t,format:n,formatType:r,expr:i,normalizeStack:o,config:a,field:s}=e
return null!=s||(s=Wq(t,i,o)),"datum.value"!==s&&yZ(t)&&AL(t.bin)?{signal:Kq(s,jZ(t,{expr:i,binSuffix:"end"}),n,r,a)}:{signal:qq(r,s,n)}}function Hq(e,t,n,r,i,o){var a
if(!Uq(r)){if(void 0===n&&void 0===r&&i.customFormatTypes&&"quantitative"===vZ(e)){if(i.normalizedNumberFormatType&&AZ(e)&&"normalize"===e.stack)return
if(i.numberFormatType)return}if(AZ(e)&&"normalize"===e.stack&&i.normalizedNumberFormat)return Yq({type:"quantitative",config:i,normalizeStack:!0})
if(JZ(e)){const t=yZ(e)?null===(a=uU(e.timeUnit))||void 0===a?void 0:a.unit:void 0
if(void 0===t&&i.customFormatTypes&&i.timeFormatType)return
return function(e){let{specifiedFormat:t,timeUnit:n,config:r,omitTimeFormatConfig:i}=e
return t||(n?{signal:lU(n)}:i?void 0:r.timeFormat)}({specifiedFormat:n,timeUnit:t,config:i,omitTimeFormatConfig:o})}return Yq({type:t,specifiedFormat:n,config:i})}}function Gq(e,t,n){var r
return e&&($L(e)||"number"===e||"time"===e)?e:JZ(t)&&"time"!==n&&"utc"!==n?yZ(t)&&(null===(r=uU(null==t?void 0:t.timeUnit))||void 0===r?void 0:r.utc)?"utc":"time":void 0}function Yq(e){let{type:t,specifiedFormat:n,config:r,normalizeStack:i}=e
return yt(n)?n:t===SU?i?r.normalizedNumberFormat:r.numberFormat:void 0}function Xq(e,t){return`format(${e}, "${t||""}")`}function Jq(e,t,n,r){var i
return Uq(n)?qq(n,e,t):Xq(e,null!==(i=yt(t)?t:void 0)&&void 0!==i?i:r.numberFormat)}function Kq(e,t,n,r,i){if(void 0===n&&void 0===r&&i.customFormatTypes&&i.numberFormatType)return Kq(e,t,i.numberFormat,i.numberFormatType,i)
const o=Jq(e,n,r,i),a=Jq(t,n,r,i)
return`${OU(e,!1)} ? "null" : ${o} + " – " + ${a}`}const Qq="min",eZ={x:1,y:1,color:1,fill:1,stroke:1,strokeWidth:1,size:1,shape:1,fillOpacity:1,strokeOpacity:1,opacity:1,text:1}
function tZ(e){return e in eZ}function nZ(e){return!!(null==e?void 0:e.encoding)}function rZ(e){return e&&("count"===e.op||!!e.field)}function iZ(e){return e&&_e(e)}function oZ(e){return"row"in e||"column"in e}function aZ(e){return!!e&&"header"in e}function sZ(e){return"facet"in e}var lZ=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function uZ(e){const{field:t,timeUnit:n,bin:r,aggregate:i}=e
return Object.assign(Object.assign(Object.assign(Object.assign({},n?{timeUnit:n}:{}),r?{bin:r}:{}),i?{aggregate:i}:{}),{field:t})}function cZ(e){return"sort"in e}function fZ(e){let{fieldDef:t,fieldDef2:n,markDef:r,config:i}=e
if(wZ(t)&&void 0!==t.bandPosition)return t.bandPosition
if(yZ(t)){const{timeUnit:e,bin:o}=t
if(e&&!n)return Sq(r.type)?0:JL("timeUnitBandPosition",r,i)
if(AL(o))return.5}}function dZ(e){let{channel:t,fieldDef:n,fieldDef2:r,markDef:i,config:o,scaleType:a,useVlSizeChannel:s}=e
var l,u,c
const f=ER(t),d=XL(s?"size":f,i,o,{vgChannel:f})
if(void 0!==d)return d
if(yZ(n)){const{timeUnit:e,bin:t}=n
if(e&&!r)return{band:JL("timeUnitBandSize",i,o)}
if(AL(t)&&!HU(a))return{band:1}}return Sq(i.type)?a?HU(a)?(null===(l=o[i.type])||void 0===l?void 0:l.discreteBandSize)||{band:1}:null===(u=o[i.type])||void 0===u?void 0:u.continuousBandSize:null===(c=o[i.type])||void 0===c?void 0:c.discreteBandSize:void 0}function hZ(e,t,n,r){return!!(AL(e.bin)||e.timeUnit&&OZ(e)&&"temporal"===e.type)&&void 0!==fZ({fieldDef:e,fieldDef2:t,markDef:n,config:r})}function pZ(e){return e&&"condition"in e}function gZ(e){const t=null==e?void 0:e.condition
return!!t&&!_e(t)&&yZ(t)}function mZ(e){const t=null==e?void 0:e.condition
return!!t&&!_e(t)&&wZ(t)}function yZ(e){return e&&(!!e.field||"count"===e.aggregate)}function vZ(e){return null==e?void 0:e.type}function bZ(e){return e&&"datum"in e}function xZ(e){return OZ(e)&&!FZ(e)||_Z(e)}function _Z(e){return bZ(e)&&gt(e.datum)}function wZ(e){return yZ(e)||bZ(e)}function OZ(e){return e&&("field"in e||"count"===e.aggregate)&&"type"in e}function kZ(e){return e&&"value"in e&&"value"in e}function EZ(e){return e&&("scale"in e||"sort"in e)}function AZ(e){return e&&("axis"in e||"stack"in e||"impute"in e)}function SZ(e){return e&&"legend"in e}function DZ(e){return e&&("format"in e||"formatType"in e)}function CZ(e){return Tz(e,["legend","axis","header","scale"])}function MZ(e){return"op"in e}function jZ(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var n,r,i
let o=e.field
const a=t.prefix
let s=t.suffix,l=""
if(TZ(e))o=pI("count")
else{let a
if(!t.nofn)if(MZ(e))a=e.op
else{const{bin:u,aggregate:c,timeUnit:f}=e
AL(u)?(a=EL(u),s=(null!==(n=t.binSuffix)&&void 0!==n?n:"")+(null!==(r=t.suffix)&&void 0!==r?r:"")):c?bL(c)?(l=`["${o}"]`,o=`argmax_${c.argmax}`):vL(c)?(l=`["${o}"]`,o=`argmin_${c.argmin}`):a=String(c):f&&(a=cU(f),s=(!["range","mid"].includes(t.binSuffix)&&t.binSuffix||"")+(null!==(i=t.suffix)&&void 0!==i?i:""))}a&&(o=o?`${a}_${o}`:a)}return s&&(o=`${o}_${s}`),a&&(o=`${a}_${o}`),t.forAs?lI(o):t.expr?iI(o,t.expr)+l:aI(o)+l}function FZ(e){switch(e.type){case"nominal":case"ordinal":case"geojson":return!0
case"quantitative":return yZ(e)&&!!e.bin
case"temporal":return!1}throw new Error(vB(e.type))}function TZ(e){return"count"===e.aggregate}const NZ=(e,t)=>{switch(t.fieldTitle){case"plain":return e.field
case"functional":return function(e){const{aggregate:t,bin:n,timeUnit:r,field:i}=e
if(bL(t))return`${i} for argmax(${t.argmax})`
if(vL(t))return`${i} for argmin(${t.argmin})`
const o=uU(r),a=t||(null==o?void 0:o.unit)||(null==o?void 0:o.maxbins)&&"timeunit"||AL(n)&&"bin"
return a?`${a.toUpperCase()}(${i})`:i}(e)
default:return function(e,t){var n
const{field:r,bin:i,timeUnit:o,aggregate:a}=e
if("count"===a)return t.countTitle
if(AL(i))return`${r} (binned)`
if(o){const e=null===(n=uU(o))||void 0===n?void 0:n.unit
if(e)return`${r} (${oU(e).join("-")})`}else if(a)return bL(a)?`${r} for max ${a.argmax}`:vL(a)?`${r} for min ${a.argmin}`:`${nI(a)} of ${r}`
return r}(e,t)}}
let $Z=NZ
function PZ(e){$Z=e}function zZ(){PZ(NZ)}function IZ(e,t,n){let{allowDisabling:r,includeDefault:i=!0}=n
var o,a
const s=null===(o=RZ(e))||void 0===o?void 0:o.title
if(!yZ(e))return null!=s?s:e.title
const l=e,u=i?LZ(l,t):void 0
return r?cI(s,l.title,u):null!==(a=null!=s?s:l.title)&&void 0!==a?a:u}function RZ(e){return AZ(e)&&e.axis?e.axis:SZ(e)&&e.legend?e.legend:aZ(e)&&e.header?e.header:void 0}function LZ(e,t){return $Z(e,t)}function BZ(e){var t
if(DZ(e)){const{format:t,formatType:n}=e
return{format:t,formatType:n}}{const n=null!==(t=RZ(e))&&void 0!==t?t:{},{format:r,formatType:i}=n
return{format:r,formatType:i}}}function UZ(e,t){var n
switch(t){case"latitude":case"longitude":return"quantitative"
case"row":case"column":case"facet":case"shape":case"strokeDash":return"nominal"
case"order":return"ordinal"}if(cZ(e)&&_e(e.sort))return"ordinal"
const{aggregate:r,bin:i,timeUnit:o}=e
if(o)return"temporal"
if(i||r&&!bL(r)&&!vL(r))return"quantitative"
if(EZ(e)&&(null===(n=e.scale)||void 0===n?void 0:n.type))switch(zU[e.scale.type]){case"numeric":case"discretizing":return"quantitative"
case"time":return"temporal"}return"nominal"}function qZ(e){return yZ(e)?e:gZ(e)?e.condition:void 0}function ZZ(e){return wZ(e)?e:mZ(e)?e.condition:void 0}function WZ(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return yt(e)||gt(e)||dt(e)?(WB(yB(t,yt(e)?"string":gt(e)?"number":"boolean",e)),{value:e}):wZ(e)?VZ(e,t,n,r):mZ(e)?Object.assign(Object.assign({},e),{condition:VZ(e.condition,t,n,r)}):e}function VZ(e,t,n,r){if(DZ(e)){const{format:i,formatType:o}=e,a=lZ(e,["format","formatType"])
if(Uq(o)&&!n.customFormatTypes)return WB(pB(t)),VZ(a,t,n,r)}else{const i=AZ(e)?"axis":SZ(e)?"legend":aZ(e)?"header":null
if(i&&e[i]){const o=e[i],{format:a,formatType:s}=o,l=lZ(o,["format","formatType"])
if(Uq(s)&&!n.customFormatTypes)return WB(pB(t)),VZ(Object.assign(Object.assign({},e),{[i]:l}),t,n,r)}}return yZ(e)?HZ(e,t,r):function(e){let t=e.type
if(t)return e
const{datum:n}=e
return t=gt(n)?"quantitative":yt(n)?"nominal":VB(n)?"temporal":void 0,Object.assign(Object.assign({},e),{type:t})}(e)}function HZ(e,t){let{compositeMark:n=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{aggregate:r,timeUnit:i,bin:o,field:a}=e,s=Object.assign({},e)
if(n||!r||xL(r)||bL(r)||vL(r)||(WB(xB(r)),delete s.aggregate),i&&(s.timeUnit=uU(i)),a&&(s.field=`${a}`),AL(o)&&(s.bin=GZ(o,t)),SL(o)&&!HR(t)&&WB(LB(t)),OZ(s)){const{type:e}=s,t=FU(e)
e!==t&&(s.type=t),"quantitative"!==e&&wL(r)&&(WB(bB(e,r)),s.type="quantitative")}else if(!_R(t)){const e=UZ(s,t)
s.type=e}if(OZ(s)){const{compatible:e,warning:n}=XZ(s,t)||{}
!1===e&&WB(n)}if(cZ(s)&&yt(s.sort)){const{sort:e}=s
if(tZ(e))return Object.assign(Object.assign({},s),{sort:{encoding:e}})
const t=e.substr(1)
if("-"===e.charAt(0)&&tZ(t))return Object.assign(Object.assign({},s),{sort:{encoding:t,order:"descending"}})}if(aZ(s)){const{header:e}=s
if(e){const{orient:t}=e,n=lZ(e,["orient"])
if(t)return Object.assign(Object.assign({},s),{header:Object.assign(Object.assign({},n),{labelOrient:e.labelOrient||t,titleOrient:e.titleOrient||t})})}}return s}function GZ(e,t){return dt(e)?{maxbins:ML(t)}:"binned"===e?{binned:!0}:e.maxbins||e.step?e:Object.assign(Object.assign({},e),{maxbins:ML(t)})}const YZ={compatible:!0}
function XZ(e,t){const n=e.type
if("geojson"===n&&"shape"!==t)return{compatible:!1,warning:`Channel ${t} should not be used with a geojson data.`}
switch(t){case bI:case xI:case _I:return FZ(e)?YZ:{compatible:!1,warning:EB(t)}
case wI:case OI:case AI:case SI:case PI:case zI:case II:case HI:case YI:case XI:case JI:case KI:case QI:case BI:case MI:case DI:case eR:return YZ
case TI:case $I:case FI:case NI:return n!==SU?{compatible:!1,warning:`Channel ${t} should be used with a quantitative field only, not ${e.type} field.`}:YZ
case UI:case qI:case ZI:case WI:case LI:case jI:case CI:case kI:case EI:return"nominal"!==n||e.sort?YZ:{compatible:!1,warning:`Channel ${t} should not be used with an unsorted discrete field.`}
case RI:case VI:return FZ(e)||function(e){var t
return EZ(e)&&XU(null===(t=e.scale)||void 0===t?void 0:t.type)}(e)?YZ:{compatible:!1,warning:AB(t)}
case GI:return"nominal"!==e.type||"sort"in e?YZ:{compatible:!1,warning:"Channel order is inappropriate for nominal field, which has no inherent order."}}}function JZ(e){const{formatType:t}=BZ(e)
return"time"===t||!t&&function(e){return e&&("temporal"===e.type||yZ(e)&&!!e.timeUnit)}(e)}function KZ(e,t){let{timeUnit:n,type:r,wrapTime:i,undefinedIfExprNotRequired:o}=t
var a
const s=n&&(null===(a=uU(n))||void 0===a?void 0:a.unit)
let l,u=s||"temporal"===r
return jL(e)?l=e.expr:$L(e)?l=e.signal:VB(e)?(u=!0,l=KB(e)):(yt(e)||gt(e))&&u&&(l=`datetime(${Nz(e)})`,function(e){return!!tU[e]}(s)&&(gt(e)&&e<1e4||yt(e)&&isNaN(Date.parse(e)))&&(l=KB({[s]:e}))),l?i&&u?`time(${l})`:l:o?void 0:Nz(e)}function QZ(e,t){const{type:n}=e
return t.map((t=>{const r=KZ(t,{timeUnit:yZ(e)?e.timeUnit:void 0,type:n,undefinedIfExprNotRequired:!0})
return void 0!==r?{signal:r}:t}))}function eW(e,t){return AL(e.bin)?fL(t)&&["ordinal","nominal"].includes(e.type):(console.warn("Only call this method for binned field defs."),!1)}const tW={labelAlign:{part:"labels",vgProp:"align"},labelBaseline:{part:"labels",vgProp:"baseline"},labelColor:{part:"labels",vgProp:"fill"},labelFont:{part:"labels",vgProp:"font"},labelFontSize:{part:"labels",vgProp:"fontSize"},labelFontStyle:{part:"labels",vgProp:"fontStyle"},labelFontWeight:{part:"labels",vgProp:"fontWeight"},labelOpacity:{part:"labels",vgProp:"opacity"},labelOffset:null,labelPadding:null,gridColor:{part:"grid",vgProp:"stroke"},gridDash:{part:"grid",vgProp:"strokeDash"},gridDashOffset:{part:"grid",vgProp:"strokeDashOffset"},gridOpacity:{part:"grid",vgProp:"opacity"},gridWidth:{part:"grid",vgProp:"strokeWidth"},tickColor:{part:"ticks",vgProp:"stroke"},tickDash:{part:"ticks",vgProp:"strokeDash"},tickDashOffset:{part:"ticks",vgProp:"strokeDashOffset"},tickOpacity:{part:"ticks",vgProp:"opacity"},tickSize:null,tickWidth:{part:"ticks",vgProp:"strokeWidth"}}
function nW(e){return null==e?void 0:e.condition}const rW=["domain","grid","labels","ticks","title"],iW={grid:"grid",gridCap:"grid",gridColor:"grid",gridDash:"grid",gridDashOffset:"grid",gridOpacity:"grid",gridScale:"grid",gridWidth:"grid",orient:"main",bandPosition:"both",aria:"main",description:"main",domain:"main",domainCap:"main",domainColor:"main",domainDash:"main",domainDashOffset:"main",domainOpacity:"main",domainWidth:"main",format:"main",formatType:"main",labelAlign:"main",labelAngle:"main",labelBaseline:"main",labelBound:"main",labelColor:"main",labelFlush:"main",labelFlushOffset:"main",labelFont:"main",labelFontSize:"main",labelFontStyle:"main",labelFontWeight:"main",labelLimit:"main",labelLineHeight:"main",labelOffset:"main",labelOpacity:"main",labelOverlap:"main",labelPadding:"main",labels:"main",labelSeparation:"main",maxExtent:"main",minExtent:"main",offset:"both",position:"main",tickCap:"main",tickColor:"main",tickDash:"main",tickDashOffset:"main",tickMinStep:"both",tickOffset:"both",tickOpacity:"main",tickRound:"both",ticks:"main",tickSize:"main",tickWidth:"both",title:"main",titleAlign:"main",titleAnchor:"main",titleAngle:"main",titleBaseline:"main",titleColor:"main",titleFont:"main",titleFontSize:"main",titleFontStyle:"main",titleFontWeight:"main",titleLimit:"main",titleLineHeight:"main",titleOpacity:"main",titlePadding:"main",titleX:"main",titleY:"main",encode:"both",scale:"both",tickBand:"both",tickCount:"both",tickExtra:"both",translate:"both",values:"both",zindex:"both"},oW={orient:1,aria:1,bandPosition:1,description:1,domain:1,domainCap:1,domainColor:1,domainDash:1,domainDashOffset:1,domainOpacity:1,domainWidth:1,format:1,formatType:1,grid:1,gridCap:1,gridColor:1,gridDash:1,gridDashOffset:1,gridOpacity:1,gridWidth:1,labelAlign:1,labelAngle:1,labelBaseline:1,labelBound:1,labelColor:1,labelFlush:1,labelFlushOffset:1,labelFont:1,labelFontSize:1,labelFontStyle:1,labelFontWeight:1,labelLimit:1,labelLineHeight:1,labelOffset:1,labelOpacity:1,labelOverlap:1,labelPadding:1,labels:1,labelSeparation:1,maxExtent:1,minExtent:1,offset:1,position:1,tickBand:1,tickCap:1,tickColor:1,tickCount:1,tickDash:1,tickDashOffset:1,tickExtra:1,tickMinStep:1,tickOffset:1,tickOpacity:1,tickRound:1,ticks:1,tickSize:1,tickWidth:1,title:1,titleAlign:1,titleAnchor:1,titleAngle:1,titleBaseline:1,titleColor:1,titleFont:1,titleFontSize:1,titleFontStyle:1,titleFontWeight:1,titleLimit:1,titleLineHeight:1,titleOpacity:1,titlePadding:1,titleX:1,titleY:1,translate:1,values:1,zindex:1},aW=Object.assign(Object.assign({},oW),{style:1,labelExpr:1,encoding:1})
function sW(e){return!!aW[e]}Yz(aW)
const lW=Yz({axis:1,axisBand:1,axisBottom:1,axisDiscrete:1,axisLeft:1,axisPoint:1,axisQuantitative:1,axisRight:1,axisTemporal:1,axisTop:1,axisX:1,axisXBand:1,axisXDiscrete:1,axisXPoint:1,axisXQuantitative:1,axisXTemporal:1,axisY:1,axisYBand:1,axisYDiscrete:1,axisYPoint:1,axisYQuantitative:1,axisYTemporal:1})
function uW(e){return"mark"in e}class cW{constructor(e,t){this.name=e,this.run=t}hasMatchingType(e){return!!uW(e)&&function(e){return Cq(e)?e.type:e}(e.mark)===this.name}}function fW(e,t){const n=e&&e[t]
return!!n&&(_e(n)?Iz(n,(e=>!!e.field)):yZ(n)||gZ(n))}function dW(e,t){const n=e&&e[t]
return!!n&&(_e(n)?Iz(n,(e=>!!e.field)):yZ(n)||bZ(n)||mZ(n))}function hW(e,t){if(HR(t)){const n=e[t]
if((yZ(n)||bZ(n))&&AU(n.type))return dW(e,AR(t))}return!1}function pW(e){return Iz(cR,(t=>{if(fW(e,t)){const n=e[t]
if(_e(n))return Iz(n,(e=>!!e.aggregate))
{const e=qZ(n)
return e&&!!e.aggregate}}return!1}))}function gW(e,t){const n=[],r=[],i=[],o=[],a={}
return bW(e,((s,l)=>{if(yZ(s)){const{field:u,aggregate:c,bin:f,timeUnit:d}=s,h=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(s,["field","aggregate","bin","timeUnit"])
if(c||d||f){const e=RZ(s),p=null==e?void 0:e.title
let g=jZ(s,{forAs:!0})
const m=Object.assign(Object.assign(Object.assign({},p?[]:{title:IZ(s,t,{allowDisabling:!0})}),h),{field:g})
if(c){let e
if(bL(c)?(e="argmax",g=jZ({op:"argmax",field:c.argmax},{forAs:!0}),m.field=`${g}.${u}`):vL(c)?(e="argmin",g=jZ({op:"argmin",field:c.argmin},{forAs:!0}),m.field=`${g}.${u}`):"boxplot"!==c&&"errorbar"!==c&&"errorband"!==c&&(e=c),e){const t={op:e,as:g}
u&&(t.field=u),o.push(t)}}else if(n.push(g),OZ(s)&&AL(f)){if(r.push({bin:f,field:u,as:g}),n.push(jZ(s,{binSuffix:"end"})),eW(s,l)&&n.push(jZ(s,{binSuffix:"range"})),HR(l)){const e={field:`${g}_end`}
a[`${l}2`]=e}m.bin="binned",_R(l)||(m.type=SU)}else if(d){i.push({timeUnit:d,field:u,as:g})
const e=OZ(s)&&s.type!==CU&&"time"
e&&(l===HI||l===JI?m.formatType=e:function(e){return!!qR[e]}(l)?m.legend=Object.assign({formatType:e},m.legend):HR(l)&&(m.axis=Object.assign({formatType:e},m.axis)))}a[l]=m}else n.push(u),a[l]=e[l]}else a[l]=e[l]})),{bins:r,timeUnits:i,aggregate:o,groupby:n,encoding:a}}function mW(e,t,n){const r=function(e,t){return function(e){switch(e){case PI:case zI:case II:case eR:case YI:case XI:case JI:case KI:case GI:case UI:case qI:case ZI:case WI:case _I:case bI:case xI:return dL
case wI:case OI:case AI:case SI:case FI:case TI:return pL
case kI:case EI:case NI:case $I:return{area:"always",bar:"always",image:"always",rect:"always",rule:"always",circle:"binned",point:"binned",square:"binned",tick:"binned",line:"binned",trail:"binned"}
case LI:return{point:"always",tick:"always",rule:"always",circle:"always",square:"always",bar:"always",text:"always",line:"always",trail:"always"}
case VI:return{line:"always",point:"always",tick:"always",rule:"always",circle:"always",square:"always",bar:"always",geoshape:"always"}
case RI:return{point:"always",geoshape:"always"}
case HI:return{text:"always"}
case BI:return{point:"always",square:"always",text:"always"}
case QI:return{image:"always"}
case MI:case DI:return{text:"always",arc:"always"}
case jI:case CI:return{arc:"always"}}}(e)[t]}(t,n)
if(!r)return!1
if("binned"===r){const n=e[t===kI?wI:OI]
return!!(yZ(n)&&yZ(e[t])&&SL(n.bin))}return!0}function yW(e,t){const n={}
for(const r of Yz(e)){const i=WZ(e[r],r,t,{compositeMark:!0})
n[r]=i}return n}function vW(e){const t=[]
for(const n of Yz(e))if(fW(e,n)){const r=Ve(e[n])
for(const e of r)yZ(e)?t.push(e):gZ(e)&&t.push(e.condition)}return t}function bW(e,t,n){if(e)for(const r of Yz(e)){const i=e[r]
if(_e(i))for(const e of i)t.call(n,e,r)
else t.call(n,i,r)}}function xW(e,t){return Yz(t).reduce(((n,r)=>{switch(r){case wI:case OI:case KI:case eR:case QI:case kI:case EI:case AI:case SI:case MI:case jI:case DI:case CI:case FI:case TI:case NI:case $I:case HI:case RI:case BI:case JI:return n
case GI:if("line"===e||"trail"===e)return n
case YI:case XI:{const e=t[r]
if(_e(e)||yZ(e))for(const t of Ve(e))t.aggregate||n.push(jZ(t,{}))
return n}case LI:if("trail"===e)return n
case PI:case zI:case II:case UI:case qI:case ZI:case VI:case WI:{const e=qZ(t[r])
return e&&!e.aggregate&&n.push(jZ(e,{})),n}}}),[])}var _W=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function wW(e,t,n){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]
if("tooltip"in n)return{tooltip:n.tooltip}
const i=e.map((e=>{let{fieldPrefix:n,titlePrefix:i}=e
const o=r?` of ${OW(t)}`:""
return{field:n+t.field,type:t.type,title:$L(i)?{signal:`${i}"${escape(o)}"`}:i+o}})),o=vW(n).map(CZ)
return{tooltip:[...i,...Uz(o,$z)]}}function OW(e){const{title:t,field:n}=e
return cI(t,n)}function kW(e,t,n,r,i){const{scale:o,axis:a}=n
return s=>{let{partName:l,mark:u,positionPrefix:c,endPositionPrefix:f,extraEncoding:d={}}=s
const h=OW(n)
return EW(e,l,i,{mark:u,encoding:Object.assign(Object.assign(Object.assign({[t]:Object.assign(Object.assign(Object.assign({field:`${c}_${n.field}`,type:n.type},void 0!==h?{title:h}:{}),void 0!==o?{scale:o}:{}),void 0!==a?{axis:a}:{})},yt(f)?{[`${t}2`]:{field:`${f}_${n.field}`}}:{}),r),d)})}}function EW(e,t,n,r){const{clip:i,color:o,opacity:a}=e,s=e.type
return e[t]||void 0===e[t]&&n[t]?[Object.assign(Object.assign({},r),{mark:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n[t]),i?{clip:i}:{}),o?{color:o}:{}),a?{opacity:a}:{}),Cq(r.mark)?r.mark:{type:r.mark}),{style:`${s}-${String(t)}`}),dt(e[t])?{}:e[t])})]:[]}function AW(e,t,n){const{encoding:r}=e,i="vertical"===t?"y":"x",o=r[i],a=r[`${i}2`],s=r[`${i}Error`],l=r[`${i}Error2`]
return{continuousAxisChannelDef:SW(o,n),continuousAxisChannelDef2:SW(a,n),continuousAxisChannelDefError:SW(s,n),continuousAxisChannelDefError2:SW(l,n),continuousAxis:i}}function SW(e,t){if(null==e?void 0:e.aggregate){const{aggregate:n}=e,r=_W(e,["aggregate"])
return n!==t&&WB(function(e,t){return`Continuous axis should not have customized aggregation function ${e}; ${t} already agregates the axis.`}(n,t)),r}return e}function DW(e,t){const{mark:n,encoding:r}=e,{x:i,y:o}=r
if(Cq(n)&&n.orient)return n.orient
if(xZ(i)){if(xZ(o)){const e=yZ(i)&&i.aggregate,n=yZ(o)&&o.aggregate
if(e||n!==t){if(n||e!==t){if(e===t&&n===t)throw new Error("Both x and y cannot have aggregate")
return JZ(o)&&!JZ(i)?"horizontal":"vertical"}return"horizontal"}return"vertical"}return"horizontal"}if(xZ(o))return"vertical"
throw new Error(`Need a valid continuous axis for ${t}s`)}var CW=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
const MW="boxplot",jW=new cW(MW,TW)
function FW(e){return gt(e)?"tukey":e}function TW(e,t){let{config:n}=t
var r,i
e=Object.assign(Object.assign({},e),{encoding:yW(e.encoding,n)})
const{mark:o,encoding:a,params:s,projection:l}=e,u=CW(e,["mark","encoding","params","projection"]),c=Cq(o)?o:{type:o}
s&&WB(fB("boxplot"))
const f=null!==(r=c.extent)&&void 0!==r?r:n.boxplot.extent,d=XL("size",c,n),h=FW(f),{bins:p,timeUnits:g,transform:m,continuousAxisChannelDef:y,continuousAxis:v,groupby:b,aggregate:x,encodingWithoutContinuousAxis:_,ticksOrient:w,boxOrient:O,customTooltipWithoutAggregatedField:k}=function(e,t,n){const r=DW(e,MW),{continuousAxisChannelDef:i,continuousAxis:o}=AW(e,r,MW),a=i.field,s=FW(t),l=[...NW(a),{op:"median",field:a,as:`mid_box_${a}`},{op:"min",field:a,as:("min-max"===s?"lower_whisker_":"min_")+a},{op:"max",field:a,as:("min-max"===s?"upper_whisker_":"max_")+a}],u="min-max"===s||"tukey"===s?[]:[{calculate:`datum["upper_box_${a}"] - datum["lower_box_${a}"]`,as:`iqr_${a}`},{calculate:`min(datum["upper_box_${a}"] + datum["iqr_${a}"] * ${t}, datum["max_${a}"])`,as:`upper_whisker_${a}`},{calculate:`max(datum["lower_box_${a}"] - datum["iqr_${a}"] * ${t}, datum["min_${a}"])`,as:`lower_whisker_${a}`}],c=e.encoding,f=o,d=(c[f],CW(c,["symbol"==typeof f?f:f+""])),{customTooltipWithoutAggregatedField:h,filteredEncoding:p}=function(e){const{tooltip:t}=e,n=_W(e,["tooltip"])
if(!t)return{filteredEncoding:n}
let r,i
if(_e(t)){for(const e of t)e.aggregate?(r||(r=[]),r.push(e)):(i||(i=[]),i.push(e))
r&&(n.tooltip=r)}else t.aggregate?n.tooltip=t:i=t
return _e(i)&&1===i.length&&(i=i[0]),{customTooltipWithoutAggregatedField:i,filteredEncoding:n}}(d),{bins:g,timeUnits:m,aggregate:y,groupby:v,encoding:b}=gW(p,n),x="vertical"===r?"horizontal":"vertical",_=r
return{bins:g,timeUnits:m,transform:[...g,...m,{aggregate:[...y,...l],groupby:v},...u],groupby:v,aggregate:y,continuousAxisChannelDef:i,continuousAxis:o,encodingWithoutContinuousAxis:b,ticksOrient:x,boxOrient:_,customTooltipWithoutAggregatedField:h}}(e,f,n),{color:E,size:A}=_,S=CW(_,["color","size"]),D=e=>kW(c,v,y,e,n.boxplot),C=D(S),M=D(_),j=D(Object.assign(Object.assign({},S),A?{size:A}:{})),F=wW([{fieldPrefix:"min-max"===h?"upper_whisker_":"max_",titlePrefix:"Max"},{fieldPrefix:"upper_box_",titlePrefix:"Q3"},{fieldPrefix:"mid_box_",titlePrefix:"Median"},{fieldPrefix:"lower_box_",titlePrefix:"Q1"},{fieldPrefix:"min-max"===h?"lower_whisker_":"min_",titlePrefix:"Min"}],y,_),T={type:"tick",color:"black",opacity:1,orient:w,invalid:null,aria:!1},N="min-max"===h?F:wW([{fieldPrefix:"upper_whisker_",titlePrefix:"Upper Whisker"},{fieldPrefix:"lower_whisker_",titlePrefix:"Lower Whisker"}],y,_),$=[...C({partName:"rule",mark:{type:"rule",invalid:null,aria:!1},positionPrefix:"lower_whisker",endPositionPrefix:"lower_box",extraEncoding:N}),...C({partName:"rule",mark:{type:"rule",invalid:null,aria:!1},positionPrefix:"upper_box",endPositionPrefix:"upper_whisker",extraEncoding:N}),...C({partName:"ticks",mark:T,positionPrefix:"lower_whisker",extraEncoding:N}),...C({partName:"ticks",mark:T,positionPrefix:"upper_whisker",extraEncoding:N})],P=[..."tukey"!==h?$:[],...M({partName:"box",mark:Object.assign(Object.assign({type:"bar"},d?{size:d}:{}),{orient:O,invalid:null,ariaRoleDescription:"box"}),positionPrefix:"lower_box",endPositionPrefix:"upper_box",extraEncoding:F}),...j({partName:"median",mark:Object.assign(Object.assign(Object.assign({type:"tick",invalid:null},we(n.boxplot.median)&&n.boxplot.median.color?{color:n.boxplot.median.color}:{}),d?{size:d}:{}),{orient:w,aria:!1}),positionPrefix:"mid_box",extraEncoding:F})]
if("min-max"===h)return Object.assign(Object.assign({},u),{transform:(null!==(i=u.transform)&&void 0!==i?i:[]).concat(m),layer:P})
const z=`datum["lower_box_${y.field}"]`,I=`datum["upper_box_${y.field}"]`,R=`(${I} - ${z})`,L=`${z} - ${f} * ${R}`,B=`${I} + ${f} * ${R}`,U=`datum["${y.field}"]`,q={joinaggregate:NW(y.field),groupby:b},Z={transform:[{filter:`(${L} <= ${U}) && (${U} <= ${B})`},{aggregate:[{op:"min",field:y.field,as:`lower_whisker_${y.field}`},{op:"max",field:y.field,as:`upper_whisker_${y.field}`},{op:"min",field:`lower_box_${y.field}`,as:`lower_box_${y.field}`},{op:"max",field:`upper_box_${y.field}`,as:`upper_box_${y.field}`},...x],groupby:b}],layer:$},{tooltip:W}=S,V=CW(S,["tooltip"]),{scale:H,axis:G}=y,Y=OW(y),X=Tz(G,["title"]),J=EW(c,"outliers",n.boxplot,{transform:[{filter:`(${U} < ${L}) || (${U} > ${B})`}],mark:"point",encoding:Object.assign(Object.assign(Object.assign({[v]:Object.assign(Object.assign(Object.assign({field:y.field,type:y.type},void 0!==Y?{title:Y}:{}),void 0!==H?{scale:H}:{}),Gz(X)?{}:{axis:X})},V),E?{color:E}:{}),k?{tooltip:k}:{})})[0]
let K
const Q=[...p,...g,q]
return J?K={transform:Q,layer:[J,Z]}:(K=Z,K.transform.unshift(...Q)),Object.assign(Object.assign({},u),{layer:[K,{transform:m,layer:P}]})}function NW(e){return[{op:"q1",field:e,as:`lower_box_${e}`},{op:"q3",field:e,as:`upper_box_${e}`}]}var $W=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
const PW="errorbar",zW=new cW(PW,IW)
function IW(e,t){let{config:n}=t
e=Object.assign(Object.assign({},e),{encoding:yW(e.encoding,n)})
const{transform:r,continuousAxisChannelDef:i,continuousAxis:o,encodingWithoutContinuousAxis:a,ticksOrient:s,markDef:l,outerSpec:u,tooltipEncoding:c}=RW(e,PW,n)
delete a.size
const f=kW(l,o,i,a,n.errorbar),d=l.thickness,h=l.size,p=Object.assign(Object.assign({type:"tick",orient:s,aria:!1},void 0!==d?{thickness:d}:{}),void 0!==h?{size:h}:{}),g=[...f({partName:"ticks",mark:p,positionPrefix:"lower",extraEncoding:c}),...f({partName:"ticks",mark:p,positionPrefix:"upper",extraEncoding:c}),...f({partName:"rule",mark:Object.assign({type:"rule",ariaRoleDescription:"errorbar"},void 0!==d?{size:d}:{}),positionPrefix:"lower",endPositionPrefix:"upper",extraEncoding:c})]
return Object.assign(Object.assign(Object.assign({},u),{transform:r}),g.length>1?{layer:g}:Object.assign({},g[0]))}function RW(e,t,n){var r
const{mark:i,encoding:o,params:a,projection:s}=e,l=$W(e,["mark","encoding","params","projection"]),u=Cq(i)?i:{type:i}
a&&WB(fB(t))
const{orient:c,inputType:f}=function(e,t){const{encoding:n}=e
if(function(e){return(wZ(e.x)||wZ(e.y))&&!wZ(e.x2)&&!wZ(e.y2)&&!wZ(e.xError)&&!wZ(e.xError2)&&!wZ(e.yError)&&!wZ(e.yError2)}(n))return{orient:DW(e,t),inputType:"raw"}
const r=function(e){return wZ(e.x2)||wZ(e.y2)}(n),i=function(e){return wZ(e.xError)||wZ(e.xError2)||wZ(e.yError)||wZ(e.yError2)}(n),o=n.x,a=n.y
if(r){if(i)throw new Error(`${t} cannot be both type aggregated-upper-lower and aggregated-error`)
const e=n.x2,r=n.y2
if(wZ(e)&&wZ(r))throw new Error(`${t} cannot have both x2 and y2`)
if(wZ(e)){if(xZ(o))return{orient:"horizontal",inputType:"aggregated-upper-lower"}
throw new Error(`Both x and x2 have to be quantitative in ${t}`)}if(wZ(r)){if(xZ(a))return{orient:"vertical",inputType:"aggregated-upper-lower"}
throw new Error(`Both y and y2 have to be quantitative in ${t}`)}throw new Error("No ranged axis")}{const e=n.xError,r=n.xError2,i=n.yError,s=n.yError2
if(wZ(r)&&!wZ(e))throw new Error(`${t} cannot have xError2 without xError`)
if(wZ(s)&&!wZ(i))throw new Error(`${t} cannot have yError2 without yError`)
if(wZ(e)&&wZ(i))throw new Error(`${t} cannot have both xError and yError with both are quantiative`)
if(wZ(e)){if(xZ(o))return{orient:"horizontal",inputType:"aggregated-error"}
throw new Error("All x, xError, and xError2 (if exist) have to be quantitative")}if(wZ(i)){if(xZ(a))return{orient:"vertical",inputType:"aggregated-error"}
throw new Error("All y, yError, and yError2 (if exist) have to be quantitative")}throw new Error("No ranged axis")}}(e,t),{continuousAxisChannelDef:d,continuousAxisChannelDef2:h,continuousAxisChannelDefError:p,continuousAxisChannelDefError2:g,continuousAxis:m}=AW(e,c,t),{errorBarSpecificAggregate:y,postAggregateCalculates:v,tooltipSummary:b,tooltipTitleWithFieldName:x}=function(e,t,n,r,i,o,a,s){let l=[],u=[]
const c=t.field
let f,d=!1
if("raw"===o){const t=e.center?e.center:e.extent?"iqr"===e.extent?"median":"mean":s.errorbar.center,n=e.extent?e.extent:"mean"===t?"stderr":"iqr"
if("median"===t!=("iqr"===n)&&WB(function(e,t,n){return`${e} is not usually used with ${t} for ${n}.`}(t,n,a)),"stderr"===n||"stdev"===n)l=[{op:n,field:c,as:`extent_${c}`},{op:t,field:c,as:`center_${c}`}],u=[{calculate:`datum["center_${c}"] + datum["extent_${c}"]`,as:`upper_${c}`},{calculate:`datum["center_${c}"] - datum["extent_${c}"]`,as:`lower_${c}`}],f=[{fieldPrefix:"center_",titlePrefix:nI(t)},{fieldPrefix:"upper_",titlePrefix:LW(t,n,"+")},{fieldPrefix:"lower_",titlePrefix:LW(t,n,"-")}],d=!0
else{let e,t,r
"ci"===n?(e="mean",t="ci0",r="ci1"):(e="median",t="q1",r="q3"),l=[{op:t,field:c,as:`lower_${c}`},{op:r,field:c,as:`upper_${c}`},{op:e,field:c,as:`center_${c}`}],f=[{fieldPrefix:"upper_",titlePrefix:IZ({field:c,aggregate:r,type:"quantitative"},s,{allowDisabling:!1})},{fieldPrefix:"lower_",titlePrefix:IZ({field:c,aggregate:t,type:"quantitative"},s,{allowDisabling:!1})},{fieldPrefix:"center_",titlePrefix:IZ({field:c,aggregate:e,type:"quantitative"},s,{allowDisabling:!1})}]}}else{(e.center||e.extent)&&WB(function(e,t){return`${t?"extent ":""}${t&&e?"and ":""}${e?"center ":""}${t&&e?"are ":"is "}not needed when data are aggregated.`}(e.center,e.extent)),"aggregated-upper-lower"===o?(f=[],u=[{calculate:`datum["${n.field}"]`,as:`upper_${c}`},{calculate:`datum["${c}"]`,as:`lower_${c}`}]):"aggregated-error"===o&&(f=[{fieldPrefix:"",titlePrefix:c}],u=[{calculate:`datum["${c}"] + datum["${r.field}"]`,as:`upper_${c}`}],i?u.push({calculate:`datum["${c}"] + datum["${i.field}"]`,as:`lower_${c}`}):u.push({calculate:`datum["${c}"] - datum["${r.field}"]`,as:`lower_${c}`}))
for(const e of u)f.push({fieldPrefix:e.as.substring(0,6),titlePrefix:sI(sI(e.calculate,'datum["',""),'"]',"")})}return{postAggregateCalculates:u,errorBarSpecificAggregate:l,tooltipSummary:f,tooltipTitleWithFieldName:d}}(u,d,h,p,g,f,t,n),_=o,w=m,O=(_[w],"x"===m?"x2":"y2"),k=(_[O],"x"===m?"xError":"yError"),E=(_[k],"x"===m?"xError2":"yError2"),A=(_[E],$W(_,["symbol"==typeof w?w:w+"","symbol"==typeof O?O:O+"","symbol"==typeof k?k:k+"","symbol"==typeof E?E:E+""])),{bins:S,timeUnits:D,aggregate:C,groupby:M,encoding:j}=gW(A,n),F=[...C,...y],T="raw"!==f?[]:M,N=wW(b,d,j,x)
return{transform:[...null!==(r=l.transform)&&void 0!==r?r:[],...S,...D,...0===F.length?[]:[{aggregate:F,groupby:T}],...v],groupby:T,continuousAxisChannelDef:d,continuousAxis:m,encodingWithoutContinuousAxis:j,ticksOrient:"vertical"===c?"horizontal":"vertical",markDef:u,outerSpec:l,tooltipEncoding:N}}function LW(e,t,n){return`${nI(e)} ${n} ${t}`}const BW="errorband",UW=new cW(BW,qW)
function qW(e,t){let{config:n}=t
e=Object.assign(Object.assign({},e),{encoding:yW(e.encoding,n)})
const{transform:r,continuousAxisChannelDef:i,continuousAxis:o,encodingWithoutContinuousAxis:a,markDef:s,outerSpec:l,tooltipEncoding:u}=RW(e,BW,n),c=s,f=kW(c,o,i,a,n.errorband),d=void 0!==e.encoding.x&&void 0!==e.encoding.y
let h={type:d?"area":"rect"},p={type:d?"line":"rule"}
const g=Object.assign(Object.assign({},c.interpolate?{interpolate:c.interpolate}:{}),c.tension&&c.interpolate?{tension:c.tension}:{})
return d?(h=Object.assign(Object.assign(Object.assign({},h),g),{ariaRoleDescription:"errorband"}),p=Object.assign(Object.assign(Object.assign({},p),g),{aria:!1})):c.interpolate?WB(IB("interpolate")):c.tension&&WB(IB("tension")),Object.assign(Object.assign({},l),{transform:r,layer:[...f({partName:"band",mark:h,positionPrefix:"lower",endPositionPrefix:"upper",extraEncoding:u}),...f({partName:"borders",mark:p,positionPrefix:"lower",extraEncoding:u}),...f({partName:"borders",mark:p,positionPrefix:"upper",extraEncoding:u})]})}const ZW={}
function WW(e,t,n){const r=new cW(e,t)
ZW[e]={normalizer:r,parts:n}}WW(MW,TW,["box","median","outliers","rule","ticks"]),WW(PW,IW,["ticks","rule"]),WW(BW,qW,["band","borders"])
const VW=["gradientHorizontalMaxLength","gradientHorizontalMinLength","gradientVerticalMaxLength","gradientVerticalMinLength","unselectedOpacity"],HW={titleAlign:"align",titleAnchor:"anchor",titleAngle:"angle",titleBaseline:"baseline",titleColor:"color",titleFont:"font",titleFontSize:"fontSize",titleFontStyle:"fontStyle",titleFontWeight:"fontWeight",titleLimit:"limit",titleLineHeight:"lineHeight",titleOrient:"orient",titlePadding:"offset"},GW={labelAlign:"align",labelAnchor:"anchor",labelAngle:"angle",labelBaseline:"baseline",labelColor:"color",labelFont:"font",labelFontSize:"fontSize",labelFontStyle:"fontStyle",labelFontWeight:"fontWeight",labelLimit:"limit",labelLineHeight:"lineHeight",labelOrient:"orient",labelPadding:"offset"},YW=Yz(HW),XW=Yz(GW),JW=Yz({header:1,headerRow:1,headerColumn:1,headerFacet:1}),KW=["size","shape","fill","stroke","strokeDash","strokeWidth","opacity"],QW={aria:1,clipHeight:1,columnPadding:1,columns:1,cornerRadius:1,description:1,direction:1,fillColor:1,format:1,formatType:1,gradientLength:1,gradientOpacity:1,gradientStrokeColor:1,gradientStrokeWidth:1,gradientThickness:1,gridAlign:1,labelAlign:1,labelBaseline:1,labelColor:1,labelFont:1,labelFontSize:1,labelFontStyle:1,labelFontWeight:1,labelLimit:1,labelOffset:1,labelOpacity:1,labelOverlap:1,labelPadding:1,labelSeparation:1,legendX:1,legendY:1,offset:1,orient:1,padding:1,rowPadding:1,strokeColor:1,symbolDash:1,symbolDashOffset:1,symbolFillColor:1,symbolLimit:1,symbolOffset:1,symbolOpacity:1,symbolSize:1,symbolStrokeColor:1,symbolStrokeWidth:1,symbolType:1,tickCount:1,tickMinStep:1,title:1,titleAlign:1,titleAnchor:1,titleBaseline:1,titleColor:1,titleFont:1,titleFontSize:1,titleFontStyle:1,titleFontWeight:1,titleLimit:1,titleLineHeight:1,titleOpacity:1,titleOrient:1,titlePadding:1,type:1,values:1,zindex:1},eV=(Yz(QW),"_vgsid_"),tV={point:{on:"click",fields:[eV],toggle:"event.shiftKey",resolve:"global",clear:"dblclick"},interval:{on:"[mousedown, window:mouseup] > window:mousemove!",encodings:["x","y"],translate:"[mousedown, window:mouseup] > window:mousemove!",zoom:"wheel!",mark:{fill:"#333",fillOpacity:.125,stroke:"white"},resolve:"global",clear:"dblclick"}}
function nV(e){return"legend"===e||!!(null==e?void 0:e.legend)}function rV(e){return nV(e)&&we(e)}function iV(e){return!!(null==e?void 0:e.select)}var oV=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function aV(e){const t=[]
for(const n of e||[]){if(iV(n))continue
const{expr:e,bind:r}=n,i=oV(n,["expr","bind"])
if(r&&e){const n=Object.assign(Object.assign({},i),{bind:r,init:e})
t.push(n)}else{const n=Object.assign(Object.assign(Object.assign({},i),e?{update:e}:{}),r?{bind:r}:{})
t.push(n)}}return t}function sV(e){return"concat"in e}function lV(e){return"vconcat"in e}function uV(e){return"hconcat"in e}function cV(e){let{step:t,offsetIsDiscrete:n}=e
var r
return n?null!==(r=t.for)&&void 0!==r?r:"offset":"position"}function fV(e){return we(e)&&void 0!==e.step}function dV(e){return e.view||e.width||e.height}const hV=Yz({align:1,bounds:1,center:1,columns:1,spacing:1})
var pV=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function gV(e,t){var n
return null!==(n=e[t])&&void 0!==n?n:e["width"===t?"continuousWidth":"continuousHeight"]}function mV(e,t){const n=yV(e,t)
return fV(n)?n.step:vV}function yV(e,t){var n
return cI(null!==(n=e[t])&&void 0!==n?n:e["width"===t?"discreteWidth":"discreteHeight"],{step:e.step})}const vV=20,bV={background:"white",padding:5,timeFormat:"%b %d, %Y",countTitle:"Count of Records",view:{continuousWidth:200,continuousHeight:200,step:vV},mark:{color:"#4c78a8",invalid:"filter",timeUnitBandSize:1},arc:{},area:{},bar:{binSpacing:1,continuousBandSize:5,timeUnitBandPosition:.5},circle:{},geoshape:{},image:{},line:{},point:{},rect:{binSpacing:0,continuousBandSize:5,timeUnitBandPosition:.5},rule:{color:"black"},square:{},text:{color:"black"},tick:{thickness:1},trail:{},boxplot:{size:14,extent:1.5,box:{},median:{color:"white"},outliers:{},rule:{},ticks:null},errorbar:{center:"mean",rule:!0,ticks:!1},errorband:{band:{opacity:.3},borders:!1},scale:{pointPadding:.5,barBandPaddingInner:.1,rectBandPaddingInner:0,bandWithNestedOffsetPaddingInner:.2,bandWithNestedOffsetPaddingOuter:.2,minBandSize:2,minFontSize:8,maxFontSize:40,minOpacity:.3,maxOpacity:.8,minSize:9,minStrokeWidth:1,maxStrokeWidth:4,quantileCount:4,quantizeCount:4},projection:{},legend:{gradientHorizontalMaxLength:200,gradientHorizontalMinLength:100,gradientVerticalMaxLength:200,gradientVerticalMinLength:64,unselectedOpacity:.35},header:{titlePadding:10,labelPadding:10},headerColumn:{},headerRow:{},headerFacet:{},selection:tV,style:{},title:{},facet:{spacing:20},concat:{spacing:20},normalizedNumberFormat:".0%"},xV=["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"],_V={text:11,guideLabel:10,guideTitle:11,groupTitle:13,groupSubtitle:12},wV={blue:xV[0],orange:xV[1],red:xV[2],teal:xV[3],green:xV[4],yellow:xV[5],purple:xV[6],pink:xV[7],brown:xV[8],gray0:"#000",gray1:"#111",gray2:"#222",gray3:"#333",gray4:"#444",gray5:"#555",gray6:"#666",gray7:"#777",gray8:"#888",gray9:"#999",gray10:"#aaa",gray11:"#bbb",gray12:"#ccc",gray13:"#ddd",gray14:"#eee",gray15:"#fff"}
function OV(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{signals:[{name:"color",value:we(e)?Object.assign(Object.assign({},wV),e):wV}],mark:{color:{signal:"color.blue"}},rule:{color:{signal:"color.gray0"}},text:{color:{signal:"color.gray0"}},style:{"guide-label":{fill:{signal:"color.gray0"}},"guide-title":{fill:{signal:"color.gray0"}},"group-title":{fill:{signal:"color.gray0"}},"group-subtitle":{fill:{signal:"color.gray0"}},cell:{stroke:{signal:"color.gray8"}}},axis:{domainColor:{signal:"color.gray13"},gridColor:{signal:"color.gray8"},tickColor:{signal:"color.gray13"}},range:{category:[{signal:"color.blue"},{signal:"color.orange"},{signal:"color.red"},{signal:"color.teal"},{signal:"color.green"},{signal:"color.yellow"},{signal:"color.purple"},{signal:"color.pink"},{signal:"color.brown"},{signal:"color.grey8"}]}}}function kV(e){return{signals:[{name:"fontSize",value:we(e)?Object.assign(Object.assign({},_V),e):_V}],text:{fontSize:{signal:"fontSize.text"}},style:{"guide-label":{fontSize:{signal:"fontSize.guideLabel"}},"guide-title":{fontSize:{signal:"fontSize.guideTitle"}},"group-title":{fontSize:{signal:"fontSize.groupTitle"}},"group-subtitle":{fontSize:{signal:"fontSize.groupSubtitle"}}}}}function EV(e){return{text:{font:e},style:{"guide-label":{font:e},"guide-title":{font:e},"group-title":{font:e},"group-subtitle":{font:e}}}}function AV(e){const t=Yz(e||{}),n={}
for(const r of t){const t=e[r]
n[r]=nW(t)?UL(t):qL(t)}return n}function SV(e){const t=Yz(e),n={}
for(const r of t)n[r]=AV(e[r])
return n}const DV=[...Fq,...lW,...JW,"background","padding","legend","lineBreak","scale","style","title","view"]
function CV(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{color:t,font:n,fontSize:r,selection:i}=e,o=pV(e,["color","font","fontSize","selection"]),a=ke({},Mz(bV),n?EV(n):{},t?OV(t):{},r?kV(r):{},o||{})
i&&Ee(a,"selection",i,!0)
const s=Tz(a,DV)
for(const l of["background","lineBreak","padding"])a[l]&&(s[l]=qL(a[l]))
for(const l of Fq)a[l]&&(s[l]=FL(a[l]))
for(const l of lW)a[l]&&(s[l]=AV(a[l]))
for(const l of JW)a[l]&&(s[l]=FL(a[l]))
return a.legend&&(s.legend=FL(a.legend)),a.scale&&(s.scale=FL(a.scale)),a.style&&(s.style=SV(a.style)),a.title&&(s.title=FL(a.title)),a.view&&(s.view=FL(a.view)),s}const MV=new Set(["view",...Dq]),jV=["color","fontSize","background","padding","facet","concat","numberFormat","numberFormatType","normalizedNumberFormat","normalizedNumberFormatType","timeFormat","countTitle","header","axisQuantitative","axisTemporal","axisDiscrete","axisPoint","axisXBand","axisXPoint","axisXDiscrete","axisXQuantitative","axisXTemporal","axisYBand","axisYPoint","axisYDiscrete","axisYQuantitative","axisYTemporal","scale","selection","overlay"],FV=Object.assign({view:["continuousWidth","continuousHeight","discreteWidth","discreteHeight","step"]},{area:["line","point"],bar:["binSpacing","continuousBandSize","discreteBandSize"],rect:["binSpacing","continuousBandSize","discreteBandSize"],line:["point"],tick:["bandSize","thickness"]})
function TV(e){e=Mz(e)
for(const t of jV)delete e[t]
if(e.axis)for(const t in e.axis)nW(e.axis[t])&&delete e.axis[t]
if(e.legend)for(const t of VW)delete e.legend[t]
if(e.mark){for(const t of jq)delete e.mark[t]
e.mark.tooltip&&we(e.mark.tooltip)&&delete e.mark.tooltip}e.params&&(e.signals=(e.signals||[]).concat(aV(e.params)),delete e.params)
for(const t of MV){for(const r of jq)delete e[t][r]
const n=FV[t]
if(n)for(const r of n)delete e[t][r]
NV(e,t)}for(const t of Yz(ZW))delete e[t]
!function(e){const{titleMarkConfig:t,subtitleMarkConfig:n,subtitle:r}=TL(e.title)
Gz(t)||(e.style["group-title"]=Object.assign(Object.assign({},e.style["group-title"]),t)),Gz(n)||(e.style["group-subtitle"]=Object.assign(Object.assign({},e.style["group-subtitle"]),n)),Gz(r)?delete e.title:e.title=r}(e)
for(const t in e)we(e[t])&&Gz(e[t])&&delete e[t]
return Gz(e)?void 0:e}function NV(e,t,n,r){const i=r?e[t][r]:e[t]
"view"===t&&(n="cell")
const o=Object.assign(Object.assign({},i),e.style[null!=n?n:t])
Gz(o)||(e.style[null!=n?n:t]=o),r||delete e[t]}function $V(e){return"layer"in e}class PV{map(e,t){return sZ(e)?this.mapFacet(e,t):function(e){return"repeat"in e}(e)?this.mapRepeat(e,t):uV(e)?this.mapHConcat(e,t):lV(e)?this.mapVConcat(e,t):sV(e)?this.mapConcat(e,t):this.mapLayerOrUnit(e,t)}mapLayerOrUnit(e,t){if($V(e))return this.mapLayer(e,t)
if(uW(e))return this.mapUnit(e,t)
throw new Error(iB(e))}mapLayer(e,t){return Object.assign(Object.assign({},e),{layer:e.layer.map((e=>this.mapLayerOrUnit(e,t)))})}mapHConcat(e,t){return Object.assign(Object.assign({},e),{hconcat:e.hconcat.map((e=>this.map(e,t)))})}mapVConcat(e,t){return Object.assign(Object.assign({},e),{vconcat:e.vconcat.map((e=>this.map(e,t)))})}mapConcat(e,t){const{concat:n}=e,r=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["concat"])
return Object.assign(Object.assign({},r),{concat:n.map((e=>this.map(e,t)))})}mapFacet(e,t){return Object.assign(Object.assign({},e),{spec:this.map(e.spec,t)})}mapRepeat(e,t){return Object.assign(Object.assign({},e),{spec:this.map(e.spec,t)})}}const zV={zero:1,center:1,normalize:1},IV=new Set([dq,pq,hq,bq,yq,Oq,kq,mq,xq,_q]),RV=new Set([pq,hq,dq])
function LV(e){return yZ(e)&&"quantitative"===vZ(e)&&!e.bin}function BV(e,t){var n,r
const i="x"===t?"y":"radius",o=e[t],a=e[i]
if(yZ(o)&&yZ(a))if(LV(o)&&LV(a)){if(o.stack)return t
if(a.stack)return i
const e=yZ(o)&&!!o.aggregate
if(e!==(yZ(a)&&!!a.aggregate))return e?t:i
{const e=null===(n=o.scale)||void 0===n?void 0:n.type,s=null===(r=a.scale)||void 0===r?void 0:r.type
if(e&&"linear"!==e)return i
if(s&&"linear"!==s)return t}}else{if(LV(o))return t
if(LV(a))return i}else{if(LV(o))return t
if(LV(a))return i}}function UV(e,t){var n,r
const i=Cq(e)?e.type:e
if(!IV.has(i))return null
const o=BV(t,"x")||BV(t,"theta")
if(!o)return null
const a=t[o],s=yZ(a)?jZ(a,{}):void 0,l=function(e){switch(e){case"x":return"y"
case"y":return"x"
case"theta":return"radius"
case"radius":return"theta"}}(o),u=[],c=new Set
if(t[l]){const e=t[l],n=yZ(e)?jZ(e,{}):void 0
n&&n!==s&&(u.push(l),c.add(n))
const r="x"===l?"xOffset":"yOffset",i=t[r],o=yZ(i)?jZ(i,{}):void 0
o&&o!==s&&(u.push(r),c.add(o))}const f=ZR.reduce(((e,n)=>{if("tooltip"!==n&&fW(t,n)){const r=t[n]
for(const t of Ve(r)){const r=qZ(t)
if(r.aggregate)continue
const i=jZ(r,{})
i&&c.has(i)||e.push({channel:n,fieldDef:r})}}return e}),[])
let d
return void 0!==a.stack?d=dt(a.stack)?a.stack?"zero":null:a.stack:RV.has(i)&&(d="zero"),d&&d in zV?pW(t)&&0===f.length?null:(null===(n=null==a?void 0:a.scale)||void 0===n?void 0:n.type)&&"linear"!==(null===(r=null==a?void 0:a.scale)||void 0===r?void 0:r.type)?(WB(function(e){return`Cannot stack non-linear scale (${e}).`}(a.scale.type)),null):wZ(t[kR(o)])?(void 0!==a.stack&&WB(`Cannot stack "${h=o}" if there is already "${h}2".`),null):(yZ(a)&&a.aggregate&&!OL.has(a.aggregate)&&WB(`Stacking is applied even though the aggregate function is non-summative ("${a.aggregate}").`),{groupbyChannels:u,groupbyFields:c,fieldChannel:o,impute:null!==a.impute&&Aq(i),stackBy:f,offset:d}):null
var h}var qV=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function ZV(e){const{point:t,line:n}=e,r=qV(e,["point","line"])
return Yz(r).length>1?r:r.type}function WV(e){for(const t of["line","area","rule","trail"])e[t]&&(e=Object.assign(Object.assign({},e),{[t]:Tz(e[t],["point","line"])}))
return e}function VV(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
return"transparent"===e.point?{opacity:0}:e.point?we(e.point)?e.point:{}:void 0!==e.point?null:t.point||n.shape?we(t.point)?t.point:{}:void 0}function HV(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return e.line?!0===e.line?{}:e.line:void 0!==e.line?null:t.line?!0===t.line?{}:t.line:void 0}class GV{constructor(){this.name="path-overlay"}hasMatchingType(e,t){if(uW(e)){const{mark:n,encoding:r}=e,i=Cq(n)?n:{type:n}
switch(i.type){case"line":case"rule":case"trail":return!!VV(i,t[i.type],r)
case"area":return!!VV(i,t[i.type],r)||!!HV(i,t[i.type])}}return!1}run(e,t,n){const{config:r}=t,{params:i,projection:o,mark:a,encoding:s}=e,l=qV(e,["params","projection","mark","encoding"]),u=yW(s,r),c=Cq(a)?a:{type:a},f=VV(c,r[c.type],u),d="area"===c.type&&HV(c,r[c.type]),h=[Object.assign(Object.assign({},i?{params:i}:{}),{mark:ZV(Object.assign(Object.assign({},"area"===c.type&&void 0===c.opacity&&void 0===c.fillOpacity?{opacity:.7}:{}),c)),encoding:Tz(u,["shape"])})],p=UV(c,u)
let g=u
if(p){const{fieldChannel:e,offset:t}=p
g=Object.assign(Object.assign({},u),{[e]:Object.assign(Object.assign({},u[e]),t?{stack:t}:{})})}return d&&h.push(Object.assign(Object.assign({},o?{projection:o}:{}),{mark:Object.assign(Object.assign({type:"line"},Fz(c,["clip","interpolate","tension","tooltip"])),d),encoding:g})),f&&h.push(Object.assign(Object.assign({},o?{projection:o}:{}),{mark:Object.assign(Object.assign({type:"point",opacity:1,filled:!0},Fz(c,["clip","tooltip"])),f),encoding:g})),n(Object.assign(Object.assign({},l),{layer:h}),Object.assign(Object.assign({},t),{config:WV(r)}))}}function YV(e,t){return t?oZ(e)?tH(e,t):KV(e,t):e}function XV(e,t){return t?tH(e,t):e}function JV(e,t,n){const r=t[e]
return function(e){return e&&!yt(e)&&"repeat"in e}(r)?r.repeat in n?Object.assign(Object.assign({},t),{[e]:n[r.repeat]}):void WB(function(e){return`Unknown repeated value "${e}".`}(r.repeat)):t}function KV(e,t){if(void 0!==(e=JV("field",e,t))){if(null===e)return null
if(cZ(e)&&rZ(e.sort)){const n=JV("field",e.sort,t)
e=Object.assign(Object.assign({},e),n?{sort:n}:{})}return e}}function QV(e,t){if(yZ(e))return KV(e,t)
{const n=JV("datum",e,t)
return n===e||n.type||(n.type="nominal"),n}}function eH(e,t){if(!wZ(e)){if(mZ(e)){const n=QV(e.condition,t)
if(n)return Object.assign(Object.assign({},e),{condition:n})
{const{condition:t}=e
return function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["condition"])}}return e}{const n=QV(e,t)
if(n)return n
if(pZ(e))return{condition:e.condition}}}function tH(e,t){const n={}
for(const r in e)if(at(e,r)){const i=e[r]
if(_e(i))n[r]=i.map((e=>eH(e,t))).filter((e=>e))
else{const e=eH(i,t)
void 0!==e&&(n[r]=e)}}return n}class nH{constructor(){this.name="RuleForRangedLine"}hasMatchingType(e){if(uW(e)){const{encoding:t,mark:n}=e
if("line"===n||Cq(n)&&"line"===n.type)for(const e of xR){const n=t[wR(e)]
if(t[e]&&(yZ(n)&&!SL(n.bin)||bZ(n)))return!0}}return!1}run(e,t,n){const{encoding:r,mark:i}=e
var o,a
return WB((o=!!r.x2,a=!!r.y2,`Line mark is for continuous lines and thus cannot be used with ${o&&a?"x2 and y2":o?"x2":"y2"}. We will use the rule mark (line segments) instead.`)),n(Object.assign(Object.assign({},e),{mark:we(i)?Object.assign(Object.assign({},i),{type:"rule"}):"rule"}),t)}}var rH=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function iH(e){let{parentEncoding:t,encoding:n={},layer:r}=e,i={}
if(t){const e=new Set([...Yz(t),...Yz(n)])
for(const o of e){const e=n[o],a=t[o]
if(wZ(e)){const t=Object.assign(Object.assign({},a),e)
i[o]=t}else mZ(e)?i[o]=Object.assign(Object.assign({},e),{condition:Object.assign(Object.assign({},a),e.condition)}):e||null===e?i[o]=e:(r||kZ(a)||$L(a)||wZ(a)||_e(a))&&(i[o]=a)}}else i=n
return!i||Gz(i)?void 0:i}function oH(e){const{parentProjection:t,projection:n}=e
return t&&n&&WB(function(e){const{parentProjection:t,projection:n}=e
return`Layer's shared projection ${Nz(t)} is overridden by a child projection ${Nz(n)}.`}({parentProjection:t,projection:n})),null!=n?n:t}function aH(e){return"filter"in e}function sH(e){return void 0!==(null==e?void 0:e.stop)}function lH(e){return"lookup"in e}function uH(e){return"pivot"in e}function cH(e){return"density"in e}function fH(e){return"quantile"in e}function dH(e){return"regression"in e}function hH(e){return"loess"in e}function pH(e){return"sample"in e}function gH(e){return"window"in e}function mH(e){return"joinaggregate"in e}function yH(e){return"flatten"in e}function vH(e){return"calculate"in e}function bH(e){return"bin"in e}function xH(e){return"impute"in e}function _H(e){return"timeUnit"in e}function wH(e){return"aggregate"in e}function OH(e){return"stack"in e}function kH(e){return"fold"in e}var EH=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function AH(e,t){const{transform:n}=e,r=EH(e,["transform"])
if(n){const e=n.map((e=>{if(aH(e))return{filter:CH(e,t)}
if(bH(e)&&DL(e.bin))return Object.assign(Object.assign({},e),{bin:DH(e.bin)})
if(lH(e)){const t=e.from,{selection:n}=t,r=EH(t,["selection"])
return n?Object.assign(Object.assign({},e),{from:Object.assign({param:n},r)}):e}return e}))
return Object.assign(Object.assign({},r),{transform:e})}return e}function SH(e,t){var n,r
const i=Mz(e)
if(yZ(i)&&DL(i.bin)&&(i.bin=DH(i.bin)),EZ(i)&&(null===(r=null===(n=i.scale)||void 0===n?void 0:n.domain)||void 0===r?void 0:r.selection)){const e=i.scale.domain,{selection:t}=e,n=EH(e,["selection"])
i.scale.domain=Object.assign(Object.assign({},n),t?{param:t}:{})}if(pZ(i))if(_e(i.condition))i.condition=i.condition.map((e=>{const{selection:n,param:r,test:i}=e,o=EH(e,["selection","param","test"])
return r?e:Object.assign(Object.assign({},o),{test:CH(e,t)})}))
else{const e=SH(i.condition,t),{selection:n,param:r,test:o}=e,a=EH(e,["selection","param","test"])
i.condition=r?i.condition:Object.assign(Object.assign({},a),{test:CH(i.condition,t)})}return i}function DH(e){const t=e.extent
if(null==t?void 0:t.selection){const{selection:n}=t,r=EH(t,["selection"])
return Object.assign(Object.assign({},e),{extent:Object.assign(Object.assign({},r),{param:n})})}return e}function CH(e,t){const n=e=>Dz(e,(e=>{var n,r,i
const o={param:e,empty:null===(n=t.emptySelections[e])||void 0===n||n}
return null!==(r=(i=t.selectionPredicates)[e])&&void 0!==r||(i[e]=[]),t.selectionPredicates[e].push(o),o}))
return e.selection?n(e.selection):Dz(e.test||e.filter,(e=>e.selection?n(e.selection):e))}class MH extends PV{map(e,t){var n
const r=null!==(n=t.selections)&&void 0!==n?n:[]
if(e.params&&!uW(e)){const t=[]
for(const n of e.params)iV(n)?r.push(n):t.push(n)
e.params=t}return t.selections=r,super.map(e,jH(e,t))}mapUnit(e,t){var n
const r=t.selections
if(!r||!r.length)return e
const i=(null!==(n=t.path)&&void 0!==n?n:[]).concat(e.name),o=[]
for(const a of r)if(a.views&&a.views.length)for(const t of a.views)(yt(t)&&(t===e.name||i.indexOf(t)>=0)||_e(t)&&t.map((e=>i.indexOf(e))).every(((e,t,n)=>-1!==e&&(0===t||e>n[t-1]))))&&o.push(a)
else o.push(a)
return o.length&&(e.params=o),e}}for(const p2 of["mapFacet","mapRepeat","mapHConcat","mapVConcat","mapLayer"]){const e=MH.prototype[p2]
MH.prototype[p2]=function(t,n){return e.call(this,t,jH(t,n))}}function jH(e,t){var n
return e.name?Object.assign(Object.assign({},t),{path:(null!==(n=t.path)&&void 0!==n?n:[]).concat(e.name)}):t}function FH(e,t){void 0===t&&(t=CV(e.config))
const n=function(e){const t={config:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}
return $H.map(TH.map(NH.map(e,t),t),t)}(e,t),{width:r,height:i}=e,o=function(e,t,n){let{width:r,height:i}=t
const o=uW(e)||$V(e),a={}
o?"container"==r&&"container"==i?(a.type="fit",a.contains="padding"):"container"==r?(a.type="fit-x",a.contains="padding"):"container"==i&&(a.type="fit-y",a.contains="padding"):("container"==r&&(WB(oB("width")),r=void 0),"container"==i&&(WB(oB("height")),i=void 0))
const s=Object.assign(Object.assign(Object.assign({type:"pad"},a),n?PH(n.autosize):{}),PH(e.autosize))
if("fit"!==s.type||o||(WB('Autosize "fit" only works for single views and layered views.'),s.type="pad"),"container"==r&&"fit"!=s.type&&"fit-x"!=s.type&&WB(aB("width")),"container"==i&&"fit"!=s.type&&"fit-y"!=s.type&&WB(aB("height")),!Cz(s,{type:"pad"}))return s}(n,{width:r,height:i,autosize:e.autosize},t)
return Object.assign(Object.assign({},n),o?{autosize:o}:{})}const TH=new class extends PV{constructor(){super(...arguments),this.nonFacetUnitNormalizers=[jW,zW,UW,new GV,new nH]}map(e,t){if(uW(e)){const n=fW(e.encoding,bI),r=fW(e.encoding,xI),i=fW(e.encoding,_I)
if(n||r||i)return this.mapFacetedUnit(e,t)}return super.map(e,t)}mapUnit(e,t){const{parentEncoding:n,parentProjection:r}=t,i=XV(e.encoding,t.repeater),o=Object.assign(Object.assign({},e),i?{encoding:i}:{})
if(n||r)return this.mapUnitWithParentEncodingOrProjection(o,t)
const a=this.mapLayerOrUnit.bind(this)
for(const s of this.nonFacetUnitNormalizers)if(s.hasMatchingType(o,t.config))return s.run(o,t,a)
return o}mapRepeat(e,t){return function(e){return!_e(e.repeat)&&e.repeat.layer}(e)?this.mapLayerRepeat(e,t):this.mapNonLayerRepeat(e,t)}mapLayerRepeat(e,t){const{repeat:n,spec:r}=e,i=rH(e,["repeat","spec"]),{row:o,column:a,layer:s}=n,{repeater:l={},repeaterPrefix:u=""}=t
return o||a?this.mapRepeat(Object.assign(Object.assign({},e),{repeat:Object.assign(Object.assign({},o?{row:o}:{}),a?{column:a}:{}),spec:{repeat:{layer:s},spec:r}}),t):Object.assign(Object.assign({},i),{layer:s.map((e=>{const n=Object.assign(Object.assign({},l),{layer:e}),i=`${(r.name||"")+u}child__layer_${Qz(e)}`,o=this.mapLayerOrUnit(r,Object.assign(Object.assign({},t),{repeater:n,repeaterPrefix:i}))
return o.name=i,o}))})}mapNonLayerRepeat(e,t){var n
const{repeat:r,spec:i,data:o}=e,a=rH(e,["repeat","spec","data"])
!_e(r)&&e.columns&&(e=Tz(e,["columns"]),WB(dB("repeat")))
const s=[],{repeater:l={},repeaterPrefix:u=""}=t,c=!_e(r)&&r.row||[l?l.row:null],f=!_e(r)&&r.column||[l?l.column:null],d=_e(r)&&r||[l?l.repeat:null]
for(const p of d)for(const e of c)for(const n of f){const o={repeat:p,row:e,column:n,layer:l.layer},a=(i.name||"")+u+"child__"+(_e(r)?`${Qz(p)}`:(r.row?`row_${Qz(e)}`:"")+(r.column?`column_${Qz(n)}`:"")),c=this.map(i,Object.assign(Object.assign({},t),{repeater:o,repeaterPrefix:a}))
c.name=a,s.push(Tz(c,["data"]))}const h=_e(r)?e.columns:r.column?r.column.length:1
return Object.assign(Object.assign({data:null!==(n=i.data)&&void 0!==n?n:o,align:"all"},a),{columns:h,concat:s})}mapFacet(e,t){const{facet:n}=e
return oZ(n)&&e.columns&&(e=Tz(e,["columns"]),WB(dB("facet"))),super.mapFacet(e,t)}mapUnitWithParentEncodingOrProjection(e,t){const{encoding:n,projection:r}=e,{parentEncoding:i,parentProjection:o,config:a}=t,s=oH({parentProjection:o,projection:r}),l=iH({parentEncoding:i,encoding:XV(n,t.repeater)})
return this.mapUnit(Object.assign(Object.assign(Object.assign({},e),s?{projection:s}:{}),l?{encoding:l}:{}),{config:a})}mapFacetedUnit(e,t){const n=e.encoding,{row:r,column:i,facet:o}=n,a=rH(n,["row","column","facet"]),{mark:s,width:l,projection:u,height:c,view:f,params:d,encoding:h}=e,p=rH(e,["mark","width","projection","height","view","params","encoding"]),{facetMapping:g,layout:m}=this.getFacetMappingAndLayout({row:r,column:i,facet:o},t),y=XV(a,t.repeater)
return this.mapFacet(Object.assign(Object.assign(Object.assign({},p),m),{facet:g,spec:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l?{width:l}:{}),c?{height:c}:{}),f?{view:f}:{}),u?{projection:u}:{}),{mark:s,encoding:y}),d?{params:d}:{})}),t)}getFacetMappingAndLayout(e,t){var n
const{row:r,column:i,facet:o}=e
if(r||i){o&&WB(`Facet encoding dropped as ${(a=[...r?[bI]:[],...i?[xI]:[]]).join(" and ")} ${a.length>1?"are":"is"} also specified.`)
const t={},s={}
for(const r of[bI,xI]){const i=e[r]
if(i){const{align:e,center:o,spacing:a,columns:l}=i,u=rH(i,["align","center","spacing","columns"])
t[r]=u
for(const t of["align","center","spacing"])void 0!==i[t]&&(null!==(n=s[t])&&void 0!==n||(s[t]={}),s[t][r]=i[t])}}return{facetMapping:t,layout:s}}{const{align:e,center:n,spacing:r,columns:i}=o
return{facetMapping:YV(rH(o,["align","center","spacing","columns"]),t.repeater),layout:Object.assign(Object.assign(Object.assign(Object.assign({},e?{align:e}:{}),n?{center:n}:{}),r?{spacing:r}:{}),i?{columns:i}:{})}}var a}mapLayer(e,t){var{parentEncoding:n,parentProjection:r}=t,i=rH(t,["parentEncoding","parentProjection"])
const{encoding:o,projection:a}=e,s=rH(e,["encoding","projection"]),l=Object.assign(Object.assign({},i),{parentEncoding:iH({parentEncoding:n,encoding:o,layer:!0}),parentProjection:oH({parentProjection:r,projection:a})})
return super.mapLayer(s,l)}},NH=new class extends PV{map(e,t){var n,r
return null!==(n=t.emptySelections)&&void 0!==n||(t.emptySelections={}),null!==(r=t.selectionPredicates)&&void 0!==r||(t.selectionPredicates={}),e=AH(e,t),super.map(e,t)}mapLayerOrUnit(e,t){if((e=AH(e,t)).encoding){const n={}
for(const[r,i]of Jz(e.encoding))n[r]=SH(i,t)
e=Object.assign(Object.assign({},e),{encoding:n})}return super.mapLayerOrUnit(e,t)}mapUnit(e,t){const n=e,{selection:r}=n,i=EH(n,["selection"])
return r?Object.assign(Object.assign({},i),{params:Jz(r).map((e=>{let[n,r]=e
var i
const o=r,{init:a,bind:s,empty:l}=o,u=EH(o,["init","bind","empty"])
"single"===u.type?(u.type="point",u.toggle=!1):"multi"===u.type&&(u.type="point"),t.emptySelections[n]="none"!==l
for(const c of Xz(null!==(i=t.selectionPredicates[n])&&void 0!==i?i:{}))c.empty="none"!==l
return{name:n,value:a,select:u,bind:s}}))}):e}},$H=new MH
function PH(e){return yt(e)?{type:e}:null!=e?e:{}}const zH=["background","padding"]
function IH(e,t){const n={}
for(const r of zH)e&&void 0!==e[r]&&(n[r]=qL(e[r]))
return t&&(n.params=e.params),n}class RH{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.explicit=e,this.implicit=t}clone(){return new RH(Mz(this.explicit),Mz(this.implicit))}combine(){return Object.assign(Object.assign({},this.explicit),this.implicit)}get(e){return cI(this.explicit[e],this.implicit[e])}getWithExplicit(e){return void 0!==this.explicit[e]?{explicit:!0,value:this.explicit[e]}:void 0!==this.implicit[e]?{explicit:!1,value:this.implicit[e]}:{explicit:!1,value:void 0}}setWithExplicit(e,t){let{value:n,explicit:r}=t
void 0!==n&&this.set(e,n,r)}set(e,t,n){return delete this[n?"implicit":"explicit"][e],this[n?"explicit":"implicit"][e]=t,this}copyKeyFromSplit(e,t){let{explicit:n,implicit:r}=t
void 0!==n[e]?this.set(e,n[e],!0):void 0!==r[e]&&this.set(e,r[e],!1)}copyKeyFromObject(e,t){void 0!==t[e]&&this.set(e,t[e],!0)}copyAll(e){for(const t of Yz(e.combine())){const n=e.getWithExplicit(t)
this.setWithExplicit(t,n)}}}function LH(e){return{explicit:!0,value:e}}function BH(e){return{explicit:!1,value:e}}function UH(e){return(t,n,r,i)=>{const o=e(t.value,n.value)
return o>0?t:o<0?n:qH(t,n,r,i)}}function qH(e,t,n,r){return e.explicit&&t.explicit&&WB(function(e,t,n,r){return`Conflicting ${t.toString()} property "${e.toString()}" (${Nz(n)} and ${Nz(r)}). Using ${Nz(n)}.`}(n,r,e.value,t.value)),e}function ZH(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:qH
return void 0===e||void 0===e.value?t:e.explicit&&!t.explicit?e:t.explicit&&!e.explicit?t:Cz(e.value,t.value)?e:i(e,t,n,r)}class WH extends RH{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
super(e,t),this.explicit=e,this.implicit=t,this.parseNothing=n}clone(){const e=super.clone()
return e.parseNothing=this.parseNothing,e}}function VH(e){return"url"in e}function HH(e){return"values"in e}function GH(e){return"name"in e&&!VH(e)&&!HH(e)&&!YH(e)}function YH(e){return e&&(XH(e)||JH(e)||KH(e))}function XH(e){return"sequence"in e}function JH(e){return"sphere"in e}function KH(e){return"graticule"in e}var QH
!function(e){e[e.Raw=0]="Raw",e[e.Main=1]="Main",e[e.Row=2]="Row",e[e.Column=3]="Column",e[e.Lookup=4]="Lookup"}(QH||(QH={}))
var eG=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function tG(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ue
if(_e(e)){const r=e.map((e=>tG(e,t,n)))
return t?`[${r.join(", ")}]`:r}return VB(e)?n(t?KB(e):eU(e)):t?n(Nz(e)):e}function nG(e,t){var n
for(const r of Xz(null!==(n=e.component.selection)&&void 0!==n?n:{})){const n=r.name
let i=`${n}${hY}, ${"global"===r.resolve?"true":`{unit: ${vY(e)}}`}`
for(const o of mY)o.defined(r)&&(o.signals&&(t=o.signals(e,r,t)),o.modifyExpr&&(i=o.modifyExpr(e,r,i)))
t.push({name:n+pY,on:[{events:{signal:r.name+hY},update:`modify(${Et(r.name+dY)}, ${i})`}]})}return iG(t)}function rG(e,t){var n
for(const r of Xz(null!==(n=e.component.selection)&&void 0!==n?n:{}))for(const n of mY)n.defined(r)&&n.marks&&(t=n.marks(e,r,t))
return t}function iG(e){return e.map((e=>(e.on&&!e.on.length&&delete e.on,e)))}class oG{constructor(e,t){this.debugName=t,this._children=[],this._parent=null,e&&(this.parent=e)}clone(){throw new Error("Cannot clone node")}get parent(){return this._parent}set parent(e){this._parent=e,e&&e.addChild(this)}get children(){return this._children}numChildren(){return this._children.length}addChild(e,t){this._children.includes(e)?WB("Attempt to add the same child twice."):void 0!==t?this._children.splice(t,0,e):this._children.push(e)}removeChild(e){const t=this._children.indexOf(e)
return this._children.splice(t,1),t}remove(){let e=this._parent.removeChild(this)
for(const t of this._children)t._parent=this._parent,this._parent.addChild(t,e++)}insertAsParentOf(e){const t=e.parent
t.removeChild(this),this.parent=t,e.parent=this}swapWithParent(){const e=this._parent,t=e.parent
for(const r of this._children)r.parent=e
this._children=[],e.removeChild(this)
const n=e.parent.removeChild(e)
this._parent=t,t.addChild(this,n),e.parent=this}}class aG extends oG{constructor(e,t,n,r){super(e,t),this.type=n,this.refCounts=r,this._source=this._name=t,this.refCounts&&!(this._name in this.refCounts)&&(this.refCounts[this._name]=0)}clone(){const e=new this.constructor
return e.debugName=`clone_${this.debugName}`,e._source=this._source,e._name=`clone_${this._name}`,e.type=this.type,e.refCounts=this.refCounts,e.refCounts[e._name]=0,e}dependentFields(){return new Set}producedFields(){return new Set}hash(){return void 0===this._hash&&(this._hash=`Output ${dI()}`),this._hash}getSource(){return this.refCounts[this._name]++,this._source}isRequired(){return!!this.refCounts[this._name]}setSource(e){this._source=e}}var sG=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
class lG extends oG{constructor(e,t){super(e),this.formula=t}clone(){return new lG(null,Mz(this.formula))}static makeFromEncoding(e,t){const n=t.reduceFieldDef(((e,t)=>{const{field:n,timeUnit:r}=t
if(r){const i=jZ(t,{forAs:!0})
e[$z({as:i,field:n,timeUnit:r})]={as:i,field:n,timeUnit:r}}return e}),{})
return Gz(n)?null:new lG(e,n)}static makeFromTransform(e,t){const n=Object.assign({},t),{timeUnit:r}=n,i=sG(n,["timeUnit"]),o=uU(r),a=Object.assign(Object.assign({},i),{timeUnit:o})
return new lG(e,{[$z(a)]:a})}merge(e){this.formula=Object.assign({},this.formula)
for(const t in e.formula)this.formula[t]||(this.formula[t]=e.formula[t])
for(const t of e.children)e.removeChild(t),t.parent=this
e.remove()}removeFormulas(e){const t={}
for(const[n,r]of Jz(this.formula))e.has(r.as)||(t[n]=r)
this.formula=t}producedFields(){return new Set(Xz(this.formula).map((e=>e.as)))}dependentFields(){return new Set(Xz(this.formula).map((e=>e.field)))}hash(){return`TimeUnit ${$z(this.formula)}`}assemble(){const e=[]
for(const t of Xz(this.formula)){const{field:n,as:r,timeUnit:i}=t,o=uU(i),{unit:a,utc:s}=o,l=sG(o,["unit","utc"])
e.push(Object.assign(Object.assign(Object.assign(Object.assign({field:aI(n),type:"timeunit"},a?{units:oU(a)}:{}),s?{timezone:"utc"}:{}),l),{as:[r,`${r}_end`]}))}return e}}const uG="_tuple_fields"
class cG{constructor(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
this.items=t,this.hasChannel={},this.hasField={},this.hasSelectionId=!1}}const fG={defined:()=>!0,parse:(e,t,n)=>{var r
const i=t.name,o=null!==(r=t.project)&&void 0!==r?r:t.project=new cG,a={},s={},l=new Set,u=(e,t)=>{const n="visual"===t?e.channel:e.field
let r=Qz(`${i}_${n}`)
for(let o=1;l.has(r);o++)r=Qz(`${i}_${n}_${o}`)
return l.add(r),{[t]:r}},c=t.type,f=e.config.selection[c],d=void 0!==n.value?Ve(n.value):null
let{fields:h,encodings:p}=we(n.select)?n.select:{}
if(!h&&!p&&d)for(const g of d)if(we(g))for(const e of Yz(g))vR[e]?(p||(p=[])).push(e):"interval"===c?(WB('Interval selections should be initialized using "x" and/or "y" keys.'),p=f.encodings):(h||(h=[])).push(e)
h||p||(p=f.encodings,"fields"in f&&(h=f.fields))
for(const g of null!=p?p:[]){const t=e.fieldDef(g)
if(t){let n=t.field
if(t.aggregate){WB(cB(g,t.aggregate))
continue}if(!n){WB(uB(g))
continue}if(t.timeUnit){n=e.vgField(g)
const r={timeUnit:t.timeUnit,as:n,field:t.field}
s[$z(r)]=r}if(!a[n]){let r="E"
"interval"===c?GU(e.getScaleComponent(g).get("type"))&&(r="R"):t.bin&&(r="R-RE")
const i={field:n,channel:g,type:r}
i.signals=Object.assign(Object.assign({},u(i,"data")),u(i,"visual")),o.items.push(a[n]=i),o.hasField[n]=o.hasChannel[g]=a[n],o.hasSelectionId=o.hasSelectionId||n===eV}}else WB(uB(g))}for(const g of null!=h?h:[]){if(o.hasField[g])continue
const e={type:"E",field:g}
e.signals=Object.assign({},u(e,"data")),o.items.push(e),o.hasField[g]=e,o.hasSelectionId=o.hasSelectionId||g===eV}d&&(t.init=d.map((e=>o.items.map((t=>we(e)?void 0!==e[t.channel]?e[t.channel]:e[t.field]:e))))),Gz(s)||(o.timeUnit=new lG(null,s))},signals:(e,t,n)=>{const r=t.name+uG
return n.filter((e=>e.name===r)).length>0||t.project.hasSelectionId?n:n.concat({name:r,value:t.project.items.map((e=>{const{signals:t,hasLegend:n}=e,r=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["signals","hasLegend"])
return r.field=aI(r.field),r}))})}},dG=fG,hG={defined:e=>"interval"===e.type&&"global"===e.resolve&&e.bind&&"scales"===e.bind,parse:(e,t)=>{const n=t.scales=[]
for(const r of t.project.items){const i=r.channel
if(!fL(i))continue
const o=e.getScaleComponent(i),a=o?o.get("type"):void 0
o&&GU(a)?(o.set("selectionExtent",{param:t.name,field:r.field},!0),n.push(r)):WB("Scale bindings are currently only supported for scales with unbinned, continuous domains.")}},topLevelSignals:(e,t,n)=>{const r=t.scales.filter((e=>0===n.filter((t=>t.name===e.signals.data)).length))
if(!e.parent||mG(e)||0===r.length)return n
const i=n.filter((e=>e.name===t.name))[0]
let o=i.update
if(o.indexOf(gY)>=0)i.update=`{${r.map((e=>`${Et(aI(e.field))}: ${e.signals.data}`)).join(", ")}}`
else{for(const e of r){const t=`${Et(aI(e.field))}: ${e.signals.data}`
o.includes(t)||(o=`${o.substring(0,o.length-1)}, ${t}}`)}i.update=o}return n.concat(r.map((e=>({name:e.signals.data}))))},signals:(e,t,n)=>{if(e.parent&&!mG(e))for(const r of t.scales){const e=n.filter((e=>e.name===r.signals.data))[0]
e.push="outer",delete e.value,delete e.update}return n}},pG=hG
function gG(e,t){return`domain(${Et(e.scaleName(t))})`}function mG(e){var t
return e.parent&&tK(e.parent)&&(null!==(t=!e.parent.parent)&&void 0!==t?t:mG(e.parent.parent))}const yG="_brush",vG="_scale_trigger",bG={defined:e=>"interval"===e.type,signals:(e,t,n)=>{const r=t.name,i=r+uG,o=pG.defined(t),a=t.init?t.init[0]:null,s=[],l=[]
if(t.translate&&!o){const e=`!event.item || event.item.mark.name !== ${Et(r+yG)}`
_G(t,((t,n)=>{var r,i
const o=Ve(null!==(r=(i=n.between[0]).filter)&&void 0!==r?r:i.filter=[])
return o.includes(e)||o.push(e),t}))}t.project.items.forEach(((r,i)=>{const o=r.channel
if(o!==wI&&o!==OI)return void WB("Interval selections only support x and y encoding channels.")
const u=a?a[i]:null,c=function(e,t,n,r){const i=n.channel,o=n.signals.visual,a=n.signals.data,s=pG.defined(t),l=Et(e.scaleName(i)),u=e.getScaleComponent(i),c=u?u.get("type"):void 0,f=e=>`scale(${l}, ${e})`,d=e.getSizeSignalRef(i===wI?"width":"height").signal,h=`${i}(unit)`,p=_G(t,((e,t)=>[...e,{events:t.between[0],update:`[${h}, ${h}]`},{events:t,update:`[${o}[0], clamp(${h}, 0, ${d})]`}]))
return p.push({events:{signal:t.name+vG},update:GU(c)?`[${f(`${a}[0]`)}, ${f(`${a}[1]`)}]`:"[0, 0]"}),s?[{name:a,on:[]}]:[Object.assign(Object.assign({name:o},r?{init:tG(r,!0,f)}:{value:[]}),{on:p}),Object.assign(Object.assign({name:a},r?{init:tG(r)}:{}),{on:[{events:{signal:o},update:`${o}[0] === ${o}[1] ? null : invert(${l}, ${o})`}]})]}(e,t,r,u),f=r.signals.data,d=r.signals.visual,h=Et(e.scaleName(o)),p=GU(e.getScaleComponent(o).get("type"))?"+":""
n.push(...c),s.push(f),l.push({scaleName:e.scaleName(o),expr:`(!isArray(${f}) || (${p}invert(${h}, ${d})[0] === ${p}${f}[0] && ${p}invert(${h}, ${d})[1] === ${p}${f}[1]))`})})),!o&&l.length&&n.push({name:r+vG,value:{},on:[{events:l.map((e=>({scale:e.scaleName}))),update:`${l.map((e=>e.expr)).join(" && ")} ? ${r+vG} : {}`}]})
const u=`unit: ${vY(e)}, fields: ${i}, values`
return n.concat(Object.assign(Object.assign({name:r+hY},a?{init:`{${u}: ${tG(a)}}`}:{}),s.length?{on:[{events:[{signal:s.join(" || ")}],update:`${s.join(" && ")} ? {${u}: [${s}]} : null`}]}:{}))},marks:(e,t,n)=>{const r=t.name,{x:i,y:o}=t.project.hasChannel,a=null==i?void 0:i.signals.visual,s=null==o?void 0:o.signals.visual,l=`data(${Et(t.name+dY)})`
if(pG.defined(t)||!i&&!o)return n
const u={x:void 0!==i?{signal:`${a}[0]`}:{value:0},y:void 0!==o?{signal:`${s}[0]`}:{value:0},x2:void 0!==i?{signal:`${a}[1]`}:{field:{group:"width"}},y2:void 0!==o?{signal:`${s}[1]`}:{field:{group:"height"}}}
if("global"===t.resolve)for(const m of Yz(u))u[m]=[Object.assign({test:`${l}.length && ${l}[0].unit === ${vY(e)}`},u[m]),{value:0}]
const c=t.mark,{fill:f,fillOpacity:d,cursor:h}=c,p=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["fill","fillOpacity","cursor"]),g=Yz(p).reduce(((e,t)=>(e[t]=[{test:[void 0!==i&&`${a}[0] !== ${a}[1]`,void 0!==o&&`${s}[0] !== ${s}[1]`].filter((e=>e)).join(" && "),value:p[t]},{value:null}],e)),{})
return[{name:`${r+yG}_bg`,type:"rect",clip:!0,encode:{enter:{fill:{value:f},fillOpacity:{value:d}},update:u}},...n,{name:r+yG,type:"rect",clip:!0,encode:{enter:Object.assign(Object.assign({},h?{cursor:{value:h}}:{}),{fill:{value:"transparent"}}),update:Object.assign(Object.assign({},u),g)}}]}},xG=bG
function _G(e,t){return e.events.reduce(((e,n)=>n.between?t(e,n):(WB(`${n} is not an ordered event stream for interval selections.`),e)),[])}const wG={defined:e=>"point"===e.type,signals:(e,t,n)=>{var r
const i=t.name,o=i+uG,a=t.project,s="(item().isVoronoi ? datum.datum : datum)",l=Xz(null!==(r=e.component.selection)&&void 0!==r?r:{}).reduce(((e,t)=>"interval"===t.type?e.concat(t.name+yG):e),[]).map((e=>`indexof(item().mark.name, '${e}') < 0`)).join(" && "),u="datum && item().mark.marktype !== 'group' && indexof(item().mark.role, 'legend') < 0"+(l?` && ${l}`:"")
let c=`unit: ${vY(e)}, `
t.project.hasSelectionId?c+=`_vgsid_: ${s}[${Et(eV)}]`:c+=`fields: ${o}, values: [${a.items.map((t=>{const n=e.fieldDef(t.channel)
return(null==n?void 0:n.bin)?`[${s}[${Et(e.vgField(t.channel,{}))}], ${s}[${Et(e.vgField(t.channel,{binSuffix:"end"}))}]]`:`${s}[${Et(t.field)}]`})).join(", ")}]`
const f=t.events
return n.concat([{name:i+hY,on:f?[{events:f,update:`${u} ? {${c}} : null`,force:!0}]:[]}])}},OG=wG
function kG(e,t,n,r){const i=pZ(t)&&t.condition,o=r(t)
if(i){const t=Ve(i).map((t=>{const n=r(t)
if(function(e){return e.param}(t)){const{param:r,empty:i}=t,o=EY(e,{param:r,empty:i})
return Object.assign({test:o},n)}{const r=SY(e,t.test)
return Object.assign({test:r},n)}}))
return{[n]:[...t,...void 0!==o?[o]:[]]}}return void 0!==o?{[n]:o}:{}}function EG(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text"
const n=e.encoding[t]
return kG(e,n,t,(t=>AG(t,e.config)))}function AG(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"datum"
if(e){if(kZ(e))return WL(e.value)
if(wZ(e)){const{format:r,formatType:i}=BZ(e)
return Zq({fieldOrDatumDef:e,format:r,formatType:i,expr:n,config:t})}}}function SG(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{encoding:n,markDef:r,config:i,stack:o}=e,a=n.tooltip
if(_e(a))return{tooltip:CG({tooltip:a},o,i,t)}
{const s=t.reactiveGeom?"datum.datum":"datum"
return kG(e,a,"tooltip",(e=>{const a=AG(e,i,s)
if(a)return a
if(null===e)return
let l=XL("tooltip",r,i)
return!0===l&&(l={content:"encoding"}),yt(l)?{value:l}:we(l)?$L(l)?l:"encoding"===l.content?CG(n,o,i,t):{signal:s}:void 0}))}}function DG(e,t,n){let{reactiveGeom:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const i={},o=r?"datum.datum":"datum",a=[]
function s(r,s){const l=wR(s),u=OZ(r)?r:Object.assign(Object.assign({},r),{type:e[l].type}),c=Ve(u.title||LZ(u,n)).join(", ")
let f
if(HR(s)){const t="x"===s?"x2":"y2",r=qZ(e[t])
if(SL(u.bin)&&r){const e=jZ(u,{expr:o}),a=jZ(r,{expr:o}),{format:s,formatType:l}=BZ(u)
f=Kq(e,a,s,l,n),i[t]=!0}}if((HR(s)||s===MI||s===DI)&&t&&t.fieldChannel===s&&"normalize"===t.offset){const{format:e,formatType:t}=BZ(u)
f=Zq({fieldOrDatumDef:u,format:e,formatType:t,expr:o,config:n,normalizeStack:!0}).signal}null!=f||(f=AG(u,n,o).signal),a.push({channel:s,key:c,value:f})}bW(e,((e,t)=>{yZ(e)?s(e,t):gZ(e)&&s(e.condition,t)}))
const l={}
for(const{channel:u,key:c,value:f}of a)i[u]||l[c]||(l[c]=f)
return l}function CG(e,t,n){let{reactiveGeom:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const i=DG(e,t,n,{reactiveGeom:r}),o=Jz(i).map((e=>{let[t,n]=e
return`"${t}": ${n}`}))
return o.length>0?{signal:`{${o.join(", ")}}`}:void 0}function MG(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{markDef:r,encoding:i,config:o}=t,{vgChannel:a}=n
let{defaultRef:s,defaultValue:l}=n
void 0===s&&(null!=l||(l=XL(e,r,o,{vgChannel:a,ignoreVgConfig:!0})),void 0!==l&&(s=WL(l)))
const u=i[e]
return kG(t,u,null!=a?a:e,(n=>Lq({channel:e,channelDef:n,markDef:r,config:o,scaleName:t.scaleName(e),scale:t.getScaleComponent(e),stack:null,defaultRef:s})))}function jG(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{filled:void 0}
var n,r,i,o
const{markDef:a,encoding:s,config:l}=e,{type:u}=a,c=null!==(n=t.filled)&&void 0!==n?n:XL("filled",a,l),f=zz(["bar","point","circle","square","geoshape"],u)?"transparent":void 0,d=null!==(i=null!==(r=XL(!0===c?"color":void 0,a,l,{vgChannel:"fill"}))&&void 0!==r?r:l.mark[!0===c&&"color"])&&void 0!==i?i:f,h=null!==(o=XL(!1===c?"color":void 0,a,l,{vgChannel:"stroke"}))&&void 0!==o?o:l.mark[!1===c&&"color"],p=c?"fill":"stroke",g=Object.assign(Object.assign({},d?{fill:WL(d)}:{}),h?{stroke:WL(h)}:{})
return a.color&&(c?a.fill:a.stroke)&&WB(_B("property",{fill:"fill"in a,stroke:"stroke"in a})),Object.assign(Object.assign(Object.assign(Object.assign({},g),MG("color",e,{vgChannel:p,defaultValue:c?d:h})),MG("fill",e,{defaultValue:s.fill?d:void 0})),MG("stroke",e,{defaultValue:s.stroke?h:void 0}))}function FG(e){let{channel:t,markDef:n,encoding:r={},model:i,bandPosition:o}=e
const a=`${t}Offset`,s=n[a],l=r[a]
if(("xOffset"===a||"yOffset"===a)&&l)return{offsetType:"encoding",offset:Lq({channel:a,channelDef:l,markDef:n,config:null==i?void 0:i.config,scaleName:i.scaleName(a),scale:i.getScaleComponent(a),stack:null,defaultRef:WL(s),bandPosition:o})}
const u=n[a]
return u?{offsetType:"visual",offset:u}:{}}function TG(e,t,n){let{defaultPos:r,vgChannel:i}=n
const{encoding:o,markDef:a,config:s,stack:l}=t,u=o[e],c=o[kR(e)],f=t.scaleName(e),d=t.getScaleComponent(e),{offset:h,offsetType:p}=FG({channel:e,markDef:a,encoding:o,model:t,bandPosition:.5}),g=NG({model:t,defaultPos:r,channel:e,scaleName:f,scale:d}),m=!u&&HR(e)&&(o.latitude||o.longitude)?{field:t.getName(e)}:function(e){const{channel:t,channelDef:n,scaleName:r,stack:i,offset:o,markDef:a}=e
if(wZ(n)&&i&&t===i.fieldChannel){if(yZ(n)){let e=n.bandPosition
if(void 0!==e||"text"!==a.type||"radius"!==t&&"theta"!==t||(e=.5),void 0!==e)return Rq({scaleName:r,fieldOrDatumDef:n,startSuffix:"start",bandPosition:e,offset:o})}return Iq(n,r,{suffix:"end"},{offset:o})}return $q(e)}({channel:e,channelDef:u,channel2Def:c,markDef:a,config:s,scaleName:f,scale:d,stack:l,offset:h,defaultRef:g,bandPosition:"encoding"===p?0:void 0})
return m?{[i||e]:m}:void 0}function NG(e){let{model:t,defaultPos:n,channel:r,scaleName:i,scale:o}=e
const{markDef:a,config:s}=t
return()=>{const e=wR(r),l=OR(r),u=XL(r,a,s,{vgChannel:l})
if(void 0!==u)return Bq(r,u)
switch(n){case"zeroOrMin":case"zeroOrMax":if(i){const e=o.get("type")
if(zz(["log",TU,NU],e));else if(o.domainDefinitelyIncludesZero())return{scale:i,value:0}}if("zeroOrMin"===n)return"y"===e?{field:{group:"height"}}:{value:0}
switch(e){case"radius":return{signal:`min(${t.width.signal},${t.height.signal})/2`}
case"theta":return{signal:"2*PI"}
case"x":return{field:{group:"width"}}
case"y":return{value:0}}break
case"mid":{const e=t[ER(r)]
return Object.assign(Object.assign({},e),{mult:.5})}}}}const $G={left:"x",center:"xc",right:"x2"},PG={top:"y",middle:"yc",bottom:"y2"}
function zG(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"middle"
if("radius"===e||"theta"===e)return OR(e)
const i="x"===e?"align":"baseline",o=XL(i,t,n)
let a
return $L(o)?(WB(DB(i)),a=void 0):a=o,"x"===e?$G[a||("top"===r?"left":"center")]:PG[a||r]}function IG(e,t,n){let{defaultPos:r,defaultPos2:i,range:o}=n
return o?RG(e,t,{defaultPos:r,defaultPos2:i}):TG(e,t,{defaultPos:r})}function RG(e,t,n){let{defaultPos:r,defaultPos2:i}=n
const{markDef:o,config:a}=t,s=kR(e),l=ER(e),u=function(e,t,n){const{encoding:r,mark:i,markDef:o,stack:a,config:s}=e,l=wR(n),u=ER(n),c=OR(n),f=r[l],d=e.scaleName(l),h=e.getScaleComponent(l),{offset:p}=FG(n in r||n in o?{channel:n,markDef:o,encoding:r,model:e}:{channel:l,markDef:o,encoding:r,model:e})
if(!f&&("x2"===n||"y2"===n)&&(r.latitude||r.longitude)){const t=ER(n),r=e.markDef[t]
return null!=r?{[t]:{value:r}}:{[c]:{field:e.getName(n)}}}const g=function(e){let{channel:t,channelDef:n,channel2Def:r,markDef:i,config:o,scaleName:a,scale:s,stack:l,offset:u,defaultRef:c}=e
return wZ(n)&&l&&t.charAt(0)===l.fieldChannel.charAt(0)?Iq(n,a,{suffix:"start"},{offset:u}):$q({channel:t,channelDef:r,scaleName:a,scale:s,stack:l,markDef:i,config:o,offset:u,defaultRef:c})}({channel:n,channelDef:f,channel2Def:r[n],markDef:o,config:s,scaleName:d,scale:h,stack:a,offset:p,defaultRef:void 0})
return void 0!==g?{[c]:g}:LG(n,o)||LG(n,{[n]:KL(n,o,s.style),[u]:KL(u,o,s.style)})||LG(n,s[i])||LG(n,s.mark)||{[c]:NG({model:e,defaultPos:t,channel:n,scaleName:d,scale:h})()}}(t,i,s),c=u[l]?zG(e,o,a):OR(e)
return Object.assign(Object.assign({},TG(e,t,{defaultPos:r,vgChannel:c})),u)}function LG(e,t){const n=ER(e),r=OR(e)
if(void 0!==t[r])return{[r]:Bq(e,t[r])}
if(void 0!==t[e])return{[r]:Bq(e,t[e])}
if(t[n]){const r=t[n]
if(!Tq(r))return{[n]:Bq(e,r)}
WB(function(e){return`Position range does not support relative band size for ${e}.`}(n))}}function BG(e,t){var n,r
const{config:i,encoding:o,markDef:a}=e,s=a.type,l=kR(t),u=ER(t),c=o[t],f=o[l],d=e.getScaleComponent(t),h=d?d.get("type"):void 0,p=a.orient,g=null!==(r=null!==(n=o[u])&&void 0!==n?n:o.size)&&void 0!==r?r:XL("size",a,i,{vgChannel:u}),m="bar"===s&&("x"===t?"vertical"===p:"horizontal"===p)
return!yZ(c)||!(AL(c.bin)||SL(c.bin)||c.timeUnit&&!f)||g&&!Tq(g)||HU(h)?(wZ(c)&&HU(h)||m)&&!f?function(e,t,n){const{markDef:r,encoding:i,config:o,stack:a}=n,s=r.orient,l=n.scaleName(t),u=n.getScaleComponent(t),c=ER(t),f=kR(t),d=function(e){switch(e){case wI:return"xOffset"
case OI:return"yOffset"
case kI:return"x2Offset"
case EI:return"y2Offset"
case MI:return"thetaOffset"
case DI:return"radiusOffset"
case jI:return"theta2Offset"
case CI:return"radius2Offset"}}(t),h=n.scaleName(d),p="horizontal"===s&&"y"===t||"vertical"===s&&"x"===t
let g;(i.size||r.size)&&(p?g=MG("size",n,{vgChannel:c,defaultRef:WL(r.size)}):WB(function(e){return`Cannot apply size to non-oriented mark "${e}".`}(r.type)))
const m=!!g,y=dZ({channel:t,fieldDef:e,markDef:r,config:o,scaleType:null==u?void 0:u.get("type"),useVlSizeChannel:p})
g=g||{[c]:UG(c,h||l,u,o,y)}
const v=zG(t,r,o,"band"===(null==u?void 0:u.get("type"))&&Tq(y)&&!m?"top":"middle"),b="xc"===v||"yc"===v,{offset:x,offsetType:_}=FG({channel:t,markDef:r,encoding:i,model:n,bandPosition:b?.5:0}),w=$q({channel:t,channelDef:e,markDef:r,config:o,scaleName:l,scale:u,stack:a,offset:x,defaultRef:NG({model:n,defaultPos:"mid",channel:t,scaleName:l,scale:u}),bandPosition:b?"encoding"===_?0:.5:$L(y)?{signal:`(1-${y})/2`}:Tq(y)?(1-y.band)/2:0})
if(c)return Object.assign({[v]:w},g)
{const e=OR(f),t=g[c],n=x?Object.assign(Object.assign({},t),{offset:x}):t
return{[v]:w,[e]:_e(w)?[w[0],Object.assign(Object.assign({},w[1]),{offset:n})]:Object.assign(Object.assign({},w),{offset:n})}}}(c,t,e):RG(t,e,{defaultPos:"zeroOrMax",defaultPos2:"zeroOrMin"}):function(e){let{fieldDef:t,fieldDef2:n,channel:r,model:i}=e
var o,a,s
const{config:l,markDef:u,encoding:c}=i,f=i.getScaleComponent(r),d=i.scaleName(r),h=f?f.get("type"):void 0,p=f.get("reverse"),g=dZ({channel:r,fieldDef:t,markDef:u,config:l,scaleType:h}),m=null===(o=i.component.axes[r])||void 0===o?void 0:o[0],y=null!==(a=null==m?void 0:m.get("translate"))&&void 0!==a?a:.5,v=HR(r)&&null!==(s=XL("binSpacing",u,l))&&void 0!==s?s:0,b=kR(r),x=OR(r),_=OR(b),{offset:w}=FG({channel:r,markDef:u,encoding:c,model:i,bandPosition:0}),O=$L(g)?{signal:`(1-${g.signal})/2`}:Tq(g)?(1-g.band)/2:.5
if(AL(t.bin)||t.timeUnit)return{[_]:ZG({fieldDef:t,scaleName:d,bandPosition:O,offset:qG(b,v,p,y,w)}),[x]:ZG({fieldDef:t,scaleName:d,bandPosition:$L(O)?{signal:`1-${O.signal}`}:1-O,offset:qG(r,v,p,y,w)})}
if(SL(t.bin)){const e=Iq(t,d,{},{offset:qG(b,v,p,y,w)})
if(yZ(n))return{[_]:e,[x]:Iq(n,d,{},{offset:qG(r,v,p,y,w)})}
if(DL(t.bin)&&t.bin.step)return{[_]:e,[x]:{signal:`scale("${d}", ${jZ(t,{expr:"datum"})} + ${t.bin.step})`,offset:qG(r,v,p,y,w)}}}WB(RB(b))}({fieldDef:c,fieldDef2:f,channel:t,model:e})}function UG(e,t,n,r,i){if(Tq(i)){if(!n)return{mult:i.band,field:{group:e}}
{const e=n.get("type")
if("band"===e){let e=`bandwidth('${t}')`
return 1!==i.band&&(e=`${i.band} * ${e}`),{signal:`max(0.25, ${e})`}}1!==i.band&&(WB(function(e){return`Cannot use the relative band size with ${e} scale.`}(e)),i=void 0)}}else{if($L(i))return i
if(i)return{value:i}}if(n){const e=n.get("range")
if(PL(e)&&gt(e.step))return{value:e.step-2}}return{value:mV(r.view,e)-2}}function qG(e,t,n,r,i){if(nR(e))return 0
const o="x"===e||"y2"===e?-t/2:t/2
if($L(n)||$L(i)||$L(r)){const e=GL(n),t=GL(i),a=GL(r)
return{signal:(a?`${a} + `:"")+(e?`(${e} ? -1 : 1) * `:"")+(t?`(${t} + ${o})`:o)}}return i=i||0,r+(n?-i-o:+i+o)}function ZG(e){let{fieldDef:t,scaleName:n,bandPosition:r,offset:i}=e
return Rq({scaleName:n,fieldOrDatumDef:t,bandPosition:r,offset:i})}const WG=new Set(["aria","width","height"])
function VG(e,t){const{fill:n,stroke:r}="include"===t.color?jG(e):{}
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},function(e,t){return IL.reduce(((n,r)=>(WG.has(r)||void 0===e[r]||"ignore"===t[r]||(n[r]=WL(e[r])),n)),{})}(e.markDef,t)),HG(e,"fill",n)),HG(e,"stroke",r)),MG("opacity",e)),MG("fillOpacity",e)),MG("strokeOpacity",e)),MG("strokeWidth",e)),MG("strokeDash",e)),function(e){const{encoding:t,mark:n}=e,r=t.order
return!Aq(n)&&kZ(r)?kG(e,r,"zindex",(e=>WL(e.value))):{}}(e)),SG(e)),EG(e,"href")),function(e){const{markDef:t,config:n}=e,r=XL("aria",t,n)
return!1===r?{}:Object.assign(Object.assign(Object.assign({},r?{aria:r}:{}),function(e){const{mark:t,markDef:n,config:r}=e
if(!1===r.aria)return{}
const i=XL("ariaRoleDescription",n,r)
return null!=i?{ariaRoleDescription:{value:i}}:t in RL?{}:{ariaRoleDescription:{value:t}}}(e)),function(e){const{encoding:t,markDef:n,config:r,stack:i}=e,o=t.description
if(o)return kG(e,o,"description",(t=>AG(t,e.config)))
const a=XL("description",n,r)
if(null!=a)return{description:WL(a)}
if(!1===r.aria)return{}
const s=DG(t,i,r)
return Gz(s)?void 0:{description:{signal:Jz(s).map(((e,t)=>{let[n,r]=e
return`"${t>0?"; ":""}${n}: " + (${r})`})).join(" + ")}}}(e))}(e))}function HG(e,t,n){const{config:r,mark:i,markDef:o}=e
if("hide"===XL("invalid",o,r)&&n&&!Aq(i)){const r=function(e,t){let{invalid:n=!1,channels:r}=t
const i=r.reduce(((t,n)=>{const r=e.getScaleComponent(n)
if(r){const i=r.get("type"),o=e.vgField(n,{expr:"datum"})
o&&GU(i)&&(t[o]=!0)}return t}),{}),o=Yz(i)
if(o.length>0){const e=n?"||":"&&"
return o.map((e=>zq(e,n))).join(` ${e} `)}}(e,{invalid:!0,channels:cL})
if(r)return{[t]:[{test:r,value:null},...Ve(n)]}}return n?{[t]:n}:{}}function GG(e){const{config:t,markDef:n}=e
if(XL("invalid",n,t)){const t=function(e,t){let{invalid:n=!1,channels:r}=t
const i=r.reduce(((t,n)=>{var r
const i=e.getScaleComponent(n)
if(i){const o=i.get("type"),a=e.vgField(n,{expr:"datum",binSuffix:(null===(r=e.stack)||void 0===r?void 0:r.impute)?"mid":void 0})
a&&GU(o)&&(t[a]=!0)}return t}),{}),o=Yz(i)
if(o.length>0){const e=n?"||":"&&"
return o.map((e=>zq(e,n))).join(` ${e} `)}}(e,{channels:VR})
if(t)return{defined:{signal:t}}}return{}}function YG(e,t){if(void 0!==t)return{[e]:WL(t)}}const XG="voronoi",JG={defined:e=>"point"===e.type&&e.nearest,parse:(e,t)=>{if(t.events)for(const n of t.events)n.markname=e.getName(XG)},marks:(e,t,n)=>{const{x:r,y:i}=t.project.hasChannel,o=e.mark
if(Aq(o))return WB(`The "nearest" transform is not supported for ${o} marks.`),n
const a={name:e.getName(XG),type:"path",interactive:!0,from:{data:e.getName("marks")},encode:{update:Object.assign({fill:{value:"transparent"},strokeWidth:{value:.35},stroke:{value:"transparent"},isVoronoi:{value:!0}},SG(e,{reactiveGeom:!0}))},transform:[{type:"voronoi",x:{expr:r||!i?"datum.datum.x || 0":"0"},y:{expr:i||!r?"datum.datum.y || 0":"0"},size:[e.getSizeSignalRef("width"),e.getSizeSignalRef("height")]}]}
let s=0,l=!1
return n.forEach(((t,n)=>{var r
const i=null!==(r=t.name)&&void 0!==r?r:""
i===e.component.mark[0].name?s=n:i.indexOf(XG)>=0&&(l=!0)})),l||n.splice(s+1,0,a),n}},KG=JG,QG={defined:e=>"point"===e.type&&"global"===e.resolve&&e.bind&&"scales"!==e.bind&&!nV(e.bind),parse:(e,t,n)=>xY(t,n),topLevelSignals:(e,t,n)=>{const r=t.name,i=t.project,o=t.bind,a=t.init&&t.init[0],s=KG.defined(t)?"(item().isVoronoi ? datum.datum : datum)":"datum"
return i.items.forEach(((e,i)=>{var l,u
const c=Qz(`${r}_${e.field}`)
n.filter((e=>e.name===c)).length||n.unshift(Object.assign(Object.assign({name:c},a?{init:tG(a[i])}:{value:null}),{on:t.events?[{events:t.events,update:`datum && item().mark.marktype !== 'group' ? ${s}[${Et(e.field)}] : null`}]:[],bind:null!==(u=null!==(l=o[e.field])&&void 0!==l?l:o[e.channel])&&void 0!==u?u:o}))})),n},signals:(e,t,n)=>{const r=t.name,i=t.project,o=n.filter((e=>e.name===r+hY))[0],a=r+uG,s=i.items.map((e=>Qz(`${r}_${e.field}`))),l=s.map((e=>`${e} !== null`)).join(" && ")
return s.length&&(o.update=`${l} ? {fields: ${a}, values: [${s.join(", ")}]} : null`),delete o.value,delete o.on,n}},eY=QG,tY="_toggle",nY={defined:e=>"point"===e.type&&!!e.toggle,signals:(e,t,n)=>n.concat({name:t.name+tY,value:!1,on:[{events:t.events,update:t.toggle}]}),modifyExpr:(e,t)=>{const n=t.name+hY,r=t.name+tY
return`${r} ? null : ${n}, `+("global"===t.resolve?`${r} ? null : true, `:`${r} ? null : {unit: ${vY(e)}}, `)+`${r} ? ${n} : null`}},rY={defined:e=>void 0!==e.clear&&!1!==e.clear,parse:(e,t)=>{t.clear&&(t.clear=yt(t.clear)?CT(t.clear,"view"):t.clear)},topLevelSignals:(e,t,n)=>{if(eY.defined(t))for(const r of t.project.items){const e=n.findIndex((e=>e.name===Qz(`${t.name}_${r.field}`)));-1!==e&&n[e].on.push({events:t.clear,update:"null"})}return n},signals:(e,t,n)=>{function r(e,r){-1!==e&&n[e].on&&n[e].on.push({events:t.clear,update:r})}if("interval"===t.type)for(const i of t.project.items){const e=n.findIndex((e=>e.name===i.signals.visual))
r(e,"[0, 0]"),-1===e&&r(n.findIndex((e=>e.name===i.signals.data)),"null")}else{let e=n.findIndex((e=>e.name===t.name+hY))
r(e,"null"),nY.defined(t)&&(e=n.findIndex((e=>e.name===t.name+tY)),r(e,"false"))}return n}},iY={defined:e=>{const t="global"===e.resolve&&e.bind&&nV(e.bind),n=1===e.project.items.length&&e.project.items[0].field!==eV
return t&&!n&&WB("Legend bindings are only supported for selections over an individual field or encoding channel."),t&&n},parse:(e,t,n)=>{var r
const i=Mz(n)
if(i.select=yt(i.select)?{type:i.select,toggle:t.toggle}:Object.assign(Object.assign({},i.select),{toggle:t.toggle}),xY(t,i),we(n.select)&&(n.select.on||n.select.clear)){const e='event.item && indexof(event.item.mark.role, "legend") < 0'
for(const n of t.events)n.filter=Ve(null!==(r=n.filter)&&void 0!==r?r:[]),n.filter.includes(e)||n.filter.push(e)}const o=rV(t.bind)?t.bind.legend:"click",a=yt(o)?CT(o,"view"):Ve(o)
t.bind={legend:{merge:a}}},topLevelSignals:(e,t,n)=>{const r=t.name,i=rV(t.bind)&&t.bind.legend,o=e=>t=>{const n=Mz(t)
return n.markname=e,n}
for(const a of t.project.items){if(!a.hasLegend)continue
const e=`${Qz(a.field)}_legend`,s=`${r}_${e}`
if(0===n.filter((e=>e.name===s)).length){const r=i.merge.map(o(`${e}_symbols`)).concat(i.merge.map(o(`${e}_labels`))).concat(i.merge.map(o(`${e}_entries`)))
n.unshift(Object.assign(Object.assign({name:s},t.init?{}:{value:null}),{on:[{events:r,update:"datum.value || item().items[0].items[0].datum.value",force:!0},{events:i.merge,update:`!event.item || !datum ? null : ${s}`,force:!0}]}))}}return n},signals:(e,t,n)=>{const r=t.name,i=t.project,o=n.find((e=>e.name===r+hY)),a=r+uG,s=i.items.filter((e=>e.hasLegend)).map((e=>Qz(`${r}_${Qz(e.field)}_legend`))),l=`${s.map((e=>`${e} !== null`)).join(" && ")} ? {fields: ${a}, values: [${s.join(", ")}]} : null`
t.events&&s.length>0?o.on.push({events:s.map((e=>({signal:e}))),update:l}):s.length>0&&(o.update=l,delete o.value,delete o.on)
const u=n.find((e=>e.name===r+tY)),c=rV(t.bind)&&t.bind.legend
return u&&(t.events?u.on.push(Object.assign(Object.assign({},u.on[0]),{events:c})):u.on[0].events=c),n}},oY="_translate_anchor",aY="_translate_delta",sY={defined:e=>"interval"===e.type&&e.translate,signals:(e,t,n)=>{const r=t.name,i=pG.defined(t),o=r+oY,{x:a,y:s}=t.project.hasChannel
let l=CT(t.translate,"scope")
return i||(l=l.map((e=>(e.between[0].markname=r+yG,e)))),n.push({name:o,value:{},on:[{events:l.map((e=>e.between[0])),update:"{x: x(unit), y: y(unit)"+(void 0!==a?`, extent_x: ${i?gG(e,wI):`slice(${a.signals.visual})`}`:"")+(void 0!==s?`, extent_y: ${i?gG(e,OI):`slice(${s.signals.visual})`}`:"")+"}"}]},{name:r+aY,value:{},on:[{events:l,update:`{x: ${o}.x - x(unit), y: ${o}.y - y(unit)}`}]}),void 0!==a&&lY(e,t,a,"width",n),void 0!==s&&lY(e,t,s,"height",n),n}}
function lY(e,t,n,r,i){var o,a
const s=t.name,l=s+oY,u=s+aY,c=n.channel,f=pG.defined(t),d=i.filter((e=>e.name===n.signals[f?"data":"visual"]))[0],h=e.getSizeSignalRef(r).signal,p=e.getScaleComponent(c),g=p.get("type"),m=p.get("reverse"),y=`${l}.extent_${c}`,v=`${f?"log"===g?"panLog":"symlog"===g?"panSymlog":"pow"===g?"panPow":"panLinear":"panLinear"}(${y}, ${f?c===wI?m?"":"-":m?"-":"":""}${u}.${c} / ${f?`${h}`:`span(${y})`}${f?"pow"===g?`, ${null!==(o=p.get("exponent"))&&void 0!==o?o:1}`:"symlog"===g?`, ${null!==(a=p.get("constant"))&&void 0!==a?a:1}`:"":""})`
d.on.push({events:{signal:u},update:f?v:`clampRange(${v}, 0, ${h})`})}const uY="_zoom_delta",cY={defined:e=>"interval"===e.type&&e.zoom,signals:(e,t,n)=>{const r=t.name,i=pG.defined(t),o=r+uY,{x:a,y:s}=t.project.hasChannel,l=Et(e.scaleName(wI)),u=Et(e.scaleName(OI))
let c=CT(t.zoom,"scope")
return i||(c=c.map((e=>(e.markname=r+yG,e)))),n.push({name:r+"_zoom_anchor",on:[{events:c,update:i?"{"+[l?`x: invert(${l}, x(unit))`:"",u?`y: invert(${u}, y(unit))`:""].filter((e=>!!e)).join(", ")+"}":"{x: x(unit), y: y(unit)}"}]},{name:o,on:[{events:c,force:!0,update:"pow(1.001, event.deltaY * pow(16, event.deltaMode))"}]}),void 0!==a&&fY(e,t,a,"width",n),void 0!==s&&fY(e,t,s,"height",n),n}}
function fY(e,t,n,r,i){var o,a
const s=t.name,l=n.channel,u=pG.defined(t),c=i.filter((e=>e.name===n.signals[u?"data":"visual"]))[0],f=e.getSizeSignalRef(r).signal,d=e.getScaleComponent(l),h=d.get("type"),p=u?gG(e,l):c.name,g=s+uY,m=`${u?"log"===h?"zoomLog":"symlog"===h?"zoomSymlog":"pow"===h?"zoomPow":"zoomLinear":"zoomLinear"}(${p}, ${s}_zoom_anchor.${l}, ${g}${u?"pow"===h?`, ${null!==(o=d.get("exponent"))&&void 0!==o?o:1}`:"symlog"===h?`, ${null!==(a=d.get("constant"))&&void 0!==a?a:1}`:"":""})`
c.on.push({events:{signal:g},update:u?m:`clampRange(${m}, 0, ${f})`})}const dY="_store",hY="_tuple",pY="_modify",gY="vlSelectionResolve",mY=[OG,xG,dG,nY,eY,pG,iY,rY,sY,cY,KG]
function yY(e){let t=e.parent
for(;t&&!QJ(t);)t=t.parent
return t}function vY(e){let{escape:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{escape:!0},n=t?Et(e.name):e.name
const r=yY(e)
if(r){const{facet:e}=r
for(const t of lR)e[t]&&(n+=` + '__facet_${t}_' + (facet[${Et(r.vgField(t))}])`)}return n}function bY(e){var t
return Xz(null!==(t=e.component.selection)&&void 0!==t?t:{}).reduce(((e,t)=>e||t.project.hasSelectionId),!1)}function xY(e,t){!yt(t.select)&&t.select.on||delete e.events,!yt(t.select)&&t.select.clear||delete e.clear,!yt(t.select)&&t.select.toggle||delete e.toggle}function _Y(e){const t=[]
return"Identifier"===e.type?[e.name]:"Literal"===e.type?[e.value]:("MemberExpression"===e.type&&(t.push(..._Y(e.object)),t.push(..._Y(e.property))),t)}function wY(e){return"MemberExpression"===e.object.type?wY(e.object):"datum"===e.object.name}function OY(e){const t=mM(e),n=new Set
return t.visit((e=>{"MemberExpression"===e.type&&wY(e)&&n.add(_Y(e).slice(1).join("."))})),n}class kY extends oG{constructor(e,t,n){super(e),this.model=t,this.filter=n,this.expr=SY(this.model,this.filter,this),this._dependentFields=OY(this.expr)}clone(){return new kY(null,this.model,Mz(this.filter))}dependentFields(){return this._dependentFields}producedFields(){return new Set}assemble(){return{type:"filter",expr:this.expr}}hash(){return`Filter ${this.expr}`}}function EY(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"datum"
const i=yt(t)?t:t.param,o=Qz(i),a=Et(o+dY)
let s
try{s=e.getSelectionComponent(o,i)}catch(e){return`!!${o}`}if(s.project.timeUnit){const t=null!=n?n:e.component.data.raw,r=s.project.timeUnit.clone()
t.parent?r.insertAsParentOf(t):t.parent=r}const l=s.project.hasSelectionId?"vlSelectionIdTest(":"vlSelectionTest(",u="global"===s.resolve?")":`, ${Et(s.resolve)})`,c=`${l}${a}, ${r}${u}`,f=`length(data(${a}))`
return!1===t.empty?`${f} && ${c}`:`!${f} || ${c}`}function AY(e,t,n){const r=Qz(t),i=n.encoding
let o,a=n.field
try{o=e.getSelectionComponent(r,t)}catch(e){return r}if(i||a){if(i&&!a){const e=o.project.items.filter((e=>e.channel===i))
!e.length||e.length>1?(a=o.project.items[0].field,WB((e.length?"Multiple ":"No ")+`matching ${Et(i)} encoding found for selection ${Et(n.param)}. `+`Using "field": ${Et(a)}.`)):a=e[0].field}}else a=o.project.items[0].field,o.project.items.length>1&&WB(`A "field" or "encoding" must be specified when using a selection as a scale domain. Using "field": ${Et(a)}.`)
return`${o.name}[${Et(aI(a))}]`}function SY(e,t,n){return eI(t,(t=>yt(t)?t:function(e){return null==e?void 0:e.param}(t)?EY(e,t,n):wU(t)))}var DY=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function CY(e,t){if(e)return _e(e)&&!NL(e)?e.map((e=>LZ(e,t))).join(", "):e}function MY(e,t,n,r){var i,o,a,s,l
null!==(i=e.encode)&&void 0!==i||(e.encode={}),null!==(o=(s=e.encode)[t])&&void 0!==o||(s[t]={}),null!==(a=(l=e.encode[t]).update)&&void 0!==a||(l.update={}),e.encode[t].update[n]=r}function jY(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{header:!1}
var i,o
const a=e.combine(),{disable:s,orient:l,scale:u,labelExpr:c,title:f,zindex:d}=a,h=DY(a,["disable","orient","scale","labelExpr","title","zindex"])
if(!s){for(const e in h){const n=iW[e],r=h[e]
if(n&&n!==t&&"both"!==n)delete h[e]
else if(nW(r)){const{condition:t}=r,n=DY(r,["condition"]),i=Ve(t),o=tW[e]
if(o){const{vgProp:t,part:r}=o,a=[...i.map((e=>{const{test:t}=e,n=DY(e,["test"])
return Object.assign({test:SY(null,t)},n)})),n]
MY(h,r,t,a),delete h[e]}else if(null===o){const t={signal:i.map((e=>{const{test:t}=e,n=DY(e,["test"])
return`${SY(null,t)} ? ${HL(n)} : `})).join("")+HL(n)}
h[e]=t}}else if($L(r)){const t=tW[e]
if(t){const{vgProp:n,part:i}=t
MY(h,i,n,r),delete h[e]}}zz(["labelAlign","labelBaseline"],e)&&null===h[e]&&delete h[e]}if("grid"===t){if(!h.grid)return
if(h.encode){const{grid:e}=h.encode
h.encode=Object.assign({},e?{grid:e}:{}),Gz(h.encode)&&delete h.encode}return Object.assign(Object.assign({scale:u,orient:l},h),{domain:!1,labels:!1,aria:!1,maxExtent:0,minExtent:0,ticks:!1,zindex:cI(d,0)})}{if(!r.header&&e.mainExtracted)return
if(void 0!==c){let e=c;(null===(o=null===(i=h.encode)||void 0===i?void 0:i.labels)||void 0===o?void 0:o.update)&&$L(h.encode.labels.update.text)&&(e=sI(c,"datum.label",h.encode.labels.update.text.signal)),MY(h,"labels","text",{signal:e})}if(null===h.labelAlign&&delete h.labelAlign,h.encode){for(const t of rW)e.hasAxisPart(t)||delete h.encode[t]
Gz(h.encode)&&delete h.encode}const t=CY(f,n)
return Object.assign(Object.assign(Object.assign(Object.assign({scale:u,orient:l,grid:!1},t?{title:t}:{}),h),!1===n.aria?{aria:!1}:{}),{zindex:cI(d,0)})}}}function FY(e){const{axes:t}=e.component,n=[]
for(const r of VR)if(t[r])for(const i of t[r])if(!i.get("disable")&&!i.get("gridScale")){const t="x"===r?"height":"width",i=e.getSizeSignalRef(t).signal
t!==i&&n.push({name:t,update:i})}return n}function TY(e,t,n,r){return Object.assign.apply(null,[{},...e.map((e=>{if("axisOrient"===e){const e="x"===n?"bottom":"left",i=t["x"===n?"axisBottom":"axisLeft"]||{},o=t["x"===n?"axisTop":"axisRight"]||{},a=new Set([...Yz(i),...Yz(o)]),s={}
for(const t of a.values())s[t]={signal:`${r.signal} === "${e}" ? ${GL(i[t])} : ${GL(o[t])}`}
return s}return t[e]}))])}function NY(e,t){var n
const r=[{}]
for(const i of e){let e=null===(n=t[i])||void 0===n?void 0:n.style
if(e){e=Ve(e)
for(const n of e)r.push(t.style[n])}}return Object.assign.apply(null,r)}function $Y(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
var i
const o=QL(e,n,t)
if(void 0!==o)return{configFrom:"style",configValue:o}
for(const a of["vlOnlyAxisConfig","vgAxisConfig","axisConfigStyle"])if(void 0!==(null===(i=r[a])||void 0===i?void 0:i[e]))return{configFrom:a,configValue:r[a][e]}
return{}}const PY={scale:e=>{let{model:t,channel:n}=e
return t.scaleName(n)},format:e=>{let{fieldOrDatumDef:t,config:n,axis:r}=e
const{format:i,formatType:o}=r
return Hq(t,t.type,i,o,n,!0)},formatType:e=>{let{axis:t,fieldOrDatumDef:n,scaleType:r}=e
const{formatType:i}=t
return Gq(i,n,r)},grid:e=>{let{fieldOrDatumDef:t,axis:n,scaleType:r}=e
var i
return null!==(i=n.grid)&&void 0!==i?i:function(e,t){return!HU(e)&&yZ(t)&&!AL(null==t?void 0:t.bin)&&!SL(null==t?void 0:t.bin)}(r,t)},gridScale:e=>{let{model:t,channel:n}=e
return function(e,t){const n="x"===t?"y":"x"
if(e.getScaleComponent(n))return e.scaleName(n)}(t,n)},labelAlign:e=>{let{axis:t,labelAngle:n,orient:r,channel:i}=e
return t.labelAlign||RY(n,r,i)},labelAngle:e=>{let{labelAngle:t}=e
return t},labelBaseline:e=>{let{axis:t,labelAngle:n,orient:r,channel:i}=e
return t.labelBaseline||IY(n,r,i)},labelFlush:e=>{let{axis:t,fieldOrDatumDef:n,channel:r}=e
var i
return null!==(i=t.labelFlush)&&void 0!==i?i:function(e,t){if("x"===t&&zz(["quantitative","temporal"],e))return!0}(n.type,r)},labelOverlap:e=>{let{axis:t,fieldOrDatumDef:n,scaleType:r}=e
var i
return null!==(i=t.labelOverlap)&&void 0!==i?i:function(e,t,n,r){if(n&&!we(r)||"nominal"!==e&&"ordinal"!==e)return"log"!==t&&"symlog"!==t||"greedy"}(n.type,r,yZ(n)&&!!n.timeUnit,yZ(n)?n.sort:void 0)},orient:e=>{let{orient:t}=e
return t},tickCount:e=>{let{channel:t,model:n,axis:r,fieldOrDatumDef:i,scaleType:o}=e
var a
const s="x"===t?"width":"y"===t?"height":void 0,l=s?n.getSizeSignalRef(s):void 0
return null!==(a=r.tickCount)&&void 0!==a?a:function(e){let{fieldOrDatumDef:t,scaleType:n,size:r,values:i}=e
var o
if(!i&&!HU(n)&&"log"!==n){if(yZ(t)){if(AL(t.bin))return{signal:`ceil(${r.signal}/10)`}
if(t.timeUnit&&zz(["month","hours","day","quarter"],null===(o=uU(t.timeUnit))||void 0===o?void 0:o.unit))return}return{signal:`ceil(${r.signal}/40)`}}}({fieldOrDatumDef:i,scaleType:o,size:l,values:r.values})},title:e=>{let{axis:t,model:n,channel:r}=e
if(void 0!==t.title)return t.title
const i=LY(n,r)
if(void 0!==i)return i
const o=n.typedFieldDef(r),a="x"===r?"x2":"y2",s=n.fieldDef(a)
return tB(o?[uZ(o)]:[],yZ(s)?[uZ(s)]:[])},values:e=>{let{axis:t,fieldOrDatumDef:n}=e
return function(e,t){const n=e.values
return _e(n)?QZ(t,n):$L(n)?n:void 0}(t,n)},zindex:e=>{let{axis:t,fieldOrDatumDef:n,mark:r}=e
var i
return null!==(i=t.zindex)&&void 0!==i?i:function(e,t){return"rect"===e&&FZ(t)?1:0}(r,n)}}
function zY(e){return`(((${e.signal} % 360) + 360) % 360)`}function IY(e,t,n,r){if(void 0!==e){if("x"===n){if($L(e)){const n=zY(e)
return{signal:`(45 < ${n} && ${n} < 135) || (225 < ${n} && ${n} < 315) ? "middle" :(${n} <= 45 || 315 <= ${n}) === ${$L(t)?`(${t.signal} === "top")`:"top"===t} ? "bottom" : "top"`}}if(45<e&&e<135||225<e&&e<315)return"middle"
if($L(t)){const n=e<=45||315<=e?"===":"!=="
return{signal:`${t.signal} ${n} "top" ? "bottom" : "top"`}}return(e<=45||315<=e)==("top"===t)?"bottom":"top"}if($L(e)){const n=zY(e)
return{signal:`${n} <= 45 || 315 <= ${n} || (135 <= ${n} && ${n} <= 225) ? ${r?'"middle"':"null"} : (45 <= ${n} && ${n} <= 135) === ${$L(t)?`(${t.signal} === "left")`:"left"===t} ? "top" : "bottom"`}}if(e<=45||315<=e||135<=e&&e<=225)return r?"middle":null
if($L(t)){const n=45<=e&&e<=135?"===":"!=="
return{signal:`${t.signal} ${n} "left" ? "top" : "bottom"`}}return(45<=e&&e<=135)==("left"===t)?"top":"bottom"}}function RY(e,t,n){if(void 0===e)return
const r="x"===n,i=r?0:90,o=r?"bottom":"left"
if($L(e)){const n=zY(e)
return{signal:`(${i?`(${n} + 90)`:n} % 180 === 0) ? ${r?null:'"center"'} :(${i} < ${n} && ${n} < ${180+i}) === ${$L(t)?`(${t.signal} === "${o}")`:t===o} ? "left" : "right"`}}if((e+i)%180==0)return r?null:"center"
if($L(t)){const n=i<e&&e<180+i?"===":"!=="
return{signal:`${t.signal} ${n} "${o}" ? "left" : "right"`}}return(i<e&&e<180+i)==(t===o)?"left":"right"}function LY(e,t){const n="x"===t?"x2":"y2",r=e.fieldDef(t),i=e.fieldDef(n),o=r?r.title:void 0,a=i?i.title:void 0
return o&&a?nB(o,a):o||a||(void 0!==o?o:void 0!==a?a:void 0)}class BY extends oG{constructor(e,t){super(e),this.transform=t,this._dependentFields=OY(this.transform.calculate)}clone(){return new BY(null,Mz(this.transform))}static parseAllForSortIndex(e,t){return t.forEachFieldDef(((t,n)=>{if(EZ(t)&&iZ(t.sort)){const{field:r,timeUnit:i}=t,o=t.sort,a=o.map(((e,t)=>`${wU({field:r,timeUnit:i,equal:e})} ? ${t} : `)).join("")+o.length
e=new BY(e,{calculate:a,as:UY(t,n,{forAs:!0})})}})),e}producedFields(){return new Set([this.transform.as])}dependentFields(){return this._dependentFields}assemble(){return{type:"formula",expr:this.transform.calculate,as:this.transform.as}}hash(){return`Calculate ${$z(this.transform)}`}}function UY(e,t,n){return jZ(e,Object.assign({prefix:t,suffix:"sort_index"},null!=n?n:{}))}function qY(e,t){return zz(["top","bottom"],t)?"column":zz(["left","right"],t)||"row"===e?"row":"column"}function ZY(e,t,n,r){const i="row"===r?n.headerRow:"column"===r?n.headerColumn:n.headerFacet
return cI((t||{})[e],i[e],n.header[e])}function WY(e,t,n,r){const i={}
for(const o of e){const e=ZY(o,t||{},n,r)
void 0!==e&&(i[o]=e)}return i}const VY=["row","column"],HY=["header","footer"]
function GY(e,t){const n=e.component.layoutHeaders[t].title,r=e.config?e.config:void 0,i=e.component.layoutHeaders[t].facetFieldDef?e.component.layoutHeaders[t].facetFieldDef:void 0,{titleAnchor:o,titleAngle:a,titleOrient:s}=WY(["titleAnchor","titleAngle","titleOrient"],i.header,r,t),l=qY(t,s),u=mI(a)
return{name:`${t}-title`,type:"group",role:`${l}-title`,title:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({text:n},"row"===t?{orient:"left"}:{}),{style:"guide-title"}),XY(u,l)),YY(l,u,o)),rX(r,i,t,YW,HW))}}function YY(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"middle"
switch(n){case"start":return{align:"left"}
case"end":return{align:"right"}}const r=RY(t,"row"===e?"left":"top","row"===e?"y":"x")
return r?{align:r}:{}}function XY(e,t){const n=IY(e,"row"===t?"left":"top","row"===t?"y":"x",!0)
return n?{baseline:n}:{}}function JY(e,t){const n=e.component.layoutHeaders[t],r=[]
for(const i of HY)if(n[i])for(const o of n[i]){const a=eX(e,t,i,n,o)
null!=a&&r.push(a)}return r}function KY(e,t){var n
const{sort:r}=e
return rZ(r)?{field:jZ(r,{expr:"datum"}),order:null!==(n=r.order)&&void 0!==n?n:"ascending"}:_e(r)?{field:UY(e,t,{expr:"datum"}),order:"ascending"}:{field:jZ(e,{expr:"datum"}),order:null!=r?r:"ascending"}}function QY(e,t,n){const{format:r,formatType:i,labelAngle:o,labelAnchor:a,labelOrient:s,labelExpr:l}=WY(["format","formatType","labelAngle","labelAnchor","labelOrient","labelExpr"],e.header,n,t),u=Zq({fieldOrDatumDef:e,format:r,formatType:i,expr:"parent",config:n}).signal,c=qY(t,s)
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({text:{signal:l?sI(sI(l,"datum.label",u),"datum.value",jZ(e,{expr:"parent"})):u}},"row"===t?{orient:"left"}:{}),{style:"guide-label",frame:"group"}),XY(o,c)),YY(c,o,a)),rX(n,e,t,XW,GW))}function eX(e,t,n,r,i){if(i){let o=null
const{facetFieldDef:a}=r,s=e.config?e.config:void 0
if(a&&i.labels){const{labelOrient:e}=WY(["labelOrient"],a.header,s,t);("row"===t&&!zz(["top","bottom"],e)||"column"===t&&!zz(["left","right"],e))&&(o=QY(a,t,s))}const l=QJ(e)&&!oZ(e.facet),u=i.axes,c=(null==u?void 0:u.length)>0
if(o||c){const s="row"===t?"height":"width"
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({name:e.getName(`${t}_${n}`),type:"group",role:`${t}-${n}`},r.facetFieldDef?{from:{data:e.getName(`${t}_domain`)},sort:KY(a,t)}:{}),c&&l?{from:{data:e.getName(`facet_domain_${t}`)}}:{}),o?{title:o}:{}),i.sizeSignal?{encode:{update:{[s]:i.sizeSignal}}}:{}),c?{axes:u}:{})}}return null}const tX={column:{start:0,end:1},row:{start:1,end:0}}
function nX(e,t){return tX[t][e]}function rX(e,t,n,r,i){const o={}
for(const a of r){if(!i[a])continue
const r=ZY(a,null==t?void 0:t.header,e,n)
void 0!==r&&(o[i[a]]=r)}return o}function iX(e){return[...oX(e,"width"),...oX(e,"height"),...oX(e,"childWidth"),...oX(e,"childHeight")]}function oX(e,t){const n="width"===t?"x":"y",r=e.component.layoutSize.get(t)
if(!r||"merged"===r)return[]
const i=e.getSizeSignalRef(t).signal
if("step"===r){const t=e.getScaleComponent(n)
if(t){const r=t.get("type"),o=t.get("range")
if(HU(r)&&PL(o)){const r=e.scaleName(n)
return QJ(e.parent)&&"independent"===e.parent.component.resolve.scale[n]?[aX(r,o)]:[aX(r,o),{name:i,update:sX(r,t,`domain('${r}').length`)}]}}throw new Error("layout size is step although width/height is not step.")}if("container"==r){const t=i.endsWith("width"),n=t?"containerSize()[0]":"containerSize()[1]",r=`isFinite(${n}) ? ${n} : ${gV(e.config.view,t?"width":"height")}`
return[{name:i,init:r,on:[{update:r,events:"window:resize"}]}]}return[{name:i,value:r}]}function aX(e,t){const n=`${e}_step`
return $L(t.step)?{name:n,update:t.step.signal}:{name:n,value:t.step}}function sX(e,t,n){const r=t.get("type"),i=t.get("padding"),o=cI(t.get("paddingOuter"),i)
let a=t.get("paddingInner")
return a="band"===r?void 0!==a?a:i:1,`bandspace(${n}, ${GL(a)}, ${GL(o)}) * ${e}_step`}function lX(e){return"childWidth"===e?"width":"childHeight"===e?"height":e}function uX(e,t){return Yz(e).reduce(((n,r)=>{const i=e[r]
return Object.assign(Object.assign({},n),kG(t,i,r,(e=>WL(e.value))))}),{})}function cX(e,t){if(QJ(t))return"theta"===e?"independent":"shared"
if(tK(t))return"shared"
if(eK(t))return HR(e)||"theta"===e||"radius"===e?"independent":"shared"
throw new Error("invalid model type for resolve")}function fX(e,t){const n=e.scale[t],r=HR(t)?"axis":"legend"
return"independent"===n?("shared"===e[r][t]&&WB(function(e){return`Setting the scale to be independent for "${e}" means we also have to set the guide (axis or legend) to be independent.`}(t)),"independent"):e[r][t]||"shared"}const dX=Object.assign(Object.assign({},QW),{disable:1,labelExpr:1,selections:1,opacity:1,shape:1,stroke:1,fill:1,size:1,strokeWidth:1,strokeDash:1,encode:1}),hX=Yz(dX)
class pX extends RH{}const gX={symbols:function(e,t){let{fieldOrDatumDef:n,model:r,channel:i,legendCmpt:o,legendType:a}=t
var s,l,u,c,f,d,h,p
if("symbol"!==a)return
const{markDef:g,encoding:m,config:y,mark:v}=r,b=g.filled&&"trail"!==v
let x=Object.assign(Object.assign({},function(e,t,n){for(const r of n){const n=JL(r,t.markDef,t.config)
void 0!==n&&(e[r]=WL(n))}return e}({},r,Mq)),jG(r,{filled:b}))
const _=null!==(s=o.get("symbolOpacity"))&&void 0!==s?s:y.legend.symbolOpacity,w=null!==(l=o.get("symbolFillColor"))&&void 0!==l?l:y.legend.symbolFillColor,O=null!==(u=o.get("symbolStrokeColor"))&&void 0!==u?u:y.legend.symbolStrokeColor,k=void 0===_?null!==(c=mX(m.opacity))&&void 0!==c?c:g.opacity:void 0
if(x.fill)if("fill"===i||b&&i===PI)delete x.fill
else if(x.fill.field)w?delete x.fill:(x.fill=WL(null!==(f=y.legend.symbolBaseFillColor)&&void 0!==f?f:"black"),x.fillOpacity=WL(null!=k?k:1))
else if(_e(x.fill)){const e=null!==(p=null!==(h=yX(null!==(d=m.fill)&&void 0!==d?d:m.color))&&void 0!==h?h:g.fill)&&void 0!==p?p:b&&g.color
e&&(x.fill=WL(e))}if(x.stroke)if("stroke"===i||!b&&i===PI)delete x.stroke
else if(x.stroke.field||O)delete x.stroke
else if(_e(x.stroke)){const e=cI(yX(m.stroke||m.color),g.stroke,b?g.color:void 0)
e&&(x.stroke={value:e})}if(i!==UI){const e=yZ(n)&&bX(0,o,n)
e?x.opacity=[Object.assign({test:e},WL(null!=k?k:1)),WL(y.legend.unselectedOpacity)]:k&&(x.opacity=WL(k))}return x=Object.assign(Object.assign({},x),e),Gz(x)?void 0:x},gradient:function(e,t){let{model:n,legendType:r,legendCmpt:i}=t
var o
if("gradient"!==r)return
const{config:a,markDef:s,encoding:l}=n
let u={}
const c=void 0===(null!==(o=i.get("gradientOpacity"))&&void 0!==o?o:a.legend.gradientOpacity)?mX(l.opacity)||s.opacity:void 0
return c&&(u.opacity=WL(c)),u=Object.assign(Object.assign({},u),e),Gz(u)?void 0:u},labels:function(e,t){let{fieldOrDatumDef:n,model:r,channel:i,legendCmpt:o}=t
const a=r.legend(i)||{},s=r.config,l=yZ(n)?bX(0,o,n):void 0,u=l?[{test:l,value:1},{value:s.legend.unselectedOpacity}]:void 0,{format:c,formatType:f}=a
let d
Uq(f)?d=Vq({fieldOrDatumDef:n,field:"datum.value",format:c,formatType:f,config:s}):void 0===c&&void 0===f&&s.customFormatTypes&&("quantitative"===n.type&&s.numberFormatType?d=Vq({fieldOrDatumDef:n,field:"datum.value",format:s.numberFormat,formatType:s.numberFormatType,config:s}):"temporal"===n.type&&s.timeFormatType&&yZ(n)&&void 0===n.timeUnit&&(d=Vq({fieldOrDatumDef:n,field:"datum.value",format:s.timeFormat,formatType:s.timeFormatType,config:s})))
const h=Object.assign(Object.assign(Object.assign({},u?{opacity:u}:{}),d?{text:d}:{}),e)
return Gz(h)?void 0:h},entries:function(e,t){let{legendCmpt:n}=t
const r=n.get("selections")
return(null==r?void 0:r.length)?Object.assign(Object.assign({},e),{fill:{value:"transparent"}}):e}}
function mX(e){return vX(e,((e,t)=>Math.max(e,t.value)))}function yX(e){return vX(e,((e,t)=>cI(e,t.value)))}function vX(e,t){return function(e){const t=null==e?void 0:e.condition
return!!t&&(_e(t)||kZ(t))}(e)?Ve(e.condition).reduce(t,e.value):kZ(e)?e.value:void 0}function bX(e,t,n){const r=t.get("selections")
if(!(null==r?void 0:r.length))return
const i=Et(n.field)
return r.map((e=>`(!length(data(${Et(Qz(e)+dY)})) || (${e}[${i}] && indexof(${e}[${i}], datum.value) >= 0))`)).join(" || ")}const xX={direction:e=>{let{direction:t}=e
return t},format:e=>{let{fieldOrDatumDef:t,legend:n,config:r}=e
const{format:i,formatType:o}=n
return Hq(t,t.type,i,o,r,!1)},formatType:e=>{let{legend:t,fieldOrDatumDef:n,scaleType:r}=e
const{formatType:i}=t
return Gq(i,n,r)},gradientLength:e=>{var t,n
const{legend:r,legendConfig:i}=e
return null!==(n=null!==(t=r.gradientLength)&&void 0!==t?t:i.gradientLength)&&void 0!==n?n:function(e){let{legendConfig:t,model:n,direction:r,orient:i,scaleType:o}=e
const{gradientHorizontalMaxLength:a,gradientHorizontalMinLength:s,gradientVerticalMaxLength:l,gradientVerticalMinLength:u}=t
if(YU(o))return"horizontal"===r?"top"===i||"bottom"===i?wX(n,"width",s,a):s:wX(n,"height",u,l)}(e)},labelOverlap:e=>{let{legend:t,legendConfig:n,scaleType:r}=e
var i,o
return null!==(o=null!==(i=t.labelOverlap)&&void 0!==i?i:n.labelOverlap)&&void 0!==o?o:function(e){if(zz(["quantile","threshold","log","symlog"],e))return"greedy"}(r)},symbolType:e=>{let{legend:t,markDef:n,channel:r,encoding:i}=e
var o
return null!==(o=t.symbolType)&&void 0!==o?o:function(e,t,n,r){var i
if("shape"!==t){const e=null!==(i=yX(n))&&void 0!==i?i:r
if(e)return e}switch(e){case"bar":case"rect":case"image":case"square":return"square"
case"line":case"trail":case"rule":return"stroke"
case"arc":case"point":case"circle":case"tick":case"geoshape":case"area":case"text":return"circle"}}(n.type,r,i.shape,n.shape)},title:e=>{let{fieldOrDatumDef:t,config:n}=e
return IZ(t,n,{allowDisabling:!0})},type:e=>{let{legendType:t,scaleType:n,channel:r}=e
if(aR(r)&&YU(n)){if("gradient"===t)return}else if("symbol"===t)return
return t},values:e=>{let{fieldOrDatumDef:t,legend:n}=e
return function(e,t){const n=e.values
return _e(n)?QZ(t,n):$L(n)?n:void 0}(n,t)}}
function _X(e){let{legendConfig:t,legendType:n,orient:r,legend:i}=e
var o,a
return null!==(a=null!==(o=i.direction)&&void 0!==o?o:t[n?"gradientDirection":"symbolDirection"])&&void 0!==a?a:function(e,t){switch(e){case"top":case"bottom":return"horizontal"
case"left":case"right":case"none":case void 0:return
default:return"gradient"===t?"horizontal":void 0}}(r,n)}function wX(e,t,n,r){return{signal:`clamp(${e.getSizeSignalRef(t).signal}, ${n}, ${r})`}}function OX(e){const t=KJ(e)?function(e){const{encoding:t}=e,n={}
for(const r of[PI,...KW]){const i=ZZ(t[r])
i&&e.getScaleComponent(r)&&(r===RI&&yZ(i)&&i.type===jU||(n[r]=EX(e,r)))}return n}(e):function(e){const{legends:t,resolve:n}=e.component
for(const r of e.children){OX(r)
for(const i of Yz(r.component.legends))n.legend[i]=fX(e.component.resolve,i),"shared"===n.legend[i]&&(t[i]=AX(t[i],r.component.legends[i]),t[i]||(n.legend[i]="independent",delete t[i]))}for(const r of Yz(t))for(const t of e.children)t.component.legends[r]&&"shared"===n.legend[r]&&delete t.component.legends[r]
return t}(e)
return e.component.legends=t,t}function kX(e,t,n,r){switch(t){case"disable":return void 0!==n
case"values":return!!(null==n?void 0:n.values)
case"title":if("title"===t&&e===(null==r?void 0:r.title))return!0}return e===(n||{})[t]}function EX(e,t){var n,r,i
let o=e.legend(t)
const{markDef:a,encoding:s,config:l}=e,u=l.legend,c=new pX({},function(e,t){const n=e.scaleName(t)
if("trail"===e.mark){if("color"===t)return{stroke:n}
if("size"===t)return{strokeWidth:n}}return"color"===t?e.markDef.filled?{fill:n}:{stroke:n}:{[t]:n}}(e,t))
!function(e,t,n){var r,i,o,a
const s=null===(r=e.fieldDef(t))||void 0===r?void 0:r.field
for(const l of Xz(null!==(i=e.component.selection)&&void 0!==i?i:{})){const e=null!==(o=l.project.hasField[s])&&void 0!==o?o:l.project.hasChannel[t]
if(e&&iY.defined(l)){const t=null!==(a=n.get("selections"))&&void 0!==a?a:[]
t.push(l.name),n.set("selections",t,!1),e.hasLegend=!0}}}(e,t,c)
const f=void 0!==o?!o:u.disable
if(c.set("disable",f,void 0!==o),f)return c
o=o||{}
const d=e.getScaleComponent(t).get("type"),h=ZZ(s[t]),p=yZ(h)?null===(n=uU(h.timeUnit))||void 0===n?void 0:n.unit:void 0,g=o.orient||l.legend.orient||"right",m=function(e){const{legend:t}=e
return cI(t.type,function(e){let{channel:t,timeUnit:n,scaleType:r}=e
if(aR(t)){if(zz(["quarter","month","day"],n))return"symbol"
if(YU(r))return"gradient"}return"symbol"}(e))}({legend:o,channel:t,timeUnit:p,scaleType:d}),y={legend:o,channel:t,model:e,markDef:a,encoding:s,fieldOrDatumDef:h,legendConfig:u,config:l,scaleType:d,orient:g,legendType:m,direction:_X({legend:o,legendType:m,orient:g,legendConfig:u})}
for(const w of hX){if("gradient"===m&&w.startsWith("symbol")||"symbol"===m&&w.startsWith("gradient"))continue
const n=w in xX?xX[w](y):o[w]
if(void 0!==n){const r=kX(n,w,o,e.fieldDef(t));(r||void 0===l.legend[w])&&c.set(w,n,r)}}const v=null!==(r=null==o?void 0:o.encoding)&&void 0!==r?r:{},b=c.get("selections"),x={},_={fieldOrDatumDef:h,model:e,channel:t,legendCmpt:c,legendType:m}
for(const w of["labels","legend","title","symbols","gradient","entries"]){const t=uX(null!==(i=v[w])&&void 0!==i?i:{},e),n=w in gX?gX[w](t,_):t
void 0===n||Gz(n)||(x[w]=Object.assign(Object.assign(Object.assign({},(null==b?void 0:b.length)&&yZ(h)?{name:`${Qz(h.field)}_legend_${w}`}:{}),(null==b?void 0:b.length)?{interactive:!!b}:{}),{update:n}))}return Gz(x)||c.set("encode",x,!!(null==o?void 0:o.encoding)),c}function AX(e,t){var n,r,i,o
if(!e)return t.clone()
const a=e.getWithExplicit("orient"),s=t.getWithExplicit("orient")
if(a.explicit&&s.explicit&&a.value!==s.value)return
let l=!1
for(const u of hX){const n=ZH(e.getWithExplicit(u),t.getWithExplicit(u),u,"legend",((e,t)=>{switch(u){case"symbolType":return n=e,"circle"===(r=t).value?r:n
case"title":return rB(e,t)
case"type":return l=!0,BH("symbol")}var n,r
return qH(e,t,u,"legend")}))
e.setWithExplicit(u,n)}return l&&((null===(r=null===(n=e.implicit)||void 0===n?void 0:n.encode)||void 0===r?void 0:r.gradient)&&tI(e.implicit,["encode","gradient"]),(null===(o=null===(i=e.explicit)||void 0===i?void 0:i.encode)||void 0===o?void 0:o.gradient)&&tI(e.explicit,["encode","gradient"])),e}function SX(e){const t=e.component.legends,n={}
for(const i of Yz(t)){const r=e.getScaleComponent(i),o=Nz(r.get("domains"))
if(n[o])for(const e of n[o])AX(e,t[i])||n[o].push(t[i])
else n[o]=[t[i].clone()]}const r=Xz(n).flat().map((t=>function(e,t){var n,r,i
const o=e.combine(),{disable:a,labelExpr:s,selections:l}=o,u=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(o,["disable","labelExpr","selections"])
if(!a){if(!1===t.aria&&null==u.aria&&(u.aria=!1),null===(n=u.encode)||void 0===n?void 0:n.symbols){const e=u.encode.symbols.update
!e.fill||"transparent"===e.fill.value||e.stroke||u.stroke||(e.stroke={value:"transparent"})
for(const t of KW)u[t]&&delete e[t]}if(u.title||delete u.title,void 0!==s){let e=s;(null===(i=null===(r=u.encode)||void 0===r?void 0:r.labels)||void 0===i?void 0:i.update)&&$L(u.encode.labels.update.text)&&(e=sI(s,"datum.label",u.encode.labels.update.text.signal)),function(e,t,n,r){var i,o,a,s,l
null!==(i=e.encode)&&void 0!==i||(e.encode={}),null!==(o=(s=e.encode)[t])&&void 0!==o||(s[t]={}),null!==(a=(l=e.encode[t]).update)&&void 0!==a||(l.update={}),e.encode[t].update.text=r}(u,"labels",0,{signal:e})}return u}}(t,e.config))).filter((e=>void 0!==e))
return r}function DX(e){const t=e.component.projection
if(!t||t.merged)return[]
const n=t.combine(),{name:r}=n
if(t.data){const i={signal:`[${t.size.map((e=>e.signal)).join(", ")}]`},o=t.data.reduce(((t,n)=>{const r=$L(n)?n.signal:`data('${e.lookupDataSource(n)}')`
return zz(t,r)||t.push(r),t}),[])
if(o.length<=0)throw new Error("Projection's fit didn't find any data sources")
return[Object.assign({name:r,size:i,fit:{signal:o.length>1?`[${o.join(", ")}]`:o[0]}},n)]}return[Object.assign(Object.assign({name:r},{translate:{signal:"[width / 2, height / 2]"}}),n)]}const CX=["type","clipAngle","clipExtent","center","rotate","precision","reflectX","reflectY","coefficient","distance","fraction","lobes","parallel","radius","ratio","spacing","tilt"]
class MX extends RH{constructor(e,t,n,r){super(Object.assign({},t),{name:e}),this.specifiedProjection=t,this.size=n,this.data=r,this.merged=!1}get isFit(){return!!this.data}}function jX(e){e.component.projection=KJ(e)?function(e){var t
if(e.hasProjection){const n=FL(e.specifiedProjection),r=!(n&&(null!=n.scale||null!=n.translate)),i=r?[e.getSizeSignalRef("width"),e.getSizeSignalRef("height")]:void 0,o=r?function(e){const t=[],{encoding:n}=e
for(const r of[[TI,FI],[$I,NI]])(ZZ(n[r[0]])||ZZ(n[r[1]]))&&t.push({signal:e.getName(`geojson_${t.length}`)})
return e.channelHasField(RI)&&e.typedFieldDef(RI).type===jU&&t.push({signal:e.getName(`geojson_${t.length}`)}),0===t.length&&t.push(e.requestDataName(QH.Main)),t}(e):void 0,a=new MX(e.projectionName(!0),Object.assign(Object.assign({},null!==(t=FL(e.config.projection))&&void 0!==t?t:{}),null!=n?n:{}),i,o)
return a.get("type")||a.set("type","equalEarth",!1),a}}(e):function(e){if(0===e.children.length)return
let t
for(const r of e.children)jX(r)
const n=Rz(e.children,(e=>{const n=e.component.projection
if(n){if(t){const e=function(e,t){const n=Rz(CX,(n=>!at(e.explicit,n)&&!at(t.explicit,n)||!!(at(e.explicit,n)&&at(t.explicit,n)&&Cz(e.get(n),t.get(n)))))
if(Cz(e.size,t.size)){if(n)return e
if(Cz(e.explicit,{}))return t
if(Cz(t.explicit,{}))return e}return null}(t,n)
return e&&(t=e),!!e}return t=n,!0}return!0}))
if(t&&n){const n=e.projectionName(!0),r=new MX(n,t.specifiedProjection,t.size,Mz(t.data))
for(const t of e.children){const e=t.component.projection
e&&(e.isFit&&r.data.push(...t.component.projection.data),t.renameProjection(e.get("name"),n),e.merged=!0)}return r}}(e)}function FX(e,t){return`${EL(e)}_${t}`}function TX(e,t,n){var r
const i=FX(null!==(r=GZ(n,void 0))&&void 0!==r?r:{},t)
return e.getName(`${i}_bins`)}function NX(e,t,n){let r,i
r=function(e){return"as"in e}(e)?yt(e.as)?[e.as,`${e.as}_end`]:[e.as[0],e.as[1]]:[jZ(e,{forAs:!0}),jZ(e,{binSuffix:"end",forAs:!0})]
const o=Object.assign({},GZ(t,void 0)),a=FX(o,e.field),{signal:s,extentSignal:l}=function(e,t){return{signal:e.getName(`${t}_bins`),extentSignal:e.getName(`${t}_extent`)}}(n,a)
if(CL(o.extent)){const e=o.extent
i=AY(n,e.param,e),delete o.extent}return{key:a,binComponent:Object.assign(Object.assign(Object.assign({bin:o,field:e.field,as:[r]},s?{signal:s}:{}),l?{extentSignal:l}:{}),i?{span:i}:{})}}class $X extends oG{constructor(e,t){super(e),this.bins=t}clone(){return new $X(null,Mz(this.bins))}static makeFromEncoding(e,t){const n=t.reduceFieldDef(((e,n,r)=>{if(OZ(n)&&AL(n.bin)){const{key:i,binComponent:o}=NX(n,n.bin,t)
e[i]=Object.assign(Object.assign(Object.assign({},o),e[i]),function(e,t,n,r){var i,o
if(eW(t,n)){const a=KJ(e)&&null!==(o=null!==(i=e.axis(n))&&void 0!==i?i:e.legend(n))&&void 0!==o?o:{},s=jZ(t,{expr:"datum"}),l=jZ(t,{expr:"datum",binSuffix:"end"})
return{formulaAs:jZ(t,{binSuffix:"range",forAs:!0}),formula:Kq(s,l,a.format,a.formatType,r)}}return{}}(t,n,r,t.config))}return e}),{})
return Gz(n)?null:new $X(e,n)}static makeFromTransform(e,t,n){const{key:r,binComponent:i}=NX(t,t.bin,n)
return new $X(e,{[r]:i})}merge(e,t){for(const n of Yz(e.bins))n in this.bins?(t(e.bins[n].signal,this.bins[n].signal),this.bins[n].as=Uz([...this.bins[n].as,...e.bins[n].as],$z)):this.bins[n]=e.bins[n]
for(const n of e.children)e.removeChild(n),n.parent=this
e.remove()}producedFields(){return new Set(Xz(this.bins).map((e=>e.as)).flat(2))}dependentFields(){return new Set(Xz(this.bins).map((e=>e.field)))}hash(){return`Bin ${$z(this.bins)}`}assemble(){return Xz(this.bins).flatMap((e=>{const t=[],[n,...r]=e.as,i=e.bin,{extent:o}=i,a=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(i,["extent"]),s=Object.assign(Object.assign(Object.assign({type:"bin",field:aI(e.field),as:n,signal:e.signal},CL(o)?{extent:null}:{extent:o}),e.span?{span:{signal:`span(${e.span})`}}:{}),a)
!o&&e.extentSignal&&(t.push({type:"extent",field:aI(e.field),signal:e.extentSignal}),s.extent={signal:e.extentSignal}),t.push(s)
for(const l of r)for(let e=0;e<2;e++)t.push({type:"formula",expr:jZ({field:n[e]},{expr:"datum"}),as:l[e]})
return e.formula&&t.push({type:"formula",expr:e.formula,as:e.formulaAs}),t}))}}class PX extends oG{constructor(e,t,n){super(e),this.dimensions=t,this.measures=n}clone(){return new PX(null,new Set(this.dimensions),Mz(this.measures))}get groupBy(){return this.dimensions}static makeFromEncoding(e,t){let n=!1
t.forEachFieldDef((e=>{e.aggregate&&(n=!0)}))
const r={},i=new Set
return n?(t.forEachFieldDef(((e,n)=>{var o,a,s,l
const{aggregate:u,field:c}=e
if(u)if("count"===u)null!==(o=r["*"])&&void 0!==o||(r["*"]={}),r["*"].count=new Set([jZ(e,{forAs:!0})])
else{if(vL(u)||bL(u)){const e=vL(u)?"argmin":"argmax",t=u[e]
null!==(a=r[t])&&void 0!==a||(r[t]={}),r[t][e]=new Set([jZ({op:e,field:t},{forAs:!0})])}else null!==(s=r[c])&&void 0!==s||(r[c]={}),r[c][u]=new Set([jZ(e,{forAs:!0})])
fL(n)&&"unaggregated"===t.scaleDomain(n)&&(null!==(l=r[c])&&void 0!==l||(r[c]={}),r[c].min=new Set([jZ({field:c,aggregate:"min"},{forAs:!0})]),r[c].max=new Set([jZ({field:c,aggregate:"max"},{forAs:!0})]))}else!function(e,t,n,r){var i
const o=KJ(r)?r.encoding[kR(t)]:void 0
if(OZ(n)&&KJ(r)&&hZ(n,o,r.markDef,r.config))e.add(jZ(n,{})),e.add(jZ(n,{suffix:"end"})),n.bin&&eW(n,t)&&e.add(jZ(n,{binSuffix:"range"}))
else if(t in rR){const n=function(e){switch(e){case FI:return"y"
case NI:return"y2"
case TI:return"x"
case $I:return"x2"}}(t)
e.add(r.getName(n))}else e.add(jZ(n))
EZ(n)&&function(e){return we(e)&&"field"in e}(null===(i=n.scale)||void 0===i?void 0:i.range)&&e.add(n.scale.range.field)}(i,n,e,t)})),i.size+Yz(r).length===0?null:new PX(e,i,r)):null}static makeFromTransform(e,t){var n,r,i
const o=new Set,a={}
for(const s of t.aggregate){const{op:e,field:t,as:i}=s
e&&("count"===e?(null!==(n=a["*"])&&void 0!==n||(a["*"]={}),a["*"].count=new Set([i||jZ(s,{forAs:!0})])):(null!==(r=a[t])&&void 0!==r||(a[t]={}),a[t][e]=new Set([i||jZ(s,{forAs:!0})])))}for(const s of null!==(i=t.groupby)&&void 0!==i?i:[])o.add(s)
return o.size+Yz(a).length===0?null:new PX(e,o,a)}merge(e){return Zz(this.dimensions,e.dimensions)?(function(e,t){var n
for(const r of Yz(t)){const i=t[r]
for(const t of Yz(i))r in e?e[r][t]=new Set([...null!==(n=e[r][t])&&void 0!==n?n:[],...i[t]]):e[r]={[t]:i[t]}}}(this.measures,e.measures),!0):(function(){UB.debug(...arguments)}("different dimensions, cannot merge"),!1)}addDimensions(e){e.forEach(this.dimensions.add,this.dimensions)}dependentFields(){return new Set([...this.dimensions,...Yz(this.measures)])}producedFields(){const e=new Set
for(const t of Yz(this.measures))for(const n of Yz(this.measures[t])){const r=this.measures[t][n]
0===r.size?e.add(`${n}_${t}`):r.forEach(e.add,e)}return e}hash(){return`Aggregate ${$z({dimensions:this.dimensions,measures:this.measures})}`}assemble(){const e=[],t=[],n=[]
for(const r of Yz(this.measures))for(const i of Yz(this.measures[r]))for(const o of this.measures[r][i])n.push(o),e.push(i),t.push("*"===r?null:aI(r))
return{type:"aggregate",groupby:[...this.dimensions].map(aI),ops:e,fields:t,as:n}}}class zX extends oG{constructor(e,t,n,r){super(e),this.model=t,this.name=n,this.data=r
for(const i of lR){const e=t.facet[i]
if(e){const{bin:n,sort:r}=e
this[i]=Object.assign({name:t.getName(`${i}_domain`),fields:[jZ(e),...AL(n)?[jZ(e,{binSuffix:"end"})]:[]]},rZ(r)?{sortField:r}:_e(r)?{sortIndexField:UY(e,i)}:{})}}this.childModel=t.child}hash(){let e="Facet"
for(const t of lR)this[t]&&(e+=` ${t.charAt(0)}:${$z(this[t])}`)
return e}get fields(){var e
const t=[]
for(const n of lR)(null===(e=this[n])||void 0===e?void 0:e.fields)&&t.push(...this[n].fields)
return t}dependentFields(){const e=new Set(this.fields)
for(const t of lR)this[t]&&(this[t].sortField&&e.add(this[t].sortField.field),this[t].sortIndexField&&e.add(this[t].sortIndexField))
return e}producedFields(){return new Set}getSource(){return this.name}getChildIndependentFieldsWithStep(){const e={}
for(const t of VR){const n=this.childModel.component.scales[t]
if(n&&!n.merged){const r=n.get("type"),i=n.get("range")
if(HU(r)&&PL(i)){const n=SJ(DJ(this.childModel,t))
n?e[t]=n:WB(lB(t))}}}return e}assembleRowColumnHeaderData(e,t,n){const r={row:"y",column:"x",facet:void 0}[e],i=[],o=[],a=[]
r&&n&&n[r]&&(t?(i.push(`distinct_${n[r]}`),o.push("max")):(i.push(n[r]),o.push("distinct")),a.push(`distinct_${n[r]}`))
const{sortField:s,sortIndexField:l}=this[e]
if(s){const{op:e=Qq,field:t}=s
i.push(t),o.push(e),a.push(jZ(s,{forAs:!0}))}else l&&(i.push(l),o.push("max"),a.push(l))
return{name:this[e].name,source:null!=t?t:this.data,transform:[Object.assign({type:"aggregate",groupby:this[e].fields},i.length?{fields:i,ops:o,as:a}:{})]}}assembleFacetHeaderData(e){var t,n
const{columns:r}=this.model.layout,{layoutHeaders:i}=this.model.component,o=[],a={}
for(const u of VY){for(const e of HY){const r=null!==(t=i[u]&&i[u][e])&&void 0!==t?t:[]
for(const e of r)if((null===(n=e.axes)||void 0===n?void 0:n.length)>0){a[u]=!0
break}}if(a[u]){const e=`length(data("${this.facet.name}"))`,t="row"===u?r?{signal:`ceil(${e} / ${r})`}:1:r?{signal:`min(${e}, ${r})`}:{signal:e}
o.push({name:`${this.facet.name}_${u}`,transform:[{type:"sequence",start:0,stop:t}]})}}const{row:s,column:l}=a
return(s||l)&&o.unshift(this.assembleRowColumnHeaderData("facet",null,e)),o}assemble(){var e,t
const n=[]
let r=null
const i=this.getChildIndependentFieldsWithStep(),{column:o,row:a,facet:s}=this
if(o&&a&&(i.x||i.y)){r=`cross_${this.column.name}_${this.row.name}`
const o=[].concat(null!==(e=i.x)&&void 0!==e?e:[],null!==(t=i.y)&&void 0!==t?t:[]),a=o.map((()=>"distinct"))
n.push({name:r,source:this.data,transform:[{type:"aggregate",groupby:this.fields,fields:o,ops:a}]})}for(const l of[xI,bI])this[l]&&n.push(this.assembleRowColumnHeaderData(l,r,i))
if(s){const e=this.assembleFacetHeaderData(i)
e&&n.push(...e)}return n}}function IX(e){return e.startsWith("'")&&e.endsWith("'")||e.startsWith('"')&&e.endsWith('"')?e.slice(1,-1):e}function RX(e){const t={}
return Sz(e.filter,(e=>{var n
if(bU(e)){let r=null
fU(e)?r=qL(e.equal):hU(e)?r=qL(e.lte):dU(e)?r=qL(e.lt):pU(e)?r=qL(e.gt):gU(e)?r=qL(e.gte):mU(e)?r=e.range[0]:yU(e)&&(r=(null!==(n=e.oneOf)&&void 0!==n?n:e.in)[0]),r&&(VB(r)?t[e.field]="date":gt(r)?t[e.field]="number":yt(r)&&(t[e.field]="string")),e.timeUnit&&(t[e.field]="date")}})),t}class LX extends oG{constructor(e,t){super(e),this._parse=t}clone(){return new LX(null,Mz(this._parse))}hash(){return`Parse ${$z(this._parse)}`}static makeExplicit(e,t,n){var r
let i={}
const o=t.data
return!YH(o)&&(null===(r=null==o?void 0:o.format)||void 0===r?void 0:r.parse)&&(i=o.format.parse),this.makeWithAncestors(e,i,{},n)}static makeWithAncestors(e,t,n,r){for(const a of Yz(n)){const e=r.getWithExplicit(a)
void 0!==e.value&&(e.explicit||e.value===n[a]||"derived"===e.value||"flatten"===n[a]?delete n[a]:WB(hB(a,n[a],e.value)))}for(const a of Yz(t)){const e=r.get(a)
void 0!==e&&(e===t[a]?delete t[a]:WB(hB(a,t[a],e)))}const i=new RH(t,n)
r.copyAll(i)
const o={}
for(const a of Yz(i.combine())){const e=i.get(a)
null!==e&&(o[a]=e)}return 0===Yz(o).length||r.parseNothing?null:new LX(e,o)}get parse(){return this._parse}merge(e){this._parse=Object.assign(Object.assign({},this._parse),e.parse),e.remove()}assembleFormatParse(){const e={}
for(const t of Yz(this._parse)){const n=this._parse[t]
1===uI(t)&&(e[t]=n)}return e}producedFields(){return new Set(Yz(this._parse))}dependentFields(){return new Set(Yz(this._parse))}assembleTransforms(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return Yz(this._parse).filter((t=>!e||uI(t)>1)).map((e=>{const t=function(e,t){const n=rI(e)
return"number"===t?`toNumber(${n})`:"boolean"===t?`toBoolean(${n})`:"string"===t?`toString(${n})`:"date"===t?`toDate(${n})`:"flatten"===t?n:t.startsWith("date:")?`timeParse(${n},'${IX(t.slice(5,t.length))}')`:t.startsWith("utc:")?`utcParse(${n},'${IX(t.slice(4,t.length))}')`:(WB(`Unrecognized parse "${t}".`),null)}(e,this._parse[e])
return t?{type:"formula",expr:t,as:lI(e)}:null})).filter((e=>null!==e))}}class BX extends oG{clone(){return new BX(null)}constructor(e){super(e)}dependentFields(){return new Set}producedFields(){return new Set([eV])}hash(){return"Identifier"}assemble(){return{type:"identifier",as:eV}}}class UX extends oG{constructor(e,t){super(e),this.params=t}clone(){return new UX(null,this.params)}dependentFields(){return new Set}producedFields(){}hash(){return`Graticule ${$z(this.params)}`}assemble(){return Object.assign({type:"graticule"},!0===this.params?{}:this.params)}}class qX extends oG{constructor(e,t){super(e),this.params=t}clone(){return new qX(null,this.params)}dependentFields(){return new Set}producedFields(){var e
return new Set([null!==(e=this.params.as)&&void 0!==e?e:"data"])}hash(){return`Hash ${$z(this.params)}`}assemble(){return Object.assign({type:"sequence"},this.params)}}class ZX extends oG{constructor(e){let t
if(super(null),null!=e||(e={name:"source"}),YH(e)||(t=e.format?Object.assign({},Tz(e.format,["parse"])):{}),HH(e))this._data={values:e.values}
else if(VH(e)){if(this._data={url:e.url},!t.type){let n=/(?:\.([^.]+))?$/.exec(e.url)[1]
zz(["json","csv","tsv","dsv","topojson"],n)||(n="json"),t.type=n}}else JH(e)?this._data={values:[{type:"Sphere"}]}:(GH(e)||YH(e))&&(this._data={})
this._generator=YH(e),e.name&&(this._name=e.name),t&&!Gz(t)&&(this._data.format=t)}dependentFields(){return new Set}producedFields(){}get data(){return this._data}hasName(){return!!this._name}get isGenerator(){return this._generator}get dataName(){return this._name}set dataName(e){this._name=e}set parent(e){throw new Error("Source nodes have to be roots.")}remove(){throw new Error("Source nodes are roots and cannot be removed.")}hash(){throw new Error("Cannot hash sources")}assemble(){return Object.assign(Object.assign({name:this._name},this._data),{transform:[]})}}var WX,VX=function(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable")
if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter")
if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it")
return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}
function HX(e){return e instanceof ZX||e instanceof UX||e instanceof qX}class GX{constructor(){WX.set(this,void 0),VX(this,WX,!1,"f")}setModified(){VX(this,WX,!0,"f")}get modifiedFlag(){return function(e,t,n,r){if("function"==typeof t||!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it")
return t.get(e)}(this,WX)}}WX=new WeakMap
class YX extends GX{getNodeDepths(e,t,n){n.set(e,t)
for(const r of e.children)this.getNodeDepths(r,t+1,n)
return n}optimize(e){const t=[...this.getNodeDepths(e,0,new Map).entries()].sort(((e,t)=>t[1]-e[1]))
for(const n of t)this.run(n[0])
return this.modifiedFlag}}class XX extends GX{optimize(e){this.run(e)
for(const t of e.children)this.optimize(t)
return this.modifiedFlag}}class JX extends XX{mergeNodes(e,t){const n=t.shift()
for(const r of t)e.removeChild(r),r.parent=n,r.remove()}run(e){const t=e.children.map((e=>e.hash())),n={}
for(let r=0;r<t.length;r++)void 0===n[t[r]]?n[t[r]]=[e.children[r]]:n[t[r]].push(e.children[r])
for(const r of Yz(n))n[r].length>1&&(this.setModified(),this.mergeNodes(e,n[r]))}}class KX extends XX{constructor(e){super(),this.requiresSelectionId=e&&bY(e)}run(e){e instanceof BX&&(this.requiresSelectionId&&(HX(e.parent)||e.parent instanceof PX||e.parent instanceof LX)||(this.setModified(),e.remove()))}}class QX extends GX{optimize(e){return this.run(e,new Set),this.modifiedFlag}run(e,t){let n=new Set
e instanceof lG&&(n=e.producedFields(),Wz(n,t)&&(this.setModified(),e.removeFormulas(t),0===e.producedFields.length&&e.remove()))
for(const r of e.children)this.run(r,new Set([...t,...n]))}}class eJ extends XX{constructor(){super()}run(e){e instanceof aG&&!e.isRequired()&&(this.setModified(),e.remove())}}class tJ extends YX{run(e){if(!(HX(e)||e.numChildren()>1))for(const t of e.children)if(t instanceof LX)if(e instanceof LX)this.setModified(),e.merge(t)
else{if(Hz(e.producedFields(),t.dependentFields()))continue
this.setModified(),t.swapWithParent()}}}class nJ extends YX{run(e){const t=[...e.children],n=e.children.filter((e=>e instanceof LX))
if(e.numChildren()>1&&n.length>=1){const r={},i=new Set
for(const e of n){const t=e.parse
for(const e of Yz(t))e in r?r[e]!==t[e]&&i.add(e):r[e]=t[e]}for(const e of i)delete r[e]
if(!Gz(r)){this.setModified()
const n=new LX(e,r)
for(const i of t){if(i instanceof LX)for(const e of Yz(r))delete i.parse[e]
e.removeChild(i),i.parent=n,i instanceof LX&&0===Yz(i.parse).length&&i.remove()}}}}}class rJ extends YX{run(e){e instanceof aG||e.numChildren()>0||e instanceof zX||e instanceof ZX||(this.setModified(),e.remove())}}class iJ extends YX{run(e){const t=e.children.filter((e=>e instanceof lG)),n=t.pop()
for(const r of t)this.setModified(),n.merge(r)}}class oJ extends YX{run(e){const t=e.children.filter((e=>e instanceof PX)),n={}
for(const r of t){const e=$z(r.groupBy)
e in n||(n[e]=[]),n[e].push(r)}for(const r of Yz(n)){const t=n[r]
if(t.length>1){const n=t.pop()
for(const r of t)n.merge(r)&&(e.removeChild(r),r.parent=n,r.remove(),this.setModified())}}}}class aJ extends YX{constructor(e){super(),this.model=e}run(e){const t=!(HX(e)||e instanceof kY||e instanceof LX||e instanceof BX),n=[],r=[]
for(const i of e.children)i instanceof $X&&(t&&!Hz(e.producedFields(),i.dependentFields())?n.push(i):r.push(i))
if(n.length>0){const t=n.pop()
for(const e of n)t.merge(e,this.model.renameSignal.bind(this.model))
this.setModified(),e instanceof $X?e.merge(t,this.model.renameSignal.bind(this.model)):t.swapWithParent()}if(r.length>1){const e=r.pop()
for(const t of r)e.merge(t,this.model.renameSignal.bind(this.model))
this.setModified()}}}class sJ extends YX{run(e){const t=[...e.children]
if(!Iz(t,(e=>e instanceof aG))||e.numChildren()<=1)return
const n=[]
let r
for(const i of t)if(i instanceof aG){let t=i
for(;1===t.numChildren();){const[e]=t.children
if(!(e instanceof aG))break
t=e}n.push(...t.children),r?(e.removeChild(i),i.parent=r.parent,r.parent.removeChild(r),r.parent=t,this.setModified()):r=t}else n.push(i)
if(n.length){this.setModified()
for(const e of n)e.parent.removeChild(e),e.parent=r}}}class lJ extends oG{constructor(e,t){super(e),this.transform=t}clone(){return new lJ(null,Mz(this.transform))}addDimensions(e){this.transform.groupby=Uz(this.transform.groupby.concat(e),(e=>e))}dependentFields(){const e=new Set
return this.transform.groupby&&this.transform.groupby.forEach(e.add,e),this.transform.joinaggregate.map((e=>e.field)).filter((e=>void 0!==e)).forEach(e.add,e),e}producedFields(){return new Set(this.transform.joinaggregate.map(this.getDefaultName))}getDefaultName(e){var t
return null!==(t=e.as)&&void 0!==t?t:jZ(e)}hash(){return`JoinAggregateTransform ${$z(this.transform)}`}assemble(){const e=[],t=[],n=[]
for(const i of this.transform.joinaggregate)t.push(i.op),n.push(this.getDefaultName(i)),e.push(void 0===i.field?null:i.field)
const r=this.transform.groupby
return Object.assign({type:"joinaggregate",as:n,ops:t,fields:e},void 0!==r?{groupby:r}:{})}}class uJ extends oG{constructor(e,t){super(e),this._stack=t}clone(){return new uJ(null,Mz(this._stack))}static makeFromTransform(e,t){const{stack:n,groupby:r,as:i,offset:o="zero"}=t,a=[],s=[]
if(void 0!==t.sort)for(const c of t.sort)a.push(c.field),s.push(cI(c.order,"ascending"))
const l={field:a,order:s}
let u
return u=function(e){return _e(e)&&e.every((e=>yt(e)))&&e.length>1}(i)?i:yt(i)?[i,`${i}_end`]:[`${t.stack}_start`,`${t.stack}_end`],new uJ(e,{dimensionFieldDefs:[],stackField:n,groupby:r,offset:o,sort:l,facetby:[],as:u})}static makeFromEncoding(e,t){const n=t.stack,{encoding:r}=t
if(!n)return null
const{groupbyChannels:i,fieldChannel:o,offset:a,impute:s}=n,l=i.map((e=>qZ(r[e]))).filter((e=>!!e)),u=function(e){return e.stack.stackBy.reduce(((e,t)=>{const n=jZ(t.fieldDef)
return n&&e.push(n),e}),[])}(t),c=t.encoding.order
let f
return f=_e(c)||yZ(c)?eB(c):u.reduce(((e,t)=>(e.field.push(t),e.order.push("y"===o?"descending":"ascending"),e)),{field:[],order:[]}),new uJ(e,{dimensionFieldDefs:l,stackField:t.vgField(o),facetby:[],stackby:u,sort:f,offset:a,impute:s,as:[t.vgField(o,{suffix:"start",forAs:!0}),t.vgField(o,{suffix:"end",forAs:!0})]})}get stack(){return this._stack}addDimensions(e){this._stack.facetby.push(...e)}dependentFields(){const e=new Set
return e.add(this._stack.stackField),this.getGroupbyFields().forEach(e.add,e),this._stack.facetby.forEach(e.add,e),this._stack.sort.field.forEach(e.add,e),e}producedFields(){return new Set(this._stack.as)}hash(){return`Stack ${$z(this._stack)}`}getGroupbyFields(){const{dimensionFieldDefs:e,impute:t,groupby:n}=this._stack
return e.length>0?e.map((e=>e.bin?t?[jZ(e,{binSuffix:"mid"})]:[jZ(e,{}),jZ(e,{binSuffix:"end"})]:[jZ(e)])).flat():null!=n?n:[]}assemble(){const e=[],{facetby:t,dimensionFieldDefs:n,stackField:r,stackby:i,sort:o,offset:a,impute:s,as:l}=this._stack
if(s)for(const u of n){const{bandPosition:n=.5,bin:o}=u
if(o){const t=jZ(u,{expr:"datum"}),r=jZ(u,{expr:"datum",binSuffix:"end"})
e.push({type:"formula",expr:`${n}*${t}+${1-n}*${r}`,as:jZ(u,{binSuffix:"mid",forAs:!0})})}e.push({type:"impute",field:r,groupby:[...i,...t],key:jZ(u,{binSuffix:"mid"}),method:"value",value:0})}return e.push({type:"stack",groupby:[...this.getGroupbyFields(),...t],field:r,sort:o,as:l,offset:a}),e}}class cJ extends oG{constructor(e,t){super(e),this.transform=t}clone(){return new cJ(null,Mz(this.transform))}addDimensions(e){this.transform.groupby=Uz(this.transform.groupby.concat(e),(e=>e))}dependentFields(){var e,t
const n=new Set
return(null!==(e=this.transform.groupby)&&void 0!==e?e:[]).forEach(n.add,n),(null!==(t=this.transform.sort)&&void 0!==t?t:[]).forEach((e=>n.add(e.field))),this.transform.window.map((e=>e.field)).filter((e=>void 0!==e)).forEach(n.add,n),n}producedFields(){return new Set(this.transform.window.map(this.getDefaultName))}getDefaultName(e){var t
return null!==(t=e.as)&&void 0!==t?t:jZ(e)}hash(){return`WindowTransform ${$z(this.transform)}`}assemble(){var e
const t=[],n=[],r=[],i=[]
for(const f of this.transform.window)n.push(f.op),r.push(this.getDefaultName(f)),i.push(void 0===f.param?null:f.param),t.push(void 0===f.field?null:f.field)
const o=this.transform.frame,a=this.transform.groupby
if(o&&null===o[0]&&null===o[1]&&n.every((e=>xL(e))))return Object.assign({type:"joinaggregate",as:r,ops:n,fields:t},void 0!==a?{groupby:a}:{})
const s=[],l=[]
if(void 0!==this.transform.sort)for(const f of this.transform.sort)s.push(f.field),l.push(null!==(e=f.order)&&void 0!==e?e:"ascending")
const u={field:s,order:l},c=this.transform.ignorePeers
return Object.assign(Object.assign(Object.assign({type:"window",params:i,as:r,ops:n,fields:t,sort:u},void 0!==c?{ignorePeers:c}:{}),void 0!==a?{groupby:a}:{}),void 0!==o?{frame:o}:{})}}function fJ(e){if(e instanceof zX)if(1!==e.numChildren()||e.children[0]instanceof aG){const n=e.model.component.data.main
dJ(n)
const r=(t=e,function e(n){if(!(n instanceof zX)){const r=n.clone()
if(r instanceof aG){const e=hJ+r.getSource()
r.setSource(e),t.model.component.data.outputNodes[e]=r}else(r instanceof PX||r instanceof uJ||r instanceof cJ||r instanceof lJ)&&r.addDimensions(t.fields)
for(const t of n.children.flatMap(e))t.parent=r
return[r]}return n.children.flatMap(e)}),i=e.children.map(r).flat()
for(const e of i)e.parent=n}else{const t=e.children[0];(t instanceof PX||t instanceof uJ||t instanceof cJ||t instanceof lJ)&&t.addDimensions(e.fields),t.swapWithParent(),fJ(e)}else e.children.map(fJ)
var t}function dJ(e){if(e instanceof aG&&e.type===QH.Main&&1===e.numChildren()){const t=e.children[0]
t instanceof zX||(t.swapWithParent(),dJ(e))}}const hJ="scale_"
function pJ(e){for(const t of e){for(const e of t.children)if(e.parent!==t)return!1
if(!pJ(t.children))return!1}return!0}function gJ(e,t){let n=!1
for(const r of t)n=e.optimize(r)||n
return n}function mJ(e,t,n){let r=e.sources,i=!1
return i=gJ(new eJ,r)||i,i=gJ(new KX(t),r)||i,r=r.filter((e=>e.numChildren()>0)),i=gJ(new rJ,r)||i,r=r.filter((e=>e.numChildren()>0)),n||(i=gJ(new tJ,r)||i,i=gJ(new aJ(t),r)||i,i=gJ(new QX,r)||i,i=gJ(new nJ,r)||i,i=gJ(new oJ,r)||i,i=gJ(new iJ,r)||i,i=gJ(new JX,r)||i,i=gJ(new sJ,r)||i),e.sources=r,i}function yJ(e,t){pJ(e.sources)
let n=0,r=0
for(let i=0;i<5&&mJ(e,t,!0);i++)n++
e.sources.map(fJ)
for(let i=0;i<5&&mJ(e,t,!1);i++)r++
pJ(e.sources),5===Math.max(n,r)&&WB("Maximum optimization runs(5) reached.")}class vJ{constructor(e){Object.defineProperty(this,"signal",{enumerable:!0,get:e})}static fromName(e,t){return new vJ((()=>e(t)))}}function bJ(e){KJ(e)?function(e){const t=e.component.scales
for(const n of Yz(t)){const r=xJ(e,n)
if(t[n].setWithExplicit("domains",r),kJ(e,n),e.component.data.isFaceted){let t=e
for(;!QJ(t)&&t.parent;)t=t.parent
if("shared"===t.component.resolve.scale[n])for(const e of r.value)zL(e)&&(e.data=hJ+e.data.replace(hJ,""))}}}(e):function(e){for(const n of e.children)bJ(n)
const t=e.component.scales
for(const n of Yz(t)){let r,i=null
for(const t of e.children){const e=t.component.scales[n]
if(e){r=void 0===r?e.getWithExplicit("domains"):ZH(r,e.getWithExplicit("domains"),"domains","scale",AJ)
const t=e.get("selectionExtent")
i&&t&&i.param!==t.param&&WB("The same selection must be used to override scale domains in a layered view."),i=t}}t[n].setWithExplicit("domains",r),i&&t[n].set("selectionExtent",i,!0)}}(e)}function xJ(e,t){const n=e.getScaleComponent(t).get("type"),{encoding:r}=e,i=function(e,t,n,r){if("unaggregated"===e){const{valid:e,reason:r}=EJ(t,n)
if(!e)return void WB(r)}else if(void 0===e&&r.useUnaggregatedDomain){const{valid:e}=EJ(t,n)
if(e)return"unaggregated"}return e}(e.scaleDomain(t),e.typedFieldDef(t),n,e.config.scale)
return i!==e.scaleDomain(t)&&(e.specifiedScales[t]=Object.assign(Object.assign({},e.specifiedScales[t]),{domain:i})),"x"===t&&ZZ(r.x2)?ZZ(r.x)?ZH(wJ(n,i,e,"x"),wJ(n,i,e,"x2"),"domain","scale",AJ):wJ(n,i,e,"x2"):"y"===t&&ZZ(r.y2)?ZZ(r.y)?ZH(wJ(n,i,e,"y"),wJ(n,i,e,"y2"),"domain","scale",AJ):wJ(n,i,e,"y2"):wJ(n,i,e,t)}function _J(e,t,n){var r
const i=null===(r=uU(n))||void 0===r?void 0:r.unit
return"temporal"===t||i?function(e,t,n){return e.map((e=>({signal:`{data: ${KZ(e,{timeUnit:n,type:t})}}`})))}(e,t,i):[e]}function wJ(e,t,n,r){const{encoding:i}=n,o=ZZ(i[r]),{type:a}=o,s=o.timeUnit
if(function(e){return null==e?void 0:e.unionWith}(t)){const i=wJ(e,void 0,n,r),o=_J(t.unionWith,a,s)
return LH([...i.value,...o])}if($L(t))return LH([t])
if(t&&"unaggregated"!==t&&!JU(t))return LH(_J(t,a,s))
const l=n.stack
if(l&&r===l.fieldChannel){if("normalize"===l.offset)return BH([[0,1]])
const e=n.requestDataName(QH.Main)
return BH([{data:e,field:n.vgField(r,{suffix:"start"})},{data:e,field:n.vgField(r,{suffix:"end"})}])}const u=fL(r)&&yZ(o)?function(e,t,n){if(!HU(n))return
const r=e.fieldDef(t),i=r.sort
if(iZ(i))return{op:"min",field:UY(r,t),order:"ascending"}
const{stack:o}=e,a=o?new Set([...o.groupbyFields,...o.stackBy.map((e=>e.fieldDef.field))]):void 0
if(rZ(i))return OJ(i,o&&!a.has(i.field))
if(nZ(i)){const{encoding:t,order:n}=i,r=e.fieldDef(t),{aggregate:s,field:l}=r,u=o&&!a.has(l)
if(vL(s)||bL(s))return OJ({field:jZ(r),order:n},u)
if(xL(s)||!s)return OJ({op:s,field:l,order:n},u)}else{if("descending"===i)return{op:"min",field:e.vgField(t),order:"descending"}
if(zz(["ascending",void 0],i))return!0}}(n,r,e):void 0
if(bZ(o))return BH(_J([o.datum],a,s))
const c=o
if("unaggregated"===t){const e=n.requestDataName(QH.Main),{field:t}=o
return BH([{data:e,field:jZ({field:t,aggregate:"min"})},{data:e,field:jZ({field:t,aggregate:"max"})}])}if(AL(c.bin)){if(HU(e))return BH("bin-ordinal"===e?[]:[{data:Kz(u)?n.requestDataName(QH.Main):n.requestDataName(QH.Raw),field:n.vgField(r,eW(c,r)?{binSuffix:"range"}:{}),sort:!0!==u&&we(u)?u:{field:n.vgField(r,{}),op:"min"}}])
{const{bin:e}=c
if(AL(e)){const t=TX(n,c.field,e)
return BH([new vJ((()=>{const e=n.getSignalName(t)
return`[${e}.start, ${e}.stop]`}))])}return BH([{data:n.requestDataName(QH.Main),field:n.vgField(r,{})}])}}if(c.timeUnit&&zz(["time","utc"],e)&&hZ(c,KJ(n)?n.encoding[kR(r)]:void 0,n.markDef,n.config)){const e=n.requestDataName(QH.Main)
return BH([{data:e,field:n.vgField(r)},{data:e,field:n.vgField(r,{suffix:"end"})}])}return BH(u?[{data:Kz(u)?n.requestDataName(QH.Main):n.requestDataName(QH.Raw),field:n.vgField(r),sort:u}]:[{data:n.requestDataName(QH.Main),field:n.vgField(r)}])}function OJ(e,t){const{op:n,field:r,order:i}=e
return Object.assign(Object.assign({op:null!=n?n:t?"sum":Qq},r?{field:aI(r)}:{}),i?{order:i}:{})}function kJ(e,t){var n
const r=e.component.scales[t],i=e.specifiedScales[t].domain,o=null===(n=e.fieldDef(t))||void 0===n?void 0:n.bin,a=JU(i)&&i,s=DL(o)&&CL(o.extent)&&o.extent;(a||s)&&r.set("selectionExtent",null!=a?a:s,!0)}function EJ(e,t){const{aggregate:n,type:r}=e
return n?yt(n)&&!kL.has(n)?{valid:!1,reason:MB(n)}:"quantitative"===r&&"log"===t?{valid:!1,reason:jB(e)}:{valid:!0}:{valid:!1,reason:CB(e)}}function AJ(e,t,n,r){return e.explicit&&t.explicit&&WB(function(e,t,n,r){return`Conflicting ${t.toString()} property "${e.toString()}" (${Nz(n)} and ${Nz(r)}). Using the union of the two domains.`}(n,r,e.value,t.value)),{explicit:e.explicit,value:[...e.value,...t.value]}}function SJ(e){if(zL(e)&&yt(e.field))return e.field
if(function(e){return!_e(e)&&"fields"in e&&!("data"in e)}(e)){let t
for(const n of e.fields)if(zL(n)&&yt(n.field))if(t){if(t!==n.field)return WB("Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect."),t}else t=n.field
return WB("Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect."),t}if(function(e){return!_e(e)&&"fields"in e&&"data"in e}(e)){WB("Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect.")
const t=e.fields[0]
return yt(t)?t:void 0}}function DJ(e,t){return function(e){const t=Uz(e.map((e=>{if(zL(e)){const{sort:t}=e
return function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["sort"])}return e})),$z),n=Uz(e.map((e=>{if(zL(e)){const t=e.sort
return void 0===t||Kz(t)||("op"in t&&"count"===t.op&&delete t.field,"ascending"===t.order&&delete t.order),t}})).filter((e=>void 0!==e)),$z)
if(0===t.length)return
if(1===t.length){const t=e[0]
if(zL(t)&&n.length>0){let e=n[0]
if(n.length>1)WB(PB),e=!0
else if(we(e)&&"field"in e){const n=e.field
t.field===n&&(e=!e.order||{order:e.order})}return Object.assign(Object.assign({},t),{sort:e})}return t}const r=Uz(n.map((e=>Kz(e)||!("op"in e)||yt(e.op)&&e.op in yL?e:(WB(function(e){return`Dropping sort property ${Nz(e)} as unioned domains only support boolean or op "count", "min", and "max".`}(e)),!0))),$z)
let i
1===r.length?i=r[0]:r.length>1&&(WB(PB),i=!0)
const o=Uz(e.map((e=>zL(e)?e.data:null)),(e=>e))
return 1===o.length&&null!==o[0]?Object.assign({data:o[0],fields:t.map((e=>e.field))},i?{sort:i}:{}):Object.assign({fields:t},i?{sort:i}:{})}(e.component.scales[t].get("domains").map((t=>(zL(t)&&(t.data=e.lookupDataSource(t.data)),t))))}function CJ(e){return tK(e)||eK(e)?e.children.reduce(((e,t)=>e.concat(CJ(t))),MJ(e)):MJ(e)}function MJ(e){return Yz(e.component.scales).reduce(((t,n)=>{const r=e.component.scales[n]
if(r.merged)return t
const i=r.combine(),{name:o,type:a,selectionExtent:s,domains:l,range:u,reverse:c}=i,f=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(i,["name","type","selectionExtent","domains","range","reverse"]),d=function(e,t,n,r){if(HR(n)){if(PL(e))return{step:{signal:`${t}_step`}}}else if(we(e)&&zL(e))return Object.assign(Object.assign({},e),{data:r.lookupDataSource(e.data)})
return e}(i.range,o,n,e),h=DJ(e,n),p=s?function(e,t,n,r){const i=AY(e,t.param,t)
return{signal:GU(n.get("type"))&&_e(r)&&r[0]>r[1]?`isValid(${i}) && reverse(${i})`:i}}(e,s,r,h):null
return t.push(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({name:o,type:a},h?{domain:h}:{}),p?{domainRaw:p}:{}),{range:d}),void 0!==c?{reverse:c}:{}),f)),t}),[])}class jJ extends RH{constructor(e,t){super({},{name:e}),this.merged=!1,this.setWithExplicit("type",t)}domainDefinitelyIncludesZero(){return!1!==this.get("zero")||Iz(this.get("domains"),(e=>_e(e)&&2===e.length&&e[0]<=0&&e[1]>=0))}}const FJ=["range","scheme"]
function TJ(e,t){const n=e.fieldDef(t)
if(null==n?void 0:n.bin){const{bin:r,field:i}=n,o=ER(t),a=e.getName(o)
if(we(r)&&r.binned&&void 0!==r.step)return new vJ((()=>{const n=e.scaleName(t),i=`(domain("${n}")[1] - domain("${n}")[0]) / ${r.step}`
return`${e.getSignalName(a)} / (${i})`}))
if(AL(r)){const t=TX(e,i,r)
return new vJ((()=>{const n=e.getSignalName(t),r=`(${n}.stop - ${n}.start) / ${n}.step`
return`${e.getSignalName(a)} / (${r})`}))}}}function NJ(e,t){const n=t.specifiedScales[e],{size:r}=t,i=t.getScaleComponent(e).get("type")
for(const c of FJ)if(void 0!==n[c]){const r=sq(i,c),o=lq(e,c)
if(r)if(o)WB(o)
else switch(c){case"range":{const r=n.range
if(_e(r)){if(HR(e))return LH(r.map((e=>{if("width"===e||"height"===e){const n=t.getName(e),r=t.getSignalName.bind(t)
return vJ.fromName(r,n)}return e})))}else if(we(r))return LH({data:t.requestDataName(QH.Main),field:r.field,sort:{op:"min",field:t.vgField(e)}})
return LH(r)}case"scheme":return LH($J(n[c]))}else WB(NB(i,c,e))}const o=e===wI||"xOffset"===e?"width":"height",a=r[o]
if(fV(a))if(HR(e))if(HU(i)){const n=PJ(a,t,e)
if(n)return LH({step:n})}else WB($B(o))
else if(KR(e)){const n=e===AI?"x":"y"
if("band"===t.getScaleComponent(n).get("type")){const e=zJ(a,i)
if(e)return LH(e)}}const{rangeMin:s,rangeMax:l}=n,u=function(e,t){const{size:n,config:r,mark:i,encoding:o}=t,a=t.getSignalName.bind(t),{type:s}=ZZ(o[e]),l=t.getScaleComponent(e).get("type"),{domain:u,domainMid:c}=t.specifiedScales[e]
switch(e){case wI:case OI:{if(zz(["point","band"],l)){const i=IJ(e,n,r.view)
if(fV(i))return{step:PJ(i,t,e)}}const i=ER(e),o=t.getName(i)
return e===OI&&GU(l)?[vJ.fromName(a,o),0]:[0,vJ.fromName(a,o)]}case AI:case SI:return function(e,t,n){const r=e===AI?"x":"y",i=t.getScaleComponent(r).get("type"),o=t.scaleName(r)
if("band"===i){const e=IJ(r,t.size,t.config.view)
if(fV(e)){const t=zJ(e,n)
if(t)return t}return[0,{signal:`bandwidth('${o}')`}]}return jz(`Cannot use ${e} scale if ${r} scale is not discrete.`)}(e,t,l)
case LI:{const o=RJ(i,t.component.scales[e].get("zero"),r),a=function(e,t,n,r){const i={x:TJ(n,"x"),y:TJ(n,"y")}
switch(e){case"bar":case"tick":{if(void 0!==r.scale.maxBandSize)return r.scale.maxBandSize
const e=BJ(t,i,r.view)
return gt(e)?e-1:new vJ((()=>`${e.signal} - 1`))}case"line":case"trail":case"rule":return r.scale.maxStrokeWidth
case"text":return r.scale.maxFontSize
case"point":case"square":case"circle":{if(r.scale.maxSize)return r.scale.maxSize
const e=BJ(t,i,r.view)
return gt(e)?Math.pow(LJ*e,2):new vJ((()=>`pow(0.95 * ${e.signal}, 2)`))}}throw new Error(OB("size",e))}(i,n,t,r)
return XU(l)?function(e,t,n){const r=()=>{const r=GL(t),i=GL(e),o=`(${r} - ${i}) / (${n} - 1)`
return`sequence(${i}, ${r} + ${o}, ${o})`}
return $L(t)?new vJ(r):{signal:r()}}(o,a,function(e,t,n,r){switch(e){case"quantile":return t.scale.quantileCount
case"quantize":return t.scale.quantizeCount
case"threshold":return void 0!==n&&_e(n)?n.length+1:(WB(function(e){return`Domain for ${e} is required for threshold scale.`}(r)),3)}}(l,r,u,e)):[o,a]}case MI:return[0,2*Math.PI]
case BI:return[0,360]
case DI:return[0,new vJ((()=>`min(${t.getSignalName("width")},${t.getSignalName("height")})/2`))]
case WI:return[r.scale.minStrokeWidth,r.scale.maxStrokeWidth]
case VI:return[[1,0],[4,2],[2,1],[1,1],[1,2,4,2]]
case RI:return"symbol"
case PI:case zI:case II:return"ordinal"===l?"nominal"===s?"category":"ordinal":void 0!==c?"diverging":"rect"===i||"geoshape"===i?"heatmap":"ramp"
case UI:case qI:case ZI:return[r.scale.minOpacity,r.scale.maxOpacity]}}(e,t)
return(void 0!==s||void 0!==l)&&sq(i,"rangeMin")&&_e(u)&&2===u.length?LH([null!=s?s:u[0],null!=l?l:u[1]]):BH(u)}function $J(e){return function(e){return!yt(e)&&!!e.name}(e)?Object.assign({scheme:e.name},Tz(e,["name"])):{scheme:e}}function PJ(e,t,n){var r,i,o,a,s
const{encoding:l}=t,u=t.getScaleComponent(n),c=AR(n),f=l[c]
if("offset"===cV({step:e,offsetIsDiscrete:wZ(f)&&AU(f.type)})&&dW(l,c)){const n=t.getScaleComponent(c)
let l=`domain('${t.scaleName(c)}').length`
"band"===n.get("type")&&(l=`bandspace(${l}, ${null!==(i=null!==(r=n.get("paddingInner"))&&void 0!==r?r:n.get("padding"))&&void 0!==i?i:0}, ${null!==(a=null!==(o=n.get("paddingOuter"))&&void 0!==o?o:n.get("padding"))&&void 0!==a?a:0})`)
const f=null!==(s=u.get("paddingInner"))&&void 0!==s?s:u.get("padding")
return{signal:`${e.step} * ${l} / (1-${VL(f)})`}}return e.step}function zJ(e,t){if("offset"===cV({step:e,offsetIsDiscrete:HU(t)}))return{step:e.step}}function IJ(e,t,n){const r=e===wI?"width":"height"
return t[r]||yV(n,r)}function RJ(e,t,n){if(t)return $L(t)?{signal:`${t.signal} ? 0 : ${RJ(e,!1,n)}`}:0
switch(e){case"bar":case"tick":return n.scale.minBandSize
case"line":case"trail":case"rule":return n.scale.minStrokeWidth
case"text":return n.scale.minFontSize
case"point":case"square":case"circle":return n.scale.minSize}throw new Error(OB("size",e))}const LJ=.95
function BJ(e,t,n){const r=fV(e.width)?e.width.step:mV(n,"width"),i=fV(e.height)?e.height.step:mV(n,"height")
return t.x||t.y?new vJ((()=>`min(${[t.x?t.x.signal:r,t.y?t.y.signal:i].join(", ")})`)):Math.min(r,i)}function UJ(e,t){KJ(e)?function(e,t){const n=e.component.scales,{config:r,encoding:i,markDef:o,specifiedScales:a}=e
for(const s of Yz(n)){const l=a[s],u=n[s],c=e.getScaleComponent(s),f=ZZ(i[s]),d=l[t],h=c.get("type"),p=c.get("padding"),g=c.get("paddingInner"),m=sq(h,t),y=lq(s,t)
if(void 0!==d&&(m?y&&WB(y):WB(NB(h,t,s))),m&&void 0===y)if(void 0!==d){const e=f.timeUnit,n=f.type
switch(t){case"domainMax":case"domainMin":VB(l[t])||"temporal"===n||e?u.set(t,{signal:KZ(l[t],{type:n,timeUnit:e})},!0):u.set(t,l[t],!0)
break
default:u.copyKeyFromObject(t,l)}}else{const n=t in qJ?qJ[t]({model:e,channel:s,fieldOrDatumDef:f,scaleType:h,scalePadding:p,scalePaddingInner:g,domain:l.domain,domainMin:l.domainMin,domainMax:l.domainMax,markDef:o,config:r,hasNestedOffsetScale:hW(i,s)}):r.scale[t]
void 0!==n&&u.set(t,n,!1)}}}(e,t):WJ(e,t)}const qJ={bins:e=>{let{model:t,fieldOrDatumDef:n}=e
return yZ(n)?function(e,t){const n=t.bin
if(AL(n)){const r=TX(e,t.field,n)
return new vJ((()=>e.getSignalName(r)))}if(SL(n)&&DL(n)&&void 0!==n.step)return{step:n.step}}(t,n):void 0},interpolate:e=>{let{channel:t,fieldOrDatumDef:n}=e
return function(e,t){if(zz([PI,zI,II],e)&&"nominal"!==t)return"hcl"}(t,n.type)},nice:e=>{let{scaleType:t,channel:n,domain:r,domainMin:i,domainMax:o,fieldOrDatumDef:a}=e
return function(e,t,n,r,i,o){var a
if(!((null===(a=qZ(o))||void 0===a?void 0:a.bin)||_e(n)||null!=i||null!=r||zz([TU,NU],e)))return!!HR(t)||void 0}(t,n,r,i,o,a)},padding:e=>{let{channel:t,scaleType:n,fieldOrDatumDef:r,markDef:i,config:o}=e
return function(e,t,n,r,i,o){if(HR(e)){if(YU(t)){if(void 0!==n.continuousPadding)return n.continuousPadding
const{type:t,orient:a}=i
if("bar"===t&&(!yZ(r)||!r.bin&&!r.timeUnit)&&("vertical"===a&&"x"===e||"horizontal"===a&&"y"===e))return o.continuousBandSize}if(t===$U)return n.pointPadding}}(t,n,o.scale,r,i,o.bar)},paddingInner:e=>{let{scalePadding:t,channel:n,markDef:r,scaleType:i,config:o,hasNestedOffsetScale:a}=e
return function(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
if(void 0===e){if(HR(t)){const{bandPaddingInner:e,barBandPaddingInner:t,rectBandPaddingInner:r,bandWithNestedOffsetPaddingInner:a}=i
return o?a:cI(e,"bar"===n?t:r)}return KR(t)&&r===PU?i.offsetBandPaddingInner:void 0}}(t,n,r.type,i,o.scale,a)},paddingOuter:e=>{let{scalePadding:t,channel:n,scaleType:r,scalePaddingInner:i,config:o,hasNestedOffsetScale:a}=e
return function(e,t,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
if(void 0===e)if(HR(t)){const{bandPaddingOuter:e,bandWithNestedOffsetPaddingOuter:t}=i
if(o)return t
if(n===PU)return cI(e,$L(r)?{signal:`${r.signal}/2`}:r/2)}else if(KR(t)){if(n===$U)return.5
if(n===PU)return i.offsetBandPaddingOuter}}(t,n,r,i,o.scale,a)},reverse:e=>{let{fieldOrDatumDef:t,scaleType:n,channel:r,config:i}=e
return function(e,t,n,r){return"x"===n&&void 0!==r.xReverse?GU(e)&&"descending"===t?$L(r.xReverse)?{signal:`!${r.xReverse.signal}`}:!r.xReverse:r.xReverse:!(!GU(e)||"descending"!==t)||void 0}(n,yZ(t)?t.sort:void 0,r,i.scale)},zero:e=>{let{channel:t,fieldOrDatumDef:n,domain:r,markDef:i,scaleType:o}=e
return function(e,t,n,r,i){if(n&&"unaggregated"!==n&&GU(i)){if(_e(n)){const e=n[0],t=n[n.length-1]
if(e<=0&&t>=0)return!0}return!1}if("size"===e&&"quantitative"===t.type&&!XU(i))return!0
if((!yZ(t)||!t.bin)&&zz([...VR,...YR],e)){const{orient:t,type:n}=r
return!zz(["bar","area","line","trail"],n)||!("horizontal"===t&&"y"===e||"vertical"===t&&"x"===e)}return!1}(t,n,r,i,o)}}
function ZJ(e){KJ(e)?function(e){const t=e.component.scales
for(const n of cL){const r=t[n]
if(!r)continue
const i=NJ(n,e)
r.setWithExplicit("range",i)}}(e):WJ(e,"range")}function WJ(e,t){const n=e.component.scales
for(const r of e.children)"range"===t?ZJ(r):UJ(r,t)
for(const r of Yz(n)){let i
for(const n of e.children){const e=n.component.scales[r]
e&&(i=ZH(i,e.getWithExplicit(t),t,"scale",UH(((e,n)=>"range"===t&&e.step&&n.step?e.step-n.step:0))))}n[r].setWithExplicit(t,i)}}function VJ(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
const o=HJ(t,n,r,i),{type:a}=e
return fL(t)?void 0!==a?cq(t,a)?yZ(n)&&!uq(a,n.type)?(WB(TB(a,o)),o):a:(WB(FB(t,a,o)),o):o:null}function HJ(e,t,n,r){var i
switch(t.type){case"nominal":case"ordinal":if(aR(e)||"discrete"===gL(e))return"shape"===e&&"ordinal"===t.type&&WB(SB(e,"ordinal")),"ordinal"
if(HR(e)||KR(e)){if(zz(["rect","bar","image","rule"],n.type))return"band"
if(r)return"band"}else if("arc"===n.type&&e in GR)return"band"
return Tq(n[ER(e)])||AZ(t)&&(null===(i=t.axis)||void 0===i?void 0:i.tickBand)?"band":"point"
case"temporal":return aR(e)?"time":"discrete"===gL(e)?(WB(SB(e,"temporal")),"ordinal"):yZ(t)&&t.timeUnit&&uU(t.timeUnit).utc?"utc":"time"
case"quantitative":return aR(e)?yZ(t)&&AL(t.bin)?"bin-ordinal":"linear":"discrete"===gL(e)?(WB(SB(e,"quantitative")),"ordinal"):"linear"
case"geojson":return}throw new Error(vB(t.type))}function GJ(e){KJ(e)?e.component.scales=function(e){const{encoding:t,mark:n,markDef:r}=e,i={}
for(const o of cL){const a=ZZ(t[o])
if(a&&n===Eq&&o===RI&&a.type===jU)continue
let s=a&&a.scale
if(!KR(o)||hW(t,SR(o))){if(a&&null!==s&&!1!==s){null!=s||(s={})
const n=VJ(s,o,a,r,hW(t,o))
i[o]=new jJ(e.scaleName(`${o}`,!0),{value:n,explicit:s.type===n})}}else s&&WB(kB(o))}return i}(e):e.component.scales=function(e){var t,n
const r=e.component.scales={},i={},o=e.component.resolve
for(const a of e.children){GJ(a)
for(const r of Yz(a.component.scales))if(null!==(t=(n=o.scale)[r])&&void 0!==t||(n[r]=cX(r,e)),"shared"===o.scale[r]){const e=i[r],t=a.component.scales[r].getWithExplicit("type")
e?IU(e.value,t.value)?i[r]=ZH(e,t,"type","scale",YJ):(o.scale[r]="independent",delete i[r]):i[r]=t}}for(const a of Yz(i)){const t=e.scaleName(a,!0),n=i[a]
r[a]=new jJ(t,n)
for(const r of e.children){const e=r.component.scales[a]
e&&(r.renameScale(e.get("name"),t),e.merged=!0)}}return r}(e)}const YJ=UH(((e,t)=>LU(e)-LU(t)))
var XJ=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
class JJ{constructor(){this.nameMap={}}rename(e,t){this.nameMap[e]=t}has(e){return void 0!==this.nameMap[e]}get(e){for(;this.nameMap[e]&&e!==this.nameMap[e];)e=this.nameMap[e]
return e}}function KJ(e){return"unit"===(null==e?void 0:e.type)}function QJ(e){return"facet"===(null==e?void 0:e.type)}function eK(e){return"concat"===(null==e?void 0:e.type)}function tK(e){return"layer"===(null==e?void 0:e.type)}class nK{constructor(e,t,n,r,i,o,a){var s,l
this.type=t,this.parent=n,this.config=i,this.correctDataNames=e=>{var t,n,r
return(null===(t=e.from)||void 0===t?void 0:t.data)&&(e.from.data=this.lookupDataSource(e.from.data)),(null===(r=null===(n=e.from)||void 0===n?void 0:n.facet)||void 0===r?void 0:r.data)&&(e.from.facet.data=this.lookupDataSource(e.from.facet.data)),e},this.parent=n,this.config=i,this.view=FL(a),this.name=null!==(s=e.name)&&void 0!==s?s:r,this.title=NL(e.title)?{text:e.title}:e.title?FL(e.title):void 0,this.scaleNameMap=n?n.scaleNameMap:new JJ,this.projectionNameMap=n?n.projectionNameMap:new JJ,this.signalNameMap=n?n.signalNameMap:new JJ,this.data=e.data,this.description=e.description,this.transforms=(null!==(l=e.transform)&&void 0!==l?l:[]).map((e=>aH(e)?{filter:Dz(e.filter,kU)}:e)),this.layout="layer"===t||"unit"===t?{}:function(e,t,n){var r,i
const o=n[t],a={},{spacing:s,columns:l}=o
void 0!==s&&(a.spacing=s),void 0!==l&&(sZ(e)&&!oZ(e.facet)||sV(e))&&(a.columns=l),lV(e)&&(a.columns=1)
for(const u of hV)if(void 0!==e[u])if("spacing"===u){const t=e[u]
a[u]=gt(t)?t:{row:null!==(r=t.row)&&void 0!==r?r:s,column:null!==(i=t.column)&&void 0!==i?i:s}}else a[u]=e[u]
return a}(e,t,i),this.component={data:{sources:n?n.component.data.sources:[],outputNodes:n?n.component.data.outputNodes:{},outputNodeRefCounts:n?n.component.data.outputNodeRefCounts:{},isFaceted:sZ(e)||(null==n?void 0:n.component.data.isFaceted)&&void 0===e.data},layoutSize:new RH,layoutHeaders:{row:{},column:{},facet:{}},mark:null,resolve:Object.assign({scale:{},axis:{},legend:{}},o?Mz(o):{}),selection:null,scales:null,projection:null,axes:{},legends:{}}}get width(){return this.getSizeSignalRef("width")}get height(){return this.getSizeSignalRef("height")}parse(){this.parseScale(),this.parseLayoutSize(),this.renameTopLevelLayoutSizeSignal(),this.parseSelections(),this.parseProjection(),this.parseData(),this.parseAxesAndHeaders(),this.parseLegends(),this.parseMarkGroup()}parseScale(){!function(e){let{ignoreRange:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
GJ(e),bJ(e)
for(const n of aq)UJ(e,n)
t||ZJ(e)}(this)}parseProjection(){jX(this)}renameTopLevelLayoutSizeSignal(){"width"!==this.getName("width")&&this.renameSignal(this.getName("width"),"width"),"height"!==this.getName("height")&&this.renameSignal(this.getName("height"),"height")}parseLegends(){OX(this)}assembleEncodeFromView(e){const{style:t}=e,n=XJ(e,["style"]),r={}
for(const i of Yz(n)){const e=n[i]
void 0!==e&&(r[i]=WL(e))}return r}assembleGroupEncodeEntry(e){let t={}
return this.view&&(t=this.assembleEncodeFromView(this.view)),e||(this.description&&(t.description=WL(this.description)),"unit"!==this.type&&"layer"!==this.type)?Gz(t)?void 0:t:Object.assign({width:this.getSizeSignalRef("width"),height:this.getSizeSignalRef("height")},null!=t?t:{})}assembleLayout(){if(!this.layout)return
const e=this.layout,{spacing:t}=e,n=XJ(e,["spacing"]),{component:r,config:i}=this,o=function(e,t){const n={}
for(const r of lR){const i=e[r]
if(null==i?void 0:i.facetFieldDef){const{titleAnchor:e,titleOrient:o}=WY(["titleAnchor","titleOrient"],i.facetFieldDef.header,t,r),a=qY(r,o),s=nX(e,a)
void 0!==s&&(n[a]=s)}}return Gz(n)?void 0:n}(r.layoutHeaders,i)
return Object.assign(Object.assign(Object.assign({padding:t},this.assembleDefaultLayout()),n),o?{titleBand:o}:{})}assembleDefaultLayout(){return{}}assembleHeaderMarks(){const{layoutHeaders:e}=this.component
let t=[]
for(const n of lR)e[n].title&&t.push(GY(this,n))
for(const n of VY)t=t.concat(JY(this,n))
return t}assembleAxes(){return function(e,t){const{x:n=[],y:r=[]}=e
return[...n.map((e=>jY(e,"grid",t))),...r.map((e=>jY(e,"grid",t))),...n.map((e=>jY(e,"main",t))),...r.map((e=>jY(e,"main",t)))].filter((e=>e))}(this.component.axes,this.config)}assembleLegends(){return SX(this)}assembleProjections(){return tK(e=this)||eK(e)?function(e){return e.children.reduce(((e,t)=>e.concat(t.assembleProjections())),DX(e))}(e):DX(e)
var e}assembleTitle(){var e,t,n
const r=null!==(e=this.title)&&void 0!==e?e:{},{encoding:i}=r,o=XJ(r,["encoding"]),a=Object.assign(Object.assign(Object.assign({},TL(this.config.title).nonMarkTitleProperties),o),i?{encode:{update:i}}:{})
if(a.text)return zz(["unit","layer"],this.type)?zz(["middle",void 0],a.anchor)&&(null!==(t=a.frame)&&void 0!==t||(a.frame="group")):null!==(n=a.anchor)&&void 0!==n||(a.anchor="start"),Gz(a)?void 0:a}assembleGroup(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
const t={}
e=e.concat(this.assembleSignals()),e.length>0&&(t.signals=e)
const n=this.assembleLayout()
n&&(t.layout=n),t.marks=[].concat(this.assembleHeaderMarks(),this.assembleMarks())
const r=!this.parent||QJ(this.parent)?CJ(this):[]
r.length>0&&(t.scales=r)
const i=this.assembleAxes()
i.length>0&&(t.axes=i)
const o=this.assembleLegends()
return o.length>0&&(t.legends=o),t}getName(e){return Qz((this.name?`${this.name}_`:"")+e)}getDataName(e){return this.getName(QH[e].toLowerCase())}requestDataName(e){const t=this.getDataName(e),n=this.component.data.outputNodeRefCounts
return n[t]=(n[t]||0)+1,t}getSizeSignalRef(e){if(QJ(this.parent)){const t=XR(lX(e)),n=this.component.scales[t]
if(n&&!n.merged){const e=n.get("type"),r=n.get("range")
if(HU(e)&&PL(r)){const e=n.get("name"),r=SJ(DJ(this,t))
return r?{signal:sX(e,n,jZ({aggregate:"distinct",field:r},{expr:"datum"}))}:(WB(lB(t)),null)}}}return{signal:this.signalNameMap.get(this.getName(e))}}lookupDataSource(e){const t=this.component.data.outputNodes[e]
return t?t.getSource():e}getSignalName(e){return this.signalNameMap.get(e)}renameSignal(e,t){this.signalNameMap.rename(e,t)}renameScale(e,t){this.scaleNameMap.rename(e,t)}renameProjection(e,t){this.projectionNameMap.rename(e,t)}scaleName(e,t){return t?this.getName(e):bR(e)&&fL(e)&&this.component.scales[e]||this.scaleNameMap.has(this.getName(e))?this.scaleNameMap.get(this.getName(e)):void 0}projectionName(e){return e?this.getName("projection"):this.component.projection&&!this.component.projection.merged||this.projectionNameMap.has(this.getName("projection"))?this.projectionNameMap.get(this.getName("projection")):void 0}getScaleComponent(e){if(!this.component.scales)throw new Error("getScaleComponent cannot be called before parseScale(). Make sure you have called parseScale or use parseUnitModelWithScale().")
const t=this.component.scales[e]
return t&&!t.merged?t:this.parent?this.parent.getScaleComponent(e):void 0}getSelectionComponent(e,t){let n=this.component.selection[e]
if(!n&&this.parent&&(n=this.parent.getSelectionComponent(e,t)),!n)throw new Error(`Cannot find a selection named "${t}".`)
return n}hasAxisOrientSignalRef(){var e,t
return(null===(e=this.component.axes.x)||void 0===e?void 0:e.some((e=>e.hasOrientSignalRef())))||(null===(t=this.component.axes.y)||void 0===t?void 0:t.some((e=>e.hasOrientSignalRef())))}}class rK extends nK{vgField(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=this.fieldDef(e)
if(n)return jZ(n,t)}reduceFieldDef(e,t){return function(e,t,n,r){return e?Yz(e).reduce(((n,i)=>{const o=e[i]
return _e(o)?o.reduce(((e,n)=>t.call(r,e,n,i)),n):t.call(r,n,o,i)}),n):n}(this.getMapping(),((t,n,r)=>{const i=qZ(n)
return i?e(t,i,r):t}),t)}forEachFieldDef(e,t){bW(this.getMapping(),((t,n)=>{const r=qZ(t)
r&&e(r,n)}),t)}}class iK extends oG{constructor(e,t){var n,r,i
super(e),this.transform=t,this.transform=Mz(t)
const o=null!==(n=this.transform.as)&&void 0!==n?n:[void 0,void 0]
this.transform.as=[null!==(r=o[0])&&void 0!==r?r:"value",null!==(i=o[1])&&void 0!==i?i:"density"],t.groupby&&null==t.minsteps&&null==t.maxsteps&&null==t.steps&&(this.transform.steps=200)}clone(){return new iK(null,Mz(this.transform))}dependentFields(){var e
return new Set([this.transform.density,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}producedFields(){return new Set(this.transform.as)}hash(){return`DensityTransform ${$z(this.transform)}`}assemble(){const e=this.transform,{density:t}=e,n=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["density"])
return Object.assign({type:"kde",field:t},n)}}class oK extends oG{constructor(e,t){super(e),this.filter=t}clone(){return new oK(null,Object.assign({},this.filter))}static make(e,t){const{config:n,mark:r,markDef:i}=t
if("filter"!==XL("invalid",i,n))return null
const o=t.reduceFieldDef(((e,n,i)=>{const o=fL(i)&&t.getScaleComponent(i)
return o&&GU(o.get("type"))&&"count"!==n.aggregate&&!Aq(r)&&(e[n.field]=n),e}),{})
return Yz(o).length?new oK(e,o):null}dependentFields(){return new Set(Yz(this.filter))}producedFields(){return new Set}hash(){return`FilterInvalid ${$z(this.filter)}`}assemble(){const e=Yz(this.filter).reduce(((e,t)=>{const n=this.filter[t],r=jZ(n,{expr:"datum"})
return null!==n&&("temporal"===n.type?e.push(`(isDate(${r}) || (isValid(${r}) && isFinite(+${r})))`):"quantitative"===n.type&&(e.push(`isValid(${r})`),e.push(`isFinite(+${r})`))),e}),[])
return e.length>0?{type:"filter",expr:e.join(" && ")}:null}}class aK extends oG{constructor(e,t){super(e),this.transform=t,this.transform=Mz(t)
const{flatten:n,as:r=[]}=this.transform
this.transform.as=n.map(((e,t)=>{var n
return null!==(n=r[t])&&void 0!==n?n:e}))}clone(){return new aK(this.parent,Mz(this.transform))}dependentFields(){return new Set(this.transform.flatten)}producedFields(){return new Set(this.transform.as)}hash(){return`FlattenTransform ${$z(this.transform)}`}assemble(){const{flatten:e,as:t}=this.transform
return{type:"flatten",fields:e,as:t}}}class sK extends oG{constructor(e,t){var n,r,i
super(e),this.transform=t,this.transform=Mz(t)
const o=null!==(n=this.transform.as)&&void 0!==n?n:[void 0,void 0]
this.transform.as=[null!==(r=o[0])&&void 0!==r?r:"key",null!==(i=o[1])&&void 0!==i?i:"value"]}clone(){return new sK(null,Mz(this.transform))}dependentFields(){return new Set(this.transform.fold)}producedFields(){return new Set(this.transform.as)}hash(){return`FoldTransform ${$z(this.transform)}`}assemble(){const{fold:e,as:t}=this.transform
return{type:"fold",fields:e,as:t}}}class lK extends oG{constructor(e,t,n,r){super(e),this.fields=t,this.geojson=n,this.signal=r}clone(){return new lK(null,Mz(this.fields),this.geojson,this.signal)}static parseAll(e,t){if(t.component.projection&&!t.component.projection.isFit)return e
let n=0
for(const r of[[TI,FI],[$I,NI]]){const i=r.map((e=>{const n=ZZ(t.encoding[e])
return yZ(n)?n.field:bZ(n)?{expr:`${n.datum}`}:kZ(n)?{expr:`${n.value}`}:void 0}));(i[0]||i[1])&&(e=new lK(e,i,null,t.getName("geojson_"+n++)))}if(t.channelHasField(RI)){const r=t.typedFieldDef(RI)
r.type===jU&&(e=new lK(e,null,r.field,t.getName("geojson_"+n++)))}return e}dependentFields(){var e
const t=(null!==(e=this.fields)&&void 0!==e?e:[]).filter(yt)
return new Set([...this.geojson?[this.geojson]:[],...t])}producedFields(){return new Set}hash(){return`GeoJSON ${this.geojson} ${this.signal} ${$z(this.fields)}`}assemble(){return[...this.geojson?[{type:"filter",expr:`isValid(datum["${this.geojson}"])`}]:[],Object.assign(Object.assign(Object.assign({type:"geojson"},this.fields?{fields:this.fields}:{}),this.geojson?{geojson:this.geojson}:{}),{signal:this.signal})]}}class uK extends oG{constructor(e,t,n,r){super(e),this.projection=t,this.fields=n,this.as=r}clone(){return new uK(null,this.projection,Mz(this.fields),Mz(this.as))}static parseAll(e,t){if(!t.projectionName())return e
for(const n of[[TI,FI],[$I,NI]]){const r=n.map((e=>{const n=ZZ(t.encoding[e])
return yZ(n)?n.field:bZ(n)?{expr:`${n.datum}`}:kZ(n)?{expr:`${n.value}`}:void 0})),i=n[0]===$I?"2":"";(r[0]||r[1])&&(e=new uK(e,t.projectionName(),r,[t.getName(`x${i}`),t.getName(`y${i}`)]))}return e}dependentFields(){return new Set(this.fields.filter(yt))}producedFields(){return new Set(this.as)}hash(){return`Geopoint ${this.projection} ${$z(this.fields)} ${$z(this.as)}`}assemble(){return{type:"geopoint",projection:this.projection,fields:this.fields,as:this.as}}}class cK extends oG{constructor(e,t){super(e),this.transform=t}clone(){return new cK(null,Mz(this.transform))}dependentFields(){var e
return new Set([this.transform.impute,this.transform.key,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}producedFields(){return new Set([this.transform.impute])}processSequence(e){const{start:t=0,stop:n,step:r}=e
return{signal:`sequence(${[t,n,...r?[r]:[]].join(",")})`}}static makeFromTransform(e,t){return new cK(e,t)}static makeFromEncoding(e,t){const n=t.encoding,r=n.x,i=n.y
if(yZ(r)&&yZ(i)){const o=r.impute?r:i.impute?i:void 0
if(void 0===o)return
const a=r.impute?i:i.impute?r:void 0,{method:s,value:l,frame:u,keyvals:c}=o.impute,f=xW(t.mark,n)
return new cK(e,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({impute:o.field,key:a.field},s?{method:s}:{}),void 0!==l?{value:l}:{}),u?{frame:u}:{}),void 0!==c?{keyvals:c}:{}),f.length?{groupby:f}:{}))}return null}hash(){return`Impute ${$z(this.transform)}`}assemble(){const{impute:e,key:t,keyvals:n,method:r,groupby:i,value:o,frame:a=[null,null]}=this.transform,s=Object.assign(Object.assign(Object.assign(Object.assign({type:"impute",field:e,key:t},n?{keyvals:sH(n)?this.processSequence(n):n}:{}),{method:"value"}),i?{groupby:i}:{}),{value:r&&"value"!==r?null:o})
return r&&"value"!==r?[s,Object.assign({type:"window",as:[`imputed_${e}_value`],ops:[r],fields:[e],frame:a,ignorePeers:!1},i?{groupby:i}:{}),{type:"formula",expr:`datum.${e} === null ? datum.imputed_${e}_value : datum.${e}`,as:e}]:[s]}}class fK extends oG{constructor(e,t){var n,r,i
super(e),this.transform=t,this.transform=Mz(t)
const o=null!==(n=this.transform.as)&&void 0!==n?n:[void 0,void 0]
this.transform.as=[null!==(r=o[0])&&void 0!==r?r:t.on,null!==(i=o[1])&&void 0!==i?i:t.loess]}clone(){return new fK(null,Mz(this.transform))}dependentFields(){var e
return new Set([this.transform.loess,this.transform.on,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}producedFields(){return new Set(this.transform.as)}hash(){return`LoessTransform ${$z(this.transform)}`}assemble(){const e=this.transform,{loess:t,on:n}=e,r=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["loess","on"])
return Object.assign({type:"loess",x:n,y:t},r)}}class dK extends oG{constructor(e,t,n){super(e),this.transform=t,this.secondary=n}clone(){return new dK(null,Mz(this.transform),this.secondary)}static make(e,t,n,r){const i=t.component.data.sources,{from:o}=n
let a=null
if(function(e){return"data"in e}(o)){let e=SK(o.data,i)
e||(e=new ZX(o.data),i.push(e))
const n=t.getName(`lookup_${r}`)
a=new aG(e,n,QH.Lookup,t.component.data.outputNodeRefCounts),t.component.data.outputNodes[n]=a}else if(function(e){return"param"in e}(o)){const e=o.param
let r
n=Object.assign({as:e},n)
try{r=t.getSelectionComponent(Qz(e),e)}catch(t){throw new Error(`Lookups can only be performed on selection parameters. "${e}" is a variable parameter.`)}if(a=r.materialized,!a)throw new Error(`Cannot define and lookup the "${e}" selection in the same view. Try moving the lookup into a second, layered view?`)}return new dK(e,n,a.getSource())}dependentFields(){return new Set([this.transform.lookup])}producedFields(){return new Set(this.transform.as?Ve(this.transform.as):this.transform.from.fields)}hash(){return`Lookup ${$z({transform:this.transform,secondary:this.secondary})}`}assemble(){let e
if(this.transform.from.fields)e=Object.assign({values:this.transform.from.fields},this.transform.as?{as:Ve(this.transform.as)}:{})
else{let t=this.transform.as
yt(t)||(WB('If "from.fields" is not specified, "as" has to be a string that specifies the key to be used for the data from the secondary source.'),t="_lookup"),e={as:[t]}}return Object.assign(Object.assign({type:"lookup",from:this.secondary,key:this.transform.from.key,fields:[this.transform.lookup]},e),this.transform.default?{default:this.transform.default}:{})}}class hK extends oG{constructor(e,t){var n,r,i
super(e),this.transform=t,this.transform=Mz(t)
const o=null!==(n=this.transform.as)&&void 0!==n?n:[void 0,void 0]
this.transform.as=[null!==(r=o[0])&&void 0!==r?r:"prob",null!==(i=o[1])&&void 0!==i?i:"value"]}clone(){return new hK(null,Mz(this.transform))}dependentFields(){var e
return new Set([this.transform.quantile,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}producedFields(){return new Set(this.transform.as)}hash(){return`QuantileTransform ${$z(this.transform)}`}assemble(){const e=this.transform,{quantile:t}=e,n=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["quantile"])
return Object.assign({type:"quantile",field:t},n)}}class pK extends oG{constructor(e,t){var n,r,i
super(e),this.transform=t,this.transform=Mz(t)
const o=null!==(n=this.transform.as)&&void 0!==n?n:[void 0,void 0]
this.transform.as=[null!==(r=o[0])&&void 0!==r?r:t.on,null!==(i=o[1])&&void 0!==i?i:t.regression]}clone(){return new pK(null,Mz(this.transform))}dependentFields(){var e
return new Set([this.transform.regression,this.transform.on,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}producedFields(){return new Set(this.transform.as)}hash(){return`RegressionTransform ${$z(this.transform)}`}assemble(){const e=this.transform,{regression:t,on:n}=e,r=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["regression","on"])
return Object.assign({type:"regression",x:n,y:t},r)}}class gK extends oG{constructor(e,t){super(e),this.transform=t}clone(){return new gK(null,Mz(this.transform))}addDimensions(e){var t
this.transform.groupby=Uz((null!==(t=this.transform.groupby)&&void 0!==t?t:[]).concat(e),(e=>e))}producedFields(){}dependentFields(){var e
return new Set([this.transform.pivot,this.transform.value,...null!==(e=this.transform.groupby)&&void 0!==e?e:[]])}hash(){return`PivotTransform ${$z(this.transform)}`}assemble(){const{pivot:e,value:t,groupby:n,limit:r,op:i}=this.transform
return Object.assign(Object.assign(Object.assign({type:"pivot",field:e,value:t},void 0!==r?{limit:r}:{}),void 0!==i?{op:i}:{}),void 0!==n?{groupby:n}:{})}}class mK extends oG{constructor(e,t){super(e),this.transform=t}clone(){return new mK(null,Mz(this.transform))}dependentFields(){return new Set}producedFields(){return new Set}hash(){return`SampleTransform ${$z(this.transform)}`}assemble(){return{type:"sample",size:this.transform.sample}}}function yK(e){let t=0
return function n(r,i){var o
if(r instanceof ZX&&!r.isGenerator&&!VH(r.data)&&(e.push(i),i={name:null,source:i.name,transform:[]}),r instanceof LX&&(r.parent instanceof ZX&&!i.source?(i.format=Object.assign(Object.assign({},null!==(o=i.format)&&void 0!==o?o:{}),{parse:r.assembleFormatParse()}),i.transform.push(...r.assembleTransforms(!0))):i.transform.push(...r.assembleTransforms())),r instanceof zX)return i.name||(i.name="data_"+t++),!i.source||i.transform.length>0?(e.push(i),r.data=i.name):r.data=i.source,void e.push(...r.assemble())
switch((r instanceof UX||r instanceof qX||r instanceof oK||r instanceof kY||r instanceof BY||r instanceof uK||r instanceof PX||r instanceof dK||r instanceof cJ||r instanceof lJ||r instanceof sK||r instanceof aK||r instanceof iK||r instanceof fK||r instanceof hK||r instanceof pK||r instanceof BX||r instanceof mK||r instanceof gK)&&i.transform.push(r.assemble()),(r instanceof $X||r instanceof lG||r instanceof cK||r instanceof uJ||r instanceof lK)&&i.transform.push(...r.assemble()),r instanceof aG&&(i.source&&0===i.transform.length?r.setSource(i.source):r.parent instanceof aG?r.setSource(i.name):(i.name||(i.name="data_"+t++),r.setSource(i.name),1===r.numChildren()&&(e.push(i),i={name:null,source:i.name,transform:[]}))),r.numChildren()){case 0:r instanceof aG&&(!i.source||i.transform.length>0)&&e.push(i)
break
case 1:n(r.children[0],i)
break
default:{i.name||(i.name="data_"+t++)
let o=i.name
!i.source||i.transform.length>0?e.push(i):o=i.source
for(const e of r.children)n(e,{name:null,source:o,transform:[]})
break}}}}function vK(e,t){var n,r
const i=[],o=yK(i)
let a=0
for(const l of e.sources){l.hasName()||(l.dataName="source_"+a++)
const e=l.assemble()
o(l,e)}for(const l of i)0===l.transform.length&&delete l.transform
let s=0
for(const[l,u]of i.entries())0!==(null!==(n=u.transform)&&void 0!==n?n:[]).length||u.source||i.splice(s++,0,i.splice(l,1)[0])
for(const l of i)for(const t of null!==(r=l.transform)&&void 0!==r?r:[])"lookup"===t.type&&(t.from=e.outputNodes[t.from].getSource())
for(const l of i)l.name in t&&(l.values=t[l.name])
return i}function bK(e,t){var n
const{facet:r,config:i,child:o,component:a}=e
if(e.channelHasField(t)){const s=r[t],l=ZY("title",null,i,t)
let u=IZ(s,i,{allowDisabling:!0,includeDefault:void 0===l||!!l})
o.component.layoutHeaders[t].title&&(u=_e(u)?u.join(", "):u,u+=` / ${o.component.layoutHeaders[t].title}`,o.component.layoutHeaders[t].title=null)
const c=ZY("labelOrient",s.header,i,t),f=null!==s.header&&cI(null===(n=s.header)||void 0===n?void 0:n.labels,i.header.labels,!0),d=zz(["bottom","right"],c)?"footer":"header"
a.layoutHeaders[t]={title:null!==s.header?u:null,facetFieldDef:s,[d]:"facet"===t?[]:[xK(e,t,f)]}}}function xK(e,t,n){const r="row"===t?"height":"width"
return{labels:n,sizeSignal:e.child.component.layoutSize.get(r)?e.child.getSizeSignalRef(r):void 0,axes:[]}}function _K(e,t){var n
const{child:r}=e
if(r.component.axes[t]){const{layoutHeaders:o,resolve:a}=e.component
if(a.axis[t]=fX(a,t),"shared"===a.axis[t]){const a="x"===t?"column":"row",s=o[a]
for(const o of r.component.axes[t]){const t="top"===(i=o.get("orient"))||"left"===i||$L(i)?"header":"footer"
null!==(n=s[t])&&void 0!==n||(s[t]=[xK(e,a,!1)])
const r=jY(o,"main",e.config,{header:!0})
r&&s[t][0].axes.push(r),o.mainExtracted=!0}}}var i}function wK(e){for(const t of e.children)t.parseLayoutSize()}function OK(e,t){var n
const r=lX(t),i=XR(r),o=e.component.resolve,a=e.component.layoutSize
let s
for(const l of e.children){const t=l.component.layoutSize.getWithExplicit(r),a=null!==(n=o.scale[i])&&void 0!==n?n:cX(i,e)
if("independent"===a&&"step"===t.value){s=void 0
break}if(s){if("independent"===a&&s.value!==t.value){s=void 0
break}s=ZH(s,t,r,"")}else s=t}if(s){for(const n of e.children)e.renameSignal(n.getName(r),e.getName(t)),n.component.layoutSize.set(r,"merged",!1)
a.setWithExplicit(t,s)}else a.setWithExplicit(t,{explicit:!1,value:void 0})}function kK(e,t){const n="width"===t?"x":"y",r=e.config,i=e.getScaleComponent(n)
if(i){const e=i.get("type"),n=i.get("range")
if(HU(e)){const e=yV(r.view,t)
return PL(n)||fV(e)?"step":e}return gV(r.view,t)}if(e.hasProjection||"arc"===e.mark)return gV(r.view,t)
{const e=yV(r.view,t)
return fV(e)?e.step:e}}function EK(e,t,n){return jZ(t,Object.assign({suffix:`by_${jZ(e)}`},null!=n?n:{}))}class AK extends rK{constructor(e,t,n,r){super(e,"facet",t,n,r,e.resolve),this.child=JK(e.spec,this,this.getName("child"),void 0,r),this.children=[this.child],this.facet=this.initFacet(e.facet)}initFacet(e){if(!oZ(e))return{facet:this.initFacetFieldDef(e,"facet")}
const t=Yz(e),n={}
for(const r of t){if(![bI,xI].includes(r)){WB(OB(r,"facet"))
break}const t=e[r]
if(void 0===t.field){WB(wB(t,r))
break}n[r]=this.initFacetFieldDef(t,r)}return n}initFacetFieldDef(e,t){const n=HZ(e,t)
return n.header?n.header=FL(n.header):null===n.header&&(n.header=null),n}channelHasField(e){return!!this.facet[e]}fieldDef(e){return this.facet[e]}parseData(){this.component.data=DK(this),this.child.parseData()}parseLayoutSize(){wK(this)}parseSelections(){this.child.parseSelections(),this.component.selection=this.child.component.selection}parseMarkGroup(){this.child.parseMarkGroup()}parseAxesAndHeaders(){this.child.parseAxesAndHeaders(),function(e){for(const t of lR)bK(e,t)
_K(e,"x"),_K(e,"y")}(this)}assembleSelectionTopLevelSignals(e){return this.child.assembleSelectionTopLevelSignals(e)}assembleSignals(){return this.child.assembleSignals(),[]}assembleSelectionData(e){return this.child.assembleSelectionData(e)}getHeaderLayoutMixins(){var e,t,n
const r={}
for(const i of lR)for(const o of HY){const a=this.component.layoutHeaders[i],s=a[o],{facetFieldDef:l}=a
if(l){const t=ZY("titleOrient",l.header,this.config,i)
if(["right","bottom"].includes(t)){const n=qY(i,t)
null!==(e=r.titleAnchor)&&void 0!==e||(r.titleAnchor={}),r.titleAnchor[n]="end"}}if(null==s?void 0:s[0]){const e="row"===i?"height":"width",s="header"===o?"headerBand":"footerBand"
"facet"===i||this.child.component.layoutSize.get(e)||(null!==(t=r[s])&&void 0!==t||(r[s]={}),r[s][i]=.5),a.title&&(null!==(n=r.offset)&&void 0!==n||(r.offset={}),r.offset["row"===i?"rowTitle":"columnTitle"]=10)}}return r}assembleDefaultLayout(){const{column:e,row:t}=this.facet,n=e?this.columnDistinctSignal():t?1:void 0
let r="all"
return(t||"independent"!==this.component.resolve.scale.x)&&(e||"independent"!==this.component.resolve.scale.y)||(r="none"),Object.assign(Object.assign(Object.assign({},this.getHeaderLayoutMixins()),n?{columns:n}:{}),{bounds:"full",align:r})}assembleLayoutSignals(){return this.child.assembleLayoutSignals()}columnDistinctSignal(){if(!(this.parent&&this.parent instanceof AK))return{signal:`length(data('${this.getName("column_domain")}'))`}}assembleGroupStyle(){}assembleGroup(e){return this.parent&&this.parent instanceof AK?Object.assign(Object.assign({},this.channelHasField("column")?{encode:{update:{columns:{field:jZ(this.facet.column,{prefix:"distinct"})}}}}:{}),super.assembleGroup(e)):super.assembleGroup(e)}getCardinalityAggregateForChild(){const e=[],t=[],n=[]
if(this.child instanceof AK){if(this.child.channelHasField("column")){const r=jZ(this.child.facet.column)
e.push(r),t.push("distinct"),n.push(`distinct_${r}`)}}else for(const r of VR){const i=this.child.component.scales[r]
if(i&&!i.merged){const o=i.get("type"),a=i.get("range")
if(HU(o)&&PL(a)){const i=SJ(DJ(this.child,r))
i?(e.push(i),t.push("distinct"),n.push(`distinct_${i}`)):WB(lB(r))}}}return{fields:e,ops:t,as:n}}assembleFacet(){const{name:e,data:t}=this.component.data.facetRoot,{row:n,column:r}=this.facet,{fields:i,ops:o,as:a}=this.getCardinalityAggregateForChild(),s=[]
for(const u of lR){const e=this.facet[u]
if(e){s.push(jZ(e))
const{bin:t,sort:l}=e
if(AL(t)&&s.push(jZ(e,{binSuffix:"end"})),rZ(l)){const{field:t,op:s=Qq}=l,u=EK(e,l)
n&&r?(i.push(u),o.push("max"),a.push(u)):(i.push(t),o.push(s),a.push(u))}else if(_e(l)){const t=UY(e,u)
i.push(t),o.push("max"),a.push(t)}}}const l=!!n&&!!r
return Object.assign({name:e,data:t,groupby:s},l||i.length>0?{aggregate:Object.assign(Object.assign({},l?{cross:l}:{}),i.length?{fields:i,ops:o,as:a}:{})}:{})}facetSortFields(e){const{facet:t}=this,n=t[e]
return n?rZ(n.sort)?[EK(n,n.sort,{expr:"datum"})]:_e(n.sort)?[UY(n,e,{expr:"datum"})]:[jZ(n,{expr:"datum"})]:[]}facetSortOrder(e){const{facet:t}=this,n=t[e]
if(n){const{sort:e}=n
return[(rZ(e)?e.order:!_e(e)&&e)||"ascending"]}return[]}assembleLabelTitle(){var e
const{facet:t,config:n}=this
if(t.facet)return QY(t.facet,"facet",n)
const r={row:["top","bottom"],column:["left","right"]}
for(const i of VY)if(t[i]){const o=ZY("labelOrient",null===(e=t[i])||void 0===e?void 0:e.header,n,i)
if(r[i].includes(o))return QY(t[i],i,n)}}assembleMarks(){const{child:e}=this,t=function(e){const t=[],n=yK(t)
for(const r of e.children)n(r,{source:e.name,name:null,transform:[]})
return t}(this.component.data.facetRoot),n=e.assembleGroupEncodeEntry(!1),r=this.assembleLabelTitle()||e.assembleTitle(),i=e.assembleGroupStyle()
return[Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({name:this.getName("cell"),type:"group"},r?{title:r}:{}),i?{style:i}:{}),{from:{facet:this.assembleFacet()},sort:{field:lR.map((e=>this.facetSortFields(e))).flat(),order:lR.map((e=>this.facetSortOrder(e))).flat()}}),t.length>0?{data:t}:{}),n?{encode:{update:n}}:{}),e.assembleGroup(function(e,t){if(e.component.selection&&Yz(e.component.selection).length){const n=Et(e.getName("cell"))
t.unshift({name:"facet",value:{},on:[{events:CT("mousemove","scope"),update:`isTuple(facet) ? facet : group(${n}).datum`}]})}return iG(t)}(this,[])))]}getMapping(){return this.facet}}function SK(e,t){var n,r,i,o
for(const a of t){const t=a.data
if(e.name&&a.hasName()&&e.name!==a.dataName)continue
const s=null===(n=e.format)||void 0===n?void 0:n.mesh,l=null===(r=t.format)||void 0===r?void 0:r.feature
if(s&&l)continue
const u=null===(i=e.format)||void 0===i?void 0:i.feature
if((u||l)&&u!==l)continue
const c=null===(o=t.format)||void 0===o?void 0:o.mesh
if(!s&&!c||s===c)if(HH(e)&&HH(t)){if(Cz(e.values,t.values))return a}else if(VH(e)&&VH(t)){if(e.url===t.url)return a}else if(GH(e)&&e.name===a.dataName)return a}return null}function DK(e){var t,n,r,i,o,a,s,l,u,c
let f=function(e,t){if(e.data||!e.parent){if(null===e.data){const e=new ZX({values:[]})
return t.push(e),e}const n=SK(e.data,t)
if(n)return YH(e.data)||(n.data.format=Lz({},e.data.format,n.data.format)),!n.hasName()&&e.data.name&&(n.dataName=e.data.name),n
{const n=new ZX(e.data)
return t.push(n),n}}return e.parent.component.data.facetRoot?e.parent.component.data.facetRoot:e.parent.component.data.main}(e,e.component.data.sources)
const{outputNodes:d,outputNodeRefCounts:h}=e.component.data,p=e.data,g=p&&(YH(p)||VH(p)||HH(p))||!e.parent?new WH:e.parent.component.data.ancestorParse.clone()
YH(p)?(XH(p)?f=new qX(f,p.sequence):KH(p)&&(f=new UX(f,p.graticule)),g.parseNothing=!0):null===(null===(t=null==p?void 0:p.format)||void 0===t?void 0:t.parse)&&(g.parseNothing=!0),f=null!==(n=LX.makeExplicit(f,e,g))&&void 0!==n?n:f,f=new BX(f)
const m=e.parent&&tK(e.parent);(KJ(e)||QJ(e))&&m&&(f=null!==(r=$X.makeFromEncoding(f,e))&&void 0!==r?r:f),e.transforms.length>0&&(f=function(e,t,n){var r,i
let o=0
for(const a of t.transforms){let s,l
if(vH(a))l=e=new BY(e,a),s="derived"
else if(aH(a)){const i=RX(a)
l=e=null!==(r=LX.makeWithAncestors(e,{},i,n))&&void 0!==r?r:e,e=new kY(e,t,a.filter)}else if(bH(a))l=e=$X.makeFromTransform(e,a,t),s="number"
else if(_H(a))s="date",void 0===n.getWithExplicit(a.field).value&&(e=new LX(e,{[a.field]:s}),n.set(a.field,s,!1)),l=e=lG.makeFromTransform(e,a)
else if(wH(a))l=e=PX.makeFromTransform(e,a),s="number",bY(t)&&(e=new BX(e))
else if(lH(a))l=e=dK.make(e,t,a,o++),s="derived"
else if(gH(a))l=e=new cJ(e,a),s="number"
else if(mH(a))l=e=new lJ(e,a),s="number"
else if(OH(a))l=e=uJ.makeFromTransform(e,a),s="derived"
else if(kH(a))l=e=new sK(e,a),s="derived"
else if(yH(a))l=e=new aK(e,a),s="derived"
else if(uH(a))l=e=new gK(e,a),s="derived"
else if(pH(a))e=new mK(e,a)
else if(xH(a))l=e=cK.makeFromTransform(e,a),s="derived"
else if(cH(a))l=e=new iK(e,a),s="derived"
else if(fH(a))l=e=new hK(e,a),s="derived"
else if(dH(a))l=e=new pK(e,a),s="derived"
else{if(!hH(a)){WB(`Ignoring an invalid transform: ${Nz(a)}.`)
continue}l=e=new fK(e,a),s="derived"}if(l&&void 0!==s)for(const e of null!==(i=l.producedFields())&&void 0!==i?i:[])n.set(e,s,!1)}return e}(f,e,g))
const y=function(e){const t={}
if(KJ(e)&&e.component.selection)for(const n of Yz(e.component.selection)){const r=e.component.selection[n]
for(const e of r.project.items)!e.channel&&uI(e.field)>1&&(t[e.field]="flatten")}return t}(e),v=function(e){const t={}
function n(e){var n
JZ(e)?t[e.field]="date":"quantitative"===e.type&&yt(n=e.aggregate)&&zz(["min","max"],n)?t[e.field]="number":uI(e.field)>1?e.field in t||(t[e.field]="flatten"):EZ(e)&&rZ(e.sort)&&uI(e.sort.field)>1&&(e.sort.field in t||(t[e.sort.field]="flatten"))}if((KJ(e)||QJ(e))&&e.forEachFieldDef(((t,r)=>{if(OZ(t))n(t)
else{const i=wR(r),o=e.fieldDef(i)
n(Object.assign(Object.assign({},t),{type:o.type}))}})),KJ(e)){const{mark:n,markDef:r,encoding:i}=e
if(Aq(n)&&!e.encoding.order){const e=i["horizontal"===r.orient?"y":"x"]
yZ(e)&&"quantitative"===e.type&&!(e.field in t)&&(t[e.field]="number")}}return t}(e)
f=null!==(i=LX.makeWithAncestors(f,{},Object.assign(Object.assign({},y),v),g))&&void 0!==i?i:f,KJ(e)&&(f=lK.parseAll(f,e),f=uK.parseAll(f,e)),(KJ(e)||QJ(e))&&(m||(f=null!==(o=$X.makeFromEncoding(f,e))&&void 0!==o?o:f),f=null!==(a=lG.makeFromEncoding(f,e))&&void 0!==a?a:f,f=BY.parseAllForSortIndex(f,e))
const b=e.getDataName(QH.Raw),x=new aG(f,b,QH.Raw,h)
if(d[b]=x,f=x,KJ(e)){const t=PX.makeFromEncoding(f,e)
t&&(f=t,bY(e)&&(f=new BX(f))),f=null!==(s=cK.makeFromEncoding(f,e))&&void 0!==s?s:f,f=null!==(l=uJ.makeFromEncoding(f,e))&&void 0!==l?l:f}KJ(e)&&(f=null!==(u=oK.make(f,e))&&void 0!==u?u:f)
const _=e.getDataName(QH.Main),w=new aG(f,_,QH.Main,h)
d[_]=w,f=w,KJ(e)&&function(e,t){var n
for(const[r,i]of Jz(null!==(n=e.component.selection)&&void 0!==n?n:{})){const n=e.getName(`lookup_${r}`)
e.component.data.outputNodes[n]=i.materialized=new aG(new kY(t,e,{param:r}),n,QH.Lookup,e.component.data.outputNodeRefCounts)}}(e,w)
let O=null
if(QJ(e)){const t=e.getName("facet")
f=null!==(c=function(e,t){const{row:n,column:r}=t
if(n&&r){let t=null
for(const i of[n,r])if(rZ(i.sort)){const{field:n,op:r=Qq}=i.sort
e=t=new lJ(e,{joinaggregate:[{op:r,field:n,as:EK(i,i.sort,{forAs:!0})}],groupby:[jZ(i)]})}return t}return null}(f,e.facet))&&void 0!==c?c:f,O=new zX(f,e,t,w.getSource()),d[t]=O}return Object.assign(Object.assign({},e.component.data),{outputNodes:d,outputNodeRefCounts:h,raw:x,main:w,facetRoot:O,ancestorParse:g})}class CK extends nK{constructor(e,t,n,r){var i,o,a,s
super(e,"concat",t,n,r,e.resolve),"shared"!==(null===(o=null===(i=e.resolve)||void 0===i?void 0:i.axis)||void 0===o?void 0:o.x)&&"shared"!==(null===(s=null===(a=e.resolve)||void 0===a?void 0:a.axis)||void 0===s?void 0:s.y)||WB("Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415)."),this.children=this.getChildren(e).map(((e,t)=>JK(e,this,this.getName(`concat_${t}`),void 0,r)))}parseData(){this.component.data=DK(this)
for(const e of this.children)e.parseData()}parseSelections(){this.component.selection={}
for(const e of this.children){e.parseSelections()
for(const t of Yz(e.component.selection))this.component.selection[t]=e.component.selection[t]}}parseMarkGroup(){for(const e of this.children)e.parseMarkGroup()}parseAxesAndHeaders(){for(const e of this.children)e.parseAxesAndHeaders()}getChildren(e){return lV(e)?e.vconcat:uV(e)?e.hconcat:e.concat}parseLayoutSize(){!function(e){wK(e)
const t=1===e.layout.columns?"width":"childWidth",n=void 0===e.layout.columns?"height":"childHeight"
OK(e,t),OK(e,n)}(this)}parseAxisGroup(){return null}assembleSelectionTopLevelSignals(e){return this.children.reduce(((e,t)=>t.assembleSelectionTopLevelSignals(e)),e)}assembleSignals(){return this.children.forEach((e=>e.assembleSignals())),[]}assembleLayoutSignals(){const e=iX(this)
for(const t of this.children)e.push(...t.assembleLayoutSignals())
return e}assembleSelectionData(e){return this.children.reduce(((e,t)=>t.assembleSelectionData(e)),e)}assembleMarks(){return this.children.map((e=>{const t=e.assembleTitle(),n=e.assembleGroupStyle(),r=e.assembleGroupEncodeEntry(!1)
return Object.assign(Object.assign(Object.assign(Object.assign({type:"group",name:e.getName("group")},t?{title:t}:{}),n?{style:n}:{}),r?{encode:{update:r}}:{}),e.assembleGroup())}))}assembleGroupStyle(){}assembleDefaultLayout(){const e=this.layout.columns
return Object.assign(Object.assign({},null!=e?{columns:e}:{}),{bounds:"full",align:"each"})}}const MK=Object.assign(Object.assign({disable:1,gridScale:1,scale:1},oW),{labelExpr:1,encode:1}),jK=Yz(MK)
class FK extends RH{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
super(),this.explicit=e,this.implicit=t,this.mainExtracted=n}clone(){return new FK(Mz(this.explicit),Mz(this.implicit),this.mainExtracted)}hasAxisPart(e){return!("axis"!==e&&("grid"===e||"title"===e?!this.get(e):(t=this.get(e),!1===t||null===t)))
var t}hasOrientSignalRef(){return $L(this.explicit.orient)}}const TK={bottom:"top",top:"bottom",left:"right",right:"left"}
function NK(e,t){if(!e)return t.map((e=>e.clone()))
{if(e.length!==t.length)return
const n=e.length
for(let r=0;r<n;r++){const n=e[r],i=t[r]
if(!!n!=!!i)return
if(n&&i){const t=n.getWithExplicit("orient"),o=i.getWithExplicit("orient")
if(t.explicit&&o.explicit&&t.value!==o.value)return
e[r]=$K(n,i)}}}return e}function $K(e,t){for(const n of jK){const r=ZH(e.getWithExplicit(n),t.getWithExplicit(n),n,"axis",((e,t)=>{switch(n){case"title":return rB(e,t)
case"gridScale":return{explicit:e.explicit,value:cI(e.value,t.value)}}return qH(e,t,n,"axis")}))
e.setWithExplicit(n,r)}return e}function PK(e,t,n,r,i){if("disable"===t)return void 0!==n
switch(n=n||{},t){case"titleAngle":case"labelAngle":return e===($L(n.labelAngle)?n.labelAngle:mI(n.labelAngle))
case"values":return!!n.values
case"encode":return!!n.encoding||!!n.labelAngle
case"title":if(e===LY(r,i))return!0}return e===n[t]}const zK=new Set(["grid","translate","format","formatType","orient","labelExpr","tickCount","position","tickMinStep"])
function IK(e,t){var n,r,i
let o=t.axis(e)
const a=new FK,s=ZZ(t.encoding[e]),{mark:l,config:u}=t,c=(null==o?void 0:o.orient)||(null===(n=u["x"===e?"axisX":"axisY"])||void 0===n?void 0:n.orient)||(null===(r=u.axis)||void 0===r?void 0:r.orient)||function(e){return"x"===e?"bottom":"left"}(e),f=t.getScaleComponent(e).get("type"),d=function(e,t,n,r){const i="band"===t?["axisDiscrete","axisBand"]:"point"===t?["axisDiscrete","axisPoint"]:qU(t)?["axisQuantitative"]:"time"===t||"utc"===t?["axisTemporal"]:[],o="x"===e?"axisX":"axisY",a=$L(n)?"axisOrient":`axis${nI(n)}`,s=[...i,...i.map((e=>o+e.substr(4)))],l=["axis",a,o]
return{vlOnlyAxisConfig:TY(s,r,e,n),vgAxisConfig:TY(l,r,e,n),axisConfigStyle:NY([...l,...s],r)}}(e,f,c,t.config),h=void 0!==o?!o:$Y("disable",u.style,null==o?void 0:o.style,d).configValue
if(a.set("disable",h,void 0!==o),h)return a
o=o||{}
const p=function(e,t,n,r,i){const o=null==t?void 0:t.labelAngle
if(void 0!==o)return $L(o)?o:mI(o)
{const{configValue:o}=$Y("labelAngle",r,null==t?void 0:t.style,i)
return void 0!==o?mI(o):n!==wI||!zz([MU,DU],e.type)||yZ(e)&&e.timeUnit?void 0:270}}(s,o,e,u.style,d),g={fieldOrDatumDef:s,axis:o,channel:e,model:t,scaleType:f,orient:c,labelAngle:p,mark:l,config:u}
for(const v of jK){const n=v in PY?PY[v](g):sW(v)?o[v]:void 0,r=void 0!==n,i=PK(n,v,o,t,e)
if(r&&i)a.set(v,n,i)
else{const{configValue:e,configFrom:t}=sW(v)&&"values"!==v?$Y(v,u.style,o.style,d):{},s=void 0!==e
r&&!s?a.set(v,n,i):("vgAxisConfig"!==t||zK.has(v)&&s||nW(e)||$L(e))&&a.set(v,e,!1)}}const m=null!==(i=o.encoding)&&void 0!==i?i:{},y=rW.reduce(((n,r)=>{var i
if(!a.hasAxisPart(r))return n
const o=uX(null!==(i=m[r])&&void 0!==i?i:{},t),s="labels"===r?function(e,t,n){var r
const{encoding:i,config:o}=e,a=null!==(r=ZZ(i[t]))&&void 0!==r?r:ZZ(i[kR(t)]),s=e.axis(t)||{},{format:l,formatType:u}=s
if(Uq(u))return Object.assign({text:Vq({fieldOrDatumDef:a,field:"datum.value",format:l,formatType:u,config:o})},n)
if(void 0===l&&void 0===u&&o.customFormatTypes){if("quantitative"===vZ(a)){if(AZ(a)&&"normalize"===a.stack&&o.normalizedNumberFormatType)return Object.assign({text:Vq({fieldOrDatumDef:a,field:"datum.value",format:o.normalizedNumberFormat,formatType:o.normalizedNumberFormatType,config:o})},n)
if(o.numberFormatType)return Object.assign({text:Vq({fieldOrDatumDef:a,field:"datum.value",format:o.numberFormat,formatType:o.numberFormatType,config:o})},n)}if("temporal"===vZ(a)&&o.timeFormatType&&yZ(a)&&!a.timeUnit)return Object.assign({text:Vq({fieldOrDatumDef:a,field:"datum.value",format:o.timeFormat,formatType:o.timeFormatType,config:o})},n)}return n}(t,e,o):o
return void 0===s||Gz(s)||(n[r]={update:s}),n}),{})
return Gz(y)||a.set("encode",y,!!o.encoding||void 0!==o.labelAngle),a}function RK(e,t){const{config:n}=e
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",size:"include",orient:"ignore",theta:"ignore"})),TG("x",e,{defaultPos:"mid"})),TG("y",e,{defaultPos:"mid"})),MG("size",e)),MG("angle",e)),function(e,t,n){return n?{shape:{value:n}}:MG("shape",e)}(e,0,t))}function LK(e){var t
const{config:n,markDef:r}=e,{orient:i}=r,o="horizontal"===i?"width":"height",a=e.getScaleComponent("horizontal"===i?"x":"y"),s=null!==(t=XL("size",r,n,{vgChannel:o}))&&void 0!==t?t:n.tick.bandSize
if(void 0!==s)return s
{const e=a?a.get("range"):void 0
return e&&PL(e)&&gt(e.step)?3*e.step/4:3*mV(n.view,o)/4}}const BK={arc:{vgMark:"arc",encodeEntry:e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",size:"ignore",orient:"ignore",theta:"ignore"})),TG("x",e,{defaultPos:"mid"})),TG("y",e,{defaultPos:"mid"})),BG(e,"radius")),BG(e,"theta"))},area:{vgMark:"area",encodeEntry:e=>Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",orient:"include",size:"ignore",theta:"ignore"})),IG("x",e,{defaultPos:"zeroOrMin",defaultPos2:"zeroOrMin",range:"horizontal"===e.markDef.orient})),IG("y",e,{defaultPos:"zeroOrMin",defaultPos2:"zeroOrMin",range:"vertical"===e.markDef.orient})),GG(e))},bar:{vgMark:"rect",encodeEntry:e=>Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",orient:"ignore",size:"ignore",theta:"ignore"})),BG(e,"x")),BG(e,"y"))},circle:{vgMark:"symbol",encodeEntry:e=>RK(e,"circle")},geoshape:{vgMark:"shape",encodeEntry:e=>Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",size:"ignore",orient:"ignore",theta:"ignore"})),postEncodingTransform:e=>{const{encoding:t}=e,n=t.shape
return[Object.assign({type:"geoshape",projection:e.projectionName()},n&&yZ(n)&&n.type===jU?{field:jZ(n,{expr:"datum"})}:{})]}},image:{vgMark:"image",encodeEntry:e=>Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"ignore",orient:"ignore",size:"ignore",theta:"ignore"})),BG(e,"x")),BG(e,"y")),EG(e,"url"))},line:{vgMark:"line",encodeEntry:e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",size:"ignore",orient:"ignore",theta:"ignore"})),TG("x",e,{defaultPos:"mid"})),TG("y",e,{defaultPos:"mid"})),MG("size",e,{vgChannel:"strokeWidth"})),GG(e))},point:{vgMark:"symbol",encodeEntry:e=>RK(e)},rect:{vgMark:"rect",encodeEntry:e=>Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",orient:"ignore",size:"ignore",theta:"ignore"})),BG(e,"x")),BG(e,"y"))},rule:{vgMark:"rule",encodeEntry:e=>{const{markDef:t}=e,n=t.orient
return e.encoding.x||e.encoding.y||e.encoding.latitude||e.encoding.longitude?Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",orient:"ignore",size:"ignore",theta:"ignore"})),IG("x",e,{defaultPos:"horizontal"===n?"zeroOrMax":"mid",defaultPos2:"zeroOrMin",range:"vertical"!==n})),IG("y",e,{defaultPos:"vertical"===n?"zeroOrMax":"mid",defaultPos2:"zeroOrMin",range:"horizontal"!==n})),MG("size",e,{vgChannel:"strokeWidth"})):{}}},square:{vgMark:"symbol",encodeEntry:e=>RK(e,"square")},text:{vgMark:"text",encodeEntry:e=>{const{config:t,encoding:n}=e
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"include",baseline:"include",color:"include",size:"ignore",orient:"ignore",theta:"include"})),TG("x",e,{defaultPos:"mid"})),TG("y",e,{defaultPos:"mid"})),EG(e)),MG("size",e,{vgChannel:"fontSize"})),MG("angle",e)),YG("align",function(e,t,n){if(void 0===XL("align",e,n))return"center"}(e.markDef,0,t))),YG("baseline",function(e,t,n){if(void 0===XL("baseline",e,n))return"middle"}(e.markDef,0,t))),TG("radius",e,{defaultPos:null})),TG("theta",e,{defaultPos:null}))}},tick:{vgMark:"rect",encodeEntry:e=>{const{config:t,markDef:n}=e,r=n.orient,i="horizontal"===r?"width":"height",o="horizontal"===r?"height":"width"
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",orient:"ignore",size:"ignore",theta:"ignore"})),TG("x",e,{defaultPos:"mid",vgChannel:"xc"})),TG("y",e,{defaultPos:"mid",vgChannel:"yc"})),MG("size",e,{defaultValue:LK(e),vgChannel:i})),{[o]:WL(XL("thickness",n,t))})}},trail:{vgMark:"trail",encodeEntry:e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},VG(e,{align:"ignore",baseline:"ignore",color:"include",size:"include",orient:"ignore",theta:"ignore"})),TG("x",e,{defaultPos:"mid"})),TG("y",e,{defaultPos:"mid"})),MG("size",e)),GG(e))}},UK="faceted_path_",qK="stack_group_"
function ZK(e){var t
const{encoding:n,stack:r,mark:i,markDef:o,config:a}=e,s=n.order
if(!(!_e(s)&&kZ(s)&&Pz(s.value)||!s&&Pz(XL("order",o,a)))){if((_e(s)||yZ(s))&&!r)return eB(s,{expr:"datum"})
if(Aq(i)){const r="horizontal"===o.orient?"y":"x",i=n[r]
if(yZ(i)){const n=i.sort
return _e(n)?{field:jZ(i,{prefix:r,suffix:"sort_index",expr:"datum"})}:rZ(n)?{field:jZ({aggregate:pW(e.encoding)?n.op:void 0,field:n.field},{expr:"datum"})}:nZ(n)?{field:jZ(e.fieldDef(n.encoding),{expr:"datum"}),order:n.order}:null===n?void 0:{field:jZ(i,{binSuffix:(null===(t=e.stack)||void 0===t?void 0:t.impute)?"mid":void 0,expr:"datum"})}}}}}function WK(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromPrefix:""}
const{mark:n,markDef:r,encoding:i,config:o}=e,a=cI(r.clip,VK(e),HK(e)),s=YL(r),l=i.key,u=ZK(e),c=GK(e),f=XL("aria",r,o),d=BK[n].postEncodingTransform?BK[n].postEncodingTransform(e):null
return[Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({name:e.getName("marks"),type:BK[n].vgMark},a?{clip:!0}:{}),s?{style:s}:{}),l?{key:l.field}:{}),u?{sort:u}:{}),c||{}),!1===f?{aria:f}:{}),{from:{data:t.fromPrefix+e.requestDataName(QH.Main)},encode:{update:BK[n].encodeEntry(e)}}),d?{transform:d}:{})]}function VK(e){const t=e.getScaleComponent("x"),n=e.getScaleComponent("y")
return!(!(null==t?void 0:t.get("selectionExtent"))&&!(null==n?void 0:n.get("selectionExtent")))||void 0}function HK(e){const t=e.component.projection
return!(!t||t.isFit)||void 0}function GK(e){if(!e.component.selection)return null
const t=Yz(e.component.selection).length
let n=t,r=e.parent
for(;r&&0===n;)n=Yz(r.component.selection).length,r=r.parent
return n?{interactive:t>0||!!e.encoding.tooltip}:null}class YK extends rK{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0
var o
super(e,"unit",t,n,i,void 0,dV(e)?e.view:void 0),this.specifiedScales={},this.specifiedAxes={},this.specifiedLegends={},this.specifiedProjection={},this.selection=[],this.children=[]
const a=Cq(e.mark)?Object.assign({},e.mark):{type:e.mark},s=a.type
void 0===a.filled&&(a.filled=function(e,t,n){let{graticule:r}=n
if(r)return!1
const i=JL("filled",e,t),o=e.type
return cI(i,o!==yq&&o!==mq&&o!==bq)}(a,i,{graticule:e.data&&KH(e.data)}))
const l=this.encoding=function(e,t,n,r){const i={}
for(const s of Yz(e))bR(s)||WB(`${o=s}-encoding is dropped as ${o} is not a valid encoding channel.`)
var o,a
for(let s of DR){if(!e[s])continue
const o=e[s]
if(KR(s)){const e=SR(s),t=i[e]
if(yZ(t)){if(("quantitative"===(a=t.type)||"temporal"===a)&&yZ(o)){WB(gB(e))
continue}}else s=e,WB(mB(e))}if("angle"!==s||"arc"!==t||e.theta||(WB("Arc marks uses theta channel rather than angle, replacing angle with theta."),s=MI),mW(e,s,t)){if(s===LI&&"line"===t){const t=qZ(e[s])
if(null==t?void 0:t.aggregate){WB("Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead.")
continue}}if(s===PI&&(n?"fill"in e:"stroke"in e))WB(_B("encoding",{fill:"fill"in e,stroke:"stroke"in e}))
else if(s===YI||s===GI&&!_e(o)&&!kZ(o)||s===JI&&_e(o))o&&(i[s]=Ve(o).reduce(((e,t)=>(yZ(t)?e.push(HZ(t,s)):WB(wB(t,s)),e)),[]))
else{if(s===JI&&null===o)i[s]=null
else if(!(yZ(o)||bZ(o)||kZ(o)||pZ(o)||$L(o))){WB(wB(o,s))
continue}i[s]=WZ(o,s,r)}}else WB(OB(s,t))}return i}(e.encoding||{},s,a.filled,i)
this.markDef=function(e,t,n){const r=FL(e),i=XL("orient",r,n)
if(r.orient=function(e,t,n){switch(e){case yq:case Oq:case kq:case xq:case vq:case gq:return}const{x:r,y:i,x2:o,y2:a}=t
switch(e){case pq:if(yZ(r)&&(SL(r.bin)||yZ(i)&&i.aggregate&&!r.aggregate))return"vertical"
if(yZ(i)&&(SL(i.bin)||yZ(r)&&r.aggregate&&!i.aggregate))return"horizontal"
if(a||o){if(n)return n
if(!o&&(yZ(r)&&r.type===SU&&!AL(r.bin)||_Z(r)))return"horizontal"
if(!a&&(yZ(i)&&i.type===SU&&!AL(i.bin)||_Z(i)))return"vertical"}case bq:if(o&&(!yZ(r)||!SL(r.bin))&&a&&(!yZ(i)||!SL(i.bin)))return
case hq:if(a)return yZ(i)&&SL(i.bin)?"horizontal":"vertical"
if(o)return yZ(r)&&SL(r.bin)?"vertical":"horizontal"
if(e===bq){if(r&&!i)return"vertical"
if(i&&!r)return"horizontal"}case mq:case _q:{const t=xZ(r),o=xZ(i)
if(n)return n
if(t&&!o)return"tick"!==e?"horizontal":"vertical"
if(!t&&o)return"tick"!==e?"vertical":"horizontal"
if(t&&o){const t=r,n=i,o=t.type===CU,a=n.type===CU
return o&&!a?"tick"!==e?"vertical":"horizontal":!o&&a?"tick"!==e?"horizontal":"vertical":!t.aggregate&&n.aggregate?"tick"!==e?"vertical":"horizontal":t.aggregate&&!n.aggregate&&"tick"!==e?"horizontal":"vertical"}return}}return"vertical"}(r.type,t,i),void 0!==i&&i!==r.orient&&WB(`Specified orient "${r.orient}" overridden with "${i}".`),"bar"===r.type&&r.orient){const e=XL("cornerRadiusEnd",r,n)
if(void 0!==e){const n="horizontal"===r.orient&&t.x2||"vertical"===r.orient&&t.y2?["cornerRadius"]:Nq[r.orient]
for(const t of n)r[t]=e
void 0!==r.cornerRadiusEnd&&delete r.cornerRadiusEnd}}return void 0===XL("opacity",r,n)&&(r.opacity=function(e,t){if(zz([yq,_q,Oq,kq],e)&&!pW(t))return.7}(r.type,t)),void 0===XL("cursor",r,n)&&(r.cursor=function(e,t,n){return t.href||e.href||XL("href",e,n)?"pointer":e.cursor}(r,t,n)),r}(a,l,i),this.size=function(e){let{encoding:t,size:n}=e
for(const r of VR){const e=ER(r)
fV(n[e])&&xZ(t[r])&&(delete n[e],WB($B(e)))}return n}({encoding:l,size:dV(e)?Object.assign(Object.assign(Object.assign({},r),e.width?{width:e.width}:{}),e.height?{height:e.height}:{}):r}),this.stack=UV(s,l),this.specifiedScales=this.initScales(s,l),this.specifiedAxes=this.initAxes(l),this.specifiedLegends=this.initLegends(l),this.specifiedProjection=e.projection,this.selection=(null!==(o=e.params)&&void 0!==o?o:[]).filter((e=>iV(e)))}get hasProjection(){const{encoding:e}=this,t=this.mark===Eq,n=e&&iR.some((t=>wZ(e[t])))
return t||n}scaleDomain(e){const t=this.specifiedScales[e]
return t?t.domain:void 0}axis(e){return this.specifiedAxes[e]}legend(e){return this.specifiedLegends[e]}initScales(e,t){return cL.reduce(((e,n)=>{var r
const i=ZZ(t[n])
return i&&(e[n]=this.initScale(null!==(r=i.scale)&&void 0!==r?r:{})),e}),{})}initScale(e){const{domain:t,range:n}=e,r=FL(e)
return _e(t)&&(r.domain=t.map(qL)),_e(n)&&(r.range=n.map(qL)),r}initAxes(e){return VR.reduce(((t,n)=>{const r=e[n]
if(wZ(r)||n===wI&&wZ(e.x2)||n===OI&&wZ(e.y2)){const e=wZ(r)?r.axis:void 0
t[n]=e?this.initAxis(Object.assign({},e)):e}return t}),{})}initAxis(e){const t=Yz(e),n={}
for(const r of t){const t=e[r]
n[r]=nW(t)?UL(t):qL(t)}return n}initLegends(e){return lL.reduce(((t,n)=>{const r=ZZ(e[n])
if(r&&function(e){switch(e){case PI:case zI:case II:case LI:case RI:case UI:case WI:case VI:return!0
case qI:case ZI:case BI:return!1}}(n)){const e=r.legend
t[n]=e?FL(e):e}return t}),{})}parseData(){this.component.data=DK(this)}parseLayoutSize(){!function(e){const{size:t,component:n}=e
for(const r of VR){const i=ER(r)
if(t[i]){const e=t[i]
n.layoutSize.set(i,fV(e)?"step":e,!0)}else{const t=kK(e,i)
n.layoutSize.set(i,t,!1)}}}(this)}parseSelections(){this.component.selection=function(e,t){var n
const r={},i=e.config.selection
if(!t||!t.length)return r
for(const o of t){const t=Qz(o.name),a=o.select,s=yt(a)?a:a.type,l=we(a)?Mz(a):{type:s},u=i[s]
for(const e in u)"fields"!==e&&"encodings"!==e&&("mark"===e&&(l[e]=Object.assign(Object.assign({},u[e]),l[e])),void 0!==l[e]&&!0!==l[e]||(l[e]=null!==(n=u[e])&&void 0!==n?n:l[e]))
const c=r[t]=Object.assign(Object.assign({},l),{name:t,type:s,init:o.value,bind:o.bind,events:yt(l.on)?CT(l.on,"scope"):Ve(Mz(l.on))})
for(const n of mY)n.defined(c)&&n.parse&&n.parse(e,c,o)}return r}(this,this.selection)}parseMarkGroup(){this.component.mark=function(e){if(zz([mq,hq,wq],e.mark)){const t=xW(e.mark,e.encoding)
if(t.length>0)return function(e,t){return[{name:e.getName("pathgroup"),type:"group",from:{facet:{name:UK+e.requestDataName(QH.Main),data:e.requestDataName(QH.Main),groupby:t}},encode:{update:{width:{field:{group:"width"}},height:{field:{group:"height"}}}},marks:WK(e,{fromPrefix:UK})}]}(e,t)}else if(e.mark===pq){const t=LL.some((t=>XL(t,e.markDef,e.config)))
if(e.stack&&!e.fieldDef("size")&&t)return function(e){var t
const[n]=WK(e,{fromPrefix:qK}),r=e.scaleName(e.stack.fieldChannel),i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return e.vgField(e.stack.fieldChannel,t)},o=(e,t)=>`${e}(${[i({prefix:"min",suffix:"start",expr:t}),i({prefix:"max",suffix:"start",expr:t}),i({prefix:"min",suffix:"end",expr:t}),i({prefix:"max",suffix:"end",expr:t})].map((e=>`scale('${r}',${e})`)).join(",")})`
let a,s
"x"===e.stack.fieldChannel?(a=Object.assign(Object.assign({},Fz(n.encode.update,["y","yc","y2","height",...LL])),{x:{signal:o("min","datum")},x2:{signal:o("max","datum")},clip:{value:!0}}),s={x:{field:{group:"x"},mult:-1},height:{field:{group:"height"}}},n.encode.update=Object.assign(Object.assign({},Tz(n.encode.update,["y","yc","y2"])),{height:{field:{group:"height"}}})):(a=Object.assign(Object.assign({},Fz(n.encode.update,["x","xc","x2","width"])),{y:{signal:o("min","datum")},y2:{signal:o("max","datum")},clip:{value:!0}}),s={y:{field:{group:"y"},mult:-1},width:{field:{group:"width"}}},n.encode.update=Object.assign(Object.assign({},Tz(n.encode.update,["x","xc","x2"])),{width:{field:{group:"width"}}}))
for(const u of LL){const t=JL(u,e.markDef,e.config)
n.encode.update[u]?(a[u]=n.encode.update[u],delete n.encode.update[u]):t&&(a[u]=WL(t)),t&&(n.encode.update[u]={value:0})}const l=[]
if((null===(t=e.stack.groupbyChannels)||void 0===t?void 0:t.length)>0)for(const u of e.stack.groupbyChannels){const t=e.fieldDef(u),n=jZ(t)
n&&l.push(n),((null==t?void 0:t.bin)||(null==t?void 0:t.timeUnit))&&l.push(jZ(t,{binSuffix:"end"}))}return a=["stroke","strokeWidth","strokeJoin","strokeCap","strokeDash","strokeDashOffset","strokeMiterLimit","strokeOpacity"].reduce(((t,r)=>{if(n.encode.update[r])return Object.assign(Object.assign({},t),{[r]:n.encode.update[r]})
{const n=JL(r,e.markDef,e.config)
return void 0!==n?Object.assign(Object.assign({},t),{[r]:WL(n)}):t}}),a),a.stroke&&(a.strokeForeground={value:!0},a.strokeOffset={value:0}),[{type:"group",from:{facet:{data:e.requestDataName(QH.Main),name:qK+e.requestDataName(QH.Main),groupby:l,aggregate:{fields:[i({suffix:"start"}),i({suffix:"start"}),i({suffix:"end"}),i({suffix:"end"})],ops:["min","max","min","max"]}}},encode:{update:a},marks:[{type:"group",encode:{update:s},marks:[n]}]}]}(e)}return WK(e)}(this)}parseAxesAndHeaders(){var e
this.component.axes=(e=this,VR.reduce(((t,n)=>(e.component.scales[n]&&(t[n]=[IK(n,e)]),t)),{}))}assembleSelectionTopLevelSignals(e){return function(e,t){var n
let r=!1
for(const i of Xz(null!==(n=e.component.selection)&&void 0!==n?n:{})){const n=i.name,o=Et(n+dY)
if(0===t.filter((e=>e.name===n)).length){const e="global"===i.resolve?"union":i.resolve,n="point"===i.type?", true, true)":")"
t.push({name:i.name,update:`${gY}(${o}, ${Et(e)}${n}`})}r=!0
for(const r of mY)r.defined(i)&&r.topLevelSignals&&(t=r.topLevelSignals(e,i,t))}return r&&0===t.filter((e=>"unit"===e.name)).length&&t.unshift({name:"unit",value:{},on:[{events:"mousemove",update:"isTuple(group()) ? group() : unit"}]}),iG(t)}(this,e)}assembleSignals(){return[...FY(this),...nG(this,[])]}assembleSelectionData(e){return function(e,t){var n
const r=[...t],i=vY(e,{escape:!1})
for(const o of Xz(null!==(n=e.component.selection)&&void 0!==n?n:{})){const e={name:o.name+dY}
if(o.project.hasSelectionId&&(e.transform=[{type:"collect",sort:{field:eV}}]),o.init){const t=o.project.items.map((e=>{const{signals:t}=e
return eG(e,["signals"])}))
e.values=o.project.hasSelectionId?o.init.map((e=>({unit:i,[eV]:tG(e,!1)[0]}))):o.init.map((e=>({unit:i,fields:t,values:tG(e,!1)})))}r.filter((e=>e.name===o.name+dY)).length||r.push(e)}return r}(this,e)}assembleLayout(){return null}assembleLayoutSignals(){return iX(this)}assembleMarks(){var e
let t=null!==(e=this.component.mark)&&void 0!==e?e:[]
return this.parent&&tK(this.parent)||(t=rG(this,t)),t.map(this.correctDataNames)}assembleGroupStyle(){const{style:e}=this.view||{}
return void 0!==e?e:this.encoding.x||this.encoding.y?"cell":void 0}getMapping(){return this.encoding}get mark(){return this.markDef.type}channelHasField(e){return fW(this.encoding,e)}fieldDef(e){return qZ(this.encoding[e])}typedFieldDef(e){const t=this.fieldDef(e)
return OZ(t)?t:null}}class XK extends nK{constructor(e,t,n,r,i){super(e,"layer",t,n,i,e.resolve,e.view)
const o=Object.assign(Object.assign(Object.assign({},r),e.width?{width:e.width}:{}),e.height?{height:e.height}:{})
this.children=e.layer.map(((e,t)=>{if($V(e))return new XK(e,this,this.getName(`layer_${t}`),o,i)
if(uW(e))return new YK(e,this,this.getName(`layer_${t}`),o,i)
throw new Error(iB(e))}))}parseData(){this.component.data=DK(this)
for(const e of this.children)e.parseData()}parseLayoutSize(){wK(this),OK(this,"width"),OK(this,"height")}parseSelections(){this.component.selection={}
for(const e of this.children){e.parseSelections()
for(const t of Yz(e.component.selection))this.component.selection[t]=e.component.selection[t]}}parseMarkGroup(){for(const e of this.children)e.parseMarkGroup()}parseAxesAndHeaders(){!function(e){var t
const{axes:n,resolve:r}=e.component,i={top:0,bottom:0,right:0,left:0}
for(const o of e.children){o.parseAxesAndHeaders()
for(const t of Yz(o.component.axes))r.axis[t]=fX(e.component.resolve,t),"shared"===r.axis[t]&&(n[t]=NK(n[t],o.component.axes[t]),n[t]||(r.axis[t]="independent",delete n[t]))}for(const o of VR){for(const a of e.children)if(a.component.axes[o]){if("independent"===r.axis[o]){n[o]=(null!==(t=n[o])&&void 0!==t?t:[]).concat(a.component.axes[o])
for(const e of a.component.axes[o]){const{value:t,explicit:n}=e.getWithExplicit("orient")
if(!$L(t)){if(i[t]>0&&!n){const n=TK[t]
i[t]>i[n]&&e.set("orient",n,!1)}i[t]++}}}delete a.component.axes[o]}if("independent"===r.axis[o]&&n[o]&&n[o].length>1)for(const e of n[o])e.get("grid")&&!e.explicit.grid&&(e.implicit.grid=!1)}}(this)}assembleSelectionTopLevelSignals(e){return this.children.reduce(((e,t)=>t.assembleSelectionTopLevelSignals(e)),e)}assembleSignals(){return this.children.reduce(((e,t)=>e.concat(t.assembleSignals())),FY(this))}assembleLayoutSignals(){return this.children.reduce(((e,t)=>e.concat(t.assembleLayoutSignals())),iX(this))}assembleSelectionData(e){return this.children.reduce(((e,t)=>t.assembleSelectionData(e)),e)}assembleGroupStyle(){const e=new Set
for(const n of this.children)for(const t of Ve(n.assembleGroupStyle()))e.add(t)
const t=Array.from(e)
return t.length>1?t:1===t.length?t[0]:void 0}assembleTitle(){let e=super.assembleTitle()
if(e)return e
for(const t of this.children)if(e=t.assembleTitle(),e)return e}assembleLayout(){return null}assembleMarks(){return function(e,t){for(const n of e.children)KJ(n)&&(t=rG(n,t))
return t}(this,this.children.flatMap((e=>e.assembleMarks())))}assembleLegends(){return this.children.reduce(((e,t)=>e.concat(t.assembleLegends())),SX(this))}}function JK(e,t,n,r,i){if(sZ(e))return new AK(e,t,n,i)
if($V(e))return new XK(e,t,n,r,i)
if(uW(e))return new YK(e,t,n,r,i)
if(function(e){return lV(e)||uV(e)||sV(e)}(e))return new CK(e,t,n,i)
throw new Error(iB(e))}var KK=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}
function QK(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
t.logger&&qB(t.logger),t.fieldTitle&&PZ(t.fieldTitle)
try{const n=CV(ke(t.config,e.config)),r=FH(e,n),i=JK(r,null,"",void 0,n)
return i.parse(),yJ(i.component.data,i),{spec:tQ(i,eQ(e,r.autosize,n,i),e.datasets,e.usermeta),normalized:r}}finally{t.logger&&ZB(),t.fieldTitle&&zZ()}}function eQ(e,t,n,r){const i=r.component.layoutSize.get("width"),o=r.component.layoutSize.get("height")
if(void 0===t?(t={type:"pad"},r.hasAxisOrientSignalRef()&&(t.resize=!0)):yt(t)&&(t={type:t}),i&&o&&("fit"===(a=t.type)||"fit-x"===a||"fit-y"===a))if("step"===i&&"step"===o)WB(sB()),t.type="pad"
else if("step"===i||"step"===o){const e="step"===i?"width":"height"
WB(sB(XR(e)))
const n="width"===e?"height":"width"
t.type=function(e){return e?`fit-${XR(e)}`:"fit"}(n)}var a
return Object.assign(Object.assign(Object.assign({},1===Yz(t).length&&t.type?"pad"===t.type?{}:{autosize:t.type}:{autosize:t}),IH(n,!1)),IH(e,!0))}function tQ(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0
const i=e.config?TV(e.config):void 0,o=[].concat(e.assembleSelectionData([]),vK(e.component.data,n)),a=e.assembleProjections(),s=e.assembleTitle(),l=e.assembleGroupStyle(),u=e.assembleGroupEncodeEntry(!0)
let c=e.assembleLayoutSignals()
c=c.filter((e=>"width"!==e.name&&"height"!==e.name||void 0===e.value||(t[e.name]=+e.value,!1)))
const{params:f}=t,d=KK(t,["params"])
return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({$schema:"https://vega.github.io/schema/vega/v5.json"},e.description?{description:e.description}:{}),d),s?{title:s}:{}),l?{style:l}:{}),u?{encode:{update:u}}:{}),{data:o}),a.length>0?{projections:a}:{}),e.assembleGroup([...c,...e.assembleSelectionTopLevelSignals([]),...aV(f)])),i?{config:i}:{}),r?{usermeta:r}:{})}const nQ="5.2.0",rQ=function(e){const[t,n]=/schema\/([\w-]+)\/([\w\.\-]+)\.json$/g.exec(e).slice(1,3)
return{library:t,version:n}},iQ="#fff",oQ={background:"#333",title:{color:iQ,subtitleColor:iQ},style:{"guide-label":{fill:iQ},"guide-title":{fill:iQ}},axis:{domainColor:iQ,gridColor:"#888",tickColor:iQ}},aQ="#4572a7",sQ={background:"#fff",arc:{fill:aQ},area:{fill:aQ},line:{stroke:aQ,strokeWidth:2},path:{stroke:aQ},rect:{fill:aQ},shape:{stroke:aQ},symbol:{fill:aQ,strokeWidth:1.5,size:50},axis:{bandPosition:.5,grid:!0,gridColor:"#000000",gridOpacity:1,gridWidth:.5,labelPadding:10,tickSize:5,tickWidth:.5},axisBand:{grid:!1,tickExtra:!0},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:50,symbolType:"square"},range:{category:["#4572a7","#aa4643","#8aa453","#71598e","#4598ae","#d98445","#94aace","#d09393","#b9cc98","#a99cbc"]}},lQ="#30a2da",uQ="#cbcbcb",cQ="#f0f0f0",fQ="#333",dQ={arc:{fill:lQ},area:{fill:lQ},axis:{domainColor:uQ,grid:!0,gridColor:uQ,gridWidth:1,labelColor:"#999",labelFontSize:10,titleColor:"#333",tickColor:uQ,tickSize:10,titleFontSize:14,titlePadding:10,labelPadding:4},axisBand:{grid:!1},background:cQ,group:{fill:cQ},legend:{labelColor:fQ,labelFontSize:11,padding:1,symbolSize:30,symbolType:"square",titleColor:fQ,titleFontSize:14,titlePadding:10},line:{stroke:lQ,strokeWidth:2},path:{stroke:lQ,strokeWidth:.5},rect:{fill:lQ},range:{category:["#30a2da","#fc4f30","#e5ae38","#6d904f","#8b8b8b","#b96db8","#ff9e27","#56cc60","#52d2ca","#52689e","#545454","#9fe4f8"],diverging:["#cc0020","#e77866","#f6e7e1","#d6e8ed","#91bfd9","#1d78b5"],heatmap:["#d6e8ed","#cee0e5","#91bfd9","#549cc6","#1d78b5"]},point:{filled:!0,shape:"circle"},shape:{stroke:lQ},bar:{binSpacing:2,fill:lQ,stroke:null},title:{anchor:"start",fontSize:24,fontWeight:600,offset:20}},hQ="#000",pQ={group:{fill:"#e5e5e5"},arc:{fill:hQ},area:{fill:hQ},line:{stroke:hQ},path:{stroke:hQ},rect:{fill:hQ},shape:{stroke:hQ},symbol:{fill:hQ,size:40},axis:{domain:!1,grid:!0,gridColor:"#FFFFFF",gridOpacity:1,labelColor:"#7F7F7F",labelPadding:4,tickColor:"#7F7F7F",tickSize:5.67,titleFontSize:16,titleFontWeight:"normal"},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:40},range:{category:["#000000","#7F7F7F","#1A1A1A","#999999","#333333","#B0B0B0","#4D4D4D","#C9C9C9","#666666","#DCDCDC"]}},gQ="Benton Gothic, sans-serif",mQ="#82c6df",yQ="Benton Gothic Bold, sans-serif",vQ="normal",bQ={"category-6":["#ec8431","#829eb1","#c89d29","#3580b1","#adc839","#ab7fb4"],"fire-7":["#fbf2c7","#f9e39c","#f8d36e","#f4bb6a","#e68a4f","#d15a40","#ab4232"],"fireandice-6":["#e68a4f","#f4bb6a","#f9e39c","#dadfe2","#a6b7c6","#849eae"],"ice-7":["#edefee","#dadfe2","#c4ccd2","#a6b7c6","#849eae","#607785","#47525d"]},xQ={background:"#ffffff",title:{anchor:"start",color:"#000000",font:yQ,fontSize:22,fontWeight:"normal"},arc:{fill:mQ},area:{fill:mQ},line:{stroke:mQ,strokeWidth:2},path:{stroke:mQ},rect:{fill:mQ},shape:{stroke:mQ},symbol:{fill:mQ,size:30},axis:{labelFont:gQ,labelFontSize:11.5,labelFontWeight:"normal",titleFont:yQ,titleFontSize:13,titleFontWeight:vQ},axisX:{labelAngle:0,labelPadding:4,tickSize:3},axisY:{labelBaseline:"middle",maxExtent:45,minExtent:45,tickSize:2,titleAlign:"left",titleAngle:0,titleX:-45,titleY:-11},legend:{labelFont:gQ,labelFontSize:11.5,symbolType:"square",titleFont:yQ,titleFontSize:13,titleFontWeight:vQ},range:{category:bQ["category-6"],diverging:bQ["fireandice-6"],heatmap:bQ["fire-7"],ordinal:bQ["fire-7"],ramp:bQ["fire-7"]}},_Q="#ab5787",wQ="#979797",OQ={background:"#f9f9f9",arc:{fill:_Q},area:{fill:_Q},line:{stroke:_Q},path:{stroke:_Q},rect:{fill:_Q},shape:{stroke:_Q},symbol:{fill:_Q,size:30},axis:{domainColor:wQ,domainWidth:.5,gridWidth:.2,labelColor:wQ,tickColor:wQ,tickWidth:.2,titleColor:wQ},axisBand:{grid:!1},axisX:{grid:!0,tickSize:10},axisY:{domain:!1,grid:!0,tickSize:0},legend:{labelFontSize:11,padding:1,symbolSize:30,symbolType:"square"},range:{category:["#ab5787","#51b2e5","#703c5c","#168dd9","#d190b6","#00609f","#d365ba","#154866","#666666","#c4c4c4"]}},kQ="#3e5c69",EQ={background:"#fff",arc:{fill:kQ},area:{fill:kQ},line:{stroke:kQ},path:{stroke:kQ},rect:{fill:kQ},shape:{stroke:kQ},symbol:{fill:kQ},axis:{domainWidth:.5,grid:!0,labelPadding:2,tickSize:5,tickWidth:.5,titleFontWeight:"normal"},axisBand:{grid:!1},axisX:{gridWidth:.2},axisY:{gridDash:[3],gridWidth:.4},legend:{labelFontSize:11,padding:1,symbolType:"square"},range:{category:["#3e5c69","#6793a6","#182429","#0570b0","#3690c0","#74a9cf","#a6bddb","#e2ddf2"]}},AQ="#1696d2",SQ="#000000",DQ="Lato",CQ="Lato",MQ={"main-colors":["#1696d2","#d2d2d2","#000000","#fdbf11","#ec008b","#55b748","#5c5859","#db2b27"],"shades-blue":["#CFE8F3","#A2D4EC","#73BFE2","#46ABDB","#1696D2","#12719E","#0A4C6A","#062635"],"shades-gray":["#F5F5F5","#ECECEC","#E3E3E3","#DCDBDB","#D2D2D2","#9D9D9D","#696969","#353535"],"shades-yellow":["#FFF2CF","#FCE39E","#FDD870","#FCCB41","#FDBF11","#E88E2D","#CA5800","#843215"],"shades-magenta":["#F5CBDF","#EB99C2","#E46AA7","#E54096","#EC008B","#AF1F6B","#761548","#351123"],"shades-green":["#DCEDD9","#BCDEB4","#98CF90","#78C26D","#55B748","#408941","#2C5C2D","#1A2E19"],"shades-black":["#D5D5D4","#ADABAC","#848081","#5C5859","#332D2F","#262223","#1A1717","#0E0C0D"],"shades-red":["#F8D5D4","#F1AAA9","#E9807D","#E25552","#DB2B27","#A4201D","#6E1614","#370B0A"],"one-group":["#1696d2","#000000"],"two-groups-cat-1":["#1696d2","#000000"],"two-groups-cat-2":["#1696d2","#fdbf11"],"two-groups-cat-3":["#1696d2","#db2b27"],"two-groups-seq":["#a2d4ec","#1696d2"],"three-groups-cat":["#1696d2","#fdbf11","#000000"],"three-groups-seq":["#a2d4ec","#1696d2","#0a4c6a"],"four-groups-cat-1":["#000000","#d2d2d2","#fdbf11","#1696d2"],"four-groups-cat-2":["#1696d2","#ec0008b","#fdbf11","#5c5859"],"four-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a"],"five-groups-cat-1":["#1696d2","#fdbf11","#d2d2d2","#ec008b","#000000"],"five-groups-cat-2":["#1696d2","#0a4c6a","#d2d2d2","#fdbf11","#332d2f"],"five-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a","#000000"],"six-groups-cat-1":["#1696d2","#ec008b","#fdbf11","#000000","#d2d2d2","#55b748"],"six-groups-cat-2":["#1696d2","#d2d2d2","#ec008b","#fdbf11","#332d2f","#0a4c6a"],"six-groups-seq":["#cfe8f3","#a2d4ec","#73bfe2","#46abdb","#1696d2","#12719e"],"diverging-colors":["#ca5800","#fdbf11","#fdd870","#fff2cf","#cfe8f3","#73bfe2","#1696d2","#0a4c6a"]},jQ={background:"#FFFFFF",title:{anchor:"start",fontSize:18,font:DQ},axisX:{domain:!0,domainColor:SQ,domainWidth:1,grid:!1,labelFontSize:12,labelFont:CQ,labelAngle:0,tickColor:SQ,tickSize:5,titleFontSize:12,titlePadding:10,titleFont:DQ},axisY:{domain:!1,domainWidth:1,grid:!0,gridColor:"#DEDDDD",gridWidth:1,labelFontSize:12,labelFont:CQ,labelPadding:8,ticks:!1,titleFontSize:12,titlePadding:10,titleFont:DQ,titleAngle:0,titleY:-10,titleX:18},legend:{labelFontSize:12,labelFont:CQ,symbolSize:100,titleFontSize:12,titlePadding:10,titleFont:DQ,orient:"right",offset:10},view:{stroke:"transparent"},range:{category:MQ["six-groups-cat-1"],diverging:MQ["diverging-colors"],heatmap:MQ["diverging-colors"],ordinal:MQ["six-groups-seq"],ramp:MQ["shades-blue"]},area:{fill:AQ},rect:{fill:AQ},line:{color:AQ,stroke:AQ,strokeWidth:5},trail:{color:AQ,stroke:AQ,strokeWidth:0,size:1},path:{stroke:AQ,strokeWidth:.5},point:{filled:!0},text:{font:"Lato",color:AQ,fontSize:11,align:"center",fontWeight:400,size:11},style:{bar:{fill:AQ,stroke:null}},arc:{fill:AQ},shape:{stroke:AQ},symbol:{fill:AQ,size:30}},FQ="#3366CC",TQ="#ccc",NQ="Arial, sans-serif",$Q={arc:{fill:FQ},area:{fill:FQ},path:{stroke:FQ},rect:{fill:FQ},shape:{stroke:FQ},symbol:{stroke:FQ},circle:{fill:FQ},background:"#fff",padding:{top:10,right:10,bottom:10,left:10},style:{"guide-label":{font:NQ,fontSize:12},"guide-title":{font:NQ,fontSize:12},"group-title":{font:NQ,fontSize:12}},title:{font:NQ,fontSize:14,fontWeight:"bold",dy:-3,anchor:"start"},axis:{gridColor:TQ,tickColor:TQ,domain:!1,grid:!0},range:{category:["#4285F4","#DB4437","#F4B400","#0F9D58","#AB47BC","#00ACC1","#FF7043","#9E9D24","#5C6BC0","#F06292","#00796B","#C2185B"],heatmap:["#c6dafc","#5e97f6","#2a56c6"]}},PQ=e=>e*(1/3+1),zQ=PQ(9),IQ=PQ(10),RQ=PQ(12),LQ="Segoe UI",BQ="wf_standard-font, helvetica, arial, sans-serif",UQ="#252423",qQ="#605E5C",ZQ="transparent",WQ="#118DFF",VQ="#DEEFFF",HQ=[VQ,WQ],GQ={view:{stroke:ZQ},background:ZQ,font:LQ,header:{titleFont:BQ,titleFontSize:RQ,titleColor:UQ,labelFont:LQ,labelFontSize:IQ,labelColor:qQ},axis:{ticks:!1,grid:!1,domain:!1,labelColor:qQ,labelFontSize:zQ,titleFont:BQ,titleColor:UQ,titleFontSize:RQ,titleFontWeight:"normal"},axisQuantitative:{tickCount:3,grid:!0,gridColor:"#C8C6C4",gridDash:[1,5],labelFlush:!1},axisBand:{tickExtra:!0},axisX:{labelPadding:5},axisY:{labelPadding:10},bar:{fill:WQ},line:{stroke:WQ,strokeWidth:3,strokeCap:"round",strokeJoin:"round"},text:{font:LQ,fontSize:zQ,fill:qQ},arc:{fill:WQ},area:{fill:WQ,line:!0,opacity:.6},path:{stroke:WQ},rect:{fill:WQ},point:{fill:WQ,filled:!0,size:75},shape:{stroke:WQ},symbol:{fill:WQ,strokeWidth:1.5,size:50},legend:{titleFont:LQ,titleFontWeight:"bold",titleColor:qQ,labelFont:LQ,labelFontSize:IQ,labelColor:qQ,symbolType:"circle",symbolSize:75},range:{category:[WQ,"#12239E","#E66C37","#6B007B","#E044A7","#744EC2","#D9B300","#D64550"],diverging:HQ,heatmap:HQ,ordinal:[VQ,"#c7e4ff","#b0d9ff","#9aceff","#83c3ff","#6cb9ff","#55aeff","#3fa3ff","#2898ff",WQ]}},YQ="2.10.0"
function XQ(e,t){return JSON.stringify(e,function(e){const t=[]
return function(n,r){if("object"!=typeof r||null===r)return r
const i=t.indexOf(this)+1
return t.length=i,t.length>e?"[Object]":t.indexOf(r)>=0?"[Circular]":(t.push(r),r)}}(t))}const JQ="vg-tooltip-element",KQ={offsetX:10,offsetY:10,id:JQ,styleId:"vega-tooltip-style",theme:"light",disableDefaultStyle:!1,sanitize:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;")},maxDepth:2,formatTooltip:function(e,t,n){if(_e(e))return`[${e.map((e=>t(yt(e)?e:XQ(e,n)))).join(", ")}]`
if(we(e)){let r=""
const i=e,{title:o,image:a}=i,s=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(i,["title","image"])
o&&(r+=`<h2>${t(o)}</h2>`),a&&(r+=`<img src="${t(a)}">`)
const l=Object.keys(s)
if(l.length>0){r+="<table>"
for(const e of l){let i=s[e]
void 0!==i&&(we(i)&&(i=XQ(i,n)),r+=`<tr><td class="key">${t(e)}:</td><td class="value">${t(i)}</td></tr>`)}r+="</table>"}return r||"{}"}return t(e)}}
class QQ{constructor(e){this.options=Object.assign(Object.assign({},KQ),e)
const t=this.options.id
if(this.el=null,this.call=this.tooltipHandler.bind(this),!this.options.disableDefaultStyle&&!document.getElementById(this.options.styleId)){const e=document.createElement("style")
e.setAttribute("id",this.options.styleId),e.innerHTML=function(e){if(!/^[A-Za-z]+[-:.\w]*$/.test(e))throw new Error("Invalid HTML ID")
return"#vg-tooltip-element {\n  visibility: hidden;\n  padding: 8px;\n  position: fixed;\n  z-index: 1000;\n  font-family: sans-serif;\n  font-size: 11px;\n  border-radius: 3px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  /* The default theme is the light theme. */\n  background-color: rgba(255, 255, 255, 0.95);\n  border: 1px solid #d9d9d9;\n  color: black;\n}\n#vg-tooltip-element.visible {\n  visibility: visible;\n}\n#vg-tooltip-element h2 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n}\n#vg-tooltip-element img {\n  max-width: 200px;\n  max-height: 200px;\n}\n#vg-tooltip-element table {\n  border-spacing: 0;\n}\n#vg-tooltip-element table tr {\n  border: none;\n}\n#vg-tooltip-element table tr td {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n#vg-tooltip-element table tr td.key {\n  color: #808080;\n  max-width: 150px;\n  text-align: right;\n  padding-right: 4px;\n}\n#vg-tooltip-element table tr td.value {\n  display: block;\n  max-width: 300px;\n  max-height: 7em;\n  text-align: left;\n}\n#vg-tooltip-element.dark-theme {\n  background-color: rgba(32, 32, 32, 0.9);\n  border: 1px solid #f5f5f5;\n  color: white;\n}\n#vg-tooltip-element.dark-theme td.key {\n  color: #bfbfbf;\n}\n".toString().replace(JQ,e)}(t)
const n=document.head
n.childNodes.length>0?n.insertBefore(e,n.childNodes[0]):n.appendChild(e)}}tooltipHandler(e,t,n,r){var i
if(this.el=document.getElementById(this.options.id),this.el||(this.el=document.createElement("div"),this.el.setAttribute("id",this.options.id),this.el.classList.add("vg-tooltip"),(null!==(i=document.fullscreenElement)&&void 0!==i?i:document.body).appendChild(this.el)),null==r||""===r)return void this.el.classList.remove("visible",`${this.options.theme}-theme`)
this.el.innerHTML=this.options.formatTooltip(r,this.options.sanitize,this.options.maxDepth),this.el.classList.add("visible",`${this.options.theme}-theme`)
const{x:o,y:a}=function(e,t,n,r){let i=e.clientX+n
i+t.width>window.innerWidth&&(i=+e.clientX-n-t.width)
let o=e.clientY+r
return o+t.height>window.innerHeight&&(o=+e.clientY-r-t.height),{x:i,y:o}}(t,this.el.getBoundingClientRect(),this.options.offsetX,this.options.offsetY)
this.el.setAttribute("style",`top: ${a}px; left: ${o}px`)}}function e0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t0(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function n0(e){return function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function a(e){t0(o,r,i,a,s,"next",e)}function s(e){t0(o,r,i,a,s,"throw",e)}a(void 0)}))}}var r0,i0=Object.prototype,o0=i0.hasOwnProperty,a0="function"==typeof Symbol?Symbol:{},s0=a0.iterator||"@@iterator",l0=a0.asyncIterator||"@@asyncIterator",u0=a0.toStringTag||"@@toStringTag"
function c0(e,t,n,r){var i=t&&t.prototype instanceof y0?t:y0,o=Object.create(i.prototype),a=new M0(r||[])
return o._invoke=function(e,t,n){var r=d0
return function(i,o){if(r===p0)throw new Error("Generator is already running")
if(r===g0){if("throw"===i)throw o
return F0()}for(n.method=i,n.arg=o;;){var a=n.delegate
if(a){var s=S0(a,n)
if(s){if(s===m0)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===d0)throw r=g0,n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=p0
var l=f0(e,t,n)
if("normal"===l.type){if(r=n.done?g0:h0,l.arg===m0)continue
return{value:l.arg,done:n.done}}"throw"===l.type&&(r=g0,n.method="throw",n.arg=l.arg)}}}(e,n,a),o}function f0(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}var d0="suspendedStart",h0="suspendedYield",p0="executing",g0="completed",m0={}
function y0(){}function v0(){}function b0(){}var x0={}
x0[s0]=function(){return this}
var _0=Object.getPrototypeOf,w0=_0&&_0(_0(j0([])))
w0&&w0!==i0&&o0.call(w0,s0)&&(x0=w0)
var O0=b0.prototype=y0.prototype=Object.create(x0)
function k0(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E0(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===v0||"GeneratorFunction"===(t.displayName||t.name))}function A0(e,t){function n(r,i,o,a){var s=f0(e[r],e,i)
if("throw"!==s.type){var l=s.arg,u=l.value
return u&&"object"==typeof u&&o0.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,a)}))}a(s.arg)}var r
this._invoke=function(e,i){function o(){return new t((function(t,r){n(e,i,t,r)}))}return r=r?r.then(o,o):o()}}function S0(e,t){var n=e.iterator[t.method]
if(n===r0){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r0,S0(e,t),"throw"===t.method))return m0
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m0}var r=f0(n,e.iterator,t.arg)
if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m0
var i=r.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r0),t.delegate=null,m0):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m0)}function D0(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C0(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function M0(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D0,this),this.reset(!0)}function j0(e){if(e){var t=e[s0]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o0.call(e,n))return t.value=e[n],t.done=!1,t
return t.value=r0,t.done=!0,t}
return r.next=r}}return{next:F0}}function F0(){return{value:r0,done:!0}}v0.prototype=O0.constructor=b0,b0.constructor=v0,b0[u0]=v0.displayName="GeneratorFunction",k0(A0.prototype),A0.prototype[l0]=function(){return this},k0(O0),O0[u0]="Generator",O0[s0]=function(){return this},O0.toString=function(){return"[object Generator]"},M0.prototype={constructor:M0,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r0,this.done=!1,this.delegate=null,this.method="next",this.arg=r0,this.tryEntries.forEach(C0),!e)for(var t in this)"t"===t.charAt(0)&&o0.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function n(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=r0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion
if("root"===i.tryLoc)return n("end")
if(i.tryLoc<=this.prev){var a=o0.call(i,"catchLoc"),s=o0.call(i,"finallyLoc")
if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)
if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n]
if(r.tryLoc<=this.prev&&o0.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var o=i?i.completion:{}
return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m0):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m0},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C0(n),m0}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
C0(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j0(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r0),m0}}
var T0={wrap:c0,isGeneratorFunction:E0,AsyncIterator:A0,mark:function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b0):(e.__proto__=b0,u0 in e||(e[u0]="GeneratorFunction")),e.prototype=Object.create(O0),e},awrap:function(e){return{__await:e}},async:function(e,t,n,r,i){void 0===i&&(i=Promise)
var o=new A0(c0(e,t,n,r),i)
return E0(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},keys:function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},values:j0},N0=$0
function $0(e){var t=this
if(t instanceof $0||(t=new $0),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}))
else if(arguments.length>0)for(var n=0,r=arguments.length;n<r;n++)t.push(arguments[n])
return t}function P0(e,t,n){var r=t===e.head?new R0(n,null,t,e):new R0(n,t,t.next,e)
return null===r.next&&(e.tail=r),null===r.prev&&(e.head=r),e.length++,r}function z0(e,t){e.tail=new R0(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function I0(e,t){e.head=new R0(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function R0(e,t,n,r){if(!(this instanceof R0))return new R0(e,t,n,r)
this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null}$0.Node=R0,$0.create=$0,$0.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list")
var t=e.next,n=e.prev
return t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null,t},$0.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e)
var t=this.head
e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},$0.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e)
var t=this.tail
e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},$0.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)z0(this,arguments[e])
return this.length},$0.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)I0(this,arguments[e])
return this.length},$0.prototype.pop=function(){if(this.tail){var e=this.tail.value
return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},$0.prototype.shift=function(){if(this.head){var e=this.head.value
return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},$0.prototype.forEach=function(e,t){t=t||this
for(var n=this.head,r=0;null!==n;r++)e.call(t,n.value,r,this),n=n.next},$0.prototype.forEachReverse=function(e,t){t=t||this
for(var n=this.tail,r=this.length-1;null!==n;r--)e.call(t,n.value,r,this),n=n.prev},$0.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)n=n.next
if(t===e&&null!==n)return n.value},$0.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)n=n.prev
if(t===e&&null!==n)return n.value},$0.prototype.map=function(e,t){t=t||this
for(var n=new $0,r=this.head;null!==r;)n.push(e.call(t,r.value,this)),r=r.next
return n},$0.prototype.mapReverse=function(e,t){t=t||this
for(var n=new $0,r=this.tail;null!==r;)n.push(e.call(t,r.value,this)),r=r.prev
return n},$0.prototype.reduce=function(e,t){var n,r=this.head
if(arguments.length>1)n=t
else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value")
r=this.head.next,n=this.head.value}for(var i=0;null!==r;i++)n=e(n,r.value,i),r=r.next
return n},$0.prototype.reduceReverse=function(e,t){var n,r=this.tail
if(arguments.length>1)n=t
else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value")
r=this.tail.prev,n=this.tail.value}for(var i=this.length-1;null!==r;i--)n=e(n,r.value,i),r=r.prev
return n},$0.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next
return e},$0.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev
return e},$0.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length)
var n=new $0
if(t<e||t<0)return n
e<0&&(e=0),t>this.length&&(t=this.length)
for(var r=0,i=this.head;null!==i&&r<e;r++)i=i.next
for(;null!==i&&r<t;r++,i=i.next)n.push(i.value)
return n},$0.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length)
var n=new $0
if(t<e||t<0)return n
e<0&&(e=0),t>this.length&&(t=this.length)
for(var r=this.length,i=this.tail;null!==i&&r>t;r--)i=i.prev
for(;null!==i&&r>e;r--,i=i.prev)n.push(i.value)
return n},$0.prototype.splice=function(e,t){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e)
for(var n=0,r=this.head;null!==r&&n<e;n++)r=r.next
var i=[]
for(n=0;r&&n<t;n++)i.push(r.value),r=this.removeNode(r)
for(null===r&&(r=this.tail),r!==this.head&&r!==this.tail&&(r=r.prev),n=0;n<(arguments.length<=2?0:arguments.length-2);n++)r=P0(this,r,n+2<2||arguments.length<=n+2?void 0:arguments[n+2])
return i},$0.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var r=n.prev
n.prev=n.next,n.next=r}return this.head=t,this.tail=e,this}
try{$0.prototype[Symbol.iterator]=T0.mark((function e(){var t
return T0.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.head
case 1:if(!t){e.next=7
break}return e.next=4,t.value
case 4:t=t.next,e.next=1
break
case 7:case"end":return e.stop()}}),e,this)}))}catch(e){}var L0=N0,B0=Symbol("max"),U0=Symbol("length"),q0=Symbol("lengthCalculator"),Z0=Symbol("allowStale"),W0=Symbol("maxAge"),V0=Symbol("dispose"),H0=Symbol("noDisposeOnSet"),G0=Symbol("lruList"),Y0=Symbol("cache"),X0=Symbol("updateAgeOnGet"),J0=()=>1,K0=(e,t,n)=>{var r=e[Y0].get(t)
if(r){var i=r.value
if(Q0(e,i)){if(t1(e,r),!e[Z0])return}else n&&(e[X0]&&(r.value.now=Date.now()),e[G0].unshiftNode(r))
return i.value}},Q0=(e,t)=>{if(!t||!t.maxAge&&!e[W0])return!1
var n=Date.now()-t.now
return t.maxAge?n>t.maxAge:e[W0]&&n>e[W0]},e1=e=>{if(e[U0]>e[B0])for(var t=e[G0].tail;e[U0]>e[B0]&&null!==t;){var n=t.prev
t1(e,t),t=n}},t1=(e,t)=>{if(t){var n=t.value
e[V0]&&e[V0](n.key,n.value),e[U0]-=n.length,e[Y0].delete(n.key),e[G0].removeNode(t)}}
class n1{constructor(e,t,n,r,i){this.key=e,this.value=t,this.length=n,this.now=r,this.maxAge=i||0}}var r1=(e,t,n,r)=>{var i=n.value
Q0(e,i)&&(t1(e,n),e[Z0]||(i=void 0)),i&&t.call(r,i.value,i.key,e)},i1=["includePrerelease","loose","rtl"],o1=e=>e?"object"!=typeof e?{loose:!0}:i1.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{},a1={exports:{}},s1={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991,MAX_SAFE_COMPONENT_LENGTH:16},l1="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return console.error("SEMVER",...t)}:()=>{}
!function(e,t){var n=s1.MAX_SAFE_COMPONENT_LENGTH,r=l1,i=(t=e.exports={}).re=[],o=t.src=[],a=t.t={},s=0,l=(e,t,n)=>{var l=s++
r(e,l,t),a[e]=l,o[l]=t,i[l]=new RegExp(t,n?"g":void 0)}
l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","[0-9]+"),l("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),l("MAINVERSION","(".concat(o[a.NUMERICIDENTIFIER],")\\.")+"(".concat(o[a.NUMERICIDENTIFIER],")\\.")+"(".concat(o[a.NUMERICIDENTIFIER],")")),l("MAINVERSIONLOOSE","(".concat(o[a.NUMERICIDENTIFIERLOOSE],")\\.")+"(".concat(o[a.NUMERICIDENTIFIERLOOSE],")\\.")+"(".concat(o[a.NUMERICIDENTIFIERLOOSE],")")),l("PRERELEASEIDENTIFIER","(?:".concat(o[a.NUMERICIDENTIFIER],"|").concat(o[a.NONNUMERICIDENTIFIER],")")),l("PRERELEASEIDENTIFIERLOOSE","(?:".concat(o[a.NUMERICIDENTIFIERLOOSE],"|").concat(o[a.NONNUMERICIDENTIFIER],")")),l("PRERELEASE","(?:-(".concat(o[a.PRERELEASEIDENTIFIER],"(?:\\.").concat(o[a.PRERELEASEIDENTIFIER],")*))")),l("PRERELEASELOOSE","(?:-?(".concat(o[a.PRERELEASEIDENTIFIERLOOSE],"(?:\\.").concat(o[a.PRERELEASEIDENTIFIERLOOSE],")*))")),l("BUILDIDENTIFIER","[0-9A-Za-z-]+"),l("BUILD","(?:\\+(".concat(o[a.BUILDIDENTIFIER],"(?:\\.").concat(o[a.BUILDIDENTIFIER],")*))")),l("FULLPLAIN","v?".concat(o[a.MAINVERSION]).concat(o[a.PRERELEASE],"?").concat(o[a.BUILD],"?")),l("FULL","^".concat(o[a.FULLPLAIN],"$")),l("LOOSEPLAIN","[v=\\s]*".concat(o[a.MAINVERSIONLOOSE]).concat(o[a.PRERELEASELOOSE],"?").concat(o[a.BUILD],"?")),l("LOOSE","^".concat(o[a.LOOSEPLAIN],"$")),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE","".concat(o[a.NUMERICIDENTIFIERLOOSE],"|x|X|\\*")),l("XRANGEIDENTIFIER","".concat(o[a.NUMERICIDENTIFIER],"|x|X|\\*")),l("XRANGEPLAIN","[v=\\s]*(".concat(o[a.XRANGEIDENTIFIER],")")+"(?:\\.(".concat(o[a.XRANGEIDENTIFIER],")")+"(?:\\.(".concat(o[a.XRANGEIDENTIFIER],")")+"(?:".concat(o[a.PRERELEASE],")?").concat(o[a.BUILD],"?")+")?)?"),l("XRANGEPLAINLOOSE","[v=\\s]*(".concat(o[a.XRANGEIDENTIFIERLOOSE],")")+"(?:\\.(".concat(o[a.XRANGEIDENTIFIERLOOSE],")")+"(?:\\.(".concat(o[a.XRANGEIDENTIFIERLOOSE],")")+"(?:".concat(o[a.PRERELEASELOOSE],")?").concat(o[a.BUILD],"?")+")?)?"),l("XRANGE","^".concat(o[a.GTLT],"\\s*").concat(o[a.XRANGEPLAIN],"$")),l("XRANGELOOSE","^".concat(o[a.GTLT],"\\s*").concat(o[a.XRANGEPLAINLOOSE],"$")),l("COERCE","".concat("(^|[^\\d])(\\d{1,").concat(n,"})")+"(?:\\.(\\d{1,".concat(n,"}))?")+"(?:\\.(\\d{1,".concat(n,"}))?")+"(?:$|[^\\d])"),l("COERCERTL",o[a.COERCE],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM","(\\s*)".concat(o[a.LONETILDE],"\\s+"),!0),t.tildeTrimReplace="$1~",l("TILDE","^".concat(o[a.LONETILDE]).concat(o[a.XRANGEPLAIN],"$")),l("TILDELOOSE","^".concat(o[a.LONETILDE]).concat(o[a.XRANGEPLAINLOOSE],"$")),l("LONECARET","(?:\\^)"),l("CARETTRIM","(\\s*)".concat(o[a.LONECARET],"\\s+"),!0),t.caretTrimReplace="$1^",l("CARET","^".concat(o[a.LONECARET]).concat(o[a.XRANGEPLAIN],"$")),l("CARETLOOSE","^".concat(o[a.LONECARET]).concat(o[a.XRANGEPLAINLOOSE],"$")),l("COMPARATORLOOSE","^".concat(o[a.GTLT],"\\s*(").concat(o[a.LOOSEPLAIN],")$|^$")),l("COMPARATOR","^".concat(o[a.GTLT],"\\s*(").concat(o[a.FULLPLAIN],")$|^$")),l("COMPARATORTRIM","(\\s*)".concat(o[a.GTLT],"\\s*(").concat(o[a.LOOSEPLAIN],"|").concat(o[a.XRANGEPLAIN],")"),!0),t.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE","^\\s*(".concat(o[a.XRANGEPLAIN],")")+"\\s+-\\s+"+"(".concat(o[a.XRANGEPLAIN],")")+"\\s*$"),l("HYPHENRANGELOOSE","^\\s*(".concat(o[a.XRANGEPLAINLOOSE],")")+"\\s+-\\s+"+"(".concat(o[a.XRANGEPLAINLOOSE],")")+"\\s*$"),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}(a1,a1.exports)
var u1=/^[0-9]+$/,c1=l1,f1=s1.MAX_LENGTH,d1=s1.MAX_SAFE_INTEGER,h1=a1.exports.re,p1=a1.exports.t,g1=o1,m1=(e,t)=>{var n=u1.test(e),r=u1.test(t)
return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1}
class y1{constructor(e,t){if(t=g1(t),e instanceof y1){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e
e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: ".concat(e))
if(e.length>f1)throw new TypeError("version is longer than ".concat(f1," characters"))
c1("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease
var n=e.trim().match(t.loose?h1[p1.LOOSE]:h1[p1.FULL])
if(!n)throw new TypeError("Invalid Version: ".concat(e))
if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>d1||this.major<0)throw new TypeError("Invalid major version")
if(this.minor>d1||this.minor<0)throw new TypeError("Invalid minor version")
if(this.patch>d1||this.patch<0)throw new TypeError("Invalid patch version")
n[4]?this.prerelease=n[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){var t=+e
if(t>=0&&t<d1)return t}return e})):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version="".concat(this.major,".").concat(this.minor,".").concat(this.patch),this.prerelease.length&&(this.version+="-".concat(this.prerelease.join("."))),this.version}toString(){return this.version}compare(e){if(c1("SemVer.compare",this.version,this.options,e),!(e instanceof y1)){if("string"==typeof e&&e===this.version)return 0
e=new y1(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof y1||(e=new y1(e,this.options)),m1(this.major,e.major)||m1(this.minor,e.minor)||m1(this.patch,e.patch)}comparePre(e){if(e instanceof y1||(e=new y1(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1
if(!this.prerelease.length&&e.prerelease.length)return 1
if(!this.prerelease.length&&!e.prerelease.length)return 0
var t=0
do{var n=this.prerelease[t],r=e.prerelease[t]
if(c1("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0
if(void 0===r)return 1
if(void 0===n)return-1
if(n!==r)return m1(n,r)}while(++t)}compareBuild(e){e instanceof y1||(e=new y1(e,this.options))
var t=0
do{var n=this.build[t],r=e.build[t]
if(c1("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0
if(void 0===r)return 1
if(void 0===n)return-1
if(n!==r)return m1(n,r)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t)
break
case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t)
break
case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t)
break
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t)
break
case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[]
break
case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[]
break
case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[]
break
case"pre":if(0===this.prerelease.length)this.prerelease=[0]
else{for(var n=this.prerelease.length;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);-1===n&&this.prerelease.push(0)}t&&(0===m1(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0])
break
default:throw new Error("invalid increment argument: ".concat(e))}return this.format(),this.raw=this.version,this}}var v1,b1,x1,_1,w1=y1,O1=w1,k1=(e,t,n)=>new O1(e,n).compare(new O1(t,n)),E1=k1,A1=k1,S1=k1,D1=k1,C1=k1,M1=k1,j1=(e,t,n,r)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof n&&(n=n.version),e===n
case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof n&&(n=n.version),e!==n
case"":case"=":case"==":return((e,t,n)=>0===E1(e,t,n))(e,n,r)
case"!=":return((e,t,n)=>0!==A1(e,t,n))(e,n,r)
case">":return((e,t,n)=>S1(e,t,n)>0)(e,n,r)
case">=":return((e,t,n)=>D1(e,t,n)>=0)(e,n,r)
case"<":return((e,t,n)=>C1(e,t,n)<0)(e,n,r)
case"<=":return((e,t,n)=>M1(e,t,n)<=0)(e,n,r)
default:throw new TypeError("Invalid operator: ".concat(t))}}
function F1(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return T1(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T1(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function T1(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var N1=function e(){if(_1)return x1
_1=1
class t{constructor(e,n){if(n=r(n),e instanceof t)return e.loose===!!n.loose&&e.includePrerelease===!!n.includePrerelease?e:new t(e.raw,n)
if(e instanceof i)return this.raw=e.value,this.set=[[e]],this.format(),this
if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=e,this.set=e.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError("Invalid SemVer Range: ".concat(e))
if(this.set.length>1){var o=this.set[0]
if(this.set=this.set.filter((e=>!d(e[0]))),0===this.set.length)this.set=[o]
else if(this.set.length>1){var a,s=F1(this.set)
try{for(s.s();!(a=s.n()).done;){var l=a.value
if(1===l.length&&h(l[0])){this.set=[l]
break}}}catch(e){s.e(e)}finally{s.f()}}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim()
var t=Object.keys(this.options).join(","),r="parseRange:".concat(t,":").concat(e),a=n.get(r)
if(a)return a
var h=this.options.loose,p=h?s[l.HYPHENRANGELOOSE]:s[l.HYPHENRANGE]
e=e.replace(p,E(this.options.includePrerelease)),o("hyphen replace",e),e=e.replace(s[l.COMPARATORTRIM],u),o("comparator trim",e)
var m=(e=(e=(e=e.replace(s[l.TILDETRIM],c)).replace(s[l.CARETTRIM],f)).split(/\s+/).join(" ")).split(" ").map((e=>g(e,this.options))).join(" ").split(/\s+/).map((e=>k(e,this.options)))
h&&(m=m.filter((e=>(o("loose invalid filter",e,this.options),!!e.match(s[l.COMPARATORLOOSE]))))),o("range list",m)
var y,v=new Map,b=m.map((e=>new i(e,this.options))),x=F1(b)
try{for(x.s();!(y=x.n()).done;){var _=y.value
if(d(_))return[_]
v.set(_.value,_)}}catch(e){x.e(e)}finally{x.f()}v.size>1&&v.has("")&&v.delete("")
var w=[...v.values()]
return n.set(r,w),w}intersects(e,n){if(!(e instanceof t))throw new TypeError("a Range is required")
return this.set.some((t=>p(t,n)&&e.set.some((e=>p(e,n)&&t.every((t=>e.every((e=>t.intersects(e,n)))))))))}test(e){if(!e)return!1
if("string"==typeof e)try{e=new a(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(A(this.set[t],e,this.options))return!0
return!1}}x1=t
var n=new class{constructor(e){if("number"==typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!=typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number")
this[B0]=e.max||1/0
var t=e.length||J0
if(this[q0]="function"!=typeof t?J0:t,this[Z0]=e.stale||!1,e.maxAge&&"number"!=typeof e.maxAge)throw new TypeError("maxAge must be a number")
this[W0]=e.maxAge||0,this[V0]=e.dispose,this[H0]=e.noDisposeOnSet||!1,this[X0]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number")
this[B0]=e||1/0,e1(this)}get max(){return this[B0]}set allowStale(e){this[Z0]=!!e}get allowStale(){return this[Z0]}set maxAge(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number")
this[W0]=e,e1(this)}get maxAge(){return this[W0]}set lengthCalculator(e){"function"!=typeof e&&(e=J0),e!==this[q0]&&(this[q0]=e,this[U0]=0,this[G0].forEach((e=>{e.length=this[q0](e.value,e.key),this[U0]+=e.length}))),e1(this)}get lengthCalculator(){return this[q0]}get length(){return this[U0]}get itemCount(){return this[G0].length}rforEach(e,t){t=t||this
for(var n=this[G0].tail;null!==n;){var r=n.prev
r1(this,e,n,t),n=r}}forEach(e,t){t=t||this
for(var n=this[G0].head;null!==n;){var r=n.next
r1(this,e,n,t),n=r}}keys(){return this[G0].toArray().map((e=>e.key))}values(){return this[G0].toArray().map((e=>e.value))}reset(){this[V0]&&this[G0]&&this[G0].length&&this[G0].forEach((e=>this[V0](e.key,e.value))),this[Y0]=new Map,this[G0]=new L0,this[U0]=0}dump(){return this[G0].map((e=>!Q0(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[G0]}set(e,t,n){if((n=n||this[W0])&&"number"!=typeof n)throw new TypeError("maxAge must be a number")
var r=n?Date.now():0,i=this[q0](t,e)
if(this[Y0].has(e)){if(i>this[B0])return t1(this,this[Y0].get(e)),!1
var o=this[Y0].get(e).value
return this[V0]&&(this[H0]||this[V0](e,o.value)),o.now=r,o.maxAge=n,o.value=t,this[U0]+=i-o.length,o.length=i,this.get(e),e1(this),!0}var a=new n1(e,t,i,r,n)
return a.length>this[B0]?(this[V0]&&this[V0](e,t),!1):(this[U0]+=a.length,this[G0].unshift(a),this[Y0].set(e,this[G0].head),e1(this),!0)}has(e){if(!this[Y0].has(e))return!1
var t=this[Y0].get(e).value
return!Q0(this,t)}get(e){return K0(this,e,!0)}peek(e){return K0(this,e,!1)}pop(){var e=this[G0].tail
return e?(t1(this,e),e.value):null}del(e){t1(this,this[Y0].get(e))}load(e){this.reset()
for(var t=Date.now(),n=e.length-1;n>=0;n--){var r=e[n],i=r.e||0
if(0===i)this.set(r.k,r.v)
else{var o=i-t
o>0&&this.set(r.k,r.v,o)}}}prune(){this[Y0].forEach(((e,t)=>K0(this,t,!1)))}}({max:1e3}),r=o1,i=function(){if(b1)return v1
b1=1
var t=Symbol("SemVer ANY")
class n{static get ANY(){return t}constructor(e,i){if(i=r(i),e instanceof n){if(e.loose===!!i.loose)return e
e=e.value}s("comparator",e,i),this.options=i,this.loose=!!i.loose,this.parse(e),this.semver===t?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(e){var n=this.options.loose?i[o.COMPARATORLOOSE]:i[o.COMPARATOR],r=e.match(n)
if(!r)throw new TypeError("Invalid comparator: ".concat(e))
this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new l(r[2],this.options.loose):this.semver=t}toString(){return this.value}test(e){if(s("Comparator.test",e,this.options.loose),this.semver===t||e===t)return!0
if("string"==typeof e)try{e=new l(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Comparator is required")
if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new u(e.value,t).test(this.value)
if(""===e.operator)return""===e.value||new u(this.value,t).test(e.semver)
var r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),l=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator)
return r||i||o&&s||l||c}}v1=n
var r=o1,i=a1.exports.re,o=a1.exports.t,a=j1,s=l1,l=w1,u=e()
return v1}(),o=l1,a=w1,s=a1.exports.re,l=a1.exports.t,u=a1.exports.comparatorTrimReplace,c=a1.exports.tildeTrimReplace,f=a1.exports.caretTrimReplace,d=e=>"<0.0.0-0"===e.value,h=e=>""===e.value,p=(e,t)=>{for(var n=!0,r=e.slice(),i=r.pop();n&&r.length;)n=r.every((e=>i.intersects(e,t))),i=r.pop()
return n},g=(e,t)=>(o("comp",e,t),e=b(e,t),o("caret",e),e=y(e,t),o("tildes",e),e=_(e,t),o("xrange",e),e=O(e,t),o("stars",e),e),m=e=>!e||"x"===e.toLowerCase()||"*"===e,y=(e,t)=>e.trim().split(/\s+/).map((e=>v(e,t))).join(" "),v=(e,t)=>{var n=t.loose?s[l.TILDELOOSE]:s[l.TILDE]
return e.replace(n,((t,n,r,i,a)=>{var s
return o("tilde",e,t,n,r,i,a),m(n)?s="":m(r)?s=">=".concat(n,".0.0 <").concat(+n+1,".0.0-0"):m(i)?s=">=".concat(n,".").concat(r,".0 <").concat(n,".").concat(+r+1,".0-0"):a?(o("replaceTilde pr",a),s=">=".concat(n,".").concat(r,".").concat(i,"-").concat(a," <").concat(n,".").concat(+r+1,".0-0")):s=">=".concat(n,".").concat(r,".").concat(i," <").concat(n,".").concat(+r+1,".0-0"),o("tilde return",s),s}))},b=(e,t)=>e.trim().split(/\s+/).map((e=>x(e,t))).join(" "),x=(e,t)=>{o("caret",e,t)
var n=t.loose?s[l.CARETLOOSE]:s[l.CARET],r=t.includePrerelease?"-0":""
return e.replace(n,((t,n,i,a,s)=>{var l
return o("caret",e,t,n,i,a,s),m(n)?l="":m(i)?l=">=".concat(n,".0.0").concat(r," <").concat(+n+1,".0.0-0"):m(a)?l="0"===n?">=".concat(n,".").concat(i,".0").concat(r," <").concat(n,".").concat(+i+1,".0-0"):">=".concat(n,".").concat(i,".0").concat(r," <").concat(+n+1,".0.0-0"):s?(o("replaceCaret pr",s),l="0"===n?"0"===i?">=".concat(n,".").concat(i,".").concat(a,"-").concat(s," <").concat(n,".").concat(i,".").concat(+a+1,"-0"):">=".concat(n,".").concat(i,".").concat(a,"-").concat(s," <").concat(n,".").concat(+i+1,".0-0"):">=".concat(n,".").concat(i,".").concat(a,"-").concat(s," <").concat(+n+1,".0.0-0")):(o("no pr"),l="0"===n?"0"===i?">=".concat(n,".").concat(i,".").concat(a).concat(r," <").concat(n,".").concat(i,".").concat(+a+1,"-0"):">=".concat(n,".").concat(i,".").concat(a).concat(r," <").concat(n,".").concat(+i+1,".0-0"):">=".concat(n,".").concat(i,".").concat(a," <").concat(+n+1,".0.0-0")),o("caret return",l),l}))},_=(e,t)=>(o("replaceXRanges",e,t),e.split(/\s+/).map((e=>w(e,t))).join(" ")),w=(e,t)=>{e=e.trim()
var n=t.loose?s[l.XRANGELOOSE]:s[l.XRANGE]
return e.replace(n,((n,r,i,a,s,l)=>{o("xRange",e,n,r,i,a,s,l)
var u=m(i),c=u||m(a),f=c||m(s),d=f
return"="===r&&d&&(r=""),l=t.includePrerelease?"-0":"",u?n=">"===r||"<"===r?"<0.0.0-0":"*":r&&d?(c&&(a=0),s=0,">"===r?(r=">=",c?(i=+i+1,a=0,s=0):(a=+a+1,s=0)):"<="===r&&(r="<",c?i=+i+1:a=+a+1),"<"===r&&(l="-0"),n="".concat(r+i,".").concat(a,".").concat(s).concat(l)):c?n=">=".concat(i,".0.0").concat(l," <").concat(+i+1,".0.0-0"):f&&(n=">=".concat(i,".").concat(a,".0").concat(l," <").concat(i,".").concat(+a+1,".0-0")),o("xRange return",n),n}))},O=(e,t)=>(o("replaceStars",e,t),e.trim().replace(s[l.STAR],"")),k=(e,t)=>(o("replaceGTE0",e,t),e.trim().replace(s[t.includePrerelease?l.GTE0PRE:l.GTE0],"")),E=e=>(t,n,r,i,o,a,s,l,u,c,f,d,h)=>(n=m(r)?"":m(i)?">=".concat(r,".0.0").concat(e?"-0":""):m(o)?">=".concat(r,".").concat(i,".0").concat(e?"-0":""):a?">=".concat(n):">=".concat(n).concat(e?"-0":""),l=m(u)?"":m(c)?"<".concat(+u+1,".0.0-0"):m(f)?"<".concat(u,".").concat(+c+1,".0-0"):d?"<=".concat(u,".").concat(c,".").concat(f,"-").concat(d):e?"<".concat(u,".").concat(c,".").concat(+f+1,"-0"):"<=".concat(l),"".concat(n," ").concat(l).trim()),A=(e,t,n)=>{for(var r=0;r<e.length;r++)if(!e[r].test(t))return!1
if(t.prerelease.length&&!n.includePrerelease){for(var a=0;a<e.length;a++)if(o(e[a].semver),e[a].semver!==i.ANY&&e[a].semver.prerelease.length>0){var s=e[a].semver
if(s.major===t.major&&s.minor===t.minor&&s.patch===t.patch)return!0}return!1}return!0}
return x1}(),$1=(e,t,n)=>{try{t=new N1(t,n)}catch(e){return!1}return t.test(e)}
function P1(e,t,n){var r=e.open(t),i=new URL(t).origin,o=40
e.addEventListener("message",(function t(n){n.source===r&&(o=0,e.removeEventListener("message",t,!1))}),!1),setTimeout((function e(){o<=0||(r.postMessage(n,i),setTimeout(e,250),o-=1)}),250)}var z1,I1='.vega-embed {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.vega-embed.has-actions {\n  padding-right: 38px;\n}\n.vega-embed details:not([open]) > :not(summary) {\n  display: none !important;\n}\n.vega-embed summary {\n  list-style: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 6px;\n  z-index: 1000;\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  color: #1b1e23;\n  border: 1px solid #aaa;\n  border-radius: 999px;\n  opacity: 0.2;\n  transition: opacity 0.4s ease-in;\n  cursor: pointer;\n  line-height: 0px;\n}\n.vega-embed summary::-webkit-details-marker {\n  display: none;\n}\n.vega-embed summary:active {\n  box-shadow: #aaa 0px 0px 0px 1px inset;\n}\n.vega-embed summary svg {\n  width: 14px;\n  height: 14px;\n}\n.vega-embed details[open] summary {\n  opacity: 0.7;\n}\n.vega-embed:hover summary, .vega-embed:focus-within summary {\n  opacity: 1 !important;\n  transition: opacity 0.2s ease;\n}\n.vega-embed .vega-actions {\n  position: absolute;\n  z-index: 1001;\n  top: 35px;\n  right: -9px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  background: white;\n  animation-duration: 0.15s;\n  animation-name: scale-in;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n  text-align: left;\n}\n.vega-embed .vega-actions a {\n  padding: 8px 16px;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  white-space: nowrap;\n  color: #434a56;\n  text-decoration: none;\n}\n.vega-embed .vega-actions a:hover, .vega-embed .vega-actions a:focus {\n  background-color: #f7f7f9;\n  color: black;\n}\n.vega-embed .vega-actions::before, .vega-embed .vega-actions::after {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.vega-embed .vega-actions::before {\n  left: auto;\n  right: 14px;\n  top: -16px;\n  border: 8px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #d9d9d9;\n}\n.vega-embed .vega-actions::after {\n  left: auto;\n  right: 15px;\n  top: -14px;\n  border: 7px solid rgba(0, 0, 0, 0);\n  border-bottom-color: #fff;\n}\n.vega-embed .chart-wrapper.fit-x {\n  width: 100%;\n}\n.vega-embed .chart-wrapper.fit-y {\n  height: 100%;\n}\n\n.vega-embed-wrapper {\n  max-width: 100%;\n  overflow: auto;\n  padding-right: 14px;\n}\n\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n'
function R1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
for(var i=0,o=n;i<o.length;i++){var a=o[i]
L1(e,a)}return e}function L1(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n]
Ee(e,i,t[i],!0)}}function B1(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return U1(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U1(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function U1(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function q1(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z1(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?q1(Object(n),!0).forEach((function(t){e0(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q1(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(!t||t<0?0:+t,e.length)===e})
var W1="6.21.0",V1=y,H1=v,G1="undefined"!=typeof window?window:void 0
void 0===H1&&null!=G1&&null!==(z1=G1.vl)&&void 0!==z1&&z1.compile&&(H1=G1.vl)
var Y1={export:{svg:!0,png:!0},source:!0,compiled:!0,editor:!0},X1={CLICK_TO_VIEW_ACTIONS:"Click to view actions",COMPILED_ACTION:"View Compiled Vega",EDITOR_ACTION:"Open in Vega Editor",PNG_ACTION:"Save as PNG",SOURCE_ACTION:"View Source",SVG_ACTION:"Save as SVG"},J1={vega:"Vega","vega-lite":"Vega-Lite"},K1={vega:V1.version,"vega-lite":H1?H1.version:"not available"},Q1={vega:e=>e,"vega-lite":(e,t)=>H1.compile(e,{config:t}).spec},e2='\n<svg viewBox="0 0 16 16" fill="currentColor" stroke="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">\n  <circle r="2" cy="8" cx="2"></circle>\n  <circle r="2" cy="8" cx="8"></circle>\n  <circle r="2" cy="8" cx="14"></circle>\n</svg>',t2="chart-wrapper"
function n2(e){return"function"==typeof e}function r2(e,t,n,r){var i="<html><head>".concat(t,'</head><body><pre><code class="json">'),o="</code></pre>".concat(n,"</body></html>"),a=window.open("")
a.document.write(i+e+o),a.document.title="".concat(J1[r]," JSON Source")}function i2(e,t){if(e.$schema){var n,r=rQ(e.$schema)
t&&t!==r.library&&console.warn("The given visualization spec is written in ".concat(J1[r.library],", but mode argument sets ").concat(null!==(n=J1[t])&&void 0!==n?n:t,"."))
var i=r.library
return $1(K1[i],"^".concat(r.version.slice(1)))||console.warn("The input spec uses ".concat(J1[i]," ").concat(r.version,", but the current version of ").concat(J1[i]," is v").concat(K1[i],".")),i}return"mark"in e||"encoding"in e||"layer"in e||"hconcat"in e||"vconcat"in e||"facet"in e||"repeat"in e?"vega-lite":"marks"in e||"signals"in e||"scales"in e||"axes"in e?"vega":null!=t?t:"vega"}function o2(e){return(t=e)&&"load"in t?e:V1.loader(e)
var t}function a2(e){var t,n,r=null!==(t=null===(n=e.usermeta)||void 0===n?void 0:n.embedOptions)&&void 0!==t?t:{}
return yt(r.defaultStyle)&&(r.defaultStyle=!1),r}function s2(e,t){return l2.apply(this,arguments)}function l2(){return l2=n0(T0.mark((function e(t,n){var r,i,o,a,s,l,u,c,f,d,h,p=arguments
return T0.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=p.length>2&&void 0!==p[2]?p[2]:{},!yt(n)){e.next=10
break}return s=o2(o.loader),e.t0=JSON,e.next=6,s.load(n)
case 6:e.t1=e.sent,a=e.t0.parse.call(e.t0,e.t1),e.next=11
break
case 10:a=n
case 11:return l=a2(a),u=l.loader,s&&!u||(s=o2(null!==(c=o.loader)&&void 0!==c?c:u)),e.next=16,u2(l,s)
case 16:return f=e.sent,e.next=19,u2(o,s)
case 19:return d=e.sent,h=Z1(Z1({},R1(d,f)),{},{config:ke(null!==(r=d.config)&&void 0!==r?r:{},null!==(i=f.config)&&void 0!==i?i:{})}),e.next=23,d2(t,a,h,s)
case 23:return e.abrupt("return",e.sent)
case 24:case"end":return e.stop()}}),e)}))),l2.apply(this,arguments)}function u2(e,t){return c2.apply(this,arguments)}function c2(){return c2=n0(T0.mark((function e(t,n){var r,i,o
return T0.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!yt(t.config)){e.next=8
break}return e.t1=JSON,e.next=4,n.load(t.config)
case 4:e.t2=e.sent,e.t0=e.t1.parse.call(e.t1,e.t2),e.next=9
break
case 8:e.t0=null!==(r=t.config)&&void 0!==r?r:{}
case 9:if(i=e.t0,!yt(t.patch)){e.next=18
break}return e.t4=JSON,e.next=14,n.load(t.patch)
case 14:e.t5=e.sent,e.t3=e.t4.parse.call(e.t4,e.t5),e.next=19
break
case 18:e.t3=t.patch
case 19:return o=e.t3,e.abrupt("return",Z1(Z1(Z1({},t),o?{patch:o}:{}),i?{config:i}:{}))
case 21:case"end":return e.stop()}}),e)}))),c2.apply(this,arguments)}function f2(e){var t,n=e.getRootNode?e.getRootNode():document
return n instanceof ShadowRoot?{root:n,rootContainer:n}:{root:document,rootContainer:null!==(t=document.head)&&void 0!==t?t:document.body}}function d2(e,t){return h2.apply(this,arguments)}function h2(){return h2=n0(T0.mark((function e(t,n){var r,i,o,a,s,l,u,c,f,d,h,p,g,m,y,v,x,_,w,O,k,E,A,S,D,C,M,j,F,T,N,$,P,z,R,L,B,U,q,Z,W,V,H,G,Y,X,J,Q,ee,te,ne,re=arguments
return T0.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne=function(){U&&document.removeEventListener("click",U),$.finalize()},c=re.length>2&&void 0!==re[2]?re[2]:{},f=re.length>3?re[3]:void 0,d=c.theme?ke(b[c.theme],null!==(r=c.config)&&void 0!==r?r:{}):c.config,h=dt(c.actions)?c.actions:R1({},Y1,null!==(i=c.actions)&&void 0!==i?i:{}),p=Z1(Z1({},X1),c.i18n),g=null!==(o=c.renderer)&&void 0!==o?o:"canvas",m=null!==(a=c.logLevel)&&void 0!==a?a:V1.Warn,y=null!==(s=c.downloadFileName)&&void 0!==s?s:"visualization",v="string"==typeof t?document.querySelector(t):t){e.next=12
break}throw new Error("".concat(t," does not exist"))
case 12:if(!1!==c.defaultStyle&&(x="vega-embed-style",_=f2(v),w=_.root,O=_.rootContainer,w.getElementById(x)||((k=document.createElement("style")).id=x,k.innerHTML=void 0===c.defaultStyle||!0===c.defaultStyle?I1.toString():c.defaultStyle,O.appendChild(k))),E=i2(n,c.mode),A=Q1[E](n,d),"vega-lite"===E&&A.$schema&&(S=rQ(A.$schema),$1(K1.vega,"^".concat(S.version.slice(1)))||console.warn("The compiled spec uses Vega ".concat(S.version,", but current version is v").concat(K1.vega,"."))),v.classList.add("vega-embed"),h&&v.classList.add("has-actions"),v.innerHTML="",D=v,h&&((C=document.createElement("div")).classList.add(t2),v.appendChild(C),D=C),(M=c.patch)&&(A=M instanceof Function?M(A):I(A,M,!0,!1).newDocument),c.formatLocale&&V1.formatLocale(c.formatLocale),c.timeFormatLocale&&V1.timeFormatLocale(c.timeFormatLocale),c.expressionFunctions)for(j in c.expressionFunctions)"fn"in(F=c.expressionFunctions[j])?V1.expressionFunction(j,F.fn,F.visitor):F instanceof Function&&V1.expressionFunction(j,F)
return T=c.ast,N=V1.parse(A,"vega-lite"===E?{}:d,{ast:T}),($=new(c.viewClass||V1.View)(N,Z1({loader:f,logLevel:m,renderer:g},T?{expr:null!==(l=null!==(u=V1.expressionInterpreter)&&void 0!==u?u:c.expr)&&void 0!==l?l:yz}:{}))).addSignalListener("autosize",((e,t)=>{var n=t.type
"fit-x"==n?(D.classList.add("fit-x"),D.classList.remove("fit-y")):"fit-y"==n?(D.classList.remove("fit-x"),D.classList.add("fit-y")):"fit"==n?D.classList.add("fit-x","fit-y"):D.classList.remove("fit-x","fit-y")})),!1!==c.tooltip&&(P=n2(c.tooltip)?c.tooltip:new QQ(!0===c.tooltip?{}:c.tooltip).call,$.tooltip(P)),void 0===(z=c.hover)&&(z="vega"===E),z&&(L=(R="boolean"==typeof z?{}:z).hoverSet,B=R.updateSet,$.hover(L,B)),c&&(null!=c.width&&$.width(c.width),null!=c.height&&$.height(c.height),null!=c.padding&&$.padding(c.padding)),e.next=37,$.initialize(D,c.bind).runAsync()
case 37:if(!1!==h){if(q=v,!1!==c.defaultStyle&&((Z=document.createElement("details")).title=p.CLICK_TO_VIEW_ACTIONS,v.append(Z),q=Z,(W=document.createElement("summary")).innerHTML=e2,Z.append(W),U=e=>{Z.contains(e.target)||Z.removeAttribute("open")},document.addEventListener("click",U)),V=document.createElement("div"),q.append(V),V.classList.add("vega-actions"),!0===h||!1!==h.export){H=B1(["svg","png"])
try{for(Y=function(){var e=G.value
if(!0===h||!0===h.export||h.export[e]){var t=p["".concat(e.toUpperCase(),"_ACTION")],n=document.createElement("a")
n.text=t,n.href="#",n.target="_blank",n.download="".concat(y,".").concat(e),n.addEventListener("mousedown",function(){var t=n0(T0.mark((function t(n){var r
return T0.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,$.toImageURL(e,c.scaleFactor)
case 3:r=t.sent,this.href=r
case 5:case"end":return t.stop()}}),t,this)})))
return function(e){return t.apply(this,arguments)}}()),V.append(n)}},H.s();!(G=H.n()).done;)Y()}catch(e){H.e(e)}finally{H.f()}}!0!==h&&!1===h.source||((X=document.createElement("a")).text=p.SOURCE_ACTION,X.href="#",X.addEventListener("click",(function(e){var t,r
r2(K()(n),null!==(t=c.sourceHeader)&&void 0!==t?t:"",null!==(r=c.sourceFooter)&&void 0!==r?r:"",E),e.preventDefault()})),V.append(X)),"vega-lite"!==E||!0!==h&&!1===h.compiled||((J=document.createElement("a")).text=p.COMPILED_ACTION,J.href="#",J.addEventListener("click",(function(e){var t,n
r2(K()(A),null!==(t=c.sourceHeader)&&void 0!==t?t:"",null!==(n=c.sourceFooter)&&void 0!==n?n:"","vega"),e.preventDefault()})),V.append(J)),!0!==h&&!1===h.editor||(ee=null!==(Q=c.editorUrl)&&void 0!==Q?Q:"https://vega.github.io/editor/",(te=document.createElement("a")).text=p.EDITOR_ACTION,te.href="#",te.addEventListener("click",(function(e){P1(window,ee,{config:d,mode:E,renderer:g,spec:K()(n)}),e.preventDefault()})),V.append(te))}return e.abrupt("return",{view:$,spec:n,vgSpec:A,finalize:ne,embedOptions:c})
case 39:case"end":return e.stop()}}),e)}))),h2.apply(this,arguments)}},438:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ZodError=t.quotelessJson=t.ZodIssueCode=void 0
const r=n(787)
t.ZodIssueCode=r.util.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of"]),t.quotelessJson=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:")
class i extends Error{constructor(e){var t
super(),t=this,this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
t.issues=[...t.issues,...e]}
const n=new.target.prototype
Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(const i of e.issues)if("invalid_union"===i.code)i.unionErrors.map(r)
else if("invalid_return_type"===i.code)r(i.returnTypeError)
else if("invalid_arguments"===i.code)r(i.argumentsError)
else if(0===i.path.length)n._errors.push(t(i))
else{let e=n,r=0
for(;r<i.path.length;){const n=i.path[r]
r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}}
return r(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,r.util.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e.message
const t={},n=[]
for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r))
return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}t.ZodError=i,i.create=e=>new i(e)},856:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorMap=t.setErrorMap=t.defaultErrorMap=void 0
const i=r(n(574))
t.defaultErrorMap=i.default
let o=i.default
t.setErrorMap=function(e){o=e},t.getErrorMap=function(){return o}},113:function(e,t,n){"use strict"
var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),t.ZodParsedType=t.getParsedType=void 0,i(n(856),t),i(n(728),t),i(n(914),t)
var o=n(787)
Object.defineProperty(t,"getParsedType",{enumerable:!0,get:function(){return o.getParsedType}}),Object.defineProperty(t,"ZodParsedType",{enumerable:!0,get:function(){return o.ZodParsedType}}),i(n(337),t),i(n(438),t)},557:(e,t)=>{"use strict"
var n
Object.defineProperty(t,"__esModule",{value:!0}),t.errorUtil=void 0,(n=t.errorUtil||(t.errorUtil={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},n.toString=e=>"string"==typeof e?e:null==e?void 0:e.message},728:function(e,t,n){"use strict"
var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=t.isValid=t.isDirty=t.isAborted=t.OK=t.DIRTY=t.INVALID=t.ParseStatus=t.addIssueToContext=t.EMPTY_PATH=t.makeIssue=void 0
const i=n(856),o=r(n(574))
t.makeIssue=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,o=[...n,...i.path||[]],a={...i,path:o}
let s=""
const l=r.filter((e=>!!e)).slice().reverse()
for(const u of l)s=u(a,{data:t,defaultError:s}).message
return{...i,path:o,message:i.message||s}},t.EMPTY_PATH=[],t.addIssueToContext=function(e,n){const r=t.makeIssue({issueData:n,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,i.getErrorMap(),o.default].filter((e=>!!e))})
e.common.issues.push(r)}
class a{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,n){const r=[]
for(const i of n){if("aborted"===i.status)return t.INVALID
"dirty"===i.status&&e.dirty(),r.push(i.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const n=[]
for(const r of t)n.push({key:await r.key,value:await r.value})
return a.mergeObjectSync(e,n)}static mergeObjectSync(e,n){const r={}
for(const i of n){const{key:n,value:o}=i
if("aborted"===n.status)return t.INVALID
if("aborted"===o.status)return t.INVALID
"dirty"===n.status&&e.dirty(),"dirty"===o.status&&e.dirty(),(void 0!==o.value||i.alwaysSet)&&(r[n.value]=o.value)}return{status:e.value,value:r}}}t.ParseStatus=a,t.INVALID=Object.freeze({status:"aborted"}),t.DIRTY=e=>({status:"dirty",value:e}),t.OK=e=>({status:"valid",value:e}),t.isAborted=e=>"aborted"===e.status,t.isDirty=e=>"dirty"===e.status,t.isValid=e=>"valid"===e.status,t.isAsync=e=>void 0!==typeof Promise&&e instanceof Promise},914:(e,t)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})},787:(e,t)=>{"use strict"
var n
Object.defineProperty(t,"__esModule",{value:!0}),t.getParsedType=t.ZodParsedType=t.util=void 0,function(e){e.assertEqual=e=>e,e.assertIs=function(e){},e.assertNever=function(e){throw new Error},e.arrayToEnum=e=>{const t={}
for(const n of e)t[n]=n
return t},e.getValidEnumValues=t=>{const n=e.objectKeys(t).filter((e=>"number"!=typeof t[t[e]])),r={}
for(const e of n)r[e]=t[e]
return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]})),e.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[]
for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n)
return t},e.find=(e,t)=>{for(const n of e)if(t(n))return n},e.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,e.joinValues=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" | "
return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},e.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t}(n=t.util||(t.util={})),t.ZodParsedType=n.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),t.getParsedType=e=>{switch(typeof e){case"undefined":return t.ZodParsedType.undefined
case"string":return t.ZodParsedType.string
case"number":return isNaN(e)?t.ZodParsedType.nan:t.ZodParsedType.number
case"boolean":return t.ZodParsedType.boolean
case"function":return t.ZodParsedType.function
case"bigint":return t.ZodParsedType.bigint
case"object":return Array.isArray(e)?t.ZodParsedType.array:null===e?t.ZodParsedType.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?t.ZodParsedType.promise:"undefined"!=typeof Map&&e instanceof Map?t.ZodParsedType.map:"undefined"!=typeof Set&&e instanceof Set?t.ZodParsedType.set:"undefined"!=typeof Date&&e instanceof Date?t.ZodParsedType.date:t.ZodParsedType.object
default:return t.ZodParsedType.unknown}}},164:function(e,t,n){"use strict"
var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n)
return i(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)}
Object.defineProperty(t,"__esModule",{value:!0}),t.z=void 0
const s=o(n(113))
t.z=s,a(n(113),t),t.default=s},574:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
const r=n(787),i=n(438)
t.default=(e,t)=>{let n
switch(e.code){case i.ZodIssueCode.invalid_type:n=e.received===r.ZodParsedType.undefined?"Required":`Expected ${e.expected}, received ${e.received}`
break
case i.ZodIssueCode.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,r.util.jsonStringifyReplacer)}`
break
case i.ZodIssueCode.unrecognized_keys:n=`Unrecognized key(s) in object: ${r.util.joinValues(e.keys,", ")}`
break
case i.ZodIssueCode.invalid_union:n="Invalid input"
break
case i.ZodIssueCode.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${r.util.joinValues(e.options)}`
break
case i.ZodIssueCode.invalid_enum_value:n=`Invalid enum value. Expected ${r.util.joinValues(e.options)}, received '${e.received}'`
break
case i.ZodIssueCode.invalid_arguments:n="Invalid function arguments"
break
case i.ZodIssueCode.invalid_return_type:n="Invalid function return type"
break
case i.ZodIssueCode.invalid_date:n="Invalid date"
break
case i.ZodIssueCode.invalid_string:"object"==typeof e.validation?"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:r.util.assertNever(e.validation):n="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid"
break
case i.ZodIssueCode.too_small:n="array"===e.type?`Array must contain ${e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be greater than ${e.inclusive?"or equal to ":""}${e.minimum}`:"date"===e.type?`Date must be greater than ${e.inclusive?"or equal to ":""}${new Date(e.minimum)}`:"Invalid input"
break
case i.ZodIssueCode.too_big:n="array"===e.type?`Array must contain ${e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be less than ${e.inclusive?"or equal to ":""}${e.maximum}`:"date"===e.type?`Date must be smaller than ${e.inclusive?"or equal to ":""}${new Date(e.maximum)}`:"Invalid input"
break
case i.ZodIssueCode.custom:n="Invalid input"
break
case i.ZodIssueCode.invalid_intersection_types:n="Intersection results could not be merged"
break
case i.ZodIssueCode.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`
break
default:n=t.defaultError,r.util.assertNever(e)}return{message:n}}},337:(e,t,n)=>{"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.function=t.enum=t.effect=t.discriminatedUnion=t.date=t.boolean=t.bigint=t.array=t.any=t.ZodFirstPartyTypeKind=t.late=t.ZodSchema=t.Schema=t.custom=t.ZodBranded=t.BRAND=t.ZodNaN=t.ZodDefault=t.ZodNullable=t.ZodOptional=t.ZodTransformer=t.ZodEffects=t.ZodPromise=t.ZodNativeEnum=t.ZodEnum=t.ZodLiteral=t.ZodLazy=t.ZodFunction=t.ZodSet=t.ZodMap=t.ZodRecord=t.ZodTuple=t.ZodIntersection=t.ZodDiscriminatedUnion=t.ZodUnion=t.ZodObject=t.objectUtil=t.ZodArray=t.ZodVoid=t.ZodNever=t.ZodUnknown=t.ZodAny=t.ZodNull=t.ZodUndefined=t.ZodDate=t.ZodBoolean=t.ZodBigInt=t.ZodNumber=t.ZodString=t.ZodType=void 0,t.NEVER=t.void=t.unknown=t.union=t.undefined=t.tuple=t.transformer=t.string=t.strictObject=t.set=t.record=t.promise=t.preprocess=t.ostring=t.optional=t.onumber=t.oboolean=t.object=t.number=t.nullable=t.null=t.never=t.nativeEnum=t.nan=t.map=t.literal=t.lazy=t.intersection=t.instanceof=void 0
const r=n(856),i=n(557),o=n(728),a=n(787),s=n(438)
class l{constructor(e,t,n,r){this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._path.concat(this._key)}}const u=(e,t)=>{if(o.isValid(t))return{success:!0,data:t.value}
if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.")
return{success:!1,error:new s.ZodError(e.common.issues)}}
function c(e){if(!e)return{}
const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e
if(t&&(n||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.')
return t?{errorMap:t,description:i}:{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=r?r:t.defaultError}:{message:null!=n?n:t.defaultError},description:i}}class f{constructor(e){this.spa=this.safeParseAsync,this.superRefine=this._refinement,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.default=this.default.bind(this),this.describe=this.describe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return a.getParsedType(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:a.getParsedType(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new o.ParseStatus,ctx:{common:e.parent.common,data:e.data,parsedType:a.getParsedType(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e)
if(o.isAsync(t))throw new Error("Synchronous parse encountered promise.")
return t}_parseAsync(e){const t=this._parse(e)
return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t)
if(n.success)return n.data
throw n.error}safeParse(e,t){var n
const r={common:{issues:[],async:null!==(n=null==t?void 0:t.async)&&void 0!==n&&n,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:a.getParsedType(e)},i=this._parseSync({data:e,path:r.path,parent:r})
return u(r,i)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t)
if(n.success)return n.data
throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:a.getParsedType(e)},r=this._parse({data:e,path:[],parent:n}),i=await(o.isAsync(r)?r:Promise.resolve(r))
return u(n,i)}refine(e,t){const n=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t
return this._refinement(((t,r)=>{const i=e(t),o=()=>r.addIssue({code:s.ZodIssueCode.custom,...n(t)})
return"undefined"!=typeof Promise&&i instanceof Promise?i.then((e=>!!e||(o(),!1))):!!i||(o(),!1)}))}refinement(e,t){return this._refinement(((n,r)=>!!e(n)||(r.addIssue("function"==typeof t?t(n,r):t),!1)))}_refinement(e){return new H({schema:this,typeName:Q.ZodEffects,effect:{type:"refinement",refinement:e}})}optional(){return G.create(this)}nullable(){return Y.create(this)}nullish(){return this.optional().nullable()}array(){return S.create(this)}promise(){return V.create(this)}or(e){return F.create([this,e])}and(e){return $.create(this,e)}transform(e){return new H({schema:this,typeName:Q.ZodEffects,effect:{type:"transform",transform:e}})}default(e){return new X({innerType:this,defaultValue:"function"==typeof e?e:()=>e,typeName:Q.ZodDefault})}brand(){return new K({typeName:Q.ZodBranded,type:this,...c(void 0)})}describe(e){return new(0,this.constructor)({...this._def,description:e})}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}t.ZodType=f,t.Schema=f,t.ZodSchema=f
const d=/^c[^\s-]{8,}$/i,h=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,p=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
class g extends f{constructor(){super(...arguments),this._regex=(e,t,n)=>this.refinement((t=>e.test(t)),{validation:t,code:s.ZodIssueCode.invalid_string,...i.errorUtil.errToObj(n)}),this.nonempty=e=>this.min(1,i.errorUtil.errToObj(e)),this.trim=()=>new g({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}_parse(e){if(this._getType(e)!==a.ZodParsedType.string){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.string,received:t.parsedType}),o.INVALID}const t=new o.ParseStatus
let n
for(const r of this._def.checks)if("min"===r.kind)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.too_small,minimum:r.value,type:"string",inclusive:!0,message:r.message}),t.dirty())
else if("max"===r.kind)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.too_big,maximum:r.value,type:"string",inclusive:!0,message:r.message}),t.dirty())
else if("email"===r.kind)p.test(e.data)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{validation:"email",code:s.ZodIssueCode.invalid_string,message:r.message}),t.dirty())
else if("uuid"===r.kind)h.test(e.data)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{validation:"uuid",code:s.ZodIssueCode.invalid_string,message:r.message}),t.dirty())
else if("cuid"===r.kind)d.test(e.data)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{validation:"cuid",code:s.ZodIssueCode.invalid_string,message:r.message}),t.dirty())
else if("url"===r.kind)try{new URL(e.data)}catch(i){n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{validation:"url",code:s.ZodIssueCode.invalid_string,message:r.message}),t.dirty()}else"regex"===r.kind?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{validation:"regex",code:s.ZodIssueCode.invalid_string,message:r.message}),t.dirty())):"trim"===r.kind?e.data=e.data.trim():"startsWith"===r.kind?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):"endsWith"===r.kind?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):a.util.assertNever(r)
return{status:t.value,value:e.data}}_addCheck(e){return new g({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...i.errorUtil.errToObj(e)})}url(e){return this._addCheck({kind:"url",...i.errorUtil.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...i.errorUtil.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...i.errorUtil.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...i.errorUtil.errToObj(t)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...i.errorUtil.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...i.errorUtil.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...i.errorUtil.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...i.errorUtil.errToObj(t)})}length(e,t){return this.min(e,t).max(e,t)}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get minLength(){let e=null
for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value)
return e}get maxLength(){let e=null
for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value)
return e}}function m(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r
return parseInt(e.toFixed(i).replace(".",""))%parseInt(t.toFixed(i).replace(".",""))/Math.pow(10,i)}t.ZodString=g,g.create=e=>new g({checks:[],typeName:Q.ZodString,...c(e)})
class y extends f{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._getType(e)!==a.ZodParsedType.number){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.number,received:t.parsedType}),o.INVALID}let t
const n=new o.ParseStatus
for(const r of this._def.checks)"int"===r.kind?a.util.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:"integer",received:"float",message:r.message}),n.dirty()):"min"===r.kind?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),o.addIssueToContext(t,{code:s.ZodIssueCode.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,message:r.message}),n.dirty()):"max"===r.kind?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),o.addIssueToContext(t,{code:s.ZodIssueCode.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,message:r.message}),n.dirty()):"multipleOf"===r.kind?0!==m(e.data,r.value)&&(t=this._getOrReturnCtx(e,t),o.addIssueToContext(t,{code:s.ZodIssueCode.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):a.util.assertNever(r)
return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,i.errorUtil.toString(t))}gt(e,t){return this.setLimit("min",e,!1,i.errorUtil.toString(t))}lte(e,t){return this.setLimit("max",e,!0,i.errorUtil.toString(t))}lt(e,t){return this.setLimit("max",e,!1,i.errorUtil.toString(t))}setLimit(e,t,n,r){return new y({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:i.errorUtil.toString(r)}]})}_addCheck(e){return new y({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:i.errorUtil.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:i.errorUtil.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:i.errorUtil.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:i.errorUtil.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:i.errorUtil.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:i.errorUtil.toString(t)})}get minValue(){let e=null
for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value)
return e}get maxValue(){let e=null
for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value)
return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind))}}t.ZodNumber=y,y.create=e=>new y({checks:[],typeName:Q.ZodNumber,...c(e)})
class v extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.bigint){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.bigint,received:t.parsedType}),o.INVALID}return o.OK(e.data)}}t.ZodBigInt=v,v.create=e=>new v({typeName:Q.ZodBigInt,...c(e)})
class b extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.boolean){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.boolean,received:t.parsedType}),o.INVALID}return o.OK(e.data)}}t.ZodBoolean=b,b.create=e=>new b({typeName:Q.ZodBoolean,...c(e)})
class x extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.date){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.date,received:t.parsedType}),o.INVALID}if(isNaN(e.data.getTime())){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_date}),o.INVALID}const t=new o.ParseStatus
let n
for(const r of this._def.checks)"min"===r.kind?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.too_small,message:r.message,inclusive:!0,minimum:r.value,type:"date"}),t.dirty()):"max"===r.kind?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),o.addIssueToContext(n,{code:s.ZodIssueCode.too_big,message:r.message,inclusive:!0,maximum:r.value,type:"date"}),t.dirty()):a.util.assertNever(r)
return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new x({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:i.errorUtil.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:i.errorUtil.toString(t)})}get minDate(){let e=null
for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value)
return null!=e?new Date(e):null}get maxDate(){let e=null
for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value)
return null!=e?new Date(e):null}}t.ZodDate=x,x.create=e=>new x({checks:[],typeName:Q.ZodDate,...c(e)})
class _ extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.undefined){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.undefined,received:t.parsedType}),o.INVALID}return o.OK(e.data)}}t.ZodUndefined=_,_.create=e=>new _({typeName:Q.ZodUndefined,...c(e)})
class w extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.null){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.null,received:t.parsedType}),o.INVALID}return o.OK(e.data)}}t.ZodNull=w,w.create=e=>new w({typeName:Q.ZodNull,...c(e)})
class O extends f{constructor(){super(...arguments),this._any=!0}_parse(e){return o.OK(e.data)}}t.ZodAny=O,O.create=e=>new O({typeName:Q.ZodAny,...c(e)})
class k extends f{constructor(){super(...arguments),this._unknown=!0}_parse(e){return o.OK(e.data)}}t.ZodUnknown=k,k.create=e=>new k({typeName:Q.ZodUnknown,...c(e)})
class E extends f{_parse(e){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.never,received:t.parsedType}),o.INVALID}}t.ZodNever=E,E.create=e=>new E({typeName:Q.ZodNever,...c(e)})
class A extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.undefined){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.void,received:t.parsedType}),o.INVALID}return o.OK(e.data)}}t.ZodVoid=A,A.create=e=>new A({typeName:Q.ZodVoid,...c(e)})
class S extends f{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),r=this._def
if(t.parsedType!==a.ZodParsedType.array)return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.array,received:t.parsedType}),o.INVALID
if(null!==r.minLength&&t.data.length<r.minLength.value&&(o.addIssueToContext(t,{code:s.ZodIssueCode.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,message:r.minLength.message}),n.dirty()),null!==r.maxLength&&t.data.length>r.maxLength.value&&(o.addIssueToContext(t,{code:s.ZodIssueCode.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all(t.data.map(((e,n)=>r.type._parseAsync(new l(t,e,t.path,n))))).then((e=>o.ParseStatus.mergeArray(n,e)))
const i=t.data.map(((e,n)=>r.type._parseSync(new l(t,e,t.path,n))))
return o.ParseStatus.mergeArray(n,i)}get element(){return this._def.type}min(e,t){return new S({...this._def,minLength:{value:e,message:i.errorUtil.toString(t)}})}max(e,t){return new S({...this._def,maxLength:{value:e,message:i.errorUtil.toString(t)}})}length(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}var D
t.ZodArray=S,S.create=(e,t)=>new S({type:e,minLength:null,maxLength:null,typeName:Q.ZodArray,...c(t)}),function(e){e.mergeShapes=(e,t)=>({...e,...t})}(D=t.objectUtil||(t.objectUtil={}))
const C=e=>t=>new j({...e,shape:()=>({...e.shape(),...t})})
function M(e){if(e instanceof j){const t={}
for(const n in e.shape){const r=e.shape[n]
t[n]=G.create(M(r))}return new j({...e._def,shape:()=>t})}return e instanceof S?S.create(M(e.element)):e instanceof G?G.create(M(e.unwrap())):e instanceof Y?Y.create(M(e.unwrap())):e instanceof P?P.create(e.items.map((e=>M(e)))):e}class j extends f{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=C(this._def),this.extend=C(this._def)}_getCached(){if(null!==this._cached)return this._cached
const e=this._def.shape(),t=a.util.objectKeys(e)
return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==a.ZodParsedType.object){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.object,received:t.parsedType}),o.INVALID}const{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),u=[]
if(!(this._def.catchall instanceof E&&"strip"===this._def.unknownKeys))for(const o in n.data)i.includes(o)||u.push(o)
const c=[]
for(const o of i){const e=r[o],t=n.data[o]
c.push({key:{status:"valid",value:o},value:e._parse(new l(n,t,n.path,o)),alwaysSet:o in n.data})}if(this._def.catchall instanceof E){const e=this._def.unknownKeys
if("passthrough"===e)for(const t of u)c.push({key:{status:"valid",value:t},value:{status:"valid",value:n.data[t]}})
else if("strict"===e)u.length>0&&(o.addIssueToContext(n,{code:s.ZodIssueCode.unrecognized_keys,keys:u}),t.dirty())
else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall
for(const t of u){const r=n.data[t]
c.push({key:{status:"valid",value:t},value:e._parse(new l(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then((async()=>{const e=[]
for(const t of c){const n=await t.key
e.push({key:n,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>o.ParseStatus.mergeObjectSync(t,e))):o.ParseStatus.mergeObjectSync(t,c)}get shape(){return this._def.shape()}strict(e){return i.errorUtil.errToObj,new j({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,n)=>{var r,o,a,s
const l=null!==(a=null===(o=(r=this._def).errorMap)||void 0===o?void 0:o.call(r,t,n).message)&&void 0!==a?a:n.defaultError
return"unrecognized_keys"===t.code?{message:null!==(s=i.errorUtil.errToObj(e).message)&&void 0!==s?s:l}:{message:l}}}:{}})}strip(){return new j({...this._def,unknownKeys:"strip"})}passthrough(){return new j({...this._def,unknownKeys:"passthrough"})}setKey(e,t){return this.augment({[e]:t})}merge(e){return new j({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>D.mergeShapes(this._def.shape(),e._def.shape()),typeName:Q.ZodObject})}catchall(e){return new j({...this._def,catchall:e})}pick(e){const t={}
return a.util.objectKeys(e).map((e=>{this.shape[e]&&(t[e]=this.shape[e])})),new j({...this._def,shape:()=>t})}omit(e){const t={}
return a.util.objectKeys(this.shape).map((n=>{-1===a.util.objectKeys(e).indexOf(n)&&(t[n]=this.shape[n])})),new j({...this._def,shape:()=>t})}deepPartial(){return M(this)}partial(e){const t={}
if(e)return a.util.objectKeys(this.shape).map((n=>{-1===a.util.objectKeys(e).indexOf(n)?t[n]=this.shape[n]:t[n]=this.shape[n].optional()})),new j({...this._def,shape:()=>t})
for(const n in this.shape){const e=this.shape[n]
t[n]=e.optional()}return new j({...this._def,shape:()=>t})}required(){const e={}
for(const t in this.shape){let n=this.shape[t]
for(;n instanceof G;)n=n._def.innerType
e[t]=n}return new j({...this._def,shape:()=>e})}keyof(){return q(a.util.objectKeys(this.shape))}}t.ZodObject=j,j.create=(e,t)=>new j({shape:()=>e,unknownKeys:"strip",catchall:E.create(),typeName:Q.ZodObject,...c(t)}),j.strictCreate=(e,t)=>new j({shape:()=>e,unknownKeys:"strict",catchall:E.create(),typeName:Q.ZodObject,...c(t)}),j.lazycreate=(e,t)=>new j({shape:e,unknownKeys:"strip",catchall:E.create(),typeName:Q.ZodObject,...c(t)})
class F extends f{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options
if(t.common.async)return Promise.all(n.map((async e=>{const n={...t,common:{...t.common,issues:[]},parent:null}
return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result
for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result
const n=e.map((e=>new s.ZodError(e.ctx.common.issues)))
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_union,unionErrors:n}),o.INVALID}))
{let e
const r=[]
for(const o of n){const n={...t,common:{...t.common,issues:[]},parent:null},i=o._parseSync({data:t.data,path:t.path,parent:n})
if("valid"===i.status)return i
"dirty"!==i.status||e||(e={result:i,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result
const i=r.map((e=>new s.ZodError(e)))
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_union,unionErrors:i}),o.INVALID}}get options(){return this._def.options}}t.ZodUnion=F,F.create=(e,t)=>new F({options:e,typeName:Q.ZodUnion,...c(t)})
class T extends f{_parse(e){const{ctx:t}=this._processInputParams(e)
if(t.parsedType!==a.ZodParsedType.object)return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.object,received:t.parsedType}),o.INVALID
const n=this.discriminator,r=t.data[n],i=this.options.get(r)
return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_union_discriminator,options:this.validDiscriminatorValues,path:[n]}),o.INVALID)}get discriminator(){return this._def.discriminator}get validDiscriminatorValues(){return Array.from(this.options.keys())}get options(){return this._def.options}static create(e,t,n){const r=new Map
try{t.forEach((t=>{const n=t.shape[e].value
r.set(n,t)}))}catch(e){throw new Error("The discriminator value could not be extracted from all the provided schemas")}if(r.size!==t.length)throw new Error("Some of the discriminator values are not unique")
return new T({typeName:Q.ZodDiscriminatedUnion,discriminator:e,options:r,...c(n)})}}function N(e,t){const n=a.getParsedType(e),r=a.getParsedType(t)
if(e===t)return{valid:!0,data:e}
if(n===a.ZodParsedType.object&&r===a.ZodParsedType.object){const n=a.util.objectKeys(t),r=a.util.objectKeys(e).filter((e=>-1!==n.indexOf(e))),i={...e,...t}
for(const o of r){const n=N(e[o],t[o])
if(!n.valid)return{valid:!1}
i[o]=n.data}return{valid:!0,data:i}}if(n===a.ZodParsedType.array&&r===a.ZodParsedType.array){if(e.length!==t.length)return{valid:!1}
const n=[]
for(let r=0;r<e.length;r++){const i=N(e[r],t[r])
if(!i.valid)return{valid:!1}
n.push(i.data)}return{valid:!0,data:n}}return n===a.ZodParsedType.date&&r===a.ZodParsedType.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}t.ZodDiscriminatedUnion=T
class $ extends f{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(o.isAborted(e)||o.isAborted(r))return o.INVALID
const i=N(e.value,r.value)
return i.valid?((o.isDirty(e)||o.isDirty(r))&&t.dirty(),{status:t.value,value:i.data}):(o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_intersection_types}),o.INVALID)}
return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((e=>{let[t,n]=e
return r(t,n)})):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}t.ZodIntersection=$,$.create=(e,t,n)=>new $({left:e,right:t,typeName:Q.ZodIntersection,...c(n)})
class P extends f{_parse(e){const{status:t,ctx:n}=this._processInputParams(e)
if(n.parsedType!==a.ZodParsedType.array)return o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.array,received:n.parsedType}),o.INVALID
if(n.data.length<this._def.items.length)return o.addIssueToContext(n,{code:s.ZodIssueCode.too_small,minimum:this._def.items.length,inclusive:!0,type:"array"}),o.INVALID
!this._def.rest&&n.data.length>this._def.items.length&&(o.addIssueToContext(n,{code:s.ZodIssueCode.too_big,maximum:this._def.items.length,inclusive:!0,type:"array"}),t.dirty())
const r=n.data.map(((e,t)=>{const r=this._def.items[t]||this._def.rest
return r?r._parse(new l(n,e,n.path,t)):null})).filter((e=>!!e))
return n.common.async?Promise.all(r).then((e=>o.ParseStatus.mergeArray(t,e))):o.ParseStatus.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new P({...this._def,rest:e})}}t.ZodTuple=P,P.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])")
return new P({items:e,typeName:Q.ZodTuple,rest:null,...c(t)})}
class z extends f{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e)
if(n.parsedType!==a.ZodParsedType.object)return o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.object,received:n.parsedType}),o.INVALID
const r=[],i=this._def.keyType,u=this._def.valueType
for(const o in n.data)r.push({key:i._parse(new l(n,o,n.path,o)),value:u._parse(new l(n,n.data[o],n.path,o))})
return n.common.async?o.ParseStatus.mergeObjectAsync(t,r):o.ParseStatus.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,n){return new z(t instanceof f?{keyType:e,valueType:t,typeName:Q.ZodRecord,...c(n)}:{keyType:g.create(),valueType:e,typeName:Q.ZodRecord,...c(t)})}}t.ZodRecord=z
class I extends f{_parse(e){const{status:t,ctx:n}=this._processInputParams(e)
if(n.parsedType!==a.ZodParsedType.map)return o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.map,received:n.parsedType}),o.INVALID
const r=this._def.keyType,i=this._def.valueType,u=[...n.data.entries()].map(((e,t)=>{let[o,a]=e
return{key:r._parse(new l(n,o,n.path,[t,"key"])),value:i._parse(new l(n,a,n.path,[t,"value"]))}}))
if(n.common.async){const e=new Map
return Promise.resolve().then((async()=>{for(const n of u){const r=await n.key,i=await n.value
if("aborted"===r.status||"aborted"===i.status)return o.INVALID
"dirty"!==r.status&&"dirty"!==i.status||t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}))}{const e=new Map
for(const n of u){const r=n.key,i=n.value
if("aborted"===r.status||"aborted"===i.status)return o.INVALID
"dirty"!==r.status&&"dirty"!==i.status||t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}}t.ZodMap=I,I.create=(e,t,n)=>new I({valueType:t,keyType:e,typeName:Q.ZodMap,...c(n)})
class R extends f{_parse(e){const{status:t,ctx:n}=this._processInputParams(e)
if(n.parsedType!==a.ZodParsedType.set)return o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.set,received:n.parsedType}),o.INVALID
const r=this._def
null!==r.minSize&&n.data.size<r.minSize.value&&(o.addIssueToContext(n,{code:s.ZodIssueCode.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,message:r.minSize.message}),t.dirty()),null!==r.maxSize&&n.data.size>r.maxSize.value&&(o.addIssueToContext(n,{code:s.ZodIssueCode.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,message:r.maxSize.message}),t.dirty())
const i=this._def.valueType
function u(e){const n=new Set
for(const r of e){if("aborted"===r.status)return o.INVALID
"dirty"===r.status&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}const c=[...n.data.values()].map(((e,t)=>i._parse(new l(n,e,n.path,t))))
return n.common.async?Promise.all(c).then((e=>u(e))):u(c)}min(e,t){return new R({...this._def,minSize:{value:e,message:i.errorUtil.toString(t)}})}max(e,t){return new R({...this._def,maxSize:{value:e,message:i.errorUtil.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}t.ZodSet=R,R.create=(e,t)=>new R({valueType:e,minSize:null,maxSize:null,typeName:Q.ZodSet,...c(t)})
class L extends f{constructor(){super(...arguments),this.validate=this.implement}_parse(e){var t=this
const{ctx:n}=this._processInputParams(e)
if(n.parsedType!==a.ZodParsedType.function)return o.addIssueToContext(n,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.function,received:n.parsedType}),o.INVALID
function i(e,t){return o.makeIssue({data:e,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,r.getErrorMap(),r.defaultErrorMap].filter((e=>!!e)),issueData:{code:s.ZodIssueCode.invalid_arguments,argumentsError:t}})}function l(e,t){return o.makeIssue({data:e,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,r.getErrorMap(),r.defaultErrorMap].filter((e=>!!e)),issueData:{code:s.ZodIssueCode.invalid_return_type,returnTypeError:t}})}const u={errorMap:n.common.contextualErrorMap},c=n.data
return this._def.returns instanceof V?o.OK((async function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
const o=new s.ZodError([]),a=await t._def.args.parseAsync(n,u).catch((e=>{throw o.addIssue(i(n,e)),o})),f=await c(...a),d=await t._def.returns._def.type.parseAsync(f,u).catch((e=>{throw o.addIssue(l(f,e)),o}))
return d})):o.OK((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
const o=t._def.args.safeParse(n,u)
if(!o.success)throw new s.ZodError([i(n,o.error)])
const a=c(...o.data),f=t._def.returns.safeParse(a,u)
if(!f.success)throw new s.ZodError([l(a,f.error)])
return f.data}))}parameters(){return this._def.args}returnType(){return this._def.returns}args(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return new L({...this._def,args:P.create(t).rest(k.create())})}returns(e){return new L({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new L({args:e||P.create([]).rest(k.create()),returns:t||k.create(),typeName:Q.ZodFunction,...c(n)})}}t.ZodFunction=L
class B extends f{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e)
return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}t.ZodLazy=B,B.create=(e,t)=>new B({getter:e,typeName:Q.ZodLazy,...c(t)})
class U extends f{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_literal,expected:this._def.value}),o.INVALID}return{status:"valid",value:e.data}}get value(){return this._def.value}}function q(e,t){return new Z({values:e,typeName:Q.ZodEnum,...c(t)})}t.ZodLiteral=U,U.create=(e,t)=>new U({value:e,typeName:Q.ZodLiteral,...c(t)})
class Z extends f{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),n=this._def.values
return o.addIssueToContext(t,{expected:a.util.joinValues(n),received:t.parsedType,code:s.ZodIssueCode.invalid_type}),o.INVALID}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values
return o.addIssueToContext(t,{received:t.data,code:s.ZodIssueCode.invalid_enum_value,options:n}),o.INVALID}return o.OK(e.data)}get options(){return this._def.values}get enum(){const e={}
for(const t of this._def.values)e[t]=t
return e}get Values(){const e={}
for(const t of this._def.values)e[t]=t
return e}get Enum(){const e={}
for(const t of this._def.values)e[t]=t
return e}}t.ZodEnum=Z,Z.create=q
class W extends f{_parse(e){const t=a.util.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e)
if(n.parsedType!==a.ZodParsedType.string&&n.parsedType!==a.ZodParsedType.number){const e=a.util.objectValues(t)
return o.addIssueToContext(n,{expected:a.util.joinValues(e),received:n.parsedType,code:s.ZodIssueCode.invalid_type}),o.INVALID}if(-1===t.indexOf(e.data)){const e=a.util.objectValues(t)
return o.addIssueToContext(n,{received:n.data,code:s.ZodIssueCode.invalid_enum_value,options:e}),o.INVALID}return o.OK(e.data)}get enum(){return this._def.values}}t.ZodNativeEnum=W,W.create=(e,t)=>new W({values:e,typeName:Q.ZodNativeEnum,...c(t)})
class V extends f{_parse(e){const{ctx:t}=this._processInputParams(e)
if(t.parsedType!==a.ZodParsedType.promise&&!1===t.common.async)return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.promise,received:t.parsedType}),o.INVALID
const n=t.parsedType===a.ZodParsedType.promise?t.data:Promise.resolve(t.data)
return o.OK(n.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}t.ZodPromise=V,V.create=(e,t)=>new V({type:e,typeName:Q.ZodPromise,...c(t)})
class H extends f{innerType(){return this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null
if("preprocess"===r.type){const e=r.transform(n.data)
return n.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:n.path,parent:n}))):this._def.schema._parseSync({data:e,path:n.path,parent:n})}const i={addIssue:e=>{o.addIssueToContext(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}}
if(i.addIssue=i.addIssue.bind(i),"refinement"===r.type){const e=e=>{const t=r.refinement(e,i)
if(n.common.async)return Promise.resolve(t)
if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.")
return e}
if(!1===n.common.async){const r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n})
return"aborted"===r.status?o.INVALID:("dirty"===r.status&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>"aborted"===n.status?o.INVALID:("dirty"===n.status&&t.dirty(),e(n.value).then((()=>({status:t.value,value:n.value}))))))}if("transform"===r.type){if(!1===n.common.async){const e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n})
if(!o.isValid(e))return e
const a=r.transform(e.value,i)
if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.")
return{status:t.value,value:a}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((e=>o.isValid(e)?Promise.resolve(r.transform(e.value,i)).then((e=>({status:t.value,value:e}))):e))}a.util.assertNever(r)}}t.ZodEffects=H,t.ZodTransformer=H,H.create=(e,t,n)=>new H({schema:e,typeName:Q.ZodEffects,effect:t,...c(n)}),H.createWithPreprocess=(e,t,n)=>new H({schema:t,effect:{type:"preprocess",transform:e},typeName:Q.ZodEffects,...c(n)})
class G extends f{_parse(e){return this._getType(e)===a.ZodParsedType.undefined?o.OK(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}t.ZodOptional=G,G.create=(e,t)=>new G({innerType:e,typeName:Q.ZodOptional,...c(t)})
class Y extends f{_parse(e){return this._getType(e)===a.ZodParsedType.null?o.OK(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}t.ZodNullable=Y,Y.create=(e,t)=>new Y({innerType:e,typeName:Q.ZodNullable,...c(t)})
class X extends f{_parse(e){const{ctx:t}=this._processInputParams(e)
let n=t.data
return t.parsedType===a.ZodParsedType.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}t.ZodDefault=X,X.create=(e,t)=>new G({innerType:e,typeName:Q.ZodOptional,...c(t)})
class J extends f{_parse(e){if(this._getType(e)!==a.ZodParsedType.nan){const t=this._getOrReturnCtx(e)
return o.addIssueToContext(t,{code:s.ZodIssueCode.invalid_type,expected:a.ZodParsedType.nan,received:t.parsedType}),o.INVALID}return{status:"valid",value:e.data}}}t.ZodNaN=J,J.create=e=>new J({typeName:Q.ZodNaN,...c(e)}),t.BRAND=Symbol("zod_brand")
class K extends f{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data
return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}var Q
t.ZodBranded=K,t.custom=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
return e?O.create().superRefine(((r,i)=>{if(!e(r)){const e="function"==typeof t?t(r):t,o="string"==typeof e?{message:e}:e
i.addIssue({code:"custom",...o,fatal:n})}})):O.create()},t.late={object:j.lazycreate},function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded"}(Q=t.ZodFirstPartyTypeKind||(t.ZodFirstPartyTypeKind={})),t.instanceof=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{message:`Input not instance of ${e.name}`}
return t.custom((t=>t instanceof e),n,!0)}
const ee=g.create
t.string=ee
const te=y.create
t.number=te
const ne=J.create
t.nan=ne
const re=v.create
t.bigint=re
const ie=b.create
t.boolean=ie
const oe=x.create
t.date=oe
const ae=_.create
t.undefined=ae
const se=w.create
t.null=se
const le=O.create
t.any=le
const ue=k.create
t.unknown=ue
const ce=E.create
t.never=ce
const fe=A.create
t.void=fe
const de=S.create
t.array=de
const he=j.create
t.object=he
const pe=j.strictCreate
t.strictObject=pe
const ge=F.create
t.union=ge
const me=T.create
t.discriminatedUnion=me
const ye=$.create
t.intersection=ye
const ve=P.create
t.tuple=ve
const be=z.create
t.record=be
const xe=I.create
t.map=xe
const _e=R.create
t.set=_e
const we=L.create
t.function=we
const Oe=B.create
t.lazy=Oe
const ke=U.create
t.literal=ke
const Ee=Z.create
t.enum=Ee
const Ae=W.create
t.nativeEnum=Ae
const Se=V.create
t.promise=Se
const De=H.create
t.effect=De,t.transformer=De
const Ce=G.create
t.optional=Ce
const Me=Y.create
t.nullable=Me
const je=H.createWithPreprocess
t.preprocess=je,t.ostring=()=>ee().optional(),t.onumber=()=>te().optional(),t.oboolean=()=>ie().optional(),t.NEVER=o.INVALID},215:e=>{"use strict"
var t=/("(?:[^\\"]|\\.)*")|[:,]/g
e.exports=function(e,n){var r,i,o
return n=n||{},r=JSON.stringify([1],void 0,void 0===n.indent?2:n.indent).slice(2,-3),i=""===r?1/0:void 0===n.maxLength?80:n.maxLength,o=n.replacer,function e(n,a,s){var l,u,c,f,d,h,p,g,m,y,v,b
if(n&&"function"==typeof n.toJSON&&(n=n.toJSON()),void 0===(v=JSON.stringify(n,o)))return v
if(p=i-a.length-s,v.length<=p&&(m=v.replace(t,(function(e,t){return t||e+" "}))).length<=p)return m
if(null!=o&&(n=JSON.parse(v),o=void 0),"object"==typeof n&&null!==n){if(g=a+r,c=[],u=0,Array.isArray(n))for(y="[",l="]",p=n.length;u<p;u++)c.push(e(n[u],g,u===p-1?0:1)||"null")
else for(y="{",l="}",p=(h=Object.keys(n)).length;u<p;u++)f=h[u],d=JSON.stringify(f)+": ",void 0!==(b=e(n[f],g,d.length+(u===p-1?0:1)))&&c.push(d+b)
if(c.length>0)return[y,r+c.join(",\n"+g),l].join("\n"+a)}return v}(e,"",0)}}}])
