jQuery(document).ready(function(){

	var h = '<div id="dialog" title="This browser is incompatible">' +
    '<p>Sorry for the inconvenience, but IRIS is incompatible with your current browser.</p>' +
    '<p>A list of compatible browsers can be downloaded below:</p>' +
    '<ul>' +
        '<li><img id="firefox" src="https://raw.github.com/addteq-himanshu/nein-ie/master/firefox.jpeg"/>' +
             '<span class="dialog-center">' +
             '<a  href="http://www.mozilla.org/en-US/firefox/new/">Firefox</a>' +
             '</span>' +
        '</li>' +
        '<li><img id="chrome" src="https://raw.github.com/addteq-himanshu/nein-ie/master/chrome.jpg" />' +
            '<span class="dialog-center">' +
            '<a href="https://www.google.com/chrome">Chrome</a>' +
            '</span>' +
        '</li>' +
        '<li><img id="safari" src="https://raw.github.com/addteq-himanshu/nein-ie/master/safari.png" />' +
            '<span class="dialog-center">' +
            '<a href="http://www.apple.com/safari/download/">Safari</a>' +
            '</span>' +
        '</li>' +
    '</ul>' +
'</div>';
	
	jQuery('body').append(h);
	
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
