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
            console.log("URL ถูกเรียกสำเร็จ:", data);
            alert("URL ถูกเรียกในเบื้องหลังแล้ว!");
        })
        .catch(error => {
            console.error("เกิดข้อผิดพลาดในการเรียก URL:", error);
            alert("เกิดข้อผิดพลาดในการเรียก URL!");
        });
}

function showAlert() {
    // alert("คุณคลิกปุ่มแล้ว!"); 
    callUrlInBackground(); 
}
