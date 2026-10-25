---
title: Releases
sidebar_label: Releases
---

# Releases

## 0.1.0

25 October 2026. The first release: the agent builds H5P packages ready to upload, and reads them back.

- `list_h5p_types` lists the eight content types (multiple choice, true/false, fill in the blanks, drag the words, Dialog Cards, Flashcards, Question Set and Course Presentation) with the version a site needs, and gives each one's fields.
- `build_h5p` checks the content with the rules a site applies when it deploys a package, refuses it with what to fix, or writes the `.h5p` and a preview page to review it. Buttons and messages come in the package's language.
- `read_h5p` gives back a package's content, to review it or change it and build it again.

Not yet: images, audio and video in a package.
