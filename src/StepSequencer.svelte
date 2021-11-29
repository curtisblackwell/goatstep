<script>
  import { beforeUpdate, onMount } from "svelte";
  import { get } from "svelte/store";
  import Step from "./Step.svelte";
  import { sequence, sequenceEvents, stepsConfig } from "./stores";

  export let stepsPerRow = $stepsConfig[0];
  let stepCount = 4 * stepsPerRow;
  let steps = [];
  let number = 0;

  function setSteps() {
    stepCount = 4 * stepsPerRow;
    steps = [];
    number = 0;
    while (steps.length < stepCount) {
      number++;
      steps.push({ number, on: false });
    }

    sequenceEvents.set(new Array(stepCount).fill(null));

    sequence.update((current) => {
      current.events = get(sequenceEvents);

      return current;
    });
  }

  onMount(() => setSteps());
  beforeUpdate(() => setSteps());
</script>

{#each steps as step, i}
  <Step {...step} />
{/each}
