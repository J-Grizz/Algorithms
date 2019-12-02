// --- Part Two ---
// During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

// Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

// So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
// What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

//input: 145963 119152 122543 145710 133900 132606 52408 53565 59976 81701 121675 107404 134873 141724 138465 96966 77092 127607 142761 77766 68747 126829 54471 148637 69409 104756 144862 81599 82815 123923 125193 60380 84496 98728 97193 111796 144980 135001 136717 82743 78261 143756 127891 111665 121793 136152 144144 117761 108060 94355 93797 123979 122509 114558 140655 94911 94615 54266 149172 101186 132465 108057 134115 74910 63397 132916 56643 142422 68900 146027 63015 71272 118759 101247 114596 147249 92866 93567 84820 67882 87459 148556 71855 53522 101978 82314 86692 102372 92084 99883 62642 57330 110474 70679 101075 79706 79487 139548 122700 96657;

//Solved 02 December 2019

const input = [145963, 119152, 122543, 145710, 133900, 132606, 52408, 53565, 59976, 81701, 121675, 107404, 134873, 141724, 138465, 96966, 77092, 127607, 142761, 77766, 68747, 126829, 54471, 148637, 69409, 104756, 144862, 81599, 82815, 123923, 125193, 60380, 84496, 98728, 97193, 111796, 144980, 135001, 136717, 82743, 78261, 143756, 127891, 111665, 121793, 136152, 144144, 117761, 108060, 94355, 93797, 123979, 122509, 114558, 140655, 94911, 94615, 54266, 149172, 101186, 132465, 108057, 134115, 74910, 63397, 132916, 56643, 142422, 68900, 146027, 63015, 71272, 118759, 101247, 114596, 147249, 92866, 93567, 84820, 67882, 87459, 148556, 71855, 53522, 101978, 82314, 86692, 102372, 92084, 99883, 62642, 57330, 110474, 70679, 101075, 79706, 79487, 139548, 122700, 96657];

const testInput = [12, 14, 1969, 100756]; //expects [2, 2, 654, 33583];

function fuelCounter(arr) {
  return arr.map(val => {
    let total = 0;
    val = Math.floor(val / 3) - 2;
    while (val > 0) {
      total += val;
      val = Math.floor(val / 3) - 2;
    }
    return total;
  }).reduce((acc, cv) => acc + cv);
}

console.log(fuelCounter(testInput));
console.log(fuelCounter(input));
