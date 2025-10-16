// สร้าง Promise
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
// downloading(url1).then((result) => {
//   console.log(result);
//   downloading(url2).then((result) => {
//     console.log(result);
//     downloading(url3).then((result) => {
//       console.log(result);
//     });
//   });
// });

downloading(url1)
  .then((result) => {
    console.log(result);
    return downloading(url2);
  })
  .then((result) => {
    console.log(result);
    return downloading(url3);
  })
  .then((result) => {
    console.log(result);
    return downloading(url4);
  })
  .then((result) => {
    console.log(result);
  });
