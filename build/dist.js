$(function(){
	$("#index-sbtn").on("click",function(){
		 location.href="changNum.html";
	})
})
function Code(opt){
	  this.opt=opt;
      this.element=document.querySelector(this.opt.ele);
      this._time=this.opt._time;
      this.text="获取验证码";
      this.timer=null;
      this._className=this.opt._className;
      this.init();
}
Code.prototype={
	 init:function(){
	 	this.element.value=this.text;
	 	this.beginT();
	 },
	  beginT:function(){
	  	var that=this
	  	  this.element.addEventListener("click",function(){
	  	  	   that.element.value=that._time+"s后重发";
               that.element.className+=that._className;
               timer=setInterval(function(){
               	  that._time--;
               	  that.element.disabled=true;
               	  that.element.value=that._time+"s后重发";
               	  if(that._time<=0){
               	  that.element.value="重新获取验证码"; 
               	  clearInterval(timer);
                    that._time=that.opt._time;
               	  that.element.disabled=false;
               	  that.element.className=that.element.className.replace(that._className,"");
               	  }
               },1000)
	  	  },false)
	  }
}

//调用

 /*var code=new Code({
             ele:".code",
             _time:10,
             _className:" on"
         })*/
;(function($){
	$.dialog=function(option){
		return new dialog(option);
	}

	function dialog(option){
		var defaults={
			title:'',
			close:'',
			msg:'',
			btn:[
			        {text:'确定',className:'ok'},
			        {text:'取消',className:'no'},
			    ],
			btn1Event:null,
			btn2Event:null
		},
		defaults=$.extend({},defaults,option);
		addDialog(defaults);
		addEvent(defaults);
	}

	function addDialog(defaults){
		var html=$('<div class="mask"></div>'//遮罩层
				+'<div class="dialog-box animated bounceInUp">'//弹出盒子
					+'<p class="dialog-title">'+defaults.title+'</p>'//标题
					+'<h1 class="dialog-msg">'+defaults.msg+'</h1>'//内容
					+'<div class="dialog-btn-wrap"></div>'//按钮
				+'</div>');
		$('body').prepend(html);
		addBtn(defaults);
	}
	//遍历按钮
	function addBtn(defaults){
		if(defaults.btn.length==0) return false;
		for(var i=0,len=defaults.btn.length;i<len;i++){
			var close=$('<span class="dialog-btn '+defaults.btn[i].className+'">'+defaults.btn[i].text+'</span>')
			$('.dialog-btn-wrap').append(close);
		}
	}
	
	function addEvent(defaults){
		var dft=defaults;
		$('.dialog-btn').on('click',function(){
			btnsEvent();
		})
		$('.ok').on('click',function(){
			dft.btn1Event && dft.btn1Event();
			return;
		})
		$('.no').on('click',function(){
			dft.btn2Event && dft.btn2Event();
		})
	}
	function btnsEvent(){
		$('.mask').remove();
		$('.dialog-box').remove();
	}



	//调用
/*	$.dialog({
	    msg:'信息！',
	    btn:[
	    	{text:'确定',className:'ok'},
	     	{text:'取消',className:'no'}
	     ]
	})*/
})(jQuery)
function ImgCode(opt){
	  this.opt=opt;
	  this.ele=document.querySelector(this.opt.ele);
	  this.showEle=document.querySelector(this.opt.showEle);
	  this.arr=this.opt.str.split("");
	  this.len=this.opt.len;
	  this.init();
}

ImgCode.prototype={
	 init:function(){
         this.bindEvent();
         fn(this);
	 },
	 bindEvent:function(){
	 	var that=this;
	 	this.ele.addEventListener("click",function(){
	 		/*var _length=that.arr.length,
	 		   arr1=[];
           for(var i=0;i<that.len;i++){
               arr1.push(that.arr[Math.floor(Math.random()*_length)]);
           }
           var str=arr1.join("");
           that.showEle.innerHTML=str;*/
           fn(that)

	 	},false)
	 }
}

function fn(obj){
       var _length=obj.arr.length,
	 		   arr1=[];
           for(var i=0;i<obj.len;i++){
               arr1.push(obj.arr[Math.floor(Math.random()*_length)]);
           }
           var str=arr1.join("");
           obj.showEle.innerHTML=str; 
}
/*调用验证码*/

/*var imgC=new ImgCode({
	 str:"0123456789qwertyuiopasdfghjklzxcvvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
	 ele:".y-change",
	 showEle:".y-show",
	 len:4
})*/
$(function(){
	$(".user-id input").on("focus",function(){
		  $(".question").hide();
		  $(".footer").hide();
	})	
	  $(".ma").on("keyup",function(){
	  	 var text=$(".user-id input").val(),
             code=$(".ma").val();
	  	   if(text!=""&&code!=""){
	  	   	 $("#index-sbtn").addClass("blue m");
	  	   }
	  })

    $("#index-sbtn").on("click",function(){
    	 var text=$(".user-id input").val(),
             code=$(".ma").val();
        if(text==""&&code==""){
            $.dialog({
	          msg:'填写信息不完整！',
	          btn:[
	    	     {text:'确定',className:'ok'},
	     	     {text:'取消',className:'no'}
	           ]
	       })
          $("#index-sbtn").removeClass("blue");
          $(".user-id input").val("");
          $(".ma").val("");
       	  return false;

    	   
       }else if(text!="6688"){
       	   $.dialog({
	          msg:'填写信息错误！',
	          btn:[
	    	     {text:'确定',className:'ok'},
	     	     {text:'取消',className:'no'}
	           ]
	       })
	        $("#index-sbtn").removeClass("blue");
          $(".user-id input").val("");
          $(".ma").val("");
           $("#index-sbtn").removeClass("blue");
       	  return false;
       	

       }else{
       	   window.location.href="binding.html";
       }
            
       
    })

})
;(function($){
	init();
	function init(){
		addEvent();
	}
	function addEvent(){
		//当点击余额的时候
		$('.money').on('click','.prestore',function(){
			$('.prestoreM').show();
			$('.prestore').hide();

		})

		//选择金额
		$('.prestoreM').on('click','li',function(){
			var prestoreTxts = $(this).text();
			$('.prestore').text(prestoreTxts).show();
			$('.prestoreM').hide();
		})

		//当点击套餐的时候
		$('.money').on('click','.box-prestore',function(){
			//$(this).addClass('on').siblings('.box-prestore').removeClass('on');
			changes($(this));	
		})

		//当点击是否需要来电的时候
		$('.callShow').on('click','span',function(){
			changes($(this));
		})

		function changes(ele){
			$(ele).addClass('on').siblings().removeClass('on');
		}


		//当点击余额的时候
		$('.msg').on('click','.msg-tit',function(){
			$('.box-message').show();

		})

		$('.form').on('click',".box-message",function(){
			$('.box-message').hide();
		})

		var arrs=[17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378,17038905378],
			str='';
			$.each(arrs,function(k,v){
				str+='<li>'+v+'</li>';
			})
		$('.list-nums').append(str);
		
		$('.phone-nums').on("click","li",function(){
			changes($(this));
			var _nums =$(this).text();
			$('.Code').val(_nums);
			$('.phone-nums').removeClass('on');

		})

		$('.msg').on("click",".Code",function(){
			$('.phone-nums').addClass('on');
		})


		$('.blue').on("click",function(){
			location.href="3g_tab.html";
		})
	}
	
})(jQuery)
$(function() {
	init();

	function init() {
		//切换函数
		tab();
		//检测提交函数
		check();

	}

//切换函数
function tab() {
        //切换封装函数
        function sumtab(parentele,style){
		     $(parentele).on("click", "li", function() {
					$(this).addClass(style)
						   .siblings().removeClass();
		     })
        }

        //当点击css-tab-nav时，切换不同的内容区
        sumtab(".css-tab-nav",'css-bg');

        //当点击css-add-price时，对应金额变亮
        sumtab('#css-add-price','css-on');
	};

//检测提交函数
function check() {
        //当css-add-tel获取焦点时，按钮变亮
        $('#css-add-tel').on('focus',function(){
        	 $(".css-add-btn").removeClass('gray').addClass('blue');

        })
        //当css-add-tel失去焦点时，按钮变暗
        $('#css-add-tel').on('blur',function(){
		     
		     //判断输入内容格式是否正确，正确则提交，否则提醒
		     var str=$('#css-add-tel').val();
		     var reg=/^1[3|5|7|8]\d{9}$/;//手机号码正则
		     if(reg.test(str)){
		        	alert("格式正确，可提交");
		        	$(".css-add-btn").removeClass('gray').addClass('blue');
		     }else{
		        	alert("格式有误，请重新输入");
		        	$(".css-add-btn").removeClass('blue').addClass('gray').addClass('css-btn');
                    str=='';
		     }

        })
     
      
		

	};
})