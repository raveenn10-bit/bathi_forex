import { ACADEMY_CONFIG } from "@/data/academy";

/**
 * Validates international phone number string format:
 * Must be digits only (e.g. "94771234567") and between 8 and 15 digits.
 */
export function isValidInternationalPhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[^0-9]/g, "");
  return cleaned.length >= 8 && cleaned.length <= 15;
}

/**
 * Returns formatted wa.me URL for course enrollment.
 * Format: "Hello Apex Trading Academy, I am interested in the [COURSE NAME] course priced at LKR [PRICE]. Please send me the enrollment details."
 */
export function getCourseEnrollmentWhatsAppUrl(
  courseName: string,
  priceLKR: number
): { url: string; isConfigured: boolean } {
  const phone = ACADEMY_CONFIG.whatsappNumber?.replace(/[^0-9]/g, "");
  const isConfigured = isValidInternationalPhone(phone);

  const formattedPrice = new Intl.NumberFormat("en-LK").format(priceLKR);
  const message = `Hello Apex Trading Academy, I am interested in the ${courseName} course priced at LKR ${formattedPrice}. Please send me the enrollment details.`;
  const encodedMessage = encodeURIComponent(message);

  if (!isConfigured) {
    // If phone number is not configured or placeholder, return fallback URL or empty
    return {
      url: `https://wa.me/?text=${encodedMessage}`,
      isConfigured: false,
    };
  }

  return {
    url: `https://wa.me/${phone}?text=${encodedMessage}`,
    isConfigured: true,
  };
}

/**
 * Returns general academy inquiry WhatsApp URL.
 */
export function getGeneralInquiryWhatsAppUrl(customNote?: string): {
  url: string;
  isConfigured: boolean;
} {
  const phone = ACADEMY_CONFIG.whatsappNumber?.replace(/[^0-9]/g, "");
  const isConfigured = isValidInternationalPhone(phone);

  const message =
    customNote ||
    `Hello Apex Trading Academy, I would like to inquire about your trading academy courses and enrollment process.`;
  const encodedMessage = encodeURIComponent(message);

  if (!isConfigured) {
    return {
      url: `https://wa.me/?text=${encodedMessage}`,
      isConfigured: false,
    };
  }

  return {
    url: `https://wa.me/${phone}?text=${encodedMessage}`,
    isConfigured: true,
  };
}
