const renderMain = () => {
    const main = document.getElementById("main-content");
    main.innerHTML = `
    <div class="hero">
    <button class="btn primary-btn">Узнать подробнее</button>
</div>

<div class="container my-5">
    <div class="merch-title text-center">
        Информация о мерче
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="merch-item">
                <div>
                    <img
                        src="assets/shoper.png"
                        class="img-fluid"
                        alt="Шоппер"
                    />
                    <h3>Шоппер</h3>
                </div>
                <p>700 Руб</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="merch-item">
                <div>
                    <img
                        src="assets/stickers.png"
                        class="img-fluid"
                        alt="Стикеры"
                    />
                    <h3>Стикеры</h3>
                </div>
                <p>150 Руб</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="merch-item">
                <div>
                    <img
                        src="assets/pin.png"
                        class="img-fluid"
                        alt="Значок"
                    />
                    <h3>Значок</h3>
                </div>
                <p>150 Руб</p>
            </div>
        </div>
    </div>
</div>`;
};
