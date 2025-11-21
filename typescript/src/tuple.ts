type HttpStatusCodeType = [number, string];

const goodStatus: HttpStatusCodeType = [200, "OK"];
const notFound: HttpStatusCodeType = [404, "ไม่พบข้อมูล"];
const badRequest: HttpStatusCodeType = [400, "คำขอไม่ถูกต้อง"];
const serverErrr: HttpStatusCodeType = [500, "Internal Server Error"];

console.log(goodStatus);
console.log(notFound);
console.log(badRequest);
console.log(serverErrr);
