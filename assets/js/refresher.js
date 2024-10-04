document.addEventListener('DOMContentLoaded', function() {
    const caduceus = document.getElementById('caduceus');
    
    caduceus.addEventListener('click', function() {
      location.reload();
    });
  });