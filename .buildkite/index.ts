import { Pipeline } from "@buildkite/buildkite-sdk";

const pipeline = new Pipeline();

pipeline.addStep({
    label: ":wave: Hello from TypeScript!",
    command: "echo 'hi, world!'",
});

console.log(pipeline.toJSON());
