//変数　：書き換え可能
let dialog = 'Hello World!';
//dialog = 'Hello World!!';

//定数 ：書き換えができない
const bigDialog = 'He..Hell...Hello World!';

//配列
let chess = ['mma','papa','dlkjf','dslkfj'];

// ループ文
// let index = 0;
// while(index < chess.length){
//   console.log(chess[index]);
//   index++;
//}




const test = () => {
  if(chess.length > 5){
    console.log('ワッツアップ！！');
  } else {
    console.log('よう！clubhouse!!');
  }
};

test();

//任意のタイミング手使いたい or 繰り返し使いたい！


//オブジェクト
const chess2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint'
};

console.log(chess2)

//window.inner
//window.alert()
//
// document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
//   window.alert("Hello World!");
// });

const start = '出勤'
const end = '退勤'

document.getElementById('startButton').textContent = start;
