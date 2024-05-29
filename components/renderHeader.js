const renderHeader = () => {
    const app = document.getElementById("app");
    const header = document.createElement("header");
    header.innerHTML = ` <nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="assets/logo.png" alt="Logo" width="150" />
        </a>
        <div
            class="navbar-nav d-flex align-self-start d-flex gap-3 pt-3"
        >
            <a class="nav-link" href="#about">О нас</a>
            <a class="nav-link" href="#catalog">Каталог Товаров</a>
            <a class="nav-link" href="#reviews">Отзывы</a>
        </div>
    </div>
</nav>
<div
    class="container mt-3 contact-info d-flex justify-content-between"
>
    <p class="adres">
        Адрес:
        <a
            target="_blank"
            href="https://vk.com/klub_allur?w=address-31740818_57555"
            >микрорайон Люлли, Ижевск</a
        >
    </p>
    <div class="contacts d-flex gap-4">
        <a href="#"><img src="assets/vk.png" alt="VK" /></a>
        <a href="#">
            <img src="assets/mail.png" alt="mail"
        /></a>
        <a href="tel:+77777777777"
            ><img src="assets/phone.png" alt="" />
            +7(777)777-77-77</a
        >
    </div>
</div>`;
    app.prepend(header);
};
