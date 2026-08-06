/**
 * Site-wide values that are not yet finalized are left `undefined`
 * on purpose. Pages must render a visible "設定待ち" placeholder
 * instead of guessing a value — see LineContactBlock.astro.
 */
export const site = {
	name: "MARORIRI",
	// 正式ドメイン未確定
	domain: undefined as string | undefined,
	// 公式LINE URL未確定
	lineOfficialUrl: undefined as string | undefined,
	// 公式LINE QRコード画像未確定
	lineQrImage: undefined as string | undefined,
	// 連絡先メールアドレス未確定
	contactEmail: undefined as string | undefined,
	operatorNameEn: "MAYUMI KATAYAMA",
	operatorNameJa: "片山 まゆみ",
};
