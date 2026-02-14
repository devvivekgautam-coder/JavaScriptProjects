let arr  = [5, 2, 10, 12, 20];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i - 1; j++) {
        if (arr[i] > arr[j + 1]) {
            let tem = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tem;
            console.log(arr);
        } 
    }
}