$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = [];
  
  chrome.storage.sync.get(settings,function (obj){
    g = obj;

    var emote = ":([A-Za-z0-9]+):";
    var h = new RegExp(emote, 'gi');

    $("#contentArea").find(".UFICommentBody").each(function(index, post){
      $this = $(post)
      var comment = $this[0].innerText
      var h = new RegExp(emote, 'g');
      var t;
       
      while ((t = h.exec(comment))!=null){
        console.log(t)
        var s = chrome.extension.getURL("images/"+t[1]+".gif")
        var saimg = '<img src="'+ s +'" alt="" class="img" border="0">'
        $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
      }
    })

    // $("#contentArea").bind("DOMSubtreeModified", function() {
    //     $("#contentArea").find(".UFICommentBody").each(function(index, post){
    //       $this = $(post)
    //       var comment = $this[0].innerText
    //       var h = new RegExp(emote, 'g');
    //       var t;
           
    //       while ((t = h.exec(comment))!=null){
    //         console.log(t)
    //         var s = chrome.extension.getURL("images/"+t[1]+".gif")
    //         var saimg = '<img src="'+ s +'" alt="" class="img" border="0">'
    //         $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
    //       }
    //     })
    // });

    $(document.body).on('DOMNodeInserted', function(e) {
      console.log(e.target)
      if ($(e.target).is('.UFIList') || $(e.target).children().is('.UFIComment') || $(e.target).is('.UFIComment') ) {
        console.log("inserted")
        $(e.target).find(".UFICommentBody").each(function(index, post){
          $this = $(post)
          var comment = $this[0].innerText
          var h = new RegExp(emote, 'g');
          var t;
           
          while ((t = h.exec(comment))!=null){
            console.log(t)
            var s = chrome.extension.getURL("images/"+t[1]+".gif")
            var saimg = '<img src="'+ s +'" alt="" class="img" border="0">'
            $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
          }
        })
      }
      if ($(e.target).is('.userContent')) {
        console.log($(e.target))
      }
    });      
  });
});
