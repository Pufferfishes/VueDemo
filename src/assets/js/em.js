(function(win, doc) {
    var baseWidth = 640;
    var documentHTML = doc.documentElement;
    function setRootFont() {
        var docWidth = documentHTML.getBoundingClientRect().width;
        var scale = docWidth / baseWidth;
        $(function() {
        	if (docWidth > 390) {
        		$("body").css('fontSize','13px');
        	} else {
        		$("body").css('fontSize',scale * 23 + 'px');
        	}
        })
    }
    setRootFont();
    win.addEventListener('resize', setRootFont, false);
})(window, document);