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
  "جواكت",
  "أطقم",
  "أحذية",
  "منتجات تجميل",
  "إكسسوارات"
];

// ===== المحافظات (بدون أسعار) =====
export const GOVERNORATES = [
  "القاهرة", "الجيزة", "القليوبية", "الإسكندرية", "البحيرة", "الدقهلية",
  "الشرقية", "الغربية", "المنوفية", "كفر الشيخ", "دمياط", "بورسعيد",
  "الإسماعيلية", "السويس", "الفيوم", "بني سويف", "المنيا", "أسيوط",
  "سوهاج", "قنا", "الأقصر", "أسوان", "البحر الأحمر", "مطروح",
  "شمال سيناء", "جنوب سيناء", "الوادي الجديد"
];
