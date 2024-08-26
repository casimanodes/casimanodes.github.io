
// CHATBOT
const open_chatbot = document.querySelector('.chatbot');

// bot svg: 
const svg_open_chatbot = document.querySelector('.gg-bot');

// Close svg: 
const close_chatbot = document.querySelector('.gg-close-o');

const chatbot_seiten_container = document.querySelector('.chatbot_seiten_container');
const chatbot_menü_container = document.querySelector('.chatbot_menü_container')

let chatbot_opened = false;
const body = document.querySelector('body');

let mitarbeiter_antwort_opened = false;
let menü_opened = false;
let chatbot_site_opened = false;
let mitarbeiter_opened = false;

// klick events für chatbot content 
const menü = document.querySelector(".to_the_menü")
const chatbot = document.querySelectorAll(".to_the_chatbot")
const mitarbeiter = document.querySelector(".to_the_mitarbeiter")
const employee_acces = document.querySelector(".employee_acces")

// containers: 
const mitarbeiter_antwort_container = document.querySelector(".mitarbeiter_antwort_container")
const actual_menü = document.querySelector(".actual_menü")
const chatbot_answer_contianer = document.querySelector(".chatbot_answer_contianer")
const mitarbeiter_answer_contianer = document.querySelector(".mitarbeiter_answer_contianer")



// OPEN THE CHATBOT 
// Function to handle opening and closing of the chatbot
function toggleChatbot() {
  if (!chatbot_opened) {
    body.style.overflow = "hidden";
    open_chatbot.classList.add('expanded');
    chatbot_menü_container.style.display = "block";

    // Chatbot svg animation
    svg_open_chatbot.style.transform = 'rotate(180deg)';
    svg_open_chatbot.style.pointerEvents = "none";
    svg_open_chatbot.style.opacity = "0";

    setTimeout(() => {
      chatbot_seiten_container.style.opacity = "1";
      close_chatbot.style.opacity = "1";
      close_chatbot.style.transform = 'rotate(180deg)';
      close_chatbot.style.pointerEvents = "all";
    }, 300);

    chatbot_opened = true;
  } else {
    // Closing the chatbot
    open_chatbot.classList.remove('expanded');
    body.style.overflow = "auto";

    chatbot_seiten_container.style.opacity = "";
    chatbot_menü_container.style.display = "";

    mitarbeiter_antwort_container.style.display = "";
    actual_menü.style.display = "";
    chatbot_answer_contianer.style.display = "";
    mitarbeiter_answer_contianer.style.display = "";

    close_chatbot.style.transform = 'rotate(0deg)';
    close_chatbot.style.pointerEvents = "none";
    close_chatbot.style.opacity = "0";

    setTimeout(() => {
      svg_open_chatbot.style.opacity = "";
      svg_open_chatbot.style.pointerEvents = "";
      svg_open_chatbot.style.transform = 'rotate(0)';
      svg_open_chatbot.style.display = "block";
    }, 250);

    chatbot_opened = false;
  }
}

// Attach event listener to query selector
document.querySelector('.chatbot_icons').addEventListener('click', toggleChatbot);

// Add keyboard event listener (e.g., 'T' key for "Tastatur")
document.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === 'x') {  // Check if 'T' key is pressed
    toggleChatbot();
  }
});



// Antwortseite für miotarbeiter 
employee_acces.addEventListener('click', function(){

  // titleOfChatbot.innerHTML = "Mitarbeier Antwort"

  mitarbeiter_antwort_container.style.display = "flex"
  actual_menü.style.display = "none";
  chatbot_answer_contianer.style.display = ""
  mitarbeiter_answer_contianer.style.display = ""
});


// MENÜ SEITE 
menü.addEventListener('click', function(){
      // titleOfChatbot.innerHTML = "Menü"
      mitarbeiter_antwort_container.style.display = ""
      actual_menü.style.display = "block";
      chatbot_answer_contianer.style.display = ""
      mitarbeiter_answer_contianer.style.display = ""

});



// CHATBOT SEITE 
chatbot.forEach(chatbot => {
  chatbot.addEventListener('click', () => {

    // titleOfChatbot.innerHTML = "Chatbot Swym"
    mitarbeiter_antwort_container.style.display = ""
    actual_menü.style.display = "none";
    chatbot_answer_contianer.style.display = "flex"
    mitarbeiter_answer_contianer.style.display = ""
  });
});

// MITARBEITER SEITE 
mitarbeiter.addEventListener('click', function(){

  // titleOfChatbot.innerHTML = "Mitarbeiter Chat"
  mitarbeiter_antwort_container.style.display = ""
  actual_menü.style.display = "none";
  chatbot_answer_contianer.style.display = ""
  mitarbeiter_answer_contianer.style.display = "flex"
});


