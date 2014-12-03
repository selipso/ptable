//Do not include alerts
$(document).ready(function(){
    //$('div p').click(function(){
    //    $('div p').fadeOut('slow');
    $('body').css('font-size',$(window).height()/100)
    $('.element').click(function(){
        $('#infocell').hide(100, function(){
            $('#infocell').show(200);
            });
        $('#name').html(this.id);
        var number = names.indexOf(this.id) + 1;
        if (number !== -1) {
            var element = elementsarray[number];
            $('#en').html("Electronegativity: " + String(element.electronegativity));
            $('#symbol').html(element.element_symbol);
            $('#symbol').attr('class', element.state);
            $('#category').html("Atomic mass: " + element.atomic_mass + " g/mol" + "<br>" + "Common ions: " + element.oxidation_state + "<br>" + element.category_name);
            $('#econfig').html(element.getElectronConfiguration());
            $('#radius').html("Covalent radius: " + element.atomic_radius + ' pm');
            $('#infocell').attr('class', element.category);
            $('#ieunits').html("(electron volts)<br>1<sup>st</sup>: " + element.first_ionization_energy + "<br>2<sup>nd</sup>: " + element.second_ionization_energy);
            $('#ie3').html("3<sup>rd</sup>: " + element.third_ionization_energy);
        };
    });
    $('.element').hover(function(){
        $(this).css('border-color', 'blue');
        $(this).css('opacity', '0.7');
        },
    function() {
        $(this).css('border-color', 'black');
        $(this).css('opacity', '1.0');
    });
});
//$(document).ready(function(){
//    $('div').click(function(){
//        $('div').fadeOut('slow');
//    });
//});