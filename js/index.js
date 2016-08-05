
window.onload=function(){
	var box=document.getElementsByClassName('box')[0];
  
/*  $("#audioBtn").click(function(){
    if (music.paused) {
      music.play();
      $("#audioBtn").removeClass("pause").addClass("play");
    }else{
      music.pause();
      $("#audioBtn").removeClass("play").addClass("pause")
    }
  });*/
	animate(box,{"height":550},1000,Tween.Back.easeInOut);	
	var start=document.getElementsByClassName('start')[0];
	var javas=document.getElementsByClassName('java')[0];
  /*var music=document.getElementsById('bgMusic');*/
/*  $("#audioBtn").click(function(){
    if (music.paused) {
      music.play();
      $("#audioBtn").removeClass("pause").addClass("play");
    }else{
      music.pause();
      $("#audioBtn").removeClass("play").addClass("pause")
    }
  });*/
	start.onclick=function(){
		javas.src="images/123.gif";
		javas.style.left=245+"px";
		setTimeout(function(){
			animate(box,{"height":0},1000,Tween.Back.easeInOut,function(){
				game.play();
			});
			
		},3000);

	}

function game(){
     this.objscene=document.getElementsByClassName("scene")[0];
     this.objshengming=document.getElementById("shengming");
     this.objfenshu=document.getElementById("fenshu");
     this.arr=[{"a.png":"A"},{"b.png":"B"},{"c.png":"C"},{"d.png":"D"},{"e.png":"E"},{"f.png":"F"},{"g.png":"G"},{"h.png":"H"},{"i.png":"I"},{"j.png":"J"},{"k.png":"K"},{"l.png":"L"},{"m.png":"M"},{"n.png":"N"},{"o.png":"O"},{"p.png":"P"},{"q.png":"Q"},{"r.png":"R"},{"s.png":"S"},{"t.png":"T"},{"u.png":"U"},{"v.png":"V"},{"w.png":"W"},{"x.png":"X"},{"y.png":"Y"},{"z.png":"Z"}];
     this.currentarr=[];
     this.currentaobj=[];
     this.count=5;
     this.speed=4;
     this.shengming=10;
     this.fenshu=0;

}
 game.prototype={
 	play:function(){
 		this.getarr();
 		this.move();
 		this.keydown();
 	},
 	getarr:function(){
 		for(var i=0;i<this.count;i++){
 			var img=document.createElement("img");
 			var nub=Math.floor(Math.random()*this.arr.length);
 			for(var j in this.arr[nub]){
 				img.src="images/A_Z/"+j;
 			}
 			img.style.position="absolute";
 			img.style.left=Math.random()*800+"px";
 			img.style.top=Math.random()*100+"px";
 			this.currentarr.push(this.arr[nub]);
 			this.currentaobj.push(img);
 			this.objscene.appendChild(img);
 		}
 	},
 	move:function(){
   		var that=this;
   		that.objshengming.innerHTML=that.shengming;
      	setInterval(function(){
      		for(var i=0;i<that.currentaobj.length;i++){
      			var top=parseInt(that.currentaobj[i].style.top);
      			that.currentaobj[i].style.top=top+that.speed+"px";
      			if(top>500){
      				that.objscene.removeChild(that.currentaobj[i]);
      				that.currentaobj.splice(i,1);
      				that.currentarr.splice(i,1);
      				that.shengming--;
      				that.objshengming.innerHTML=that.shengming;
      				if(that.shengming<=0){
      					alert("  GAME OVER");
      					location.reload();
      				}
      			}
      			if(that.currentaobj.length<that.count){
      				var img=document.createElement("img");
		 			var nub=Math.floor(Math.random()*that.arr.length);
		 			for(var j in that.arr[nub]){
		 				img.src="images/A_Z/"+j;
		 			}
		 			img.style.position="absolute";
		 			img.style.left=Math.random()*800+"px";
		 			img.style.top=Math.random()*100+"px";
		 			that.currentarr.push(that.arr[nub]);
		 			that.currentaobj.push(img);
		 			that.objscene.appendChild(img);
      			}
      		}
      	},60);

 	},
 	keydown:function(){
 		var that=this;
 		that.objfenshu.innerHTML=that.fenshu;
 		document.onkeydown=function(e){
 			var e=e||window.event;
 			var zimu=String.fromCharCode(e.keyCode);
 			for(var i=0;i<that.currentarr.length;i++){
 				for(var j in that.currentarr[i]){
 					if(zimu==that.currentarr[i][j]){
 						that.objscene.removeChild(that.currentaobj[i]);
		      				that.currentaobj.splice(i,1);
		      				that.currentarr.splice(i,1);
		      				that.fenshu++;
		      				that.objfenshu.innerHTML=that.fenshu;
 					}
 				}
 			}
 		}
 	}
 }
var game=new game();
}