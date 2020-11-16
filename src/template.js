const leaderboard = require('leaderboard');

/**
 * Dependencies:
 * 
 * 1. Bull.js
 * 2. Redis
 */

/**
 * 1. Try to minimize use of global variables in the library
 * 2. Get rid of the db, the user will fill db everytime they start the server
 * 3. Field to sort the leaderboard by
*/

/**
 * TODO
 * 1. Think if we can do multiple worker thingy
 * 2. Think about ascending descending score sort thingy (either take from user)
 */

function solve() {
    // logic for solving stuff

    leaderboard.add({...solveData}, {
        sortBy: ['param1', 'param2']
        // Sort by param1 first, if conflicts, sort by param2
    });
}


function displayLeaderboard() {
    // Returns the current leaderboard
    return leaderboard.get()
}


// Internal structure

interface LeaderboardInterface {
    ...
}

class Leaderboard {
    leaderboard LeaderboardInterface
    bull BullInterface

    constructor() {

    }

    add(job) {
        // Add to bulljs queue
        // Bulljs does the task
        // task will return leaderboard]

        Queue.add((job) => task(job, leaderboard))
    }

    get() {

    }

    task(job) {
        
    }
}

// Instantiate leaderboard
// loop(database) => add(items) => get()


arr.sort((a, b) => {
    x = compare(a, b, 'score', 'asc')
    if (x) {
        return x
    }

    y = compare(a, b, 'time', 'desc')
    if (y) {
        return y
    }
})