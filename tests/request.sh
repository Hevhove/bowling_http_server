#!/bin/bash

data='{"game": [[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 10, 10]]}'

curl -v -X POST \
     -H "Content-Type: application/json" \
     -d "$data" \
     http://localhost:8080/compute