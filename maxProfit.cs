public class Solution {
    public int MaxProfit(int[] prices)
    {
        var buy1 = int.MinValue;
        var sell1 = 0;
        var buy2 = int.MinValue;
        var sell2 = 0;
        foreach (int price in prices)
        {
            buy1 = Math.Max(buy1, -price);
            sell1 = Math.Max(sell1, buy1 + price);
            buy2 = Math.Max(buy2, sell1 - price);
            sell2 = Math.Max(sell2, buy2 + price);
        }
        return sell2;
        
    }
}