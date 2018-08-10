$('#backToTop').click(function(){
  $('html,body').animate( { scrollTop: 0 } ,'slow');
  return false;
});

$(document).ready(function() {
  $('#shopping-list').DataTable( {
      "order": [[ 1, "asc" ], [2,'asc'], [0,'asc']]
  });
  $("#shopping-list_length").hide();
  $("#shopping-list_info").hide();      
  $("#shopping-list_paginate").hide(); 
  $("#shopping-list_filter").hide();           	
} );