const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function findMaxPrimeDivisor(n) {
  const divisors = getDivisors(n);
  let maxPrime = -1;

  for (let i = 0; i < divisors.length; i++) {
    if (isPrime(divisors[i])) {
      maxPrime = Math.max(maxPrime, divisors[i]);
    }
  }

  return maxPrime;
}

rl.question('숫자를 입력하세요 (Enter) : ', (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    console.log('올바른 양의 정수를 입력해주세요 .');
  } else {
    const maxPrimeDivisor = findMaxPrimeDivisor(num);
    if (maxPrimeDivisor === -1) {
      console.log('소수 약수가 없습니다.');
    } else {
      console.log(`입력값의 약수 중에서 가장 큰 소수는 : ${maxPrimeDivisor}`);
    }
  }

  rl.close();
});
