document.getElementById('addImageButton').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput');
    const imageDescription = document.getElementById('imageDescription').value;
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const gallery = document.getElementById('gallery');

            // Create a new gallery item
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            // Create image element
            const img = document.createElement('img');
            img.src = e.target.result;

            // Create description element
            const desc = document.createElement('p');
            desc.textContent = imageDescription;

            // Append image and description to gallery item
            galleryItem.appendChild(img);
            galleryItem.appendChild(desc);

            // Append gallery item to gallery
            gallery.appendChild(galleryItem);
        }
        reader.readAsDataURL(imageInput.files[0]);

        // Reset input fields
        imageInput.value = '';
        document.getElementById('imageDescription').value = '';
    } else {
        alert('Please select an image to upload.');
    }
});
