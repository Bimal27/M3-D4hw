const displayBooks = (books) =>{
    let row = document.querySelector('.row')
    books.forEach((book) =>{
        row.innerHTML +=`<div class="col col-sm-12 col-md-4 col-lg-3">
                            <div class="card">
                                <img src="${book.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                
                                <a href="#" class="btn btn-primary">${book.price}</a>
                                </div>
                            </div>
                        </div>`
    })
}

const fetchData = () =>{
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(resp => resp.json())
    .then(books =>{
        displayBooks(books)
        console.log(books)
    }).catch(err =>{
        console.log(err)
    })
}
window.onload = () =>{
    fetchData()
}