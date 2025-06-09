// document.getElementById('main-title').innerHTML = "222"

const title = document.getElementById('main-title');
console.log(title);

const anotherTitle = document.getElementById('another-title');
console.log(anotherTitle);

const button = document.getElementById('btn');
console.log(button);

// title.textContent = "changed"
// title.style.color = "red"

title.addEventListener("click", () =>{
    title.textContent = "You clicked me!";
    title.style.color = "red";
});



// anotherTitle.addEventListener("mouseover", () => {
//     anotherTitle.textContent = "Hovering over me!";
//     anotherTitle.style.color = "purple";
// }); 


// anotherTitle.addEventListener("mouseout", () => {
//     anotherTitle.textContent = "Welcome to DOM.2!";
//     anotherTitle.style.color = "black";
// }); 


// anotherTitle.addEventListener("mouseover", () => {
//     anotherTitle.style.color = "purple";
// });

// anotherTitle.addEventListener("mouseout", () => {
//     anotherTitle.style.color = "black";
// });




button.addEventListener('click', () => {
    button.textContent = "You clicked me!"
    button.style.color = 'white';
    button.style.backgroundColor  = 'purple';
});


button.addEventListener('click', () =>{
    //Created the p element
    const newPara = document.createElement('p');
    // add text to the p element
    newPara.textContent = "This is the new para!";
    //Add color to the text
    newPara.style.color = "green";
    //add size
    newPara.style.fontSize = "20px";

    //append this element to the body.
    document.body.appendChild(newPara);

    newPara.addEventListener('click', () => {
        newPara.remove();
    });

});

button.addEventListener('click', () => {
    // Create a new list item
    const newItem = document.createElement("li");

    // Add text to the list item
    newItem.textContent = "New dynamic item!";

    // Style it for visibility
    newItem.style.color = "blue";
    newItem.style.fontSize = "18px";

    // Append the new item to an existing list (or create one if needed)
    document.getElementById("dynamic-list").appendChild(newItem);


    newItem.addEventListener('click', () => {
        newItem.remove();
    });
});