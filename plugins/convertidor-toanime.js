/*

اسم البوت 𝐈𝐂𝐇𝐈𝐆𝐎-𝐁𝐎𝐓-𝐌𝐃

تابع حسابي في Github @ADGWV

اسم الملف convertidor-toanime.js

قناه البوت https://whatsapp.com/channel/0029VarBiDU7dmeivAXXgZ0f

*/


import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*[❗] فين الصوره الي انت عايزها بشكل انمي*';
  m.reply('*[❗] يتم تحويل الصوره لانمي، خلي عندك صبر عشان النتيجه*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*[❗] خطا، وجه الشخص غير واضح*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|لانمي)$/i;
export default handler;
