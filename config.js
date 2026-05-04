// ==========================================
// ⚙️ CONFIGURATION (การตั้งค่าสภาพแวดล้อม)
// ==========================================

const CONFIG = {
    // 🌐 URL ของ Google Apps Script (ตัวใหม่ที่รวมโค้ดแล้ว)
    // สามารถใช้ลิงก์เดียวกันได้เลย เพราะระบบ Backend แยกส่วนให้แล้ว
    WEB_APP_API: "https://script.google.com/macros/s/AKfycbyWSPUCzFRRnuNU0ytITkABPJe_OYG7OA6L7IZ4UL2UYO4n0Sn5iDcIwIT0WPBgGRwl8Q/exec",

    // 📱 LIFF IDs
    LIFF_ID_CHECKIN: "2009669861-EWrLz3TJ",
    LIFF_ID_HISTORY: "2009669861-VvUu996y",
    

    // 📍 การตั้งค่าพิกัดสถานที่ (ละติจูด, ลองจิจูด)
    TARGET_LATITUDE: 16.807157,
    TARGET_LONGITUDE: 100.263852,

    // 📏 ระยะห่างที่อนุญาตให้เช็คอินได้ (หน่วยเป็นเมตร)
    ALLOWED_RANGE_METERS: 30
};
