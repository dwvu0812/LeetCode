var getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};
