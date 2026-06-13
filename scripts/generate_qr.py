#!/usr/bin/env python3
"""Generate a QR code for the published Pages URL if qrcode is installed."""
from pathlib import Path
import sys

URL = sys.argv[1] if len(sys.argv) > 1 else "https://jianzhinanhai.github.io/pe-power-electronics-learning-microsite/"
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "pages_qr.png")

try:
    import qrcode
except ImportError:
    print("qrcode package is not installed. Install with: pip install qrcode[pil]")
    raise SystemExit(1)

img = qrcode.make(URL)
img.save(OUT)
print(f"Saved QR code to {OUT}")
