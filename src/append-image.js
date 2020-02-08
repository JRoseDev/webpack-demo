const appendImage = (document, image) => {
    const element = document.createElement("img");
    element.src = image;
    element.height = 300;
    
    document.getElementsByTagName("body")[0].appendChild(element);
};

export { appendImage };
