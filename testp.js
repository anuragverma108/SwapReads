// Get current timestamp
const getCurrentTimestamp = () => {
    return new Date().getTime();
  };
  
  // Store last active timestamp in LocalStorage
  const storeLastActive = () => {
    const lastActive = getCurrentTimestamp();
    localStorage.setItem('lastActive', lastActive);
  };
  
  // Get last active timestamp from LocalStorage
  const getLastActive = () => {
    return localStorage.getItem('lastActive');
  };
  
  // Update last active timestamp on page load and interaction
  document.addEventListener('DOMContentLoaded', storeLastActive);
  document.addEventListener('click', storeLastActive);
  document.addEventListener('scroll', storeLastActive);
  document.addEventListener('keydown', storeLastActive);
  
  // Example usage:
  const displayLastActive = () => {
    const lastActive = getLastActive();
    const formattedTime = new Date(parseInt(lastActive)).toLocaleString();
    document.getElementById('last-active').innerHTML = `Last active: ${formattedTime}`;
  };
  
  displayLastActive();
  

  