document.getElementById('name-input').addEventListener('input', e => {
    document.getElementById('name-output').textContent = e.target.value.trim() || "Anonymous"
  })