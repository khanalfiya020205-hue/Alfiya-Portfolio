const fs = require('fs');

function fixFile(path) {
    let content = fs.readFileSync(path, 'utf8');
    // For ISO-8859-1 decoding issues that look like UTF-8 as windows-1252
    content = content.replace(/â€”/g, '—');
    content = content.replace(/Â·/g, '·');
    content = content.replace(/Â©/g, '©');
    content = content.replace(/â• /g, '═');
    content = content.replace(/â€“/g, '–');
    fs.writeFileSync(path, content, 'utf8');
}

['d:/Alfiya-Final-Portfolio/alfiya-portfolio-v2.html', 'd:/Alfiya-Final-Portfolio/style.css', 'd:/Alfiya-Final-Portfolio/script.js'].forEach(fixFile);
