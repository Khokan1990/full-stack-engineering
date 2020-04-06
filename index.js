$(function() {
    $( "#tabs-main" ).tabs({
       heightStyle:"fill",
       collapsible:true
    });
    $( "#accordion-1,#accordion-2,#accordion-3" ).accordion({
        heightStyle: "content"
    });
 });