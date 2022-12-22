console.log('nnnnnn')
let color = ''
let mode = ''

function saveColor(event) {
    color = event.target.value.slice(1)
} 

function saveScheme(event) {
    mode = event.target.value
}

function gimmieScheme(){
    document.getElementById('btn-request').textContent = `${Math.random()}`
    console.log('yyyyyyyy')
    const uriScheme = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`
    fetch(uriScheme)
        .then(res => res.json())
        .then(json => {
            document.getElementById('col0').style.backgroundColor = json.colors[0].hex.value
            document.getElementById('col1').style.backgroundColor = json.colors[1].hex.value
            document.getElementById('col2').style.backgroundColor = json.colors[2].hex.value
            document.getElementById('col3').style.backgroundColor = json.colors[3].hex.value
            document.getElementById('col4').style.backgroundColor = json.colors[4].hex.value
        })
}

document.getElementById('color-picker').addEventListener('input', saveColor)
document.getElementById('select-schemes').addEventListener('change', saveScheme)
document.getElementById('btn-request').addEventListener('click', gimmieScheme)

