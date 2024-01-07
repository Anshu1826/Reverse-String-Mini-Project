const btn = document.querySelector('button');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const img = document.querySelector('img');
btn.addEventListener('click',()=>{
    const str = input.value;
    output.value = reverse(str);
})

function reverse(str){
    let reversed = "";
    for(let i = str.length-1 ; i >= 0 ; --i){
        reversed += str[i];
    }
    console.log(reversed);
    return reversed;
}

img.addEventListener('click',()=>copyToClipboard('output'));
function copyToClipboard(var1){
    let val = document.getElementById(var1).value;
    const selBox = document.createElement('textarea');
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('text copied to clipboard, please use Ctrl-V to paste the data');

  }