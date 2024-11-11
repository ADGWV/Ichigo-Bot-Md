import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {

    if (!args[0]) throw `دخل اسم الشخص الي عايز تبحث عنه\n\n🐦مثال: ${usedPrefix + command} fcbaracalona.Moyt` 
    let res = await fg.igStalk(args[0])
    let te = `
*┐────【 المعلومات كلها 】 ────┌*
⇠ *الرقم 👑:* ${res.name} 
⇠ *الاسم 💫:* ${res.username}
⇠ *المتابعين 💌:* ${res.followersH}
⇠ *الي بيتابع حسابتهم ❤️‍🔥:* ${res.followingH}
⇠ *الوصف🗿:* ${res.description}
⇠ *المنشورات🐣:* ${res.postsH}

⇠ *🔗 الرابط* : حط رابط انستا تبعك هو رون(/^@/, '')}
*┘─────【 المعلومات كلها 】─────└*`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)

}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['انستجرام'] 

export default handler
