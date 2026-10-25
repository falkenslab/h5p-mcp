---
title: Building packages
sidebar_label: Building packages
---

# Building packages

You ask for an activity in your own words; the agent writes the content, checks the content type's fields with `list_h5p_types`, and builds the package with `build_h5p`. You get two files in the folder you choose: the `.h5p` to upload, and a `.preview.html` to open in your browser and review the questions before anyone sees them.

## The content types

| Content type | What it's for |
| --- | --- |
| 🔘 Multiple choice (`H5P.MultiChoice` 1.16) | A question with several answers, one or more of them right |
| ✔️ True/false (`H5P.TrueFalse` 1.8) | A statement the student marks as true or false |
| ✏️ Fill in the blanks (`H5P.Blanks` 1.14) | Sentences with gaps the student types into |
| 🧲 Drag the words (`H5P.DragText` 1.10) | A text with words the student drags into place |
| 🃏 Dialog Cards (`H5P.Dialogcards` 1.9) | Cards with a prompt on the front and its answer on the back |
| 📇 Flashcards (`H5P.Flashcards` 1.7) | Cards whose answer the student types |
| 📝 Question Set (`H5P.QuestionSet` 1.21) | A quiz of multiple choice, true/false, blanks and drag the words questions |
| 🖼️ Course Presentation (`H5P.CoursePresentation` 1.27) | Slides with text and any of the questions above, and Dialog Cards |

A package carries only its content, not H5P's code: it plays on a site that has that content type installed at that version, such as a Moodle with these types (Moodle 5 installs them from the H5P Hub; an administrator can check them in Site administration > H5P > Manage H5P content types). If the site has another version, the package doesn't deploy.

## What's checked

Before anything is written, the content is checked with the rules a site applies when it deploys a package, so what you preview is what students see:

- every required field is there, with the right kind of value, within its limits;
- text that takes formatting uses only the HTML tags that field allows (no scripts, no styles but alignment); any other text is shown as written;
- each type's own needs: a multiple choice has at least two answers and one of them right, a blank or a word to drag sits between asterisks (`*Paris*`), a card has both sides, a presentation has a slide.

When something is wrong, nothing is written and the agent gets the list of what to fix, field by field.

## Languages

The buttons and messages (Check, Retry, Show solution…) come in the package's language, from each content type's own translations, available in about fifty languages. When a content type has no translation for the language you ask for, they stay in English and the agent tells you. One exception: Flashcards 1.7 always shows its card counter (`Card 1 / 2`) in English, since its player doesn't take that text from the package.

## Not yet

- Images, audio and video in a package.
- Uploading: in Moodle, the moodle-teacher extension creates the H5P activity with the package.
- Other content types (Interactive Video comes later).

## Reading a package

`read_h5p` gives back what a local `.h5p` holds, in the same shape `build_h5p` takes: ask the agent to review a package, or to change it and build it again. It also reads packages that bring H5P's code inside them (their content only).
