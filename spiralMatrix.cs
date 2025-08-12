public class Solution
{
    public IList<int> SpiralOrder(int[][] matrix)
    {
        // left = 0; topright = widht; bottomright: width, height, bottomLeft: 0, height
        int width = matrix[0].Length;
        int height = matrix.Length;
        var left = (x: 0, y: 0);
        var topRight = (x: width - 1, y: 0);
        var bottomRight = (x: width - 1, y: height - 1);
        var bottomLeft = (x: 0, y: height - 1);
        var result = new List<int>();
        while (left.x < topRight.x && left.y < bottomRight.y)
        {
            //top column
            for (int col = left.x; col <= topRight.x; col++)
            {
                result.Add(matrix[left.y][col]);
            }
            //right column
            for (int row = topRight.y + 1; row <= bottomRight.y; row++)
            {
                result.Add(matrix[row][topRight.x]);
            }
            //bottom column
            for (int col = bottomRight.x - 1; col >= left.x; col--)
            {
                result.Add(matrix[bottomRight.y][col]);
            }
            //left column
            for (int row = bottomLeft.y - 1; row > left.y; j--)
            {
                result.Add(matrix[row][bottomLeft.x]);
            }
            left.x++;
            left.y++;
            topRight.x--;
            topRight.y++;
            bottomRight.x--;
            bottomRight.y--;
            bottomLeft.x++;
            bottomLeft.y--;
        }
        return result;
    }

}