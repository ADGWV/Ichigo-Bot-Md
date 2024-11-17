/*

اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃

تابع حسابي في Github @ADGWV

اسم الملف convertidor-togifaud.js

قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f

*/


const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*[❗تنبيه❗] قم بالرد علي الفيديو اللي عايز تحولوا الي gif*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*[❗] النوع غير مناسب مع ${mime} الامر يعمل علي الفيديو فقط*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*تــم تـحـويـل الـفـيـديـو الي gif بـنـجاح*'}, {quoted: m});
};
handler.command = ['جيف'];
export default handler;
