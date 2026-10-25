# Glossary

- **Tool**: what the server offers a client, with a name, a description for the model, schemas and annotations.
- **Requirement**: a program the person installs apart on their computer (Docker, ffmpeg), which the server checks and explains but never installs.
- **Extension**: the folder in agent-extensions that runs this server for an agent (and Claude Code), with its skills and capabilities.
- **Capability**: what an extension lets an agent do, for the person: its skills plus its tools.

- **Package**: an `.h5p` file, a zip with `h5p.json` and `content/content.json` (and media under `content/`); here always without libraries (ADR-005).
- **Content type**: what a package is (multiple choice, Dialog Cards…), named by its main library, `H5P.MultiChoice`.
- **Library**: an H5P content type's code at a version (`H5P.MultiChoice 1.16`), installed on the site that plays the package; its `semantics.json` defines the content's fields.
- **Semantics**: a library's description of its content's fields (names, kinds, required, limits), which `build_h5p` checks a content against.
