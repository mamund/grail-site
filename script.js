const copyButton = document.getElementById('copy-command');
copyButton?.addEventListener('click', async () => {
  const command = 'npm install -g @mamund/grail';
  try {
    await navigator.clipboard.writeText(command);
    copyButton.textContent = 'Copied';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.code-line code'));
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Select and copy';
  }
});
