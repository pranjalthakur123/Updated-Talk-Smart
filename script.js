
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}


const courseData = {
  basic: {
    level: "Level 01",
    title: "Basic English",
    description:
      "Basic course is essentially meant for those students who are new to English Language. Though they may have studied in public schools, they have poor knowledge of grammar. These students often suffer from some fundamental problems and form sentences with incorrect tenses, or have a weak vocabulary.",
    topics: [
      "Improve accuracy in Grammar",

      "Expand vocabulary",

      "Develop reading skills",

      "Correct pronunciation",

      "Art of Conversation",

      "Audio sessions for effective listening",

      "Communication in English in day to day situations"
    ]
  },

  intermediate: {
    level: "Level 02",
    title: "Intermediate English",
    description:
      "For learners who already understand basic English and want to improve their fluency and communication skills.",
    topics: [
      "Advanced grammar",
      "Vocabulary building",
      "Fluent conversations",
      "Expressing opinions",
      "Workplace communication"
    ]
  },

  advanced: {
    level: "Level 03",
    title: "Advanced English",
    description:
      "This course is meant for students who have fair knowledge of grammar and vocabulary but are hesitant and under confident. They may also incorrectly pronounce words.",
    topics: [
      "Advance Grammar for construction & usage of complex sentences",
      "Advance vocabulary",
      "Appropriate usage of idiomatic phrases",

      "Improve public speaking skills",

      "Extempore session, group activities & flip overs",

      "Audio-visual aids"
    ]
  }
};


function openCourse(course) {

  const data = courseData[course];

  document.getElementById("modalLevel").textContent = data.level;
  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalDescription").textContent = data.description;

  const topics = document.getElementById("modalTopics");

  topics.innerHTML = "";

  data.topics.forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic;
    topics.appendChild(li);
  });

  document.getElementById("courseModal").style.display = "flex";
}


function closeCourse() {
  document.getElementById("courseModal").style.display = "none";
}


window.addEventListener("click", function(event) {

  const modal = document.getElementById("courseModal");

  if (event.target === modal) {
    closeCourse();
  }

});