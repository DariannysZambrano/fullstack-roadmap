
const form = document.getElementById('articleFormInfo');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const imagen = document.getElementById('articleImage').value; 
    const titulo = document.getElementById('articleTitle').value;
    const descripcion = document.getElementById('articleDescription').value;
    const newform = document.createElement('article');
    newform.classList.add('Article');
    const img = document.createElement('img');
    img.classList.add('imagenesArticulos');
    img.setAttribute('src', imagen); 
    const title = document.createElement('h3');
    title.classList.add('tituloDeLosArticulos');
    title.innerText = titulo;
    const desc = document.createElement('p');

    desc.classList.add('ParrafoDeLosArticulos');
    desc.innerText = descripcion;
    newform.appendChild(img);
    newform.appendChild(title);
    
    newform.appendChild(desc);
    
    const containerArticlesNews = document.querySelector('.container-articles');
    
    if (containerArticlesNews) {
        

        containerArticlesNews.appendChild(newform);
        
    } else {
        
        console.error("Error");
        
    }
    
    form.reset();
});