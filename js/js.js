
$('#backToTop').click(function(){
  $('html,body').animate( { scrollTop: 0 } ,'slow');
  return false;
});

$('#hide-list').click(function(){
  hideTableRows();
  $('#hide-list').hide();
  $('#show-list').show();
  if (isProductionEnvironment()) {
    mixpanel.track("Click hide shopping list");	
  }
  $('html,body').animate( { scrollTop: 0 } ,'slow');
  return false;
});

$('#show-list').click(function(){
  showTableRows();
  $('#hide-list').show();
  $('#show-list').hide();
  if (isProductionEnvironment()) {
    mixpanel.track("Click show shopping list button");	 
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

$('#view-spreadsheet').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Click view spreadsheet button");	
  }  
});

$('.click-purchase-link').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Clicked purchase link in product details");	
  }  
});

$('#print-list').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Click print page button");	
  }  
  window.print();
});

$('#subcribe').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Click subcribe button");	
  }  
  window.open("http://eepurl.com/dE9rgD", "_new"); // Open mailchimp form in new tab
});

$('.click-about').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Clicked about in header");	
  }  
  smoothScrollTo("about");
});

$('.click-table-link').click(function(){
  if (isProductionEnvironment()) {
    mixpanel.track("Clicked purchase link in table");	
  }  
});

// Native smooth scroll to element
function smoothScrollTo(elementId) {	
    var offset = 0;    
    offset = $("#" + elementId).offset().top;    
    $('html, body').animate({
        scrollTop: offset
    }, 550);	
}

function isProductionEnvironment() {
  if (location.hostname == "pepperslist.co") {
    return true;	
  }
  return false;
}

$(window).scroll(function(){
  var topofDiv = $("#apps").offset().top;
  var height = $("#apps").outerHeight();
  
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
//  $('.lazy').lazy(); // lazy load images
	
  if (isProductionEnvironment()) {
    mixpanel.track("Page load");	
  }

  $('#shopping-list').DataTable( {
	  "order": [ [4, "asc"], [2, "asc"], [0, "asc"]],
	  paging: false,
      "type": "num"
  });
  $("#shopping-list_length").hide();
  $("#shopping-list_info").hide();      
  $("#shopping-list_paginate").hide(); 
  $("#shopping-list_filter").hide();   

  changeShowListText(); // Add # items to button
  // hideTableRows(); // commenting out for experiment
} );

