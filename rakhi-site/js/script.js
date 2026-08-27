// ===========================================================
// PERSONALISATION — edit these two lines to rename the siblings
// ===========================================================
const BROTHER_NAME = "Dhore";
const SISTER_NAME  = "Jeevitha";

// ===========================================================
// SCROLL PROGRESS THREAD
// ===========================================================
const threadFill = document.getElementById('threadFill');
function updateThread(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  threadFill.style.width = pct + '%';
}
document.addEventListener('scroll', updateThread, { passive:true });
updateThread();

// ===========================================================
// THIS OR THAT — QUESTION BANK
// Each question: text + a short punchy label for each side.
// ===========================================================
const QUESTIONS = [
  { q: "Who was the bigger trouble-maker growing up?", a: "Always breaking something", b: "Always blaming someone" },
  { q: "Who steals food off the other's plate without asking?", a: "Guilty, repeatedly", b: "Only when hungry (always)" },
  { q: "Who takes longer to get ready to leave the house?", a: "Two minutes, promise", b: "\"Almost done\" means 20 more" },
  { q: "Who cries first during an emotional movie?", a: "Stone-faced... usually", b: "Tears by the trailer" },
  { q: "Who is more likely to forget an important date?", a: "Calendar? What calendar?", b: "Never forgets, never lets you forget either" },
  { q: "Who gives the better gifts?", a: "Thoughtful and on time", b: "Thoughtful, three days late" },
  { q: "Who is the bigger foodie?", a: "Lives to eat", b: "Eats to survive... barely" },
  { q: "Who is more stubborn in an argument?", a: "Never backs down", b: "Backs down, still right" },
  { q: "Who tells the funniest jokes at family gatherings?", a: "The self-appointed comedian", b: "The unintentional comedy" },
  { q: "Who is secretly the family's favourite?", a: "Let's be honest, it's obvious", b: "Earned it fair and square" },
  { q: "Who gives the better advice at 2 a.m.?", a: "Surprisingly wise at midnight", b: "Mostly just listens, and that's enough" },
  { q: "Who would survive longer in a horror movie?", a: "Out the door at the first creak", b: "Investigates the creak, regrets it" },
  { q: "Who spends more time on their phone?", a: "It's basically an extra limb", b: "Close second, no judgment" },
  { q: "Who is better at keeping a secret?", a: "A vault. Truly.", b: "Tries very, very hard" },
  { q: "Who will always show up, no matter what?", a: "Rain, shine, or bad traffic", b: "Every single time, no exceptions" },
];

// ===========================================================
// QUIZ STATE + DOM
// ===========================================================
const panelStart = document.getElementById('panelStart');
const panelQuestion = document.getElementById('panelQuestion');
const panelResult = document.getElementById('panelResult');
const startBtn = document.getElementById('startBtn');
const replayBtn = document.getElementById('replayBtn');
const optA = document.getElementById('optA');
const optB = document.getElementById('optB');
const quizQuestion = document.getElementById('quizQuestion');
const quizCount = document.getElementById('quizCount');
const progressBar = document.getElementById('progressBar');
const resultTitle = document.getElementById('resultTitle');
const scoreBrotherEl = document.getElementById('scoreBrother');
const scoreSisterEl = document.getElementById('scoreSister');
const barBrother = document.getElementById('barBrother');
const barSister = document.getElementById('barSister');

let order = [];
let current = 0;
let scoreBrother = 0;
let scoreSister = 0;

function shuffledOrder(len){
  const arr = Array.from({length: len}, (_, i) => i);
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuiz(){
  order = shuffledOrder(QUESTIONS.length);
  current = 0;
  scoreBrother = 0;
  scoreSister = 0;
  panelStart.classList.add('quiz__panel--hidden');
  panelResult.classList.add('quiz__panel--hidden');
  panelQuestion.classList.remove('quiz__panel--hidden');
  renderQuestion();
}

function renderQuestion(){
  const item = QUESTIONS[order[current]];
  quizCount.textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
  progressBar.style.width = `${(current / QUESTIONS.length) * 100}%`;
  quizQuestion.textContent = item.q;
  optA.innerHTML = `${BROTHER_NAME}<br><small style="font-weight:400; opacity:0.85;">${item.a}</small>`;
  optB.innerHTML = `${SISTER_NAME}<br><small style="font-weight:400; opacity:0.85;">${item.b}</small>`;
  optA.classList.remove('is-picked');
  optB.classList.remove('is-picked');
}

function pick(who, btn){
  btn.classList.add('is-picked');
  if(who === 'brother') scoreBrother++; else scoreSister++;
  setTimeout(() => {
    current++;
    if(current >= QUESTIONS.length){
      showResult();
    } else {
      renderQuestion();
    }
  }, 260);
}

optA.addEventListener('click', () => pick('brother', optA));
optB.addEventListener('click', () => pick('sister', optB));

function showResult(){
  progressBar.style.width = '100%';
  panelQuestion.classList.add('quiz__panel--hidden');
  panelResult.classList.remove('quiz__panel--hidden');

  const total = scoreBrother + scoreSister;
  const pctBrother = total ? (scoreBrother / total) * 100 : 50;
  const pctSister = total ? (scoreSister / total) * 100 : 50;

  scoreBrotherEl.textContent = scoreBrother;
  scoreSisterEl.textContent = scoreSister;

  requestAnimationFrame(() => {
    barBrother.style.width = pctBrother + '%';
    barSister.style.width = pctSister + '%';
  });

  if(scoreBrother === scoreSister){
    resultTitle.textContent = `It's a perfect tie — true partners in crime!`;
  } else if(scoreBrother > scoreSister){
    resultTitle.textContent = `${BROTHER_NAME} takes this round!`;
  } else {
    resultTitle.textContent = `${SISTER_NAME} takes this round!`;
  }
}

startBtn.addEventListener('click', startQuiz);
replayBtn.addEventListener('click', startQuiz);

// ===========================================================
// TIE THE RAKHI + CONFETTI
// ===========================================================
const tieButton = document.getElementById('tieButton');
const tieMessage = document.getElementById('tieMessage');
const tieThreadLeft = document.getElementById('tieThreadLeft');
const tieThreadRight = document.getElementById('tieThreadRight');
const tieCharm = document.getElementById('tieCharm');
let tied = false;

tieButton.addEventListener('click', () => {
  if(tied) return;
  tied = true;
  tieThreadLeft.setAttribute('d', 'M10,60 C60,40 80,50 108,60');
  tieThreadRight.setAttribute('d', 'M230,60 C180,40 160,50 132,60');
  tieCharm.setAttribute('r', '20');
  tieMessage.classList.add('is-visible');
  launchConfetti();
});

// Lightweight confetti — no external dependencies
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let confettiRunning = false;

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const CONFETTI_COLORS = ['#C9962B', '#E8722C', '#F2B8C6', '#FBF3E7', '#2C4A47'];

function launchConfetti(){
  const count = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 140;
  particles = [];
  for(let i = 0; i < count; i++){
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 120,
      y: canvas.height * 0.55,
      vx: (Math.random() - 0.5) * 8,
      vy: -Math.random() * 10 - 4,
      size: Math.random() * 7 + 4,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      gravity: 0.28,
      life: 0
    });
  }
  if(!confettiRunning){
    confettiRunning = true;
    requestAnimationFrame(animateConfetti);
  }
}

function animateConfetti(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let alive = false;
  particles.forEach(p => {
    p.vy += p.gravity;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;
    p.life++;
    if(p.y < canvas.height + 40) alive = true;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  });
  if(alive){
    requestAnimationFrame(animateConfetti);
  } else {
    confettiRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
