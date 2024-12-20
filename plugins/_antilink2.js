/*
اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃
تابع حسابي في Github @ADGWV
اسم الملف _antilink2.js 
قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f
*/

// لتكوين اللغة، في جذر المشروع، قم بتغيير ملف config.json

const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins._antilink2

  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: tradutor.texto1, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply(tradutor.texto2);
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply(tradutor.texto3);
  }
  return !0;
}
