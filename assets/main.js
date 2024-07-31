$(document).ready(function() {
    $('input[type="checkbox"]').change(function() {
        let total = 0;
        let details = '';
        $('input[type="checkbox"]:checked').each(function() {
            const itemLabel = $(this).siblings('label').text();
            const itemPrice = parseInt($(this).val());
            total += itemPrice;
            details += `<p>${itemLabel}: $${itemPrice}</p>`;
        });
        $('#total-details').html(details);
        $('#total-amount').html(`Total: $${total}`);
    });
});
