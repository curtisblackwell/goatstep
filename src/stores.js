import { get, writable } from "svelte/store";
import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

export const stepsConfig = writable([4, '16n']);
export const sequenceEvents = writable([]);
export const sequence = writable(new Tone.Sequence({
  callback: (time, note) => synth.triggerAttackRelease(note, get(stepsConfig)[1], time),
  humanize: false,
  events: get(sequenceEvents),
}).start(0));
