import type en from "./en";

const ar:typeof en = {
  about: "عن التطبيق",
  welcome_to_travel_planner: "خطط رحلتك مع الذكاء الاصطناعي",
  features: "الميزات",
  contact_us: "اتصل بنا",
  tool_list: "قائمة الأدوات",
  travel_planner_description: "أين ستستكشف بعد ذلك؟",
  travel_plan_tools: "استخدم مجموعتنا من أدوات تخطيط الرحلات",
  "{{adults}} adults, {{children}} children": "{{adults}} بالغين، {{children}} أطفال",
  "Generating your plan...": "جاري إنشاء خطتك...",
  planing_ahead: "التخطيط للمستقبل",
  plan: {
    budget: "ما هي ميزانيتك؟",
    dateRang: "ما هو نطاق التاريخ؟",
    childrenAdults:"من يسافر؟"
  },
  form: {
    title: "إنشاء حساب",
    name: "الاسم",
    interests_title: "ما الذي يهمك؟",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    submit: "تسجيل",
    submitting: "جاري الإرسال...",
    success: "تم التسجيل بنجاح",
    error: "حدث خطأ ما",
    name_error: "الاسم قصير جداً",
    email_error: "البريد الإلكتروني غير صالح",
    password_error: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
    home_airport_title: "المطار الرئيسي"
  },
  login: {
    title: "تسجيل الدخول",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "example@email.com",
    passwordLabel: "كلمة المرور",
    passwordPlaceholder: "********",
    submit: "دخول",
    validation: {
      email: "يرجى إدخال بريد إلكتروني صحيح",
      password: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
      generic: "حدث خطأ غير متوقع"
    }
    
  },
  "interests": {
    "titleWithCity": "ما الذي يهمك في {{city}}؟",
    "modern": "معالم حديثة",
    "traditional": "معالم تقليدية",
    "food": "أماكن الطعام",
    "shopping": "مناطق التسوق",
    "unique": "تجارب فريدة"
  }
};

export default ar;
