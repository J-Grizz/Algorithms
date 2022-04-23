# Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

# Sudoku rules:

# Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

def done_or_not(board):
    #  Check that rows are valid   
    for x in board:
        for y in x:
            if x.count(y) > 1 or y > 9:
                return 'Try again!'

    # Check that cols are valid    
    row_no = 0
    col_no = 0
    col = []
    while col_no < 8:
        if board[row_no][col_no] not in col:
            col.append(board[row_no][col_no])
            row_no += 1
        else:
            return 'Try again!'

        if row_no == 9:
            row_no = 0
            col_no += 1
            col = []

    # Check that blocks are valid
    x_anchor = 0
    y_anchor = 0
    col = []
    while x_anchor < 7:
        col.extend(board[y_anchor][x_anchor:x_anchor + 3])

        if (len(col) == 9):
            for x in col:
                if col.count(x) > 1:
                    return 'Try again!'
            col = []

        y_anchor += 1
        if y_anchor == 9:
            x_anchor += 3
            y_anchor = 0

    return 'Finished!'