/* eslint-disable no-console */
import Bull = require('bull');

interface Interface2 {
  name: string,
  order: string,
}

interface Interface1 {
  parameters: Interface2[],

}

// eslint-disable-next-line no-unused-vars
class Leaderboard {
  leaderboard: any[] = [];

  Queue: Bull.Queue;

  sorting: Interface1;

  i: number = 0;

  constructor(sorting: Interface1) {
    this.Queue = new Bull('queue', 'redis://localhost:6379');
    this.sorting = sorting;
    this.Queue.process((job: any): void => {
      this.task(job.data);
    });
  }

  show(): void {
    console.log(this.sorting);
    console.log(this.leaderboard);
  }

  add(data: any): void {
    this.Queue.add(data);
  }

  task(job: any): void {
    if (this.leaderboard.findIndex((o) => o.name === job.name) === -1) {
      this.leaderboard.push({ job });
    }
    this.sorter();
  }

  // eslint-disable-next-line max-len
  comparefunc = (a: any, b: any, name: string = this.sorting.parameters[this.i].name, order: string = this.sorting.parameters[this.i].order): number => {
    if (order === 'ascending') {
      if (a[name] !== b[name] || this.i === this.sorting.parameters.length - 1) {
        return a[name] - b[name];
      }
      this.i += 1;
      return this.comparefunc(a, b);
    }
    if (order === 'descending') {
      if (a[name] !== b[name] || this.i === this.sorting.parameters.length - 1) {
        return b[name] - a[name];
      }
      this.i += 1;
      return this.comparefunc(a, b);
    }
    return 0;
  }

  sorter(): void {
    this.i = 0;
    this.leaderboard.sort((a: number, b: number): any => this.comparefunc(a, b));
  }

  getLeaderboard(): any {
    return this.leaderboard;
  }
}
