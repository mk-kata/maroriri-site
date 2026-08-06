/**
 * All fields below are legally load-bearing and must not be guessed.
 * Every value is `undefined` until the operator supplies the real
 * one. Pages that render these must show "確定次第掲載します" in
 * place of a missing value, never a placeholder that looks real.
 */
export const legal = {
	businessName: undefined as string | undefined,
	operatorName: "片山 まゆみ",
	address: undefined as string | undefined,
	phone: undefined as string | undefined,
	email: undefined as string | undefined,
	paymentMethods: undefined as string | undefined,
	billingTiming: undefined as string | undefined,
	cancellationPolicy: undefined as string | undefined,
	refundPolicy: undefined as string | undefined,
	withdrawalPolicy: undefined as string | undefined,
	operatingEnvironment: undefined as string | undefined,
};
