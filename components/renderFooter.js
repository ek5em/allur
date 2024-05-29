const renderFooter = () => {
    const app = document.getElementById("app");
    const header = document.createElement("footer");
    header.innerHTML = `
    <div class="container w-50">
                    <h2>Конный клуб "Аллюр"</h2>
                    <p>
                        Ижевск, мкр. Люлли, Городская, 28/1 (2ГИС Конный клуб
                        "Аллюр")
                    </p>
                    <p>
                        Номер Телефона: +79510524212, +79510227218, +79524016076
                    </p>
                    <p>Открывается в 10:00</p>
                </div>
                <div class="w-50 navbar-nav">
                    <a class="nav-link" href="#">Главная</a>
                    <a class="nav-link" href="#about">О нас</a>
                    <a class="nav-link" href="#catalog">Каталог Товаров</a>
                    <a class="nav-link" href="#reviews">Отзывы</a>
                </div>`;
    app.append(header);
};
