# knights-travails

![hassan-pasha-7SjEuEF06Zw-unsplash](https://user-images.githubusercontent.com/53129852/189411378-38764d5b-7ff5-4ac2-aaf1-a48c422e707f.jpg)

A function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

Using The Odin Project guidelines and my recent learning of algorithms and data structures, I build this project which shows the shortest path a knight can make to go from a starting point to an end point.

To do this, I implemented something similar to breath-first search to build a graph with all the paths the knight can take, stopping the graph creation when the destination is found.

With this graph, the algorithm uses breath-first search to select the nodes that lead to the right destination.


## Example:
Running `knightMoves([0, 0], [7, 7])` results in:
```js
[
  [ 0, 0 ], 
  [ 1, 2 ],
  [ 0, 4 ], 
  [ 1, 6 ],
  [ 3, 7 ], 
  [ 5, 6 ],
  [ 7, 7 ]
]
```


## Usage
Run tests with:
```bash
npm run test
```
