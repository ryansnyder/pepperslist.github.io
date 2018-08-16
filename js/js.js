$('#backToTop').click(function(){
  $('html,body').animate( { scrollTop: 0 } ,'slow');
  return false;
});

$('.soft-scroll').click(function(){
  mixpanel.track("Click list item");
});

$('.click-purchase-link').click(function(){
  mixpanel.track("Click purchase link");
});

// Native smooth scroll to element
function smoothScrollTo(node) {
  node.scrollIntoView({behavior: 'smooth'});
}

$(document).ready(function() {
  $('#shopping-list').DataTable( {
      // "order": [[ 1, "asc" ], [2,'asc'], [0,'asc']],
	  "order": [ 0, "asc" ],
	  paging: false,
      "type": "num"
  });
  $("#shopping-list_length").hide();
  $("#shopping-list_info").hide();      
  $("#shopping-list_paginate").hide(); 
  $("#shopping-list_filter").hide();           	
} );