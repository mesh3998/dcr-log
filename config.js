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
  // shift-a@dcr-log.example  shift-b@dcr-log.example  shift-c@dcr-log.example
  // shift-d@dcr-log.example  shift-f@dcr-log.example  admin@dcr-log.example
  // إذا غيرت النطاق هني، غيره بعد بملف firestore.rules.
  accountDomain: "dcr-log.example",
  title: "سجل قراءات المقطرات"
};
