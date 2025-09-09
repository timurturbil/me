// Çeviri verileri
const translations = {
    en: {
        name: "Timur Turbil",
        medium: "Medium Posts",
        contributions: "Open Source Contributions",
        resume: "Resume",
        bio: `I’m a technology enthusiast and a software developer. I enjoy creating technologies that can benefit humanity or making even small contributions. My skills include <b>full-stack web development</b>, <b>mobile development</b>, <b>architectural design</b>, and more. Recently, I’ve been working on how the products I develop can become more useful through the integration of <b>artificial intelligence</b>.`,
        footer: "© 2025 Timur Turbil · Powered by HTML, CSS & JavaScript",
        resume_link: "https://drive.google.com/file/d/18Waz0L9om_u8Eu0PeoIEO7fE3hhlEt94/view?usp=sharing"
    },
    tr: {
        name: "Timur Turbil",
        medium: "Medium Yazıları",
        contributions: "Açık Kaynak Katkıları",
        resume: "Özgeçmiş",
        bio: `Teknoloji meraklısı bir yazılımcıyım. İnsanlığa yararlı olabilecek teknolojileri geliştirmeyi veya küçük de olsa katkı sağlamayı severim. Yeteneklerim arasında <b>full-stack web geliştirme</b>, <b>mobil geliştirme</b>, <b>mimari tasarım</b> ve daha fazlası mevcut. Son zamanlarda üzerinde geliştirme yaptığım ürünlerin <b>yapay zeka</b> ile nasıl daha kullanışlı hale gelebileceği üzerine çalışmalar yapıyorum.`,
        footer: "© 2025 Timur Turbil · HTML, CSS & JavaScript ile güçlendirilmiştir",
        resume_link: "https://drive.google.com/file/d/1y0hFcwZmge_bShluFZaefHfuvDVSKWTP/view?usp=sharing"
    }
};

// Varsayılan dil
let currentLang = "tr";

// Dil değiştirme butonu
const langToggle = document.getElementById("lang-toggle");

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "tr" : "en";
    updateLanguage();
    langToggle.textContent = currentLang === "en" ? "Türkçe" : "English";
});

function updateLanguage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key === "resume_link") {
            el.setAttribute("href", translations[currentLang].resume_link);
        } else {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// İlk yüklemede güncelle
updateLanguage();
