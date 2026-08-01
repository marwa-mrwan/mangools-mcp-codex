# Security Policy

Security fixes are applied to the latest commit on `main`.

Report vulnerabilities through **Security > Advisories > Report a vulnerability**. Do not place API keys, account data, or exploit details in a public issue.

- Store `MANGOOLS_API_KEY` only in `.env` or `.vscode/mcp.local.env`; both are ignored.
- Never commit request exports containing client or competitor data.
- Rotate the API key immediately if it is exposed, even if the Git commit is later deleted.
- `main` rejects force pushes and deletion and requires the repository CI check.
