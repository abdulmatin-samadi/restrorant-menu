document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const searchInput = document.querySelector('#food-search');
    const foodCards = document.querySelectorAll('.searchable-food');
    const searchEmpty = document.querySelector('#search-empty');

    if (searchInput && foodCards.length) {
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            foodCards.forEach(function (card) {
                const searchableText = (card.dataset.name + ' ' + card.dataset.description).toLowerCase();
                const isVisible = searchableText.includes(query);
                card.hidden = !isVisible;
                if (isVisible) visibleCount += 1;
            });

            if (searchEmpty) searchEmpty.hidden = visibleCount !== 0;
        });
    }

    const heartButton = document.querySelector('.heart-button');
    if (heartButton) {
        heartButton.addEventListener('click', function () {
            heartButton.classList.toggle('liked');
            heartButton.textContent = heartButton.classList.contains('liked') ? '♥' : '♡';
        });
    }

    document.querySelectorAll('.add-to-order').forEach(function (button) {
        button.addEventListener('click', function () {
            const originalText = button.innerHTML;
            button.innerHTML = 'Buyurtmaga qo‘shildi <span>✓</span>';
            button.classList.add('added');
            setTimeout(function () {
                button.innerHTML = originalText;
                button.classList.remove('added');
            }, 1800);
        });
    });
});
