# Building and reading H5P packages
Issue: [#1](https://github.com/falkenslab/h5p-mcp/issues/1)

## Goal

An agent turns content it wrote into a valid content-only `.h5p` for the eight content types, checked before it's written, and reads one back.

## Context

Decided and tried in falkenslab/agent-extensions#10 (24 October 2026):

- **Format that works**: a zip with `h5p.json` and `content/content.json` only. Example in `test/fixtures/multichoice/` (an `H5P.MultiChoice 1.16` question). Uploaded with moodle-mcp 0.5.0's `create_activity` (`type: "h5pactivity"`, the `.h5p` as the only path in `files`), it went into the activity's `package` area, and opening the activity made Moodle validate and deploy it (`mdl_h5p` got it as `H5P.MultiChoice 1.16`); `get_h5p_activity` reads its type back. `preloadedDependencies` with only the main library was enough: the site resolves the rest from the installed library.
- **The content types' versions** installed on moodle-sandbox 5.2 (from h5p.org's hub, 24 October 2026): `H5P.MultiChoice 1.16`, `H5P.TrueFalse 1.8`, `H5P.Blanks 1.14`, `H5P.DragText 1.10`, `H5P.Dialogcards 1.9`, `H5P.Flashcards 1.7`, `H5P.QuestionSet 1.21`, `H5P.CoursePresentation 1.27` (and, as dependencies, `H5P.InteractiveVideo 1.28`, `H5P.DragQuestion 1.15`, `H5P.MarkTheWords 1.11`, `H5P.SingleChoiceSet 1.11`, `H5P.Summary 1.10`). Pin these.
- **Their fields**: each library's `semantics.json`, inside the hub's package: `GET https://hub-api.h5p.org/v1/content-types/<machineName>` (no sign-in) returns a libraries-only zip with `<machineName>-<major>.<minor>/semantics.json`. Fetch them once, while writing the code, and keep what each tool needs as data in `src/`; the server itself never talks to h5p.org.
- **moodle-sandbox** (`../moodle-sandbox`) has these types installed on its 5.2 site, `http://localhost:8080`, to try packages end to end (its #6 makes that a seed step). It blocks h5p.org on purpose: never lift it.

## Changes

- `list_h5p_types` (read-only): the types it builds, each with its library and version, what it's for, and its fields (required or not, their kind, limits) in a form an agent can fill.
- `build_h5p`: a type, a title, a language and the content in that shape; checks it against the type's fields (required ones, kinds, the right answer marked, at least two options…) and refuses with what's wrong, or writes `<destDir>/<name>.h5p`. Writes only that file (`destructiveHint` false, not idempotent if the file exists: refuse unless `overwrite`). Text that becomes HTML is escaped; the agent may pass simple HTML where the type takes it.
- `read_h5p` (read-only): what a local `.h5p` holds: its type and version, title, language, and its content in the same shape `build_h5p` takes, so a package can be reviewed or changed and rebuilt. Packages with libraries are read too (their content only).
- A preview: an HTML file next to the package that shows the content as text (questions, options with the right ones marked, cards, slides), to review before uploading, with no H5P player.
- README, docs (English and Spanish) and the tools reference for them, following the Falken's Lab docs rules; tests for each type with fixtures.

## Acceptance

- `npm run check`, `npm test`, `npm run typecheck` and `npm run lint` pass.
- For each of the eight types, a package `build_h5p` writes uploads to moodle-sandbox with moodle-teacher, deploys and plays; `read_h5p` gives back what went in.
- A wrong content (a multiple choice with no right answer, a blank with no answer) is refused with a message that says what to fix.
- Then the `h5p` extension in agent-extensions pins the release (agent-extensions#10).
