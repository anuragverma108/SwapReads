 // Function to get the count from localStorage or initialize it
 function getVisitorCount() {
    return localStorage.getItem('visitorCount') || 0;
  }
  
  // Function to increment and save the count
  function incrementVisitorCount() {
    if (!localStorage.getItem('visitedHomePage')) {
      let count = parseInt(getVisitorCount()) + 1;
      localStorage.setItem('visitorCount', count);
      localStorage.setItem('visitedHomePage', 'true');
      return count;
    }
    
    return getVisitorCount();
  }
  
  // Function to display the count
  function displayVisitorCount() {
    const counterElement = document.querySelector('.website-counter');
    const count = incrementVisitorCount();
    counterElement.textContent = count;
  }
  
  // Call the display function when the page loads
  document.addEventListener('DOMContentLoaded', displayVisitorCount);