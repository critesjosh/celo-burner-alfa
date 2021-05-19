#!/bin/bash

cd build
touch CNAME
echo "rapidcelo.aqal.dev" >> CNAME
cd ..

gh-pages -d build