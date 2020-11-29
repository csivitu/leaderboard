/* eslint-disable no-console */
import Bull = require('bull');

interface Interface2 {
  name: string,
  order: string,
}

interface Interface1 {
  parameters: Interface2[],

}

class Leaderboard {
  leaderboard: any[] = [];

  Queue: Bull.Queue;

  sorting: Interface1;

  i: number = 0;

  constructor(sorting: Interface1) {
    // this.Queue = new Bull('queue', 'redis://localhost:6379');
    this.sorting = sorting;
    // this.Queue.process((job: any ): void => {
    //  this.task(job.data);
    // } );
  }

  show(): void {
    console.log(this.sorting);
    console.log(this.leaderboard);
  }

  add(data: any): void {
    this.leaderboard.push(data);
    // this.Queue.add(data);
  }

  task(job: any): void {
    if (this.leaderboard.findIndex((o) => o.name === job.name) === -1) {
      this.leaderboard.push({ job });
    }
    this.sorter();
  }

  // eslint-disable-next-line max-len
  comparefunc = (b: any, c: any, name: string = this.sorting.parameters[this.i].name, order: string = this.sorting.parameters[this.i].order): number => {
    if (order === 'ascending') {
      if (b[name] !== c[name] || this.i === this.sorting.parameters.length - 1) {
        return b[name] - c[name];
      }
      this.i += 1;
      return this.comparefunc(b, c);
    }
    if (order === 'descending') {
      if (b[name] !== c[name] || this.i === this.sorting.parameters.length - 1) {
        return c[name] - b[name];
      }
      this.i += 1;
      return this.comparefunc(b, c);
    }
    return 0;
  }

  sorter(): void {
    this.i = 0;
    this.leaderboard.sort((b: number, c: number): any => this.comparefunc(b, c));
  }

  getLeaderboard(): any {
    return this.leaderboard;
  }
}

const a = new Leaderboard({
  parameters: [{ name: 'score', order: 'descending' }, { name: 'score1', order: 'ascending' }],
});

a.show();

a.add({ name: 'Arushi', score: 2, score1: 2 });
a.add({ name: 'Arushi1', score: 1, score1: 1 });
a.show();
a.sorter();
a.show();
