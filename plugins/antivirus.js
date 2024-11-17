/*

اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃

تابع حسابي في Github @ADGWV

اسم الملف antivirus.js

قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f

*/


var handler = m => m
handler.all = async function (m, { isBotAdmin }) {

// Borrado automático cuando hay mensajes que no se pueden ver en el escritorio
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}

}

export default handler
