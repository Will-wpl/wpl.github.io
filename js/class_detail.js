$(document).ready(function(){
	var detailId = window.location.href.split("#")[1];
	console.log(detailId);
	var detailData = {};
	for(var i = 0; i < pagedata.prodetails.length; i++){
		if(detailId==pagedata.prodetails[i].id){
			detailData = pagedata.prodetails[i];
		}
	}
	console.log(detailData);
	var classdetailHtml  =  '<div class="aui-ad-img">'+
								'<video src="'+detailData.videoUrl+'" poster="'+detailData.videoImg+'" width="100%" controls="controls"></video>'+
							'</div>'+
							'<div class="aui-flex-box">'+
								'<h1>'+detailData.title+'</h1>'+
								'<h2><i class="icon icon-time"></i>'+detailData.create_time+'</h2>'+
								'<span>';
									for(var j=0; j<detailData.tag.length; j++){
										classdetailHtml += '<em>'+detailData.tag[j]+'</em>';
									}
			classdetailHtml +=	'</span>'+
								'<h3><i>￥</i>'+detailData.price+'</h3>'+
							'</div>';
	console.log(classdetailHtml);
	$("#class_detail_main").html(classdetailHtml);
	$("#class_detail").text(detailData.class_detail);
	$("#class_info").text(detailData.class_info);
	$("#class_teacher").text(detailData.class_teacher)
})
