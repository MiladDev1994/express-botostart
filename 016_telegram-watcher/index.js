const port = 3000;
const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("dotenv").config()
var nodemailer = require('nodemailer');

    // https://my.telegram.org/auth?to=apps

app.get("/telegram_watcher", async (req, res) => {




// function* myGenerator() {
//     console.log("step 1");
//     yield "Stop here"; // اینجا متوقف می‌شه
  
//     console.log("step 2");
//     yield "Stop again"; // دوباره متوقف می‌شه
  
//     console.log("step 3");
//   }
  
//   const gen = myGenerator();
//   console.log(gen.next().value); // خروجی: "Stop here"
//   console.log(gen.next().value); // خروجی: "Stop again"
//   console.log(gen.next().done);  // خروجی: true (تموم شد)






// const {TelegramClient} = require("telegram")
// const {StringSession} = require("telegram/sessions")
// const input = require("input")

// const apiId = 22466570;
// const apiHash = "6e2daed854edd26843c2c1c8d8d027fb";
// const session = new StringSession("");

// const client = new TelegramClient(session, apiId, apiHash, {
//     connectionRetries: 5,
//     useWSS: true, // use websocket
//     testServers: false // use telegram main server
// });

// (async () => {
//     console.log("Connecting to Telegram...");
//     await client.start({
//         phoneNumber: async () => await input.text("Enter your phone number: "),
//         password: async () => await input.text("Enter your password: "),
//         phoneCode: async () => await input.text("Enter the code you received: "),
//         onError: (err) => console.log(err),
//     });

//     console.log("✅ Logged in successfully!");

//     const userId = "+98 912 056 5752"; 
//     await client.sendMessage(userId, { message: "سلام! این پیام از طریق GramJS ارسال شده است. 🚀" });

//     console.log("✅ پیام ارسال شد!");
// })();







// برای ارسال پیام و فایل به سایر اکانت ها

const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const fs = require("fs");
const input = require("input");

const apiId = 22466570; // مقدار API ID خود را اینجا بگذار
const apiHash = "6e2daed854edd26843c2c1c8d8d027fb"; // مقدار API Hash خود را اینجا بگذار

// بررسی آیا فایل session ذخیره شده است یا نه
const sessionFile = "session.txt";
const sessionString = fs.existsSync(sessionFile) ? fs.readFileSync(sessionFile, "utf8") : "";

const client = new TelegramClient(new StringSession(sessionString), apiId, apiHash, {
    connectionRetries: 5,
    useWSS: true, // استفاده از WebSocket
});

(async () => {
    console.log("🔗 Connecting to Telegram...");
    await client.start({
        phoneNumber: async () => await input.text("Enter your phone number: "),
        password: async () => await input.text("Enter your password: "),
        phoneCode: async () => await input.text("Enter the code you received: "),
        onError: (err) => console.log(err),
    });

    console.log("✅ Logged in successfully!");

    // ذخیره نشست (session) در فایل
    fs.writeFileSync(sessionFile, client.session.save(), "utf8");
    console.log("💾 Session saved!");

    // ارسال پیام به کاربر خاص
    const userId =  "+98 903 719 5597"; // نام کاربری یا آیدی عددی کاربر
    // await client.sendMessage(userId, { message: "سلام! این پیام از طریق GramJS ارسال شده است. 🚀" });


    const filePath = "E:\\Lerning\\Programing\\Js\\express\\telegram-api\\img.png"; // مسیر عکس
    // ارسال عکس
    await client.sendFile(userId, {
        file: filePath,
        caption: 
        "سلام و وقت بخیر\n \n" + 
        "در رابطه با موضوع ارسال پیام و عکس در تلگرام با استفاده از اکانت شخصی ، یک api پیدا کردم که این امکان رو برای ما محیا میکنه. \n \n" + 
        "چند بار تستش کردم و به نظر کندتر از ربات هستش و فعلا نمیتشه بهش اعتماد کرد. \n \n" +
        "برای اتصال هم به مانند ربات به vpn نیاز داره و از این نظر، شرایطش با ربات کاملا برابر هست. \n \n" + 
        "من این ابزار رو کامل نمیشناسم ولی احساس میکنم که ربات امکانات بیشتری دراختیارمون میذاره و تعامل با کاربر میتونه دوطرفه باشه. \n \n" +
        "درحال حاضر ما اسکرین شات های مربوط به بستن هر روز رو به صورت دسته بندی شده داخل سرور ذخیره میکنیم و مشکلی از این بابت نداریم. \n \n" +
        "البته تا روزی که سرور سرپا باشه 😊 \n \n" + 
        "اگر فکر میکنین لازمه که به این ابزار جدید سوییچ کنیم ، بفرمایین من کاراشو انجام بدم\n \n \n" + 
        "این پبام هم با استفاده از ابزار جدید و Node.js برای آقایان سجودی و توحیدی ارسال میشه 🚀"
    });


    console.log("✅ پیام ارسال شد!");
})();





// // برای واچ کردن پیام های دریافتی

// const { TelegramClient } = require("telegram");
// const { StringSession } = require("telegram/sessions");
// const { NewMessage } = require("telegram/events");
// const fs = require("fs");

// const apiId = 22466570;
// const apiHash = "6e2daed854edd26843c2c1c8d8d027fb";
// const sessionFile = "session.txt";
// const sessionString = fs.existsSync(sessionFile) ? fs.readFileSync(sessionFile, "utf8") : "";

// const client = new TelegramClient(new StringSession(sessionString), apiId, apiHash, {
//     connectionRetries: 5,
//     useWSS: true,
// });

// (async () => {
//     console.log("🔗 Connecting to Telegram...");
//     await client.connect();
//     console.log("✅ Connected!");

//     // ثبت لیسنر برای دریافت پیام‌های جدید
//     client.addEventHandler(async (event) => {
//         const message = event.message;
//         const sender = await message.getSender();
//         console.log(`new message from : ${sender.username || sender.id}: ${message.text}`);
        
//         // اگر پیام حاوی یک عکس باشد
//         if (message.media) {
//             console.log("File received");
//         }
//     }, new NewMessage({}));

//     // console.log("👀 منتظر دریافت پیام‌ها هستم...");
// })();
  
    res.send('respond with a resource');
})

app.listen(port, () => { 
    console.log(`app started on port ${port} \n http://localhost:${port}`) 
})


