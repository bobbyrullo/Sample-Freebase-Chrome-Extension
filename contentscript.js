var data = null;

get_local = function(resource, cb){
  chrome.extension.sendRequest({command: "get_local",
                                "resource": resource}, cb);
  
};

init_widget = function(){
  console.log("intter initted");
  console.log( $("#mwce_sliderWrap").length  );

  // initialize the close button
  $("#mwce_closer").click(function(){
    console.log("closer clicker");
    $("#mwce_sliderWrap").animate({
        "margin-top": -100
    },100);
  });


  // initialize suggest
  get_local("suggest.min.js", function(data){
     console.log("suggest: " + data.data);
     eval(data.data);
     $("#mwce_suggest").suggest({type:'/film/director'});

  });

};


get_local("sliderContent.html", 
          function(response) {
            data = response.data;
            console.log("response.data: " + data);
            $("body").prepend(data);
            init_widget();
          });









