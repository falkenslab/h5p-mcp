<div align="center">

<img src="https://raw.githubusercontent.com/falkenslab/h5p-mcp/main/docs/static/img/logo.svg" alt="h5p-mcp logo" width="112"/>

# h5p-mcp

**Your AI agent writes interactive H5P content, as a package ready to upload.**<br/>
Multiple choice, true/false, fill in the blanks, drag the words, cards, question sets and course presentations, built and checked on your computer.

![Node.js 20+](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![MCP server](https://img.shields.io/badge/MCP-server-0b0b0b)
[![npm](https://img.shields.io/npm/v/@falkenslab/h5p-mcp?color=cb3837&logo=npm)](https://www.npmjs.com/package/@falkenslab/h5p-mcp)
[![License: MIT](https://img.shields.io/badge/license-MIT-16a34a)](LICENSE)

**[📖 Documentation](https://falkenslab.github.io/h5p-mcp/)** · [📖 Documentación en español](https://falkenslab.github.io/h5p-mcp/es/)

</div>

h5p-mcp is an MCP server that turns content an AI agent writes (questions and their answers, cards, slides) into an `.h5p` package on your computer, checked against its content type before it's written, and reads one back to review or reuse it. The packages carry only their content, not H5P's code, so they're small and play on any site that has the content type, such as a Moodle with its H5P activity. It uploads nothing: in Moodle, the moodle-teacher extension does that.

## ✨ Why h5p-mcp

- 📦 **Packages a site takes.** The format Moodle validates and deploys, tried on a real site.
- ✅ **Checked before it's written.** A question without its right answer, or a blank without its word, is refused with what to fix.
- 🔁 **Read back.** An existing package's content, in the same shape, to review it, change it and build it again.
- 👀 **Reviewed before uploading.** A plain preview of the questions, options and cards, without H5P's player.
- 🪶 **Nothing else on your computer.** One bundled file run with `npx`; no H5P code to install or keep up to date.

## 🚀 Quick start

With [Node.js](https://nodejs.org) 20 or later, add it to Claude Code:

```bash
claude mcp add h5p-mcp -- npx -y @falkenslab/h5p-mcp
```

Then ask for an activity. Other AI apps, and agents built on agent-kit, are in [Getting started](https://falkenslab.github.io/h5p-mcp/getting-started).

## 💬 What you can ask

👩‍🏫 As a teacher:

- "Make me a ten-question quiz on the water cycle, as an H5P package in my Downloads folder."
- "Turn these vocabulary pairs into Dialog Cards, in Spanish."
- "Read this .h5p and add two harder questions to it."

## 🧰 What's inside

| Area | For example |
| --- | --- |
| 🧩 Content types | `H5P.MultiChoice`, `H5P.TrueFalse`, `H5P.Blanks`, `H5P.DragText`, `H5P.Dialogcards`, `H5P.Flashcards`, `H5P.QuestionSet`, `H5P.CoursePresentation` |
| 🛠️ Tools | `list_h5p_types` (the types and their fields), `build_h5p` (the package and its preview), `read_h5p` (a package's content) |
| 🌍 Languages | Buttons and messages in the package's language, from each type's own translations (about fifty languages) |
| 🔌 For agents | The `h5p` extension in [agent-extensions](https://github.com/falkenslab/agent-extensions), with its skills and the `h5p-authoring` capability |

The [tools reference](https://falkenslab.github.io/h5p-mcp/reference/tools) has every tool with the description the agent reads.

## 📚 Documentation

- **[Getting started](https://falkenslab.github.io/h5p-mcp/getting-started)**: install it in your AI app.
- **[Building packages](https://falkenslab.github.io/h5p-mcp/packages)**: the content types, what is checked, languages and what isn't supported yet.
- **[Tools](https://falkenslab.github.io/h5p-mcp/reference/tools)**: every tool, with the description the agent reads.

## 🛠️ Developing

The design is in [`.minispec/`](.minispec/README.md) and the main decision in [ADR-005](.minispec/decisions/ADR-005-content-only-packages.md); `CLAUDE.md` lists every command. `npm run build`, `npm test` and `npm run check` before every commit. Releases are published to npm by the owner.

<div align="center">

Made with 💖 by Falken's Lab Team

</div>
