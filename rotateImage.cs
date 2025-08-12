public class Solution
{
    public void Rotate(int[][] matrix)
    {
        var l = 0;
        var r = matrix.Length - 1;
        while (l < r)
        {
            for (int i = 0; i < r - l; i++)
            {
                int top = l;
                int bottom = r;
                //save topleft
                int topLeft = matrix[top][l + i];
                //move left bottom into top left
                matrix[top][l + i] = matrix[bottom - i][l];

                //move bottom right to left bottom
                matrix[bottom - i][l] = matrix[bottom][r - i];
                // // move top left int top right
                // matrix[l + i][r] = matrix[top][l + i];
                // move top right into bottom left
                matrix[bottom][r - i] = matrix[top + i][right];

                matrix[top + i][right] = topLeft;


            }
            l++;
            r--;
        }

        // [0, 0] => [0, 2] x = y, y = right
        // [0, 1] => [1, 2] 
        // [0, 2] => [2, 2]

        // [0, 2] => [2, 2] x = bottom; y = right-index
        // [1, 2] => [2, 1]  
        // [2, 2] => [2, 0]

        // [2, 2] => [2, 0]  x  = x -index, y = left;
        // [2, 1] => [1, 0]
        // [2, 0] => [0, 0]

        // [2, 0] => [0, 0] x = top, y = index
        // [1, 0] => [0, 1]
        // [0, 0] => [0, 2]



        // [1, 1] => [1, 1]     
    }
}