document.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll(
    ".hero-image > .text1-hero, .hero-image > .text2-hero, .hero-image > .text3-hero, .hero-image > .text4-hero"
  );
  let currentIndex = 0;
  let imageClasses = ['image1', 'image2', 'image3', 'image4'];
  let heroImage = document.querySelector('.hero-image');

  function switchItem(index) {
    // Удаляем класс active со всех блоков
    items.forEach(item => item.classList.remove("active"));

    // Если передан аргумент index, устанавливаем currentIndex равным index
    if (index !== undefined) {
      currentIndex = index;
    } else {
      // Иначе увеличиваем индекс текущего активного блока
      currentIndex = (currentIndex + 1) % items.length;
    }

    // Добавляем класс active к следующему блоку
    items[currentIndex].classList.add("active");

    // Удаляем класс selected со всех кнопок
    buttons.forEach(b => b.classList.remove("selected"));
    // Добавляем класс selected к соответствующей кнопке
    buttons[currentIndex].classList.add("selected");

    // Изменяем фоновое изображение
    imageClasses.forEach(imageClass => heroImage.classList.remove(imageClass));
    heroImage.classList.add(imageClasses[currentIndex]);
  }

  setInterval(switchItem, 5000);

  let buttons = document.querySelectorAll(".container_button > button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Удаляем класс selected со всех кнопок
      buttons.forEach(b => b.classList.remove("selected"));
      // Добавляем класс selected к выбранной кнопке
      button.classList.add("selected");
      // Переключаем активный блок
      switchItem(index);
    });
  });

  switchItem(0);
});
