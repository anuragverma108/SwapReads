function removeFromReadLater(bookId) {
    let readLaterBooks = JSON.parse(localStorage.getItem('readLaterBooks')) || [];
    readLaterBooks = readLaterBooks.filter(book => book.id !== bookId);
    localStorage.setItem('readLaterBooks', JSON.stringify(readLaterBooks));
    alert('The book has been removed from your Read Later list.');
    displayReadLaterBooks();
}

function displayReadLaterBooks() {
    const readLaterBooks = JSON.parse(localStorage.getItem('readLaterBooks')) || [];
    const readLaterListDiv = document.querySelector('.read-later-list');
    readLaterListDiv.innerHTML = ''; // Clear existing content

    readLaterBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'read-later-item';

        const img = document.createElement('img');
        img.src = book.imageSrc;
        img.alt = book.title;

        const title = document.createElement('p');
        title.textContent = book.title;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const readButton = document.createElement('button');
        readButton.textContent = 'Read Now';
        readButton.onclick = () => window.open(book.readLink, '_blank');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Wishlist';
        removeButton.onclick = () => removeFromReadLater(book.id);

        buttonContainer.appendChild(readButton);
        buttonContainer.appendChild(removeButton);

        bookDiv.appendChild(img);
        bookDiv.appendChild(title);
        bookDiv.appendChild(buttonContainer);

        readLaterListDiv.appendChild(bookDiv);

        const lineSeparator = document.createElement('hr');
        readLaterListDiv.appendChild(lineSeparator);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.read-later-list')) {
        displayReadLaterBooks();
    }
});


//Dark Mode
//Custom Cursor

const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e"
  ];

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

  });

  function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();

  document.addEventListener('DOMContentLoaded', function () {
  var switchCheckbox = document.querySelector('.switch-checkbox');
  var body = document.body;
  var navbar = document.querySelector('.navbar');

  switchCheckbox.addEventListener('change', function () {
    if (switchCheckbox.checked) {
      body.classList.add('dark-mode');
      navbar.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      navbar.classList.remove('dark-mode');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById('back-to-top-container');

    function checkButtonVisibility() {
        if (window.innerWidth > 100 && window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkButtonVisibility);
    window.addEventListener('resize', checkButtonVisibility);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
    checkButtonVisibility();
});
