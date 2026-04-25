function addPhoto() {
    const fileInput = document.getElementById("imageUpload");
    const textInput = document.getElementById("imageText");
    const gallery = document.getElementById("gallery");

    const file = fileInput.files[0];
    const text = textInput.value;

    if (!file) {
        alert("Please select an image!");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const div = document.createElement("div");
        div.className = "photo-card";

        div.innerHTML = `
            <img src="${e.target.result}">
            <p>${text}</p>
        `;

        gallery.appendChild(div);
    };

    reader.readAsDataURL(file);

    // clear inputs
    fileInput.value = "";
    textInput.value = "";
}