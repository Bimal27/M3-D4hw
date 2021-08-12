 let bookList = [];
 let cart = []

 const shoppingList = (asin, e) => {
    const book = bookList.find((book) => book.asin.toString() === asin.toString())
    cart.push(book)

    console.log(cart)
    refreshShoppingCart()
    e.closest('.card').classList.add("selected")
 }

 function refreshShoppingCart() {
     let cartbody= document.querySelector('.modal-body')
    cartbody.innerHTML = ""
    cart.forEach(book => {
      cartbody.innerHTML += `<div>
        <ul>
          <li>
            ${book.title},
       
        € ${book.price} 
        </li>
        <div>
        <button class="btn btn-danger" id="delete-button" onclick= "deleteItem('${String(book.asin)}')">Delete</button>
        </div>
        </ul>
        </div>`

    })
}

function deleteItem(asin) {
    const index = cart.findIndex((book) => book.asin === asin)
    if (index !== -1) {
      cart.splice(index, 1)
    }
    refreshShoppingCart()
  }


 

 function filterBooks(query) {
    console.log(query)
    if(query.length > 3){
    const filteredBooks = bookList.filter((book) =>  book.title.toLowerCase().includes(query.toLowerCase()))
   
    displayBooks(filteredBooks)
    }
}

const skipMe = (e) => {
    e.target.closest('.col-md-4').remove()
}

const displayBooks = (books) =>{
    let row = document.querySelector('.row')
    row.innerHTML = ""
    books.forEach((book) =>{
        row.innerHTML +=`<div class="col-md-4 col-lg-3">
                            <div class="card" style="width: 275px;">
                                <img src="${book.img}" class="card-img-top" style="width: 271px; height:400px" alt="book image">
                                <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                
                                <badge class="btn btn-primary mx-1">${book.price}</badge>

                                <button class="btn btn-success" id='${book.asin}' onclick="shoppingList('${book.asin}',this)">Cart</button>
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
    //    console.log(bookList)
        displayBooks(books)
        // console.log(books)
    }).catch(err =>{
        console.log(err)
    })
}
window.onload = () =>{
    fetchData()
}