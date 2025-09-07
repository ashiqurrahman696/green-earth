const plantsContainer = document.getElementById("plants-container");

const loadAllCategories = async() => {
    const url = "https://openapi.programming-hero.com/api/categories";
    const res = await fetch(url);
    const data = await res.json();
    showAllCategories(data.categories);
}

const showAllCategories = (categories) => {
    const categoryList = document.getElementById("category-list");
    categories.forEach(category => {
        categoryList.innerHTML += `
            <li id="tree-${category.id}" onclick="loadPlantsByCategory('${category.id}')" class="px-3 py-2 cursor-pointer rounded duration-300 hover:bg-[#15803d] hover:text-white">${category.category_name}</li>
        `;
    });
}

const loadAllPlants = async() => {
    const url = "https://openapi.programming-hero.com/api/plants";
    const res = await fetch(url);
    const data = await res.json();
    showAllPlants(data.plants);
}

const showAllPlants = (plants) => {
    const allTreeBtn = document.getElementById("tree-all");
    allTreeBtn.classList.add("bg-[#15803d]", "text-white");
    plantsContainer.innerHTML = "";
    plants.forEach(plant => {
        plantsContainer.innerHTML += `
            <div class="card bg-base-100 w-full shadow-sm">
                <figure class="px-4 pt-4">
                    <img src="${plant.image}" alt="${plant.name}"
                        class="rounded-xl w-full h-50 object-cover" />
                </figure>
                <div class="card-body pb-4">
                    <h2 class="card-title">${plant.name}</h2>
                    <p>${plant.description}</p>
                    <div class="flex justify-between items-center">
                        <div class="rounded-full bg-[#dcfce7] text-[#15803d] py-1 px-3 font-semibold">${plant.category}</div>
                        <div class="font-semibold">৳${plant.price}</div>
                    </div>
                </div>
                <div class="pb-4 px-4">
                    <button class="btn bg-[#15803d] btn-block rounded-full text-white">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

loadAllCategories();
loadAllPlants();