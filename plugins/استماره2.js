let handler = async (m, { conn, command, text }) => {
let love = `
『 نرحب بجميع الاوتاكو 』
✯≼══━━﹂🏮﹁━━══≽✯



*⟽ ⎎مۘــمۘــيــزا̍ت ا̍ڵــنــقـ📜ـٰابة*
*┇مشرفين عادلين👨‍⚖️*               
*┇اعضا محترمين🪇*
*┇فعاليات يوميه🎮*   
*┇إعطاء إشراف لمن يستحقه🎗️*
*┇تصفيه اسبوعيه للأصنام👤*
✯≼══━━﹂🏮﹁━━══≽✯
*رابط الاستقبال:↶*
*『  』*

*┇🏮 من طرف┇لوفي*
✯≼══━━﹂🏮﹁━━══≽✯

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^استماره2$/i
export default handler
