$(document).ready(function() {
  $(document).delegate('div.textAndCode pre', 'mouseenter', function() {
    var $pre = $(this);
    var $text = $pre.prev();
    if ($pre.data('expanded')) { return; }
    $pre.data('expanded', true);
    $text.data({height: $text.height(), width: $text.width()}).css({height: $text.height(), width: $text.width(), overflow: 'hidden'}).animate({width:150}, 250)
    $pre.animate({marginLeft: 175}, 250);
  }).delegate('div.textAndCode .text', 'mouseenter', expandText)
  .keydown(function(e) {
    if (e.keyCode == 27) { 
      $('div.textAndCode .text').each(expandText);
    }
  });
  
  function expandText() { 
    var $text = $(this);
    var $pre = $text.next();
    if (!$pre.data('expanded')) { return; }
    $pre.data('expanded', false);
    $text.css({overflow: 'visible'}).animate({height: $text.data('height'), width: $text.data('width'), }, 250);
    $pre.animate({marginLeft: 675}, 250);
  }
});