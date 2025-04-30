//Written by ChatGPT
window.addEventListener('DOMContentLoaded', () => {
    // Retrieve the saved language from localStorage (defaults to 'en' if none is found)
    const lang = localStorage.getItem('lang') || 'en'; // 'en' is the default language
    window.currentLang = lang; // Set the global language variable
    applyTranslation(lang); // Apply the language to the page
});

// Function to set and save the language
function setLanguage(lang) {
    localStorage.setItem('lang', lang); // Save the language to localStorage
    window.currentLang = lang; // Update the global variable
    applyTranslation(lang); // Apply the language to the page
}

// Function to change text based on the selected language
function applyTranslation(lang) {
    if (lang === 'es') {
        document.getElementById('erisBio').innerText = 'Eris Blair es de Speedway, Indiana, y actualmente es un senior en high school. Ella siempre ha tenido una pasión por aprender sobre las lenguas y culturas, lo que la empujó a fundar Interpreting America. El próximo año, asistirá a una universidad para estudiar Lingüística y Ciencias de la Computación, esperando usar su pasión por las lenguas para crear traductores digitales mejores y modelos de inteligencia artificial como una lingüística computacional. Ella es una voluntaria para el programa de Pathway to Literacy de Immigrant Welcome Center, que provee clases de inglés como una lengua nueva para los estudiantes novatos con seis años o menos de educación formal. En Speedway, ella es la valedictorian de su clase, presidenta del club Girls Who Code, la Vicepresidenta de National Honor Society, y la Historiadora del International Thespian Society. Además, Eris participa en Spell Bowl, Academic Bowl, Sociedad Honoraria Hispánica, teatro, club de libros, club de español, Model United Nations, y la banda. Espera que este sitio web sea útil, y le encantaría hablar con alguien sobre su lengua y cultura. La puedes contactar en erisolive@gmail.com. '; // Spanish translation
        document.getElementById('alisaBio').innerText = 'Alisa Yarling es de Speedway, Indiana y actualmente es un senior en high school. Ella estudió fuera en la India durante su undécimo grado con una beca de la Youth Exchange & Study (YES) Abroad Program. Ella también es una voluntaria para ENGin, una organización que empareja a los hablantes nativos de inglés con los ucranios para mejorar sus habilidades de hablar inglés. Motivada a seguir interactuando con gente de otras culturas, Alisa se unió con Interpreting América durante su duodécimo año. El año próximo, asistirá a una universidad para estudiar Relaciones Internacionales y Bioquímica. En Speedway, Alisa también es la Capitana del Equipo de Nadar e involucrada en Key Club, club de senderismo, club de español, gobierno estudiantil, y Academic Bowl. Afuera de la escuela, ella es una estudiante de piano y baile latina. ¡Le encantaría hablar con alguien sobre sus lenguas, estudiar fuera, o algo más interesante! La puede contactar en ayarling@icloud.'
    } 
    else if (lang === 'hc') {
        document.getElementById('title').innerText = 'Hello World'; // Haitian Creole translation
    }
}