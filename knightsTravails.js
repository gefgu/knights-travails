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
function knightMoves(startingPosition, endPosition) {
  const gameboard = Gameboard();
  const knight = Knight();

  let graph;

  let foundPath = false;

  function isEqualToEndPosition(position) {
    return position[0] === endPosition[0] && position[1] === endPosition[1];
  }

  function buildGraphLevelOrder() {
    graph = Node(startingPosition);
    let queue = [graph];
    while (queue.length > 0 && !foundPath) {
      const first = queue.shift();
      if (isEqualToEndPosition(first.position)) {
        foundPath = true;
        break;
      }
      first.possibleMoves = knight
        .getValidMoves(first.position, gameboard)
        .map((move) => Node(move));

      queue = queue.concat(...first.possibleMoves);
    }
  }

  buildGraphLevelOrder(graph);

  function findPath(graph) {
    // Transverse tree
    // If node has position different from end position
    // and null possible moves
    // delete it
    // keep going until there is only one path.

    function transverse(node) {
      if (node.possibleMoves === null) return; // there is no way to transverse this node

      node.possibleMoves = node.possibleMoves.filter((move) => {
        if (move.possibleMoves !== null) {
          transverse(move);
          return true; // only filter leafs of parent node - for now
        }
        move = move.position;
        return isEqualToEndPosition(move);
      });
    }

    function getPath(cleanNode) {
      let path = [cleanNode.position];

      let node = cleanNode;

      while (node?.position) {
        if (node?.possibleMoves === null || node === undefined) break;
        const newNode = node?.possibleMoves[0];
        if (newNode?.position) {
          path.push(newNode.position);
        }
        node = newNode;
      }
      return path;
    }

    transverse(graph);
    return getPath(graph);
  }

  return findPath(graph);
}

// Node
// Stores the position and all its possible and valid moves
// possible Moves is an array of possible Moves
function Node(position, possibleMoves = null) {
  return {
    position,
    possibleMoves,
  };
}

// Gameboard
// It shows if a square is a valid one.
function Gameboard() {
  const isValid = (position) => {
    const [x, y] = position;
    const validation = x >= 0 && x <= 8 && y >= 0 && y <= 8;
    return validation;
  };

  return { isValid };
}

// Knight
// It returns all possible moves (requires gameboard for validation)
// from a position in the gameboard
function Knight() {
  const getAllMoves = (startingPosition) => {
    const [x, y] = startingPosition;
    let moves = [];

    moves.push([x - 1, y - 2]);
    moves.push([x - 2, y - 1]);
    moves.push([x - 2, y + 1]);
    moves.push([x - 1, y + 2]);
    moves.push([x + 1, y + 2]);
    moves.push([x + 2, y + 1]);
    moves.push([x + 2, y - 1]);
    moves.push([x + 1, y - 2]);

    return moves;
  };

  const getValidMoves = (startingPosition, gameboard) => {
    return getAllMoves(startingPosition).filter((position) =>
      gameboard.isValid(position)
    );
  };

  return { getValidMoves };
}

export default knightMoves;
