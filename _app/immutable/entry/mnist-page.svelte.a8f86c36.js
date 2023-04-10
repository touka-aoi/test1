import{S as rw,i as iw,s as aw,k as Te,r as Qs,a as is,l as Ee,m as Re,u as to,h as Qt,c as as,p as ae,b as zo,D as Mt,M as kr,v as iu,n as Wp,K as lw,N as cw,o as uw,x as Up}from"../chunks/index.ca74cb1e.js";function hw(n,t){for(var e=0;e<t.length;e++){const s=t[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(n,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}const dw=1e-7,pw=1e-4;class Rm{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Xu{refCount(t){return je("refCount")}incRef(t){return je("incRef")}timerAvailable(){return!0}time(t){return je("time")}read(t){return je("read")}readSync(t){return je("readSync")}readToGPU(t,e){return je("readToGPU")}numDataIds(){return je("numDataIds")}disposeData(t,e){return je("disposeData")}write(t,e,s){return je("write")}move(t,e,s,o,r){return je("move")}createTensorFromTexture(t,e,s){return je("createTensorFromTexture")}memory(){return je("memory")}floatPrecision(){return je("floatPrecision")}epsilon(){return this.floatPrecision()===32?dw:pw}dispose(){return je("dispose")}}function je(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function fw(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Bo(n,t,e)}function ho(n,t,e){return Math.max(n,Math.min(t,e))}function Yu(n){return n%2===0?n:n+1}function Bo(n,t,e){const s=n[t];n[t]=n[e],n[e]=s}function mw(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function I(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function vn(n,t,e=""){I(Rt(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function Zu(n){I(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Yo(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||es(n)&&!e)for(let s=0;s<n.length;++s)Yo(n[s],t,e);else t.push(n);return t}function H(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function Rt(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Zo(n){return n%1===0}function au(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Ho(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Gp(n,t=o=>0,e,s){return new Promise((o,r)=>{let i=0;const a=()=>{if(n()){o();return}i++;const l=t(i);if(e!=null&&i>=e){r();return}s!=null?s(a,l):setTimeout(a,l)};a()})}function Dm(n,t){let e=1,s=-1;for(let r=0;r<n.length;++r)if(n[r]>=0)e*=n[r];else if(n[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(n[r]<0)throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);if(s===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(e===0)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[s]=t/e,o}function Ct(n,t){const e=t.length;return n=n==null?t.map((s,o)=>o):[].concat(n),I(n.every(s=>s>=-e&&s<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),I(n.every(s=>Zo(s)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(s=>s<0?e+s:s)}function Ls(n,t){const e=[],s=[],o=t!=null&&Array.isArray(t)&&t.length===0,r=t==null||o?null:Ct(t,n).sort();let i=0;for(let a=0;a<n.length;++a){if(r!=null){if(r[i]===a&&n[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);(r[i]==null||r[i]>a)&&n[a]===1&&(e.push(n[a]),s.push(a)),r[i]<=a&&i++}n[a]!==1&&(e.push(n[a]),s.push(a))}return{newShape:e,keptDims:s}}function ve(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function le(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function gw(n,t){for(let e=0;e<n.length;e++){const s=n[e];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function xw(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Am(n,t){return!(t==="complex64"||t==="float32"&&n!=="complex64"||t==="int32"&&n!=="float32"&&n!=="complex64"||t==="bool"&&n==="bool")}function es(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function lu(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function bw(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Xr(n){return typeof n=="string"||n instanceof String}function yw(n){return typeof n=="boolean"}function cu(n){return typeof n=="number"}function Yr(n){return Array.isArray(n)?Yr(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":cu(n)?"float32":Xr(n)?"string":yw(n)?"bool":"float32"}function uu(n){return!!(n&&n.constructor&&n.call&&n.apply)}function hu(n,t){for(let e=t;e<n;++e)if(n%e===0)return e;return n}function pt(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let s=t-3;s>=0;--s)e[s]=e[s+1]*n[s+1];return e}function Fm(n,t,e,s=!1){const o=new Array;if(t.length===1){const r=t[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=e[n+i]}else{const r=t[0],i=t.slice(1),a=i.reduce((l,c)=>l*c)*(s?2:1);for(let l=0;l<r;l++)o[l]=Fm(n+l*a,i,e,s)}return o}function _n(n,t,e=!1){if(n.length===0)return t[0];const s=n.reduce((o,r)=>o*r)*(e?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Fm(0,n,t,e)}function Ju(n,t){const e=Fe(n,t);for(let s=0;s<e.length;s++)e[s]=1;return e}function Fe(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function _m(n,t){const e=n.reduce((s,o)=>s*o,1);if(t==null||t==="float32")return _n(n,new Float32Array(e));if(t==="int32")return _n(n,new Int32Array(e));if(t==="bool")return _n(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function ds(n){n.forEach(t=>{I(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function Xn(n,t,e){if(t===0)return 0;if(t===1)return n[0];let s=n[n.length-1];for(let o=0;o<n.length-1;++o)s+=e[o]*n[o];return s}function cr(n,t,e){if(t===0)return[];if(t===1)return[n];const s=new Array(t);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(n/e[o]),n-=s[o]*e[o];return s[s.length-1]=n,s}function Om(n){return n&&n.then&&typeof n.then=="function"}const Hp="tfjsflags";class ww{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=$w,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,s){if(this.flagRegistry[t]={evaluationFn:e,setHook:s},this.urlFlags[t]!=null){const o=this.urlFlags[t];V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(Om(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Hp in t&&t[Hp].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=Iw(o,r)})}}function $w(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...s)=>(Cw(t,s[0],s[1]),s.join("="))),t}function Cw(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Iw(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function V(){return Lm}let Lm=null;function vw(n){Lm=n}let Uc;function Mm(){if(Uc==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Uc=n}return Uc}function kw(){const n=Mm();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Qu(n,t){const e=kw();if(e.has(n))return e.get(n);{const s=t();return e.set(n,s),e.get(n)}}const hl="Abs",Zr="Acos",Jr="Acosh",ur="Add",th="AddN",eh="All",nh="Any",dl="ArgMax",pl="ArgMin",Qr="Asin",ti="Asinh",ei="Atan",ni="Atanh",si="Atan2",fl="AvgPool",sh="AvgPoolGrad",ml="AvgPool3D",oh="AvgPool3DGrad",gl="BatchMatMul",xl="BatchToSpaceND",rh="Bincount",Sw="BroadcastTo",Pm="BroadcastArgs",oi="Cast",ri="Ceil",ii="ClipByValue",ih="Complex",bl="ComplexAbs",yl="Concat",wl="Conv2D",ah="Conv2DBackpropFilter",$l="Conv2DBackpropInput",Cl="Conv3D",lh="Conv3DBackpropFilterV2",ch="Conv3DBackpropInputV2",ai="Cos",li="Cosh",uh="Cumprod",Il="Cumsum",hh="CropAndResize",dh="DenseBincount",ph="DepthToSpace",vl="DepthwiseConv2dNative",fh="DepthwiseConv2dNativeBackpropFilter",mh="DepthwiseConv2dNativeBackpropInput",zm="Diag",kl="Dilation2D",du="Dilation2DBackpropInput",pu="Dilation2DBackpropFilter",ci="RealDiv",Bm="Einsum",ui="Elu",gh="EluGrad",hi="Erf",Sl="Equal",di="Exp",Nl="ExpandDims",pi="Expm1",xh="FFT",bh="Fill",yh="FlipLeftRight",fi="Floor",mi="FloorDiv",Tl="FusedBatchNorm",El="GatherV2",Vm="GatherNd",Rl="Greater",gi="GreaterEqual",xi="Identity",wh="IFFT",$h="Imag",bi="IsFinite",yi="IsInf",wi="IsNan",Dl="LeakyRelu",Al="Less",Fl="LessEqual",Wm="LinSpace",$i="Log",Ci="Log1p",_l="LogicalAnd",Ol="LogicalNot",Ll="LogicalOr",Nw="LogSoftmax",Ml="LRN",Ch="LRNGrad",Pl="Max",Ii="Maximum",zl="MaxPool",Ih="MaxPoolGrad",Bl="MaxPool3D",vh="MaxPool3DGrad",Um="MaxPoolWithArgmax",Vl="Mean",Wl="Min",vi="Minimum",Ul="MirrorPad",ki="Mod",Gm="Multinomial",Si="Multiply",Gl="Neg",Hl="NotEqual",kh="NonMaxSuppressionV3",Sh="NonMaxSuppressionV4",Nh="NonMaxSuppressionV5",ql="OnesLike",jl="OneHot",Kl="Pack",Xl="PadV2",Ni="Pow",Yl="Prelu",Zl="Prod",Hm="RaggedGather",qm="RaggedRange",jm="RaggedTensorToTensor",Th="Range",Eh="Real",Ti="Reciprocal",Ei="Relu",Jl="Reshape",Ql="ResizeNearestNeighbor",Rh="ResizeNearestNeighborGrad",tc="ResizeBilinear",Dh="ResizeBilinearGrad",Ri="Relu6",ec="Reverse",Di="Round",Ai="Rsqrt",Km="ScatterNd",Xm="SearchSorted",nc="Select",Fi="Selu",sc="Slice",_i="Sin",Oi="Sinh",Li="Sign",Mi="Sigmoid",Pi="Softplus",zi="Sqrt",oc="Sum",rc="SpaceToBatchND",ic="SplitV",ac="Softmax",Ah="SparseFillEmptyRows",Fh="SparseReshape",_h="SparseSegmentMean",Oh="SparseSegmentSum",Ym="SparseToDense",Bi="SquaredDifference",Lh="Square",Mh="StridedSlice",Ph="StringNGrams",zh="StringSplit",Bh="StringToHashBucketFast",Vi="Sub",Wi="Tan",Ui="Tanh",Gi="Tile",Vh="TopK",Wh="Transform",qo="Transpose",Uh="Unique",lc="Unpack",cc="UnsortedSegmentSum",uc="ZerosLike",Hi="Step",fu="FromPixels",Gh="RotateWithOffset",La="_FusedMatMul",Ma="FusedConv2D",Zm="FusedDepthwiseConv2D";function on(...n){V().getBool("IS_TEST")||V().getBool("PROD")||console.warn(...n)}function Tw(...n){V().getBool("IS_TEST")||V().getBool("PROD")||console.log(...n)}const Pa=Qu("kernelRegistry",()=>new Map),mu=Qu("gradRegistry",()=>new Map);function gu(n,t){const e=Qm(n,t);return Pa.get(e)}function qp(n){return mu.get(n)}function jp(n){const t=Pa.entries(),e=[];for(;;){const{done:s,value:o}=t.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===n&&e.push(i)}return e}function Jm(n){const{kernelName:t,backendName:e}=n,s=Qm(t,e);Pa.has(s)&&on(`The kernel '${t}' for backend '${e}' is already registered`),Pa.set(s,n)}function Ew(n){const{kernelName:t}=n;mu.has(t)&&V().getBool("DEBUG")&&on(`Overriding the gradient for '${t}'`),mu.set(t,n)}function Qm(n,t){return`${t}_${n}`}var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rw(n){var t=n.default;if(typeof t=="function"){var e=function s(){if(this instanceof s){var o=[null];o.push.apply(o,arguments);var r=Function.bind.apply(t,o);return new r}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),e}var xu=Gt,gn=null;try{gn=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Gt(n,t,e){this.low=n|0,this.high=t|0,this.unsigned=!!e}Gt.prototype.__isLong__;Object.defineProperty(Gt.prototype,"__isLong__",{value:!0});function nn(n){return(n&&n.__isLong__)===!0}Gt.isLong=nn;var Kp={},Xp={};function No(n,t){var e,s,o;return t?(n>>>=0,(o=0<=n&&n<256)&&(s=Xp[n],s)?s:(e=Ht(n,(n|0)<0?-1:0,!0),o&&(Xp[n]=e),e)):(n|=0,(o=-128<=n&&n<128)&&(s=Kp[n],s)?s:(e=Ht(n,n<0?-1:0,!1),o&&(Kp[n]=e),e))}Gt.fromInt=No;function xn(n,t){if(isNaN(n))return t?oo:bn;if(t){if(n<0)return oo;if(n>=tg)return sg}else{if(n<=-Zp)return Ye;if(n+1>=Zp)return ng}return n<0?xn(-n,t).neg():Ht(n%Jo|0,n/Jo|0,t)}Gt.fromNumber=xn;function Ht(n,t,e){return new Gt(n,t,e)}Gt.fromBits=Ht;var za=Math.pow;function Hh(n,t,e){if(n.length===0)throw Error("empty string");if(n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return bn;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var s;if((s=n.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return Hh(n.substring(1),t,e).neg();for(var o=xn(za(e,8)),r=bn,i=0;i<n.length;i+=8){var a=Math.min(8,n.length-i),l=parseInt(n.substring(i,i+a),e);if(a<8){var c=xn(za(e,a));r=r.mul(c).add(xn(l))}else r=r.mul(o),r=r.add(xn(l))}return r.unsigned=t,r}Gt.fromString=Hh;function Bn(n,t){return typeof n=="number"?xn(n,t):typeof n=="string"?Hh(n,t):Ht(n.low,n.high,typeof t=="boolean"?t:n.unsigned)}Gt.fromValue=Bn;var Yp=1<<16,Dw=1<<24,Jo=Yp*Yp,tg=Jo*Jo,Zp=tg/2,Jp=No(Dw),bn=No(0);Gt.ZERO=bn;var oo=No(0,!0);Gt.UZERO=oo;var Uo=No(1);Gt.ONE=Uo;var eg=No(1,!0);Gt.UONE=eg;var bu=No(-1);Gt.NEG_ONE=bu;var ng=Ht(-1,2147483647,!1);Gt.MAX_VALUE=ng;var sg=Ht(-1,-1,!0);Gt.MAX_UNSIGNED_VALUE=sg;var Ye=Ht(0,-2147483648,!1);Gt.MIN_VALUE=Ye;var et=Gt.prototype;et.toInt=function(){return this.unsigned?this.low>>>0:this.low};et.toNumber=function(){return this.unsigned?(this.high>>>0)*Jo+(this.low>>>0):this.high*Jo+(this.low>>>0)};et.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Ye)){var e=xn(t),s=this.div(e),o=s.mul(e).sub(this);return s.toString(t)+o.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var r=xn(za(t,6),this.unsigned),i=this,a="";;){var l=i.div(r),c=i.sub(l.mul(r)).toInt()>>>0,u=c.toString(t);if(i=l,i.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}};et.getHighBits=function(){return this.high};et.getHighBitsUnsigned=function(){return this.high>>>0};et.getLowBits=function(){return this.low};et.getLowBitsUnsigned=function(){return this.low>>>0};et.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Ye)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&!(t&1<<e);e--);return this.high!=0?e+33:e+1};et.isZero=function(){return this.high===0&&this.low===0};et.eqz=et.isZero;et.isNegative=function(){return!this.unsigned&&this.high<0};et.isPositive=function(){return this.unsigned||this.high>=0};et.isOdd=function(){return(this.low&1)===1};et.isEven=function(){return(this.low&1)===0};et.equals=function(t){return nn(t)||(t=Bn(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};et.eq=et.equals;et.notEquals=function(t){return!this.eq(t)};et.neq=et.notEquals;et.ne=et.notEquals;et.lessThan=function(t){return this.comp(t)<0};et.lt=et.lessThan;et.lessThanOrEqual=function(t){return this.comp(t)<=0};et.lte=et.lessThanOrEqual;et.le=et.lessThanOrEqual;et.greaterThan=function(t){return this.comp(t)>0};et.gt=et.greaterThan;et.greaterThanOrEqual=function(t){return this.comp(t)>=0};et.gte=et.greaterThanOrEqual;et.ge=et.greaterThanOrEqual;et.compare=function(t){if(nn(t)||(t=Bn(t)),this.eq(t))return 0;var e=this.isNegative(),s=t.isNegative();return e&&!s?-1:!e&&s?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};et.comp=et.compare;et.negate=function(){return!this.unsigned&&this.eq(Ye)?Ye:this.not().add(Uo)};et.neg=et.negate;et.add=function(t){nn(t)||(t=Bn(t));var e=this.high>>>16,s=this.high&65535,o=this.low>>>16,r=this.low&65535,i=t.high>>>16,a=t.high&65535,l=t.low>>>16,c=t.low&65535,u=0,h=0,d=0,p=0;return p+=r+c,d+=p>>>16,p&=65535,d+=o+l,h+=d>>>16,d&=65535,h+=s+a,u+=h>>>16,h&=65535,u+=e+i,u&=65535,Ht(d<<16|p,u<<16|h,this.unsigned)};et.subtract=function(t){return nn(t)||(t=Bn(t)),this.add(t.neg())};et.sub=et.subtract;et.multiply=function(t){if(this.isZero())return bn;if(nn(t)||(t=Bn(t)),gn){var e=gn.mul(this.low,this.high,t.low,t.high);return Ht(e,gn.get_high(),this.unsigned)}if(t.isZero())return bn;if(this.eq(Ye))return t.isOdd()?Ye:bn;if(t.eq(Ye))return this.isOdd()?Ye:bn;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Jp)&&t.lt(Jp))return xn(this.toNumber()*t.toNumber(),this.unsigned);var s=this.high>>>16,o=this.high&65535,r=this.low>>>16,i=this.low&65535,a=t.high>>>16,l=t.high&65535,c=t.low>>>16,u=t.low&65535,h=0,d=0,p=0,f=0;return f+=i*u,p+=f>>>16,f&=65535,p+=r*u,d+=p>>>16,p&=65535,p+=i*c,d+=p>>>16,p&=65535,d+=o*u,h+=d>>>16,d&=65535,d+=r*c,h+=d>>>16,d&=65535,d+=i*l,h+=d>>>16,d&=65535,h+=s*u+o*c+r*l+i*a,h&=65535,Ht(p<<16|f,h<<16|d,this.unsigned)};et.mul=et.multiply;et.divide=function(t){if(nn(t)||(t=Bn(t)),t.isZero())throw Error("division by zero");if(gn){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?gn.div_u:gn.div_s)(this.low,this.high,t.low,t.high);return Ht(e,gn.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?oo:bn;var s,o,r;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return oo;if(t.gt(this.shru(1)))return eg;r=oo}else{if(this.eq(Ye)){if(t.eq(Uo)||t.eq(bu))return Ye;if(t.eq(Ye))return Uo;var i=this.shr(1);return s=i.div(t).shl(1),s.eq(bn)?t.isNegative()?Uo:bu:(o=this.sub(t.mul(s)),r=s.add(o.div(t)),r)}else if(t.eq(Ye))return this.unsigned?oo:bn;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();r=bn}for(o=this;o.gte(t);){s=Math.max(1,Math.floor(o.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(s)/Math.LN2),l=a<=48?1:za(2,a-48),c=xn(s),u=c.mul(t);u.isNegative()||u.gt(o);)s-=l,c=xn(s,this.unsigned),u=c.mul(t);c.isZero()&&(c=Uo),r=r.add(c),o=o.sub(u)}return r};et.div=et.divide;et.modulo=function(t){if(nn(t)||(t=Bn(t)),gn){var e=(this.unsigned?gn.rem_u:gn.rem_s)(this.low,this.high,t.low,t.high);return Ht(e,gn.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};et.mod=et.modulo;et.rem=et.modulo;et.not=function(){return Ht(~this.low,~this.high,this.unsigned)};et.and=function(t){return nn(t)||(t=Bn(t)),Ht(this.low&t.low,this.high&t.high,this.unsigned)};et.or=function(t){return nn(t)||(t=Bn(t)),Ht(this.low|t.low,this.high|t.high,this.unsigned)};et.xor=function(t){return nn(t)||(t=Bn(t)),Ht(this.low^t.low,this.high^t.high,this.unsigned)};et.shiftLeft=function(t){return nn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ht(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Ht(0,this.low<<t-32,this.unsigned)};et.shl=et.shiftLeft;et.shiftRight=function(t){return nn(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ht(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Ht(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};et.shr=et.shiftRight;et.shiftRightUnsigned=function(t){if(nn(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var s=this.low;return Ht(s>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?Ht(e,0,this.unsigned):Ht(e>>>t-32,0,this.unsigned)};et.shru=et.shiftRightUnsigned;et.shr_u=et.shiftRightUnsigned;et.toSigned=function(){return this.unsigned?Ht(this.low,this.high,!1):this};et.toUnsigned=function(){return this.unsigned?this:Ht(this.low,this.high,!0)};et.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};et.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};et.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};Gt.fromBytes=function(t,e,s){return s?Gt.fromBytesLE(t,e):Gt.fromBytesBE(t,e)};Gt.fromBytesLE=function(t,e){return new Gt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};Gt.fromBytesBE=function(t,e){return new Gt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};const Aw=hw({__proto__:null,default:xu},[xu]);const eo=xu||Aw;function hc(n){return eo.fromString(n,!0,16)}const og=hc("c3a5c85c97cb3127"),Js=hc("b492b66fbe98f273"),Oe=hc("9ae16a3b2f90404f");function yu(n){return n.xor(n.shru(47))}function rg(n,t,e){const s=n.slice(t,t+e);return eo.fromBytes(Array.from(s),!0,!0)}function Pt(n,t){return rg(n,t,8)}function Qp(n,t){return rg(n,t,4)}function xe(n,t){return t===0?n:n.shru(t).or(n.shl(64-t))}function ks(n,t,e=hc("9ddfea08eb382d69")){let s=n.xor(t).mul(e);s=s.xor(s.shru(47));let o=t.xor(s).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function Fw(n,t,e,s,o,r){o=o.add(n),r=xe(r.add(o).add(s),21);const i=o;return o=o.add(t),o=o.add(e),r=r.add(xe(o,44)),[o.add(s),r.add(i)]}function wa(n,t,e,s){return Fw(Pt(n,t),Pt(n,t+8),Pt(n,t+16),Pt(n,t+24),e,s)}function _w(n,t=n.length){if(t>=8){const e=Oe.add(t*2),s=Pt(n,0).add(Oe),o=Pt(n,t-8),r=xe(o,37).mul(e).add(s),i=xe(s,25).add(o).mul(e);return ks(r,i,e)}if(t>=4){const e=Oe.add(t*2),s=Qp(n,0);return ks(s.shl(3).add(t),Qp(n,t-4),e)}if(t>0){const e=n[0],s=n[t>>1],o=n[t-1],r=e+(s<<8),i=t+(o<<2);return yu(Oe.mul(r).xor(og.mul(i))).mul(Oe)}return Oe}function Ow(n,t=n.length){const e=Oe.add(t*2),s=Pt(n,0).mul(Js),o=Pt(n,8),r=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Oe);return ks(xe(s.add(o),43).add(xe(r,30)).add(i),s.add(xe(o.add(Oe),18)).add(r),e)}function Lw(n,t=n.length){const e=Oe.add(t*2),s=Pt(n,0).mul(Oe),o=Pt(n,8),r=Pt(n,t-8).mul(e),i=Pt(n,t-16).mul(Oe),a=xe(s.add(o),43).add(xe(r,30)).add(i),l=ks(a,s.add(xe(o.add(Oe),18)).add(r),e),c=Pt(n,16).mul(e),u=Pt(n,24),h=a.add(Pt(n,t-32)).mul(e),d=l.add(Pt(n,t-24)).mul(e);return ks(xe(c.add(u),43).add(xe(h,30)).add(d),c.add(xe(u.add(s),18)).add(h),e)}function Mw(n,t=n.length){const e=eo.fromNumber(81,!0);if(t<=32)return t<=16?_w(n,t):Ow(n,t);if(t<=64)return Lw(n,t);let s=e,o=e.mul(Js).add(113),r=yu(o.mul(Oe).add(113)).mul(Oe),i=[eo.UZERO,eo.UZERO],a=[eo.UZERO,eo.UZERO];s=s.mul(Oe).add(Pt(n,0));let l=0;const c=(t-1>>6)*64,u=c+(t-1&63)-63;do s=xe(s.add(o).add(i[0]).add(Pt(n,l+8)),37).mul(Js),o=xe(o.add(i[1]).add(Pt(n,l+48)),42).mul(Js),s=s.xor(a[1]),o=o.add(i[0]).add(Pt(n,l+40)),r=xe(r.add(a[0]),33).mul(Js),i=wa(n,l,i[1].mul(Js),s.add(a[0])),a=wa(n,l+32,r.add(a[1]),o.add(Pt(n,l+16))),[r,s]=[s,r],l+=64;while(l!==c);const h=Js.add(r.and(255).shl(1));return l=u,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=xe(s.add(o).add(i[0]).add(Pt(n,l+8)),37).mul(h),o=xe(o.add(i[1]).add(Pt(n,l+48)),42).mul(h),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(Pt(n,l+40))),r=xe(r.add(a[0]),33).mul(h),i=wa(n,l,i[1].mul(h),s.add(a[0])),a=wa(n,l+32,r.add(a[1]),o.add(Pt(n,l+16))),[r,s]=[s,r],ks(ks(i[0],a[0],h).add(yu(o).mul(og)).add(r),ks(i[1],a[1],h).add(s),h)}function Ms(n,t){return t==="string"?Ss(n):To([n],t)}function Pw(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function To(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Yo(n)),V().getBool("DEBUG")&&gw(n,t),Pw(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let s=0;s<e.length;++s)Math.round(n[s])!==0&&(e[s]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Ve(){return V().platform.now()}function Ss(n,t="utf-8"){return t=t||"utf-8",V().platform.encode(n,t)}function Es(n,t="utf-8"){return t=t||"utf-8",V().platform.decode(n,t)}class zw{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Vw)}profileKernel(t,e,s){let o;const r=()=>{o=s()};let i;const a=Ve();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const c of o)c.dataSync();i=Promise.resolve({kernelMs:Ve()-a})}if(V().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){const u=o[c];u.data().then(h=>{Bw(h,u.dtype,t)})}return{kernelName:t,outputs:o,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:s,timeMs:o,inputs:r,extraInfo:i}=t;s.forEach(a=>{Promise.all([a.data(),o,i]).then(l=>{this.logger.logKernelProfile(e,a,l[0],l[1],r,l[2])})})}}function Bw(n,t,e){if(t!=="float32")return!1;for(let s=0;s<n.length;s++){const o=n[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${e}'`),!0}return!1}class Vw{logKernelProfile(t,e,s,o,r,i){const a=typeof o=="number"?Ho(`${o}ms`,9):o.error,l=Ho(t,25),c=e.rank,u=e.size,h=Ho(e.shape.toString(),14);let d="";for(const p in r){const f=r[p];if(f!=null){const m=f.shape||e.shape,g=m.length;d+=`${p}: ${g}D ${g>0?m:""} `}}console.log(`%c${l}	%c${a}	%c${c}D ${h}	%c${u}	%c${d}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function Ww(n,t,e){const s={},o={};for(let l=0;l<t.length;l++)s[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],u=c.inputs;for(const h in u){const d=u[h];let p=!1;for(let f=0;f<t.length;f++)if(s[d.id]){c.outputs.forEach(m=>s[m.id]=!0),p=!0,o[c.id]=!0;break}if(p)break}}const r={};r[e.id]=!0;const i={};for(let l=n.length-1;l>=0;l--){const c=n[l],u=c.inputs;for(let h=0;h<c.outputs.length;h++)if(r[c.outputs[h].id]){for(const d in u)r[u[d].id]=!0,i[c.id]=!0;break}}const a=[];for(let l=0;l<n.length;l++){const c=n[l];if(o[c.id]&&i[c.id]){const u={};for(const d in c.inputs){const p=c.inputs[d];s[p.id]&&(u[d]=p)}const h=Object.assign({},c);h.inputs=u,h.outputs=c.outputs,a.push(h)}}return a}function Uw(n,t,e,s){for(let o=t.length-1;o>=0;o--){const r=t[o],i=[];if(r.outputs.forEach(l=>{const c=n[l.id];c!=null?i.push(c):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const l in r.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);const c=e(()=>a[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const u=r.inputs[l];if(!Rt(c.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);if(n[u.id]==null)n[u.id]=c;else{const h=n[u.id];n[u.id]=s(h,c),h.dispose()}}}}const tf=20,Sr=3,Gc=7;function Gw(n,t,e,s){const o=pt(t),r=Hw(n,t,e,o),i=t.length,a=Fa(n,t,e,o,r),l=["Tensor"];return s&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(a.map(c=>"    "+c).join(`
`)),l.join(`
`)}function Hw(n,t,e,s){const o=H(t),r=s[s.length-1],i=new Array(r).fill(0),a=t.length,l=e==="complex64"?Rr(n):n;if(a>1)for(let c=0;c<o/r;c++){const u=c*r;for(let h=0;h<r;h++)i[h]=Math.max(i[h],Er(l[u+h],0,e).length)}return i}function Er(n,t,e){let s;return Array.isArray(n)?s=`${parseFloat(n[0].toFixed(Gc))} + ${parseFloat(n[1].toFixed(Gc))}j`:Xr(n)?s=`'${n}'`:e==="bool"?s=ig(n):s=parseFloat(n.toFixed(Gc)).toString(),Ho(s,t)}function ig(n){return n===0?"false":"true"}function Fa(n,t,e,s,o,r=!0){const i=e==="complex64"?2:1,a=t[0],l=t.length;if(l===0){if(e==="complex64"){const m=Rr(n);return[Er(m[0],0,e)]}return e==="bool"?[ig(n[0])]:[n[0].toString()]}if(l===1){if(a>tf){const g=Sr*i;let x=Array.from(n.slice(0,g)),b=Array.from(n.slice((a-Sr)*i,a*i));return e==="complex64"&&(x=Rr(x),b=Rr(b)),["["+x.map((w,y)=>Er(w,o[y],e)).join(", ")+", ..., "+b.map((w,y)=>Er(w,o[a-Sr+y],e)).join(", ")+"]"]}return["["+(e==="complex64"?Rr(n):Array.from(n)).map((g,x)=>Er(g,o[x],e)).join(", ")+"]"]}const c=t.slice(1),u=s.slice(1),h=s[0]*i,d=[];if(a>tf){for(let m=0;m<Sr;m++){const g=m*h,x=g+h;d.push(...Fa(n.slice(g,x),c,e,u,o,!1))}d.push("...");for(let m=a-Sr;m<a;m++){const g=m*h,x=g+h;d.push(...Fa(n.slice(g,x),c,e,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*h,x=g+h;d.push(...Fa(n.slice(g,x),c,e,u,o,m===a-1))}const p=l===2?",":"";d[0]="["+d[0]+p;for(let m=1;m<d.length-1;m++)d[m]=" "+d[m]+p;let f=`,
`;for(let m=2;m<l;m++)f+=`
`;return d[d.length-1]=" "+d[d.length-1]+"]"+(r?"":f),d}function Rr(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}class De{constructor(t,e,s){if(this.dtype=e,this.shape=t.slice(),this.size=H(t),s!=null){const o=s.length;I(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||le(e,this.size),this.strides=pt(t)}set(t,...e){e.length===0&&(e=[0]),I(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const s=this.locToIndex(e);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const o of t){if(o<0||o>=this.shape[e]){const r=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(r)}e++}let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=this.strides[o]*t[o];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let s=0;s<t.length-1;++s)e+=this.strides[s]*t[s];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let s=0;s<e.length-1;++s)e[s]=Math.floor(t/this.strides[s]),t-=e[s]*this.strides[s];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Dn().makeTensor(this.values,this.shape,this.dtype)}}let Dn=null,Vo=null;function qw(n){Dn=n}function jw(n){Vo=n}class ee{constructor(t,e,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=H(t),this.strides=pt(t),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Vo.buffer(this.shape,this.dtype,t)}bufferSync(){return Vo.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return _n(this.shape,t,this.dtype==="complex64")}arraySync(){return _n(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Dn().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(s=>Es(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Dn().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Dn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Es(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Dn().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Dn().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Vo.print(this,t)}clone(){return this.throwIfDisposed(),Vo.clone(this)}toString(t=!1){const e=this.dataSync();return Gw(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Vo.cast(this,t)}variable(t=!0,e,s){return this.throwIfDisposed(),Dn().makeVariable(this,t,e,s)}}Object.defineProperty(ee,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function G(){return Qu("Tensor",()=>ee)}G();class Ba extends ee{constructor(t,e,s,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=e,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Rt(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Dn().disposeTensor(this),this.dataId=t.dataId,Dn().incRef(this,null)}dispose(){Dn().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ba,Symbol.hasInstance,{value:n=>n instanceof ee&&n.assign!=null&&n.assign instanceof Function});var ef;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(ef||(ef={}));var wu;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(wu||(wu={}));var $u;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})($u||($u={}));var Cu;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Cu||(Cu={}));var Iu;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Iu||(Iu={}));const Kw={float32:Cu,int32:wu,bool:$u,complex64:Iu};function Je(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Kw[n][t]}function qh(n){return Je(n,"int32")}function se(n,t){if(n.dtype===t.dtype)return[n,t];const e=Je(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function ag(n){const t=[];return lg(n,t,new Set),t}function lg(n,t,e){if(n==null)return;if(n instanceof ee){t.push(n);return}if(!Xw(n))return;const s=n;for(const o in s){const r=s[o];e.has(r)||(e.add(r),lg(r,t,e))}}function Xw(n){return Array.isArray(n)||typeof n=="object"}function Hc(n){return n.kernelName!=null}class nf{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Qo{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new nf}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,s=1){return t in this.registryFactory?(on(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:s}=this.initializeBackend(t);if(!(s?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new zw(this.backendInstance),!0}setupRegisteredKernels(){jp(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){jp(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=e.factory();if(s&&!(s instanceof Xu)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,on(`Initialization of backend ${t} failed`),on(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return on(`Initialization of backend ${t} failed`),on(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const s=t[e],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const s=this.state.tensorInfo.get(e),o=s.backend,r=this.readSync(e),i=o.refCount(e);o.disposeData(e,!0),s.backend=t,t.move(e,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let s=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=e(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,e,s){t();try{const o=s();return e(),o}catch(o){throw e(),o}}nextTensorId(){return Qo.nextTensorId++}nextVariableId(){return Qo.nextVariableId++}clone(t){const e=D.runKernel(xi,{x:t}),s={x:t},o=i=>({x:()=>{const a="float32",l={x:i},c={dtype:a};return D.runKernel(oi,l,c)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[e],o,r,{}),e}runKernel(t,e,s){if(this.backendName==null&&this.backend,!(gu(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,s){const o=this.backend.numDataIds();let r=0;s.forEach(l=>{r+=l.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-e-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let l;const c=Hc(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Hc(t)){const{kernelName:f,inputs:m,attrs:g}=t;this.backendName==null&&this.backend;const x=gu(f,this.backendName);I(x!=null,()=>`Cannot find registered kernel '${f}' for backend '${this.backendName}'`),a=()=>{const b=this.backend.numDataIds();l=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const w=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(f,b,w);const y=w.map($=>$.rank!=null?$:this.makeTensorFromTensorInfo($));if(o){const $=this.getTensorsForGradient(f,m,y);s=this.saveTensorsForBackwardMode($)}return y}}else{const{forwardFunc:f}=t,m=g=>{o&&(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();l=this.tidy(()=>f(this.backend,m));const x=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,g,x),x}}const{inputs:u,attrs:h}=t,d=Hc(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(p=this.profiler.profileKernel(c,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),e=p.outputs)}),o&&this.addTapeNode(c,u,e,d,s,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(f=>u[f]!=null?u[f].shape:null),outputShapes:e.map(f=>f.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,e,s){const o=qp(t);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(I(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=r.map(c=>e[c]);const l=s.filter((c,u)=>i[u]);return a.concat(l)}return[]}makeTensor(t,e,s,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=t;s==="string"&&Xr(t[0])&&(r=t.map(l=>Ss(l)));const i=o.write(r,e,s),a=new ee(e,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const l=this.state.tensorInfo.get(i),c=bw(r);this.state.numBytes+=c-l.bytes,l.bytes=c}return a}makeTensorFromDataId(t,e,s,o){s=s||"float32";const r={dataId:t,shape:e,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(t,e){const{dataId:s,shape:o,dtype:r}=t,i=new ee(o,r,s,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));const r=new Ba(t,e,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*lu(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Ba||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*lu(t.dtype);this.state.numBytes-=s}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:s,saved:r},l=qp(t);l!=null&&(o=l.gradFunc),o!=null&&(a.gradient=c=>(c=c.map((u,h)=>{if(u==null){const d=s[h],p=Fe(d.size,d.dtype);return this.makeTensor(p,d.shape,d.dtype)}return u}),o(c.length>1?c:c[0],r,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=ag(t),s=new Set(e.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(t,e,s,o=!1){if(I(e.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));I(r instanceof ee,()=>"The result y returned by f() must be a tensor.");const i=Ww(this.state.activeTape,e,r);if(!o&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s??Yw(r.shape),Uw(a,i,c=>this.tidy(c),Zw);const l=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const u of c.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:l}})}customGrad(t){return I(uu(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{I(e.every(a=>a instanceof ee),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};e.forEach((a,l)=>{o[l]=a});const r=(a,l)=>(s=t(...e,l),I(s.value instanceof ee,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),I(uu(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,l)=>{const c=s.gradFunc(a,l),u=Array.isArray(c)?c:[c];I(u.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),I(u.every(d=>d instanceof ee),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return u.forEach((d,p)=>{h[p]=()=>d}),h};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=Ve(),s=await this.backend.time(t);return s.wallMs=Ve()-e,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new nf;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Qo.nextTensorId=0;Qo.nextVariableId=0;function Yw(n){const t=Ju(H(n),"float32");return D.makeTensor(t,n,"float32")}function cg(){const n=Mm();if(n._tfengine==null){const t=new ww(n);n._tfengine=new Qo(t)}return vw(n._tfengine.ENV),qw(()=>n._tfengine),n._tfengine}const D=cg();function Zw(n,t){const e={a:n,b:t};return D.runKernel(ur,e)}function Jw(){return typeof navigator<"u"&&navigator!=null}function ug(n){if(n||Jw()){if(n||(n=navigator),n.product==="ReactNative")return!0;const t=n.userAgent||n.vendor||(typeof window<"u"?window.opera:"");if(!t){const e=n;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function hg(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const ln=V();ln.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ln.registerFlag("IS_BROWSER",()=>hg());ln.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ln.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ln.registerFlag("PROD",()=>!1);ln.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ln.getBool("DEBUG"));ln.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ln.registerFlag("IS_TEST",()=>!1);ln.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);ln.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ln.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ln.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function qi(n,t){let e=n;if(es(n))return t==="string"?[]:[n.length];if(typeof n=="object"&&"texture"in n){const o=n.channels||"RGBA";return[n.height,n.width*o.length]}if(!Array.isArray(n))return[];const s=[];for(;Array.isArray(e)||es(e)&&t!=="string";)s.push(e.length),e=e[0];return Array.isArray(n)&&V().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&dg(n,s,[]),s}function dg(n,t,e){if(e=e||[],!Array.isArray(n)&&!es(n)){I(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}I(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),I(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const s=t.slice(1);for(let o=0;o<n.length;++o)dg(n[o],s,e.concat(o))}function sf(n,t,e,s){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${s}' must be ${n} tensor, but got ${t} tensor`)}}function S(n,t,e,s="numeric"){if(n instanceof ee)return sf(s,n.dtype,t,e),n;let o=Yr(n);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),sf(s,o,t,e),n==null||!es(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const r=qi(n,o);!es(n)&&!Array.isArray(n)&&(n=[n]);const a=o!=="string"?To(n,o):Yo(n,[],!0);return D.makeTensor(a,r,o)}function pg(n,t,e,s="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((r,i)=>S(r,`${t}[${i}]`,e,s))}const Qw="__op";function A(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+Qw;const o=(...r)=>{D.startScope(e);try{const i=s(...r);return Om(i)&&console.error("Cannot return a Promise inside of tidy."),D.endScope(i),i}catch(i){throw D.endScope(null),i}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}function t$(n,t){const e=S(n,"real","complex"),s=S(t,"imag","complex");vn(e.shape,s.shape,`real and imag shapes, ${e.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:e,imag:s};return D.runKernel(ih,o)}const po=A({complex_:t$});function ji(n,t,e,s){if(s==null&&(s=Yr(n)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof n=="object"&&"texture"in n){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from texture only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return n.channels=n.channels||"RGBA",D.backend.createTensorFromTexture(n,t||e,s)}if(!es(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){ds(t);const o=H(t),r=H(e);I(o===r,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<e.length;++i){const a=e[i],l=i===e.length-1?a!==H(t.slice(i)):!0;I(e[i]===t[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!es(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=s!=="string"?To(n,s):Yo(n,[],!0),D.makeTensor(n,t,s)}function Or(n,t,e){const s=qi(n,e);return ji(n,t,s,e)}const of={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};const Va=4;async function rf(n,t){const e=[],s=[],o=Array.isArray(n)?n.map(i=>i.name):Object.keys(n);for(let i=0;i<o.length;++i){const a=o[i],l=Array.isArray(n)?n[i].tensor:n[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);const c={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const u=new Promise(async h=>{const d=await l.bytes(),p=d.reduce((g,x)=>g+x.length,0)+Va*d.length,f=new Uint8Array(p);let m=0;for(let g=0;g<d.length;g++){const x=d[g],b=new Uint8Array(new Uint32Array([x.length]).buffer);f.set(b,m),m+=Va,f.set(x,m),m+=x.length}h(f)});s.push(u)}else s.push(l.data());t!=null&&(c.group=t),e.push(c)}const r=await Promise.all(s);return{data:n$(r),specs:e}}function e$(n,t){const e={};let s,o=0;for(const r of t){const i=r.name,a=r.dtype,l=r.shape,c=H(l);let u;if("quantization"in r){const h=r.quantization;if(h.dtype==="uint8"||h.dtype==="uint16"){if(!("min"in h&&"scale"in h))throw new Error(`Weight ${r.name} with quantization ${h.dtype} doesn't have corresponding metadata min and scale.`)}else if(h.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${r.name} is quantized with ${h.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${h.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const d=of[h.dtype],p=n.slice(o,o+c*d),f=h.dtype==="uint8"?new Uint8Array(p):new Uint16Array(p);if(a==="float32")if(h.dtype==="uint8"||h.dtype==="uint16"){u=new Float32Array(f.length);for(let m=0;m<f.length;m++){const g=f[m];u[m]=g*h.scale+h.min}}else if(h.dtype==="float16")s===void 0&&(s=h$()),u=s(f);else throw new Error(`Unsupported quantization type ${h.dtype} for weight type float32.`);else if(a==="int32"){if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error(`Unsupported quantization type ${h.dtype} for weight type int32.`);u=new Int32Array(f.length);for(let m=0;m<f.length;m++){const g=f[m];u[m]=Math.round(g*h.scale+h.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);o+=c*d}else if(a==="string"){const h=H(r.shape);u=[];for(let d=0;d<h;d++){const p=new Uint32Array(n.slice(o,o+Va))[0];o+=Va;const f=new Uint8Array(n.slice(o,o+p));u.push(f),o+=p}}else{const h=of[a],d=n.slice(o,o+c*h);if(a==="float32")u=new Float32Array(d);else if(a==="int32")u=new Int32Array(d);else if(a==="bool")u=new Uint8Array(d);else if(a==="complex64"){u=new Float32Array(d);const p=new Float32Array(u.length/2),f=new Float32Array(u.length/2);for(let x=0;x<p.length;x++)p[x]=u[x*2],f[x]=u[x*2+1];const m=Or(p,l,"float32"),g=Or(f,l,"float32");e[i]=po(m,g),m.dispose(),g.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);o+=c*h}a!=="complex64"&&(e[i]=Or(u,l,a))}return e}function n$(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(r=>{if(t+=r.byteLength,e.push(r.byteLength===r.buffer.byteLength?r:new r.constructor(r)),!(r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${r.constructor.name}`)});const s=new Uint8Array(t);let o=0;return e.forEach(r=>{s.set(new Uint8Array(r.buffer),o),o+=r.byteLength}),s.buffer}const jh=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function af(n){return jh?Buffer.byteLength(n):new Blob([n]).size}function s$(n){if(jh)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let s=0,o=t.length;s<o;s++)e+=String.fromCharCode(t[s]);return btoa(e)}function o$(n){if(jh){const s=Buffer.from(n,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let s=0;s<t.length;++s)e.set([t.charCodeAt(s)],s);return e.buffer}function fg(n){if(n.length===1)return n[0];let t=0;n.forEach(o=>{t+=o.byteLength});const e=new Uint8Array(t);let s=0;return n.forEach(o=>{e.set(new Uint8Array(o),s),s+=o.byteLength}),e.buffer}function mg(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(e.initializerSignature=n.initializerSignature),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function r$(n,t,e){const s={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(s.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=e}return n.signature!=null&&(s.signature=n.signature),n.userDefinedMetadata!=null&&(s.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(s.modelInitializer=n.modelInitializer),n.initializerSignature!=null&&(s.initializerSignature=n.initializerSignature),s}async function i$(n,t){let e,s;return n.weightsManifest!=null&&([e,s]=await t(n.weightsManifest)),r$(n,e,s)}function dc(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:af(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:af(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function a$(n){const t=[];for(const e of n)t.push(...e.weights);return t}function l$(){const n=e=>{let s=e<<13,o=0;for(;!(s&8388608);)o-=8388608,s<<=1;return s&=-8388609,o+=947912704,s|o},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function c$(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function u$(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function h$(){const n=l$(),t=c$(),e=u$();return s=>{const o=new ArrayBuffer(4*s.length),r=new Uint32Array(o);for(let i=0;i<s.length;i++){const a=s[i],l=n[e[a>>10]+(a&1023)]+t[a>>10];r[i]=l}return new Float32Array(o)}}class ue{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return ue.instance==null&&(ue.instance=new ue),ue.instance}static registerSaveRouter(t){ue.getInstance().saveRouters.push(t)}static registerLoadRouter(t){ue.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return ue.getHandlers(t,"save")}static getLoadHandlers(t,e){return ue.getHandlers(t,"load",e)}static getHandlers(t,e,s){const o=[];return(e==="load"?ue.getInstance().loadRouters:ue.getInstance().saveRouters).forEach(i=>{const a=i(t,s);a!==null&&o.push(a)}),o}}const d$=n=>ue.getSaveHandlers(n),p$=(n,t)=>ue.getLoadHandlers(n,t);const vu="tensorflowjs",ku=1,ro="models_store",Cs="model_info_store";function gg(){if(!V().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Su(n){const t=n.result;t.createObjectStore(ro,{keyPath:"modelPath"}),t.createObjectStore(Cs,{keyPath:"modelPath"})}class fo{constructor(t){if(this.indexedDB=gg(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((s,o)=>{const r=this.indexedDB.open(vu,ku);r.onupgradeneeded=()=>Su(r),r.onsuccess=()=>{const i=r.result;if(e==null){const a=i.transaction(ro,"readonly"),c=a.objectStore(ro).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(c.result.modelArtifacts)},c.onerror=u=>(i.close(),o(c.error)),a.oncomplete=()=>i.close()}else{const a=dc(e),l=i.transaction(Cs,"readwrite");let c=l.objectStore(Cs);const u=c.put({modelPath:this.modelPath,modelArtifactsInfo:a});let h;u.onsuccess=()=>{h=i.transaction(ro,"readwrite");const p=h.objectStore(ro).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a});p.onsuccess=()=>s({modelArtifactsInfo:a}),p.onerror=f=>{c=l.objectStore(Cs);const m=c.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(p.error)),m.onerror=g=>(i.close(),o(p.error))}},u.onerror=d=>(i.close(),o(u.error)),l.oncomplete=()=>{h==null?i.close():h.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}fo.URL_SCHEME="indexeddb://";const xg=n=>V().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(fo.URL_SCHEME)?f$(n.slice(fo.URL_SCHEME.length)):null;ue.registerSaveRouter(xg);ue.registerLoadRouter(xg);function f$(n){return new fo(n)}function m$(n){return n.startsWith(fo.URL_SCHEME)?n.slice(fo.URL_SCHEME.length):n}class g${constructor(){this.indexedDB=gg()}async listModels(){return new Promise((t,e)=>{const s=this.indexedDB.open(vu,ku);s.onupgradeneeded=()=>Su(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(Cs,"readonly"),a=r.objectStore(Cs).getAll();a.onsuccess=()=>{const l={};for(const c of a.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},a.onerror=l=>(o.close(),e(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>e(s.error)})}async removeModel(t){return t=m$(t),new Promise((e,s)=>{const o=this.indexedDB.open(vu,ku);o.onupgradeneeded=()=>Su(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(Cs,"readwrite"),a=i.objectStore(Cs),l=a.get(t);let c;l.onsuccess=()=>{if(l.result==null)return r.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const u=a.delete(t),h=()=>{c=r.transaction(ro,"readwrite");const p=c.objectStore(ro).delete(t);p.onsuccess=()=>e(l.result.modelArtifactsInfo),p.onerror=f=>s(l.error)};u.onsuccess=h,u.onerror=d=>(h(),r.close(),s(l.error))}},l.onerror=u=>(r.close(),s(l.error)),i.oncomplete=()=>{c==null?r.close():c.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}const cs="/",Wo="tensorflowjs_models",bg="info",x$="model_topology",b$="weight_specs",y$="weight_data",w$="model_metadata";function yg(n){return{info:[Wo,n,bg].join(cs),topology:[Wo,n,x$].join(cs),weightSpecs:[Wo,n,b$].join(cs),weightData:[Wo,n,y$].join(cs),modelMetadata:[Wo,n,w$].join(cs)}}function wg(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function $$(n){const t=n.split(cs);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(cs)}function C$(n){return n.startsWith(mo.URL_SCHEME)?n.slice(mo.URL_SCHEME.length):n}class mo{constructor(t){if(!V().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=yg(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),o=dc(t);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,s$(t.weightData));const r={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(r)),{modelArtifactsInfo:o}}catch{throw wg(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(e.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=o$(i),e}}mo.URL_SCHEME="localstorage://";const $g=n=>V().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(mo.URL_SCHEME)?I$(n.slice(mo.URL_SCHEME.length)):null;ue.registerSaveRouter($g);ue.registerLoadRouter($g);function I$(n){return new mo(n)}class v${constructor(){I(V().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),I(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Wo+cs,s=cs+bg;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(e)&&r.endsWith(s)){const i=$$(r);t[i]=JSON.parse(this.LS.getItem(r))}}return t}async removeModel(t){t=C$(t);const e=yg(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(e.info));return wg(e),s}}const lf="://";class Un{constructor(){this.managers={}}static getInstance(){return Un.instance==null&&(Un.instance=new Un),Un.instance}static registerManager(t,e){I(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(lf)&&(t=t.slice(0,t.indexOf(lf))),I(t.length>0,()=>"scheme must not be an empty string.");const s=Un.getInstance();I(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=e}static getManager(t){const e=Un.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(Un.getInstance().managers)}}class k${constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!V().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const o=this.functionRefs[s.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(V().get("IS_BROWSER")){V().setPlatform("browser",new k$);try{Un.registerManager(mo.URL_SCHEME,new v$)}catch{}try{Un.registerManager(fo.URL_SCHEME,new g$)}catch{}}const S$={importFetch:()=>require("node-fetch")};let qc;class N${constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return V().global.fetch!=null?V().global.fetch(t,e):(qc==null&&(qc=S$.importFetch()),qc(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}V().get("IS_NODE")&&!V().get("IS_BROWSER")&&V().setPlatform("node",new N$);function $t(n,t="float32",e){return t=t||"float32",ds(n),new De(n,t,e)}function T$(n,t){const e=S(n,"x","cast");if(!xw(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:e},o={dtype:t};return D.runKernel(oi,s,o)}const st=A({cast_:T$});function E$(n){const e={x:S(n,"x","clone","string_or_numeric")};return D.runKernel(xi,e)}const ao=A({clone_:E$});function R$(n,t=!1){console.log(n.toString(t))}cg();const D$={buffer:$t,cast:st,clone:ao,print:R$};jw(D$);const A$="model",F$=".json",_$=".weights.bin";function cf(n){return new Promise(t=>setTimeout(t)).then(n)}class go{constructor(t){if(!V().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(go.URL_SCHEME)&&(t=t.slice(go.URL_SCHEME.length)),(t==null||t.length===0)&&(t=A$),this.modelJsonFileName=t+F$,this.weightDataFileName=t+_$}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=mg(t,s),r=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,await cf(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=e,await cf(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:dc(t)}}}}go.URL_SCHEME="downloads://";const O$=n=>V().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(go.URL_SCHEME)?L$(n.slice(go.URL_SCHEME.length)):null;ue.registerSaveRouter(O$);function L$(n="model"){return new go(n)}function uf(n,t,e,s){i(n),e=e??0,s=s??1,a(e,s);let o=0;const r=l=>(l.then(c=>{const u=e+ ++o/n.length*(s-e);return t(u),c}),l);function i(l){I(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,c){I(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),I(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),I(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(r))}async function M$(n,t){t==null&&(t={});const e=t.fetchFunc==null?V().platform.fetch:t.fetchFunc,s=n.map(h=>e(h,t.requestInit,{isBinary:!0})),o=0,r=.5,a=(t.onProgress==null?await Promise.all(s):await uf(s,t.onProgress,o,r)).map(h=>h.arrayBuffer()),l=.5,c=1;return t.onProgress==null?await Promise.all(a):await uf(a,t.onProgress,l,c)}const P$="application/octet-stream",z$="application/json";class Kh{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(I(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=V().platform.fetch,I(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&I(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=mg(t,s);e.body.append("model.json",new Blob([JSON.stringify(o)],{type:z$}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:P$}),"model.weights.bin");const r=await this.fetch(this.path,e);if(r.ok)return{modelArtifactsInfo:dc(t),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=e.modelTopology,o=e.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return i$(e,r=>this.loadWeights(r))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=B$(e),r=this.weightPathPrefix||s,i=a$(t),a=[],l=[];for(const u of t)for(const h of u.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(h)):a.push(r+h+o);this.weightUrlConverter&&a.push(...await Promise.all(l));const c=await M$(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,fg(c)]}}Kh.URL_SCHEME_REGEX=/^https?:\/\//;function B$(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),s=n.substring(0,t),o=e>t?n.substring(e):"";return[s+"/",o]}function hf(n){return n.match(Kh.URL_SCHEME_REGEX)!=null}const Cg=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(s=>hf(s)):e=hf(n),e)return Ig(n,t)}return null};ue.registerSaveRouter(Cg);ue.registerLoadRouter(Cg);function Ig(n,t){return new Kh(n,t)}function V$(n,t){return Ig(n,t)}function W$(n,t,e=!1,s=!1){let o=S(n,"a","matMul"),r=S(t,"b","matMul");[o,r]=se(o,r);const i={a:o,b:r},a={transposeA:e,transposeB:s};return D.runKernel(gl,i,a)}const Et=A({matMul_:W$});function U$(n,t,e=1,s=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const i={indices:S(n,"indices","oneHot","int32")},a={dtype:o,depth:t,onValue:e,offValue:s};return D.runKernel(jl,i,a)}const vg=A({oneHot_:U$});function Wn(){return D}function Nu(){return D.memory()}function P(n,t){return D.tidy(n,t)}function wt(n){ag(n).forEach(e=>e.dispose())}function Yn(n){return D.keep(n)}function kg(n,t,e=1){return D.registerBackend(n,t,e)}function G$(){return D.backend}function H$(n){const e={input:S(n,"input","imag")};return D.runKernel($h,e)}const Xh=A({imag_:H$});function q$(n){const e={x:S(n,"x","neg")};return D.runKernel(Gl,e)}const Yt=A({neg_:q$});function j$(n){const e={input:S(n,"input","real")};return D.runKernel(Eh,e)}const Wa=A({real_:j$});function K$(n,t,e){const s=S(n,"x","transpose");if(t==null&&(t=s.shape.map((i,a)=>a).reverse()),I(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(i=>{I(i>=0&&i<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const o={x:s},r={perm:t};return s.dtype==="complex64"?P(()=>{let i=Wa(s),a=Xh(s);return i=D.runKernel(qo,{x:i},r),a=D.runKernel(qo,{x:a},r),e&&(a=Yt(a)),po(i,a)}):D.runKernel(qo,o,r)}const kt=A({transpose_:K$});function tr(n,t){const e=n.length,s=[];for(let o=0;o<e;o++){const r=e-1-o,i=n[r]||1;(t[t.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function me(n,t){const e=[];for(let s=0;s<t.length;s++){const o=n[n.length-s-1],r=t.length-s-1,i=t[r];(o==null||o===1&&i>1)&&e.unshift(r)}return e}function bt(n,t){const e=[],s=Math.max(n.length,t.length);for(let o=0;o<s;o++){let r=n[n.length-o-1];r==null&&(r=1);let i=t[t.length-o-1];if(i==null&&(i=1),r===1)e.unshift(i);else if(i===1)e.unshift(r);else if(r!==i){const a=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(a)}else e.unshift(r)}return e}function X$(n,t,e){if(Zu(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=qi(n,e);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ji(n,t,s,e)}let Ks;function Y$(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,s=!1,o=!1,r=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)r=!0;else if(n.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(gu(fu,D.backendName)!=null){const f={pixels:n},m={numChannels:t};return D.runKernel(fu,f,m)}const[c,u]=o?[n.videoWidth,n.videoHeight]:[n.width,n.height];let h;if(i)h=n.getContext("2d").getImageData(0,0,c,u).data;else if(s||e)h=n.data;else if(r||o||a){if(Ks==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Ks=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Ks=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Ks.canvas.width=c,Ks.canvas.height=u,Ks.drawImage(n,0,0,c,u),h=Ks.getImageData(0,0,c,u).data}let d;if(t===4)d=new Int32Array(h);else{const f=c*u;d=new Int32Array(f*t);for(let m=0;m<f;m++)for(let g=0;g<t;++g)d[m*t+g]=h[m*4+g]}return X$(d,[u,c,t],"int32")}async function Z$(n,t){let e=S(n,"img","toPixels");if(!(n instanceof ee)){const c=e;e=st(c,"int32"),c.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[s,o]=e.shape.slice(0,2),r=e.rank===2?1:e.shape[2];if(r>4||r===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${r}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const i=await e.data(),a=e.dtype==="float32"?255:1,l=new Uint8ClampedArray(o*s*4);for(let c=0;c<s*o;++c){const u=[0,0,0,255];for(let d=0;d<r;d++){const p=i[c*r+d];if(e.dtype==="float32"){if(p<0||p>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${p}.`)}else if(e.dtype==="int32"&&(p<0||p>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${p}.`);r===1?(u[0]=p*a,u[1]=p*a,u[2]=p*a):u[d]=p*a}const h=c*4;l[h+0]=Math.round(u[0]),l[h+1]=Math.round(u[1]),l[h+2]=Math.round(u[2]),l[h+3]=Math.round(u[3])}if(t!=null){t.width=o,t.height=s;const c=t.getContext("2d"),u=new ImageData(l,o,s);c.putImageData(u,0,0)}return e!==n&&e.dispose(),l}const J$=A({fromPixels_:Y$});function Yh(n,t){const e=n.shape.length,s=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${e}`);if(H(n.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,r=o[o.length-1];let i=1;for(let h=0;h<o.length-1;++h)i*=o[h];const a=n.shape,l=o.slice();l.pop();let c=1;for(let h=r;h<e;++h)c*=a[h],l.push(a[h]);const u=[...pt(n.shape).map(h=>h/c),1].slice(0,r);return[l,i,c,u]}function Sg(n,t,e){const s=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${s}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(r+` update.rank < ${o}. `);if(n.length<s+(e.rank-o))throw new Error(r+` Output shape length < ${s+(e.rank-o)}`);if(e.rank!==o+n.length-s)throw new Error(r+` update.rank != ${o+n.length-s}`);for(let i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(r+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-o;++i)if(e.shape[i+o]!==n[i+s])throw new Error(r+` updates.shape[${i+o}] (${e.shape[i+o]}) != shape[${i+o}] (${n[i+o]})`)}function Q$(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}Sg(e,t,n)}function Ki(n,t,e){const s=t.shape.length,o=s>1?t.shape[s-1]:1,r=e.length;let i=1;for(let h=o;h<r;++h)i*=e[h];const a=o<1?1:o,l=H(t.shape)/a,c=[...pt(e.slice(0,o)),1],u=H(e);return{sliceRank:o,numUpdates:l,sliceSize:i,strides:c,outputSize:u}}const Tu=-2,tC=-1;function Zh(n,t,e){const s=n.shape.length;I(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),I(s===e.length,()=>`Error in slice${s}D: Length of size ${e} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)I(t[o]+e[o]<=n.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`)}function eC(n){const t=[];let e=0;for(;n>0;)n&1&&t.push(e),n/=2,e++;return t}function Jh(n,t,e){const s=[];for(let o=0;o<n.length;o++)s[o]=Math.ceil((t[o]-n[o])/e[o]);return s}function Ng(n,t,e,s){const o=[...n];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<e;r++)r===0?o[t]=1:(o.splice(t,0,1),o.pop());return o}function Tg(n,t,e){return e<=n?e:e-(t-1)}function Eg(n,t){const e=[];for(let s=0;s<n;s++)e.push(t+s);return e}function nC(n,t,e,s,o,r,i,a,l){const c=n.length;let u=new Array(c),h=new Array(c),d=new Array(c);if(t.length&&e>0){const p=t[0],f=e+1;u=Rg(i,p,f,s,n),h=Dg(a,p,f,o,n),d=Ng(r,p,f,n)}else for(let p=0;p<c;p++)u[p]=Fg(i,s,r,n,p,l),h[p]=_g(a,o,r,n,p,l),d[p]=Ag(r,p,l);return{begin:u,end:h,strides:d}}function Rg(n,t,e,s,o){const r=[...o],i=Eg(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=0;else{const l=Tg(t,e,a);let c=s[l];n&1<<l&&(c=0),r[a]=c}return r}function Dg(n,t,e,s,o){const r=[...o],i=Eg(e,t);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=Number.MAX_SAFE_INTEGER;else{const l=Tg(t,e,a);let c=s[l];n&1<<l&&(c=Number.MAX_SAFE_INTEGER),r[a]=c}for(let a=0;a<r.length;a++){const l=o[a];r[a]<0&&(r[a]+=l),r[a]=ho(0,r[a],o[a])}return r}function Ag(n,t,e){let s=n[t];return(e&1<<t||s==null)&&(s=1),s}function Fg(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),i=ho(0,i,l-1),i}function _g(n,t,e,s,o,r){let i=t[o];const a=e[o]||1;(n&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const l=s[o];return i<0&&(i+=l),a>0?i=ho(0,i,l):i=ho(-1,i,l-1),i}function Qh(n,t,e){let s=e.length;for(let o=0;o<e.length;o++)if(e[o]>1){s=o;break}for(let o=s+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function td(n,t){let e=n.length>0?n[n.length-1]:1;for(let s=0;s<n.length-1;s++)e+=n[s]*t[s];return e}function pc(n,t,e){let s;const o=n.shape.length;typeof t=="number"?s=[t,...new Array(o-1).fill(0)]:t.length<o?s=t.concat(new Array(o-t.length).fill(0)):s=t.slice(),s.forEach(i=>{I(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return e==null?r=new Array(o).fill(-1):typeof e=="number"?r=[e,...new Array(o-1).fill(-1)]:e.length<o?r=e.concat(new Array(o-e.length).fill(-1)):r=e,r=r.map((i,a)=>i>=0?i:(I(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),n.shape[a]-s[a])),[s,r]}function ed(n,t,e,s,o,r,i,a,l){let c;if(s==null?(c=new Array(t.length),c.fill(1)):c=s,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const h={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<h.dims;w++)u&&1<<w&a&&h.numAddAxisAfterEllipsis++,1<<w&i&&(u=!0);u||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};sC(h,d);let p=!0,f=!0,m=!0;const g=[],x=[];for(let w=0;w<n.length;++w){if(d.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);const y=!!(d.shrinkAxisMask&1<<w),$=n[w];if($===-1){g.push(y?1:-1);continue}const C=[d.beginMask&1<<w,d.endMask&1<<w],v=[d.strides[w]>0?0:-1,d.strides[w]>0?$:$-1];if(y&&d.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&d.strides[w]===1;const k=!!(d.beginMask&1<<w&&d.endMask&1<<w);if(d.beginValid&&d.endValid){if(y){const z=d.begin[w]<0?$+d.begin[w]:d.begin[w];if(d.begin[w]=z,d.end[w]=d.begin[w]+1,z<0||z>=$)throw Error(`slice index ${d.begin[w]} of dimension ${w} out of bounds.`)}else d.begin[w]=df(d.begin[w],0,d.strides[w],$,C,v),d.end[w]=df(d.end[w],1,d.strides[w],$,C,v);const F=d.strides[w]===1&&d.begin[w]===0&&d.end[w]===$;p=p&&F,f=f&&(w===0&&d.strides[w]===1||F)}else p=p&&d.strides[w]===1&&k,f=f&&(w===0&&d.strides[w]===1||k);let N,T=!1;if(d.beginValid&&d.endValid?(N=d.end[w]-d.begin[w],T=!0):y?(N=1,T=!0):k&&$>=0&&(d.strides[w]<0?N=-$:N=$,T=!0),T){let F;N===0||N<0!=d.strides[w]<0?F=0:F=Math.trunc(N/d.strides[w])+(N%d.strides[w]!==0?1:0),g.push(F)}else g.push(-1)}for(let w=0;w<d.finalShapeGatherIndices.length;++w){const y=d.finalShapeGatherIndices[w];y>=0?x.push(g[y]):y===Tu&&x.push(1)}return{finalShapeSparse:x.filter((w,y)=>d.finalShapeGatherIndices[y]!==Tu),finalShape:x,isIdentity:p,sliceDim0:f,isSimpleSlice:m,begin:d.begin,end:d.end,strides:d.strides}}function sC(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=n.begin!=null,t.endValid=n.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<n.dims;s++)if(1<<s&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-s)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=s}else if(1<<s&n.newAxisMask)t.finalShapeGatherIndices.push(Tu),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);n.begin!=null&&(t.begin[e]=n.begin[s]),n.end!=null&&(t.end[e]=n.end[s]),t.strides[e]=n.strides[s],n.beginMask&1<<s&&(t.beginMask|=1<<e),n.endMask&1<<s&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(tC),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[e]=s,e++}}function df(n,t,e,s,o,r){if(o[t])return e>0?r[t]:r[t+1&1];{const i=n<0?s+n:n;return i<r[0]?r[0]:i>r[1]?r[1]:i}}const oC=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:Zh,maskToAxes:eC,computeOutShape:Jh,stridesWithElidedDims:Ng,getNormalizedAxes:nC,startIndicesWithElidedDims:Rg,stopIndicesWithElidedDims:Dg,stridesForAxis:Ag,startForAxis:Fg,stopForAxis:_g,isSliceContinous:Qh,computeFlatOffset:td,parseSliceParams:pc,sliceInfo:ed},Symbol.toStringTag,{value:"Module"}));class hr{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}}class mn{constructor(){this.classNameMap={}}static getMap(){return mn.instance==null&&(mn.instance=new mn),mn.instance}static register(t){mn.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function j(n){I(n.className!=null,()=>"Class being registered does not have the static className property defined."),I(typeof n.className=="string",()=>"className is required to be a string, but got type "+typeof n.className),I(n.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),mn.register(n)}function rC(n,t){let e=S(n,"a","add"),s=S(t,"b","add");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(ur,o)}const Y=A({add_:rC});function iC(n,t){let e=S(n,"a","floorDiv"),s=S(t,"b","floorDiv");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(mi,o)}const Og=A({floorDiv_:iC});function aC(n,t){let e=S(n,"a","div"),s=S(t,"b","div");if([e,s]=se(e,s),e.dtype==="int32"&&s.dtype==="int32")return Og(e,s);const o={a:e,b:s},r={};return D.runKernel(ci,o,r)}const dt=A({div_:aC});function lC(n,t){let e=S(n,"a","mul"),s=S(t,"b","mul");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(Si,o)}const E=A({mul_:lC});function cC(n){const t=S(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return D.runKernel(bl,e)}else{const e={x:t};return D.runKernel(hl,e)}}const ge=A({abs_:cC});function uC(n){const e={x:S(n,"x","acos")};return D.runKernel(Zr,e)}const hC=A({acos_:uC});function dC(n){const e={x:S(n,"x","acosh")};return D.runKernel(Jr,e)}const pC=A({acosh_:dC});function fC(n,t=null,e=!1){const o={x:S(n,"x","all","bool")},r={axis:t,keepDims:e};return D.runKernel(eh,o,r)}const Lg=A({all_:fC});function mC(n,t=null,e=!1){const o={x:S(n,"x","any","bool")},r={axis:t,keepDims:e};return D.runKernel(nh,o,r)}const Eu=A({any_:mC});function gC(n,t=0){const s={x:S(n,"x","argMax")},o={axis:t};return D.runKernel(dl,s,o)}const Pr=A({argMax_:gC});function xC(n,t=0){const s={x:S(n,"x","argMin")},o={axis:t};return D.runKernel(pl,s,o)}const bC=A({argMin_:xC});function yC(n){const e={x:S(n,"x","asin")};return D.runKernel(Qr,e)}const wC=A({asin_:yC});function $C(n){const e={x:S(n,"x","asinh")};return D.runKernel(ti,e)}const CC=A({asinh_:$C});function IC(n){const e={x:S(n,"x","atan")};return D.runKernel(ei,e)}const vC=A({atan_:IC});function kC(n,t){let e=S(n,"a","atan2"),s=S(t,"b","atan2");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(si,o)}const SC=A({atan2_:kC});function NC(n){const e={x:S(n,"x","atanh")};return D.runKernel(ni,e)}const TC=A({atanh_:NC});function Xi(n,t,e,s,o="NHWC",r){const i=n[3],a=[...t,i],l=fs(o);return ke(n,a,e,r,s,null,null,l)}function kn(n,t,e,s,o,r,i="channelsLast"){const[a,l]=Ua(t);let c;if(i==="channelsLast")c=[a,l,n[3],n[3]];else if(i==="channelsFirst")c=[a,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return ke(n,c,e,s,o,r,!1,i)}function ps(n,t,e,s,o,r,i="NDHWC"){const[a,l,c]=Ru(t);let u,h;if(i==="NDHWC")h="channelsLast",u=[a,l,c,n[4],n[4]];else if(i==="NCDHW")h="channelsFirst",u=[a,l,c,n[1],n[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ps(n,u,e,s,o,!1,h,r)}function ke(n,t,e,s,o,r,i=!1,a="channelsLast"){let[l,c,u,h]=[-1,-1,-1,-1];if(a==="channelsLast")[l,c,u,h]=n;else if(a==="channelsFirst")[l,h,c,u]=n;else throw new Error(`Unknown dataFormat ${a}`);const[d,p,,f]=t,[m,g]=Ua(e),[x,b]=Ua(s),w=jo(d,x),y=jo(p,b),{padInfo:$,outHeight:C,outWidth:v}=DC(o,c,u,m,g,w,y,r,a),k=i?f*h:f;let N;return a==="channelsFirst"?N=[l,k,C,v]:a==="channelsLast"&&(N=[l,C,v,k]),{batchSize:l,dataFormat:a,inHeight:c,inWidth:u,inChannels:h,outHeight:C,outWidth:v,outChannels:k,padInfo:$,strideHeight:m,strideWidth:g,filterHeight:d,filterWidth:p,effectiveFilterHeight:w,effectiveFilterWidth:y,dilationHeight:x,dilationWidth:b,inShape:n,outShape:N,filterShape:t}}function Ps(n,t,e,s,o,r=!1,i="channelsLast",a){let[l,c,u,h,d]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,c,u,h,d]=n;else if(i==="channelsFirst")[l,d,c,u,h]=n;else throw new Error(`Unknown dataFormat ${i}`);const[p,f,m,,g]=t,[x,b,w]=Ru(e),[y,$,C]=Ru(s),v=jo(p,y),k=jo(f,$),N=jo(m,C),{padInfo:T,outDepth:F,outHeight:z,outWidth:M}=AC(o,c,u,h,x,b,w,v,k,N,a),L=r?g*d:g;let O;return i==="channelsFirst"?O=[l,L,F,z,M]:i==="channelsLast"&&(O=[l,F,z,M,L]),{batchSize:l,dataFormat:i,inDepth:c,inHeight:u,inWidth:h,inChannels:d,outDepth:F,outHeight:z,outWidth:M,outChannels:L,padInfo:T,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:p,filterHeight:f,filterWidth:m,effectiveFilterDepth:v,effectiveFilterHeight:k,effectiveFilterWidth:N,dilationDepth:y,dilationHeight:$,dilationWidth:C,inShape:n,outShape:O,filterShape:t}}function EC(n,t,e,s,o){s==null&&(s=nd(n,t,e));const r=n[0],i=n[1],a=lo((r-t+2*s)/e+1,o),l=lo((i-t+2*s)/e+1,o);return[a,l]}function RC(n,t,e,s,o,r){o==null&&(o=nd(n,t,s));const i=n[0],a=n[1],l=n[2],c=lo((i-t+2*o)/s+1,r),u=lo((a-t+2*o)/s+1,r),h=lo((l-t+2*o)/s+1,r);return[c,u,h,e]}function nd(n,t,e,s=1){const o=jo(t,s);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ua(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Ru(n){return typeof n=="number"?[n,n,n]:n}function jo(n,t){return t<=1?n:n+(n-1)*(t-1)}function DC(n,t,e,s,o,r,i,a,l){let c,u,h;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const p=EC([t,e],r,s,n,a);u=p[0],h=p[1]}else if(n==="same"){u=Math.ceil(t/s),h=Math.ceil(e/o);const d=Math.max(0,(u-1)*s+r-t),p=Math.max(0,(h-1)*o+i-e),f=Math.floor(d/2),m=d-f,g=Math.floor(p/2),x=p-g;c={top:f,bottom:m,left:g,right:x,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((t-r+1)/s),h=Math.ceil((e-i+1)/o);else if(typeof n=="object"){const d=l==="channelsLast"?n[1][0]:n[2][0],p=l==="channelsLast"?n[1][1]:n[2][1],f=l==="channelsLast"?n[2][0]:n[3][0],m=l==="channelsLast"?n[2][1]:n[3][1];c={top:d,bottom:p,left:f,right:m,type:d===0&&p===0&&f===0&&m===0?"VALID":"EXPLICIT"},u=lo((t-r+d+p)/s+1,a),h=lo((e-i+f+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:u,outWidth:h}}function AC(n,t,e,s,o,r,i,a,l,c,u){let h,d,p,f;if(typeof n=="number"){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:n===0?"VALID":"NUMBER"};const g=RC([t,e,s,1],a,1,o,n,u);d=g[0],p=g[1],f=g[2]}else if(n==="same"){d=Math.ceil(t/o),p=Math.ceil(e/r),f=Math.ceil(s/i);const m=(d-1)*o+a-t,g=(p-1)*r+l-e,x=(f-1)*i+c-s,b=Math.floor(m/2),w=m-b,y=Math.floor(g/2),$=g-y,C=Math.floor(x/2),v=x-C;h={top:y,bottom:$,left:C,right:v,front:b,back:w,type:"SAME"}}else if(n==="valid")h={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},d=Math.ceil((t-a+1)/o),p=Math.ceil((e-l+1)/r),f=Math.ceil((s-c+1)/i);else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:h,outDepth:d,outHeight:p,outWidth:f}}function lo(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function xo(n){const[t,e,s]=Ua(n);return t===1&&e===1&&s===1}function _e(n,t){return xo(n)||xo(t)}function fs(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function He(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")I(Zo(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(o=>{I(Zo(o),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${o}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}function FC(n,t){const s={x:S(n,"x","reshape","string_or_numeric")},o={shape:t};return D.runKernel(Jl,s,o)}const _=A({reshape_:FC});function _C(n,t,e,s,o){const r=S(n,"x","avgPool","float32"),i=1;I(_e(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=r,l=!1;r.rank===3&&(l=!0,a=_(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),He("avgPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o};let h=D.runKernel(fl,c,u);return h=st(h,r.dtype),l?_(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const sd=A({avgPool_:_C});function OC(n,t,e,s,o,r="NDHWC"){const i=S(n,"x","avgPool3d","float32");let a=i,l=!1;i.rank===4&&(l=!0,a=_(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),I(r==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),He("avgPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r};let h=D.runKernel(ml,c,u);return h=st(h,a.dtype),l?_(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const LC=A({avgPool3d_:OC});function MC(n,t=0){I(n.length>=1,()=>"Pass at least one tensor to concat");const e=pg(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(r=>{if(r.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${r.dtype}. `)}),e.length===1)return ao(e[0]);const s=e,o={axis:t};return D.runKernel(yl,s,o)}const Ae=A({concat_:MC});function PC(n){const e={x:S(n,"x","sigmoid","float32")};return D.runKernel(Mi,e)}const dr=A({sigmoid_:PC});function zC(n,t,e){const s=S(n,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const o={x:s},r={begin:t,size:e};return D.runKernel(sc,o,r)}const _t=A({slice_:zC});function BC(n){const e={x:S(n,"x","tanh","float32")};return D.runKernel(Ui,e)}const od=A({tanh_:BC});function VC(n,t,e){const s=S(n,"x","batchToSpaceND"),o=t.reduce((a,l)=>a*l);I(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),I(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),I(s.shape[0]%o===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);const r={x:s},i={blockShape:t,crops:e};return D.runKernel(xl,r,i)}const rd=A({batchToSpaceND_:VC});function WC(n){let t;return n.rank===0||n.rank===1?t=_(n,[1,1,1,n.size]):n.rank===2?t=_(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=_(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}function UC(n,t,e,s,o,r){r==null&&(r=.001);const i=S(n,"x","batchNorm"),a=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");let c;o!=null&&(c=S(o,"scale","batchNorm"));let u;s!=null&&(u=S(s,"offset","batchNorm")),I(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const d={x:WC(i),scale:c,offset:u,mean:a,variance:l},p={varianceEpsilon:r},f=D.runKernel(Tl,d,p);return _(f,i.shape)}const fc=A({batchNorm_:UC});function GC(n,t,e,s,o,r){const i=S(n,"x","batchNorm"),a=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");let c;o!=null&&(c=S(o,"scale","batchNorm"));let u;return s!=null&&(u=S(s,"offset","batchNorm")),I(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),I(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),I(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),fc(i,a,l,u,c,r)}const HC=A({batchNorm2d_:GC});function qC(n,t,e,s,o,r){const i=S(n,"x","batchNorm"),a=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");let c;o!=null&&(c=S(o,"scale","batchNorm"));let u;return s!=null&&(u=S(s,"offset","batchNorm")),I(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),I(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),I(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),fc(i,a,l,u,c,r)}const jC=A({batchNorm3d_:qC});function KC(n,t,e,s,o,r){const i=S(n,"x","batchNorm"),a=S(t,"mean","batchNorm"),l=S(e,"variance","batchNorm");let c;o!=null&&(c=S(o,"scale","batchNorm"));let u;return s!=null&&(u=S(s,"offset","batchNorm")),I(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),I(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),I(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&I(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&I(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),fc(i,a,l,u,c,r)}const XC=A({batchNorm4d_:KC});function YC(n,t,e){const s=S(n,"x","bincount"),o=S(t,"weights","bincount");I(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),I(e>=0,()=>`size must be non-negative, but got ${e}.`),I(o.size===s.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${o.shape}.`);const r={x:s,weights:o},i={size:e};return D.runKernel(rh,r,i)}const ZC=A({bincount_:YC});function JC(n,t){let e=S(n,"broadcastTo","x");const s=e.shape;if(ds(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=_(e,c)}const o=e.shape,r=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])r[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(r.map((c,u)=>c>1?u:-1).filter(c=>c>=0).length===0)return ao(e);const a={x:e},l={reps:r};return D.runKernel(Gi,a,l)}const Lr=A({broadcastTo_:JC});function QC(n){const e={x:S(n,"x","ceil","float32")};return D.runKernel(ri,e)}const tI=A({ceil_:QC});function Yi(n,t,e){ds(n);const s={shape:n,value:t,dtype:e};return D.runKernel(bh,{},s)}function eI(n,t,e){const s=S(n,"x","clipByValue");if(I(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Yi(s.shape,t,s.dtype);const o={x:s},r={clipValueMin:t,clipValueMax:e};return D.runKernel(ii,o,r)}const cn=A({clipByValue_:eI});function nI(n){return Ae(n,0)}const sI=A({concat1d_:nI});function oI(n,t){return Ae(n,t)}const rI=A({concat2d_:oI});function iI(n,t){return Ae(n,t)}const aI=A({concat3d_:iI});function lI(n,t){return Ae(n,t)}const cI=A({concat4d_:lI});function uI(n,t,e,s,o="NHWC",r=[1,1],i){const a=S(n,"x","conv2d","float32"),l=S(t,"filter","conv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=_(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),I(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),He("conv2d",s,i);const h=o==="NHWC"?c.shape[3]:c.shape[1];I(h===l.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${l.shape[2]}.`),I(_e(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=D.runKernel(wl,d,p);return u?_(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const bo=A({conv2d_:uI});function hI(n,t,e,s,o="NWC",r=1,i){const a=S(n,"x","conv1d"),l=S(t,"filter","conv1d");let c=a,u=!1;a.rank===2&&(u=!0,c=_(a,[1,a.shape[0],a.shape[1]])),I(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),I(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),He("conv1d",s,i),I(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),I(_e(e,r),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${r}'`),I(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);const h=_(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=_(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=bo(d,h,[1,e],s,"NHWC",[1,r],i);return u?_(g,[g.shape[2],g.shape[3]]):_(g,[g.shape[0],g.shape[2],g.shape[3]])}const Mg=A({conv1d_:hI});function dI(n,t,e,s,o,r="NHWC",i){I(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let a=n,l=t,c=!1;t.rank===3&&(c=!0,l=_(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,n[0],n[1],n[2]]),I(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),I(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),I(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const u=r==="NHWC"?a[3]:a[1],h=r==="NHWC"?l.shape[3]:l.shape[1];I(u===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[2]}.`),I(h===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${e.shape[3]}.`),He("conv2dDerInput",o,i);const d={dy:l,filter:e},p={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,inputShape:a},f=D.runKernel($l,d,p);return c?_(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const id=A({conv2DBackpropInput_:dI});function pI(n,t,e,s,o,r){const i=S(n,"x","conv2dTranspose"),a=S(t,"filter","conv2dTranspose");return id(e,i,a,s,o,"NHWC",r)}const Pg=A({conv2dTranspose_:pI});function fI(n,t,e,s,o="NDHWC",r=[1,1,1]){const i=S(n,"x","conv3d"),a=S(t,"filter","conv3d");let l=i,c=!1;i.rank===4&&(c=!0,l=_(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),I(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),I(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),I(_e(e,r),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`),I(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`);const u={x:l,filter:a},h={strides:e,pad:s,dataFormat:o,dilations:r},d=D.runKernel(Cl,u,h);return c?_(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const mI=A({conv3d_:fI});function gI(n,t,e,s,o){I(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let r=n,i=t,a=!1;t.rank===4&&(a=!0,i=_(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),r=[1,n[0],n[1],n[2],n[3]]);const l=r[4],c=i.shape[4];I(r.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${r.length}.`),I(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),I(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),I(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),I(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const u={dy:i,filter:e},h={pad:o,strides:s,inputShape:r},d=D.runKernel(ch,u,h);return a?_(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}const zg=A({conv3DBackpropInput_:gI});function xI(n,t,e,s,o){const r=S(n,"x","conv3dTranspose"),i=S(t,"filter","conv3dTranspose");return zg(e,r,i,s,o)}const bI=A({conv3dTranspose_:xI});function yI(n){const e={x:S(n,"x","cos","float32")};return D.runKernel(ai,e)}const ad=A({cos_:yI});function wI(n){const e={x:S(n,"x","cosh","float32")};return D.runKernel(li,e)}const Bg=A({cosh_:wI});function $I(n,t=0,e=!1,s=!1){const r={x:S(n,"x","cumprod")},i={axis:t,exclusive:e,reverse:s};return D.runKernel(uh,r,i)}const Du=A({cumprod_:$I});function CI(n,t=0,e=!1,s=!1){const r={x:S(n,"x","cumsum")},i={axis:t,exclusive:e,reverse:s};return D.runKernel(Il,r,i)}const Vg=A({cumsum_:CI});function II(n,t,e,s=!1){const o=S(n,"x","denseBincount"),r=S(t,"weights","denseBincount");I(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),I(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),I(e>=0,()=>`size must be non-negative, but got ${e}.`),I(r.size===o.size||r.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${r.shape}.`);const i={x:o,weights:r},a={size:e,binaryOutput:s};return D.runKernel(dh,i,a)}const pf=A({denseBincount_:II});function vI(n,t,e="NHWC"){const s=S(n,"x","depthToSpace","float32"),o=e==="NHWC"?s.shape[1]:s.shape[2],r=e==="NHWC"?s.shape[2]:s.shape[3],i=e==="NHWC"?s.shape[3]:s.shape[1];I(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),I(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${s.shape}`),I(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t} for depthToSpace with input shape
        ${s.shape}`),I(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${s.shape}`);const a={x:s},l={blockSize:t,dataFormat:e};return D.runKernel(ph,a,l)}const kI=A({depthToSpace_:vI});function SI(n,t,e,s,o="NHWC",r=[1,1],i){const a=S(n,"x","depthwiseConv2d","float32"),l=S(t,"filter","depthwiseConv2d","float32");let c=a,u=!1;a.rank===3&&(u=!0,c=_(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),I(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const h=o==="NHWC"?c.shape[3]:c.shape[1];I(h===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${l.shape[2]}.`),He("depthwiseConv2d",s,i);const d={x:c,filter:l},p={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i},f=D.runKernel(vl,d,p);return u?_(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const ld=A({depthwiseConv2d_:SI});function NI(n,t,e,s,o=[1,1],r="NHWC"){const i=S(n,"x","dilation2d"),a=S(t,"filter","dilation2d");I(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),I(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),I(r==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${r}`);let l=i,c=!1;i.rank===3&&(l=_(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0);const u={x:l,filter:a},h={strides:e,pad:s,dilations:o},d=D.runKernel(kl,u,h);return c?_(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const TI=A({dilation2d_:NI});function EI(n,t){let e=S(n,"a","equal","string_or_numeric"),s=S(t,"b","equal","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Sl,o)}const ns=A({equal_:EI});function RI(n,t,e){const s=S(t,"a","where"),o=S(e,"b","where"),r=S(n,"condition","where","bool"),i=bt(bt(r.shape,s.shape),o.shape),a=Lr(r,i),l=Lr(s,i),c=Lr(o,i),u={condition:a,t:l,e:c};return D.runKernel(nc,u)}const Qe=A({where_:RI});function DI(n){const e={x:S(n,"x","zerosLike")};return D.runKernel(uc,e)}const St=A({zerosLike_:DI});function AI(n,t){let e=S(n,"a","div"),s=S(t,"b","div");[e,s]=se(e,s);const o=dt(e,s),r=St(o),i=ns(s,r);return Qe(i,r,o)}const FI=A({divNoNan_:AI});function _I(n,t){const e=S(n,"t1","dot"),s=S(t,"t2","dot");I((e.rank===1||e.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${s.rank}.`);const o=e.rank===1?e.size:e.shape[1],r=s.rank===1?s.size:s.shape[0];if(I(o===r,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${r}.`),e.rank===1&&s.rank===1){const i=_(e,[1,-1]),a=_(s,[-1,1]),l=Et(i,a);return _(l,[])}else if(e.rank===1&&s.rank===2){const i=_(e,[1,-1]),a=_(s,[s.shape[0],s.shape[1]]),l=Et(i,a);return _(l,[l.size])}else if(e.rank===2&&s.rank===1){const i=_(s,[-1,1]),a=Et(e,i);return _(a,[a.size])}else{const i=_(s,[s.shape[0],s.shape[1]]);return Et(e,i)}}const OI=A({dot_:_I});function LI(n){const e={x:S(n,"x","elu","float32")};return D.runKernel(ui,e)}const mc=A({elu_:LI});function MI(n){let t=S(n,"x","erf");I(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=st(t,"float32"));const e={x:t};return D.runKernel(hi,e)}const PI=A({erf_:MI});function cd(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Wg(n,t,e){const s=n.length+t.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)e.indexOf(a)===-1?o.push(n[r++]):o.push(t[i++]);return o}function we(n,t){const e=[],s=n.length;for(let r=0;r<s;r++)t.indexOf(r)===-1&&e.push(n[r]);const o=t.map(r=>n[r]);return[e,o]}function oe(n,t){const e=t.map(s=>1);return Wg(n,e,t)}function Se(n,t,e){I(cd(t,e),()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function Zt(n,t){if(cd(n,t))return null;const e=[];for(let s=0;s<t;++s)n.indexOf(s)===-1&&e.push(s);return n.forEach(s=>e.push(s)),e}function zs(n){return n.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function re(n,t){const e=[];for(let s=t-n;s<t;++s)e.push(s);return e}function zI(n,t=null,e=!1){const o={x:S(n,"x","max")},r={reductionIndices:t,keepDims:e};return D.runKernel(Pl,o,r)}const On=A({max_:zI});function BI(n,t=null,e=!1){const o={x:S(n,"x","min")},r={axis:t,keepDims:e};return D.runKernel(Wl,o,r)}const Ga=A({min_:BI});function VI(n,t){let e=S(n,"base","pow"),s=S(t,"exp","pow");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(Ni,o)}const er=A({pow_:VI});function mt(n,t){if((es(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&es(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ji(n,[],[],t)}function WI(n){const e={x:S(n,"x","sqrt","float32")};return D.runKernel(zi,e)}const Me=A({sqrt_:WI});function UI(n){const t=S(n,"x","square"),e={};return D.runKernel("Square",{x:t},e)}const zt=A({square_:UI});function GI(n,t=null,e=!1){let s=S(n,"x","sum");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return D.runKernel(oc,o,r)}const lt=A({sum_:GI});function HI(n,t="euclidean",e=null,s=!1){n=S(n,"x","norm");const o=Ug(n,t,e);let r=o.shape;if(s){const i=Ct(e,n.shape);r=oe(o.shape,i)}return _(o,r)}function Ug(n,t,e=null){if(n.rank===0)return ge(n);if(n.rank!==1&&e===null)return Ug(_(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return lt(ge(n),e);if(t===1/0)return On(ge(n),e);if(t===-1/0)return Ga(ge(n),e);if(t==="euclidean"||t===2)return Me(lt(er(ge(n),mt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return On(lt(ge(n),e[0]),e[1]-1);if(t===1/0)return On(lt(ge(n),e[1]),e[0]);if(t===-1/0)return Ga(lt(ge(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Me(lt(zt(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const gc=A({norm_:HI});function qI(n,t=null,e=!1){return gc(n,"euclidean",t,e)}const jI=A({euclideanNorm_:qI});function KI(n){const e={x:S(n,"x","exp")};return D.runKernel(di,e)}const $n=A({exp_:KI});function XI(n,t=0){const e=S(n,"x","expandDims","string_or_numeric");I(t<=e.rank,()=>"Axis must be <= rank of the tensor");const s={input:e},o={dim:t};return D.runKernel(Nl,s,o)}const Ke=A({expandDims_:XI});function YI(n){const e={x:S(n,"x","expm1")};return D.runKernel(pi,e)}const ZI=A({expm1_:YI});function JI(n,t){const e=S(n,"x","tile","string_or_numeric");I(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const s={x:e},o={reps:t};return D.runKernel(Gi,s,o)}const Fn=A({tile_:JI});function QI(n,t,e,s="float32"){t==null&&(t=n);const o=$t([n,t],s),r=n<=t?n:t;for(let a=0;a<r;++a)o.set(1,a,a);const i=_(o.toTensor(),[n,t]);if(e==null)return i;if(e.length===1)return Fn(Ke(i,0),[e[0],1,1]);if(e.length===2)return Fn(Ke(Ke(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return Fn(Ke(Ke(Ke(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const Gg=A({eye_:QI});function tv(n){const e={x:S(n,"x","floor","float32")};return D.runKernel(fi,e)}const xc=A({floor_:tv});function ev(n,t,e=0,s=0){const o=S(n,"x","gather"),r=S(t,"indices","gather","int32"),i={x:o,indices:r},a={axis:e,batchDims:s};return D.runKernel(El,i,a)}const ud=A({gather_:ev});function nv(n,t){let e=S(n,"a","greater","string_or_numeric"),s=S(t,"b","greater","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Rl,o)}const un=A({greater_:nv});function sv(n,t){let e=S(n,"a","greaterEqual","string_or_numeric"),s=S(t,"b","greaterEqual","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(gi,o)}const Eo=A({greaterEqual_:sv});function ov(n){const e={x:S(n,"x","isFinite")};return D.runKernel(bi,e)}const rv=A({isFinite_:ov});function iv(n){const e={x:S(n,"x","isInf")};return D.runKernel(yi,e)}const av=A({isInf_:iv});function lv(n){const e={x:S(n,"x","isNaN")};return D.runKernel(wi,e)}const cv=A({isNaN_:lv});function uv(n,t=.2){const s={x:S(n,"x","leakyRelu")},o={alpha:t};return D.runKernel(Dl,s,o)}const hd=A({leakyRelu_:uv});function hv(n,t){let e=S(n,"a","less","string_or_numeric"),s=S(t,"b","less","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Al,o)}const Hg=A({less_:hv});function dv(n,t){let e=S(n,"a","lessEqual","string_or_numeric"),s=S(t,"b","lessEqual","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Fl,o)}const pr=A({lessEqual_:dv});function pv(n,t=5,e=1,s=1,o=.5){const r=S(n,"x","localResponseNormalization");I(r.rank===4||r.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${r.rank}.`),I(Zo(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=r,a=!1;r.rank===3&&(a=!0,i=_(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const l={x:i},c={depthRadius:t,bias:e,alpha:s,beta:o},u=D.runKernel(Ml,l,c);return a?_(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const fv=A({localResponseNormalization_:pv});function mv(n){const e={x:S(n,"x","log","float32")};return D.runKernel($i,e)}const Cn=A({log_:mv});function gv(n){const e={x:S(n,"x","log1p")};return D.runKernel(Ci,e)}const dd=A({log1p_:gv});function xv(n,t){I(uu(n),()=>"The f passed in variableGrads(f) must be a function"),I(t==null||Array.isArray(t)&&t.every(c=>c instanceof Ba),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const e=t!=null;if(!e){t=[];for(const c in D.registeredVariables)t.push(D.registeredVariables[c])}const s=e?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),I(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);const r=!0,{value:i,grads:a}=D.gradients(n,t,null,r);I(a.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),I(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);const l={};return t.forEach((c,u)=>{a[u]!=null&&(l[c.name]=a[u])}),s!=null&&s.forEach(c=>l[c.name]=null),{value:i,grads:l}}function yo(n){return D.customGrad(n)}function bv(n){const e={x:S(n,"x","softplus")};return D.runKernel(Pi,e)}const Zi=A({softplus_:bv});function yv(n){const t=S(n,"x","logSigmoid");return yo(s=>({value:Yt(Zi(Yt(s))),gradFunc:i=>E(i,dr(Yt(s)))}))(t)}const wv=A({logSigmoid_:yv});function $v(n,t){let e=S(n,"a","sub"),s=S(t,"b","sub");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(Vi,o)}const ct=A({sub_:$v});function Cv(n,t=-1){const e=S(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return yo((o,r)=>{const a=On(o,t,!0),l=ct(o,a),c=ct(st(l,"float32"),Cn(lt($n(l),t,!0)));return r([c]),{value:c,gradFunc:(h,d)=>{const[p]=d,f=!0,m=$n(p);return ct(h,E(lt(h,t,f),m))}}})(e)}const qg=A({logSoftmax_:Cv});function Iv(n,t=null,e=!1){const s=S(n,"x","logSumExp"),o=Ct(t,s.shape),r=On(s,o,!0),i=ct(s,r),a=$n(i),l=lt(a,o),c=Cn(l),u=Y(_(r,c.shape),c);if(e){const h=oe(u.shape,o);return _(u,h)}return u}const jg=A({logSumExp_:Iv});function vv(n,t){const e=S(n,"a","logicalAnd","bool"),s=S(t,"b","logicalAnd","bool");bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(_l,o)}const us=A({logicalAnd_:vv});function kv(n){const e={x:S(n,"x","logicalNot","bool")};return D.runKernel(Ol,e)}const pd=A({logicalNot_:kv});function Sv(n,t){const e=S(n,"a","logicalOr","bool"),s=S(t,"b","logicalOr","bool");bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Ll,o)}const Kg=A({logicalOr_:Sv});function Nv(n,t){const e=S(n,"a","logicalXor","bool"),s=S(t,"b","logicalXor","bool");return bt(e.shape,s.shape),us(Kg(n,t),pd(us(n,t)))}const Tv=A({logicalXor_:Nv});function Ev(n,t,e,s,o){const r=S(n,"x","maxPool"),i=1;let a=r,l=!1;r.rank===3&&(l=!0,a=_(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),I(_e(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),He("maxPool",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o},h=D.runKernel(zl,c,u);return l?_(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const fd=A({maxPool_:Ev});function Rv(n,t=[1,1,1],e,s,o,r="NDHWC"){const i=S(n,"x","maxPool3d");let a=i,l=!1;i.rank===4&&(l=!0,a=_(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),I(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),I(r==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${r}`),He("maxPool3d",s,o);const c={x:a},u={filterSize:t,strides:e,pad:s,dimRoundingMode:o,dataFormat:r},h=D.runKernel(Bl,c,u);return l?_(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Dv=A({maxPool3d_:Rv});function Av(n,t){let e=S(n,"a","maximum"),s=S(t,"b","maximum");[e,s]=se(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Ii,o)}const Bs=A({maximum_:Av});function Fv(n,t=null,e=!1){const o={x:S(n,"x","mean")},r={axis:t,keepDims:e};return D.runKernel(Vl,o,r)}const ne=A({mean_:Fv});function be(n,t="float32"){if(ds(n),t==="complex64"){const s=be(n,"float32"),o=be(n,"float32");return po(s,o)}const e=Fe(H(n),t);return D.makeTensor(e,n,t)}function Vs(n,t="float32"){if(ds(n),t==="complex64"){const s=Vs(n,"float32"),o=be(n,"float32");return po(s,o)}const e=Ju(H(n),t);return D.makeTensor(e,n,t)}function _v(n,t){let e=S(n,"a","minimum"),s=S(t,"b","minimum");[e,s]=se(e,s),e.dtype==="bool"&&(e=st(e,"int32"),s=st(s,"int32")),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(vi,o)}const bc=A({minimum_:_v});function Ov(n,t,e){I(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const s=S(n,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");I(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const o=e==="reflect"?1:0;for(let a=0;a<s.rank;a++)I(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),I(t[a][0]>=0&&t[a][0]<=s.shape[a]-o&&t[a][1]>=0&&t[a][1]<=s.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${s.shape[a]-o} or less than 0 for input of shape ${s.shape}`);const r={paddings:t,mode:e},i={x:s};return D.runKernel(Ul,i,r)}const Lv=A({mirrorPad_:Ov});function Mv(n,t){let e=S(n,"a","mod"),s=S(t,"b","mod");[e,s]=se(e,s);const o={a:e,b:s};return D.runKernel(ki,o)}const Pv=A({mod_:Mv});function zv(n,t=null,e=!1){n=S(n,"x","moments");const s=Ct(t,n.shape),o=ne(n,s,e);let r=o.shape;e||(r=oe(o.shape,s));const i=zt(ct(st(n,"float32"),_(o,r))),a=ne(i,s,e);return{mean:o,variance:a}}const md=A({moments_:zv});function Bv(n,t){let e=S(n,"a","notEqual","string_or_numeric"),s=S(t,"b","notEqual","string_or_numeric");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s};return D.runKernel(Hl,o)}const zr=A({notEqual_:Bv});function Vv(n){const e={x:S(n,"x","onesLike")};return D.runKernel(ql,e)}const In=A({onesLike_:Vv});function Wv(n,t,e=0){const s=S(n,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},r={x:s};return D.runKernel(Xl,r,o)}const gd=A({pad_:Wv});function Uv(n,t,e){const s=S(n,"x","spaceToBatchND");I(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),I(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),I(s.shape.reduce((i,a,l)=>l>0&&l<=t.length?i&&(a+e[l-1][0]+e[l-1][1])%t[l-1]===0:i,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const o={x:s},r={blockShape:t,paddings:e};return D.runKernel(rc,o,r)}const xd=A({spaceToBatchND_:Uv});function Gv(n,t,e,s,o,r,i){o==null&&(o=[1,1]),r==null&&(r=1),s===0&&(s="valid");const a=S(n,"x","maxPool");let l=a,c=!1;a.rank===3&&(c=!0,l=_(a,[1,a.shape[0],a.shape[1],a.shape[2]])),I(_e(r,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${r} and dilations '${o}'`);const u=kn(l.shape,t,r,o,s),h=[u.dilationHeight,u.dilationWidth];let d;s==="same"?d=qv([u.filterHeight,u.filterWidth],h):d=[[0,0],[0,0]];const p=h[0]===1&&h[1]===1,[f,m]=Hv([u.inHeight,u.inWidth],h,d),g=p?s:"valid",x=p?l:xd(l,h,f),w=(e==="avg"?()=>sd(x,t,r,g,i):()=>fd(x,t,r,g,i))(),y=p?w:rd(w,h,m);return c?_(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function Hv(n,t,e){const s=e.map(u=>u[0]),o=e.map(u=>u[1]),r=n.concat(s,o),i=t.map((u,h)=>(u-r[h]%u)%u),a=o.map((u,h)=>u+i[h]),l=t.map((u,h)=>[s[h],a[h]]),c=t.map((u,h)=>[0,i[h]]);return[l,c]}function qv(n,t){const s=n.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),o=s.map(i=>Math.floor(i/2)),r=s.map((i,a)=>i-o[a]);return s.map((i,a)=>[o[a],r[a]])}const jv=A({pool_:Gv});function Kv(n,t){const e=S(n,"x","prelu"),s=S(t,"alpha","prelu"),o={x:e,alpha:s};return D.runKernel(Yl,o)}const bd=A({prelu_:Kv});function Xv(n,t=null,e=!1){let s=S(n,"x","prod");s.dtype==="bool"&&(s=st(s,"int32"));const o={x:s},r={axis:t,keepDims:e};return D.runKernel(Zl,o,r)}const Yv=A({prod_:Xv});var Xg={exports:{}};(function(n){(function(t,e,s){function o(l){var c=this,u=a();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=u(" "),c.s1=u(" "),c.s2=u(" "),c.s0-=u(l),c.s0<0&&(c.s0+=1),c.s1-=u(l),c.s1<0&&(c.s1+=1),c.s2-=u(l),c.s2<0&&(c.s2+=1),u=null}function r(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function i(l,c){var u=new o(l),h=c&&c.state,d=u.next;return d.int32=function(){return u.next()*4294967296|0},d.double=function(){return d()+(d()*2097152|0)*11102230246251565e-32},d.quick=d,h&&(typeof h=="object"&&r(h,u),d.state=function(){return r(u,{})}),d}function a(){var l=4022871197,c=function(u){u=String(u);for(var h=0;h<u.length;h++){l+=u.charCodeAt(h);var d=.02519603282416938*l;l=d>>>0,d-=l,d*=l,l=d>>>0,d-=l,l+=d*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.alea=i})(So,n,!1)})(Xg);var Yg={exports:{}};(function(n){(function(t,e,s){function o(a){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var h=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^h^h>>>8},a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xor128=i})(So,n,!1)})(Yg);var Zg={exports:{}};(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(h^h<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,a===(a|0)?l.x=a:c+=a;for(var u=0;u<c.length+64;u++)l.x^=c.charCodeAt(u)|0,u==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function r(a,l){return l.x=a.x,l.y=a.y,l.z=a.z,l.w=a.w,l.v=a.v,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xorwow=i})(So,n,!1)})(Zg);var Jg={exports:{}};(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.x,h=l.i,d,p;return d=u[h],d^=d>>>7,p=d^d<<24,d=u[h+1&7],p^=d^d>>>10,d=u[h+3&7],p^=d^d>>>3,d=u[h+4&7],p^=d^d<<7,d=u[h+7&7],d=d^d<<13,p^=d^d<<9,u[h]=p,l.i=h+1&7,p};function c(u,h){var d,p=[];if(h===(h|0))p[0]=h;else for(h=""+h,d=0;d<h.length;++d)p[d&7]=p[d&7]<<15^h.charCodeAt(d)+p[d+1&7]<<13;for(;p.length<8;)p.push(0);for(d=0;d<8&&p[d]===0;++d);for(d==8?p[7]=-1:p[d],u.x=p,u.i=0,d=256;d>0;--d)u.next()}c(l,a)}function r(a,l){return l.x=a.x.slice(),l.i=a.i,l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.x&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xorshift7=i})(So,n,!1)})(Jg);var Qg={exports:{}};(function(n){(function(t,e,s){function o(a){var l=this;l.next=function(){var u=l.w,h=l.X,d=l.i,p,f;return l.w=u=u+1640531527|0,f=h[d+34&127],p=h[d=d+1&127],f^=f<<13,p^=p<<17,f^=f>>>15,p^=p>>>12,f=h[d]=f^p,l.i=d,f+(u^u>>>16)|0};function c(u,h){var d,p,f,m,g,x=[],b=128;for(h===(h|0)?(p=h,h=null):(h=h+"\0",p=0,b=Math.max(b,h.length)),f=0,m=-32;m<b;++m)h&&(p^=h.charCodeAt((m+32)%h.length)),m===0&&(g=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,m>=0&&(g=g+1640531527|0,d=x[m&127]^=p+g,f=d==0?f+1:0);for(f>=128&&(x[(h&&h.length||0)&127]=-1),f=127,m=4*128;m>0;--m)p=x[f+34&127],d=x[f=f+1&127],p^=p<<13,d^=d<<17,p^=p>>>15,d^=d>>>12,x[f]=p^d;u.w=g,u.X=x,u.i=f}c(l,a)}function r(a,l){return l.i=a.i,l.w=a.w,l.X=a.X.slice(),l}function i(a,l){a==null&&(a=+new Date);var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(u.X&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.xor4096=i})(So,n,!1)})(Qg);var tx={exports:{}};(function(n){(function(t,e,s){function o(a){var l=this,c="";l.next=function(){var h=l.b,d=l.c,p=l.d,f=l.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,l.b=h=h<<20^h>>>12^d,l.c=d=d-p|0,l.d=p<<16^d>>>16^f,l.a=f-h|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,a===Math.floor(a)?(l.a=a/4294967296|0,l.b=a|0):c+=a;for(var u=0;u<c.length+20;u++)l.b^=c.charCodeAt(u)|0,l.next()}function r(a,l){return l.a=a.a,l.b=a.b,l.c=a.c,l.d=a.d,l}function i(a,l){var c=new o(a),u=l&&l.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=c.next()>>>11,p=(c.next()>>>0)/4294967296,f=(d+p)/(1<<21);while(f===0);return f},h.int32=c.next,h.quick=h,u&&(typeof u=="object"&&r(u,c),h.state=function(){return r(c,{})}),h}e&&e.exports?e.exports=i:s&&s.amd?s(function(){return i}):this.tychei=i})(So,n,!1)})(tx);var ex={exports:{}};const Zv={},Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Zv},Symbol.toStringTag,{value:"Module"})),Qv=Rw(Jv);(function(n){(function(t,e,s){var o=256,r=6,i=52,a="random",l=s.pow(o,r),c=s.pow(2,i),u=c*2,h=o-1,d;function p(y,$,C){var v=[];$=$==!0?{entropy:!0}:$||{};var k=x(g($.entropy?[y,w(e)]:y??b(),3),v),N=new f(v),T=function(){for(var F=N.g(r),z=l,M=0;F<c;)F=(F+M)*o,z*=o,M=N.g(1);for(;F>=u;)F/=2,z/=2,M>>>=1;return(F+M)/z};return T.int32=function(){return N.g(4)|0},T.quick=function(){return N.g(4)/4294967296},T.double=T,x(w(N.S),e),($.pass||C||function(F,z,M,L){return L&&(L.S&&m(L,N),F.state=function(){return m(N,{})}),M?(s[a]=F,z):F})(T,k,"global"in $?$.global:this==s,$.state)}function f(y){var $,C=y.length,v=this,k=0,N=v.i=v.j=0,T=v.S=[];for(C||(y=[C++]);k<o;)T[k]=k++;for(k=0;k<o;k++)T[k]=T[N=h&N+y[k%C]+($=T[k])],T[N]=$;(v.g=function(F){for(var z,M=0,L=v.i,O=v.j,B=v.S;F--;)z=B[L=h&L+1],M=M*o+B[h&(B[L]=B[O=h&O+z])+(B[O]=z)];return v.i=L,v.j=O,M})(o)}function m(y,$){return $.i=y.i,$.j=y.j,$.S=y.S.slice(),$}function g(y,$){var C=[],v=typeof y,k;if($&&v=="object")for(k in y)try{C.push(g(y[k],$-1))}catch{}return C.length?C:v=="string"?y:y+"\0"}function x(y,$){for(var C=y+"",v,k=0;k<C.length;)$[h&k]=h&(v^=$[h&k]*19)+C.charCodeAt(k++);return w($)}function b(){try{var y;return d&&(y=d.randomBytes)?y=y(o):(y=new Uint8Array(o),(t.crypto||t.msCrypto).getRandomValues(y)),w(y)}catch{var $=t.navigator,C=$&&$.plugins;return[+new Date,t,C,t.screen,w(e)]}}function w(y){return String.fromCharCode.apply(0,y)}if(x(s.random(),e),n.exports){n.exports=p;try{d=Qv}catch{}}else s["seed"+a]=p})(typeof self<"u"?self:So,[],Math)})(ex);var tk=Xg.exports,ek=Yg.exports,nk=Zg.exports,sk=Jg.exports,ok=Qg.exports,rk=tx.exports,Ro=ex.exports;Ro.alea=tk;Ro.xor128=ek;Ro.xorwow=nk;Ro.xorshift7=sk;Ro.xor4096=ok;Ro.tychei=rk;var yd=Ro;class nx{constructor(t,e,s,o,r){this.mean=t,this.stdDev=e,this.dtype=s,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const i=r||Math.random();this.random=yd.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const o=this.nextVal;return this.nextVal=NaN,o}let t,e,s=!1;for(;!s;){let o,r,i;do o=2*this.random()-1,r=2*this.random()-1,i=o*o+r*r;while(i>=1||i===0);const a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*o*a,e=this.mean+this.stdDev*r*a,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class ik{constructor(t=0,e=1,s,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=s,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=yd.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}function ak(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const r=new nx(t,e,s,!1,o),i=$t(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const lk=A({randomNormal_:ak});function ck(n,t=0,e=1,s="float32",o){ds(n);const r=$t(n,s),i=new ik(t,e,null,o);for(let a=0;a<r.values.length;a++)r.values[a]=i.nextValue();return r.toTensor()}const yc=A({randomUniform_:ck});function Br(n,t,e=1,s="float32"){if(e===0)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:s};return D.runKernel(Th,{},o)}function uk(n){const e={x:S(n,"x","reciprocal")};return D.runKernel(Ti,e)}const hk=A({reciprocal_:uk});function dk(n){const e={x:S(n,"x","relu")};return D.runKernel(Ei,e)}const ms=A({relu_:dk});function pk(n){const e={x:S(n,"x","relu6")};return D.runKernel(Ri,e)}const sx=A({relu6_:pk});function fk(n,t){const s={x:S(n,"x","reverse")},o={dims:t};return D.runKernel(ec,s,o)}const wo=A({reverse_:fk});function mk(n){const e={x:S(n,"x","round")};return D.runKernel(Di,e)}const ox=A({round_:mk});function gk(n){const e={x:S(n,"x","rsqrt","float32")};return D.runKernel(Ai,e)}const rx=A({rsqrt_:gk});function xk(n){const e={x:S(n,"x","selu")};return D.runKernel(Fi,e)}const ix=A({selu_:xk});function bk(n,t,e,s,o,r=[1,1],i="NHWC"){const a=S(n,"x","separableConv2d"),l=S(t,"depthwiseFilter","separableConv2d"),c=S(e,"pointwiseFilter","separableConv2d");let u=a,h=!1;if(a.rank===3&&(h=!0,u=_(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),I(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),I(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),I(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),I(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const d=l.shape[2],p=l.shape[3];I(c.shape[2]===d*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*p}, but got ${c.shape[2]}.`);const f=ld(u,l,s,o,i,r),g=bo(f,c,1,"valid",i);return h?_(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const ax=A({separableConv2d_:bk});function yk(n){const e={x:S(n,"x","sign")};return D.runKernel(Li,e)}const wk=A({sign_:yk});function $k(n){const e={x:S(n,"x","sin","float32")};return D.runKernel(_i,e)}const lx=A({sin_:$k});function Ck(n){const e={x:S(n,"x","sinh")};return D.runKernel(Oi,e)}const cx=A({sinh_:Ck});function Ik(n,t,e){const s=S(n,"x","slice1d");return I(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),_t(s,[t],[e])}const wd=A({slice1d_:Ik});function vk(n,t,e){const s=S(n,"x","slice2d");return I(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),_t(s,t,e)}const ux=A({slice2d_:vk});function kk(n,t,e){const s=S(n,"x","slice3d");return I(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),_t(s,t,e)}const $d=A({slice3d_:kk});function Sk(n,t,e){const s=S(n,"x","slice4d");return I(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),_t(s,t,e)}const Ha=A({slice4d_:Sk});function Nk(n,t=-1){const e=S(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const s={logits:e},o={dim:t};return D.runKernel(ac,s,o)}const Cd=A({softmax_:Nk});function Tk(n){I(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return D.runKernel(xh,t)}const hx=A({fft_:Tk});function Ek(n){I(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return D.runKernel(wh,t)}const Au=A({ifft_:Ek});function Rk(n){const t=n.shape[n.shape.length-1],e=n.size/t;let s;if(t<=2){const o=_(n,[e,t]);s=Au(o)}else{const o=[e,2*(t-1)],r=_(Wa(n),[e,t]),i=_(Xh(n),[e,t]),a=wo(_t(r,[0,1],[e,t-2]),1),l=E(wo(_t(i,[0,1],[e,t-2]),1),mt(-1)),c=Ae([r,a],1),u=Ae([i,l],1),h=_(po(c,u),[o[0],o[1]]);s=Au(h)}if(s=Wa(s),n.rank===3&&n.shape[0]!==0){const o=s,r=n.shape[0];s=_(s,[r,s.shape[0]/r,s.shape[1]]),o.dispose()}return s}const Dk=A({irfft_:Rk});function Ak(n,t,e=0){const o={x:S(n,"x","split")},r={numOrSizeSplits:t,axis:e};return D.runKernel(ic,o,r)}const an=A({split_:Ak});function Fk(n,t){I(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const s=n.size/e;let o;if(t!=null&&t<e){const f=n.shape.map(g=>0),m=n.shape.map(g=>g);m[n.shape.length-1]=t,o=_t(n,f,m),e=t}else if(t!=null&&t>e){const f=n.shape.map(m=>m);f[n.shape.length-1]=t-e,o=Ae([n,be(f)],n.shape.length-1),e=t}else o=n;const r=St(o),i=_(po(o,r),[s,e]),a=hx(i),l=Math.floor(e/2)+1,c=Wa(a),u=Xh(a),h=an(c,[l,e-l],c.shape.length-1),d=an(u,[l,e-l],u.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=l,_(po(h[0],d[0]),p)}const dx=A({rfft_:Fk});function _k(n,t){let e=S(n,"a","squaredDifference"),s=S(t,"b","squaredDifference");[e,s]=se(e,s),bt(e.shape,s.shape);const o={a:e,b:s},r={};return D.runKernel(Bi,o,r)}const px=A({squaredDifference_:_k});function Ok(n,t){const e=S(n,"x","squeeze","string_or_numeric");return _(e,Ls(e.shape,t).newShape)}const Ji=A({squeeze_:Ok});function Lk(n,t=0){const e=pg(n,"tensors","stack","string_or_numeric");I(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&I(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const s=e,o={axis:t};return D.runKernel(Kl,s,o)}const Rs=A({stack_:Lk});function Mk(n,t=0){const s={x:S(n,"x","step")},o={alpha:t};return D.runKernel(Hi,s,o)}const Qi=A({step_:Mk});function Pk(n,t,e,s,o=0,r=0,i=0,a=0,l=0){const u={x:S(n,"x","stridedSlice","string_or_numeric")},h={begin:t,end:e,strides:s,beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return D.runKernel(Mh,u,h)}const zk=A({stridedSlice_:Pk});function Bk(n){const e={x:S(n,"x","tan","float32")};return D.runKernel(Wi,e)}const Vk=A({tan_:Bk});function Ze(n,t){Zu(n);const e=qi(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ji(n,null,e,t)}function _a(n,t,e){if(Zu(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=qi(n,e);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ji(n,t,s,e)}function Wk(n,t=1,e=!0){const s=S(n,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const o=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const r={x:s},i={k:t,sorted:e},[a,l]=D.runKernel(Vh,r,i);return{values:a,indices:l}}const Uk=A({topk_:Wk});function Gk(n,t=0,e=1,s,o){if(ds(n),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const r=new nx(t,e,s,!0,o),i=$t(n,s);for(let a=0;a<i.values.length;a++)i.values[a]=r.nextValue();return i.toTensor()}const fx=A({truncatedNormal_:Gk});function Hk(n,t=0){const e=S(n,"x","unique","string_or_numeric");I(e.rank>0,()=>"The input tensor must be at least 1D");const s={x:e},o={axis:t},[r,i]=D.runKernel(Uh,s,o);return{values:r,indices:i}}const qk=A({unique_:Hk});function jk(n,t,e){const s=S(n,"x","unsortedSegmentSum"),o=S(t,"segmentIds","unsortedSegmentSum","int32");I(Zo(e),()=>"numSegments must be of dtype int");const r={x:s,segmentIds:o},i={numSegments:e};return D.runKernel(cc,r,i)}const mx=A({unsortedSegmentSum_:jk});function Kk(n,t=0){const e=S(n,"x","unstack","string_or_numeric");I(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const s={value:e},o={axis:t};return D.runKernel(lc,s,o)}const $o=A({unstack_:Kk});function Xk(n,t=!0,e,s){return D.makeVariable(n,t,e,s)}function gx(n,t){const e=[];for(let r=0;r<t.length;r++)t[r]&&e.push(r);const s=$t(n,"int32"),o=$t([e.length,n.length],"int32");for(let r=0;r<e.length;r++){const i=s.indexToLoc(e[r]),a=r*n.length;o.values.set(i,a)}return o.toTensor()}function Yk(n,t){if(t==null)return n.shape.slice();if(Rt(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let s=0;s<n.shape.length;s++)t[s]==null&&n.shape[s]!=null?e.push(n.shape[s]):e.push(t[s]);return e}return t}function Zk(n,t,e,s){const o=S(n,"x","dropout");if(I(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),I(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof ee?o.clone():o;const r=Yk(o,e),i=1-t,a=dt(xc(Y(yc(r,0,1,"float32",s),i)),i);return E(o,a)}const Jk=A({dropout_:Zk});function Qk(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function xx(n,t,e){const s=1-n%2,o=new Float32Array(n);for(let r=0;r<n;++r){const i=2*Math.PI*r/(n+s-1);o[r]=t-e*Math.cos(i)}return Ze(o,"float32")}function tS(n,t,e,s,o,r="NHWC",i){let a=n;n.rank===3&&(a=_(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=_(t,[1,t.shape[0],t.shape[1],t.shape[2]])),I(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),I(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),I(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=r==="NHWC"?a.shape[3]:a.shape[1],u=r==="NHWC"?l.shape[3]:l.shape[1];I(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),I(u===e[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${e[3]}).`),He("conv2dDerFilter",o,i);const h={x:a,dy:l},d={strides:s,pad:o,dataFormat:r,dimRoundingMode:i,filterShape:e};return D.runKernel(ah,h,d)}const Id=A({conv2DBackpropFilter_:tS});function vd(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return E(n,Qi(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function kd(n,t){let e=t;const s=me(n.shape,t.shape);return s.length>0&&(e=lt(e,s)),_(e,n.shape)}function Sd(n,t,e,s){if(t==="linear")return n;if(t==="relu")return ms(n);if(t==="elu")return mc(n);if(t==="relu6")return sx(n);if(t==="prelu")return bd(n,e);if(t==="leakyrelu")return hd(n,s);if(t==="sigmoid")return dr(n);throw new Error(`Unknown fused activation ${t}.`)}const Nd=(n,t)=>!(n>0)||t==="linear";function eS({x:n,filter:t,strides:e,pad:s,dataFormat:o="NHWC",dilations:r=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:u}){if(l=l||"linear",Nd(D.state.gradientDepth,l)===!1){I(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let C=bo(n,t,e,s,o,r,i);return a!=null&&(C=Y(C,a)),Sd(C,l,c,u)}const h=S(n,"x","conv2d","float32"),d=S(t,"filter","conv2d","float32");let p=h,f=!1;h.rank===3&&(f=!0,p=_(h,[1,h.shape[0],h.shape[1],h.shape[2]])),I(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),I(d.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`),He("fused conv2d",s,i);const m=o==="NHWC"?p.shape[3]:p.shape[1];I(d.shape[2]===m,()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${d.shape[2]}.`),I(_e(e,r),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${r}'`);const g=ke(p.shape,d.shape,e,r,s,i);let x;a!=null&&(x=S(a,"bias","fused conv2d"),[x]=se(x,h),o==="NHWC"?bt(g.outShape,x.shape):(I(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),I(x.shape.length===0||x.shape[0]===g.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let b;if(c!=null){const C=c.shape;if(I(C.length<=1||C.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${C.length}.`),C.length===1)I(C[0]===1||C[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the number of output channels (${g.outChannels}).`);else if(C.length===3)try{bt(C,g.outShape)}catch{const k=`Error in fused conv2d: PReLU activation weights (${C}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(k)}b=S(c,"prelu weights","fused conv2d")}const w=(C,v)=>{I(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);const[k,N,T,F]=v,z=vd(C,T,l);I(xo(r),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);const M=id(N.shape,z,k,e,s),L=Id(N,z,k.shape,e,s),O=[M,L];if(F!=null){const B=kd(F,z);O.push(B)}return O},y={x:p,filter:d,bias:x,preluActivationWeights:b},$={strides:e,pad:s,dataFormat:o,dilations:r,dimRoundingMode:i,activation:l,leakyreluAlpha:u};return a==null?yo((v,k,N)=>{let T=D.runKernel(Ma,y,$);return N([k,v,T]),f&&(T=_(T,[T.shape[1],T.shape[2],T.shape[3]])),{value:T,gradFunc:w}})(p,d):yo((v,k,N,T)=>{let F=D.runKernel(Ma,y,$);return T([k,v,F,N]),f&&(F=_(F,[F.shape[1],F.shape[2],F.shape[3]])),{value:F,gradFunc:w}})(p,d,x)}const nS=A({fusedConv2d_:eS});function sS(n,t,e,s,o,r=[1,1],i){let a=n;n.rank===3&&(a=_(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=_(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:a,dy:l},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,filterShape:e};return D.runKernel(fh,c,u)}const oS=A({depthwiseConv2dNativeBackpropFilter_:sS});function rS(n,t,e,s,o,r=[1,1],i){let a=t,l=!1;t.rank===3&&(l=!0,a=_(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:a,filter:e},u={strides:s,pad:o,dimRoundingMode:i,dilations:r,inputShape:n},h=D.runKernel(mh,c,u);return l?_(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const iS=A({depthwiseConv2dNativeBackpropInput_:rS});function aS({a:n,b:t,transposeA:e=!1,transposeB:s=!1,bias:o,activation:r="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Nd(D.state.gradientDepth,r)===!1){let F=Et(n,t,e,s);return o!=null&&(F=Y(F,o)),Sd(F,r,i,a)}let l=S(n,"a","fused matMul"),c=S(t,"b","fused matMul");[l,c]=se(l,c);const u=e?l.shape[l.rank-2]:l.shape[l.rank-1],h=s?c.shape[c.rank-1]:c.shape[c.rank-2],d=e?l.shape[l.rank-1]:l.shape[l.rank-2],p=s?c.shape[c.rank-2]:c.shape[c.rank-1],f=l.shape.slice(0,-2),m=c.shape.slice(0,-2),g=H(f),x=H(m);I(u===h,()=>`Error in fused matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${s} must match.`);const w=bt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([d,p]),y=e?_(l,[g,u,d]):_(l,[g,d,u]),$=s?_(c,[x,p,h]):_(c,[x,h,p]);let C;o!=null&&(C=S(o,"bias","fused matMul"),[C]=se(C,l),bt(w,C.shape));let v;i!=null&&(v=S(i,"prelu weights","fused matMul"));const k=(F,z)=>{const[M,L,O,B]=z,U=vd(_(F,O.shape),O,r);let W,q;if(!e&&!s?(W=Et(U,L,!1,!0),q=Et(M,U,!0,!1)):!e&&s?(W=Et(U,L,!1,!1),q=Et(U,M,!0,!1)):e&&!s?(W=Et(L,U,!1,!0),q=Et(M,U,!1,!1)):(W=Et(L,U,!0,!0),q=Et(U,M,!0,!0)),o!=null){const X=kd(B,U);return[W,q,X]}else return[W,q]},N={a:y,b:$,bias:C,preluActivationWeights:v},T={transposeA:e,transposeB:s,activation:r,leakyreluAlpha:a};return o==null?yo((z,M,L)=>{const O=D.runKernel(La,N,T);return L([z,M,O]),{value:_(O,w),gradFunc:k}})(y,$):yo((z,M,L,O)=>{const B=D.runKernel(La,N,T);return O([z,M,B,L]),{value:_(B,w),gradFunc:k}})(y,$,C)}const ff=A({fusedMatMul_:aS});function lS(n){return xx(n,.54,.46)}const Cq=A({hammingWindow_:lS});function cS(n){return xx(n,.5,.5)}const uS=A({hannWindow_:cS});function hS(n,t,e,s=!1,o=0){let r=0;const i=[];for(;r+t<=n.size;)i.push(_t(n,r,t)),r+=e;if(s)for(;r<n.size;){const a=r+t-n.size,l=Ae([_t(n,r,t-a),Yi([a],o)]);i.push(l),r+=e}return i.length===0?_a([],[0,t]):_(Ae(i),[i.length,t])}const dS=A({frame_:hS});function pS(n,t,e,s,o=uS){s==null&&(s=Qk(t));const r=dS(n,t,e),i=E(r,o(t));return dx(i,s)}const Iq=A({stft_:pS});function fS(n,t,e,s,o="bilinear",r=0){const i=S(n,"image","cropAndResize"),a=S(t,"boxes","cropAndResize","float32"),l=S(e,"boxInd","cropAndResize","int32"),c=a.shape[0];I(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),I(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),I(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),I(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),I(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),I(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);const u={image:i,boxes:a,boxInd:l},h={method:o,extrapolationValue:r,cropSize:s};return D.runKernel(hh,u,h)}const mS=A({cropAndResize_:fS});function gS(n){const t=S(n,"image","flipLeftRight","float32");I(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return D.runKernel(yh,e,{})}const xS=A({flipLeftRight_:gS});function bS(n){const t=S(n,"image","grayscaleToRGB"),e=t.rank-1,s=t.shape[e];I(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),I(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,Fn(t,o)}const yS=A({grayscaleToRGB_:bS});function wS(n,t,e=0,s=.5){const o=S(n,"image","rotateWithOffset","float32");I(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);const r={image:o},i={radians:t,fillValue:e,center:s};return D.runKernel(Gh,r,i)}const $S=A({rotateWithOffset_:wS});function fr(n,t,e,s,o,r){s==null&&(s=.5),o==null&&(o=Number.NEGATIVE_INFINITY),r==null&&(r=0);const i=n.shape[0];return e=Math.min(e,i),I(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),I(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),I(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),I(t.rank===1,()=>"scores must be a 1D tensor"),I(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),I(0<=r&&r<=1,()=>`softNmsSigma must be in [0, 1], but was '${r}'`),{maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r}}function CS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=S(n,"boxes","nonMaxSuppression","float32"),i=S(t,"scores","nonMaxSuppression","float32"),a=fr(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l={maxOutputSize:e,iouThreshold:s,scoreThreshold:o};return D.runKernel(kh,{boxes:r,scores:i},l)}const IS=A({nonMaxSuppression_:CS});function vS(n,t,e){const s=kS(n,t,e),o=s<0?-(s+1):s;n.splice(o,0,t)}function kS(n,t,e){return NS(n,t,e||SS)}function SS(n,t){return n>t?1:n<t?-1:0}function NS(n,t,e){let s=0,o=n.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=e(t,n[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}function Td(n,t,e,s,o){return Dd(n,t,e,s,o,0)}function Ed(n,t,e,s,o,r){return Dd(n,t,e,s,o,0,!1,r,!0)}function Rd(n,t,e,s,o,r){return Dd(n,t,e,s,o,r,!0)}function Dd(n,t,e,s,o,r,i=!1,a=!1,l=!1){const c=[];for(let g=0;g<t.length;g++)t[g]>o&&c.push({score:t[g],boxIndex:g,suppressBeginIndex:0});c.sort(mf);const u=r>0?-.5/r:0,h=[],d=[];for(;h.length<e&&c.length>0;){const g=c.pop(),{score:x,boxIndex:b,suppressBeginIndex:w}=g;if(x<o)break;let y=!1;for(let $=h.length-1;$>=w;--$){const C=TS(n,b,h[$]);if(C>=s){y=!0;break}if(g.score=g.score*ES(s,u,C),g.score<=o)break}g.suppressBeginIndex=h.length,y||(g.score===x?(h.push(b),d.push(g.score)):g.score>o&&vS(c,g,mf))}const p=h.length,f=e-p;a&&f>0&&(h.push(...new Array(f).fill(0)),d.push(...new Array(f).fill(0)));const m={selectedIndices:h};return i&&(m.selectedScores=d),l&&(m.validOutputs=p),m}function TS(n,t,e){const s=n.subarray(t*4,t*4+4),o=n.subarray(e*4,e*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),l=Math.max(s[1],s[3]),c=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(a-r)*(l-i),f=(h-c)*(d-u);if(p<=0||f<=0)return 0;const m=Math.max(r,c),g=Math.max(i,u),x=Math.min(a,h),b=Math.min(l,d),w=Math.max(x-m,0)*Math.max(b-g,0);return w/(p+f-w)}function ES(n,t,e){const s=Math.exp(t*e*e);return e<=n?s:0}function mf(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}async function RS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY){const r=S(n,"boxes","nonMaxSuppressionAsync"),i=S(t,"scores","nonMaxSuppressionAsync"),a=fr(r,i,e,s,o);e=a.maxOutputSize,s=a.iouThreshold,o=a.scoreThreshold;const l=await Promise.all([r.data(),i.data()]),c=l[0],u=l[1],{selectedIndices:h}=Td(c,u,e,s,o);return r!==n&&r.dispose(),i!==t&&i.dispose(),Ze(h,"int32")}const DS=RS;function AS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=S(n,"boxes","nonMaxSuppression"),a=S(t,"scores","nonMaxSuppression"),l=fr(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c={boxes:i,scores:a},u={maxOutputSize:e,iouThreshold:s,scoreThreshold:o,softNmsSigma:r},h=D.runKernel(Nh,c,u);return{selectedIndices:h[0],selectedScores:h[1]}}const FS=A({nonMaxSuppressionWithScore_:AS});async function _S(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=0){const i=S(n,"boxes","nonMaxSuppressionAsync"),a=S(t,"scores","nonMaxSuppressionAsync"),l=fr(i,a,e,s,o,r);e=l.maxOutputSize,s=l.iouThreshold,o=l.scoreThreshold,r=l.softNmsSigma;const c=await Promise.all([i.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:d,selectedScores:p}=Rd(u,h,e,s,o,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ze(d,"int32"),selectedScores:Ze(p)}}const OS=_S;function LS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=S(n,"boxes","nonMaxSuppression"),a=S(t,"scores","nonMaxSuppression"),l=fr(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,d={boxes:i,scores:a},p={maxOutputSize:c,iouThreshold:u,scoreThreshold:h,padToMaxOutputSize:r},f=D.runKernel(Sh,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}const MS=A({nonMaxSuppressionPadded_:LS});async function PS(n,t,e,s=.5,o=Number.NEGATIVE_INFINITY,r=!1){const i=S(n,"boxes","nonMaxSuppressionAsync"),a=S(t,"scores","nonMaxSuppressionAsync"),l=fr(i,a,e,s,o,null),c=l.maxOutputSize,u=l.iouThreshold,h=l.scoreThreshold,[d,p]=await Promise.all([i.data(),a.data()]),{selectedIndices:f,validOutputs:m}=Ed(d,p,c,u,h,r);return i!==n&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:Ze(f,"int32"),validOutputs:mt(m,"int32")}}const zS=PS;function BS(n,t,e=!1,s=!1){const o=S(n,"images","resizeBilinear");I(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),I(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),I(s===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=_(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=D.runKernel(tc,a,l);return i?_(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const bx=A({resizeBilinear_:BS});function VS(n,t,e=!1,s=!1){const o=S(n,"images","resizeNearestNeighbor");I(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),I(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),I(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),I(s===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let r=o,i=!1;o.rank===3&&(i=!0,r=_(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const a={images:r},l={alignCorners:e,halfPixelCenters:s,size:t},c=D.runKernel(Ql,a,l);return i?_(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const yx=A({resizeNearestNeighbor_:VS});function WS(n,t="binary",e=!1,s=.5){const o=S(n,"image","threshold"),r=.2989,i=.587,a=.114,l=o.shape[0]*o.shape[1];let c=E(Ze([s]),255),u,h,d,p;if(I(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),I(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),I(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),I(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[u,h,d]=an(o,[1,1,1],-1);const g=E(u,r),x=E(h,i),b=E(d,a);p=Y(Y(g,x),b)}else p=n;if(t==="otsu"){const g=ZC(st(ox(p),"int32"),Or([]),256);c=US(g,l)}const f=e?pr(p,c):un(p,c);return st(E(f,255),"int32")}function US(n,t){let e=Ze([-1]),s=Ze([0]),o=Ze([0]),r,i,a,l,c,u;for(let h=0;h<n.size-1;h++){r=_t(n,0,h+1),i=_t(n,h+1),c=dt(lt(r),t),u=dt(lt(i),t);const d=lt(E(r,Br(0,r.size)));a=dt(d,lt(r));const p=Yi(i.shape,r.size),f=Y(Br(0,i.size),p),m=E(i,f);l=dt(lt(m),lt(i));const g=ct(a,l),x=ct(a,l),b=E(c,u);o=E(E(b,g),x);const w=un(o,s);s=Qe(w,o,s),e=Qe(w,Ze([h]),e)}return e}const GS=A({threshold_:WS});function HS(n,t,e="nearest",s="constant",o=0,r){const i=S(n,"image","transform","float32"),a=S(t,"transforms","transform","float32");I(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),I(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),I(r==null||r.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${r}.`);const l={image:i,transforms:a},c={interpolation:e,fillMode:s,fillValue:o,outputShape:r};return D.runKernel(Wh,l,c)}const qS=A({transform_:HS});function jS(n,t,e){I(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),I(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const s=S(n,"a","bandPart");I(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const o=s.shape,[r,i]=s.shape.slice(-2);if(!(t<=r))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${r}).`);if(!(e<=i))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`);t<0&&(t=r),e<0&&(e=i);const a=_(Br(0,r,1,"int32"),[-1,1]),l=Br(0,i,1,"int32"),c=ct(a,l),u=us(pr(c,mt(+t,"int32")),Eo(c,mt(-e,"int32"))),h=be([r,i],s.dtype);return _(Rs($o(_(s,[-1,r,i])).map(d=>Qe(u,d,h))),o)}const KS=A({bandPart_:jS});function XS(n){let t;if(Array.isArray(n)){t=!1,I(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const o=n[0].shape[0];for(let r=1;r<n.length;++r)I(n[r].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[r].shape[0]} vs. ${o})`)}else t=!0,n=an(n,n.shape[0],0).map(o=>Ji(o,[0]));I(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],s=n;for(let o=0;o<n.length;++o)e.push(D.tidy(()=>{let r=s[o];if(o>0)for(let i=0;i<o;++i){const a=E(lt(E(e[i],r)),e[i]);r=ct(r,a)}return dt(r,gc(r,"euclidean"))}));return t?Rs(e,0):e}const YS=A({gramSchmidt_:XS});function ZS(n,t=!1){if(I(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return gf(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),s=$o(_(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],r=[];s.forEach(l=>{const[c,u]=gf(l,t);o.push(c),r.push(u)});const i=_(Rs(o,0),n.shape),a=_(Rs(r,0),n.shape);return[i,a]}}function gf(n,t=!1){return D.tidy(()=>{I(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],s=n.shape[1];let o=Gg(e),r=ao(n);const i=_a([[1]],[1,1]);let a=ao(i);const l=e>=s?s:e;for(let c=0;c<l;++c){const u=r,h=a,d=o;[a,r,o]=D.tidy(()=>{const p=_t(r,[c,c],[e-c,1]),f=gc(p),m=_t(r,[c,c],[1,1]),g=Qe(un(m,0),_a([[-1]]),_a([[1]])),x=ct(m,E(g,f)),b=dt(p,x);b.shape[0]===1?a=ao(i):a=Ae([i,_t(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);const w=Yt(dt(Et(g,x),f)),y=_t(r,[c,0],[e-c,s]),$=E(w,a),C=kt(a);if(c===0)r=ct(y,Et($,Et(C,y)));else{const N=ct(y,Et($,Et(C,y)));r=Ae([_t(r,[0,0],[c,s]),N],0)}const v=kt($),k=_t(o,[0,c],[e,o.shape[1]-c]);if(c===0)o=ct(k,Et(Et(k,a),v));else{const N=ct(k,Et(Et(k,a),v));o=Ae([_t(o,[0,0],[e,c]),N],1)}return[a,r,o]}),wt([u,h,d])}return!t&&e>s&&(o=_t(o,[0,0],[e,s]),r=_t(r,[0,0],[s,s])),[o,r]})}const JS=A({qr_:ZS});var Ue;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ue||(Ue={}));function QS(n,t,e=Ue.SUM_BY_NONZERO_WEIGHTS){const s=S(n,"losses","computeWeightedLoss");let o=null;t!=null&&(o=S(t,"weights","computeWeightedLoss"));const r=o==null?s:E(s,o);if(e===Ue.NONE)return r;if(e===Ue.SUM)return lt(r);if(e===Ue.MEAN){if(o==null)return ne(r);{const i=s.size/o.size,a=dt(lt(r),lt(o));return i>1?dt(a,mt(i)):a}}if(e===Ue.SUM_BY_NONZERO_WEIGHTS){if(o==null)return dt(lt(r),mt(s.size));{const i=E(o,Vs(s.shape)),a=st(lt(zr(i,mt(0))),"float32");return dt(lt(r),a)}}throw Error(`Unknown reduction: ${e}`)}const Ws=A({computeWeightedLoss_:QS});function t2(n,t,e,s=Ue.SUM_BY_NONZERO_WEIGHTS){const o=S(n,"labels","absoluteDifference"),r=S(t,"predictions","absoluteDifference");let i=null;e!=null&&(i=S(e,"weights","absoluteDifference")),vn(o.shape,r.shape,"Error in absoluteDifference: ");const a=ge(ct(o,r));return Ws(a,i,s)}const vq=A({absoluteDifference_:t2});function e2(n,t,e,s,o=Ue.SUM_BY_NONZERO_WEIGHTS){const r=S(n,"labels","cosineDistance"),i=S(t,"predictions","cosineDistance");let a=null;s!=null&&(a=S(s,"weights","cosineDistance")),vn(r.shape,i.shape,"Error in cosineDistance: ");const l=mt(1),c=ct(l,lt(E(r,i),e,!0));return Ws(c,a,o)}const kq=A({cosineDistance_:e2});function n2(n,t,e,s=Ue.SUM_BY_NONZERO_WEIGHTS){let o=S(n,"labels","hingeLoss");const r=S(t,"predictions","hingeLoss");let i=null;e!=null&&(i=S(e,"weights","hingeLoss")),vn(o.shape,r.shape,"Error in hingeLoss: ");const a=mt(1);o=ct(E(mt(2),o),a);const l=ms(ct(a,E(o,r)));return Ws(l,i,s)}const Sq=A({hingeLoss_:n2});function s2(n,t,e,s=1,o=Ue.SUM_BY_NONZERO_WEIGHTS){const r=S(n,"labels","huberLoss"),i=S(t,"predictions","huberLoss");let a=null;e!=null&&(a=S(e,"weights","huberLoss")),vn(r.shape,i.shape,"Error in huberLoss: ");const l=mt(s),c=ge(ct(i,r)),u=bc(c,l),h=ct(c,u),d=Y(E(mt(.5),zt(u)),E(l,h));return Ws(d,a,o)}const Nq=A({huberLoss_:s2});function o2(n,t,e,s=1e-7,o=Ue.SUM_BY_NONZERO_WEIGHTS){const r=S(n,"labels","logLoss"),i=S(t,"predictions","logLoss");let a=null;e!=null&&(a=S(e,"weights","logLoss")),vn(r.shape,i.shape,"Error in logLoss: ");const l=mt(1),c=mt(s),u=Yt(E(r,Cn(Y(i,c)))),h=E(ct(l,r),Cn(Y(ct(l,i),c))),d=ct(u,h);return Ws(d,a,o)}const Tq=A({logLoss_:o2});function r2(n,t,e,s=Ue.SUM_BY_NONZERO_WEIGHTS){const o=S(n,"labels","meanSquaredError"),r=S(t,"predictions","meanSquaredError");let i=null;e!=null&&(i=S(e,"weights","meanSquaredError")),vn(o.shape,r.shape,"Error in meanSquaredError: ");const a=px(o,r);return Ws(a,i,s)}const Eq=A({meanSquaredError_:r2});function i2(n,t){const e=S(n,"labels","sigmoidCrossEntropyWithLogits"),s=S(t,"logits","sigmoidCrossEntropyWithLogits");vn(e.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const o=ms(s),r=E(s,e),i=dd($n(Yt(ge(s))));return Y(ct(o,r),i)}function a2(n,t,e,s=0,o=Ue.SUM_BY_NONZERO_WEIGHTS){let r=S(n,"multiClassLabels","sigmoidCrossEntropy");const i=S(t,"logits","sigmoidCrossEntropy");let a=null;if(e!=null&&(a=S(e,"weights","sigmoidCrossEntropy")),vn(r.shape,i.shape,"Error in sigmoidCrossEntropy: "),s>0){const c=mt(s),u=mt(1),h=mt(.5);r=Y(E(r,ct(u,c)),E(h,c))}const l=i2(r,i);return Ws(l,a,o)}const Rq=A({sigmoidCrossEntropy_:a2});function l2(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return yo((o,r,i)=>{const l=jg(r,[e],!0),c=ct(st(r,"float32"),l);i([o,c]);const u=Yt(E(c,o));return{value:lt(u,[e]),gradFunc:(p,f)=>{const[m,g]=f,x=oe(p.shape,[e]);return[E(_(p,x),ct(st(m,"float32"),$n(g))),E(_(p,x),ct($n(g),st(m,"float32")))]}}})(n,t)}function c2(n,t,e,s=0,o=Ue.SUM_BY_NONZERO_WEIGHTS){let r=S(n,"onehotLabels","softmaxCrossEntropy");const i=S(t,"logits","softmaxCrossEntropy");let a=null;if(e!=null&&(a=S(e,"weights","softmaxCrossEntropy")),vn(r.shape,i.shape,"Error in softmaxCrossEntropy: "),s>0){const c=mt(s),u=mt(1),h=mt(r.shape[1]);r=Y(E(r,ct(u,c)),dt(c,h))}const l=l2(r,i);return Ws(l,a,o)}const Dq=A({softmaxCrossEntropy_:c2});function u2(n,t,e,s){const o=S(n,"indices","sparseFillEmptyRows","int32"),r=S(t,"values","sparseFillEmptyRows"),i=S(e,"denseShape","sparseFillEmptyRows","int32"),a=S(s,"defaultValue","sparseFillEmptyRows",r.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(r.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${r.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);const l={indices:o,values:r,denseShape:i,defaultValue:a},c=D.runKernel(Ah,l);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const Aq=A({sparseFillEmptyRows_:u2});function h2(n,t,e){const s=S(n,"inputIndices","sparseReshape","int32"),o=S(t,"inputShape","sparseReshape","int32"),r=S(e,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(r.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${r.shape}`);const i={inputIndices:s,inputShape:o,newShape:r},a=D.runKernel(Fh,i);return{outputIndices:a[0],outputShape:a[1]}}const Fq=A({sparseReshape_:h2});function d2(n,t,e){const s=S(n,"data","sparseSegmentMean"),o=S(t,"indices","sparseSegmentMean","int32"),r=S(e,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(r.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${r.shape}`);const i={data:s,indices:o,segmentIds:r};return D.runKernel(_h,i)}const _q=A({sparseSegmentMean_:d2});function p2(n,t,e){const s=S(n,"data","sparseSegmentSum"),o=S(t,"indices","sparseSegmentSum","int32"),r=S(e,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(r.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${r.shape}`);const i={data:s,indices:o,segmentIds:r};return D.runKernel(Oh,i)}const Oq=A({sparseSegmentSum_:p2});function f2(n,t,e,s,o,r,i,a){const l=S(n,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const c=S(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const u={separator:e,nGramWidths:s,leftPad:o,rightPad:r,padWidth:i,preserveShortSequences:a},h={data:l,dataSplits:c},d=D.runKernel(Ph,h,u);return{nGrams:d[0],nGramsSplits:d[1]}}const Lq=A({stringNGrams_:f2});function m2(n,t,e=!0){const s=S(n,"input","stringSplit","string"),o=S(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const r={skipEmpty:e},i={input:s,delimiter:o},a=D.runKernel(zh,i,r);return{indices:a[0],values:a[1],shape:a[2]}}const Mq=A({stringSplit_:m2});function g2(n,t){const e=S(n,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const o={input:e};return D.runKernel(Bh,o,s)}const Pq=A({stringToHashBucketFast_:g2});const io={flipLeftRight:xS,grayscaleToRGB:yS,resizeNearestNeighbor:yx,resizeBilinear:bx,rotateWithOffset:$S,cropAndResize:mS,nonMaxSuppression:IS,nonMaxSuppressionAsync:DS,nonMaxSuppressionWithScore:FS,nonMaxSuppressionWithScoreAsync:OS,nonMaxSuppressionPadded:MS,nonMaxSuppressionPaddedAsync:zS,threshold:GS,transform:qS},x2={bandPart:KS,gramSchmidt:YS,qr:JS};class Us extends hr{minimize(t,e=!1,s){const{value:o,grads:r}=this.computeGradients(t,s);if(s!=null){const i=s.map(a=>({name:a.name,tensor:r[a.name]}));this.applyGradients(i)}else this.applyGradients(r);return wt(r),e?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return xv(t,e)}dispose(){this.iterations_!=null&&wt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:mt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Us,Symbol.hasInstance,{value:n=>n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null});class Ad extends Us{constructor(t,e,s=null){super(),this.learningRate=t,this.rho=e,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=D.registeredVariables[s],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accum_grad`,variable:P(()=>St(r).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${s}/accum_var`,variable:P(()=>St(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;P(()=>{const u=Y(E(l,this.rho),E(zt(a),1-this.rho)),h=E(dt(Me(Y(c,this.epsilon)),Me(Y(l,this.epsilon))),a),d=Y(E(c,this.rho),E(zt(h),1-this.rho));l.assign(u),c.assign(d);const p=Y(E(h,-this.learningRate),r);r.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(wt(this.accumulatedGrads.map(t=>t.variable)),wt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedUpdates=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}}Ad.className="Adadelta";j(Ad);class Fd extends Us{constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=D.registeredVariables[s];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${s}/accumulator`,variable:P(()=>Yi(r.shape,this.initialAccumulatorValue).variable(!1))});const i=Array.isArray(t)?t[o].tensor:t[s];if(i==null)return;const a=this.accumulatedGrads[o].variable;P(()=>{const l=Y(a,zt(i));a.assign(l);const c=Y(E(dt(i,Me(Y(l,D.backend.epsilon()))),-this.learningRate),r);r.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&wt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}}Fd.className="Adagrad";j(Fd);class _d extends Us{constructor(t,e,s,o=null){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],P(()=>{this.accBeta1=mt(e).variable(),this.accBeta2=mt(s).variable()}),o==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);P(()=>{const s=ct(1,this.accBeta1),o=ct(1,this.accBeta2);e.forEach((r,i)=>{const a=D.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:P(()=>St(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${r}/v`,variable:P(()=>St(a).variable(l))});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedSecondMoment[i].variable,d=Y(E(u,this.beta1),E(c,1-this.beta1)),p=Y(E(h,this.beta2),E(zt(c),1-this.beta2)),f=dt(d,s),m=dt(p,o);u.assign(d),h.assign(p);const g=Y(E(dt(f,Y(Me(m),this.epsilon)),-this.learningRate),a);a.assign(g)}),this.accBeta1.assign(E(this.accBeta1,this.beta1)),this.accBeta2.assign(E(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&wt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&wt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),P(()=>{this.accBeta1.assign(er(this.beta1,this.iterations_+1)),this.accBeta2.assign(er(this.beta2,this.iterations_+1))});const e=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}}_d.className="Adam";j(_d);class Od extends Us{constructor(t,e,s,o=null,r=0){super(),this.learningRate=t,this.beta1=e,this.beta2=s,this.epsilon=o,this.decay=r,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],P(()=>{this.iteration=mt(0).variable(),this.accBeta1=mt(e).variable()}),o==null&&(this.epsilon=D.backend.epsilon())}applyGradients(t){const e=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);P(()=>{const s=ct(1,this.accBeta1),o=dt(-this.learningRate,Y(E(this.iteration,this.decay),1));e.forEach((r,i)=>{const a=D.registeredVariables[r],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${r}/m`,variable:St(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${r}/v`,variable:St(a).variable(l)});const c=Array.isArray(t)?t[i].tensor:t[r];if(c==null)return;const u=this.accumulatedFirstMoment[i].variable,h=this.accumulatedWeightedInfNorm[i].variable,d=Y(E(u,this.beta1),E(c,1-this.beta1)),p=E(h,this.beta2),f=ge(c),m=Bs(p,f);u.assign(d),h.assign(m);const g=Y(E(dt(o,s),dt(d,Y(m,this.epsilon))),a);a.assign(g)}),this.iteration.assign(Y(this.iteration,1)),this.accBeta1.assign(E(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&wt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&wt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}}Od.className="Adamax";j(Od);class wc extends Us{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=Array.isArray(t)?t[o].tensor:t[s];if(r==null)return;const i=D.registeredVariables[s];P(()=>{const a=Y(E(this.c,r),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Yn(mt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}}wc.className="SGD";j(wc);class Ld extends wc{constructor(t,e,s=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=s,this.accumulations=[],this.m=mt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=D.registeredVariables[s];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${s}/momentum`,variable:P(()=>St(r).variable(!1))});const i=this.accumulations[o].variable,a=Array.isArray(t)?t[o].tensor:t[s];a!=null&&P(()=>{let l;const c=Y(E(this.m,i),a);this.useNesterov?l=Y(E(this.c,Y(a,E(c,this.m))),r):l=Y(E(this.c,c),r),i.assign(c),r.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&wt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}}Ld.className="Momentum";j(Ld);class Md extends Us{constructor(t,e=.9,s=0,o=null,r=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=s,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=r,o==null&&(this.epsilon=D.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,o)=>{const r=D.registeredVariables[s],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${s}/rms`,variable:P(()=>St(r).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${s}/momentum`,variable:P(()=>St(r).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${s}/mg`,variable:P(()=>St(r).variable(i))});const a=Array.isArray(t)?t[o].tensor:t[s];if(a==null)return;const l=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;P(()=>{const u=Y(E(l,this.decay),E(zt(a),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[o].variable,d=Y(E(h,this.decay),E(a,1-this.decay)),p=dt(E(a,this.learningRate),Me(ct(u,Y(zt(d),this.epsilon)))),f=Y(E(c,this.momentum),p);l.assign(u),h.assign(d),c.assign(f);const m=ct(r,f);r.assign(m)}else{const h=Y(E(l,this.decay),E(zt(a),1-this.decay)),d=Y(E(c,this.momentum),dt(E(a,this.learningRate),Me(Y(h,this.epsilon))));l.assign(h),c.assign(d);const p=ct(r,d);r.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&wt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&wt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&wt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,e).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.accumulatedMoments=t.slice(e,e*2).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(o=>({originalName:o.name,variable:o.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}}Md.className="RMSProp";j(Md);class Xs{static sgd(t){return new wc(t)}static momentum(t,e,s=!1){return new Ld(t,e,s)}static rmsprop(t,e=.9,s=0,o=null,r=!1){return new Md(t,e,s,o,r)}static adam(t=.001,e=.9,s=.999,o=null){return new _d(t,e,s,o)}static adadelta(t=.001,e=.95,s=null){return new Ad(t,e,s)}static adamax(t=.002,e=.9,s=.999,o=null,r=0){return new Od(t,e,s,o,r)}static adagrad(t,e=.1){return new Fd(t,e)}}const Lo={sgd:Xs.sgd,momentum:Xs.momentum,adadelta:Xs.adadelta,adagrad:Xs.adagrad,rmsprop:Xs.rmsprop,adamax:Xs.adamax,adam:Xs.adam};const b2=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:n=>n())();function wx(){return new Promise(n=>b2(()=>n()))}function Pd(n,t){const e=n[0].length;n.forEach((o,r)=>{I(o.length===e,()=>`Error in concat${e}D: rank of tensors[${r}] must be the same as the rank of the rest (${e})`)}),I(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);const s=n[0];n.forEach((o,r)=>{for(let i=0;i<e;i++)I(i===t||o[i]===s[i],()=>`Error in concat${e}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function Zn(n,t){const e=n[0].slice();for(let s=1;s<n.length;s++)e[t]+=n[s][t];return e}var An;(function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"})(An||(An={}));function $x(n,t,e){let s=new Array;if(e==null&&t==null)return s;if(t==null)for(;s.length<n+e.length;)s.push(-1);else s=t.slice();if(e==null)return s;if(n+e.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${s.length}`);for(let o=1;o<e.length;++o){const r=e[o],i=s[s.length-e.length+o],a=s[i];if(r>=0)if(a>=0){if(a!==r)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${r} but shape[${o+n}] = ${a}`)}else s[i]=r}return s}function Cx(n){const t={FIRST_DIM_SIZE:An.FIRST_DIM_SIZE,VALUE_ROWIDS:An.VALUE_ROWIDS,ROW_LENGTHS:An.ROW_LENGTHS,ROW_SPLITS:An.ROW_SPLITS,ROW_LIMITS:An.ROW_LIMITS,ROW_STARTS:An.ROW_STARTS},e=[];for(const s of n)if(s in t)e.push(t[s]);else break;return e}function Ix(n){return n.length===0?0:n[0]===An.FIRST_DIM_SIZE?n.length-1:n.length}function vx(n,t){if(n==null||t==null)return;const e=n.length,s=t.length;if(e>=s)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${s})`);for(let o=0;o<Math.min(e,s-1);++o){const r=n[o],i=t[o+1];if(r>=0&&i>=0&&r!==1&&r!==i)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${r} but ragged tensor input.flatValues.shape[${o-n.length}] = ${i}`)}}const zd=30;function $c(n){return n<=zd?n:hu(n,Math.floor(Math.sqrt(n)))}function Bd(n,t,e){const s=e*(typeof n=="number"?n:n[0]),o=t*(typeof n=="number"?n:n[1]);return[s,o]}function ta(n,t,e,s=!0){let o=[];if(s)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const r=t.length;for(let i=0;i<r;++i)o=o.concat([n[i+1]/t[i],t[i]]);o=o.concat(n.slice(r+1))}return o}function ea(n,t,e=!0){const s=[];if(e){s.push(t);for(let o=t+1;o<n;++o)o<=2*t?(s.push(o),s.push(o-(t+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<n;++i)i>=t*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function na(n,t,e,s=!0){const o=[];s?o.push(n[0]/e):o.push(n[0]*e);for(let r=1;r<n.length;++r)r<=t.length?s?o.push(t[r-1]*n[r]):o.push(n[r]/t[r-1]):o.push(n[r]);return o}function Vd(n,t){const e=[0];for(let s=0;s<t;++s)e.push(n[s][0]);return e}function Wd(n,t,e){const s=n.slice(0,1);for(let o=0;o<e;++o)s.push(n[o+1]-t[o][0]-t[o][1]);return s}const Cc=1.7580993408473768,Ic=1.0507009873554805;const Ud=.3275911,Gd=.254829592,Hd=-.284496736,qd=1.421413741,jd=-1.453152027,Kd=1.061405429;function hs(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(n.length*2);for(let s=0;s<e.length;s+=2)e[s]=n[s/2],e[s+1]=t[s/2];return e}function kx(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let s=0;s<n.length;s+=2)t[s/2]=n[s],e[s/2]=n[s+1];return{real:t,imag:e}}function Sx(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=0;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function Nx(n){const t=Math.floor(n.length/4),e=new Float32Array(t),s=new Float32Array(t);for(let o=2;o<n.length;o+=4)e[Math.floor(o/4)]=n[o],s[Math.floor(o/4)]=n[o+1];return{real:e,imag:s}}function Xd(n,t){const e=n[t*2],s=n[t*2+1];return{real:e,imag:s}}function Tx(n,t,e,s){n[s*2]=t,n[s*2+1]=e}function Ex(n,t){const e=new Float32Array(n/2),s=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const r=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:e,imag:s}}function Rx(n,t,e){const s=(e?2:-2)*Math.PI*(n/t),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}const jc="->",y2=/->/g,xf=",",bf="...";function Yd(n,t){n=n.replace(/\s/g,"");const e=(n.length-n.replace(y2,"").length)/jc.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${jc}").`);const[s,o]=n.split(jc);I(s.indexOf(bf)===-1,()=>`The ellipsis notation ("${bf}") is not supported yet.`);const r=s.split(xf),i=r.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let d=0;d<o.length;++d){const p=o[d];if(!r.some(f=>f.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);a.indexOf(p)===-1&&a.push(p)}for(let d=0;d<s.length;++d){const p=s[d];a.indexOf(p)===-1&&p!==xf&&a.push(p)}const l=new Array(r.length);for(let d=0;d<i;++d){if(new Set(r[d].split("")).size!==r[d].length)throw new Error(`Found duplicate axes in input component ${r[d]}. Support for duplicate axes in input is not implemented yet.`);l[d]=[];for(let p=0;p<r[d].length;++p)l[d].push(a.indexOf(r[d][p]))}const c=a.length,u=o.length,h=[];for(let d=u;d<c;++d)h.push(d);return{allDims:a,summedDims:h,idDims:l}}function Zd(n,t){let e=new Array(n);e.fill(-1);for(let o=0;o<t.length;++o)e[t[o]]=o;const s=[];for(let o=0;o<n;++o)e[o]===-1&&s.push(o);return e=e.filter(o=>o!==-1),{permutationIndices:e,expandDims:s}}function Jd(n,t,e){const s=new Array(n);for(let o=0;o<e.length;++o){const r=e[o].shape;for(let i=0;i<t[o].length;++i)s[t[o][i]]===void 0?s[t[o][i]]=r[i]:I(s[t[o][i]]===r[i],()=>`Expected dimension ${s[t[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function Qd(n,t){const e=n,s=[];let o=0;n.length===0&&e.push(-1),o=n.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<e.length;++i){const a=e[i],l=w2(t,a);for(const c of l)r.indexOf(c)===-1&&(s[i].push(c),r.push(c))}return{path:e,steps:s}}function tp(n){return n.every((t,e)=>t===e)}function w2(n,t){const e=[];for(let s=0;s<n.length;++s)(n[s].length===0||n[s].indexOf(t)!==-1||t===-1)&&e.push(s);return e}function ep(n,t,e=0){let s=[];if(typeof t=="number")I(n.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);I(o<=1,()=>"There should be only one negative value in split array.");const r=t.indexOf(-1);if(r!==-1){const i=t.reduce((a,l)=>l>0?a+l:a);t[r]=n.shape[e]-i}I(n.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}function Dx(n){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${n}`}function Ax(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function Fx(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}function _x(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function Ox(n,t){return`size ${n} must be non-negative, not ${t}`}function Lx(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Mx(n,t){const e=H(n),s=H(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${n} outputShape= ${t}`}function Px(n,t){const e=H(n),s=H(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${s}. inputShape=${n} outputShape=${t}`}function Fu(){return"segment ids must be >= 0"}function zx(){return"segment ids are not increasing"}function Bx(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Vx(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}function Wx(n,t){let e=!1,s;for(n<=zd?(s=n,e=!0):s=hu(n,Math.floor(Math.sqrt(n)));!e;)s>t||s===n?e=!0:s=hu(n,s+1);return s}function Ux(n,t,e){const s=[],o=n.length;for(let r=0;r<o;r++)r!==t?s.push(n[r]):s.push(e);return s}function np(n,t,e,s){const o=t.shape.length,r=n.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(e<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${e}).`);for(let h=0;h<s;++h)if(n.shape[h]!==t.shape[h])throw new Error(`x.shape[${h}]: ${n.shape[h]} should be equal to indices.shape[${h}]: ${t.shape[h]}.`);const i=n.shape[e],a=[];let l=1,c=1,u=1;for(let h=0;h<s;++h)a.push(n.shape[h]),l*=n.shape[h];for(let h=s;h<e;h++)a.push(n.shape[h]),c*=n.shape[h];for(let h=s;h<o;h++)a.push(t.shape[h]);for(let h=e+1;h<r;h++)a.push(n.shape[h]),u*=n.shape[h];return{batchSize:l,sliceSize:u,outerSize:c,dimSize:i,outputShape:a}}const $2=Object.freeze(Object.defineProperty({__proto__:null,segOpComputeOptimalWindowSize:Wx,computeOutShape:Ux,collectGatherOpShapeInfo:np},Symbol.toStringTag,{value:"Module"}));function Co(n){try{return n.map(t=>Es(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function Gx(n){return n.map(t=>Ss(t))}const C2=Object.freeze(Object.defineProperty({__proto__:null,slice_util:oC,segment_util:$2,fromUint8ToStringArray:Co,fromStringArrayToUint8:Gx,upcastType:Je,axesAreInnerMostDims:cd,combineLocations:Wg,computeOutAndReduceShapes:we,expandShapeToKeepDim:oe,assertAxesAreInnerMostDims:Se,getAxesPermutation:Zt,getUndoAxesPermutation:zs,getInnerMostAxes:re,getBroadcastDims:tr,getReductionAxes:me,assertAndGetBroadcastShape:bt,assertParamsConsistent:Pd,computeOutShape:Zn,computeDilation2DInfo:Xi,computePool2DInfo:kn,computePool3DInfo:ps,computeConv2DInfo:ke,computeConv3DInfo:Ps,computeDefaultPad:nd,tupleValuesAreOne:xo,eitherStridesOrDilationsAreOne:_e,convertConv2DDataFormat:fs,checkPadOnDimRoundingMode:He,getFusedDyActivation:vd,getFusedBiasGradient:kd,applyActivation:Sd,shouldFuse:Nd,get RowPartitionType(){return An},combineRaggedTensorToTensorShapes:$x,getRowPartitionTypesHelper:Cx,getRaggedRank:Ix,validateDefaultValueShape:vx,PARALLELIZE_THRESHOLD:zd,computeOptimalWindowSize:$c,getImageCenter:Bd,getReshaped:ta,getPermuted:ea,getReshapedPermuted:na,getSliceBeginCoords:Vd,getSliceSize:Wd,prepareAndValidate:Yh,validateUpdateShape:Sg,validateInput:Q$,calculateShapes:Ki,SELU_SCALEALPHA:Cc,SELU_SCALE:Ic,ERF_P:Ud,ERF_A1:Gd,ERF_A2:Hd,ERF_A3:qd,ERF_A4:jd,ERF_A5:Kd,warn:on,log:Tw,mergeRealAndImagArrays:hs,splitRealAndImagArrays:kx,complexWithEvenIndex:Sx,complexWithOddIndex:Nx,getComplexWithIndex:Xd,assignToTypedArray:Tx,exponents:Ex,exponent:Rx,decodeEinsumEquation:Yd,getEinsumPermutation:Zd,checkEinsumDimSizes:Jd,getEinsumComputePath:Qd,isIdentityPermutation:tp,prepareSplitSize:ep,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Dx,getSparseFillEmptyRowsNegativeIndexErrorMessage:Ax,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Fx,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:_x,getSparseReshapeNegativeOutputDimErrorMessage:Ox,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Lx,getSparseReshapeInputOutputMultipleErrorMessage:Mx,getSparseReshapeInputOutputMismatchErrorMessage:Px,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:Fu,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:zx,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Bx,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Vx},Symbol.toStringTag,{value:"Module"}));const Hx={kernelName:hl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,Qi(st(e,"float32"),-1))}}};const I2={kernelName:Zr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=zt(st(e,"float32")),o=Me(ct(mt(1),s));return Yt(dt(n,o))}}}};const v2={kernelName:Jr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Me(ct(zt(st(e,"float32")),1));return dt(n,s)}}}};const k2={kernelName:ur,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{let a=n;const l=me(e.shape,o);return l.length>0&&(a=lt(a,l)),_(a,e.shape)},b:()=>{let a=n;const l=me(s.shape,o);return l.length>0&&(a=lt(a,l)),_(a,s.shape)}}}};const S2={kernelName:th,saveAllInputs:!0,gradFunc:(n,t)=>{const e={};return t.forEach((s,o)=>{e[o]=()=>n.clone()}),e}};const N2={kernelName:dl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>St(e)}}};const T2={kernelName:pl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>St(e)}}};const E2={kernelName:Qr,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,Me(ct(mt(1),zt(st(e,"float32")))))}}};const R2={kernelName:ti,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=Me(Y(mt(1),zt(st(e,"float32"))));return dt(n,s)}}}};const D2={kernelName:si,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{const a=Y(zt(e),zt(s));let l=E(n,dt(s,a));const c=me(e.shape,o);return c.length>0&&(l=lt(l,c)),_(l,e.shape)},b:()=>{const a=Y(zt(e),zt(s));let l=Yt(E(n,dt(e,a)));const c=me(s.shape,o);return c.length>0&&(l=lt(l,c)),_(l,s.shape)}}}};const A2={kernelName:ei,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,Y(zt(st(e,"float32")),1))}}};const F2={kernelName:ni,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,ct(mt(1),zt(st(e,"float32"))))}}};function _2(n,t,e,s,o,r){const i=S(n,"dy","avgPool3dGrad"),a=S(t,"input","avgPool3dGrad");let l=i,c=a,u=!1;a.rank===4&&(u=!0,l=_(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),c=_(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),I(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),I(c.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${c.rank}.`),He("avgPool3dGrad",o,r);const h={dy:l,input:c},d={filterSize:e,strides:s,pad:o,dimRoundingMode:r},p=D.runKernel(oh,h,d);return u?_(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}const O2=A({avgPool3dGrad_:_2});const L2={kernelName:ml,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i,dimRoundingMode:a}=e;return{x:()=>O2(n,s,o,r,i,a)}}};function M2(n,t,e,s,o){const r=S(n,"dy","avgPoolGrad"),i=S(t,"input","avgPoolGrad");I(i.rank===r.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${r.rank})`);let a=i,l=r,c=!1;i.rank===3&&(c=!0,a=_(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=_(r,[1,r.shape[0],r.shape[1],r.shape[2]])),I(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),I(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);const u={dy:l,input:a},h={filterSize:e,strides:s,pad:o},d=D.runKernel(sh,u,h);return c?_(d,[d.shape[1],d.shape[2],d.shape[3]]):d}const P2=A({avgPoolGrad_:M2});const z2={kernelName:fl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{filterSize:o,strides:r,pad:i}=e;return{x:()=>P2(n,s,o,r,i)}}};const B2={kernelName:gl,inputsToSave:["a","b"],gradFunc:(n,t,e)=>{const[s,o]=t,{transposeA:r,transposeB:i}=e;return!r&&!i?{a:()=>Et(n,o,!1,!0),b:()=>Et(s,n,!0,!1)}:!r&&i?{a:()=>Et(n,o,!1,!1),b:()=>Et(n,s,!0,!1)}:r&&!i?{a:()=>Et(o,n,!1,!0),b:()=>Et(s,n,!1,!1)}:{a:()=>Et(o,n,!0,!0),b:()=>Et(n,s,!0,!0)}}};const V2={kernelName:xl,gradFunc:(n,t,e)=>{const{blockShape:s,crops:o}=e;return{x:()=>xd(n,s,o)}}};const W2={kernelName:Sw,gradFunc:(n,t,e)=>{const s=e,o=s.inputShape,r=s.shape,i=Array.from(r);for(let l=o.length-1;l>=0;l--)if(o[l]===r[l])i[l]=1;else if(o[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${r}].`);const a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>lt(n,a,!0)}}};const U2={kernelName:oi,gradFunc:n=>({x:()=>n.clone()})};const G2={kernelName:ri,gradFunc:n=>({x:()=>St(n)})};const H2={kernelName:ii,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{clipValueMin:o,clipValueMax:r}=e;return{x:()=>Qe(us(Eo(s,o),pr(s,r)),n,St(n))}}};const q2={kernelName:bl,inputsToSave:["x"],gradFunc:Hx.gradFunc};const j2={kernelName:yl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const s=t.map(l=>l.shape),{axis:o}=e,r=Ct(o,t[0].shape)[0],i=s.map(l=>l[r]);return an(n,i,r).map(l=>()=>l)}};const K2={kernelName:wl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{dilations:r,strides:i,pad:a,dataFormat:l}=e;return I(xo(r),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`),{x:()=>id(s.shape,n,o,i,a,l),filter:()=>Id(s,n,o.shape,i,a,l)}}};const X2={kernelName:$l,inputsToSave:["dy","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,{strides:r,pad:i,dataFormat:a,dimRoundingMode:l}=e;return{dy:()=>bo(n,o,r,i,a,1,l),filter:()=>Id(n,s,o.shape,r,i,a,l)}}};function Y2(n,t,e,s,o){let r=n;n.rank===4&&(r=_(n,[1,n.shape[0],n.shape[1],n.shape[2],n.shape[3]]));let i=t;i.rank===4&&(i=_(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),I(r.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${r.shape}.`),I(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),I(e.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${e}.`),I(r.shape[4]===e[3],()=>`Error in conv3dDerFilter: depth of input ${r.shape[4]}) must match input depth in filter (${e[3]}.`),I(i.shape[4]===e[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${e[4]}).`);const a={x:r,dy:i},l={strides:s,pad:o,filterShape:e};return D.runKernel(lh,a,l)}const Z2=A({conv3DBackpropFilter_:Y2});const J2={kernelName:Cl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r}=e;I(xo(s),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);const[i,a]=t;return{x:()=>zg(i.shape,n,a,o,r),filter:()=>Z2(i,n,a.shape,o,r)}}};const Q2={kernelName:ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(Yt(lx(st(e,"float32"))),n)}}};const tN={kernelName:li,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(cx(st(e,"float32")),n)}}};const eN={kernelName:Il,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o,exclusive:r,reverse:i}=e;return{x:()=>{const a=Zt([o],s.rank);let l=Vg(n,o,r,!i);return a!=null&&(l=kt(l,a)),l}}}};const nN={kernelName:vl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const{dilations:s,strides:o,pad:r,dimRoundingMode:i}=e,a=s??[1,1];I(xo(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[l,c]=t;return I(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),I(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${c.rank}.`),I(l.shape[3]===c.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${c.shape[2]}.`),I(_e(o,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${o} and dilations '${a}'.`),He("depthwiseConv2d",r,i),{x:()=>iS(l.shape,n,c,o,r,a,i),filter:()=>oS(l,n,c.shape,o,r,a,i)}}};const sN={kernelName:kl,inputsToSave:["x","filter"],gradFunc:(n,t,e)=>{const[s,o]=t,r={x:s,filter:o,dy:n},i={x:s,filter:o,dy:n};return{x:()=>D.runKernel(du,r,e),filter:()=>D.runKernel(pu,i,e)}}};const oN={kernelName:ui,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t,s={dy:n,y:e};return{x:()=>D.runKernel(gh,s)}}};const rN={kernelName:hi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=E($n(Yt(zt(e))),2/Math.sqrt(Math.PI));return{x:()=>E(n,s)}}};const iN={kernelName:di,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,e)}}};const aN={kernelName:Nl,inputsToSave:["input"],gradFunc:(n,t)=>{const[e]=t;return{input:()=>_(n,e.shape)}}};const lN={kernelName:pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,$n(e))}}};const cN={kernelName:fi,gradFunc:n=>({x:()=>St(n)})};const uN={kernelName:mi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{const a=dt(n,st(s,"float32")),l=me(e.shape,o);return l.length>0?_(lt(a,l),e.shape):a},b:()=>{let a=E(n,st(e,"float32"));const l=me(s.shape,o);l.length>0&&(a=_(lt(a,l),s.shape));const c=zt(s);return Yt(dt(a,st(c,"float32")))}}}};const hN={kernelName:Tl,inputsToSave:["x","mean","variance","scale"],gradFunc:(n,t,e)=>{const{varianceEpsilon:s}=e,[o,r,i,a]=t,l=a??mt(1),c=me(r.shape,o.shape),u=[];if(r.rank===1){for(let y=0;y<o.shape.length-1;++y)u.push(o.shape[y]);u.push(1)}const h=ct(o,r),d=E(n,l),p=rx(Y(i,mt(s))),f=E(E(E(p,p),p),mt(-.5));return{x:()=>r.rank===1?_(E(E(n,Fn(_(p,[1,1,1,r.shape[0]]),u)),l),o.shape):_(E(E(n,p),l),o.shape),mean:()=>{let y=E(E(p,mt(-1)),d);return r.rank===1&&(y=lt(y,c)),_(y,r.shape)},variance:()=>{let y=E(E(f,h),d);return r.rank===1&&(y=lt(y,c)),_(y,r.shape)},scale:()=>{const y=E(h,p);let $=E(n,y);return r.rank===1&&($=lt($,c)),_($,r.shape)},offset:()=>{let y=n;return r.rank===1&&(y=lt(y,c)),_(y,r.shape)}}}};const dN={kernelName:El,inputsToSave:["x","indices"],gradFunc:(n,t,e)=>{const[s,o]=t,{axis:r}=e,i=Ct(r,s.shape)[0];return{x:()=>{const l=s.shape,c=o.size,u=l.slice(0,i),h=u.length,d=l.slice(r,l.length).slice(1),p=d.length,f=yf(0,h),m=yf(h+1,h+1+p),g=wf([u,[c],d]),x=_(n,g),b=_(o,[c]),w=wf([[h],f,m]),y=kt(x,w);let $=mx(y,b,s.shape[i]);const C=zs(w);return $=kt($,C),$},indices:()=>o}}};function yf(n,t){const e=[];for(let s=n;s<t;++s)e.push(s);return e}function wf(n){const t=[];for(let e=0;e<n.length;++e)for(let s=0;s<n[e].length;++s)t.push(n[e][s]);return t}const pN={kernelName:gi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>St(e),b:()=>St(s)}}};const fN={kernelName:xi,gradFunc:n=>({x:()=>st(n,"float32")})};const mN={kernelName:bi,gradFunc:n=>({x:()=>St(n)})};const gN={kernelName:yi,gradFunc:n=>({x:()=>St(n)})};const xN={kernelName:wi,gradFunc:n=>({x:()=>St(n)})};const bN={kernelName:Dl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{alpha:o}=e,r=un(s,0);return{x:()=>Qe(r,n,E(n,o))}}};const yN={kernelName:Ci,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,Y(e,1))}}};const wN={kernelName:$i,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,st(e,"float32"))}}};const $N={kernelName:Nw,inputsToSave:[],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;return{logits:()=>{const i=$n(s);return ct(n,E(lt(n,o,!0),i))}}}};function CN(n,t,e,s=5,o=1,r=1,i=.5){const a={x:n,y:t,dy:e},l={depthRadius:s,bias:o,alpha:r,beta:i};return D.runKernel(Ch,a,l)}const IN=A({localResponseNormalizationBackprop_:CN});const vN={kernelName:Ml,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{depthRadius:r,bias:i,alpha:a,beta:l}=e;return{x:()=>IN(s,o,n,r,i,a,l)}}};function qx(n,t,e,s){return t.rank<e.rank&&(t=_(t,oe(t.shape,s))),n.rank<e.rank&&(n=_(n,oe(n.shape,s))),{x:()=>E(n,st(ns(e,t),n.dtype))}}const $f={kernelName:Pl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{reductionIndices:o}=s,r=t[0],i=t[1],a=Ct(o,r.shape),l=qx(n,i,r,a);return{x:()=>l.x()}}};const kN={kernelName:Ii,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>E(n,st(Eo(e,s),"float32")),b:()=>E(n,st(Hg(e,s),"float32"))}}};function SN(n,t,e,s,o,r,i){const a=S(n,"dy","maxPool3dGrad"),l=S(t,"input","maxPool3dGrad"),c=S(e,"output","maxPool3dGrad");let u=a,h=l,d=c,p=!1;l.rank===4&&(p=!0,u=_(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),h=_(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),d=_(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),I(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),I(h.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${h.rank}.`),I(d.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${d.rank}.`),He("maxPool3dGrad",r,i);const f={dy:u,input:h,output:d},m={filterSize:s,strides:o,pad:r,dimRoundingMode:i},g=D.runKernel(vh,f,m);return p?_(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const NN=A({maxPool3dGrad_:SN});const TN={kernelName:Bl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=e;return{x:()=>NN(n,s,o,r,i,a,l)}}};function EN(n,t,e,s,o,r,i){const a=S(n,"dy","maxPoolGrad"),l=S(t,"input","maxPoolGrad"),c=S(e,"output","maxPoolGrad");I(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),I(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),I(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),He("maxPoolGrad",r,i);const u={dy:a,input:l,output:c},h={filterSize:s,strides:o,pad:r,dimRoundingMode:i};return D.runKernel(Ih,u,h)}const RN=A({maxPoolGrad_:EN});const DN={kernelName:zl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s,o]=t,{filterSize:r,strides:i,pad:a}=e;return{x:()=>RN(n,s,o,r,i,a)}}};const AN={kernelName:Vl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e,r=Ct(o,s.shape),a=we(s.shape,r)[1],l=H(a);return{x:()=>{const u=s.shape.slice();r.forEach(p=>{u[p]=1});const h=_(n,u);return dt(E(h,Vs(s.shape,"float32")),l)}}}};const FN={kernelName:Wl,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(n,t,e)=>{const s=e,{axis:o}=s,[r,i]=t,a=Ct(o,r.shape),l=qx(n,i,r,a);return{x:()=>l.x()}}};const _N={kernelName:vi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t;return{a:()=>E(n,st(pr(e,s),"float32")),b:()=>E(n,st(un(e,s),"float32"))}}};const ON={kernelName:Ul,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>_t(n,r,s.shape)}}};const LN={kernelName:ki,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{const a=me(e.shape,o);return a.length>0?_(lt(n,a),e.shape):n},b:()=>{const a=E(n,Yt(xc(dt(e,s)))),l=me(s.shape,o);return l.length>0?_(lt(a,l),s.shape):a}}}};const MN={kernelName:Si,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{const a=E(n,st(s,"float32")),l=me(e.shape,o);return l.length>0?_(lt(a,l),e.shape):a},b:()=>{const a=E(n,st(e,"float32")),l=me(s.shape,o);return l.length>0?_(lt(a,l),s.shape):a}}}};const PN={kernelName:Gl,gradFunc:n=>({x:()=>Yt(n)})};const zN={kernelName:jl,inputsToSave:["indices"],gradFunc:(n,t)=>{const e=t[0];return{indices:()=>be(e.shape,"float32")}}};const BN={kernelName:ql,gradFunc:n=>({x:()=>St(n)})};const VN={kernelName:Kl,saveAllInputs:!0,gradFunc:(n,t,e)=>{const{axis:s}=e;return $o(n,s).map(r=>()=>r)}};const Cf={kernelName:Xl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const s=t[0],{paddings:o}=e,r=o.map(i=>i[0]);return{x:()=>_t(n,r,s.shape)}}};const WN={kernelName:Ni,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(n,t)=>{const[e,s,o]=t,r=e,i=s,a=bt(r.shape,i.shape);return{a:()=>{const u=st(i,"float32");let h=E(n,E(u,er(r,ct(u,mt(1)))));const d=me(r.shape,a);return d.length>0&&(h=lt(h,d)),_(h,r.shape)},b:()=>{const u=un(r,0),h=Qe(u,Cn(r),St(r));let d=E(n,E(o,h));const p=me(i.shape,a);return p.length>0&&(d=lt(d,p)),_(d,i.shape)}}}};const UN={kernelName:Yl,inputsToSave:["x","alpha"],gradFunc:(n,t)=>{const[e,s]=t,o=un(e,0);return{x:()=>Qe(o,n,E(n,s)),alpha:()=>{let r=Qe(o,St(n),E(n,e));const i=me(s.shape,n.shape);return i.length>0&&(r=lt(r,i)),_(r,s.shape)}}}};function GN(n,t,e){const s=n.shape.slice();s[e]=1;const o=_(t,s),r=Du(n,e,!0,!1),i=Du(n,e,!0,!0),a=E(r,i);return E(o,a)}function HN(n,t,e){const s=n.shape.length,o=s-e.length,r=Zt(e,s);let i=n;r!=null&&(i=kt(n,r));const a=i.shape.slice(),c=a.splice(s-e.length,e.length).reduce((d,p)=>d*p,1);a.push(c);const u=i.reshape(a);let h=GN(u,t,o);if(h=h.reshape(i.shape),r!=null){const d=zs(r);h=kt(h,d)}return h}const qN={kernelName:Zl,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{axis:o}=e;let r=[];return o==null?r=s.shape.map((i,a)=>a):typeof o=="number"?r=[o]:r=o,{x:()=>HN(s,n,r)}}};const jN={kernelName:ci,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{const a=dt(n,st(s,"float32")),l=me(e.shape,o);return l.length>0?_(lt(a,l),e.shape):a},b:()=>{let a=E(n,st(e,"float32"));const l=me(s.shape,o);l.length>0&&(a=_(lt(a,l),s.shape));const c=zt(s);return Yt(dt(a,st(c,"float32")))}}}};const KN={kernelName:Ti,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,Yt(zt(e)))}}};const XN={kernelName:Ri,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t,s=E(pr(e,6),Qi(e));return{x:()=>E(n,st(s,"float32"))}}};const YN={kernelName:Ei,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,st(Qi(e),"float32"))}}};const ZN={kernelName:Jl,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>_(n,e.shape)}}};const JN={kernelName:tc,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>D.runKernel(Dh,o,e)}}};const QN={kernelName:Ql,inputsToSave:["images"],gradFunc:(n,t,e)=>{const[s]=t,o={dy:n,images:s};return{images:()=>D.runKernel(Rh,o,e)}}};const tT={kernelName:ec,gradFunc:(n,t,e)=>{const{dims:s}=e,o=Ct(s,n.shape);return{x:()=>wo(n,o)}}};const eT={kernelName:Di,gradFunc:n=>({x:()=>St(n)})};const nT={kernelName:Ai,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>Yt(dt(n,E(er(e,1.5),2)))}}};const sT={kernelName:nc,inputsToSave:["condition"],gradFunc:(n,t)=>{const[e]=t;return{condition:()=>st(St(e),"float32"),t:()=>E(n,st(e,n.dtype)),e:()=>E(n,st(pd(e),n.dtype))}}};const oT={kernelName:Fi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>{const s=un(e,mt(0)),o=mt(Cc),r=mt(Ic),i=E(n,r),a=E(E(n,o),$n(st(e,"float32")));return Qe(s,i,a)}}}};const rT={kernelName:Mi,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,E(e,ct(mt(1),e)))}}};const iT={kernelName:Li,gradFunc:n=>({x:()=>St(n)})};const aT={kernelName:_i,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(ad(st(e,"float32")),n)}}};const lT={kernelName:Oi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(Bg(st(e,"float32")),n)}}};const cT={kernelName:sc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{begin:o,size:r}=e,i=s.shape,[a,l]=pc(s,o,r),c=[];for(let u=0;u<n.rank;u++)c.push([a[u],i[u]-a[u]-l[u]]);return{x:()=>gd(n,c)}}};const uT={kernelName:ac,outputsToSave:[!0],gradFunc:(n,t,e)=>{const[s]=t,{dim:o}=e,r=!0,i=E(n,s);return{logits:()=>ct(i,E(lt(i,[o],r),s))}}};const hT={kernelName:Pi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,dr(e))}}};const If={kernelName:rc,gradFunc:(n,t,e)=>{const{blockShape:s,paddings:o}=e;return{x:()=>rd(n,s,o)}}};const vf={kernelName:ic,gradFunc:(n,t,e)=>{const{axis:s}=e;return{x:()=>Ae(n,s)}}};const dT={kernelName:zi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,E(Me(st(e,"float32")),2))}}};const pT={kernelName:Lh,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(n,E(st(e,"float32"),2))}}};const fT={kernelName:Bi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=mt(2);return{a:()=>E(n,E(o,ct(e,s))),b:()=>E(n,E(o,ct(s,e)))}}};const mT={kernelName:Hi,gradFunc:n=>({x:()=>St(n)})};const gT={kernelName:Vi,inputsToSave:["a","b"],gradFunc:(n,t)=>{const[e,s]=t,o=bt(e.shape,s.shape);return{a:()=>{let a=n;const l=me(e.shape,o);return l.length>0&&(a=lt(a,l)),_(a,e.shape)},b:()=>{let a=n;const l=me(s.shape,o);return l.length>0&&(a=lt(a,l)),_(Yt(a),s.shape)}}}};const xT={kernelName:oc,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,o=s.shape.slice(),{axis:r}=e;Ct(r,s.shape).forEach(c=>{o[c]=1});const a=_(n,o),l=E(a,Vs(s.shape,"float32"));return{x:()=>l}}};const bT={kernelName:Wi,inputsToSave:["x"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>dt(n,zt(ad(e)))}}};const yT={kernelName:Ui,outputsToSave:[!0],gradFunc:(n,t)=>{const[e]=t;return{x:()=>E(ct(mt(1),zt(e)),n)}}};const wT={kernelName:Gi,inputsToSave:["x"],gradFunc:(n,t,e)=>{const[s]=t,{reps:o}=e;return{x:()=>{let i=St(s);if(s.rank===1)for(let a=0;a<o[0];++a)i=Y(i,_t(n,[a*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)i=Y(i,_t(n,[a*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)i=Y(i,_t(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else if(s.rank===4)for(let a=0;a<o[0];++a)for(let l=0;l<o[1];++l)for(let c=0;c<o[2];++c)for(let u=0;u<o[3];++u)i=Y(i,_t(n,[a*s.shape[0],l*s.shape[1],c*s.shape[2],u*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${s.rank} tensors yet.`);return i}}}};const $T={kernelName:qo,gradFunc:(n,t,e)=>{const s=e,{perm:o}=s,r=zs(o);return{x:()=>kt(n,r)}}};const CT={kernelName:lc,gradFunc:(n,t,e)=>{const s=e,{axis:o}=s;return{value:()=>Rs(n,o)}}};const IT={kernelName:cc,inputsToSave:["segmentIds"],gradFunc:(n,t)=>{const[e]=t;return{x:()=>vT(n,e)}}};function vT(n,t){const e=Bs(t,St(t)),s=ud(n,e);let o=Eo(t,mt(0,"int32"));const r=s.rank-o.rank;for(let a=0;a<r;++a)o=Ke(o,a+1);o=us(o,Vs(s.shape,"bool"));const i=St(s);return Qe(o,s,i)}const kT={kernelName:uc,gradFunc:n=>({x:()=>St(n)})};const ST=[Hx,I2,v2,k2,S2,N2,T2,E2,R2,D2,A2,F2,L2,z2,B2,V2,W2,U2,G2,H2,q2,j2,X2,K2,J2,Q2,tN,eN,nN,sN,jN,oN,rN,iN,aN,lN,uN,cN,hN,dN,pN,fN,mN,gN,xN,bN,yN,wN,$N,vN,$f,$f,kN,TN,DN,AN,FN,_N,ON,LN,MN,PN,zN,BN,VN,Cf,Cf,WN,UN,qN,KN,XN,YN,ZN,JN,QN,tT,eT,nT,sT,oT,rT,iT,aT,lT,cT,uT,hT,If,If,vf,vf,dT,fT,pT,mT,gT,xT,bT,yT,wT,$T,CT,IT,kT];for(const n of ST)Ew(n);G().prototype.abs=function(){return this.throwIfDisposed(),ge(this)};G().prototype.acos=function(){return this.throwIfDisposed(),hC(this)};G().prototype.acosh=function(){return this.throwIfDisposed(),pC(this)};G().prototype.add=function(n){return this.throwIfDisposed(),Y(this,n)};G().prototype.all=function(n,t){return this.throwIfDisposed(),Lg(this,n,t)};G().prototype.any=function(n,t){return this.throwIfDisposed(),Eu(this,n,t)};G().prototype.argMax=function(n){return this.throwIfDisposed(),Pr(this,n)};G().prototype.argMin=function(n){return this.throwIfDisposed(),bC(this,n)};G().prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,()=>"The array must have only 1 element."),_(this,[])};G().prototype.asType=function(n){return this.throwIfDisposed(),st(this,n)};G().prototype.as1D=function(){return this.throwIfDisposed(),_(this,[this.size])};G().prototype.as2D=function(n,t){return this.throwIfDisposed(),_(this,[n,t])};G().prototype.as3D=function(n,t,e){return this.throwIfDisposed(),_(this,[n,t,e])};G().prototype.as4D=function(n,t,e,s){return this.throwIfDisposed(),_(this,[n,t,e,s])};G().prototype.as5D=function(n,t,e,s,o){return this.throwIfDisposed(),_(this,[n,t,e,s,o])};G().prototype.asin=function(){return this.throwIfDisposed(),wC(this)};G().prototype.asinh=function(){return this.throwIfDisposed(),CC(this)};G().prototype.atan=function(){return this.throwIfDisposed(),vC(this)};G().prototype.atan2=function(n){return this.throwIfDisposed(),SC(this,n)};G().prototype.atanh=function(){return this.throwIfDisposed(),TC(this)};G().prototype.avgPool=function(n,t,e,s){return this.throwIfDisposed(),sd(this,n,t,e,s)};G().prototype.batchToSpaceND=function(n,t){return this.throwIfDisposed(),rd(this,n,t)};G().prototype.batchNorm=function(n,t,e,s,o){return this.throwIfDisposed(),fc(this,n,t,e,s,o)};G().prototype.broadcastTo=function(n){return this.throwIfDisposed(),Lr(this,n)};G().prototype.cast=function(n){return this.throwIfDisposed(),st(this,n)};G().prototype.ceil=function(){return this.throwIfDisposed(),tI(this)};G().prototype.clipByValue=function(n,t){return this.throwIfDisposed(),cn(this,n,t)};G().prototype.concat=function(n,t){return this.throwIfDisposed(),n instanceof ee&&(n=[n]),Ae([this,...n],t)};G().prototype.conv1d=function(n,t,e,s,o,r){return this.throwIfDisposed(),Mg(this,n,t,e,s,o,r)};G().prototype.conv2dTranspose=function(n,t,e,s,o){return this.throwIfDisposed(),Pg(this,n,t,e,s,o)};G().prototype.conv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),bo(this,n,t,e,s,o,r)};G().prototype.cos=function(){return this.throwIfDisposed(),ad(this)};G().prototype.cosh=function(){return this.throwIfDisposed(),Bg(this)};G().prototype.cumprod=function(n,t,e){return this.throwIfDisposed(),Du(this,n,t,e)};G().prototype.cumsum=function(n,t,e){return this.throwIfDisposed(),Vg(this,n,t,e)};G().prototype.depthToSpace=function(n,t){return this.throwIfDisposed(),kI(this,n,t)};G().prototype.depthwiseConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),ld(this,n,t,e,s,o,r)};G().prototype.dilation2d=function(n,t,e,s,o){return this.throwIfDisposed(),TI(this,n,t,e,s,o)};G().prototype.divNoNan=function(n){return this.throwIfDisposed(),FI(this,n)};G().prototype.div=function(n){return this.throwIfDisposed(),dt(this,n)};G().prototype.dot=function(n){return this.throwIfDisposed(),OI(this,n)};G().prototype.elu=function(){return this.throwIfDisposed(),mc(this)};G().prototype.equal=function(n){return this.throwIfDisposed(),ns(this,n)};G().prototype.erf=function(){return this.throwIfDisposed(),PI(this)};G().prototype.euclideanNorm=function(n,t){return this.throwIfDisposed(),jI(this,n,t)};G().prototype.exp=function(){return this.throwIfDisposed(),$n(this)};G().prototype.expandDims=function(n){return this.throwIfDisposed(),Ke(this,n)};G().prototype.expm1=function(){return this.throwIfDisposed(),ZI(this)};G().prototype.fft=function(){return this.throwIfDisposed(),hx(this)};G().prototype.flatten=function(){return this.throwIfDisposed(),_(this,[this.size])};G().prototype.floor=function(){return this.throwIfDisposed(),xc(this)};G().prototype.floorDiv=function(n){return this.throwIfDisposed(),Og(this,n)};G().prototype.gather=function(n,t){return this.throwIfDisposed(),ud(this,n,t)};G().prototype.greaterEqual=function(n){return this.throwIfDisposed(),Eo(this,n)};G().prototype.greater=function(n){return this.throwIfDisposed(),un(this,n)};G().prototype.ifft=function(){return this.throwIfDisposed(),Au(this)};G().prototype.irfft=function(){return this.throwIfDisposed(),Dk(this)};G().prototype.isFinite=function(){return this.throwIfDisposed(),rv(this)};G().prototype.isInf=function(){return this.throwIfDisposed(),av(this)};G().prototype.isNaN=function(){return this.throwIfDisposed(),cv(this)};G().prototype.leakyRelu=function(n){return this.throwIfDisposed(),hd(this,n)};G().prototype.lessEqual=function(n){return this.throwIfDisposed(),pr(this,n)};G().prototype.less=function(n){return this.throwIfDisposed(),Hg(this,n)};G().prototype.localResponseNormalization=function(n,t,e,s){return this.throwIfDisposed(),fv(this,n,t,e,s)};G().prototype.logSigmoid=function(){return this.throwIfDisposed(),wv(this)};G().prototype.logSoftmax=function(n){return this.throwIfDisposed(),qg(this,n)};G().prototype.logSumExp=function(n,t){return this.throwIfDisposed(),jg(this,n,t)};G().prototype.log=function(){return this.throwIfDisposed(),Cn(this)};G().prototype.log1p=function(){return this.throwIfDisposed(),dd(this)};G().prototype.logicalAnd=function(n){return this.throwIfDisposed(),us(this,n)};G().prototype.logicalNot=function(){return this.throwIfDisposed(),pd(this)};G().prototype.logicalOr=function(n){return this.throwIfDisposed(),Kg(this,n)};G().prototype.logicalXor=function(n){return this.throwIfDisposed(),Tv(this,n)};G().prototype.matMul=function(n,t,e){return this.throwIfDisposed(),Et(this,n,t,e)};G().prototype.maxPool=function(n,t,e,s){return this.throwIfDisposed(),fd(this,n,t,e,s)};G().prototype.max=function(n,t){return this.throwIfDisposed(),On(this,n,t)};G().prototype.maximum=function(n){return this.throwIfDisposed(),Bs(this,n)};G().prototype.mean=function(n,t){return this.throwIfDisposed(),ne(this,n,t)};G().prototype.min=function(n,t){return this.throwIfDisposed(),Ga(this,n,t)};G().prototype.minimum=function(n){return this.throwIfDisposed(),bc(this,n)};G().prototype.mirrorPad=function(n,t){return this.throwIfDisposed(),Lv(this,n,t)};G().prototype.mod=function(n){return this.throwIfDisposed(),Pv(this,n)};G().prototype.mul=function(n){return this.throwIfDisposed(),E(this,n)};G().prototype.neg=function(){return this.throwIfDisposed(),Yt(this)};G().prototype.norm=function(n,t,e){return this.throwIfDisposed(),gc(this,n,t,e)};G().prototype.notEqual=function(n){return this.throwIfDisposed(),zr(this,n)};G().prototype.oneHot=function(n,t=1,e=0){return this.throwIfDisposed(),vg(this,n,t,e)};G().prototype.onesLike=function(){return this.throwIfDisposed(),In(this)};G().prototype.pad=function(n,t){return this.throwIfDisposed(),gd(this,n,t)};G().prototype.pool=function(n,t,e,s,o,r){return this.throwIfDisposed(),jv(this,n,t,e,s,o,r)};G().prototype.pow=function(n){return this.throwIfDisposed(),er(this,n)};G().prototype.prelu=function(n){return this.throwIfDisposed(),bd(this,n)};G().prototype.prod=function(n,t){return this.throwIfDisposed(),Yv(this,n,t)};G().prototype.reciprocal=function(){return this.throwIfDisposed(),hk(this)};G().prototype.relu=function(){return this.throwIfDisposed(),ms(this)};G().prototype.relu6=function(){return this.throwIfDisposed(),sx(this)};G().prototype.reshapeAs=function(n){return this.throwIfDisposed(),_(this,n.shape)};G().prototype.reshape=function(n){return this.throwIfDisposed(),_(this,n)};G().prototype.resizeBilinear=function(n,t,e){return this.throwIfDisposed(),bx(this,n,t,e)};G().prototype.resizeNearestNeighbor=function(n,t,e){return this.throwIfDisposed(),yx(this,n,t,e)};G().prototype.reverse=function(n){return this.throwIfDisposed(),wo(this,n)};G().prototype.rfft=function(){return this.throwIfDisposed(),dx(this)};G().prototype.round=function(){return this.throwIfDisposed(),ox(this)};G().prototype.rsqrt=function(){return this.throwIfDisposed(),rx(this)};G().prototype.selu=function(){return this.throwIfDisposed(),ix(this)};G().prototype.separableConv2d=function(n,t,e,s,o,r){return this.throwIfDisposed(),ax(this,n,t,e,s,o,r)};G().prototype.sigmoid=function(){return this.throwIfDisposed(),dr(this)};G().prototype.sign=function(){return this.throwIfDisposed(),wk(this)};G().prototype.sin=function(){return this.throwIfDisposed(),lx(this)};G().prototype.sinh=function(){return this.throwIfDisposed(),cx(this)};G().prototype.slice=function(n,t){return this.throwIfDisposed(),_t(this,n,t)};G().prototype.softmax=function(n){return this.throwIfDisposed(),Cd(this,n)};G().prototype.softplus=function(){return this.throwIfDisposed(),Zi(this)};G().prototype.spaceToBatchND=function(n,t){return this.throwIfDisposed(),xd(this,n,t)};G().prototype.split=function(n,t){return this.throwIfDisposed(),an(this,n,t)};G().prototype.sqrt=function(){return this.throwIfDisposed(),Me(this)};G().prototype.square=function(){return this.throwIfDisposed(),zt(this)};G().prototype.squaredDifference=function(n){return this.throwIfDisposed(),px(this,n)};G().prototype.squeeze=function(n){return this.throwIfDisposed(),Ji(this,n)};G().prototype.stack=function(n,t){this.throwIfDisposed();const e=n instanceof ee?[this,n]:[this,...n];return Rs(e,t)};G().prototype.step=function(n){return this.throwIfDisposed(),Qi(this,n)};G().prototype.stridedSlice=function(n,t,e,s,o,r,i,a){return this.throwIfDisposed(),zk(this,n,t,e,s,o,r,i,a)};G().prototype.sub=function(n){return this.throwIfDisposed(),ct(this,n)};G().prototype.sum=function(n,t){return this.throwIfDisposed(),lt(this,n,t)};G().prototype.tan=function(){return this.throwIfDisposed(),Vk(this)};G().prototype.tanh=function(){return this.throwIfDisposed(),od(this)};G().prototype.tile=function(n){return this.throwIfDisposed(),Fn(this,n)};G().prototype.toBool=function(){return this.throwIfDisposed(),st(this,"bool")};G().prototype.toFloat=function(){return this.throwIfDisposed(),st(this,"float32")};G().prototype.toInt=function(){return this.throwIfDisposed(),st(this,"int32")};G().prototype.topk=function(n,t){return this.throwIfDisposed(),Uk(this,n,t)};G().prototype.transpose=function(n){return this.throwIfDisposed(),kt(this,n)};G().prototype.unique=function(n){return this.throwIfDisposed(),qk(this,n)};G().prototype.unsortedSegmentSum=function(n,t){return this.throwIfDisposed(),mx(this,n,t)};G().prototype.unstack=function(n){return this.throwIfDisposed(),$o(this,n)};G().prototype.where=function(n,t){return this.throwIfDisposed(),Qe(n,this,t)};G().prototype.zerosLike=function(){return this.throwIfDisposed(),St(this)};class Gn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,Gn.prototype)}}class yn extends Error{constructor(t){super(t),Object.setPrototypeOf(this,yn.prototype)}}class R extends Error{constructor(t){super(t),Object.setPrototypeOf(this,R.prototype)}}class xt extends Error{constructor(t){super(t),Object.setPrototypeOf(this,xt.prototype)}}class sp extends Error{constructor(t){super(t),Object.setPrototypeOf(this,sp.prototype)}}class jx{constructor(t){this.maxEntries=t||100,this.cache=new Map}get(t){let e;return this.cache.has(t)&&(e=this.cache.get(t),this.cache.delete(t),this.cache.set(t,e)),e}put(t,e){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxEntries){const s=this.cache.keys().next().value;this.cache.delete(s)}this.cache.set(t,e)}getMaxEntries(){return this.maxEntries}setMaxEntries(t){if(t<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${t}.`);if(this.maxEntries>t)for(let e=0;e<this.maxEntries-t;e++){const s=this.cache.keys().next().value;this.cache.delete(s)}this.maxEntries=t}}function Io(n,t){if(Array.isArray(n)){let e=[];for(let s=0;s<t;s++)e=e.concat(n);return e}else{const e=new Array(t);return e.fill(n),e}}function Hn(n,t){if(!n)throw new sp(t)}function kf(n,t){let e=0;for(const s of n)s===t&&e++;return e}function We(n){return n.length===1?n[0]:n}function Ut(n){return Array.isArray(n)?n:[n]}function ls(n){const e=n.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return e[0]!=="_"?e:"private"+e}function no(n){return n.length<=1||n.indexOf("_")===-1?n:n.replace(/[_]+(\w|$)/g,(t,e)=>e.toUpperCase())}let dn={};function op(n){if(n==null)return null;const t={};return t.className=n.getClassName(),t.config=n.getConfig(),t}function _u(n){if(!(n==null||typeof n!="object"))if(Array.isArray(n))n.forEach(t=>_u(t));else{const t=Object.keys(n);for(const e of t){const s=n[e];s!=null&&typeof s=="object"&&(!Array.isArray(s)&&s.type==="ndarray"&&typeof s.value=="number"?n[e]=s.value:_u(s))}}}function sa(n,t={},e={},s="object",o=!1){if(typeof n=="string"){const r=n;let i;if(r in e)i=e[r];else if(r in dn)i=dn[r];else if(i=t[r],i==null)throw new R(`Unknown ${s}: ${n}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{const r=n;if(r.className==null||r.config==null)throw new R(`${s}: Improper config format: ${JSON.stringify(r)}.
'className' and 'config' must set.`);const i=r.className;let a,l;if(i in e?[a,l]=e[i]:i in dn?[a,l]=dn.className:i in t&&([a,l]=t[i]),a==null)throw new R(`Unknown ${s}: ${i}. This may be due to one of the following reasons:
1. The ${s} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${s} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){const c={};for(const p of Object.keys(dn))c[p]=dn[p];for(const p of Object.keys(e))c[p]=e[p];const u=r.config;u.customObjects=c;const h=Object.assign({},dn);for(const p of Object.keys(e))dn[p]=e[p];_u(r.config);const d=l(a,r.config,e,o);return dn=Object.assign({},h),d}else{const c=Object.assign({},dn);for(const h of Object.keys(e))dn[h]=e[h];const u=new a(r.config);return dn=Object.assign({},c),u}}}function NT(n,t){return n<t?-1:n>t?1:0}function $a(n,t){return-1*NT(n,t)}function Ns(n){if(n==null)return n;const t=[];for(const e of n)t.indexOf(e)===-1&&t.push(e);return t}function TT(n){if(n==null)throw new R(`Invalid value in obj: ${JSON.stringify(n)}`);for(const t in n)if(n.hasOwnProperty(t))return!1;return!0}function Do(n,t,e){if(e!=null&&n.indexOf(e)<0)throw new R(`${e} is not a valid ${t}.  Valid values are ${n} or null/undefined.`)}function rp(n,t,e=0,s=1/0){return Hn(e>=0),Hn(s>=e),Array.isArray(n)&&n.length>=e&&n.length<=s&&n.every(o=>typeof o===t)}function ye(n,t){Array.isArray(n)?(I(n.length>0,()=>`${t} is unexpectedly an empty array.`),n.forEach((e,s)=>ye(e,`element ${s+1} of ${t}`))):I(Number.isInteger(n)&&n>0,()=>`Expected ${t} to be a positive integer, but got ${Kx(n)}.`)}function Kx(n){return n===null?"null":Array.isArray(n)?"["+n.map(t=>Kx(t)).join(",")+"]":typeof n=="string"?`"${n}"`:`${n}`}function ET(n,t,e){let s=e!=null?e():Ve(),o;return(...i)=>{const a=e!=null?e():Ve();return a-s<t||(s=a,o=n(...i)),o}}function Xx(n){return n==="relu"?"relu":n==="linear"?"linear":n==="elu"?"elu":null}let RT=0;function Yx(){return RT++}const Ca={};function vc(n=""){return n in Ca||(Ca[n]=0),Ca[n]+=1,n+Ca[n].toString()}const DT=["channelsFirst","channelsLast"],AT=["nearest","bilinear"],FT=["valid","same","causal"],_T=["max","avg"],OT=["sum","mul","concat","ave"];const Mo=new Map;function ie(n){Do(DT,"DataFormat",n)}function LT(n){Do(AT,"InterpolationFormat",n)}function hn(n){Do(FT,"PaddingMode",n)}function Zx(n){Do(_T,"PoolMode",n)}const Mr=[],Sf="/";function co(n,t){Mr.push(n);try{const e=t();return Mr.pop(),e}catch(e){throw Mr.pop(),e}}function MT(){return Mr.length===0?"":Mr.join(Sf)+Sf}function Jx(n){if(!tb(n))throw new Error("Not a valid tensor name: '"+n+"'");return MT()+n}function Qx(n){if(!tb(n))throw new Error("Not a valid tensor name: '"+n+"'");Mo.has(n)||Mo.set(n,0);const t=Mo.get(n);if(Mo.set(n,Mo.get(n)+1),t>0){const e=`${n}_${t}`;return Mo.set(e,1),e}else return n}const PT=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function tb(n){return!!n.match(PT)}function zT(n){return n===parseInt(n.toString(),10)}function Ts(n,t,e){t==null&&(t=0),e==null&&(e=n.length);let s=1;for(let o=t;o<e;++o)s*=n[o];return s}function nr(n){if(n.length===0)return Number.NaN;let t=Number.POSITIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s<t&&(t=s)}return t}function Ds(n){if(n.length===0)return Number.NaN;let t=Number.NEGATIVE_INFINITY;for(let e=0;e<n.length;e++){const s=n[e];s>t&&(t=s)}return t}function Mn(n,t){if(t<n)throw new R(`end (${t}) < begin (${n}) is forbidden.`);const e=[];for(let s=n;s<t;++s)e.push(s);return e}let Kc;function he(){return Kc==null&&(Kc=G$().epsilon()),Kc}function Pn(){return"channelsLast"}function Jn(n,t){return st(n,t)}function oa(n,t=-1){const e=n.shape.slice();return t<0&&(t=e.length+t+1),e.splice(t,0,1),_(n,e)}function BT(n,t){return P(()=>{if(n.shape.length!==2)throw new R(`repeat() expects a rank-2 tensor, but received a rank-${n.shape.length} tensor.`);const e=oa(n,1);return Ou(e,[1,t,1])})}function VT(n){const t=[Ts(n.shape)];return _(n,t)}function WT(n){if(n.rank<=1)throw new R(`batchFlatten requires a minimum rank of 2. Got rank: ${n.rank}.`);const t=[n.shape[0],Ts(n.shape,1)];return _(n,t)}function uo(n,t,e){return P(()=>{switch(n.rank){case 1:return wd(n,t,e);case 2:return ux(n,[t,0],[e,n.shape[1]]);case 3:return $d(n,[t,0,0],[e,n.shape[1],n.shape[2]]);case 4:return Ha(n,[t,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3]]);case 5:return _t(n,[t,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4]]);case 6:return _t(n,[t,0,0,0,0,0],[e,n.shape[1],n.shape[2],n.shape[3],n.shape[4],n.shape[5]]);default:throw new R(`sliceAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Xc(n,t,e){return P(()=>{switch(n.rank){case 1:return wd(n,t,e);case 2:return ux(n,[0,t],[n.shape[0],e]);case 3:return $d(n,[0,0,t],[n.shape[0],n.shape[1],e]);case 4:return Ha(n,[0,0,0,t],[n.shape[0],n.shape[1],n.shape[2],e]);default:throw new R(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function Ia(n,t,e,s){return P(()=>{switch(n.rank){case 1:return wd(n,t,e);case 2:switch(s){case 1:return uo(n,t,e);case 2:return Xc(n,t,e);default:throw new R(`The axis is not within the rank of the tensor ${s}`)}case 3:switch(s){case 1:return uo(n,t,e);case 2:return $d(n,[0,t,0],[n.shape[0],e,n.shape[2]]);case 3:return Xc(n,t,e);default:throw new R(`The axis is not within the rank of the tensor ${s}`)}case 4:switch(s){case 1:return uo(n,t,e);case 2:return Ha(n,[0,t,0,0],[n.shape[0],e,n.shape[2],n.shape[3]]);case 3:return Ha(n,[0,0,t,0],[n.shape[0],n.shape[1],e,n.shape[3]]);case 4:return Xc(n,t,e);default:throw new R(`The axis is not within the rank of the tensor ${s}`)}default:throw new R(`sliceAlongLastAxis() received an unsupported tensor rank: ${n.rank}`)}})}function ip(n,t=-1){let e;return t<0&&(e=n[0].rank,e!==0?t=e:t=0),t===n[0].rank&&(t=-1),Ae(n,t)}function Nf(n,t){switch(n.rank){case 1:return sI([n,t]);case 2:return rI([n,t],0);case 3:return aI([n,t],0);case 4:return cI([n,t],0);default:throw new R(`concatAlongFirstAxis() received an unsupported tensor rank: ${n.rank}`)}}function Ou(n,t){if(Array.isArray(t)||(t=[t]),n.rank!==t.length)throw new R(`The length of input n (${t.length}) does not match the number of dimensions in input x (${n.rank})`);return Fn(n,t)}function kc(n,t=0,e=1,s,o){return lk(n,t,e,s,o)}function Qn(n,t,e,s){if(n.rank<2||t.rank<2)throw new xt(`dot requires both inputs to be rank >= 2 but got x shape = ${n.shape} and y shape = ${t.shape}`);if(t.rank>=3){const o=n.shape.slice(-1)[0],r=t.shape.slice(-2)[0];if(o!==r)throw new xt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${n.shape} and  y shape = ${t.shape}`)}if(n.rank===2&&t.rank===2)return ff({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Lu(n.rank,s,Pn()):null,activation:e});{const o=n.shape.slice(),r=o.pop();n=_(n,[-1,r]);const i=t.shape.slice(),a=i.pop(),l=i.pop(),c=[...i,a],u=Array.from({length:t.rank},(f,m)=>m===0?t.rank-2:m<=t.rank-2?m-1:m);t=_(kt(t,u),[l,-1]);const h=[...o,...c];return _(ff({a:n,b:t,transposeA:!1,transposeB:!1,bias:s?Lu(n.rank,s,Pn()):null,activation:e}),h)}}function eb(n,t,e){return P(()=>(Array.isArray(t)?t=Ze(t,"int32"):t=st(t,"int32"),ud(n,t,e)))}function ra(n){return E(n,n)}function Lu(n,t,e){const s=t.shape;if(t.rank!==1&&t.rank!==n)throw new R(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${n}`);if(n===5){if(e==="channelsFirst")return s.length===1?_(t,[1,s[0],1,1,1]):_(t,[1,s[3],s[0],s[1],s[2]]);if(e==="channelsLast")return s.length===1?_(t,[1,1,1,1,s[0]]):_(t,[1].concat(s))}else if(n===4){if(e==="channelsFirst")return s.length===1?_(t,[1,s[0],1,1]):_(t,[1,s[2],s[0],s[1]]);if(e==="channelsLast")return s.length===1?_(t,[1,1,1,s[0]]):_(t,[1].concat(s))}else if(n===3){if(e==="channelsFirst")return s.length===1?_(t,[1,s[0],1]):_(t,[1,s[1],s[0]]);if(e==="channelsLast")return s.length===1?_(t,[1,1,s[0]]):_(t,[1].concat(s))}else if(n<3)return t;throw new R(`Unsupported input rank by biasAdd: ${t.rank}`)}function Vn(n,t,e){return P(()=>(e==null&&(e=Pn()),ie(e),Y(n,Lu(n.rank,t,e))))}function UT(n,t=1){if(t!==1)throw new xt(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return mc(n)}function GT(n){return P(()=>dt(n,Y(ge(n),1)))}function nb(n,t,e,s){return P(()=>Jk(n,t,e,s))}function HT(n){return P(()=>{const t=Y(.5,E(.2,n));return cn(t,0,1)})}function ia(n,t,e=!1){return e?n():t()}const qT=["fanIn","fanOut","fanAvg"],jT=["normal","uniform","truncatedNormal"];function KT(n){Do(qT,"FanMode",n)}function XT(n){Do(jT,"Distribution",n)}class Sn extends hr{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}}class sb extends Sn{apply(t,e){return be(t,e)}}sb.className="Zeros";j(sb);class ap extends Sn{apply(t,e){return Vs(t,e)}}ap.className="Ones";j(ap);class ob extends Sn{constructor(t){if(super(),typeof t!="object")throw new R(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new R(`config must have value set but got ${t}`);this.value=t.value}apply(t,e){return P(()=>E(mt(this.value),Vs(t,e)))}getConfig(){return{value:this.value}}}ob.className="Constant";j(ob);class rb extends Sn{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,e){return yc(t,this.minval,this.maxval,e)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}rb.className="RandomUniform";j(rb);class ib extends Sn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`randomNormal does not support dType ${e}.`);return kc(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}ib.className="RandomNormal";j(ib);class ab extends Sn{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,e){if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`truncatedNormal does not support dType ${e}.`);return fx(t,this.mean,this.stddev,e,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}ab.className="TruncatedNormal";j(ab);class lb extends Sn{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,e){return P(()=>{if(t.length!==2||t[0]!==t[1])throw new R("Identity matrix initializer can only be used for 2D square matrices.");return E(this.gain,Gg(t[0]))})}getConfig(){return{gain:this.gain}}}lb.className="Identity";j(lb);function YT(n,t="channelsLast"){let e,s;if(ie(t),n.length===2)e=n[0],s=n[1];else if([3,4,5].indexOf(n.length)!==-1){if(t==="channelsFirst"){const o=Ts(n,2);e=n[1]*o,s=n[0]*o}else if(t==="channelsLast"){const o=Ts(n,0,n.length-2);e=n[n.length-2]*o,s=n[n.length-1]*o}}else{const o=Ts(n);e=Math.sqrt(o),s=Math.sqrt(o)}return[e,s]}class tn extends Sn{constructor(t){if(super(),t.scale<0)throw new R(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,KT(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,XT(this.distribution),this.seed=t.seed}apply(t,e){const s=YT(t),o=s[0],r=s[1];let i=this.scale;if(this.mode==="fanIn"?i/=Math.max(1,o):this.mode==="fanOut"?i/=Math.max(1,r):i/=Math.max(1,(o+r)/2),this.distribution==="normal"){const a=Math.sqrt(i);if(e=e||"float32",e!=="float32"&&e!=="int32")throw new xt(`${this.getClassName()} does not support dType ${e}.`);return fx(t,0,a,e,this.seed)}else{const a=Math.sqrt(3*i);return yc(t,-a,a,e)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}tn.className="VarianceScaling";j(tn);class lp extends tn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}lp.className="GlorotUniform";j(lp);class cp extends tn{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}cp.className="GlorotNormal";j(cp);class up extends tn{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}up.className="HeNormal";j(up);class hp extends tn{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}hp.className="HeUniform";j(hp);class dp extends tn{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return tn.className}}dp.className="LeCunNormal";j(dp);class pp extends tn{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return tn.className}}pp.className="LeCunNormal";j(pp);class cb extends Sn{constructor(t){if(super(),this.DEFAULT_GAIN=1,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed,this.seed!=null)throw new xt("Random seed is not implemented for Orthogonal Initializer yet.")}apply(t,e){return P(()=>{if(t.length<2)throw new xt("Shape must be at least 2D.");t[0]*t[1]>2e3&&console.warn(`Orthogonal initializer is being called on a matrix with more than 2000 (${t[0]*t[1]}) elements: Slowness may result.`);const s=t[0]>t[1]?[t[1],t[0]]:t,o=kc(s,0,1,"float32");let r=x2.gramSchmidt(o);return t[0]>t[1]&&(r=kt(r)),E(this.gain,r)})}getConfig(){return{gain:this.gain,seed:this.seed}}}cb.className="Orthogonal";j(cb);const Tf={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function Ef(n,t={}){return sa(n,mn.getMap().classNameMap,t,"initializer")}function Xt(n){return op(n)}function jt(n){if(typeof n=="string"){const t=n in Tf?Tf[n]:n;if(t==="GlorotNormal")return new cp;if(t==="GlorotUniform")return new lp;if(t==="HeNormal")return new up;if(t==="HeUniform")return new hp;if(t==="LeCunNormal")return new dp;if(t==="LeCunUniform")return new pp;{const e={};return e.className=t,e.config={},Ef(e)}}else return n instanceof Sn?n:Ef(n)}function Mu(n){return Array.isArray(n)&&Array.isArray(n[0])}function qa(n){return n.length===0?[]:Array.isArray(n[0])?n:[n]}function gt(n){let t;if(Array.isArray(n)){if(n.length!==1)throw new R(`Expected Tensor length to be 1; got ${n.length}`);t=n[0]}else t=n;return t}function Tt(n){if(Array.isArray(n)&&Array.isArray(n[0])){if(n.length===1)return n=n,n[0];throw new R(`Expected exactly 1 Shape; got ${n.length}`)}else return n}function ja(n){let t=0;for(const e of n)e.shape.length===0?t+=1:t+=e.shape.reduce((s,o)=>s*o);return t}const Rf="Variable";class ZT{constructor(t,e="float32",s=Rf,o=!0,r=null){this.dtype=e??"float32",this.shape=t.shape,this.id=Yx(),s=s??Rf,this.originalName=Jx(s),this.name=Qx(this.originalName),this.trainable_=o,this.constraint=r,this.val=Xk(t,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(t){return this.assertNotDisposed(),JT(this.val,t),this.val.id!==t.id&&(this.val.assign(t),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(t){this.trainable_=t,this.val.trainable=t}}function JT(n,t){if(n.shape.toString()!==t.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(n.shape)+" vs. "+JSON.stringify(t.shape))}function Pu(n){return n.map(t=>t.read())}function fp(n){n.forEach(t=>{t[0].write(t[1])})}class de{constructor(t){this.dtype=t.dtype,this.shape=t.shape,t.shape!=null?this.ndim=t.shape.length:this.ndim=t.ndim,this.maxNDim=t.maxNDim,this.minNDim=t.minNDim,this.axes=t.axes||{}}}class jn{constructor(t,e,s,o,r,i,a){this.dtype=t,this.shape=e,this.sourceLayer=s,this.inputs=o,this.callArgs=r,this.outputTensorIndex=a,this.id=Yx(),i!=null&&(this.originalName=Jx(i),this.name=Qx(this.originalName)),this.rank=e.length}}let QT=0;class Sc{constructor(t,e){this.callArgs=e,this.id=QT++,this.outboundLayer=t.outboundLayer,this.inboundLayers=t.inboundLayers,this.nodeIndices=t.nodeIndices,this.tensorIndices=t.tensorIndices,this.inputTensors=t.inputTensors,this.outputTensors=t.outputTensors,this.inputMasks=t.inputMasks,this.outputMasks=t.outputMasks,this.inputShapes=t.inputShapes,this.outputShapes=t.outputShapes;for(const s of t.inboundLayers)s!=null&&s.outboundNodes.push(this);t.outboundLayer.inboundNodes.push(this)}getConfig(){const t=[];for(const e of this.inboundLayers)e!=null?t.push(e.name):t.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:t,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}}let tE=0;class It extends hr{constructor(t={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=tE++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let e=t.name;if(!e){const s=this.getClassName();e=ls(s)+"_"+vc(s)}if(this.name=e,this.trainable_=t.trainable==null?!0:t.trainable,t.inputShape!=null||t.batchInputShape!=null){let s;if(t.batchInputShape!=null)s=t.batchInputShape;else if(t.inputShape!=null){let r=null;t.batchSize!=null&&(r=t.batchSize),s=[r].concat(t.inputShape)}this.batchInputShape=s;let o=t.dtype;o==null&&(o=t.inputDType),o==null&&(o="float32"),this.dtype=o}t.weights!=null?this.initialWeights=t.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(t,e){return t.name+"_ib-"+e.toString()}getNodeAtIndex(t,e){if(this.inboundNodes.length===0)throw new yn(`The layer has never been called and thus has no defined ${e}.`);if(this.inboundNodes.length<=t)throw new R(`Asked to get ${e} at node ${t}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[t]}getInputAt(t){return We(this.getNodeAtIndex(t,"input").inputTensors)}getOutputAt(t){return We(this.getNodeAtIndex(t,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Gn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Gn(`Layer ${this.name} is not connected, no input to return.`);return We(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Gn(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Gn(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return We(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(t=>t())}get updates(){return this._updates}get built(){return this._built}set built(t){this._built=t}get trainable(){return this.trainable_}set trainable(t){this._trainableWeights.forEach(e=>e.trainable=t),this.trainable_=t}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(t=>t.trainable):[]}set trainableWeights(t){this._trainableWeights=t}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(t=>!t.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(t){this._nonTrainableWeights=t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(t){if(t=Ut(t),this.inputSpec==null||this.inputSpec.length===0)return;const e=Ut(this.inputSpec);if(t.length!==e.length)throw new R(`Layer ${this.name} expects ${e.length} inputs, but it received ${t.length} input tensors. Input received: ${t}`);for(let s=0;s<t.length;s++){const o=t[s],r=e[s];if(r==null)continue;const i=o.rank;if(r.ndim!=null&&i!==r.ndim)throw new R(`Input ${s} is incompatible with layer ${this.name}: expected ndim=${r.ndim}, found ndim=${i}`);if(r.maxNDim!=null&&i>r.maxNDim)throw new R(`Input ${s} is incompatible with layer ${this.name}: expected max_ndim=${r.maxNDim}, found ndim=${i}`);if(r.minNDim!=null&&i<r.minNDim)throw new R(`Input ${s} is incompatible with layer ${this.name}: expected min_ndim=${r.minNDim}, found ndim=${i}.`);if(r.dtype!=null&&o.dtype!==r.dtype)throw new R(`Input ${s} is incompatible with layer ${this.name} : expected dtype=${r.dtype}, found dtype=${o.dtype}.`);if(r.axes){const a=o.shape;for(const l in r.axes){const c=Number(l),u=r.axes[l],h=c>=0?a[c]:a[a.length+c];if(u!=null&&[u,null].indexOf(h)===-1)throw new R(`Input ${s} is incompatible with layer ${this.name}: expected axis ${c} of input shape to have value ${u} but got shape ${a}.`)}}if(r.shape!=null)for(let a=0;a<r.shape.length;++a){const l=r.shape[a],c=o.shape[a];if(l!=null&&c!=null&&l!==c)throw new R(`Input ${s} is incompatible with layer ${this.name}: expected shape=${r.shape}, found shape=${o.shape}.`)}}}call(t,e){return t}invokeCallHook(t,e){this._callHook!=null&&this._callHook(t,e)}setCallHook(t){this._callHook=t}clearCallHook(){this._callHook=null}apply(t,e){e=e||{},this.assertNotDisposed();const s=Ut(t);let o=!0;for(const i of s)if(!(i instanceof jn)){o=!1;break}let r=!0;for(const i of s)if(i instanceof jn){r=!1;break}if(o===r)throw new R("Arguments to apply() must be all SymbolicTensors or all Tensors");return co(this.name,()=>{if(!this.built){this.assertInputCompatibility(t);const i=[];for(const a of Ut(t))i.push(a.shape);this.build(We(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&r&&(this._refCount=1)}if(this.assertInputCompatibility(t),r){let i=this.call(t,e);const a=Ut(i),l=[];for(let c of a)s.indexOf(c)!==-1&&(c=c.clone()),l.push(c);if(i=We(l),this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{const i=eE(t),a=this.computeOutputShape(i);let l;const c=nE(t);if(this.warnOnIncompatibleInputShape(Array.isArray(t)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((u,h)=>new jn(c,u,this,Ut(t),e,this.name,h)):l=new jn(c,a,this,Ut(t),e,this.name),this.addInboundNode(t,l,null,null,i,a,e),this._refCount++,this.activityRegularizer!=null)throw new xt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(t){if(this.batchInputShape!=null)if(t.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(t)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let e=!1;this.batchInputShape.forEach((s,o)=>{s!=null&&t[o]!=null&&t[o]!==s&&(e=!0)}),e&&console.warn(`The shape of the input tensor (${JSON.stringify(t)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Gn(`The layer ${this.name} has never been called and thus has no defined output shape.`);const t=[];for(const e of this.inboundNodes){const s=JSON.stringify(e.outputShapes);t.indexOf(s)===-1&&t.push(s)}if(t.length===1){const e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new Gn(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new yn(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return ja(this.weights)}build(t){this.built=!0}getWeights(t=!1){return Pu(t?this.trainableWeights:this.weights)}setWeights(t){P(()=>{const e=this.weights;if(e.length!==t.length)throw new R(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${t.length}, but the layer was expecting ${e.length} weights. Provided weights: ${t}...`);if(e.length===0)return;const s=[],o=Pu(e);for(let r=0;r<o.length;++r){const i=o[r],a=e[r],l=t[r];if(!Rt(i.shape,l.shape))throw new R(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);s.push([a,l])}fp(s)})}addWeight(t,e,s,o,r,i,a,l){if(this._addedWeightNames.indexOf(t)!==-1)throw new R(`Duplicate weight name ${t} for layer ${this.name}`);this._addedWeightNames.push(t),s==null&&(s="float32"),this.fastWeightInitDuringBuild&&(o=l!=null?l():jt("zeros"));const c=o.apply(e,s),u=new ZT(c,s,t,i,a);return c.dispose(),r!=null&&this.addLoss(()=>r.apply(u.read())),i==null&&(i=!0),i?this._trainableWeights.push(u):this._nonTrainableWeights.push(u),u}setFastWeightInitDuringBuild(t){this.fastWeightInitDuringBuild=t}addLoss(t){t==null||Array.isArray(t)&&t.length===0||(t=Ut(t),this._losses!==void 0&&this._losses!==null&&this.losses.push(...t))}computeOutputShape(t){return t}computeMask(t,e){if(!this.supportsMasking){if(e!=null)if(Array.isArray(e))e.forEach(s=>{if(s!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return e}addInboundNode(t,e,s,o,r,i,a=null){const l=Ut(t);e=Ut(e),s=Ut(s),o=Ut(o),r=qa(r),i=qa(i);const c=[],u=[],h=[];for(const d of l)c.push(d.sourceLayer),u.push(d.nodeIndex),h.push(d.tensorIndex);new Sc({outboundLayer:this,inboundLayers:c,nodeIndices:u,tensorIndices:h,inputTensors:l,outputTensors:e,inputMasks:s,outputMasks:o,inputShapes:r,outputShapes:i},a);for(let d=0;d<e.length;d++)e[d].sourceLayer=this,e[d].nodeIndex=this.inboundNodes.length-1,e[d].tensorIndex=d}getConfig(){const t={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(t.batchInputShape=this.batchInputShape),this.dtype!=null&&(t.dtype=this.dtype),t}disposeWeights(){return this.weights.forEach(t=>t.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let t=0;return--this._refCount===0&&(t=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:t}}}function eE(n){n=Ut(n);const t=[];for(const e of n)t.push(e.shape);return We(t)}function nE(n){return"float32"}function ub(n,t,e){if((t==null||e!=null&&e>0)&&(t=n.sourceLayer,e=n.nodeIndex),t.inboundNodes.length===0)return[n];{const s=t.inboundNodes[e];if(s.inboundLayers.length===0)return s.inputTensors;{const o=[];for(let r=0;r<s.inboundLayers.length;r++){const i=s.inputTensors[r],a=s.inboundLayers[r],l=s.nodeIndices[r],c=ub(i,a,l);for(const u of c)o.indexOf(u)===-1&&o.push(u)}return o}}}class aa extends It{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:vc("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new R("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let e=t.batchInputShape;if(e==null){if(t.inputShape==null)throw new R("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");e=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new R("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");const s=t.dtype||"float32";this.batchInputShape=e,this.dtype=s,this.inputSpec=[{shape:e}];const o=new jn(this.dtype,this.batchInputShape,this,[],{},this.name);o.nodeIndex=0,o.tensorIndex=0,new Sc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[o],outputTensors:[o],inputMasks:[null],outputMasks:[null],inputShapes:[e],outputShapes:[e]})}apply(t,e){throw new R(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}aa.className="InputLayer";j(aa);function sE(n){if(n.batchShape==null&&n.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(n.batchShape!=null&&n.shape!=null)throw new R("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=n.batchShape;n.shape!=null&&t==null&&(t=[null].concat(n.shape));let e=n.dtype;return e==null&&(e="float32"),new aa({batchInputShape:t,name:n.name,dtype:e,sparse:n.sparse}).inboundNodes[0].outputTensors[0]}function oE(n,t){if(n.dtype==null||n.dtype===t.dtype)return t;try{return st(t,n.dtype)}catch{throw new R(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${n.name}' (${n.dtype}).`)}}class Is{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof Is)for(const e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(const e of t)this.add(e.key,e.value)}}add(t,e,s){if(this.id2Value[t.id]==null)this.id2Value[t.id]=oE(t,e),this.name2Id[t.name]=t.id,s!=null&&(this.id2Mask[t.id]=s);else throw new R(`Duplicate key: name=${t.name}, id=${t.id}`);return this}addFeed(t){this.add(t.key,t.value)}hasKey(t){return this.id2Value[t.id]!=null}names(){return Object.keys(this.name2Id)}getValue(t){if(t instanceof jn){if(this.id2Value[t.id]==null)throw new R(`Nonexistent key: ${t.name}`);return this.id2Value[t.id]}else{const e=this.name2Id[t];if(e==null)throw new R(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Value[e]}}getMask(t){if(t instanceof jn){if(this.id2Value[t.id]==null)throw new R(`Nonexistent key: ${t.name}`);return this.id2Mask[t.id]}else{const e=this.name2Id[t];if(e==null)throw new R(`Feed dict has no SymbolicTensor name: ${t}`);return this.id2Mask[e]}}disposeMasks(){this.id2Mask!=null&&wt(this.id2Mask)}}const Ka=new jx,Xa=new jx;function rE(n){Ka!=null&&Ka.setMaxEntries(n),Xa!=null&&Xa.setMaxEntries(n)}function Dr(n,t,e,s){const o=e==null?!1:e.training,r=Array.isArray(n),i=r?n:[n],a=i.map(f=>f.name),l=[],c=t.names();for(const f of a)c.indexOf(f)!==-1?l.push(t.getValue(f)):l.push(null);s!=null&&(s.maxNumTensors=-1/0,s.minNumTensors=1/0);const u=a.join(",")+"|"+t.names().sort().join(",");let h=Ka.get(u),d;if(h==null){const f=iE(i,t);h=f.sorted,d=f.recipientCounts,Ka.put(u,h),Xa.put(u,d)}d={},o||Object.assign(d,Xa.get(u));const p=new Is(t);for(let f=0;f<h.length;++f){if(s!=null){const N=Nu().numTensors;N>s.maxNumTensors&&(s.maxNumTensors=N),N<s.minNumTensors&&(s.minNumTensors=N)}const m=h[f],g=m.sourceLayer;if(g instanceof aa)continue;const x=[],b=[],w=[];let y=!1;for(const N of m.inputs){const T=p.getValue(N),F=p.getMask(N);x.push(T),b.push(F),F!=null&&(y=!0),o||(d[N.name]--,d[N.name]===0&&!t.hasKey(N)&&a.indexOf(N.name)===-1&&!T.isDisposed&&N.sourceLayer.stateful!==!0&&w.push(T))}y&&(e=e||{},e.mask=b[0]);const $=Ut(g.apply(x,e));let C=null;g.supportsMasking&&(C=g.computeMask(x,b));const v=lE(m),k=Array.isArray(v)?v:[v];for(let N=0;N<k.length;++N){p.hasKey(k[N])||p.add(k[N],$[N],Array.isArray(C)?C[0]:C);const T=a.indexOf(k[N].name);T!==-1&&(l[T]=$[N])}o||wt(w)}return p.disposeMasks(),r?l:l[0]}function iE(n,t){I(n!=null&&n.length>0,()=>"Expected at least one fetch, got none");let e=[],s={};if(n.length===1){const o=Df(n[0],t);e=o.sorted,s=o.recipientMap}else{const o=new Set;for(const r of n){const{sorted:i,recipientMap:a}=Df(r,t);for(const l of i)o.has(l.name)||(e.push(l),o.add(l.name));for(const l in a)s[l]==null&&(s[l]=new Set),a[l].forEach(c=>s[l].add(c))}}return{sorted:e,recipientCounts:aE(s)}}function aE(n){const t={};for(const e in n)t[e]=n[e].size;return t}function Df(n,t){const e=new Set,s=[],o={};for(const a of t.names())e.add(a);const r=[],i=[];for(r.push(n);r.length>0;){const a=r[r.length-1];if(e.has(a.name)){r.pop();continue}const l=i[i.length-1]===r.length-1;if(a.inputs.length===0||l)r.pop(),s.push(a),e.add(a.name),l&&i.pop();else{i.push(r.length-1);for(const c of a.inputs)o[c.name]==null&&(o[c.name]=new Set),o[c.name].add(a.name),!e.has(c.name)&&r.push(c)}}return{sorted:s,recipientMap:o}}function lE(n){let t;if(n.sourceLayer.inboundNodes.length===1)t=n.sourceLayer.output;else{let e=null;for(let s=0;s<n.sourceLayer.inboundNodes.length;++s)for(const o of n.sourceLayer.inboundNodes[s].outputTensors)if(o.id===n.id){e=s;break}t=n.sourceLayer.getOutputAt(e)}return t}const cE=V();cE.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,rE);function mp(n,t){return P(()=>Me(lt(E(n,n),t,!0)))}class la extends hr{getConfig(){return{}}}class hb extends la{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return P(()=>{const e=mp(t,this.axis),s=cn(e,0,this.maxValue);return E(t,dt(s,Y(he(),e)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}hb.className="MaxNorm";j(hb);class db extends la{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return P(()=>dt(t,Y(he(),mp(t,this.axis))))}getConfig(){return{axis:this.axis}}}db.className="UnitNorm";j(db);class pb extends la{apply(t){return ms(t)}}pb.className="NonNeg";j(pb);class fb extends la{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return P(()=>{const e=mp(t,this.axis),s=Y(E(this.rate,cn(e,this.minValue,this.maxValue)),E(1-this.rate,e));return E(t,dt(s,Y(he(),e)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}fb.className="MinMaxNorm";j(fb);const Af={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function pe(n){return op(n)}function Ff(n,t={}){return sa(n,mn.getMap().classNameMap,t,"constraint")}function fe(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Af?Af[n]:n,config:{}};return Ff(e)}else return n instanceof la?n:Ff(n)}async function Ys(n){if(n==null)return;const t=[],e=[],s=[];for(const o in n){const r=n[o];if(typeof r!="number"){const i=r;t.push(i.data()),e.push(o),s.push(i)}}if(t.length>0){const o=await Promise.all(t);for(let r=0;r<o.length;++r)n[e[r]]=o[r][0];wt(s)}}function mb(n){if(n!=null)for(const t in n){const e=n[t];typeof e!="number"&&e.dispose()}}var _f;(function(n){n[n.SILENT=0]="SILENT",n[n.VERBOSE=1]="VERBOSE"})(_f||(_f={}));const uE=125;class Vr{constructor(){this.validationData=null}setParams(t){this.params=t}async onEpochBegin(t,e){}async onEpochEnd(t,e){}async onBatchBegin(t,e){}async onBatchEnd(t,e){}async onTrainBegin(t){}async onTrainEnd(t){}setModel(t){}}class hE{constructor(t,e=10){t==null&&(t=[]),this.callbacks=t,this.queueLength=e}append(t){this.callbacks.push(t)}setParams(t){for(const e of this.callbacks)e.setParams(t)}setModel(t){for(const e of this.callbacks)e.setModel(t)}async onEpochBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochBegin(t,e)}async onEpochEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onEpochEnd(t,e)}async onBatchBegin(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchBegin(t,e)}async onBatchEnd(t,e){e==null&&(e={});for(const s of this.callbacks)await s.onBatchEnd(t,e)}async onTrainBegin(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainBegin(t)}async onTrainEnd(t){t==null&&(t={});for(const e of this.callbacks)await e.onTrainEnd(t)}}class dE extends Vr{constructor(){super()}async onEpochBegin(t){this.seen=0,this.totals={}}async onBatchEnd(t,e){e==null&&(e={});const s=e.size==null?0:e.size;this.seen+=s;for(const o in e){const r=e[o];if(typeof r=="number")this.totals.hasOwnProperty(o)||(this.totals[o]=0),this.totals[o]=this.totals[o]+r*s;else{let i;o in this.totals?i=this.totals[o]:this.totals[o]=0;const a=P(()=>Y(this.totals[o],E(r,s)));this.totals[o]=a,i!=null&&i.dispose()}}}async onEpochEnd(t,e){if(e!=null)for(const s of this.params.metrics)this.totals[s]!=null&&(typeof this.totals[s]=="number"?e[s]=this.totals[s]/this.seen:P(()=>{const o=E(dt(1,this.seen),this.totals[s]);e[s]=o,this.totals[s].dispose(),Yn(e[s])}))}}class pE extends Vr{async onTrainBegin(t){this.epoch=[],this.history={}}async onEpochEnd(t,e){e==null&&(e={}),this.epoch.push(t);for(const s in e)this.history[s]==null&&(this.history[s]=[]),this.history[s].push(e[s])}async syncData(){const t=[],e=[],s=[];for(const r in this.history){const i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){const l=i[a];t.push(l.data()),e.push(r),s.push(a)}}const o=await Promise.all(t);for(let r=0;r<o.length;++r)this.history[e[r]][s[r]].dispose(),this.history[e[r]][s[r]]=o[r][0]}}class fE extends Vr{constructor(t,e){if(super(),this.currentEpoch=0,this.nowFunc=t.nowFunc,this.nextFrameFunc=t.nextFrameFunc||wx,this.yieldEvery=e||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=uE),this.yieldEvery==="never"&&t.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");cu(this.yieldEvery)&&(this.maybeWait=ET(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=t.onTrainBegin,this.trainEnd=t.onTrainEnd,this.epochBegin=t.onEpochBegin,this.epochEnd=t.onEpochEnd,this.batchBegin=t.onBatchBegin,this.batchEnd=t.onBatchEnd,this.yield=t.onYield}async maybeWait(t,e,s){const o=[];this.yield!=null&&(await Ys(s),o.push(this.yield(t,e,s))),o.push(this.nextFrameFunc()),await Promise.all(o)}async onEpochBegin(t,e){this.currentEpoch=t,this.epochBegin!=null&&(await Ys(e),await this.epochBegin(t,e))}async onEpochEnd(t,e){const s=[];this.epochEnd!=null&&(await Ys(e),s.push(this.epochEnd(t,e))),this.yieldEvery==="epoch"&&s.push(this.nextFrameFunc()),await Promise.all(s)}async onBatchBegin(t,e){this.batchBegin!=null&&(await Ys(e),await this.batchBegin(t,e))}async onBatchEnd(t,e){const s=[];this.batchEnd!=null&&(await Ys(e),s.push(this.batchEnd(t,e))),this.yieldEvery==="batch"?s.push(this.nextFrameFunc()):cu(this.yieldEvery)&&s.push(this.maybeWait(this.currentEpoch,t,e)),await Promise.all(s)}async onTrainBegin(t){this.trainBegin!=null&&(await Ys(t),await this.trainBegin(t))}async onTrainEnd(t){this.trainEnd!=null&&(await Ys(t),await this.trainEnd(t))}}function gb(n,t){return n==null&&(n={}),n instanceof Vr?[n]:Array.isArray(n)&&n[0]instanceof Vr?n:Ut(n).map(s=>new fE(s,t))}class fn{constructor(){}static registerCallbackConstructor(t,e){I(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),fn.checkForDuplicate(e),fn.constructors[t]==null&&(fn.constructors[t]=[]),fn.constructors[t].push(e)}static checkForDuplicate(t){for(const e in fn.constructors)fn.constructors[+e].forEach(o=>{if(o===t)throw new R("Duplicate callback constructor.")})}static clear(){fn.constructors={}}static createCallbacks(t){const e=[];for(const s in fn.constructors){const o=+s;t>=o&&e.push(...fn.constructors[o])}return e.map(s=>new s)}}fn.constructors={};function xb(n,t,e,s,o,r,i,a,l){const c=new pE,u=[new dE,...fn.createCallbacks(t)];n!=null&&u.push(...n),u.push(c);const h=new hE(u);return h.setParams({epochs:e,initialEpoch:s,samples:o,steps:r,batchSize:i,verbose:t,doValidation:a,metrics:l}),{callbackList:h,history:c}}function ts(n,t={},e=!1){return sa(n,mn.getMap().classNameMap,t,"layer",e)}function Ya(n,t){return P(()=>{n.dtype!=="float32"&&(n=st(n,"float32"));const e=lt(ra(n),t,!0),s=Yi(e.shape,he()),o=Me(Bs(e,s));return dt(n,o)})}function Nc(n,t){return P(()=>ne(ra(ct(t,n)),-1))}function gp(n,t){return P(()=>ne(ge(ct(t,n)),-1))}function xp(n,t){return P(()=>{const e=ct(n,t),s=cn(ge(n),he(),Number.MAX_VALUE),o=ge(dt(e,s));return E(100,ne(o,-1))})}function mE(n,t){return P(()=>{const e=cn(t,he(),Number.MAX_VALUE),s=Cn(Y(1,e)),o=cn(n,he(),Number.MAX_VALUE),r=Cn(Y(1,o));return ne(ra(ct(s,r)),-1)})}function gE(n,t){return P(()=>{const e=Bs(0,ct(1,E(n,t)));return ne(ra(e),-1)})}function xE(n,t){return P(()=>{const e=Bs(0,ct(1,E(n,t)));return ne(e,-1)})}function bE(n,t){return P(()=>{const e=lt(E(n,t),-1),s=On(E(ct(1,n),t),-1);return Bs(0,Y(1,ct(s,e)))})}function yE(n,t){return P(()=>{const e=Math.log(2),s=ct(t,n),o=ct(Y(s,Zi(E(-2,s))),e);return ne(o,-1)})}function Wr(n,t,e=!1){return P(()=>{if(e)t=Cd(t);else{const s=lt(t,t.shape.length-1,!0);t=dt(t,s)}return t=cn(t,he(),1-he()),Yt(lt(E(st(n,"float32"),Cn(t)),t.shape.length-1))})}function Za(n,t,e=!1){return P(()=>{const s=st(xc(VT(n)),"int32");t=cn(t,he(),1-he());const o=t.shape,r=_(vg(s,o[o.length-1]),o);return Wr(r,t,e)})}function wE(n,t){if(!Rt(n.shape,t.shape))throw new R(`logits and labels must have the same shape, but got shapes ${JSON.stringify(n.shape)} and ${JSON.stringify(t.shape)}`);return P(()=>{const e=ms(t),s=Yt(ge(t));return Y(ct(e,E(t,n)),dd($n(s)))})}function Tc(n,t){return P(()=>{let e;return e=cn(t,he(),1-he()),e=Cn(dt(e,ct(1,e))),ne(wE(n,e),-1)})}function $E(n,t){return P(()=>{const e=cn(n,he(),1),s=cn(t,he(),1);return lt(E(n,Cn(dt(e,s))),-1)})}function CE(n,t){return P(()=>{const e=Cn(Y(he(),t));return ne(ct(t,E(n,e)),-1)})}function bb(n,t){return P(()=>{const e=Ya(n,-1),s=Ya(t,-1),o=E(e,s);return Yt(lt(o,-1))})}const Ja={meanSquaredError:Nc,meanAbsoluteError:gp,meanAbsolutePercentageError:xp,meanSquaredLogarithmicError:mE,squaredHinge:gE,hinge:xE,categoricalHinge:bE,logcosh:yE,categoricalCrossentropy:Wr,sparseCategoricalCrossentropy:Za,binaryCrossentropy:Tc,kullbackLeiblerDivergence:$E,poisson:CE,cosineProximity:bb};function Yc(n){if(typeof n=="string"){if(n in Ja)return Ja[n];let t=`Unknown loss ${n}`;throw n.toLowerCase().includes("softmaxcrossentropy")&&(t=`Unknown loss ${n}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new R(t)}else return n}function yb(n,t){return P(()=>{const e=E(.5,In(t)),s=Jn(un(t,e),n.dtype);return ne(ns(n,s),-1)})}function wb(n,t){return P(()=>Jn(ns(Pr(n,-1),Pr(t,-1)),"float32"))}function IE(n,t){return P(()=>st(lt(us(ns(n,1),ns(t,1))),"float32"))}function vE(n,t){return P(()=>st(lt(us(ns(n,0),ns(t,1))),"float32"))}function kE(n,t){return P(()=>{const e=IE(n,t),s=vE(n,t),o=Y(e,s);return st(Qe(un(o,0),dt(e,o),0),"float32")})}function SE(n,t){return Tc(n,t)}function NE(n,t){return n.rank===t.rank&&(n=Ji(n,[n.rank-1])),t=Pr(t,-1),t.dtype!==n.dtype&&(t=st(t,n.dtype)),st(ns(n,t),"float32")}const TE=Nc,EE=Nc,RE=gp,DE=gp,AE=xp,FE=xp,$b=Wr,_E=bb,Cb=Za,Qa={binaryAccuracy:yb,categoricalAccuracy:wb,precision:kE,categoricalCrossentropy:$b,sparseCategoricalCrossentropy:Cb,mse:TE,MSE:EE,mae:RE,MAE:DE,mape:AE,MAPE:FE,cosine:_E};function OE(n){if(typeof n=="string"&&n in Qa)return Qa[n];if(typeof n!="string"&&n!=null)return n;throw new R(`Unknown metric ${n}`)}function va(n){if(Hn(n!==null,`Unknown LossOrMetricFn ${n}`),typeof n=="string")return n;{let t;for(const e of Object.keys(Ja))if(Ja[e]===n){t=e;break}if(t!==void 0)return t;for(const e of Object.keys(Qa))if(Qa[e]===n){t=e;break}return t!==void 0?t:n.name}}function LE(n){const t={Adagrad:()=>Lo.adagrad(.01),Adadelta:()=>Lo.adadelta(1,.95,he()),Adam:()=>Lo.adam(.001,.9,.999,he()),Adamax:()=>Lo.adamax(.002,.9,.999,he(),0),RMSProp:()=>Lo.rmsprop(.001,.9,0,he()),SGD:()=>Lo.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,n in t)return t[n]();throw new R(`Unknown Optimizer ${n}`)}const Of=1*1024*1024;function Lf(n,t,e=!1){if(n==null||typeof n!="object"||Object.getPrototypeOf(n)!==Object.prototype||!zu(n))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(e){const s=JSON.stringify(n);s.length>Of&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${s.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Of}.`)}}function zu(n){if(n===null)return!0;if(typeof n=="object")if(Object.getPrototypeOf(n)===Object.prototype){const t=Object.keys(n);for(const e of t)if(typeof e!="string"||!zu(n[e]))return!1;return!0}else if(Array.isArray(n)){for(const t of n)if(!zu(t))return!1;return!0}else return!1;else{const t=typeof n;return t==="string"||t==="number"||t==="boolean"}}function ME(n,t,e,s=console.log){const o=zE(n),r=["Layer (type)","Input Shape","Output shape","Param #"];o?(t=t||90,e=e||[.32,.61,.89,1]):(t=t||115,e=e||[.24,.48,.7,.8,1]),e[e.length-1]<=1&&(e=e.map(u=>Math.floor(t*u)));let i;if(!o){r.push("Receives inputs"),i=[];for(const u in n.nodesByDepth)i.push(...n.nodesByDepth[u])}s("_".repeat(t)),tl(r,e,s),s("=".repeat(t));const a=n.layers;for(let u=0;u<a.length;++u)o?BE(a[u],e,s):VE(a[u],e,i,s),s((u===a.length-1?"=":"_").repeat(t));n.checkTrainableWeightsConsistency();const l=PE(n),c=ja(n.nonTrainableWeights);s(`Total params: ${l+c}`),s(`Trainable params: ${l}`),s(`Non-trainable params: ${c}`),s("_".repeat(t))}function PE(n){let t;return n.collectedTrainableWeights!=null?t=ja(n.collectedTrainableWeights):t=ja(n.trainableWeights),t}function zE(n){let t=!0;const e=[],s=[];for(const o in n.nodesByDepth)e.push(n.nodesByDepth[o]);for(const o of e){if(o.length>1||o.length===1&&o[0].inboundLayers.length>1){t=!1;break}s.push(...o)}if(t)for(const o of n.layers){let r=!1;for(const i of o.inboundNodes)if(s.indexOf(i)!==-1)if(r){t=!1;break}else r=!0;if(!t)break}return t}function tl(n,t,e=console.log){let s="";for(let o=0;o<n.length;++o)o>0&&(s=s.slice(0,s.length-1)+" "),s+=n[o],s=s.slice(0,t[o]),s+=" ".repeat(t[o]-s.length);e(s)}function BE(n,t,e){let s,o;try{o=n.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{o="multiple"}try{s=JSON.stringify(n.outputShape)}catch{s="multiple"}const r=n.name,i=n.getClassName(),a=[`${r} (${i})`,o,s,n.countParams().toString()];tl(a,t,e)}function VE(n,t,e,s){let o,r;try{r=n.inboundNodes.map(h=>JSON.stringify(h.inputShapes)).join(",")}catch{r="multiple"}try{o=JSON.stringify(n.outputShape)}catch{o="multiple"}const i=[];for(const h of n.inboundNodes)if(!(e!=null&&e.length>0&&e.indexOf(h)===-1))for(let d=0;d<h.inboundLayers.length;++d){const p=h.inboundLayers[d].name,f=h.nodeIndices[d],m=h.tensorIndices[d];i.push(`${p}[${f}][${m}]`)}const a=n.name,l=n.getClassName(),c=i.length===0?"":i[0],u=[`${a} (${l})`,r,o,n.countParams().toString(),c];tl(u,t,s);for(let h=1;h<i.length;++h)tl(["","","","",i[h]],t,s)}function Ib(n,t,e){return(n==="inboundNodes"||n==="outputLayers"||n==="inputLayers")&&t===0&&typeof e=="string"}function el(n,t){if(n===null)return null;if(typeof n=="string")return no(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Ib(t,o,r)?e.push(r):e.push(el(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s];if(s==="name"&&typeof o=="string")e[s]=o;else{const r=no(s);e[r]=el(o,r)}}return e}}function Bu(n,t){if(n==null)return null;if(typeof n=="string")return ls(n);if(typeof n=="number"||typeof n=="boolean")return n;if(n instanceof Array){const e=[],s=n.length;for(let o=0;o<s;++o){const r=n[o];Ib(t,o,r)?e.push(r):e.push(Bu(r,t))}return e}else{const e={};for(const s of Object.keys(n)){const o=n[s],r=ls(s);(s==="name"||s==="className")&&typeof o=="string"?e[r]=o:e[r]=Bu(o,s)}return e}}const vb="4.1.0";class Rn extends It{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){const b=this.getClassName().toLowerCase();this.name=vc(b)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],Ns(this.inputs).length!==this.inputs.length)throw new R(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(b=>b.name)}`);Ns(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(b=>b.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(const b of this.outputs){const w=b.sourceLayer,y=b.nodeIndex,$=b.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(y),this.outputLayersTensorIndices.push($)}for(const b of this.inputs){const w=b.sourceLayer,y=b.nodeIndex,$=b.tensorIndex;Hn(y===0,"input layer has >1 nodes"),Hn($===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(y),this.inputLayersTensorIndices.push($)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let b=0;b<this.inputLayers.length;b++){const w=this.inputLayers[b];if(!(w instanceof aa))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${b} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(const b of this.outputLayers)this.outputNames.push(b.name);this.internalInputShapes=this.inputs.map(b=>b.shape),this.internalOutputShapes=this.outputs.map(b=>b.shape);const e={},s={},o={},r={},i={},a=[],l=(b,w,y,$,C,v)=>{($==null||C==null||v==null)&&($=b.sourceLayer,C=b.nodeIndex,v=b.tensorIndex);const k=$.inboundNodes[C];if(y.indexOf(k)!==-1)throw new yn(`The tensor ${b.name} at layer "${$.name}" is part of a cycle.`);if(w.indexOf(k)!==-1)return;this.containerNodes.add(Rn.nodeKey($,C)),$.id in i||(i[$.id]=Object.keys(i).length),y.indexOf(k)===-1&&y.push(k);const N=k.inboundLayers.length;for(let T=0;T<N;T++){const F=k.inputTensors[T],z=k.inboundLayers[T],M=k.nodeIndices[T],L=k.tensorIndices[T];l(F,w,y,z,M,L)}for(w.push(k);y.indexOf(k)>=0;)y.splice(y.indexOf(k),1);a.push(k)},c=[],u=[];for(const b of this.outputs)l(b,c,u);const h=a.slice().reverse();for(const b of h){s[b.id]=b,b.id in e||(e[b.id]=0);let w=e[b.id];const y=o[b.outboundLayer.id]==null?0:o[b.outboundLayer.id];w=Math.max(w,y),o[b.outboundLayer.id]=w,r[b.outboundLayer.id]=b.outboundLayer,e[b.id]=w;for(let $=0;$<b.inboundLayers.length;$++){const C=b.inboundLayers[$],v=b.nodeIndices[$],k=C.inboundNodes[v],N=e[k.id]==null?0:e[k.id];e[k.id]=Math.max(w+1,N),s[k.id]=k}}const d={};for(const b in e){const w=e[b];w in d||(d[w]=[]),d[w].push(s[b])}const p={};for(const b in o){const w=o[b];w in p||(p[w]=[]),p[w].push(r[b])}let f=Object.keys(p).map(b=>parseInt(b,10)).sort($a);this.layers=[];for(const b of f){const w=p[b];w.sort((y,$)=>{const C=i[y.id],v=i[$.id];return C<v?-1:C>v?1:0});for(const y of w)y instanceof Rn&&this.internalContainerRefs.push(y),this.layers.push(y)}this.layersByDepth=p,f=Object.keys(d).map(b=>parseInt(b,10)).sort($a);const m=this.inputs.slice(),g=[];for(const b of f)for(const w of d[b]){const y=w.outboundLayer;if(y!=null){for(const $ of w.inputTensors)if(m.indexOf($)===-1)throw new yn(`Graph disconnected: cannot obtain value for tensor ${$} at layer "${y.name}". The following previous layers were accessed without issue: ${g}`);for(const $ of w.outputTensors)m.push($);g.push(y.name)}}this.nodesByDepth=d;const x=this.layers.map(b=>b.name);for(const b of x){const w=x.filter(y=>y===b).length;if(w!==1)throw new yn(`The name "${b}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new Sc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(b=>null),outputMasks:this.outputs.map(b=>null),inputShapes:this.inputs.map(b=>b.shape),outputShapes:this.outputs.map(b=>b.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();const t={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(const e of this.layers)t.numDisposedVariables+=e.dispose().numDisposedVariables;for(const e of this.internalContainerRefs)t.numDisposedVariables+=e.dispose().numDisposedVariables}return t.refCountAfterDispose=this._refCount,t}get trainable(){return this.trainable_}set trainable(t){this.layers.forEach(e=>{e._trainableWeights.forEach(s=>s.trainable=t)}),this.trainable_=t}get trainableWeights(){if(this._trainableWeights.length>0)throw new R("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let t=[];for(const e of this.layers)t=t.concat(e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.layers)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.layers)e.push(...s.trainableWeights);return e.concat(t)}return t}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(t,e=!0){const s={};let o=0;for(const i of this.layers)for(const a of i.weights){if(s[a.originalName]!=null)throw new R(`Duplicate weight name: ${a.originalName}`);s[a.originalName]=a,o++}const r=[];for(const i in t){let a=i;if(s[i]==null){const l=i.split("/");a=l.slice(0,-2).concat([l[l.length-1]]).join("/")}if(s[a]!=null)r.push([s[a],t[i]]);else if(e)throw new R(`Provided weight data has no target variable: ${i}`);delete s[a]}if(e){const i=[];for(const a in s)i.push(a);if(i.length>0)throw new R(`${i.length} of ${o} weights are not set: ${i}`)}fp(r)}updatedConfig(){const t=this.getConfig(),e={};return e.className=this.getClassName(),e.config=t,e.kerasVersion=`tfjs-layers ${vb}`,e.backend="TensorFlow.js",e}toJSON(t,e=!0){const s=Bu(this.updatedConfig());return e?JSON.stringify(s):s}call(t,e){return P(()=>{t=Ut(t);const s=new Is;for(let o=0;o<this.inputs.length;++o)s.add(this.inputs[o],t[o]);return Dr(this.outputs,s,e)})}computeMask(t,e){return P(()=>{t=Ut(t);let s;return e==null?s=Io(null,t.length):s=Ut(e),this.runInternalGraph(t,s)[1]})}computeOutputShape(t){const e=qa(t);if(e.length!==this.inputLayers.length)throw new R(`Invalid inputShape argument ${t}: model has ${this.inputLayers.length} tensor inputs.`);const s={};for(let a=0;a<e.length;a++){const l=this.inputLayers[a],c=e[a],u=l.name+"_0_0";s[u]=c}const o=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort($a);if(o.length>1)for(const a of o){const l=this.nodesByDepth[a];for(const c of l){const u=c.outboundLayer;if(this.inputLayers.map(m=>m.id).indexOf(u.id)!==-1)continue;const h=[];for(let m=0;m<c.inboundLayers.length;m++){const g=c.inboundLayers[m],x=c.nodeIndices[m],b=c.tensorIndices[m],w=`${g.name}_${x}_${b}`,y=s[w];h.push(y)}const d=u.computeOutputShape(We(h)),p=qa(d),f=u.inboundNodes.indexOf(c);for(let m=0;m<p.length;m++){const g=`${u.name}_${f}_${m}`;s[g]=p[m]}}}const r=[],i=[];for(let a=0;a<this.outputLayers.length;a++){const l=this.outputLayers[a],c=this.outputLayersNodeIndices[a],u=this.outputLayersTensorIndices[a],h=`${l.name}_${c}_${u}`;i.push(h)}for(let a=0;a<i.length;a++){const l=i[a];Hn(l in s),r.push(s[l])}return We(r)}runInternalGraph(t,e){e==null&&(e=Io(null,t.length));const s={};for(let l=0;l<this.inputs.length;++l){const c=this.inputs[l],u=t[l],h=e[l];s[c.id]=[u,h]}const o=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort($a);for(const l of o){const c=this.nodesByDepth[l];for(const u of c){const h=u.outboundLayer,d=u.inputTensors,p=u.outputTensors,f=new Array;for(const m of d)m.id in s&&f.push(s[m.id]);if(f.length===d.length){let m={},g,x,b,w;if(u.callArgs!=null&&(m=u.callArgs),f.length===1){const[y,$]=f[0];m.mask==null&&(m.mask=$),b=Ut(h.call(y,m)),w=Ut(h.computeMask(y,$)),g=[y],x=[$]}else g=f.map(y=>y[0]),x=f.map(y=>y[1]),m.mask==null&&(m.mask=x),b=Ut(h.call(g,m)),w=Ut(h.computeMask(g,x));if(h.activityRegularizer)throw new xt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let y=0;y<p.length;++y){const $=p[y],C=b[y],v=w[y];s[$.id]=[C,v]}}}}const r=[],i=[],a=[];for(const l of this.outputs){Hn(l.id in s,`Could not compute output ${l.name} : ${l.id}`);const[c,u]=s[l.id];a.push(c.shape),r.push(c),i.push(u)}return[r,i,a]}buildNodeConversionMap(t){const e={};let s;for(const o of this.layers){s=o instanceof Rn?1:0;for(let r=0;r<o.inboundNodes.length;r++){const i=Rn.nodeKey(o,r);this.containerNodes.has(i)&&(e[i]=s,s+=1)}}return e}getLayer(t,e){if(e!=null){if(this.layers.length<=e)throw new R(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}else if(t==null)throw new R("Provide either a layer name or layer index");for(const s of this.layers)if(s.name===t)return s;throw new R(`No such layer: ${t}`)}calculateLosses(){return P(()=>{const t=[];for(const e of this.layers)for(let s=0;s<e.inboundNodes.length;++s){const o=Rn.nodeKey(e,s);this.containerNodes.has(o)&&t.push(...e.calculateLosses())}return t})}getConfig(){const t={name:this.name},e=this.buildNodeConversionMap(this.layers),s=[];for(const i of this.layers){const a=i.getClassName(),l=i.getConfig(),c=[];for(let h=0;h<i.inboundNodes.length;h++){const d=i.inboundNodes[h],p=Rn.nodeKey(i,h);let f={};if(this.containerNodes.has(p)){if(d.callArgs)try{JSON.stringify(d.callArgs),f=d.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${d.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),f={}}if(d.inboundLayers.length>0){const m=[];for(let g=0;g<d.inboundLayers.length;g++){const x=d.inboundLayers[g],b=d.nodeIndices[g],w=d.tensorIndices[g],y=Rn.nodeKey(x,b);let $=e[y];$==null&&($=0),m.push([x.name,$,w,f])}c.push(m)}}}const u={};u.name=i.name,u.className=a,u.config=l,u.inboundNodes=c,s.push(u)}t.layers=s;const o=[];for(let i=0;i<this.inputLayers.length;i++){const a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],c=Rn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.inputLayersTensorIndices[i];o.push([a.name,u,h])}t.inputLayers=o;const r=[];for(let i=0;i<this.outputLayers.length;i++){const a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],c=Rn.nodeKey(a,l);if(!this.containerNodes.has(c))continue;let u=e[c];u==null&&(u=0);const h=this.outputLayersTensorIndices[i];r.push([a.name,u,h])}return t.outputLayers=r,t}static fromConfig(t,e,s={},o=!1){const r={},i={};function a(g,x){g.name in i?i[g.name].push(x):i[g.name]=[x]}function l(g,x){const b=[];let w;for(const y of x){const $=y[0],C=y[1],v=y[2];if(w=y[3]==null?{}:y[3],!($ in r)){a(g,x);return}const k=r[$];if(k.inboundNodes.length<=C){a(g,x);return}const N=k.inboundNodes[C];b.push(N.outputTensors[v])}b.length>0&&g.apply(We(b),w)}function c(g){const x=g.name,b=ts(g,e.customObjects!=null?e.customObjects:{});b.setFastWeightInitDuringBuild(o),r[x]=b,g.inboundNodes.forEach(y=>{if(!(y instanceof Array))throw new R(`Corrupted configuration, expected array for nodeData: ${y}`);a(b,y)})}const u=e.name,h=e.layers;for(const g of h)c(g);for(;!TT(i);)for(const g of h){const x=r[g.name];if(x.name in i){const b=i[x.name];delete i[x.name];for(const w of b)l(x,w)}}const d=[],p=[],f=e.inputLayers;for(const g of f){const x=g[0],b=g[1],w=g[2];Hn(x in r);const $=r[x].inboundNodes[b].outputTensors;d.push($[w])}const m=e.outputLayers;for(const g of m){const x=g[0],b=g[1],w=g[2];Hn(x in r);const $=r[x].inboundNodes[b].outputTensors;p.push($[w])}return new t({inputs:d,outputs:p,name:u})}get stateful(){if(this._stateful)throw new R("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(const t of this.layers)if(t.stateful)return!0;return!1}resetStates(){P(()=>{this.layers.forEach(t=>{t.stateful&&t.resetStates()})})}}function WE(n,t,e){const s=t.length;if(n==null||Array.isArray(n)&&n.length===0)return t.map(o=>null);if(s===1)return Array.isArray(n)&&n.length===1?n:typeof n=="object"&&t[0]in n?[n[t[0]]]:[n];if(Array.isArray(n)){if(n.length!==s)throw new Error(`Provided ${e} is an array of ${n.length} element(s), but the model has ${s} outputs. Make sure a set of weights is provided for each model output.`);return n}else if(typeof n=="object"&&Object.keys(n).length>0&&typeof n[Object.keys(n)[0]]=="object"){const o=[];return t.forEach(r=>{r in n?o.push(n[r]):o.push(null)}),o}else throw new Error(`The model has multiple (${s}) outputs, so ${e} must be either an array with ${s} elements or an object with ${t} keys. Provided ${e} not understood: ${JSON.stringify(n)}`)}function kb(n,t){return WE(n,t,"classWeight")}async function Sb(n,t,e,s){if(t!=null||s!=null)throw new Error("Support sampleWeight is not implemented yet");if(e!=null){const o=P(()=>{if(n.shape.length===1)return ao(n);if(n.shape.length===2){if(n.shape[1]>1)return Pr(n,1);if(n.shape[1]===1)return _(n,[n.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${n.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${n.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await o.data());wt(o);const i=[];return r.forEach(a=>{if(e[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(e[a])}),Ze(i,"float32")}else return null}function UE(n,t){return E(n,t)}const GE=32;function Nb(n,t){let e,s;const o=t;e=o.xs,s=o.ys,I(e!=null&&s!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);const r=Mf("input",n.inputNames,e),i=Mf("output",n.outputNames,s),a=r[0].shape[0];I(r.length===n.inputs.length,()=>`LayersModel has ${n.inputs.length} inputs, but the dataset provides ${r.length} inputs.  (Expected input keys: ${JSON.stringify(n.inputNames)})`),I(i.length===n.outputs.length,()=>`LayersModel has ${n.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(n.outputNames)})`);for(let l=0;l<r.length;l++)I(r[l].shape[0]===a,()=>`Batch size mismatch: input ${n.inputNames[l]} has ${r[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);for(let l=0;l<i.length;l++)I(i[l].shape[0]===a,()=>`Batch size mismatch: output ${n.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${n.inputNames[0]}.`);return{xs:r,ys:i}}function Mf(n,t,e){if(e instanceof ee)return[e];if(Array.isArray(e))return I(e.length===t.length,()=>`Received an array of ${e.length} Tensors, but expected ${t.length} to match the ${n} keys ${t}.`),e;{const s=[];for(const o of t){if(e[o]==null)throw new R(`The feature data generated by the dataset lacks the required ${n} key '${o}'.`);s.push(e[o])}return s}}function HE(n){if(n.length===3)throw new xt("Validation with sample weights is not implemented yet.");return{xs:n[0],ys:n[1]}}async function qE(n,t,e){const s=e.batchesPerEpoch!=null;if(I(n.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),I(e!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),I(e.epochs!=null&&e.epochs>0&&Number.isInteger(e.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${e.epochs}`),I(!s||e.batchesPerEpoch>0&&Number.isInteger(e.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${e.batchesPerEpoch}`),I(e.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),n.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");n.isTraining=!0;try{const o=e.validationData!=null;let r,i;if(o)if(Pf(e.validationData))I(e.validationBatches==null||e.validationBatches>0&&Number.isInteger(e.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${e.validationBatches}`);else{const g=HE(e.validationData);r=g.xs,i=g.ys}const a=n.makeTrainFunction(),l=n.getDedupedMetricsNames();let c;o?c=l.slice().concat(l.map(g=>"val_"+g)):c=l.slice();const u=gb(e.callbacks,e.yieldEvery),h=e.verbose==null?1:e.verbose,{callbackList:d,history:p}=xb(u,h,e.epochs,null,null,jE(t,e),null,o,c);d.setModel(n),n.history=p,await d.onTrainBegin(),n.stopTraining_=!1;let f=e.initialEpoch==null?0:e.initialEpoch,m=await t.iterator();for(;f<e.epochs;){const g={};await d.onEpochBegin(f);let x=0,b=0;for(s||(m=await t.iterator());!s||x<e.batchesPerEpoch;){const w=await m.next();if(s&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${e.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${e.batchesPerEpoch*e.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){const{xs:y,ys:$}=Nb(n,w.value),C={};C.batch=b,C.size=y[0].shape[0],await d.onBatchBegin(b,C);const v=[];if(e.classWeight!=null){const T=kb(e.classWeight,n.outputNames);for(let F=0;F<T.length;++F)v.push(await Sb($[F],null,T[F]))}const k=y.concat($).concat(v),N=a(k);wt(k);for(let T=0;T<l.length;++T){const F=l[T],z=N[T];C[F]=z,Yn(z)}await d.onBatchEnd(b,C),mb(C),b++,x++}if(s?x>=e.batchesPerEpoch:w.done){if(o){let y;Pf(e.validationData)?y=Ut(await n.evaluateDataset(e.validationData,{batches:e.validationBatches})):y=Ut(n.evaluate(r,i,{batchSize:e.validationBatchSize==null?GE:e.validationBatchSize,verbose:0}));for(let $=0;$<n.metricsNames.length;++$)g[`val_${n.metricsNames[$]}`]=y[$]}break}if(n.stopTraining_)break}if(await d.onEpochEnd(f,g),f++,n.stopTraining_)break}return await d.onTrainEnd(),await n.history.syncData(),n.history}finally{n.isTraining=!1}}function jE(n,t){let e=null;return t.batchesPerEpoch!=null?e=t.batchesPerEpoch:Number.isFinite(n.size)&&(e=n.size),e}function Pf(n){return typeof n.iterator=="function"}function KE(n){return typeof n.next=="function"}async function XE(n,t,e){e=e||{};const s=e.batches!=null,o=n.testFunction;let r=[];if(e.verbose>0)throw new xt("Verbose mode is not implemented yet.");I(!s||e.batches>0&&Number.isInteger(e.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(e.batches)}`);const i=KE(t)?t:await t.iterator();let a=0,l=0;for(;!s||l<e.batches;){const c=await i.next();if(r=P(()=>{if(c.value){const{xs:u,ys:h}=Nb(n,c.value),d=u.concat(h),p=P(()=>o(d));if(wt(d),l===0)for(let m=0;m<p.length;++m)r.push(mt(0));const f=d[0].shape[0];for(let m=0;m<p.length;++m){const g=p[m],x=r[m];r[m]=P(()=>Y(r[m],E(f,g))),l>0&&wt(x)}wt(p),a+=f,++l}return r}),c.done){s&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${e.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let c=0;c<r.length;++c){const u=r[c];r[c]=dt(r[c],a),wt(u)}return We(r)}function Zc(n){I(n>0&&Number.isInteger(n),()=>`batchSize is required to be a positive integer, but got ${n}`)}function Nr(n,t,e){return n==null?[null]:Array.isArray(n)?n.map(s=>uo(s,t,e-t)):uo(n,t,e-t)}function Vu(n,t){return P(()=>n==null?null:Array.isArray(n)?n.map(e=>Vu(e,t)):eb(n,t.dtype==="int32"?t:st(t,"int32")))}function Jc(n,t){const e=[];let s=0,o=null;for(;s<n;)o=s+t,o>=n&&(o=n),e.push([s,o]),s=o;return e}function Tb(n){const t=[];n instanceof ee&&(n=[n]);for(let e=0;e<n.length;++e){const s=n[e];if(s.rank===1)t.push(oa(s,1));else{if(s.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");t.push(s)}}return t}function En(n,t){if(n==null)return;const e=[];if(t instanceof ee)e.push(t.id);else if(Array.isArray(t))t.forEach(o=>e.push(o.id));else if(t!=null)for(const o in t){const r=t[o];e.push(r.id)}const s=[];if(n instanceof ee)e.indexOf(n.id)===-1&&s.push(n);else if(Array.isArray(n))n.forEach(o=>{e.indexOf(o.id)===-1&&s.push(o)});else if(n!=null)for(const o in n){const r=n[o];e.indexOf(r.id)===-1&&s.push(r)}s.forEach(o=>{o.isDisposed||o.dispose()})}function YE(n){return n instanceof ee}function Wu(n){return Array.isArray(n)}function zf(n){return!YE(n)&&!Wu(n)}function Bf(n,t,e,s=!0,o=""){if(t==null||t.length===0){if(n!=null){let i=!1;if(Wu(n)&&n.length>0)i=!0;else if(zf(n)){for(const a in n)if(n.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new R(`Error when checking model ${o} expected no data, but got ${n}`)}return[]}if(n==null)return t.map(i=>null);let r;if(zf(n)){n=n,r=[];for(const i of t){if(n[i]==null)throw new R(`No data provided for "${i}". Need data for each key in: ${t}`);r.push(n[i])}}else if(Wu(n)){if(n=n,n.length!==t.length)throw new R(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${n}`);r=n}else{if(n=n,t.length>1)throw new R(`The model ${o} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${n.shape}`);r=[n]}if(r=Tb(r),e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new R(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u>=0&&c!==u)throw new R(`${o} expected a batch of elements where each example has shape [${e[i].slice(1,e[i].length)}] (i.e.,tensor shape [*,${e[i].slice(1,e[i].length)}]) but the ${o} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return r}function ZE(n,t,e){const s=Ns(n.map(r=>r.shape[0]));s.sort();const o=Ns(t.map(r=>r.shape[0]));if(o.sort(),s.length>1)throw new R(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(n.map(r=>r.shape))}`);if(o.length>1)throw new R(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(r=>r.shape))}`);if(s.length>0&&o.length>0&&!Rt(s,o))throw new R(`Input Tensors should have the same number of samples as target Tensors. Found ${s[0]} input sample(s) and ${o[0]} target sample(s).`)}function JE(n,t,e){const s=[Nc,Tc,Wr];for(let o=0;o<n.length;++o){const r=n[o],i=t[o],a=e[o];if(i!=null){if(i===Wr&&r.shape[r.shape.length-1]===1)throw new R(`You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(s.indexOf(i)!==-1){const l=r.shape.slice(1),c=a.slice(1);for(let u=0;u<l.length;++u){const h=l[u],d=c[u];if(d!=null&&h!==d)throw new R(`A target Tensor with shape ${r.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function Vf(n,t,e,s=!0,o=""){let r;if(Array.isArray(n)){if(n.length!==t.length)throw new R(`Error when checking model ${o}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${n.length} Tensors(s).`);r=n}else{if(t.length>1)throw new R(`The model expects ${t.length} ${o} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(n.shape)}.`);r=[n]}if(e!=null)for(let i=0;i<t.length;++i){if(e[i]==null)continue;const a=r[i];if(a.shape.length!==e[i].length)throw new R(`Error when checking ${o}: expected ${t[i]} to have ${e[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<e[i].length;++l){if(l===0&&!s)continue;const c=a.shape[l],u=e[i][l];if(u!=null&&u!==c)throw new R(`Error when checking ${o}: expected ${t[i]} to have shape ${JSON.stringify(e[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function QE(n,t){if(n==null||Array.isArray(n)&&n.length===0)return t.map(s=>[]);let e;if(typeof n=="string"||typeof n=="function")e=[n];else if(Array.isArray(n)||typeof n=="object")e=n;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${n}`);if(Array.isArray(e))return t.map(s=>e);{const s=[];for(const o of t){let r=e.hasOwnProperty(o)?e[o]:[];Array.isArray(r)||(r=[r]),s.push(r)}return s}}const tR="layers-model";class Ko extends Rn{constructor(t){super(t),this.isTraining=!1}summary(t,e,s=console.log){if(!this.built)throw new R("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");ME(this,t,e,s)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=LE(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Us))throw new R("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let e=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(const i in t.loss)if(this.outputNames.indexOf(i)===-1)throw new R(`Unknown entry in loss dictionary: "${i}". Only expected the following keys: ${this.outputNames}`);for(const i of this.outputNames)t.loss[i]==null&&console.warn(`Output "${i}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${i} during training`),e.push(Yc(t.loss[i]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new R(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);e=t.loss.map(a=>Yc(a))}else{const i=Yc(t.loss);this.outputs.forEach(a=>{e.push(i)})}this.lossFunctions=e,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let i=0;i<this.outputs.length;++i){const a=this.internalOutputShapes[i],l=this.outputNames[i];this.feedOutputNames.push(l),this.feedOutputShapes.push(a),this.feedLossFns.push(this.lossFunctions[i])}const s=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],co("loss",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=this.lossFunctions[i];this.outputs.length>1&&(this.metricsTensors.push([a,i]),this.metricsNames.push(this.outputNames[i]+"_loss"))}});const o=QE(t.metrics,this.outputNames),r=(i,a,l)=>{this.outputNames.length>1&&(a=this.outputNames[i]+"_"+a),this.metricsNames.push(a),this.metricsTensors.push([l,i])};co("metric",()=>{for(let i=0;i<this.outputs.length;++i){if(s.indexOf(i)!==-1)continue;const a=o[i];(c=>{const u="";let h,d,p;for(const f of c){if(typeof f=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(f)!==-1){const g=this.internalOutputShapes[i];g[g.length-1]===1||this.lossFunctions[i]===Tc?["accuracy","acc"].indexOf(f)!==-1?d=yb:["crossentropy","ce"].indexOf(f)!==-1&&(d=SE):this.lossFunctions[i]===Za?["accuracy","acc"].indexOf(f)!==-1?d=NE:["crossentropy","ce"].indexOf(f)!==-1&&(d=Cb):["accuracy","acc"].indexOf(f)!==-1?d=wb:["crossentropy","ce"].indexOf(f)!==-1&&(d=$b);let x;["accuracy","acc"].indexOf(f)!==-1?x="acc":["crossentropy","ce"].indexOf(f)!==-1&&(x="ce"),p=d,h=u+x}else p=OE(f),h=u+va(f);let m;co(h,()=>{m=p}),r(i,h,m)}})(a)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,e,s={}){const o=s.batchSize==null?32:s.batchSize;Zc(o);const r=!0,i=this.standardizeUserDataXY(t,e,r,o);try{const a=i[0].concat(i[1]);this.makeTestFunction();const l=this.testFunction,c=this.testLoop(l,a,o,s.verbose,s.steps);return We(c)}finally{En(i[0],t),En(i[1],e)}}async evaluateDataset(t,e){return this.makeTestFunction(),XE(this,t,e)}checkNumSamples(t,e,s,o="steps"){let r;if(s!=null){if(r=null,e!=null)throw new R(`If ${o} is set, batchSize must be null or undefined.Got batchSize = ${e}`)}else if(t!=null)Array.isArray(t)?r=t[0].shape[0]:r=t.shape[0];else throw new R(`Either the input data should have a defined shape, or ${o} shoud be specified.`);return r}execute(t,e){if(Array.isArray(e)&&e.length===0)throw new R("`outputs` is an empty Array, which is not allowed.");const s=Array.isArray(e),o=s?e:[e],r=this.retrieveSymbolicTensors(o),i=new Is;if(t instanceof ee&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new R(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let l=0;l<this.inputs.length;++l)i.add(this.inputs[l],t[l])}else for(const l of this.inputs){const c=t[l.name];if(c==null)throw new R(`No value is provided for the model's input ${l.name}`);i.add(l,c)}const a=Dr(r,i);return s?a:a[0]}retrieveSymbolicTensors(t){const e=Io(null,t.length);let s=t.length;for(const o of this.layers){const r=Array.isArray(o.output)?o.output:[o.output],i=r.map(a=>a.name);for(let a=0;a<t.length;++a){const l=i.indexOf(t[a]);if(l!==-1&&(e[a]=r[l],s--),s===0)break}if(s===0)break}if(s>0){const o=[];throw e.forEach((r,i)=>{r==null&&o.push(t[i])}),new R(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(o)}`)}return e}predictLoop(t,e=32,s=!1){return P(()=>{const o=this.checkNumSamples(t);if(s)throw new xt("Verbose predictLoop() is not implemented yet.");const r=Jc(o,e),i=this.outputs.map(a=>[]);for(let a=0;a<r.length;++a)P(()=>{const c=r[a][0],u=r[a][1],h=Nr(t,c,u),d=[];if(Array.isArray(h))for(let f=0;f<h.length;++f)d.push({key:this.inputs[f],value:h[f]});else d.push({key:this.inputs[0],value:h});const p=new Is(d);return Dr(this.outputs,p)}).forEach((c,u)=>i[u].push(c));return We(i.map(a=>Ae(a,0)))})}predict(t,e={}){const s=Tb(t);Vf(s,this.inputNames,this.feedInputShapes,!1);try{const o=e.batchSize==null?32:e.batchSize;return Zc(o),this.predictLoop(s,o)}finally{En(s,t)}}predictOnBatch(t){Vf(t,this.inputNames,this.feedInputShapes,!0);const e=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,e)}standardizeUserDataXY(t,e,s=!0,o){if(this.optimizer_==null)throw new yn("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");const r=[];for(let i=0;i<this.feedOutputShapes.length;++i){const a=this.feedOutputShapes[i];this.feedLossFns[i]===Za?r.push(a.slice(0,a.length-1).concat([1])):r.push(a)}if(t=Bf(t,this.feedInputNames,this.feedInputShapes,!1,"input"),e=Bf(e,this.feedOutputNames,r,!1,"target"),ZE(t,e),JE(e,this.feedLossFns,this.feedOutputShapes),this.stateful&&o!=null&&o>0&&t[0].shape[0]%o!==0)throw new R(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${o}. Found: ${t[0].shape[0]} sample(s).`);return[t,e]}async standardizeUserData(t,e,s,o,r=!0,i){const[a,l]=this.standardizeUserDataXY(t,e,r,i);if(s!=null)throw new Error("sample weight is not supported yet.");let c=null;if(o!=null){const u=kb(o,this.outputNames);c=[];for(let h=0;h<u.length;++h)c.push(await Sb(l[h],null,u[h]))}return[a,l,c]}testLoop(t,e,s,o=0,r){return P(()=>{const i=this.checkNumSamples(e,s,r,"steps"),a=[];if(o>0)throw new xt("Verbose mode is not implemented yet.");if(r!=null)throw new xt("steps mode in testLoop() is not implemented yet");{const l=Jc(i,s),c=Ze(Mn(0,i));for(let u=0;u<l.length;++u){const h=l[u][0],d=l[u][1],p=uo(c,h,d-h),f=Vu(e,p),m=t(f);if(u===0)for(let g=0;g<m.length;++g)a.push(mt(0));for(let g=0;g<m.length;++g){const x=m[g];a[g]=Y(a[g],E(d-h,x))}}for(let u=0;u<a.length;++u)a[u]=dt(a[u],i)}return a})}getDedupedMetricsNames(){const t=this.metricsNames,e=[];for(let s=0;s<t.length;++s){const o=t[s];let r=o;if(kf(t,o)>1){const i=kf(t.slice(0,s),o);r+=`_${i}`}e.push(r)}return e}makeTrainFunction(){return t=>{const e=[],s=t.slice(0,this.inputs.length),o=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),r=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),i=[],a=()=>{const h=[];for(let m=0;m<this.inputs.length;++m)h.push({key:this.inputs[m],value:s[m]});const d=new Is(h),p=Dr(this.outputs,d,{training:!0});let f;for(let m=0;m<this.lossFunctions.length;++m){const g=this.lossFunctions[m];let x=g(o[m],p[m]);r[m]!=null&&(x=UE(x,r[m]));const b=ne(x);e.push(b),m===0?f=x:f=Y(f,x)}for(let m=0;m<this.metricsTensors.length;++m){let g;if(this.outputs.length>1&&m<this.outputs.length)g=e[m];else{const x=this.metricsTensors[m][0],b=this.metricsTensors[m][1];g=ne(x(o[b],p[b]))}Yn(g),i.push(g)}return f=ne(f),this.calculateLosses().forEach(m=>{f=Y(f,m)}),f},l=this.collectedTrainableWeights.map(h=>h.read()),c=!0;return[this.optimizer_.minimize(a,c,l)].concat(i)}}makeTestFunction(){this.testFunction=t=>P(()=>{const e=[];let s;const o=t.slice(0,this.inputs.length),r=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=[];for(let c=0;c<this.inputs.length;++c)i.push({key:this.inputs[c],value:o[c]});const a=new Is(i),l=Dr(this.outputs,a);for(let c=0;c<this.lossFunctions.length;++c){const u=this.lossFunctions[c],h=ne(u(r[c],l[c]));c===0?s=h:s=Y(s,h),e.push(s)}for(let c=0;c<this.metricsTensors.length;++c){const u=this.metricsTensors[c][0],h=this.metricsTensors[c][1],d=ne(u(r[h],l[h]));e.push(d)}return e})}async fit(t,e,s={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let o,r,i,a,l,c,u,h,d;try{const p=s.batchSize==null?32:s.batchSize;Zc(p);const f=!1,m=await this.standardizeUserData(t,e,s.sampleWeight,s.classWeight,f,p);o=m[0],r=m[1],d=m[2];let g=!1,x;if(s.validationData!=null&&s.validationData.length>0){if(g=!0,s.validationData.length===2)l=s.validationData[0],c=s.validationData[1];else throw s.validationData.length===3?new xt("validationData including sample weights is not supported yet."):new R(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${s.validationData} is invalid.`);const N=!0,T=await this.standardizeUserData(l,c,null,null,N,p);u=T[0],h=T[1],x=u.concat(h)}else if(s.validationSplit!=null&&s.validationSplit>0&&s.validationSplit<1){g=!0;const N=Math.floor(o[0].shape[0]*(1-s.validationSplit)),T=o[0].shape[0];u=Nr(o,N,T),i=o,o=Nr(o,0,N),h=Nr(r,N,T),a=r,r=Nr(r,0,N),x=u.concat(h)}else s.validationSteps!=null&&(g=!0);const b=o.concat(r).concat(d);this.checkTrainableWeightsConsistency();const w=this.makeTrainFunction(),y=this.getDedupedMetricsNames();let $,C;g?(this.makeTestFunction(),$=this.testFunction,C=y.slice().concat(y.map(N=>"val_"+N))):($=null,x=[],C=y.slice());const v=gb(s.callbacks,s.yieldEvery);return await this.fitLoop(w,b,y,p,s.epochs,s.verbose,v,$,x,s.shuffle,C,s.initialEpoch,null,null)}finally{this.isTraining=!1,En(o,t),En(r,e),En(i,t),En(a,e),En(u,l),En(h,c),d!=null&&wt(d)}}async fitLoop(t,e,s,o,r,i,a,l,c,u,h,d,p,f){o==null&&(o=32),r==null&&(r=1),u==null&&(u=!0),d==null&&(d=0);let m=!1;if(l!=null&&c!=null&&(m=!0),f!=null&&(m=!0,p==null))throw new R("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");const g=this.checkNumSamples(e,o,p,"steps_per_epoch");let x;g!=null&&(x=Mn(0,g)),i==null&&(i=1);const{callbackList:b,history:w}=xb(a,i,r,d,g,p,o,m,h);b.setModel(this),this.history=w,await b.onTrainBegin(),this.stopTraining_=!1;for(let y=d;y<r;++y){await b.onEpochBegin(y);const $={};if(p!=null)throw new xt("stepsPerEpoch mode is not implemented yet.");{if(u==="batch")throw new xt("batch shuffling is not implemneted yet");u&&fw(x);const C=Ze(x),v=Jc(g,o);for(let k=0;k<v.length;++k){const N={};if(await b.onBatchBegin(k,N),P(()=>{const T=v[k][0],F=v[k][1],z=uo(C,T,F-T);N.batch=k,N.size=F-T;const M=Vu(e,z),L=t(M);for(let O=0;O<s.length;++O){const B=s[O],U=L[O];N[B]=U,Yn(U)}if(k===v.length-1&&m){const O=this.testLoop(l,c,o);for(let B=0;B<s.length;++B){const U=s[B],W=O[B];Yn(W),$["val_"+U]=W}}}),await b.onBatchEnd(k,N),mb(N),this.stopTraining_)break}C.dispose()}if(await b.onEpochEnd(y,$),this.stopTraining_)break}return await b.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(t,e){return qE(this,t,e)}async trainOnBatch(t,e){const s=await this.standardizeUserData(t,e),o=s[0],r=s[1],a=this.makeTrainFunction()(o.concat(r)),l=[];for(const c of a){const u=await c.data();l.push(u[0])}return wt(a),En(s[0],t),En(s[1],e),We(l)}getNamedWeights(t){const e=[],s=t!=null&&t.trainableOnly,o=s?this.trainableWeights:this.weights,r=this.getWeights(s);for(let i=0;i<o.length;++i)s&&!o[i].trainable||e.push({name:o[i].originalName,tensor:r[i]});return e}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){const t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){const e=Nu().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=e-Nu().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=ls(this.loss);else if(Array.isArray(this.loss)){for(const e of this.loss)if(typeof e!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(e=>ls(e))}else{const e=Object.keys(this.loss);t={};const s=this.loss;for(const o of e)if(typeof s[o]=="string")t[o]=ls(s[o]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[ls(va(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>ls(va(t)));{const t={};for(const e in this.metrics)t[e]=ls(va(this.metrics[e]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");const e=el(t.optimizer_config),s=ts(e);let o;if(typeof t.loss=="string")o=no(t.loss);else if(Array.isArray(t.loss))o=t.loss.map(i=>no(i));else if(t.loss!=null){o={};for(const i in t.loss)o[i]=no(t.loss[i])}let r;if(Array.isArray(t.metrics))r=t.metrics.map(i=>no(i));else if(t.metrics!=null){r={};for(const i in t.metrics)r[i]=no(t.metrics[i])}this.compile({loss:o,metrics:r,optimizer:s})}async save(t,e){if(typeof t=="string"){const c=d$(t);if(c.length===0)throw new R(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new R(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new R("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");const s=await rf(this.getNamedWeights(e)),o=!1,r=null,a={modelTopology:this.toJSON(r,o),format:tR,generatedBy:`TensorFlow.js tfjs-layers v${vb}`,convertedBy:null};if((e==null?!1:e.includeOptimizer)&&this.optimizer!=null){a.trainingConfig=this.getTrainingConfig();const c="optimizer",{data:u,specs:h}=await rf(await this.optimizer.getWeights(),c);s.specs.push(...h),s.data=fg([s.data,u])}return this.userDefinedMetadata!=null&&(Lf(this.userDefinedMetadata,this.name,!0),a.userDefinedMetadata=this.userDefinedMetadata),a.weightData=s.data,a.weightSpecs=s.specs,t.save(a)}setUserDefinedMetadata(t){Lf(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}Ko.className="Model";j(Ko);class Eb extends Ko{}Eb.className="Functional";j(Eb);async function eR(n,t){if(t==null&&(t={}),typeof n=="string"){const e=p$(n,t);if(e.length===0)e.push(V$(n,t));else if(e.length>1)throw new R(`Found more than one (${e.length}) load handlers for URL '${n}'`);n=e[0]}return nR(n,void 0,t)}async function nR(n,t,e){if(e==null&&(e={}),n.load==null)throw new R("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const s=await n.load();let o=s.modelTopology;o.model_config!=null&&(o=o.model_config);const r=e.strict==null?!0:e.strict,i=s.weightData!=null&&s.weightSpecs!=null&&r,a=ts(el(o),t,i),l=s.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),s.userDefinedMetadata!=null&&a.setUserDefinedMetadata(s.userDefinedMetadata),s.weightData!=null){if(s.weightSpecs==null)throw new R("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");const{modelWeights:c,optimizerWeights:u}=sR(s.weightData,s.weightSpecs);a.loadWeights(c,r),a.optimizer!=null&&u.length>0&&await a.optimizer.setWeights(u),wt(c),wt(u.map(h=>h.tensor))}return a}function sR(n,t){const e=e$(n,t),s={},o=[];return t.forEach(r=>{r.group==="optimizer"?o.push({name:r.name,tensor:e[r.name]}):s[r.name]=e[r.name]}),{modelWeights:s,optimizerWeights:o}}class Ur extends Ko{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:vc("sequential_"),t.layers!=null)for(const e of t.layers)this.add(e)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(s=>s<0))throw new R(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){const e=t instanceof Ur||t instanceof Ko;let s;if(e){if(s=t,s.outputs.length!==1)throw new R("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(s.inputs.length!==1)throw new R("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new R("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");const o=sE({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(o)}if(e)this.outputs=s.outputs,this.inputs=s.inputs;else{if(t.inboundNodes.length!==1)throw new R(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new R("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=ub(this.outputs[0])}this.inboundNodes=[],new Sc({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:Io(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(o=>o.shape),outputShapes:this.outputs[0].shape})}else{const o=t.apply(this.outputs[0]);if(Array.isArray(o))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[o],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{const t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,e){return this.model==null&&this.build(),this.model.call(t,e)}build(t){if(Tt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Ko({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,e,s=console.log){this.built||this.build(),super.summary(t,e,s)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,e,s={}){if(!this.built)throw new yn("The model needs to be compiled before being used.");return this.model.evaluate(t,e,s)}async evaluateDataset(t,e){if(!this.built)throw new yn("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,e)}predict(t,e={}){return this.model==null&&this.build(),this.model.predict(t,e)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}async fit(t,e,s={}){if(!this.built)throw new yn("The model needs to be compiled before being used.");return this.model.fit(t,e,s)}async fitDataset(t,e){if(!this.built)throw new yn("The model needs to be compiled before being used.");return this.model.fitDataset(t,e)}async trainOnBatch(t,e){return this.model.trainOnBatch(t,e)}static fromConfig(t,e,s={},o=!1){let r,i={};if(e instanceof Array){if(e[0].className==null||e[0].className==="Merge")throw new R("Legacy serialization format not supported yet.");r=e}else I(e.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),r=e.layers,delete e.layers,i=e;const a=new t(i);if(!(a instanceof Ur))throw new xt(`Sequential.fromConfig called on non-Sequential input: ${a}`);for(const l of r){const u=ts(l,void 0,o);o&&u.setFastWeightInitDuringBuild(!0),a.add(u)}return a}set stopTraining(t){if(this.model==null)throw new R("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new R("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){const t=[];for(const e of this.layers){const s={};s.className=e.getClassName(),s.config=e.getConfig(),t.push(s)}return{name:this.name,layers:t}}}Ur.className="Sequential";j(Ur);let qe=class extends hr{getConfig(){return{}}};class Rb extends qe{apply(t,e=1){return UT(t,e)}}Rb.className="elu";j(Rb);class Db extends qe{apply(t){return ix(t)}}Db.className="selu";j(Db);class Ab extends qe{apply(t){return ms(t)}}Ab.className="relu";j(Ab);class Fb extends qe{apply(t){return P(()=>bc(6,ms(t)))}}Fb.className="relu6";j(Fb);class _b extends qe{apply(t){return t}}_b.className="linear";j(_b);class Ob extends qe{apply(t){return dr(t)}}Ob.className="sigmoid";j(Ob);class Lb extends qe{apply(t){return HT(t)}}Lb.className="hardSigmoid";j(Lb);class Mb extends qe{apply(t){return Zi(t)}}Mb.className="softplus";j(Mb);class Pb extends qe{apply(t){return GT(t)}}Pb.className="softsign";j(Pb);class zb extends qe{apply(t){return od(t)}}zb.className="tanh";j(zb);let bp=class extends qe{apply(t,e=-1){return Cd(t,e)}};bp.className="softmax";j(bp);class Bb extends qe{apply(t,e=-1){return qg(t,e)}}Bb.className="logSoftmax";j(Bb);class Vb extends qe{apply(t,e=1){return P(()=>E(dr(E(t,e)),t))}}Vb.className="swish";j(Vb);class Wb extends qe{apply(t){return P(()=>E(t,od(Zi(t))))}}Wb.className="mish";j(Wb);function As(n){return n.getClassName()}function Qc(n,t={}){return sa(n,mn.getMap().classNameMap,t,"activation")}function Fs(n){if(n==null){const t={};return t.className="linear",t.config={},Qc(t)}if(typeof n=="string"){const t={};return t.className=n,t.config={},Qc(t)}else return n instanceof qe?n:Qc(n)}function oR(n){if(n!=null&&typeof n!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${n}`)}class Ub extends hr{}class Gb extends Ub{constructor(t){super(),oR(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return P(()=>{let e=be([1]);return this.hasL1&&(e=Y(e,lt(E(this.l1,ge(t))))),this.hasL2&&(e=Y(e,lt(E(this.l2,ra(t))))),_(e,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,e){return new t({l1:e.l1,l2:e.l2})}}Gb.className="L1L2";j(Gb);const Wf={l1l2:"L1L2"};function Ot(n){return op(n)}function Uf(n,t={}){return sa(n,mn.getMap().classNameMap,t,"regularizer")}function Kt(n){if(n==null)return null;if(typeof n=="string"){const e={className:n in Wf?Wf[n]:n,config:{}};return Uf(e)}else return n instanceof Ub?n:Uf(n)}class Hb extends It{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,e){t=gt(t);let s=ms(t);return this.maxValue!=null&&(s=cn(s,0,this.maxValue)),s}computeOutputShape(t){return t}getConfig(){const t={maxValue:this.maxValue},e=super.getConfig();return Object.assign(t,e),t}}Hb.className="ReLU";j(Hb);class qb extends It{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=gt(t);return hd(s,this.alpha)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}}qb.className="LeakyReLU";j(qb);class jb extends It{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=jt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Kt(t.alphaRegularizer),this.alphaConstraint=fe(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new R(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=Tt(t);const e=t.slice(1);if(this.sharedAxes!=null)for(const o of this.sharedAxes)e[o-1]=1;this.alpha=this.addWeight("alpha",e,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);const s={};if(this.sharedAxes!=null)for(let o=1;o<t.length;++o)s[o]=t[o];this.inputSpec=[new de({ndim:t.length,axes:s})],this.built=!0}call(t,e){return t=gt(t),bd(t,this.alpha.read())}getConfig(){const t={alphaInitializer:Xt(this.alphaInitializer),alphaRegularizer:Ot(this.alphaRegularizer),alphaConstraint:pe(this.alphaConstraint),sharedAxes:this.sharedAxes},e=super.getConfig();return Object.assign(t,e),t}}jb.className="PReLU";j(jb);let Kb=class extends It{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new xt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,e){const s=gt(t);return mc(s)}computeOutputShape(t){return t}getConfig(){const t={alpha:this.alpha},e=super.getConfig();return Object.assign(t,e),t}};Kb.className="ELU";j(Kb);class Xb extends It{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,e){const s=gt(t);return E(s,st(un(s,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){const t={theta:this.theta},e=super.getConfig();return Object.assign(t,e),t}}Xb.className="ThresholdedReLU";j(Xb);class Yb extends It{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new bp().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,e){const s=gt(t);return this.softmax(s,this.axis)}computeOutputShape(t){return t}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}Yb.className="Softmax";j(Yb);function Xo(n,t,e){if(typeof n=="number")return Io(n,t);if(n.length!==t)throw new R(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${n.length} elements.`);for(let s=0;s<t;++s){const o=n[s];if(!zT(o))throw new R(`The ${e} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(n)} including a non-integer number ${o}`)}return n}function Ln(n,t,e,s,o=1){if(n==null)return n;const r=t+(t-1)*(o-1);let i;return e==="same"?i=n:i=n-r+1,Math.floor((i+s-1)/s)}function qn(n,t,e,s){if(n==null)return null;if(s==="valid")n=n*t+Ds([e-t,0]);else if(s==="same")n=n*t;else throw new R(`Unsupport padding mode: ${s}.`);return n}function yp(n,t){return P(()=>(ie(t),t==="channelsFirst"?kt(n,[0,2,3,1]):n))}function Zb(n,t){return P(()=>(ie(t),t==="channelsFirst"?kt(n,[0,2,3,4,1]):n))}function rR(n,t,e,s=1,o="valid",r,i=1){return P(()=>{if(r==null&&(r=Pn()),ie(r),n.shape.length!==3)throw new R(`The input of a conv1dWithBias operation should be 3, but is ${n.shape.length} instead.`);if(t.shape.length!==3)throw new R(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(e!=null&&e.shape.length!==1)throw new R(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(r==="channelsFirst"&&(n=kt(n,[0,2,1])),o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Mg(n,t,s,o==="same"?"same":"valid","NWC",i);return e!=null&&(a=Vn(a,e)),a})}function Gf(n,t,e,s=[1,1],o="valid",r,i,a=null){return P(()=>{if(r==null&&(r=Pn()),ie(r),n.rank!==3&&n.rank!==4)throw new R(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${n.rank}.`);if(t.rank!==3&&t.rank!==4)throw new R(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${n.rank}.`);let l=yp(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=nS({x:l,filter:t,strides:s,pad:o==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:e,activation:a}),r==="channelsFirst"&&(l=kt(l,[0,3,1,2])),l})}function iR(n,t,e,s=[1,1,1],o="valid",r,i){return P(()=>{if(r==null&&(r=Pn()),ie(r),n.rank!==4&&n.rank!==5)throw new R(`conv3dWithBias expects input to be of rank 4 or 5, but received ${n.rank}.`);if(t.rank!==4&&t.rank!==5)throw new R(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${n.rank}.`);let a=Zb(n,r);if(o==="causal")throw new xt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=mI(a,t,s,o==="same"?"same":"valid","NDHWC",i),e!=null&&(a=Vn(a,e)),r==="channelsFirst"&&(a=kt(a,[0,4,1,2,3])),a})}class Ec extends It{constructor(t,e){if(super(e),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",Ec.verifyArgs(e),this.rank=t,ye(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new xt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Xo(e.kernelSize,t,"kernelSize"),this.strides=Xo(e.strides==null?1:e.strides,t,"strides"),this.padding=e.padding==null?"valid":e.padding,hn(this.padding),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,ie(this.dataFormat),this.activation=Fs(e.activation),this.useBias=e.useBias==null?!0:e.useBias,this.biasInitializer=jt(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=fe(e.biasConstraint),this.biasRegularizer=Kt(e.biasRegularizer),this.activityRegularizer=Kt(e.activityRegularizer),this.dilationRate=Xo(e.dilationRate==null?1:e.dilationRate,t,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new R(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new R(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new R(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(t){if(Hn("kernelSize"in t,"required key 'kernelSize' not in config"),typeof t.kernelSize!="number"&&!rp(t.kernelSize,"number",1,3))throw new R(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(t.kernelSize)}.`)}getConfig(){const t={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:As(this.activation),useBias:this.useBias,biasInitializer:Xt(this.biasInitializer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),biasConstraint:pe(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}class mr extends Ec{constructor(t,e){super(t,e),this.kernel=null,mr.verifyArgs(e),this.filters=e.filters,ye(this.filters,"filters"),this.kernelInitializer=jt(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=fe(e.kernelConstraint),this.kernelRegularizer=Kt(e.kernelRegularizer)}build(t){t=Tt(t);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new R(`The channel dimension of the input should be defined. Found ${t[e]}`);const s=t[e],o=this.kernelSize.concat([s,this.filters]);this.kernel=this.addWeight("kernel",o,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[e]:s}}],this.built=!0}call(t,e){return P(()=>{t=gt(t);let s;const o=this.bias==null?null:this.bias.read(),r=Xx(this.activation.getClassName());if(r!=null&&this.rank===2)s=Gf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)s=rR(t,this.kernel.read(),o,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)s=Gf(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)s=iR(t,this.kernel.read(),o,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new xt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(s=this.activation.apply(s))}return s})}computeOutputShape(t){t=Tt(t);const e=[],s=this.dataFormat==="channelsLast"?t.slice(1,t.length-1):t.slice(2);for(let r=0;r<s.length;++r){const i=Ln(s[r],this.kernelSize[r],this.padding,this.strides[r],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[r]);e.push(i)}let o=[t[0]];return this.dataFormat==="channelsLast"?(o=o.concat(e),o.push(this.filters)):(o.push(this.filters),o=o.concat(e)),o}getConfig(){const t={filters:this.filters,kernelInitializer:Xt(this.kernelInitializer),kernelRegularizer:Ot(this.kernelRegularizer),kernelConstraint:pe(this.kernelConstraint)},e=super.getConfig();return Object.assign(t,e),t}static verifyArgs(t){if(!("filters"in t)||typeof t.filters!="number"||t.filters<1)throw new R(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(t.filters)}`)}}class ca extends mr{constructor(t){super(2,t),ca.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!rp(t.kernelSize,"number",1,2))throw new R(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}ca.className="Conv2D";j(ca);class ua extends mr{constructor(t){super(3,t),ua.verifyArgs(t)}getConfig(){const t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new R(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}ua.className="Conv3D";j(ua);class Jb extends ca{constructor(t){if(super(t),this.inputSpec=[new de({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new R(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Tt(t),t.length!==4)throw new R("Input should have rank 4; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new R("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new de({ndim:4,axes:{[e]:s}})],this.built=!0}call(t,e){return P(()=>{let s=gt(t);if(s.shape.length!==4)throw new R(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a;this.dataFormat==="channelsFirst"?(i=2,a=3):(i=1,a=2);const l=o[i],c=o[a],u=this.kernelSize[0],h=this.kernelSize[1],d=this.strides[0],p=this.strides[1],f=qn(l,d,u,this.padding),m=qn(c,p,h,this.padding),g=[r,f,m,this.filters];this.dataFormat!=="channelsLast"&&(s=kt(s,[0,2,3,1]));let x=Pg(s,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(x=kt(x,[0,3,1,2])),this.bias!=null&&(x=Vn(x,this.bias.read(),this.dataFormat)),this.activation!=null&&(x=this.activation.apply(x)),x})}computeOutputShape(t){t=Tt(t);const e=t.slice();let s,o,r;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3):(s=3,o=1,r=2);const i=this.kernelSize[0],a=this.kernelSize[1],l=this.strides[0],c=this.strides[1];return e[s]=this.filters,e[o]=qn(e[o],l,i,this.padding),e[r]=qn(e[r],c,a,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Jb.className="Conv2DTranspose";j(Jb);class Qb extends ua{constructor(t){if(super(t),this.inputSpec=[new de({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new R(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=Tt(t),t.length!==5)throw new R("Input should have rank 5; Received input shape: "+JSON.stringify(t));const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null)throw new R("The channel dimension of the inputs should be defined. Found `None`.");const s=t[e],o=this.kernelSize.concat([this.filters,s]);this.kernel=this.addWeight("kernel",o,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new de({ndim:5,axes:{[e]:s}})],this.built=!0}call(t,e){return P(()=>{let s=gt(t);if(s.shape.length!==5)throw new R(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`);const o=s.shape,r=o[0];let i,a,l;this.dataFormat==="channelsFirst"?(l=2,i=3,a=4):(l=1,i=2,a=3);const c=o[l],u=o[i],h=o[a],d=this.kernelSize[0],p=this.kernelSize[1],f=this.kernelSize[2],m=this.strides[0],g=this.strides[1],x=this.strides[2],b=qn(c,m,d,this.padding),w=qn(u,g,p,this.padding),y=qn(h,x,f,this.padding),$=[r,b,w,y,this.filters];this.dataFormat!=="channelsLast"&&(s=kt(s,[0,2,3,4,1]));let C=bI(s,this.kernel.read(),$,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(C=kt(C,[0,4,1,2,3])),this.bias!==null&&(C=Vn(C,this.bias.read(),this.dataFormat)),this.activation!==null&&(C=this.activation.apply(C)),C})}computeOutputShape(t){t=Tt(t);const e=t.slice();let s,o,r,i;this.dataFormat==="channelsFirst"?(s=1,o=2,r=3,i=4):(s=4,o=1,r=2,i=3);const a=this.kernelSize[0],l=this.kernelSize[1],c=this.kernelSize[2],u=this.strides[0],h=this.strides[1],d=this.strides[2];return e[s]=this.filters,e[o]=qn(e[o],u,a,this.padding),e[r]=qn(e[r],h,l,this.padding),e[i]=qn(e[i],d,c,this.padding),e}getConfig(){const t=super.getConfig();return delete t.dilationRate,t}}Qb.className="Conv3DTranspose";j(Qb);class t0 extends mr{constructor(t,e){if(super(t,e),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,e.filters==null)throw new R("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(e.kernelInitializer!=null||e.kernelRegularizer!=null||e.kernelConstraint!=null)throw new R("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(e.padding!=null&&e.padding!=="same"&&e.padding!=="valid")throw new R(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(e.padding)}`);this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=jt(e.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Kt(e.depthwiseRegularizer),this.depthwiseConstraint=fe(e.depthwiseConstraint),this.pointwiseInitializer=jt(e.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Kt(e.pointwiseRegularizer),this.pointwiseConstraint=fe(e.pointwiseConstraint)}build(t){if(t=Tt(t),t.length<this.rank+2)throw new R(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);const e=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[e]==null||t[e]<0)throw new R(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[e])}`);const s=t[e],o=this.kernelSize.concat([s,this.depthMultiplier]),r=[];for(let a=0;a<this.rank;++a)r.push(1);r.push(s*this.depthMultiplier,this.filters);const i=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",o,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,i,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",r,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,i,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,i,this.biasConstraint):this.bias=null,this.inputSpec=[new de({ndim:this.rank+2,axes:{[e]:s}})],this.built=!0}call(t,e){return P(()=>{t=gt(t);let s;if(this.rank===1)throw new xt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=kt(t,[0,2,3,1])),s=ax(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(s=Vn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),this.dataFormat==="channelsFirst"&&(s=kt(s,[0,3,1,2])),s})}getConfig(){const t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=Xt(this.depthwiseInitializer),t.pointwiseInitializer=Xt(this.pointwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.pointwiseRegularizer=Ot(this.pointwiseRegularizer),t.depthwiseConstraint=pe(this.depthwiseConstraint),t.pointwiseConstraint=pe(this.pointwiseConstraint),t}}t0.className="SeparableConv";class e0 extends t0{constructor(t){super(2,t)}}e0.className="SeparableConv2D";j(e0);class Rc extends mr{constructor(t){super(1,t),Rc.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){const t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!rp(t.kernelSize,"number",1,1))throw new R(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}Rc.className="Conv1D";j(Rc);class n0 extends It{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,e){return P(()=>{if(t=gt(t),this.dataFormat==="channelsLast"){const s=Ia(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return Ia(s,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{const s=Ia(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return Ia(s,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){const t={cropping:this.cropping,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}n0.className="Cropping2D";j(n0);class s0 extends It{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,ie(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,LT(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){const e=t[2]==null?null:this.size[0]*t[2],s=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],e,s]}else{const e=t[1]==null?null:this.size[0]*t[1],s=t[2]==null?null:this.size[1]*t[2];return[t[0],e,s,t[3]]}}call(t,e){return P(()=>{let s=gt(t);const o=s.shape;if(this.dataFormat==="channelsFirst"){s=kt(s,[0,2,3,1]);const r=this.size[0]*o[2],i=this.size[1]*o[3],a=this.interpolation==="nearest"?io.resizeNearestNeighbor(s,[r,i]):io.resizeBilinear(s,[r,i]);return kt(a,[0,3,1,2])}else{const r=this.size[0]*o[1],i=this.size[1]*o[2];return this.interpolation==="nearest"?io.resizeNearestNeighbor(s,[r,i]):io.resizeBilinear(s,[r,i])}})}getConfig(){const t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},e=super.getConfig();return Object.assign(t,e),t}}s0.className="UpSampling2D";j(s0);function aR(n,t,e=[1,1],s="valid",o,r){return P(()=>{o==null&&(o=Pn()),ie(o);let i=yp(n,o);if(n.rank!==4)throw new R(`Input for depthwiseConv2d is required to be 4-D, but is instead ${n.rank}-D`);if(t.rank!==4)throw new R(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return i=ld(i,t,e,s==="same"?"same":"valid","NHWC",r),o==="channelsFirst"&&(i=kt(i,[0,3,1,2])),i})}class o0 extends Ec{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=jt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=fe(t.depthwiseConstraint),this.depthwiseRegularizer=Kt(t.depthwiseRegularizer)}build(t){if(t=Tt(t),t.length<4)throw new R(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);const e=this.dataFormat==="channelsFirst"?1:3;if(t[e]==null||t[e]<0)throw new R(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[e]}).`);const s=t[e],o=[this.kernelSize[0],this.kernelSize[1],s,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",o,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[s*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return P(()=>{t=gt(t);let s=aR(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(s=Vn(s,this.bias.read(),this.dataFormat)),this.activation!=null&&(s=this.activation.apply(s)),s})}computeOutputShape(t){t=Tt(t);const e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,r=Ln(e,this.kernelSize[0],this.padding,this.strides[0]),i=Ln(s,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],o,r,i]:[t[0],r,i,o]}getConfig(){const t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=Xt(this.depthwiseInitializer),t.depthwiseRegularizer=Ot(this.depthwiseRegularizer),t.depthwiseConstraint=pe(this.depthwiseRegularizer),t}}o0.className="DepthwiseConv2D";j(o0);function r0(n,t,e,s){if(Array.isArray(n)){if(t!=null||e!=null)throw new R("When inputs is an array, neither initialState or constants should be provided");s!=null&&(e=n.slice(n.length-s,n.length),n=n.slice(0,n.length-s)),n.length>1&&(t=n.slice(1,n.length)),n=n[0]}function o(r){return r==null||Array.isArray(r)?r:[r]}return t=o(t),e=o(e),{inputs:n,initialState:t,constants:e}}function i0(n,t,e,s=!1,o,r,i=!1,a=!1){return P(()=>{const l=t.shape.length;if(l<3)throw new R(`Input should be at least 3D, but is ${l}D.`);const c=[1,0].concat(Mn(2,l));if(t=kt(t,c),r!=null)throw new xt("The rnn() functoin of the deeplearn.js backend does not support constants yet.");i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),o!=null&&(o=st(st(o,"bool"),"float32"),o.rank===l-1&&(o=Ke(o,-1)),o=kt(o,c)),s&&(t=wo(t,0),o!=null&&(o=wo(o,0)));const u=[];let h,d=e;const p=t.shape[0],f=$o(t);let m;o!=null&&(m=$o(o));for(let x=0;x<p;++x){const b=f[x],w=P(()=>n(b,d));if(o==null)h=w[0],d=w[1];else{const y=P(()=>{const $=m[x],C=ct(In($),$),v=Y(E(w[0],$),E(d[0],C)),k=d.map((N,T)=>Y(E(w[1][T],$),E(N,C)));return{output:v,newStates:k}});h=y.output,d=y.newStates}a&&u.push(h)}let g;return a&&(g=Rs(u,1)),[h,g,d]})}class Gs extends It{constructor(t){super(t);let e;if(t.cell==null)throw new R("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?e=new Cp({cells:t.cell}):e=t.cell,e.stateSize==null)throw new R("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new de({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return Mn(0,t).map(e=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){Mu(t)&&(t=t[0]),t=t;let e=this.cell.stateSize;Array.isArray(e)||(e=[e]);const s=e[0];let o;if(this.returnSequences?o=[t[0],t[1],s]:o=[t[0],s],this.returnState){const r=[];for(const i of e)r.push([t[0],i]);return[o].concat(r)}else return o}computeMask(t,e){return P(()=>{Array.isArray(e)&&(e=e[0]);const s=this.returnSequences?e:null;if(this.returnState){const o=this.states.map(r=>null);return[s].concat(o)}else return s})}get states(){if(this.states_==null){const t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let s=0;s<t;++s)e.push(null);return e}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new xt("Constants support is not implemented in RNN yet.");Mu(t)&&(t=t[0]),t=t;const e=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new de({shape:[e,null,...s]});const o=[t[0]].concat(t.slice(2));this.cell.build(o);let r;if(Array.isArray(this.cell.stateSize)?r=this.cell.stateSize:r=[this.cell.stateSize],this.stateSpec!=null){if(!Rt(this.stateSpec.map(i=>i.shape[i.shape.length-1]),r))throw new R(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=r.map(i=>new de({shape:[null,i]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){P(()=>{if(!this.stateful)throw new Gn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape[0];if(s==null)throw new R("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>be([s,o])):this.states_=[be([s,this.cell.stateSize])];else if(t==null)wt(this.states_),this.keptStates!=null&&(wt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(o=>be([s,o])):this.states_[0]=be([s,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new R(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e===!0?this.keptStates.push(this.states_.slice()):wt(this.states_);for(let o=0;o<this.states_.length;++o){const r=t[o],i=Array.isArray(this.cell.stateSize)?this.cell.stateSize[o]:this.cell.stateSize,a=[s,i];if(!Rt(r.shape,a))throw new R(`State ${o} is incompatible with layer ${this.name}: expected shape=${a}, received shape=${r.shape}`);this.states_[o]=r}}this.states_=this.states_.map(o=>Yn(o.clone()))})}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=r0(t,s,o,this.numConstants);t=r.inputs,s=r.initialState,o=r.constants;let i=[],a=[];if(s!=null){e.initialState=s,i=i.concat(s),this.stateSpec=[];for(const c of s)this.stateSpec.push(new de({shape:c.shape}));a=a.concat(this.stateSpec)}if(o!=null&&(e.constants=o,i=i.concat(o),this.numConstants=o.length),i[0]instanceof jn){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return P(()=>{const s=e==null?null:e.mask,o=e==null?null:e.training;let r=e==null?null:e.initialState;t=gt(t),r==null&&(this.stateful?r=this.states_:r=this.getInitialState(t));const i=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==i)throw new R(`RNN Layer has ${i} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");const a={training:o},c=i0((f,m)=>{const g=this.cell.call([f].concat(m),a);return[g[0],g.slice(1)]},t,r,this.goBackwards,s,null,this.unroll,this.returnSequences),u=c[0],h=c[1],d=c[2];this.stateful&&this.resetStates(d,o);const p=this.returnSequences?h:u;return this.returnState?[p].concat(d):p})}getInitialState(t){return P(()=>{let e=be(t.shape);return e=lt(e,[1,2]),e=oa(e),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(s=>s>1?Ou(e,[1,s]):e):this.cell.stateSize>1?[Ou(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){const t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(e.numConstants=this.numConstants);const s=this.cell.getConfig();return this.getClassName()===Gs.className&&(e.cell={className:this.cell.getClassName(),config:s}),Object.assign(Object.assign(Object.assign({},s),t),e)}static fromConfig(t,e,s={}){const o=e.cell,r=ts(o,s);return new t(Object.assign(e,{cell:r}))}}Gs.className="RNN";j(Gs);class Dc extends It{}class wp extends Dc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,ye(this.units,"units"),this.activation=Fs(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=jt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=jt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=jt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=fe(t.kernelConstraint),this.recurrentConstraint=fe(t.recurrentConstraint),this.biasConstraint=fe(t.biasConstraint),this.dropout=nr([1,Ds([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=nr([1,Ds([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Tt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return P(()=>{if(t=t,t.length!==2)throw new R(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let s=t[1];t=t[0];const o=e.training==null?!1:e.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=_s({ones:()=>In(t),rate:this.dropout,training:o,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=_s({ones:()=>In(s),rate:this.recurrentDropout,training:o,dropoutFunc:this.dropoutFunc}));let r;const i=this.dropoutMask,a=this.recurrentDropoutMask;i!=null?r=Qn(E(t,i),this.kernel.read()):r=Qn(t,this.kernel.read()),this.bias!=null&&(r=Vn(r,this.bias.read())),a!=null&&(s=E(s,a));let l=Y(r,Qn(s,this.recurrentKernel.read()));return this.activation!=null&&(l=this.activation.apply(l)),[l,l]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:As(this.activation),useBias:this.useBias,kernelInitializer:Xt(this.kernelInitializer),recurrentInitializer:Xt(this.recurrentInitializer),biasInitializer:Xt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:pe(this.kernelConstraint),recurrentConstraint:pe(this.recurrentConstraint),biasConstraint:pe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}wp.className="SimpleRNNCell";j(wp);class a0 extends Gs{constructor(t){t.cell=new wp(t),super(t)}call(t,e){return P(()=>{this.cell.dropoutMask!=null&&(wt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(wt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return new t(e)}}a0.className="SimpleRNN";j(a0);class $p extends Dc{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new R("GRUCell does not support reset_after parameter set to true.");this.units=t.units,ye(this.units,"units"),this.activation=Fs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Fs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=jt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=jt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=jt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=fe(t.kernelConstraint),this.recurrentConstraint=fe(t.recurrentConstraint),this.biasConstraint=fe(t.biasConstraint),this.dropout=nr([1,Ds([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=nr([1,Ds([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=Tt(t);const e=t[t.length-1];this.kernel=this.addWeight("kernel",[e,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return P(()=>{if(t=t,t.length!==2)throw new R(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training==null?!1:e.training;let o=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=_s({ones:()=>In(t),rate:this.dropout,training:s,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=_s({ones:()=>In(o),rate:this.recurrentDropout,training:s,count:3,dropoutFunc:this.dropoutFunc}));const r=this.dropoutMask,i=this.recurrentDropoutMask;let a,l,c;0<this.dropout&&this.dropout<1&&(t=E(t,r[0]));let u=Qn(t,this.kernel.read());this.useBias&&(u=Vn(u,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(o=E(o,i[0]));const h=this.recurrentKernel.read(),[d,p]=an(h,[2*this.units,this.units],h.rank-1),f=Qn(o,d),[m,g,x]=an(u,3,u.rank-1),[b,w]=an(f,2,f.rank-1);a=this.recurrentActivation.apply(Y(m,b)),l=this.recurrentActivation.apply(Y(g,w));const y=Qn(E(l,o),p);c=this.activation.apply(Y(x,y));const $=Y(E(a,o),E(Y(1,Yt(a)),c));return[$,$]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:As(this.activation),recurrentActivation:As(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Xt(this.kernelInitializer),recurrentInitializer:Xt(this.recurrentInitializer),biasInitializer:Xt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:pe(this.kernelConstraint),recurrentConstraint:pe(this.recurrentConstraint),biasConstraint:pe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}$p.className="GRUCell";j($p);class l0 extends Gs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new $p(t),super(t)}call(t,e){return P(()=>{this.cell.dropoutMask!=null&&(wt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(wt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}l0.className="GRU";j(l0);class Ac extends Dc{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,ye(this.units,"units"),this.activation=Fs(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Fs(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=jt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=jt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=jt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Kt(t.kernelRegularizer),this.recurrentRegularizer=Kt(t.recurrentRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.kernelConstraint=fe(t.kernelConstraint),this.recurrentConstraint=fe(t.recurrentConstraint),this.biasConstraint=fe(t.biasConstraint),this.dropout=nr([1,Ds([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=nr([1,Ds([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;t=Tt(t);const s=t[t.length-1];this.kernel=this.addWeight("kernel",[s,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let o;if(this.useBias){if(this.unitForgetBias){const r=this.biasInitializer,i=this.units;o=new(e=class extends Sn{apply(l,c){const u=r.apply([i]),h=new ap().apply([i]),d=r.apply([i*2]);return Nf(Nf(u,h),d)}},e.className="CustomInit",e)}else o=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,o,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return P(()=>{const s=e.training==null?!1:e.training;if(t=t,t.length!==3)throw new R(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let o=t[1];const r=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=_s({ones:()=>In(t),rate:this.dropout,training:s,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=_s({ones:()=>In(o),rate:this.recurrentDropout,training:s,count:4,dropoutFunc:this.dropoutFunc}));const i=this.dropoutMask,a=this.recurrentDropoutMask;let l,c,u,h;0<this.dropout&&this.dropout<1&&(t=E(t,i[0]));let d=Qn(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(o=E(o,a[0])),d=Y(d,Qn(o,this.recurrentKernel.read())),this.useBias&&(d=Vn(d,this.bias.read()));const[p,f,m,g]=an(d,4,d.rank-1);l=this.recurrentActivation.apply(p),c=this.recurrentActivation.apply(f),u=Y(E(c,r),E(l,this.activation.apply(m))),h=this.recurrentActivation.apply(g);const x=E(h,this.activation.apply(u));return[x,x,u]})}getConfig(){const t=super.getConfig(),e={units:this.units,activation:As(this.activation),recurrentActivation:As(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Xt(this.kernelInitializer),recurrentInitializer:Xt(this.recurrentInitializer),biasInitializer:Xt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Ot(this.kernelRegularizer),recurrentRegularizer:Ot(this.recurrentRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:pe(this.kernelConstraint),recurrentConstraint:pe(this.recurrentConstraint),biasConstraint:pe(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}Ac.className="LSTMCell";j(Ac);class c0 extends Gs{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Ac(t),super(t)}call(t,e){return P(()=>{this.cell.dropoutMask!=null&&(wt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(wt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}static fromConfig(t,e){return e.implmentation===0&&(e.implementation=1),new t(e)}}c0.className="LSTM";j(c0);class Cp extends Dc{constructor(t){super(t),this.cells=t.cells}get stateSize(){const t=[];for(const e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return P(()=>{t=t;let s=t.slice(1);const o=[];for(const a of this.cells.slice().reverse())Array.isArray(a.stateSize)?o.push(s.splice(0,a.stateSize.length)):o.push(s.splice(0,1));o.reverse();const r=[];let i;for(let a=0;a<this.cells.length;++a){const l=this.cells[a];s=o[a],a===0?i=[t[0]].concat(s):i=[i[0]].concat(s),i=l.call(i,e),r.push(i.slice(1))}s=[];for(const a of r.slice().reverse())s.push(...a);return[i[0]].concat(s)})}build(t){Mu(t)&&(t=t[0]),t=t;let e;this.cells.forEach((s,o)=>{co(`RNNCell_${o}`,()=>{s.build(t),Array.isArray(s.stateSize)?e=s.stateSize[0]:e=s.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){const t=super.getConfig(),e=r=>({className:r.getClassName(),config:r.getConfig()}),o={cells:this.cells.map(e)};return Object.assign(Object.assign({},t),o)}static fromConfig(t,e,s={}){const o=[];for(const r of e.cells)o.push(ts(r,s));return new t({cells:o})}get trainableWeights(){if(!this.trainable)return[];const t=[];for(const e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){const t=[];for(const e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){const e=[];for(const s of this.cells)e.push(...s.trainableWeights);return e.concat(t)}return t}getWeights(){const t=[];for(const e of this.cells)t.push(...e.weights);return Pu(t)}setWeights(t){const e=[];for(const s of this.cells){const o=s.weights.length,r=t.splice(o);for(let i=0;i<s.weights.length;++i)e.push([s.weights[i],r[i]])}fp(e)}}Cp.className="StackedRNNCells";j(Cp);function _s(n){const{ones:t,rate:e,training:s=!1,count:o=1,dropoutFunc:r}=n,i=()=>r!=null?r(t(),e):nb(t(),e),a=()=>ia(i,t,s);return!o||o<=1?Yn(a().clone()):Array(o).fill(void 0).map(a).map(c=>Yn(c.clone()))}var lR=globalThis&&globalThis.__rest||function(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e};class u0 extends Gs{constructor(t){if(t.unroll)throw new xt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new xt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new de({ndim:5})]}call(t,e){return P(()=>{if(this.cell.dropoutMask!=null&&(wt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(wt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),e&&e.constants)throw new R("ConvRNN2D cell does not support constants");const s=e==null?null:e.mask,o=e==null?null:e.training,r=e==null?null:e.initialState;return super.call(t,{mask:s,training:o,initialState:r})})}computeOutputShape(t){let e=this.computeSingleOutputShape(t);return this.returnSequences||(e=[e[0],...e.slice(2)]),this.returnState&&(e=[e,...Array(2).fill([t[0],...e.slice(-3)])]),e}getInitialState(t){return P(()=>{const{stateSize:e}=this.cell,s=t.shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)],i=be(r);return Array.isArray(e)?Array(e.length).fill(i):[i]})}resetStates(t,e=!1){P(()=>{if(!this.stateful)throw new Gn("Cannot call resetStates() on an RNN Layer that is not stateful.");const s=this.inputSpec[0].shape,o=this.computeSingleOutputShape(s),r=[o[0],...o.slice(2)];if(s[0]==null)throw new R("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>be(r)):this.states_=[be(r)];else if(t==null)wt(this.states_),this.keptStates!=null&&(wt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>be(r)):this.states_[0]=be(r);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new R(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);e?this.keptStates.push(this.states_.slice()):wt(this.states_);for(let a=0;a<this.states_.length;++a){const l=t[a],c=r;if(!Rt(l.shape,c))throw new R(`State ${a} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${l.shape}`);this.states_[a]=l}}this.states_=this.states_.map(a=>Yn(a.clone()))})}computeSingleOutputShape(t){const{dataFormat:e,filters:s,kernelSize:o,padding:r,strides:i,dilationRate:a}=this.cell,l=e==="channelsFirst",c=t[l?3:2],u=t[l?4:3],h=Ln(c,o[0],r,i[0],a[0]),d=Ln(u,o[1],r,i[1],a[1]);return[...t.slice(0,2),...l?[s,h,d]:[h,d,s]]}}u0.className="ConvRNN2D";class Ip extends Ac{constructor(t){const{filters:e,kernelSize:s,strides:o,padding:r,dataFormat:i,dilationRate:a}=t;super(Object.assign(Object.assign({},t),{units:e})),this.filters=e,ye(this.filters,"filters"),this.kernelSize=Xo(s,2,"kernelSize"),this.kernelSize.forEach(l=>ye(l,"kernelSize")),this.strides=Xo(o||1,2,"strides"),this.strides.forEach(l=>ye(l,"strides")),this.padding=r||"valid",hn(this.padding),this.dataFormat=i||"channelsLast",ie(this.dataFormat),this.dilationRate=Xo(a||1,2,"dilationRate"),this.dilationRate.forEach(l=>ye(l,"dilationRate"))}build(t){var e;t=Tt(t);const s=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[s]==null)throw new R(`The channel dimension of the input should be defined. Found ${t[s]}`);const o=t[s],r=4,i=this.kernelSize.concat([o,this.filters*r]);this.kernel=this.addWeight("kernel",i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);const a=this.kernelSize.concat([this.filters,this.filters*r]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let l;if(this.unitForgetBias){const c=this.biasInitializer,u=this.filters;l=new(e=class extends Sn{apply(d,p){const f=c.apply([u]),m=Vs([u]),g=c.apply([u*2]);return ip([f,m,g])}},e.className="CustomInit",e)}else l=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*r],null,l,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,e){return P(()=>{if(t.length!==3)throw new R(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);const s=e.training||!1,o=t[0],r=t[1],i=t[2],a=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=_s({ones:()=>In(o),rate:this.dropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const l=this.dropoutMask,c=(X,K,Q)=>!K||!K[Q]?X:E(K[Q],X);let u=c(o,l,0),h=c(o,l,1),d=c(o,l,2),p=c(o,l,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=_s({ones:()=>In(r),rate:this.recurrentDropout,training:s,count:a,dropoutFunc:this.dropoutFunc}));const f=this.recurrentDropoutMask;let m=c(r,f,0),g=c(r,f,1),x=c(r,f,2),b=c(r,f,3);const w=3,[y,$,C,v]=an(this.kernel.read(),a,w),[k,N,T,F]=this.useBias?an(this.bias.read(),a):[null,null,null,null];u=this.inputConv(u,y,k,this.padding),h=this.inputConv(h,$,N,this.padding),d=this.inputConv(d,C,T,this.padding),p=this.inputConv(p,v,F,this.padding);const[z,M,L,O]=an(this.recurrentKernel.read(),a,w);m=this.recurrentConv(m,z),g=this.recurrentConv(g,M),x=this.recurrentConv(x,L),b=this.recurrentConv(b,O);const B=this.recurrentActivation.apply(Y(u,m)),U=this.recurrentActivation.apply(Y(h,g)),W=Y(E(U,i),E(B,this.activation.apply(Y(d,x)))),q=E(this.recurrentActivation.apply(Y(p,b)),this.activation.apply(W));return[q,q,W]})}getConfig(){const t=super.getConfig(),e=lR(t,["units"]),s={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},e),s)}inputConv(t,e,s,o){const r=bo(t,e,this.strides,o||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return s?Vn(r,s,this.dataFormat):r}recurrentConv(t,e){return bo(t,e,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}Ip.className="ConvLSTM2DCell";j(Ip);class h0 extends u0{constructor(t){const e=new Ip(t);super(Object.assign(Object.assign({},t),{cell:e}))}static fromConfig(t,e){return new t(e)}}h0.className="ConvLSTM2D";j(h0);class vp extends It{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;const e=t.shape,s=[];for(let o=0;o<this.noiseShape.length;++o)s.push(this.noiseShape[o]==null?e[o]:this.noiseShape[o]);return s}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t);if(0<this.rate&&this.rate<1){const o=e.training==null?!1:e.training,r=this.getNoiseShape(s);return ia(()=>nb(s,this.rate,r,this.seed),()=>s,o)}return t})}getConfig(){const t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},e=super.getConfig();return Object.assign(t,e),t}dispose(){return super.dispose()}}vp.className="Dropout";j(vp);class d0 extends vp{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){const e=t.shape;return[e[0],1,e[2]]}}d0.className="SpatialDropout1D";j(d0);class p0 extends It{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let e=null;t.batchSize!=null&&(e=t.batchSize),this.batchInputShape=[e,t.inputDim]}this.units=t.units,ye(this.units,"units"),this.activation=Fs(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=jt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=jt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=fe(t.kernelConstraint),this.biasConstraint=fe(t.biasConstraint),this.kernelRegularizer=Kt(t.kernelRegularizer),this.biasRegularizer=Kt(t.biasRegularizer),this.activityRegularizer=Kt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=Tt(t);const e=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[e,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:e}}],this.built=!0}computeOutputShape(t){t=Tt(t);const e=t.slice();return e[e.length-1]=this.units,e}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t),o=Xx(this.activation.getClassName());let r;return o!=null?r=Qn(s,this.kernel.read(),o,this.bias?this.bias.read():null):(r=Qn(s,this.kernel.read()),this.bias!=null&&(r=Vn(r,this.bias.read())),this.activation!=null&&(r=this.activation.apply(r))),r})}getConfig(){const t={units:this.units,activation:As(this.activation),useBias:this.useBias,kernelInitializer:Xt(this.kernelInitializer),biasInitializer:Xt(this.biasInitializer),kernelRegularizer:Ot(this.kernelRegularizer),biasRegularizer:Ot(this.biasRegularizer),activityRegularizer:Ot(this.activityRegularizer),kernelConstraint:pe(this.kernelConstraint),biasConstraint:pe(this.biasConstraint)},e=super.getConfig();return Object.assign(t,e),t}}p0.className="Dense";j(p0);class f0 extends It{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=Tt(t);for(const e of t.slice(1))if(e==null)throw new R(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Ts(t,1)]}call(t,e){return P(()=>{this.invokeCallHook(t,e);let s=gt(t);if(this.dataFormat==="channelsFirst"&&s.rank>1){const o=[0];for(let r=2;r<s.rank;++r)o.push(r);o.push(1),s=kt(s,o)}return WT(s)})}getConfig(){const t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);const e=super.getConfig();return Object.assign(t,e),t}}f0.className="Flatten";j(f0);class m0 extends It{constructor(t){super(t),this.supportsMasking=!0,this.activation=Fs(t.activation)}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t);return this.activation.apply(s)})}getConfig(){const t={activation:As(this.activation)},e=super.getConfig();return Object.assign(t,e),t}}m0.className="Activation";j(m0);class g0 extends It{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,e){return P(()=>(t=gt(t),BT(t,this.n)))}getConfig(){const t={n:this.n},e=super.getConfig();return Object.assign(t,e),t}}g0.className="RepeatVector";j(g0);class x0 extends It{constructor(t){super(t),this.targetShape=t.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,e){const s="Total size of new array must be unchanged.",o=e.slice();let r=1,i=null;for(let l=0;l<o.length;++l){const c=o[l];if(this.isUnknown(c))if(i===null)i=l;else throw new R("Can only specifiy one unknown dimension.");else r*=c}const a=Ts(t);if(i!==null){if(r===0||a%r!==0)throw new R(s);o[i]=a/r}else if(a!==r)throw new R(s);return o}computeOutputShape(t){let e=!1;for(let s=0;s<t.length;++s)if(this.isUnknown(t[s])){e=!0;break}return e?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t),o=s.shape,r=o.slice(0,1).concat(this.fixUnknownDimension(o.slice(1),this.targetShape));return _(s,r)})}getConfig(){const t={targetShape:this.targetShape},e=super.getConfig();return Object.assign(t,e),t}}x0.className="Reshape";j(x0);class b0 extends It{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);const e=Mn(1,t.dims.length+1);if(!Rt(t.dims.slice().sort(),e))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new de({ndim:this.dims.length+1})]}computeOutputShape(t){t=Tt(t);const e=t.slice();return this.dims.forEach((s,o)=>{e[o+1]=t[s]}),e}call(t,e){return kt(gt(t),this.dimsIncludingBatch)}getConfig(){const t={dims:this.dims},e=super.getConfig();return Object.assign(t,e),t}}b0.className="Permute";j(b0);class y0 extends It{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={maskValue:this.maskValue};return Object.assign(e,t),e}computeMask(t,e){const s=gt(t),o=-1;return Eu(zr(s,this.maskValue),o)}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t),o=-1,r=!0,i=Eu(zr(s,this.maskValue),o,r);return E(s,st(i,s.dtype))})}}y0.className="Masking";j(y0);class w0 extends It{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let e=null;t.batchSize!=null&&(e=t.batchSize),t.inputLength==null?this.batchInputShape=[e,null]:this.batchInputShape=[e].concat(Ut(t.inputLength))}this.inputDim=t.inputDim,ye(this.inputDim,"inputDim"),this.outputDim=t.outputDim,ye(this.outputDim,"outputDim"),this.embeddingsInitializer=jt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Kt(t.embeddingsRegularizer),this.activityRegularizer=Kt(t.activityRegularizer),this.embeddingsConstraint=fe(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,e){return P(()=>this.maskZero?(t=gt(t),zr(t,St(t))):null)}computeOutputShape(t){if(t=Tt(t),this.inputLength==null)return[...t,this.outputDim];const e=Ut(this.inputLength);if(e.length!==t.length-1)throw new R(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let s=0;for(let o=0;o<e.length;++o){const r=e[o],i=t[o+1];if(r!=null&&i!=null&&r!==i)throw new R(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);r==null&&(e[s]=i),s++}}return[t[0],...e,this.outputDim]}call(t,e){return P(()=>{this.invokeCallHook(t,e);let s=gt(t);s.dtype!=="int32"&&(s=Jn(s,"int32"));const o=eb(this.embeddings.read(),_(s,[s.size]));return _(o,Tt(this.computeOutputShape(s.shape)))})}getConfig(){const t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Xt(this.embeddingsInitializer),embeddingsRegularizer:Ot(this.embeddingsRegularizer),activityRegularizer:Ot(this.activityRegularizer),embeddingsConstraint:pe(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},e=super.getConfig();return Object.assign(t,e),t}}w0.className="Embedding";j(w0);class Ao extends It{constructor(t){super(t||{}),this.supportsMasking=!0}mergeFunction(t){throw new xt}computeElementwiseOpOutputShape(t,e){if(t==null||e==null)return null;if(t.length<e.length)return this.computeElementwiseOpOutputShape(e,t);if(e.length===0)return t;const s=t.slice(0,t.length-e.length);for(let o=0;o<e.length;++o){const r=t[t.length-e.length+o],i=e[o];if(r==null||i==null||r<0||i<0)s.push(null);else if(r===1)s.push(i);else if(i===1)s.push(r);else{if(r!==i)throw new R("Operands could not be broadcast together with shapes "+JSON.stringify(t)+" "+JSON.stringify(e));s.push(r)}}return s}build(t){if(Array.isArray(t)&&!Array.isArray(t[0])&&(t=[Tt(t)]),t=t,t.length<2)throw new R(`A merge layer should be called on an Array of at least 2 inputs. Got ${t.length} input(s).`);let e=[];for(const r of t)r!=null&&r[0]!==null&&e.push(r[0]);if(e=Ns(e),e.length>1)throw new R(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(t)}.`);let s=t[0]==null?null:t[0].slice(1);for(let r=1;r<t.length;++r){const i=t[r]==null?null:t[r].slice(1);s=this.computeElementwiseOpOutputShape(s,i)}const o=t.map(r=>r.length);t.indexOf(null)===-1&&Ns(o).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(t,e){return P(()=>{if(t=t,this.reshapeRequired){const s=[],o=t.map(r=>r.rank);if(o.indexOf(null)===-1){const r=Ds(o);for(let i of t){const a=i.rank;for(let l=0;l<r-a;++l)i=oa(i,1);s.push(i)}return this.mergeFunction(s)}else{let r=!1;for(const l of t){const c=l.rank;if(c==null){const u=l.shape,h=u[0],d=u.slice(1).concat([h]);let p=_(l,[h].concat(Ts(u.slice(1))));p=kt(p,[1,0]),p=_(p,d),s.push(p),r=!0}else if(c>1){const u=Mn(1,c).concat([0]);s.push(kt(l,u)),r=!0}else s.push(l)}let i=this.mergeFunction(s);const a=i.rank;if(r){if(a==null){const l=i.shape,c=l.length,u=l[c-1],h=[u].concat(l.slice(0,l.length-1));i=_(kt(_(i,[-1,u]),[1,0]),h)}else if(a>1){const l=[a-1].concat(Mn(0,a-1));i=kt(i,l)}}return i}}else return this.mergeFunction(t)})}computeOutputShape(t){t=t;let e;t[0]==null?e=null:e=t[0].slice(1);for(let o=1;o<t.length;++o){const r=t[o]==null?null:t[o].slice(1);e=this.computeElementwiseOpOutputShape(e,r)}let s=[];for(const o of t)o!=null&&o[0]!==null&&s.push(o[0]);return s=Ns(s),s.length===1?e=s.concat(e):e=[null].concat(e),e}computeMask(t,e){return P(()=>{if(e==null)return null;if(!Array.isArray(e))throw new R("`mask` should be an Array");if(!Array.isArray(t))throw new R("`inputs` should be an Array");if(e.length!==t.length)throw new R(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${t.length} vs ${e.length})`);if(e.every(o=>o==null))return null;e=e.map(o=>o==null?o:Ke(o,0));let s=e[0];for(let o=1;o<e.length-1;++o)s=us(s,e[o]);return s})}}class $0 extends Ao{constructor(t){super(t)}mergeFunction(t){return P(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=Y(e,t[s]);return e})}}$0.className="Add";j($0);class C0 extends Ao{constructor(t){super(t)}mergeFunction(t){return P(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=E(e,t[s]);return e})}}C0.className="Multiply";j(C0);class I0 extends Ao{constructor(t){super(t)}mergeFunction(t){return P(()=>{let e=t[0].clone();for(let s=1;s<t.length;++s)e=Y(e,t[s]);return E(1/t.length,e)})}}I0.className="Average";j(I0);class v0 extends Ao{constructor(t){super(t)}mergeFunction(t){return P(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=Bs(e,t[s]);return e})}}v0.className="Maximum";j(v0);class k0 extends Ao{constructor(t){super(t)}mergeFunction(t){return P(()=>{let e=t[0];for(let s=1;s<t.length;++s)e=bc(e,t[s]);return e})}}k0.className="Minimum";j(k0);class S0 extends Ao{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new R("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let e=!0;for(const o of t)if(o!=null){e=!1;break}if(e)return;const s=[];for(let o=0;o<t.length;++o){const r=t[o].slice();r.splice(this.axis,1);let i=!1;for(const a of s)if(Rt(a,r)){i=!0;break}i||s.push(r)}if(s.length>1)throw new R("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return P(()=>ip(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new R("A `Concatenate` layer should be called on a list of inputs.");const e=t,s=e[0].slice(),o=this.axis<0?s.length+this.axis:this.axis;for(const r of e.slice(1)){if(s[o]==null||r[o]==null){s[o]=null;break}s[o]+=r[o]}return s}computeMask(t,e){if(e==null)return null;if(!Array.isArray(e))throw new R("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new R("`inputs` should be an array for Concatenate");if(e.length!==t.length)throw new R(`Mismatch in the length of mask (${e.length}) and the legnth of inputs (${t.length})`);return P(()=>{let s=!0;if(e.forEach(i=>{if(i!=null){s=!1;return}}),s)return null;const o=[];for(let i=0;i<t.length;++i)e[i]==null?o.push(st(In(t[i]),"bool")):e[i].rank<t[i].rank?o.push(Ke(e[i],-1)):o.push(e[i]);const r=Ae(o,this.axis);return Lg(r,-1,!1)})}getConfig(){const t={axis:this.axis},e=super.getConfig();return Object.assign(t,e),t}}S0.className="Concatenate";j(S0);function Tr(n,t){for(;n<0;)n+=t;return n}function cR(n,t,e){if(n.shape.length>3||t.shape.length>3)throw new xt("batchDot is not implemented for tensors of 4D or higher rank yet");if(I(n.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${n.shape.length}`),I(n.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof e=="number"&&(e=[e,e]),n.dtype==="complex64"||t.dtype==="complex64")throw new xt("batchDot is not implemented for complex64-type Tensors yet.");const s=n.shape.length,o=t.shape.length;e==null&&(e=[s-1,o-2]);const r=e;return P(()=>{let i;if(s>o){i=s-o;const l=[];for(let c=0;c<i;++c)l.push(1);t=_(t,t.shape.concat(l))}else if(o>s){i=o-s;const l=[];for(let c=0;c<i;++c)l.push(1);n=_(n,n.shape.concat(l))}else i=0;let a;if(n.shape.length===2&&t.shape.length===2)r[0]===r[1]?a=lt(E(n,t),r[0]):a=lt(E(kt(n,[1,0]),t),r[1]);else{const l=r[0]!==n.shape.length-1,c=r[1]===t.shape.length-1;a=Et(n,t,l,c)}if(i>0){let l;s>o?l=s+o-3:l=s-1;const c=[];for(let u=l;u<l+i;++u)c.push(u);a=Ji(a,c)}return a.shape.length===1&&(a=Ke(a,1)),a})}class N0 extends Ao{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){I(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0],s=t[1];if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);if(e[o[0]]!==s[o[1]])throw new R(`Dimension incompatibility: ${e[o[0]]} !== ${s[o[1]]}`)}mergeFunction(t){if(t.length!==2)throw new R(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let e=t[0],s=t[1],o;return Array.isArray(this.axes)?o=this.axes.map((r,i)=>Tr(r,t[i].shape.length)):o=[Tr(this.axes,e.shape.length),Tr(this.axes,s.shape.length)],this.normalize&&(e=Ya(e,o[0]),s=Ya(s,o[1])),cR(e,s,o)}interpretAxes(t,e){let s;return Array.isArray(this.axes)?s=this.axes:s=[Tr(this.axes,t.length),Tr(this.axes,e.length)],s}computeOutputShape(t){I(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");const e=t[0].slice(),s=t[1].slice();if(e.length>3||s.length>3)throw new xt("Dot layer does not support tensors of 4D or higher rank yet.");const o=this.interpretAxes(e,s);e.splice(o[0],1),s.splice(o[1],1),s.splice(0,1);const r=e.concat(s);return r.length===1&&r.push(1),r}computeMask(t,e){return null}getConfig(){const t={axes:this.axes,normalize:this.normalize},e=super.getConfig();return Object.assign(t,e),t}}N0.className="Dot";j(N0);class T0 extends It{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={stddev:this.stddev};return Object.assign(e,t),e}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t);return ia(()=>Y(kc(s.shape,0,this.stddev),s),()=>s,e.training||!1)})}}T0.className="GaussianNoise";j(T0);class E0 extends It{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return P(()=>{this.invokeCallHook(t,e);const s=gt(t);return this.rate>0&&this.rate<1?ia(()=>{const r=Math.sqrt(this.rate/(1-this.rate));return E(s,kc(s.shape,1,r))},()=>s,e.training||!1):s})}}E0.className="GaussianDropout";j(E0);class R0 extends It{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||gt(t).shape}computeOutputShape(t){return t}getConfig(){const t=super.getConfig(),e={rate:this.rate};return Object.assign(e,t),e}call(t,e){return P(()=>{if(this.rate<1&&this.rate>0){const s=this._getNoiseShape(t);return ia(()=>{const r=gt(t),i=1.6732632423543772,a=1.0507009873554805,l=-i*a;let c=Eo(yc(s),this.rate);c=Jn(c,"float32");const u=((1-this.rate)*(1+this.rate*l**2))**-.5,h=-u*l*this.rate,d=Y(E(r,c),E(Y(c,-1),l));return Y(E(d,u),h)},()=>gt(t),e.training||!1)}return t})}}R0.className="AlphaDropout";j(R0);function Gr(n,t,e,s,o,r=.001){let i;if(n.rank===2)i=HC(n,t,e,s,o,r);else if(n.rank===3)i=jC(n,t,e,s,o,r);else if(n.rank===4)i=XC(n,t,e,s,o,r);else throw new xt(`batchNormalization is not implemented for array of rank ${n.rank} yet`);return i}function uR(n,t,e,s,o=.001){return P(()=>{const r=md(n,s),i=r.mean,a=r.variance;return[Gr(n,i,a,e,t,o),i,a]})}function hR(n,t,e,s,o=.001){return P(()=>{const r=md(n,s),i=r.mean,a=r.variance,l=[];for(const f of Mn(0,n.rank))s.indexOf(f)!==-1?l.push(1):l.push(n.shape[f]);const c=_(i,l),u=_(a,l),h=t==null?null:_(t,l),d=e==null?null:_(e,l);return[Gr(n,c,u,d,h,o),i,a]})}function dR(n,t,e,s,o=.001){return Rt(s.slice().sort(),Mn(0,n.rank-1))?uR(n,t,e,s,o):hR(n,t,e,s,o)}class D0 extends It{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=jt(t.betaInitializer||"zeros"),this.gammaInitializer=jt(t.gammaInitializer||"ones"),this.movingMeanInitializer=jt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=jt(t.movingVarianceInitializer||"ones"),this.betaConstraint=fe(t.betaConstraint),this.gammaConstraint=fe(t.gammaConstraint),this.betaRegularizer=Kt(t.betaRegularizer),this.gammaRegularizer=Kt(t.gammaRegularizer)}build(t){t=Tt(t);const e=this.axis>=0?this.axis:this.axis+t.length,s=t[e];if(s==null)throw new R(`Axis ${e} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new de({ndim:t.length,axes:{[e]:s}})];const o=[s];this.scale&&(this.gamma=this.addWeight("gamma",o,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",o,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",o,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",o,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,e){return P(()=>{const s=e.training==null?!1:e.training,o=gt(t),r=o.shape,i=r.length,a=Mn(0,i),l=this.axis>=0?this.axis:this.axis+i;a.splice(l,1);const c=Io(1,i);c[l]=r[l];const u=a.slice();u.sort();const h=!Rt(u,Mn(0,i).slice(0,i-1)),d=()=>{if(h){const b=_(this.movingMean.read(),c),w=_(this.movingVariance.read(),c),y=this.center?_(this.beta.read(),c):null,$=this.scale?_(this.gamma.read(),c):null;return Gr(o,b,w,y,$,this.epsilon)}else return Gr(o,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!s)return d();const[p,f,m]=dR(o,this.gamma.read(),this.beta.read(),a,this.epsilon),g=(b,w,y)=>{P(()=>{const $=1-y,C=b.read(),v=E(ct(C,w),$);b.write(ct(C,v))})};return(()=>{g(this.movingMean,f,this.momentum),g(this.movingVariance,m,this.momentum)})(),p})}getConfig(){const t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Xt(this.betaInitializer),gammaInitializer:Xt(this.gammaInitializer),movingMeanInitializer:Xt(this.movingMeanInitializer),movingVarianceInitializer:Xt(this.movingVarianceInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer),betaConstraint:pe(this.betaConstraint),gammaConstraint:pe(this.gammaConstraint)},e=super.getConfig();return Object.assign(t,e),t}}D0.className="BatchNormalization";j(D0);class A0 extends It{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(const e of this.axis)if(!Number.isInteger(e))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=jt(t.betaInitializer||"zeros"),this.gammaInitializer=jt(t.gammaInitializer||"ones"),this.betaRegularizer=Kt(t.betaRegularizer),this.gammaRegularizer=Kt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=Tt(t);const e=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let r=0;r<this.axis.length;++r)this.axis[r]<0&&(this.axis[r]+=e);for(const r of this.axis)if(r<0||r>=e)throw new Error(`Invalid axis: ${r}`);if(this.axis.length!==Ns(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);const s=this.axis.map(r=>t[r]),o=!0;this.scale?this.gamma=this.addWeight("gamma",s,"float32",this.gammaInitializer,this.gammaRegularizer,o):this.gamma=null,this.center?this.beta=this.addWeight("beta",s,"float32",this.betaInitializer,this.betaRegularizer,o):this.beta=null,this.built=!0}call(t,e){const s=gt(t),o=s.shape,r=o.length;return P(()=>{let{mean:a,variance:l}=md(s,this.axis,!0);const c=Io(1,r);for(const m of this.axis)c[m]=o[m];const u=m=>m!=null&&m.shape.length!==r?_(m,c):m;let h=this.scale?u(this.gamma.read()):null,d=this.center?u(this.beta.read()):null;const p=[],f=[];for(let m=0;m<r;++m)this.axis.indexOf(m)!==-1?(p.push(o[m]),f.push(1)):(p.push(1),f.push(o[m]));return a=Fn(a,p),l=Fn(l,p),h!=null&&(h=Fn(h,f)),d!=null&&(d=Fn(d,f)),Gr(s,a,l,d,h,this.epsilon)})}getConfig(){const t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Xt(this.betaInitializer),gammaInitializer:Xt(this.gammaInitializer),betaRegularizer:Ot(this.betaRegularizer),gammaRegularizer:Ot(this.gammaRegularizer)},e=super.getConfig();return Object.assign(t,e),t}}A0.className="LayerNormalization";j(A0);function pR(n,t,e){return P(()=>{if(n.rank!==4)throw new R(`temporalPadding expects input tensor to be 4-D, but received a ${n.rank}-D tensor.`);if(t==null&&(t=[[1,1],[1,1]]),t.length!==2||t[0].length!==2||t[1].length!==2)throw new R("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(e==null&&(e=Pn()),e!=="channelsLast"&&e!=="channelsFirst")throw new R(`Unknown data format: ${e}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let s;return e==="channelsFirst"?s=[[0,0],[0,0],t[0],t[1]]:s=[[0,0],t[0],t[1],[0,0]],gd(n,s)})}class F0 extends It{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Pn():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new R(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let e,s;if(typeof t.padding[0]=="number")e=[t.padding[0],t.padding[0]],s=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new R(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(e=t.padding[0],t.padding[1].length!==2)throw new R(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);s=t.padding[1]}this.padding=[e,s]}this.inputSpec=[new de({ndim:4})]}computeOutputShape(t){t=Tt(t);let e,s;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?e=t[2]+this.padding[0][0]+this.padding[0][1]:e=null,t[3]!=null&&t[3]>=0?s=t[3]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],t[1],e,s]):(t[1]!=null&&t[1]>=0?e=t[1]+this.padding[0][0]+this.padding[0][1]:e=null,t[2]!=null&&t[2]>=0?s=t[2]+this.padding[1][0]+this.padding[1][1]:s=null,[t[0],e,s,t[3]])}call(t,e){return P(()=>pR(gt(t),this.padding,this.dataFormat))}getConfig(){const t={padding:this.padding,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}F0.className="ZeroPadding2D";j(F0);function Fc(n,t,e,s,o,r){return P(()=>{ie(o),Zx(r),hn(s),e==null&&(e=[1,1]),s==null&&(s="valid"),o==null&&(o=Pn()),r==null&&(r="max"),n=yp(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=fd(n,t,e,a):i=sd(n,t,e,a),o==="channelsFirst"&&(i=kt(i,[0,3,1,2])),i})}function _0(n,t,e,s,o,r){return P(()=>{ie(o),Zx(r),hn(s),e==null&&(e=[1,1,1]),s==null&&(s="valid"),o==null&&(o=Pn()),r==null&&(r="max"),n=Zb(n,o);let i;const a=s==="same"?"same":"valid";return r==="max"?i=Dv(n,t,e,a):i=LC(n,t,e,a),o==="channelsFirst"&&(i=kt(i,[0,4,1,2,3])),i})}class O0 extends It{constructor(t){if(t.poolSize==null&&(t.poolSize=2),super(t),typeof t.poolSize=="number")this.poolSize=[t.poolSize];else if(Array.isArray(t.poolSize)&&t.poolSize.length===1&&typeof t.poolSize[0]=="number")this.poolSize=t.poolSize;else throw new R(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.poolSize)}`);if(ye(this.poolSize,"poolSize"),t.strides==null)this.strides=this.poolSize;else if(typeof t.strides=="number")this.strides=[t.strides];else if(Array.isArray(t.strides)&&t.strides.length===1&&typeof t.strides[0]=="number")this.strides=t.strides;else throw new R(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(t.strides)}`);ye(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,hn(this.padding),this.inputSpec=[new de({ndim:3})]}computeOutputShape(t){t=Tt(t);const e=Ln(t[1],this.poolSize[0],this.padding,this.strides[0]);return[t[0],e,t[2]]}call(t,e){return P(()=>{this.invokeCallHook(t,e),t=oa(gt(t),2);const s=this.poolingFunction(gt(t),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Ji(s,[2])})}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides},e=super.getConfig();return Object.assign(t,e),t}}class L0 extends O0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),Fc(t,e,s,o,r,"max")}}L0.className="MaxPooling1D";j(L0);class M0 extends O0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),Fc(t,e,s,o,r,"avg")}}M0.className="AveragePooling1D";j(M0);class P0 extends It{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==2)throw new R(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides];ye(this.poolSize,"poolSize"),ye(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,ie(this.dataFormat),hn(this.padding),this.inputSpec=[new de({ndim:4})]}computeOutputShape(t){t=Tt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2];return e=Ln(e,this.poolSize[0],this.padding,this.strides[0]),s=Ln(s,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s]:[t[0],e,s,t[3]]}call(t,e){return P(()=>(this.invokeCallHook(t,e),this.poolingFunction(gt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class z0 extends P0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),Fc(t,e,s,o,r,"max")}}z0.className="MaxPooling2D";j(z0);class B0 extends P0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),Fc(t,e,s,o,r,"avg")}}B0.className="AveragePooling2D";j(B0);class V0 extends It{constructor(t){if(t.poolSize==null&&(t.poolSize=[2,2,2]),super(t),this.poolSize=Array.isArray(t.poolSize)?t.poolSize:[t.poolSize,t.poolSize,t.poolSize],t.strides==null)this.strides=this.poolSize;else if(Array.isArray(t.strides)){if(t.strides.length!==3)throw new R(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${t.strides.length}.`);this.strides=t.strides}else this.strides=[t.strides,t.strides,t.strides];ye(this.poolSize,"poolSize"),ye(this.strides,"strides"),this.padding=t.padding==null?"valid":t.padding,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,ie(this.dataFormat),hn(this.padding),this.inputSpec=[new de({ndim:5})]}computeOutputShape(t){t=Tt(t);let e=this.dataFormat==="channelsFirst"?t[2]:t[1],s=this.dataFormat==="channelsFirst"?t[3]:t[2],o=this.dataFormat==="channelsFirst"?t[4]:t[3];return e=Ln(e,this.poolSize[0],this.padding,this.strides[0]),s=Ln(s,this.poolSize[1],this.padding,this.strides[1]),o=Ln(o,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[t[0],t[1],e,s,o]:[t[0],e,s,o,t[4]]}call(t,e){return P(()=>(this.invokeCallHook(t,e),this.poolingFunction(gt(t),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){const t={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class W0 extends V0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),_0(t,e,s,o,r,"max")}}W0.className="MaxPooling3D";j(W0);class U0 extends V0{constructor(t){super(t)}poolingFunction(t,e,s,o,r){return ie(r),hn(o),_0(t,e,s,o,r,"avg")}}U0.className="AveragePooling3D";j(U0);class G0 extends It{constructor(t){super(t),this.inputSpec=[new de({ndim:3})]}computeOutputShape(t){return[t[0],t[2]]}call(t,e){throw new xt}}class H0 extends G0{constructor(t){super(t||{})}call(t,e){return P(()=>{const s=gt(t);return ne(s,1)})}}H0.className="GlobalAveragePooling1D";j(H0);class q0 extends G0{constructor(t){super(t||{})}call(t,e){return P(()=>{const s=gt(t);return On(s,1)})}}q0.className="GlobalMaxPooling1D";j(q0);class j0 extends It{constructor(t){super(t),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,ie(this.dataFormat),this.inputSpec=[new de({ndim:4})]}computeOutputShape(t){return t=t,this.dataFormat==="channelsLast"?[t[0],t[3]]:[t[0],t[1]]}call(t,e){throw new xt}getConfig(){const t={dataFormat:this.dataFormat},e=super.getConfig();return Object.assign(t,e),t}}class K0 extends j0{call(t,e){return P(()=>{const s=gt(t);return this.dataFormat==="channelsLast"?ne(s,[1,2]):ne(s,[2,3])})}}K0.className="GlobalAveragePooling2D";j(K0);class X0 extends j0{call(t,e){return P(()=>{const s=gt(t);return this.dataFormat==="channelsLast"?On(s,[1,2]):On(s,[2,3])})}}X0.className="GlobalMaxPooling2D";j(X0);class Y0 extends It{constructor(t){super(t),this.layer=t.layer}build(t){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(t){this.layer!=null&&(this.layer.trainable=t)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(t){this.layer.setWeights(t)}getConfig(){const t={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},e=super.getConfig();return Object.assign(t,e),t}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(t)}static fromConfig(t,e,s={}){const o=e.layer,r=ts(o,s);delete e.layer;const i={layer:r};return Object.assign(i,e),new t(i)}}class Z0 extends Y0{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=Tt(t),t.length<3)throw new R(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];const e=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(e),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=Tt(t);const e=[t[0]].concat(t.slice(2)),s=this.layer.computeOutputShape(e),o=t[1];return[s[0],o].concat(s.slice(1))}call(t,e){return P(()=>(t=gt(t),i0((i,a)=>[gt(this.layer.call(i,e)),[]],t,[],!1,null,null,!1,!0)[1]))}}Z0.className="TimeDistributed";j(Z0);function fR(n){Do(OT,"BidirectionalMergeMode",n)}const mR="concat";class J0 extends Y0{constructor(t){super(t);const e=t.layer.getConfig(),s={};s.className=t.layer.getClassName(),s.config=e,this.forwardLayer=ts(s),e.goBackwards=e.goBackwards!==!0;const o={};if(o.className=t.layer.getClassName(),o.config=e,this.backwardLayer=ts(o),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?mR:t.mergeMode,fR(this.mergeMode),t.weights)throw new xt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){const e=t.length,s=Math.floor(e/2);this.forwardLayer.setWeights(t.slice(0,s)),this.backwardLayer.setWeights(t.slice(s))}computeOutputShape(t){let e=this.forwardLayer.computeOutputShape(t);Array.isArray(e)&&Array.isArray(e[0])||(e=[e]),e=e;let s,o,r;return this.returnState&&(r=e.slice(1)),s=e[0],s=s,this.mergeMode==="concat"?(s[s.length-1]*=2,o=[s]):this.mergeMode==null?o=[s,s.slice()]:o=[s],this.returnState?this.mergeMode==null?o.concat(r).concat(r.slice()):[s].concat(r).concat(r.slice()):We(o)}apply(t,e){let s=e==null?null:e.initialState,o=e==null?null:e.constants;e==null&&(e={});const r=r0(t,s,o,this.numConstants);if(t=r.inputs,s=r.initialState,o=r.constants,Array.isArray(t)&&(s=t.slice(1),t=t[0]),(s==null||s.length===0)&&o==null)return super.apply(t,e);const i=[],a=[];if(s!=null){const c=s.length;if(c%2>0)throw new R("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");e.initialState=s,i.push(...s);const u=s.map(h=>new de({shape:h.shape}));this.forwardLayer.stateSpec=u.slice(0,c/2),this.backwardLayer.stateSpec=u.slice(c/2),a.push(...u)}if(o!=null)throw new xt("Support for constants in Bidirectional layers is not implemented yet.");const l=i[0]instanceof jn;for(const c of i)if(c instanceof jn!==l)throw new R("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(l){const c=[t].concat(i),u=this.inputSpec.concat(a),h=this.inputSpec;this.inputSpec=u;const d=super.apply(c,e);return this.inputSpec=h,d}else return super.apply(t,e)}call(t,e){return P(()=>{const s=e.initialState;let o,r;if(s==null)o=this.forwardLayer.call(t,e),r=this.backwardLayer.call(t,e);else{const l=s.slice(0,s.length/2),c=s.slice(s.length/2);o=this.forwardLayer.call(t,Object.assign(e,{initialState:l})),r=this.backwardLayer.call(t,Object.assign(e,{initialState:c}))}let i;this.returnState&&(Array.isArray(o)&&(i=o.slice(1).concat(r.slice(1))),o=o[0],r=r[0]),this.returnSequences&&(r=wo(r,1));let a;return this.mergeMode==="concat"?a=ip([o,r]):this.mergeMode==="sum"?a=Y(o,r):this.mergeMode==="ave"?a=E(.5,Y(o,r)):this.mergeMode==="mul"?a=E(o,r):this.mergeMode==null&&(a=[o,r]),this.returnState?this.mergeMode==null?a.concat(i):[a].concat(i):a})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){co(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),co(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,e){Array.isArray(e)&&(e=e[0]);let s;if(this.returnSequences?this.mergeMode==null?s=[e,e]:s=e:this.mergeMode==null?s=[null,null]:s=null,this.returnState){const r=this.forwardLayer.states.map(i=>null);return Array.isArray(s)?s.concat(r).concat(r):[s].concat(r).concat(r)}else return s}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){const t={mergeMode:this.mergeMode},e=super.getConfig();return Object.assign(t,e),t}static fromConfig(t,e){const s=ts(e.layer);if(delete e.layer,e.numConstants!=null)throw new xt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");const o=e;return o.layer=s,new t(o)}}J0.className="Bidirectional";j(J0);class Q0 extends It{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){const t={scale:this.scale,offset:this.offset},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return P(()=>(t=gt(t),t.dtype!=="float32"&&(t=Jn(t,"float32")),Y(E(t,this.scale),this.offset)))}}Q0.className="Rescaling";j(Q0);const{resizeBilinear:gR,cropAndResize:xR}=io;class t1 extends It{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,e,s,o,r,i,a,l){return P(()=>{let c,u=!1;const h=e/i,d=s/a,p=(o+e)/i,f=(r+s)/a,m=[h,d,p,f],g=[];t.rank===3?(u=!0,c=Rs([t])):c=t;for(let $=0;$<c.shape[0];$++)g.push(m);const x=Or(g,[g.length,4]),b=Br(0,g.length,1,"int32"),y=xR(c,x,b,[o,r],"nearest");return Jn(u?gt($o(y)):y,l)})}upsize(t,e,s,o){return P(()=>{const r=gR(t,[e,s]);return Jn(r,o)})}call(t,e){return P(()=>{const s=gt(t),o=s.dtype,r=s.shape,i=r[r.length-3],a=r[r.length-2];let l=0;i!==this.height&&(l=Math.floor((i-this.height)/2));let c=0;return a!==this.width&&(c=Math.floor((a-this.width)/2),c===0&&(c=1)),l>=0&&c>=0?this.centerCrop(s,l,c,this.height,this.width,i,a,o):this.upsize(t,this.height,this.width,o)})}getConfig(){const t={height:this.height,width:this.width},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){t=Tt(t);const e=t.length-3,s=t.length-2;return t[e]=this.height,t[s]=this.width,t}}t1.className="CenterCrop";j(t1);function bR(n,t,e,s){let o=gt(n);if(o.dtype!=="int32"&&(o=Jn(o,"int32")),t==="int")return o;const r=o.shape;if(o.rank===0&&(o=Ke(o,-1)),t==="oneHot"&&o.shape[o.shape.length-1]!==1&&(o=Ke(o,-1)),o.rank>2)throw new R(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${r} which would result in output rank ${o.rank}.`);const i=["multiHot","oneHot"].includes(t),a=o;let l;if(typeof s<"u"&&t==="count"?l=pf(a,s,e,i):l=pf(a,[],e,i),t!=="tfIdf")return l;if(s)return E(l,s);throw new R("When outputMode is 'tfIdf', weights must be provided.")}class e1 extends It{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){const t={numTokens:this.numTokens,outputMode:this.outputMode},e=super.getConfig();return Object.assign(t,e),t}computeOutputShape(t){return t=Tt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,e){return P(()=>{t=gt(t),t.dtype!=="int32"&&(t=Jn(t,"int32"));let s;if(typeof e.countWeights<"u"){if(this.outputMode!=="count")throw new R(`countWeights is not used when outputMode !== count.
              Received countWeights=${e.countWeights}`);s=gt(e.countWeights)}const o=On(t),r=Ga(t),i=un(this.numTokens,o).bufferSync().get(0),a=Eo(r,0).bufferSync().get(0);if(!(i&&a))throw new R(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return bR(t,this.outputMode,this.numTokens,s)})}}e1.className="CategoryEncoding";j(e1);const yR=["bilinear","nearest"],Hf=new Set(yR);class n1 extends It{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(Hf.has(t.interpolation))this.interpolation=t.interpolation;else throw new R(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=Boolean(t.cropToAspectRatio)}computeOutputShape(t){t=Tt(t);const e=t[2];return[this.height,this.width,e]}getConfig(){const t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},e=super.getConfig();return Object.assign(t,e),t}call(t,e){return P(()=>{const s=[this.height,this.width];if(this.interpolation==="bilinear")return io.resizeBilinear(t,s,!this.cropToAspectRatio);if(this.interpolation==="nearest")return io.resizeNearestNeighbor(t,s,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...Hf]} are supported`)})}}n1.className="Resizing";j(n1);const wR=V();wR.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var qf;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(qf||(qf={}));var jf;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(jf||(jf={}));var Kf;(function(n){n[n.FAIL=0]="FAIL",n[n.SHORTEST=1]="SHORTEST",n[n.LONGEST=2]="LONGEST"})(Kf||(Kf={}));function it(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&I(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}const $R=gx;class _c extends Xu{constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Rm(this,Wn())}nextDataId(){return _c.nextDataId++}write(t,e,s){this.firstUse&&(this.firstUse=!1,V().get("IS_NODE")&&on(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const o={id:this.nextDataId()};return this.data.set(o,{values:t,dtype:s,refCount:1}),o}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Xr(s[0])){const r=s.map(i=>Ss(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return{dataId:o,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){const e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){const e=this.data.get(t);e.refCount--}}move(t,e,s,o,r){this.data.set(t,{values:e,dtype:o,refCount:r})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){const{dtype:e,complexTensorInfos:s}=this.data.get(t);if(e==="complex64"){const o=this.readSync(s.real.dataId),r=this.readSync(s.imag.dataId);return hs(o,r)}return this.data.get(t).values}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Es(o));return $t(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return $t(t.shape,t.dtype,e)}makeOutput(t,e,s){return Wn().makeTensorFromTensorInfo(this.makeTensorInfo(e,s,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;const{complexTensorInfos:s}=this.data.get(t);s!=null&&(this.disposeData(s.real.dataId,!0),this.disposeData(s.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){const e=Ve();return t(),{kernelMs:Ve()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){it([t],"where");const e=this.readSync(t.dataId);return $R(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}_c.nextDataId=0;function s1(n){const t=new Float32Array(n.length);for(let e=0;e<n.length;++e)t[e]=Math.abs(n[e]);return t}const CR=n=>{const{x:t}=n.inputs,e=n.backend;it(t,"abs");let s=new Float32Array(H(t.shape));const o=e.data.get(t.dataId).values;return s=s1(o),e.makeOutput(s,t.shape,t.dtype)},IR={kernelName:hl,backendName:"cpu",kernelFunc:CR};function ce(n){return(t,e,s,o,r)=>{const i=bt(t,e),a=i.length,l=pt(i),c=H(i),u=ve(r,c),h=t.length,d=e.length,p=pt(t),f=pt(e),m=tr(t,i),g=tr(e,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=n(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const b=cr(x,a,l),w=b.slice(-h);m.forEach(v=>w[v]=0);const y=Xn(w,h,p),$=b.slice(-d);g.forEach(v=>$[v]=0);const C=Xn($,d,f);u[x]=n(s[y],o[C])}return[u,i]}}function Xe(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=e.makeTensorInfo(s.shape,"complex64"),l=e.data.get(a.dataId);return l.complexTensorInfos={real:e.makeTensorInfo(s.shape,"float32",r),imag:e.makeTensorInfo(o.shape,"float32",i)},a}const vR={kernelName:ih,backendName:"cpu",kernelFunc:Xe};function nl(n,t,e="float32"){if(e==="complex64"){const o=nl(n,t,"float32"),r=nl(n,t,"float32");return Xe({inputs:{real:o,imag:r},backend:n})}const s=Fe(H(t),e);return n.makeTensorInfo(t,e,s)}function ss(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const kR={kernelName:xi,backendName:"cpu",kernelFunc:ss};function vo(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.real,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const SR={kernelName:Eh,backendName:"cpu",kernelFunc:vo};function o1(n,t,e,s){if(s==="int32"){const o=Int32Array.from(n);return[t,"int32",o]}if(s==="bool"){const o=To([0],e),[r,i]=ce((a,l)=>a!==l?1:0)(t,[],n,o,"bool");return[i,"bool",r]}throw new Error(`Error in Cast: failed to cast ${e} to ${s}`)}function Os(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return ss({inputs:{x:o},backend:e});const u=nl(e,o.shape,o.dtype),h=Os({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),d=Xe({inputs:{real:h,imag:u},backend:e});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),d}if(o.dtype==="complex64"){const u=vo({inputs:{input:o},backend:e}),h=Os({inputs:{x:u},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(u),h}if(!Am(o.dtype,r)){const u=ss({inputs:{x:o},backend:e});return{dataId:u.dataId,shape:u.shape,dtype:r}}const i=e.data.get(o.dataId).values,[a,l,c]=o1(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}const NR={kernelName:oi,backendName:"cpu",kernelFunc:Os};function $e(n,t,e,s){return e==null?({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;it([i,a],n);const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=i.dtype==="string"?Co(c):c,d=i.dtype==="string"?Co(u):u,p=s||i.dtype,[f,m]=t(i.shape,a.shape,h,d,p);return l.makeTensorInfo(m,p,f)}:({inputs:o,backend:r})=>{const{a:i,b:a}=o,l=r;if(i.dtype==="complex64"||a.dtype==="complex64"){const c=Os({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),u=l.data.get(c.dataId),h=u.complexTensorInfos.real,d=u.complexTensorInfos.imag,p=l.data.get(h.dataId).values,f=l.data.get(d.dataId).values,m=Os({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),g=l.data.get(m.dataId),x=g.complexTensorInfos.real,b=g.complexTensorInfos.imag,w=l.data.get(x.dataId).values,y=l.data.get(b.dataId).values,[$,C,v]=e(i.shape,a.shape,p,f,w,y),k=l.makeTensorInfo(v,"float32",$),N=l.makeTensorInfo(v,"float32",C),T=Xe({inputs:{real:k,imag:N},backend:l});return l.disposeIntermediateTensorInfo(c),l.disposeIntermediateTensorInfo(m),l.disposeIntermediateTensorInfo(k),l.disposeIntermediateTensorInfo(N),T}else{const c=l.data.get(i.dataId).values,u=l.data.get(a.dataId).values,h=s||i.dtype,[d,p]=t(i.shape,a.shape,c,u,h);return l.makeTensorInfo(p,h,d)}}}function kp(n){return(t,e,s,o,r,i)=>{const a=bt(t,e),l=H(a),c=a.length,u=pt(a),h=ve("float32",l),d=ve("float32",l),p=tr(t,a),f=tr(e,a),m=hs(s,o),g=hs(r,i),x=t.length,b=pt(t),w=e.length,y=pt(e);if(p.length+f.length===0)for(let $=0;$<h.length;$++){const C=$%m.length,v=$%g.length,k=n(m[C*2],m[C*2+1],g[v*2],g[v*2+1]);h[$]=k.real,d[$]=k.imag}else for(let $=0;$<h.length;$++){const C=cr($,c,u),v=C.slice(-x);p.forEach(z=>v[z]=0);const k=Xn(v,x,b),N=C.slice(-w);f.forEach(z=>N[z]=0);const T=Xn(N,w,y),F=n(m[k*2],m[k*2+1],g[T*2],g[T*2+1]);h[$]=F.real,d[$]=F.imag}return[h,d,a]}}const r1=ce((n,t)=>n+t),TR=kp((n,t,e,s)=>({real:n+e,imag:t+s})),sr=$e(ur,r1,TR),ER={kernelName:ur,backendName:"cpu",kernelFunc:sr};function Sp(n,t,e,s,o){const r=H(s),i=Fe(o,e);for(let a=0;a<n.length;a++){const l=n[a];if(l<0)throw new Error("Input x must be non-negative!");l>=o||(r>0?i[l]+=t[a]:i[l]+=1)}return i}function i1(n,t,e,s=!1){const o=n.shape[0],r=n.shape[1],i=$t([o,e],t.dtype);for(let a=0;a<o;a++)for(let l=0;l<r;l++){const c=n.get(a,l);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(s?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,l),a,c):i.set(i.get(a,c)+1,a,c))}return i}function Hs(n){return(t,e,s)=>{const o=ve(e,t.length);for(let r=0;r<t.length;++r)o[r]=n(t[r],s);return o}}function At(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;if(it(i,n),i.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");const a=r,l=a.data.get(i.dataId).values,c=H(i.shape),u=e||i.dtype,h=le(u,c);for(let d=0;d<c;++d)h[d]=t(l[d],o);return a.makeTensorInfo(i.shape,u,h)}}function gr(n,t,e){return({inputs:s,attrs:o,backend:r})=>{const{x:i}=s;if(it(i,n),i.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");const a=r,l=a.data.get(i.dataId).values,c=e||i.dtype,u=t(l,c,o);return a.makeTensorInfo(i.shape,c,u)}}const a1=Hs(n=>Math.ceil(n)),RR=gr(ri,a1),DR={kernelName:ri,backendName:"cpu",kernelFunc:RR};function l1(n,t,e,s){const o=le(e,H(t));if(s&&e!=="string"){let r=0;n.forEach(i=>{const a=H(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;n.forEach(i=>{const a=e==="string"?Co(i.vals):i.vals;let l=0;for(let c=0;c<i.shape[0];++c){const u=c*t[1]+r;for(let h=0;h<i.shape[1];++h)o[u+h]=a[l++]}r+=i.shape[1]})}return o}const c1=ce((n,t)=>n===t?1:0),u1=$e(Sl,c1,null,"bool"),AR={kernelName:Sl,backendName:"cpu",kernelFunc:u1};const h1=Hs(n=>Math.exp(n)),d1=gr(di,h1,"float32"),FR={kernelName:di,backendName:"cpu",kernelFunc:d1};const p1=Hs(n=>Math.expm1(n)),_R=gr(pi,p1),OR={kernelName:pi,backendName:"cpu",kernelFunc:_R};const f1=Hs(n=>Math.floor(n)),LR=gr(fi,f1),MR={kernelName:fi,backendName:"cpu",kernelFunc:LR};function m1(n,t,e,s,o,r,i,a,l){const c=$t([s,r],e);for(let u=0;u<s;u++){const h=[];let d=0;for(let p=0;p<o;p++){const f=n[u*o+p];d+=f*i[p],h.push(f)}if(d<0||d>=l/r)throw new Error(`Invalid indices: ${h} does not index into ${a}`);for(let p=0;p<r;p++)c.values[u*r+p]=t.get(...t.indexToLoc(d*r+p))}return c}function g1(n,t,e){const s=$t(e,n.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],l=i[2],c=t.locToIndex([a,l]);i[2]=t.values[c];const u=n.locToIndex(i);0<=u&&u<n.values.length&&(s.values[o]=n.values[u])}return s}const x1=ce((n,t)=>n>t?1:0),PR=$e(Rl,x1,null,"bool"),zR={kernelName:Rl,backendName:"cpu",kernelFunc:PR};const b1=ce((n,t)=>n>=t?1:0),BR=$e(gi,b1,null,"bool"),VR={kernelName:gi,backendName:"cpu",kernelFunc:BR};const y1=ce((n,t)=>n<t?1:0),WR=$e(Al,y1,null,"bool"),UR={kernelName:Al,backendName:"cpu",kernelFunc:WR};const w1=ce((n,t)=>n<=t?1:0),GR=$e(Fl,w1,null,"bool"),HR={kernelName:Fl,backendName:"cpu",kernelFunc:GR};function $1(n,t,e){const s=(t-n)/(e-1),o=Fe(e,"float32");o[0]=n;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}const C1=Hs(n=>Math.log(n)),qR=gr($i,C1),jR={kernelName:$i,backendName:"cpu",kernelFunc:qR};function I1(n,t,e,s){const o=ve(s,H(e));for(let r=0;r<o.length;++r){const i=r*t;let a=n[i];for(let l=0;l<t;++l){const c=n[i+l];(Number.isNaN(c)||c>a)&&(a=c)}o[r]=a}return o}const v1=ce((n,t)=>Math.max(n,t)),KR=$e(Ii,v1),XR={kernelName:Ii,backendName:"cpu",kernelFunc:KR};const k1=ce((n,t)=>Math.min(n,t)),YR=$e(vi,k1),ZR={kernelName:vi,backendName:"cpu",kernelFunc:YR};const Np=ce((n,t)=>n*t),JR=kp((n,t,e,s)=>({real:n*e-t*s,imag:n*s+t*e})),Oc=$e(Si,Np,JR),QR={kernelName:Si,backendName:"cpu",kernelFunc:Oc};function S1(n,t,e){const s=Ms(-1,e);return Np([],t,s,n,e)}function tD(n){const{inputs:t,backend:e}=n,{x:s}=t;it(s,"neg");const o=e.data.get(s.dataId).values,[r,i]=S1(o,s.shape,s.dtype);return e.makeTensorInfo(i,s.dtype,r)}const eD={kernelName:Gl,backendName:"cpu",kernelFunc:tD};const N1=ce((n,t)=>n!==t?1:0),nD=$e(Hl,N1,null,"bool"),sD={kernelName:Hl,backendName:"cpu",kernelFunc:nD};function Tp(n,t,e,s,o){const r=t.length,i=H(t),a=pt(t),l=pt(o),c=ve(e,H(o));for(let u=0;u<i;++u){const h=cr(u,r,a),d=new Array(h.length);for(let f=0;f<d.length;f++)d[f]=h[s[f]];const p=Xn(d,r,l);c[p]=n[u]}return c}function Ge(n){const{inputs:t,attrs:e,backend:s}=n,{x:o}=t,{perm:r}=e;it(o,"transpose");const i=o.shape.length,a=new Array(i);for(let h=0;h<a.length;h++)a[h]=o.shape[r[h]];const l=s.data.get(o.dataId).values,c=Tp(l,o.shape,o.dtype,r,a);return{dataId:s.write(c,a,o.dtype),shape:a,dtype:o.dtype}}const oD={kernelName:qo,backendName:"cpu",kernelFunc:Ge};function T1(n,t,e,s){const[o,r]=we(n,s),i=Je(t,"int32"),a=Fe(H(o),i),l=H(r);for(let c=0;c<a.length;++c){const u=c*l;let h=1;for(let d=0;d<l;++d)h*=e[u+d];a[c]=h}return{outVals:a,outShape:o,outDtype:i}}function rD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;it(o,"prod");const a=o.shape.length,l=Ct(r,o.shape),c=Zt(l,a);let u=l,h=o;const d=[];c!=null&&(h=Ge({inputs:{x:o},backend:e,attrs:{perm:c}}),d.push(h),u=re(u.length,a));const p=e.data.get(h.dataId).values,{outVals:f,outShape:m,outDtype:g}=T1(h.shape,h.dtype,p,u);let x=m;return i&&(x=oe(m,l)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,g,f)}const iD={kernelName:Zl,backendName:"cpu",kernelFunc:rD};function aD(n,t,e){n.forEach((s,o)=>{if(s<0||s>=e){const r=cr(o,t.length,pt(t)).join(",");throw new Error(`indices[${r}] = ${s} is not in [0, ${e})`)}})}function lD(n,t){for(let e=0;e<n.length;++e){const s=n[e],o=e===n.length-1?t:n[e+1].length;if(s.length===0)throw new Error("Ragged splits may not be empty");if(s[0]<0)throw new Error("Ragged splits must be non-negative");if(s[s.length-1]>o)throw new Error("Ragged splits must not point past values");for(let r=1;r<s.length;++r)if(s[r-1]>s[r])throw new Error("Ragged splits must be sorted in ascending order")}}function cD(n,t,e,s){const o=[];let r=0;const i=t.length-1+e.length,a=new Array(i).fill(null).map(()=>[0]);lD(e,s);let l=1;for(let c=0;c<t.length-1;++c){l*=t[c];const u=t[c+1];for(let h=1;h<l+1;++h)a[c].push(h*u)}for(let c=0;c<n.length;++c){let u=n[c],h=n[c]+1;for(let d=0;d<e.length;++d){const p=e[d],f=d+t.length-1;if(f>=0){const m=a[f],g=m[m.length-1]-p[u];for(let x=u;x<h;++x)a[f].push(p[x+1]+g)}u=p[u],h=p[h]}h!==u&&(o.push([u,h]),r+=h-u)}return{outSplits:a,valueSlices:o,numValues:r}}function uD(n){const t=[];for(let e=0;e<n.length;++e){const s=n[e].length,o=le("int32",s);t.push(o),n[e].forEach((r,i)=>o[i]=r)}return t}function Xf(n,t){const e=n.slice(0,t);for(;e.length<t;)e.push(1);for(let s=t;s<n.length;s++)e[t-1]*=n[s];return e}function hD(n,t,e,s,o,r){const i=Xf(t,2)[1],a=Xf(r,2)[1];let l=0;for(const c of e)for(let u=c[0];u<c[1];++u){for(let h=0;h<s;++h)o[l*a+h]=n[u*i+h];++l}}function dD(n,t,e,s,o){const r=t.slice();r[0]=o;const i=le(e,H(r)),a=n.length,l=a===0?0:a/t[0];return hD(n,t,s,l,i,r),[i,r]}function E1(n,t,e,s,o,r,i,a){if(n.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");const l=t[0][0]-1;if(aD(r,i,l),s.length===0)throw new Error("params.rank must be nonzero");const c=s[0],{outSplits:u,valueSlices:h,numValues:d}=cD(r,i,n,c),p=uD(u),f=dD(e,s,o,h,d);return[p,f[0],f[1]]}const Yf=2147483647;function R1(n,t,e,s,o,r,i){if(t.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const a=t.length===0,l=o.length===0,c=i.length===0,u=[];a||u.push(t[0]),l||u.push(o[0]),c||u.push(i[0]);for(let g=1;g<u.length;++g)if(u[g]!==u[g-1])throw new Error("starts, limits, and deltas must have the same shape");const h=u.length===0?1:u[0],d=le("int32",h+1);d[0]=0;for(let g=0;g<h;++g){const x=a?n[0]:n[g],b=l?s[0]:s[g],w=c?r[0]:r[g];if(w===0)throw new Error("Requires delta != 0");let y;if(w>0&&b<x||w<0&&b>x)y=0;else if(y=Math.ceil(Math.abs((b-x)/w)),y>Yf)throw new Error(`Requires ((limit - start) / delta) <= ${Yf}`);d[g+1]=d[g]+y}const p=d[h],f=le(e,p);let m=0;for(let g=0;g<h;++g){const x=d[g+1]-d[g];let b=a?n[0]:n[g];const w=c?r[0]:r[g];for(let y=0;y<x;++y)f[m++]=b,b+=w}return[d,f]}var pn=An;class sl{constructor(t,e,s,o,r,i,a,l,c,u){this.shape=t,this.shapeShape=e,this.values=s,this.valuesShape=o,this.valuesDType=r,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=Cx(u),this.raggedRank=Ix(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===pn.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===pn.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case pn.VALUE_ROWIDS:return sl.getMaxWidthValueRowID(e);case pn.ROW_SPLITS:return sl.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${pn[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(e===0||e===1)return 0;let s=0;for(let o=0;o<e-1;++o){const r=t[o+1]-t[o];r>s&&(s=r)}return s}static getMaxWidthValueRowID(t){const e=t.length;if(e===0)return 0;let s=0,o=t[0],r=0;for(let i=1;i<e;++i){const a=t[i];a!==o&&(o=a,r=Math.max(i-s,r),s=i)}return Math.max(e-s,r)}tensorShapeFromTensor(t,e,s=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return Jf(t,s)}calculateOutputSize(t){const e=this.valuesShape,s=this.defaultValueShape;vx(s,e);const o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=$x(this.raggedRank,o,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,s){const o=Math.min(t,s),r=[];let i=0;for(let a=0;a<o;++a,i+=e)r.push(i);for(let a=o;a<t;++a)r.push(-1);return I(r.length===t,()=>"Final length of result must be equal to firstDimension."),r}calculateOutputIndexRowSplit(t,e,s,o){const r=t.length,i=[];for(let a=0;a<r-1;++a){const l=t[a+1]-t[a];let c=Math.min(o,l),u=e[a];u===-1&&(c=0);for(let h=0;h<c;++h)i.push(u),u+=s;for(let h=0;h<l-c;++h)i.push(-1)}if(r>0&&i.length!==t[r-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,s,o){const r=t.length,i=[];if(r===0)return[];let a=0,l=t[0];if(l>=e.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${e.length}`);let c=e[l];i.push(c);for(let u=1;u<r;++u){const h=t[u];if(h===l)c>=0&&(++a,a<o?c+=s:c=-1);else{if(a=0,l=h,h>=e.length)throw new Error(`Got nextValueRowId=${h} which is not less than ${e.length}`);c=e[h]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,s,o){const r=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case pn.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,s,o);case pn.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,s,o);default:throw new Error(`Unsupported partition type: ${pn[i]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case pn.FIRST_DIM_SIZE:return t[0];case pn.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case pn.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${pn[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const e=this.getFirstDimensionSize(),s=this.calculateOutputSize(e),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let l=o.length-2;l>=0;--l)o[l]=o[l+1]*s[l+1];const r=Jf(s,!1),i=le(this.valuesDType,H(r));if(o[0]*s[0]>0){let l=this.calculateFirstParentOutputIndex(e,o[0],s[0]);for(let c=1;c<=this.raggedRank;++c)l=this.calculateOutputIndex(c-1,l,o[c],s[c]);this.setOutput(this.raggedRank,l,i,r)}return[r,i]}setOutput(t,e,s,o){if(s.length===0)return;const r=this.values,i=s;let a=o.slice();a=a.slice(t+1);const l=H(a),c=e.length;let u=this.defaultValue;if(u.length!==l&&u.length!==1){const f=this.defaultValueShape;P(()=>{const m=_(u,f);u=Lr(m,a).dataSync()})}let h=0,d=0,p=0;for(let f=0;f<=c;++f){let m=f<c?e[f]:-1;if(m===p){++p;continue}if(d<p){const g=r.subarray(h*l),x=i.subarray(d*l),b=(p-d)*l;Zf(x,g,b)}if(f>=c){const g=s.length;m=Math.floor(g/l)}if(m>p)if(this.defaultValue.length===1)i.subarray(p*l,m*l).fill(this.defaultValue[0]),p=m;else for(;m>p;){const g=i.slice(p*l);Zf(g,u,l),++p}m<0?(h=f+1,d=p):(h=f,d=p,p=d+1)}}}function Zf(n,t,e){for(let s=0;s<e;s++)n[s]=t[s]}function Jf(n,t){const e=[];for(let s of n){if(s<0){if(!t)throw new Error(`Dimension ${s} must be >= 0`);if(s<-1)throw new Error(`Dimension ${s} must be >= -1`);s=-1}e.push(s)}return e}function D1(n,t,e,s,o,r,i,a,l,c){return new sl(n,t,e,s,o,r,i,a,l,c).compute()}function A1(n,t,e,s){const o=n===t,r=n<t&&e<0,i=t<n&&e>1;if(o||r||i)return Fe(0,s);const a=Math.abs(Math.ceil((t-n)/e)),l=Fe(a,s);t<n&&e===1&&(e=-1),l[0]=n;for(let c=1;c<l.length;c++)l[c]=l[c-1]+e;return l}const F1=Hs(n=>1/Math.sqrt(n)),pD=gr(Ai,F1),fD={kernelName:Ai,backendName:"cpu",kernelFunc:pD};function Go(n,t,e,s,o,r,i,a,l,c){const u=[s/o,o],h=n.values,d=t.values;if(s===0)return $t(e,t.dtype);const p=$t(u,t.dtype);typeof l=="string"||typeof l=="number"?p.values.fill(l):typeof l=="boolean"&&p.values.fill(+l);for(let f=0;f<r;f++){const m=[];let g=0;for(let x=0;x<i;x++){const b=h[f*i+x];m.push(b),g+=b*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${e}`);for(let x=0;x<o;x++)c?p.values[g*o+x]+=d[f*o+x]:p.values[g*o+x]=t.rank===0?d[0]:d[f*o+x]}return p}const mD=Hs(n=>1/(1+Math.exp(-n))),_1=At(Mi,n=>1/(1+Math.exp(-n))),gD={kernelName:Mi,backendName:"cpu",kernelFunc:_1};function O1(n,t,e,s,o){const r=Qh(s,t,e),i=H(e),a=pt(s);if(r){const h=td(t,a);return o==="string"?n.slice(h,h+i):n.subarray(h,h+i)}const l=o==="string"?Co(n):n,c=$t(s,o,l),u=$t(e,o);for(let h=0;h<u.size;++h){const d=u.indexToLoc(h),p=d.map((f,m)=>f+t[m]);u.set(c.get(...p),...d)}return o==="string"?Gx(u.values):u.values}function ko(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s;it(o,"slice");const[a,l]=pc(o,r,i);Zh(o,a,l);const c=e.data.get(o.dataId).values,u=O1(c,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,u)}const xD={kernelName:sc,backendName:"cpu",kernelFunc:ko};function L1(n,t,e,s,o,r,i){const a=t[0],l=r[0],c=new Array(l),u=new Array(a),h=t[1];if(l===0){if(a!==0)throw new Error(Dx(a));const g=le(e,0),x=le(o,0);return[g,[0,h],x,c,u]}let d=!0,p=0;const f=new Array(l).fill(0);for(let g=0;g<a;++g){const x=n[g*h];if(x<0)throw new Error(Ax(g,x));if(x>=l)throw new Error(Fx(g,x,l));++f[x],d=d&&x>=p,p=x}let m=!0;for(let g=0;g<l;++g){const x=f[g]===0;c[g]=x,m=m&&!x,f[g]=Math.max(f[g],1),g>0&&(f[g]+=f[g-1])}if(m&&d){const g=n,x=s;for(let b=0;b<a;++b)u[b]=b;return[g,[a,h],x,c,u]}else{const g=f[l-1],x=le(e,g*h),b=le(o,g),w=new Array(l).fill(0);for(let y=0;y<a;++y){const $=n[y*h],C=w[$],v=($===0?0:f[$-1])+C;w[$]++;for(let k=0;k<h;++k)x[v*h+k]=n[y*h+k];b[v]=s[y],u[y]=v}for(let y=0;y<l;++y)if(w[y]===0){const C=y===0?0:f[y-1];x[C*h+0]=y;for(let v=1;v<h;++v)x[C*h+v]=0;b[C]=i}return[x,[g,h],b,c,u]}}function M1(n,t,e,s,o){const r=H(s),i=t[0],a=o.length,l=[];let c=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(_x(u,g));u=g,l.push(1)}else{if(x<0)throw new Error(Ox(g,x));c*=x,l.push(x)}}if(u!==-1){if(c<=0)throw new Error(Lx());const g=Math.trunc(r/c);if(c*g!==r)throw new Error(Mx(s,l));l[u]=g}if(H(l)!==r)throw new Error(Px(s,l));const d=s.length,p=[];if(d>0){p[d-1]=1;for(let g=d-2;g>=0;--g)p[g]=p[g+1]*s[g+1]}const f=[];if(a>0){f[a-1]=1;for(let g=a-2;g>=0;--g)f[g]=f[g+1]*l[g+1]}const m=le(e,i*a);for(let g=0;g<i;++g){let x=0;for(let b=0;b<d;++b)x+=n[g*d+b]*p[b];for(let b=0;b<a;++b)m[g*a+b]=Math.trunc(x/f[b]),x%=f[b]}return[m,[i,a],l]}function Ep(n,t,e,s,o,r=!1,i=0){const a=s.length,l=[t[0],n.length/t[0]],c=l[1],h=a>0?o[a-1]+1:0;if(h<0)throw new Error(Fu());const d=t.slice();d[0]=h;const p=d.reduce((w,y)=>w*y,1),f=le(e,p);if(a===0)return h>0&&f.fill(i),[f,d];if(h<=0)throw new Error(Fu());let m=0,g=1,x=0,b=o[m];for(;;){let w=0;if(g<a){if(w=o[g],b===w){++g;continue}if(b>=w)throw new Error(zx())}if(b<0||b>=h)throw new Error(Bx(b,h));b>x&&f.fill(i,x*c,b*c);for(let y=m;y<g;++y){const $=s[y];if($<0||$>=l[0])throw new Error(Vx(y,s[y],l[0]));for(let C=0;C<c;C++)f[b*c+C]+=n[$*c+C]}if(r)for(let y=0;y<c;y++)f[b*c+y]/=g-m;if(m=g,++g,x=b+1,b=w,g>a)break}return x<h&&f.fill(i,x*c,h*c),[f,d]}const bD=Hs(n=>Math.sqrt(n)),yD=At(zi,n=>Math.sqrt(n)),wD={kernelName:zi,backendName:"cpu",kernelFunc:yD};const P1=ce((n,t)=>{const e=n-t;return e*e}),$D=$e(Bi,P1),CD={kernelName:Bi,backendName:"cpu",kernelFunc:$D};function z1(n,t,e,s){const o=$t(n,t.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*e[l]+s[l];o.set(t.get(...a),...i)}return o}class ID{constructor(t,e,s,o,r,i){this.separator=Ss(t),this.nGramWidths=e,this.leftPad=Ss(s),this.rightPad=Ss(o),this.padWidth=r,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const s=this.getPadWidth(e);return Math.max(0,t+2*s-e+1)}createNGrams(t,e,s,o,r,i){for(let a=0;a<r;++a){const l=this.getPadWidth(i),c=Math.max(0,l-a),u=Math.max(0,l-(r-(a+1))),h=i-(c+u),d=e+(c>0?0:a-l);let p=0;p+=c*this.leftPad.length;for(let b=0;b<h;++b)p+=t[d+b].length;p+=u*this.rightPad.length;const f=c+u+h-1;p+=f*this.separator.length,s[o+a]=new Uint8Array(p);const m=s[o+a];let g=0;const x=b=>b.forEach(w=>m[g++]=w);for(let b=0;b<c;++b)x(this.leftPad),x(this.separator);for(let b=0;b<h-1;++b)x(t[d+b]),x(this.separator);if(h>0){x(t[d+h-1]);for(let b=0;b<u;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<u-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){const s=t.length,o=e.length;if(o>0){let l=e[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let c=1;c<o;++c){let u=e[c]>=l;if(u=u&&e[c]<=s,!u)throw new Error(`Invalid split value ${e[c]}, must be in [${l}, ${s}]`);l=e[c]}if(l!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${l}`)}const r=o-1,i=le("int32",o);if(s===0||o===0){const l=new Array(s);for(let c=0;c<=r;++c)i[c]=0;return[l,i]}i[0]=0;for(let l=1;l<=r;++l){const c=e[l]-e[l-1];let u=0;this.nGramWidths.forEach(h=>{u+=this.getNumNGrams(c,h)}),this.preserveShort&&c>0&&u===0&&(u=1),i[l]=i[l-1]+u}const a=new Array(i[r]);for(let l=0;l<r;++l){const c=e[l];let u=i[l];if(this.nGramWidths.forEach(h=>{const d=e[l+1]-e[l],p=this.getNumNGrams(d,h);this.createNGrams(t,c,a,u,p,h),u+=p}),this.preserveShort&&u===i[l]){const h=e[l+1]-e[l];if(h===0)continue;const d=h+2*this.padWidth,p=1;this.createNGrams(t,c,a,u,p,d)}}return[a,i]}}function B1(n,t,e,s,o,r,i,a){return new ID(e,s,o,r,i,a).compute(n,t)}function vD(n,t,e,s){if(!n.length)return;if(t.length===0){for(let r=0;r<n.length;++r)s.push(n.subarray(r,r+1));return}if(t.length===1){const r=t[0];let i=n.indexOf(r);for(;i!==-1;){const a=n.subarray(0,i);(!e||a.length!==0)&&s.push(a),n=n.subarray(i+1),i=n.indexOf(r)}(!e||n.length!==0)&&s.push(n);return}let o=0;for(let r=0;r<n.length+1;r++)if(r===n.length||t.indexOf(n[r])!==-1){const i=n.subarray(o,r);(!e||i.length!==0)&&s.push(i),o=r+1}}function V1(n,t,e){const s=n.length,o=[];let r=0,i=0;const a=new Array(s);for(let d=0;d<s;++d){const p=o.length;vD(n[d],t,e,o);const f=o.length-p;a[d]=f,r+=f,i=Math.max(i,f)}const l=le("int32",r*2),c=new Array(r),u=[s,i];let h=0;for(let d=0;d<s;++d)for(let p=0;p<a[d];++p)l[h*2]=d,l[h*2+1]=p,c[h]=o[h],++h;return[l,c,u]}function W1(n,t){const e=le("int32",n.length);for(let s=0;s<n.length;++s)e[s]=Mw(n[s]).modulo(t).getLowBitsUnsigned();return e}const U1=ce((n,t)=>n-t),kD=kp((n,t,e,s)=>({real:n-e,imag:t-s})),Rp=$e(Vi,U1,kD),SD={kernelName:Vi,backendName:"cpu",kernelFunc:Rp};function G1(n,t){const e=new Array(n.rank);for(let o=0;o<e.length;o++)e[o]=n.shape[o]*t[o];const s=$t(e,n.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(n.rank);for(let l=0;l<i.length;l++)i[l]=r[l]%n.shape[l];const a=n.locToIndex(i);s.values[o]=n.values[a]}return s}const Ar=(n,t)=>{const e=t.value-n.value;return e===0?n.index-t.index:e};function H1(n,t,e=0,s=n.length-1){for(;s>e;){if(s-e>600){const a=s-e+1,l=t-e+1,c=Math.log(a),u=.5*Math.exp(2*c/3),h=.5*Math.sqrt(c*u*(a-u)/a)*Math.sign(l-a/2),d=Math.max(e,Math.floor(t-l*u/a+h)),p=Math.min(s,Math.floor(t+(a-l)*u/a+h));H1(n,t,d,p)}const o=n[t];let r=e,i=s;for(Bo(n,e,t),Ar(n[s],o)>0&&Bo(n,e,s);r<i;){for(Bo(n,r,i),r++,i--;Ar(n[r],o)<0;)r=r+1;for(;Ar(n[i],o)>0;)i=i-1}Ar(n[e],o)===0?Bo(n,e,i):(i=i+1,Bo(n,i,s)),i<=t&&(e=i+1),t<=i&&(s=i-1)}}function q1(n,t,e,s,o){const r=t[t.length-1],[i,a]=[n.length/r,r],l=ve(e,i*s),c=ve("int32",i*s);for(let h=0;h<i;h++){const d=h*a,p=n.subarray(d,d+a);let f=new Array(p.length);p.forEach((b,w)=>f[w]={value:b,index:w}),s<f.length&&(H1(f,s),f=f.slice(0,s)),o&&f.sort(Ar);const m=h*s,g=l.subarray(m,m+s),x=c.subarray(m,m+s);for(let b=0;b<s;b++)g[b]=f[b].value,x[b]=f[b].index}const u=t.slice();return u[u.length-1]=s,[$t(u,e,l),$t(u,"int32",c)]}function j1(n,t,e,s){const o=Ct(t,e)[0],r=[1,e[0],1];for(let f=0;f<o;f++)r[0]*=e[f];r[1]=e[o];for(let f=o+1;f<e.length;f++)r[2]*=e[f];const i={},a=new Int32Array(e[o]),l=new De(r,s,n),c=[],u=r[0]===1&&r[2]===1;for(let f=0;f<e[o];f++){let m;if(u)m=n[f].toString();else{const g=[];for(let x=0;x<r[0];x++)for(let b=0;b<r[2];b++)g.push(l.get(x,f,b));m=g.join(",")}if(i[m]!==void 0)a[f]=i[m];else{const g=Object.keys(i).length;i[m]=g,a[f]=g,c.push(f)}}const h=r.slice();h[1]=Object.keys(i).length;const d=new De(h,s);c.forEach((f,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)d.set(l.get(g,f,x),g,m,x)});const p=e.slice();return p[o]=h[1],{outputValues:d.values,outputShape:p,indices:a}}const ND=Object.freeze(Object.defineProperty({__proto__:null,simpleAbsImpl:s1,addImpl:r1,bincountImpl:Sp,bincountReduceImpl:i1,castImpl:o1,ceilImpl:a1,concatImpl:l1,equalImpl:c1,expImpl:h1,expm1Impl:p1,floorImpl:f1,gatherNdImpl:m1,gatherV2Impl:g1,greaterImpl:x1,greaterEqualImpl:b1,lessImpl:y1,lessEqualImpl:w1,linSpaceImpl:$1,logImpl:C1,maxImpl:I1,maximumImpl:v1,minimumImpl:k1,multiplyImpl:Np,negImpl:S1,notEqualImpl:N1,prodImpl:T1,raggedGatherImpl:E1,raggedRangeImpl:R1,raggedTensorToTensorImpl:D1,rangeImpl:A1,rsqrtImpl:F1,scatterImpl:Go,sigmoidImpl:mD,sliceImpl:O1,sparseFillEmptyRowsImpl:L1,sparseReshapeImpl:M1,sparseSegmentReductionImpl:Ep,sqrtImpl:bD,squaredDifferenceImpl:P1,stridedSliceImpl:z1,stringNGramsImpl:B1,stringSplitImpl:V1,stringToHashBucketFastImpl:W1,subImpl:U1,tileImpl:G1,topKImpl:q1,transposeImpl:Tp,uniqueImpl:j1},Symbol.toStringTag,{value:"Module"}));kg("cpu",()=>new _c,1);const K1=At(ui,n=>n>=0?n:Math.exp(n)-1),TD={kernelName:ui,backendName:"cpu",kernelFunc:K1};function X1(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s;it([o],"leakyRelu");const i=H(o.shape),a=e.data.get(o.dataId).values,l=ve("float32",i);for(let c=0;c<a.length;c++)l[c]=a[c]<0?r*a[c]:a[c];return e.makeTensorInfo(o.shape,"float32",l)}const ED={kernelName:Dl,backendName:"cpu",kernelFunc:X1};const RD=ce((n,t)=>n<0?t*n:n);function Y1(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t;it([s,o],"prelu");const r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,[a,l]=RD(s.shape,o.shape,r,i,"float32");return e.makeTensorInfo(l,"float32",a)}const DD={kernelName:Yl,backendName:"cpu",kernelFunc:Y1};const Z1=At(Ei,n=>Math.max(0,n)),AD={kernelName:Ei,backendName:"cpu",kernelFunc:Z1};const J1=At(Ri,n=>Math.min(Math.max(0,n),6)),FD={kernelName:Ri,backendName:"cpu",kernelFunc:J1};function ol(n,t,e,s,o){if(e==="linear")return ss({inputs:{x:t},backend:n});if(e==="relu")return Z1({inputs:{x:t},backend:n});if(e==="elu")return K1({inputs:{x:t},backend:n});if(e==="relu6")return J1({inputs:{x:t},backend:n});if(e==="prelu")return Y1({inputs:{x:t,alpha:s},backend:n});if(e==="leakyrelu")return X1({inputs:{x:t},backend:n,attrs:{alpha:o}});if(e==="sigmoid")return _1({inputs:{x:t},backend:n});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function Bt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=H(o.shape),a=Dm(r,i),l=H(a);I(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${o.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),e.incRef(o.dataId);const c=e.data.get(o.dataId);if(c.complexTensorInfos!=null){const u=c.complexTensorInfos.real,h=c.complexTensorInfos.imag;u.shape=a,h.shape=a}return{dataId:o.dataId,shape:a,dtype:o.dtype}}const _D={kernelName:Jl,backendName:"cpu",kernelFunc:Bt};function Q1(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;it([o,r],"matMul");const l=o.shape.length,c=r.shape.length,u=i?o.shape[l-2]:o.shape[l-1],h=a?r.shape[c-1]:r.shape[c-2],d=i?o.shape[l-1]:o.shape[l-2],p=a?r.shape[c-2]:r.shape[c-1],f=o.shape.slice(0,-2),m=r.shape.slice(0,-2),g=H(f),x=H(m),w=bt(o.shape.slice(0,-2),r.shape.slice(0,-2)).concat([d,p]);I(u===h,()=>`Error in matMul: inner shapes (${u}) and (${h}) of Tensors with shapes ${o.shape} and ${r.shape} and transposeA=${i} and transposeB=${a} must match.`);const y=i?[g,u,d]:[g,d,u],$=a?[x,p,h]:[x,h,p],C=Bt({inputs:{x:o},backend:e,attrs:{shape:y}}),v=Bt({inputs:{x:r},backend:e,attrs:{shape:$}}),k=i?C.shape[1]:C.shape[2],N=i?C.shape[2]:C.shape[1],T=a?v.shape[1]:v.shape[2],F=Math.max(g,x),z=e.data.get(C.dataId).values,M=e.data.get(v.dataId).values,L=pt(C.shape),O=pt(v.shape),[B,U,W]=i?[L[0],1,L[1]]:[L[0],L[1],1],[q,X,K]=a?[1,O[1],O[0]]:[O[1],1,O[0]],Q=N*T,Z=$t([F,N,T],C.dtype),tt=Z.values,J=e.blockSize;for(let rt=0;rt<F;rt++)for(let at=0;at<N;at+=J)for(let ht=0;ht<T;ht+=J)for(let ft=0;ft<k;ft+=J){const yt=Math.min(at+J,N),vt=Math.min(ht+J,T),Dt=Math.min(ft+J,k);for(let Lt=at;Lt<yt;Lt++)for(let Wt=ht;Wt<vt;Wt++){let qt=0;for(let Ft=ft;Ft<Dt;Ft++){const Jt=Math.min(rt,g-1)*B,te=Math.min(rt,x-1)*K,os=z[Jt+Lt*U+Ft*W],Ce=M[Ft*q+Wt*X+te];qt+=os*Ce}tt[rt*Q+(Lt*T+Wt)]+=qt}}return e.disposeIntermediateTensorInfo(C),e.disposeIntermediateTensorInfo(v),e.makeTensorInfo(w,Z.dtype,Z.values)}const OD={kernelName:gl,backendName:"cpu",kernelFunc:Q1};function LD(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;let d,p,f;const m=[];d=Q1({inputs:{a:o,b:r},attrs:{transposeA:l,transposeB:c},backend:e}),i&&(p=sr({inputs:{a:d,b:i},backend:e}),m.push(d),d=p),u&&(f=ol(e,d,u,a,h),m.push(d),d=f);for(const x of m)e.disposeIntermediateTensorInfo(x);return d}const MD={kernelName:La,backendName:"cpu",kernelFunc:LD};const PD=At(Zr,n=>Math.acos(n)),zD={kernelName:Zr,backendName:"cpu",kernelFunc:PD};const BD=At(Jr,n=>Math.acosh(n)),VD={kernelName:Jr,backendName:"cpu",kernelFunc:BD};function WD(n){const{inputs:t,backend:e}=n,s=t;it(t,"addN");const o=s.map(a=>e.data.get(a.dataId).values),r=$t(s[0].shape,s[0].dtype),i=r.values;for(let a=0;a<s.length;a++){const l=o[a];for(let c=0;c<i.length;c++)i[c]+=l[c]}return e.makeTensorInfo(r.shape,r.dtype,r.values)}const UD={kernelName:th,backendName:"cpu",kernelFunc:WD};function GD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;it(o,"all");const a=Ct(r,o.shape);let l=a;const c=Zt(l,o.shape.length);let u=o;c!=null&&(u=Ge({inputs:{x:o},backend:e,attrs:{perm:c}}),l=re(l.length,o.shape.length)),Se("all",l,u.shape.length);const[h,d]=we(u.shape,l),p=H(d),f=Fe(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const $=m[b+y];w=w&&$}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=oe(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const HD={kernelName:eh,backendName:"cpu",kernelFunc:GD};function qD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;it(o,"any");const a=Ct(r,o.shape);let l=a;const c=Zt(l,o.shape.length);let u=o;c!=null&&(u=Ge({inputs:{x:o},backend:e,attrs:{perm:c}}),l=re(l.length,o.shape.length)),Se("any",l,u.shape.length);const[h,d]=we(u.shape,l),p=H(d),f=Fe(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const $=m[b+y];w=w||$}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=oe(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const jD={kernelName:nh,backendName:"cpu",kernelFunc:qD};function KD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;it(o,"argMax");let i=Ct(r,o.shape);const a=Zt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ge({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=re(i.length,l.shape.length)),i=[i[0]],Se("argMax",i,l.shape.length);const[u,h]=we(l.shape,i),d=H(u),p=Fe(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const $=m[x+y];$>b&&(b=$,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const XD={kernelName:dl,backendName:"cpu",kernelFunc:KD};function YD(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;it(o,"argMin");let i=Ct(r,o.shape);const a=Zt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Ge({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=re(i.length,l.shape.length)),i=[i[0]],Se("argMin",i,l.shape.length);const[u,h]=we(l.shape,i),d=H(u),p=Fe(d,"int32"),f=H(h),m=e.data.get(l.dataId).values;for(let g=0;g<p.length;++g){const x=g*f;let b=m[x],w=0;for(let y=0;y<f;++y){const $=m[x+y];$<b&&(b=$,w=y)}p[g]=w}return c.forEach(g=>e.disposeIntermediateTensorInfo(g)),e.makeTensorInfo(u,"int32",p)}const ZD={kernelName:pl,backendName:"cpu",kernelFunc:YD};const JD=At(Qr,n=>Math.asin(n)),QD={kernelName:Qr,backendName:"cpu",kernelFunc:JD};const tA=At(ti,n=>Math.asinh(n)),eA={kernelName:ti,backendName:"cpu",kernelFunc:tA};const nA=At(ei,n=>Math.atan(n)),sA={kernelName:ei,backendName:"cpu",kernelFunc:nA};const oA=ce((n,t)=>Math.atan2(n,t)),rA=$e(si,oA),iA={kernelName:si,backendName:"cpu",kernelFunc:rA};const aA=At(ni,n=>Math.atanh(n)),lA={kernelName:ni,backendName:"cpu",kernelFunc:aA};function Dp(n,t,e,s,o,r){const i=o.strideHeight,a=o.strideWidth,l=o.dilationHeight,c=o.dilationWidth,u=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=o.padInfo.top,p=o.padInfo.left,f=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,m=$t(o.outShape,e),g=m.values,x=o.outShape[1]*o.outShape[2]*o.outShape[3],b=o.outShape[2]*o.outShape[3],w=o.outShape[3];for(let y=0;y<o.batchSize;++y){const $=y*x,C=y*s[0];for(let v=0;v<o.inChannels;++v)for(let k=0;k<o.outHeight;++k){const N=k*i-d,T=Math.max(0,N),F=Math.min(o.inHeight,u+N),z=$+k*b;for(let M=0;M<o.outWidth;++M){const L=M*a-p,O=Math.max(0,L),B=Math.min(o.inWidth,h+L);let U=f,W=0,q=0;for(let K=T;K<F;K+=l){const Q=C+K*s[1];for(let Z=O;Z<B;Z+=c){const tt=Q+Z*s[2],J=n[tt+v];r==="max"&&J>U?U=J:r==="avg"&&(W+=J,q++)}if(isNaN(U))break}const X=z+M*w+v;g[X]=r==="avg"?W/q:U}}}return m}function ty(n,t,e,s,o=!1,r=!1){const i=$t(s.outShape,"int32"),a=s.strideHeight,l=s.strideWidth,c=s.dilationHeight,u=s.dilationWidth,h=s.effectiveFilterHeight,d=s.effectiveFilterWidth,p=s.padInfo.top,f=s.padInfo.left,m=$t(t,e,n);for(let g=0;g<s.batchSize;++g)for(let x=0;x<s.inChannels;++x)for(let b=0;b<s.outHeight;++b){const w=b*a-p;let y=w;for(;y<0;)y+=c;const $=Math.min(s.inHeight,h+w);for(let C=0;C<s.outWidth;++C){const v=C*l-f;let k=v;for(;k<0;)k+=u;const N=Math.min(s.inWidth,d+v);let T=Number.NEGATIVE_INFINITY,F=-1;for(let z=y;z<$;z+=c){const M=z-w;for(let L=k;L<N;L+=u){const O=L-v,B=m.get(g,z,L,x);B>T&&(T=B,o?F=r?((g*s.inHeight+z)*s.inWidth+L)*s.inChannels+x:(z*s.inWidth+L)*s.inChannels+x:F=M*d+O)}}i.set(F,g,b,C,x)}}return i}function ey(n,t,e,s,o,r){const i=o.strideDepth,a=o.strideHeight,l=o.strideWidth,c=o.dilationDepth,u=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,p=o.effectiveFilterHeight,f=o.effectiveFilterWidth,m=o.padInfo.front,g=o.padInfo.top,x=o.padInfo.left,b=r==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=$t(o.outShape,e),y=w.values,$=o.outShape[1]*o.outShape[2]*o.outShape[3]*o.outShape[4],C=o.outShape[2]*o.outShape[3]*o.outShape[4],v=o.outShape[3]*o.outShape[4],k=o.outShape[4];for(let N=0;N<o.batchSize;++N){const T=N*$,F=N*s[0];for(let z=0;z<o.inChannels;++z)for(let M=0;M<o.outDepth;++M){const L=M*i-m;let O=L;for(;O<0;)O+=c;const B=Math.min(o.inDepth,d+L),U=T+M*C;for(let W=0;W<o.outHeight;++W){const q=W*a-g;let X=q;for(;X<0;)X+=u;const K=Math.min(o.inHeight,p+q),Q=U+W*v;for(let Z=0;Z<o.outWidth;++Z){const tt=Z*l-x;let J=tt;for(;J<0;)J+=h;const rt=Math.min(o.inWidth,f+tt),at=Q+Z*k;let ht=b,ft=0,yt=0;for(let Dt=O;Dt<B;Dt+=c){const Lt=F+Dt*s[1];for(let Wt=X;Wt<K;Wt+=u){const qt=Lt+Wt*s[2];for(let Ft=J;Ft<rt;Ft+=h){const Jt=qt+Ft*s[3],te=n[Jt+z];if(r==="max"&&te>ht?ht=te:r==="avg"&&(ft+=te,yt++),isNaN(ht))break}if(isNaN(ht))break}if(isNaN(ht))break}const vt=at+z;y[vt]=r==="avg"?ft/yt:ht}}}}return w}function cA(n,t){const e=$t(t.outShape,"int32"),s=t.strideDepth,o=t.strideHeight,r=t.strideWidth,i=t.dilationDepth,a=t.dilationHeight,l=t.dilationWidth,c=t.effectiveFilterDepth,u=t.effectiveFilterHeight,h=t.effectiveFilterWidth,d=t.padInfo.front,p=t.padInfo.top,f=t.padInfo.left;for(let m=0;m<t.batchSize;++m)for(let g=0;g<t.inChannels;++g)for(let x=0;x<t.outDepth;++x){const b=x*s-d;let w=b;for(;w<0;)w+=i;const y=Math.min(t.inDepth,c+b);for(let $=0;$<t.outHeight;++$){const C=$*o-p;let v=C;for(;v<0;)v+=a;const k=Math.min(t.inHeight,u+C);for(let N=0;N<t.outWidth;++N){const T=N*r-f;let F=T;for(;F<0;)F+=l;const z=Math.min(t.inWidth,h+T);let M=Number.NEGATIVE_INFINITY,L=-1;for(let O=w;O<y;O+=i){const B=O-b;for(let U=v;U<k;U+=a){const W=U-C;for(let q=F;q<z;q+=l){const X=q-T,K=n.get(m,O,U,q,g);K>=M&&(M=K,L=B*u*h+W*u+X)}}}e.set(L,m,x,$,N,g)}}}return e}function uA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;it(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(_e(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=kn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Rt(u.inShape,u.outShape))h=ss({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=pt(o.shape),f=Dp(d,o.shape,o.dtype,p,u,"avg");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const hA={kernelName:fl,backendName:"cpu",kernelFunc:uA};function dA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;it(o,"avgPool3d");const u=ps(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=ey(h,o.shape,o.dtype,pt(o.shape),u,"avg");return e.makeTensorInfo(d.shape,"float32",d.values)}const pA={kernelName:ml,backendName:"cpu",kernelFunc:dA};function fA(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;it([o,r],"avgPool3DGrad");const u=ps(r.shape,i,a,1,l,c),h=u.strideDepth,d=u.strideHeight,p=u.strideWidth,f=u.filterDepth,m=u.filterHeight,g=u.filterWidth,x=u.dilationDepth,b=u.dilationHeight,w=u.dilationWidth,y=u.effectiveFilterDepth,$=u.effectiveFilterHeight,C=u.effectiveFilterWidth,v=y-1-u.padInfo.front,k=C-1-u.padInfo.left,N=$-1-u.padInfo.top,T=$t(r.shape,"float32"),F=1/(f*m*g),z=e.bufferSync(o);for(let M=0;M<u.batchSize;++M)for(let L=0;L<u.inChannels;++L)for(let O=0;O<u.inDepth;++O)for(let B=0;B<u.inHeight;++B)for(let U=0;U<u.inWidth;++U){const W=O-v,q=B-N,X=U-k;let K=0;for(let Q=0;Q<y;Q+=x){const Z=(W+Q)/h;if(!(Z<0||Z>=u.outDepth||Math.floor(Z)!==Z))for(let tt=0;tt<$;tt+=b){const J=(q+tt)/d;if(!(J<0||J>=u.outHeight||Math.floor(J)!==J))for(let rt=0;rt<C;rt+=w){const at=(X+rt)/p;if(at<0||at>=u.outWidth||Math.floor(at)!==at)continue;const ht=z.get(M,Z,J,at,L);K+=ht}}}T.set(K*F,M,O,B,U,L)}return e.makeTensorInfo(T.shape,T.dtype,T.values)}const mA={kernelName:oh,backendName:"cpu",kernelFunc:fA};function gA(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;it([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=kn(i.shape,a,l,1,c),h=u.strideHeight,d=u.strideWidth,p=u.filterHeight,f=u.filterWidth,m=u.dilationHeight,g=u.dilationWidth,x=u.effectiveFilterHeight,b=u.effectiveFilterWidth,w=b-1-u.padInfo.left,y=x-1-u.padInfo.top,$=$t(i.shape,"float32"),C=1/(p*f),v=e.data.get(o.dataId).values,k=$t(o.shape,"float32",v);for(let N=0;N<u.batchSize;++N)for(let T=0;T<u.inChannels;++T)for(let F=0;F<u.inHeight;++F)for(let z=0;z<u.inWidth;++z){const M=F-y,L=z-w;let O=0;for(let B=0;B<x;B+=m){const U=(M+B)/h;if(!(U<0||U>=u.outHeight||Math.floor(U)!==U))for(let W=0;W<b;W+=g){const q=(L+W)/d;if(q<0||q>=u.outWidth||Math.floor(q)!==q)continue;const X=k.get(N,U,q,T);O+=X}}$.set(O*C,N,F,z,T)}return e.makeTensorInfo($.shape,$.dtype,$.values)}const xA={kernelName:sh,backendName:"cpu",kernelFunc:gA};function bA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,scale:r,offset:i,mean:a,variance:l}=t;I(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(r==null||a.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),it([o,a,l,r,i],"batchNorm");let{varianceEpsilon:c}=s;c==null&&(c=.001);const u=e.data.get(o.dataId).values,h=e.data.get(a.dataId).values,d=e.data.get(l.dataId).values,p=r?e.data.get(r.dataId).values:new Float32Array([1]),f=i?e.data.get(i.dataId).values:new Float32Array([0]),m=new Float32Array(u.length),g=f.length,x=p.length,b=d.length,w=h.length;let y=0,$=0,C=0,v=0;for(let k=0;k<u.length;++k)m[k]=f[y++]+(u[k]-h[$++])*p[C++]/Math.sqrt(d[v++]+c),y>=g&&(y=0),$>=w&&($=0),C>=x&&(C=0),v>=b&&(v=0);return e.makeTensorInfo(o.shape,o.dtype,m)}const yA={kernelName:Tl,backendName:"cpu",kernelFunc:bA};function wA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;it([o],"batchToSpaceND");const a=r.reduce((x,b)=>x*b),l=ta(o.shape,r,a),c=ea(l.length,r.length),u=na(o.shape,r,a),h=Vd(i,r.length),d=Wd(u,i,r.length),p=Bt({inputs:{x:o},backend:e,attrs:{shape:l}}),f=Ge({inputs:{x:p},backend:e,attrs:{perm:c}}),m=Bt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=ko({inputs:{x:m},backend:e,attrs:{begin:h,size:d}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const $A={kernelName:xl,backendName:"cpu",kernelFunc:wA};function CA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=Sp(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const IA={kernelName:rh,backendName:"cpu",kernelFunc:CA};function vA(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.data.get(s.dataId).values,i=e.data.get(o.dataId).values,a=bt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const kA={kernelName:Pm,backendName:"cpu",kernelFunc:vA};const SA=At(ii,(n,t)=>{const e=t;return n>e.clipValueMax?e.clipValueMax:n<e.clipValueMin?e.clipValueMin:n}),NA={kernelName:ii,backendName:"cpu",kernelFunc:SA};const TA=n=>{const{x:t}=n.inputs,e=n.backend,s=new Float32Array(H(t.shape)),o=e.data.get(t.dataId),r=o.complexTensorInfos.real,i=o.complexTensorInfos.imag,a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values;for(let c=0;c<a.length;c++){const u=a[c],h=l[c];s[c]=Math.hypot(u,h)}return e.makeOutput(s,t.shape,"float32")},EA={kernelName:bl,backendName:"cpu",kernelFunc:TA};function or(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.data.get(s.dataId).complexTensorInfos.imag,r=e.data.get(o.dataId).values;return e.makeTensorInfo(o.shape,o.dtype,r)}const RA={kernelName:$h,backendName:"cpu",kernelFunc:or};function rr(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Ct(o,t[0].shape)[0],i=t.map(m=>m.shape);Pd(i,r);let a=Zn(t.map(m=>m.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(m=>H(m.shape)>0);if(l.length===1)return ss({inputs:{x:l[0]},backend:e});if(l[0].dtype==="complex64"){const m=l.map(y=>vo({inputs:{input:y},backend:e})),g=l.map(y=>or({inputs:{input:y},backend:e})),x=rr({inputs:m,backend:e,attrs:{axis:r}}),b=rr({inputs:g,backend:e,attrs:{axis:r}}),w=Xe({inputs:{real:x,imag:b},backend:e});return m.forEach(y=>e.disposeIntermediateTensorInfo(y)),g.forEach(y=>e.disposeIntermediateTensorInfo(y)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),w}const c=l.map(m=>{const x=[-1,H(m.shape.slice(r))];return Bt({inputs:{x:m},backend:e,attrs:{shape:x}})}),u=c.map(m=>({vals:e.data.get(m.dataId).values,shape:m.shape}));a=Zn(c.map(m=>m.shape),1);const h=c[0].shape[0]===1,d=l1(u,a,t[0].dtype,h),p=Zn(l.map(m=>m.shape),r),f=e.makeTensorInfo(p,t[0].dtype,d);return c.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const DA={kernelName:yl,backendName:"cpu",kernelFunc:rr};function ny(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s;it([o,r],"conv2d");const h=fs(l),d=ke(o.shape,r.shape,i,c,a,u,!1,h),p=d.filterHeight,f=d.filterWidth,m=d.dilationHeight,g=d.dilationWidth,x=d.padInfo.left,b=d.padInfo.top,w=d.dataFormat==="channelsLast",y=new De(d.outShape,o.dtype),$=pt(o.shape),C=pt(r.shape),v=$[0],k=w?$[1]:$[2],N=w?$[2]:1,T=w?1:$[1],F=y.strides[0],z=w?y.strides[1]:y.strides[2],M=w?y.strides[2]:1,L=w?1:y.strides[1],O=e.data.get(o.dataId).values,B=e.data.get(r.dataId).values,U=y.values;for(let W=0;W<d.batchSize;++W){const q=W*v,X=W*F;for(let K=0;K<d.outHeight;++K){const Q=X+K*z,Z=K*d.strideHeight-b;for(let tt=0;tt<p;++tt){const J=Z+tt*m;if(J<0||J>=d.inHeight)continue;const rt=tt*C[0],at=q+J*k;for(let ht=0;ht<d.outWidth;++ht){const ft=Q+ht*M,yt=ht*d.strideWidth-x;for(let vt=0;vt<f;++vt){const Dt=yt+vt*g;if(Dt<0||Dt>=d.inWidth)continue;const Lt=rt+vt*C[1],Wt=at+Dt*N;let qt=Lt;for(let Ft=0;Ft<d.inChannels;++Ft){const Jt=O[Wt+Ft*T];for(let te=0;te<d.outChannels;++te)U[ft+te*L]+=Jt*B[qt+te];qt+=d.outChannels}}}}}}return e.makeTensorInfo(y.shape,y.dtype,U)}const AA={kernelName:wl,backendName:"cpu",kernelFunc:ny};function FA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s;it([o,r],"conv2dBackpropFilter");const h=fs(l),d=ke(o.shape,u,i,1,a,c,!1,h),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:g}=d,x=d.dataFormat==="channelsLast",b=new De(d.filterShape,"float32"),w=d.padInfo.left,y=d.padInfo.top,$=e.data.get(o.dataId).values,C=e.data.get(r.dataId).values,v=new De(o.shape,o.dtype,$),k=new De(r.shape,r.dtype,C);for(let N=0;N<m;++N){const T=Math.max(0,Math.ceil((y-N)/p)),F=Math.min(d.outHeight,(d.inHeight+y-N)/p);for(let z=0;z<g;++z){const M=Math.max(0,Math.ceil((w-z)/f)),L=Math.min(d.outWidth,(d.inWidth+w-z)/f);for(let O=0;O<d.inChannels;++O)for(let B=0;B<d.outChannels;++B){let U=0;for(let W=0;W<d.batchSize;++W)for(let q=T;q<F;++q){const X=N+q*p-y;for(let K=M;K<L;++K){const Q=z+K*f-w;x?U+=v.get(W,X,Q,O)*k.get(W,q,K,B):U+=v.get(W,O,X,Q)*k.get(W,B,q,K)}}b.set(U,N,z,O,B)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const _A={kernelName:ah,backendName:"cpu",kernelFunc:FA};function OA(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s;it([o,r],"conv2dBackpropInput");const h=pt(r.shape),d=pt(o.shape);let p=fs(c);const f=ke(i,r.shape,a,1,l,u,!1,p),m=new De(f.inShape,"float32"),g=m.values,x=e.data.get(o.dataId).values,b=e.data.get(r.dataId).values,[w,y,$]=h,{batchSize:C,filterHeight:v,filterWidth:k,inChannels:N,inHeight:T,inWidth:F,outChannels:z,outHeight:M,outWidth:L,strideHeight:O,strideWidth:B}=f;p=f.dataFormat;const U=v-1-f.padInfo.top,W=k-1-f.padInfo.left,q=p==="channelsLast",X=m.strides[0],K=q?m.strides[1]:m.strides[2],Q=q?m.strides[2]:1,Z=q?1:m.strides[1],tt=d[0],J=q?d[1]:d[2],rt=q?d[2]:1,at=q?1:d[1];for(let ht=0;ht<C;++ht)for(let ft=0;ft<N;++ft)for(let yt=0;yt<T;++yt){const vt=yt-U,Dt=Math.max(0,Math.ceil(vt/O)),Lt=Math.min(M,(v+vt)/O);for(let Wt=0;Wt<F;++Wt){const qt=Wt-W,Ft=Math.max(0,Math.ceil(qt/B)),Jt=Math.min(L,(k+qt)/B);let te=0;for(let Ce=Dt;Ce<Lt;++Ce){const xs=Ce*O-vt;for(let sn=Ft;sn<Jt;++sn){const js=sn*B-qt,Tn=tt*ht+J*Ce+rt*sn,rs=w*(v-1-xs)+y*(k-1-js)+$*ft;for(let bs=0;bs<z;++bs){const ys=x[Tn+at*bs],ws=b[rs+bs];te+=ys*ws}}}const os=X*ht+K*yt+Q*Wt+Z*ft;g[os]=te}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}const LA={kernelName:$l,backendName:"cpu",kernelFunc:OA};function MA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s;it([o,r],"conv3d");const c=Ps(o.shape,r.shape,i,l,a),{filterDepth:u,filterHeight:h,filterWidth:d,dilationDepth:p,dilationHeight:f,dilationWidth:m,padInfo:g}=c,x=g.front,b=g.left,w=g.top,y=new De(c.outShape,o.dtype),$=e.data.get(o.dataId).values,C=e.data.get(r.dataId).values,v=y.values,k=pt(o.shape),N=pt(r.shape);for(let T=0;T<c.batchSize;++T){const F=T*k[0],z=T*y.strides[0];for(let M=0;M<c.outDepth;++M){const L=z+M*y.strides[1],O=M*c.strideDepth-x;for(let B=0;B<u;++B){const U=O+B*p;if(U<0||U>=c.inDepth)continue;const W=B*N[0],q=F+U*k[1];for(let X=0;X<c.outHeight;++X){const K=L+X*y.strides[2],Q=X*c.strideHeight-w;for(let Z=0;Z<h;++Z){const tt=Q+Z*f;if(tt<0||tt>=c.inHeight)continue;const J=W+Z*N[1],rt=q+tt*k[2];for(let at=0;at<c.outWidth;++at){const ht=K+at*c.outChannels,ft=at*c.strideWidth-b;for(let yt=0;yt<d;++yt){const vt=ft+yt*m;if(vt<0||vt>=c.inWidth)continue;const Dt=J+yt*N[2],Lt=rt+vt*c.inChannels;let Wt=Dt;for(let qt=0;qt<c.inChannels;++qt){const Ft=$[Lt+qt];for(let Jt=0;Jt<c.outChannels;++Jt)v[ht+Jt]+=Ft*C[Wt+Jt];Wt+=c.outChannels}}}}}}}}return e.makeTensorInfo(y.shape,y.dtype,y.values)}const PA={kernelName:Cl,backendName:"cpu",kernelFunc:MA};function zA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s;it([o,r],"conv3dBackpropFilterV2");const c=pt(o.shape),u=pt(r.shape),h=Ps(o.shape,l,i,1,a),d=h.strideDepth,p=h.strideHeight,f=h.strideWidth,m=h.filterDepth,g=h.filterHeight,x=h.filterWidth,b=new De(h.filterShape,"float32"),w=b.values,[y,$,C,v]=b.strides,k=e.data.get(r.dataId).values,[N,T,F,z]=u,M=e.data.get(o.dataId).values,[L,O,B,U]=c,W=h.padInfo.front,q=h.padInfo.left,X=h.padInfo.top;for(let K=0;K<m;++K){const Q=Math.max(0,Math.ceil((W-K)/d)),Z=Math.min(h.outDepth,(h.inDepth+W-K)/d),tt=K*y;for(let J=0;J<g;++J){const rt=Math.max(0,Math.ceil((X-J)/p)),at=Math.min(h.outHeight,(h.inHeight+X-J)/p),ht=J*$+tt;for(let ft=0;ft<x;++ft){const yt=Math.max(0,Math.ceil((q-ft)/f)),vt=Math.min(h.outWidth,(h.inWidth+q-ft)/f),Dt=ft*C+ht;for(let Lt=0;Lt<h.inChannels;++Lt){const Wt=Lt*v+Dt;for(let qt=0;qt<h.outChannels;++qt){let Ft=0;for(let Jt=0;Jt<h.batchSize;++Jt){const te=Jt*L,os=Jt*N;for(let Ce=Q;Ce<Z;++Ce){const sn=(K+Ce*d-W)*O+te,js=Ce*T+os;for(let Tn=rt;Tn<at;++Tn){const bs=(J+Tn*p-X)*B+sn,ys=Tn*F+js;for(let ws=yt;ws<vt;++ws){const Vc=(ft+ws*f-q)*U+bs,Wc=ws*z+ys;Ft+=M[Vc+Lt]*k[Wc+qt]}}}}w[Wt+qt]=Ft}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}const BA={kernelName:lh,backendName:"cpu",kernelFunc:zA};function VA(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s;it([o],"conv3dBackpropInputV2");const c=pt(o.shape),u=pt(r.shape),h=Ps(l,r.shape,a,1,i),d=new De(h.inShape,"float32"),p=d.values,[f,m,g,x]=d.strides,b=e.data.get(o.dataId).values,[w,y,$,C]=c,v=e.data.get(r.dataId).values,[k,N,T,F]=u,{batchSize:z,filterDepth:M,filterHeight:L,filterWidth:O,inChannels:B,inDepth:U,inHeight:W,inWidth:q,outChannels:X,outDepth:K,outHeight:Q,outWidth:Z,strideDepth:tt,strideHeight:J,strideWidth:rt}=h,at=M-1-h.padInfo.front,ht=L-1-h.padInfo.top,ft=O-1-h.padInfo.left;for(let yt=0;yt<z;++yt)for(let vt=0;vt<B;++vt)for(let Dt=0;Dt<U;++Dt){const Lt=Dt-at,Wt=Math.max(0,Math.ceil(Lt/tt)),qt=Math.min(K,(M+Lt)/tt);for(let Ft=0;Ft<W;++Ft){const Jt=Ft-ht,te=Math.max(0,Math.ceil(Jt/J)),os=Math.min(Q,(L+Jt)/J);for(let Ce=0;Ce<q;++Ce){const xs=Ce-ft,sn=Math.max(0,Math.ceil(xs/rt)),js=Math.min(Z,(O+xs)/rt);let Tn=0;for(let rs=Wt;rs<qt;++rs){const bs=rs*tt-Lt;for(let ys=te;ys<os;++ys){const ws=ys*J-Jt;for(let vr=sn;vr<js;++vr){const Vc=vr*rt-xs,Wc=w*yt+y*rs+$*ys+C*vr,nw=k*(M-1-bs)+N*(L-1-ws)+T*(O-1-Vc)+F*vt;for(let ya=0;ya<X;++ya){const sw=b[Wc+ya],ow=v[nw+ya];Tn+=sw*ow}}}}p[f*yt+m*Dt+g*Ft+x*Ce+vt]=Tn}}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}const WA={kernelName:ch,backendName:"cpu",kernelFunc:VA};const UA=At(ai,n=>Math.cos(n)),GA={kernelName:ai,backendName:"cpu",kernelFunc:UA};const HA=At(li,n=>Math.cosh(n)),qA={kernelName:li,backendName:"cpu",kernelFunc:HA};function jA(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,[u,h,d,p]=o.shape,f=r.shape[0],[m,g]=a,x=$t([f,m,g,p],"float32"),b=e.data.get(r.dataId).values,w=e.data.get(i.dataId).values,y=e.data.get(o.dataId).values,$=pt(o.shape),C=pt(x.shape);for(let v=0;v<f;v++){const k=v*4,N=b[k],T=b[k+1],F=b[k+2],z=b[k+3],M=w[v];if(M>=u)continue;const L=m>1?(F-N)*(h-1)/(m-1):0,O=g>1?(z-T)*(d-1)/(g-1):0;for(let B=0;B<m;B++){const U=m>1?N*(h-1)+B*L:.5*(N+F)*(h-1);if(U<0||U>h-1){for(let W=0;W<g;W++)for(let q=0;q<p;q++){const X=q+W*C[2]+B*C[1]+v*C[0];x.values[X]=c}continue}if(l==="bilinear"){const W=Math.floor(U),q=Math.ceil(U),X=U-W;for(let K=0;K<g;K++){const Q=g>1?T*(d-1)+K*O:.5*(T+z)*(d-1);if(Q<0||Q>d-1){for(let rt=0;rt<p;rt++){const at=rt+K*C[2]+B*C[1]+v*C[0];x.values[at]=c}continue}const Z=Math.floor(Q),tt=Math.ceil(Q),J=Q-Z;for(let rt=0;rt<p;rt++){let at=rt+Z*$[2]+W*$[1]+M*$[0];const ht=y[at];at=rt+tt*$[2]+W*$[1]+M*$[0];const ft=y[at];at=rt+Z*$[2]+q*$[1]+M*$[0];const yt=y[at];at=rt+tt*$[2]+q*$[1]+M*$[0];const vt=y[at],Dt=ht+(ft-ht)*J,Lt=yt+(vt-yt)*J;at=rt+K*C[2]+B*C[1]+v*C[0],x.values[at]=Dt+(Lt-Dt)*X}}}else for(let W=0;W<g;++W){const q=g>1?T*(d-1)+W*O:.5*(T+z)*(d-1);if(q<0||q>d-1){for(let Q=0;Q<p;Q++){const Z=Q+W*C[2]+B*C[1]+v*C[0];x.values[Z]=c}continue}const X=Math.round(q),K=Math.round(U);for(let Q=0;Q<p;Q++){const Z=Q+X*$[2]+K*$[1]+M*$[0],tt=Q+W*C[2]+B*C[1]+v*C[0];x.values[tt]=y[Z]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}const KA={kernelName:hh,backendName:"cpu",kernelFunc:jA};function XA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;it(o,"cumprod");const l=Zt([r],o.shape.length);let c=o;l!=null&&(c=Ge({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=re(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Je(c.dtype,"int32"),d=Ju(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?1:p[w];else{const y=m(x,b-1);d[w]=i?p[y]*d[y]:p[w]*d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=zs(l),b=Ge({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const YA={kernelName:uh,backendName:"cpu",kernelFunc:XA};function ZA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;it(o,"cumsum");const l=Zt([r],o.shape.length);let c=o;l!=null&&(c=Ge({inputs:{x:o},backend:e,attrs:{perm:l}}));const u=re(1,o.shape.length)[0];if(u!==c.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${c.shape.length-1} but got axis=${u}`);const h=Je(c.dtype,"int32"),d=Fe(H(c.shape),h),p=e.data.get(c.dataId).values,f=c.shape[c.shape.length-1],m=a?(x,b)=>x+f-b-1:(x,b)=>x+b;for(let x=0;x<p.length;x+=f)for(let b=0;b<f;b++){const w=m(x,b);if(b===0)d[w]=i?0:p[w];else{const y=m(x,b-1);d[w]=i?p[y]+d[y]:p[w]+d[y]}}const g=e.makeTensorInfo(c.shape,h,d);if(l!=null){const x=zs(l),b=Ge({inputs:{x:g},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(c),b}return g}const JA={kernelName:Il,backendName:"cpu",kernelFunc:ZA};function QA(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=Sp(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=i1(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const tF={kernelName:dh,backendName:"cpu",kernelFunc:QA};function eF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s;I(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const a=o.shape[0],l=o.shape[1],c=o.shape[2],u=o.shape[3],h=l*r,d=c*r,p=u/(r*r),f=e.data.get(o.dataId).values,m=new Float32Array(a*h*d*p);let g=0;for(let x=0;x<a;++x)for(let b=0;b<h;++b){const w=Math.floor(b/r),y=b%r;for(let $=0;$<d;++$){const C=Math.floor($/r),v=$%r,k=(y*r+v)*p;for(let N=0;N<p;++N){const F=N+k+u*(C+c*(w+l*x));m[g++]=f[F]}}}return e.makeTensorInfo([a,h,d,p],o.dtype,m)}const nF={kernelName:ph,backendName:"cpu",kernelFunc:eF};function sy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;it([o,r],"depthwiseConv2DNative");const u=pt(o.shape),h=pt(r.shape);let d=l;d==null&&(d=[1,1]),I(_e(i,d),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`);const p=ke(o.shape,r.shape,i,d,a,c,!0),{filterHeight:f,filterWidth:m,dilationHeight:g,dilationWidth:x,padInfo:b}=p,w=b.left,y=b.top,$=p.outChannels/p.inChannels,C=new De(p.outShape,o.dtype),v=e.data.get(o.dataId).values,k=e.data.get(r.dataId).values,N=C.values;for(let T=0;T<p.batchSize;++T){const F=T*u[0],z=T*C.strides[0];for(let M=0;M<p.outHeight;++M){const L=z+M*C.strides[1],O=M*p.strideHeight-y;for(let B=0;B<f;++B){const U=O+B*g;if(U<0||U>=p.inHeight)continue;const W=B*h[0],q=F+U*u[1];for(let X=0;X<p.outWidth;++X){const K=L+X*C.strides[2],Q=X*p.strideWidth-w;for(let Z=0;Z<m;++Z){const tt=Q+Z*x;if(tt<0||tt>=p.inWidth)continue;const J=W+Z*h[1],rt=q+tt*p.inChannels;let at=K,ht=J;for(let ft=0;ft<p.inChannels;++ft){const yt=v[rt+ft];for(let vt=0;vt<$;++vt)N[at+vt]+=yt*k[ht+vt];at+=$,ht+=$}}}}}}return e.makeTensorInfo(C.shape,C.dtype,C.values)}const sF={kernelName:vl,backendName:"cpu",kernelFunc:sy};function oF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s;it([o,r],"depthwiseConv2dNativeBackpropFilter");const h=ke(o.shape,u,i,a,l,c,!0),{strideHeight:d,strideWidth:p,filterHeight:f,filterWidth:m}=h,g=new De(h.filterShape,"float32"),x=h.padInfo.left,b=h.padInfo.top,w=h.outChannels/h.inChannels,y=e.data.get(o.dataId).values,$=new De(o.shape,o.dtype,y),C=e.data.get(r.dataId).values,v=new De(r.shape,r.dtype,C);for(let k=0;k<f;++k){const N=Math.max(0,Math.ceil((b-k)/d)),T=Math.min(h.outHeight,(h.inHeight+b-k)/d);for(let F=0;F<m;++F){const z=Math.max(0,Math.ceil((x-F)/p)),M=Math.min(h.outWidth,(h.inWidth+x-F)/p);for(let L=0;L<h.outChannels;++L){const O=Math.trunc(L/w),B=L%w;let U=0;for(let W=0;W<h.batchSize;++W)for(let q=N;q<T;++q){const X=k+q*d-b;for(let K=z;K<M;++K){const Q=F+K*p-x;U+=$.get(W,X,Q,O)*v.get(W,q,K,L)}}g.set(U,k,F,O,B)}}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}const rF={kernelName:fh,backendName:"cpu",kernelFunc:oF};function iF(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s;it([o,r],"depthwiseConv2DNativeBackpropInput");const h=pt(o.shape),d=pt(r.shape),p=ke(u,r.shape,i,a,l,c,!0),f=new De(p.inShape,"float32"),m=f.values,[g,x,b]=f.strides,w=e.data.get(o.dataId).values,[y,$,C]=h,v=e.data.get(r.dataId).values,[k,N,T]=d,{batchSize:F,filterHeight:z,filterWidth:M,inChannels:L,inHeight:O,inWidth:B,outChannels:U,outHeight:W,outWidth:q,strideHeight:X,strideWidth:K}=p,Q=z-1-p.padInfo.top,Z=M-1-p.padInfo.left,tt=U/L;for(let J=0;J<F;++J)for(let rt=0;rt<L;++rt)for(let at=0;at<O;++at){const ht=at-Q,ft=Math.max(0,Math.ceil(ht/X)),yt=Math.min(W,(z+ht)/X);for(let vt=0;vt<B;++vt){const Dt=vt-Z,Lt=Math.max(0,Math.ceil(Dt/K)),Wt=Math.min(q,(M+Dt)/K);let qt=0;for(let Ft=ft;Ft<yt;++Ft){const Jt=Ft*X-ht;for(let te=Lt;te<Wt;++te){const os=te*K-Dt,Ce=y*J+$*Ft+C*te,xs=k*(z-1-Jt)+N*(M-1-os)+T*rt;for(let sn=0;sn<tt;++sn){const js=rt*tt+sn,Tn=w[Ce+js],rs=v[xs+sn];qt+=Tn*rs}}}m[g*J+x*at+b*vt+rt]=qt}}return e.makeTensorInfo(f.shape,f.dtype,f.values)}const aF={kernelName:mh,backendName:"cpu",kernelFunc:iF};function lF(n){const{inputs:t,backend:e}=n,{x:s}=t,o=H(s.shape),r=e.data.get(s.dataId).values,i=$t([o,o],s.dtype),a=i.values;for(let c=0;c<r.length;c++)a[c*o+c]=r[c];const l=[...s.shape,...s.shape];return e.makeTensorInfo(l,i.dtype,i.values)}const cF={kernelName:zm,backendName:"cpu",kernelFunc:lF};const uF={kernelName:kl,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o}=n,{strides:r,pad:i,dilations:a}=e,l=t,c=l.data.get(s.dataId).values,u=s.shape.length,h=l.data.get(o.dataId).values,d=o.shape.length,{batchSize:p,inHeight:f,inWidth:m,inChannels:g,outHeight:x,outWidth:b,padInfo:w,strideHeight:y,strideWidth:$,filterHeight:C,filterWidth:v,dilationHeight:k,dilationWidth:N,outShape:T}=Xi(s.shape,o.shape,r,i,"NHWC",a),F=H(T),z=T.length,M=le(s.dtype,F);for(let O=0;O<p;++O)for(let B=0;B<x;++B){const U=B*y-w.top;for(let W=0;W<b;++W){const q=W*$-w.left;for(let X=0;X<g;++X){let K=Number.MIN_SAFE_INTEGER;for(let Z=0;Z<C;++Z){const tt=U+Z*k;if(tt>=0&&tt<f)for(let J=0;J<v;++J){const rt=q+J*N;if(rt>=0&&rt<m){const at=Xn([O,tt,rt,X],u,pt(s.shape)),ht=Xn([Z,J,X],d,pt(o.shape)),ft=c[at]+h[ht];ft>K&&(K=ft)}}}const Q=Xn([O,B,W,X],z,pt(T));M[Q]=K}}}return{dataId:l.write(To(M,s.dtype),T,s.dtype),shape:T,dtype:s.dtype}}};const hF={kernelName:pu,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=_n(s.shape,c.data.get(s.dataId).values),h=_n(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:$,filterWidth:C,dilationHeight:v,dilationWidth:k,outShape:N}=Xi(s.shape,o.shape,i,a,"NHWC",l);I(r.rank===N.length,()=>`Error in ${pu}, dy must have the same rank as output ${N.length}, but got ${r.rank}`);const T=_n(N,c.data.get(r.dataId).values),F=_m(o.shape,o.dtype);for(let M=0;M<d;++M)for(let L=0;L<g;++L){const O=L*w-b.top;for(let B=0;B<x;++B){const U=B*y-b.left;for(let W=0;W<m;++W){let q=Number.MIN_SAFE_INTEGER,X=0,K=0;for(let Q=0;Q<$;++Q){const Z=O+Q*v;if(Z>=0&&Z<p)for(let tt=0;tt<C;++tt){const J=U+tt*k;if(J>=0&&J<f){const rt=u[M][Z][J][W]+h[Q][tt][W];rt>q&&(q=rt,X=Q,K=tt)}}}F[X][K][W]+=T[M][L][B][W]}}}return{dataId:c.write(To(F,s.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};const dF={kernelName:du,backendName:"cpu",kernelFunc:({inputs:n,backend:t,attrs:e})=>{const{x:s,filter:o,dy:r}=n,{strides:i,pad:a,dilations:l}=e,c=t,u=_n(s.shape,c.data.get(s.dataId).values),h=_n(o.shape,c.data.get(o.dataId).values),{batchSize:d,inHeight:p,inWidth:f,inChannels:m,outHeight:g,outWidth:x,padInfo:b,strideHeight:w,strideWidth:y,filterHeight:$,filterWidth:C,dilationHeight:v,dilationWidth:k,outShape:N}=Xi(s.shape,o.shape,i,a,"NHWC",l);I(r.rank===N.length,()=>`Error in ${du}, dy must have the same rank as output ${N.length}, but got ${r.rank}`);const T=_n(N,c.data.get(r.dataId).values),F=_m(s.shape,s.dtype);for(let M=0;M<d;++M)for(let L=0;L<g;++L){const O=L*w-b.top;for(let B=0;B<x;++B){const U=B*y-b.left;for(let W=0;W<m;++W){let q=Number.MIN_SAFE_INTEGER,X=O<0?0:O,K=U<0?0:U;for(let Q=0;Q<$;++Q){const Z=O+Q*v;if(Z>=0&&Z<p)for(let tt=0;tt<C;++tt){const J=U+tt*k;if(J>=0&&J<f){const rt=u[M][Z][J][W]+h[Q][tt][W];rt>q&&(q=rt,X=Z,K=J)}}}F[M][X][K][W]+=T[M][L][B][W]}}}return{dataId:c.write(To(F,s.dtype),s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};function ha(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;it(o,"sum");let a;o.dtype==="bool"?a=Os({inputs:{x:o},backend:e,attrs:{dtype:"int32"}}):a=ss({inputs:{x:o},backend:e});const l=a.shape.length,c=Ct(r,a.shape),u=Zt(c,l);let h=c,d=a;u!=null&&(d=Ge({inputs:{x:a},backend:e,attrs:{perm:u}}),h=re(h.length,l)),Se("sum",h,d.shape.length);const[p,f]=we(d.shape,h),m=Je(d.dtype,"int32");let g=nl(e,p,m);const x=H(f),b=e.data.get(g.dataId).values,w=e.data.get(d.dataId).values;for(let y=0;y<b.length;++y){const $=y*x;let C=0;for(let v=0;v<x;++v)C+=w[$+v];b[y]=C}if(i){const y=oe(g.shape,c),$=g;g=Bt({inputs:{x:g},backend:e,attrs:{shape:y}}),e.disposeIntermediateTensorInfo($)}return e.disposeIntermediateTensorInfo(a),u!=null&&e.disposeIntermediateTensorInfo(d),g}const pF={kernelName:oc,backendName:"cpu",kernelFunc:ha};function fF(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=Yd(o,r.length);Jd(i.length,l,r);const{path:c,steps:u}=Qd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Zd(p,l[g]);let w;tp(x)?w=r[g]:(w=Ge({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let $=0;$<b.length;++$)y.splice(b[$],0,1);Rt(w.shape,y)||(w=Bt({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=Oc({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=ha({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const mF={kernelName:Bm,backendName:"cpu",kernelFunc:fF};function gF(n){const{inputs:t,backend:e}=n,{dy:s,y:o}=t;it([s,o],"eluGrad");const r=new Float32Array(H(o.shape)),i=e.data.get(o.dataId).values,a=e.data.get(s.dataId).values;for(let l=0;l<i.length;++l){const c=i[l];c>=1?r[l]=a[l]:r[l]=a[l]*(c+1)}return e.makeTensorInfo(o.shape,"float32",r)}const xF={kernelName:gh,backendName:"cpu",kernelFunc:gF};const bF=Ud,yF=Gd,wF=Hd,$F=qd,CF=jd,IF=Kd,vF=At(hi,n=>{const t=Math.sign(n),e=Math.abs(n),s=1/(1+bF*e);return t*(1-((((IF*s+CF)*s+$F)*s+wF)*s+yF)*s*Math.exp(-e*e))}),kF={kernelName:hi,backendName:"cpu",kernelFunc:vF};function rl(n){const{inputs:t,backend:e,attrs:s}=n,{input:o}=t,{dim:r}=s,i=o.shape.length,a=o.shape.slice();let l=r;return r<0&&(I(-(i+1)<=r,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+r+1),a.splice(l,0,1),Bt({inputs:{x:o},backend:e,attrs:{shape:a}})}const SF={kernelName:Nl,backendName:"cpu",kernelFunc:rl};const NF=ce((n,t)=>n/t),Ap=$e(ci,NF),Uu={kernelName:ci,backendName:"cpu",kernelFunc:Ap};function oy(n,t,e){const s=n.shape,o=s[0],r=s[1],i=e.data.get(n.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,c=[o,r],u=H(c),h=ve("float32",u),d=ve("float32",u);for(let g=0;g<o;g++){const x=ko({inputs:{x:a},backend:e,attrs:{begin:[g,0],size:[1,r]}}),b=ko({inputs:{x:l},backend:e,attrs:{begin:[g,0],size:[1,r]}}),w=Xe({inputs:{real:x,imag:b},backend:e}),{real:y,imag:$}=TF(w,t,e),C=hs(y,$);for(let v=0;v<r;v++){const k=Xd(C,v);h[g*r+v]=k.real,d[g*r+v]=k.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(w)}const p=e.makeTensorInfo(c,"float32",h),f=e.makeTensorInfo(c,"float32",d),m=Xe({inputs:{real:p,imag:f},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),m}function TF(n,t,e){const s=H(n.shape),o=e.data.get(n.dataId),r=e.data.get(o.complexTensorInfos.real.dataId).values,i=e.data.get(o.complexTensorInfos.imag.dataId).values;if(EF(s)){const a=Gu(r,i,s,t,e),l=[n.shape[0],n.shape[1]];if(t){const c=e.makeTensorInfo(l,"float32",a.real),u=e.makeTensorInfo(l,"float32",a.imag),h=e.makeTensorInfo([],"float32",Ms(s,"float32")),d=ss({inputs:{x:h},backend:e}),p=Uu.kernelFunc({inputs:{a:c,b:h},backend:e}),f=Uu.kernelFunc({inputs:{a:u,b:d},backend:e}),m=e.data.get(p.dataId).values,g=e.data.get(f.dataId).values;return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),{real:m,imag:g}}return a}else{const a=hs(r,i),l=RF(a,s,t);return kx(l)}}function EF(n){return(n&n-1)===0}function Gu(n,t,e,s,o){if(e===1)return{real:n,imag:t};const r=hs(n,t),i=e/2,a=Sx(r),l=a.real,c=a.imag,u=[l.length],h=o.makeTensorInfo(u,"float32",l),d=o.makeTensorInfo(u,"float32",c),p=Xe({inputs:{real:h,imag:d},backend:o}),f=Nx(r),m=f.real,g=f.imag,x=[m.length],b=o.makeTensorInfo(x,"float32",m),w=o.makeTensorInfo(x,"float32",g),y=Xe({inputs:{real:b,imag:w},backend:o}),$=Gu(l,c,i,s,o),C=$.real,v=$.imag,k=[C.length],N=o.makeTensorInfo(k,"float32",C),T=o.makeTensorInfo(k,"float32",v),F=Xe({inputs:{real:N,imag:T},backend:o}),z=Gu(m,g,i,s,o),M=z.real,L=z.imag,O=[M.length],B=o.makeTensorInfo(O,"float32",M),U=o.makeTensorInfo(O,"float32",L),W=Xe({inputs:{real:B,imag:U},backend:o}),q=Ex(e,s),X=[q.real.length],K=o.makeTensorInfo(X,"float32",q.real),Q=o.makeTensorInfo(X,"float32",q.imag),Z=Xe({inputs:{real:K,imag:Q},backend:o}),tt=Oc({inputs:{a:Z,b:W},backend:o}),J=sr({inputs:{a:F,b:tt},backend:o}),rt=Rp({inputs:{a:F,b:tt},backend:o}),at=vo({inputs:{input:J},backend:o}),ht=vo({inputs:{input:rt},backend:o}),ft=or({inputs:{input:J},backend:o}),yt=or({inputs:{input:rt},backend:o}),vt=rr({inputs:[at,ht],backend:o,attrs:{axis:0}}),Dt=rr({inputs:[ft,yt],backend:o,attrs:{axis:0}}),Lt=o.data.get(vt.dataId).values,Wt=o.data.get(Dt.dataId).values;return o.disposeIntermediateTensorInfo(h),o.disposeIntermediateTensorInfo(d),o.disposeIntermediateTensorInfo(p),o.disposeIntermediateTensorInfo(b),o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(y),o.disposeIntermediateTensorInfo(N),o.disposeIntermediateTensorInfo(T),o.disposeIntermediateTensorInfo(F),o.disposeIntermediateTensorInfo(B),o.disposeIntermediateTensorInfo(U),o.disposeIntermediateTensorInfo(W),o.disposeIntermediateTensorInfo(K),o.disposeIntermediateTensorInfo(Q),o.disposeIntermediateTensorInfo(Z),o.disposeIntermediateTensorInfo(tt),o.disposeIntermediateTensorInfo(J),o.disposeIntermediateTensorInfo(rt),o.disposeIntermediateTensorInfo(at),o.disposeIntermediateTensorInfo(ft),o.disposeIntermediateTensorInfo(ht),o.disposeIntermediateTensorInfo(yt),o.disposeIntermediateTensorInfo(vt),o.disposeIntermediateTensorInfo(Dt),{real:Lt,imag:Wt}}function RF(n,t,e){const s=new Float32Array(t*2);for(let o=0;o<t;o++){let r=0,i=0;for(let a=0;a<t;a++){const l=Rx(o*a,t,e),c=Xd(n,a);r+=c.real*l.real-c.imag*l.imag,i+=c.real*l.imag+c.imag*l.real}e&&(r/=t,i/=t),Tx(s,r,i,o)}return s}function DF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=oy(a,!1,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const AF={kernelName:xh,backendName:"cpu",kernelFunc:DF};function Fp(n){const{backend:t,attrs:e}=n,{shape:s,value:o,dtype:r}=e,i=r||Yr(o),a=le(i,H(s));return _F(a,o,i),t.makeTensorInfo(s,i,a)}const FF={kernelName:bh,backendName:"cpu",kernelFunc:Fp};function _F(n,t,e){n.fill(t)}const OF={kernelName:yh,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,o=e,r=ve(s.dtype,H(s.shape)),[i,a,l,c]=s.shape,u=o.data.get(s.dataId).values;for(let d=0;d<i;d++){const p=d*l*a*c;for(let f=0;f<a;f++){const m=f*(l*c);for(let g=0;g<l;g++){const x=g*c;for(let b=0;b<c;b++){const w=Math.round(l-g-1),y=p+m+x+b;let $=u[y];if(w>=0&&w<l){const C=w*c,v=p+m+C+b;$=u[v]}r[y]=$}}}}return{dataId:o.write(r,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const LF=ce((n,t)=>Math.floor(n/t)),MF=$e(mi,LF,null,"int32"),PF={kernelName:mi,backendName:"cpu",kernelFunc:MF};function zF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=ny({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;if(u==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const x=Bt({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});m=sr({inputs:{a:m,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else m=sr({inputs:{a:m,b:i},backend:e});e.disposeIntermediateTensorInfo(g)}if(p){const g=m;if(u==="NCHW"&&p==="prelu"&&a.shape.length===1&&a.shape[0]!==1){const x=Bt({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});m=ol(e,m,p,x,f),e.disposeIntermediateTensorInfo(x)}else m=ol(e,m,p,a,f);e.disposeIntermediateTensorInfo(g)}return m}const BF={kernelName:Ma,backendName:"cpu",kernelFunc:zF};function VF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s;let m=sy({inputs:{x:o,filter:r},backend:e,attrs:{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d}});if(i){const g=m;m=sr({inputs:{a:m,b:i},backend:e}),e.disposeIntermediateTensorInfo(g)}if(p){const g=m;m=ol(e,m,p,a,f),e.disposeIntermediateTensorInfo(g)}return m}const WF={kernelName:Zm,backendName:"cpu",kernelFunc:VF};function UF(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=H(s.shape),i=o.shape,a=i[i.length-1],[l,c,u,h]=Yh(s,o);if(c===0)return e.makeTensorInfo(l,s.dtype,[]);const d=e.data.get(o.dataId).values,p=e.bufferSync(s),f=m1(d,p,s.dtype,c,a,u,h,s.shape,r);return e.makeTensorInfo(l,s.dtype,f.values)}const GF={kernelName:Vm,backendName:"cpu",kernelFunc:UF};function HF(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s;it([o,r],"gatherV2");const l=Ct(i,o.shape)[0],c=e.data.get(r.dataId).values,u=o.shape[l];for(let y=0;y<c.length;++y){const $=c[y];I($<=u-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${u-1}]`)}let h=a;a==null&&(h=0);const d=H(r.shape),p=np(o,r,l,h),f=Bt({inputs:{x:o},backend:e,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),m=Bt({inputs:{x:r},backend:e,attrs:{shape:[p.batchSize,d/p.batchSize]}}),g=[p.batchSize,p.outerSize,d/p.batchSize,p.sliceSize],x=e.bufferSync(m),b=e.bufferSync(f),w=g1(b,x,g);return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),e.makeTensorInfo(p.outputShape,w.dtype,w.values)}const qF={kernelName:El,backendName:"cpu",kernelFunc:HF};function jF(n){const{inputs:t,backend:e}=n,{input:s}=t,o=H(s.shape),r=s.shape[s.shape.length-1],i=o/r,a=Bt({inputs:{x:s},backend:e,attrs:{shape:[i,r]}}),l=oy(a,!0,e),c=Bt({inputs:{x:l},backend:e,attrs:{shape:s.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(l),c}const KF={kernelName:wh,backendName:"cpu",kernelFunc:jF};const XF=At(bi,n=>Number.isFinite(n)?1:0,"bool"),YF={kernelName:bi,backendName:"cpu",kernelFunc:XF};const ZF=At(yi,n=>Math.abs(n)===1/0?1:0,"bool"),JF={kernelName:yi,backendName:"cpu",kernelFunc:ZF};const QF=At(wi,n=>Number.isNaN(n)?1:0,"bool"),t_={kernelName:wi,backendName:"cpu",kernelFunc:QF};function e_(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=$1(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const n_={kernelName:Wm,backendName:"cpu",kernelFunc:e_};const s_=At(Ci,n=>Math.log1p(n)),o_={kernelName:Ci,backendName:"cpu",kernelFunc:s_};const r_=ce((n,t)=>n&&t),i_=$e(_l,r_,null,"bool"),a_={kernelName:_l,backendName:"cpu",kernelFunc:i_};const l_=At(Ol,n=>n?0:1,"bool"),c_={kernelName:Ol,backendName:"cpu",kernelFunc:l_};const u_=ce((n,t)=>n||t),h_=$e(Ll,u_,null,"bool"),d_={kernelName:Ll,backendName:"cpu",kernelFunc:h_};function p_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s;it(o,"LRN");const c=o.shape[3],u=c-1,h=e.data.get(o.dataId).values,d=H(o.shape),p=new Float32Array(d);function f(m){const g=m%c;let x=m-g+Math.max(0,g-r);const b=m-g+Math.min(g+r,u);let w=0;for(;x<=b;x++){const y=h[x];w+=y*y}return w}for(let m=0;m<d;m++){const g=f(m),x=h[m]*Math.pow(i+a*g,-l);p[m]=x}return e.makeTensorInfo(o.shape,o.dtype,p)}const f_={kernelName:Ml,backendName:"cpu",kernelFunc:p_};function m_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s;it(i,"LRNGrad");const h=H(i.shape),d=i.shape[3],p=e.data.get(i.dataId).values,f=e.data.get(o.dataId).values,m=e.data.get(r.dataId).values,g=new Float32Array(h),x=h;for(let b=0;b<x;b++){const w=b%d,y=b-w+Math.max(0,w-a),$=b-w+Math.min(d,w+a+1);let C=0;for(let v=y;v<$;v++)C+=Math.pow(f[v],2);C=c*C+l;for(let v=y;v<$;v++){let k=-2*c*u*f[v]*m[b]/C;b===v&&(k+=Math.pow(C,-u)),k*=p[b],g[v]+=k}}return e.makeTensorInfo(i.shape,o.dtype,g)}const g_={kernelName:Ch,backendName:"cpu",kernelFunc:m_};function ry(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=e;let l=o.shape;const c=l.length,u=Ct(r,l);let h=u;const d=Zt(h,c);let p=a.data.get(o.dataId).values;if(d!=null){const y=new Array(c);for(let $=0;$<y.length;$++)y[$]=l[d[$]];p=Tp(p,l,o.dtype,d,y),h=re(h.length,c),l=y}it(o,"max"),Se("max",h,c);const[f,m]=we(l,h),g=H(m),x=I1(p,g,f,o.dtype),b=a.write(x,f,o.dtype);let w=f;return i&&(w=oe(f,u)),{dataId:b,shape:w,dtype:o.dtype}}const x_={kernelName:Pl,backendName:"cpu",kernelFunc:ry};function b_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;it(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(_e(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=kn(o.shape,r,i,c,a,l);let h;if(u.filterWidth===1&&u.filterHeight===1&&Rt(u.inShape,u.outShape))h=ss({inputs:{x:o},backend:e});else{const d=e.data.get(o.dataId).values,p=pt(o.shape),f=Dp(d,o.shape,o.dtype,p,u,"max");h=e.makeTensorInfo(u.outShape,o.dtype,f.values)}return h}const y_={kernelName:zl,backendName:"cpu",kernelFunc:b_};function w_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s;it(o,"maxPool3d");const u=ps(o.shape,r,i,1,a,l,c),h=e.data.get(o.dataId).values,d=ey(h,o.shape,o.dtype,pt(o.shape),u,"max");return e.makeTensorInfo(d.shape,"float32",d.values)}const $_={kernelName:Bl,backendName:"cpu",kernelFunc:w_};function C_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,{filterSize:i,strides:a,pad:l,dimRoundingMode:c}=s;it([o,r],"maxPool3DGrad");const u=ps(r.shape,i,a,1,l,c),h=e.bufferSync(r),d=cA(h,u),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,g=u.dilationDepth,x=u.dilationHeight,b=u.dilationWidth,w=u.effectiveFilterDepth,y=u.effectiveFilterHeight,$=u.effectiveFilterWidth,C=w-1-u.padInfo.front,v=$-1-u.padInfo.left,k=y-1-u.padInfo.top,N=$t(r.shape,"float32"),T=e.bufferSync(o);for(let F=0;F<u.batchSize;++F)for(let z=0;z<u.inChannels;++z)for(let M=0;M<u.inDepth;++M)for(let L=0;L<u.inHeight;++L)for(let O=0;O<u.inWidth;++O){const B=M-C,U=L-k,W=O-v;let q=0;for(let X=0;X<w;X+=g){const K=(B+X)/p;if(!(K<0||K>=u.outDepth||Math.floor(K)!==K))for(let Q=0;Q<y;Q+=x){const Z=(U+Q)/f;if(!(Z<0||Z>=u.outHeight||Math.floor(Z)!==Z))for(let tt=0;tt<$;tt+=b){const J=(W+tt)/m;if(J<0||J>=u.outWidth||Math.floor(J)!==J)continue;const rt=w*y*$-1-d.get(F,K,Z,J,z),at=X*y*$+Q*$+tt,ht=rt===at?1:0;if(ht===0)continue;const ft=T.get(F,K,Z,J,z);q+=ft*ht}}}N.set(q,F,M,L,O,z)}return e.makeTensorInfo(N.shape,N.dtype,N.values)}const I_={kernelName:vh,backendName:"cpu",kernelFunc:C_};function v_(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;it([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=kn(a.shape,l,c,1,u,h),p=e.data.get(a.dataId).values,f=$t(d.outShape,a.dtype,ty(p,a.shape,a.dtype,d).values),m=d.strideHeight,g=d.strideWidth,x=d.dilationHeight,b=d.dilationWidth,w=d.effectiveFilterHeight,y=d.effectiveFilterWidth,$=y-1-d.padInfo.left,C=w-1-d.padInfo.top,v=$t(a.shape,"float32"),k=e.data.get(o.dataId).values,N=$t(o.shape,"float32",k);for(let T=0;T<d.batchSize;++T)for(let F=0;F<d.inChannels;++F)for(let z=0;z<d.inHeight;++z)for(let M=0;M<d.inWidth;++M){const L=z-C,O=M-$;let B=0;for(let U=0;U<w;U+=x){const W=(L+U)/m;if(!(W<0||W>=d.outHeight||Math.floor(W)!==W))for(let q=0;q<y;q+=b){const X=(O+q)/g;if(X<0||X>=d.outWidth||Math.floor(X)!==X)continue;const K=w*y-1-f.get(T,W,X,F),Q=U*y+q,Z=K===Q?1:0;if(Z===0)continue;const tt=N.get(T,W,X,F);B+=tt*Z}}v.set(B,T,z,M,F)}return e.makeTensorInfo(v.shape,v.dtype,v.values)}const k_={kernelName:Ih,backendName:"cpu",kernelFunc:v_};function S_(n,t,e,s,o){const r=pt(t),i=Dp(n,t,e,r,o,"max"),a=ty(n,t,e,o,!0,s);return[i.values,a.values]}const N_={kernelName:Um,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;it(s,"MaxPoolWithArgmax");const c=l.data.get(s.dataId).values,u=kn(s.shape,o,r,[1,1],i),[h,d]=S_(c,s.shape,s.dtype,a,u),p=l.write(h,u.outShape,s.dtype),f=l.write(d,u.outShape,s.dtype);return[{dataId:p,shape:u.outShape,dtype:s.dtype},{dataId:f,shape:u.outShape,dtype:"int32"}]}};function T_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=Ct(r,o.shape),c=we(o.shape,a)[1],u=H(c),h=[],d=e.makeTensorInfo([],"float32",new Float32Array([u]));h.push(d);const p=Os({inputs:{x:o},backend:e,attrs:{dtype:"float32"}});h.push(p);const f=Ap({inputs:{a:p,b:d},backend:e});h.push(f);const m=ha({inputs:{x:f},backend:e,attrs:{axis:r,keepDims:i}});return h.forEach(g=>e.disposeIntermediateTensorInfo(g)),m}const E_={kernelName:Vl,backendName:"cpu",kernelFunc:T_};function R_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;it(o,"min");const a=Ct(r,o.shape);let l=a;const c=Zt(l,o.shape.length);let u=o;c!=null&&(u=Ge({inputs:{x:o},backend:e,attrs:{perm:c}}),l=re(l.length,o.shape.length)),Se("min",l,u.shape.length);const[h,d]=we(u.shape,l),p=H(d),f=Fe(H(h),u.dtype),m=e.data.get(u.dataId).values;for(let x=0;x<f.length;++x){const b=x*p;let w=m[b];for(let y=0;y<p;++y){const $=m[b+y];(Number.isNaN($)||$<w)&&(w=$)}f[x]=w}c!=null&&e.disposeIntermediateTensorInfo(u);const g=e.makeTensorInfo(h,u.dtype,f);if(i){const x=oe(h,a),b=Bt({inputs:{x:g},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(g),b}return g}const D_={kernelName:Wl,backendName:"cpu",kernelFunc:R_};function A_(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,mode:i}=s;it(o,"mirrorPad");const a=r.map((w,y)=>w[0]+o.shape[y]+w[1]),l=r.map(w=>w[0]),c=r.map((w,y)=>w[0]+o.shape[y]),u=i==="reflect"?0:1,h=e.data.get(o.dataId).values,d=o.shape.length,p=pt(o.shape),f=H(a),m=a.length,g=pt(a),x=ve(o.dtype,f);for(let w=0;w<f;w++){let y=cr(w,m,g);for(let C=0;C<m;C++)y[C]<l[C]?y[C]=l[C]*2-y[C]-u:y[C]>=c[C]&&(y[C]=(c[C]-1)*2-y[C]+u);y=y.map((C,v)=>C-l[v]);const $=Xn(y,d,p);x[w]=h[$]}return{dataId:e.write(x,a,o.dtype),shape:a,dtype:o.dtype}}const F_={kernelName:Ul,backendName:"cpu",kernelFunc:A_};const __=ce((n,t)=>{const e=n%t;return n<0&&t<0||n>=0&&t>=0?e:(e+t)%t}),O_=$e(ki,__),L_={kernelName:ki,backendName:"cpu",kernelFunc:O_};function iy(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=o.shape.length;let a=r;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);const l=Ct([a],o.shape),c=ry({inputs:{x:o},backend:e,attrs:{reductionIndices:l,keepDims:!1}}),u=oe(c.shape,l),h=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),d=Rp({inputs:{a:o,b:h},backend:e}),p=d1({inputs:{x:d},backend:e}),f=ha({inputs:{x:p},backend:e,attrs:{axis:l,keepDims:!1}}),m=Bt({inputs:{x:f},backend:e,attrs:{shape:u}}),g=Ap({inputs:{a:p,b:m},backend:e});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(m),g}const M_={kernelName:ac,backendName:"cpu",kernelFunc:iy};function P_(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s;it(o,"multinomial");const l=a?o:iy({inputs:{logits:o},backend:e,attrs:{dim:-1}}),c=l.shape[0],u=l.shape[1],h=e.data.get(l.dataId).values,d=[c,r],p=Fe(H(d),"int32");for(let f=0;f<c;++f){const m=f*u,g=new Float32Array(u-1);g[0]=h[m];for(let w=1;w<g.length;++w)g[w]=g[w-1]+h[m+w];const x=yd.alea(i.toString()),b=f*r;for(let w=0;w<r;++w){const y=x();p[b+w]=g.length;for(let $=0;$<g.length;$++)if(y<g[$]){p[b+w]=$;break}}}return a||e.disposeIntermediateTensorInfo(l),e.makeTensorInfo(d,"int32",p)}const z_={kernelName:Gm,backendName:"cpu",kernelFunc:P_};const B_=Td;function V_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s;it(o,"NonMaxSuppression");const c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,{selectedIndices:h}=B_(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const W_={kernelName:kh,backendName:"cpu",kernelFunc:V_};const U_=Ed;function G_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s;it(o,"NonMaxSuppressionPadded");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,{selectedIndices:d,validOutputs:p}=U_(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const H_={kernelName:Sh,backendName:"cpu",kernelFunc:G_};const q_=Rd;function j_(n){const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s;it(o,"NonMaxSuppressionWithScore");const u=e.data.get(o.dataId).values,h=e.data.get(r.dataId).values,d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=q_(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const K_={kernelName:Nh,backendName:"cpu",kernelFunc:j_};function X_(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s;it(o,"oneHot");const c=H(o.shape),u=new Float32Array(c*i);u.fill(l);const h=e.data.get(o.dataId).values;for(let d=0;d<c;++d)h[d]>=0&&h[d]<i&&(u[d*i+h[d]]=a);return e.makeTensorInfo([...o.shape,i],r,u)}const Y_={kernelName:jl,backendName:"cpu",kernelFunc:X_};function il(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(s.dtype==="complex64"){const o=vo({inputs:{input:s},backend:e}),r=il({inputs:{x:o},backend:e}),i=or({inputs:{input:s},backend:e}),a=il({inputs:{x:i},backend:e}),l=Xe({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Fp({backend:e,attrs:{shape:s.shape,value:0,dtype:s.dtype}})}const Z_={kernelName:uc,backendName:"cpu",kernelFunc:il};function ay(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(s.dtype==="complex64"){const o=vo({inputs:{input:s},backend:e}),r=ay({inputs:{x:o},backend:e}),i=or({inputs:{input:s},backend:e}),a=il({inputs:{x:i},backend:e}),l=Xe({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return Fp({backend:e,attrs:{shape:s.shape,value:1,dtype:s.dtype}})}const J_={kernelName:ql,backendName:"cpu",kernelFunc:ay};function ly(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return rl({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{vn(r,u.shape,"All tensors passed to stack must have matching shapes"),I(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=rl({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=rr({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const Q_={kernelName:Kl,backendName:"cpu",kernelFunc:ly};function tO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;it(o,"pad");const a=r.map((b,w)=>b[0]+o.shape[w]+b[1]),l=r.map(b=>b[0]),c=e.data.get(o.dataId).values,u=H(o.shape),h=o.shape.length,d=pt(o.shape),p=H(a),f=a.length,m=pt(a),g=ve(o.dtype,p);i!==0&&g.fill(i);for(let b=0;b<u;b++){const y=cr(b,h,d).map((C,v)=>C+l[v]),$=Xn(y,f,m);g[$]=c[b]}return{dataId:e.write(g,a,o.dtype),shape:a,dtype:o.dtype}}const cy={kernelName:Xl,backendName:"cpu",kernelFunc:tO};const eO=ce((n,t)=>Math.pow(n,t)),nO=$e(Ni,eO),sO={kernelName:Ni,backendName:"cpu",kernelFunc:nO};function oO(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,a=o.map(g=>e.data.get(g.dataId).values),l=o.map(g=>g.shape),c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values,[h,d,p]=E1(a,l,c,r.shape,r.dtype,u,i.shape),f=h.map(g=>e.makeTensorInfo([g.length],"int32",g)),m=e.makeTensorInfo(p,r.dtype,d);return f.concat([m])}const rO={kernelName:Hm,backendName:"cpu",kernelFunc:oO};function iO(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=R1(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const aO={kernelName:qm,backendName:"cpu",kernelFunc:iO};function lO(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.data.get(o.dataId).values,u=e.data.get(r.dataId).values,h=e.data.get(i.dataId).values,d=a.map(g=>e.data.get(g.dataId).values),p=a.map(g=>g.shape),[f,m]=D1(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const cO={kernelName:jm,backendName:"cpu",kernelFunc:lO};function uO(n){const{backend:t,attrs:e}=n,{start:s,stop:o,dtype:r,step:i}=e,a=A1(s,o,i,r);return t.makeTensorInfo([a.length],r,a)}const hO={kernelName:Th,backendName:"cpu",kernelFunc:uO};const dO=At(Ti,n=>1/n),pO={kernelName:Ti,backendName:"cpu",kernelFunc:dO};function fO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;it(o,"resizeBilinear");const l=pt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(H([h,c,u,f])),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u];let w=0;const y=x[0]/b[0],$=x[1]/b[1];for(let C=0;C<h;C++)for(let v=0;v<c;v++){let k;i?k=y*(v+.5)-.5:k=y*v;const N=Math.max(0,Math.floor(k)),T=k-N,F=Math.min(d-1,Math.ceil(k)),z=C*l[0]+N*l[1],M=C*l[0]+F*l[1];for(let L=0;L<u;L++){let O;i?O=$*(L+.5)-.5:O=$*L;const B=Math.max(0,Math.floor(O)),U=O-B,W=Math.min(p-1,Math.ceil(O)),q=z+B*l[2],X=M+B*l[2],K=z+W*l[2],Q=M+W*l[2];for(let Z=0;Z<f;Z++){const tt=m[q+Z],J=m[X+Z],rt=m[K+Z],at=m[Q+Z],ht=tt+(rt-tt)*U,ft=J+(at-J)*U,yt=ht+(ft-ht)*T;g[w++]=yt}}}return e.makeTensorInfo([h,c,u,f],"float32",g)}const mO={kernelName:tc,backendName:"cpu",kernelFunc:fO};function gO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;it([r,o],"resizeBilinearGrad");const a=pt(o.shape),[l,c,u,h]=o.shape,[,d,p]=r.shape,f=new Float32Array(l*c*u*h),m=[i&&d>1?c-1:c,i&&p>1?u-1:u],g=[i&&d>1?d-1:d,i&&p>1?p-1:p],x=m[0]/g[0],b=m[1]/g[1],w=e.data.get(r.dataId).values;let y=0;for(let $=0;$<l;$++){const C=$*a[0];for(let v=0;v<d;v++){const k=v*x,N=Math.floor(k),T=Math.min(Math.ceil(k),c-1),F=C+N*a[1],z=C+T*a[1],M=k-N,L=1-M;for(let O=0;O<p;O++){const B=O*b,U=Math.floor(B),W=Math.min(Math.ceil(B),u-1),q=B-U,X=1-q,K=F+U*a[2],Q=F+W*a[2],Z=z+U*a[2],tt=z+W*a[2],J=L*X,rt=L*q,at=M*X,ht=M*q;for(let ft=0;ft<h;ft++){const yt=w[y++];f[K+ft]+=yt*J,f[Q+ft]+=yt*rt,f[Z+ft]+=yt*at,f[tt+ft]+=yt*ht}}}}return e.makeTensorInfo([l,u,c,h],"float32",f)}const xO={kernelName:Dh,backendName:"cpu",kernelFunc:gO};function bO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s;it(o,"resizeNearestNeighbor");const l=pt(o.shape),[c,u]=a,[h,d,p,f]=o.shape,m=e.data.get(o.dataId).values,g=new Float32Array(h*c*u*f),x=[r&&c>1?d-1:d,r&&u>1?p-1:p],b=[r&&c>1?c-1:c,r&&u>1?u-1:u],w=x[0]/b[0],y=x[1]/b[1];let $=0;for(let C=0;C<h;C++){const v=C*l[0];for(let k=0;k<c;k++){const N=i?w*(k+.5):w*k;let T=Math.min(d-1,r?Math.round(N):Math.floor(N));i&&(T=Math.max(0,T));const F=v+T*l[1];for(let z=0;z<u;z++){const M=i?y*(z+.5):y*z;let L=Math.min(p-1,r?Math.round(M):Math.floor(M));i&&(L=Math.max(0,L));const O=F+L*l[2];for(let B=0;B<f;B++){const U=m[O+B];g[$++]=U}}}}return e.makeTensorInfo([h,c,u,f],o.dtype,g)}const yO={kernelName:Ql,backendName:"cpu",kernelFunc:bO};function wO(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s;it([r,o],"resizeNearestNeighborGrad");const a=pt(o.shape),l=pt(r.shape),[c,u,h,d]=o.shape,[,p,f]=r.shape,m=new Float32Array(c*u*h*d),g=e.data.get(r.dataId).values,x=[i&&p>1?u-1:u,i&&f>1?h-1:h],b=[i&&p>1?p-1:p,i&&f>1?f-1:f],w=x[0]/b[0],y=x[1]/b[1],$=1/w,C=1/y,v=Math.ceil($)*2+2,k=Math.ceil(C)*2+2;for(let N=0;N<c;N++){const T=N*a[0];for(let F=0;F<u;F++){const z=T+F*a[1],M=Math.floor(F*$),L=Math.floor(M-v/2);for(let O=0;O<h;O++){const B=z+O*a[2],U=Math.floor(O*C),W=Math.floor(U-k/2);for(let q=0;q<d;q++){let X=0;for(let K=0;K<v;K++){const Q=K+L;if(Q<0||Q>=p)continue;const Z=T+Q*l[1],tt=Q*w,J=Math.min(u-1,i?Math.round(tt):Math.floor(tt));if(F===J)for(let rt=0;rt<k;rt++){const at=rt+W;if(at<0||at>=f)continue;const ht=Z+at*l[2],ft=at*y,yt=Math.min(h-1,i?Math.round(ft):Math.floor(ft));O===yt&&(X+=g[ht+q])}}m[B+q]=X}}}}return e.makeTensorInfo(o.shape,o.dtype,m)}const $O={kernelName:Rh,backendName:"cpu",kernelFunc:wO};function CO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s;it(o,"reverse");const i=o.shape.length,a=Ct(r,o.shape);if(i===0)return ss({inputs:{x:o},backend:e});const l=new De(o.shape,o.dtype),c=e.bufferSync(o);for(let u=0;u<l.size;u++){const h=l.indexToLoc(u),d=h.slice();a.forEach(p=>d[p]=o.shape[p]-1-d[p]),l.set(c.get(...d),...h)}return e.makeTensorInfo(l.shape,l.dtype,l.values)}const IO={kernelName:ec,backendName:"cpu",kernelFunc:CO};const vO={kernelName:Gh,backendName:"cpu",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=ve(s.dtype,H(s.shape)),[c,u,h,d]=s.shape,[p,f]=Bd(i,u,h),m=255,g=Math.sin(o),x=Math.cos(o),b=a.data.get(s.dataId).values;for(let y=0;y<c;y++){const $=y*h*u*d;for(let C=0;C<u;C++){const v=C*(h*d);for(let k=0;k<h;k++){const N=k*d;for(let T=0;T<d;T++){const F=[c,C,k,T],z=F[2],M=F[1];let L=(z-p)*x-(M-f)*g,O=(z-p)*g+(M-f)*x;L=Math.round(L+p),O=Math.round(O+f);let B=r;if(typeof r!="number"&&(T===3?B=m:B=r[T]),L>=0&&L<h&&O>=0&&O<u){const W=O*(h*d),q=L*d,X=$+W+q+T;B=b[X]}const U=$+v+N+T;l[U]=B}}}}return{dataId:a.write(l,s.shape,s.dtype),shape:s.shape,dtype:s.dtype}}};const kO=At(Di,n=>{const t=Math.floor(n);return n-t<.5?Math.floor(n):n-t>.5?Math.ceil(n):t%2===0?t:t+1}),SO={kernelName:Di,backendName:"cpu",kernelFunc:kO};function NO(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Ki(r,o,i),d=!0,p=e.bufferSync(o),f=e.bufferSync(r),m=Go(p,f,i,h,c,l,a,u,0,d);return e.makeTensorInfo(i,m.dtype,m.values)}const TO={kernelName:Km,backendName:"cpu",kernelFunc:NO};function EO(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<t?e=o+1:s=o;return s}function RO(n,t){let e=0,s=n.length,o=0;for(;e<s;)o=Math.floor((e+s)/2),n[o]<=t?e=o+1:s=o;return s}function DO(n,t,e,s,o,r){const i=le("int32",e*o);for(let a=0;a<e;++a){const l=n.slice(a*s,(a+1)*s),c=a*o;for(let u=0;u<o;++u)i[c+u]=r==="left"?EO(l,t[u+c]):RO(l,t[u+c])}return i}function AO(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,c=DO(a,l,o.shape[0],o.shape[1],r.shape[1],i);return e.makeTensorInfo(r.shape,"int32",c)}const FO={kernelName:Xm,backendName:"cpu",kernelFunc:AO};function _O(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t;it([s,o,r],"select");const i=s.shape.length,a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=Je(o.dtype,r.dtype),h=Fe(H(o.shape),u);let d=0;const p=i===0||i>1||o.shape.length===1?1:H(o.shape.slice(1));for(let f=0;f<a.length;f++)for(let m=0;m<p;m++)a[f]===1?h[d++]=l[f]:h[d++]=c[f];return e.makeTensorInfo(o.shape,u,h)}const OO={kernelName:nc,backendName:"cpu",kernelFunc:_O};const LO=Cc,MO=Ic,PO=At(Fi,n=>n>=0?MO*n:LO*(Math.exp(n)-1)),zO={kernelName:Fi,backendName:"cpu",kernelFunc:PO};const BO=At(Li,n=>n<0?-1:n>0?1:0),VO={kernelName:Li,backendName:"cpu",kernelFunc:BO};const WO=At(_i,n=>Math.sin(n)),UO={kernelName:_i,backendName:"cpu",kernelFunc:WO};const GO=At(Oi,n=>Math.sinh(n)),HO={kernelName:Oi,backendName:"cpu",kernelFunc:GO};const qO=11920928955078125e-23,Qf=Math.log(qO)+2,jO=At(Pi,n=>{const t=n>-Qf,e=n<Qf,s=Math.exp(n);let o;return e?o=s:t?o=n:o=Math.log(1+s),o}),KO={kernelName:Pi,backendName:"cpu",kernelFunc:jO};function XO(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;it([o],"spaceToBatchND");const a=H(r),l=[[0,0]];l.push(...i);for(let C=1+r.length;C<o.shape.length;++C)l.push([0,0]);const c=cy.kernelFunc({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),u=ta(c.shape,r,a,!1),h=ea(u.length,r.length,!1),d=na(c.shape,r,a,!1),m=Bt({inputs:{x:c},backend:e,attrs:{shape:u}}),b=Ge({inputs:{x:m},backend:e,attrs:{perm:h}}),$=Bt({inputs:{x:b},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(b),$}const YO={kernelName:rc,backendName:"cpu",kernelFunc:XO};function ZO(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.data.get(s.dataId).values,l=e.data.get(o.dataId).values,c=e.data.get(r.dataId).values,u=e.data.get(i.dataId).values[0],[h,d,p,f,m]=L1(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const JO={kernelName:Ah,backendName:"cpu",kernelFunc:ZO};function QO(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.data.get(o.dataId).values),a=e.data.get(s.dataId).values,l=Array.from(e.data.get(r.dataId).values),[c,u,h]=M1(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const tL={kernelName:Fh,backendName:"cpu",kernelFunc:QO};function eL(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=Ep(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const nL={kernelName:_h,backendName:"cpu",kernelFunc:eL};function sL(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${r.shape}`);if(o.shape[0]!==r.shape[0])throw new Error("segmentIds and indices should have same size.");const i=e.data.get(s.dataId).values,a=e.data.get(o.dataId).values,l=e.data.get(r.dataId).values,[c,u]=Ep(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const oL={kernelName:Oh,backendName:"cpu",kernelFunc:sL};function rL(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Ki(r,o,a),p=!1,f=e.bufferSync(o);let m;switch(r.dtype){case"bool":{const g=e.bufferSync(r),x=Boolean(e.data.get(i.dataId).values[0]);m=Go(f,g,a,d,u,c,l,h,x,p);break}case"float32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Go(f,g,a,d,u,c,l,h,x,p);break}case"int32":{const g=e.bufferSync(r),x=e.data.get(i.dataId).values[0];m=Go(f,g,a,d,u,c,l,h,x,p);break}case"string":{const g=e.bufferSync(r),x=Es(e.data.get(i.dataId).values[0]);m=Go(f,g,a,d,u,c,l,h,x,p);break}default:throw new Error(`Unsupported type ${r.dtype}`)}return e.makeTensorInfo(a,m.dtype,m.values)}const iL={kernelName:Ym,backendName:"cpu",kernelFunc:rL};function aL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Ct(i,o.shape)[0],l=ep(o,r,a),c=new Array(o.shape.length).fill(0),u=o.shape.slice();return l.map(h=>{const d=[...u];d[a]=h;const p=ko({inputs:{x:o},backend:e,attrs:{begin:c,size:d}});return c[a]+=h,p})}const lL={kernelName:ic,backendName:"cpu",kernelFunc:aL};const cL={kernelName:Lh,backendName:"cpu",kernelFunc:({inputs:n,backend:t})=>{const{x:e}=n,s=t;it(e,"square");const o=s.data.get(e.dataId).values,r=new Float32Array(o.length);for(let a=0;a<o.length;++a){const l=o[a];r[a]=l*l}return{dataId:s.write(r,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};const uL=At(Hi,(n,t)=>{const e=t;return isNaN(n)?NaN:n>0?1:e.alpha}),hL={kernelName:Hi,backendName:"cpu",kernelFunc:uL};function dL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s;it(o,"stridedSlice");const{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=ed(o.shape,r,i,a,l,c,u,h,d);let $;if(m)$=Bt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){I(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const C=Jh(b,w,y),v=ko({inputs:{x:o},backend:e,attrs:{begin:b,size:C}});$=Bt({inputs:{x:v},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(v)}else{const C=e.bufferSync(o),v=z1(p,C,y,b);$=e.makeTensorInfo(f,v.dtype,v.values)}return $}const pL={kernelName:Mh,backendName:"cpu",kernelFunc:dL};function fL(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.data.get(u.dataId).values,p=e.data.get(h.dataId).values,[f,m]=B1(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const mL={kernelName:Ph,backendName:"cpu",kernelFunc:fL};function gL(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.data.get(r.dataId).values,l=e.data.get(i.dataId).values[0],[c,u,h]=V1(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const xL={kernelName:zh,backendName:"cpu",kernelFunc:gL};function bL(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.data.get(r.dataId).values,a=W1(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const yL={kernelName:Bh,backendName:"cpu",kernelFunc:bL};const wL=At(Wi,n=>Math.tan(n)),$L={kernelName:Wi,backendName:"cpu",kernelFunc:wL};const CL=At(Ui,n=>Math.tanh(n)),IL={kernelName:Ui,backendName:"cpu",kernelFunc:CL};function vL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;it(o,"tile");const i=G1(e.bufferSync(o),r);return e.makeTensorInfo(i.shape,i.dtype,i.values)}const kL={kernelName:Gi,backendName:"cpu",kernelFunc:vL};function SL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s;it(o,"topk");const a=e.data.get(o.dataId).values,[l,c]=q1(a,o.shape,o.dtype,r,i);return[e.makeTensorInfo(l.shape,l.dtype,l.values),e.makeTensorInfo(c.shape,c.dtype,c.values)]}const NL={kernelName:Vh,backendName:"cpu",kernelFunc:SL};function TL(n){const{inputs:t,attrs:e,backend:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=e,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=pt(o.shape),b=x[0],w=x[1],y=x[2],$=pt(g),C=$[0],v=$[1],k=$[2],N=ve(o.dtype,H(g));N.fill(l);const T=s.data.get(o.dataId).values,F=s.data.get(r.dataId).values;for(let M=0;M<u;++M){const L=r.shape[0]===1?F:F.subarray(M*8,M*8+8);for(let O=0;O<f;++O)for(let B=0;B<m;++B)for(let U=0;U<p;++U){let W;const q=L[6]*B+L[7]*O+1;if(q===0)continue;const X=(L[0]*B+L[1]*O+L[2])/q,K=(L[3]*B+L[4]*O+L[5])/q,Q=tm(X,d,a),Z=tm(K,h,a);switch(i){case"nearest":W=_L(T,h,d,b,w,y,M,Z,Q,U,l);break;case"bilinear":W=OL(T,h,d,b,w,y,M,Z,Q,U,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const tt=M*C+O*v+B*k+U;N[tt]=W}return s.makeTensorInfo(g,o.dtype,N)}return{dataId:s.write(N,g,o.dtype),shape:o.shape,dtype:o.dtype}}const EL={kernelName:Wh,backendName:"cpu",kernelFunc:TL};function tm(n,t,e){switch(e){case"reflect":return RL(n,t);case"wrap":return DL(n,t);case"nearest":return FL(n,t);case"constant":default:return AL(n)}}function RL(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=2*t;e<s&&(e=s*Math.trunc(-e/s)+e),e=e<-t?e+s:-e-1}else if(e>t-1)if(t<=1)e=0;else{const s=2*t;e-=s*Math.trunc(e/s),e>=t&&(e=s-e-1)}return ho(0,e,t-1)}function DL(n,t){let e=n;if(e<0)if(t<=1)e=0;else{const s=t-1;e+=t*(Math.trunc(-e/s)+1)}else if(e>t-1)if(t<=1)e=0;else{const s=t-1;e-=t*Math.trunc(e/s)}return ho(0,e,t-1)}function AL(n,t){return n}function FL(n,t){return ho(0,n,t-1)}function Fr(n,t,e,s,o,r,i,a,l,c,u){const h=i*s+a*o+l*r+c;return 0<=a&&a<t&&0<=l&&l<e?n[h]:u}function _L(n,t,e,s,o,r,i,a,l,c,u){const h=Math.round(a),d=Math.round(l);return Fr(n,t,e,s,o,r,i,h,d,c,u)}function OL(n,t,e,s,o,r,i,a,l,c,u){const h=Math.floor(a),d=Math.floor(l),p=h+1,f=d+1,m=(f-l)*Fr(n,t,e,s,o,r,i,h,d,c,u)+(l-d)*Fr(n,t,e,s,o,r,i,h,f,c,u),g=(f-l)*Fr(n,t,e,s,o,r,i,p,d,c,u)+(l-d)*Fr(n,t,e,s,o,r,i,p,f,c,u);return(p-a)*m+(a-h)*g}function LL(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;it(r,"unique");const i=s.data.get(r.dataId).values,{outputValues:a,outputShape:l,indices:c}=j1(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const ML={kernelName:Uh,backendName:"cpu",kernelFunc:LL};function PL(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o.shape.length,a=o.shape[r],l=new Array(i-1);let c=0;for(let p=0;p<i;p++)p!==r&&(l[c++]=o.shape[p]);const u=new Array(i).fill(0),h=o.shape.slice();h[r]=1;const d=new Array(a);for(let p=0;p<d.length;p++){u[r]=p;const f=ko({inputs:{x:o},backend:e,attrs:{begin:u,size:h}});d[p]=Bt({inputs:{x:f},backend:e,attrs:{shape:l}}),e.disposeIntermediateTensorInfo(f)}return d}const zL={kernelName:lc,backendName:"cpu",kernelFunc:PL};function BL(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s;it(o,"unsortedSegmentSum");const a=o.shape.length,l=r.shape.length,c=[],u=[],h=a-l;let d=r;for(let f=0;f<h;++f){const m=rl({inputs:{input:d},backend:e,attrs:{dim:f+1}});d=m,u.push(m)}for(let f=0;f<i;++f){const m=Ms(f,"int32"),g=e.makeTensorInfo([],"int32",m),x=u1({inputs:{a:g,b:d},backend:e}),b=Os({inputs:{x},backend:e,attrs:{dtype:"float32"}}),w=Oc({inputs:{a:b,b:o},backend:e}),y=ha({inputs:{x:w},backend:e,attrs:{axis:0,keepDims:!1}});c.push(y),u.push(g),u.push(x),u.push(b),u.push(w),u.push(y)}const p=ly({inputs:c,backend:e,attrs:{axis:0}});return u.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const VL={kernelName:cc,backendName:"cpu",kernelFunc:BL};const WL=[MD,IR,zD,VD,ER,UD,HD,jD,XD,ZD,QD,eA,sA,iA,lA,hA,pA,mA,xA,OD,yA,$A,IA,kA,NR,DR,NA,vR,EA,DA,AA,_A,LA,PA,BA,WA,GA,qA,KA,YA,JA,tF,nF,sF,rF,aF,cF,uF,hF,dF,mF,TD,xF,AR,kF,FR,SF,OR,AF,FF,OF,MR,PF,BF,WF,GF,qF,zR,VR,kR,KF,RA,YF,JF,t_,ED,UR,HR,n_,jR,o_,a_,c_,d_,f_,g_,x_,XR,y_,$_,I_,k_,N_,E_,D_,ZR,F_,L_,z_,QR,eD,W_,H_,K_,sD,Y_,J_,Q_,cy,sO,DD,iD,rO,aO,cO,hO,SR,Uu,pO,AD,FD,_D,mO,xO,yO,$O,IO,vO,SO,fD,TO,FO,OO,zO,gD,VO,UO,HO,xD,M_,KO,YO,JO,tL,nL,oL,iL,lL,wD,cL,CD,hL,pL,mL,xL,yL,SD,pF,$L,IL,kL,NL,EL,oD,ML,zL,VL,Z_];for(const n of WL)Jm(n);const so={},ka={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function UL(n,t){so[n]=t}function zn(n,t){if(!(n in so)||t!=null){const s=HL(n,t);if(s!==null)so[n]=s;else return console.log("Could not get context for WebGL version",n),null}const e=so[n];return e==null||e.isContextLost()?(delete so[n],zn(n)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),so[n])}function GL(n){if(typeof OffscreenCanvas<"u"&&n===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function HL(n,t){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const e=t??GL(n);return e.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete so[n]},!1),V().getBool("SOFTWARE_WEBGL_ENABLED")&&(ka.failIfMajorPerformanceCaveat=!1),n===1?e.getContext("webgl",ka)||e.getContext("experimental-webgl",ka):e.getContext("webgl2",ka)}var Hr;(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(Hr||(Hr={}));var rn;(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(rn||(rn={}));var Ie;(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Ie||(Ie={}));function da(n,t){return[t,n]}function qL(n,t){return n*t}function Sa(n){const t=H(n),e=Math.ceil(t/4);return au(e)}function xr(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function jL(n,t){const[e,s]=xr(n,t);return e*s*4}function _p(n,t){const e=n;let s,o,r,i,a,l,c,u,h,d;return V().getNumber("WEBGL_VERSION")===2?(s=e.R32F,o=e.R16F,r=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,u=1,h=e.HALF_FLOAT,d=e.FLOAT,l=e.RGBA8):(s=n.RGBA,o=n.RGBA,r=n.RGBA,i=e.RGBA,a=n.RGBA,c=4,u=4,h=t!=null?t.HALF_FLOAT_OES:null,d=n.FLOAT,l=n.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:u,textureTypeHalfFloat:h,textureTypeFloat:d}}function ot(n,t){const e=t();return V().getBool("DEBUG")&&KL(n),e}function KL(n){const t=n.getError();if(t!==n.NO_ERROR)throw new Error("WebGL Error: "+JL(n,t))}const XL=596e-10,YL=65504;function ZL(n){return!!(V().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||XL<Math.abs(n)&&Math.abs(n)<YL)}function JL(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function Na(n,t){return gs(n,()=>n.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function QL(n,t){const e=gs(n,()=>n.createShader(n.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ot(n,()=>n.shaderSource(e,t)),ot(n,()=>n.compileShader(e)),n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function tM(n,t){const e=gs(n,()=>n.createShader(n.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ot(n,()=>n.shaderSource(e,t)),ot(n,()=>n.compileShader(e)),V().get("ENGINE_COMPILE_ONLY"))return e;if(n.getShaderParameter(e,n.COMPILE_STATUS)===!1)throw uy(t,n.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}const eM=/ERROR: [0-9]+:([0-9]+):/g;function uy(n,t){const e=eM.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(n);return}const s=+e[1],o=n.split(`
`),r=o.length.toString().length+2,i=o.map((h,d)=>Ho((d+1).toString(),r)+h);let a=0;for(let h=0;h<i.length;h++)a=Math.max(i[h].length,a);const l=i.slice(0,s-1),c=i.slice(s-1,s),u=i.slice(s);console.log(l.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${Ho(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function nM(n){return gs(n,()=>n.createProgram(),"Unable to create WebGLProgram.")}function sM(n,t){if(ot(n,()=>n.linkProgram(t)),!V().get("ENGINE_COMPILE_ONLY")&&n.getProgramParameter(t,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function tu(n,t){if(ot(n,()=>n.validateProgram(t)),n.getProgramParameter(t,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function oM(n,t){const e=gs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ot(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),ot(n,()=>n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function rM(n,t){const e=gs(n,()=>n.createBuffer(),"Unable to create WebGLBuffer");return ot(n,()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e)),ot(n,()=>n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW)),e}function iM(n){return gs(n,()=>n.createTexture(),"Unable to create WebGLTexture.")}function aM(n,t){const e=V().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){const s=`[${n}x${t}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(n>e||t>e){const s=`[${n}x${t}]`,o=`[${e}x${e}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function lM(n){return gs(n,()=>n.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function em(n,t,e,s,o,r,i){const a=n.getAttribLocation(t,e);return a===-1?!1:(ot(n,()=>n.bindBuffer(n.ARRAY_BUFFER,s)),ot(n,()=>n.vertexAttribPointer(a,o,n.FLOAT,!1,r,i)),ot(n,()=>n.enableVertexAttribArray(a)),!0)}function cM(n,t,e){fM(n,e),ot(n,()=>n.activeTexture(n.TEXTURE0+e)),ot(n,()=>n.bindTexture(n.TEXTURE_2D,t))}function uM(n,t,e){return gs(n,()=>n.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function hM(n,t,e){return n.getUniformLocation(t,e)}function dM(n,t,e,s){ot(n,()=>cM(n,t,s)),ot(n,()=>n.uniform1i(e,s))}function eu(n,t,e){ot(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,e)),ot(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t,0))}function nm(n,t){ot(n,()=>n.bindFramebuffer(n.FRAMEBUFFER,t)),ot(n,()=>n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0))}function Ta(n){const t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+pM(n,t))}function pM(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function gs(n,t,e){const s=ot(n,()=>t());if(s==null)throw new Error(e);return s}function fM(n,t){const e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=t+n.TEXTURE0;if(s<n.TEXTURE0||s>e){const o=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${o}.`)}}function ir(n,t=2){return H(n.slice(0,n.length-t))}function ar(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Ea(n){let t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[ir(n),...ar(n)]),t}function mM(n,t=!1){let e=V().getNumber("WEBGL_MAX_TEXTURE_SIZE"),s=V().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");s===1/0&&V().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(s=e/2),t&&(e=e*2,s=s*2,n=n.map((a,l)=>l>=n.length-2?Yu(n[l]):n[l]),n.length===1&&(n=[2,n[0]])),n.length!==2&&(n=Ls(n).newShape);let o=H(n),r=null;n.length<=1&&o<=e?r=[1,o]:n.length===2&&n[0]<=e&&n[1]<=e?r=n:n.length===3&&n[0]*n[1]<=e&&n[2]<=e?r=[n[0]*n[1],n[2]]:n.length===3&&n[0]<=e&&n[1]*n[2]<=e?r=[n[0],n[1]*n[2]]:n.length===4&&n[0]*n[1]*n[2]<=e&&n[3]<=e?r=[n[0]*n[1]*n[2],n[3]]:n.length===4&&n[0]<=e&&n[1]*n[2]*n[3]<=e&&(r=[n[0],n[1]*n[2]*n[3]]);const i=r!=null&&Math.max(...r)>s&&Math.min(...r)<=(t?2:1)&&Math.min(...r)>0;if(r==null||i)if(t){const a=ir(n);let l=2,c=2;n.length&&([l,c]=ar(n)),o=a*(l/2)*(c/2),r=au(o).map(u=>u*2)}else r=au(o);return r}function Ra(n){return n%2===0}function al(n,t){if(n=n.slice(-2),t=t.slice(-2),Rt(n,t)||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){const e=n.slice(-1)[0],s=t.slice(-1)[0];if(e===s||Ra(e)&&Ra(s)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Ra(n[0])&&Ra(t[0])}let nu,su;function gM(n){if(nu==null){const t=zn(n);nu=t.getParameter(t.MAX_TEXTURE_SIZE)}return nu}function xM(n){if(su==null){const t=zn(n);su=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,su)}function bM(n){if(n===0)return 0;let t;const e=zn(n);return wn(e,"EXT_disjoint_timer_query_webgl2")&&n===2?t=2:wn(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function wn(n,t){return n.getExtension(t)!=null}function sm(n){try{if(zn(n)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function yM(n){if(n===0)return!1;const t=zn(n);if(n===1){if(!wn(t,"OES_texture_float"))return!1}else if(!wn(t,"EXT_color_buffer_float"))return!1;return Hu(t)}function wM(n){if(n===0)return!1;const t=zn(n);if(n===1){if(!wn(t,"OES_texture_float")||!wn(t,"WEBGL_color_buffer_float"))return!1}else{if(wn(t,"EXT_color_buffer_float"))return Hu(t);const s="EXT_color_buffer_half_float";if(wn(t,s)){const o=t.getExtension(s);return $M(t,o)}return!1}return Hu(t)}function Hu(n){const t=_p(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e);const s=1,o=1;n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,s,o,0,t.textureFormatFloat,t.textureTypeFloat,null);const r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);const i=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),i}function $M(n,t){const e=_p(n,t),s=n.createTexture();n.bindTexture(n.TEXTURE_2D,s);const o=1,r=1;n.texImage2D(n.TEXTURE_2D,0,e.internalFormatHalfFloat,o,r,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);const i=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s,0);const a=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(s),n.deleteFramebuffer(i),a}function CM(n){return n!==2?!1:zn(n).fenceSync!=null}function pa(n,t){Array.isArray(n)||(n=[n]),n.forEach(e=>{e!=null&&I(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}const ut=V();ut.registerFlag("HAS_WEBGL",()=>ut.getNumber("WEBGL_VERSION")>0);ut.registerFlag("WEBGL_VERSION",()=>sm(2)?2:sm(1)?1:0);ut.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);ut.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>ut.get("WEBGL_VERSION")===2);ut.registerFlag("WEBGL_CPU_FORWARD",()=>!0);ut.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);ut.registerFlag("WEBGL_PACK",()=>ut.getBool("HAS_WEBGL"));ut.registerFlag("WEBGL_PACK_NORMALIZATION",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_CLIP",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_PACK_REDUCE",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_LAZILY_UNPACK",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_CONV_IM2COL",()=>ut.getBool("WEBGL_PACK"));ut.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>gM(ut.getNumber("WEBGL_VERSION")));ut.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>xM(ut.getNumber("WEBGL_VERSION")));ut.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const n=ut.getNumber("WEBGL_VERSION");return n===0?0:bM(n)});ut.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>ut.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!ug());ut.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>yM(ut.getNumber("WEBGL_VERSION")));ut.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>ut.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:ut.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));ut.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>wM(ut.getNumber("WEBGL_VERSION")));ut.registerFlag("WEBGL_FENCE_API_ENABLED",()=>CM(ut.getNumber("WEBGL_VERSION")));ut.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>ut.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);ut.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,n=>{if(n<0&&n!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${n}.`)});ut.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>ug()?1:-1,n=>{if(n<0&&n!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${n}.`)});ut.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);ut.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);ut.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);ut.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);ut.registerFlag("WEBGL_EXP_CONV",()=>!1);ut.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>ut.getBool("IS_TEST"));ut.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);ut.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);ut.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);ut.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function ze(){let n,t,e,s,o,r,i,a,l,c;return V().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=V().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:c}}function Fo(n,t,e="index"){const s=pt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / ${o}`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * ${o}`:`index -= ${n[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Lc(n,t,e="index"){const s=pt(t);return s.map((o,r)=>{const i=`int ${n[r]} = ${e} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${n[r+1]} = ${e} - ${n[r]} * outShapeStrides[${r}]`:`index -= ${n[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function IM(n,t){const e=n.length,s=n.map(r=>`${t}[${r}]`),o=new Array(e-1);o[e-2]=s[e-1];for(let r=e-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function vM(n,t,e="index"){const s=n.map((r,i)=>i),o=IM(s,t);return o.map((r,i)=>{const a=`int ${n[i]} = ${e} / ${o[i]}`,l=i===o.length-1?`int ${n[i+1]} = ${e} - ${n[i]} * ${o[i]}`:`index -= ${n[i]} * ${o[i]}`;return`${a}; ${l};`}).join("")}function Op(n){const t=pt(n).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function Lp(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const hy=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;const{getBroadcastDims:dy}=C2;function kM(n,t,e){const s=[];if(n.forEach(p=>{const f=H(p.shapeInfo.logicalShape);if(p.shapeInfo.isUniform?s.push(`uniform float ${p.name}${f>1?`[${f}]`:""};`):(s.push(`uniform sampler2D ${p.name};`),s.push(`uniform int offset${p.name};`)),e.enableShapeUniforms){const{uniformShape:m}=Mp(e.packedInputs,p.shapeInfo.logicalShape,p.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${p.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${p.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${p.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${p.name}Shape;`);break}s.push(`uniform ivec2 ${p.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(p=>{s.push(`uniform ${p.type} ${p.name}${p.arrayIndex?`[${p.arrayIndex}]`:""};`)});const o=s.join(`
`),r=n.map(p=>SM(p,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=ze(),l=EM(a);let c,u,h=AM(a);return t.isPacked?(c=NM(t.logicalShape,i,e.enableShapeUniforms),u=DM(a)):(c=TM(t.logicalShape,i,e.enableShapeUniforms),u=RM(a)),e.packedInputs&&(h+=LM),[h,l,u,o,c,r,e.userCode].join(`
`)}function br(n,t=!1){const e=n.shapeInfo.logicalShape;switch(e.length){case 0:return KM(n,t);case 1:return YM(n,t);case 2:return JM(n,t);case 3:return t3(n,t);case 4:return n3(n,t);case 5:return s3(n);case 6:return o3(n);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function py(n,t){switch(n.shapeInfo.logicalShape.length){case 0:return jM(n);case 1:return XM(n,t);case 2:return ZM(n,t);case 3:return QM(n,t);default:return e3(n,t)}}function SM(n,t,e=!1,s){let o="";e?o+=py(n,s):o+=br(n,s);const r=n.shapeInfo.logicalShape,i=t.logicalShape;return r.length<=i.length&&(e?o+=r3(n,t):o+=i3(n,t)),o}function NM(n,t,e){switch(n.length){case 0:return fy();case 1:return MM(n,t,e);case 2:return HM(n,t,e);case 3:return zM(n,t,e);default:return VM(n,t,e)}}function TM(n,t,e){switch(n.length){case 0:return fy();case 1:return PM(n,t,e);case 2:return qM(n,t,e);case 3:return BM(n,t,e);case 4:return WM(n,t,e);case 5:return UM(n,t);case 6:return GM(n,t);default:throw new Error(`${n.length}-D output sampling is not yet supported`)}}function EM(n){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${n.texture2D}(textureSampler, uv).r;
    }
  `}function RM(n){return`
    void setOutput(float val) {
      ${n.output} = vec4(val, 0, 0, 0);
    }
  `}function DM(n){return`
    void setOutput(vec4 val) {
      ${n.output} = val;
    }
  `}function AM(n){return`${n.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${n.varyingFs} vec2 resultUV;
    ${n.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${n.defineSpecialNaN}
    ${n.defineSpecialInf}
    ${n.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${FM}
    ${_M}
    ${OM}
  `}const FM=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,_M=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,OM=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,LM=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function fy(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function MM(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return s[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function PM(n,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function zM(n,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[2]/2),r=o*Math.ceil(n[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function BM(n,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Lc(["r","c","d"],n)}
    return ivec3(r, c, d);
  }
`;const s=Fo(["r","c","d"],n);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function VM(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],o=Math.ceil(n[n.length-1]/2),r=o*Math.ceil(n[n.length-2]/2);let i=r,a="",l="b, r, c";for(let c=2;c<n.length-1;c++)i*=n[n.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,l=`b${c}, `+l;return`
    ivec${n.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${n.length}(${l});
    }
  `}function WM(n,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Lc(["r","c","d","d2"],n)}
      return ivec4(r, c, d, d2);
    }
  `;const s=Fo(["r","c","d","d2"],n);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function UM(n,t){const e=Fo(["r","c","d","d2","d3"],n);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function GM(n,t){const e=Fo(["r","c","d","d2","d3","d4"],n);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function HM(n,t,e){const s=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(Rt(n,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(n[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function qM(n,t,e){return Rt(n,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:n[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:n[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${n[1]};
      int c = index - r * ${n[1]};
      return ivec2(r, c);
    }
  `}function _o(n){return`offset${n}`}function jM(n){const t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),s=ze();return`
    vec4 ${e}() {
      return ${s.texture2D}(${t}, halfCR);
    }
  `}function KM(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`float ${s}() {return ${e};}`;const[o,r]=n.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${e}, halfCR);
      }
    `;const i=_o(e);if(t)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;const[a,l]=n.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function XM(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=n.shapeInfo.texShape,r=ze();if(t)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${e}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${e}, uv);
    }
  `}function YM(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${yr(n)}
      }
    `;const o=n.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;const a=_o(e);return i===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${e}, uv);
      }
    `:r===1?t?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function ZM(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=r[0],a=r[1],l=ze();if(r!=null&&Rt(e,r))return t?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${l.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${s}, uv);
      }
    `;if(t)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `;const c=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(e[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${c[0]}, ${c[1]}, row, col);
      return ${l.texture2D}(${s}, uv);
    }
  `}function JM(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape;if(r!=null&&Rt(e,r)){if(t)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const d=r[0],p=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${p}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=Ls(e),l=i;if(l.length<e.length){const d=wr(n,l),p=["row","col"];return`
      ${br(d,t)}
      float ${o}(int row, int col) {
        return ${o}(${$r(p,a)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${yr(n)}
      }
    `;const c=r[0],u=r[1],h=_o(s);return u===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${s}, uv);
    }
  `:c===1?t?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${h}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${h}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:t?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${h};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${h};
    vec2 uv = uvFromFlat(${c}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function QM(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(e[0]===1){const d=e.slice(1),p=[1,2],f=wr(n,d),m=["b","row","col"];return`
        ${py(f,t)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${$r(m,p)});
        }
      `}const a=ze();if(t)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const l=i[0],c=i[1],u=Math.ceil(e[2]/2),h=u*Math.ceil(e[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${c}, ${h}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function t3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[1]*e[2],i=e[2],{newShape:a,keptDims:l}=Ls(e),c=a;if(c.length<e.length){const m=wr(n,c),g=["row","col","depth"];return`
        ${br(m,t)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${$r(g,l)});
        }
      `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${yr(n)}
      }
    `;const u=n.shapeInfo.texShape,h=u[0],d=u[1],p=n.shapeInfo.flatOffset;if(d===r&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${d}.0, ${h}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(d===i&&p==null)return t?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${d}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `;const f=_o(s);return t?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${f};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${f};
        vec2 uv = uvFromFlat(${h}, ${d}, index);
        return sampleTexture(${s}, uv);
      }
  `}function e3(n,t){const e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=ze();if(t)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${e}, uv);
    }
  `;const r=n.shapeInfo.logicalShape,i=r.length,a=n.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=l[0],u=l[1],h=Math.ceil(r[i-1]/2);let d=h*Math.ceil(r[i-2]/2),p="int b, int row, int col",f=`b * ${d} + (row / 2) * ${h} + (col / 2)`;for(let m=2;m<i-1;m++)p=`int b${m}, `+p,d*=r[i-m-1],f=`b${m} * ${d} + `+f;return`
    vec4 ${s}(${p}) {
      int index = ${f};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${c});
      return ${o.texture2D}(${e}, uv);
    }
  `}function n3(n,t){const e=n.shapeInfo.logicalShape,s=n.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=e[3],i=e[2]*r,a=e[1]*i,{newShape:l,keptDims:c}=Ls(e);if(l.length<e.length){const b=wr(n,l),w=["row","col","depth","depth2"];return`
      ${br(b,t)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${$r(w,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${yr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1],f=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(p===a&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${f}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(p===r&&u==null)return t?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=_o(s);return t?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${f}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${d}, ${p}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function s3(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),o=t[4],r=t[3]*o,i=t[2]*r,a=t[1]*i,{newShape:l,keptDims:c}=Ls(t);if(l.length<t.length){const m=wr(n,l),g=["row","col","depth","depth2","depth3"];return`
      ${br(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${$r(g,c)});
      }
    `}if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${yr(n)}
      }
    `;const u=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,d=h[0],p=h[1];if(p===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(p===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;const f=_o(e);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${f};
      vec2 uv = uvFromFlat(${d}, ${p}, index);
      return sampleTexture(${e}, uv);
    }
  `}function o3(n){const t=n.shapeInfo.logicalShape,e=n.name,s="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:o,keptDims:r}=Ls(t);if(o.length<t.length){const g=wr(n,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${br(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${$r(x,r)});
      }
    `}const i=t[5],a=t[4]*i,l=t[3]*a,c=t[2]*l,u=t[1]*c;if(n.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${c}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${yr(n)}
      }
    `;const h=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,p=d[0],f=d[1];if(f===u&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===i&&h==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${p}.0);
        return sampleTexture(${e}, uv);
      }
    `;const m=_o(e);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${c} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${p}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function yr(n){const t=n.name,e=H(n.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function r3(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=n.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=dy(n.shapeInfo.logicalShape,t.logicalShape),l=Vt(i),c=i-r;let u;const h=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(b=>`coords.${h[b+c]} = 0;`).join(`
`);let d="";i<2&&r>0?d="coords":d=n.shapeInfo.logicalShape.map((b,w)=>`coords.${h[w+c]}`).join(", ");let p="return outputValue;";const m=H(n.shapeInfo.logicalShape)===1,x=H(t.logicalShape)===1;if(r===1&&!m&&!x)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?p=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:p=`
        return vec4(outputValue.x);
      `;else if(a.length){const b=r-2,w=r-1;a.indexOf(b)>-1&&a.indexOf(w)>-1?p="return vec4(outputValue.x);":a.indexOf(b)>-1?p="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(p="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${l} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${d});
      ${p}
    }
  `}function i3(n,t){const e=n.name,s=e.charAt(0).toUpperCase()+e.slice(1),o="get"+s+"AtOutCoords",r=t.texShape,i=n.shapeInfo.texShape,a=n.shapeInfo.logicalShape.length,l=t.logicalShape.length;if(!n.shapeInfo.isUniform&&a===l&&n.shapeInfo.flatOffset==null&&Rt(i,r))return`
      float ${o}() {
        return sampleTexture(${e}, resultUV);
      }
    `;const c=Vt(l),u=dy(n.shapeInfo.logicalShape,t.logicalShape),h=l-a;let d;const p=["x","y","z","w","u","v"];a===0?d="":l<2&&u.length>=1?d="coords = 0;":d=u.map(m=>`coords.${p[m+h]} = 0;`).join(`
`);let f="";return l<2&&a>0?f="coords":f=n.shapeInfo.logicalShape.map((m,g)=>`coords.${p[g+h]}`).join(", "),`
    float ${o}() {
      ${c} coords = getOutputCoords();
      ${d}
      return get${s}(${f});
    }
  `}function Vt(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function Mp(n,t,e){const{newShape:s,keptDims:o}=Ls(t),r=t.length,i=n&&r===3&&t[0]===1,a=i?t.slice(1):s,l=!n&&r>1&&!Rt(t,e)&&s.length<r||i;return{useSqueezeShape:l,uniformShape:l?a:t,keptDims:o}}function wr(n,t){const e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function $r(n,t){return t.map(e=>n[e]).join(", ")}function a3(n,t,e,s){const o=e.map((u,h)=>{const d={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(d.flatOffset=u.texData.slice.flatOffset),{name:t.variableNames[h],shapeInfo:d}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=kM(o,i,t),l=tM(n.gl,a),c=n.createProgram(l);return V().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:l,source:a,webGLProgram:c,inShapeInfos:r,outShapeInfo:i},my(n,t,c))}function my(n,t,e){const s={},o={},r={},i=[];let a,l,c,u=null,h=null;h=n.getUniformLocation(e,"NAN",!1),V().getNumber("WEBGL_VERSION")===1&&(u=n.getUniformLocation(e,"INFINITY",!1));const d=!1;for(let p=0;p<t.variableNames.length;p++){const f=t.variableNames[p];s[f]=n.getUniformLocation(e,f,d),s[`offset${f}`]=n.getUniformLocation(e,`offset${f}`,d),t.enableShapeUniforms&&(o[`${f}Shape`]=n.getUniformLocation(e,`${f}Shape`,d),r[`${f}TexShape`]=n.getUniformLocation(e,`${f}TexShape`,d))}return t.enableShapeUniforms&&(a=n.getUniformLocation(e,"outShape",d),c=n.getUniformLocation(e,"outShapeStrides",d),l=n.getUniformLocation(e,"outTexShape",d)),t.customUniforms&&t.customUniforms.forEach((p,f)=>{i[f]=n.getUniformLocation(e,p.name,d)}),{uniformLocations:s,customUniformLocations:i,infLoc:u,nanLoc:h,inShapesLocations:o,inTexShapesLocations:r,outShapeLocation:a,outShapeStridesLocation:c,outTexShapeLocation:l}}function om(n,t){if(n.length!==t.length)throw Error(`Binary was compiled with ${n.length} inputs, but was executed with ${t.length} inputs`);n.forEach((e,s)=>{const o=e.logicalShape,r=t[s],i=r.shape;if(!Rt(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(e.isUniform&&r.isUniform)return;const a=e.texShape,l=r.isUniform?null:r.texData.texShape;if(!Rt(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function l3(n,t,e,s,o){t.program.enableShapeUniforms||(om(t.inShapeInfos,e),om([t.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?n.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):n.setOutputMatrixTexture(r.texture,i[0],i[1]),n.setProgram(t.webGLProgram),V().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&n.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&n.gl.uniform1f(t.nanLoc,NaN),e.forEach((l,c)=>{const u=t.program.variableNames[c],h=t.uniformLocations[u],d=t.uniformLocations[`offset${u}`],p=t.inShapesLocations[`${u}Shape`],f=t.inTexShapesLocations[`${u}TexShape`];if(p){const{uniformShape:m}=Mp(t.program.packedInputs,l.shape,l.texData.texShape);switch(m.length){case 1:n.gl.uniform1iv(p,new Int32Array(m));break;case 2:n.gl.uniform2iv(p,new Int32Array(m));break;case 3:n.gl.uniform3iv(p,new Int32Array(m));break;case 4:n.gl.uniform4iv(p,new Int32Array(m));break}}if(f&&n.gl.uniform2i(f,l.texData.texShape[0],l.texData.texShape[1]),h!=null){if(l.isUniform){if(H(l.shape)<2)n.gl.uniform1f(h,l.uniformValues[0]);else{let m=l.uniformValues;m instanceof Float32Array||(m=new Float32Array(m)),n.gl.uniform1fv(h,m)}return}l.texData.slice!=null&&d!=null&&n.gl.uniform1i(d,l.texData.slice.flatOffset),n.setInputMatrixTexture(l.texData.texture.texture,h,c)}});const a=t.outShapeLocation;if(a)switch(s.shape.length){case 1:n.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:n.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:n.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:n.gl.uniform4iv(a,new Int32Array(s.shape));break}if(t.outShapeStridesLocation){const l=pt(s.shape);switch(s.shape.length){case 2:n.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(l));break;case 3:n.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(l));break;case 4:n.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(l));break}}t.outTexShapeLocation&&n.gl.uniform2i(t.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),t.program.customUniforms&&o&&t.program.customUniforms.forEach((l,c)=>{const u=t.customUniformLocations[c],h=o[c];if(l.type==="float")n.gl.uniform1fv(u,h);else if(l.type==="vec2")n.gl.uniform2fv(u,h);else if(l.type==="vec3")n.gl.uniform3fv(u,h);else if(l.type==="vec4")n.gl.uniform4fv(u,h);else if(l.type==="int")n.gl.uniform1iv(u,h);else if(l.type==="ivec2")n.gl.uniform2iv(u,h);else if(l.type==="ivec3")n.gl.uniform3iv(u,h);else if(l.type==="ivec4")n.gl.uniform4iv(u,h);else throw Error(`uniform type ${l.type} is not supported yet.`)}),n.executeProgram()}function c3(n,t,e){let s="";t.concat(e).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(n.enableShapeUniforms&&!i.isUniform){const l=i.texData.texShape,{useSqueezeShape:c,uniformShape:u,keptDims:h}=Mp(n.packedInputs,i.shape,l);let d="",p="",f="";if(u.length===1&&n.packedInputs){const $=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];d=`${$[0]>1}_${$[1]>1}`}else if(u.length===2&&!n.packedInputs)p=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!n.packedInputs){const $=pt(u);f=`${$[0]===l[1]}_${$[$.length-1]===l[1]}`}const m=i.shape.length,g=u.length===2&&Rt(i.shape,l),x=H(i.shape)===1,b=tr(i.shape,e.shape),w=!n.packedInputs&&m===e.shape.length&&Rt(l,e.texData.texShape),y=n.packedInputs||u.length>2?"":`${l[0]>1}_${l[1]>1}`;s+=`${m}_${w}_${c?h:""}_${u.length}_${x}_${b}_${g}_${d}_${p}_${f}_${y}_${a}`}else{const l=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${l}_${a}`}});const o=n.userCode;let r=n.constructor.name;return r+="_"+s+"_"+o+`${V().getNumber("WEBGL_VERSION")}`,r}function Be(n){return V().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&n<=4}class u3{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Hr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=ze();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Lc(["r","c","d"],t):Fo(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}}class h3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Hr.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const e=ze();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Lc(["r","c","d"],t):Fo(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}}class d3{constructor(t){this.variableNames=["A"],this.outTexUsage=rn.DOWNLOAD;const e=ze();this.outputShape=t,this.userCode=`
      ${hy}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}}class p3{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=rn.DOWNLOAD;const e=ze();this.outputShape=t,this.userCode=`
      ${hy}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}}const f3={R:0,G:1,B:2,A:3};class rm{constructor(t,e=!1,s="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const o=ze();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let r="result";e&&(r="floor(result * 255. + 0.5)");let i="";for(let a=0;a<s.length;a++){const l=s[a];i+=`
          if(offset == ${a}) {
            result = values[${f3[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Lp():Op(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${s.length});

        flatIndex = idiv(flatIndex, ${s.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${r}, 0., 0., 0.);
      }
    `}}class m3{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=ze();this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let o="",r="result";e&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const l=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Lp():Op(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}function g3(n){const t=ze(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return QL(n,e)}function x3(n){const t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return oM(n,t)}function b3(n){const t=new Uint16Array([0,1,2,2,1,3]);return rM(n,t)}function fa(n,t,e,s,o,r){aM(t,e);const i=iM(n),a=n.TEXTURE_2D;return ot(n,()=>n.bindTexture(a,i)),ot(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)),ot(n,()=>n.texParameteri(a,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)),ot(n,()=>n.texParameteri(a,n.TEXTURE_MIN_FILTER,n.NEAREST)),ot(n,()=>n.texParameteri(a,n.TEXTURE_MAG_FILTER,n.NEAREST)),V().getNumber("WEBGL_VERSION")===1?ot(n,()=>n.texImage2D(a,0,s,t,e,0,o,r,null)):ot(n,()=>n.texStorage2D(a,1,s,t,e)),ot(n,()=>n.bindTexture(n.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function gy(n){return n.internalFormatFloat}function y3(n,t,e,s){const[o,r]=da(t,e);return fa(n,o,r,gy(s),s.textureFormatFloat,n.FLOAT)}function xy(n){return n.internalFormatHalfFloat}function w3(n,t,e,s){const[o,r]=da(t,e);return fa(n,o,r,xy(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function by(n){return n.downloadTextureFormat}function $3(n,t,e,s){const[o,r]=da(t,e);return fa(n,o,r,by(s),n.RGBA,n.UNSIGNED_BYTE)}function yy(n){return n.internalFormatPackedFloat}function C3(n,t,e,s){const[o,r]=xr(t,e);return fa(n,o,r,yy(s),n.RGBA,n.FLOAT)}function wy(n){return n.internalFormatPackedHalfFloat}function I3(n,t,e,s){const[o,r]=xr(t,e);return fa(n,o,r,wy(s),n.RGBA,s.textureTypeHalfFloat)}function v3(n,t,e){return ot(n,()=>n.bindBuffer(n.ARRAY_BUFFER,e)),em(n,t,"clipSpacePos",e,3,20,0)&&em(n,t,"uv",e,2,20,12)}function k3(n,t,e,s,o,r){ot(n,()=>n.bindTexture(n.TEXTURE_2D,t));let i,a,l;o instanceof Uint8Array?(i=new Uint8Array(e*s*4),a=n.UNSIGNED_BYTE,l=n.RGBA):(i=new Float32Array(e*s*4),a=n.FLOAT,l=r.internalFormatPackedFloat),i.set(o),V().getNumber("WEBGL_VERSION")===2?ot(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,s,n.RGBA,a,i)):ot(n,()=>n.texImage2D(n.TEXTURE_2D,0,l,e,s,0,n.RGBA,a,i)),ot(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function S3(n,t,e){ot(n,()=>n.bindTexture(n.TEXTURE_2D,t)),e.data instanceof Uint8Array?V().getNumber("WEBGL_VERSION")===2?ot(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,e.width,e.height,n.RGBA,n.UNSIGNED_BYTE,e.data)):ot(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width,e.height,0,n.RGBA,n.UNSIGNED_BYTE,e.data)):V().getNumber("WEBGL_VERSION")===2?ot(n,()=>n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,e)):ot(n,()=>n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)),ot(n,()=>n.bindTexture(n.TEXTURE_2D,null))}function N3(n,t,e,s){const o=n.createBuffer();ot(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,o));const a=4*4*t*e;return ot(n,()=>n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)),ot(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,0)),ot(n,()=>n.bindBuffer(n.PIXEL_PACK_BUFFER,null)),o}function T3(n,t,e){const s=n,o=new Float32Array(e);return s.bindBuffer(s.PIXEL_PACK_BUFFER,t),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function E3(n,t,e,s){const[o,r]=da(t,e),i=4,a=new Uint8Array(qL(t*e,i));return ot(n,()=>n.readPixels(0,0,o,r,s.downloadTextureFormat,n.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function R3(n,t,e,s,o,r,i,a){const l=n,c=new Float32Array(jL(r,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,t),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,c),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),c}function D3(n,t,e){const s=new Float32Array(t*e*4);return ot(n,()=>n.readPixels(0,0,e,t,n.RGBA,n.FLOAT,s)),s}class ou{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const e=V().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,UL(e,t)):this.gl=zn(e),t=this.gl,V().getNumber("WEBGL_VERSION")===2){const r=t;this.createVertexArray=()=>ot(r,()=>r.createVertexArray()),this.bindVertexArray=i=>ot(r,()=>r.bindVertexArray(i)),this.deleteVertexArray=i=>ot(r,()=>r.deleteVertexArray(i)),this.getVertexArray=()=>ot(r,()=>r.getParameter(r.VERTEX_ARRAY_BINDING))}else if(t!=null){const r=t.getExtension("OES_vertex_array_object");if(r==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ot(t,()=>r.createVertexArrayOES()),this.bindVertexArray=i=>ot(t,()=>r.bindVertexArrayOES(i)),this.deleteVertexArray=i=>ot(t,()=>r.deleteVertexArrayOES(i)),this.getVertexArray=()=>ot(t,()=>t.getParameter(r.VERTEX_ARRAY_BINDING_OES))}let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),V().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Na(this.gl,r),wn(this.gl,i))this.textureHalfFloatExtension=Na(this.gl,i);else if(V().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),wn(this.gl,o))this.colorBufferHalfFloatExtension=Na(this.gl,o);else if(V().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",wn(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(wn(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=x3(this.gl),this.indexBuffer=b3(this.gl),this.framebuffer=lM(this.gl),this.textureConfig=_p(this.gl,this.textureHalfFloatExtension)}get debug(){return V().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const t=this.gl;ot(t,()=>t.finish()),ot(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),ot(t,()=>t.deleteFramebuffer(this.framebuffer)),ot(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),ot(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),ot(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),y3(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),w3(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),$3(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),S3(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,s,o){this.throwIfDisposed(),k3(this.gl,t,e,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),I3(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),C3(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(nm(this.gl,this.framebuffer),this.outputTexture=null),ot(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,s){return this.downloadMatrixDriver(t,()=>E3(this.gl,e,s,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,s,o,r,i){return R3(this.gl,t,e,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return T3(this.gl,t,e)}createBufferFromTexture(t,e,s){this.bindTextureToFrameBuffer(t);const o=N3(this.gl,e,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,s;if(V().getBool("WEBGL_FENCE_API_ENABLED")){const o=t,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},e=r}else V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(e,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:e,isFencePassed:s}}downloadMatrixFromPackedTexture(t,e,s){return this.downloadMatrixDriver(t,()=>D3(this.gl,e,s))}createProgram(t){this.throwIfDisposed();const e=this.gl;this.vertexShader==null&&(this.vertexShader=g3(e));const s=nM(e);ot(e,()=>e.attachShader(s,this.vertexShader)),ot(e,()=>e.attachShader(s,t)),sM(e,s);let o;return o=Object.assign(s,{vao:this.createVertexArray()}),this.bindVertexArray(o.vao),ot(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(v3(e,o,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&tu(e,o),this.setProgram(o),o}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(ot(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&tu(this.gl,this.program)),ot(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,s=!0){return this.throwIfDisposed(),s?uM(this.gl,t,e):hM(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),ot(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,s){this.throwIfDisposed(),this.throwIfNoProgram(),dM(this.gl,t,e,s)}setOutputMatrixTexture(t,e,s){this.setOutputMatrixTextureDriver(t,s,e)}setOutputPackedMatrixTexture(t,e,s){this.throwIfDisposed();const[o,r]=xr(e,s);this.setOutputMatrixTextureDriver(t,o,r)}setOutputMatrixWriteRegion(t,e,s,o){this.setOutputMatrixWriteRegionDriver(s,t,o,e)}setOutputPackedMatrixWriteRegion(t,e,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&tu(this.gl,this.program),Ta(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const t=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ot(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ot(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Na(this.gl,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const e=this.gl,s=this.getQueryTimerExtensionWebGL2();e.endQuery(s.TIME_ELAPSED_EXT);return}const t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await Gp(()=>this.disposed||this.isQueryAvailable(t,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){const s=this.gl;return s.getQueryParameter(t,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(t,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(t,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(t,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){const t=A3(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){const{resolveFn:s}=this.itemsToPoll[e];s()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let s;"setTimeoutCustom"in V().platform&&(s=V().platform.setTimeoutCustom.bind(V().platform)),Gp(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,s)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),eu(this.gl,t,this.framebuffer),this.debug&&Ta(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(eu(this.gl,this.outputTexture,this.framebuffer),this.debug&&Ta(this.gl)):nm(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);const s=e();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(t,e,s){this.throwIfDisposed();const o=this.gl;eu(o,t,this.framebuffer),this.debug&&Ta(o),this.outputTexture=t,ot(o,()=>o.viewport(0,0,e,s)),ot(o,()=>o.scissor(0,0,e,s))}setOutputMatrixWriteRegionDriver(t,e,s,o){this.throwIfDisposed(),ot(this.gl,()=>this.gl.scissor(t,e,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function A3(n){let t=0;for(;t<n.length&&n[t]();++t);return t-1}const{addImpl:F3,bincountImpl:$y,bincountReduceImpl:_3,castImpl:O3,ceilImpl:L3,concatImpl:M3,equalImpl:P3,expImpl:z3,expm1Impl:B3,floorImpl:V3,gatherNdImpl:W3,gatherV2Impl:U3,greaterImpl:G3,greaterEqualImpl:H3,lessImpl:q3,lessEqualImpl:j3,linSpaceImpl:K3,logImpl:X3,maxImpl:Y3,maximumImpl:Z3,minimumImpl:J3,multiplyImpl:Q3,negImpl:tP,notEqualImpl:eP,prodImpl:nP,raggedGatherImpl:sP,raggedRangeImpl:oP,raggedTensorToTensorImpl:rP,rangeImpl:iP,rsqrtImpl:aP,scatterImpl:lP,sigmoidImpl:cP,simpleAbsImpl:Cy,sliceImpl:uP,sparseFillEmptyRowsImpl:hP,sparseReshapeImpl:dP,sparseSegmentReductionImpl:Iy,sqrtImpl:pP,stridedSliceImpl:fP,stringNGramsImpl:mP,stringSplitImpl:gP,stringToHashBucketFastImpl:xP,subImpl:bP,tileImpl:yP,topKImpl:wP,transposeImpl:Pp,uniqueImpl:$P}=ND;function vy(n,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${n}.${e}`)}function Le(n,t){return t===1?[n]:vy(n,t)}function CP(n,t){if(n===1)return"rc";let e="";for(let s=0;s<n;s++)e+=t[s],s<n-1&&(e+=",");return e}class IP{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Be(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const e=Le("rc",this.rank),s=Vt(this.rank),o=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){const e=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${t[t.length-1-i]},`+r;e.push(r)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let s=this.rank-2;s<this.rank;s++)e+=`${t[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";const e=t.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(t){const e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}}class ky{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${vP(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Lp():Op(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${s}

        setOutput(result);
      }
    `}}function vP(n,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?vM(["r","c","d"],"inputShape"):Fo(["r","c","d"],n)}
      return ivec3(r, c, d);
    }
  `}class kP{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(t,e,s){const o=am(e,s),r=lm(t,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=im(t,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const l=this.freeTextures[r].shift();return this.usedTextures[r].push(l),l}let a;return o===Ie.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===Ie.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===Ie.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===Ie.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===Ie.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,s,o){if(this.freeTextures==null)return;const r=am(s,o),i=lm(e,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=im(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),l=V().get("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const c=this.usedTextures[i],u=c.indexOf(t);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c.splice(u,1),this.log()}log(){if(!this.logEnabled)return;const t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);const e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(const t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function SP(n,t){const e=n;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===n.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function im(n,t,e,s,o){const r=NP(t,s);let i;if(o){const[l,c]=xr(n[0],n[1]);i=l*c}else{const[l,c]=da(n[0],n[1]);i=l*c}const a=SP(e,r);return i*a}function NP(n,t){switch(n){case Ie.PACKED_2X2_FLOAT32:return yy(t);case Ie.PACKED_2X2_FLOAT16:return wy(t);case Ie.UNPACKED_FLOAT32:return gy(t);case Ie.UNPACKED_FLOAT16:return xy(t);case Ie.PACKED_4X1_UNSIGNED_BYTE:return by(t);default:throw new Error(`Unknown physical texture type ${n}`)}}function TP(n){return V().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Ie.PACKED_2X2_FLOAT32:Ie.UNPACKED_FLOAT32:n?Ie.PACKED_2X2_FLOAT16:Ie.UNPACKED_FLOAT16}function am(n,t){if(n===rn.UPLOAD)return Ie.PACKED_2X2_FLOAT32;if(n===rn.RENDER||n==null)return TP(t);if(n===rn.DOWNLOAD||n===rn.PIXELS)return Ie.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${n}`)}function lm(n,t,e){return`${n[0]}_${n[1]}_${t}_${e}`}class Kn{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Nn="if (isnan(x)) return x;",EP="return x;",cm="return abs(x);",RP="return (x >= 0.0) ? x : (exp(x) - 1.0);",DP=Nn+`
  return (x < 0.0) ? 0.0 : x;
`,AP=Nn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,$s="return x;",FP="return 1.0 / (1.0 + exp(-1.0 * x));";const _P="return x;",OP=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,LP=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,MP=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,PP="return 1.0 / (1.0 + exp(-1.0 * x));";class vs{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}class zP{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);const e=t.length,s=Le("rc",e),o=Vt(e),r=CP(e,s),i=s.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}const BP=gx,VP=1e-7,WP=1e-4,Da={};function UP(n){return n in Da||(Da[n]={}),Da[n]}const GP=V().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),HP=600;function qP(){return V().global.screen==null?1024:V().global.screen.height*V().global.screen.width*window.devicePixelRatio*HP/1024/1024}class Mc extends Xu{constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!V().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof ou)e=t;else{const s=zn(V().getNumber("WEBGL_VERSION"),t);e=new ou(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=zn(V().getNumber("WEBGL_VERSION"));e=new ou(s),this.binaryCache=UP(V().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new kP(this.gpgpu),this.numMBBeforeWarning=qP(),this.texData=new Rm(this,Wn())}nextDataId(){return Mc.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,s,o,r,i){const a=this.makeTensorInfo(e,s),l=this.texData.get(a.dataId);l.isPacked=!1,l.texture={texture:t,texShape:[o,r]},l.texShape=[o,r];const c=Ea(e),u=new rm(c,!1,i),h=this.runWebGLProgram(u,[a],s,[[o,r]]);return h.shape=e,l.texture=null,this.disposeIntermediateTensorInfo(a),h.dataId}write(t,e,s){if((V().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||V().getBool("DEBUG"))&&this.checkNumericalProblems(t),s==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:e,dtype:s,values:t,usage:rn.UPLOAD,refCount:1}),o}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){const e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){const e=this.texData.get(t);e.refCount--}}move(t,e,s,o,r){if(V().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:s,dtype:o,values:e,usage:rn.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){const e=this.texData.get(t),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:l}=e;if(i!=null){let d;l?d=new vs(a,$s):d=new Kn(a,$s);const p=this.runWebGLProgram(d,[{dataId:t,shape:a,dtype:o}],o),f=this.readSync(p.dataId);return this.disposeIntermediateTensorInfo(p),f}if(s!=null)return this.convertAndCacheOnCPU(t);if(o==="string")return s;const c=this.activeTimers!=null;let u;c&&(u=Ve());let h;if(o==="complex64"){const d=this.readSync(r.real.dataId),p=this.readSync(r.imag.dataId);h=hs(d,p)}else h=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=Ve()-u),this.convertAndCacheOnCPU(t,h)}async read(t){if(this.pendingRead.has(t)){const f=this.pendingRead.get(t);return new Promise(m=>f.push(m))}const e=this.texData.get(t),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:l}=e;if(r!=null){let f;l?f=new vs(o,$s):f=new Kn(o,$s);const m=this.runWebGLProgram(f,[{dataId:t,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(t);if(V().getBool("DEBUG")&&!V().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&V().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,u;if(i!=="complex64"&&V().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(t);const f=this.texData.get(u.dataId);c=this.gpgpu.createBufferFromTexture(f.texture.texture,...Sa(o))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let h;if(i==="complex64"){const f=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=f[0],g=f[1];h=hs(m,g)}else if(c==null)h=this.getValuesFromTexture(t);else{const f=H(o);h=this.gpgpu.downloadFloat32MatrixFromBuffer(c,f)}if(u!=null&&this.disposeIntermediateTensorInfo(u),c!=null){const f=this.gpgpu.gl;ot(f,()=>f.deleteBuffer(c))}const d=this.convertAndCacheOnCPU(t,h),p=this.pendingRead.get(t);return this.pendingRead.delete(t),p.forEach(f=>f(d)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&Wn().removeDataId(t,this),this.pendingDeletes--),d}readToGPU(t,e={}){const s=this.texData.get(t),{values:o,shape:r,slice:i,dtype:a,isPacked:l,texture:c}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let p;l?p=new vs(r,$s):p=new Kn(r,$s);const f=this.runWebGLProgram(p,[{dataId:t,shape:r,dtype:a}],a),m=this.readToGPU(f,e);return this.disposeIntermediateTensorInfo(f),m}if(c==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(t,e.customTexShape),h=Wn().makeTensorFromTensorInfo(u),d=this.texData.get(u.dataId);return Object.assign({tensorRef:h},d.texture)}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const s=e.map(o=>Es(o));return $t(t.shape,t.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return $t(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){const s=t[e];if(!ZL(s))throw V().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(t){const{shape:e,dtype:s,isPacked:o}=this.texData.get(t),r=H(e);if(V().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const d=this.decode(t),p=this.texData.get(d.dataId),f=this.gpgpu.downloadMatrixFromPackedTexture(p.texture.texture,...Sa(e)).subarray(0,r);return this.disposeIntermediateTensorInfo(d),f}const i=V().getBool("WEBGL_PACK")&&o===!0,a=i?Ea(e):e,l=i?new p3(a):new d3(a),c=this.runWebGLProgram(l,[{shape:a,dtype:s,dataId:t}],"float32"),u=this.texData.get(c.dataId),h=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(c),h}timerAvailable(){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){const e=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,t();const r=Yo(this.activeTimers.map(l=>l.query)).filter(l=>l!=null),i=Yo(this.activeTimers.map(l=>l.name)).filter(l=>l!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const l=await Promise.all(r);a.kernelMs=mw(l),a.getExtraProfileInfo=()=>l.map((c,u)=>({name:i[u],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ve(),endMs:null}}endTimer(t){return V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Ve(),t)}async getQueryTime(t){if(V().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);const e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);const{complexTensorInfos:s}=this.texData.get(t);return s!=null&&(this.disposeData(s.real.dataId,e),this.disposeData(s.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){const{texture:e,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(t),l=a&&a.origDataId||t,c=this.dataRefCount.get(l);c>1?this.dataRefCount.set(l,c-1):(this.dataRefCount.delete(l),e!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(e,o,r,i)));const u=this.texData.get(t);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=GP){return V().getBool("WEBGL_CPU_FORWARD")&&t.every(s=>this.texData.get(s.dataId).texture==null&&H(s.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){on("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const e=t.dataSync();return BP(t.shape,e)}packedUnaryOp(t,e,s){const o=new vs(t.shape,e),r=this.compileAndRun(o,[t],s);return Wn().makeTensorFromTensorInfo(r)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){const o=Cy(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,o)}if(V().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,cm,t.dtype);const e=new Kn(t.shape,cm),s=this.compileAndRun(e,[t]);return Wn().makeTensorFromTensorInfo(s)}makeTensorInfo(t,e,s){let o;if(e==="string"&&s!=null&&s.length>0&&Xr(s[0])){const r=s.map(i=>Ss(i));o=this.write(r,t,e)}else o=this.write(s,t,e);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:e}}makeOutput(t,e,s){return Wn().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,s),this)}unpackTensor(t){const e=new zP(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){const e=new IP(t.shape),s=!0;return this.runWebGLProgram(e,[t],t.dtype,null,s)}packedReshape(t,e){const s=[ir(t.shape),...ar(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[ir(e),...ar(e)],i=new ky(r,s),a=!0,l=[s],c=this.runWebGLProgram(i,[o],t.dtype,l,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){const s=this.texData.get(t),{isPacked:o,shape:r,dtype:i}=s;if(e!=null){const d=H(r),p=e[0]*e[1]*4;I(d<=p,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=Ea(r);let l;o?l=new h3(a):l=new u3(a);const c=!0,u=[e??Sa(a)],h=this.runWebGLProgram(l,[{shape:a,dtype:i,dataId:t}],i,u,c,e);return{dtype:i,shape:r,dataId:h.dataId}}runWebGLProgram(t,e,s,o,r=!1,i){const a=this.makeTensorInfo(t.outputShape,s),l=this.texData.get(a.dataId);if(t.packedOutput&&(l.isPacked=!0),t.outPackingScheme===Hr.DENSE){const x=i??Sa(t.outputShape);l.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(l.usage=t.outTexUsage),H(a.shape)===0)return l.values=ve(a.dtype,0),a;const c=[],u=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&H(x.shape)<=V().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),c.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!al(b.shape,x.shape)){const w=x,y=x.shape;x.shape=b.shape,x=this.packedReshape(x,y),c.push(x),b=this.texData.get(x.dataId),w.shape=y}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(a.dataId);const h={shape:a.shape,texData:l,isUniform:!1},d=c3(t,u,h),p=this.getAndSaveBinary(d,()=>a3(this.gpgpu,t,u,h)),f=this.activeTimers!=null;let m;f&&(m=this.startTimer()),V().get("ENGINE_COMPILE_ONLY")||l3(this.gpgpu,p,u,h,o),c.forEach(x=>this.disposeIntermediateTensorInfo(x)),f&&(m=this.endTimer(m),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(m)}));const g=V().get("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Ve();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!V().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(t,e,s,o,r=!1){return s=s||e[0].dtype,this.runWebGLProgram(t,e,s,o,r)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(V().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=P(()=>{if(!V().get("WEBGL_RENDER_FLOAT32_ENABLED")){const t=V().getBool("DEBUG");V().set("DEBUG",!1);const e=this.abs(mt(1e-8)).dataSync()[0];if(V().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?VP:WP}uploadToGPU(t){const e=this.texData.get(t),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:l}=e;if(i!=null)return;const c=this.activeTimers!=null;let u;c&&(u=Ve());let h=e.texShape;if(h==null&&(h=mM(s,l),e.texShape=h),r!=null){const d=Ea(s);let p,f=h[1],m=h[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(l||!g)&&([f,m]=xr(h[0],h[1])),l?p=new m3(d,g):p=new rm(d,g);const x=g?[m,f]:h,b=this.makeTensorInfo(x,o),w=this.texData.get(b.dataId);g?w.usage=rn.PIXELS:w.usage=rn.UPLOAD,w.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),f,m,r);const y=[[m,f]],$=!0,C=this.runWebGLProgram(p,[b],o,y,$),v=this.texData.get(C.dataId);e.texShape=v.texShape,e.isPacked=v.isPacked,e.usage=v.usage,V().get("ENGINE_COMPILE_ONLY")?this.disposeData(C.dataId):(e.texture=v.texture,e.values=null,this.texData.delete(C.dataId)),this.disposeIntermediateTensorInfo(b),c&&(this.uploadWaitMs+=Ve()-u)}else{const d=this.acquireTexture(h,a,o,l);e.texture=d}}convertAndCacheOnCPU(t,e){const s=this.texData.get(t),{dtype:o}=s;return e!=null&&(s.values=jP(e,o)),s.values}acquireTexture(t,e,s,o){if(this.numBytesInGPU+=this.computeBytes(t,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,o)}computeBytes(t,e){return t[0]*t[1]*lu(e)}checkCompileCompletion(){for(const[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){const t=[];if(this.gpgpu.parallelCompilationExtension){for(const[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(const[,e]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(e),o(!0)}catch(r){throw r}});t.push(s)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await wx(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(uy(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,t]of Object.entries(this.binaryCache)){const{uniformLocations:e,customUniformLocations:s,infLoc:o,nanLoc:r,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:l,outShapeStridesLocation:c,outTexShapeLocation:u}=my(this.gpgpu,t.program,t.webGLProgram);t.uniformLocations=e,t.customUniformLocations=s,t.infLoc=o,t.nanLoc=r,t.inShapesLocations=i,t.inTexShapesLocations=a,t.outShapeLocation=l,t.outShapeStridesLocation=c,t.outTexShapeLocation=u}}createTensorFromTexture(t,e,s){const{texture:o,height:r,width:i,channels:a}=t,l=Wn().backend;if(!l.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const c=l.writeTexture(o,e,s,r,i,a);return Wn().makeTensorFromDataId(c,e,s,l)}}Mc.nextDataId=0;function jP(n,t){if(t==="float32"||t==="complex64")return n;if(t==="int32"||t==="bool"){const e=t==="int32"?new Int32Array(n.length):new Uint8Array(n.length);for(let s=0;s<e.length;++s)e[s]=Math.round(n[s]);return e}else throw new Error(`Unknown dtype ${t}`)}hg()&&kg("webgl",()=>new Mc,2);const zp=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class lr{constructor(t,e,s){this.variableNames=["A","B"],this.outputShape=bt(e,s),this.enableShapeUniforms=Be(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}const ma=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;class ga{constructor(t,e,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=bt(e,s);const r=this.outputShape.length;this.enableShapeUniforms=Be(r);let i="";if(o)if(r===0||H(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Vt(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const l=Le("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${l[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}function en(n){const{inputs:t,backend:e}=n,{x:s}=t;return e.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const KP={kernelName:xi,backendName:"webgl",kernelFunc:en};function qs(n){const{inputs:t,backend:e}=n,{real:s,imag:o}=t,r=e.makeTensorInfo(s.shape,"complex64"),i=e.texData.get(r.dataId),a=en({inputs:{x:s},backend:e}),l=en({inputs:{x:o},backend:e});return i.complexTensorInfos={real:a,imag:l},r}const XP={kernelName:ih,backendName:"webgl",kernelFunc:qs};const Sy="return (a < 0.) ? b * a : a;",Ny=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function YP(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{alpha:r}=s,i=e.makeTensorInfo([],"float32",Ms(r,"float32")),a=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ga(Ny,o.shape,i.shape):new lr(Sy,o.shape,i.shape),l=e.runWebGLProgram(a,[o,i],"float32");return e.disposeIntermediateTensorInfo(i),l}const ZP={kernelName:Dl,backendName:"webgl",kernelFunc:YP};const Ty="return (a < 0.) ? b * a : a;",Ey=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function JP(n){const{inputs:t,backend:e}=n,{x:s,alpha:o}=t,r=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ga(Ey,s.shape,o.shape):new lr(Ty,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],"float32")}const QP={kernelName:Yl,backendName:"webgl",kernelFunc:JP};const Cr="if (isnan(x)) return x;";function Nt({opSnippet:n,packedOpSnippet:t,cpuKernelImpl:e,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,l=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){const h=a.texData.get(i.dataId),d=e(h.values,l);return a.makeTensorInfo(i.shape,l,d)}const c=V().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null;let u;return c?u=new vs(i.shape,t):u=new Kn(i.shape,n),a.runWebGLProgram(u,[i],l)}}function Ne({opSnippet:n,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:l,b:c}=i,u=a;if(s&&l.dtype==="complex64"){const f=u.texData.get(l.dataId),m=u.texData.get(c.dataId),[g,x]=[[f.complexTensorInfos.real,m.complexTensorInfos.real],[f.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(w=>{const[y,$]=w,C={dataId:y.dataId,dtype:y.dtype,shape:l.shape},v={dataId:$.dataId,dtype:$.dtype,shape:c.shape},k=new lr(n,l.shape,c.shape);return u.runWebGLProgram(k,[C,v],Je(y.dtype,$.dtype))}),b=qs({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),b}const h=r||Je(l.dtype,c.dtype);if((l.dtype==="string"||c.dtype==="string"||u.shouldExecuteOnCPU([l,c]))&&o!=null){const f=u.texData.get(l.dataId).values,m=u.texData.get(c.dataId).values,g=l.dtype==="string"?Co(f):f,x=l.dtype==="string"?Co(m):m,[b,w]=o(l.shape,c.shape,g,x,h),y=u.makeTensorInfo(w,h),$=u.texData.get(y.dataId);return $.values=b,y}const d=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null;let p;return d?p=new ga(t,l.shape,c.shape,e):p=new lr(n,l.shape,c.shape),u.runWebGLProgram(p,[l,c],h)}}function qr(n,t=!1){if(n==="linear")return t?_P:EP;if(n==="relu")return t?LP:DP;if(n==="elu")return t?OP:RP;if(n==="relu6")return t?MP:AP;if(n==="prelu")return t?Ey:Ty;if(n==="leakyrelu")return t?Ny:Sy;if(n==="sigmoid")return t?PP:FP;throw new Error(`Activation ${n} has not been implemented for the WebGL backend.`)}class Ry{constructor(t,e,s,o=!1,r=!1,i=!1,a=null,l=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=Be(this.outputShape.length);const u=o?t[1]:t[2],h=Math.ceil(u/2),d=o?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",f=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(l?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const b=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let w="rc.x",y="rc.x";t[0]<e[0]?w=`int(min(float(rc.x), ${t[0]-1}.))`:e[0]<t[0]&&(y=`int(min(float(rc.x), ${e[0]-1}.))`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${h}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${h}; i++) {
          int batchA = ${w};
          int batchB = ${y};
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${p});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${f[0]} * ${m[0]});
          result += (${f[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}}const um={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class hm{constructor(t,e,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=bt(e,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}const dm="return a * b;";function Bp(n){const{inputs:t,backend:e}=n,{a:s,b:o}=t,r=Je(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),c=new hm(um.REAL,s.shape,o.shape),u=new hm(um.IMAG,s.shape,o.shape),h=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:o.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:o.shape}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=qs({inputs:{real:d,imag:p},backend:e});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}if(e.shouldExecuteOnCPU([s,o])){const a=e.texData.get(s.dataId),l=e.texData.get(o.dataId),[c,u]=Q3(s.shape,o.shape,a.values,l.values,r),h=e.makeTensorInfo(u,r),d=e.texData.get(h.dataId);return d.values=c,h}let i;return V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new ga(dm,s.shape,o.shape):i=new lr(dm,s.shape,o.shape),e.runWebGLProgram(i,[s,o],r)}const tz={kernelName:Si,backendName:"webgl",kernelFunc:Bp};function ez(n,t,e){const s=[ir(n.shape),...ar(n.shape)],o={dtype:n.dtype,shape:s,dataId:n.dataId},r=[ir(t),...ar(t)],i=new ky(r,s),a=!0,l=[s],c=e.runWebGLProgram(i,[o],n.dtype,l,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function nt(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{shape:r}=s,i=e,a=H(o.shape),l=Dm(r,a),c=H(l);I(a===c,()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!al(o.shape,l)&&!(u.texture!==null&&al(u.shape,l))?ez(o,l,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype})}const nz={kernelName:Jl,backendName:"webgl",kernelFunc:nt};class pm{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];const a=Math.floor(s/4)*4,l=s%4;let c="sumValue += dot(values, ones);";if(e!=null){const h=1/e;c=`sumValue += dot(values * ${Zo(h)?h.toPrecision(2):h}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}class sz{constructor(t,e){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=t;this.outputShape=[o,i];let a="0.0",l="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",l="min"):e==="max"&&(a="-1.0 / 1e-20",l="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");const u=Math.floor(s/4)*4,h=s%4;let d=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,p="vec4";e==="all"?(a="1.0",d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):e==="any"&&(a="0.0",d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===2}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${h===3}) {
          ${p} values = ${p}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function oz(n){const t=[];for(;t.length===0||t[t.length-1].outSize!==1;){const e=t.length?t[t.length-1].outSize:n[1],s=$c(e);t.push({inSize:e,windowSize:s,outSize:Math.ceil(e/s)})}return t}function Oo(n,t,e,s){const o=oz(n.shape);let r=n;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:l,outSize:c}=o[i];let u,h;e==="mean"?u=i===0?new pm({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},a):new pm({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c}):u=new sz({windowSize:l,inSize:a,batchSize:n.shape[0],outSize:c},e),h=r,r=s.runWebGLProgram(u,[r],t),h.dataId!==n.dataId&&s.disposeIntermediateTensorInfo(h)}return r}class rz{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[e[i]];this.outputShape=s,this.rank=s.length;const o=Vt(this.rank),r=iz(e);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function iz(n){const t=n.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(t);for(let o=0;o<n.length;o++)s[n[o]]=e[o];return s.join()}class az{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(t.length);for(let u=0;u<s.length;u++)s[u]=t[e[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=Vt(this.rank),r=vy("rc",this.rank),i=new Array(this.rank);for(let u=0;u<e.length;u++)i[e[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,l=`++${r[this.rank-1]} < ${s[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${l}) {
        result[1] = ${c};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${c};
        if(${l}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}function Pc(n,t,e){const s=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new az(n.shape,t):new rz(n.shape,t);return e.runWebGLProgram(s,[n],n.dtype)}function lz(n,t,e,s){const o=t,r=n.shape.length,i=Ct(o,n.shape);let a=i;const l=Zt(a,r),c=l!=null;let u=n;c&&(u=Pc(n,l,s),a=re(a.length,r)),Se("sum",a,r);const[h,d]=we(u.shape,a);let p=h;e&&(p=oe(h,i));const f=H(d),g=H(n.shape)/f,x=nt({inputs:{x:u},attrs:{shape:[g,f]},backend:s}),b=qh(n.dtype),w=Oo(x,b,"sum",s),y=nt({inputs:{x:w},attrs:{shape:p},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(w),c&&s.disposeIntermediateTensorInfo(u),y}function zc(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s;return lz(o,r,i,e)}const cz={kernelName:oc,backendName:"webgl",kernelFunc:zc};function Pe(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{perm:r}=s,i=e,a=o.shape.length,l=new Array(a);for(let u=0;u<l.length;u++)l[u]=o.shape[r[u]];let c;if(i.shouldExecuteOnCPU([o])){const h=i.texData.get(o.dataId).values,d=Pp(h,o.shape,o.dtype,r,l);c=i.makeTensorInfo(l,o.dtype);const p=i.texData.get(c.dataId);p.values=d}else c=Pc(o,r,i);return c}const uz={kernelName:qo,backendName:"webgl",kernelFunc:Pe};const Dy=1e3;function ll({a:n,b:t,transposeA:e,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){const c=n.shape.length,u=t.shape.length,h=e?n.shape[c-2]:n.shape[c-1],d=s?t.shape[u-1]:t.shape[u-2],p=e?n.shape[c-1]:n.shape[c-2],f=s?t.shape[u-2]:t.shape[u-1],m=n.shape.slice(0,-2),g=t.shape.slice(0,-2),x=H(m),b=H(g),y=bt(n.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);I(h===d,()=>`Error in matMul: inner shapes (${h}) and (${d}) of Tensors with shapes ${n.shape} and ${t.shape} and transposeA=${e} and transposeB=${s} must match.`);const $=e?[x,h,p]:[x,p,h],C=s?[b,f,d]:[b,d,f],v=nt({inputs:{x:n},backend:o,attrs:{shape:$}}),k=nt({inputs:{x:t},backend:o,attrs:{shape:C}}),N=[v,k],T=Math.max(x,b),F=e?v.shape[1]:v.shape[2],z=r!=null,M=i!=null,L=l==="leakyrelu",O=l!=null?qr(l,!0):null,B=z||M||L||O!=null;let U;if((p===1||f===1)&&F>Dy&&B===!1){let q=v,X=k;e&&(q=Pe({inputs:{x:v},backend:o,attrs:{perm:[0,2,1]}}),N.push(q)),s&&(X=Pe({inputs:{x:k},backend:o,attrs:{perm:[0,2,1]}}),N.push(X));const K=f!==1,Q=f===1;let Z=q;K&&(Z=nt({inputs:{x:q},backend:o,attrs:{shape:[T,F,1]}}),N.push(Z));const tt=f===1?2:1;let J=X;Q&&(J=nt({inputs:{x:X},backend:o,attrs:{shape:[T,1,F]}}),N.push(J));const rt=Bp({inputs:{a:Z,b:J},backend:o});U=zc({inputs:{x:rt},backend:o,attrs:{axis:tt,keepDims:!0}}),N.push(rt)}else{const q=Je(n.dtype,t.dtype),X=new Ry($,C,[T,p,f],e,s,z,O,M,L),K=[v,k];if(r!=null&&K.push(r),M&&K.push(i),L){const Q=o.makeTensorInfo([],"float32",Ms(a,"float32"));K.push(Q),N.push(Q)}U=o.runWebGLProgram(X,K,q)}const W=nt({inputs:{x:U},backend:o,attrs:{shape:y}});N.push(U);for(const q of N)o.disposeIntermediateTensorInfo(q);return W}function hz(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r,bias:i,preluActivationWeights:a}=t,{transposeA:l,transposeB:c,activation:u,leakyreluAlpha:h}=s;return ll({a:o,b:r,transposeA:l,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:h,activation:u})}const dz={kernelName:La,backendName:"webgl",kernelFunc:hz};const fm="return abs(x);";function pz(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=e.texData.get(s.dataId),i=Cy(r.values);return e.makeTensorInfo(s.shape,s.dtype,i)}let o;return V().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new vs(s.shape,fm):o=new Kn(s.shape,fm),e.runWebGLProgram(o,[s],s.dtype)}const fz={kernelName:hl,backendName:"webgl",kernelFunc:pz};const mz=Nn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,gz=Nt({opSnippet:mz}),xz={kernelName:Zr,backendName:"webgl",kernelFunc:gz};const bz=Nn+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,yz=Nt({opSnippet:bz}),wz={kernelName:Jr,backendName:"webgl",kernelFunc:yz};const mm="return a + b;",$z=Ne({opSnippet:mm,packedOpSnippet:mm,supportsComplex:!0,cpuKernelImpl:F3}),Cz={kernelName:ur,backendName:"webgl",kernelFunc:$z};class Iz{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}class vz{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}function Oa(n){const{inputs:t,backend:e}=n,s=t;if(s.length===1)return en({inputs:{x:s[0]},backend:e});if(s.length>V().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const l=Math.floor(s.length/2),c=Oa({inputs:s.slice(0,l),backend:e}),u=Oa({inputs:s.slice(l),backend:e});return Oa({inputs:[c,u],backend:e})}const o=s.map(l=>l.dtype).reduce((l,c)=>Je(l,c)),r=s.map(l=>l.shape),a=V().getBool("WEBGL_PACK")?new vz(s[0].shape,r):new Iz(s[0].shape,r);return e.runWebGLProgram(a,s,o)}const kz={kernelName:th,backendName:"webgl",kernelFunc:Oa};function Sz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=Zt(c,a);let h=o;u!=null&&(h=Pe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=re(c.length,a)),Se("all",c,a);const[d,p]=we(h.shape,c),f=H(p),m=nt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Oo(m,m.dtype,"all",e);let x;if(i){const b=oe(d,l);x=nt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=nt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const Nz={kernelName:eh,backendName:"webgl",kernelFunc:Sz};function Tz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=Zt(c,a);let h=o;u!=null&&(h=Pe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=re(c.length,a)),Se("any",c,a);const[d,p]=we(h.shape,c),f=H(p),m=nt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Oo(m,m.dtype,"any",e);let x;if(i){const b=oe(d,l);x=nt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=nt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const Ez={kernelName:nh,backendName:"webgl",kernelFunc:Tz};class Rz{constructor(t,e,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=t;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=e==="max"?">":"<",l=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}class Dz{constructor(t,e,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(t.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=t[t.length-1],i=Math.ceil(r/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,l=a.length,c=Vt(l),u=Le("coords",l);let h,d;if(i===1){d=l+1;const k=Vt(d);h=`
        ${k} sourceLocR = ${k}(${u.join()}, 0);
        ++${u[l-1]};
        ${k} sourceLocG = ${k}(${u.join()}, 0);
        ++${u[l-2]};
        ${k} sourceLocA = ${k}(${u.join()}, 0);
        --${u[l-1]};
        ${k} sourceLocB = ${k}(${u.join()}, 0);
        --${u[l-2]};`}else d=l,h=`
        ${c} sourceLocR = coords;
        ++${u[l-1]};
        ${c} sourceLocG = coords;
        ++${u[l-2]};
        ${c} sourceLocA = coords;
        --${u[l-1]};
        ${c} sourceLocB = coords;
        --${u[l-2]};`;const p=["x","y","z","w","u","v"].slice(0,d),f="."+p[d-1],m=p.map(k=>"int "+k),g=Le("sourceLocR",d-1).concat("inIdx.r"),x=Le("sourceLocG",d-1).concat("inIdx.g"),b=Le("sourceLocB",d-1).concat("inIdx.b"),w=Le("sourceLocA",d-1).concat("inIdx.a"),y=s==="max"?"greaterThan":"lessThan",$=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${w.join()})));`,C=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,v=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${p.join()}),
                                          vec2(${p.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${p.join()}),
                               vec2(${p.slice(-2).join()}));
      }
      ${v}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${u[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${u[l-2]} < ${a[l-2]-1};
        ${h}
        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},
          sourceLocB${f}, sourceLocA${f}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${C};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${$}
          vec4 candidate = ${C};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}function Ay(n,t,e,s=null){let o=t.shape[0],r=t.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=$c(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},l=new Rz(a,e,s==null),c=[t];s!=null&&c.push(s);const u=n.runWebGLProgram(l,c,"int32");if(u.shape[1]===1)return u;const h=Ay(n,t,e,u);return n.disposeIntermediateTensorInfo(u),h}function Fy(n,t,e,s=null){const o=s!=null?s.shape:t.shape,r=o[o.length-1],i=$c(r),a=new Dz(o,i,e,s==null),l=s==null?[t]:[t,s],c=n.runWebGLProgram(a,l,"int32");if(c.shape.length===t.shape.length){const u=Fy(n,t,e,c);return n.disposeIntermediateTensorInfo(c),u}return c}function _y(n,t,e,s){const o=[e];if(Se("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,t.shape.length),!V().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){const r=[],i=n.texData.get(t.dataId),a=i!==null&&i.isPacked;let l=t;a&&(l=n.unpackTensor(t),r.push(l));const[c,u]=we(l.shape,o),h=H(u),d=nt({inputs:{x:l},backend:n,attrs:{shape:[-1,h]}});r.push(d);const p=Ay(n,d,s);r.push(p);const f=nt({inputs:{x:p},backend:n,attrs:{shape:c}});return r.forEach(m=>n.disposeIntermediateTensorInfo(m)),f}return Fy(n,t,s)}function Az(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Ct(r,o.shape);const a=Zt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Pe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=re(i.length,l.shape.length)),Se("argMax",[i[0]],l.shape.length);const u=_y(e,l,i[0],"max");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const Fz={kernelName:dl,backendName:"webgl",kernelFunc:Az};function _z(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r}=s;let i=Ct(r,o.shape);const a=Zt(i,o.shape.length);let l=o;const c=[];a!=null&&(l=Pe({inputs:{x:o},backend:e,attrs:{perm:a}}),c.push(l),i=re(i.length,l.shape.length)),Se("argMin",[i[0]],l.shape.length);const u=_y(e,l,i[0],"min");return c.forEach(h=>e.disposeIntermediateTensorInfo(h)),u}const Oz={kernelName:pl,backendName:"webgl",kernelFunc:_z};const Lz=Nn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Mz=Nt({opSnippet:Lz}),Pz={kernelName:Qr,backendName:"webgl",kernelFunc:Mz};const zz=Nn+"return log(x + sqrt(x * x + 1.0));",Bz=Nt({opSnippet:zz}),Vz={kernelName:ti,backendName:"webgl",kernelFunc:Bz};const Wz=Nn+`
  return atan(x);
`,Uz=Nt({opSnippet:Wz}),Gz={kernelName:ei,backendName:"webgl",kernelFunc:Uz};const Hz=zp+`
  return atan(a, b);
`,qz=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ma+`
  return result;
`,jz=Ne({opSnippet:Hz,packedOpSnippet:qz}),Kz={kernelName:si,backendName:"webgl",kernelFunc:jz};const Xz=Nn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Yz=Nt({opSnippet:Xz}),Zz={kernelName:ni,backendName:"webgl",kernelFunc:Yz};class jr{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideHeight,l=t.strideWidth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterHeight,d=t.effectiveFilterWidth,p=t.padInfo.top,f=t.padInfo.left;this.outputShape=t.outShape;const m=e==="avg",g=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`;let b="0.0";if(m||(b="-1.0 / 1e-20"),s){const k=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${p}, ${f});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${h};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${k} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:x:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const w="max";let y=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(y="avgValue / count");const $=Math.floor(i/4)*4,C=i%4,v=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${p}, ${f});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${h};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${$}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${v}
          }

          int xC = xCCorner + ${$};
          if (${C===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${C===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${v}
          } else if (${C===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${v}
          }
        }
        setOutput(${y});
      }
    `}}class Vp{constructor(t,e,s,o=!1,r=!1){if(this.variableNames=["x"],e==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=t.filterWidth,a=t.strideDepth,l=t.strideHeight,c=t.strideWidth,u=t.dilationDepth,h=t.dilationHeight,d=t.dilationWidth,p=t.effectiveFilterDepth,f=t.effectiveFilterHeight,m=t.effectiveFilterWidth,g=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;const w=e==="avg";let y="0.0";if(w||(y="-1.0 / 1e-20"),s){const T=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${c});
        const ivec3 pads = ivec3(${g}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${p};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${f};
                wR += ${h}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${T} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${f} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const $="max";let C=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(C="avgValue / count");const v=Math.floor(i/4)*4,k=i%4,N=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${$}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${c});
      const ivec3 pads = ivec3(${g}, ${x}, ${b});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${f};
            wR += ${h}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${v}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${N}
            }

            int xC = xCCorner + ${v};
            if (${k===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${k===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${N}
            } else if (${k===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${N}
            }
          }
          setOutput(${C});
        }
      }
    `}}function Jz(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;pa(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(_e(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=kn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Rt(u.inShape,u.outShape))return en({inputs:{x:o},backend:e});const h=new jr(u,"avg",!1);return e.runWebGLProgram(h,[o],"float32")}const Qz={kernelName:fl,backendName:"webgl",kernelFunc:Jz};function tB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dimRoundingMode:l,dataFormat:c}=s,u=[1,1,1],h=ps(o.shape,r,i,u,a,l,c),d=new Vp(h,"avg",!1);return e.runWebGLProgram(d,[o],"float32")}const eB={kernelName:ml,backendName:"webgl",kernelFunc:tB};class nB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterHeight,c=t.effectiveFilterWidth,u=l-1-t.padInfo.top,h=c-1-t.padInfo.left,d=1/(e*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${h});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class sB{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.effectiveFilterDepth,d=t.effectiveFilterHeight,p=t.effectiveFilterWidth,f=h-1-t.padInfo.front,m=d-1-t.padInfo.top,g=p-1-t.padInfo.left,x=1/(e*s*o);this.userCode=`
      const ivec3 pads = ivec3(${f}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${h};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function oB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=ps(i.shape,a,l,h,c,u),p=new sB(d);return e.runWebGLProgram(p,[o],i.dtype)}const rB={kernelName:oh,backendName:"webgl",kernelFunc:oB};function iB(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r;pa([o,r],"avgPoolGrad");const{filterSize:a,strides:l,pad:c}=s,u=kn(i.shape,a,l,1,c),h=new nB(u);return e.runWebGLProgram(h,[o],i.dtype)}const aB={kernelName:sh,backendName:"webgl",kernelFunc:iB};function lB(n){const{inputs:t,backend:e,attrs:s}=n,{a:o,b:r}=t,{transposeA:i,transposeB:a}=s;return ll({a:o,b:r,transposeA:i,transposeB:a,backend:e})}const cB={kernelName:gl,backendName:"webgl",kernelFunc:lB};class uB{constructor(t,e,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],bt(t,e),bt(t,s);let a="0.0";o!=null&&(bt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";r!=null&&(bt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}class hB{constructor(t,e,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],bt(t,e),bt(t,s);let a="vec4(0.0)";o!=null&&(bt(t,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";r!=null&&(bt(t,r),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}const dB=({inputs:n,backend:t,attrs:e})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=n;I(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),I(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),I(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=e;l==null&&(l=.001);const c=[s,o,r];let u=null;i!=null&&(u=i.shape,c.push(i));let h=null;a!=null&&(h=a.shape,c.push(a));const d=V().getBool("WEBGL_PACK_NORMALIZATION")?new hB(s.shape,o.shape,r.shape,u,h,l):new uB(s.shape,o.shape,r.shape,u,h,l);return t.runWebGLProgram(d,c,c[0].dtype)},pB={kernelName:Tl,backendName:"webgl",kernelFunc:dB};class fB{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;const e=Vt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=mB(this.rank);let o;const r=t.map((i,a)=>`sourceLoc.${qu[a]} = start[${a}] + coords.${qu[a]};`);o=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const qu=["x","y","z","w","u","v"];function mB(n){if(n===1)return"sourceLoc";if(n<=6)return qu.slice(0,n).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${n} is not yet supported`)}class gB{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const e=Vt(this.rank),s=Le("coords",this.rank),o=Le("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${t[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${t[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((u,h)=>`start[${h}]`).join()});`:t.map((u,h)=>`${o[h]} = ${s[h]} + start[${h}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}}function xB(n,t,e,s){const o=s.texData.get(n.dataId),r=s.makeTensorInfo(e,n.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=e,i.dtype=n.dtype;let a=td(t,pt(n.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||n.dataId};const l=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,l+1),r}function Ir(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,size:i}=s,[a,l]=pc(o,r,i);if(Zh(o,a,l),H(l)===0)return e.makeTensorInfo(l,o.dtype,[]);if(e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.texData.get(o.dataId),d=uP(h.values,a,l,o.shape,o.dtype);return e.makeTensorInfo(l,o.dtype,d)}const{isPacked:c}=e.texData.get(o.dataId),u=Qh(o.shape,a,l);if(c||!u){const h=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gB(l):new fB(l),d=[a];return e.runWebGLProgram(h,[o],o.dtype,d)}return e.uploadToGPU(o.dataId),xB(o,a,l,e)}const bB={kernelName:sc,backendName:"webgl",kernelFunc:Ir};const yB=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,crops:i}=s;I(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((b,w)=>b*w),l=ta(o.shape,r,a),c=ea(l.length,r.length),u=na(o.shape,r,a),h=Vd(i,r.length),d=Wd(u,i,r.length),p=[],f=nt({inputs:{x:o},backend:e,attrs:{shape:l}}),m=Pe({inputs:{x:f},backend:e,attrs:{perm:c}}),g=nt({inputs:{x:m},backend:e,attrs:{shape:u}}),x=Ir({inputs:{x:g},backend:e,attrs:{begin:h,size:d}});return p.push(f),p.push(m),p.push(g),p.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},wB={kernelName:xl,backendName:"webgl",kernelFunc:yB};function $B(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i}=s,a=e.readSync(o.dataId),l=e.readSync(r.dataId),c=$y(a,l,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,c)}const CB={kernelName:rh,backendName:"webgl",kernelFunc:$B};function IB(n){const{inputs:t,backend:e}=n,{s0:s,s1:o}=t,r=e.readSync(s.dataId),i=e.readSync(o.dataId),a=bt(Array.from(r),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const vB={kernelName:Pm,backendName:"webgl",kernelFunc:IB};const kB="return float(a != b);",Oy=Ne({opSnippet:kB,cpuKernelImpl:eP,dtype:"bool"}),SB={kernelName:Hl,backendName:"webgl",kernelFunc:Oy};function xa(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return en({inputs:{x:o.complexTensorInfos.real},backend:e})}const NB={kernelName:Eh,backendName:"webgl",kernelFunc:xa};const TB="return float(int(x));";function EB(n,t){const e=new Kn(n.shape,TB),s=t.runWebGLProgram(e,[n],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}function ju(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return en({inputs:{x:o},backend:e});const i=be(o.shape),a=ju({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),l=qs({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),l}if(o.dtype==="complex64"){const i=xa({inputs:{input:o},backend:e}),a=ju({inputs:{x:i},backend:e,attrs:{dtype:r}});return e.disposeIntermediateTensorInfo(i),a}if(!Am(o.dtype,r)){const i=en({inputs:{x:o},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const i=e.texData.get(o.dataId).values,[a,l,c]=O3(i,o.shape,o.dtype,r);return e.makeTensorInfo(a,l,c)}if(r==="int32")return EB(o,e);if(r==="bool"){const i=e.makeTensorInfo([],"bool",ve("bool",1)),l=Oy({inputs:{a:o,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const RB={kernelName:oi,backendName:"webgl",kernelFunc:ju};const gm="return ceil(x);",DB=Nt({opSnippet:gm,packedOpSnippet:gm,cpuKernelImpl:L3}),AB={kernelName:ri,backendName:"webgl",kernelFunc:DB};class FB{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}class _B{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}function OB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{clipValueMin:r,clipValueMax:i}=s;let a;V().getBool("WEBGL_PACK_CLIP")?a=new _B(o.shape):a=new FB(o.shape);const l=[[r],[i]];return e.runWebGLProgram(a,[o],o.dtype,l)}const LB={kernelName:ii,backendName:"webgl",kernelFunc:OB};class MB{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}function xm(n,t){return{dataId:t.dataId,dtype:t.dtype,shape:n.shape}}function PB(n){const{inputs:t,backend:e}=n,{x:s}=t,o=e.texData.get(s.dataId),r=new MB(s.shape),i=[xm(s,o.complexTensorInfos.real),xm(s,o.complexTensorInfos.imag)];return e.runWebGLProgram(r,i,i[0].dtype)}const zB={kernelName:bl,backendName:"webgl",kernelFunc:PB};class BB{constructor(t){this.outputShape=[],this.outputShape=Zn(t,1),this.variableNames=t.map((i,a)=>`T${a}`);const e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];const s=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){const a=e[i-1];s.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=e.length,r=e[e.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}class VB{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Zn(t,e);const s=this.outputShape,o=s.length,r=Vt(o),i=Le("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=t.map((m,g)=>`T${g}`);const l=new Array(t.length-1);l[0]=t[0][e];for(let m=1;m<l.length;m++)l[m]=l[m-1]+t[m][e];const c=a[e],u=a.slice(-2),h=a.join();let d=`if (${c} < ${l[0]}) {
        return getChannel(
            getT0(${h}), vec2(${u.join()}));
        }`;for(let m=1;m<l.length;m++){const g=l[m-1];d+=`
        if (${c} < ${l[m]}  && ${c} >= ${l[m-1]}) {
          return getChannel(
            getT${m}(${Aa(a,c,g)}),
            vec2(${Aa(u,c,g)}));
        }`}const p=l.length,f=l[l.length-1];d+=`
        return getChannel(
          getT${p}(${Aa(a,c,f)}),
          vec2(${Aa(u,c,f)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${d}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function Aa(n,t,e){const s=n.indexOf(t);return n.map((r,i)=>i===s?`${r} - ${e}`:r).join()}function Bc(n){const{inputs:t,backend:e}=n,{input:s}=t,o=e.texData.get(s.dataId);return en({inputs:{x:o.complexTensorInfos.imag},backend:e})}const WB={kernelName:$h,backendName:"webgl",kernelFunc:Bc};function _r(n,t,e){const s=n[0].dtype;if(s==="complex64"){const p=n.map(b=>xa({inputs:{input:b},backend:e})),f=n.map(b=>Bc({inputs:{input:b},backend:e})),m=_r(p,t,e),g=_r(f,t,e),x=qs({inputs:{real:m,imag:g},backend:e});return p.forEach(b=>e.disposeIntermediateTensorInfo(b)),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),x}let o=e.shouldExecuteOnCPU(n);if(s==="string"&&(o=!0),o){const p=n.map(y=>{const C=[-1,H(y.shape.slice(t))];return nt({inputs:{x:y},backend:e,attrs:{shape:C}})}),f=p.map(y=>({vals:e.readSync(y.dataId),shape:y.shape})),m=Zn(p.map(y=>y.shape),1),g=p[0].shape[0]===1,x=M3(f,m,s,g),b=Zn(n.map(y=>y.shape),t),w=e.makeTensorInfo(b,s,x);return p.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const r=n.filter(p=>H(p.shape)>0),i=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1;if(r.length===1){const p=i?new Kn(n[0].shape,$s):new vs(n[0].shape,$s);return e.runWebGLProgram(p,n,s)}const a=V().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>a){const p=[];for(let m=0;m<r.length;m+=a){const g=r.slice(m,m+a);p.push(_r(g,t,e))}const f=_r(p,t,e);for(const m of p)e.disposeIntermediateTensorInfo(m);return f}if(i){const p=new VB(r.map(f=>f.shape),t);return e.runWebGLProgram(p,r,s)}const{tensors2D:l,outShape:c}=UB(r,t,e),u=new BB(l.map(p=>p.shape)),h=e.runWebGLProgram(u,l,s);l.forEach(p=>e.disposeIntermediateTensorInfo(p));const d=nt({inputs:{x:h},attrs:{shape:c},backend:e});return e.disposeIntermediateTensorInfo(h),d}function UB(n,t,e){const s=Zn(n.map(r=>r.shape),t);return{tensors2D:n.map(r=>nt({inputs:{x:r},attrs:{shape:[-1,H(r.shape.slice(t))]},backend:e})),outShape:s}}function Ly(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s,r=Ct(o,t[0].shape)[0],i=t.map(c=>c.shape);Pd(i,r);const a=Zn(t.map(c=>c.shape),r);if(H(a)===0)return e.makeTensorInfo(a,t[0].dtype,[]);const l=t.filter(c=>H(c.shape)>0);return l.length===1?en({inputs:{x:l[0]},backend:e}):_r(l,r,e)}const GB={kernelName:yl,backendName:"webgl",kernelFunc:Ly};class My{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;const i=t.padInfo.top,a=t.padInfo.left,l=t.strideHeight,c=t.strideWidth,u=t.dilationHeight,h=t.dilationWidth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4,g=t.dataFormat==="channelsLast",x=g?1:2,b=g?2:3,w=g?3:1;let y="",$="";s&&(o?y=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?y=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:y=`
          float activation(float x) {
            ${s}
          }
        `,$="result = activation(result);");const C=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${l}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${p}; wC++) {
            int xC = xCCorner + wC * ${h};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${f}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${f}) *
                    getW(wR, wC, ${f}, d2);
              } else {
                dotProd +=
                    getX(batch, ${f}, xR, xC) *
                    getW(wR, wC, ${f}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${f}, d2),
                getW(wR, wC, ${f} + 1, d2),
                getW(wR, wC, ${f} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${f}),
                  getX(batch, xR, xC, ${f} + 1),
                  getX(batch, xR, xC, ${f} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${f}, xR, xC),
                  getX(batch, ${f} + 1, xR, xC),
                  getX(batch, ${f} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${C}
        ${$}
        setOutput(result);
      }
    `}}class HB{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const e=t.padInfo.front,s=t.padInfo.top,o=t.padInfo.left,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=t.dilationDepth,c=t.dilationHeight,u=t.dilationWidth,h=t.filterDepth,d=t.filterHeight,p=t.filterWidth,f=Math.floor(t.inChannels/4)*4,m=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${h}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${p}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${f}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${f}) *
                  getW(wF, wR, wC, ${f}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${f}),
                  getX(batch, xF, xR, xC, ${f} + 1),
                  getX(batch, xF, xR, xC, ${f} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${f}, d2),
                  getW(wF, wR, wC, ${f} + 1, d2),
                  getW(wF, wR, wC, ${f} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class Py{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.padInfo.left,a=t.strideWidth,l=t.dilationWidth,c=t.filterHeight,u=t.filterWidth,h=u;let d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let g=0;g<u;g++)d+=`
           vec4 xTexelC${g*2};
           int xTexelC${g*2}Ready;
           vec4 xTexelC${g*2+1};
           int xTexelC${g*2+1}Ready;
           vec4 xC${g};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let g=0;g<u;g++)d+=`
           xTexelC${g*2} = vec4(0.0);
           xTexelC${g*2}Ready = 0;
           xTexelC${g*2+1} = vec4(0.0);
           xTexelC${g*2+1}Ready = 0;
           xC${g} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let g=0;g<(h+1)/2;g++){const x=g*2;if(d+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?d+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<u)){const b=i%2===0?Yu(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:d+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?d+=`
                     xC${x+1} = xTexelC${x};
                     `:d+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<u&&(i%2===1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<u&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<u&&(d+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<u&&(d+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<u&&(d+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let p="",f="";s&&(o?p=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${s}
         }`:r?p=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${s}
         }`:p=`vec4 activation(vec4 x) {
           ${s}
         }`,f="result = activation(result);");const m=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${p}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${f}
         setOutput(result);
       }
     `}}class qB{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Be(this.outputShape.length);const{dataFormat:s}=e,o=ze(),r=s==="channelsLast",i=r?1:2,a=r?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`;let c="";for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)c+=`
          blockIndex = rc.z + ${h};
          pos = rc.y + ${u};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+h}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${o.output} = result;
      }
    `}}function cl(n,t){const e=n.length;return e>=3?t?[...n.slice(0,-3),n[e-3]*n[e-2],n[e-1]]:[...n.slice(0,-3),n[e-3],n[e-2]*n[e-1]]:!t&&e===1&&n[0]>1?[n[0],1]:null}function zy({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const l=n.shape,c=s.texData.get(n.dataId),u=e.inChannels,h=l[0]*l[1]*l[2],d=e.outChannels,p=e.dataFormat==="channelsLast",f=!1,m=!1;let g;const x=[];if(r!=null){const y=cl(r.shape,p);y!=null&&(r=nt({inputs:{x:r},backend:s,attrs:{shape:y}}),x.push(r))}if(o!=null){const y=cl(o.shape,p);y!=null&&(o=nt({inputs:{x:o},backend:s,attrs:{shape:y}}),x.push(o))}if(!((h===1||d===1)&&u>Dy)&&c.isPacked&&p&&c.texture!=null&&l[2]%2!==0&&Rt(c.shape.slice(-3),l.slice(-3))){const y=l[0]*l[1]*(l[2]+1),$={dataId:n.dataId,shape:[1,y,e.inChannels],dtype:n.dtype},C=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,I(al(c.shape,$.shape),()=>`packed reshape ${c.shape} to ${$.shape} isn't free`);const v=nt({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(v);const k=ll({a:$,b:v,backend:s,transposeA:f,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),N=s.texData.get(k.dataId);I(N.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=C,N.shape=e.outShape,g=en({inputs:{x:k},backend:s}),g.shape=e.outShape,x.push(k)}else{const y=e.outHeight*e.outWidth,$=nt({inputs:{x:n},backend:s,attrs:{shape:p?[e.batchSize,y,e.inChannels]:[e.batchSize,e.inChannels,y]}}),C=nt({inputs:{x:t},backend:s,attrs:{shape:[1,e.inChannels,e.outChannels]}}),v=ll({a:p?$:C,b:p?C:$,transposeA:!p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i});g=nt({inputs:{x:v},backend:s,attrs:{shape:e.outShape}}),x.push($),x.push(C),x.push(v)}for(const y of x)s.disposeIntermediateTensorInfo(y);return g}function By({x:n,filter:t,convInfo:e,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:l,filterHeight:c,inChannels:u,outWidth:h,outHeight:d,dataFormat:p}=e,f=p==="channelsLast",m=l*c*u,g=d*h,x=[e.batchSize,m,g],b=!0,w=!1,y=[];if(r!=null){const W=cl(r.shape,f);W!=null&&(r=nt({inputs:{x:r},backend:s,attrs:{shape:W}}),y.push(r))}if(o!=null){const W=cl(o.shape,f);W!=null&&(o=nt({inputs:{x:o},backend:s,attrs:{shape:W}}),y.push(o))}const $=nt({inputs:{x:t},backend:s,attrs:{shape:[1,m,H(t.shape)/m]}});y.push($);const C=new qB(x,e),v=[n.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],k=s.runWebGLProgram(C,[n],"float32",v),N=nt({inputs:{x:k},backend:s,attrs:{shape:x}});y.push(k),y.push(N);const T=o!=null,F=r!=null,z=a==="leakyrelu",M=a?qr(a,!0):null,L=new Ry(f?N.shape:$.shape,f?$.shape:N.shape,f?[e.batchSize,g,e.outChannels]:[e.batchSize,e.outChannels,g],b,w,T,M,F,z),O=f?[N,$]:[$,N];if(o&&O.push(o),F&&O.push(r),z){const W=s.makeTensorInfo([],"float32",Ms(i,"float32"));O.push(W),y.push(W)}const B=s.runWebGLProgram(L,O,"float32"),U=nt({inputs:{x:B},backend:s,attrs:{shape:e.outShape}});y.push(B);for(const W of y)s.disposeIntermediateTensorInfo(W);return U}function jB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dataFormat:l,dilations:c,dimRoundingMode:u}=s,h=fs(l),d=ke(o.shape,r.shape,i,c,a,u,!1,h);let p;if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))p=zy({x:o,filter:r,convInfo:d,backend:e});else if(d.strideWidth<=2&&h==="channelsLast"&&V().getBool("WEBGL_EXP_CONV")){const m=new Py(d),g=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];p=e.runWebGLProgram(m,[o,r],"float32",g)}else if(V().getBool("WEBGL_CONV_IM2COL"))p=By({x:o,filter:r,convInfo:d,backend:e});else{const m=new My(d);p=e.runWebGLProgram(m,[o,r],"float32")}const f=nt({inputs:{x:p},backend:e,attrs:{shape:d.outShape}});return e.disposeIntermediateTensorInfo(p),f}const KB={kernelName:wl,backendName:"webgl",kernelFunc:jB};class XB{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class YB{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,l=s-1-t.padInfo.left,c=i?1:2,u=i?2:3,h=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${h}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class ZB{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${r};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class JB{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterDepth,s=t.filterHeight,o=t.filterWidth,r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,l=e-1-t.padInfo.front,c=s-1-t.padInfo.top,u=o-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${c}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function QB(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,dataFormat:l,dimRoundingMode:c,filterShape:u}=s,h=fs(l),d=ke(o.shape,u,i,1,a,c,!1,h),p=new XB(d);return e.runWebGLProgram(p,[o,r],"float32")}const tV={kernelName:ah,backendName:"webgl",kernelFunc:QB};function eV(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{inputShape:i,strides:a,pad:l,dataFormat:c,dimRoundingMode:u}=s,h=fs(c),d=ke(i,r.shape,a,1,l,u,!1,h),p=new YB(d);return e.runWebGLProgram(p,[o,r],"float32")}const nV={kernelName:$l,backendName:"webgl",kernelFunc:eV};function sV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Ps(o.shape,r.shape,i,l,a),u=new HB(c);return e.runWebGLProgram(u,[o,r],"float32")}const oV={kernelName:Cl,backendName:"webgl",kernelFunc:sV};function rV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,pad:a,filterShape:l}=s,c=Ps(o.shape,l,i,1,a),u=new ZB(c);return e.runWebGLProgram(u,[o,r],"float32")}const iV={kernelName:lh,backendName:"webgl",kernelFunc:rV};function aV(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{pad:i,strides:a,inputShape:l}=s,c=Ps(l,r.shape,a,1,i),u=new JB(c);return e.runWebGLProgram(u,[o,r],"float32")}const lV={kernelName:ch,backendName:"webgl",kernelFunc:aV};const cV=Cr+`
  return cos(x);
`,uV=Nt({opSnippet:cV}),hV={kernelName:ai,backendName:"webgl",kernelFunc:uV};const dV=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,pV=Nt({opSnippet:dV}),fV={kernelName:li,backendName:"webgl",kernelFunc:pV};class mV{constructor(t,e,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,l,c]=t,[u]=e,[h,d]=s;this.outputShape=[u,h,d,c];const p=o==="bilinear"?1:0,[f,m]=[`${a-1}.0`,`${l-1}.0`],[g,x,b]=h>1?[`${(a-1)/(h-1)}`,"(y2-y1) * height_ratio",`y1*${f} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${f}`],[w,y,$]=d>1?[`${(l-1)/(d-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${y};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${f} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${$};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${p} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}const gV=n=>{const{inputs:t,backend:e,attrs:s}=n,{image:o,boxes:r,boxInd:i}=t,{cropSize:a,method:l,extrapolationValue:c}=s,u=new mV(o.shape,r.shape,a,l,c);return e.runWebGLProgram(u,[o,r,i],"float32")},xV={kernelName:hh,backendName:"webgl",kernelFunc:gV};var Kr;(function(n){n.Prod="*",n.Sum="+"})(Kr||(Kr={}));class bm{constructor(t,e,s,o){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===Kr.Prod?"1.0":"0.0",a=s?i:`getX(${ym(r,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1];let c="",u="";s?(c=o?`end != ${l-1}`:"end != 0",u=o?"end + 1":"end - 1"):(c=o?`end + pow2 < ${l}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Vt(r)} coords = getOutputCoords();
        int end = ${wm(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${u};
          ${wm(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${ym(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function ym(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.x, ${t}.y`;if(n===3)return`${t}.x, ${t}.y, ${t}.z`;if(n===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function wm(n,t,e){if(n===1)return`${t}`;if(n===2)return`${t}.y`;if(n===3)return`${t}.z`;if(n===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${n} is not yet supported`)}function Vy(n,t,e,s,o,r){const i=t.shape.length,a=Zt([s],i);let l=t;a!=null&&(l=Pe({inputs:{x:t},backend:e,attrs:{perm:a}}));const c=re(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${s}`);const u=l.shape[c];let h=en({inputs:{x:l},backend:e});for(let d=0;d<=Math.ceil(Math.log2(u))-1;d++){const p=new bm(n,l.shape,!1,r),f=[[d]],m=h;h=e.runWebGLProgram(p,[h],h.dtype,f),e.disposeIntermediateTensorInfo(m)}if(o){const d=new bm(n,l.shape,o,r),p=h;h=e.runWebGLProgram(d,[h],h.dtype),e.disposeIntermediateTensorInfo(p)}if(a!=null){const d=zs(a),p=Pe({inputs:{x:h},backend:e,attrs:{perm:d}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),p}return h}function bV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Vy(Kr.Prod,o,e,r,i,a)}const yV={kernelName:uh,backendName:"webgl",kernelFunc:bV};function wV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,exclusive:i,reverse:a}=s;return Vy(Kr.Sum,o,e,r,i,a)}const $V={kernelName:Il,backendName:"webgl",kernelFunc:wV};function CV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,weights:r}=t,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=$y(l,c,r.dtype,r.shape,i);return e.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const l=e.bufferSync(o),c=e.bufferSync(r),u=_3(l,c,i,a);return e.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const IV={kernelName:dh,backendName:"webgl",kernelFunc:CV};class vV{constructor(t,e,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}function kV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockSize:r,dataFormat:i}=s,a=o.shape[0],l=i==="NHWC"?o.shape[1]:o.shape[2],c=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],h=l*r,d=c*r,p=u/(r*r),f=i==="NHWC"?[a,h,d,p]:[a,p,h,d],m=new vV(f,r,i);return e.runWebGLProgram(m,[o],o.dtype)}const SV={kernelName:ph,backendName:"webgl",kernelFunc:kV};class Wy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.filterHeight,a=t.filterWidth,l=t.outChannels/t.inChannels;let c="",u="";s&&(o?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:c=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${h}
        ${u}
        setOutput(result);
      }
    `}}class Uy{constructor(t,e=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Be(this.outputShape.length);const i=t.outChannels/t.inChannels,a=t.padInfo.left,l=t.strideWidth,c=t.dilationWidth,u=t.filterHeight,h=t.filterWidth,d=h;let p=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<h;x++)p+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;p+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<h;x++)p+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;p+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(d+1)/2;x++){const b=x*2;if(p+=`
          xC = xCCorner + ${b*c};
          `,l===1){if(b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,c===1&&b>0?p+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:p+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):p+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<h)){const w=a%2===0?Yu(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(p+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,c>1?p+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:p+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):w===1?p+=`
                    xC${b+1} = xTexelC${b};
                    `:p+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<h&&(a%2===1?(p+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<h&&(p+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(p+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<h&&(p+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<h&&(p+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<h&&(p+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}p+=`
    }
  `,p+=`
      }
    `;let f="",m="";s&&(o?f=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?f=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:f=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${f}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${p}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}function NV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l,dimRoundingMode:c}=s;let u=l;u==null&&(u=[1,1]),I(_e(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const h=ke(o.shape,r.shape,i,u,a,c,!0);let d;V().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1?d=new Uy(h):d=new Wy(h);const p=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];return e.runWebGLProgram(d,[o,r],"float32",p)}const TV={kernelName:vl,backendName:"webgl",kernelFunc:NV};class EV{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;const e=t.strideHeight,s=t.strideWidth,o=t.padInfo.top,r=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${o};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class RV{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;const e=t.filterHeight,s=t.filterWidth,o=t.strideHeight,r=t.strideWidth,i=e-1-t.padInfo.top,a=s-1-t.padInfo.left,l=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function DV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,dy:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,filterShape:u}=s,h=ke(o.shape,u,i,a,l,c,!0),d=new EV(h);return e.runWebGLProgram(d,[o,r],"float32")}const AV={kernelName:fh,backendName:"webgl",kernelFunc:DV};function FV(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,filter:r}=t,{strides:i,dilations:a,pad:l,dimRoundingMode:c,inputShape:u}=s,h=ke(u,r.shape,i,a,l,c,!0),d=new RV(h);return e.runWebGLProgram(d,[o,r],"float32")}const _V={kernelName:mh,backendName:"webgl",kernelFunc:FV};class OV{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}function LV(n){const{inputs:t,backend:e}=n,{x:s}=t,o=[...s.shape,...s.shape],r=H(s.shape),i=nt({inputs:{x:s},backend:e,attrs:{shape:[r]}}),a=new OV(r),l=e.runWebGLProgram(a,[i],i.dtype),c=nt({inputs:{x:l},backend:e,attrs:{shape:o}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),c}const MV={kernelName:zm,backendName:"webgl",kernelFunc:LV};class PV{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;const{inHeight:e,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:c,dilationWidth:u}=t,{top:h,left:d}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${h}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}function zV(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r}=t,{strides:i,pad:a,dilations:l}=s,c=Xi(o.shape,r.shape,i,a,"NHWC",l);let u;const h=new PV(c);u=e.runWebGLProgram(h,[o,r],"float32");const d=nt({inputs:{x:u},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(u),d}const BV={kernelName:kl,backendName:"webgl",kernelFunc:zV};function VV(n){const{inputs:t,backend:e,attrs:s}=n,{equation:o}=s,r=t,{allDims:i,summedDims:a,idDims:l}=Yd(o,r.length);Jd(i.length,l,r);const{path:c,steps:u}=Qd(a,l),h=u.length;let d=null,p=i.length;const f=[];for(let m=0;m<h;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:b}=Zd(p,l[g]);let w;tp(x)?w=r[g]:(w=Pe({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const y=w.shape.slice();for(let $=0;$<b.length;++$)y.splice(b[$],0,1);Rt(w.shape,y)||(w=nt({inputs:{x:w},backend:e,attrs:{shape:y}}),f.push(w)),d===null?d=w:(d=Bp({inputs:{a:w,b:d},backend:e}),f.push(d))}m<h-1&&(c[m]>=0&&(d=zc({inputs:{x:d},backend:e,attrs:{axis:c[m]-(i.length-p),keepDims:!1}}),f.push(d)),p--)}for(const m of f)m!==d&&e.disposeIntermediateTensorInfo(m);return d}const WV={kernelName:Bm,backendName:"webgl",kernelFunc:VV};const UV="return (x >= 0.0) ? x : (exp(x) - 1.0);",GV=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,HV=Nt({opSnippet:UV,packedOpSnippet:GV}),qV={kernelName:ui,backendName:"webgl",kernelFunc:HV};const jV="return (b >= 1.0) ? a : a * (b + 1.0);",KV=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,XV=n=>{const{inputs:t,backend:e}=n,{dy:s,y:o}=t,r=V().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ga(KV,s.shape,o.shape):new lr(jV,s.shape,o.shape);return e.runWebGLProgram(r,[s,o],s.dtype)},YV={kernelName:gh,backendName:"webgl",kernelFunc:XV};const ZV=`
  return vec4(equal(a, b));
`,JV="return float(a == b);",QV=Ne({opSnippet:JV,packedOpSnippet:ZV,dtype:"bool",cpuKernelImpl:P3}),tW={kernelName:Sl,backendName:"webgl",kernelFunc:QV};const eW=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${Ud};
  float a1 = ${Gd};
  float a2 = ${Hd};
  float a3 = ${qd};
  float a4 = ${jd};
  float a5 = ${Kd};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,nW=Nt({opSnippet:eW}),sW={kernelName:hi,backendName:"webgl",kernelFunc:nW};const oW=Cr+`
  return exp(x);
`,rW=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Gy=Nt({opSnippet:oW,packedOpSnippet:rW,cpuKernelImpl:z3,dtype:"float32"}),iW={kernelName:di,backendName:"webgl",kernelFunc:Gy};function Ku(n){const{inputs:t,attrs:e,backend:s}=n,{dim:o}=e,{input:r}=t,i=r.shape.length,a=r.shape.slice();let l=o;return o<0&&(I(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+o+1),a.splice(l,0,1),nt({inputs:{x:r},backend:s,attrs:{shape:a}})}const aW={kernelName:Nl,backendName:"webgl",kernelFunc:Ku};const $m="return exp(x) - 1.0;",lW=Nt({opSnippet:$m,packedOpSnippet:$m,cpuKernelImpl:B3}),cW={kernelName:pi,backendName:"webgl",kernelFunc:lW};class Cm{constructor(t,e,s){this.variableNames=["real","imag"];const o=e[1];this.outputShape=e;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}function Hy(n,t,e){const s=e.texData.get(n.dataId),o=H(n.shape),r=n.shape[n.shape.length-1],i=o/r,a=nt({inputs:{x:n},backend:e,attrs:{shape:[i,r]}}),l=a.shape,c=new Cm("real",l,t),u=new Cm("imag",l,t),h=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:l},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:l}],d=e.runWebGLProgram(c,h,"float32"),p=e.runWebGLProgram(u,h,"float32"),f=qs({inputs:{real:d,imag:p},backend:e});e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p);const m=nt({inputs:{x:f},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(f),m}function uW(n){const{inputs:t,backend:e}=n,{input:s}=t;return Hy(s,!1,e)}const hW={kernelName:xh,backendName:"webgl",kernelFunc:uW};class dW{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}function ba(n){const{backend:t,attrs:e}=n,{shape:s,value:o}=e;let{dtype:r}=e;if(r=r||Yr(o),r==="string"){const i=le(r,H(s));return i.fill(o),t.makeTensorInfo(s,r,i)}else{const i=new dW(s,o),a=[[o]];return t.runWebGLProgram(i,[],r,a)}}const pW={kernelName:bh,backendName:"webgl",kernelFunc:ba};class fW{constructor(t){this.variableNames=["Image"],this.outputShape=[];const e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const mW={kernelName:yh,backendName:"webgl",kernelFunc:({inputs:n,backend:t})=>{const{image:e}=n,s=t,o=new fW(e.shape);return s.runWebGLProgram(o,[e],e.dtype)}};const Im="return floor(x);",gW=Nt({opSnippet:Im,packedOpSnippet:Im,cpuKernelImpl:V3}),xW={kernelName:fi,backendName:"webgl",kernelFunc:gW};const bW=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,yW=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,wW=Ne({opSnippet:bW,packedOpSnippet:yW,dtype:"int32"}),$W={kernelName:mi,backendName:"webgl",kernelFunc:wW};class CW{constructor(t){this.variableNames=["A"];const e=ze(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}class IW{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const e=ze(),[s,o]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}}const vW={kernelName:fu,backendName:"webgl",kernelFunc:kW};let Po,ru=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function kW(n){const{inputs:t,backend:e,attrs:s}=n;let{pixels:o}=t;const{numChannels:r}=s,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[l,c]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[c,l],h=[c,l,r];if(a||i){const m=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Po==null||m!==ru)&&(ru=m,Po=document.createElement("canvas").getContext("2d",{willReadFrequently:ru})),Po.canvas.width=l,Po.canvas.height=c,Po.drawImage(o,0,0,l,c),o=Po.canvas}const d=e.makeTensorInfo(u,"int32");e.texData.get(d.dataId).usage=rn.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);const p=V().getBool("WEBGL_PACK")?new IW(h):new CW(h),f=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),f}function SW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dataFormat:u,dilations:h,dimRoundingMode:d,activation:p,leakyreluAlpha:f}=s,m=fs(u),g=ke(o.shape,r.shape,l,h,c,d,!1,m);let x;const b=[],w=i!=null,y=a!=null,$=p==="leakyrelu",C=()=>{const k=[o,r],N=(T,F)=>{if(F==="NCHW"&&T.shape.length===1&&T.shape[0]!==1){const z=nt({inputs:{x:T},backend:e,attrs:{shape:[T.shape[0],1,1]}});return b.push(z),z}return T};if(w&&k.push(N(i,u)),y&&k.push(N(a,u)),$){const T=e.makeTensorInfo([],"float32",Ms(f,"float32"));k.push(T),b.push(T)}return k};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=zy({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else if(g.strideWidth<=2&&m==="channelsLast"&&V().getBool("WEBGL_EXP_CONV")){const k=p?qr(p,!0):null,N=new Py(g,w,k,y,$),T=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],F=C();x=e.runWebGLProgram(N,F,"float32",T)}else if(V().getBool("WEBGL_CONV_IM2COL"))x=By({x:o,filter:r,convInfo:g,backend:e,bias:i,activation:p,preluActivationWeights:a,leakyreluAlpha:f});else{const k=p?qr(p,!1):null,N=new My(g,w,k,y,$),T=C();x=e.runWebGLProgram(N,T,"float32")}const v=nt({inputs:{x},backend:e,attrs:{shape:g.outShape}});return b.push(x),b.forEach(k=>e.disposeIntermediateTensorInfo(k)),v}const NW={kernelName:Ma,backendName:"webgl",kernelFunc:SW};function TW(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,filter:r,bias:i,preluActivationWeights:a}=t,{strides:l,pad:c,dilations:u,dimRoundingMode:h,activation:d,leakyreluAlpha:p}=s,f=[];let m=u;m==null&&(m=[1,1]),I(_e(l,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`);const g=ke(o.shape,r.shape,l,m,c,h,!0),x=V().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,b=d?qr(d,x):null,w=[o,r],y=i!=null,$=a!=null,C=d==="leakyrelu";if(y&&w.push(i),$&&w.push(a),C){const T=e.makeTensorInfo([],"float32",Ms(p,"float32"));w.push(T),f.push(T)}let v;x?v=new Uy(g,y,b,$,C):v=new Wy(g,y,b,$,C);const k=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],N=e.runWebGLProgram(v,w,"float32",k);return f.forEach(T=>e.disposeIntermediateTensorInfo(T)),N}const EW={kernelName:Zm,backendName:"webgl",kernelFunc:TW};class RW{constructor(t,e,s,o){this.sliceDim=t,this.strides=e,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=s;const r=Vt(s.length);let i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}function DW(n){const{inputs:t,backend:e}=n,{params:s,indices:o}=t,r=o.shape,i=r[r.length-1],a=H(s.shape),[l,c,u,h]=Yh(s,o),d=nt({inputs:{x:o},backend:e,attrs:{shape:[c,i]}}),p=nt({inputs:{x:s},backend:e,attrs:{shape:[H(s.shape)/u,u]}});if(e.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=e.readSync(o.dataId),b=e.bufferSync(s),w=W3(x,b,s.dtype,c,i,u,h,s.shape,a);return e.makeTensorInfo(l,s.dtype,w.values)}const f=new RW(i,h,[c,u],s.shape),m=e.runWebGLProgram(f,[p,d],p.dtype),g=nt({inputs:{x:m},backend:e,attrs:{shape:l}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),g}const AW={kernelName:Vm,backendName:"webgl",kernelFunc:DW};class FW{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;const s=Vt(this.rank),o=_W(t);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function _W(n,t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<n.length;o++)o===2?s.push("index"):s.push(`${e[o]}`);return s.join()}function qy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,indices:r}=t,{axis:i,batchDims:a}=s,l=Ct(i,o.shape)[0];if(V().get("DEBUG")){const b=e.readSync(r.dataId),w=o.shape[l];for(let y=0;y<b.length;++y){const $=b[y];I($<=w-1&&$>=0,()=>`GatherV2: the index value ${$} is not in [0, ${w-1}]`)}}const c=np(o,r,l,a),u=H(r.shape),h=[],d=nt({inputs:{x:o},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=nt({inputs:{x:r},backend:e,attrs:{shape:[c.batchSize,u/c.batchSize]}});h.push(d),h.push(p);const f=[c.batchSize,c.outerSize,u/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const b=e.bufferSync(p),w=e.bufferSync(d),y=U3(w,b,f);return h.forEach($=>e.disposeIntermediateTensorInfo($)),e.makeTensorInfo(c.outputShape,y.dtype,y.values)}const m=new FW(d.shape,f),g=e.runWebGLProgram(m,[d,p],d.dtype);h.push(g);const x=nt({inputs:{x:g},backend:e,attrs:{shape:c.outputShape}});return h.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}const OW={kernelName:El,backendName:"webgl",kernelFunc:qy};const LW="return float(a > b);",MW=`
  return vec4(greaterThan(a, b));
`,PW=Ne({opSnippet:LW,packedOpSnippet:MW,cpuKernelImpl:G3,dtype:"bool"}),zW={kernelName:Rl,backendName:"webgl",kernelFunc:PW};const BW="return float(a >= b);",VW=`
  return vec4(greaterThanEqual(a, b));
`,WW=Ne({opSnippet:BW,packedOpSnippet:VW,dtype:"bool",cpuKernelImpl:H3}),UW={kernelName:gi,backendName:"webgl",kernelFunc:WW};function GW(n){const{inputs:t,backend:e}=n,{input:s}=t;return Hy(s,!0,e)}const HW={kernelName:wh,backendName:"webgl",kernelFunc:GW};const qW="return float(!isnan(x) && !isinf(x));",jW=Nt({opSnippet:qW,dtype:"bool"}),KW={kernelName:bi,backendName:"webgl",kernelFunc:jW};const XW="return float(isinf(x));",YW=Nt({opSnippet:XW,dtype:"bool"}),ZW={kernelName:yi,backendName:"webgl",kernelFunc:YW};const JW="return float(isnan(x));",QW=Nt({opSnippet:JW,dtype:"bool"}),t4={kernelName:wi,backendName:"webgl",kernelFunc:QW};const e4="return float(a < b);",n4=`
  return vec4(lessThan(a, b));
`,s4=Ne({opSnippet:e4,packedOpSnippet:n4,cpuKernelImpl:q3,dtype:"bool"}),o4={kernelName:Al,backendName:"webgl",kernelFunc:s4};const r4="return float(a <= b);",i4=`
  return vec4(lessThanEqual(a, b));
`,a4=Ne({opSnippet:r4,packedOpSnippet:i4,cpuKernelImpl:j3,dtype:"bool"}),l4={kernelName:Fl,backendName:"webgl",kernelFunc:a4};function c4(n){const{backend:t,attrs:e}=n,{start:s,stop:o,num:r}=e,i=K3(s,o,r);return t.makeTensorInfo([i.length],"float32",i)}const u4={kernelName:Wm,backendName:"webgl",kernelFunc:c4};const h4=Cr+`
  return x < 0.0 ? 0./0. : log(x);
`,d4=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,p4=Nt({opSnippet:h4,packedOpSnippet:d4,cpuKernelImpl:X3}),f4={kernelName:$i,backendName:"webgl",kernelFunc:p4};const m4=Cr+`
  return log(1.0 + x);
`,g4=Nt({opSnippet:m4}),x4={kernelName:Ci,backendName:"webgl",kernelFunc:g4};const b4="return float(a >= 1.0 && b >= 1.0);",y4=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,w4=Ne({opSnippet:b4,packedOpSnippet:y4,dtype:"bool"}),$4={kernelName:_l,backendName:"webgl",kernelFunc:w4};const C4="return float(!(x >= 1.0));",I4=Nt({opSnippet:C4}),v4={kernelName:Ol,backendName:"webgl",kernelFunc:I4};const k4="return float(a >= 1.0 || b >= 1.0);",S4=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,N4=Ne({opSnippet:k4,packedOpSnippet:S4,dtype:"bool"}),T4={kernelName:Ll,backendName:"webgl",kernelFunc:N4};class E4{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}}class R4{constructor(t,e,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=e,a=t[3]-1;this.outputShape=t;let l;const c=`float(${s}) + float(${o}) * sum`;r===.5?l=`inversesqrt(${c})`:r===1?l=`1.0/(${c})`:l=`exp(log(${c}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}}const D4=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{depthRadius:r,bias:i,alpha:a,beta:l}=s,c=V().getBool("WEBGL_PACK_NORMALIZATION")?new R4(o.shape,r,i,a,l):new E4(o.shape,r,i,a,l);return e.runWebGLProgram(c,[o],o.dtype)},A4={kernelName:Ml,backendName:"webgl",kernelFunc:D4};class F4{constructor(t,e,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}const _4=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o,y:r,dy:i}=t,{depthRadius:a,bias:l,alpha:c,beta:u}=s,h=new F4(o.shape,a,l,c,u);return e.runWebGLProgram(h,[o,r,i],o.dtype)},O4={kernelName:Ch,backendName:"webgl",kernelFunc:_4};function L4(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=nt({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Oo(a,n.dtype,"max",s),c=nt({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}function jy(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=Zt(c,a),h=u!=null,d=e.shouldExecuteOnCPU([o]);let p=o;if(h){if(d){const w=e.texData.get(p.dataId).values,y=new Array(a);for(let v=0;v<y.length;v++)y[v]=o.shape[u[v]];const $=Pp(w,o.shape,o.dtype,u,y);p=e.makeTensorInfo(y,o.dtype);const C=e.texData.get(p.dataId);C.values=$}else p=Pc(o,u,e);c=re(c.length,a)}Se("max",c,a);const[f,m]=we(p.shape,c);let g=f;i&&(g=oe(f,l));let x;if(d){const w=e.texData.get(p.dataId).values,y=Y3(w,H(m),g,o.dtype);x=e.makeTensorInfo(g,o.dtype);const $=e.texData.get(x.dataId);$.values=y}else x=L4(p,m,g,e);return h&&e.disposeIntermediateTensorInfo(p),x}const M4={kernelName:Pl,backendName:"webgl",kernelFunc:jy};const P4=zp+`
  return max(a, b);
`,z4=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ma+`
  return result;
`,B4=Ne({opSnippet:P4,packedOpSnippet:z4,cpuKernelImpl:Z3}),V4={kernelName:Ii,backendName:"webgl",kernelFunc:B4};function W4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t;pa(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:l}=s,c=1;I(_e(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);const u=kn(o.shape,r,i,c,a,l);if(u.filterWidth===1&&u.filterHeight===1&&Rt(u.inShape,u.outShape))return en({inputs:{x:o},backend:e});const h=new jr(u,"max",!1);return e.runWebGLProgram(h,[o],o.dtype)}const U4={kernelName:zl,backendName:"webgl",kernelFunc:W4};function G4(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{filterSize:r,strides:i,pad:a,dataFormat:l,dimRoundingMode:c}=s,u=[1,1,1],h=ps(o.shape,r,i,u,a,c,l),d=new Vp(h,"max",!1);return e.runWebGLProgram(d,[o],o.dtype)}const H4={kernelName:Bl,backendName:"webgl",kernelFunc:G4};class q4{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideHeight,s=t.strideWidth,o=t.dilationHeight,r=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=r-1-t.padInfo.top,l=i-1-t.padInfo.left,c=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class j4{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;const e=t.strideDepth,s=t.strideHeight,o=t.strideWidth,r=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,l=t.effectiveFilterDepth,c=t.effectiveFilterHeight,u=t.effectiveFilterWidth,h=l-1-t.padInfo.front,d=c-1-t.padInfo.top,p=u-1-t.padInfo.left,f=l*c*u-1;this.userCode=`
      const ivec3 pads = ivec3(${h}, ${d}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${f} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}function K4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r}=t,i=r,{filterSize:a,strides:l,pad:c,dimRoundingMode:u}=s,h=[1,1,1],d=ps(i.shape,a,l,h,c,u),p=new Vp(d,"max",!0),f=e.runWebGLProgram(p,[i],i.dtype),m=new j4(d),g=e.runWebGLProgram(m,[o,f],i.dtype);return e.disposeIntermediateTensorInfo(f),g}const X4={kernelName:vh,backendName:"webgl",kernelFunc:K4};function Y4(n){const{inputs:t,backend:e,attrs:s}=n,{dy:o,input:r,output:i}=t,a=r;pa([r,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:u,dimRoundingMode:h}=s,d=kn(a.shape,l,c,1,u,h),p=!0,f=new jr(d,"max",p),m=e.runWebGLProgram(f,[a],a.dtype),g=new q4(d),x=e.runWebGLProgram(g,[o,m],a.dtype);return e.disposeIntermediateTensorInfo(m),x}const Z4={kernelName:Ih,backendName:"webgl",kernelFunc:Y4};function J4(n,t,e,s){let o=new jr(e,"max",!1);const r=s.runWebGLProgram(o,[n],"float32");o=new jr(e,"max",!0,!0,t);const i=s.runWebGLProgram(o,[n],"float32");return[r,i]}const Q4={kernelName:Um,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=t,l=e;I(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const c=[1,1];I(_e(r,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${c}'`);const u=kn(s.shape,o,r,c,i),[h,d]=J4(s,a,u,l);return[h,d]}};function tU(n,t,e,s){const o=H(t),i=H(n.shape)/o,a=nt({inputs:{x:n},attrs:{shape:[i,o]},backend:s}),l=Oo(a,"float32","mean",s),c=nt({inputs:{x:l},attrs:{shape:e},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(l),c}const eU={kernelName:Vl,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{x:s}=n,{keepDims:o,axis:r}=t,i=e,a=s.shape.length,l=Ct(r,s.shape);let c=l;const u=Zt(c,a),h=u!=null,d=i.shouldExecuteOnCPU([s]),p=[];let f=s;if(h){if(d){const y=i.texData.get(f.dataId).values,$=new Array(a);for(let k=0;k<$.length;k++)$[k]=s.shape[u[k]];const C=Pp(y,s.shape,s.dtype,u,$);f=i.makeTensorInfo($,s.dtype);const v=i.texData.get(f.dataId);v.values=C}else f=Pc(s,u,i);p.push(f),c=re(c.length,a)}Se("sum",c,a);const[m,g]=we(f.shape,c);let x=m;o&&(x=oe(m,l));const b=tU(f,g,x,i);for(const w of p)i.disposeIntermediateTensorInfo(w);return b}};function nU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=Ct(r,o.shape);let c=l;const u=Zt(c,a);let h=o;u!=null&&(h=Pe({inputs:{x:o},backend:e,attrs:{perm:u}}),c=re(c.length,o.shape.length)),Se("min",c,a);const[d,p]=we(h.shape,c),f=H(p),m=nt({inputs:{x:h},backend:e,attrs:{shape:[-1,f]}}),g=Oo(m,m.dtype,"min",e);let x;if(i){const b=oe(d,l);x=nt({inputs:{x:g},backend:e,attrs:{shape:b}})}else x=nt({inputs:{x:g},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(g),u!=null&&e.disposeIntermediateTensorInfo(h),x}const sU={kernelName:Wl,backendName:"webgl",kernelFunc:nU};const oU=zp+`
  return min(a, b);
`,rU=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+ma+`
  return result;
`,iU=Ne({opSnippet:oU,packedOpSnippet:rU,cpuKernelImpl:J3}),aU={kernelName:vi,backendName:"webgl",kernelFunc:iU};class lU{constructor(t,e,s){this.variableNames=["x"],this.outputShape=e.map((u,h)=>u[0]+t[h]+u[1]);const o=t.length,r=Vt(o),i=e.map(u=>u[0]).join(","),a=e.map((u,h)=>u[0]+t[h]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),c=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}}class cU{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((f,m)=>f[0]+t[m]+f[1]);const o=t.length,r=Vt(o),i=e.map(f=>f[0]).join(","),a=e.map((f,m)=>f[0]+t[m]).join(","),l=Le("rc",o),c=Le("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=s==="reflect"?0:1;let p="";if(o===1){const f=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
      `}else{const f=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;p=`
        ${r} rc = outputLoc;
        ${f}
        result[0] = getChannel(getX(${c.join()}), ${h});
        ${l[o-1]} += 1;
        if(${u}) {
          ${f}
          result[1] = getChannel(getX(${c.join()}), ${h});
        }
        rc = outputLoc;
        ${l[o-2]} += 1;
        if(${l[o-2]} < ${this.outputShape[o-2]}) {
          ${f}
          result[2] = getChannel(getX(${c.join()}), ${h});
          ${l[o-1]} += 1;
          if(${u}) {
            ${f}
            result[3] = getChannel(getX(${c.join()}), ${h});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}const uU=({inputs:n,backend:t,attrs:e})=>{const{x:s}=n,{paddings:o,mode:r}=e,i=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new cU(s.shape,o,r):new lU(s.shape,o,r);return t.runWebGLProgram(i,[s],s.dtype)},hU={kernelName:Ul,backendName:"webgl",kernelFunc:uU};const dU=`if (b == 0.0) return NAN;
  return mod(a, b);`,pU=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+ma+`
  return result;
`,fU=Ne({opSnippet:dU,packedOpSnippet:pU}),mU={kernelName:ki,backendName:"webgl",kernelFunc:fU};class gU{constructor(t,e,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}}const xU=`
if (a == b) {
  return 1.0;
};
return a / b;`,bU=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Ky=Ne({opSnippet:xU,packedOpSnippet:bU,checkOutOfBounds:!0}),yU={kernelName:ci,backendName:"webgl",kernelFunc:Ky};const vm="return a - b;",Xy=Ne({opSnippet:vm,packedOpSnippet:vm,supportsComplex:!0,cpuKernelImpl:bP}),wU={kernelName:Vi,backendName:"webgl",kernelFunc:Xy};function Yy(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{dim:r}=s,i=Ct([r],o.shape),a=jy({inputs:{x:o},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),l=oe(a.shape,i),c=nt({inputs:{x:a},backend:e,attrs:{shape:l}}),u=Xy({inputs:{a:o,b:c},backend:e}),h=Gy({inputs:{x:u},backend:e}),d=zc({inputs:{x:h},backend:e,attrs:{axis:i,keepDims:!1}}),p=nt({inputs:{x:d},backend:e,attrs:{shape:l}}),f=Ky({inputs:{a:h,b:p},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(p),f}const $U={kernelName:ac,backendName:"webgl",kernelFunc:Yy};function CU(n){const{inputs:t,backend:e,attrs:s}=n,{logits:o}=t,{numSamples:r,seed:i,normalized:a}=s,l=a?o:Yy({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),c=l.shape[0],u=l.shape[1],h=new gU(c,u,r),d=[[i]],p=e.runWebGLProgram(h,[l],"int32",d);return a||e.disposeIntermediateTensorInfo(l),p}const IU={kernelName:Gm,backendName:"webgl",kernelFunc:CU};const vU=Nn+`
  return -x;
`,kU=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function SU(n){const{inputs:t,backend:e}=n,{x:s}=t;if(e.shouldExecuteOnCPU([s])){const r=e.texData.get(s.dataId),[i,a]=tP(r.values,s.shape,s.dtype);return e.makeTensorInfo(a,s.dtype,i)}let o;return V().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new vs(s.shape,kU):o=new Kn(s.shape,vU),e.runWebGLProgram(o,[s],s.dtype)}const NU={kernelName:Gl,backendName:"webgl",kernelFunc:SU};const TU=Td;function EU(n){on("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),{selectedIndices:h}=TU(c,u,i,a,l);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const RU={kernelName:kh,backendName:"webgl",kernelFunc:EU};const DU=Ed;function AU(n){on("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),{selectedIndices:d,validOutputs:p}=DU(u,h,i,a,l,c);return[e.makeTensorInfo([d.length],"int32",new Int32Array(d)),e.makeTensorInfo([],"int32",new Int32Array([p]))]}const FU={kernelName:Sh,backendName:"webgl",kernelFunc:AU};const _U=Rd;function OU(n){on("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:s}=n,{boxes:o,scores:r}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:c}=s,u=e.readSync(o.dataId),h=e.readSync(r.dataId),d=i,p=a,f=l,m=c,{selectedIndices:g,selectedScores:x}=_U(u,h,d,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const LU={kernelName:Nh,backendName:"webgl",kernelFunc:OU};class MU{constructor(t,e,s,o){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}const PU=n=>{const{inputs:t,backend:e,attrs:s}=n,{indices:o}=t,{dtype:r,depth:i,onValue:a,offValue:l}=s,c=H(o.shape),u=new MU(c,i,a,l),h=nt({inputs:{x:o},backend:e,attrs:{shape:[c]}}),d=e.runWebGLProgram(u,[h],r);e.disposeIntermediateTensorInfo(h);const p=[...o.shape,i],f=nt({inputs:{x:d},backend:e,attrs:{shape:p}});return e.disposeIntermediateTensorInfo(d),f},zU={kernelName:jl,backendName:"webgl",kernelFunc:PU};function ul(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="complex64"){const o=xa({inputs:{input:s},backend:e}),r=ul({inputs:{x:o},backend:e}),i=Bc({inputs:{input:s},backend:e}),a=ul({inputs:{x:i},backend:e}),l=qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return ba({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:e})}const BU={kernelName:uc,backendName:"webgl",kernelFunc:ul};function Zy(n){const{inputs:t,backend:e}=n,{x:s}=t;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=xa({inputs:{input:s},backend:e}),r=Zy({inputs:{x:o},backend:e}),i=Bc({inputs:{input:s},backend:e}),a=ul({inputs:{x:i},backend:e}),l=qs({inputs:{real:r,imag:a},backend:e});return e.disposeIntermediateTensorInfo(o),e.disposeIntermediateTensorInfo(r),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),l}else return ba({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:e})}const VU={kernelName:ql,backendName:"webgl",kernelFunc:Zy};function WU(n){const{inputs:t,backend:e,attrs:s}=n,{axis:o}=s;if(t.length===1)return Ku({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,i=t[0].dtype;t.forEach(u=>{vn(r,u.shape,"All tensors passed to stack must have matching shapes"),I(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],l=t.map(u=>{const h=Ku({inputs:{input:u},backend:e,attrs:{dim:o}});return a.push(h),h}),c=Ly({inputs:l,backend:e,attrs:{axis:o}});return a.forEach(u=>e.disposeIntermediateTensorInfo(u)),c}const UU={kernelName:Kl,backendName:"webgl",kernelFunc:WU};class GU{constructor(t,e,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,u)=>c[0]+t[u]+c[1]);const o=t.length,r=Vt(o),i=e.map(c=>c[0]).join(","),a=e.map((c,u)=>c[0]+t[u]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}}class HU{constructor(t,e,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((m,g)=>m[0]+t[g]+m[1]);const o=t.length,r=Vt(o),i=e.map(m=>m[0]).join(","),a=e.map((m,g)=>m[0]+t[g]).join(","),l=Le("rc",o),c=Le("source",o),u=`${l[o-1]} < ${this.outputShape[o-1]}`,h=o===1?"source":`vec2(${c.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${l[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${l[o-2]} += 1;
       if(${l[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${l[o-1]} += 1;
         if(${u}) {`],p=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let f="";for(let m=0,g=o===1?2:4;m<g;m++)f+=`
        ${d[m]}
        if (${p}) {
          result[${m}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${m}] = getChannel(getX(${c.join()}), ${h});
        }
      `;f+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}const Jy=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{paddings:r,constantValue:i}=s;if(H(o.shape)===0){const c=r.map((u,h)=>u[0]+o.shape[h]+u[1]);return ba({backend:e,attrs:{shape:c,value:i,dtype:o.dtype}})}const a=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new HU(o.shape,r,i):new GU(o.shape,r,i),l=[[i]];return e.runWebGLProgram(a,[o],o.dtype,l)},qU={kernelName:Xl,backendName:"webgl",kernelFunc:Jy};const jU=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,KU=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+ma+`
  return result;
`,XU=Ne({opSnippet:jU,packedOpSnippet:KU}),YU={kernelName:Ni,backendName:"webgl",kernelFunc:XU};function ZU(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{axis:r,keepDims:i}=s,a=o.shape.length,l=[],c=Ct(r,o.shape);let u=c;const h=Zt(u,a);let d=o;h!=null&&(d=Pe({inputs:{x:o},backend:e,attrs:{perm:h}}),u=re(u.length,a),l.push(d)),Se("prod",u,a);let p;if(e.shouldExecuteOnCPU([d])){const f=e.texData.get(d.dataId).values,{outVals:m,outShape:g,outDtype:x}=nP(d.shape,d.dtype,f,u);p=e.makeTensorInfo(g,x,m)}else{const[f,m]=we(d.shape,u),g=H(m),x=nt({inputs:{x:d},backend:e,attrs:{shape:[-1,g]}}),b=qh(o.dtype),w=Oo(x,b,"prod",e);p=nt({inputs:{x:w},backend:e,attrs:{shape:f}}),l.push(x),l.push(w)}if(i){l.push(p);const f=oe(p.shape,c);p=nt({inputs:{x:p},backend:e,attrs:{shape:f}})}return l.forEach(f=>e.disposeIntermediateTensorInfo(f)),p}const JU={kernelName:Zl,backendName:"webgl",kernelFunc:ZU};function QU(n){const{inputs:t,backend:e,attrs:s}=n,{paramsNestedSplits:o,paramsDenseValues:r,indices:i}=t,{outputRaggedRank:a}=s,l=o.map(x=>e.readSync(x.dataId)),c=o.map(x=>x.shape),u=e.readSync(r.dataId),h=e.readSync(i.dataId),[d,p,f]=sP(l,c,u,r.shape,r.dtype,h,i.shape,a),m=d.map(x=>e.makeTensorInfo([x.length],"int32",x)),g=e.makeTensorInfo(f,r.dtype,p);return m.concat([g])}const tG={kernelName:Hm,backendName:"webgl",kernelFunc:QU};function eG(n){const{inputs:t,backend:e}=n,{starts:s,limits:o,deltas:r}=t,i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=oP(i,s.shape,s.dtype,a,o.shape,l,r.shape),h=e.makeTensorInfo([c.length],"int32",c),d=e.makeTensorInfo([u.length],s.dtype,u);return[h,d]}const nG={kernelName:qm,backendName:"webgl",kernelFunc:eG};function sG(n){const{inputs:t,backend:e,attrs:s}=n,{shape:o,values:r,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:l}=s,c=e.readSync(o.dataId),u=e.readSync(r.dataId),h=e.readSync(i.dataId),d=a.map(g=>e.readSync(g.dataId)),p=a.map(g=>g.shape),[f,m]=rP(c,o.shape,u,r.shape,r.dtype,h,i.shape,d,p,l);return e.makeTensorInfo(f,r.dtype,m)}const oG={kernelName:jm,backendName:"webgl",kernelFunc:sG};const Qy=n=>{const{backend:t,attrs:e}=n,{start:s,stop:o,step:r,dtype:i}=e,a=iP(s,o,r,i);return t.makeTensorInfo([a.length],i,a)},rG={kernelName:Th,backendName:"webgl",kernelFunc:Qy};const iG="return 1.0 / x;",aG=Nt({opSnippet:iG}),lG={kernelName:Ti,backendName:"webgl",kernelFunc:aG};const cG=Nn+`
  return (x < 0.0) ? 0.0 : x;
`,uG=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,hG=Nt({opSnippet:cG,packedOpSnippet:uG}),dG={kernelName:Ei,backendName:"webgl",kernelFunc:hG};const pG=Nn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,fG=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,mG=Nt({opSnippet:pG,packedOpSnippet:fG}),gG={kernelName:Ri,backendName:"webgl",kernelFunc:mG};class xG{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}class bG{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s];let d;r?d="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}function yG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=V().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new bG(o.shape,l,c,r,i):new xG(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],"float32")}const wG={kernelName:tc,backendName:"webgl",kernelFunc:yG};class $G{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function CG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new $G(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const IG={kernelName:Dh,backendName:"webgl",kernelFunc:CG};class vG{constructor(t,e,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":p="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/h[0]},
          ${u[1]/h[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}class kG{constructor(t,e,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,l,c]=t;this.outputShape=[i,e,s,c];const u=[o&&e>1?a-1:a,o&&s>1?l-1:l],h=[o&&e>1?e-1:e,o&&s>1?s-1:s],d=o?"0.5":"0.0";let p;r?p="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":p="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/h[0]},
          ${u[1]/h[1]},
          ${u[1]/h[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${p};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}function SG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o}=t,{alignCorners:r,halfPixelCenters:i,size:a}=s,[l,c]=a,u=V().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new kG(o.shape,l,c,r,i):new vG(o.shape,l,c,r,i);return e.runWebGLProgram(u,[o],o.dtype)}const NG={kernelName:Ql,backendName:"webgl",kernelFunc:SG};class TG{constructor(t,e,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;const[,o,r]=e,[,i,a]=t,l=[s&&i>1?o-1:o,s&&a>1?r-1:r],c=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=l[0]/c[0],h=l[1]/c[1],d=1/u,p=1/h,f=Math.ceil(d)*2+2,m=Math.ceil(p)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${h});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${p});

        const int winHeight = int(${f});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}function EG(n){const{inputs:t,backend:e,attrs:s}=n,{images:o,dy:r}=t,{alignCorners:i}=s,a=new TG(r.shape,o.shape,i);return e.runWebGLProgram(a,[r],r.dtype)}const RG={kernelName:Rh,backendName:"webgl",kernelFunc:EG};class DG{constructor(t,e){this.variableNames=["x"];const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=t,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}const o=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,r=t.map((a,l)=>o(l)).join(","),i=Vt(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}class AG{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=t.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=t;const o=Le("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=Vt(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(o.slice())};
          if(${r}){
            result.g = ${c(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${h(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(f){return d(f)}function c(f){return f[s-1]="("+f[s-1]+" + 1)",d(f)}function u(f){return f[s-2]="("+f[s-2]+" + 1)",d(f)}function h(f){return f[s-1]="("+f[s-1]+" + 1)",f[s-2]="("+f[s-2]+" + 1)",d(f)}function d(f){const m=t.map((b,w)=>p(w,f)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function p(f,m){return e.indexOf(f)!==-1&&t[f]!==1?`${t[f]} - ${m[f]} - 1`:`${m[f]}`}}}function FG(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{dims:r}=s,i=o.shape.length,a=Ct(r,o.shape);if(i===0)return en({inputs:{x:o},backend:e});const l=V().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new AG(o.shape,a):new DG(o.shape,a);return e.runWebGLProgram(l,[o],o.dtype)}const _G={kernelName:ec,backendName:"webgl",kernelFunc:FG};class OG{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=t[1],o=t[2];this.outputShape=t;let r="";typeof e=="number"?r=`float outputValue = ${e.toFixed(2)};`:r=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}const LG={kernelName:Gh,backendName:"webgl",kernelFunc:({inputs:n,attrs:t,backend:e})=>{const{image:s}=n,{radians:o,fillValue:r,center:i}=t,a=e,l=new OG(s.shape,r),[c,u]=Bd(i,s.shape[1],s.shape[2]),h=[[c,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(l,[s],s.dtype,h)}};const MG=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,PG=Nt({opSnippet:MG}),zG={kernelName:Di,backendName:"webgl",kernelFunc:PG};const BG="return inversesqrt(x);",VG=Nt({opSnippet:BG,cpuKernelImpl:aP}),WG={kernelName:Ai,backendName:"webgl",kernelFunc:VG};class tw{constructor(t,e,s,o,r,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const l=Vt(r.length),c=Vt(i.length);let u="";s===1?u="i":s===2&&(u="i, j");const h=`getIndices(${u})`;let d="";o===1?d="i":o===2&&(d="i, coords[1]");const p=`getUpdates(${d})`,f=e>1?"strides[j]":"strides";this.userCode=`
        ${l} strides = ${l}(${r});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${h});
              flattenedIndex += index * ${f};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}function UG(n){const{inputs:t,backend:e,attrs:s}=n,{indices:o,updates:r}=t,{shape:i}=s,{sliceRank:a,numUpdates:l,sliceSize:c,strides:u,outputSize:h}=Ki(r,o,i),d=[h/c,c];if(h===0)return e.makeTensorInfo(i,o.dtype);const p=nt({inputs:{x:o},backend:e,attrs:{shape:[l,a]}}),f=nt({inputs:{x:r},backend:e,attrs:{shape:[l,c]}}),m=e.makeTensorInfo([],"float32",new Float32Array([0])),g=new tw(l,a,p.shape.length,f.shape.length,u,d),x=e.runWebGLProgram(g,[f,p,m],f.dtype),b=nt({inputs:{x},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(m),b}const GG={kernelName:Km,backendName:"webgl",kernelFunc:UG};class HG{constructor(t,e,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=V().getNumber("WEBGL_VERSION")===2?r:i,l=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}function qG(n){const{inputs:t,backend:e,attrs:s}=n,{sortedSequence:o,values:r}=t,{side:i}=s,a=new HG(o.shape[0],o.shape[1],r.shape[1],i),l=[[o.shape[1]]];return e.runWebGLProgram(a,[o,r],"int32",l)}const jG={kernelName:Xm,backendName:"webgl",kernelFunc:qG};class KG{constructor(t,e,s){this.variableNames=["c","a","b"],this.outputShape=e;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],c=[];for(let u=0;u<e.length;u++)c.push(`${a[u]}`),u<t&&l.push(`${a[u]}`);o=l.join(),r=c.join()}const i=Vt(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}function XG(n){const{inputs:t,backend:e}=n,{condition:s,t:o,e:r}=t,i=new KG(s.shape.length,o.shape,o.shape.length);return e.runWebGLProgram(i,[s,o,r],Je(o.dtype,r.dtype))}const YG={kernelName:nc,backendName:"webgl",kernelFunc:XG};const ZG=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${Cc};
  float scale = ${Ic};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,JG=Nt({opSnippet:ZG}),QG={kernelName:Fi,backendName:"webgl",kernelFunc:JG};const tH=Cr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,eH=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,nH=Nt({opSnippet:tH,packedOpSnippet:eH,cpuKernelImpl:cP}),sH={kernelName:Mi,backendName:"webgl",kernelFunc:nH};const oH=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,rH=Nt({opSnippet:oH}),iH={kernelName:Li,backendName:"webgl",kernelFunc:rH};const aH=Cr+`
  return sin(x);
`,lH=Nt({opSnippet:aH}),cH={kernelName:_i,backendName:"webgl",kernelFunc:lH};const uH=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,hH=Nt({opSnippet:uH}),dH={kernelName:Oi,backendName:"webgl",kernelFunc:hH};const pH=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,fH=Nt({opSnippet:pH}),mH={kernelName:Pi,backendName:"webgl",kernelFunc:fH};const gH=n=>{const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{blockShape:r,paddings:i}=s;I(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,b)=>x*b),l=[[0,0]];l.push(...i);for(let x=1+r.length;x<o.shape.length;++x)l.push([0,0]);const c=[],u=Jy({inputs:{x:o},backend:e,attrs:{paddings:l,constantValue:0}}),h=ta(u.shape,r,a,!1),d=ea(h.length,r.length,!1),p=na(u.shape,r,a,!1),f=nt({inputs:{x:u},backend:e,attrs:{shape:h}}),m=Pe({inputs:{x:f},backend:e,attrs:{perm:d}}),g=nt({inputs:{x:m},backend:e,attrs:{shape:p}});return c.push(u),c.push(f),c.push(m),c.forEach(x=>e.disposeIntermediateTensorInfo(x)),g},xH={kernelName:rc,backendName:"webgl",kernelFunc:gH};function bH(n){const{inputs:t,backend:e}=n,{indices:s,values:o,denseShape:r,defaultValue:i}=t;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=e.readSync(s.dataId),l=e.readSync(o.dataId),c=e.readSync(r.dataId),u=e.readSync(i.dataId)[0],[h,d,p,f,m]=hP(a,s.shape,s.dtype,l,o.dtype,c,u);return[e.makeTensorInfo(d,s.dtype,h),e.makeTensorInfo([d[0]],o.dtype,p),e.makeTensorInfo([f.length],"bool",new Uint8Array(f.map(g=>Number(g)))),e.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const yH={kernelName:Ah,backendName:"webgl",kernelFunc:bH};function wH(n){const{inputs:t,backend:e}=n,{inputIndices:s,inputShape:o,newShape:r}=t;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(e.readSync(o.dataId)),a=e.readSync(s.dataId),l=Array.from(e.readSync(r.dataId)),[c,u,h]=dP(a,s.shape,s.dtype,i,l);return[e.makeTensorInfo(u,s.dtype,c),e.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}const $H={kernelName:Fh,backendName:"webgl",kernelFunc:wH};function CH(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=Iy(i,s.shape,s.dtype,a,l,!0);return e.makeTensorInfo(u,s.dtype,c)}const IH={kernelName:_h,backendName:"webgl",kernelFunc:CH};function vH(n){const{inputs:t,backend:e}=n,{data:s,indices:o,segmentIds:r}=t;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=e.readSync(s.dataId),a=e.readSync(o.dataId),l=e.readSync(r.dataId),[c,u]=Iy(i,s.shape,s.dtype,a,l);return e.makeTensorInfo(u,s.dtype,c)}const kH={kernelName:Oh,backendName:"webgl",kernelFunc:vH};function SH(n){const{inputs:t,backend:e,attrs:s}=n,{sparseIndices:o,sparseValues:r,defaultValue:i}=t,{outputShape:a}=s,{sliceRank:l,numUpdates:c,sliceSize:u,strides:h,outputSize:d}=Ki(r,o,a),p=!1;if(r.dtype==="string"){const x=e.bufferSync(o),b=e.bufferSync(r),w=Es(e.readSync(i.dataId)[0]),y=lP(x,b,a,d,u,c,l,h,w,p);return e.makeTensorInfo(a,y.dtype,y.values)}const f=new tw(c,l,o.shape.length,r.shape.length,h,[d,1],p),m=e.runWebGLProgram(f,[r,o,i],r.dtype),g=nt({inputs:{x:m},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(m),g}const NH={kernelName:Ym,backendName:"webgl",kernelFunc:SH};function TH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{numOrSizeSplits:r,axis:i}=s,a=Ct(i,o.shape)[0],l=ep(o,r,a),c=o.shape.length,u=new Array(c).fill(0),h=o.shape.slice();return l.map(d=>{const p=[...h];p[a]=d;const f=Ir({inputs:{x:o},backend:e,attrs:{begin:u,size:p}});return u[a]+=d,f})}const EH={kernelName:ic,backendName:"webgl",kernelFunc:TH};const km="return sqrt(x);",RH=Nt({opSnippet:km,packedOpSnippet:km,cpuKernelImpl:pP}),DH={kernelName:zi,backendName:"webgl",kernelFunc:RH};const AH="return x * x;",FH=Nt({opSnippet:AH}),_H={kernelName:Lh,backendName:"webgl",kernelFunc:FH};const Sm="return (a - b) * (a - b);",OH=Ne({opSnippet:Sm,packedOpSnippet:Sm}),LH={kernelName:Bi,backendName:"webgl",kernelFunc:OH};function MH({inputs:n,attrs:t,backend:e}){const{x:s}=n,o=Nn+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,r=new Kn(s.shape,o);return e.runWebGLProgram(r,[s],s.dtype)}const PH={kernelName:Hi,backendName:"webgl",kernelFunc:MH};class zH{constructor(t,e,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=Vt(s.length),i=Vt(s.length);let a="";if(o===1)a="coords * strides + begin";else{let l=0;a=s.map((c,u)=>(l++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${l-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${t});
      ${r} strides = ${r}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}function BH(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{begin:r,end:i,strides:a,beginMask:l,endMask:c,ellipsisMask:u,newAxisMask:h,shrinkAxisMask:d}=s,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:b,end:w,strides:y}=ed(o.shape,r,i,a,l,c,u,h,d);let $;if(m)$=nt({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){I(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const v=Jh(b,w,y),k=Ir({inputs:{x:o},backend:e,attrs:{begin:b,size:v}});$=nt({inputs:{x:k},backend:e,attrs:{shape:f}}),e.disposeIntermediateTensorInfo(k)}else if(e.shouldExecuteOnCPU([o])){const k=e.readSync(o.dataId),N=$t(o.shape,o.dtype,k),T=fP(p,N,y,b);$=e.makeTensorInfo(f,o.dtype,T.values)}else{const k=new zH(b,y,p);$=e.runWebGLProgram(k,[o],o.dtype)}const C=nt({inputs:{x:$},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo($),C}const VH={kernelName:Mh,backendName:"webgl",kernelFunc:BH};function WH(n){const{inputs:t,backend:e,attrs:s}=n,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:c}=s,{data:u,dataSplits:h}=t,d=e.readSync(u.dataId),p=e.readSync(h.dataId),[f,m]=mP(d,p,o,r,i,a,l,c);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const UH={kernelName:Ph,backendName:"webgl",kernelFunc:WH};function GH(n){const{inputs:t,backend:e,attrs:s}=n,{skipEmpty:o}=s,{input:r,delimiter:i}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=e.readSync(r.dataId),l=e.readSync(i.dataId)[0],[c,u,h]=gP(a,l,o),d=u.length;return[e.makeTensorInfo([d,2],"int32",c),e.makeTensorInfo([d],"string",u),e.makeTensorInfo([2],"int32",new Int32Array(h))]}const HH={kernelName:zh,backendName:"webgl",kernelFunc:GH};function qH(n){const{inputs:t,backend:e,attrs:s}=n,{numBuckets:o}=s,{input:r}=t;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=e.readSync(r.dataId),a=xP(i,o);return e.makeTensorInfo(r.shape,"int32",a)}const jH={kernelName:Bh,backendName:"webgl",kernelFunc:qH};const KH="return tan(x);",XH=Nt({opSnippet:KH}),YH={kernelName:Wi,backendName:"webgl",kernelFunc:XH};const ZH=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,JH=Nt({opSnippet:ZH}),QH={kernelName:Ui,backendName:"webgl",kernelFunc:JH};class tq{constructor(t,e){this.variableNames=["A"];const s=new Array(t.length);for(let i=0;i<s.length;i++)s[i]=t[i]*e[i];this.outputShape=s,this.rank=s.length;const o=Vt(this.rank),r=eq(t);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function eq(n){const t=n.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${n[0]})`;const e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<n.length;o++)s.push(`imod(${e[o]}, ${n[o]})`);return s.join()}function ew(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const l=e.readSync(o.dataId),c=o.dtype==="string"?l.map(d=>Es(d)):l,u=$t(o.shape,o.dtype,c),h=yP(u,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const i=new tq(o.shape,r);return e.runWebGLProgram(i,[o],o.dtype)}const nq={kernelName:Gi,backendName:"webgl",kernelFunc:ew};class sq{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class oq{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}function Zs(n,t){t!==null&&n.disposeIntermediateTensorInfo(t)}function Nm(n){let t=1;for(;t<n;)t*=2;return t}function rq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o}=t,{k:r,sorted:i}=s,a=V().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=V().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,u=c[c.length-1];if(e.shouldExecuteOnCPU([o])||u<a||r>l){const T=e.readSync(o.dataId),[F,z]=wP(T,c,o.dtype,r,i);return[e.makeTensorInfo(F.shape,F.dtype,F.values),e.makeTensorInfo(z.shape,z.dtype,z.values)]}if(r===0)return c[c.length-1]=0,[e.makeTensorInfo(c,o.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(u===1)return[o,ba({attrs:{shape:c,dtype:"int32",value:0},backend:e})];const h=e.texData.get(o.dataId),d=h!==null&&h.isPacked,p=d?e.unpackTensor(o):o,m=H(c)/u,g=nt({inputs:{x:p},attrs:{shape:[m,u]},backend:e});d&&Zs(e,p);const x=Nm(r),b=Nm(u);let w=null;const y=()=>w===null?[g,g]:[g,w],$=(T,F,z)=>{const M=y(),L=new sq(z),B=[[u],[w===null?1:0],[Number.NEGATIVE_INFINITY],[T],[F]],U=w;w=e.runWebGLProgram(L,M,"int32",B),Zs(e,U)};for(let T=1;T<x;T*=2){const F=T*2;for(let z=T;z>=1;z/=2)$(F,z,[m,b])}for(let T=b;T>x;T/=2){const F=y(),z=new oq([m,T/2]),L=[[u],[w===null?1:0],[x]],O=w;w=e.runWebGLProgram(z,F,"int32",L),Zs(e,O);const B=x/2,U=B*2;for(let W=B;W>=1;W/=2)$(U,W,w.shape)}let C=w;w=Ir({inputs:{x:w},backend:e,attrs:{begin:0,size:[m,r]}}),Zs(e,C);let v=qy({inputs:{x:g,indices:w},backend:e,attrs:{axis:1,batchDims:1}});Zs(e,g);const k=c.slice(0,-1);k.push(r),C=w,w=nt({inputs:{x:w},attrs:{shape:k},backend:e}),Zs(e,C);const N=v;return v=nt({inputs:{x:v},attrs:{shape:k},backend:e}),Zs(e,N),[v,w]}const iq={kernelName:Vh,backendName:"webgl",kernelFunc:rq};class aq{constructor(t,e,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let l;switch(o){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}function lq(n){const{inputs:t,backend:e,attrs:s}=n,{image:o,transforms:r}=t,{interpolation:i,fillMode:a,fillValue:l,outputShape:c}=s,[u,h,d,p]=o.shape,[f,m]=c??[h,d],g=[u,f,m,p],x=new aq(h,d,i,a,l,g);return e.runWebGLProgram(x,[o,r],"float32")}const cq={kernelName:Wh,backendName:"webgl",kernelFunc:lq};function uq(n){const{inputs:t,attrs:e,backend:s}=n,{axis:o}=e,{x:r}=t;pa(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:l,indices:c}=$P(i,o,r.shape,r.dtype);return[s.makeTensorInfo(l,r.dtype,a),s.makeTensorInfo([c.length],"int32",c)]}const hq={kernelName:Uh,backendName:"webgl",kernelFunc:uq};function dq(n){const{inputs:t,backend:e,attrs:s}=n,{value:o}=t;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,l=o.shape[r],c=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(c[u++]=i.shape[m]);const h=[],d=new Array(a).fill(0),p=i.shape.slice();p[r]=1;const f=new Array(l);for(let m=0;m<f.length;m++){d[r]=m;const g=Ir({inputs:{x:i},backend:e,attrs:{begin:d,size:p}}),x=nt({inputs:{x:g},backend:e,attrs:{shape:c}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeIntermediateTensorInfo(m)),f}const pq={kernelName:lc,backendName:"webgl",kernelFunc:dq};class fq{constructor(t,e){this.variableNames=["x","segmentIds"];const s=t.windowSize,o=t.batchSize,r=t.inSize,i=t.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const l="0.0",c="sumValue",u=Math.floor(s/4)*4,h=s%4,d=`
        sumValue += dot(values, segFilter);
    `;let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${f}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${d}
        }

        int inIdx = inOffset + ${u};
        if (${h===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${d}
        } else if (${h===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${d}
        } else if (${h===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}function mq(n){const{inputs:t,backend:e,attrs:s}=n,{x:o,segmentIds:r}=t,{numSegments:i}=s,a=o.shape.length,l=[];let c=0;const u=Zt([c],a);let h=o;u!=null&&(h=Pe({inputs:{x:o},backend:e,attrs:{perm:u}}),l.push(h),c=re(1,a)[0]);const d=Ux(h.shape,c,i),p=H([h.shape[c]]),f=nt({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});l.push(f);const m=qh(o.dtype),g=(y,$,C,v,k)=>{const N=y.shape[0],T=y.shape[1],F=Wx(T,k),z={windowSize:F,inSize:T,batchSize:N,numSegments:k},M=new fq(z,$),L=e.compileAndRun(M,[y,C],v);if(l.push(L),L.shape[1]===k)return L;const O=Qy({backend:e,attrs:{start:0,stop:k,step:1,dtype:"float32"}}),B=ew({inputs:{x:O},backend:e,attrs:{reps:[T/F]}});return l.push(O),l.push(B),g(L,$,B,v,k)},x=g(f,"unsortedSegmentSum",r,m,i),b=nt({inputs:{x},backend:e,attrs:{shape:d}});let w=b;if(u!=null){l.push(b);const y=zs(u);w=Pe({inputs:{x:w},backend:e,attrs:{perm:y}})}return l.forEach(y=>e.disposeIntermediateTensorInfo(y)),w}const gq={kernelName:cc,backendName:"webgl",kernelFunc:mq};const xq=[dz,fz,xz,wz,Cz,kz,Nz,Ez,Fz,Oz,Pz,Vz,Gz,Kz,Zz,Qz,eB,rB,aB,cB,pB,wB,CB,vB,RB,AB,LB,XP,zB,GB,KB,tV,nV,oV,iV,lV,hV,fV,xV,yV,$V,IV,SV,TV,AV,_V,MV,BV,WV,qV,YV,tW,sW,iW,aW,cW,hW,pW,mW,xW,$W,vW,NW,EW,AW,OW,zW,UW,KP,HW,WB,KW,ZW,t4,ZP,o4,l4,u4,f4,x4,$4,v4,T4,A4,O4,M4,V4,U4,H4,X4,Z4,Q4,eU,sU,aU,hU,mU,IU,tz,NU,RU,FU,LU,SB,zU,VU,UU,qU,YU,QP,JU,tG,nG,oG,rG,NB,yU,lG,dG,gG,nz,wG,IG,NG,RG,_G,LG,zG,WG,GG,jG,YG,QG,sH,iH,cH,dH,bB,$U,mH,xH,yH,$H,IH,kH,NH,EH,DH,_H,LH,PH,VH,UH,HH,jH,wU,cz,YH,QH,nq,iq,cq,uz,hq,pq,gq,BU];for(const n of xq)Jm(n);function Tm(n,t,e){const s=n.slice();return s[17]=t[e].number,s[4]=t[e].result,s[18]=t[e].color,s}function Em(n){let t,e,s=n[17]+"",o,r,i,a=n[4]+"",l,c,u;return{c(){t=Te("div"),e=Te("p"),o=Qs(s),r=is(),i=Te("p"),l=Qs(a),c=is(),this.h()},l(h){t=Ee(h,"DIV",{class:!0});var d=Re(t);e=Ee(d,"P",{class:!0});var p=Re(e);o=to(p,s),p.forEach(Qt),r=as(d),i=Ee(d,"P",{class:!0});var f=Re(i);l=to(f,a),f.forEach(Qt),c=as(d),d.forEach(Qt),this.h()},h(){ae(e,"class","px-3 font-bold text-violet-800"),ae(i,"class","px-3 font-bold text-violet-800"),ae(t,"class",u="flex gap-3 items-center justify-between overflow-hidden h-9 "+n[18])},m(h,d){zo(h,t,d),Mt(t,e),Mt(e,o),Mt(t,r),Mt(t,i),Mt(i,l),Mt(t,c)},p(h,d){d&8&&s!==(s=h[17]+"")&&iu(o,s),d&8&&a!==(a=h[4]+"")&&iu(l,a),d&8&&u!==(u="flex gap-3 items-center justify-between overflow-hidden h-9 "+h[18])&&ae(t,"class",u)},d(h){h&&Qt(t)}}}function bq(n){let t,e,s,o,r,i,a,l,c,u,h,d,p,f,m,g,x,b,w,y,$,C,v,k,N,T,F,z,M=n[3],L=[];for(let O=0;O<M.length;O+=1)L[O]=Em(Tm(n,M,O));return{c(){t=Te("div"),e=Te("p"),s=Qs("MNIST"),o=is(),r=Te("div"),i=Te("p"),a=Qs(n[4]),l=is(),c=Te("canvas"),u=is(),h=Te("div"),d=Te("div"),p=Te("p"),f=Qs("数字を書いてね！"),m=is(),g=Te("canvas"),x=is(),b=Te("div"),w=Te("button"),y=Qs("リセットする"),$=is(),C=Te("div"),v=Te("p"),k=Qs("確率"),N=is(),T=Te("div");for(let O=0;O<L.length;O+=1)L[O].c();this.h()},l(O){t=Ee(O,"DIV",{class:!0});var B=Re(t);e=Ee(B,"P",{class:!0});var U=Re(e);s=to(U,"MNIST"),U.forEach(Qt),B.forEach(Qt),o=as(O),r=Ee(O,"DIV",{class:!0});var W=Re(r);i=Ee(W,"P",{class:!0});var q=Re(i);a=to(q,n[4]),q.forEach(Qt),l=as(W),c=Ee(W,"CANVAS",{class:!0,width:!0,height:!0}),Re(c).forEach(Qt),W.forEach(Qt),u=as(O),h=Ee(O,"DIV",{class:!0});var X=Re(h);d=Ee(X,"DIV",{class:!0});var K=Re(d);p=Ee(K,"P",{class:!0});var Q=Re(p);f=to(Q,"数字を書いてね！"),Q.forEach(Qt),m=as(K),g=Ee(K,"CANVAS",{class:!0,width:!0,height:!0}),Re(g).forEach(Qt),x=as(K),b=Ee(K,"DIV",{});var Z=Re(b);w=Ee(Z,"BUTTON",{class:!0});var tt=Re(w);y=to(tt,"リセットする"),tt.forEach(Qt),Z.forEach(Qt),K.forEach(Qt),$=as(X),C=Ee(X,"DIV",{class:!0});var J=Re(C);v=Ee(J,"P",{class:!0});var rt=Re(v);k=to(rt,"確率"),rt.forEach(Qt),N=as(J),T=Ee(J,"DIV",{class:!0});var at=Re(T);for(let ht=0;ht<L.length;ht+=1)L[ht].l(at);at.forEach(Qt),J.forEach(Qt),X.forEach(Qt),this.h()},h(){ae(e,"class","pagetitle"),ae(t,"class","my-20 text-center flex gap-8 flex-col"),ae(i,"class","text-center text-2xl font-bold text-violet-800"),ae(c,"class","mx-auto border-solid border-2 bg-neutral-100"),ae(c,"width","32"),ae(c,"height","32"),ae(r,"class","flex flex-col gap-4"),ae(p,"class","m-2 font-bold text-violet-800"),ae(g,"class","bg-zinc-50 border-solid border-2"),ae(g,"width","300"),ae(g,"height","300"),ae(w,"class","py-2 px-4 text-sm font-bold bg-amber-400 rounded"),ae(d,"class","flex flex-col gap-4"),ae(v,"class","m-2 font-bold text-violet-800"),ae(T,"class","flex flex-col w-52 bg-zinc-50 "),ae(C,"class","my-4 flex flex-col bg-neutral-100 px-3"),ae(h,"class","flex justify-center gap-56")},m(O,B){zo(O,t,B),Mt(t,e),Mt(e,s),zo(O,o,B),zo(O,r,B),Mt(r,i),Mt(i,a),Mt(r,l),Mt(r,c),n[8](c),zo(O,u,B),zo(O,h,B),Mt(h,d),Mt(d,p),Mt(p,f),Mt(d,m),Mt(d,g),n[9](g),Mt(d,x),Mt(d,b),Mt(b,w),Mt(w,y),Mt(h,$),Mt(h,C),Mt(C,v),Mt(v,k),Mt(C,N),Mt(C,T);for(let U=0;U<L.length;U+=1)L[U].m(T,null);F||(z=[kr(g,"mousedown",n[5]),kr(g,"mousemove",n[7]),kr(g,"mouseup",n[6]),kr(g,"mouseout",n[6]),kr(w,"click",n[0])],F=!0)},p(O,[B]){if(B&16&&iu(a,O[4]),B&8){M=O[3];let U;for(U=0;U<M.length;U+=1){const W=Tm(O,M,U);L[U]?L[U].p(W,B):(L[U]=Em(W),L[U].c(),L[U].m(T,null))}for(;U<L.length;U+=1)L[U].d(1);L.length=M.length}},i:Wp,o:Wp,d(O){O&&Qt(t),O&&Qt(o),O&&Qt(r),n[8](null),O&&Qt(u),O&&Qt(h),n[9](null),lw(L,O),F=!1,cw(z)}}}let yq=16;function wq(n,t,e){let s,o,r,i=null,a=null,l=0,c=0,u=!1,h=0,d=[{number:0,result:"確率表示",color:"bg-zinc-50"},{number:1,result:"確率表示",color:"bg-zinc-50"},{number:2,result:"確率表示",color:"bg-zinc-50"},{number:3,result:"確率表示",color:"bg-zinc-50"},{number:4,result:"確率表示",color:"bg-zinc-50"},{number:5,result:"確率表示",color:"bg-zinc-50"},{number:6,result:"確率表示",color:"bg-zinc-50"},{number:7,result:"確率表示",color:"bg-zinc-50"},{number:8,result:"確率表示",color:"bg-zinc-50"},{number:9,result:"確率表示",color:"bg-zinc-50"}];uw(()=>{r=s.getContext("2d",{willReadFrequently:!0}),r.fillStyle="#FaFaFa",i=s.width,a=s.height,r.lineCap="round",r.lineWidth=yq,r.rect(0,0,i,a),r.fill()});function p(y){u=!0,[l,c]=[y.offsetX,y.offsetY]}function f(y){u&&x(),u=!1}function m(y){if(u){const $=y.offsetX,C=y.offsetY;r.beginPath(),r.moveTo(l,c),r.lineTo($,C),r.stroke(),l=$,c=C}}function g(){r.fillStyle="#fafafa",r.rect(0,0,s.width,s.height),r.fill()}async function x(){const y=await eR("/model/model.json"),$=r.getImageData(0,0,i,a),C=P(()=>{const v=mt(1),k=mt(-1);let N=J$($,1).toFloat().step(0).sub(v).mul(k).resizeBilinear([28,28]);return Z$(N,o),N=N.expandDims(0),y.predict(N)});e(4,h=C.argMax(1).dataSync()[0]);for(let v=0;v<10;v++)e(3,d[v].result=C.dataSync()[v].toFixed(6),d),e(3,d[v].color="bg-zinc-50",d);e(3,d[h].color="bg-green-400",d)}function b(y){Up[y?"unshift":"push"](()=>{o=y,e(2,o)})}function w(y){Up[y?"unshift":"push"](()=>{s=y,e(1,s)})}return[g,s,o,d,h,p,f,m,b,w]}class Gq extends rw{constructor(t){super(),iw(this,t,wq,bq,aw,{clearCanvas:0})}get clearCanvas(){return this.$$.ctx[0]}}export{Gq as default};
