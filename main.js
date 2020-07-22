window.onload = function() {

	// ADITIONALS
	const grassContainer = document.querySelector('.container-grass')
	const data = document.querySelector('.data')
	const hourAndMinute = document.querySelector('.hour-minute')
	const second = document.querySelector('.second')
	const buttonHelp = document.querySelector('.help')
	const signHelp = document.querySelector('.help-sign')
	const buttonSound = document.querySelector('.mute-unmute')
	const audioWind = document.querySelector('.audio-wind')
	const temperatureValue = document.querySelector('.temperature-text')
	const temperatureImg = document.querySelector('.temperature-image')
	const humidityValue = document.querySelector('.humidity-text')
	const windValue = document.querySelector('.wind-text')


	// ELEMENTS //
	const heaven = document.querySelector('.container-all')
	const sun = document.querySelector('.container-sun')
	const moon = document.querySelector('.container-moon')
	const plants = document.querySelector('.container-plants')
	const stars = document.querySelector('.container-stars')
	const primaryClouds = document.querySelector('.first-row')
	const secondaryClouds = document.querySelector('.second-row')


	// CLOUDS //
	const oneFirstCloud = document.querySelector('.onecloud-first')
	const oneSecondCloud = document.querySelector('.onecloud-second')
	const oneThirdCloud = document.querySelector('.onecloud-third')
	const oneFourthCloud = document.querySelector('.onecloud-fourth')
	const twoFirstCloud = document.querySelector('.twocloud-first')
	const twoSecondCloud = document.querySelector('.twocloud-second')
	const twoThirdCloud = document.querySelector('.twocloud-third')
	const twoFourthCloud = document.querySelector('.twocloud-fourth')
	const threeFirstCloud = document.querySelector('.threecloud-first')
	const threeSecondCloud = document.querySelector('.threecloud-second')
	const threeThirdCloud = document.querySelector('.threecloud-third')
	const threeFourthCloud = document.querySelector('.threecloud-fourth')
	const fourFirstCloud = document.querySelector('.fourcloud-first')
	const fourSecondCloud = document.querySelector('.fourcloud-second')
	const fourThirdCloud = document.querySelector('.fourcloud-third')
	const fourFourthCloud = document.querySelector('.fourcloud-fourth')


	// LISTA DE HORAS POR MOMENTO DEL DIA
	const morningHours = [9, 10, 11, 12, 13, 14]
	const middayHours = [15, 16, 17]
	const afternoonHours = [18, 19, 20, 21]
	const nightHours = [22, 23, 0, 1, 2, 3]
	const earlymorningHours = [4, 5, 6, 7, 8]


	// PEDIDO A API
	const http = new XMLHttpRequest()
	http.open('GET', 'https://api.tutiempo.net/json/?lan=es&apid=axDXaXqXzq4atFq&lid=42833')
	http.send()


	// CAMBIOS DE SOL SEGUN TEMPERATURA
	function sunChanges(temperature) {
		if (temperature > 20) {
			sun.style.visibility = 'visible'
			sun.classList.remove('normal-sun')
			sun.classList.add('radiant-sun')
		}

		else if (temperature < 10) {
			sun.style.visibility = 'hidden'
		}

		else {
			sun.style.visibility = 'visible'
			sun.classList.remove('radiant-sun')
			sun.classList.add('normal-sun')
		}
	}


	// UBICACION DE TEMPERATURA, HUMEDAD Y VIENTO EN HTML
	function getValues(temperature, humidity, wind) {
		temperatureValue.innerHTML = temperature + '°C'
		humidityValue.innerHTML = humidity + '%'
		windValue.innerHTML = wind + '%'
	}


	// RELOJ
	function getCLock() {
		currentMoment = new Date()
		hourObtained = currentMoment.getHours()
		minuteObtained = currentMoment.getMinutes()
		secondObtained = currentMoment.getSeconds()

		if (hourObtained <= 9 && minuteObtained <= 9) {
			hourToTex = '0' + hourObtained + ':' + '0' + minuteObtained
		}

		else if (hourObtained <= 9) {
			hourToTex = '0' + hourObtained + ':' + minuteObtained
		}

		else if (minuteObtained <= 9) {
			hourToTex = hourObtained + ':' + '0' + minuteObtained
		}

		else {
			hourToTex = hourObtained + ':' + minuteObtained
		}
		
		if (secondObtained <= 9) {
			second.innerHTML = '0' + secondObtained
		}

		else {
			second.innerHTML = secondObtained
		}

		hourAndMinute.innerHTML = hourToTex

		setTimeout(getCLock, 1000)
	}

	window.onload = getCLock()


	// ANIMACIONES POR HORA
	function setStylesByHour() {
		currentMoment = new Date()
		hourObtained = currentMoment.getHours()

		for (let i = 0; i < morningHours.length; i++) {
			const morningHour = morningHours[i]
			if (hourObtained === morningHour) {
				heaven.classList.toggle('heaven-morning')
				sun.classList.toggle('sun-morning')
				moon.classList.toggle('moon-morning')
				plants.classList.toggle('plants-morning')
				primaryClouds.classList.toggle('firstrowcloud-morning')
				secondaryClouds.classList.toggle('secondrowcloud-morning')
				stars.classList.toggle('stars-morning')
			}
		}

		for (let j = 0; j < middayHours.length; j++) {
			const middayHour = middayHours[j]
			if (hourObtained === middayHour) {
				heaven.classList.toggle('heaven-midday')
				sun.classList.toggle('sun-midday')
				moon.classList.toggle('moon-midday')
				plants.classList.toggle('plants-midday')
				primaryClouds.classList.toggle('firstrowcloud-midday')
				secondaryClouds.classList.toggle('secondrowcloud-midday')
				stars.classList.toggle('stars-midday')
			}
		}

		for (let l = 0; l < afternoonHours.length; l++) {
			const afternoonHour = afternoonHours[l]
			if (hourObtained === afternoonHour) {
				heaven.classList.toggle('heaven-afternoon')
				sun.classList.toggle('sun-afternoon')
				moon.classList.toggle('moon-afternoon')
				plants.classList.toggle('plants-afternoon')
				primaryClouds.classList.toggle('firstrowcloud-afternoon')
				secondaryClouds.classList.toggle('secondrowcloud-afternoon')
				stars.classList.toggle('stars-afternoon')

				hourAndMinute.style.color = 'white'
				second.style.color = 'white'
			}
		}

		for (let t = 0; t < nightHours.length; t++) {
			const nightHour = nightHours[t]
			if (hourObtained === nightHour) {
				heaven.classList.toggle('heaven-night')
				sun.classList.toggle('sun-night')
				moon.classList.toggle('moon-night')
				plants.classList.toggle('plants-night')
				primaryClouds.classList.toggle('firstrowcloud-night')
				secondaryClouds.classList.toggle('secondrowcloud-night')
				stars.classList.toggle('stars-night')

				hourAndMinute.style.color = 'white'
				second.style.color = 'white'
			}
		}

		for (let x = 0; x < earlymorningHours.length; x++) {
			const earlymorningHour = earlymorningHours[x]
			if (hourObtained === earlymorningHour) {
				heaven.classList.toggle('heaven-earlymorning')
				sun.classList.toggle('sun-earlymorning')
				moon.classList.toggle('moon-earlymorning')
				plants.classList.toggle('plants-earlymorning')
				primaryClouds.classList.toggle('firstrowcloud-earlymorning')
				secondaryClouds.classList.toggle('secondrowcloud-earlymorning')
				stars.classList.toggle('stars-earlymorning')

				hourAndMinute.style.color = 'white'
				second.style.color = 'white'
			}
		}
	}

	const stylesByHour = setStylesByHour()


	// RESPUESTA DE API - ACTIVACION DE FUNCIONES - CAMBIO DE ICONO DE CLIMA
	http.onreadystatechange = function() {
		const response = http.responseText

		const weatherData = JSON.parse(response)
		const hourData = weatherData.hour_hour
		const localityData = weatherData.locality 
		const currentHour = hourData['hour1']

		const currentTemperature = currentHour.temperature
		const currentHumidity = currentHour.humidity
		const currentWind = currentHour.wind
		const currentDescription = currentHour.text
		const country = localityData.country
		const name = localityData.name

		const textToData = currentDescription.toLowerCase()

		data.innerHTML = name + ', ' + country + '   -   ' + 'Cielo ' + textToData

		function reloadPage() {
			location.reload()
		}

		setInterval(reloadPage, 3600000)

		switch (currentDescription) {
			case 'Cubierto':
				temperatureImg.classList.add('cloudy')
				break

			case 'Lluvioso':
				temperatureImg.classList.add('rainy')
				break

			case	'Muy nuboso':
				temperatureImg.classList.add('very-cloudy')
				break

			case 'Soleado':
				temperatureImg.classList.add('sunny')
				break

			case 'Cubierto con probabilidad de lluvias':
			case 'Cubierto con lluvias':
				temperatureImg.classList.add('cloudy-rainy')
				oneFirstCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				oneSecondCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				oneThirdCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				oneFourthCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				twoFirstCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				twoSecondCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				twoThirdCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'
				twoFourthCloud.style.backgroundImage = 'url(images/cloud-humidity.png)'

				break
		}

		const activateSunChanges = sunChanges(currentTemperature)
		const values = getValues(currentTemperature, currentHumidity, currentWind)
		const volumeAudio = changeVolumeAudio(currentWind)
	}


	// MANEJO DE VOLUMEN DEL VIENTO SEGUN PORCENTAJE
	function changeVolumeAudio(wind) {
		if (wind <= 20) {
			audioWind.volume = 0.05
		}

		else if (wind <= 40) {
			audioWind.volume = 0.1
		}

		else if (wind <= 60) {
			audioWind.volume = 0.3
		}

		else if (wind <= 80) {
			audioWind.volume = 0.5
		}

		else {
			audioWind.volume = 0.8
		}
	}


	// EVENTOS MOUSEOVER, CLICK, ETC
	buttonHelp.onmouseover = function() {
		signHelp.style.visibility = 'visible'
	}

	buttonHelp.onmouseout = function() {
		signHelp.style.visibility = 'hidden'
	}

	buttonSound.onclick = function() {
		if (audioWind.paused) {
			audioWind.play()	
		} else {
			audioWind.pause()
		}

		buttonSound.classList.toggle('mute')
		buttonSound.classList.toggle('unmute')
	}
}



