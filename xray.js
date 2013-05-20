$('body *')
.filter(function() {
    return $(this).css('display') === 'none';
})
.remove();

var divies = $('body *');

var doc_frag = document.createDocumentFragment();

divies.each(function() {

    var offset = $(this).offset();
    var px_top = offset.top;
    var px_left = offset.left;
    var px_width = $(this).outerWidth();
    var px_height = $(this).outerHeight();
    var depth = $(this).parents().length;
    var $e = $('<div></div>')
    .css({
        position: 'absolute',
        top: px_top,
        left: px_left,
        width: px_width,
        height: px_height,
        background: 'blue',
        opacity: .15/Math.log(depth),
        display: 'none'
    })
    .addClass('feature-finder-overlay');
    doc_frag.appendChild($e[0]);
});

$('body').empty();

$('body').css('background', 'none');

$('body').append(doc_frag);

$('.feature-finder-overlay').each( function(i) {
    var elem = this;
    setTimeout(function() {
        $(elem).show();
    }, (10000/divies.length) * i);
    setTimeout(function() {
    }, (10000/divies.length) * (i+1));

});
