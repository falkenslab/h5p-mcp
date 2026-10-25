<div align="center">

<img src="https://raw.githubusercontent.com/falkenslab/h5p-mcp/main/docs/static/img/logo.svg" alt="h5p-mcp logo" width="112"/>

# h5p-mcp

**Your AI agent writes interactive H5P content, as a package ready to upload.**<br/>
Multiple choice, true/false, fill in the blanks, drag the words, cards, question sets and course presentations, built and checked on your computer.

![Node.js 20+](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![MCP server](https://img.shields.io/badge/MCP-server-0b0b0b)
![Status: in development](https://img.shields.io/badge/status-in%20development-d97706)
[![License: MIT](https://img.shields.io/badge/license-MIT-16a34a)](LICENSE)

</div>

h5p-mcp is an MCP server that turns content an AI agent writes (questions and their answers, cards, slides) into an `.h5p` package on your computer, checked against its content type before it's written, and reads one back to review or reuse it. The packages carry only their content, not H5P's code, so they're small and play on any site that has the content type, such as a Moodle with its H5P activity. It uploads nothing: in Moodle, the moodle-teacher extension does that. **It's in development and not on npm yet.**

## ✨ Why h5p-mcp

- 📦 **Packages a site takes.** The format Moodle validates and deploys, tried on a real site.
- ✅ **Checked before it's written.** A question without its right answer, or a blank without its word, is refused with what to fix.
- 🔁 **Read back.** An existing package's content, in the same shape, to review it, change it and build it again.
- 👀 **Reviewed before uploading.** A plain preview of the questions, options and cards, without H5P's player.
- 🪶 **Nothing else on your computer.** One bundled file run with `npx`; no H5P code to install or keep up to date.

## 🧰 What's inside (planned)

| Area | For example |
| --- | --- |
| 🧩 Content types | `H5P.MultiChoice`, `H5P.TrueFalse`, `H5P.Blanks`, `H5P.DragText`, `H5P.Dialogcards`, `H5P.Flashcards`, `H5P.QuestionSet`, `H5P.CoursePresentation` |
| 🛠️ Tools | `list_h5p_types`, `build_h5p`, `read_h5p`, and a preview of a package |
| 🔌 For agents | The `h5p` extension in [agent-extensions](https://github.com/falkenslab/agent-extensions), with its skills and the `h5p-authoring` capability |

## 🛠️ Developing

The plan is in [`.minispec/features/h5p-packages.md`](.minispec/features/h5p-packages.md) and the main decision in [ADR-005](.minispec/decisions/ADR-005-content-only-packages.md); `CLAUDE.md` lists every command. `npm run build`, `npm test` and `npm run check` before every commit. Releases are published to npm by the owner.

<div align="center">

Made with 💖 by Falken's Lab Team

</div>
