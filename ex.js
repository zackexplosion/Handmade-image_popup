$(document).ready(function(){

$POPUPBOX_HEIGHT = $(document).height();
$POPUPBOX = $('#popupbox');

$('img').click(function(e){//當照片被點選的時候
	$POPUPBOX.fadeIn(100).css({'display':'block','height':$POPUPBOX_HEIGHT});  //讓原本被隱藏的popupbox顯示出來，並且高度等於現在document的高度
	$POPUP_IMAGE = $(this).attr('src');
	//console.log($POPUP_IMAGE);   --->debug use
	//將點選的圖片塞到popupbox的add_be_show_images
	$('.add_be_show_images').html('<img class="bepopup" src="'+$POPUP_IMAGE+'">');
	e.stopPropagation(); //停止冒泡事件
});


$('body, .close_popup').click(function(){
	$POPUPBOX.hide();
}); 
//不論點選"X close me / 關掉圖片放大"或是網頁的某個地方，都可以關掉這個popup

});
