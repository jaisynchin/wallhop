跳墙闯关 — how to add store items
=================================
shop/items.js      the list of everything in the store (open with any text editor)
shop/graphics/     pictures: shop icons (any size, square ~96x96 works) and
                   shirt textures (small pixel art, 16x16 or 32x32)

To add an item: copy one line/block of the same category in items.js,
give it a new id, change name, price, colours or parts, save, refresh.
To use a picture: put the PNG in shop/graphics/ and write only its file name,
e.g.  icon:'robot-icon.png'   or   texture:'robot-shirt.png'

Rules: ids must be unique; don't rename an id that Caleb already bought
(the phone remembers ids). If items.js has a typo the game still opens
with just the classic skin — open the browser console to see the error.

Tools (cat:'tool') are things Caleb uses while playing — build blocks,
jump pads, bridge eggs. They appear in the tool bar at the bottom once
bought. Phone: tap a slot, then 放 (place/throw) or 拆 (take back).
Computer: 1–9 pick a slot, 0 empty hand, E place, Q take back.
Blocks only build on the start (waiting) island and are saved; tools
never work near the three answer towers, so answers still need wall hops.
To add a new block type, copy a 'b-...' line and change id, name, look/colour.
