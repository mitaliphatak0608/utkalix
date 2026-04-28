// ============================================================
// EduKhel App — Full MVP JavaScript
// All data persisted via EduKhelDB (localStorage)
// ============================================================

// ======= QUIZ CONTENT (3 subjects, 5 Qs each) =======
const QUIZ_BANK = {
  math: {
    title: 'Mathematics – Fractions',
    emoji: '➕',
    color: '#FF6B35',
    chapter: 'Ch 4: Fractions',
    questions: [
      {
        story: 'Arjun helps a farmer divide <strong>3/4 acres</strong> of land. He wants to give <strong>1/2</strong> of it to his son. कितनी जमीन मिलेगी?',
        storHi: 'अर्जुन एक किसान की मदद कर रहा है। खेत 3/4 एकड़ है। आधा हिस्सा बेटे को देना है।',
        q: 'What is 3/4 × 1/2 = ?',
        opts: ['A) 1/4', 'B) 1/2', 'C) 3/8', 'D) 3/4'],
        correct: 2, xp: 20,
        explain: '3/4 × 1/2 = 3÷8 = 3/8. Multiply top × top, bottom × bottom!'
      },
      {
        story: 'Priya is collecting rainwater. She filled <strong>2/3</strong> of a jar. Then poured <strong>1/6</strong> more. जार कितना भरा है?',
        storHi: 'प्रिया बारिश का पानी जमा कर रही है। उसने 2/3 भरा फिर 1/6 और डाला।',
        q: '2/3 + 1/6 = ?',
        opts: ['A) 3/9', 'B) 5/6', 'C) 3/6', 'D) 1'],
        correct: 1, xp: 20,
        explain: 'LCM of 3 and 6 is 6. 2/3 = 4/6. So 4/6 + 1/6 = 5/6!'
      },
      {
        story: 'Ravi has <strong>20 mangoes</strong> and shares <strong>3/4</strong> of them equally among <strong>5</strong> friends. Each friend gets how many?',
        storHi: 'राजू के पास 20 आम हैं। वह 3/4 आम पांच दोस्तों में बाँटना चाहता है।',
        q: '(3/4 × 20) ÷ 5 = ?',
        opts: ['A) 4', 'B) 5', 'C) 3', 'D) 6'],
        correct: 2, xp: 20,
        explain: '3/4 × 20 = 15 mangoes. 15 ÷ 5 = 3 each!'
      },
      {
        story: 'Sunita reads <strong>1/4</strong> of a book on Monday and <strong>2/8</strong> on Tuesday. Total fraction read?',
        storHi: 'सुनीता सोमवार को 1/4 और मंगलवार को 2/8 पुस्तक पढ़ती है।',
        q: '1/4 + 2/8 = ?',
        opts: ['A) 3/12', 'B) 4/8', 'C) 1/2', 'D) 3/4'],
        correct: 2, xp: 20,
        explain: '2/8 = 1/4. So 1/4 + 1/4 = 2/4 = 1/2. Simplify!'
      },
      {
        story: 'A water tank is <strong>7/8</strong> full. A family uses <strong>3/8</strong>. How much water is left?',
        storHi: 'पानी की टंकी 7/8 भरी है। परिवार 3/8 उपयोग करता है। कितना बचा?',
        q: '7/8 − 3/8 = ?',
        opts: ['A) 4/16', 'B) 1/2', 'C) 4/8', 'D) 3/4'],
        correct: 1, xp: 20,
        explain: '7/8 − 3/8 = 4/8 = 1/2. Same denominator, just subtract top!'
      }
    ]
  },
  science: {
    title: 'Science – Plant Life',
    emoji: '🔬',
    color: '#00ACC1',
    chapter: 'Ch 2: Plant Life',
    questions: [
      {
        story: 'Arjun plants seeds in his garden. He notices leaves are <strong>green</strong>. Which process makes food using sunlight?',
        storHi: 'अर्जुन ने बगीचे में बीज बोए। पत्तियाँ हरी हैं। सूरज की रोशनी से भोजन कैसे बनता है?',
        q: 'Which process do plants use to make food from sunlight?',
        opts: ['A) Respiration', 'B) Transpiration', 'C) Photosynthesis', 'D) Germination'],
        correct: 2, xp: 20,
        explain: 'Photosynthesis: Plants use sunlight + CO₂ + water → glucose + oxygen!'
      },
      {
        story: 'Priya waters her plant and notices water dripping from leaves. This is called?',
        storHi: 'प्रिया पौधे को पानी देती है। पत्तियों से पानी टपकता है। इसे क्या कहते हैं?',
        q: 'Water loss through leaves is called?',
        opts: ['A) Photosynthesis', 'B) Transpiration', 'C) Absorption', 'D) Osmosis'],
        correct: 1, xp: 20,
        explain: 'Transpiration is the evaporation of water from plant leaves through tiny pores called stomata!'
      },
      {
        story: 'Ravi observes a plant\'s root system. Roots absorb __ and __ from soil.',
        storHi: 'रावी जड़ का अध्ययन करता है। जड़ें मिट्टी से क्या लेती हैं?',
        q: 'Roots absorb __ and __ from soil.',
        opts: ['A) CO₂ and light', 'B) Water and minerals', 'C) Oxygen and glucose', 'D) Pollen and seeds'],
        correct: 1, xp: 20,
        explain: 'Roots absorb water and dissolved minerals from soil to feed the entire plant!'
      },
      {
        story: 'Sunita sees flowers blooming. Flowers help plants to __ for making new plants.',
        storHi: 'सुनीता को फूल खिले दिखते हैं। फूल नए पौधे बनाने में कैसे मदद करते हैं?',
        q: 'What is the main role of flowers in plants?',
        opts: ['A) Photosynthesis', 'B) Water storage', 'C) Reproduction', 'D) Respiration'],
        correct: 2, xp: 20,
        explain: 'Flowers produce seeds through reproduction. Seeds grow into new plants!'
      },
      {
        story: 'Mohan sees a cactus in a desert. It survives by storing water in its __ .',
        storHi: 'मोहन को रेगिस्तान में कैक्टस दिखता है। यह पानी कहाँ जमा करता है?',
        q: 'A cactus stores water in its?',
        opts: ['A) Leaves', 'B) Stem', 'C) Roots', 'D) Flowers'],
        correct: 1, xp: 20,
        explain: 'Cactus stores water in its thick, fleshy stem adapted for dry desert conditions!'
      }
    ]
  },
  hindi: {
    title: 'हिंदी – व्याकरण',
    emoji: '📝',
    color: '#E91E8C',
    chapter: 'Ch 5: व्याकरण',
    questions: [
      {
        story: 'Arjun is writing a letter. "राम <strong>दौड़ता</strong> है।" — underlined word is a?',
        storHi: 'अर्जुन पत्र लिख रहा है। "राम दौड़ता है।" — रेखांकित शब्द क्या है?',
        q: '"दौड़ता" शब्द का भेद क्या है?',
        opts: ['A) संज्ञा', 'B) सर्वनाम', 'C) क्रिया', 'D) विशेषण'],
        correct: 2, xp: 20,
        explain: '"दौड़ता" is a Kriya (क्रिया) — it shows an action (running). Kriya describes what the subject does!'
      },
      {
        story: 'Priya reads: "सुंदर फूल।" — the word "सुंदर" describes the flower. It is a?',
        storHi: 'प्रिया पढ़ती है: "सुंदर फूल।" — "सुंदर" शब्द फूल का वर्णन करता है।',
        q: '"सुंदर" शब्द का भेद क्या है?',
        opts: ['A) क्रिया', 'B) विशेषण', 'C) संज्ञा', 'D) क्रियाविशेषण'],
        correct: 1, xp: 20,
        explain: '"सुंदर" is Visheshan (विशेषण) — an adjective that describes the noun "फूल"!'
      },
      {
        story: 'Ravi sees the sentence: "वह खेलता है।" — "वह" replaces a person\'s name. It is a?',
        storHi: 'रावी वाक्य देखता है: "वह खेलता है।" — "वह" किसी के नाम की जगह आया।',
        q: '"वह" शब्द का भेद क्या है?',
        opts: ['A) संज्ञा', 'B) विशेषण', 'C) सर्वनाम', 'D) क्रिया'],
        correct: 2, xp: 20,
        explain: '"वह" is Sarvanam (सर्वनाम) — a pronoun that replaces a noun (name of a person/thing)!'
      },
      {
        story: 'Sunita\'s teacher asks: which of these is a "भाववाचक संज्ञा" (abstract noun)?',
        storHi: 'सुनीता की teacher पूछती हैं: इनमें भाववाचक संज्ञा कौन सी है?',
        q: 'इनमें से भाववाचक संज्ञा कौन सी है?',
        opts: ['A) राम', 'B) दिल्ली', 'C) बचपन', 'D) गाय'],
        correct: 2, xp: 20,
        explain: '"बचपन" (childhood) is Bhaavavachak Sangya — abstract noun. You cannot touch or see it!'
      },
      {
        story: 'Mohan writes: "वह <strong>धीरे-धीरे</strong> चला।" — "धीरे-धीरे" tells how he walked. It is a?',
        storHi: 'मोहन लिखता है: "वह धीरे-धीरे चला।" — यह शब्द क्रिया का ढंग बताता है।',
        q: '"धीरे-धीरे" शब्द का भेद क्या है?',
        opts: ['A) विशेषण', 'B) संज्ञा', 'C) सर्वनाम', 'D) क्रियाविशेषण'],
        correct: 3, xp: 20,
        explain: '"धीरे-धीरे" is Kriyavisheshan (क्रियाविशेषण) — an adverb that describes how an action is done!'
      }
    ]
  }
};

const BADGE_META = {
  math_master:  { emoji: '➕', label: 'Math Master' },
  science_star: { emoji: '🔬', label: 'Science Star' },
  story_hero:   { emoji: '📖', label: 'Story Hero' },
  quiz_champ:   { emoji: '🏆', label: 'Quiz Champ' },
  streak_7:     { emoji: '🔥', label: '7-Day Streak' },
  lang_legend:  { emoji: '🗣️', label: 'Lang Legend' },
};

// ======= AUTH — NEW SEPARATED SCREENS =======
let studentAuthMode = 'login';  // 'login' | 'signup'
let teacherAuthMode = 'login';

function goToStudentAuth() {
  selectedRole = 'student';
  showScreen('screen-student-auth');
}
function goToTeacherAuth() {
  selectedRole = 'teacher';
  showScreen('screen-teacher-auth');
}

function switchStudentTab(mode) {
  studentAuthMode = mode;
  document.getElementById('sa-tab-login').classList.toggle('active', mode==='login');
  document.getElementById('sa-tab-signup').classList.toggle('active', mode==='signup');
  document.getElementById('sa-login-panel').classList.toggle('hidden', mode!=='login');
  document.getElementById('sa-signup-panel').classList.toggle('hidden', mode!=='signup');
}
function switchTeacherTab(mode) {
  teacherAuthMode = mode;
  document.getElementById('ta-tab-login').classList.toggle('active', mode==='login');
  document.getElementById('ta-tab-signup').classList.toggle('active', mode==='signup');
  document.getElementById('ta-login-panel').classList.toggle('hidden', mode!=='login');
  document.getElementById('ta-signup-panel').classList.toggle('hidden', mode!=='signup');
}

function selectStudentLang(btn) {
  document.querySelectorAll('#s-lang-grid .sa-lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function studentSendOTP(mode) {
  studentAuthMode = mode;
  selectedRole = 'student';
  const phone = mode === 'login'
    ? document.getElementById('s-phone-login')?.value || ''
    : document.getElementById('s-su-phone')?.value || '';
  if (phone.length < 10) { showToast('⚠️ Enter a valid 10-digit mobile number'); return; }
  otpOriginScreen = 'screen-student-auth';
  authMode = mode;
  // Set OTP screen style to student (orange)
  document.getElementById('otp-screen-bg').style.background =
    'radial-gradient(circle at 20% 10%, rgba(255,107,53,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 90%, rgba(255,215,0,0.12) 0%, transparent 50%)';
  document.getElementById('otp-role-icon').textContent = '🎓';
  _doSendOTP(phone);
}


function teacherPasswordLogin() {
  const phone    = document.getElementById('t-phone-login')?.value || '';
  const password = document.getElementById('t-password-login')?.value || '';
  const errEl    = document.getElementById('ta-login-error');
  const btn      = document.getElementById('t-login-btn');

  if (phone.length < 10) { showToast('⚠️ Enter your registered mobile number'); return; }
  if (!password)         { showToast('⚠️ Enter your password'); return; }

  // Animate — checking
  btn.textContent = '⏳ Verifying...';
  btn.disabled = true;

  setTimeout(() => {
    const user = EduKhelDB.getUserByCredentials(phone, password);

    if (!user) {
      // Wrong credentials
      btn.textContent = '🔐 Login to Dashboard';
      btn.disabled = false;
      if (errEl) errEl.classList.remove('hidden');
      // Shake the password input
      const pwdWrap = document.getElementById('ta-pwd-wrap');
      if (pwdWrap) {
        pwdWrap.classList.add('shake');
        setTimeout(() => pwdWrap.classList.remove('shake'), 600);
      }
      return;
    }

    // Success
    if (errEl) errEl.classList.add('hidden');
    btn.textContent = '✓ Logged in!';
    btn.style.background = 'linear-gradient(135deg,#27AE60,#2ECC71)';

    currentUser = user;
    selectedRole = 'teacher';
    updateStreak(user);
    EduKhelDB.setSession(currentUser);

    setTimeout(() => {
      btn.textContent = '🔐 Login to Dashboard';
      btn.style.background = '';
      btn.disabled = false;
      showScreen('screen-teacher');
    }, 700);
  }, 800);
}

function teacherRegisterWithOTP() {
  const phone   = document.getElementById('t-su-phone')?.value || '';
  const pwd     = document.getElementById('t-su-password')?.value || '';
  const confirm = document.getElementById('t-su-confirm-pwd')?.value || '';

  if (phone.length < 10) { showToast('⚠️ Enter a valid mobile number'); return; }
  if (pwd.length < 8)    { showToast('⚠️ Password must be at least 8 characters'); return; }
  if (pwd !== confirm)   { showToast('⚠️ Passwords do not match'); return; }

  const existingUser = EduKhelDB.getUserByPhone(phone);
  if (existingUser) { showToast('📱 Number already registered. Please login.'); switchTeacherTab('login'); return; }

  // Store pending registration data for after OTP
  window._pendingTeacherReg = { password: pwd };

  teacherAuthMode = 'signup';
  selectedRole = 'teacher';
  otpOriginScreen = 'screen-teacher-auth';
  authMode = 'signup';
  document.getElementById('otp-screen-bg').style.background =
    'radial-gradient(circle at 20% 10%, rgba(156,39,176,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 90%, rgba(103,58,183,0.15) 0%, transparent 50%)';
  document.getElementById('otp-role-icon').textContent = '👩‍🏫';
  _doSendOTP(phone);
}

// Legacy — only used for student-like teacher register (kept for compat)
function teacherSendOTP(mode) {
  if (mode === 'signup') teacherRegisterWithOTP();
}

function toggleTeacherPwd() {
  const inp = document.getElementById('t-password-login');
  const btn = document.getElementById('ta-eye-btn');
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
  if (btn) btn.textContent = inp.type === 'password' ? '👁' : '🙈';
}
function toggleTeacherRegPwd() {
  const inp = document.getElementById('t-su-password');
  if (!inp) return;
  inp.type = inp.type === 'password' ? 'text' : 'password';
}


function _doSendOTP(phone) {
  document.getElementById('otp-phone-display').textContent = '+91 ' + phone.substring(0,5) + 'XXXXX';
  showScreen('screen-otp');
  for (let i=0;i<6;i++) {
    const b=document.getElementById('otp'+i);
    if(b){b.value='';b.classList.remove('otp-filled','otp-success','otp-wrong');}
  }
  document.getElementById('otp-error').classList.add('hidden');
  document.getElementById('verify-otp-btn').disabled=false;
  document.getElementById('verify-otp-btn').textContent='Verify & Continue ✓';
  setTimeout(()=>document.getElementById('otp0')?.focus(),300);
  setTimeout(()=>{
    ['1','2','3','4','5','6'].forEach((d,i)=>{
      const b=document.getElementById('otp'+i);
      if(b){b.value=d;b.classList.add('otp-filled');}
    });
  },800);
  startOtpCountdown(30);
}

// legacy compat — used by old HTML if any refs remain
function selectRole(role) {
  selectedRole = role;
}
function switchAuthMode(mode) { authMode = mode; }
function selectLang(btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function selectSignupLang(btn) { selectStudentLang(btn); }

// ======= STATE =======
let currentScreen = 'screen-splash';
let selectedRole  = 'student';
let currentUser   = null;
let currentQuizSubject = 'math';
let quizCurrentQ  = 0;
let quizXPThisRound = 0;
let quizAnswers   = [];
let gqTimerInterval  = null;
let otpTimerInterval = null;
let otpOriginScreen  = 'screen-login';
let authMode = 'login';

const GEMINI_RESPONSES = [
  "Here are 5 MCQs on Fractions for Grade 7:\n1. What is 1/2 + 1/4? → (C) 3/4 ✓\n2. Which is greater: 2/3 or 3/4? → (B) 3/4 ✓\n3. Simplify 6/8: → (A) 3/4 ✓\n4. 2/5 of 20 = ? → (C) 8 ✓\n5. 3 × 1/4 = ? → (A) 3/4 ✓",
  "प्लांट लाइफ – Chapter 2 सारांश:\n\n🌱 पौधों के भाग: जड़, तना, पत्तियां, फूल\n🌞 प्रकाश संश्लेषण से पौधे अपना भोजन बनाते हैं\n💧 जड़ें पानी और खनिज सोखती हैं\n🌺 फूल बीज बनाते हैं",
  "Common mistakes in Fractions:\n❌ Adding denominators: 1/2 + 1/3 ≠ 2/5\n❌ Not simplifying final answers\n❌ Confusing division with multiplication\n✅ Always find LCM before adding/subtracting!",
  "⚠️ Students needing attention:\n• Mohan Yadav — 22% avg (5 days inactive)\n• Ravi Kumar — 55% avg (Math below 50%)\n\n💡 Suggestion: Send them encouraging notifications & a simplified quiz!",
  "I can generate adaptive quizzes based on each student's performance, create story-based problems in regional languages, and suggest remediation activities. Would you like me to do any of these for your class?"
];
let geminiIndex = 0;

// ============================================================
// SCREEN NAVIGATION
// ============================================================
function showScreen(id) {
  if (gqTimerInterval) { clearInterval(gqTimerInterval); gqTimerInterval = null; }

  if (id === 'screen-quiz') {
    quizCurrentQ = 0;
    quizXPThisRound = 0;
    quizAnswers = [];
    renderQuestion();
  }
  if (id === 'screen-group-quiz') startGqTimer();
  if (id === 'screen-leaderboard') renderLeaderboard();
  if (id === 'screen-profile') renderProfile();
  if (id === 'screen-home') renderHome();
  if (id === 'screen-teacher') renderTeacherHome();

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  currentScreen = id;
}

// ============================================================
// AUTH
// ============================================================
function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('role-' + role).classList.add('active');
  if (authMode === 'signup') {
    document.getElementById('student-signup-form').classList.toggle('hidden', role !== 'student');
    document.getElementById('teacher-signup-form').classList.toggle('hidden', role !== 'teacher');
  }
}

function switchAuthMode(mode) {
  authMode = mode;
  document.getElementById('mode-login').classList.toggle('active', mode === 'login');
  document.getElementById('mode-signup').classList.toggle('active', mode === 'signup');
  document.getElementById('login-panel').classList.toggle('hidden', mode !== 'login');
  document.getElementById('signup-panel').classList.toggle('hidden', mode !== 'signup');
  document.getElementById('auth-header-label').textContent = mode === 'login' ? 'Login' : 'Sign Up';
  if (mode === 'signup') {
    document.getElementById('student-signup-form').classList.toggle('hidden', selectedRole !== 'student');
    document.getElementById('teacher-signup-form').classList.toggle('hidden', selectedRole !== 'teacher');
  }
}

function selectLang(btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function selectSignupLang(btn) {
  document.querySelectorAll('#signup-lang-grid .lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function getPhoneForSend() {
  if (selectedRole === 'teacher') {
    return teacherAuthMode === 'login'
      ? document.getElementById('t-phone-login')?.value || ''
      : document.getElementById('t-su-phone')?.value || '';
  } else {
    return studentAuthMode === 'login'
      ? document.getElementById('s-phone-login')?.value || ''
      : document.getElementById('s-su-phone')?.value || '';
  }
}

// Legacy sendOTP kept for any remaining references
function sendOTP(context) {
  if (selectedRole === 'teacher') teacherSendOTP(context);
  else studentSendOTP(context);
}

function startOtpCountdown(sec) {
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  let t = sec;
  const cEl = document.getElementById('otp-countdown');
  const tEl = document.getElementById('otp-timer-text');
  const rBtn = document.getElementById('resend-btn');
  if (cEl) cEl.textContent = t;
  if (tEl) tEl.classList.remove('hidden');
  if (rBtn) rBtn.classList.add('hidden');
  otpTimerInterval = setInterval(() => {
    t--;
    if (cEl) cEl.textContent = t;
    if (t <= 0) {
      clearInterval(otpTimerInterval);
      if (tEl) tEl.classList.add('hidden');
      if (rBtn) rBtn.classList.remove('hidden');
    }
  }, 1000);
}

function resendOTP() {
  for (let i = 0; i < 6; i++) {
    const b = document.getElementById('otp' + i);
    if (b) { b.value = ''; b.classList.remove('otp-filled', 'otp-wrong'); }
  }
  document.getElementById('otp-error').classList.add('hidden');
  setTimeout(() => {
    ['1','2','3','4','5','6'].forEach((d, i) => {
      const b = document.getElementById('otp' + i);
      if (b) { b.value = d; b.classList.add('otp-filled'); }
    });
  }, 800);
  startOtpCountdown(30);
  showToast('✅ OTP resent!');
}

function otpNext6(el, idx) {
  el.value = el.value.replace(/[^0-9]/g, '');
  if (el.value) { el.classList.add('otp-filled'); if (idx < 5) document.getElementById('otp' + (idx + 1))?.focus(); }
  else el.classList.remove('otp-filled');
}
function otpBack(el, idx) {
  if (event.key === 'Backspace' && !el.value && idx > 0) document.getElementById('otp' + (idx - 1))?.focus();
}
function otpNext(el, idx) { otpNext6(el, idx); }

function goBackFromOtp() {
  if (otpTimerInterval) clearInterval(otpTimerInterval);
  showScreen(otpOriginScreen);
}

function verifyOTP() {
  const entered = [0,1,2,3,4,5].map(i => document.getElementById('otp'+i)?.value||'').join('');
  if (entered !== '123456') {
    document.querySelectorAll('.otp-box').forEach(b => b.classList.add('otp-wrong'));
    document.getElementById('otp-error').classList.remove('hidden');
    setTimeout(() => {
      document.querySelectorAll('.otp-box').forEach(b => { b.classList.remove('otp-wrong'); b.value=''; });
    }, 800);
    document.getElementById('otp0')?.focus();
    return;
  }

  // Success
  document.querySelectorAll('.otp-box').forEach(b => b.classList.add('otp-success'));
  const btn = document.getElementById('verify-otp-btn');
  btn.textContent = '✓ Verified!';
  btn.style.background = 'linear-gradient(135deg,#27AE60,#2ECC71)';
  btn.disabled = true;
  if (otpTimerInterval) clearInterval(otpTimerInterval);

  setTimeout(() => {
    btn.textContent = 'Verify & Continue ✓';
    btn.style.background = '';
    btn.disabled = false;
    document.querySelectorAll('.otp-box').forEach(b => b.classList.remove('otp-success'));

    const phone = getPhoneForSend() || document.getElementById('phone-input')?.value || '9876543210';

    if (authMode === 'signup') {
      // Create new user
      const uData = selectedRole === 'student' ? collectStudentSignup() : collectTeacherSignup();
      uData.phone = phone;
      // Save password for teacher registration
      if (selectedRole === 'teacher' && window._pendingTeacherReg?.password) {
        uData.password = window._pendingTeacherReg.password;
        window._pendingTeacherReg = null;
      }
      currentUser = EduKhelDB.createUser(uData);
    } else {
      // Student login: find user or create demo user
      let user = EduKhelDB.getUserByPhone(phone);
      if (!user) {
        user = EduKhelDB.createUser({
          role: selectedRole, name: 'New Student',
          phone, grade: 'Grade 7', section: 'A',
          school: 'Govt. School', lang: 'हिंदी'
        });
      }
      currentUser = user;
    }

    // Update streak
    updateStreak(currentUser);
    EduKhelDB.setSession(currentUser);

    if (currentUser.role === 'teacher') {
      showScreen('screen-teacher');
    } else {
      showScreen('screen-home');
    }
  }, 900);
}

function collectStudentSignup() {
  const lang = document.querySelector('#s-lang-grid .sa-lang-btn.active')?.textContent
    || document.querySelector('#signup-lang-grid .lang-btn.active')?.textContent || 'हिंदी';
  return {
    role: 'student',
    name:   document.getElementById('s-su-name')?.value   || document.getElementById('su-name')?.value   || 'Student',
    grade:  document.getElementById('s-su-grade')?.value  || document.getElementById('su-grade')?.value  || 'Grade 7',
    section:document.getElementById('s-su-section')?.value|| document.getElementById('su-section')?.value|| 'A',
    school: document.getElementById('s-su-school')?.value || document.getElementById('su-school')?.value || 'Govt. School',
    lang
  };
}
function collectTeacherSignup() {
  return {
    role: 'teacher',
    name:    document.getElementById('t-su-name')?.value    || document.getElementById('su-t-name')?.value    || 'Teacher',
    school:  document.getElementById('t-su-school')?.value  || document.getElementById('su-t-school')?.value  || 'Govt. School',
    subject: document.getElementById('t-su-subject')?.value || document.getElementById('su-t-subject')?.value || 'Mathematics',
    grade:   document.getElementById('t-su-grade')?.value   || document.getElementById('su-t-grade')?.value   || 'Grade 7',
    empId:   document.getElementById('t-su-empid')?.value   || document.getElementById('su-t-empid')?.value   || 'DEMO-TCH',
    lang: 'हिंदी'
  };
}

function updateStreak(user) {
  const today = new Date().toISOString().split('T')[0];
  const last = user.lastLogin;
  const diff = last ? Math.floor((new Date(today) - new Date(last)) / 86400000) : 999;
  let streak = user.streak || 0;
  if (diff === 1) streak++;
  else if (diff > 1) streak = 1;
  else if (diff === 0) streak = streak || 1; // same day login
  EduKhelDB.updateUser(user.id, { streak, lastLogin: today });
  currentUser = { ...currentUser, streak, lastLogin: today };
  EduKhelDB.setSession(currentUser);
}

function logout() {
  EduKhelDB.clearSession();
  currentUser = null;
  selectedRole = 'student';
  authMode = 'login';
  studentAuthMode = 'login';
  teacherAuthMode = 'login';
  showScreen('screen-role-pick');
}

// ============================================================
// HOME SCREEN
// ============================================================
function renderHome() {
  if (!currentUser) return;
  const u = EduKhelDB.getUserById(currentUser.id) || currentUser;

  // Greeting
  const name = u.name.split(' ')[0];
  const el = id => document.getElementById(id);
  safeSet('home-greeting', `नमस्ते, ${name}! 👋`);
  safeSet('home-grade', `${u.grade} · Section ${u.section || 'A'}`);
  safeSet('home-avatar-txt', name[0]);

  // Streak
  safeSet('streak-count', u.streak || 0);

  // XP bar
  const xp = u.xp || 0;
  const xpNext = u.xpToNext || 500;
  const lvl = u.level || 1;
  safeSet('xp-level-txt', `⭐ Level ${lvl}`);
  safeSet('xp-pts-txt', `${xp.toLocaleString()} / ${xpNext.toLocaleString()} XP`);
  const pct = Math.min(100, Math.round((xp / xpNext) * 100));
  const fill = document.getElementById('xp-bar-fill');
  if (fill) { fill.style.width = '0%'; setTimeout(() => { fill.style.transition='width 1.2s ease'; fill.style.width = pct+'%'; }, 400); }

  // Badges
  renderHomeBadges(u);

  // Subject progress
  const sp = u.subjectProgress || {};
  safeSet('home-math-prog', `${sp.math||0}% complete`);
  safeSet('home-science-prog', `${sp.science||0}% complete`);
  safeSet('home-hindi-prog', `${sp.hindi||0}% complete`);

  const mathFill = document.getElementById('home-math-bar');
  if (mathFill) mathFill.style.width = (sp.math||0)+'%';
  const sciFill = document.getElementById('home-sci-bar');
  if (sciFill) sciFill.style.width = (sp.science||0)+'%';
  const hindiFill = document.getElementById('home-hindi-bar');
  if (hindiFill) hindiFill.style.width = (sp.hindi||0)+'%';

  // Sync badge
  updateSyncBadge();
}

function renderHomeBadges(u) {
  const strip = document.getElementById('home-badge-strip');
  if (!strip) return;
  strip.innerHTML = '';
  const allBadges = Object.keys(BADGE_META);
  allBadges.forEach(key => {
    const meta = BADGE_META[key];
    const earned = (u.badges||[]).includes(key);
    const div = document.createElement('div');
    div.className = 'badge-item' + (earned ? ' earned' : '');
    div.title = meta.label + (earned ? '' : ' (Locked)');
    div.textContent = meta.emoji;
    strip.appendChild(div);
  });
}

// ============================================================
// QUIZ SELECT
// ============================================================
function showQuizSelect() {
  if (!currentUser) return;
  const u = EduKhelDB.getUserById(currentUser.id) || currentUser;
  const sp = u.subjectProgress || {};
  safeSet('qs-math-pct', `${sp.math||0}%`);
  safeSet('qs-sci-pct', `${sp.science||0}%`);
  safeSet('qs-hindi-pct', `${sp.hindi||0}%`);
  const mBar = document.getElementById('qs-math-bar');
  if (mBar) mBar.style.width = (sp.math||0)+'%';
  const sBar = document.getElementById('qs-sci-bar');
  if (sBar) sBar.style.width = (sp.science||0)+'%';
  const hBar = document.getElementById('qs-hindi-bar');
  if (hBar) hBar.style.width = (sp.hindi||0)+'%';
  showScreen('screen-quiz-select');
}

function startQuiz(subject) {
  currentQuizSubject = subject;
  showScreen('screen-quiz');
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function renderQuestion() {
  const qs = QUIZ_BANK[currentQuizSubject]?.questions;
  if (!qs) return;
  const q = qs[quizCurrentQ];
  if (!q) return;

  document.getElementById('story-text').innerHTML = q.story;
  document.getElementById('quiz-question').textContent = q.q;
  document.getElementById('q-num').textContent = quizCurrentQ + 1;
  document.getElementById('q-total').textContent = qs.length;
  document.getElementById('result-overlay').classList.add('hidden');

  const pct = (quizCurrentQ / qs.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';
  document.getElementById('quiz-xp-score').textContent = quizXPThisRound;

  // Render options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, i === q.correct, q, i);
    grid.appendChild(btn);
  });

  // Voice button label
  const vbtn = document.getElementById('voice-btn');
  if (vbtn) vbtn.innerHTML = '<span>🔊</span> Play in Hindi';
}

function selectOption(btn, isCorrect, q, selectedIdx) {
  const grid = document.getElementById('options-grid');
  const allBtns = grid.querySelectorAll('.option-btn');
  allBtns.forEach((b, i) => {
    b.onclick = null;
    if (i === q.correct) b.classList.add('selected-correct');
  });
  quizAnswers.push({ q: quizCurrentQ, correct: isCorrect, selectedIdx });

  if (isCorrect) {
    btn.classList.add('selected-correct');
    quizXPThisRound += q.xp;
    document.getElementById('result-emoji').textContent = '🎉';
    document.getElementById('result-title').textContent = 'Correct!';
    document.getElementById('result-msg').textContent = `+${q.xp} XP! ${q.explain}`;
  } else {
    btn.classList.add('selected-wrong');
    document.getElementById('result-emoji').textContent = '😢';
    document.getElementById('result-title').textContent = 'Not Quite!';
    document.getElementById('result-msg').textContent = `💡 ${q.explain}`;
  }
  document.getElementById('quiz-xp-score').textContent = quizXPThisRound;
  document.getElementById('result-overlay').classList.remove('hidden');
}

function nextQuestion() {
  quizCurrentQ++;
  const qs = QUIZ_BANK[currentQuizSubject]?.questions;
  if (quizCurrentQ >= (qs?.length || 5)) finishQuiz();
  else renderQuestion();
}

function finishQuiz() {
  if (!currentUser) { showScreen('screen-quiz-done'); return; }

  const qs = QUIZ_BANK[currentQuizSubject].questions;
  const correctCount = quizAnswers.filter(a => a.correct).length;
  const pct = Math.round((correctCount / qs.length) * 100);
  const accuracy = pct;

  // Update user data
  const u = EduKhelDB.getUserById(currentUser.id) || currentUser;
  const oldXP = u.xp || 0;
  const newXP = oldXP + quizXPThisRound;
  const prevTotal = u.totalQuizzes || 0;
  const prevAvg = u.avgScore || 0;
  const newAvg = Math.round(((prevAvg * prevTotal) + accuracy) / (prevTotal + 1));

  // Subject progress
  const sp = { ...(u.subjectProgress || { math:0, science:0, hindi:0 }) };
  const subjKey = currentQuizSubject;
  sp[subjKey] = Math.min(100, Math.round(((sp[subjKey]||0) + accuracy) / 2));

  // Level up?
  let lvl = u.level || 1;
  let xpToNext = u.xpToNext || 500;
  let xpLeft = newXP;
  while (xpLeft >= xpToNext) {
    xpLeft -= xpToNext;
    lvl++;
    xpToNext = lvl * 200;
  }

  const updates = {
    xp: newXP, level: lvl, xpToNext,
    totalQuizzes: prevTotal + 1, avgScore: newAvg,
    subjectProgress: sp
  };
  const updated = EduKhelDB.updateUser(currentUser.id, updates);
  currentUser = { ...currentUser, ...updates };
  EduKhelDB.setSession(currentUser);

  // Record attempt
  EduKhelDB.addAttempt({
    userId: currentUser.id,
    subject: currentQuizSubject,
    score: correctCount,
    total: qs.length,
    xp: quizXPThisRound,
    accuracy
  });

  // Check new badges
  const newBadges = EduKhelDB.checkAndAwardBadges(currentUser.id);
  if (newBadges.length) {
    currentUser = EduKhelDB.getUserById(currentUser.id);
    EduKhelDB.setSession(currentUser);
  }

  // Render quiz done screen
  const circlePct = (correctCount / qs.length);
  const circumference = 2 * Math.PI * 42;
  const offset = circumference * (1 - circlePct);
  const arc = document.getElementById('quiz-done-arc');
  if (arc) { arc.setAttribute('stroke-dasharray', circumference); arc.setAttribute('stroke-dashoffset', offset); }

  safeSet('qd-score-num', `${correctCount}/${qs.length}`);
  safeSet('qd-xp-earned', `+${quizXPThisRound}`);
  safeSet('qd-accuracy', `${accuracy}%`);

  if (newBadges.length) {
    const badgeEl = document.getElementById('qd-new-badge');
    if (badgeEl) {
      const meta = BADGE_META[newBadges[0]];
      badgeEl.textContent = `${meta?.emoji||'🏅'} New Badge: ${meta?.label||newBadges[0]}!`;
      document.getElementById('qd-badge-row').classList.remove('hidden');
    }
  } else {
    document.getElementById('qd-badge-row')?.classList.add('hidden');
  }

  updateSyncBadge();
  showScreen('screen-quiz-done');
}

function playVoice() {
  const btn = document.getElementById('voice-btn');
  const qs = QUIZ_BANK[currentQuizSubject]?.questions;
  const q = qs?.[quizCurrentQ];
  if (!q) return;

  if (btn) { btn.style.background='rgba(0,172,193,0.25)'; btn.innerHTML='⏸ Playing in Hindi...'; }
  setTimeout(() => { if (btn) { btn.style.background=''; btn.innerHTML='<span>🔊</span> Play in Hindi'; } }, 3500);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(q.storHi || q.story.replace(/<[^>]+>/g,''));
    utter.lang = 'hi-IN';
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
  }
}

// ============================================================
// LEADERBOARD
// ============================================================
function renderLeaderboard() {
  const all = EduKhelDB.getLeaderboard();
  const podium = document.getElementById('lb-podium');
  const listEl = document.getElementById('lb-list');
  if (!podium || !listEl) return;

  // Podium (top 3)
  const top3 = all.slice(0, 3);
  const order = [top3[1], top3[0], top3[2]]; // 2nd, 1st, 3rd
  const posClass = ['second', 'first', 'third'];
  const blockClass = ['p2', 'p1', 'p3'];
  podium.innerHTML = '';
  order.forEach((student, i) => {
    if (!student) return;
    const isYou = currentUser && student.id === currentUser.id;
    const pos = [2, 1, 3][i];
    podium.innerHTML += `
      <div class="podium-item ${posClass[i]}">
        ${pos === 1 ? '<div class="crown">👑</div>' : ''}
        <div class="podium-avatar${isYou?' you':''}">
          ${student.name[0]}
        </div>
        <div class="podium-name${isYou?' you-name':''}">${student.name.split(' ')[0]}${isYou?' (You)':''}</div>
        <div class="podium-xp">${student.xp.toLocaleString()} XP</div>
        <div class="podium-block ${blockClass[i]}"><span>${pos}</span></div>
      </div>`;
  });

  // Full list
  listEl.innerHTML = '';
  all.forEach((student, i) => {
    const isYou = currentUser && student.id === currentUser.id;
    const rankColor = i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : 'var(--text-muted)';
    listEl.innerHTML += `
      <div class="lb-row${isYou?' you-row':''}">
        <span class="lb-rank" style="color:${rankColor}">${student.rank}</span>
        <div class="lb-av" style="background:${avatarColor(student.name)}">${student.name[0]}</div>
        <div class="lb-info">
          <strong>${student.name}${isYou?' (You)':''}</strong>
          <small>${student.grade} · ${student.school?.split(',')[1]?.trim() || student.school}</small>
        </div>
        <div class="lb-score">${student.xp.toLocaleString()} XP
          <span class="trend ${student.streak>5?'up':'dn'}">${student.streak>5?'↑':'↓'}${student.streak}</span>
        </div>
      </div>`;
  });
}

function switchLbTab(btn, tab) {
  document.querySelectorAll('.lb-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderLeaderboard(); // same data, different scope label in real backend
}

// ============================================================
// PROFILE SCREEN
// ============================================================
function renderProfile() {
  if (!currentUser) return;
  const u = EduKhelDB.getUserById(currentUser.id) || currentUser;
  const name = u.name.split(' ')[0];

  safeSet('profile-av-txt', name[0]);
  safeSet('profile-name-txt', u.name);
  safeSet('profile-grade-txt', `${u.grade} · Section ${u.section||'A'} · ${u.school?.split(',')[1]?.trim()||''}`);
  safeSet('profile-xp-val', (u.xp||0).toLocaleString());
  safeSet('profile-avg-val', `${u.avgScore||0}%`);
  safeSet('profile-streak-val', u.streak||0);
  safeSet('profile-badges-val', (u.badges||[]).length);

  // Badges grid
  const grid = document.getElementById('profile-badge-grid');
  if (grid) {
    grid.innerHTML = '';
    Object.entries(BADGE_META).forEach(([key, meta]) => {
      const earned = (u.badges||[]).includes(key);
      grid.innerHTML += `
        <div class="badge-lg ${earned?'earned':'locked'}">
          ${meta.emoji}<small>${meta.label}</small>
        </div>`;
    });
  }

  updateSyncBadge();
}

// ============================================================
// TEACHER PANEL
// ============================================================
function renderTeacherHome() {
  if (!currentUser) return;
  const u = EduKhelDB.getUserById(currentUser.id) || currentUser;
  safeSet('tp-teacher-name', `${u.name} 👩‍🏫`);
  safeSet('tp-teacher-role', `${u.subject||'Class Teacher'} · ${u.grade||'Grade 7'}`);
  safeSet('tp-teacher-av', u.name[0]);

  const students = EduKhelDB.getStudents();
  const attempts = EduKhelDB.getAllAttempts();
  const avgScore = students.length
    ? Math.round(students.reduce((s,st)=>s+(st.avgScore||0),0)/students.length)
    : 0;
  const assignments = EduKhelDB.getAssignmentsForTeacher(currentUser.id||'t001');
  const activeQuizzes = assignments.filter(a=>a.status==='active').length;

  safeSet('tp-stat-students', students.length);
  safeSet('tp-stat-avg', avgScore + '%');
  safeSet('tp-stat-attendance', '89%');
  safeSet('tp-stat-quizzes', assignments.length);

  renderStudentHeatmap(students, attempts);
  renderStudentList(students);
  renderAssignments(assignments);
}

function renderStudentHeatmap(students, attempts) {
  const grid = document.getElementById('heatmap-grid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="hm-label"></div>
    <div class="hm-label">Math</div>
    <div class="hm-label">Sci</div>
    <div class="hm-label">Hindi</div>
  `;
  const needsAttention = [];
  students.slice(0, 5).forEach(st => {
    const sp = st.subjectProgress || {};
    const math = sp.math || 0;
    const sci  = sp.science || 0;
    const hind = sp.hindi || 0;
    const avgPct = Math.round((math + sci + hind) / 3);
    if (avgPct < 40) needsAttention.push(st.name);

    grid.innerHTML += `
      <div class="hm-label">${st.name.split(' ')[0]}</div>
      <div class="hm-cell ${heatClass(math)}" title="${math}%"></div>
      <div class="hm-cell ${heatClass(sci)}" title="${sci}%"></div>
      <div class="hm-cell ${heatClass(hind)}" title="${hind}%"></div>
    `;
  });

  const attnBox = document.getElementById('attention-box');
  if (attnBox) {
    if (needsAttention.length) {
      attnBox.classList.remove('hidden');
      attnBox.innerHTML = `⚠️ <strong>${needsAttention.join(', ')}</strong> need attention — below 40% in avg`;
    } else {
      attnBox.classList.add('hidden');
    }
  }
}

function heatClass(pct) {
  if (pct >= 80) return 'h5';
  if (pct >= 60) return 'h4';
  if (pct >= 40) return 'h3';
  if (pct >= 20) return 'h2';
  return 'h1';
}

function renderStudentList(students) {
  const list = document.getElementById('student-list');
  if (!list) return;
  const sorted = [...students].sort((a,b) => b.xp - a.xp);
  list.innerHTML = '';
  sorted.forEach(st => {
    const sp = st.subjectProgress || {};
    const avgProg = Math.round(((sp.math||0)+(sp.science||0)+(sp.hindi||0))/3);
    const inactive = st.lastLogin && Math.floor((new Date()-new Date(st.lastLogin))/86400000) > 3;
    list.innerHTML += `
      <div class="student-row ${inactive?'alert-row':''}" onclick="showStudentDetail('${st.id}')">
        <div class="st-av" style="background:${avatarColor(st.name)}">${st.name[0]}</div>
        <div class="st-info">
          <strong>${st.name}${inactive?' ⚠️':''}</strong>
          <small>${inactive?`Inactive ${Math.floor((new Date()-new Date(st.lastLogin))/86400000)} days`:'Active recently'} · ${st.xp} XP</small>
        </div>
        <div class="st-prog">
          <div class="st-bar"><div style="width:${avgProg}%;background:${avgProg<40?'var(--danger)':'var(--primary)'}"></div></div>
          <span>${avgProg}%</span>
        </div>
      </div>`;
  });
}

function renderAssignments(assignments) {
  const el = document.getElementById('assignment-list');
  if (!el) return;
  if (!assignments.length) { el.innerHTML = '<p style="color:var(--text-muted);font-size:13px;padding:12px 0">No assignments yet.</p>'; return; }
  el.innerHTML = '';
  assignments.forEach(a => {
    const subj = a.quizId?.replace('_',' ') || 'Quiz';
    el.innerHTML += `
      <div class="assignment-row">
        <div class="asgn-icon">${a.status==='active'?'📝':'✅'}</div>
        <div class="asgn-info">
          <strong>${subj}</strong>
          <small>${a.class} · Due: ${a.dueAt}</small>
        </div>
        <span class="asgn-status ${a.status}">${a.status}</span>
      </div>`;
  });
}

function showStudentDetail(userId) {
  const student = EduKhelDB.getUserById(userId);
  if (!student) return;
  const modal = document.getElementById('student-modal');
  if (!modal) return;

  const sp = student.subjectProgress || {};
  const badges = (student.badges || []).map(k => BADGE_META[k]?.emoji || '🏅').join(' ') || 'None yet';
  document.getElementById('sm-name').textContent = student.name;
  document.getElementById('sm-grade').textContent = `${student.grade} · ${student.school}`;
  document.getElementById('sm-xp').textContent = student.xp;
  document.getElementById('sm-streak').textContent = student.streak;
  document.getElementById('sm-avg').textContent = student.avgScore + '%';
  document.getElementById('sm-badges').textContent = badges;
  document.getElementById('sm-math-bar').style.width = (sp.math||0)+'%';
  document.getElementById('sm-sci-bar').style.width  = (sp.science||0)+'%';
  document.getElementById('sm-hindi-bar').style.width= (sp.hindi||0)+'%';
  document.getElementById('sm-math-pct').textContent = (sp.math||0)+'%';
  document.getElementById('sm-sci-pct').textContent  = (sp.science||0)+'%';
  document.getElementById('sm-hindi-pct').textContent= (sp.hindi||0)+'%';

  modal.classList.remove('hidden');
  modal.classList.add('modal-open');
}

function closeStudentModal() {
  const modal = document.getElementById('student-modal');
  if (modal) { modal.classList.add('hidden'); modal.classList.remove('modal-open'); }
}

function switchTpTab(btn, tab) {
  document.querySelectorAll('.tp-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tp-tab-content').forEach(c => c.classList.add('hidden'));
  const content = document.getElementById('tp-tab-' + tab);
  if (content) content.classList.remove('hidden');
}

function assignQuiz() {
  const quiz = document.getElementById('tp-quiz-select')?.value;
  const cls  = document.getElementById('tp-class-select')?.value;
  if (!quiz || !cls) { showToast('⚠️ Please select a quiz and class'); return; }
  EduKhelDB.addAssignment({
    teacherId: currentUser?.id || 't001',
    quizId: quiz,
    class: cls,
    dueAt: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
    status: 'active'
  });
  document.getElementById('assign-success')?.classList.remove('hidden');
  setTimeout(() => document.getElementById('assign-success')?.classList.add('hidden'), 3000);
  updateSyncBadge();
  showToast('✅ Quiz assigned! Students notified.');
}

function showUploadSuccess() {
  document.getElementById('upload-success')?.classList.remove('hidden');
  setTimeout(() => document.getElementById('upload-success')?.classList.add('hidden'), 3000);
}

// ============================================================
// GEMINI AI
// ============================================================
function geminiQuery(question) {
  document.getElementById('gemini-input').value = question;
  sendGeminiMsg();
}

function sendGeminiMsg() {
  const input  = document.getElementById('gemini-input');
  const chat   = document.getElementById('gemini-chat');
  const question = input.value.trim();
  if (!question) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'gc-msg user';
  userMsg.innerHTML = `<span>👩‍🏫</span><p>${question}</p>`;
  chat.appendChild(userMsg);
  input.value = '';

  const typing = document.createElement('div');
  typing.className = 'gc-msg bot';
  typing.innerHTML = `<span>🤖</span><p style="color:var(--text-muted)">Gemini is thinking...</p>`;
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const response = GEMINI_RESPONSES[geminiIndex % GEMINI_RESPONSES.length];
    geminiIndex++;
    const botMsg = document.createElement('div');
    botMsg.className = 'gc-msg bot';
    botMsg.innerHTML = `<span>🤖</span><p>${response.replace(/\n/g,'<br>')}</p>`;
    chat.appendChild(botMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 1500);
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gemini-input')?.addEventListener('keydown', e => { if (e.key==='Enter') sendGeminiMsg(); });
});

// ============================================================
// COMMUNITY & GROUP QUIZ
// ============================================================
function startGqTimer() {
  let t = 15;
  const el = document.getElementById('gq-timer');
  if (el) el.textContent = `⏱ ${t}s`;
  gqTimerInterval = setInterval(() => {
    t--;
    if (el) el.textContent = `⏱ ${t}s`;
    if (t <= 0) { clearInterval(gqTimerInterval); if (el) el.textContent = '⏱ Time up!'; }
  }, 1000);
}

function gqAnswer(btn, isCorrect) {
  document.querySelectorAll('.gq-opt').forEach(b => {
    b.onclick = null;
    if (b.classList.contains('correct-answer')) b.classList.add('gq-right');
  });
  if (!isCorrect) btn.classList.add('gq-wrong');
  clearInterval(gqTimerInterval);
}

// ============================================================
// SYNC
// ============================================================
function updateSyncBadge() {
  const q = EduKhelDB.getSyncQueue();
  const badge = document.getElementById('sync-badge');
  if (!badge) return;
  if (q.length === 0) {
    badge.textContent = '✓ Synced';
    badge.classList.add('synced');
  } else {
    badge.textContent = `Offline — ${q.length} pending`;
    badge.classList.remove('synced');
  }
}

function simulateSync() {
  const badge  = document.getElementById('sync-badge');
  const btn    = document.getElementById('sync-btn');
  const queue  = EduKhelDB.getSyncQueue();
  if (!queue.length) { showToast('✅ Already synced!'); return; }

  btn.textContent = '⟳ Syncing...';
  btn.disabled = true;
  let dots = 0;
  const interval = setInterval(() => {
    dots = (dots+1) % 4;
    btn.textContent = '⟳ Syncing' + '.'.repeat(dots);
  }, 400);

  setTimeout(() => {
    clearInterval(interval);
    EduKhelDB.clearSyncQueue();
    if (badge) { badge.textContent = '✓ Synced just now'; badge.classList.add('synced'); }
    btn.textContent = '✓ Synced!';
    btn.style.background = 'rgba(67,160,71,0.15)';
    btn.style.borderColor = 'rgba(67,160,71,0.3)';
    btn.style.color = 'var(--success)';
    btn.disabled = false;
    showToast('✅ All data synced to server!');
  }, 2500);
}

// ============================================================
// UTILITIES
// ============================================================
function safeSet(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function avatarColor(name) {
  const colors = ['#E91E8C','#FF6B35','#00ACC1','#43A047','#7B1FA2','#F4511E','#039BE5','#FF6F00'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash<<5)-hash);
  return colors[Math.abs(hash) % colors.length];
}

function showToast(msg) {
  let toast = document.getElementById('toast-notif');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notif';
    toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:rgba(20,20,30,0.97);color:#fff;padding:10px 20px;border-radius:20px;font-size:13px;z-index:9999;pointer-events:none;transition:opacity 0.3s;backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);white-space:nowrap;box-shadow:0 4px 24px rgba(0,0,0,0.4);';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2800);
}

function shakeInput(){}

// ============================================================
// WORKFLOW OVERLAY & FABs
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      if (m.target.id === 'screen-home' && m.target.classList.contains('active')) {
        // XP bar animation handled in renderHome
      }
    });
  });
  document.querySelectorAll('.screen').forEach(s => {
    observer.observe(s, { attributes: true, attributeFilter: ['class'] });
  });

  // Heatmap tooltips
  document.addEventListener('mouseover', e => {
    if (e.target.classList.contains('hm-cell') && e.target.title) {
      e.target.style.outline = '2px solid var(--accent)';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.classList.contains('hm-cell')) e.target.style.outline = '';
  });

  // Restore session
  const session = EduKhelDB.getSession();
  if (session) {
    currentUser = session;
    selectedRole = session.role;
  }

  showScreen('screen-splash');
});
