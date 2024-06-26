// reserve.js
document.getElementById('reserveButton').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    var currentCount = parseInt(counter.textContent);
    counter.textContent = currentCount + 1;
});
