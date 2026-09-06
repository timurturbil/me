// Çeviri verileri
const translations = {
    en: {
        name: "Timur Turbil",
        medium: "Medium Posts",
        contributions: "Open Source Contributions",
        resume: "Resume",
        bio: `A tech enthusiast developer. Experienced in microservice architecture, event-driven systems (Kafka, RabbitMQ), and observability (OpenTelemetry, Grafana, Jaeger). Interested in caching strategies and centralized logging/system monitoring.`,
        footer: "© 2025 Timur Turbil · Powered by HTML, CSS & JavaScript",
        resume_link: "https://drive.google.com/file/d/1qelGzpL82VapIknXIOSZdBSMIGIf8dQl/view?usp=sharing"
    },
    tr: {
        name: "Timur Turbil",
        medium: "Medium Yazıları",
        contributions: "Açık Kaynak Katkıları",
        resume: "Özgeçmiş",
        bio: `Teknoloji meraklısı bir geliştirici. Mikroservis mimarisi, event-driven sistemler (Kafka, RabbitMQ) ve gözlemlenebilirlik (OpenTelemetry, Grafana, Jaeger) konularında deneyim sahibidir. Caching stratejileri ve merkezi loglama/sistem izleme konularına ilgi duymaktadır.`,
        footer: "© 2025 Timur Turbil · HTML, CSS & JavaScript ile güçlendirilmiştir",
        resume_link: "https://drive.google.com/file/d/1qelGzpL82VapIknXIOSZdBSMIGIf8dQl/view?usp=sharing"
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

function renderRoute() {
    if (window.location.hash === "#graduation") {
        window.location.href = "graduation_file.pdf";
    }
}

window.addEventListener("hashchange", renderRoute);

// İlk yüklemede güncelle
updateLanguage();
renderRoute();
