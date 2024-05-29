const renderReviews = () => {
    const main = document.getElementById("main-content");
    main.innerHTML = `
    <div class="d-flex align-items-center flex-column gap-5 py-4">
                    <div class="review">
                        <div class="fs-2">
                            <img src="assets/person3.png" class="me-5" />Отличные значки! 
                        </div>
                        <p class="pt-3 fs-3">Дочке очень нравятся, особенно с лошадкой :)</p>
                    </div>
                    <div class="review">
                        <div class="fs-2">
                            <img src="assets/person2.png" class="me-5" />Милые стикеры 
                        </div>
                        <p class="pt-3 fs-3">Прекрасный клуб! Купила наклейки на память.</p>
                    </div>
                    <div class="review">
                        <div class="fs-2">
                            <img src="assets/person1.png" class="me-5" />Качественный шопер 
                        </div>
                        <p class="pt-3 fs-3">Приехали с семьёй в "Аллюр" по совету друзей, детям очень понравилось. Старшая дочка даже купила себе шоппер! Сделан качественно, ткань приятная, плотная)</p>
                    </div>
                </div>
    `;
};
