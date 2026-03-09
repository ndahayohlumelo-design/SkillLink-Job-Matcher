const matchBtn = document.getElementById("matchBtn");
const resultsDiv = document.getElementById("results");

matchBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const skillCheckboxes = document.querySelectorAll(".skills-checkboxes input[type='checkbox']:checked");

    if (!name) {
        resultsDiv.innerHTML = "<p style='color:red;'>Please enter your name!</p>";
        return;
    }

    if (skillCheckboxes.length === 0) {
        resultsDiv.innerHTML = "<p style='color:red;'>Please select at least one skill!</p>";
        return;
    }

    // Match jobs
    let jobs = [];
    skillCheckboxes.forEach(skill => {
        switch(skill.value) {
            case "java":
                jobs.push("Junior Software Developer");
                break;
            case "web":
                jobs.push("Frontend Web Developer");
                break;
            case "data":
                jobs.push("Data Analyst");
                break;
            case "business":
                jobs.push("Business Analyst");
                break;
            case "marketing":
                jobs.push("Marketing Assistant");
                break;
        }
    });

    // Remove duplicates
    jobs = [...new Set(jobs)];

    // Show results
    resultsDiv.innerHTML = `
        <h3>Hello ${name}!</h3>
        <p>Based on your skills you could apply for:</p>
        <ul>${jobs.map(job => `<li>${job}</li>`).join('')}</ul>
    `;

    // Smooth scroll to results
    resultsDiv.scrollIntoView({ behavior: "smooth" });
});
