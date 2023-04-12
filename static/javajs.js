$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'http://spartacodingclub.shop/sparta_api/weather/makasssar',
        data: {},
        success: function (response) {
            let temp = response['city']['temp']
            let awan = response['clouds']
            $('#city').text(response['city']);
            $('#temp').text(response['temp']);
            $('#clouds').text(response['clouds']);

        }
    });
});
