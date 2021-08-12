

const fetchData = () =>{
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(resp => resp.json())
    .then(books =>{
        console.log(books)
    }).catch(err =>{
        console.log(err)
    })
}
window.onload = () =>{
    fetchData()
}