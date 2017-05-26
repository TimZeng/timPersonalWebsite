exports.blog = {"title": "Matrix - Minimum Path Sum",
  "time": "May-25-2017",
  "language": "JavaScript",
  "category": "Algorithm",
  "tags": ["Matrix"],
  "description": "A m x n matrix, find a path which minimizes the sum of all numbers along the way",
  "content": [
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"Given a "},
          {"type": "code", "content":"m x n"},
          {"type": "text", "content":" grid filled with non-negative numbers, find a path from top left to bottom right which "},
          {"type": "strong", "content": "minimizes the sum"},
          {"type": "text", "content":" of all numbers along its path"}
        ]
      },
      {
        "type": "note",
        "content": [
          [
            {"type": "text", "content": "You can only move either "},
            {"type": "strong", "content": "down"},
            {"type": "text", "content": " or "},
            {"type": "strong", "content": "right"},
            {"type": "text", "content": " at any point in time"}
          ]
        ]
      },
      {
        "type": "logic",
        "title": "Approach #1:",
        "content": [
          [
            {"type": "text", "content": "Go through every possible path"}
          ],
          [
            {"type": "text", "content": "Calculate sum and find minimum"}
          ]
        ]
      },
      {
        "type": "code",
        "functions": ["minPathSum ", "traverse "],
        "content": [
          {
            "type":"code",
            "content":["const ","minPathSum ","= ","grid ","=> ","{"]
          },
          {
            "type":"text",
            "content":"  // if nothing in the grid, return 0"
          },
          {
            "type":"code",
            "content":["  if ","( grid",".","length ","=","=","= ","0"," ) ","return ","0",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // initiate variables"
          },
          {
            "type":"code",
            "content":["  var ","outPut ","= ","Infinity",";"]
          },
          {
            "type":"code",
            "content":["  var ","m ","= ","grid",".","length ","- ","1",";"]
          },
          {
            "type":"code",
            "content":["  var ","n ","= ","grid[","0","]",".","length ","- ","1",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // defined traverse function to go through every possible path"
          },
          {
            "type":"code",
            "content":["  const ","traverse ","= ","(i, sum) ","=> ","{"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"    // calculate sum"
          },
          {
            "type":"code",
            "content":["    sum ","+","= ","grid[i[","0","]][i[","1","]];"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content": "    // if reached the bottom right corner"
          },
          {
            "type":"code",
            "content":["    if ","( i[","0","] ","=","=","= ","m ","&","&"," i[","1","] ","=","=","= ","n ) {"]
          },
          {
            "type":"text",
            "content":"      // update outPut"
          },
          {
            "type":"code",
            "content":["      outPut ","= ","Math",".","min(outPut, sum);"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"    // if not, continue"
          },
          {
            "type":"code",
            "content":["    } ","else ","{"]
          },
          {
            "type":"text",
            "content":"      // if can go down"
          },
          {
            "type":"code",
            "content":["      if ","( i[","0","] ","< ","m ) {"]
          },
          {
            "type":"text",
            "content":"        // go down"
          },
          {
            "type":"code",
            "content":["        traverse( [i[","0","] ","+ ","1",", i[","1","]], sum );"]
          },
          {
            "type":"code",
            "content":["      }"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"      // then if can go right"
          },
          {
            "type":"code",
            "content":["      if ","( i[","1","] < n ) {"]
          },
          {
            "type":"text",
            "content":"        // go right"
          },
          {
            "type":"code",
            "content":["        traverse( [i[","0","], i[","1","] ","+ ","1","], sum );"]
          },
          {
            "type":"code",
            "content":["      }"]
          },
          {
            "type":"code",
            "content":["    }"]
          },
          {
            "type":"code",
            "content":["  };"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // call function with top left corner and 0 sum"
          },
          {
            "type":"code",
            "content":["  traverse([","0",",","0","], ","0",");"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // return outPut"
          },
          {
            "type":"code",
            "content":["  return ","outPut;"]
          },
          {
            "type":"code",
            "content":["};"]
          }
        ]
      },
      {
        "type": "logic",
        "title": "Approach #2:",
        "content": [
          [
            {"type": "text", "content": "Manipulate the grid"}
          ],
          [
            {"type": "text", "content": "Make the current grid equals to the min sum from either top or left"}
          ],
          [
            {"type": "text", "content": "Return the bottom right corner value"}
          ]
        ]
      },
      {
        "type": "code",
        "functions": ["minPathSum "],
        "content": [
          {
            "type":"code",
            "content":["const ","minPathSum ","= ","grid ","=> ","{"]
          },
          {
            "type":"text",
            "content":"  // if nothing in the grid, return 0"
          },
          {
            "type":"code",
            "content":["  if ","( grid",".","length ","=","=","= ","0"," ) ","return ","0",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // initiate variables and create m and n indexes"
          },
          {
            "type":"code",
            "content":["  const ","height ","= ","grid",".","length;"]
          },
          {
            "type":"code",
            "content":["  const ","width ","= ","grid[","0","]",".","length;"]
          },
          {
            "type":"code",
            "content":["  var ","m ","= ","0",";"]
          },
          {
            "type":"code",
            "content":["  var ","n ","= ","1",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // traverse through the grid"
          },
          {
            "type":"code",
            "content":["  while ","( m ","< ","height ) {"]
          },
          {
            "type":"code",
            "content":["    while ","( n ","< ","width ) {"]
          },
          {
            "type":"text",
            "content":"      // if on the first row"
          },
          {
            "type":"code",
            "content":["      if ","( m ","=","=","= ","0"," ) {"]
          },
          {
            "type":"text",
            "content": "        // just add the left value to the current cell"
          },
          {
            "type":"code",
            "content":["        grid[m][n] ","+","= ","grid[m][n","-","1","];"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"      // if on the first column"
          },
          {
            "type":"code",
            "content":["      } ","else ","if ","( n ","=","=","= ","0"," ) {"]
          },
          {
            "type":"text",
            "content":"        // just add the up value to the current cell"
          },
          {
            "type":"code",
            "content":["        grid[m][n] ","+","= ","grid[m","-","1","][n];"]
          },
          {
            "type":"break"
          },
          {
            "type":"code",
            "content":["      } ","else ","{"]
          },
          {
            "type":"text",
            "content":"        // add the lower of left or up value to the current cell"
          },
          {
            "type":"code",
            "content":["        grid[m][n] ","+","= ","Math",".","min(grid[m][n","-","1","], grid[m","-","1","][n]);"]
          },
          {
            "type":"code",
            "content":["      }"]
          },
          {
            "type":"text",
            "content":"      // increase n to go right"
          },
          {
            "type":"code",
            "content":["      n","+","+",";"]
          },
          {
            "type":"code",
            "content":["    }"]
          },
          {
            "type":"text",
            "content":"    // increase m to go down"
          },
          {
            "type":"code",
            "content":["    m","+","+",";"]
          },
          {
            "type":"text",
            "content":"    // reset n to the first column"
          },
          {
            "type":"code",
            "content":["    n ","= ","0",";"]
          },
          {
            "type":"code",
            "content":["  }"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // return the bottom right cell value"
          },
          {
            "type":"code",
            "content":["  return ","grid[height","-","1","][width","-","1","];"]
          },
          {
            "type":"code",
            "content":["};"]
          }
        ]
      }
    ]
  };
