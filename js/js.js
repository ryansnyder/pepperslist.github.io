
$('#backToTop').click(function(){
  $('html,body').animate( { scrollTop: 0 } ,'slow');
  return false;
});

$('#hide-list').click(function(){
  hideTableRows();
  $('#hide-list').hide();
  $('#show-list').show();
  if (isProductionEnvironment()) {
    mixpanel.track("Hide shopping list");	
  }
});

$('#show-list').click(function(){
  showTableRows();
  $('#hide-list').show();
  $('#show-list').hide();
  if (isProductionEnvironment()) {
    mixpanel.track("Show shopping list");	 
  }
});

$('.soft-scroll').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Click list item");	
  }  

  var href = $(this).attr('href');
  href = href.replace('#','');

  smoothScrollTo(href);
});

$('#download-spreadsheet').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("View spreadsheet");	
  }  
});

$('.click-purchase-link').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Click purchase link");	
  }  
});

// Native smooth scroll to element
function smoothScrollTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });	
}

function isProductionEnvironment() {
  if (location.hostname == "pepperslist.co") {
    return true;	
  }
  return false;
}

$(window).scroll(function(){
  var topofDiv = $("#stroller").offset().top;
  var height = $("#stroller").outerHeight();
  
  if ($(window).scrollTop() > (topofDiv + height)){
     $("#backToTop").show();
  }
  else {
     $("#backToTop").hide();
  }
});

function hideTableRows() {
  $(".hide-initially").hide('fast');      		
}

function showTableRows() {
  $(".hide-initially").show('fast');	
}

function changeShowListText() {
  var num = 0;
  $('#shopping-list > tbody > tr').each(function() {
    num++;
  });
  $("#show-full-list-text").text("Show all " + num + " items ");
}

$(document).ready(function() {
  if (isProductionEnvironment()) {
    mixpanel.track("Page load");	
  }

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

  changeShowListText();
  hideTableRows();
} );

