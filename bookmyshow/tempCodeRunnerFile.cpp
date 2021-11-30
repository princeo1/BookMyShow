#include<bits/stdc++.h>
using namespace std;
struct Node{
    char data;
    Node* link;
};
Node* head = NULL;
Node* slow = NULL;
Node* fast = NULL;




int main()
{
    Node* n1 = new Node();
    n1->data= 'a';
    Node* n2 = new Node();
    n2->data= 'b';
    Node* n3 = new Node();
    n3->data= 'c';
    Node* n4 = new Node();
    n4->data= 'd';
    Node* n5 = new Node();
    n5->data= 'e';
    n1->link = n2;
    n2->link = n3;
    n3->link = n4;
    n4->link = n5;
    n5->link =NULL;
    head=n1;
    slow=head;
    fast=head;


    while (fast_ptr != NULL && fast_ptr->next != NULL)
    {
        fast= fast->next->next;
        slow= slow->next;
    }
    cout << "The middle element is [" << slow->data << "]" << endl;

    Node* current = slow->next;
    Node* prev = NULL;
    Node* next = NULL;

    while (current != NULL) {
            next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
    head = prev;


}