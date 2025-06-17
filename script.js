function callUrlInBackground() {
    const urlToCall = "https://innovation.asefa.co.th/iot/D_test/callURLlocal.php";

    fetch(urlToCall)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("URL ถูกเรียกสำเร็จในเบื้องหลัง:", data);
            // ถ้าคุณอยากให้มี alert บอกว่าทำงานเสร็จแล้ว ก็เพิ่มตรงนี้ได้
            // alert("URL ถูกเรียกในเบื้องหลังแล้ว!");
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาดในการเรียก URL:", error);
            // alert("เกิดข้อผิดพลาดในการเรียก URL!");
        });
}

// ฟังก์ชันเดิมที่คุณมี แต่เปลี่ยนไปเรียก callUrlInBackground แทน
function showAlert() {
    alert("คุณคลิกปุ่มแล้ว!"); // ข้อความแจ้งเตือนเดิม (ยังคงอยู่ได้)
    callUrlInBackground(); // เรียกฟังก์ชันที่ส่งคำขอแบบเบื้องหลัง
}