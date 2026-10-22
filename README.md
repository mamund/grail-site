# GRAIL landing page

Static landing page for GRAIL, an open-source runtime for bounded autonomy. The site presents GRAIL's environment-first approach, explains the core model, and links to the published **v0.3.0-beta.1 beta** and working examples.

**Website:** https://mamund.github.io/grail-site/

## Preview locally

Open `index.html` in a browser, or serve this directory with:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000/.

## Publish

The site is published from the `mamund/grail-site` repository using its existing GitHub Pages deployment workflow.

1. Update the site files in the repository.
2. Commit and push the changes to the branch used by the existing deployment workflow.
3. Check the workflow's deployment result and visit https://mamund.github.io/grail-site/.

The repository's existing Pages workflow and settings are authoritative; there is no need to reconfigure Pages for a content update.

## Release information

The landing page currently highlights **GRAIL v0.3.0-beta.1 (public beta)**. The installation command should explicitly select the beta release:

```bash
npm install -g @mamund/grail@beta
```

The `latest` npm tag may refer to an earlier release, so avoid an unqualified `npm install -g @mamund/grail` when recommending v0.3.0-beta.1.

The v0.3.0-beta.1 page also highlights interactive STDIO capabilities, live progress reporting, execution timing, and both CLI and programmatic API usage. It also introduces optional best-effort recovery: GRAIL coordinates compensating actions in reverse order while capabilities implement the domain-specific recovery operations. Enable recovery with `grail run --recover`; recovery does not turn an unsuccessful pursuit into a successful one.

When updating the installation command in `index.html`, check `script.js` as well: the Copy button must copy the current command.

## Link destinations

- Runtime, source, and documentation: https://github.com/mamund/grail-release
- CLI tour: https://github.com/mamund/grail-release/tree/main/examples/cli-tour
- API consumer example: https://github.com/mamund/grail-release/tree/main/examples/api-consumer
- Experimental examples and development history: https://github.com/mamund/grail-public
- Recovery specification: https://github.com/mamund/grail-release/blob/main/docs/recovery-spec.md
- Capability recovery guide: https://github.com/mamund/grail-release/blob/main/docs/capability-recovery-guide.md
- Portable recovery demo: https://github.com/mamund/grail-worlds/tree/main/recovery-demo
- npm package: https://www.npmjs.com/package/@mamund/grail

## Site maintenance

- Keep the hero's beta version and installation command aligned with the intended npm dist-tag.
- Keep links to examples and documentation aligned with the release repository.
- Preserve the distinction between the architecture diagram's illustrative relationships and a prescribed workflow.
- Review the favicon and branding assets when the project identity changes.
