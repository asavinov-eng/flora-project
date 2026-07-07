
const API_URL='http://localhost:3000/api/bouquets';

const refs={
list:document.getElementById('bouquets-list'),
loadMore:document.getElementById('load-more'),
modal:document.getElementById('modal'),
closeModal:document.getElementById('close-modal')
};

async function fetchBouquets(){
try{
const response=await fetch(API_URL);
const data=await response.json();

const markup=data.map(item=>`
<div class="card">
<img src="${item.photoURL}" alt="${item.title}" width="250">
<h3>${item.title}</h3>
<p>${item.description}</p>
<p>$${item.price}</p>
</div>
`).join('');

refs.list.innerHTML=markup;
}catch(error){
console.log(error);
}
}

fetchBouquets();

refs.closeModal.addEventListener('click',()=>{
refs.modal.classList.remove('is-open');
});
