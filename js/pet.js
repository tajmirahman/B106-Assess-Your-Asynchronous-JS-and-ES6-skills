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
        <button class="btn px-10 py-3">${item.category}</button>
        `;
        categoryContainer.append(button);
    });
}

// Load All Animal data
const loadAllAnimalData = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAnimal(data.pets))
        .catch(err => console.log(err))
}

// Demo object
// {
//     "petId": 15,
//     "breed": "Holland Lop",
//     "category": "Rabbit",
//     "date_of_birth": "2023-07-15",
//     "price": 200,
//     "image": "https://i.ibb.co.com/RQ6smFK/pet-15.jpg",
//     "gender": "Male",
//     "pet_details": "This charming male Holland Lop rabbit, born on July 15, 2023, is playful and enjoys hopping around. Priced at $200, he makes a wonderful pet for children. He is not vaccinated.",
//     "vaccinated_status": "Not",
//     "pet_name": "Binky"
//   }

// Display all animal 

const displayAnimal = (pets) => {
    const animalContainer = document.getElementById('all-container');
    pets.forEach((pet) => {
        console.log(pet);
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
                <p>${pet.breed}</p>
                </div>
                <div class="flex gap-1">
                <a><i class="fa-regular fa-calendar"></i> Birth :</a>
                <p>${pet.date_of_birth}</p>
                </div>
                <div class="flex gap-1">
                <a><i class="fa-solid fa-mars-stroke-up"></i> Gender :</a>
                <p>${pet.gender}</p>
                </div>
                <div class="flex gap-1">
                <a><i class="fa-solid fa-dollar-sign"></i> Price :</a>
                <p>${pet.price}</p>
                </div>


                <div class="card-actions flex justify-between">
                <button class="border-2 p-2 "><i class="fa-solid fa-thumbs-up"></i></button>
                <button class="border-2 px-1 py-2 text-[#0E7A81]">Adopt</button>
                <button class="border-2 px-1 py-2 text-[#0E7A81]">Details</button>
                </div>
            </div>
        </div>
        `;
        animalContainer.append(card);

    });
}




loadCategory();
loadAllAnimalData()