<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


<!-- BEGIN:change-gate -->
## Change control for this site

- Before editing code or configuration, inspect the existing issue/PR, current branch and baseline commit. Preserve unrelated and uncommitted work. Reuse an existing PR when it already addresses the same defect.
- One independently verifiable behavior change per branch/PR. In the PR state the observed problem, acceptance condition, exact scope, test evidence before/after, remaining unknowns and a rollback path. Keep work in draft when verification is incomplete.
- Check the smallest relevant reproduction and regression tests. Where feasible run `npx tsc --noEmit`, `npm run lint` and `npm run build`; report pre-existing errors and any tests not run. For UI changes, add real browser checks (initial load, scrolled state and mobile) before claiming browser correctness. Synthetic tests do not establish production behavior.
- Do not publish credentials, real client data, private Notion/Obsidian notes, or other confidential information in this public repository, PR body or test output.
- Do not merge, change production settings, or publish a live deployment without explicit user approval. A passing PR is not proof that production was checked.
- Keep the baseline commit SHA and describe a reversible path: revert the change and redeploy the prior working release if needed. Git rollback does not automatically restore external configuration or data.
- After an approved deployment, verify the real user scenario and report exactly what was confirmed, what was not, the PR/commit URL and the next step. Do not create a duplicate issue or another project tracker just for this workflow.
<!-- END:change-gate -->
