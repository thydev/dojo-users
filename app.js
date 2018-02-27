$(document).ready(function(){
    $('form').submit(function(){
        console.log($('#firstname').val());
        console.log($('#lastname').val());
        console.log($('#email').val());
        console.log($('#contact').val());
        console.log("submitted");
        var html_row = "<tr>"
                        + "<td>" + $('#firstname').val() + "</td>"
                        + "<td>" + $('#firstname').val() + "</td>"
                        + "<td>" + $('#email').val() + "</td>"
                        + "<td>" + $('#contact').val() + "</td>"
                        + "</tr>";
        $('table').append(html_row);
        return false;
    });
});