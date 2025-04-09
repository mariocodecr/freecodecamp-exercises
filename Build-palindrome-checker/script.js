// Function to check if a given string is a palindrome
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string and compare with original cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}

// Event listener for button click
document.getElementById('check-btn').addEventListener('click', function () {
  const input = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (input === "") {
    // Alert if input is empty
    alert('Please input a value');
  } else {
    // Check if the input is a palindrome
    if (isPalindrome(input)) {
      resultElement.textContent = `${input} is a palindrome`;
    } else {
      resultElement.textContent = `${input} is not a palindrome`;
    }
  }
});
