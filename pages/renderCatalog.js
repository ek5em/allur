const renderCatalog = () => {
    const main = document.getElementById("main-content");
    main.innerHTML = `
    <div class="container d-flex flex-column gap-4 py-4">
                    <div class="shop-item">
                        <div class="d-flex gap-5">
                            <div>
                                <img
                                    src="assets/shoper2.png"
                                    class="img-fluid"
                                />
                            </div>
                            <div>
                                <h2>Сумка-шопер</h2>
                                <p class="info">
                                    Материал: 100% хлопок.<br />
                                    Размер: 40 х 36 х 11 см.<br />
                                    Ручки: 60 х 2,5 см.<br />
                                    Размер кармана: 17,5 х 13 см.<br />
                                    Принт: печать
                                </p>
                            </div>
                        </div>
                        <div class="cost"><p>700 руб</p></div>
                    </div>
                    <div class="shop-item">
                        <div class="d-flex gap-5">
                            <div>
                                <img
                                    src="assets/stikers2.png"
                                    class="img-fluid"
                                />
                            </div>
                            <div>
                                <h2>Стикерпак</h2>
                                <p class="info">
                                    Формат: А5<br />
                                    Материал: винил
                                </p>
                            </div>
                        </div>
                        <div class="cost"><p>150 руб</p></div>
                    </div>
                    <div class="shop-item">
                        <div class="d-flex gap-5">
                            <div>
                                <img src="assets/pins2.png" class="img-fluid" />
                            </div>
                            <div>
                                <h2>Значок</h2>
                                <p class="info">
                                    Крепление: безопасная булавка.<br />
                                    Диаметр: 3,2 см
                                </p>
                            </div>
                        </div>
                        <div class="cost"><p>150 руб</p></div>
                    </div>
                </div>
    `;
};
