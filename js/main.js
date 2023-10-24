//main js

$('#audio-control').click(function() {
    if ($("#bauhausVideo").prop('muted')) {
        $("#bauhausVideo").prop('muted', false);
        $(this).text('turn sound off');

    } else {
        $("#bauhausVideo").prop('muted', true);
        $(this).text('turn sound on');
    }
});