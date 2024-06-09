const emojis = [
    { char: "&#128540;", code: "128540" },  // 😜 Winking Face with Tongue
    { char: "&#128577;", code: "128577" },  // 🙁 Slightly Frowning Face
    { char: "&#128578;", code: "128578" },  // 🙂 Slightly Smiling Face
    { char: "&#128151;", code: "128151" },  // 💗 Growing Heart
    { char: "&#128170;", code: "128170" },  // 💪 Flexed Biceps
    { char: "&#128640;", code: "128640" },  // 🚀 Rocket
    { char: "&#128065;", code: "128065" },  // 👁 Eye
    { char: "&#128293;", code: "128293" },  // 🔥 Fire
    { char: "&#127752;", code: "127752" },  // 🌘 Waning Crescent Moon
    { char: "&#127881;", code: "127881" },  // 🎉 Party Popper
    { char: "&#128104;", code: "128104" },  // 👨 Man
    { char: "&#128060;", code: "128060" }   // 🐔 Chicken
];
const emojiGallery = document.getElementById('emoji-gallery');

emojis.forEach(emoji => {
    const emojiItem = document.createElement('div');
    emojiItem.className = 'emoji-item';
    
    const emojiChar = document.createElement('div');
    emojiChar.className = 'emoji-char';
    emojiChar.innerHTML = emoji.char;
    
    const emojiCode = document.createElement('div');
    emojiCode.className = 'emoji-code';
    emojiCode.innerText = `&#${emoji.code};`;
    
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
    
    emojiGallery.appendChild(emojiItem);
});
