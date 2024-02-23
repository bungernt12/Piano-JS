const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']


const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    //add onClick to each key element
    key.addEventListener('mousedown', () => playNote(key));
    // key.addEventListener('mousedown', () => handleMouseDown(key))
    // key.addEventListener('mouseup', () => handleMouseUp(key))
});

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

const playNote = key => {
    const sound = document.getElementById(key.dataset.note);
    sound.currentTime = 0;
    sound.play()
    key.classList.add('active')
    sound.addEventListener('ended', () => {
        key.classList.remove('active')
    })

}

// function handleMouseDown(key) {
//     if (key.className == 'key white') {
//         document.getElementById(`div-${key.dataset.note}`).style.backgroundColor = "#CCC"
//     } else {
//         document.getElementById(`div-${key.dataset.note}`).style.backgroundColor = "#333"
//     }
// }


// function handleMouseUp(key) {
//     if (key.className == 'key white') {
//         document.getElementById(`div-${key.dataset.note}`).style.backgroundColor = "white"
//     } else {
//         document.getElementById(`div-${key.dataset.note}`).style.backgroundColor = "black"
//     }
// }

console.log(keys)