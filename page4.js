var sync = document.querySelector ('.sync')

sync.style.effect = 'bounce'

sync.addEventListener ('display', function () {
    if (count==0) {
        sync.style.effect='bounce'
        
        count = 1
         return;
    }
})