#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/assets

# Pairs: filename URL
ASSETS=(
  "rectangle2.png|https://www.figma.com/api/mcp/asset/dced0cab-3cbb-4905-bad5-1aef839185cc"
  "rectangle3.png|https://www.figma.com/api/mcp/asset/0c6af7f6-555c-4b8c-9f36-89a2ccd47c1d"
  "rectangle4.png|https://www.figma.com/api/mcp/asset/a1e06857-65f7-4275-9863-e152c948240a"
  "rectangle5.png|https://www.figma.com/api/mcp/asset/dbf4ba19-b46b-481d-9693-0f7ff9ea2e14"
  "rectangle6.png|https://www.figma.com/api/mcp/asset/cd948bbe-42eb-4878-bfc2-476563534b86"
  "rectangle7.png|https://www.figma.com/api/mcp/asset/8998a378-6ba3-47da-b660-bffba575cd39"
  "rectangle8.png|https://www.figma.com/api/mcp/asset/dd18997b-971b-4ab5-8776-7adee7f60629"
  "rectangle9.png|https://www.figma.com/api/mcp/asset/75ee5345-f605-4827-b69b-3e0d2bd33729"
  "rectangle10.png|https://www.figma.com/api/mcp/asset/e7d520be-0a17-4986-acb8-0fe0cefcc7a7"
  "rectangle11.png|https://www.figma.com/api/mcp/asset/6b95fc02-6609-4925-93c1-240074636b15"
  "rectangle12.png|https://www.figma.com/api/mcp/asset/9dfeb70f-693e-49ce-b14c-e5ff6b5b6417"
  "rectangle13.png|https://www.figma.com/api/mcp/asset/35245ea6-066d-4eb3-b5b6-6a8874275c63"
  "3d-control-fallback.png|https://www.figma.com/api/mcp/asset/ca50ee97-9512-40d5-8ee1-7a9bac49b2e9"
  "3d-broadcast-fallback.png|https://www.figma.com/api/mcp/asset/86ba9066-2bfd-4b18-8e94-e5624f69036f"
  "image-107.png|https://www.figma.com/api/mcp/asset/535aa6bb-3b42-456b-a89f-98ada00417c5"
  "3d-integrate-weekend-fallback.png|https://www.figma.com/api/mcp/asset/ad6938e4-3605-4580-866f-8e55ddddc803"
  "image-110.png|https://www.figma.com/api/mcp/asset/2eaa8b86-6700-4c05-a054-6123f361bafc"
  "3d-react-fallback.png|https://www.figma.com/api/mcp/asset/51e912f3-2387-4b81-bc8e-bcceb306c872"
  "image-111.png|https://www.figma.com/api/mcp/asset/9ca8bc87-cd0a-4760-ab27-287615a79a6b"
  "floor-background-mask.png|https://www.figma.com/api/mcp/asset/a73f76c2-ee15-484a-8140-80ede3973dd4"
  "hero-product.png|https://www.figma.com/api/mcp/asset/b844237e-be89-4de3-aed4-104863c725eb"
  "light-ray-background.png|https://www.figma.com/api/mcp/asset/0b24a18f-44b9-413a-a828-c1bcb9d55009"
  "btn-image.png|https://www.figma.com/api/mcp/asset/61302578-0fc9-446f-a91f-d5fbeeec9138"
  "icon-events.svg|https://www.figma.com/api/mcp/asset/5d779506-2cf6-4ecc-91aa-d76b1a4cabcc"
  "icon-overclaim.svg|https://www.figma.com/api/mcp/asset/0d5f73d9-4e86-49b7-9dc6-6cbf06917c68"
  "icon-targeting.svg|https://www.figma.com/api/mcp/asset/f0d8954e-642c-4a90-8017-0e241237964c"
  "logo-google-ads.svg|https://www.figma.com/api/mcp/asset/df4e8133-f997-4023-acf6-eb4bf0684df5"
  "logo-meta.svg|https://www.figma.com/api/mcp/asset/c770756c-450e-475e-8acf-98998dde13a1"
  "logo-taboola.svg|https://www.figma.com/api/mcp/asset/4e6f1726-74e6-4d62-a4a7-6ea2b9346d86"
  "logo-tiktok.svg|https://www.figma.com/api/mcp/asset/196835dc-ed8d-4aa6-9755-5b9ff726f79a"
  "logo-amazon.svg|https://www.figma.com/api/mcp/asset/27b49331-2cb8-4bf9-8721-e68074014f72"
  "logo-snap.svg|https://www.figma.com/api/mcp/asset/0b35a769-4f9e-427a-8de4-135d911403be"
  "logo-shopify.svg|https://www.figma.com/api/mcp/asset/511f49af-ae86-4104-9ba7-3c18f5479796"
  "logo-ga4.svg|https://www.figma.com/api/mcp/asset/ad23a01c-c18a-4fea-9206-f2bf1719616f"
  "logo-instagram.svg|https://www.figma.com/api/mcp/asset/c6eb7f89-b810-4b38-90b0-c98a676c4bf8"
  "logo-x.svg|https://www.figma.com/api/mcp/asset/269cbf5b-ac1e-4a9b-aeb9-e2343f28e2b5"
  "icon-faq.svg|https://www.figma.com/api/mcp/asset/a5d77da9-86ee-44ca-9351-9636875478b0"
  "icon-check.svg|https://www.figma.com/api/mcp/asset/5509a8d8-8fb9-4899-84b9-69b83116adf8"
  "floor-background.png|https://www.figma.com/api/mcp/asset/f06723ef-1a51-42f9-9238-494600ffb443"
  "icon-arrow-right.svg|https://www.figma.com/api/mcp/asset/0f6cb3fe-0c6f-401b-a1b3-7672b56a70f7"
  "logo-goc01.svg|https://www.figma.com/api/mcp/asset/6d056835-e1bd-44d0-947d-aba108dae813"
  "overlay-blur.png|https://www.figma.com/api/mcp/asset/5108d0d0-0961-4424-8aaf-dc62ae776dbc"
)

for entry in "${ASSETS[@]}"; do
  fname="${entry%%|*}"
  url="${entry#*|}"
  out="public/assets/${fname}"
  if [[ -f "$out" ]]; then
    continue
  fi
  echo "Downloading $fname"
  curl -sSL --fail -o "$out" "$url" || echo "Failed: $fname"
done

echo "Done. $(ls public/assets/ | wc -l | tr -d ' ') files in public/assets/"
