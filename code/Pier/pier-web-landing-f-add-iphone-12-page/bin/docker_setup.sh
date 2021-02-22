 #!/bin/sh -e

echo "=== Starting project setup for docker development environment ==="
if ! command -v 'docker-compose' > /dev/null; then
  echo "Docker Compose not installed. Install before continue."
  exit 1
fi

if ! command -v 'docker-sync' > /dev/null; then
  echo "Docker Sync not installed. Install before continue."
  exit 1
fi

echo "Setup Finished!" 
