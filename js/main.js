
const menuOpen=document.querySelector('.menu-open');
const menuClose=document.querySelector('.menu-close');
const mobileMenu=document.querySelector('.mobile-menu');

menuOpen.addEventListener('click',()=>{
mobileMenu.classList.add('is-open');
});

menuClose.addEventListener('click',()=>{
mobileMenu.classList.remove('is-open');
});

const backdrop=document.querySelector('.backdrop');
const openModalBtns=document.querySelectorAll('.open-modal-btn');
const closeModal=document.querySelector('.modal-close');

openModalBtns.forEach(btn=>{
btn.addEventListener('click',()=>{
backdrop.classList.add('is-open');
document.body.style.overflow='hidden';
});
});

function closeModalWindow(){
backdrop.classList.remove('is-open');
document.body.style.overflow='auto';
}

closeModal.addEventListener('click',closeModalWindow);

backdrop.addEventListener('click',e=>{
if(e.target===backdrop){
closeModalWindow();
}
});

const list=document.querySelector('.js-cards-list');
const loadMoreBtn=document.querySelector('.load-more-btn');
const message=document.querySelector('.message');
const searchInput=document.querySelector('#search-input');

let page=1;
const limit=2;
let query='';

async function fetchFlowers(){
try{
const response=await axios.get('http://localhost:3000/flowers',{
params:{
_page:page,
_limit:limit,
q:query
}
});

if(response.data.length===0){
message.textContent='No more flowers';
loadMoreBtn.style.display='none';
return;
}

renderFlowers(response.data);

if(response.data.length<limit){
loadMoreBtn.style.display='none';
}

}catch(error){
message.textContent='Server error';
console.log(error);
}
}

function renderFlowers(items){
const markup=items.map(item=>`
<li class="card">
<img src="${item.image}" alt="${item.name}">
<h3>${item.name}</h3>
<p>$${item.price}</p>
</li>
`).join('');

list.insertAdjacentHTML('beforeend',markup);
}

fetchFlowers();

loadMoreBtn.addEventListener('click',()=>{
page+=1;
fetchFlowers();
});

searchInput.addEventListener('input',e=>{
query=e.target.value.trim();
page=1;
list.innerHTML='';
loadMoreBtn.style.display='block';
message.textContent='';
fetchFlowers();
});
