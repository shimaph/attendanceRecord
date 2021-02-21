
let l = localStorage;
i = 0
count = 0
const getStartTime = () => {
  startTime = new Date(); //関数内でvarを使わないとグローバル変数になる
  document.getElementById('startTime').innerHTML = startTime.toLocaleString();
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

  let startTimeInHM = startTime.getHours() + "時" + startTime.getMinutes() + "分";
  let endTimeInHM = endTime.getHours() + "時" + endTime.getMinutes() + "分";

  let MM = startTime.getMonth();
  let DD = startTime.getDate();

  i += 1;
  l.setItem("workTime" + i.toString(), MM + "/" + DD + " " + startTimeInHM + "-" + endTimeInHM + " " + diff);
  console.log(l.getItem("workTime"+ i.toString()))


  console.log(i);
  document.getElementById('workedTime').textContent = diff;
};



const getDiffSec = () => {
  let diffSec = startTime - endTime;
  console.log(diffSec)
};


const start = '出勤';
const end = '＞　退勤';

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
      alert("出勤開始時間を記録しました。")
      count += 1;
      getStartTime();
      startButton.classList.add('duringWork');
      startButton.textContent = "出勤中"
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
      // saveHours();
    }
  } else {
    alert("まず作業を開始してください。")
  }
})

showButton.addEventListener('click', () => {
 for(; i > 0; i--){
   let div = document.createElement('div');
   div.textContent = l.getItem("workTime"+ i.toString());
   document.body.appendChild(div);
 }


});
