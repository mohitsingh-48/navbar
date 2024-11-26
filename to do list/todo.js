let inputs = document.getElementById("inp");
let hehe = document.getElementsByClassName("text")[0];

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Text");
    } else {
        // Create a new list element
        let newele = document.createElement("ul");
        
        // Add the input value as text content
        newele.textContent = inputs.value;
        
        // Add a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px"; // Optional: Add spacing for better visuals
        
        // Attach an event listener to the delete button
        deleteBtn.addEventListener("click", function () {
            hehe.removeChild(newele);
        });
        
        // Append the delete button to the new element
        newele.appendChild(deleteBtn);

        // Append the new element to the container
        hehe.appendChild(newele);
        
        // Clear the input field
        inputs.value = "";
    }
}
