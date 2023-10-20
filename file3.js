// Fungsi untuk menghasilkan array dengan 100 nilai random antara 1 sampai 50
function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
      const randomValue = Math.floor(Math.random() * 50) + 1;
      randomArray.push(randomValue);
    }
    return randomArray;
  }
  
  // Fungsi untuk membagi array menjadi dua array (genap dan ganjil)
  function splitArray(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk mencari nilai minimum dalam sebuah array
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk mencari nilai maksimum dalam sebuah array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai dalam sebuah array
  function findTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata nilai dalam sebuah array
  function findAverage(arr) {
    const total = findTotal(arr);
    return total / arr.length;
  }
  
  // Menghasilkan array random
  const randomArray = generateRandomArray();
  
  // Membagi array menjadi genap dan ganjil
  const [evenArray, oddArray] = splitArray(randomArray);
  
  // Menghitung min, max, total, dan rata-rata untuk array genap dan ganjil
  const minEven = findMin(evenArray);
  const maxOdd = findMax(oddArray);
  const totalEven = findTotal(evenArray);
  const totalOdd = findTotal(oddArray);
  const averageEven = findAverage(evenArray);
  const averageOdd = findAverage(oddArray);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", evenArray);
  console.log("Array ganjil dengan jumlah index 50:", oddArray);
  console.log("Min lebih besar array genap:", minEven);
  console.log("Max lebih besar array ganjil:", maxOdd);
  console.log("Total memiliki nilai sama antara array genap dan ganjil:", totalEven === totalOdd);
  console.log("Rata-rata lebih besar array ganjil:", averageEven < averageOdd);
  