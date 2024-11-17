/*

اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃

تابع حسابي في Github @ADGWV

اسم الملف buscador-yts.js

قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f

*/


import yts from 'yt-search';

const handler = async (m, {conn, text}) => {
  if (!text) throw '⚠️ *_ما الذي تريد البحث عنه في يوتيوب؟_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_الرابط :_* ${v.url}
↳ 🕒 *_المده :_* ${v.timestamp}
↳ 📥 *_التاريخ :_* ${v.ago}
↳ 👁 *_المشاهدات :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['يوتيوب', 'yts'];
export default handler;
