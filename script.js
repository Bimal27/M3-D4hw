 let bookList = []


 function select(e) {
     e.target.closest('.card').classList.add("selected")
 }

 function filterBooks(query) {
    console.log(query)
    const filteredBooks = bookList.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    displayBooks(filteredBooks)
}

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
                                
                                <badge class="btn btn-primary mx-1">${book.price}</badge>

                                <button class="btn btn-success" onclick="select(event)">Cart</button>
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
        bookList = books
       
        displayBooks(books)
        console.log(books)
    }).catch(err =>{
        console.log(err)
    })
}
window.onload = () =>{
    fetchData()
}