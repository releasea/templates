# Contributing Templates

This guide covers contributions to the public `templates/` catalog used by Releasea.

## What a Good Template Should Do

A good template should:

- solve a real workload shape clearly
- build from a clean checkout
- have a sane default port and health path when applicable
- avoid secrets and private infrastructure assumptions
- keep dependencies and setup steps reasonable
- give users a strong starting point instead of a broken scaffold

## When to Add a New Template

Add a new template when it represents a meaningfully different workload or developer path.

Good examples:

- a new language or framework with distinct defaults
- a static-site build shape not already covered
- a scheduled-job pattern with a clear use case

Do not add a new template just to rename an existing one.

## Required Contract

Every template contribution should be self-contained inside its folder.

Expected pieces:

- application source files
- build/runtime manifest files
- `releasea.yaml` metadata aligned with the template catalog contract
- a Docker build path when the template expects containerized deploys

## Metadata Expectations

Template metadata should be clear and stable.

At minimum, ensure:

- `id` is stable
- `label` is understandable
- `description` is specific
- `category` matches the workload shape
- `templateKind` is correct
- `templateDefaults` reflect what actually works

If the template advertises health checks, autoscaling, retries, or other highlights, the source should support them.

## Engineering Expectations

Keep templates practical.

Use these rules:

1. Prefer widely available open source dependencies.
2. Do not hardcode organization-specific secrets or endpoints.
3. Do not depend on private registries or private package feeds.
4. Keep startup and build steps legible.
5. Use safe defaults over clever defaults.

## Validation Expectations

Before opening a PR:

1. Verify the template files are internally consistent.
2. Verify `releasea.yaml` matches the actual source layout.
3. Verify the template can be imported without ambiguous metadata.
4. If you add a new template family, update [README.md](README.md).
5. If the template changes user-facing docs expectations, update `releasea-docs` too.

## PR Checklist

Include these points in the PR description:

- what workload the template is for
- why it is distinct from existing templates
- what defaults were chosen and why
- what manual validation you ran
- whether docs were updated

## Related Docs

- Root contribution guide: [docs.releasea.io/?doc=community-contributing](https://docs.releasea.io/?doc=community-contributing)
- Public roadmap: [docs.releasea.io/?doc=public-roadmap](https://docs.releasea.io/?doc=public-roadmap)
- End-user templates guide: [docs.releasea.io/?doc=templates](https://docs.releasea.io/?doc=templates)
- Template cookbook: [docs.releasea.io/?doc=template-cookbook](https://docs.releasea.io/?doc=template-cookbook)
