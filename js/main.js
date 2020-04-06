"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var waterContainer = document.querySelector('.card.card_size_s:last-child');

    waterContainer.innerHTML = 
                '<div class="card-heading">' +
                    '<div class="card-icon-wrap">' +
                        '<img class="card-icon" src="img/kettle.svg">' +
                    '</div>' +
                    '<h3 class="card-title">Вода вскипела</h3>' +
               ' </div>' +
                '<div class="card-specs">' +
                    '<p class="card-source">Чайник</p>' +
                    '<p class="card-time card-time_block">16:20, Сегодня</p>' +
                '</div>'

});

var storage, initCriticalCam = function () {
    var u, m, p, v, h, y = new Array, g = document.querySelector(".critical-cam"), f = 0, S = 100, q = 100;
    g.style.backgroundPosition = "0px 0px", g.style.backgroundSize = "100%", g.style.filter = "brightness(100%)";
    var x = function (e, t) {
        return t < e ? e - t : t - e
    }, t = function (e) {
        for (var t = 0; t < y.length; t++) if (e.pointerId == y[t].pointerId) {
            y[t] = e;
            break
        }
        if (1 == y.length && (g.style.backgroundPosition = p + e.clientX - m + "px " + (v + e.clientY - u) + "px"), 2 == y.length) {
            var n = (r = y[0].clientX, i = y[0].clientY, c = y[1].clientX, a = y[1].clientY, l = x(r, c), s = x(i, a), d = Math.sqrt(Math.pow(l, 2) + Math.pow(s, 2)), d);
            f < n ? q += 1 : q -= 1, g.style.backgroundSize = q + "%", f = n, zoomText.textContent = q;
            var o = Math.atan2(y[1].clientY - y[0].clientY, y[1].clientX - y[0].clientX) * (180 / Math.PI);
            h < o ? S += 2 : S -= 2, g.style.filter = "brightness(" + S + "%)", h = o, brightText.textContent = S
        }
        var r, i, c, a, l, s, d
    }, e = function (e) {
        g.removeEventListener("pointermove", t), n(e)
    }, n = function (e) {
        for (var t = 0; t < y.length; t++) if (y[t].pointerId == e.pointerId) {
            y.splice(t, 1);
            break
        }
    };
    g.addEventListener("pointerdown", function (e) {
        y.push(e), m = e.clientX, u = e.clientY, p = parseInt(g.style.backgroundPositionX, 10), v = parseInt(g.style.backgroundPositionY, 10), 2 == y.length && (h = Math.atan2(y[1].clientY - y[0].clientY, y[1].clientX - y[0].clientX) * (180 / Math.PI)), g.addEventListener("pointermove", t)
    }), document.addEventListener("pointerup", e), g.addEventListener("onpointerup", e)
};

$(document).ready(function(){

    var carousel = $("#carousel");

    carousel.owlCarousel();
});

function status(e) {
    return 200 <= e.status && e.status < 300 ? Promise.resolve(e) : Promise.reject(new Error(e.statusText))
}

function json(e) {
    return e.json()
}

function buildHTML(e) {
    e.events.forEach(function (e) {
        var t, n, o, r, i, c, a, l, s, d, u, m, p, v, h, y, g, f, S, q, x, L, C;
        v = document.querySelector(".content"), n = (t = document.querySelector("template").cloneNode(!0).content).querySelector(".card"), l = t.querySelector(".card-specs"), i = t.querySelector(".card-heading"), o = t.querySelector(".card-title"), r = t.querySelector(".card-icon"), c = t.querySelector(".card-source"), a = t.querySelector(".card-time"), o.textContent = e.title, r.src = "img/" + e.icon + ".svg", c.textContent = e.source, a.textContent = e.time, "s" == e.size && a.classList.add("card-time_block"), e.description && null != e.description && ((d = document.querySelector(".template-description").content.querySelector(".card-description")).textContent = e.description, "l" == e.size && d.classList.add("card-description_big"), "critical" == e.type && (d.classList.add("description_critical"), i.classList.add("heading-critical"), l.classList.add("specs-critical"), e.data && e.data.image && (C = document.querySelector(".template-cam").content, d.appendChild(C))), n.appendChild(d.cloneNode(!0))), e.data && ("graph" == (u = e.data).type && ((p = (m = document.querySelector(".template-graph").content.querySelector(".card-data")).querySelector("img")).srcset = "\n            img/Richdata.png 590w,\n            img/Richdata@2x.png 1180w,\n            img/Richdata@3x.png 1770w", p.sizes = "\n                (max-width: 590px) 590px,\n        (max-width: 1180px) 1180px,\n        1770px\n                ", p.src = "img/Richdata@2x.png", n.appendChild(m.cloneNode(!0))), u.temperature && (g = (y = document.querySelector(".template-climat").content.querySelector(".card-data")).querySelector(".climat-block_data__temp"), f = y.querySelector(".climat-block_data__hum"), g.textContent = u.temperature + " C", f.textContent = u.humidity + "%", n.appendChild(y.cloneNode(!0))), u.volume && (x = (S = document.querySelector(".template-music").content.querySelector(".card-data_music")).querySelector(".cover"), L = S.querySelector(".song-title"), q = S.querySelector(".song-length"), S.querySelector(".song-volume").textContent = u.volume + "%", q.textContent = u.track.length, L.textContent = u.artist + " - " + u.track.name, x.src = u.albumcover, n.appendChild(S.cloneNode(!0))), u.buttons && (s = document.querySelector(".template-buttons").content, n.appendChild(s.cloneNode(!0)))), n.classList.add("card_size_" + e.size), "critical" == e.type && n.classList.add("critical"), h = document.importNode(t, !0), v.appendChild(h)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector(".buttons-wrap");
    const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
    setTimeout(function() {
        const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
        const purchaseListContainer = document.createElement('div');
        const purchaseListTitle = document.createElement('p');
        const purchaseList = document.createElement('ol');
        const purchaseListItemOne = document.createElement('li');
        const purchaseListItemTwo = document.createElement('li');

        purchaseListContainer.setAttribute('class', 'purchase-list-wrap');
        purchaseListTitle.setAttribute('class', 'card-description card-description_big description_critical');
        purchaseListTitle.textContent = 'Список покупок:';
        purchaseList.setAttribute('class', 'purchase-list');
        purchaseListItemOne.setAttribute('class', 'purchase-list__item');
        purchaseListItemOne.textContent = 'Хлеб';
        purchaseListItemTwo.setAttribute('class', 'purchase-list__item');
        purchaseListItemTwo.textContent = 'Молоко';

        purchaseListContainer.appendChild(purchaseListTitle);
        purchaseListContainer.appendChild(purchaseList);
        purchaseList.appendChild(purchaseListItemOne);
        purchaseList.appendChild(purchaseListItemTwo);

        confirmPurchaseButton.onclick = () => {
            fridgeInfoContainer.replaceWith(purchaseListContainer)
            buttonsContainer.style.display = "none";
        }
    }, 500)
   

    document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
        document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")
    })
}, !1);