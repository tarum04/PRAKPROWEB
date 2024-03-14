document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('RegistrationForm').addEventListener('submit', function(event){
        event.preventDefault();
        const inputs = [
            document.getElementById('name'),
            document.getElementById('email'),
            document.getElementById('password'),
            document.getElementById('confirm_password')
        ];
        
        let isValid = true 

        for(let input of inputs){
            // Memvalidasi setiap kolom apakah memiliki value atau tidak
            if(input.value.trim() === ""){ // Jika kolom kosong maka : 
                input.style.borderColor = 'red'; // Warna border akan berubah merah
                isValid = false; 
                // Memberikan notifikasi bahwa kolom tidak boleh kosong
                alert("Isian kolom tidak boleh kosong"); 
                break;
            }else{
                input.style.borderColor = '';
            }
        }
        const passwordInput = document.getElementById("password");
        
        // Validasi panjang password
        if(passwordInput.value.length < 8){
            passwordInput.style.borderColor = 'red';
            isValid = false;
            alert("Password tidak boleh kurang dari 8 karakter");
        }else{
            passwordInput.style.borderColor = '';
        }
        
        const confirmPassword = document.getElementById("confirm_password");
        // Validasi untuk konfirmasi password
        if(confirmPassword.value != passwordInput.value){
            confirmPassword.style.borderColor = 'red';
            passwordInput.style.borderColor = 'red';
            isValid = false;
            alert("Password tidak sama!");
        }else{
            confirmPassword.style.borderColor = '';
        }
        
        if(isValid){
            alert("Pendaftaran berhasil!");
        }
    });
});