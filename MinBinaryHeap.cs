using System;
class MinBinaryHeap
{
    public List<int> _heap;
    public MinBinaryHeap()
    {
        _heap = new List<int>();
    }
    public void Insert(int key)
    {
        _heap.Add(key);
        var length = _heap.Count;
        HeapifyUp(length - 1);

    }

    public int GetMin()
    {
        if (_heap.Count > 0)
        {
            return _heap[0];
        }
        throw new InvalidOperationException("Heap is empty");

    }

    public int Extract()
    {
        if (_heap.Count > 0)
        {
            var value = _heap[0];
            _heap[0] = _heap[_heap.Count - 1];
            _heap.RemoveAt(_heap.Count - 1);
            if(_heap.Count>0)HeapifyDown(0);
            return value;
        }
        throw new InvalidOperationException("heap is empty");

    }

    private void HeapifyUp(int index)
    {
        int parent = (index - 1) / 2;
        if (parent >= 0 && _heap[parent] > _heap[index])
        {
            (_heap[parent], _heap[index]) = (_heap[index], _heap[parent]);
            HeapifyUp(parent);
        }
        else return;

    }


    private void HeapifyDown(int index)
    {
        var leftIndex = 2 * index + 1;
        var rightIndex = 2 * index + 2;
        int smallest = index;

        if (leftIndex < _heap.Count && _heap[smallest] > _heap[leftIndex])
        {
            smallest = leftIndex;
        }
        if (rightIndex < _heap.Count && _heap[smallest] > _heap[rightIndex])
        {
            smallest = rightIndex;
        }
        if (smallest != index)
        {
            (_heap[smallest], _heap[index]) = (_heap[index], _heap[smallest]);
            HeapifyDown(smallest);
        }

    }

    int Size()
    {
        return _heap.Count;
    }

    bool IsEmpty()
    {
        return _heap.Count == 0;
    }


}