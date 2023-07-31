window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    });
    document.querySelector('#close').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('is-active')
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn').forEach(function (x) {
        x.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function (z) {
                z.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn').forEach(function (a) {
        a.addEventListener('click', function (c) {
            const active = c.currentTarget.dataset.path
            
            document.querySelectorAll('.tabs__btn').forEach(function (b) {
                b.classList.remove('tabs__btn-active')
            })
            document.querySelector(`[data-path="${active}"]`).classList.add('tabs__btn-active')
        })
    })
})