const listItems = document.querySelectorAll('.activity-feed li');

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const detailElement = item.querySelector('.detail');

        // If details are already open, close them
        if (detailElement) {
            detailElement.remove();
        } else {
            // Close any open details
            const openDetails = document.querySelectorAll('.detail');
            openDetails.forEach((detail) => {
                detail.remove();
            });

            // Open the clicked item's details
            const detailHtml = getDetailHtml(index);
            const detailContainer = document.createElement('div');
            detailContainer.className = 'detail';
            detailContainer.innerHTML = detailHtml;
            item.appendChild(detailContainer);
        }
    });
});
function getDetailHtml(index) {
    let detailHtml = '';
    switch (index) {
        case 0:
            detailHtml = `
                <h3>Order Details</h3>
                <p>Order ID: #12345</p>
                <p>Date: 2024-11-04</p>
                <p>Time: 14:30</p>
                <p>Swap with: <strong>Bikash</strong></p>
                <p>Book: <strong>The Great Gatsby</strong></p>
            `;
            break;
        case 1:
            detailHtml = `
                <h3>Order Details</h3>
                <p>Order ID: #67890</p>
                <p>Date: 2024-11-04</p>
                <p>Time: 12:00</p>
                <p>Shipped to: <strong>Rajiv</strong></p>
                <p>Book: <strong>Pride and Prejudice</strong></p>
            `;
            break;
        case 2:
            detailHtml = `
                <h3>Order Details</h3>
                <p>Order ID: #34567</p>
                <p>Date: 2024-11-03</p>
                <p>Time: 16:00</p>
                <p>Swap with: <strong>Amit</strong></p>
                <p>Book: <strong>To Kill a Mockingbird</strong></p>
            `;
            break;
        case 3:
            detailHtml = `
                <h3>Message Details</h3>
                <p>Message ID: #11111</p>
                <p>Date: 2024-11-04</p>
                <p>Time: 14:00</p>
                <p>From: <strong>Rohan</strong></p>
                <p>Message: "Hi, interested in swapping <strong>The Catcher in the Rye</strong>?"</p>
            `;
            break;
        case 4:
            detailHtml = `
                <h3>Message Details</h3>
                <p>Message ID: #22222</p>
                <p>Date: 2024-11-04</p>
                <p>Time: 12:30</p>
                <p>From: <strong>Rishav</strong></p>
                <p>Message: "Hi, want to swap <strong>The Hunger Games</strong> for <strong>The Fault in Our Stars</strong>?"</p>
            `;
            break;
        case 5:
            detailHtml = `
                <h3>eBook Details</h3>
                <p>eBook ID: #33333</p>
                <p>Date: 2024-11-02</p>
                <p>Time: 18:00</p>
                <p>Book: <strong>The Handmaid's Tale</strong></p>
            `;
            break;
        case 6:
            detailHtml = `
                <h3>eBook Details</h3>
                <p>eBook ID: #44444</p>
                <p>Date: 2024-11-01</p>
                <p>Time: 20:00</p>
                <p>Book: <strong>The Nightingale</strong></p>
            `;
            break;
        case 7:
            detailHtml = `
                <h3>Book Swap Details</h3>
                <p>Swap ID: #55555</p>
                <p>Date: 2024-10-28</p>
                <p>Time: 10:00</p>
                <p>Swap with: <strong>Ritu</strong></p>
                <p>Book: <strong>The Power</strong></p>
            `;
            break;
      
        case 8:
            detailHtml = `
                <h3>Book Swap Details</h3>
                <p>Swap ID: #66666</p>
                <p>Date: 2024-10-21</p>
                <p>Time: 14:00</p>
                <p>Swap with: <strong>Souvik</strong></p>
                <p>Book: <strong>The Girl with the Dragon Tattoo</strong></p>
            `;
            break;
        default:
            detailHtml = '';
    }
    return detailHtml;
}


