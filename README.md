# سجل قراءات المقطرات — دليل الربط

برنامج مستقل لتسجيل قراءات ورقة DCR Operator Log Sheet. الدخول بكلمة سر: حساب لكل شفت (A, B, C, D, F) وحساب للمشرف.

## الملفات

| الملف | شنو فيه |
| --- | --- |
| `index.html` | البرنامج كامل |
| `config.js` | بيانات الربط مع Firebase (تتعبى مرة وحدة) |
| `firestore.rules` | قواعد حماية قاعدة البيانات (تنلصق بـFirebase) |

## 1) Firebase (البيانات والدخول)

أسماء الأزرار ممكن تختلف شوي عن المكتوب، بس الترتيب نفسه.

1. افتح console.firebase.google.com بحساب Google واضغط **Add project**. سمّه مثلاً `dcr-log`، وما تحتاج Google Analytics.
2. **Build ← Authentication ← Get started ← Sign-in method**: فعّل **Email/Password** واحفظ.
3. **Authentication ← Users ← Add user**: ضيف الحسابات الستة وحط لكل واحد كلمة سر:

   ```
   shift-a@dcr-log.example
   shift-b@dcr-log.example
   shift-c@dcr-log.example
   shift-d@dcr-log.example
   shift-f@dcr-log.example
   admin@dcr-log.example
   ```

   هذي أسماء دخول مو إيميلات حقيقية، وما ينرسل عليها شي. إذا Firebase ما قبل الاسم، لازم يتغير النطاق بملف `config.js` وملف `firestore.rules` مع بعض.
4. **Authentication ← Settings ← User actions**: إذا لقيت خيار إنشاء الحسابات (sign-up) طفّه، عشان محد يضيف حساب غيرك.
5. **Build ← Firestore Database ← Create database**: اختر أقرب منطقة، واختر **production mode**.
6. **Firestore Database ← Rules**: امسح الموجود، الصق محتوى `firestore.rules`، واضغط **Publish**.
7. **Project settings (علامة الترس) ← General ← Your apps**: اضغط أيقونة الويب `</>`، سجّل تطبيق باسم `dcr-log` (بدون Hosting)، وانسخ قيم `firebaseConfig` إلى `config.js`.

## 2) GitHub (الرابط)

1. سو حساب بـgithub.com، وبعدها **New repository** باسم `dcr-log`، واختره **Public**.
2. **Add file ← Upload files**: ارفع `index.html` و `config.js` و `firestore.rules` و `README.md`، واضغط **Commit changes**.
3. **Settings ← Pages**: تحت Source اختر **Deploy from a branch**، والفرع `main` والمجلد `/ (root)`، واحفظ.
4. بعد دقيقة يطلع الرابط: `https://اسم-حسابك.github.io/dcr-log/`
5. ارجع Firebase: **Authentication ← Settings ← Authorized domains ← Add domain** وضيف `اسم-حسابك.github.io`.

المستودع Public يعني كود البرنامج ينشاف، بس القراءات ما تنشاف: ما يقراها ولا يكتبها إلا اللي داخل بكلمة سر.

## 3) شلون يشتغل

- **الشفت:** يختار حرف شفته ويكتب كلمة السر. شخصين يقدرون يدخلون بنفس الحساب بنفس الوقت.
- **الفترة:** تتثبت تلقائي حسب الساعة (الافتراضي: الصبح 7:00، العصر 15:00، الليل 23:00). الشفت يختار وقت القراءة والمقطرة بس.
- **قراءة متأخرة:** أول ساعة بعد تبديل الشفت يظل خيار الفترة السابقة موجود، عشان اللي ما لحق يسجل آخر قراءة.
- **المشرف:** يفتح على الداشبورد، يقدر يسجل ويعدل لأي تاريخ وشفت، ينزل Excel لليوم والشهر، ويغير مواعيد الشفتات والمهلة.
- **بدون نت:** القراءة تنحفظ على الجهاز وترتفع أول ما يرجع الاتصال، بشرط ما تتسكر الصفحة.

## 4) كلمات السر

- تغيير كلمة سر حساب: من **Authentication ← Users** امسح الحساب وضيفه مرة ثانية بنفس الاسم وكلمة سر جديدة. القراءات ما تتأثر.
- إيقاف حساب مؤقتاً: **Disable account** من نفس القائمة.

## 5) التحديثات

أي تعديل ينطلب من Claude. بعدها واحد من اثنين:

- تربط GitHub مع Claude، وClaude يرفع التحديث بنفسه على المستودع.
- أو Claude يعطيك `index.html` الجديد وترفعه إنت من **Add file ← Upload files**.

الرابط ما يتغير، والقراءات ما تتأثر بالتحديث لأنها محفوظة بـFirebase.
