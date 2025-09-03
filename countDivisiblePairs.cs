public class Solution
{
    public long CountPairs(int[] nums, int k)
    {
        Dictionary<int, int> freq = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            int hcf = HCF(nums[i], k);
            if (freq.ContainsKey(hcf))
            {
                freq[hcf]++;
            }
            else
            {
                freq.Add(hcf, 1);
            }
        }
        int count = 0;
        int[] keys = new List<int>(freq.Keys);
        for (int i = 0; i < keys.Count; i++)
        {
            for (int j = i; j < keys.Count; j++)
            {
                int g1 = keys[i];
                int g2 = keys[j];
                if (LCM(g1, g2) == k)
                {
                    if (g1 == g2)
                    {
                        count += freq[key] * (freq[key] - 1) / 2;
                    }
                    else
                    {
                        count += freq[g1] * freq[g2];
                    }
                }

            }
        }
    }


    public int HCF(int i, int j)
    {
        return j == 0 ? i : HCF(j, i % j);
    }

    public int LCM(int i, int j)
    {
        return (i / HCF(i, j)) * j;
    }
    // 24, 18 => b === 0? a: (18, 6)
    static public void Main()
    {
        int[] A = new int[] { 1, 2, 3, 4, 5 };
        int K = 2;
        Console.WriteLine(CountPairs(A, n, K));
    }
}