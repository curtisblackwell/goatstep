<script>
  import { sequence, sequenceEvents } from "./stores";

  export let number;
  export let on = false;
  export let sound = "C4";

  const i = number - 1;
  function toggle() {
    on = !on;

    sequenceEvents.update((current) => {
      current[i] = on ? sound : null;

      return current;
    });

    $sequence.events = $sequenceEvents;
  }
</script>

<button class:bg-red-400={on} class="bg-gray-400 p-4" on:click={toggle}>
  <span class="rounded-full bg-gray-800 h-7 w-7 inline-block leading-[1.75]">
    {number}
  </span>
</button>
