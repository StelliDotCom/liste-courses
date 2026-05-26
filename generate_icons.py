#!/usr/bin/env python3
"""Generate PWA icons – no external dependencies required."""
import struct, zlib, math, os

def chunk(tag, data):
    buf  = struct.pack('>I', len(data))
    buf += tag + data
    buf += struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)
    return buf

def make_png(w, h, pixel_fn):
    raw = b''
    for y in range(h):
        raw += b'\x00'
        for x in range(w):
            r, g, b, a = pixel_fn(x, y, w, h)
            raw += bytes([r, g, b, a])
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
    idat = chunk(b'IDAT', zlib.compress(raw, 9))
    iend = chunk(b'IEND', b'')
    return b'\x89PNG\r\n\x1a\n' + ihdr + idat + iend

def dist(x, y, cx, cy):
    return math.sqrt((x-cx)**2 + (y-cy)**2)

def icon_pixel(x, y, w, h):
    # Work in 0-100 space
    nx, ny = x / w * 100, y / h * 100
    GREEN  = (46, 125, 50, 255)
    WHITE  = (255, 255, 255, 255)
    TRANSP = (0, 0, 0, 0)

    # Rounded rectangle background (radius 20%)
    rx, ry, rr = 50, 50, 20
    def in_rrect(px, py):
        dx = max(abs(px - 50) - 30, 0)
        dy = max(abs(py - 50) - 30, 0)
        return dx*dx + dy*dy <= rr*rr

    if not in_rrect(nx, ny):
        return TRANSP

    # Cart handle arc (top bar)
    # Handle: horizontal bar y=28..35, x=28..74
    in_handle_h = (27 <= ny <= 35 and 28 <= nx <= 73)
    # Vertical drop from right end of handle
    in_handle_v = (35 <= ny <= 48 and 67 <= nx <= 73)

    # Cart body: trapezoid – bottom wider
    # Left wall at x=28, right wall at x=72, bottom at y=67
    # Top of cart at y=48
    body_top = 48
    body_bot = 67
    body_l   = 28
    body_r   = 72
    in_body  = (body_top <= ny <= body_bot and body_l <= nx <= body_r)

    # Wheels: two circles at bottom
    w1 = dist(nx, ny, 38, 77)
    w2 = dist(nx, ny, 63, 77)
    in_wheels = (w1 <= 7 or w2 <= 7)
    in_wheel_hole = (w1 <= 3 or w2 <= 3)

    if in_handle_h or in_handle_v or in_body or (in_wheels and not in_wheel_hole):
        return WHITE

    return GREEN

def maskable_pixel(x, y, w, h):
    # Full bleed green background (no transparency) with cart in safe zone
    nx, ny = x / w * 100, y / h * 100
    GREEN = (46, 125, 50, 255)
    WHITE = (255, 255, 255, 255)

    # Scale cart to safe zone (centre 80% of icon)
    # Map 100x100 to 10..90 range
    sx = (nx - 10) / 80 * 100
    sy = (ny - 10) / 80 * 100

    in_handle_h = (27 <= sy <= 35 and 28 <= sx <= 73)
    in_handle_v = (35 <= sy <= 48 and 67 <= sx <= 73)
    in_body     = (48 <= sy <= 67 and 28 <= sx <= 72)
    w1 = dist(sx, sy, 38, 77)
    w2 = dist(sx, sy, 63, 77)
    in_wheels   = (w1 <= 7 or w2 <= 7)
    in_hole     = (w1 <= 3 or w2 <= 3)

    if 0 <= sx <= 100 and 0 <= sy <= 100:
        if in_handle_h or in_handle_v or in_body or (in_wheels and not in_hole):
            return WHITE

    return GREEN

def apple_touch_pixel(x, y, w, h):
    # Apple touch icon: solid bg, full bleed
    r, g, b, _ = maskable_pixel(x, y, w, h)
    return (r, g, b, 255)

os.makedirs('icons', exist_ok=True)

sizes = [
    ('icons/icon-192.png',          192, icon_pixel),
    ('icons/icon-512.png',          512, icon_pixel),
    ('icons/icon-192-maskable.png', 192, maskable_pixel),
    ('icons/icon-512-maskable.png', 512, maskable_pixel),
    ('icons/apple-touch-icon.png',  180, apple_touch_pixel),
]

for filename, size, fn in sizes:
    data = make_png(size, size, fn)
    with open(filename, 'wb') as f:
        f.write(data)
    print(f"  ✓  {filename}  ({size}x{size}, {len(data)//1024} KB)")

print("\nIcons generated successfully!")
