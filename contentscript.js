$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = [];
  
  chrome.storage.sync.get(settings,function (obj){
    g = obj;

    var emote = ":([A-Za-z0-9]+):";
    var h = new RegExp(emote, 'gi');
    console.log(window.location.href)
    $(document.body).on('DOMNodeInserted', function(e) {
      if ($(e.target).is('.UFIList') || $(e.target).is('.UFIComment')) {
        $(e.target).find(".UFICommentBody").each(function(index, post){
          $this = $(post)
          console.log($this[0].innerText)
          var comment = $this[0].innerText
          var h = new RegExp(emote, 'gi');
          var t = h.exec(comment);
          if (t!=null){
            var s = chrome.extension.getURL("images/"+t[1]+".gif")
            var saimg = '<img src="'+ s +'" alt="" class="img" border="0">'
            $this[0].innerHTML = $this[0].innerHTML.replace(":"+t[1]+":", saimg)
          }
        })
      }
    });      
  });
});
