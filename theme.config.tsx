import React from 'react';
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { Thumbnail, Author } from './components';

const config: DocsThemeConfig = {
  toc: {
    title: '목차',
  },
  editLink: {
    component: () => null,
  },
  feedback: {
    content: null,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div className='flex items-center gap-2 text-neutral-400 dark:text-neutral-500 font-normal'>
            {title}
            <div className='h-0 flex-1 border-t-[0.5px] border-neutral-500' />
          </div>
        );
      }
      return <>{title}</>;
    },
  },
  search: {
    placeholder: '검색...',
  },
  navigation: false,
  logo: (
    <div className='flex items-center gap-2'>
      <img
        src='/icons/logo_black.png'
        alt='프로필 이미지'
        className='w-5 h-5 object-cover dark:hidden'
      />
      <img
        src='/icons/logo_white.png'
        alt='프로필 이미지'
        className='hidden w-5 h-5 object-cover dark:block'
      />
      <h2 className='font-bold text-xl'>이호연 기술 블로그</h2>
    </div>
  ),
  project: {
    link: 'https://github.com/ho991217',
  },
  chat: {
    link: 'https://ho991217.notion.site/2024-56322d3440ce493692b68393fc933de7?pvs=4',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 100 100'
        fill='none'
      >
        <title>Chat</title>
        <path
          d='M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z'
          fill='#fff'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z'
          fill='#000'
        />
      </svg>
    ),
  },
  docsRepositoryBase: 'https://github.com/ho991217',
  footer: {
    text: '2024 © 이호연 All rights reserved.',
  },
  main: ({ children }) => {
    const { frontMatter } = useConfig();
    return (
      <>
        {frontMatter?.title && (
          <h1 className='nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100'>
            {frontMatter.title}
          </h1>
        )}
        {frontMatter?.date && <Author date={frontMatter.date} />}
        {frontMatter?.image && <Thumbnail src={frontMatter.image} />}
        {children}
      </>
    );
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - 이호연',
    };
  },
  head: () => {
    const { route } = useRouter();
    const { frontMatter, title } = useConfig();
    const imageUrl = new URL('https://ho991217.vercel.app');

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set('title', title || frontMatter.title);
    }

    const ogTitle = title
      ? `${title} – 이호연 기술 블로그`
      : '이호연 기술블로그';
    const ogDescription =
      frontMatter.description || '이호연 기술 블로그입니다.';
    const ogImage = frontMatter.image || '/images/og.png';

    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={ogDescription} />
        <meta name='og:type' content='website' />
        <meta name='twitter:image' content={ogImage} />
        <meta property='og:title' content={ogTitle} />
        <meta property='og:description' content={ogDescription} />
        <meta property='og:image' content={ogImage} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
      </>
    );
  },
};

export default config;
