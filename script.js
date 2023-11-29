    document.addEventListener('DOMContentLoaded', function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var total = 0;
                checkboxes.forEach(function (cb) {
                    if (cb.checked) {
                        total += parseInt(cb.getAttribute('data-valor')) || 0;
                    }
                });

                document.getElementById('total').textContent = 'Total: R$' + total;
            });
        });
    });
