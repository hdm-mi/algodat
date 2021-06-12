#include <iostream>

using namespace std;


int bubbleSort(int array[]) {
    int arrayLength = sizeof(array) / sizeof(array[0]);
    for(int n = 1; n < arrayLength; n++) {
        for(int i = 0; i < arrayLength - n; i++) {
            int s = array[i + 1]
            array[i + 1] = array[i]
            array[i] = s
        }
    }

    return array
}

int main() {
    int array[3] = {2, 3, 0}
    int sorted = bubbleSort(array)
    cout << sorted <<endl;
}