//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  //Double loop to target the cell with asterisk within multidimensional array
  for (let row = 0; row < input.length; row++){
    for (let column = 0; column < input[0].length; column++){
      //when the index of the asterisk is located console.log
      if(arr[row][column] === "*"){
        //Above the 
        //check to see if the cell contains other than an asterisk, 
        //check to see if cell contains "1", if it doesn't set it to "1"
        //otherwise increment
        if(arr[row-1][column] !== "*" && arr[row-1][column] !== "1"){
          arr[row-1][column] = 1
        }else {
          arr[row][column]++
        };
        //Under the asterisk
        if(arr[row+1][column] !== "*" && arr[row-1][column] !== "1"){
          arr[row+1][column] = 1
        }else {
          arr[row][column]++
        };
        //left of the asterisk
        if(arr[row][column-1] !== "*" && arr[row-1][column] !== "1"){
          arr[row][column-1] = 1
        }else {
          arr[row][column]++
        };
        //Right of the asterisk
        if(arr[row][column+1] !== "*" && arr[row-1][column] !== "1"){
          arr[row][column+1] = 1
        }else {
          arr[row][column]++
        };
        //Top left of the asterisk
        if(arr[row-1][column-1] !== "*" && arr[row-1][column] !== "1"){
          arr[row-1][column-1] = 1
        }else {
          arr[row][column]++
        };
        //Top Right of the asterisk
        if(arr[row-1][column+1] !== "*" && arr[row-1][column] !== "1"){
          arr[row-1][column+1] = 1
        }else {
          arr[row][column]++
        };
        //Bottom left of the asterisk
        if(arr[row+1][column-1] !== "*" && arr[row-1][column] !== "1"){
          arr[row+1][column-1] = 1
        }else {
          arr[row][column]++
        };
         //Bottom right of the asterisk
         if(arr[row+1][column+1] !== "*" && arr[row-1][column] !== "1"){
          arr[row+1][column+1] = 1
        }else {
          arr[row][column]++
        };
      };
      //return the input now populated with numbers
      return input;
    };
  };
  throw new Error('Remove this statement and implement this function');
};
