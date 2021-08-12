
const skipMe = (e) => {
    e.target.closest('.col-md-4').remove()
}

const displayBooks = (books) =>{
    let row = document.querySelector('.row')
    books.forEach((book) =>{
        row.innerHTML +=`<div class="col-md-4">
                            <div class="card">
                                <img src="${book.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                
                                <a href="#" class="btn btn-primary mx-1">${book.price}</a>

                                <a href="#" class="btn btn-success">Cart</a>
                                <button class="btn btn-warning mx-1" onclick="skipMe(event)">Skip</button>
                               
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