$(document).ready()
{
    $('.get-regions').on('click', function f() {
        event.preventDefault();
        $('.regions-modal').addClass('active');
    });
    $('.close-regions').on('click', function () {
        event.preventDefault();
        $('.regions-modal').removeClass('active');
    });
}
function getImgModal(e) {
    event.preventDefault();
    var urlImg = e.getAttribute('data-url');
    $('#modalImg__img').attr('src', urlImg);
    $('#modalImg').modal('show');
}

$('#camera-modal-link').bind('click', function () {
    $('#camera-modal').modal('show');
})

// Код для модалок
// $("a[data-toggle='modal']").bind("click", function () {
//     var id = $(this).attr('data-id');
//     $.ajax({
//         url: "test",
//         cache: false,
//         data: {id: id},
//         type: "GET",
//         success: function (html) {
//             $('.modal__content').html(html);
//         }
//     });
// });
