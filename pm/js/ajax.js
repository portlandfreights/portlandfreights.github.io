$(document).ready(function(){  
    //Hintergrundbild
	$("#background-image").fullscreenBackground();
	
	inputtext = $("input#search").val();
	jQuery("input#search").focus(function() {
		if(this.value==inputtext) this.value='';
	});
	jQuery("input#search").blur(function() {
		if(this.value=='') this.value=inputtext;
	});
	
	$('.navi_button').toggle(function(){  
			$('.navi_container').stop().animate({left: "-256"}, "medium");$('.navi_button').addClass("navi_out");},function(){
			$('.navi_container').stop().animate({left: "0"}, "medium");$('.navi_button').removeClass("navi_out");
		}
	);
	
	
	//Tooltips
	var id;
	$('.circle').hover(function(){ 
		id = $(this).attr('id');
		var test = false;
		
		if($(".t"+id).is(':animated'))
			return false;
		
		$('.sm').each(function(){
			$(this).css("z-index",4);
		});
		$('.circle').each(function(){
			$(this).css("z-index",70);
		});
		$('.teaser').each(function(){
			$(this).css("z-index",90);
			test = true;
		});
		
		if(!test){return false;}
		
		//$('#'+id+' img').addClass('rotate_bullet').animate();
		$('#'+id+' img').rotate(135);
		
		$('#'+id).css("z-index",250);
		$(".t"+id).css("z-index",225);
		$(".s"+id).css("z-index",200);
        $(".t"+id).show("normal");  
    }, function(){  
		$('#'+id+' img').rotate(0);
		$(".t"+id).hide("normal",function(){
			$(".s"+id).css("z-index",5);
			$('#'+id).css("z-index",100);
			$(".t"+id).css("z-index",90);
			
			return false;
		});
		return false;
	});

    $.fn.rotate = function(rot){
	 $(this).css({"transition": "all 100ms ease-in-out"});
     $(this).stop().animate({rotation: rot},
         	{duration: 100,
           	 step: function(now, fx) {
			 $(this).css({"-sand-transform": "rotate("+now+"deg)"});
			 $(this).css({"-ms-transform": "rotate("+now+"deg)"});
			 $(this).css({"-webkit-transform": "rotate("+now+"deg)"});
        	 $(this).css({"-moz-transform": "rotate("+now+"deg)"});
			 $(this).css({"transform": "rotate("+now+"deg)"});
           	}
         });
    };

});

function pager(query,join,start,id) 
{
    $("#ajaxcontent"+id).load(
		"/search/ajax_search.php",
		{
			query: query,
			join: join,
			start: start,
			id: id
		}
	);

   return false; 
}

//Bildergalerie
function loadPictures(gid,group,action) 
{
    $("#ajaxgallery").load(
		"pictures/ajax.php",
		{
			gid: gid,
			group: group,
			action: action
		}
	);
	
   return false; 
}