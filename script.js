function Login() {
    var done = 0;
    var username = Document.login.username.value;
    var username = Document.login.password.value;

    if (username == "himasi" && password == "himasi"){
        if(confirm("apakah anda ingin login?")){
            window.location.href = "https://github.com/Rohayatii/mabim-himasi";
        } else {
            alert("mambatalkan login !");
        }
    } else{
        if(done==0){
            alert("username/password salah!");
        }
    }
}