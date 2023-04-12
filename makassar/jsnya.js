// menyimpan valuenya
function sape() {
    let nama = $('#nama').val();
    let alamat = $('#alamat').val();
    let phone = $('#phone').val();

    if (nama === '' || alamat === '' || phone === '') {
        alert('gak boleh kosong')
    }
    else {
        let temp_html = `<div class="card">
    <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${nama} (${phone})</p>
            <footer class="blockquote-footer">${alamat}</footer>
        </blockquote>
    </div>
</div>`;
        $('#comment-list').append(temp_html);
        alert('Good')
       
    }
}

// TOMBOL button random
function comment() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            let nmrandom = data['results'];
            let temp =`<div class="card">
    <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${nmrandom[0]['name']['first']} (${nmrandom[0]['phone']}) </p>
                <footer class="blockquote-footer"><p>${nmrandom[0]['location']['city']}</p></footer>
        </blockquote>
    </div >
</div >`;
            $('#comment-list').append(temp);
            alert('berhasil')
        }
    });
};

// coding json temperatur makassar
$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'http://spartacodingclub.shop/sparta_api/weather/makassar',
        data: {},
        success: function (response){
            let temp = response['city']['temp']
            let clound = response['clouds']
            $('#city').text(response['city']);
            $('#temp').text(response['temp']);
            $('#clouds').text(response['clouds']);

        }

    });
});

