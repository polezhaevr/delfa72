const tabsAllBtn = document.querySelectorAll('.directions__nav-bt');
const tabsItems = document.querySelectorAll('.directions__slider-wrapper');

/* Алгоритм отерытия табов */

tabsAllBtn .forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener('click',function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (! currentBtn.classList.contains('avtive')){
            tabsAllBtn.forEach(function(item){
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        };
    });
};

document.querySelector('.directions__nav-bt').click();

/* Конец алгоритма отерытия табов */