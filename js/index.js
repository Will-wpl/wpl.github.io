$(document).ready(function(){
	drawNotice();
	drawClassList();
})

function drawNotice(){
	$("#index_title").text(pagedata.notice.title);
	$("#index_content").text(pagedata.notice.content);
}

function drawClassList(){
	this.listHtml = '';
	this.hotclass = pagedata.hotclass;
	for(var i=0; i<this.hotclass.length; i++){
		this.listHtml += '<li >'+
			                '<a href="details/index.html#'+this.hotclass[i].classId+'" class="weui-media-box weui-media-box_appmsg">'+
			                    '<div class="weui-media__hd">'+
			                        '<img class="weui-media__thumb" src="'+this.hotclass[i].img+'" alt="">'+
			                    '</div>'+
			                    '<div class="weui-media__bd">'+
			                        '<h4 class="weui-media__title">'+this.hotclass[i].title+'</h4>'+
			                        '<p class="weui-media__desc">'+this.hotclass[i].content+'</p>'+
			                    '</div>'+
			                '</a>'+	 
			              '</li>';		
	}
	$("#classlist ul").html(this.listHtml);
}
