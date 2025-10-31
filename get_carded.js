

const https = require('https');

const data = JSON.stringify({
  name: 'hari_seldon',
  email: 'aryan.iitgn@gmail.com'
//   date: '2025-10-11 16:21:50'
});

const options = {
  hostname: 'workwithus.lucioai.com',
  path: '/get-carded',
  method: 'POST',
  headers: {
    'Origin': 'lucioai.com',
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJ5YW4iLCJlbWFpbCI6ImFyeWFuLmlpdGduQGdtYWlsLmNvbSIsImRhdGUiOiIyMDI1LTEwLTExIDE2OjIxOjUwIn0.6f2frDJJrJLvShsYL4Rx6jxnblqlDfofJ3A_OIaIX0w',
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => console.log(body));
});

req.on('error', (error) => console.error(error));
req.write(data);
req.end();