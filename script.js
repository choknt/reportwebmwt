document.addEventListener("DOMContentLoaded", function() {
    // สุ่มภาพพื้นหลัง
    const images = ["img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg"];
    document.body.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;

    // ฟังก์ชันส่งฟอร์ม
    document.getElementById("reportForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const submitButton = document.querySelector(".submit-btn");
        
        // เปลี่ยนปุ่มเป็นสถานะกำลังส่ง
        submitButton.textContent = "กำลังส่ง...";
        submitButton.disabled = true;

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        }).then(response => {
            if (response.ok) {
                form.style.display = "none";
                document.getElementById("thankYouMessage").style.display = "block";
            } else {
                alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
            }
        }).catch(error => {
            alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }).finally(() => {
            // คืนค่าปุ่มหลังจากส่งเสร็จ
            submitButton.textContent = "ส่งรายงาน";
            submitButton.disabled = false;
        });
    });
});