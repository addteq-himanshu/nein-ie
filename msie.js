jQuery(document).ready(function(){

	var h = '' +
	//var h = '<style>.iris {margin-left:10px;}</style>' +
  <div id="dialog" title="This browser is incompatible">' +
    '<p class="iris">Sorry for the inconvenience, but www.addteq.com is incompatible with your current browser.</p>' +
    '<p class="iris">A list of compatible browsers can be downloaded below:</p>' +
    '<ul class="iris">' +
        '<li style="list-style-type:none"><img id="firefox" src="https://raw.github.com/addteq-himanshu/nein-ie/master/firefox.jpeg" height="50px" width="50px"/>' +
             '<span class="dialog-center" style="vertical-align:20px">' +
             '<a  href="http://www.mozilla.org/en-US/firefox/new/" style="text-decoration: none">Firefox</a>' +
             '</span>' +
        '</li>' +
        '<li style="list-style-type:none"><img id="chrome" src="https://raw.github.com/addteq-himanshu/nein-ie/master/chrome.png"  height="50px" width="50px" />' +
            '<span class="dialog-center">' +
            '<a href="https://www.google.com/chrome" style="text-decoration: none">Chrome</a>' +
            '</span>' +
        '</li>' +
        '<li style="list-style-type:none"><img id="safari" src="https://raw.github.com/addteq-himanshu/nein-ie/master/safari.png"  height="50px" width="50px" />' +
            '<span class="dialog-center">' +
            '<a href="http://www.apple.com/safari/download/" style="text-decoration: none">Safari</a>' +
            '</span>' +
        '</li style="list-style-type:none">' +
    '</ul>' +
'</div>';
	
	jQuery('body').append(h);

  jQuery('.iris').css('margin-left','10px');
	
	jQuery('img#firefox').click(function(){
		window.location.href="http://www.mozilla.org/en-US/firefox/new/";
	});
	
	jQuery('img#chrome').click(function(){
		window.location.href="https://www.google.com/chrome";
	});
	
	jQuery('img#safari').click(function(){
		window.location.href="http://www.apple.com/safari/download/";
	});
	

	  jQuery('#dialog').dialog({
        	autoOpen : false, 
            width: 500, 
            resizable: false,
            modal: true,
            closeOnEscape: false,
            open: function(event, ui) { jQuery(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide(); jQuery('.ui-widget-overlay').css('opacity',1); }
        });
        
        jQuery('#dialog').dialog('open');
        
    
});
