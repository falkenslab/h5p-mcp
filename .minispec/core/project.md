# Project

**h5p-mcp**: content-only H5P packages for AI agents: built, validated and read locally.

- **What**: an MCP server over stdio, published on npm as `@falkenslab/h5p-mcp`, that an AI app (Claude Code, Codex, an agent built on agent-kit) starts with `npx`. It turns content an agent wrote (questions, answers, cards, slides) into an `.h5p` package on the person's computer, checked against its content type's fields, and reads one back.
- **Content-only**: a package holds `h5p.json` and `content/content.json`, never the content type's libraries (ADR-005). It plays where the site already has that content type installed; it uploads nothing.
- **Content types**, first: multiple choice (`H5P.MultiChoice`), true/false (`H5P.TrueFalse`), fill in the blanks (`H5P.Blanks`), drag the words (`H5P.DragText`), Dialog Cards (`H5P.Dialogcards`), Flashcards (`H5P.Flashcards`), Question Set (`H5P.QuestionSet`) and Course Presentation (`H5P.CoursePresentation`). Interactive Video later, with a video extension.
- **For whom**: teachers and students, through Falken's Lab's agents (miyagi for teachers) or any MCP client.
- **How it reaches agents**: as the `h5p` extension in [agent-extensions](https://github.com/falkenslab/agent-extensions) (its issue #10), which pins its version, adds the skills to use it well and declares the `h5p-authoring` capability. Uploading a package to Moodle is moodle-teacher's (`create_activity` with `type: "h5pactivity"`), not this server's.
- **Out of scope**: uploading or publishing anywhere, installing content types on a site, H5P's player or editor, and the craft of writing good questions, which belongs to the agent.
- **Where it stands**: `list_h5p_types`, `build_h5p` and `read_h5p` for the eight types, tried on moodle-sandbox 5.2; not on npm yet.
