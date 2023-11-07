const tg = window.Telegram.WebApp;

export default function useTelegram() {
	tg.ready();
	tg.expand();
	console.log(tg);
	console.log(tg.themeParams.bg_color);
	tg.setBackgroundColor(tg.bg_color);
	return tg;
}
