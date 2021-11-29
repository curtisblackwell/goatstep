<script>
  import { get } from "svelte/store";
  import * as Tone from "tone";
  import { sequence, sequenceEvents } from "./stores";

  let isPlaying = false;

  function toggle() {
    if ((isPlaying = !isPlaying)) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
  }
</script>

<button class="bg-gray-700 p-4" on:click={toggle}>play</button>
