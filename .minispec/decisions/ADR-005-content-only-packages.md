# ADR-005: content-only packages

## Status

Accepted (24 October 2026, in falkenslab/agent-extensions#10).

## Context

An `.h5p` file is a zip with `h5p.json` (title, language, main library, its dependencies), `content/content.json` (the content, shaped by the main library's `semantics.json`) and, optionally, the libraries' own folders (`H5P.MultiChoice-1.16/` with its JavaScript, CSS and `library.json`). A site plays a package if it has its main library installed, or if the package brings it and whoever uploads it may install libraries (`moodle/h5p:updatelibraries` in Moodle, usually an administrator, not a teacher).

## Decision

The server writes content-only packages: `h5p.json` and `content/content.json` (and the media they name under `content/`), never library code. Each content type has a pinned library version (`H5P.MultiChoice 1.16`), the one its fields are checked against.

## Consequences

- Packages are a few kilobytes, and no third-party code is copied, shipped or kept up to date here.
- A package plays only where the site has the content type: the extension's skill says so and how to find out (moodle-mcp's `get_h5p_activity` after uploading; a listing of the site's types is falkenslab/moodle-mcp#52). Installing types is the site administrator's.
- The fields come from each library's `semantics.json`, kept here as data for the pinned version, with tests; a new version is a deliberate update.

## Alternatives rejected

- Bundling the libraries: works on a site without the type, but only for someone allowed to install libraries, and means vendoring and updating H5P's code (MIT and other licences) in this package.
