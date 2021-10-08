input = document.getElementById('text')
function main() {
    setTimeout(() => {
        document.getElementById('image').src = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${input.value}`
    }, 1000);
    document.getElementById('image').src = `load.gif`
}