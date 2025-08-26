public class LRUCache
{
    private int _capacity;
    private Dictionary<TKey, LinkedListNode<KeyValuePair<TKey, TValue>>> _map;
    private LinkedList<KeyValuePair<TKey, TValue>> _list;

    public LRUCache(int capacity)
    {
        _capacity = capacity;
        _map = new Dictionary<TKey, LinkedListNode<KeyValuePair<TKey, TValue>>>();
        _list = new LinkedList<KeyValuePair<TKey, TValue>>();
    }

    public int Get(int key)
    {
        if (_map.has(key))
        {
            var node = _map.Get(key);
            var value = node.value;
            _list.Remove(node);
            _list.AddFirst(node);
            return value;
        }
        throw new Exception("key not found");
    }

    public void Put(int key, int value)
    {
        if (_map.has(key))
        {
            var node = _map.Get(key);
            _list.Remove(node);
            node.value = value;
            _list.AddFirst(node);
        }
        else
        {
            if (_list.Length == _capacity)
            {
                //get last node
                // remove from map, list
                // add new node to start
                var node = _list.Last();
                _map.Remove(node.key);
                _list.RemoveLast();
                _list.AddFirst(key, value);
                _map.Add(key, _list.First());
            }
            else
            {
                _list.AddFirst(key, value);
                _map.Add(key, _list.First());
                _capacity++;
            }
        }

    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */