// $(function(){
//     $('[data-filter="trigger"]').on("change", function() {
//         var t = $(this).find("option:selected").val().toLowerCase();
    
//         $('[data-filter="target"]').css("display", "none"); 
//         $("#" + t).css("display", "table-row-group"); 
//         if(t == "all") {
//             $('[data-filter="target"]').css("display", "table-row-group")
//         }
//         $(this).css("display", "block"); 
//     });
//     }) 


$(document).ready(function(){
    
    var multipleCancelButton = new Choices('#compare-criteria', {
       removeItemButton: true,
       maxItemCount:100,
       searchResultLimit:100,
       renderChoiceLimit:100
     }); 
    
    
});

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector ('.hidden-content');

function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')
  ) {
    hiddenContent.classList.remove('reveal-btn')
  } else{
    hiddenContent.classList.add('reveal-btn')
  }
  
}

revealBtn.addEventListener('click', revealContent);
