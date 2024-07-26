document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll("#timeline-bar-container li");
    const sections = document.querySelectorAll(".section-content");
    const lineProcess = document.getElementById("line-process");

    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            // Remove active class from all steps and sections
            steps.forEach(step => step.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Add active class to the clicked step and the corresponding section
            step.classList.add("active");
            sections[index].classList.add("active");

            // Update the width of progress line
            const lineWidth = ((index + 1) / steps.length) * 100 + "%";
            lineProcess.style.width = lineWidth;
        });
    })
})