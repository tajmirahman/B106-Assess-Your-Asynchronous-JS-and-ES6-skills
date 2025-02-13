// Load category start
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(err => console.log(err))
}

// Display Category
const displayCategory = (categories) => {

    const categoryContainer = document.getElementById('pet-category-container');
    categories.forEach((item) => {
        const button = document.createElement('div');
        button.innerHTML = `
        <button id="btn-'${item.category}'" onclick="showButton('${item.category}')" class="btn btn-category px-10 py-3 w-20">${item.category}</button>
        
        `;
        categoryContainer.append(button);
    });
}

// Remove active button
const removeActiveButton = () => {
    const removeActive = document.getElementsByClassName('btn-category');
    for (const btn of removeActive) {
        btn.classList.remove('active');
    }

}

// When click a button then show his on property
const showButton = (category) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(res => res.json())
        .then(data => {

            // Remove bUtton
            removeActiveButton();

            // active all button
            const activeButton = document.getElementById(`btn-'${category}'`);
            activeButton.classList.add('active');

            displayAnimal(data.data)
        })
        .catch(err => console.log(err))

}

// LoadDetails
const loadDetails = (petId) => {

    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => displayDetails(data.petData))
        .catch(err => console.log(err))


}

// DisplayDetails animals

const displayDetails = (petData) => {
    // console.log(petData);

    document.getElementById('my_modal_1').showModal();

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <div class="w-full">
     <img class="h-30 w-30" src="${petData.image}" />

     <h2 class="mt-2 mb-2 text-2xl font-bold" class="card-title">${petData.pet_name}</h2>
     
     <div class="flex gap-1">
        <a><i class="fa-solid fa-vector-square"></i> Breed:</a>
        <p>${petData.breed}</p>
    </div>
    <div class="flex gap-1">
        <a><i class="fa-regular fa-calendar"></i> Birth :</a>
        
        <p>${petData.date_of_birth}</p>

    </div>
    <div class="flex gap-1">
        <a><i class="fa-solid fa-mars-stroke-up"></i> Gender :</a>
        <p>${petData.gender}</p>
    </div>
    <div class="flex gap-1">
        <a><i class="fa-solid fa-dollar-sign"></i> Price :</a>
        <p>${petData.price}</p>
    </div>
        
    <div class="mt-2">
    <h1 class="text-xl font-bold"> Details Information</h1>
    <p>${petData.pet_details}</p>
    </div>

    </div>


    `;




}

//Load Data for display image in an another div
const showImage = (petId) => {
    // alert('hi');
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then(res => res.json())
        .then(data => anotherDivImage(data.petData))
        .catch(err => console.log(err))
}

// display image in an another div 
const anotherDivImage = (petData) => {
    // console.log(petData);
    const showImage = document.getElementById('show-image');
    const div = document.createElement('div');
    div.innerHTML = `
    <img class="h-28 w-28" src="${petData.image}" />
    `;
    showImage.append(div);
}



// Load All Animal data
const loadAllAnimalData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAnimal(data.pets))
        .catch(err => console.log(err))
}

// Display all animals data

const displayAnimal = (pets) => {
    const animalContainer = document.getElementById('all-container');

    animalContainer.innerHTML = '';

    if (pets.length === 0) {
        animalContainer.classList.remove('grid');
        animalContainer.innerHTML = `
        <div class="flex justify-center items-center">
        <img src="./images/error.webp" />
        <h2 class="text-red-400 font-bold">No Information Available</h2>
        </div>
        `;
        const hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.classList.add('hidden');
    } else {
        const hiddenDiv = document.getElementById('hidden-div');
        hiddenDiv.classList.remove('hidden');
        animalContainer.classList.add('grid');

    }





    pets.forEach((pet) => {
        // console.log(pet);
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card card-compact border-2 ">
            <figure class="h-[200px] p-3 ">
                <img class="h-full w-full object-cover rounded-lg" src="${pet.image}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${pet.pet_name}</h2>

                <div class="flex gap-1">
                <a><i class="fa-solid fa-vector-square"></i> Breed:</a>
                <p>${pet.breed ? pet.breed : 'No'}</p>
                </div>
                <div class="flex gap-1">
                <a><i class="fa-regular fa-calendar"></i> Birth :</a>
                <p>${pet.date_of_birth ? pet.date_of_birth : 'No'}</p>

                </div>
                <div class="flex gap-1">
                <a><i class="fa-solid fa-mars-stroke-up"></i> Gender :</a>
                <p>${pet.gender ? pet.gender : 'Finding'}</p>
                </div>
                <div class="flex gap-1">
                <a><i class="fa-solid fa-dollar-sign"></i> Price :</a>
               
                <p>${pet.price ? pet.price : 'No Price Set'}</p>

                </div>


                <div class="card-actions flex justify-between">

                <button onclick="showImage(${pet.petId})" class="border-2 p-2 "><i class="fa-solid fa-thumbs-up"></i></button>

                <button onClick="countData(${pet.petId})" class="border-2 px-1 py-2 text-[#0E7A81]">Adopt</button>

                <button onclick="loadDetails(${pet.petId})" class="border-2 px-1 py-2 text-[#0E7A81]">Details</button>
                </div>
            </div>
        </div>
        `;
        animalContainer.append(card);


    });
}


// Count down data

const countData=()=>{
    alert('hi');
}





loadCategory();
loadAllAnimalData()