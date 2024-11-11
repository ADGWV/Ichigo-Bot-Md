let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^كت$/i.test(m.text)) { 
 responses = [ 
 `*∞──────「كـت」──────∞*

*~『اوبيتو 』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『ويليام』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『ايتشيغو 』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『الدون عم ميسي』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『ايتاتشي 』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『رون』~*

*∞──────「كـت」──────∞*`,  
 `*∞──────「كـت」──────∞*

*~『لوفي』~*

*∞──────「كـت」──────∞*`

 ];
 }  
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
