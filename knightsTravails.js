// knightMoves
// shows the shortest possible way to get from one square 
// to another by outputting all squares the 
// knight will stop on along the way.
// eg. knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

// pseudocode
// build a graph using all possible moves
// from every possible move, keep going until destination is found.

// The algorithm:
// Compute all possible moves from starting position
// For each of these, compute all possible moves.
// Repeat until destination is found.
// With all these data stored in a graph
// search for the shortest path.

// To do this, use knight which has a gameboard
// Return the shortest path.


// Gameboard
// It shows if a square is a valid one.

// Knight
// It returns all possible moves (requires gameboard for validation)
// from a position in the gameboard