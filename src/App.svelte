<script>
  import { onMount } from "svelte";
  import * as Tone from "tone";
  import { sequence, stepsConfig } from "./stores";
  import PlayButton from "./PlayButton.svelte";
  import StepSequencer from "./StepSequencer.svelte";
</script>

<svelte:head>
  <script src="https://cdn-tailwindcss.vercel.app"></script>
  <style type="text/tailwindcss">
    body {
      @apply p-4 bg-gray-900 text-gray-300;
    }
    label {
      @apply block cursor-pointer;
    }
  </style>
</svelte:head>

<main>
  <div class="grid gap-4 grid-cols-5">
    <button class="bg-gray-700 p-4">sound</button>
    <button class="bg-gray-700 p-4">pattern</button>
    <button class="bg-gray-700 p-4">bpm</button>
    <button class="bg-gray-700 p-4">a</button>
    <button class="bg-gray-700 p-4">b</button>

    <div class="col-span-4 grid grid-cols-{$stepsConfig[0]} gap-4">
      <StepSequencer bind:stepsPerRow={$stepsConfig[0]} />
    </div>

    <div class="col-span-1 grid grid-cols-1 gap-4">
      <button class="bg-gray-700 p-4">record</button>
      <button class="bg-gray-700 p-4">FX</button>
      <PlayButton />
      <button class="bg-gray-700 p-4">write</button>
    </div>
  </div>

  <div class="mt-4 space-y-2">
    <div class="flex space-x-2">
      <div>
        <label for="stepsPerRow" class="sr-only">Steps per row</label>
        <input
          type="number"
          bind:value={$stepsConfig[0]}
          class="bg-gray-400 p-2 text-gray-800 w-12"
          id="stepsPerRow"
          title="Steps per row"
        />
      </div>

      <div>
        <label for="stepLength" class="sr-only">Step length</label>
        <input
          type="text"
          bind:value={$stepsConfig[1]}
          class="bg-gray-400 p-2 text-gray-800 w-12"
          id="stepLength"
          title="Step length"
        />
      </div>
    </div>

    <label
      for="humanize"
      title="Use slightly imperfect timing to sound more human."
      class="flex items-center"
    >
      <input type="checkbox" bind:checked={$sequence.humanize} id="humanize" />
      <span class="ml-2">Humanize</span>
    </label>
  </div>
</main>
