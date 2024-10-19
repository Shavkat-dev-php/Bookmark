const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsTabpanels = document.querySelectorAll('.tabpanels__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');
const elsAccordionItem = document.querySelectorAll('.accordion__item');


function DeactivateTabItems () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    });
}

function DeactivateTabpanels () {
    elsTabpanels.forEach(function (elTabpanel) {
        elTabpanel.classList.remove('tabpanels__item--active');
    });
}

function CloseAccordionItems () {
    elsAccordionItem.forEach(function (elAccordionItem) {
        elAccordionItem.classList.remove('accordion__item--open');
    });
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        DeactivateTabItems();
        elTabLink.parentElement.classList.add('tabs__item--active');
        DeactivateTabpanels();
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add('tabpanels__item--active');
    });
});


elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        CloseAccordionItems();
        elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
    });
});
