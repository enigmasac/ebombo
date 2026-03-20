#!/usr/bin/env bash
set -euo pipefail

cd /home/ebombo/app

echo "Pulling latest changes..."
sudo git pull origin main

echo "Building image with host network (required for API access during SSG)..."
sudo docker build \
  --network=host \
  --build-arg API_URL=http://localhost:4000 \
  --no-cache \
  -t ebombo-web .

echo "Restarting container..."
sudo docker compose up -d

echo "Done. Verifying container is running..."
sudo docker compose ps
