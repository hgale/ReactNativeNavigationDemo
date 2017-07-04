#!/usr/bin/env bash -e


echo 'Copying Android SDK licenses...'
targetDir="${ANDROID_HOME}/licenses"
mkdir -p "${targetDir}"
cp -f $(pwd)/scripts/android-sdk-licenses/* "${targetDir}"
echo 'Done'