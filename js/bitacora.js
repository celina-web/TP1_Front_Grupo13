document.addEventListener("DOMContentLoaded", () => {
    const btnEncore = document.getElementById("btn-encore");
    const backstagePass = document.getElementById("backstage-pass");

    if (btnEncore && backstagePass) {
        btnEncore.addEventListener("click", () => {
            const isExpanded = btnEncore.getAttribute("aria-expanded") === "true";
            
            if (isExpanded) {
                btnEncore.setAttribute("aria-expanded", "false");
                backstagePass.setAttribute("aria-hidden", "true");
                backstagePass.classList.remove("show");
            } else {
                btnEncore.setAttribute("aria-expanded", "true");
                backstagePass.setAttribute("aria-hidden", "false");
                backstagePass.classList.add("show");
            }
        });
    }
});
