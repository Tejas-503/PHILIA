const journalModal = document.querySelector("#journal-modal");
const journalModalImage = document.querySelector("#journal-modal-image");
const journalModalIndex = document.querySelector("#journal-modal-index");
const journalModalTitle = document.querySelector("#journal-modal-title");
const journalModalEnquiry = document.querySelector("#journal-modal-enquiry");
const journalDesignLinks = document.querySelectorAll(".journal-figure a");

function openJournalModal(link) {
  const image = link.querySelector("img");
  const designLabel = image.alt.replace("PHILIA ", "");
  const message = `Hi! I'm interested in ${designLabel}. Is it available?`;

  journalModalImage.src = image.src;
  journalModalImage.alt = image.alt;
  journalModalIndex.textContent = designLabel;
  journalModalTitle.textContent = "A closer look";
  journalModalEnquiry.href = `https://wa.me/919619113823?text=${encodeURIComponent(message)}`;
  journalModal.classList.add("is-open");
  journalModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("journal-modal-open");
  document.querySelector(".journal-modal-close").focus();
}

function closeJournalModal() {
  journalModal.classList.remove("is-open");
  journalModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("journal-modal-open");
  journalModalImage.src = "";
}

journalDesignLinks.forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  openJournalModal(link);
}));

journalModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-journal-modal]")) closeJournalModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && journalModal.classList.contains("is-open")) closeJournalModal();
});