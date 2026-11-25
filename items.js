/* =====================================================================
   跳墙闯关 — STORE ITEMS  (edit this file to add / change shop items)
   ---------------------------------------------------------------------
   Every item needs:
     id     unique English word, no spaces (saved on the phone — don't rename once bought)
     cat    'skin' | 'hat' | 'trail' | 'pet' | 'tool'
     name   name shown in the shop (Chinese is fine)
     price  coins
     icon   an emoji like '👑'  OR  a picture file in shop/graphics/, e.g. 'plaid-icon.png'

   Extra fields by category:
     skin   shirt:'#hex', pants:'#hex'
            glow:true      shirt glows a little
            rainbow:true   colours keep changing
            texture:'file.png'   picture from shop/graphics/ printed on the shirt
                                 (small pixel art, e.g. 16x16 or 32x32, looks best)
     hat / pet   parts:[ ... ]  — the 3D model, built from blocks:
            {box:[width,height,depth], at:[x,y,z], color:'#hex'}
            {cone:[radius,height,sides], at:[x,y,z], color:'#hex', turn:45}
            optional on any part: glow:'#hex' (self-light), see:0.8 (0–1 see-through)
            Hat: y=0 is the top of the head.  Pet: y=0 is the ground. 1 unit ≈ one head width/0.64.
            +z is the front (the face side).
     trail  colors:['#hex',...], size:0.1, gravity:1   (negative gravity = puffs float up)
     tool   things he USES while playing (tool bar at the bottom; phone: 放/拆 buttons, PC: 1-9 pick, E use, Q take back)
            tool:'block'  build block for the waiting area (saved). amount: blocks per purchase
                          look:'wood'|'bricks'|'cobble'|'stone'|'wool'|'slab'|'leaves' (+ color:'#hex' to tint)
                          or texture:'file.png' from shop/graphics/ (a 16x16 picture on every side)
            tool:'pad'    jump pad, bought once. power: bounce speed (15 ≈ 4 blocks high), max: pads at once
            tool:'egg'    bridge egg. amount per purchase, length: blocks, lasts: seconds before it vanishes
            about:'...'   optional one-line description under the shop card
            Tools never work around the three answer towers, so answers still need wall hops.

   After editing: save, refresh the game. On Netlify/GitHub just upload the
   changed file(s); no other file needs to change.
   ===================================================================== */
window.SHOP = {
  categories: { skin:'皮肤', hat:'帽子', trail:'拖尾', pet:'宠物', tool:'工具' },
  items: [
    // ---------- skins ----------
    {id:'classic', cat:'skin', name:'经典',   icon:'🧍', price:0,   shirt:'#ff8a1f', pants:'#2b3a67'},
    {id:'moss',    cat:'skin', name:'苔藓绿', icon:'🟩', price:30,  shirt:'#4caf50', pants:'#1f5e2a'},
    {id:'plaid',   cat:'skin', name:'格子衫', icon:'plaid-icon.png', price:40, shirt:'#ffffff', pants:'#24324f', texture:'plaid-shirt.png'},
    {id:'diamond', cat:'skin', name:'钻石',   icon:'💎', price:50,  shirt:'#4de3ff', pants:'#1287a8', glow:true},
    {id:'lava',    cat:'skin', name:'熔岩',   icon:'🌋', price:60,  shirt:'#ff4d1a', pants:'#5c1200', glow:true},
    {id:'gold',    cat:'skin', name:'黄金',   icon:'🥇', price:90,  shirt:'#ffd23f', pants:'#b38600', glow:true},
    {id:'rainbow', cat:'skin', name:'彩虹',   icon:'🌈', price:150, shirt:'#ff0000', pants:'#333333', rainbow:true},

    // ---------- hats ----------
    {id:'hard', cat:'hat', name:'安全帽', icon:'⛑️', price:25, parts:[
      {box:[.70,.22,.70], at:[0,.08,0], color:'#ffd43b'},
      {box:[.86,.06,.86], at:[0,0,0],   color:'#ffd43b'} ]},
    {id:'wizard', cat:'hat', name:'巫师帽', icon:'🧙', price:45, parts:[
      {cone:[.42,.95,4], at:[0,.48,0], color:'#6a35b0', turn:45},
      {box:[.95,.07,.95], at:[0,0,0],  color:'#6a35b0'},
      {box:[.12,.12,.12], at:[.1,.55,.25], color:'#ffd43b', glow:'#806000'} ]},
    {id:'crown', cat:'hat', name:'皇冠', icon:'👑', price:80, parts:[
      {box:[.68,.16,.68], at:[0,.05,0], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[-.27,.22,-.27], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[ .27,.22,-.27], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[-.27,.22, .27], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[ .27,.22, .27], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[0,.22, .30], color:'#ffc928', glow:'#5a3d00'},
      {box:[.13,.22,.13], at:[0,.22,-.30], color:'#ffc928', glow:'#5a3d00'},
      {box:[.12,.12,.06], at:[0,.06,.35], color:'#e91e63', glow:'#600020'} ]},

    // ---------- trails ----------
    {id:'stars', cat:'trail', name:'星星拖尾', icon:'✨', price:35, colors:['#fff59d','#ffffff','#ffd43b'], size:.10, gravity:1},
    {id:'fire',  cat:'trail', name:'火焰拖尾', icon:'🔥', price:55, colors:['#ff3d00','#ff9f1c','#ffd43b'], size:.14, gravity:-2},

    // ---------- pets ----------
    {id:'chick', cat:'pet', name:'小鸡', icon:'🐤', price:70, parts:[
      {box:[.45,.40,.45], at:[0,.20,0],   color:'#ffe066'},
      {box:[.32,.30,.32], at:[0,.50,.08], color:'#ffe066'},
      {box:[.12,.08,.12], at:[0,.48,.28], color:'#ff8a1f'},
      {box:[.05,.06,.02], at:[-.08,.56,.25], color:'#111111'},
      {box:[.05,.06,.02], at:[ .08,.56,.25], color:'#111111'} ]},
    {id:'slime', cat:'pet', name:'史莱姆', icon:'🟢', price:100, parts:[
      {box:[.55,.55,.55], at:[0,.28,0], color:'#51cf66', see:.8},
      {box:[.09,.12,.02], at:[-.12,.36,.28], color:'#111111'},
      {box:[.09,.12,.02], at:[ .12,.36,.28], color:'#111111'} ]},

    // ---------- tools (interactive) ----------
    {id:'b-wood',   cat:'tool', tool:'block', name:'木板方块', icon:'🟫', price:15, amount:20, look:'wood',   about:'在起点草地上盖房子'},
    {id:'b-brick',  cat:'tool', tool:'block', name:'红砖方块', icon:'🧱', price:20, amount:20, look:'bricks'},
    {id:'b-stone',  cat:'tool', tool:'block', name:'石头方块', icon:'🪨', price:15, amount:20, look:'cobble'},
    {id:'b-wool-b', cat:'tool', tool:'block', name:'蓝色羊毛', icon:'🟦', price:15, amount:20, look:'wool', color:'#4dabf7'},
    {id:'b-leaf',   cat:'tool', tool:'block', name:'树叶方块', icon:'🌿', price:15, amount:20, look:'leaves'},
    {id:'b-plaid',  cat:'tool', tool:'block', name:'格子方块', icon:'plaid-icon.png', price:25, amount:20, texture:'plaid-shirt.png'},
    {id:'jumppad',  cat:'tool', tool:'pad',   name:'弹跳板',   icon:'🟩', price:60, power:15, max:3, color:'#2fb34a', about:'踩上去弹得好高'},
    {id:'bridgeegg',cat:'tool', tool:'egg',   name:'搭桥蛋',   icon:'🥚', price:30, amount:3, length:12, lasts:25, look:'wool', color:'#ffffff', about:'往前铺一条桥，25 秒后消失'}
  ]
};
