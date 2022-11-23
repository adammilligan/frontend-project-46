# Difference generator
Compares two configuration files and shows a difference.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/adammilligan/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/adammilligan/frontend-project-46/actions)
<a href="https://codeclimate.com/github/adammilligan/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/d84e368f05a25df339b8/maintainability" /></a>
[![Actions Status](https://github.com/adammilligan/frontend-project-46/actions/workflows/push.yml/badge.svg)](https://github.com/adammilligan/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d84e368f05a25df339b8/test_coverage)](https://codeclimate.com/github/adammilligan/frontend-project-46/test_coverage)
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
[![asciicast](https://asciinema.org/a/539187.svg)](https://asciinema.org/a/539187)

## Comparing complex files

```sh
gendiff ./__fixtures__/before.json ./__fixtures__/after.json
```

[![asciicast](https://asciinema.org/a/rTZSAH5Zusrh8WnCWuMIqGJCj.svg)](https://asciinema.org/a/rTZSAH5Zusrh8WnCWuMIqGJCj)

## Comparing complex files with plaai format

```sh
gendiff --format plain ./__fixtures__/before.json ./__fixtures__/after.json
gendiff --format plain ./__fixtures__/before.yml ./__fixtures__/after.yml
```

