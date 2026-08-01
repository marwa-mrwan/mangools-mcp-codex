# Mangools MCP

Standalone MCP server for the Mangools API with **82 tools** covering keyword research, SERP analysis, rank tracking, backlinks, competitor research, and AI search visibility.

Repository: [`marwa-mrwan/mangools-mcp`](https://github.com/marwa-mrwan/mangools-mcp)

## Exact Tool Inventory

| Service | Tools | Capabilities |
| --- | ---: | --- |
| Mangools | 2 | Locations and location details. |
| KWFinder | 21 | Related/competitor/suggested keywords, keyword details, trends, difficulty, gap analysis, limits, imports, exports, and lists. |
| SERPChecker | 5 | SERPs, reset, URL metrics, request history, and snapshots. |
| SERPWatcher | 26 | Trackings, keywords, reports, annotations, tags, statistics, and CRUD operations. |
| LinkMiner | 10 | Backlinks, URL metrics, favorites, request history, and exports. |
| SiteProfiler | 6 | Overview, audience, backlink profile, top content, competitors, and request history. |
| AI Search Watcher | 12 | Models, monitors, prompts, monitor settings, and CRUD operations. |
| **Total** | **82** | One standalone `mangools` stdio MCP server. |

## Setup

```bash
git clone https://github.com/marwa-mrwan/mangools-mcp.git
cd mangools-mcp
npm install
```

Create either `.env` or `.vscode/mcp.local.env`:

```env
MANGOOLS_API_KEY=your_local_api_key
```

Both files are ignored by Git. Never commit the API key.

## VS Code MCP

The tracked `.vscode/mcp.json` starts the server automatically from the repository root and loads `.vscode/mcp.local.env`.

Equivalent configuration:

```json
{
  "servers": {
    "mangools": {
      "type": "stdio",
      "command": "node",
      "args": ["${workspaceFolder}/index.js"],
      "envFile": "${workspaceFolder}/.vscode/mcp.local.env"
    }
  }
}
```

## Codex MCP

The root `.mcp.json` exposes the same server to Codex and loads the local `.env` file through `MCP_SECRETS_ENV_FILE`.

## Tool Arguments

Each tool accepts named top-level parameters plus optional raw `query` and `body` objects.

```json
{
  "keyword": "seo agency",
  "location_id": 2840,
  "language_id": 1000
}
```

For POST, PUT, PATCH, and DELETE tools, top-level non-path parameters are sent as JSON unless an explicit `body` is provided. Review mutation arguments carefully because these calls can change Mangools resources.

## Verification

```bash
npm test
npm run list-tools
npm audit --omit=dev
```

Expected registry total: `82` unique tools.

## Security

- API keys stay in ignored local files.
- GitHub Actions uses read-only repository permissions and checks tests, the tool registry, dependencies, and common secret formats.
- `main` is protected against force pushes and deletion and requires the CI check before future changes are merged.
- Dependabot and GitHub vulnerability alerts monitor dependencies.

Report security problems privately using [`SECURITY.md`](SECURITY.md).
