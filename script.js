const translations = {
  en: {
    header: "Cambodia & Thailand – Let’s Live in Peace",
    cambodia: "Cambodia",
    thailand: "Thailand",
    message: "🕊️ Stop the Conflict. Embrace Peace. We are One in Humanity. 🕊️",
    footer: "Made with respect and hope for a better future. Let peace lead our way."
  },
  km: {
    header: "កម្ពុជា និង ថៃ – សូមរស់នៅសុខសាន្តជាមួយគ្នា",
    cambodia: "កម្ពុជា",
    thailand: "ថៃ",
    message: "🕊️ ឈប់ប្រយុទ្ធ។ សូមរស់នៅក្នុងសន្តិភាព។ យើងគឺជាមនុស្សដូចគ្នា 🕊️",
    footer: "បង្កើតដោយក្តីស្រឡាញ់ និងក្តីសង្ឃឹមសម្រាប់អនាគត"
  },
  th: {
    header: "กัมพูชา และ ไทย – ขอให้เราอยู่ร่วมกันอย่างสงบ",
    cambodia: "กัมพูชา",
    thailand: "ประเทศไทย",
    message: "🕊️ หยุดการต่อสู้ อยู่ร่วมกันอย่างสันติ เพราะเราคือเพื่อนมนุษย์ 🕊️",
    footer: "สร้างขึ้นด้วยความเคารพและความหวังเพื่ออนาคตที่ดีขึ้น"
  }
};

function setLang(lang) {
  document.getElementById('header-title').innerText = translations[lang].header;
  document.getElementById('label-cambodia').innerText = translations[lang].cambodia;
  document.getElementById('label-thailand').innerText = translations[lang].thailand;
  document.getElementById('peace-message').innerText = translations[lang].message;
  document.getElementById('footer-text').innerText = translations[lang].footer;
}
