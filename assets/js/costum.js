
const icon = document.querySelector('.navbar-toggle');
const link = document.querySelector('.flex-nav');
    icon.addEventListener('click', ()=>{
       if(link.style.display == 'flex' || link.style.display == 'block')
        link.style.display = 'none';
       else { link.style.display = 'block'}
    })

function searchs() {
  var x = document.getElementById("toggle-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


var count = 0;
$('.add').click(function () {
    count = parseInt($(this).parent().find('#add-count').val());
    count = parseInt(count) + 1;
    $(this).parent().find('#add-count').val(count);
});


 function initAcc(elem, option){
        //addEventListener on mouse click
        document.addEventListener('click', function (e) {
            //check is the right element clicked
            if (!e.target.matches(elem+' .a-btn')) 

               return;
            else{
                //check if element contains active class
                if(!e.target.parentElement.classList.contains('active')){
                    if(option==true){
                         //if option true remove active class from all other accordions 
                        var elementList = document.querySelectorAll(elem +' .a-container');
                        Array.prototype.forEach.call(elementList, function (e) {
                            e.classList.remove('active');
                        });
                    }    
                    //add active class on cliked accordion     
                    e.target.parentElement.classList.add('active');
                }else{
                    //remove active class on cliked accordion     
                    e.target.parentElement.classList.remove('active');
                }
            }
        });

    }
    //activate accordion function
    initAcc('.accordion', true);

$(".a-btn").click(function(){
  $("a-btn").addClass("active");
});
/*
setInterval(function(){
         $(".masonry").animate({marginLeft:-3000},7000,function(){
            $(this).css({marginLeft:0}).find("item:last").after($(this).find("item:first"));
         })
      }, 3000);

/*page kiosque*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};
$("div#makeMeScrollable").smoothDivScroll({

  // always, onStart or empty (no auto scrolling) String
  autoScrollingMode: "onStart", 

  // right, left, backAndForth, endlessLoopRight, endlessLoopLeft String
  autoScrollingDirection: "endlessLoopRight", 

  // Pixels
  autoScrollingStep: 1, 

  // Milliseconds
  autoScrollingInterval: 10, 

  // Pause on hover
  autoScrollingPauseOnHover: false
  
});
function recherche(){
  var t = document.getElementsByClassName("typeahead")[0].value; //le[0] permet de voir tous les élemnts de la liste (les enfants)
  var tb = document.getElementsByClassName("ulaffiche")[0].children ;
  
  for(i=0; i<tb.length;i++){
  if (tb[i].textContent.toUpperCase() != t.toUpperCase() && t.toUpperCase()!= null && t.toUpperCase() != "" ){
    $(tb[i]).hide();
  }
  else $(tb[i]).show();
  }
  
};



