public class Solution
{
    public string Convert(string s, int numRows)
    {
        if (numRows == 1 || numRows >= s.Length) return s;
        var gap = 2 * numRows - 2;
        var length = s.Length;
        var sb = new StringBuilder(s.Length);

        for (int i = 0; i < numRows; i++)
        {
            for (int j = 0; j + i < s.Length; j += gap)
            {
                if (j + i < s.Length)
                {
                    sb.Append(s[j + i]);
                    if (i != 0 && i != numRows - 1 && (j + gap - i < s.Length))
                    {
                        sb.Append(s[j + gap - i]);
                    }
                }

            }

        }
        return sb.ToString();
    }
}