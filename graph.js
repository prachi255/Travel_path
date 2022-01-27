
function createGraph(V,E){
    // V is no of vertices
    // E is array of edges with given weights

    let adjacency_List=[];
    for(let i=0;i<V;i++){
       adjacency_List.push([]);
    }

    for(let i=0;i<E.length;i++){
 
        adjacency_List[E[i][0]].push([E[i][1],E[i][2]]);
        adjacency_List[E[i][1]].push([E[i][0],E[i][2]]);
    }

  
    return adjacency_List;
}

//dijkstra algorithm
function dijkstra(graph,V,src){

    //visited array tells if the vertex is already visited or not
    let visited=Array(V).fill(false);

    //distance array will tell the minimum dist from source node to that node and its parennt node

    let distances=[];
    for(let i=0;i<V;i++){
        distances.push([Number.MAX_SAFE_INTEGER ,-1]);
    }
    distances[src][0]=0;

    for(let i=0;i<V-1;i++){
        let minIdx=-1;
        //finding the minIdx
        for(let j=0;j<V;j++){
            if(visited[j]==false){
            if(minIdx==-1 || distances[j][0]<distances[minIdx][0] ){
                minIdx=j;
            }
            }
        }
        visited[minIdx]=true;
     //traversing through the neighbours and updating if min is found
     for(let i=0;i<graph[minIdx].length;i++){
         let edge=graph[minIdx][i];
      
if(visited[edge[0]]==false&&distances[edge[0]][0]>distances[minIdx][0]+edge[1])
          {
    distances[edge[0]][0]=distances[minIdx][0]+edge[1];     
    distances[edge[0]][1]=minIdx;
            }
     }

    }

return distances;

}

let src=0;
let V = 9;
let Edges = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
    [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];
// console.log(Edges);
let graph=createGraph(V,Edges);
let distances=dijkstra(graph,V,src);
console.log(distances);
