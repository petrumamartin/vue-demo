jQuery(document).ready(function(){
  jQuery('#main-title')
    .html('<h1>Vue Demonstration</h1>');
  jQuery('h1, h3')
    .css({ 
      'color': 'lavender', 
      'margin': '0px auto', 
      'padding': '0px auto'
    });
  jQuery('#main-title')
    .append('<h3>Supported by jQuery</h3>');
  jQuery('#article')
    .css({ 'font-size': '0.5em' });

});