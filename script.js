
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
      "Perfect for beginners who want to build a strong foundation and become comfortable using English in everyday situations.",
    topics: [
      "Basic grammar",
      "Everyday vocabulary",
      "Greetings and introductions",
      "Daily conversations",
      "Speaking confidence"
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
      "For learners who want to communicate confidently in professional situations, interviews and English tests.",
    topics: [
      "Advanced vocabulary",
      "Professional communication",
      "Interview communication",
      "Presentation and discussion skills",
      "English test preparation"
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