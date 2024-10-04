document.addEventListener('DOMContentLoaded', function() {
    // Function to adjust submenu positioning
    function adjustSubmenuPosition(item) {
      const submenu = item.querySelector('.submenu');
      if (submenu) {
        const submenuRect = submenu.getBoundingClientRect();
  
        // Check if the submenu overflows the window's right edge
        if (submenuRect.right > window.innerWidth) {
          submenu.style.left = 'auto';
          submenu.style.right = '0'; // Align submenu to the right if it overflows
        } else {
          submenu.style.left = '0'; // Reset to default if there is no overflow
          submenu.style.right = 'auto';
        }
      }
    }
  
    // Get all the parent menu items that have submenus
    const menuItems = document.querySelectorAll('nav ul li');
  
    menuItems.forEach(function(item) {
      // Hover event for menu items
      item.addEventListener('mouseenter', function() {
        adjustSubmenuPosition(item);
      });
    });
  
    // Adjust submenus on window resize to ensure consistent behavior
    window.addEventListener('resize', function() {
      menuItems.forEach(function(item) {
        adjustSubmenuPosition(item);
      });
    });
  });
  