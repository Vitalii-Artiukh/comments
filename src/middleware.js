import { NextResponse } from 'next/server';
import { LOCALS } from '@/app/lib/utils/constants';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Пропускаємо статичні файли
  if (PUBLIC_FILE.test(pathname)) return;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${LOCALS.EN}/posts`, request.url));
  }

  // Перевіряємо чи URL вже містить локаль
  if (
    pathname.startsWith(`/${LOCALS.EN}/`) ||
    pathname.startsWith(`/${LOCALS.UK}/`) ||
    pathname === `/${LOCALS.EN}` ||
    pathname === `/${LOCALS.UK}`
  ) {
    return;
  }

  // Перенаправляємо на англійську версію за замовчуванням
  return NextResponse.redirect(
    new URL(`/${LOCALS.EN}${pathname}`, request.url)
  );
}

export const config = {
  matcher:
    // Пропускаємо всі внутрішні Next.js роути
    ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
