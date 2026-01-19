<script>
function kiemTraEmail() {
    var email = document.getElementById("email").value;
    var thongbao = document.getElementById("thongbao");

    // Biểu thức kiểm tra email có đuôi
    var emailHopLe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailHopLe.test(email)) {
        thongbao.style.color = "green";
        thongbao.innerHTML = "Email hợp lệ!";
        return true; // cho gửi form
    } else {
        thongbao.style.color = "red";
        thongbao.innerHTML = "Email không hợp lệ. Vui lòng nhập email có đuôi!";
        return false; // chặn gửi form
    }
}
</script>
