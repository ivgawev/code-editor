'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var t={BLUE:{0:"#EFF6FF",500:"#3B82F6",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A"},GREY:{0:"#E1E4E8",500:"#6A737D",700:"#24292E",800:"#1F2428",900:"#1C2024"},ORANGE:{0:"#FFF7ED",500:"#F97316",700:"#C2410C",800:"#9A3412",900:"#7C2D12"},YELLOW:{0:"#E1E4E8",500:"#FACC15",700:"#CA8A04",800:"#854D0E",900:"#713F12"}};var r={ROBOTO:[400,500,700]};var s=(e=>(e[e.XXS=0]="XXS",e[e.XS=1]="XS",e[e.SM=2]="SM",e[e.MD=3]="MD",e[e.LG=4]="LG",e[e.XL=5]="XL",e[e.XXL=6]="XXL",e))(s||{});var o={0:0,.5:.125,1:.25,1.5:.375,2:.5,2.5:.625,3:.75,3.5:.875,4:1,5:1.25,6:1.5,7:1.75,8:2,9:2.25,10:2.5,11:2.75,12:3,14:3.5,16:4,20:5,24:6,28:7,32:8,36:9,40:10,44:11,48:12,52:13,56:14,60:15,64:16,72:18,80:20,96:24};var n=({name:i,palette:a,text:m})=>({name:i,colors:t,fonts:r,palette:a,text:m,units:o});var p=n({name:"dark",palette:{primary:t.GREY[500],secondary:t.GREY[400],background:t.GREY[800]},text:{types:{h1:{family:"Roboto",weight:700,size:o[12],lineHeight:o[12],letterSpacing:-1.5},p:{family:"Roboto",weight:500,size:o[4],lineHeight:o[4],letterSpacing:-.2}},variants:{primary:t.GREY[0],secondary:t.GREY[500],disabled:t.GREY[700]},defaultFont:"Roboto"}});

exports.COLORS = t;
exports.DARK_THEME = p;
exports.FONTS = r;
exports.SCALES = s;
exports.UNITS = o;
exports.createTheme = n;
//# sourceMappingURL=index.js.map