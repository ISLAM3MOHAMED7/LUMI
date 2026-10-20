// ============================================================
//  LUMI — إعدادات Firebase والمتجر
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDlY4Q_EBhgT9diIs1a7VqwqtYnXfXnwnE",
  authDomain: "lumi-663cd.firebaseapp.com",
  databaseURL: "https://lumi-663cd-default-rtdb.firebaseio.com",
  projectId: "lumi-663cd",
  storageBucket: "lumi-663cd.firebasestorage.app",
  messagingSenderId: "411759593749",
  appId: "1:411759593749:web:ef4420c1d32d9b1a09411c",
  measurementId: "G-21EK8S7GJM"
};

// ===== معلومات المتجر =====
export const STORE_NAME          = "LUMI";
export const ADMIN_WHATSAPP      = "201098436470";   // واتساب (صيغة دولية بدون +)
export const STORE_PHONE_DISPLAY = "01098436470";    // الرقم المعروض

// ===== الأقسام =====
export const CATEGORIES = [
  "تيشيرتات",
  "قمصان",
  "بناطيل",
  "جاكيتات",
  "أطقم",
  "أحذية",
  "أحزمة",
  "إكسسوارات"
];

// ===== أسعار الشحن (ج.م) =====
export const SHIPPING_RATES = {
  "القاهرة": 50, "الجيزة": 50, "القليوبية": 55, "الإسكندرية": 60,
  "البحيرة": 65, "الدقهلية": 65, "الشرقية": 65, "الغربية": 65,
  "المنوفية": 65, "كفر الشيخ": 65, "دمياط": 65, "بورسعيد": 70,
  "الإسماعيلية": 70, "السويس": 70, "الفيوم": 75, "بني سويف": 75,
  "المنيا": 80, "أسيوط": 80, "سوهاج": 85, "قنا": 85,
  "الأقصر": 90, "أسوان": 90, "البحر الأحمر": 95, "مطروح": 90,
  "شمال سيناء": 95, "جنوب سيناء": 95, "الوادي الجديد": 95
};

export const DEFAULT_SHIPPING = 100;
