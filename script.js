function openCalculator(type) {
    alert("Redirecting to: " + type.charAt(0).toUpperCase() + type.slice(1) + " Calculator");
    // Replace below with actual page redirect later
    // window.location.href = type + ".html";
  }







function showTab(tabId) {
  const allTabs = document.querySelectorAll('.tab-button');
  const allSections = document.querySelectorAll('.calculator-section');

  allTabs.forEach(btn => btn.classList.remove('active'));
  allSections.forEach(sec => {
    sec.classList.remove('active');
    sec.classList.remove('fadeIn'); // reset animation class
  });

  event.target.classList.add('active');
  const targetSection = document.getElementById(tabId);
  targetSection.classList.add('active');
  targetSection.classList.add('fadeIn');
}









