document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');

    // Add click event to each accordion button
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-bs-target');
            const collapseElement = document.querySelector(target);

            // Toggle collapse state
            const isCollapsed = collapseElement.classList.contains('show');
            if (isCollapsed) {
                collapseElement.classList.remove('show');
            } else {
                // Close other open accordions
                const openAccordions = document.querySelectorAll('.accordion-collapse.show');
                openAccordions.forEach(openAccordion => {
                    openAccordion.classList.remove('show');
                });

                // Open the clicked accordion
                collapseElement.classList.add('show');
            }
        });
    });
});
