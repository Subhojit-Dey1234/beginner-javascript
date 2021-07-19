const items = document.querySelectorAll('.tab-item');
const texts = document.querySelectorAll('.body-text');

Array.from(items).forEach(function(e){
    e.addEventListener('click',function(){
        for(var i=0;i<items.length ; i++)
        {
            items[i].classList.remove('back');
        }
        e.classList.add('back');
        const tabs = document.querySelector(`#${this.id}-content`);
        texts.forEach(function(e){
            e.classList.remove('show');
        })
        tabs.classList.add('show');
    })
})