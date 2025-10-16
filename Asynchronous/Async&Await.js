const connect = true;
const url1 = "pubordee.dev/file1.json";
const url2 = "pubordee.dev/file2.json";
const url3 = "pubordee.dev/file3.json";
const url4 = "pubordee.dev/file4.json";
const url5 = "pubordee.dev/file5.json";
const downloading = (url) => {
  console.log(`กำลังโหลดไฟล์จาก ${url}`);

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (connect) {
        resolve(`โหลด ${url} เรียบร้อย`);
      } else {
        reject("เกิดข้อผิดพลาด");
      }
    }, 3000);
  });
};

// Async & Await

const start = async () => {
  console.log(await downloading(url1));
  console.log(await downloading(url2));  
};

start();
