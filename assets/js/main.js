function updateLoadingInfo() {
  const name = document.getElementById("profile.name");
  name.innerText = "Carregando...";

  const job = document.getElementById("profile.job");
  job.innerText = "Carregando...";

  const location = document.getElementById("profile.location");
  location.innerText = "Carregando...;";

  const phone = document.getElementById("profile.phone");
  phone.innerHTML = "Carregando...";

  const email = document.getElementById("profile.email");
  email.innerHTML = "Carregando...";
}

function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;

  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;

  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;

  const phone = document.getElementById("profile.phone");
  phone.innerHTML = `<a href="https://api.whatsapp.com/send/?phone=5516994156294&text&type=phone_number&app_absent=0" target="_blank">${profileData.phone}</a>`;

  const email = document.getElementById("profile.email");
  email.innerHTML = `<a href="mailto:${profileData.email}">${profileData.email}</a>`;
}

function updateSkill(profileData) {
  const softSkills = document.getElementById("profile.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");

  const hardSkills = document.getElementById("profile.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map((skill) => `<li>${skill.name}</li>`)
    .join("");
}

function updateEducation(profileData) {
  const language = document.getElementById("profile.lang");
  language.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updatePortfolio(profileData) {
  const portfolioList = document.getElementById("portfolio.list");
  portfolioList.innerHTML = profileData.portfolio
    .map((portfolio) => {
      return `<div class="portfolio-item">
        <strong class="github-icon">${portfolio.name}</strong>
        <a href="${portfolio.url}" target="_blank" class="github-link">
          ${portfolio.url}
        </a>
      </div>`;
    })
    .join("");
}

function updateProfissionalExperience(profileData) {
  const profissionalExperience = document.getElementById(
    "professional-experience-list"
  );

  profissionalExperience.innerHTML = profileData.experiencias
    .map((experience) => {
      return `
      <div class="job">
        <h3>${experience.cargo}</h3>
        <p>${experience.periodo}</p>
        <p>${experience.descricao}</p>
      </div>
    `;
    })
    .join("");
}

(async () => {
  updateLoadingInfo();
  const profileData = await fetchProfile();
  updateProfileInfo(profileData);
  updateSkill(profileData);
  updateEducation(profileData);
  updatePortfolio(profileData);
  updateProfissionalExperience(profileData);
})();
