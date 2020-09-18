export const copyToClipBoard = str => {
  const textareaElement = document.createElement('textarea');
  
  // Hide textarea
  textareaElement.style.position = 'absolute';
  textareaElement.style.left = '-9999px';

  // Copy to clipboard
  textareaElement.value = str;
  document.body.appendChild(textareaElement);
  textareaElement.select();
  document.execCommand('copy');

  document.body.removeChild(textareaElement);
};