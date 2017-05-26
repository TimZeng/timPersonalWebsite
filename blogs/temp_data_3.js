exports.blog = {"title": "Binary Tree - Same Tree",
  "time": "May-25-2017",
  "language": "JavaScript",
  "category": "Algorithm",
  "tags": ["Binary Tree","Equality"],
  "description": "Given two binary trees, check if they are equal or not",
  "content": [
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"Given two binary trees, write a function to check if they are equal or not"}
        ]
      },
      {
        "type": "note",
        "content": [
          [
            {"type": "text", "content": "Two binary trees are considered equal if they are "},
            {"type": "strong", "content": "structurally identical"},
            {"type": "text", "content": " and the nodes have the "},
            {"type": "strong", "content": "same value"}
          ]
        ]
      },
      {
        "type": "code",
        "functions": ["isSameTree "],
        "content": [
          {
            "type":"code",
            "content":["const ","isSameTree ","= ","(p, q) ","=> ","{"]
          },
          {
            "type":"code",
            "content":["  if ","( p ","=","=","= ","null ","|","| ","q ","=","=","= ","null ",") {"]
          },
          {
            "type":"code",
            "content":["    return ","p ","=","=","= ","q;"]
          },
          {
            "type":"code",
            "content":["  }"]
          },
          {
            "type":"break"
          },
          {
            "type":"code",
            "content":["  if ","( p",".","val ","!","=","= ","q",".","val ) ","return ","false",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"code",
            "content":["  if ","( ","!","isSameTree(p",".","left, q",".","left) ","|","|"]
          },
          {
            "type":"code",
            "content":["       !","isSameTree(p",".","right, q",".","right) ) {"]
          },
          {
            "type":"code",
            "content":["    return ","false",";"]
          },
          {
            "type":"code",
            "content":["  }"]
          },
          {
            "type":"break"
          },
          {
            "type":"code",
            "content":["  return ","true",";"]
          },
          {
            "type":"code",
            "content":["};"]
          }
        ]
      }
    ]
  };
