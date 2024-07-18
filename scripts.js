document.addEventListener('DOMContentLoaded', () => {
  // Check if the user has set a preference before
  let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
  const darkModeToggle = document.querySelector('#darkmode');

  // Function to set the color theme based on the preference
  const setColorTheme = () => {
    if (darkMode) {
      document.body.style.backgroundColor = '#273A31';
      document.body.classList.add('dark');
    } else {
      document.body.style.backgroundColor = '#fcf6ef';
      document.body.classList.remove('dark');
    }
  };

  // Set initial color theme
  setColorTheme();

  // Event listener for dark mode toggle button
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkMode = !darkMode;

    // Store the user's preference in localStorage
    localStorage.setItem('darkMode', darkMode);

    // Update the color theme
    setColorTheme();
  });

});
