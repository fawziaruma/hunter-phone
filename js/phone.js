const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = phones =>{
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container')
    // clear phone container
    phoneContainer.textContent = '';

    // display show all btn if there are more than 12 phone
    const showAllContainer = Document.getElementById('show-all-container')
    
    if(phones.lenght >12){
        showAllContainer.classList.remove('hidden')
    }
    else{showAllContainer.classList.add('hidden')}

    // display fast 12 phone
    phones = phones.slice(0,12)


    phones.forEach(phone =>{
        console.log(phone);
        // 1 creat div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`
        // 3 set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `
        // 4 append child
        phoneContainer.appendChild(phoneCard)
    })
}
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}
const handleSearch2 = () =>{
    const searchField = document.getElementById('search-field2')
    const searchText = searchField.value;
    loadPhone(searchText)
}


// loadPhone()