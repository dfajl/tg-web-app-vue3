const tg = window.Telegram.WebApp;

export default function useTelegram() {
	tg.ready();
	console.log(tg);
	console.log(tg.themeParams.bg_color);
}
