# Buildkite SDK example

[![Build status](https://badge.buildkite.com/36b030e962785c8464830e73459fba1f41642f854caf826d16.svg)](https://buildkite.com/cnunciato/buildkite-sdk-example)
[![Add to Buildkite](https://img.shields.io/badge/Add%20to%20Buildkite-14CC80)](https://buildkite.com/new)

A super-simple example of using the [Buildkite SDK](https://buildkite.com/docs/pipelines/configure/dynamic-pipelines/sdk) to generate a pipeline dynamically with TypeScript.

```bash
npm -C .buildkite install
npm -C .buildkite --silent run pipeline
```

Produces:

```json
{
    "steps": [
        {
            "label": ":wave: Hi",
            "command": "echo 'Hello, world!'"
        }
    ]
}
```

... which then gets uploaded to Buildkite (`.buildkite/pipeline.yml`) at runtime:

```yaml
steps:
  label: ":pipeline: Generate the pipeline"
  command: |
    npm -C .buildkite install
    npm -C .buildkite --silent run pipeline | buildkite-agent pipeline upload
```

Fun stuff. 🪁
