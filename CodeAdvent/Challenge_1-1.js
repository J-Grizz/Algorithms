// --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?

//input: 145963 119152 122543 145710 133900 132606 52408 53565 59976 81701 121675 107404 134873 141724 138465 96966 77092 127607 142761 77766 68747 126829 54471 148637 69409 104756 144862 81599 82815 123923 125193 60380 84496 98728 97193 111796 144980 135001 136717 82743 78261 143756 127891 111665 121793 136152 144144 117761 108060 94355 93797 123979 122509 114558 140655 94911 94615 54266 149172 101186 132465 108057 134115 74910 63397 132916 56643 142422 68900 146027 63015 71272 118759 101247 114596 147249 92866 93567 84820 67882 87459 148556 71855 53522 101978 82314 86692 102372 92084 99883 62642 57330 110474 70679 101075 79706 79487 139548 122700 96657;

//Solved 02 December 2019

const input = [145963, 119152, 122543, 145710, 133900, 132606, 52408, 53565, 59976, 81701, 121675, 107404, 134873, 141724, 138465, 96966, 77092, 127607, 142761, 77766, 68747, 126829, 54471, 148637, 69409, 104756, 144862, 81599, 82815, 123923, 125193, 60380, 84496, 98728, 97193, 111796, 144980, 135001, 136717, 82743, 78261, 143756, 127891, 111665, 121793, 136152, 144144, 117761, 108060, 94355, 93797, 123979, 122509, 114558, 140655, 94911, 94615, 54266, 149172, 101186, 132465, 108057, 134115, 74910, 63397, 132916, 56643, 142422, 68900, 146027, 63015, 71272, 118759, 101247, 114596, 147249, 92866, 93567, 84820, 67882, 87459, 148556, 71855, 53522, 101978, 82314, 86692, 102372, 92084, 99883, 62642, 57330, 110474, 70679, 101075, 79706, 79487, 139548, 122700, 96657];

const testInput = [12, 14, 1969, 100756]; //expects [2, 2, 654, 33583];

function fuelCounter(arr) {
  return arr.map(val => Math.floor(val / 3) - 2).reduce((acc, cv) => acc + cv);
}

console.log(fuelCounter(testInput));
console.log(fuelCounter(testInput));
