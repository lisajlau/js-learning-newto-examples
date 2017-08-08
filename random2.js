function show(el) {
    el.style.display = 'block';
}

function hide(el) {
    el.style.display = 'none';
}

function togglediv(selected) {
    var idOne = document.getElementById('inner-dung');
    var idTwo = document.getElementById('inner-boss');
    var idThree = document.getElementById('inner-item');
    switch(selected) {
        case 'inner-dung': {
            show(idOne);
            hide(idTwo);
            hide(idThree);
            break;
        }
        case 'inner-boss': {
            hide(idOne);
            show(idTwo);
            hide(idThree);
            break;
        }
        case 'inner-item': {
            hide(idOne);
            hide(idTwo);
            show(idThree);
            break;
        }
    }
    
}