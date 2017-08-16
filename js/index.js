window.onload = function(ev){
	// alert("请更换高版本的浏览")
	var hNav = document.getElementsByClassName("header-nav")[0];//获取header-nav元素
	var down = document.getElementsByClassName("down")[0];//获取down元素 

	down.onclick = function(){
		document.body.scrollTop = 970 ;
		console.log(typeof(document.body.scrollTop))
		console.log(document.body.scrollTop)
		console.log(333)
	}

	function getScrollTop(){ var D = document; return Math.max(D.body.scrollTop, D.documentElement.scrollTop)};
	if(getScrollTop()>=73){
		if(document.body.scrollTop>=960)
		hNav.style.position = "fixed";
	}
	// 通过滚动条事件，固定顶部导航条
	document.body.onmousewheel =function(e){
		// console.log(000)
		// console.log(getScrollTop())
		// console.log(2222)
		if(getScrollTop()>=73){
			hNav.style.position = "fixed";
			hNav.style.top = 0 + "px";
		}else{
			hNav.style.top = 73 + "px";
		}
	}

	

	var ev = ev || document.event;
	var can = document.getElementById("canvas");
	var ctx = can.getContext("2d");
	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;

	window.onresize = function(){
		w = can.width = window.innerWidth;
		h = can.height = window.innerHeight;
	}

	/*  ctx.beginPath();
	//绘制圆形（x坐标，y坐标，半径，0-360度，顺时针）
	ctx.arc(200,200,100,0,Math.PI*2,true);
	ctx.fillStyle = "red";
	ctx.fill();

	//绘制线条
	ctx.beginPath();//开始路径
	ctx.moveTo(400,500);//把画笔移动到x,y坐标
	ctx.lineTo(300,700);//绘制到x,y坐标
	ctx.lineTo(500,400);
	ctx.closePath();//闭合路径
	ctx.strokeStyle = "#fff";
	ctx.stroke()
	*/
// 先获得圆心坐标
	var dots = [];
	function Dot(){
		this.x = Math.random()*w;
		this.y = Math.random()*h;
		// 坐标更改的速度值
		this.vx = Math.random()-0.5;
		this.vy = Math.random()-0.5;
		this.r = Math.random()*5;
		this.color = color2();
	};
	//绘制圆形粒子的方法
  	Dot.prototype.draw = function(){
  		ctx.beginPath();
  		ctx.fillStyle = this.color;
  		ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
  		ctx.fill();
  		this.updata();
  	}
  	//更新粒子的坐标位置
  	Dot.prototype.updata = function(){
  		if(this.x < 0 || this.x > w){
  			this.vx = -this.vx;
  		}
  		if(this.y < 0 || this.y > h){
  			this.vy = -this.vy;
  		}
  		this.x += this.vx;
  		this.y += this.vy;
  	};

  	//创建粒子
  	var dot = new Dot();
  	for(var  i=0;i<500;i++){
  		dots.push(new Dot)
  	};
  		// console.log(dots)
  	//画出粒子
  	function drawDots(){
  		ctx.clearRect(0,0,w,h);
		for(var i=0,l=dots.length;i<l;i++){
			dots[i].draw();
		}
  	};
	setInterval(drawDots,30);
	// function color1(){
	// 	var r = Math.floor(Math.random()*256);
	// 	var g = Math.floor(Math.random()*256);
	// 	var b = Math.floor(Math.random()*256);
	// 	var b = Math.floor(Math.random()*256);
	// 	return "rgb("+r+","+g+","+b+")"
	// }
	function color2(){
		return "#" + (~~(Math.random()*(1<<24))).toString(16)
	}

	$(".nav_content").find("span").eq(0).css({opacity:'1',left:'4px'})
	$(".nav_content").find("span").eq(1).css({opacity:'1',left:'12px',top:'80px'})
	$(".nav_content").find("span").eq(2).css({opacity:'1',left:'25px',top:'160px'})
	$(".nav_content").find("span").eq(3).css({opacity:'1',left:'12px',top:'240px'})
	$(".nav_content").find("span").eq(4).css({opacity:'1',left:'4px'})
}
