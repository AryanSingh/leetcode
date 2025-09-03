public class TokenBucket
{
    private long _maxBucketSize;
    private long _refillRate;
    private long _currentBucketSize;
    private DateTime _lastRefillStamp;

    public TokenBucket(long maxBucketSize, long refillRate)
    {
        _maxBucketSize = maxBucketSize;
        _refillRate = refillRate;
        _currentBucketSize = maxBucketSize;
        _lastRefillStamp = DateTime.Now;
    }

    public bool AllowRequests(int tokens)
    {
        refill();
        if (_currentBucketSize >= tokens)
        {
            _currentBucketSize -= tokens;
            return true;
        }
        return false;
    }

    private void refill()
    {
        DateTime now = DateTime.Now;
        long tokensToAdd = (now - _lastRefillStamp).TotalSeconds + _refillRate;
        _currentBucketSize = Math.Min(tokensToAdd + _currentBucketSize, _maxBucketSize);
        _lastRefillStamp = now;
    }
}