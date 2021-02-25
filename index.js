
let l = localStorage;
i = 0
count = 0

// sleep関数


currentState = document.getElementById('currentState');



currentState.classList.add('beforeWork');
currentState.textContent = ('出勤前');




time();
function time(){
    let now = new Date();
    let currentTime = now.getHours() + ":" + now.getMinutes();
    document.getElementById("time").textContent = currentTime;
}
setInterval('time()',1000);


const getStartTime = () => {
  startTime = new Date(); //関数内でvarを使わないとグローバル変数になる
  startTimeInFormat = startTime.getMonth() + "/" + startTime.getDate() + " " + startTime.getHours() + "時" + startTime.getMinutes() + "分";//表示用
  document.getElementById('startTime').innerHTML = startTimeInFormat;
};

const getEndTime = () => {
  endTime = new Date();
  document.getElementById('endTime').innerHTML = endTime.toLocaleString();
};


const getDiff = () => {
  let diff = endTime - startTime;
  let hours = Math.floor(diff/(1000 * 60 * 60));
  diff = diff % (1000 * 60 * 60);
  let mins = Math.floor(diff/(1000 * 60));

  if(hours != 0){
    diff = hours + "時間" +　mins + "分";
  } else {
    diff = mins + "分";
  }


  let endTimeInHM = endTime.getHours() + "時" + endTime.getMinutes() + "分";



  i += 1;
  l.setItem("i", i)
  l.setItem("workTime" + i.toString(), startTimeInFormat + "-" + endTimeInHM + " " + diff);
  console.log(l.getItem("workTime"+ i.toString()));


  console.log(i);
  document.getElementById('workedTime').textContent = diff;
};



const getDiffSec = () => {
  let diffSec = startTime - endTime;
  console.log(diffSec)
};




const start = '出勤';
const end = '退勤';

startButton = document.getElementById('startButton');
endButton = document.getElementById('endButton');
showButton = document.getElementById('showButton');


startButton.textContent = start;
endButton.textContent = end;
showButton.textContent = "提出";



startButton.addEventListener('click',()=>{
  if(count == 0){
    confirmStart = confirm("作業を開始しますか？");
    if(confirmStart == true){
      count += 1;
      getStartTime();
      currentState.classList.remove('beforeWork');
      currentState.classList.add('duringWork');
      currentState.textContent = "出勤中";
    }
  } else {
    alert("現在出勤中です。")
  }
})

endButton.addEventListener('click',()=>{
  if (count == 1){
    confirmEnd = confirm("作業を終了しますか？");
    if(confirmEnd == true){
      getEndTime();
      count -= 1;
      getDiff();
      doneAni();

      // saveHours();
    }
  } else {
    alert("まず作業を開始してください。")
  }
})

showButton.addEventListener('click', () => {
  var submit = window.open("submit.html", "提出用", "width = 300, height = 300");
  // forSubmit();
})




button = document.getElementById('copy');



// 勤務終了後のアニメーション関数

const doneAni = () => {
  currentState.classList.remove("duringWork");
  currentState.classList.add("workDone");
  currentState.textContent = "おつかれさま";
  setTimeout(
    function () {
      currentState.classList.remove("workDone");
      currentState.classList.add("beforeWork");
      currentState.textContent = "出勤前"
    },
    "4000"
  );
}
