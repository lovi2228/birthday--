const startBtn = document.getElementById("startBtn");
const lightsBtn = document.getElementById("lightsBtn");
const decorBtn = document.getElementById("decorBtn");
const messageBtn = document.getElementById("messageBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const bgMusic = document.getElementById("bgMusic");
const musicNote = document.getElementById("musicNote");
const photosSection = document.getElementById("photosSection");
const birthdayMessage = document.getElementById("birthdayMessage");

const friendName = document.getElementById("friendName").textContent;
document.getElementById("friendName2").innerText = friendName;
document.getElementById("friendName3").innerText = friendName;

startBtn.addEventListener("click", async () => {
  title.classList.add("visible");
  subtitle.classList.add("visible");

  try {
    await bgMusic.play();
    musicNote.style.display = "none";
  } catch {
    musicNote.style.display = "block";
  }

  lightsBtn.disabled = false;
  startBtn.disabled = true;
});

lightsBtn.addEventListener("click", () => {
  document.body.classList.add("lights-on");
  decorBtn.disabled = false;
  lightsBtn.disabled = true;
});

decorBtn.addEventListener("click", () => {
  document.body.classList.add("decorated");

  photosSection.classList.add("visible-flex");
  setTimeout(() => photosSection.classList.add("animate-in"), 20);

  messageBtn.disabled = false;
  decorBtn.disabled = true;
});

messageBtn.addEventListener("click", () => {
  birthdayMessage.classList.add("show");
  messageBtn.disabled = true;
});
