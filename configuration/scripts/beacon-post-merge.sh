#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "$(realpath -- "${BASH_SOURCE[0]}")" )" &> /dev/null && pwd )
# shellcheck source=./configuration/scripts/beacon-update.sh
sudo "$SCRIPT_DIR"/beacon-update.sh