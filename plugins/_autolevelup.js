/*
اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃
تابع حسابي في Github @ADGWV
اسم الملف _autolevelup.js
قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f
*/
//import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++
    user.role = global.rpg.role(user.level).name
    if (before !== user.level) {
        m.reply(`
*▢ مبروك المستوي الجديد يحب*

 *${before}* ‣  *${user.level}*
 Role : *${user.role}*

 _لتعطيل الميزه_
_*/off autolevelup*_
  `.trim())
    }
}
