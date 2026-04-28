// ============================================================
// EduKhel — LocalStorage Data Engine (simulates SQLite offline)
// ============================================================

const EduKhelDB = (() => {
  const KEY = 'edukhel_db';

  // ---- Seed data ----
  const SEED = {
    users: [
      // Pre-seeded demo students (Grade 7A, Rampur)
      {
        id: 'u001', role: 'student', name: 'Arjun Singh',
        phone: '9876543210', grade: 'Grade 7', section: 'A',
        school: 'Govt. Middle School, Rampur', lang: 'हिंदी',
        xp: 1240, xpToNext: 1500, level: 12, streak: 14,
        lastLogin: daysSub(0),
        badges: ['math_master','streak_7','story_hero','quiz_champ'],
        subjectProgress: { math: 60, science: 35, hindi: 80 },
        totalQuizzes: 18, avgScore: 82
      },
      {
        id: 'u002', role: 'student', name: 'Priya Sharma',
        phone: '9876543211', grade: 'Grade 7', section: 'A',
        school: 'Govt. Middle School, Rampur', lang: 'हिंदी',
        xp: 1180, xpToNext: 1500, level: 11, streak: 9,
        lastLogin: daysSub(0),
        badges: ['science_star','quiz_champ'],
        subjectProgress: { math: 78, science: 92, hindi: 55 },
        totalQuizzes: 15, avgScore: 77
      },
      {
        id: 'u003', role: 'student', name: 'Ravi Kumar',
        phone: '9876543212', grade: 'Grade 7', section: 'B',
        school: 'Govt. Middle School, Shivpur', lang: 'हिंदी',
        xp: 1050, xpToNext: 1500, level: 10, streak: 3,
        lastLogin: daysSub(1),
        badges: ['story_hero'],
        subjectProgress: { math: 45, science: 60, hindi: 72 },
        totalQuizzes: 12, avgScore: 55
      },
      {
        id: 'u004', role: 'student', name: 'Sunita Devi',
        phone: '9876543213', grade: 'Grade 7', section: 'A',
        school: 'Govt. Middle School, Rampur', lang: 'मराठी',
        xp: 985, xpToNext: 1500, level: 9, streak: 6,
        lastLogin: daysSub(0),
        badges: ['streak_7'],
        subjectProgress: { math: 62, science: 38, hindi: 75 },
        totalQuizzes: 11, avgScore: 68
      },
      {
        id: 'u005', role: 'student', name: 'Mohan Yadav',
        phone: '9876543214', grade: 'Grade 7', section: 'C',
        school: 'Govt. Middle School, Gangapur', lang: 'हिंदी',
        xp: 430, xpToNext: 1500, level: 4, streak: 0,
        lastLogin: daysSub(5),
        badges: [],
        subjectProgress: { math: 25, science: 30, hindi: 45 },
        totalQuizzes: 5, avgScore: 22
      },
      // Teacher
      {
        id: 't001', role: 'teacher', name: 'Savitri Devi',
        phone: '9000000001', grade: 'Grade 7', section: 'A',
        school: 'Govt. Middle School, Rampur', lang: 'हिंदी',
        subject: 'Mathematics', empId: 'MAHA-TCH-2024-001',
        password: 'Savitri@123',
        xp: 0, badges: [], streak: 0
      }
    ],
    quizAttempts: [
      { userId:'u001', subject:'math', score:5, total:5, xp:100, date: daysSub(0) },
      { userId:'u001', subject:'science', score:4, total:5, xp:80, date: daysSub(1) },
      { userId:'u001', subject:'hindi', score:4, total:5, xp:80, date: daysSub(2) },
      { userId:'u002', subject:'math', score:4, total:5, xp:80, date: daysSub(0) },
      { userId:'u002', subject:'science', score:5, total:5, xp:100, date: daysSub(1) },
      { userId:'u003', subject:'math', score:3, total:5, xp:60, date: daysSub(1) },
      { userId:'u004', subject:'hindi', score:4, total:5, xp:80, date: daysSub(0) },
      { userId:'u005', subject:'math', score:1, total:5, xp:20, date: daysSub(5) },
    ],
    assignments: [
      { id: 'a001', teacherId: 't001', quizId: 'math_fractions', class: 'Grade 7A', assignedAt: daysSub(2), dueAt: daysSub(-1), status: 'active' },
      { id: 'a002', teacherId: 't001', quizId: 'science_plants', class: 'Grade 7A', assignedAt: daysSub(5), dueAt: daysSub(-3), status: 'completed' },
    ],
    syncQueue: [],
    session: null
  };

  function daysSub(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().split('T')[0];
  }

  // ---- Internal helpers ----
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return initSeed();
      return JSON.parse(raw);
    } catch { return initSeed(); }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function initSeed() {
    save(SEED);
    return JSON.parse(JSON.stringify(SEED));
  }

  // ---- Public API ----
  return {
    // --- Users ---
    getUsers() { return load().users; },
    getStudents() { return load().users.filter(u => u.role === 'student'); },
    getTeachers() { return load().users.filter(u => u.role === 'teacher'); },
    getUserByPhone(phone) { return load().users.find(u => u.phone === phone); },
    getUserById(id) { return load().users.find(u => u.id === id); },
    getUserByCredentials(phone, password) {
      const user = load().users.find(u => u.phone === phone && u.role === 'teacher');
      if (!user) return null;
      // Accept stored password or fallback demo password
      if (user.password === password || password === 'Teacher@123') return user;
      return null;
    },
    setPassword(userId, password) {
      const db = load();
      const idx = db.users.findIndex(u => u.id === userId);
      if (idx !== -1) { db.users[idx].password = password; save(db); }
    },

    createUser(userData) {
      const db = load();
      const newId = userData.role === 'teacher'
        ? 't' + String(db.users.filter(u=>u.role==='teacher').length+1).padStart(3,'0')
        : 'u' + String(db.users.filter(u=>u.role==='student').length+1).padStart(3,'0');
      const user = {
        id: newId,
        xp: 0, xpToNext: 500, level: 1, streak: 0,
        lastLogin: new Date().toISOString().split('T')[0],
        badges: [], subjectProgress: { math: 0, science: 0, hindi: 0 },
        totalQuizzes: 0, avgScore: 0,
        ...userData
      };
      db.users.push(user);
      db.syncQueue.push({ type: 'CREATE_USER', payload: user, at: Date.now() });
      save(db);
      return user;
    },

    updateUser(userId, updates) {
      const db = load();
      const idx = db.users.findIndex(u => u.id === userId);
      if (idx === -1) return null;
      db.users[idx] = { ...db.users[idx], ...updates };
      db.syncQueue.push({ type: 'UPDATE_USER', payload: { id: userId, ...updates }, at: Date.now() });
      save(db);
      return db.users[idx];
    },

    // --- Session ---
    getSession() {
      try { return JSON.parse(sessionStorage.getItem('edukhel_session')); } catch { return null; }
    },
    setSession(user) {
      sessionStorage.setItem('edukhel_session', JSON.stringify(user));
    },
    clearSession() {
      sessionStorage.removeItem('edukhel_session');
    },

    // --- Quiz Attempts ---
    getAttempts(userId) {
      return load().quizAttempts.filter(a => a.userId === userId);
    },
    getAllAttempts() { return load().quizAttempts; },
    addAttempt(attempt) {
      const db = load();
      db.quizAttempts.push({ ...attempt, date: new Date().toISOString().split('T')[0] });
      db.syncQueue.push({ type: 'QUIZ_ATTEMPT', payload: attempt, at: Date.now() });
      save(db);
    },

    // --- Leaderboard ---
    getLeaderboard(scope = 'class') {
      const students = this.getStudents();
      return students
        .sort((a, b) => b.xp - a.xp)
        .map((s, i) => ({ ...s, rank: i + 1 }));
    },

    // --- Assignments ---
    getAssignments() { return load().assignments; },
    getAssignmentsForTeacher(teacherId) {
      return load().assignments.filter(a => a.teacherId === teacherId);
    },
    addAssignment(assignment) {
      const db = load();
      const id = 'a' + String(db.assignments.length + 1).padStart(3, '0');
      const obj = { id, ...assignment, assignedAt: new Date().toISOString().split('T')[0] };
      db.assignments.push(obj);
      db.syncQueue.push({ type: 'ASSIGNMENT', payload: obj, at: Date.now() });
      save(db);
      return obj;
    },

    // --- Sync Queue ---
    getSyncQueue() { return load().syncQueue; },
    clearSyncQueue() {
      const db = load();
      const count = db.syncQueue.length;
      db.syncQueue = [];
      save(db);
      return count;
    },

    // --- XP & Badges ---
    BADGE_RULES: {
      math_master:  u => (u.subjectProgress?.math || 0) >= 80,
      science_star: u => (u.subjectProgress?.science || 0) >= 80,
      story_hero:   u => (u.totalQuizzes || 0) >= 10,
      quiz_champ:   u => (u.avgScore || 0) >= 80,
      streak_7:     u => (u.streak || 0) >= 7,
      lang_legend:  u => Object.values(u.subjectProgress || {}).every(v => v >= 60),
    },

    checkAndAwardBadges(userId) {
      const db = load();
      const idx = db.users.findIndex(u => u.id === userId);
      if (idx === -1) return [];
      const user = db.users[idx];
      const newBadges = [];
      for (const [badge, rule] of Object.entries(this.BADGE_RULES)) {
        if (!user.badges.includes(badge) && rule(user)) {
          user.badges.push(badge);
          newBadges.push(badge);
        }
      }
      if (newBadges.length) {
        db.syncQueue.push({ type: 'BADGES', payload: { userId, badges: newBadges }, at: Date.now() });
        save(db);
      }
      return newBadges;
    },

    // Utility
    resetDB() {
      localStorage.removeItem(KEY);
      sessionStorage.removeItem('edukhel_session');
    }
  };
})();

// Helper accessible globally
function daysSub(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}
