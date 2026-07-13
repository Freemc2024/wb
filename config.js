const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rjREHZpB#qioIMoPy9Uy3pYtUJeFqQM7BADneAkeLwS3YXQKZklQ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/bMjjZDND",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PASIYA-WhatsappBot Is Alive Now😍*",
BOT_OWNER: '94772582943',  // Replace with the owner's phone number



};
