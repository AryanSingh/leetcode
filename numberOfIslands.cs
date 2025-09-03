public class Solution
{
    public int NumIslands(char[][] grid)
    {
        int rows = grid.Length;
        int cols = grid[0].Length;
        bool[,] visited = new bool[rows, cols];
        int count = 0;

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                visited[i, j] = false;
            }
        }

        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                if (visited[i, j] == false && grid[i][j] == '1')
                {
                    count++;
                    dfs(grid, [i, j], visited, rows, cols);
                }
            }
        }
        return count;

    }

    public void dfs(char[][] grid, int[] coords, bool[,] visited, int rows, int cols)
    {
        int i = coords[0];
        int j = coords[1];
        if (i >= rows || i < 0 || j >= cols || j < 0 || grid[i][j] == '0')
        {
            return;
        }
        else
        {
            visited[i, j] = true;
            if (grid[i][j] == '1')
            {
                dfs(grid, [i + 1, j], visited, rows, cols);
                dfs(grid, [i - 1, j], visited, rows, cols);
                dfs(grid, [i, j + 1], visited, rows, cols);
                dfs(grid, [i, j - 1], visited, rows, cols);
            }
            else
            {
                return;
            }

        }
    }
}