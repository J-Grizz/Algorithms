# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']

def solution(s):
    listT = list(s)
    finalList = []

    while listT:
        newStr = ''
        newStr += listT.pop(0)
        if listT:
            newStr += listT.pop(0)
        else:
            newStr += '_'
        finalList.append(newStr)

    return finalList