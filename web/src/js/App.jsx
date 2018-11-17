import React, { Component } from 'react';
import { Button, Slider, FontIcon, SelectionControl } from 'react-md';

export default class App extends Component {

	audioPlayer;
	audioContext;
	shortGachi;
	longGachi;
	earrapeGachi;
	soundboard;

	constructor(props) {
		super(props);

		this.state = {
			volume: this.getCookie("volume") !== null ? Number(this.getCookie("volume")) : 100,
			soundboardHidden: true,
			autoplay: false,
		};

		this.soundboard = {
			"AAAAAAAAAHHHHH": "https://i.nuuls.com/cu_3T.mp3",
			"Boynextdoor": "https://i.nuuls.com/FR3u0.mp3",
			"Deep Dark Fantasies": "https://i.nuuls.com/Ar4ir.mp3",
			"foo": "https://i.nuuls.com/YFIfE.mp3",
			"FUCKYOU": "https://i.nuuls.com/eb0GC.mp3",
			"HandsUp": "https://i.nuuls.com/EAKzy.mp3",
			"huh": "https://i.nuuls.com/6Luq2.mp3",
			"I'm fucking cumming": "https://i.nuuls.com/ic1lZ.mp3",
			"It's so fucking deep": "https://i.nuuls.com/dSO47.mp3",
			"YOP": "https://i.nuuls.com/nEMdZ.mp3",
			"Like embarrassing me huh": "https://i.nuuls.com/weHVR.mp3",
			"Lockerhit": "https://i.nuuls.com/u2QTA.mp3",
			"Slap 1": "https://i.nuuls.com/66AGb.mp3",
			"Slap 2": "https://i.nuuls.com/UpQKN.mp3",
			"Slap 3": "https://i.nuuls.com/pkQWX.mp3",
			"Son that's power": "https://i.nuuls.com/NxQCo.mp3",
			"Suction": "https://i.nuuls.com/7BX1X.mp3",
			"Take it boy": "https://i.nuuls.com/AhdvN.mp3",
			"That's good": "https://i.nuuls.com/7cKdY.mp3",
			"Van moan": "https://i.nuuls.com/1FxtJ.mp3",
		}

		this.shortGachi = [
			"https://i.nuuls.com/ez_3S.mp3",
			"https://i.nuuls.com/kPuLO.mp3",
			"https://i.nuuls.com/Vh5_i.mp3",
			"https://i.nuuls.com/oIyou.mp3",
			"https://i.nuuls.com/zuh9m.mp3",
			"https://i.nuuls.com/-pmdJ.mp3",
			"https://i.nuuls.com/RgR7R.mp3",
			"https://i.nuuls.com/EcwS8.mp3",
			"https://i.nuuls.com/EX9OZ.mp3",
			"https://i.nuuls.com/x-9yE.mp3",
			"https://i.nuuls.com/Ypc1z.mp3",
			"https://i.nuuls.com/klYzJ.mp3",
			"https://i.nuuls.com/lSet6.mp3",
			"https://i.nuuls.com/Pa6cb.mp3",
			"https://i.nuuls.com/v4Gy6.mp3",
			"https://i.nuuls.com/jZkTM.mp3",
			"https://i.nuuls.com/T9Yrk.mp3",
			"https://i.nuuls.com/V4IXR.mp3",
			"https://i.nuuls.com/SyY36.mp3",
			"https://i.nuuls.com/-wRjz.mp3",
			"https://i.nuuls.com/Mgw9B.mp3",
			"https://i.nuuls.com/g3QKD.mp3",
			"https://i.nuuls.com/sDVwG.mp3",
			"https://i.nuuls.com/lLni8.mp3",
			"https://i.nuuls.com/ffUJP.mp3",
			"https://i.nuuls.com/LWC8N.mp3",
			"https://i.nuuls.com/FKZVp.mp3",
			"https://i.nuuls.com/J0emn.mp3",
			"https://i.nuuls.com/id6Dr.mp3",
			"https://i.nuuls.com/GhA6n.mp3",
			"https://i.nuuls.com/caIXi.mp3",
			"https://i.nuuls.com/-NTxF.mp3",
			"https://i.nuuls.com/v7d_y.mp3",
			"https://i.nuuls.com/EfRrY.mp3",
			"https://i.nuuls.com/Ch-Mo.mp3",
			"https://i.nuuls.com/Z3fb9.mp3",
			"https://i.nuuls.com/mnWAJ.mp3",
			"https://i.nuuls.com/sYJJc.mp3",
			"https://i.nuuls.com/1cqEy.mp3",
			"https://i.nuuls.com/Qd2KI.mp3",
			"https://i.nuuls.com/w4d8n.mp3",
			"https://i.nuuls.com/fm2iL.mp3",
			"https://i.nuuls.com/Z3HVk.mp3",
			"https://i.nuuls.com/MlT-5.mp3",
			"https://i.nuuls.com/Vmp-L.mp3",
		];

		this.longGachi = [
			"https://i.nuuls.com/uauuh.mp3",
			"https://i.nuuls.com/-eWkR.mp3",
			"https://i.nuuls.com/zhBJa.mp3",
			"https://i.nuuls.com/lZJFs.mp3",
			"https://i.nuuls.com/7T4GV.mp3",
			"https://i.nuuls.com/M8x51.mp3",
			"https://i.nuuls.com/2m84F.mp3",
			"https://i.nuuls.com/gkNoI.mp3",
			"https://i.nuuls.com/kpM9K.mp3",
			"https://i.nuuls.com/T-7aa.mp3",
			"https://i.nuuls.com/5tE8O.mp3",
			"https://i.nuuls.com/4LvIH.mp3",
			"https://i.nuuls.com/8sSBJ.mp3",
			"https://i.nuuls.com/crmcE.mp3",
			"https://i.nuuls.com/SoWL9.mp3",
			"https://i.nuuls.com/sq0eK.mp3",
			"https://i.nuuls.com/uLmT_.mp3",
			"https://i.nuuls.com/dfJYU.mp3",
			"https://i.nuuls.com/o_4lB.mp3",
			"https://i.nuuls.com/h6M9w.mp3",
		];

		this.earrapeGachi = [
			"https://i.nuuls.com/GOZz9.mp3",
			"https://i.nuuls.com/rpiH6.mp3",
			"https://i.nuuls.com/YHmGh.mp3",
			"https://i.nuuls.com/5_jJ-.mp3",
			"https://i.nuuls.com/615MW.mp3",
			"https://i.nuuls.com/mMxTw.mp3",
			"https://i.nuuls.com/CE6HX.mp3",
			"https://i.nuuls.com/s7NJv.mp3",
			"https://i.nuuls.com/7HH5g.mp3",
			"https://i.nuuls.com/5Am05.mp3",
		];

		this.audioPlayer = new Audio();
		this.audioContext = new AudioContext();
		this.play.bind(this);
	}

	render() {
		return (
			<div className="app">
				<Button className="main-button" flat primary swapTheming onClick={() => this.play(this.randomShortGachi)}>Short Gachi</Button>
				<Button className="main-button" flat primary swapTheming onClick={() => this.play(this.randomLongGachi)}>Long Gachi</Button>
				<Button className="main-button" flat primary swapTheming onClick={() => this.play(this.randomEarrapeGachi)}>Earrape Gachi</Button>
				<Button className="main-button danger" flat onClick={() => this.audioPlayer.pause()}>Stop</Button>
				<SelectionControl
					id="autoplay"
					name="autoplay"
					type="switch"
					label="Autoplay"
					onChange={(checked) => this.setState({...this.state, autoplay: checked})}
				/>
				<br />
				<Button flat primary onClick={this.toggleSoundboard.bind(this)}>{this.state.soundboardHidden ? "Show" : "Hide"} Soundboard</Button>
				<br />
				{Object.keys(this.soundboard).map((objectKey) =>
					<Button key={objectKey} className="soundboard-button" hidden={this.state.soundboardHidden} flat secondary swapTheming onClick={() => this.playSimple(this.soundboard[objectKey])}>{objectKey}</Button>
				)}
				<img id="center-image" src="https://i.nuuls.com/ifQQQ.png" />
				<Slider
					rightIcon={<FontIcon>volume_up</FontIcon>}
					className="volume"
					min={0}
					max={100}
					step={1}
					onChange={this.volumeChange.bind(this)}
					value={this.state.volume}
				/>
				<canvas id="canvas"></canvas>
			</div>
		);
	}

	randomShortGachi() {
		return this.shortGachi[Math.floor(Math.random() * this.shortGachi.length)];
	}

	randomLongGachi() {
		return this.longGachi[Math.floor(Math.random() * this.longGachi.length)];
	}

	randomEarrapeGachi() {
		return this.earrapeGachi[Math.floor(Math.random() * this.earrapeGachi.length)];
	}

	toggleSoundboard() {
		this.setState({
			...this.state,
			soundboardHidden: !this.state.soundboardHidden
		});
	}

	volumeChange(value) {
		this.setState({
			...this.state,
			volume: value,
		});
		this.setCookie("volume", value, 365);
		this.audioPlayer.volume = this.state.volume / 100;
	}

	getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return null;
	}

	setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	playSimple(url) {
		const audioPlayer = new Audio(url);
		audioPlayer.crossOrigin = "anonymous";
		audioPlayer.load();
		audioPlayer.volume = this.state.volume / 100;

		audioPlayer.play();
	}

	play(randomFunc) {
		this.audioPlayer.pause();
		this.audioPlayer = new Audio(randomFunc.call(this));
		this.audioPlayer.crossOrigin = "anonymous";
		this.audioPlayer.load();
		this.audioPlayer.volume = this.state.volume / 100;
		this.audioPlayer.onended = () => this.handleEnd(randomFunc);

		// Credit: https://codepen.io/nfj525/pen/rVBaab
		var src = this.audioContext.createMediaElementSource(this.audioPlayer);
		var analyser = this.audioContext.createAnalyser();

		var canvas = document.getElementById("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext("2d");
		var centerImage = document.getElementById("center-image");

		src.connect(analyser);
		analyser.connect(this.audioContext.destination);

		analyser.fftSize = 256;

		var bufferLength = analyser.frequencyBinCount;

		var dataArray = new Uint8Array(bufferLength);

		var WIDTH = canvas.width;
		var HEIGHT = canvas.height;

		var barWidth = (WIDTH / bufferLength) * 2.5;
		var barHeight;
		var x = 0;
		var b = Math.floor(Math.random() * Math.floor(255));

		function renderFrame() {
			x = 0;

			analyser.getByteFrequencyData(dataArray);

			ctx.fillStyle = "#212121";
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			for (var i = 0; i < bufferLength; i++) {
				barHeight = dataArray[i];


				var r = barHeight + (25 * (i / bufferLength));
				var g = 250 * (i / bufferLength);

				ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
				ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);


				x += barWidth + 1;
			}

			var sum = 0;
			dataArray.map((value) => {
				sum += value;
			});

			var avg = sum / dataArray.length;

			centerImage.style.transform = `scale(${avg / 100})`

			requestAnimationFrame(renderFrame);
		}

		this.audioPlayer.play();
		requestAnimationFrame(renderFrame);
	}

	handleEnd(randomFunc) {
		if (this.state.autoplay) {
			this.play(randomFunc)
		}
	}
}