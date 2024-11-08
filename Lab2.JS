function showImage(Pictures) {
   
    mainImage.src = `Pictures/moose.webp`;
   
    console.log(moose.webp)
    
    const buttons = document.querySelectorAll(".gallery-button");
   
    buttons.forEach(button => button.classList.remove("selected"));
   
    event.target.classList.add("");
}



