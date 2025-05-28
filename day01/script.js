const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen:', $screen);
console.log('toggleButton:', $toggleButton);

if ($screen && $toggleButton) {
  // 첫번째 아규먼트: 문자열(이벤트 이름)
  // 두번째 아규먼트: 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert('누르지마');
  }

  const cb = clickBtn;

  //   $toggleButton.addEventListener('click', function () {
  //     alert('누르지 맛');
  //   });
  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn:', stopWatchOn);
  });
}
