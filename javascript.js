
$('#primary-menu').on(
    'show.zf.dropdownmenu', function() {
      var dropdown = $(this).find('.is-dropdown-submenu');
      dropdown.css('display', 'none');
      dropdown.fadeIn('slow');
  });
  $('#primary-menu').on(
    'hide.zf.dropdownmenu', function() {
      var dropdown = $(this).find('.is-dropdown-submenu');
      dropdown.css('display', 'inherit');
      dropdown.fadeOut('slow');
  });

  $(document).ready(function() { 
    $("hotel").click(); 

}); 
  
  var weatherMap = new XMLHttpRequest();

XPathResult.onreadystatechange = function() {};
xhr.open('GET', 'api.openweathermap.org/data/2.5/weather?id=city.list.json.gz &appid={2b132f78ee841ee28cc86ff001b0476f}');