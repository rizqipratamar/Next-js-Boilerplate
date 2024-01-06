import { type ClassValue, clsx } from 'clsx';
import type { LocalePrefix } from 'next-intl/dist/types/src/shared/types';
import { twMerge } from 'tailwind-merge';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
