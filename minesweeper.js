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

        console.log('this is ast', arr[row][column])
      }
    }
  }
  throw new Error('Remove this statement and implement this function');
};
