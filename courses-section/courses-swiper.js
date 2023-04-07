let myImageSlider = new Swiper('.course-slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		
	},
	// Скролл
	
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: false,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: false,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 100,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: false,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: false,

	

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	
	/*
	// Доступность
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Previous slide',
		nextSlideMessage: 'Next slide',
		firstSlideMessage: 'This is the first slide',
		lastSlideMessage: 'This is the last slide',
		paginationBulletMessage: 'Go to slide {{index}}',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},
	*/
	/*
	// События
	on: {
		// Событие инициализации
		init: function () {
			console.log('Слайдер запущен!');
		},
		// Событие смены слайда
		slideChange: function () {
			console.log('Слайд переключен');
		}
	},
	*/
});