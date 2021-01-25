"use strict";function GetElementById(e){var t=document.getElementById(e);if(null==t)throw"#"+e+" is null.";return t}function getQueryValues(e){void 0===e&&(e=""),e.length<2&&(e=document.URL);var t={};if(e.indexOf("?")<0)return t;var n=e.split("?")[1];if(n.indexOf("&")<0)return n.indexOf("=")<0||(t[(i=n.split("="))[0]]=decodeURI(i[1])),t;for(var a=n.split("&"),r=0;r<a.length;r++){var i;(i=a[r].split("="))[0].length<1||(t[i[0]]=decodeURI(i[1]))}return t}function GetRandomItem(e){return e.length<1?"":e[Math.floor(Math.random()*e.length)]}function HTMLEncodeText(e){var t=document.createElement("div");return t.innerText=e,t.innerHTML}function ReplcaeCRLF(e){return e=e.replace(/\n/gi," ")}function GenQRcode(e){if(e.length<1)throw"bad input";var t=[];t[0]=0,t[1]=17,t[2]=32,t[3]=53,t[4]=78,t[5]=106,t[6]=134,t[7]=154,t[8]=192,t[9]=230,t[10]=271,t[11]=321,t[12]=367,t[13]=425,t[14]=458,t[15]=520,t[16]=586,t[17]=644,t[18]=718,t[19]=792,t[20]=858,t[21]=929,t[22]=1003,t[23]=1091,t[24]=1171,t[25]=1273,t[26]=1367,t[27]=1465,t[28]=1528,t[29]=1628,t[30]=1732,t[31]=1840,t[32]=1952,t[33]=2068,t[34]=2188,t[35]=2303,t[36]=2431,t[37]=2563,t[38]=2699,t[39]=2809,t[40]=2953;for(var n=1,a=1;a<40;a++)if(e.length<=t[a]){n=a;break}var r=create_qrcode(e,n,"L","Byte","UTF-8"),i=document.createElement("div");return i.innerHTML=r,i.getElementsByTagName("img")[0]}var editor=GetElementById("editor"),qus=getQueryValues(),currentType="";function ChangeType(e){currentType=e;var t="Error",n="Error";switch(e){case"strong":t="概要",n="详细";break;case"since":t="因为",n="结果";break;case"update":t="概要",n="详细"}GetElementById("text1").innerText=t+"：",GetElementById("text2").innerText=n+"："}function GetInputValues(){var e={type:currentType,t1:"error",t2:"error"},t=GetElementById("t1");if(e.t1=ReplcaeCRLF(t.value).trim(),e.t1.length<1)throw alert("请输入不为空的内容！"),"error";if(t=GetElementById("t2"),e.t2=ReplcaeCRLF(t.value).trim(),e.t2.length<1)throw alert("请输入不为空的内容！"),"error";return e}function GenURL(e){var t=location.protocol+"//"+location.host+location.pathname,n="?";return n+="vv="+JSON.stringify(e),t+encodeURI(n)}function GetSpeech(e){void 0===e&&(e=[]);var t=["“这样的话，我和团队，才会为我们的工作而感到骄傲，并且觉得有意义”，张小龙说道。","简单是美观、实用、合理、优雅的代名词。“一个产品有10亿人用的时候，简单才会好用”","张小龙用《孙子兵法》中的八个字形容自己做产品的思路——“其徐如林，其疾如风”，要么三天内找到解决方法，要么放弃寻找新路径，“如果要做，就要非常快速地迭代”。 ","据统计，有3.6亿微信用户读公众号文章，4亿微信用户使用小程序。","张小龙说：“所有这些都是很有趣的事情。所以做产品绝不是枯燥无味的。虽然大多数想法都会是行不通的，但有少数的能行得通，就非常好了。”","微信的确加了很多功能，但那些功能，其实只有在你「把微信作为方法」的时候，它才会出现。","张小龙提到：以前在饭否，看到很多产品越做越复杂，我吐槽说，“一个产品，要加多少功能，才能成为一个垃圾产品啊！” 不是说加功能会让产品不好，而是加了不必要的功能，或者加功能的方式不对。 ","在最后，他说：“希望我没有浪费你的时间。再见。”","张小龙认为做产品就是应该快的。","为什么是这样的呢？张小龙谈起了微信诞生的故事，原因出人意料地简单，”因为我不用QQ，希望有一个适合自己的通讯工具来用，于是就开始了微信的第一版。”","如果要用两个词形容微信，张小龙认为，一个是连接，一个是简单。"];if(e.length>0&&e.length<t.length)for(;;){var n=GetRandomItem(t);if(e.indexOf(n)<0)return n}return GetRandomItem(t)}function GenDiv(e){var t=new Date;t.setDate(t.getDate()-1);var n,a,r=(t.getMonth()+1).toFixed()+"月"+t.getDate().toFixed()+"日",i="",l=[],o=HTMLEncodeText(e.t1),c=HTMLEncodeText(e.t2);switch(e.type){case"strong":l.push("在最后，他说：“希望我没有浪费你的时间。再见。”"),i="【<span class='weibo_url'>#张小龙强调：",i+=o,i+="</span>】",i+=r,i+="，在"+GetRandomItem(["微信工作季度总结会议","微信之夜","腾讯开发者大会","腾讯顶层产品会议","开放互联网交流论坛"]),i+="上，张小龙称当初绝对没想到微信现在会是这样。目前每天有10.9亿人打开微信，有7.8亿人进入朋友圈。张小龙称自己觉得特别一点要指出一下，那就是",i+=o+"。"+c+"。",a=GetSpeech(l),l.push(a),i+="<br>"+a,i+=a=GetSpeech(l),i+="<br>"+l[0]+"<span class='weibo_url_icon'></span><span class='weibo_url'>微信张小龙声称：",(n=e.t1).length>5&&(n=n.substring(0,5)+"..."),i+=HTMLEncodeText(n)+"</span>";break;case"since":i="【<span class='weibo_url'>#张小龙解答",i+=c,i+="的原因</span>】",i+="在"+r+"召开的"+GetRandomItem(["微信工作季度总结会议","微信之夜","腾讯开发者大会","腾讯顶层产品会议","开放互联网交流论坛"]),a=GetSpeech(),l.push(a),i+="上，张小龙解答了一个重要的问题。为什么"+c+"？"+a+"<br>张小龙说：“这主要还是因为"+o+"”",a=GetSpeech(l),(n=e.t1).length>6&&(n=n.substring(0,6)+"..."),i+=a+"<span class='weibo_url_icon'></span><span class='weibo_url'>为什么"+HTMLEncodeText(n)+"</span>";break;case"update":i="【<span class='weibo_url'>#微信"+GetRandomItem(["将更新","即将推出"])+"：",i+=o,i+="</span>】",i+="在"+r+"举办的"+GetRandomItem(["微信工作季度总结会议","微信之夜","腾讯开发者大会","腾讯顶层产品会议","开放互联网交流论坛"]),i+="上，微信的创始人张小龙提到了微信即将推出的全新的功能：“"+o+"”，据称，这将带来非常不一样的体验。",a=GetSpeech(),l.push(a),i+=a+"<br>",i+="据悉，"+c+"是张小龙非常重视的一个设计。",a=GetSpeech(l),l.push(a),i+=a+"但是张小龙拒绝透露更多信息。",a=GetSpeech(l),(n=e.t1).length>8&&(n=n.substring(0,8)+"..."),i+=a+"<span class='weibo_url_icon'></span><span class='weibo_url'>张小龙：微信即将更新"+HTMLEncodeText(n)+"</span>"}var s=GetElementById("textrender");return s.innerHTML=i,s.style.display="block",s}!function(){for(var e=GetElementById("selecttype").getElementsByTagName("input"),t=0;t<e.length;t++){if(null==(r=e.item(t)))throw"有一个 selecttype input 是null";r.addEventListener("change",(function(){ChangeType(this.value)})),currentType.length<1&&(r.checked=!0,ChangeType(r.value))}GetElementById("genbutton").addEventListener("click",(function(){BuildFinalImage(GetInputValues())}));var n=qus.vv;if(null!=n){var a=JSON.parse(n);for(t=0;t<e.length;t++){var r;if(null==(r=e.item(t)))throw"有一个 selecttype input 是null";r.value==a.type&&(r.checked=!0,ChangeType(a.type))}var i=GetElementById("t1");i.value=a.t1,(i=GetElementById("t2")).value=a.t2,BuildFinalImage(a)}}();var imgHead=new Image;imgHead.src="https://cdn.jsdelivr.net/gh/PetrichorA/page-2ffd9144@0.2.4/image.jpg";var imgBottom=new Image;function BuildFinalImage(e){var t=GetElementById("share_notice"),n=GetElementById("outimage");n.src="";var a=GetElementById("notice");a.style.display="block",a.innerText="稍等，图片加载中";var r=GenDiv(e);html2canvas(r).then((function(i){r.style.display="none";var l=new Image;l.src=i.toDataURL(),l.onload=function(){var r=document.createElement("canvas");r.width=1080,r.height=imgHead.height+l.height+imgBottom.height;var i=r.getContext("2d");if(null==i)throw"canvas 2d context is null!";var o=0;i.drawImage(imgHead,0,0),o=imgHead.height,i.drawImage(l,0,o),o+=l.height,i.drawImage(imgBottom,0,o);var c=GenURL(e),s=GenQRcode(c);s.onload=function(){if(null==i)throw"canvas 2d context is null!";o+=243,i.drawImage(s,435,o,208,208),n.src=r.toDataURL(),a.style.display="none",history.pushState("","",c),t.style.display="block"}}}))}imgBottom.src="https://cdn.jsdelivr.net/gh/PetrichorA/page-2ffd9144@0.2.5/image.jpg";
