const {createReadStream} = require("fs")
const path = require("path")
const {Telegraf} = require("telegraf")
require("dotenv").config()

const bot = new Telegraf(process.env.TELEGRAF_TOKEN)

bot.command("crypto", (ctx) => {
    bot.telegram.sendMessage(ctx.chat.id, "select item", {
        reply_to_message_id: ctx.message.message_id,
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "one", callback_data: "One"},
                    {text: "tow", callback_data: "Tow"}
                ],
                [
                    {text: "three", callback_data: "Three"},
                    {text: "four", callback_data: "Four"}
                ],
                [
                    {text: "five", callback_data: "Five"},
                ]
            ]
            // keyboard: [
            //     [
            //         {text: "one", callback_data: "One"},
            //         {text: "tow", callback_data: "Tow"}
            //     ],
            //     [
            //         {text: "three", callback_data: "Three"},
            //         {text: "four", callback_data: "Four"}
            //     ],
            //     [
            //         {text: "five", callback_data: "Five"},
            //     ]
            // ]
        }
    })
})

bot.action("One", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("clicked One")
})
bot.action("Tow", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("clicked Tow")
})
bot.action("Three", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("clicked Three")
})
bot.action("Four", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("clicked Four")
})
bot.action("Five", (ctx) => {
    ctx.answerCbQuery()
    ctx.reply("clicked Five")
})



bot.launch() 