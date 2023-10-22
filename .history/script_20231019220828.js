<script>
const formSteps = document.querySelectorAll(".form-step input");

formSteps.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (index + 1 < formSteps.length) {
                formSteps[index + 1].focus();
            }
        }
    });
});
</script>