// إعدادات الربط مع Firebase. تتعبى مرة وحدة.
// من Firebase: Project settings ← Your apps ← Web app ← firebaseConfig
// هالبيانات مو سرية: الحماية بكلمات السر وقواعد قاعدة البيانات (firestore.rules).
window.DCR_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDJY6pSg80gVw0WqRWS6EGRagdfKCAc0EA",
    authDomain: "dcr-log.firebaseapp.com",
    projectId: "dcr-log",
    storageBucket: "dcr-log.firebasestorage.app",
    messagingSenderId: "451676426721",
    appId: "1:451676426721:web:864699dc2c175a6042c2a0"
  },
  // حسابات الدخول تنضاف بـFirebase (Authentication ← Users) بهالأسماء:
  // DCR 1: 1a@dcr-log.example  1b  1c  1d  1f
  // DCR 2: 2a@dcr-log.example  2b  2c  2d  2f
  // المشرف: admin@dcr-log.example
  // إذا غيرت النطاق هني، غيره بعد بملف firestore.rules.
  accountDomain: "dcr-log.example",
  title: "سجل قراءات المقطرات"
};
