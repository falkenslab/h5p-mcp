# Architecture

```
src/
├── server.ts          entry point: arguments, stdio transport, shutdown
├── createServer.ts    the McpServer with its instructions and tools (tests connect to it in memory)
├── instructions.ts    the rules every client reads
├── version.ts         name, version and command, from package.json
├── settings.ts        setting(): environment variables, unexpanded placeholders as not set
├── dataDir.ts         where state and caches live
├── requirements.ts    programs the person installs apart: checked, explained, never installed
├── h5p/
│   ├── libraries/     the pinned libraries' semantics and translated defaults, as data (scripts/fetch-libraries.mjs)
│   ├── libraries.ts   finding a library, its semantics in a language
│   ├── contentTypes.ts the types built, what each is for, the parts the holders take
│   ├── content.ts     a content checked against semantics as H5PContentValidator walks it, with defaults
│   ├── html.ts        text as the validator keeps it: allowed tags, styles, protocols; plain text escaped
│   ├── rules.ts       each type's needs beyond its semantics (a right answer, a blank…)
│   ├── describe.ts    a type's fields as an agent fills them (list_h5p_types)
│   ├── package.ts     the .h5p zip, written content-only and read
│   ├── preview.ts     the HTML preview
│   └── build.ts       build_h5p's work: check, then write package and preview
└── tools/
    ├── index.ts       every tool, in order
    ├── types.ts       RegisterTool
    ├── reply.ts       structured result + JSON text
    └── <tool>.ts      one tool per file
```

- **Flow**: the client starts `dist/server.mjs`; `createServer()` registers every tool from `TOOLS`; each call validates its input with zod, does its work and returns `reply(...)`.
- **The domain's logic** grows in its own modules under `src/` (a client for an API, a parser), never inside a tool file: a tool is a schema, a description, annotations and a call.
- **H5P's rules, followed not run**: the checks mirror `H5PContentValidator` (h5p-php-library), which a site runs on deploy; what it would silently drop or change is refused here, so a package keeps its content. A group with a single field holds that field's value directly, as H5P saves it.
- **Requirements**: with an empty `REQUIREMENTS` there's no `check_requirements` tool; with any, it's registered and `server_info` reports them.
- **The bundle**: esbuild writes everything into `dist/server.mjs` (ADR-001); `docs/scripts/tools-reference.mjs` lists its tools for the site.
