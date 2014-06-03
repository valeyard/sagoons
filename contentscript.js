$(document).ready(function() {
  var storage = chrome.storage.sync;
  var g;
  var next;
  var settings = ["iglist", "oldbread", "lazyload", "avatarHideOption", "snypeAudio", "snype", "fflist", "signature", "quote", "avatarHide", "ads", "tweet", "filter", "vine", "webm", "cats", "main", "tree", "embedTweet"];
  
  chrome.storage.sync.get(settings,function (obj){
    g = obj;

    var forum_177 = {"\\b(daniel bryan|bryan|dbd|db)\\b":"vanilla midget", "\\bover/under\\b":"odds"};
    var forum_219 = {"\\bspongeh\\b":"bread stymie", "\\bsteve jobs\\b":"stebe jobs", "\\bandroid\\b":"anroid", "\\bgodaddy\\b":"nodaddy", "\\bValeyard\\b":"asshole", "\\apt gangbang\\b":"<marquee>apt gangbang</marquee>"};
    var forum_26 = {"\\b ralp \\b":"the talking toilet", "\\bgirls\\b":"bleeders", "\\bgbs\\b":"the moon", "\\bguys\\b":"bleeders"};
    var filters = {"forum_177": forum_177, "forum_219": forum_219 ,"forum_26": forum_26}

    var x = new RegExp("(http|https)://vine\.co/v/[A-Za-z0-9]+");
    var pomf = new RegExp("[:A-Za-z0-9\.\/]+\\.webm");
    var gif = new RegExp("(http|https)://[A-Za-z0-9]+\.gfycat\.com/[A-Za-z0-9]+[\.]*[A-Za-z0-9]+\.webm");

    // $(".UFICommentContentBlock").each(function(index, post){
    //   $this = $(post);
    //   console.log("something")
    //   console.log($this)
    // });
    var emote = ":([A-Za-z0-9]+):";
    var h = new RegExp(emote, 'gi');
    
    console.log("HUHUhuh")
//     $("#pagelet_group_mall").bind("DOMSubtreeModified", function() {
//     console.log("something has been changed on page, you should update href tag");
// });
    $('#pagelet_group_').find(".UFIComment").each(function(index, post){
      $this = $(post)
      var comment = $this.innerText;
      console.log($this[0].innerText)
      var h = new RegExp(emote, 'gi');
      var t = h.exec(comment);
      console.log(h.test(comment))
      if (t!=null){
        console.log("ASDASAS")
      }
    });

    $('#pagelet_group_').on('DOMNodeInserted', function(e) {
      console.log($(e.target))
    // if ($(e.target).is('.UFIComment')) {
    //    //console.log($(e.target)[0].innerText);
    //    console.log("out")
    //     var comment = $(e.target)[0].innerText;
    //     console.log(comment)
    //     var h = new RegExp(emote, 'gi');
    //     var t = h.exec(comment);
    //     console.log(h.test(comment))
    //     if (t!=null){
    //       console.log("ASDASAS")
    //     }
    // }
    if ($(e.target).is('.UFIList') || $(e.target).is('.UFIComment')) {
       //console.log($(e.target)[0].innerText);
       console.log("outList")
       $(e.target).find(".UFICommentBody").each(function(index, post){
        $this = $(post)
        console.log($this[0].innerText)
        var comment = $this[0].innerText
       var h = new RegExp(emote, 'gi');
       var t = h.exec(comment);
       console.log(h.test(comment))
       if (t!=null){
         console.log("ASDASAS")
         console.log(t[1])
         $this[0].innerText = $this[0].innerText.replace(t[1], "GAY")
       }
       })
      // var h = new RegExp(emote, 'gi');
      // var t = h.exec(comment);
      // console.log(h.test(comment))
      // if (t!=null){
      //   console.log("ASDASAS")
      // }
    }
});

    // if (g.filter == undefined) g.filter = false;
    // if (g.filter){
    //   for(var j in filters[thisForum]){
    //     var h = new RegExp(j, 'gi');
    //     var t = h.exec(text);

    //     if (t != null){
    //       console.log("Foundd"); //had to change t[0] to t[1] to make it work, it worked previously the other way, watch out
    //       $(this).find(" td.postbody")[0].innerHTML=$(this).find(" td.postbody")[0].innerHTML.replace(h, filters[thisForum][j])
    //     };

    //     var gah = new RegExp("\\b"+j+"\\b", 'gi');
    //     var tee = gah.exec(author);

    //     if (tee != null){
    //       console.log(tee);
    //       console.log($(this).find(" dt.author")[0].innerText); //had to change tee[0] to tee[1] to make it work, it worked previously the other way, watch out
    //       $(this).find(" dt.author")[0].innerHTML=$(this).find(" dt.author")[0].innerHTML.replace(tee[0], filters[thisForum][j])
    //     }
    //   }
    // }

      
  });
});
