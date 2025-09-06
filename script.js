const loadAllCategories = async() => {
    const url = "https://openapi.programming-hero.com/api/categories";
    const res = await fetch(url);
    const data = await res.json();
    showAllCategories(data.categories);
}

const showAllCategories = (categories) => {
    console.log(categories);
}

loadAllCategories();