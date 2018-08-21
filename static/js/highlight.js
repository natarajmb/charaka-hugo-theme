// adding this to highlight inline code block
$(document).ready(function() {
    $('p code').each(function(i, inline) {
        hljs.highlightBlock(inline);
    });
  });

