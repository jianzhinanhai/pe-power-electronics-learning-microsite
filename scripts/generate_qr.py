#!/usr/bin/env python3
"""
Generate a QR code for a published Pages URL.

Usage:
  python scripts/generate_qr.py "https://example.github.io/site/" --output qr.png

Requires:
  pip install qrcode[pil]
"""
from __future__ import annotations

import argparse
import sys

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("url", help="Published URL to encode")
    parser.add_argument("--output", default="qr.png", help="Output PNG path")
    args = parser.parse_args()

    try:
        import qrcode
    except ImportError:
        print("Missing dependency. Install with: pip install 'qrcode[pil]'", file=sys.stderr)
        return 2

    img = qrcode.make(args.url)
    img.save(args.output)
    print(f"QR code written to {args.output}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
