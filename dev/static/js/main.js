$(document).ready(function() {
  
  svg4everybody();

  $('.alert__close').click(function() {
    $(this).closest('.alert').toggleClass('alert_show');
  });
    
});
