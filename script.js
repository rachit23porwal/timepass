const noButton = document.querySelector('.no');

        // Function to move the button randomly
        function moveButton() {
            // Get the width and height of the viewport
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Generate random positions within the viewport
            const newLeft = Math.random() * (viewportWidth - 100); // subtract button width
            const newTop = Math.random() * (viewportHeight - 125); // subtract button height

            // Apply the new position to the button
            noButton.style.position = 'absolute';
            noButton.style.left = `${newLeft}px`;
            noButton.style.top = `${newTop}px`;
        }

        // Attach event listeners for hover and click
        noButton.addEventListener('mouseover', moveButton);
        noButton.addEventListener('click', moveButton);