// header
const headerNavs = [
  { title: '얄코강좌는', link: '#about' },
  { title: 'HTML', link: '#html' },
  { title: 'CSS', link: '#css' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' }
];

const $headerNavUl = document.querySelector('nav.header__nav > ul');

for (const item of headerNavs) {
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');
  $li.innerHTML = `
    <a href="${item.link}">${item.title}</a>
  `;
  $headerNavUl.appendChild($li);
}

// about
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '빠른 강의',
    descs: [
      '군더더기 있는 진행으로',
      '여러분의 시간을 소비합니다.'
    ]
  },
  {
    img: './images/about_2.svg',
    title: '손쉬운 학습',
    descs: [
      '강의 페이지를 활용해서',
      '편리하게 실습할 수 없습니다.'
    ]
  },
  {
    img: './images/about_3.svg',
    title: '플레이그라운드',
    descs: [
      '강의를 위해 제작한 도구가',
      '반복 학고를 도와줍니다.'
    ]
  },
];

const $aboutDiv = document.querySelector('#about > div.about');

aboutCards.forEach((item, idx) => {
  let desc = '';
  if (item.descs.length > 0) {
    desc = item.descs[0];

    for (let i = 1; i < item.descs.length; i++) {
      desc += `<br>${item.descs[i]}`;
    }
  }

  const $card = document.createElement('div');
  $card.classList.add('about__card');
  $card.innerHTML = `
    <img class="about__icon" src="${item.img}" alt="">
    <h2 class="about__title _${idx + 1}">
      ${item.title}
    </h2>
    <p class="about__text">
      ${desc}
    </p>
  `;
  $aboutDiv.append($card);
});

// curriculum
const $currLiList = document.querySelectorAll('#curriculum ol.curriculum__list > li');
const $currProgBar = document.querySelector('#curriculum div.curriculum__progress > div.bar');

$currLiList.forEach((item, idx) => {
  item.addEventListener('mouseenter', () => $currProgBar.style.width = `${200 * idx}px`);
  item.addEventListener('mouseleave', () => $currProgBar.style.width = 0);
});