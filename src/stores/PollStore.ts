import { writable, Writable } from 'svelte/store';
import type { PollType } from '../types';

const PollStore: Writable<PollType[]> = writable([
  {
    id: 1,
    question: 'Python or Javascript',
    answerA: 'Python',
    answerB: 'Javascript',
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: 'How are you?',
    answerA: 'Fine',
    answerB: 'Sad',
    votesA: 12,
    votesB: 4,
  },
]);

export default PollStore;
