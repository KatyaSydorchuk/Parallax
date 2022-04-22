"use strict"

window.onload = function () {
    const parallax = document.querySelector('.parallax'); 

    if (parallax) {
        const content = document.querySelector('.parallax__container'); 
        const clouds = document.querySelector('.image-parallax__clouds'); 
        const mountains = document.querySelector('.image-parallax__mountains'); 
        const land = document.querySelector('.image-parallax__land'); 

        // Кількість пікселів на які буде змінювати своє положення той чи інший об'єкт

        const forClouds = 40; 
        const forMountains = 10; 
        const forLand = 10; 


        // Швидкість анмімації 

        const speed = 0.05; 

        //  Початкові значення змінних, які потім будуть отримувати конкретні координати 
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0; 

        function setMouseParallaxStyle () {
            const disX = coordXprocent - positionX; 
            const disY = coordYprocent - positionY; 

            positionX = positionX + (disX * speed); 
            positionY = positionY + (disY * speed); 

            //  Передаємо стилі всередину об'єкта
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`; 
            // mountains.style.cssText = `transform: translate(${posotionX / forMountains}%, ${posotionY / forMountains}%);`;
            land.style.cssText = `transform: translate(${positionX / forLand}%, ${positionY / forLand}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle(); 

        parallax.addEventListener("mousemove", function (e) {
            // Кожен раз нам потрібно отримуваи ширину і висоту елементів 
            const parallaxWidth = parallax.offsetWidth; 
            const parallaxHeight = parallax.offsetHeight; 

            // Нуль по середині 
            const coordX = e.pageX - parallaxWidth / 2; 
            const coordY = e.pageY - parallaxHeight / 2; 

            // Отримуємо процентні значення 
            coordXprocent = coordX / parallaxWidth * 100; 
            coordYprocent = coordY / parallaxHeight * 100; 
        }); 
    }
}