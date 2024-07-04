
// const containerr = document.querySelector('.products')
// const url = 'https://fakestoreapi.com/products/category/jewelery'
// fetch(url)
// .then(res=>res.json())
// .then(data=>{
//     for (const product of data){

   
//    const html = `
//                 <div id="${product.id}" class="product">
//                     <p id="title">${product.title}</p>
//                     <img id="product-img" src="${product.image}" />
//                     <p id="price">${product.price}</p>
//                 </div>
//             `; 
//             containerr.insertAdjacentHTML('afterbegin',html)
//  }
// })
// .catch(error=> console.log(error,"Error"))
// const containerr = document.querySelector('.products')
// const url = 'https://fakestoreapi.com/products/category/jewelery'
// const fetchData = async (apiUrl) => {
//     const res = await fetch(apiUrl)
//     const data = await res.json();
//     try {
//         for (const product of data){

   
//             const html = `
//                          <div id="${product.id}" class="product">
//                              <p id="title">${product.title}</p>
//                              <img id="product-img" src="${product.image}" />
//                              <p id="price">${product.price}</p>
//                          </div>
//                      `; 
//                      containerr.insertAdjacentHTML('afterbegin',html)
//           }}
//     catch(error){
//         console.log(error,"Error")
//     }
// }

// fetchData(url);
const myForm = document.getElementById('form');
const postsContainer = document.getElementById('posts');

const addNewPost = (postObj) => {
    const html = `
        <article class="post" id="${postObj.id}">
            <h1>${postObj.title}</h1>
            <p>${postObj.body}</p>
            <img src='${postObj.image}' width='200px'/>
        </article>
    `

    postsContainer.insertAdjacentHTML('afterbegin', html);
}

const postFunction = async (body, apiUrl) => {
    try {
        const res = await fetch(apiUrl, body);
        const data = await res.json();
        
        addNewPost(data);
    } catch(err) {
        console.log(err);
    }
} 

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        method: "POST",
        body: JSON.stringify({
            title: myForm.elements.title.value,
            body: myForm.elements.body.value,
            userId: 1,
            image: 'https://th.bing.com/th/id/OIP.i0RTPRaXGurvbQHtGSwkLwHaE8?rs=1&pid=ImgDetMain'
        }),
        headers: {
            "Content-type": "application/json"
        }
    }

    postFunction(body, 'https://jsonplaceholder.typicode.com/posts')

});