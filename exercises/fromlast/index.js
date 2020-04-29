// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  // let lastNode = null;
  // let size = 0;
  // while (fast.next) {
  //   fast = fast.next;
  //   size++;
  //   if (!fast.next) {
  //     lastNode = fast;
  //   }
  // }
  // let distFromHeadToN = size - n;
  // let i = 0;
  // while (i < distFromHeadToN) {
  //   slow = slow.next;
  //   i++;
  // }
  // return slow;

  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
