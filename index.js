
function depthFirstSearch(rootNode, vertices, edges) {
    let queue = [rootNode]
    let found = [rootNode]
    while (queue.length !== 0) {
        let cur = queue.pop()
        if (!cur.discovered) {
            cur.discovered = true
            let adjacent = findAdjacent(cur.name, vertices, edges)
            found = found.concat(adjacent)
            queue = queue.concat(adjacent)
        }
    }

    return found
}

function findAdjacent(address, vertices, edges) {
    let filtered = edges.filter( edge => { return edge.includes(address) })
    let flattened = filtered.flat().filter( street => { return street !== address })
    return vertices.filter( vert => { return flattened.includes(vert.name) && vert.discovered === null })
}

let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices = [
    {name: '34th&6th', discovered: null},
    {name: '23rd&6th', discovered: null},
    {name: '14th&6th', discovered: null},
    {name: '28th&Bwy', discovered: null},
    {name: '23rd&Bwy', discovered: null},
    {name: '14th&Lex', discovered: null},
    {name: '23rd&Lex', discovered: null}
]

let result = depthFirstSearch(vertices[0], vertices, edges)
console.log('Result:', result)