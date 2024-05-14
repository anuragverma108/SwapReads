function downloadPDF(event) {
    var pdfUrl = event.target.getAttribute('data-url');
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = pdfUrl.split('/').pop(); 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
document.querySelectorAll('.downloadButton').forEach(button => {
    button.addEventListener('click', downloadPDF);
});
