public class Solution
{
    public bool IsValidSudoku(char[][] board)
    {
        foreach (char[] row in board)
        {
            var isValid = IsValidRow(row);
            if (!isValid) return false;
        }
        for (int i = 0; i < board.Length; i++)
        {
            if (!IsValidColumn(board, i)) return false;
        }
        if (!IsValidSquare(board)) return false;
        return true;
    }

    public bool IsValidRow(char[] row)
    {
        HashSet<char> charSet = new HashSet<char>();
        foreach (char c in row)
        {
            if (c != '.' && charSet.Contains(c))
            {
                return false;
            }
            else
            {
                charSet.Add(c);
            }
        }
        return true;

    }

    public bool IsValidColumn(char[][] board, int index)
    {
        HashSet<char> charSet = new HashSet<char>();
        foreach (char[] row in board)
        {
            if (row[index] != '.' && charSet.Contains(row[index]))
            {
                return false;
            }
            else
            {
                charSet.Add(row[index]);
            }
        }
        return true;
    }

    public bool IsValidSquare(char[][] board)
    {
        Dictionary<int, HashSet<char>> hashSquares = new Dictionary<int, HashSet<char>>();

        for (int row = 0; row < board.Length; row++)
        {
            for (int col = 0; col < board[row].Length; col++)
            {
                char elem = board[row][col];
                if (elem == '.') continue;

                // Calculate the square index (0-8) based on row and col
                int squareIndex = (row / 3) * 3 + (col / 3);

                // If the square is not present, add it
                if (!hashSquares.ContainsKey(squareIndex))
                {
                    hashSquares[squareIndex] = new HashSet<char>();
                }

                // Check for duplicates in the square
                if (hashSquares[squareIndex].Contains(elem))
                {
                    return false;
                }

                // Add the element to the square
                hashSquares[squareIndex].Add(elem);
            }
        }

        return true;
    }
}