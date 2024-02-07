document.addEventListener('DOMContentLoaded', function() {
    // Get references to the tabs and product sections
    const menTab = document.getElementById('menTab');
    const womenTab = document.getElementById('womenTab');
    const kidsTab = document.getElementById('kidsTab');

    const menProducts = document.querySelector('.menProducts');
    const womenProducts = document.querySelector('.womenProducts');
    const kidsProducts = document.querySelector('.kidsProducts');

    // Function to handle tab clicks
    function handleTabClick(event) {
        // Hide all product sections
        menProducts.classList.remove('active');
        womenProducts.classList.remove('active');
        kidsProducts.classList.remove('active');

        // Determine which tab was clicked and show the respective product section
        if (event.target === menTab) {
            menProducts.classList.add('active');
        } else if (event.target === womenTab) {
            womenProducts.classList.add('active');
        } else if (event.target === kidsTab) {
            kidsProducts.classList.add('active');
        }
    }

    // Add click event listeners to the tabs
    menTab.addEventListener('click', handleTabClick);
    womenTab.addEventListener('click', handleTabClick);
    kidsTab.addEventListener('click', handleTabClick);

    // Show default tab
    menTab.click();
});
