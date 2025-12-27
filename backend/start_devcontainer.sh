#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if devcontainer CLI is installed
if ! command -v devcontainer &> /dev/null; then
    echo "Error: devcontainer CLI is not installed."
    echo "Please install it first: npm install -g @devcontainers/cli"
    exit 1
fi

echo "🚀 Starting Dev Container environment..."

# Build/Start the devcontainer
# --workspace-folder . assumes we are running this from the directory containing .devcontainer (the backend dir)
devcontainer up --workspace-folder .

echo "✅ Container is up."
echo "🔄 Preparing database and starting server..."

# Exec into the container and run the start commands
# We use bash -c to chain the commands: db:prepare (idempotent create+migrate) and bin/dev
devcontainer exec --workspace-folder . /bin/bash -c "rails db:prepare && bin/dev"
