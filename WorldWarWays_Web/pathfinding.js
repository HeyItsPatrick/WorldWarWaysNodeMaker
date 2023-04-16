function shortestDistanceNode(distances, visited) {
    let shortest = null;
    for (let node in distances) {
        let currentIsShortest =
            shortest === null || distances[node] < distances[shortest];
        if (currentIsShortest && !visited.includes(node)) {
            shortest = node;
        }
    }
    return shortest;
}

function findShortestPath(graph, startNode, endNode) {
    let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(graph[startNode], distances);
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
        parents[child] = startNode;
    }
    let visited = [];
    let node = shortestDistanceNode(distances, visited);
    while (node) {
        let distance = distances[node];
        let children = graph[node];
        for (let child in children) {
            if (String(child) === String(startNode)) {
                continue;
            } else {
                let newdistance = distance + children[child];
                if (!distances[child] || distances[child] > newdistance) {
                    distances[child] = newdistance;
                    parents[child] = node;
                }
            }
        }
        visited.push(node);
        node = shortestDistanceNode(distances, visited);
    }

    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
        shortestPath.push(parent);
        parent = parents[parent];
    }
    shortestPath.reverse();
    let results = {
        distance: distances[endNode],
        path: shortestPath,
    };
    return results;
}

function generateFWADistances(nodeGraph) {
    // nodeGraph will be the mapNodes page var
    let largeValue = 1073741823 >> 1;
    let adjList = [];
    let adjMatrix = [];
    let next = [];
    // convert entire node graph into matrix, where each coord position is either infinity or the weight between the nodes of that index
    let vertexCount = Object.entries(nodeGraph).map((a) => parseInt(a[0].slice(4))).pop() + 1;
    // Create a 2D array and populate it with a large value except at
    // i = j which is set equal to 0.
    for (let r = 0; r < vertexCount; r++) {
        adjMatrix[r] = [];
        next[r] = [];
        for (let c = 0; c < vertexCount; c++) {
            adjMatrix[r][c] = r == c ? 0 : largeValue;
            next[r][c] = r == c ? 0 : largeValue;
        }
    }

    // adjList is format [[to,from,weight],...]
    for(let nodeID in nodeGraph){
        let item = document.getElementById(nodeID);
        let nodes = item.getAttribute("Nodes").split(',');
        nodes.forEach(function (cNode, index) {
            if (cNode.trim().length != 0) {
                let n1 = document.getElementById(cNode.trim());
                if (n1) {
                adjList.push([parseInt(n1.id.slice(4)), parseInt(nodeID.slice(4)), getDistance(item, n1)]);
                }
            }
        });
    }
    // nodeArray.forEach(function (item, index) {
    //     let nodes = item.getAttribute("Nodes").substr(2).split(',');
    //     nodes.forEach(function (cNode, index) {
    //         if (cNode.trim().length != 0) {
    //             let n1 = nodeGraph[cNode.trim().slice(4)];
    //             if (!n1) {
    //                 console.log(n1);
    //             }
    //             adjList.push([parseInt(n1.id.slice(4)), parseInt(item.id.slice(4)), getDistance(item, n1)]);
    //         }
    //     });
    // });
    // Map the adjacency list to the sparse array.
    for (let i = 0; i < adjList.length; i++) {
        adjMatrix[adjList[i][0]][adjList[i][1]] = adjList[i][2];
    }
    for (let i = 0; i < vertexCount; i++) {
        for (let j = 0; j < vertexCount; j++) {
            if (adjMatrix[i][j] == largeValue) {
                next[j][i] = -1;
            } else {
                next[j][i] = j;
            }
        }
    }

    // Implement the Floyd Warshall dynamic programming algorithm.
    for (let k = 0; k < vertexCount; k++) {
        for (let i = 0; i < vertexCount; i++) {
            for (let j = 0; j < vertexCount; j++) {
                if (adjMatrix[i][j] > adjMatrix[i][k] + adjMatrix[k][j]) {
                    adjMatrix[i][j] = adjMatrix[i][k] + adjMatrix[k][j];
                    next[j][i] = next[k][i];
                }
            }
        }
    }
    // console.log(adjMatrix);
    // console.log(next);
    return {adjMatrix,next};
}

function findShortestPathFWA(start, end, next) {
    if (next[start][end] == -1) {
        console.log("no path",start,"->",end);
    } else {
        let path = [end];
        let u = end;
        while (u != start) {
            u = next[start][u];
            path.push(u);
        }
        path.reverse();
        // console.log(path);
        return path;
    }
    return [];
}

function findLongestPathFWA(adjMat, paths) {
  let longestPath = 0;
  for (let r=0; r<paths.length; r++){
    for (let c=0; c<paths[r].length; c++) {
      let path = findShortestPathFWA(r,c,paths);
      if (longestPath<path.length)
        longestPath = path.length;
    }
  }
  console.log("Longest Path: ", longestPath);
}