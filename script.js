$(document).ready(function() {
    $('#but1').on('click', function() {
        $('#pbar1').attr('style', 'width: 1%');
        $('#pbar1').attr('aria-volume', '1');
      });
      $('#but2').on('click', function() {
        $('#pbar1').attr('style', 'width: 3%');
        $('#pbar1').attr('aria-volume', '3');
      });
      $('#but3').on('click', function() {
        $('#pbar1').attr('style', 'width: 7%');
        $('#pbar1').attr('aria-volume', '7');
      });
 });
