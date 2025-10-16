// ทบทวน Callback Function

// function calculate(x, y,callback) {
//     console.log('กำลังคำนวณ....');

//   setTimeout(() => {
//     const sum = x+y
//     callback(sum)
// }, 3000);

// }

// function display(result) {
//   console.log(`ผลบวก =  ${result}`);
// }
// calculate(100, 50,display);

//เขียนโปรแกรมดาวโหลดไฟล์

const url1 = "pubordee.dev/file1.json";
const url2 = "pubordee.dev/file2.json";
const url3 = "pubordee.dev/file3.json";
const url4 = "pubordee.dev/file4.json";
const url5 = "pubordee.dev/file5.json";

function downloading(url, callback) {
  console.log(`กำลังโหลด ${url} `);
  setTimeout(() => {
    callback(url);
  }, 3000);
}

const complete = (result) => {
  console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
  downloading(url2, function (result) {
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
    downloading(url3, function (result) {
      console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
      downloading(url4, function (result) {
        console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
      });
    });
  });
};

downloading(url1, complete);
