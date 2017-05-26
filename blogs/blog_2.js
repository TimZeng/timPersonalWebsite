exports.blog = {"title": "Array - Next Permutation",
  "time": "May-25-2017",
  "language": "JavaScript",
  "category": "Algorithm",
  "tags": ["Array","Permutation"],
  "description": "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers",
  "content": [
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"Implement next permutation, which rearranges numbers into the "},
          {"type": "strong", "content":"lexicographically next greater permutation"},
          {"type": "text", "content":" of numbers"}
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"If such arrangement is not possible, it must rearrange it as the "},
          {"type": "strong", "content":"lowest possible order"},
          {"type": "text", "content":" (ie, sorted in ascending order)"}
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {"type": "text", "content":"The replacement must be "},
          {"type": "strong", "content":"in-place"},
          {"type": "text", "content":", do not allocate extra memory"}
        ]
      },
      {
        "type": "example",
        "content": [
          [
            {"type": "text", "content": "Inputs are in the left-hand column and its corresponding outputs are in the right-hand column"}
          ],
          [
            {"type": "code", "content": "1,2,3 → 1,3,2"}
          ],
          [
            {"type": "code", "content": "3,2,1 → 1,2,3"}
          ],
          [
            {"type": "code", "content": "1,1,5 → 1,5,1"}
          ]
        ]
      },
      {
        "type": "logic",
        "content": [
          [
            {"type": "text", "content": "1. Start from array's last element, traverse backward to find the first one with index "},
            {"type": "code", "content": "i"},
            {"type": "text", "content": " that satisfy "},
            {"type": "code", "content": "num[i-1] < num[i]"},
            {"type": "text", "content": ". So, elements from "},
            {"type": "code", "content": "num[i]"},
            {"type": "text", "content": " to "},
            {"type": "code", "content": "num[n-1]"},
            {"type": "text", "content": " is reversely sorted"},
          ],
          [
            {"type": "text", "content": "2. To find the next permutation, we have to swap some numbers at different positions, to minimize the increased amount, we have to make the highest changed position as high as possible. Notice that index larger than or equal to "},
            {"type": "code", "content": "i"},
            {"type": "text", "content": " is not possible as "},
            {"type": "code", "content": "num[i,n-1]"},
            {"type": "text", "content": " is reversely sorted. So, we want to increase the number at index "},
            {"type": "code", "content": "i-1"},
            {"type": "text", "content": ", clearly, swap it with the smallest number between "},
            {"type": "code", "content": "num[i,n-1]"},
            {"type": "text", "content": " that is larger than "},
            {"type": "code", "content": "num[i-1]"},
            {"type": "text", "content": ". For example, original number is "},
            {"type": "code", "content": "121543321"},
            {"type": "text", "content": ", we want to swap the "},
            {"type": "code", "content": "'1'"},
            {"type": "text", "content": " at position "},
            {"type": "code", "content": "2"},
            {"type": "text", "content": " with "},
            {"type": "code", "content": "'2'"},
            {"type": "text", "content": " at position "},
            {"type": "code", "content": "7"}
          ],
          [
            {"type": "text", "content": "3. The last step is to make the remaining higher position part as small as possible (sorted in ascending order), we just have to reversely sort the "},
            {"type": "code", "content": "num[i,n-1]"},
            {"type": "text", "content": ", remember, "},
            {"type": "code", "content": "nums[i,n-1]"},
            {"type": "text", "content": " is current sorted in descending order"}
          ]
        ]
      },
      {
        "type": "code",
        "functions": ["nextPermutation ", "swap "],
        "content": [
          {
            "type":"code",
            "content":["const ","nextPermutation ","= ","nums ","=> ","{"]
          },
          {
            "type":"text",
            "content":"  // create 2 indexes pointing to the end of the array"
          },
          {
            "type":"code",
            "content":["  var ","i ","= ","j ","= ","nums",".","length ","- ","1",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // find index i where nums[i] > nums[i-1]"
          },
          {
            "type":"code",
            "content":["  while ","( ","i ","> ","0 ","&","& ","nums","[","i","] ","<= ","nums","[","i","-","1","] ",") ","i","-","-",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"  // if nums is sorted in descending order"
          },
          {
            "type":"text",
            "content":"  // then sort the array in ascending order"
          },
          {
            "type":"code",
            "content":["  if ","( ","i ","=","=","= ","0 ",") ","nums",".","sort","(","(","a",", ","b",") ","=> ","a ","- ","b",")",";"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content": "  // else"
          },
          {
            "type":"code",
            "content":["  else ","{"]
          },
          {
            "type":"text",
            "content":"    // find the value that needs to be swapped"
          },
          {
            "type":"code",
            "content":["    const ","val1 ","= ","nums","[","i ","- ","1","]",";"]
          },
          {
            "type":"text",
            "content":"    // find index j where nums[j] > val1"
          },
          {
            "type":"code",
            "content":["    while ","( ","nums","[","j","] ","<= ","val1 ",") ","j","-","-",";"]
          },
          {
            "type":"text",
            "content":"    // swap i and j"
          },
          {
            "type":"code",
            "content":["    swap","( ","nums",", ","i ","- ","1",", ","j ",")",";"]
          },
          {
            "type":"text",
            "content":"    // reset index j to the end of nums"
          },
          {
            "type":"code",
            "content":["    j ","= ","nums",".","length ","- ","1",";"]
          },
          {
            "type":"text",
            "content":"    // reverse values from i to j"
          },
          {
            "type":"code",
            "content":["    while ","( i ","< ","j ) {"]
          },
          {
            "type":"code",
            "content":["      swap( nums, i, j );"]
          },
          {
            "type":"code",
            "content":["      i","+","+",";"]
          },
          {
            "type":"code",
            "content":["      j","-","-",";"]
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
            "type":"code",
            "content":["};"]
          },
          {
            "type":"break"
          },
          {
            "type":"text",
            "content":"// define swap function"
          },
          {
            "type":"code",
            "content":["const ","swap ","= ","( arr, i1, i2 ) ","=> ","{"]
          },
          {
            "type":"code",
            "content":["  const ","temp ","= ","arr[i1];"]
          },
          {
            "type":"code",
            "content":["  arr[i1] ","= ","arr[i2];"]
          },
          {
            "type":"code",
            "content":["  arr[i2] ","= ","temp;"]
          },
          {
            "type":"code",
            "content":["};"]
          }
        ]
      }
    ]
  };
