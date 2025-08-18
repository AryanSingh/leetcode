using System;
public class Node
{
    public int Key;
    public Node Left, Right;

    public Node(int item)
    {
        Key = item;
        Left = Right = null;
    }
}
class MinBinaryHeap
{
    public List<int> _heap;
    public BinaryHeap()
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
        return Root.Key;
    }

    public int Extract()
    {

    }

    private void HeapifyUp(int index)
    {
        var parent = Math.Floor((index - 1) / 2);
        if(h)

    }


    private void HeapifyDown(int index)
    {

    }

    int Size() { }

    bool IsEmpty()
    {

    }


}