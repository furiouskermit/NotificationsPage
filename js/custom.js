$(function(){
  $.read = function(item1, item2){
    item1.addClass("markRead")
    item2.removeClass("d-none")
  }
  $.readNum = function(){
    const readNum = $(".noti-item.markRead").length;
    $(".noti-num").text(readNum)
  }

  $.readNum()

  $("#btnReadAll").click(function(){
    $.read($(".noti-item"), $(".noti-mark-read"))
    $.readNum()
  })
  $(".noti-item").click(function(){
    $.read($(this), $(this).find(".noti-mark-read"))
    $.readNum()
  })

  
})