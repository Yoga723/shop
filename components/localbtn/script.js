export default function initializeLocalButton() {
    if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", () => {
        const localBtn = document.getElementById("testLocal");
        if (localBtn) {
          localBtn.addEventListener("click", () => {
            console.log("Script local is clicked. Berfungsi");
          });
        }
      });
    }
  }
  