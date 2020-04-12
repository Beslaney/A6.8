let progress = 0;

$('#but1').on('click', function() {
  if (progress <= 100) {
    progress++;
    $("#pbar").width(progress + '%');
  }
});

$('#but2').on('click', function() {
  if (progress <= 100) {
    progress+=3;
    $("#pbar").width(progress + '%');
  }
});

$('#but3').on('click', function() {
  if (progress <= 100) {
    progress+=7;
    $("#pbar").width(progress + '%');
  }
});
