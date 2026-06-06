// ====================================
// STILL WORTH IT
// JAVASCRIPT
// ====================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================
    // CONTADORES
    // ======================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = parseInt(counter.dataset.target);

        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            if (count < target) {

                count += increment;

                if (count > target) {
                    count = target;
                }

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

});


// ======================
// MODAL
// ======================

function openModal(title, description, instructor) {

    document.getElementById("modal").style.display = "block";

    document.getElementById("modal-title").innerText = title;

    document.getElementById("modal-description").innerText = description;

    document.getElementById("modal-instructor").innerText =
        "Mentor: " + instructor;

}

function closeModal() {

    document.getElementById("modal").style.display = "none";

}

window.onclick = function (event) {

    const modal = document.getElementById("modal");

    if (event.target == modal) {

        modal.style.display = "none";

    }

}
