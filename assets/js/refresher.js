document.addEventListener('DOMContentLoaded', function() {
    const caduceus = document.getElementById('caduceus');
    
    caduceus.addEventListener('mouseover', function() {
      location.reload();
    });
  });