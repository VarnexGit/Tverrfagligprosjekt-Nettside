function showMoreContent() {
  }
var discoverButton = document.getElementById('discover-btn');

discoverButton.addEventListener('click', showMoreContent);

function showMoreContent() {
    var additionalContent = document.getElementById('additionalContent');
    additionalContent.style.display = 'block';
  }

  function showMoreContent() {
    var additionalContent = document.getElementById('additionalContent');
    additionalContent.style.display = 'block';
    
    // Additional code to perform the sliding animation
    additionalContent.style.height = '0';
    var contentHeight = additionalContent.scrollHeight;
    additionalContent.style.height = contentHeight + 'px';
  }
  
  
  function showMoreContent() {
    var additionalContent = document.getElementById('additionalContent');
    
    if (additionalContent.style.display === 'block') {
      additionalContent.style.display = 'none';
    } else {
      additionalContent.style.display = 'block';
    }
    
    additionalContent.style.height = '0';
    var contentHeight = additionalContent.scrollHeight;
    additionalContent.style.height = contentHeight + 'px';
  }

  
  
