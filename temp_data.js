exports.blog = {"title": "LINKEDLIST - REMOVE NTH NODE FROM END",
  "time": "May-22-2017",
  "language": "JavaScript",
  "category": "Algorithm",
  "tags": ["Linkedlist","Traverse"],
  "content": [
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"Given a linked list, remove the nth node from the end of list and return its head."}
        ]
      },
      {
        "type": "example",
        "content": [
          [
            {"type": "text", "content": "Given linked list: "},
            {"type": "code", "content": "1->2->3->4->5"},
            {"type": "text", "content": ", and "},
            {"type": "code", "content": "n = 2"}
          ],
          [
            {"type": "text", "content": "After removing the second node from the end, the linked list becomes "},
            {"type": "code", "content": "1->2->3->5"}
          ]
        ]
      },
      {
        "type": "note",
        "content": [
          [
            {"type": "text", "content": "Given "},
            {"type": "code", "content": "n"},
            {"type": "text", "content": " will always be valid."}
          ],
          [
            {"type": "text", "content": "Try to do this in one pass."}
          ]
        ]
      },
      {
        "type": "logic",
        "content": [
          [
            {"type": "text", "content": "Key to solve is how to traverse the linked list "},
            {"type": "strong", "content": "from the end"}
          ],
          [
            {"type": "text", "content": "so use recursion to go to the end of the list first then increase count from the tail"}
          ]
        ]
      },
      {
        "type": "code",
        "content": [
          {
            "type":"code",
            "content":["const ","removeNthFromEnd ","= ","(","head",", ","n",") ","=> ","{"]
          },
          {
            "type":"text",
            "content":"  // define a recursion function of traversing"
          },
          {
            "type":"code",
            "content":["  const ", "remove ", "= ", "node ", "=> ", "{"]
          },
          {
            "type":"text",
            "content":"    // base case, if node is null then we know we reached the tail"
          },
          {
            "type":"code",
            "content":["    if ","( ","!","node ",") ","return ","[","1",", ","null","]",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"    // create variables to track count the previous node from tail"
          },
          {
            "type":"code",
            "content":["    const ","[","i",", ","nextNode","] ","= ","remove","(","node",".","next",")",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content": "    // if the current node is the Nth from the tail"
          },
          {
            "type":"code",
            "content":["    if ","( ","i ","=== ","n ",") ","{"]
          },
          {
            "type":"text",
            "content":"      // increase count and return next node"
          },
          {
            "type":"text",
            "content":"      // so skips the current node"
          },
          {
            "type":"code",
            "content":["      return ","[","i ","+ ","1",", ","nextNode","]",";"]
          },
          {
            "type":"code",
            "content":["    } ","else ","{"]
          },
          {
            "type":"text",
            "content":"      // update next node to reflect the removal"
          },
          {
            "type":"code",
            "content":["      node.next ","= ","nextNode",";"]
          },
          {
            "type":"code",
            "content":["      return ","[","i ","+ ","1",", ","node","]",";"]
          },
          {
            "type":"code",
            "content":["    }"]
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
            "content":"  // return the second element, which is the head, from the recursion funciton"
          },
          {
            "type":"code",
            "content":["  return ","remove","(","head",")","[","1","]",";"]
          },
          {
            "type":"code",
            "content":["}",";"]
          }
        ]
      }
    ]
  };
