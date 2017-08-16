function Table(nodeElement){ //nodeElement 挂载元素
	//构造函数
	this.nodeElement = nodeElement || document.body;
	this.percent = 100;
}

Table.prototype = {
	createTable : function(json){
		if(!json){
			throw "Place set the number of rows or columns"//报错
		}else{
			this.percent = 1 / json.col * 100;
			this.cssCn();//样式编写区域
			var rowEle = null;
			var colEle = null;
			for(var i=0,len=json.row;i<len;i++){
				rowEle = document.createElement("div");
				rowEle.className = "row";
				if(i%2 == 0){
					rowEle.className += " double";
				}
				this.nodeElement.appendChild(rowEle)
				for(var j=0,len=json.col;j<len;j++){
					colEle = document.createElement("div");
					colEle.className = "col";
					rowEle.appendChild(colEle);
				}
			}

		}
	},//创建表格  //字面量对象
	//样式编写区域
	cssCn : function(){
		var css = document.getElementsByTagName("style")[0];
		if(!css){
			css = document.createElement("style");
			document.head.appendChild(css);
		}
		//还要判断是否是id命名
		css.innerText += '.row{width:100%;height:30px;background:#ecffff;border-bottom:1px solid #000;}.double{background:#a6ffff;}.col{box-sizing:border-box;height:30px;width:'+this.percent+'%;float:left;border-left:1px solid #000;}';
	},
	delTable : function(){
		alert("表格删除了")
	},//表格删除
	content: function(){

	}//添加内容
}



/*
	什么是对象:(拥有属性和方法的集合)
		你能干什么  方法   你.打游戏
		你有什么特征  属性  你.年龄  你得.性别
*/
