---
title: Getting started
sidebar_label: Getting started
---

# Getting started

You need [Node.js](https://nodejs.org) 20 or later.

## In an agent built on agent-kit

Install its extension from Falken's Lab's marketplace, which runs this server at a fixed version and adds the skills to use it well:

```bash
my-agent extension marketplace add falkenslab/agent-extensions
my-agent extension add h5p-mcp@falkenslab
```

## In Claude Code

```bash
claude mcp add h5p-mcp -- npx -y @falkenslab/h5p-mcp
```

Or, with its skills, as a plugin from the same marketplace:

```bash
claude plugin marketplace add falkenslab/agent-extensions
claude plugin install h5p-mcp@falkenslab
```

## Checking it works

Ask the agent: "Which version of h5p-mcp are you using?" It calls `server_info`.
