from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SIZE = (1024, 1536)


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


FONT_TITLE = font(72, True)
FONT_META = font(36, True)
FONT_SMALL = font(28, True)
FONT_POS = font(46, True)
FONT_BADGE = font(28, True)


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def add_gradient_rect(layer, box, top, bottom, radius=0):
    x1, y1, x2, y2 = box
    w, h = x2 - x1, y2 - y1
    grad = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = grad.load()
    for y in range(h):
        t = y / max(1, h - 1)
        color = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(4))
        for x in range(w):
            px[x, y] = color
    if radius:
        grad.putalpha(Image.composite(grad.getchannel("A"), Image.new("L", (w, h), 0), rounded_mask((w, h), radius)))
    layer.alpha_composite(grad, (x1, y1))


def draw_centered(draw, xy, text, fnt, fill, spacing=0, anchor="mm"):
    if spacing == 0:
        draw.text(xy, text, font=fnt, fill=fill, anchor=anchor)
        return
    x, y = xy
    widths = [draw.textlength(char, font=fnt) for char in text]
    total = sum(widths) + spacing * (len(text) - 1)
    cursor = x - total / 2
    for char, width in zip(text, widths):
        draw.text((cursor, y), char, font=fnt, fill=fill, anchor="lm")
        cursor += width + spacing


def draw_frame(img, accent, metal):
    frame = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    d = ImageDraw.Draw(frame)
    card = (58, 58, 966, 1478)
    add_gradient_rect(frame, card, (24, 29, 30, 245), (2, 3, 4, 255), 42)
    d.rounded_rectangle(card, radius=42, outline=metal, width=7)
    d.rounded_rectangle((82, 82, 942, 1454), radius=34, outline=accent, width=4)
    d.rounded_rectangle((112, 118, 912, 1426), radius=24, outline=(255, 255, 255, 42), width=2)

    glow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.rounded_rectangle((77, 77, 947, 1459), radius=38, outline=accent, width=12)
    glow = glow.filter(ImageFilter.GaussianBlur(18))
    img.alpha_composite(glow)
    img.alpha_composite(frame)

    shine = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shine)
    sd.polygon([(100, 180), (260, 120), (920, 1260), (760, 1320)], fill=(255, 255, 255, 22))
    sd.polygon([(180, 100), (260, 92), (890, 1120), (820, 1160)], fill=(255, 255, 255, 24))
    mask = rounded_mask(SIZE, 42)
    shine.putalpha(Image.composite(shine.getchannel("A"), Image.new("L", SIZE, 0), mask))
    img.alpha_composite(shine)


def draw_logo(draw, center, accent):
    x, y = center
    shield = [(x, y - 54), (x + 54, y - 18), (x + 38, y + 48), (x, y + 72), (x - 38, y + 48), (x - 54, y - 18)]
    draw.polygon(shield, fill=(8, 12, 12, 235), outline=accent)
    draw.ellipse((x - 25, y - 20, x + 25, y + 30), fill=(245, 245, 232, 245), outline=(15, 15, 15, 255), width=3)
    draw.text((x, y + 52), "KSC", font=FONT_BADGE, fill=(255, 248, 214, 255), anchor="mm")


def draw_flag(draw, box):
    x1, y1, x2, y2 = box
    h = (y2 - y1) / 3
    draw.rounded_rectangle(box, radius=8, fill=(255, 255, 255, 230))
    draw.rectangle((x1 + 3, y1 + 3, x2 - 3, y1 + h), fill=(16, 16, 16, 255))
    draw.rectangle((x1 + 3, y1 + h, x2 - 3, y1 + h * 2), fill=(211, 22, 38, 255))
    draw.rectangle((x1 + 3, y1 + h * 2, x2 - 3, y2 - 3), fill=(255, 210, 63, 255))


def draw_player(img, shirt_a, shirt_b, skin, hair, pose):
    layer = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    cx = 512

    # Stadium-card vignette behind the player.
    for r, alpha in [(390, 36), (300, 34), (210, 42)]:
        d.ellipse((cx - r, 300 - r * 0.45, cx + r, 300 + r * 1.2), fill=(*shirt_a[:3], alpha))

    body_top = 568
    body = [(300, body_top), (724, body_top), (860, 1118), (730, 1242), (294, 1242), (164, 1118)]
    d.polygon(body, fill=shirt_b)
    for i in range(12):
        t = i / 11
        x = 206 + t * 612
        d.line((x, 600, x - 150, 1220), fill=(*shirt_a[:3], 42), width=10)
    d.polygon([(318, body_top), (706, body_top), (748, 720), (276, 720)], fill=shirt_a)
    d.polygon([(470, body_top), (554, body_top), (590, 725), (434, 725)], fill=(245, 245, 232, 220))

    if pose == "keeper":
        d.polygon([(190, 635), (310, 598), (390, 784), (292, 836)], fill=shirt_a)
        d.polygon([(834, 635), (714, 598), (634, 784), (732, 836)], fill=shirt_a)
    elif pose == "mid":
        d.polygon([(178, 720), (308, 610), (394, 780), (280, 890)], fill=shirt_a)
        d.polygon([(846, 720), (716, 610), (630, 780), (744, 890)], fill=shirt_a)
    else:
        d.polygon([(174, 650), (316, 604), (392, 790), (264, 850)], fill=shirt_a)
        d.polygon([(850, 650), (708, 604), (632, 790), (760, 850)], fill=shirt_a)

    # Neck and head.
    d.rounded_rectangle((450, 498, 574, 640), radius=48, fill=skin)
    d.ellipse((374, 240, 650, 544), fill=skin)
    d.ellipse((366, 338, 414, 430), fill=skin)
    d.ellipse((610, 338, 658, 430), fill=skin)
    d.polygon([(512, 370), (486, 462), (540, 462)], fill=(180, 102, 72, 180))
    d.arc((434, 420, 590, 514), 12, 168, fill=(74, 34, 28, 220), width=8)
    d.ellipse((446, 358, 466, 376), fill=(30, 24, 22, 255))
    d.ellipse((558, 358, 578, 376), fill=(30, 24, 22, 255))
    d.arc((420, 330, 486, 366), 188, 350, fill=(40, 28, 24, 230), width=7)
    d.arc((538, 330, 604, 366), 190, 352, fill=(40, 28, 24, 230), width=7)

    hair_points = [(382, 316), (418, 230), (486, 204), (558, 210), (628, 246), (650, 330), (604, 300), (558, 270), (506, 292), (448, 270)]
    d.polygon(hair_points, fill=hair)
    for i in range(11):
        x = 410 + i * 22
        d.polygon([(x, 248), (x + 44, 220 + (i % 3) * 8), (x + 32, 288)], fill=hair)

    # Comic highlights and ink contours.
    d.line((414, 296, 382, 410, 426, 540), fill=(255, 255, 255, 38), width=8)
    d.line((612, 310, 646, 420, 598, 534), fill=(0, 0, 0, 65), width=10)
    d.line((316, 568, 706, 568), fill=(255, 255, 255, 82), width=5)
    d.line((270, 770, 754, 770), fill=(0, 0, 0, 82), width=5)

    layer = layer.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=3))
    img.alpha_composite(layer)


def draw_card(filename, accent, metal, shirt_a, shirt_b, name, position, pose):
    img = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    card_mask = Image.new("L", SIZE, 0)
    md = ImageDraw.Draw(card_mask)
    md.rounded_rectangle((58, 58, 966, 1478), radius=42, fill=255)

    back = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    add_gradient_rect(back, (58, 58, 966, 1478), (18, 23, 24, 255), (2, 3, 4, 255), 42)
    bd = ImageDraw.Draw(back)
    for i in range(34):
        x = 70 + i * 34
        bd.line((x, 82, x - 390, 1470), fill=(*accent[:3], 20), width=4)
    back.putalpha(card_mask)
    img.alpha_composite(back)

    draw_frame(img, accent, metal)
    draw_player(img, shirt_a, shirt_b, (218, 147, 104, 255), (38, 22, 18, 255), pose)

    shade = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade)
    sd.rectangle((100, 1012, 924, 1430), fill=(0, 0, 0, 142))
    shade.putalpha(Image.composite(shade.getchannel("A"), Image.new("L", SIZE, 0), card_mask))
    img.alpha_composite(shade)

    d = ImageDraw.Draw(img)
    draw_logo(d, (172, 174), accent)
    draw_flag(d, (792, 126, 902, 194))
    d.rounded_rectangle((118, 1040, 244, 1120), radius=34, fill=(0, 0, 0, 185), outline=accent, width=3)
    d.text((181, 1080), position, font=FONT_POS, fill=(255, 248, 214, 255), anchor="mm")

    draw_centered(d, (512, 1160), name.upper(), FONT_TITLE, (255, 255, 255, 255), spacing=2)
    draw_centered(d, (512, 1260), "FOUNDERS COLLECTION", FONT_META, (255, 242, 196, 245), spacing=4)
    draw_centered(d, (512, 1330), "SEASON 1", FONT_SMALL, (*accent[:3], 245), spacing=6)

    # Final alpha: only the card is opaque, everything outside remains transparent.
    alpha = img.getchannel("A")
    alpha = Image.composite(alpha, Image.new("L", SIZE, 0), card_mask)
    img.putalpha(alpha)
    img.save(ROOT / filename)


def main():
    draw_card(
        "card_common.png",
        accent=(207, 212, 212, 255),
        metal=(236, 240, 238, 255),
        shirt_a=(210, 216, 214, 255),
        shirt_b=(70, 76, 78, 255),
        name="Mats Keller",
        position="TW",
        pose="keeper",
    )
    draw_card(
        "card_uncommon.png",
        accent=(126, 255, 66, 255),
        metal=(203, 255, 178, 255),
        shirt_a=(126, 255, 66, 255),
        shirt_b=(16, 91, 43, 255),
        name="Noah Stein",
        position="ZM",
        pose="mid",
    )
    draw_card(
        "card_rare.png",
        accent=(82, 207, 255, 255),
        metal=(186, 233, 255, 255),
        shirt_a=(66, 199, 255, 255),
        shirt_b=(8, 42, 112, 255),
        name="Leon Voss",
        position="ST",
        pose="striker",
    )


if __name__ == "__main__":
    main()
