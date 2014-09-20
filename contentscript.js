  function imgError(image) {
      image.onerror = "";
      var s = chrome.extension.getURL("images/icons/notfound.gif")
      image.src = s;
      return true;
  }

$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = [];
  


  chrome.storage.sync.get(settings,function (obj){
    g = obj;
    //console.log(window.location.href)
    var emote = ":([A-Za-z0-9]+):";
    var h = new RegExp(emote, 'gi');
    var s = chrome.extension.getURL("images/icons/notfound.gif")

    $(".userContent").each(function(index, post){ //for the op
      console.log("hey")
      $this = $(post)
      var comment = $this[0].innerText
      var h = new RegExp(emote, 'g');
      var t;
       
      while ((t = h.exec(comment))!=null){
        //console.log(t)
        var s = chrome.extension.getURL("images/"+t[1]+".gif") 
        var saimg = '<img src="'+ s +'" title="'+t[1]+'" class="img" border="0">'
        $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
      }
      $("img").error(function () {
      $(this).unbind("error").attr("src", s);
    }); 
    })

    $("#contentArea").find(".UFICommentBody").each(function(index, post){ //for the first time page load
      $this = $(post)
      var comment = $this[0].innerText
      var h = new RegExp(emote, 'g');
      var t;
       
      while ((t = h.exec(comment))!=null){
        //console.log(t)
        var s = chrome.extension.getURL("images/"+t[1]+".gif")
        var saimg = '<img src="'+ s +'" title="'+t[1]+'" class="img" border="0" >'
        $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
      }
      $("img").error(function () {
      $(this).unbind("error").attr("src", s);
    }); 
    })

    $(document.body).on('DOMNodeInserted', function(e) { //every time something is inserted
      //console.log(e.target)
      if ($(e.target).is('.UFIList') || $(e.target).children().is('.UFIComment') || $(e.target).is('.UFIComment')  ) {
        //console.log("inserted")
        $(e.target).find(".UFICommentBody").each(function(index, post){
          $this = $(post)
          var comment = $this[0].innerText
          var h = new RegExp(emote, 'g');
          var t;
           
          while ((t = h.exec(comment))!=null){
            //console.log(t)
            var s = chrome.extension.getURL("images/"+t[1]+".gif")
            var saimg = '<img src="'+ s +'" title="'+t[1]+'" class="img" border="0">'
            $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
          }
        })
      }

      $("img").error(function () {
      $(this).unbind("error").attr("src", s);
    }); 
    });     
  });
});
