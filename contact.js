document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group input, .form-group textarea, .form-group-full input, .form-group-full textarea');

    formGroups.forEach(input => {
        input.addEventListener('focus', function() {
            const label = this.parentElement.querySelector('label');
            label.style.transform = 'translateY(-25px)'; // Updated line
            label.style.fontSize = '12px';
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                const label = this.parentElement.querySelector('label');
                label.style.transform = 'none'; // Updated line
                label.style.fontSize = '15px';
            }
        });

        if (input.value !== '') {
            const label = input.parentElement.querySelector('label');
            label.style.transform = 'translateY(-25px)'; // Updated line
            label.style.fontSize = '12px';
        }
    });
});



