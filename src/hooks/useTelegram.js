const tg = window.Telegram.WebApp;

export default function useTelegram() {
	tg.ready();
	tg.expand();
	window.Telegram.WebApp.MainButton.show();
	console.log(tg);
	console.log(tg.themeParams.bg_color);
	tg.setBackgroundColor(tg.bg_color);

	return {
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsafe?.query_id,
		tg,
	};
}
