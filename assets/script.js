/* Janela Modal */

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    var modalButtons = document.querySelectorAll('.modal-button');
    var closeModal = document.querySelector('.close');
  
    modalButtons.forEach(function (modalButton) {
      modalButton.addEventListener('click', function () {
        var imgSrc = this.getAttribute('src');
        modalImg.setAttribute('src', imgSrc);
        modal.style.display = 'block';
      });
    });
  
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  