const port = 3000;
const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("dotenv").config()


const { Telegraf } = require("telegraf");
const { Json } = require("sequelize/lib/utils");
const botToken = process.env.TELEGRAF_TOKEN
const bot = new Telegraf(botToken) 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// به صورت لین هستش

// bot.start((ctx) => {
//     // ctx.reply("hello")
//     ctx.telegram.sendMessage(ctx.chat.id, "hello")
//     // console.log(ctx.chat.id)
// })

// bot.help((ctx) => {
//     // ctx.reply("hellow")
//     ctx.telegram.sendMessage(ctx.chat.id, "help")
//     // console.log(ctx.chat.id)
// })

// bot.settings((ctx) => {
//     // ctx.reply("hellow") 
//     ctx.telegram.sendMessage(ctx.chat.id, "settings")
//     // console.log(ctx.chat.id)
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// به صورت لین هستش

// bot.command("start", (ctx) => {
//     // ctx.reply("hello")
//     ctx.telegram.sendMessage(ctx.chat.id, "hello")
//     // console.log(ctx.chat.id)
// })

// bot.command("help", (ctx) => {
//     // ctx.reply("hellow")
//     ctx.telegram.sendMessage(ctx.chat.id, "help")
//     // console.log(ctx.chat.id)
// })

// bot.command("settings", (ctx) => {
//     // ctx.reply("hellow") 
//     ctx.telegram.sendMessage(ctx.chat.id, "settings")
//     // console.log(ctx.chat.id)
// })


// bot.command("image", (ctx) => {
//     // const imagePath = path.join(__dirname, "Hat3.jpg")
//     // const image = fs.readFileSync(imagePath)
//     // console.log(fs.createReadStream(path.join(__dirname, "Hat3.jpg")))
//     // ctx.sendPhoto(ctx.chat.id, JSON.stringify(image))  
//     ctx.sendPhoto({
//         source: fs.createReadStream(path.join(__dirname, "Hat3.jpg"))
//     }, {
//         // reply_to_message_id: ctx.message.message_id // برای ارسال هدر همراه با عکس
//         reply_to_message_id: ctx.message.message_id // برای ارسال هدر همراه با عکس
//     })  
// })


// bot.command("chatAction", (ctx) => { 
//     // ctx.sendChatAction("upload_photo")
//     // ctx.sendChatAction("upload_video")
//     // ctx.sendChatAction("upload_voice")
//     // ctx.sendChatAction("record_video")
//     ctx.sendChatAction("typing")

//     ctx.sendMessage("chatAction")   
// })



// bot.command("media", (ctx) => { 
//     ctx.sendMessage("chatAction")   
//     // ctx.sendAudio()   
//     // ctx.sendContact()   
//     // ctx.sendDocument()   
//     // ctx.sendGame()   
//     // ctx.sendPhoto()   
//     // ctx.sendSticker()   
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// به صورت لین هستش

// bot.command(["start", "help", "settings"], (ctx) => {
//     // ctx.reply("hellow") 
//     ctx.reply("start, help, settings")
//     // console.log(ctx.chat.id)
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// به صورت متن هستش

// bot.hears("name", (ctx) => { // میتونیم رجکس هم قرار بدیم
//     // ctx.reply("hellow") 
//     ctx.reply("please enter name")
//     // console.log(ctx.chat.id)
// })



// const url = `https://api.telegram.org/bot${botToken}/deleteMessage`;
// const currentTime = Math.floor(Date.now() / 1000);

// bot.hears(["zesht", "rakik", "bad"], (ctx) => { // میتونیم رجکس هم قرار بدیم
    // const data = {
    //   chat_id: ctx.chat.id,
    //   message_id: ctx.message.message_id
    // };


    
    // axios.get(`https://api.telegram.org/bot${botToken}/getMessage`, {
    //     params: {
    //         chat_id: ctx.chat.id,
    //         message_id: ctx.message.message_id
    //     }
    //   })
    //   .then(response => {
    //     const messageTimestamp = response.data.result.date;
    //     console.log(response.data)
    //     if (currentTime - messageTimestamp <= 172800) {
    //       // Message is within the last 48 hours, proceed with deletion
    //       const data = {
    //         chat_id: ctx.chat.id,
    //         message_id: ctx.message.message_id
    //       };
    
    //       axios.post(url, data)
    //         .then(response => {
    //           console.log('Message deleted successfully!');
    //         })
    //         .catch(error => {
    //           console.error('Failed to delete message:', error.response.data);
    //         });
    //     } else {
    //       console.error('Cannot delete message older than 48 hours or not sent by the bot.');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Failed to retrieve message details:', error.response.data);
    //   });



    // axios.post(url, data)
    // .then(response => {
    //   console.log('Message deleted successfully!', response);
    // })
    // .catch(error => {
    //   console.error('Failed to delete message:', error.response.data); 
    // });



    // ctx.deleteMessage() 
    // ctx.reply("#bi_adab_nabaashim") 
// })



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// event on یه سری از رویداد هارو میشه باهاش کنترل کرد

// bot.on("text", (ctx) => {
//     ctx.reply("text")
// })

// bot.on("photo", (ctx) => {
//     ctx.reply("photo")
// })

// bot.on("audio", (ctx) => {
//     ctx.reply("audio")
// })

// bot.on("voice", (ctx) => {
//     ctx.reply("voice")
// })

// bot.on("video", (ctx) => {
//     ctx.reply("video")
// })

// bot.on("sticker", (ctx) => {
//     console.log(ctx.message.sticker)
//     ctx.reply(ctx.message.sticker.emoji)
// })

// bot.on("new_chat_photo", (ctx) => {
//     ctx.reply("profile changed")
// })

// bot.on("new_chat_members", (ctx) => {
//     console.log(ctx.message.new_chat_member.first_name)
//     ctx.reply(`welcome ${ctx.message.new_chat_member.first_name}`)
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// middleware

// bot.use((ctx, next) => {
//     // any checker
// })



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



bot.telegram.sendMessage(142620110, "can i help you?") 


bot.launch() 



app.listen(port, () => { 
    console.log(`app started on port ${port} \n http://localhost:${port}`) 
})