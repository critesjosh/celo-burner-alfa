#!/bin/bash

cd build
touch CNAME
echo "rapidcelo.aqal.dev" >> CNAME
rm favicon.ico
cd ..

gh-pages -d build