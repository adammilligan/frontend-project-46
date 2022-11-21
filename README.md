# Difference generator
Compares two configuration files and shows a difference.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/adammilligan/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/adammilligan/frontend-project-46/actions)
<a href="https://codeclimate.com/github/adammilligan/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/d84e368f05a25df339b8/maintainability" /></a>
[![Actions Status](https://github.com/adammilligan/frontend-project-46/actions/workflows/push.yml/badge.svg)](https://github.com/adammilligan/frontend-project-46/actions)
<a href="https://codeclimate.com/github/adammilligan/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/d84e368f05a25df339b8/test_coverage" /></a>
----

## Minimum requirements

node.js v16.17.0, terminal(command line), linux or macos.

## Setup

```sh
make install
make publish
sudo npm link
```

## Comparing simple files

JSON

```sh
gendiff ./__fixtures__/before_flat.json ./__fixtures__/after_flat.json
```

[![asciicast](https://asciinema.org/a/7eX6ZGnTTZfN8Rro7O8v7cFJ4.svg)](https://asciinema.org/a/7eX6ZGnTTZfN8Rro7O8v7cFJ4)

YAML

```sh
gendiff ./__fixtures__/before_flat.yml ./__fixtures__/after_flat.yml
```